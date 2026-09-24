"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

/* ------------------------------------------------------------------ *
 *  Live media queries                                                 *
 * ------------------------------------------------------------------ */

/* An external store rather than setState in an effect, so the value tracks
   the setting if the visitor changes it mid-visit. The server takes the
   conservative branch. */
function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const useMotionOk = () => useMediaQuery("(prefers-reduced-motion: no-preference)");

/* Data saver on, or a 2G/3G estimate: the loops are atmosphere and the posters
   already carry the frame, so those visitors keep their bandwidth. */
type NetInfo = EventTarget & { saveData?: boolean; effectiveType?: string };
const netInfo = () => (navigator as Navigator & { connection?: NetInfo }).connection;
function subscribeConnection(onChange: () => void) {
  const c = netInfo();
  c?.addEventListener("change", onChange);
  return () => c?.removeEventListener("change", onChange);
}
function useLightConnection() {
  return useSyncExternalStore(
    subscribeConnection,
    () => {
      const c = netInfo();
      return Boolean(c?.saveData) || /(^|-)[23]g$/.test(c?.effectiveType ?? "");
    },
    () => true,
  );
}

/* ------------------------------------------------------------------ *
 *  Loop: a poster that becomes a video only when it is worth it       *
 * ------------------------------------------------------------------ */

/* The poster is the frame until motion is welcome, the connection can carry
   it, and the loop is actually on screen (the hero is on screen at load).
   Every loop that plays beside text gets a pause control (WCAG 2.2.2). */
export function Loop({
  src,
  label,
  eager = false,
  controlSlot,
  small,
  decorative = false,
}: {
  src: string; // path without extension; .mp4 and .webp sit side by side
  small?: string; // a narrower .mp4 for phones, same poster
  decorative?: boolean; // atmosphere only: no description is read out
  label: string;
  eager?: boolean;
  controlSlot?: string; // id of an element elsewhere that should hold the pause control
}) {
  const motionOk = useMotionOk();
  const light = useLightConnection();
  // decided before any request is made: a phone never fetches the wide file
  const narrow = useMediaQuery("(max-width: 767px)");
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(eager);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (eager || !v) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [eager]);

  const load = motionOk && !light && near;

  // off screen, a loop has no reason to keep decoding. Keyed on `load` too:
  // the video element remounts when it switches on, and this must watch the new one.
  useEffect(() => {
    const v = ref.current;
    if (!v || !load) return;
    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (!e.isIntersecting) v.pause();
        else if (v.dataset.userPaused !== "true") v.play().catch(() => {});
      }
    });
    io.observe(v);
    return () => io.disconnect();
  }, [load]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.dataset.userPaused = "false";
      v.play().catch(() => {});
    } else {
      v.dataset.userPaused = "true";
      v.pause();
    }
  };

  return (
    <>
      <video
        key={load ? "on" : "off"}
        ref={ref}
        src={load ? `${narrow && small ? small : src}.mp4` : undefined}
        poster={`${src}.webp`}
        autoPlay={load}
        loop
        muted
        playsInline
        preload={load ? "auto" : "none"}
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!decorative && <span className="sr-only">{label}</span>}
      {load && <Transport slot={controlSlot} playing={playing} label={label} onToggle={toggle} />}
    </>
  );
}

/* The pause control. It normally sits on its own frame; the hero hands it to
   the credit block instead, where transport controls belong. The slot is only
   read once the video is on (never during hydration), so server and client
   markup always agree. */
function Transport({
  slot,
  playing,
  label,
  onToggle,
}: {
  slot?: string;
  playing: boolean;
  label: string;
  onToggle: () => void;
}) {
  const button = (
    <button type="button" className="playback" onClick={onToggle} aria-label={`${playing ? "Pause" : "Play"}: ${label}`}>
      {playing ? "Pause" : "Play"}
    </button>
  );
  const host = slot ? document.getElementById(slot) : null;
  return host ? createPortal(button, host) : button;
}

/* ------------------------------------------------------------------ *
 *  Backdrop: the opening image, carried through the whole page       *
 * ------------------------------------------------------------------ */

/* The opening loop is the page's backdrop. It plays full-strength behind the
   hero, then keeps playing fixed behind every section under a veil dark
   enough for text, drifting a little as the page scrolls. One video for the
   whole page; the hero's
   pause control governs it; reduced motion and light connections get the
   poster, held still. One transform and one opacity write per frame. */
export function Backdrop() {
  const motionOk = useMotionOk();
  const imgRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const veil = veilRef.current;
    if (!img || !veil) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, y / max) : 0;
      // leaving the hero flies into the nebula: the image pushes in while the
      // hero's type lifts away; after that only the slow drift remains
      const hp = Math.min(1, y / window.innerHeight);
      if (motionOk) {
        img.style.transform = `translate3d(0, ${(-p * 6).toFixed(2)}%, 0) scale(${(1.1 + hp * 0.28 + p * 0.22).toFixed(3)})`;
        document.documentElement.style.setProperty("--hp", hp.toFixed(3));
      } else {
        document.documentElement.style.removeProperty("--hp");
      }
      // clear over the hero, closing as its type leaves, then held: text over a
      // moving image needs a constant floor (measured: dim text >= 4.5:1)
      const enter = Math.min(1, y / (window.innerHeight * 0.85));
      veil.style.opacity = (0.84 * enter).toFixed(3);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [motionOk]);

  return (
    <div className="backdrop">
      <div ref={imgRef} className="backdrop-img exposing">
        <Loop
          src="/cosmos/cosmic-cliffs"
          small="/cosmos/cosmic-cliffs-sm"
          decorative
          label="The Cosmic Cliffs of the Carina Nebula, a 3D flight through the James Webb Space Telescope image"
          eager
          controlSlot="hero-transport"
        />
      </div>
      <div ref={veilRef} className="backdrop-veil" aria-hidden="true" />
    </div>
  );
}

/* ------------------------------------------------------------------ *
 *  Header                                                             *
 * ------------------------------------------------------------------ */

const NAV = [
  { id: "work", label: "Work", small: true },
  { id: "about", label: "About", small: false },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = window.scrollY;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      // clear over the plate, solid once the plate's type is behind it
      setSolid(y > window.innerHeight * 0.6);
      // tuck away while reading down, come back on any move up
      if (Math.abs(y - last) > 6 && barRef.current) {
        barRef.current.dataset.hidden = y > last && y > window.innerHeight ? "true" : "false";
        last = y;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["work", "about", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      ref={barRef}
      className="bar"
      data-solid={solid}
      data-hidden="false"
      onFocusCapture={() => {
        if (barRef.current) barRef.current.dataset.hidden = "false";
      }}
    >
      <div className="wrap bar-in">
        <a href="#top" className="bar-name">
          Sam Gabriel
        </a>
        <nav aria-label="Sections">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`bar-link${n.small ? "" : " hide-sm"}`}
              aria-current={active === n.id ? "true" : undefined}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="bar-cta" aria-current={active === "contact" ? "true" : undefined}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ *
 *  Develop: releases come up out of the dark as they reach the eye    *
 * ------------------------------------------------------------------ */

/* Content is visible by default. Only once script is running and motion is
   welcome does a release get the `develop` class, so nothing can be stranded
   invisible by a missing observer. */
export function Develop() {
  const motionOk = useMotionOk();
  useEffect(() => {
    if (!motionOk) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".release"));
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (e.isIntersecting) {
            e.target.classList.add("seen");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    for (const el of els) {
      // anything already on screen is simply shown
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) continue;
      el.classList.add("develop");
      io.observe(el);
    }
    // arriving from the index: once the scroll settles, replay the lock on the
    // plate that was chosen, so the eye knows where it landed
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onIndex = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(".index a, .depth-nav a");
      const frame = a ? document.querySelector<HTMLElement>(`${a.hash} .frame`) : null;
      if (!frame) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        frame.classList.remove("lock");
        void frame.offsetWidth; // restart the animation if it just ran
        frame.classList.add("lock");
      }, 650);
    };
    document.addEventListener("click", onIndex);
    return () => {
      io.disconnect();
      document.removeEventListener("click", onIndex);
      clearTimeout(timer);
      els.forEach((el) => el.classList.remove("develop", "seen"));
    };
  }, [motionOk]);
  return null;
}

/* ------------------------------------------------------------------ *
 *  Index preview: hovering a name shows its plate beside the list    *
 * ------------------------------------------------------------------ */

/* One small plate that glides to whichever row is under the pointer and shows
   that project's still. Fine pointers only; phones go straight to the plates.
   Decorative: the rows themselves are the links and carry the names. */
export function IndexPreview() {
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const ref = useRef<HTMLDivElement>(null);
  // no <img> until a row has named a real still
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const box = ref.current;
    const wrap = box?.parentElement;
    if (!fine || !box || !wrap) return;
    const show = (e: Event) => {
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(".index a");
      if (!a || !a.dataset.preview) return;
      setSrc(a.dataset.preview);
      // centre the plate on the row, kept inside the list
      const y = a.offsetTop + a.offsetHeight / 2 - box.offsetHeight / 2;
      const max = wrap.offsetHeight - box.offsetHeight;
      box.style.setProperty("--y", `${Math.max(0, Math.min(max, y))}px`);
      box.dataset.on = "true";
    };
    const hide = () => {
      box.dataset.on = "false";
    };
    wrap.addEventListener("pointerover", show);
    wrap.addEventListener("focusin", show);
    wrap.addEventListener("pointerleave", hide);
    wrap.addEventListener("focusout", hide);
    return () => {
      wrap.removeEventListener("pointerover", show);
      wrap.removeEventListener("focusin", show);
      wrap.removeEventListener("pointerleave", hide);
      wrap.removeEventListener("focusout", hide);
    };
  }, [fine]);

  if (!fine) return null;
  return (
    <div ref={ref} className="index-preview" data-on="false" aria-hidden="true">
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" decoding="async" />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 *  Depth: the releases approach out of the nebula, one at a time      *
 * ------------------------------------------------------------------ */

/* The hero starts a flight into the Cosmic Cliffs; this continues it. On wide,
   tall screens with motion welcome, the releases share one pinned stage. Each
   waits deep in the image (small, faint), comes forward into focus as the page
   scrolls, then streams past the camera while the next one arrives. Every
   release stays in the DOM and in tab order; focus and index clicks scroll the
   page to it. Everyone else keeps the plain list. Transform and opacity only. */
const DEPTH_QUERY = "(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";

export function Depth({
  items,
  children,
}: {
  items: { name: string; type: string }[];
  children: React.ReactNode;
}) {
  const count = items.length;
  const live = useMediaQuery(DEPTH_QUERY);
  const stageRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);
  const navRef = useRef<HTMLOListElement>(null);
  const spikeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!live || !stage) return;
    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".release"));
    stage.classList.add("is-live");
    // the scan reveal belongs to the list; here the approach is the reveal
    cards.forEach((c) => {
      c.classList.remove("develop");
      c.classList.add("seen");
    });
    let raf = 0;
    let fired = -1;
    const per = 0.9; // viewports of scroll per release
    // the neuromorphic idea: nothing moves until there is something to say;
    // then one spike travels the path from the chosen entry to its release
    const fire = (n: number) => {
      const spike = spikeRef.current;
      const li = navRef.current?.querySelectorAll("li")[n];
      const field = stage.querySelector<HTMLElement>(".depth-field");
      const box = spike?.parentElement;
      if (!spike || !li || !field || !box) return;
      const b = box.getBoundingClientRect();
      const a = li.getBoundingClientRect();
      const x1 = a.right - b.left + 12;
      const x2 = field.getBoundingClientRect().left - b.left - 8;
      spike.style.setProperty("--x", `${x1}px`);
      spike.style.setProperty("--y", `${a.top + a.height / 2 - b.top}px`);
      spike.style.setProperty("--w", `${Math.max(0, x2 - x1)}px`);
      spike.classList.remove("go");
      void spike.offsetWidth; // restart
      spike.classList.add("go");
    };

    const size = () => {
      stage.style.height = `${window.innerHeight * (1 + (count - 1) * per)}px`;
    };
    const update = () => {
      raf = 0;
      const span = stage.offsetHeight - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -stage.getBoundingClientRect().top / span)) : 0;
      const f = p * (count - 1); // which release is in focus, continuously
      // one release at a time: the outgoing one pushes past the camera and is
      // gone before the next arrives out of the depths, so they never muddy
      const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
      cards.forEach((c, i) => {
        const t = i - f; // > 0 still ahead in the nebula, < 0 already passed
        let s = 1;
        let o = 1;
        if (t > 0.15) {
          // arriving: already visible at the midpoint, so the stage is never empty
          const k = Math.min(1, (t - 0.15) / 0.47);
          s = 1 - ease(k) * 0.22;
          o = 1 - k;
        } else if (t < -0.15) {
          // leaving: gone by the midpoint, so two releases never overlap
          const k = Math.min(1, (-t - 0.15) / 0.2);
          s = 1 + ease(k) * 0.16;
          o = 1 - k;
        }
        c.style.transform = `translate3d(0, -50%, 0) scale(${s.toFixed(4)})`;
        c.style.opacity = o.toFixed(3);
        c.style.visibility = o < 0.01 ? "hidden" : "visible";
        c.style.pointerEvents = Math.abs(t) < 0.5 ? "auto" : "none";
      });
      const n = Math.min(count - 1, Math.round(f));
      if (n !== fired) {
        fired = n;
        fire(n);
      }
      if (countRef.current) {
        countRef.current.textContent = `${String(n + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
      }
      navRef.current?.querySelectorAll("li").forEach((li, i) => {
        li.dataset.active = String(i === n);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      size();
      update();
    };
    const goTo = (i: number, smooth: boolean) => {
      const span = stage.offsetHeight - window.innerHeight;
      const top = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (i / Math.max(1, count - 1)) * span, behavior: smooth ? "smooth" : "auto" });
    };
    const onFocus = (e: FocusEvent) => {
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".release");
      if (card) goTo(cards.indexOf(card), false);
    };
    const onIndex = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(".index a, .depth-nav a");
      const card = a ? stage.querySelector<HTMLElement>(a.hash) : null;
      if (!card) return;
      e.preventDefault();
      goTo(cards.indexOf(card), true);
    };

    size();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    stage.addEventListener("focusin", onFocus);
    document.addEventListener("click", onIndex);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      stage.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", onIndex);
      cancelAnimationFrame(raf);
      stage.classList.remove("is-live");
      stage.style.height = "";
      cards.forEach((c) => {
        c.style.transform = c.style.opacity = c.style.visibility = c.style.pointerEvents = "";
      });
    };
  }, [live, count]);

  return (
    <div ref={stageRef} className="depth">
      <div className="depth-pin">
        <div className="wrap depth-console">
          {/* the target list: where you are, and a jump to any release */}
          <nav className="depth-nav" aria-label="Releases">
            <ol ref={navRef}>
              {items.map((it, i) => (
                <li key={it.name} data-active={i === 0 ? "true" : "false"}>
                  <a href={`#release-${String(i + 1).padStart(2, "0")}`}>
                    <span className="no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="nm">{it.name}</span>
                    <span className="ty">{it.type}</span>
                  </a>
                </li>
              ))}
            </ol>
            <p ref={countRef} className="depth-count" aria-hidden="true" />
          </nav>
          <div className="depth-field">{children}</div>
          <div ref={spikeRef} className="spike" aria-hidden="true">
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 *  Contact                                                            *
 * ------------------------------------------------------------------ */

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [missing, setMissing] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  /* No backend: the form hands a drafted email to the visitor's mail app. It
     cannot know whether one opened, so it says so and offers the address. */
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // `required` lets a field of spaces through; that would open an empty email
    const gap = !name.trim() ? "your name" : !message.trim() ? "a message" : null;
    setMissing(gap);
    if (gap) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    setSent(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopyFailed(true); // clipboard refused: point at the printed address instead
    }
  };

  return (
    <form onSubmit={submit}>
      <label className="field">
        <span>Your name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" maxLength={120} />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          maxLength={1500}
          placeholder="A role, a project, or a question about the work"
        />
      </label>
      <p className="form-note">This opens your email app with the message drafted, ready to send.</p>
      {missing && (
        <p className="form-error" role="alert">
          Add {missing} first, then open the draft.
        </p>
      )}
      <button type="submit" className="btn btn-solid" style={{ width: "100%", justifyContent: "center" }}>
        Open email draft
      </button>
      <div ref={statusRef} tabIndex={-1} aria-live="polite">
        {sent && (
          <div className="sent">
            Your email app should now show a drafted message. Nothing opened?{" "}
            <button type="button" className="tlink" style={{ paddingInline: 0 }} onClick={copy}>
              {copied ? "Address copied" : `Copy ${email}`}
            </button>
            {copyFailed && <> Copying was blocked; the address is listed beside the form.</>}
          </div>
        )}
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ *
 *  Footer clock                                                       *
 * ------------------------------------------------------------------ */

export function ClockIST() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    // labelled IST, so it is IST wherever the visitor's clock is set
    const f = () =>
      setT(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }));
    f();
    const id = setInterval(f, 15000);
    return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}
