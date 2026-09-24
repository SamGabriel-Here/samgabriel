import { Backdrop, ClockIST, ContactForm, Depth, Develop, Header, IndexPreview, Loop } from "./ui";

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

/* The six NIRCam filters of the Cosmic Cliffs release, short to long. The
   colour is the data, so it appears only in the credit legend at the end. */
const COSMIC_CLIFFS_FILTERS: [string, string][] = [
  ["F090W", "--f090"],
  ["F187N", "--f187"],
  ["F200W", "--f200"],
  ["F335M", "--f335"],
  ["F444W", "--f444"],
  ["F470N", "--f470"],
];

const pad = (n: number) => String(n).padStart(2, "0");

/* ------------------------------------------------------------------ *
 *  Pieces                                                             *
 * ------------------------------------------------------------------ */

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
        <div className="frame-media">
          {r.video ? (
            <Loop src={r.media} label={r.alt} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${r.media}.webp`} alt={r.alt} loading="lazy" decoding="async" width={960} height={600} />
          )}
        </div>
      </div>
      <div className="release-cap">
        <h3 id={`r-${i}`}>{r.name}</h3>
        <p className="meta">
          {r.type} · {r.date}
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
        <p className="stack">{r.stack.join(" · ")}</p>
        <div className="links">
          <Links r={r} />
        </div>
      </div>
    </article>
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
      <Backdrop />
      <noscript>
        {/* the veil is script-driven; without script it holds closed so text stays readable */}
        <style>{`.backdrop-veil{opacity:.84}`}</style>
      </noscript>
      <Header />
      <Develop />

      <main id="main" tabIndex={-1}>
        {/* ---------- opening plate: the image, the name, one way in ---------- */}
        <section className="plate" id="top" aria-label="Introduction">
          <div className="wrap plate-foot">
            <h1 className="plate-name">Sam Gabriel</h1>
            <p className="plate-role enter" style={{ "--d": "0.45s" } as React.CSSProperties}>
              Machine-learning and software engineer in Indore, building the instruments behind hard problems.
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
          <div id="hero-transport" className="transport hero-transport" />
        </section>

        {/* ---------- the work ---------- */}
        <section className="section" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2" id="work-h">
                Releases
              </h2>
              <p>Eight projects, each with public source; {live} run live right now.</p>
            </div>

            <div className="index-wrap">
            <IndexPreview />
            <ol className="index" aria-label="Project index">
              {releases.map((r, i) => (
                <li key={r.name}>
                  <a href={`#release-${pad(i + 1)}`} data-preview={`${r.media}.webp`}>
                    <span className="no">{pad(i + 1)}</span>
                    <span className="nm">{r.name}</span>
                    <span className="ty">{r.type}</span>
                  </a>
                </li>
              ))}
            </ol>
            </div>

          </div>

          {/* on wide screens the releases come at you out of the nebula, one by one */}
          <Depth items={releases.map((r) => ({ name: r.name, type: r.type }))}>
            {releases.map((r, i) => (
              <ReleasePlate key={r.name} r={r} i={i} />
            ))}
          </Depth>
        </section>

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
                      <dt>{row.k}</dt>
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
                      <p className="when">{r.when}</p>
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

      {/* ---------- footer: every credit and extra, at the end ---------- */}
      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <p style={{ fontWeight: 500 }}>Sam Gabriel</p>
            <p className="foot-note">
              Indore, India · 22.72°N 75.86°E · <ClockIST /> · © 2026
            </p>
          </div>
          <div className="credits">
            <p className="cap-label">Image credits</p>
            <p>
              Opening: the Cosmic Cliffs in the Carina Nebula (NGC 3324), a 3D flight through the Webb NIRCam
              image. NASA, ESA, CSA, STScI; visualization F.&nbsp;Summers, G.&nbsp;Bacon (STScI).
            </p>
            <div className="chips" aria-label="NIRCam filters used in the opening image">
              {COSMIC_CLIFFS_FILTERS.map(([f, c]) => (
                <span className="chip" key={f}>
                  <i style={{ "--c": `var(${c})` } as React.CSSProperties} />
                  {f}
                </span>
              ))}
            </div>
            <p>The same image carries the page behind every section.</p>
            <p>NASA media is used under NASA&apos;s media guidelines and implies no endorsement.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
