import { ClockIST, ContactForm, Develop, Header, Loop } from "./ui";

/* ------------------------------------------------------------------ *
 *  Content                                                            *
 * ------------------------------------------------------------------ */

type Release = {
  name: string;
  type: string;
  date: string;
  blurb: string;
  stack: string[];
  source: string;
  live?: string;
  media: string; // path without extension (.webp still, plus .mp4 when `video`)
  video?: boolean;
  alt: string;
  figure?: { value: string; line: string };
};

const releases: Release[] = [
  {
    name: "nbodyssey",
    type: "N-body simulation",
    date: "Jul 2026",
    blurb: "A GPU galaxy-collision simulator built on a Barnes-Hut tree code.",
    figure: { value: "176×", line: "faster than brute force at one million particles on a single Tesla T4" },
    stack: ["CUDA C++", "C++17", "CMake"],
    source: "https://github.com/SamGabriel-Here/nbodyssey",
    media: "/nbodyssey",
    video: true,
    alt: "Two galaxies colliding in the nbodyssey simulation",
  },
  {
    name: "NovaSky",
    type: "Desktop planetarium",
    date: "Aug 2026",
    blurb:
      "The real sky above you, on any date, fully offline. 8,900+ naked-eye stars, every constellation, the planets, deep-sky objects, black holes, and a time machine that runs the sky forward.",
    stack: ["TypeScript", "Desktop", "Astronomy"],
    source: "https://github.com/SamGabriel-Here/NovaSky",
    media: "/novasky-sky",
    alt: "NovaSky showing the night sky with constellation lines",
  },
  {
    name: "Celestial",
    type: "Weather dashboard",
    date: "Aug 2026",
    blurb:
      "Current conditions, an hourly and five-day outlook, daylight and air quality, served through a secure serverless proxy.",
    stack: ["JavaScript", "Vercel"],
    live: "https://celestial-tan.vercel.app",
    source: "https://github.com/SamGabriel-Here/celestial",
    media: "/celestial",
    alt: "Celestial weather dashboard",
  },
  {
    name: "NestWorth",
    type: "Regression model",
    date: "Jul 2026",
    blurb:
      "Values a home in any of 13 Indian cities with a 90% price range, the reasons behind the number, and the same home priced city by city.",
    stack: ["Python", "XGBoost", "FastAPI"],
    live: "https://nestworthindia.vercel.app",
    source: "https://github.com/SamGabriel-Here/nestworth",
    media: "/nestworth",
    alt: "NestWorth home valuation page",
  },
  {
    name: "PapVision",
    type: "Vision classifier",
    date: "Aug 2026",
    blurb:
      "A cervical-cytology classifier gated to abstain on low-confidence slides. A research and learning project, not a diagnostic tool.",
    stack: ["PyTorch", "MobileNetV3", "Flask"],
    source: "https://github.com/SamGabriel-Here/pap-vision",
    media: "/papvision",
    alt: "PapVision classifier interface",
  },
  {
    name: "Nextern",
    type: "Recommender",
    date: "Jul 2026",
    blurb: "Matches students to internships by skill, coaches the gaps it finds, and reads a resume with an AI copilot.",
    stack: ["Python", "scikit-learn", "Gemini"],
    live: "https://getnextern.onrender.com",
    source: "https://github.com/SamGabriel-Here/Internship-Allocator",
    media: "/nextern",
    alt: "Nextern internship matching dashboard",
  },
  {
    name: "GitRep",
    type: "Repository analyzer",
    date: "Jul 2026",
    blurb: "Scores any public repository's README and hands back honest, actionable feedback.",
    stack: ["React", "Vite", "FastAPI"],
    live: "https://git-rep.onrender.com",
    source: "https://github.com/SamGabriel-Here/GitRep",
    media: "/gitrep",
    alt: "GitRep README scoring page",
  },
  {
    name: "ShowRush",
    type: "Mobile app",
    date: "Jul 2026",
    blurb: "Movie-ticket booking with an interactive seat map and checkout.",
    stack: ["Flutter", "Dart", "Material 3"],
    live: "https://samgabriel-here.github.io/movie-booking-app/",
    source: "https://github.com/SamGabriel-Here/movie-booking-app",
    media: "/showrush",
    alt: "ShowRush seat selection screen",
  },
];

const kit = [
  { k: "Languages", v: "Python, C, C++, CUDA C++, TypeScript, Java, SQL, Dart" },
  { k: "ML & data", v: "PyTorch, scikit-learn, XGBoost, Pandas, Streamlit" },
  { k: "Web", v: "React, Next.js, FastAPI, Flask, Tailwind, Flutter" },
  { k: "Data stores", v: "MySQL, MongoDB" },
  { k: "Tooling", v: "Git, GitHub, VS Code, CMake" },
];

const record = [
  {
    when: "2022 — 2026",
    what: "B.Tech, Computer Science & Engineering",
    where: "Prestige Institute of Engineering Management & Research, Indore",
  },
  {
    when: "Jul — Aug 2025",
    what: "Web Development Intern",
    where: "InternPe, remote. Built responsive interfaces in HTML, CSS and JavaScript.",
  },
  {
    when: "2020 — 2022",
    what: "Senior Secondary, CBSE",
    where: "Holy Family Convent School, Indore",
  },
];

const email = "samgabrielofficial@gmail.com";
const github = "https://github.com/SamGabriel-Here";
const linkedin = "https://www.linkedin.com/in/samgabrielofficially/";

/* The six NIRCam filters of the Cosmic Cliffs release, short to long. They are
   the page's legend colours; on a project they are only a legend device. */
const FILTERS = ["--f090", "--f187", "--f200", "--f335", "--f444", "--f470"];
const COSMIC_CLIFFS_FILTERS = ["F090W", "F187N", "F200W", "F335M", "F444W", "F470N"];

const pad = (n: number) => String(n).padStart(2, "0");

/* ------------------------------------------------------------------ *
 *  Pieces                                                             *
 * ------------------------------------------------------------------ */

/* In a filter legend the colour is the data. Anywhere else the mark is plain. */
function Chips({ items, offset = 0, legend = false }: { items: string[]; offset?: number; legend?: boolean }) {
  return (
    <div className={legend ? "chips" : "chips plain"}>
      {items.map((s, i) => (
        <span className="chip" key={s} style={{ "--n": i } as React.CSSProperties}>
          <i style={{ "--c": `var(${FILTERS[(i + offset) % FILTERS.length]})` } as React.CSSProperties} />
          {s}
        </span>
      ))}
    </div>
  );
}

function Compass() {
  return (
    <svg className="compass" viewBox="0 0 64 64" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M52 52 L52 12" />
        <path d="M52 52 L12 52" />
        <path d="M48 18 L52 12 L56 18" />
        <path d="M18 48 L12 52 L18 56" />
      </g>
      <text x="48" y="8" fill="currentColor" fontFamily="var(--font-martian)" fontSize="9">
        N
      </text>
      <text x="1" y="56" fill="currentColor" fontFamily="var(--font-martian)" fontSize="9">
        E
      </text>
    </svg>
  );
}

function Links({ r }: { r: Release }) {
  return (
    <>
      {r.live && (
        <a className="tlink" href={r.live} target="_blank" rel="noopener noreferrer">
          Live demo<span aria-hidden="true">&nbsp;↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
      <a className="tlink" href={r.source} target="_blank" rel="noopener noreferrer">
        Source<span aria-hidden="true">&nbsp;↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </>
  );
}

function ReleasePlate({ r, i }: { r: Release; i: number }) {
  return (
    <article className={`release${i % 2 ? " flip" : ""}`} id={`release-${pad(i + 1)}`} aria-labelledby={`r-${i}`}>
      <div className="frame">
        {r.video ? (
          <Loop src={r.media} label={r.alt} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`${r.media}.webp`} alt={r.alt} loading="lazy" decoding="async" width={960} height={600} />
        )}
      </div>
      <div>
        <h3 id={`r-${i}`}>{r.name}</h3>
        <p className="cap-label" style={{ marginTop: -6, marginBottom: 16 }}>
          Release {pad(i + 1)} · {r.type} · {r.date}
        </p>
        <p>{r.blurb}</p>
        {r.figure && (
          <p className="figure">
            <b>
              {r.figure.value.replace("×", "")}
              {r.figure.value.includes("×") && <span className="x">×</span>}
            </b>
            {r.figure.line}
          </p>
        )}
        <div className="instruments">
          <p className="cap-label">Built with</p>
          <Chips items={r.stack} offset={i} />
        </div>
        <div className="links">
          <Links r={r} />
        </div>
      </div>
    </article>
  );
}

function Interstitial({
  src,
  source,
  title,
  credit,
}: {
  src: string;
  source: string;
  title: string;
  credit: string;
}) {
  return (
    <figure className="interstitial" style={{ margin: 0 }}>
      <div className="plate-media">
        <Loop src={src} label={title} />
      </div>
      <figcaption className="wrap interstitial-cap">
        <p className="t">{title}</p>
        <p className="cap-label">
          {source} · {credit}
        </p>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ *
 *  Page                                                               *
 * ------------------------------------------------------------------ */

export default function Home() {
  const live = releases.filter((r) => r.live).length;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Develop />

      <main id="main" tabIndex={-1}>
        {/* ---------- opening plate ---------- */}
        <section className="plate" id="top" aria-label="Introduction">
          <div className="plate-media exposing">
            <Loop
              src="/cosmos/cosmic-cliffs"
              label="The Cosmic Cliffs of the Carina Nebula, a 3D flight through the James Webb Space Telescope image"
              eager
              controlSlot="hero-transport"
            />
          </div>

          <div className="wrap plate-meta">
            <p className="cap-label enter" style={{ "--d": "0.1s" } as React.CSSProperties}>
              Machine learning · GPU · Software
            </p>
            <p className="cap-label hide-sm enter" style={{ "--d": "0.1s" } as React.CSSProperties}>
              Indore, India · 22.72°N 75.86°E
            </p>
          </div>
          <Compass />

          <div className="wrap plate-foot">
            <h1 className="plate-name enter" style={{ "--d": "0.25s" } as React.CSSProperties}>
              Sam Gabriel
            </h1>
            <div>
              <p className="plate-role enter" style={{ "--d": "0.45s" } as React.CSSProperties}>
                Machine-learning and software engineer. I build the instruments behind hard problems: GPU physics,
                the night sky, messy data.
              </p>
              <div className="plate-actions enter" style={{ "--d": "0.6s" } as React.CSSProperties}>
                <span className="status">Open to work</span>
                <a className="btn btn-solid" href="#contact">
                  Contact
                </a>
                <a className="tlink" href="#work">
                  See the work
                </a>
              </div>
            </div>

            <div className="legend exposing-legend">
              <p className="cap-label">Webb NIRCam · Cosmic Cliffs, NGC 3324</p>
              <Chips items={COSMIC_CLIFFS_FILTERS} legend />
              <p className="cap-label credit">NASA, ESA, CSA, STScI · 3D visualization F.&nbsp;Summers, G.&nbsp;Bacon (STScI)</p>
              <div id="hero-transport" className="transport" />
            </div>
          </div>
        </section>

        {/* ---------- the work ---------- */}
        <section className="section" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2" id="work-h">
                Releases
              </h2>
              <p>
                Eight projects, each with public source; {live} run live right now. The index has every link; the
                plates below it have the detail.
              </p>
            </div>

            <ol className="index" aria-label="Release index">
              {releases.map((r, i) => (
                <li key={r.name}>
                  <span className="no">{pad(i + 1)}</span>
                  <span className="nm">
                    <a href={`#release-${pad(i + 1)}`}>{r.name}</a>
                  </span>
                  <span className="ty">{r.type}</span>
                  <span className="ln">
                    <Links r={r} />
                  </span>
                </li>
              ))}
            </ol>

            {releases.slice(0, 4).map((r, i) => (
              <ReleasePlate key={r.name} r={r} i={i} />
            ))}
          </div>

          <Interstitial
            src="/cosmos/blackhole-approach"
            source="NASA visualization · general relativity"
            title="Approaching a black hole"
            credit={"NASA/JPL-Caltech · visualization R.\u00a0Hurt (IPAC)"}
          />

          <div className="wrap">
            {releases.slice(4).map((r, i) => (
              <ReleasePlate key={r.name} r={r} i={i + 4} />
            ))}
          </div>
        </section>

        {/* ---------- the cosmos between chapters ---------- */}
        <div className="pair">
          <Interstitial
            src="/cosmos/sun-171"
            source="Solar Dynamics Observatory · AIA 171 Å"
            title="The Sun in extreme ultraviolet"
            credit={"NASA/SDO · visualization A.\u00a0J.\u00a0Christensen (SVS)"}
          />
          <Interstitial
            src="/cosmos/blackhole-orbit"
            source="NASA visualization · light bent by gravity"
            title="Orbiting a black hole"
            credit={"NASA/JPL-Caltech · visualization R.\u00a0Hurt (IPAC)"}
          />
        </div>

        {/* ---------- about ---------- */}
        <section className="section" id="about" aria-labelledby="about-h">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2" id="about-h">
                About
              </h2>
              <p>
                B.Tech in Computer Science &amp; Engineering, 2022–2026, in Indore. The work above spans GPU
                simulation, applied machine learning, and the web interfaces that make both usable.
              </p>
            </div>

            <div className="about">
              <div>
                <h3>Toolkit</h3>
                <dl className="kit">
                  {kit.map((row) => (
                    <div key={row.k}>
                      <dt className="cap-label">
                        <i
                          aria-hidden="true"
                          style={{ width: 9, height: 9, display: "inline-block", border: "1px solid var(--dim)" }}
                        />
                        {row.k}
                      </dt>
                      <dd>{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3>Record</h3>
                <ol className="record">
                  {record.map((r) => (
                    <li key={r.what}>
                      <p className="cap-label">{r.when}</p>
                      <p className="what">{r.what}</p>
                      <p className="where">{r.where}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- contact ---------- */}
        <section className="contact" id="contact" aria-labelledby="contact-h">
          <div className="plate-media">
            <Loop src="/cosmos/apollo13-moon" label="The far side of the Moon as the Apollo 13 crew saw it" />
          </div>
          <div className="wrap contact-grid">
            <div>
              <h2 className="h2" id="contact-h">
                Contact
              </h2>
              <p className="plate-role" style={{ marginTop: 24 }}>
                A role, a project, or a question about the work: write and I&apos;ll answer. Open to machine-learning
                and software engineering roles.
              </p>
              <div className="channels">
                <a className="tlink" href={`mailto:${email}`}>
                  {email}
                </a>
                <a className="tlink" href={github} target="_blank" rel="noopener noreferrer">
                  github.com/SamGabriel-Here<span aria-hidden="true">&nbsp;↗</span>
                </a>
                <a className="tlink" href={linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/samgabrielofficially<span aria-hidden="true">&nbsp;↗</span>
                </a>
              </div>
            </div>
            <ContactForm email={email} />
          </div>
        </section>
      </main>

      {/* ---------- footer: the credit block ---------- */}
      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <p style={{ fontWeight: 500 }}>Sam Gabriel</p>
            <p className="cap-label" style={{ marginTop: 6 }}>
              Indore · <ClockIST /> · © 2026
            </p>
          </div>
          <p className="credits">
            Space imagery: Cosmic Cliffs 3D flight, NASA, ESA, CSA, STScI (F. Summers, G. Bacon). Black hole
            visualizations, NASA/JPL-Caltech (R. Hurt, IPAC). The Sun at 171 Å, NASA/SDO and the AIA science team,
            visualization NASA SVS. Apollo 13 lunar views, NASA SVS (E. Wright) from Lunar Reconnaissance Orbiter data.
            NASA media is used under NASA&apos;s media guidelines and implies no endorsement.
          </p>
        </div>
      </footer>
    </>
  );
}
