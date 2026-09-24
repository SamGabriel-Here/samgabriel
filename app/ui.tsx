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
  control = true,
  controlSlot,
}: {
  src: string; // path without extension; .mp4 and .webp sit side by side
  label: string;
  eager?: boolean;
  control?: boolean;
  controlSlot?: string; // id of an element elsewhere that should hold the pause control
}) {
  const motionOk = useMotionOk();
  const light = useLightConnection();
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
        src={load ? `${src}.mp4` : undefined}
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
      <span className="sr-only">{label}</span>
      {control && load && <Transport slot={controlSlot} playing={playing} label={label} onToggle={toggle} />}
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
 *  Header                                                             *
 * ------------------------------------------------------------------ */

const NAV = [
  { id: "work", label: "Work", small: true },
  { id: "about", label: "About", small: false },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // clear over the plate, solid once the plate's type is behind it
      setSolid(window.scrollY > window.innerHeight * 0.6);
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
    <header className="bar" data-solid={solid}>
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
    return () => {
      io.disconnect();
      els.forEach((el) => el.classList.remove("develop", "seen"));
    };
  }, [motionOk]);
  return null;
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
  const statusRef = useRef<HTMLDivElement>(null);

  /* No backend: the form hands a drafted email to the visitor's mail app. It
     cannot know whether one opened, so it says so and offers the address. */
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
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
