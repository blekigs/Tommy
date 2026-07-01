// ============================================================
//  ZENTRALE INHALTE – Holz- & Elektrobau Schröder
//  Alle Texte, Bilder, Leistungen, Preise, Stimmen an einem Ort.
//  Platzhalter sind klar mit [PLATZHALTER] markiert und leicht zu ersetzen.
// ============================================================

// Unsplash-Bilder werden über eine Helper-Funktion mit den passenden
// Maßen geladen (responsive, komprimiert) – siehe img().
const U = 'https://images.unsplash.com';
export const img = (id, w = 1200, h = 0) =>
  `${U}/${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;

// Kuratierte, motivgeprüfte Bild-IDs (Holzbau + Elektro).
export const IMAGES = {
  timberHouse: 'photo-1600585154340-be6161a56a0c', // moderner Holzbau (Hero)
  carpenterSaw: 'photo-1601058268499-e52658b8bb88', // Tischler an der Säge
  electricianWiring: 'photo-1621905251189-08b45d6a269e', // Elektriker verkabelt
  electricianPortrait: 'photo-1621905252507-b35492cc74b4', // Elektriker Porträt
  schematic: 'photo-1581092160562-40aa08e78837', // Elektro-Planung
  blueprint: 'photo-1503387762-592deb58ef4e', // Bauplanung am Holztisch
  drillWall: 'photo-1504148455328-c376907d081c', // Akkuschrauber Detail
  insulation: 'photo-1607400201889-565b1ee75f8e', // Dämmung / Trockenbau
  toolsRack: 'photo-1530124566582-a618bc2615dc', // Werkzeug-Detail
  interior: 'photo-1600566753086-00f18fb6b3ea', // heller Innenausbau (Referenz)
  handshake: 'photo-1580893246395-52aead8960dc', // Handschlag / Vertrauen
  rooftops: 'photo-1516156008625-3a9d6067fab5', // Siedlung (Referenz)
};

// --- Firmen-Stammdaten (Platzhalter, später einsetzen) ---
export const COMPANY = {
  name: 'Holz- & Elektrobau Schröder',
  short: 'Schröder',
  claim: 'Zwei Gewerke. Ein Handschlag.',
  address: {
    street: '[PLATZHALTER: Straße & Hausnr.]',
    city: '[PLATZHALTER: PLZ Ort]',
  },
  phone: '[PLATZHALTER: Telefon]',
  phoneHref: 'tel:+490000000000',
  email: '[PLATZHALTER: E-Mail]',
  emailHref: 'mailto:kontakt@example.de',
  whatsapp: '[PLATZHALTER: WhatsApp]',
  whatsappHref: 'https://wa.me/490000000000', // [PLATZHALTER: echte Nummer]
  hours: [
    { d: 'Montag – Donnerstag', h: '07:00 – 17:00 Uhr' },
    { d: 'Freitag', h: '07:00 – 14:00 Uhr' },
    { d: 'Samstag', h: 'nach Vereinbarung' },
    { d: 'Sonntag', h: 'geschlossen' },
  ],
  social: [
    { label: 'Instagram', href: '#', handle: '[PLATZHALTER]' },
    { label: 'Facebook', href: '#', handle: '[PLATZHALTER]' },
  ],
  foundedText: 'Familienbetrieb in dritter Generation', // [PLATZHALTER: anpassen]
};

// --- Navigation ---
export const NAV = [
  { to: '/', label: 'Start' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/kontakt', label: 'Kontakt' },
];

// --- Kennzahlen (Stats) ---
export const STATS = [
  { value: '35+', label: 'Jahre Handwerk' },
  { value: '2', label: 'Gewerke, ein Team' },
  { value: '800+', label: 'Projekte umgesetzt' },
  { value: '100 %', label: 'Meisterbetrieb' },
];

// --- Leistungen: zwei Kategorien (Tabs) mit je eigenem Bild ---
export const SERVICES = {
  holzbau: {
    key: 'holzbau',
    tab: 'Holzbau',
    lead: 'Vom Dachstuhl bis zum Innenausbau – tragende und sichtbare Konstruktionen aus massivem Holz, gefertigt in unserer eigenen Werkstatt.',
    items: [
      {
        title: 'Dachstühle & Zimmerei',
        image: IMAGES.carpenterSaw,
        text: 'Abbund, Aufrichten, Sanierung. Wir konstruieren Dachstühle nach Maß – vom Neubau bis zur denkmalgerechten Instandsetzung alter Balkenlagen.',
        points: ['Neubau & Aufstockung', 'Dachsanierung', 'Sichtdachstühle'],
      },
      {
        title: 'Innenausbau & Trockenbau',
        image: IMAGES.insulation,
        text: 'Wände, Decken, Böden und Dämmung – handwerklich sauber ausgeführt, energetisch durchdacht und termintreu montiert.',
        points: ['Trennwände & Decken', 'Dämmung', 'Böden & Vertäfelung'],
      },
      {
        title: 'Terrassen & Carports',
        image: IMAGES.timberHouse,
        text: 'Witterungsbeständige Holzkonstruktionen für draußen: Terrassen, Carports und Überdachungen, die Jahrzehnte halten.',
        points: ['Terrassendielen', 'Carports', 'Überdachungen'],
      },
    ],
  },
  elektrobau: {
    key: 'elektrobau',
    tab: 'Elektrobau',
    lead: 'Planung, Installation und Prüfung Ihrer Elektrik – normgerecht, zukunftssicher und aus derselben Hand, die auch das Holz verbaut.',
    items: [
      {
        title: 'Elektroinstallation',
        image: IMAGES.electricianWiring,
        text: 'Komplette Installation für Neubau und Sanierung: von der Unterverteilung bis zur letzten Steckdose – normgerecht nach VDE.',
        points: ['Neubau & Sanierung', 'Verteilerbau', 'VDE-Prüfung'],
      },
      {
        title: 'Smart Home & KNX',
        image: IMAGES.schematic,
        text: 'Licht, Heizung und Beschattung intelligent vernetzt. Wir planen und programmieren Ihr Zuhause – nachrüstbar und herstellerunabhängig.',
        points: ['KNX-Bussysteme', 'Lichtsteuerung', 'Nachrüstung'],
      },
      {
        title: 'PV, Ladeinfrastruktur & Zählertausch',
        image: IMAGES.electricianPortrait,
        text: 'Photovoltaik, Wallbox und moderne Messtechnik – wir bringen Ihre Elektrik auf den Stand der Energiewende.',
        points: ['Wallbox / E-Auto', 'PV-Anbindung', 'Zählerschrank'],
      },
    ],
  },
};

// --- Preisliste / Leistungspakete ---
export const PACKAGES = [
  {
    name: 'Aufmaß & Beratung',
    price: 'ab 0 €',
    note: 'Erstberatung vor Ort',
    features: [
      'Unverbindliches Vor-Ort-Gespräch',
      'Bestandsaufnahme & Aufmaß',
      'Transparentes Festpreis-Angebot',
    ],
    accent: false,
  },
  {
    name: 'Handwerk aus einer Hand',
    price: 'nach Aufwand',
    note: 'Holz + Elektro kombiniert',
    features: [
      'Ein Ansprechpartner für beide Gewerke',
      'Abgestimmte Terminplanung',
      'Festpreisgarantie nach Angebot',
      'Gewährleistung nach VOB',
    ],
    accent: true, // hervorgehoben
  },
  {
    name: 'Wartung & Service',
    price: 'ab 89 €',
    note: 'pro Einsatz zzgl. Material',
    features: [
      'E-Check & Prüfprotokoll',
      'Holz-Inspektion (Feuchte, Statik)',
      'Priorisierter Notdienst',
    ],
    accent: false,
  },
];

// Hinweis unter der Preisliste
export const PRICE_NOTE =
  'Alle Preise sind Richtwerte und verstehen sich als Orientierung. Ihr verbindliches Festpreis-Angebot erstellen wir nach dem kostenlosen Aufmaß vor Ort.';

// --- Kundenstimmen ---
export const TESTIMONIALS = [
  {
    quote:
      'Dachstuhl und komplette Elektrik von einem Betrieb – das hat uns Wochen an Koordination gespart. Sauber, pünktlich, zum vereinbarten Preis.',
    name: 'Familie Berger',
    role: 'Neubau Einfamilienhaus',
  },
  {
    quote:
      'Die Altbausanierung war anspruchsvoll. Herr Schröder hat mitgedacht, wo andere nur abgearbeitet hätten. Ergebnis: makellos.',
    name: 'M. Hoffmann',
    role: 'Altbausanierung',
  },
  {
    quote:
      'Vom KNX-Konzept bis zur Wallbox alles aus einer Hand und verständlich erklärt. Wir würden jederzeit wieder beauftragen.',
    name: 'Praxis Dr. Lang',
    role: 'Gewerbeumbau',
  },
];

// --- Galerie: Kategorien mit Tabs ---
export const GALLERY = {
  holzbau: {
    tab: 'Holzbau',
    images: [
      { id: IMAGES.timberHouse, alt: 'Moderner Holzbau in der Abenddämmerung' },
      { id: IMAGES.carpenterSaw, alt: 'Zimmermann an der Kappsäge' },
      { id: IMAGES.insulation, alt: 'Dämmarbeiten im Innenausbau' },
      { id: IMAGES.blueprint, alt: 'Bauplanung am Holztisch' },
      { id: IMAGES.toolsRack, alt: 'Werkzeug in der Zimmerei' },
    ],
  },
  elektro: {
    tab: 'Elektro',
    images: [
      { id: IMAGES.electricianWiring, alt: 'Elektriker bei der Verkabelung' },
      { id: IMAGES.electricianPortrait, alt: 'Elektromeister vor dem Verteiler' },
      { id: IMAGES.schematic, alt: 'Elektro-Schaltplan in der Planung' },
      { id: IMAGES.drillWall, alt: 'Akkubohrer bei der Montage' },
    ],
  },
  referenzen: {
    tab: 'Referenzen',
    images: [
      { id: IMAGES.interior, alt: 'Fertiger Innenausbau mit Holztreppe' },
      { id: IMAGES.rooftops, alt: 'Wohnsiedlung von oben' },
      { id: IMAGES.timberHouse, alt: 'Fertiggestellter Holzbau' },
      { id: IMAGES.handshake, alt: 'Übergabe per Handschlag' },
    ],
  },
};
