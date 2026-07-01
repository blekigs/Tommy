import { img, IMAGES, COMPANY } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Stats from '../components/Stats.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

// Werte-Prinzipien des Betriebs
const VALUES = [
  {
    t: 'Aus einer Hand',
    d: 'Holz und Elektro laufen bei uns nicht nebeneinander, sondern ineinander. Ein Plan, ein Team, eine Verantwortung.',
  },
  {
    t: 'Meisterlich',
    d: 'Beide Gewerke werden von geprüften Meistern geführt. Ausbildung, Normen und Sorgfalt sind für uns kein Extra.',
  },
  {
    t: 'Termintreu',
    d: 'Ein verbindlicher Ablaufplan, an den wir uns halten. Verzögerungen kommunizieren wir früh und ehrlich.',
  },
  {
    t: 'Regional',
    d: 'Kurze Wege, feste Ansprechpartner und Materialien von Partnern, die wir seit Jahren kennen.',
  },
]

export default function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Handwerk, das zwei Gewerke unter einem Dach vereint"
        intro={`${COMPANY.foundedText} – mit dem Anspruch, Bauen einfacher zu machen: weniger Schnittstellen, mehr Verantwortung.`}
      />

      {/* Geschichte: Text + versetztes Bild */}
      <section className="wrap grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Unsere Geschichte"
            title="Vom Zimmereibetrieb zum Doppel-Handwerk"
          />
          <div className="mt-6 space-y-5 text-muted leading-relaxed">
            <p>
              Angefangen hat alles in der Zimmerei: Dachstühle, Aufstockungen,
              Innenausbau. Über die Jahre kam eine Frage auf jeder Baustelle
              zurück – „Und wer macht die Elektrik?"
            </p>
            <p>
              Statt sie weiterzureichen, haben wir sie zu unserer eigenen
              gemacht. Heute vereint Holz- &amp; Elektrobau Schröder beide
              Gewerke unter einem Dach. Das spart unseren Kundinnen und Kunden
              Koordination, Wartezeit und Reibungsverluste an den Schnittstellen.
            </p>
            <p>
              Was gleich geblieben ist: der Anspruch, jedes Projekt so zu bauen,
              als wäre es das eigene Haus.
            </p>
          </div>
        </div>

        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={img(IMAGES.blueprint, 800)}
              alt="Bauplanung am Holztisch"
              className="h-full w-full object-cover"
              loading="lazy"
              width="800"
              height="1000"
            />
          </div>
          <div className="absolute -left-6 bottom-8 hidden w-44 overflow-hidden rounded-xl border-4 border-paper shadow-xl sm:block">
            <img
              src={img(IMAGES.electricianPortrait, 400)}
              alt="Elektromeister vor dem Verteiler"
              className="aspect-[4/5] h-full w-full object-cover"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>
        </Reveal>
      </section>

      {/* Werte */}
      <section className="bg-paper-2/40 py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading eyebrow="Haltung" title="Vier Prinzipien, die jede Baustelle prägen" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="flex gap-5">
                <span className="font-mono text-sm text-ember">0{i + 1}</span>
                <div className="border-t border-line pt-1">
                  <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="wrap py-20 sm:py-24">
        <Stats />
      </section>

      <CtaBand
        title="Lernen wir uns kennen."
        text="Wir schauen uns Ihr Vorhaben persönlich an und sagen ehrlich, was sinnvoll ist."
      />
    </>
  )
}
