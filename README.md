# Sam Gabriel

A single-page portfolio for Sam Gabriel, a machine-learning and software engineer in
Indore, India. Each project is presented like a telescope image release: the image, a
caption, what it was built with, and where to see it.

**Live at [samgabriel.vercel.app](https://samgabriel.vercel.app)**.

![The opening plate: the Cosmic Cliffs of the Carina Nebula behind the name, with the Webb filter legend and credit](docs/screenshot-opening.jpg)

The opening image is a 3D flight through the James Webb Space Telescope's Cosmic Cliffs.
The filter legend and credit under it are the ones from that release.

## The work

Eight projects with public source, five of them live. An index at the top of the section
lists every link. Below it, each project gets a plate with a capture of the thing running,
because a reader cannot clone and build a CUDA simulator to see whether it works.

![Two release plates: nbodyssey with its benchmark, and NovaSky](docs/screenshot-releases.jpg)

The one performance figure on the site is nbodyssey's: the Barnes-Hut tree code ran
176 times faster than brute force at one million particles on a single Tesla T4. It is
the only benchmark quoted and it is not rounded.

## Sections

| Section | What it holds |
| --- | --- |
| Opening | Name, role, status, and the Cosmic Cliffs flight |
| Releases | An index of all eight projects, then a plate for each |
| About | Toolkit, education and work history |
| Contact | A form that drafts an email, plus the address, GitHub and LinkedIn |

## Space imagery

All of it is real and credited on the page:

- Cosmic Cliffs 3D flight: NASA, ESA, CSA, STScI (F. Summers, G. Bacon)
- Black hole visualizations: NASA/JPL-Caltech (R. Hurt, IPAC)
- The Sun at 171 Å: NASA/SDO and the AIA science team, visualization NASA SVS
- Apollo 13 lunar views: NASA SVS (E. Wright), from Lunar Reconnaissance Orbiter data

The clips are short segments from the NASA Scientific Visualization Studio, re-encoded for
the web. Each loop only loads once it is on screen, never loads with reduced motion or on a
data-saver or 2G/3G connection, and every loop that plays beside text has a pause control.

## Running it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Building

```bash
npm run build
```

`next.config.ts` sets `output: "export"` and `images: { unoptimized: true }`, so the build
writes a fully static site to `./out` with no server behind it. That is why the contact
form drafts a `mailto:` message instead of posting anywhere, and why the email address and
social links stay visible as a fallback.

## Deploying

Vercel builds and serves `samgabriel.vercel.app` on every push to `main`. That is the
only host.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4. Archivo and Martian Mono
through `next/font`. No runtime server, no database, no analytics.

## Design and product notes

[`DESIGN.md`](DESIGN.md) records the design system. [`PRODUCT.md`](PRODUCT.md) records who
the site is for and the constraints that follow. Read both before changing anything visual.

## Licence

Code is MIT. See [LICENSE](LICENSE). The space imagery belongs to its credited sources.
