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
// the backdrop's own scroll motion, shared so the release camera can compose with it:
// a slow rise (ty, px) and the push into the nebula (s)
function backdropBase() {
  const y = window.scrollY;
  const H = window.innerHeight;
  const max = document.documentElement.scrollHeight - H;
  const p = max > 0 ? Math.min(1, y / max) : 0;
  const hp = Math.min(1, y / H);
  return { ty: -p * 0.06 * 1.08 * H, s: 1.1 + hp * 0.28 + p * 0.22, hp };
}

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
      // leaving the hero flies into the nebula: the image pushes in while the
      // hero's type lifts away; after that only the slow drift remains. The
      // release camera, when it runs, adds its pan and zoom through --cam-*
      const { ty, s, hp } = backdropBase();
      if (motionOk) {
        img.style.transform = `translate3d(var(--cam-x, 0px), calc(${ty.toFixed(1)}px + var(--cam-y, 0px)), 0) scale(calc(${s.toFixed(3)} * var(--cam-z, 1)))`;
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
    const els = Array.from(document.querySelectorAll<HTMLElement>(".release, .record"));
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
// observation targets on the Cosmic Cliffs, as fractions of the backdrop frame
const TARGETS: [number, number][] = [
  [0.26, 0.38],
  [0.42, 0.3],
  [0.56, 0.42],
  [0.74, 0.3],
  [0.68, 0.56],
  [0.48, 0.6],
  [0.32, 0.56],
  [0.6, 0.24],
];

const DEPTH_QUERY = "(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";

export function Depth({
  items,
  children,
}: {
  items: { name: string; type: string; line: string }[];
  children: React.ReactNode;
}) {
  const count = items.length;
  const live = useMediaQuery(DEPTH_QUERY);
  const stageRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLOListElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const noRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    const cam = document.querySelector<HTMLElement>(".backdrop-img");
    if (!live || !stage || !svg || !cam) return;
    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".release"));
    const route = svg.querySelector<SVGPolylineElement>(".route")!;
    const trail = svg.querySelector<SVGPolylineElement>(".trail")!;
    const marks = Array.from(svg.querySelectorAll<SVGGElement>(".mark"));
    const beam = svg.querySelector<SVGLineElement>(".beam")!;
    const pulse = stage.querySelector<HTMLElement>(".pulse")!;
    const halo = stage.querySelector<HTMLElement>(".halo")!;
    stage.classList.add("is-live");
    cards.forEach((c) => {
      c.classList.remove("develop");
      c.classList.add("seen");
    });
    let raf = 0;
    let fired = -1;
    let W = 0;
    let H = 0;
    let rMax = 0;
    const per = 0.9; // viewports of scroll per release
    const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
    const smooth = (x: number) => {
      const t = Math.min(1, Math.max(0, x));
      return t * t * (3 - 2 * t);
    };
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    const HEX = [
      [0, -1],
      [0.866, -0.5],
      [0.866, 0.5],
      [0, 1],
      [-0.866, 0.5],
      [-0.866, -0.5],
    ];

    const size = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      stage.style.height = `${H * (1 + (count - 1) * per)}px`;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      const fr = stage.querySelector<HTMLElement>(".frame");
      // the aperture's inradius must reach the plate's corners
      rMax = fr ? Math.hypot(fr.offsetWidth, fr.offsetHeight) / 2 / 0.866 : 0;
    };

    // where the camera parks each target on screen: left of the panel, above the caption
    const AIM = [0.36, 0.42];
    const Z = 1.2;
    // the camera for target i at zoom z, clamped so the image still covers the screen
    const aimAt = (i: number, z: number, b: { ty: number; s: number }) => {
      const [qx, qy] = TARGETS[i % TARGETS.length];
      const S = b.s * z;
      const cx = AIM[0] * W - W / 2 - S * (qx - 0.5) * 1.08 * W;
      const cy = AIM[1] * H - H / 2 - b.ty - S * (qy - 0.5) * 1.08 * H;
      return [clamp(cx, ((S * 1.08 - 1) * W) / 2), clamp(cy + b.ty, ((S * 1.08 - 1) * H) / 2) - b.ty];
    };

    const fire = (n: number, from: number[], to: number[]) => {
      pulse.animate(
        [
          { transform: `translate(${from[0]}px, ${from[1]}px)`, opacity: 1 },
          { transform: `translate(${to[0]}px, ${to[1]}px)`, opacity: 1, offset: 0.85 },
          { transform: `translate(${to[0]}px, ${to[1]}px)`, opacity: 0 },
        ],
        { duration: 700, easing: "cubic-bezier(0.55, 0, 0.3, 1)", fill: "forwards" },
      );
      halo.classList.remove("go");
      void halo.offsetWidth; // restart the rings
      halo.classList.add("go");
      navRef.current?.querySelectorAll("li").forEach((li, i) => {
        li.dataset.active = String(i === n);
      });
      // the arriving release plays its figure again
      cards.forEach((c, i) => c.classList.toggle("is-on", i === n));
      capRef.current?.querySelectorAll<HTMLElement>(".cap").forEach((c, i) => {
        c.dataset.active = String(i === n);
      });
      if (noRef.current) noRef.current.textContent = `${String(n + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
    };

    const update = () => {
      raf = 0;
      // every read happens here, before any write, so the frame never forces layout
      const box = stage.getBoundingClientRect();
      const span = stage.offsetHeight - H;
      const p = span > 0 ? Math.min(1, Math.max(0, -box.top / span)) : 0;
      const f = p * (count - 1);
      const n = Math.min(count - 1, Math.round(f));
      const pr = cards[n]?.querySelector<HTMLElement>(".frame")?.getBoundingClientRect();
      const b = backdropBase();

      // camera: hold on a target, then travel, pulling back a little mid-flight
      const a0 = Math.min(count - 1, Math.floor(f));
      const a1 = Math.min(count - 1, a0 + 1);
      const w = smooth((f - a0 - 0.2) / 0.6);
      const z = Z - 0.14 * Math.sin(Math.PI * w);
      const c0 = aimAt(a0, z, b);
      const c1 = aimAt(a1, z, b);
      // ease the camera in as the stage arrives and out as it leaves
      const e = smooth(Math.min(1 - box.top / H, 1 + (box.bottom - H) / H));
      const cx = (c0[0] + (c1[0] - c0[0]) * w) * e;
      const cy = (c0[1] + (c1[1] - c0[1]) * w) * e;
      const cz = 1 + (z - 1) * e;
      cam.style.setProperty("--cam-x", `${cx.toFixed(1)}px`);
      cam.style.setProperty("--cam-y", `${cy.toFixed(1)}px`);
      cam.style.setProperty("--cam-z", cz.toFixed(4));
      barRef.current?.style.setProperty("transform", `scaleX(${p.toFixed(4)})`);

      // the chart: every target where it sits on the nebula right now
      const S = b.s * cz;
      const pts = items.map((_, i) => {
        const [qx, qy] = TARGETS[i % TARGETS.length];
        return [W / 2 + cx + S * (qx - 0.5) * 1.08 * W, H / 2 + b.ty + cy + S * (qy - 0.5) * 1.08 * H];
      });
      route.setAttribute("points", pts.map((q) => q.join(",")).join(" "));
      // the part of the route already observed, drawn up to the camera
      const done = pts.slice(0, a0 + 1);
      if (a1 > a0) done.push([pts[a0][0] + (pts[a1][0] - pts[a0][0]) * w, pts[a0][1] + (pts[a1][1] - pts[a0][1]) * w]);
      trail.setAttribute("points", done.map((q) => q.join(",")).join(" "));
      marks.forEach((m, i) => {
        m.setAttribute("transform", `translate(${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)})`);
        m.dataset.state = i === n ? "on" : i < n ? "seen" : "";
      });
      halo.style.transform = `translate3d(${pts[n][0].toFixed(1)}px, ${pts[n][1].toFixed(1)}px, 0)`;

      // the panel: one release at a time, its plate opening through the aperture
      cards.forEach((c, i) => {
        const t = i - f;
        let o = 1;
        let y = 0;
        let ap = 1;
        if (t > 0.15) {
          const k = Math.min(1, (t - 0.15) / 0.4);
          o = Math.min(1, (1 - k) * 2.5);
          y = ease(k) * 24;
          ap = 1 - k;
        } else if (t < -0.15) {
          const k = Math.min(1, (-t - 0.15) / 0.2);
          o = 1 - k;
          y = -ease(k) * 16;
        }
        c.style.transform = `translate3d(0, calc(-50% + ${y.toFixed(1)}px), 0)`;
        c.style.opacity = o.toFixed(3);
        const vis = o < 0.01 ? "hidden" : "visible";
        const v = c.querySelector("video");
        if (v && vis === "hidden") v.pause();
        else if (v && c.style.visibility === "hidden" && v.dataset.userPaused !== "true") v.play().catch(() => {});
        c.style.visibility = vis;
        c.style.pointerEvents = Math.abs(t) < 0.5 ? "auto" : "none";
        const media = c.querySelector<HTMLElement>(".frame-media");
        if (media) {
          const r = rMax * ease(ap);
          media.style.clipPath =
            ap >= 1 ? "" : `polygon(${HEX.map(([hx, hy]) => `calc(50% + ${(hx * r).toFixed(1)}px) calc(50% + ${(hy * r).toFixed(1)}px)`).join(",")})`;
        }
        const ring = c.querySelector<SVGElement>(".aperture");
        if (ring) {
          const g = ap <= 0 || ap >= 1 ? 0 : ap < 0.1 ? ap / 0.1 : Math.max(0, 1 - (ap - 0.1) / 0.5);
          ring.style.opacity = g.toFixed(3);
          ring.style.transform = `translate(-50%, -50%) scale(${((rMax * ease(ap)) / 50).toFixed(3)})`;
        }
      });

      // the beam: from the target to the panel it describes
      const to = pr ? [pr.left - 10, pr.top + pr.height / 2] : pts[n];
      beam.setAttribute("x1", pts[n][0].toFixed(1));
      beam.setAttribute("y1", pts[n][1].toFixed(1));
      beam.setAttribute("x2", to[0].toFixed(1));
      beam.setAttribute("y2", to[1].toFixed(1));
      if (n !== fired) {
        fired = n;
        fire(n, pts[n], to);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      size();
      update();
    };
    const goTo = (i: number, smoothly: boolean) => {
      const span = stage.offsetHeight - H;
      const top = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (i / Math.max(1, count - 1)) * span, behavior: smoothly ? "smooth" : "auto" });
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

    // pinned panels always intersect, so a loop's own observer never stops
    // them; one that starts (or lazily autoplays) behind a hidden panel stops here
    const onPlay = (e: Event) => {
      const v = e.target as HTMLVideoElement;
      if (v.closest<HTMLElement>(".release")?.style.visibility === "hidden") v.pause();
    };

    size();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    stage.addEventListener("play", onPlay, true);
    stage.addEventListener("focusin", onFocus);
    document.addEventListener("click", onIndex);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      stage.removeEventListener("play", onPlay, true);
      stage.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", onIndex);
      cancelAnimationFrame(raf);
      stage.classList.remove("is-live");
      stage.style.height = "";
      ["--cam-x", "--cam-y", "--cam-z"].forEach((v) => cam.style.removeProperty(v));
      cards.forEach((c) => {
        c.style.transform = c.style.opacity = c.style.visibility = c.style.pointerEvents = "";
        c.classList.remove("is-on");
        const media = c.querySelector<HTMLElement>(".frame-media");
        if (media) media.style.clipPath = "";
      });
    };
  }, [live, count, items]);

  return (
    <div ref={stageRef} className="depth">
      <div className="depth-pin">
        {/* the chart: targets on the nebula, the route between them, the beam to the panel */}
        <svg ref={svgRef} className="chart" aria-hidden="true">
          <polyline className="route" />
          <polyline className="trail" />
          <line className="beam" />
          {items.map((it, i) => (
            <g key={it.name} className="mark">
              <circle r="3" />
              <path d="M-11 0h5M6 0h5M0 -11v5M0 6v5" />
              <text x="12" y="-10">
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          ))}
        </svg>
        {/* the target answers, and one pulse runs down the beam: composited layers, not SVG repaints */}
        <div className="halo" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <i className="pulse" aria-hidden="true" />
        <div className="wrap depth-console">
          {/* the chrome strip: what this is, and where you are in it */}
          <p className="depth-chrome" aria-hidden="true">
            <span>The work</span>
            <span ref={noRef}>01 / {String(count).padStart(2, "0")}</span>
          </p>
          <div className="depth-field">{children}</div>
          {/* one sentence per release, as a narrator would say it */}
          <div ref={capRef} className="depth-caps" aria-hidden="true">
            {items.map((it, i) => (
              <div key={it.name} className="cap" data-active={i === 0 ? "true" : "false"}>
                <p className="cap-over">{it.type}</p>
                <p className="cap-line">{it.line}</p>
              </div>
            ))}
          </div>
          {/* the stepper: where you are, and a jump to any release */}
          <nav className="depth-nav" aria-label="Releases">
            <ol ref={navRef}>
              {items.map((it, i) => (
                <li key={it.name} data-active={i === 0 ? "true" : "false"}>
                  <a href={`#release-${String(i + 1).padStart(2, "0")}`}>
                    <span className="no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="nm">{it.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <i ref={barRef} className="depth-bar" aria-hidden="true" />
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
