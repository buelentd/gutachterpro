const BBS = [
  {
    id: 1,
    label: 'BB 1',
    title: 'Dach und Dachentwässerung',
    questions: [
      {
        id: '1.1',
        short: 'Dachabdichtung',
        text: 'Ist die Dachabdichtung des Flachdaches vollflächig aufgeklebt und frei von Blasenbildung, Rissen oder sonstigen Schäden?',
        subs: null,
        norms: ['DIN 18531-1', 'DIN 18531-4'],
        normCards: [
          { n: 'DIN 18531-1 · Abschn. 5.3', t: 'Abdichtungen auf Flachdächern sind auf Blasenbildung, Risse und Ablösungen zu prüfen. Schäden über 5 cm² sind dokumentationspflichtig.', r: 96 },
          { n: 'DIN 18531-4 · Abschn. 4.2', t: 'Anschlüsse an Dachdurchdringungen sind mit zugelassenen Manschetten auszuführen und auf Dichtheit zu prüfen.', r: 84 },
        ],
        a1: 'Laut Ausführungsplanung wurde eine zweilagige Bitumenschweißbahn vorgesehen. Revisionsbericht 2022 verweist auf Nachbesserungen im Bereich der Attika.',
        a2: '', a3: ''
      },
      {
        id: '1.2',
        short: 'Entwässerung',
        text: 'Sind Dachrinnen, Fallrohre und Dachabläufe funktionsfähig, dicht und frei von Schäden oder Verstopfungen?',
        subs: null,
        norms: ['DIN EN 12056-3', 'DIN 18460'],
        normCards: [
          { n: 'DIN EN 12056-3 · Abschn. 5.1', t: 'Dachentwässerungen sind auf freien Ablauf und Dichtheit zu prüfen. Verstopfungen gelten als Instandhaltungsmangel.', r: 94 },
          { n: 'DIN 18460 · Abschn. 3.4', t: 'Fallrohre aus Metall sind auf Korrosion zu prüfen. Fehlende Halterungen sind als Mangel zu werten.', r: 88 },
        ],
        a1: '', a2: '', a3: ''
      },
    ]
  },
  {
    id: 2,
    label: 'BB 2',
    title: 'Risse Innen- und Außenwände',
    questions: [
      {
        id: '2.1',
        short: 'Risse Innen/Außen',
        text: 'Es zeigen sich an mehreren Stellen des Gebäudes Risse an den Innen- und Außenwänden, nämlich:',
        subs: [
          'a) Im Dachgeschoss in den Schrägen',
          'b) Im Schlafzimmer horizontal über der Tür, senkrecht am Lichtschalter neben der Tür',
          'c) Im Bad waagerecht in Höhe des Abluftstellers',
          'd) Im Übergang von der Küche zum Esszimmer ein langer Riss an der Wand innen und analog verlaufend auch außen',
          'e) Außen im Bereich des Anschlusses zwischen Garage und Wohnhaus ein senkrechter Riss',
          'f) Außen ein waagerechter Riss im Putz, ca. 2 m Länge, im Bereich der Terrasse in Ecke zum Balkon',
        ],
        norms: ['DIN EN 13501-1', 'DIN 18531-1', 'DIN 18350', 'DIN EN 13501-2', 'DIN 18531-2'],
        normCards: [
          { n: 'DIN 18550-2 · Abschn. 4.3', t: 'Haarrisse bis 0,2 mm gelten als tolerierbar. Risse über 0,5 mm sind dokumentationspflichtig und auf Ursache zu prüfen.', r: 96 },
          { n: 'DIN EN 13914-2 · Abschn. 7', t: 'Risse über 0,5 mm erfordern Ursachenanalyse. Statische Relevanz durch Sachverständigen zu beurteilen.', r: 91 },
          { n: 'VOB/C ATV DIN 18350 · §13', t: 'Mängelrüge bei sichtbaren Rissen: Dokumentation mit Maßangaben und Fotodokumentation erforderlich.', r: 83 },
        ],
        a1: 'Laut vorliegenden Bauplänen handelt es sich um einen Massivbau, Baujahr 1978. Keine Hinweise auf Setzungsrisse in der Bauakte. Statikgutachten nicht beigefügt.',
        a2: '', a3: ''
      },
      {
        id: '2.2',
        short: 'Ursache Fassadenrisse',
        text: 'Sind die Risse an der Fassade auf Ausführungsmängel oder auf Materialmängel zurückzuführen?',
        subs: null,
        norms: ['DIN 18550-1', 'DIN EN 998-1'],
        normCards: [
          { n: 'DIN 18550-1 · Abschn. 6.1', t: 'Risse in Außenputzflächen über 0,3 mm sind als ausführungsrelevante Mängel einzustufen.', r: 92 },
          { n: 'DIN EN 998-1 · Abschn. 4', t: 'Putzmörtel ist nach Verwendungszweck auszuwählen. Ungeeigneter Putz gilt als Planungsmangel.', r: 79 },
        ],
        a1: '', a2: '', a3: ''
      },
    ]
  },
  {
    id: 3,
    label: 'BB 3',
    title: 'Feuchtigkeitsschäden',
    questions: [
      {
        id: '3.1',
        short: 'Feuchtigkeitsschäden',
        text: 'Zeigen sich Feuchtigkeitsschäden, Ausblühungen oder Schimmelbildung im Innenbereich des Gebäudes?',
        subs: null,
        norms: ['DIN EN ISO 13788', 'DIN 68800-2'],
        normCards: [
          { n: 'DIN EN ISO 13788 · Abschn. 6', t: 'Tauwasserausfall ist bei Raumluftfeuchte >70% und Wandtemperatur <12°C zu erwarten und nachzuweisen.', r: 93 },
          { n: 'DIN 68800-2 · Abschn. 5', t: 'Holzbauteile sind vor Feuchtigkeit zu schützen. Schimmelbefall an tragenden Teilen ist als wesentlicher Mangel zu werten.', r: 81 },
        ],
        a1: '', a2: '', a3: ''
      },
    ]
  },
];

const VOICE_TEXTS = {
  1: [
    'Laut Ausführungsplanung wurde eine zweilagige Bitumenschweißbahn vorgesehen. Revisionsbericht 2022 verweist auf Nachbesserungen im Bereich der Attika.',
    'Keine schriftlichen Unterlagen zur Dachentwässerung vorhanden. Wartungsprotokoll des Eigentümers fehlt vollständig.',
    'Aus den vorliegenden Unterlagen ergibt sich kein Hinweis auf eine fachmännische Abdichtung der Dachdurchdringungen.',
  ],
  2: [
    'Am Ortstermin wurden an der Nordwand des Dachgeschosses diagonale Risse im Bereich der Giebelschrägen festgestellt. Rissbreite ca. 0,4–0,8 mm, Länge ca. 35–60 cm. Fotodokumentation erstellt.',
    'Fallrohr Ostseite: Lochfraßkorrosion an zwei Lötstellen sichtbar, Halterungsschraube fehlt. Dachrinne Nordseite: Moosbewuchs, Gefälle nicht ausreichend, stehendes Wasser erkennbar.',
    'Feuchtigkeitsfleck an der Decke des Esszimmers ca. 40 × 30 cm, gräuliche Verfärbung. Schimmelbildung in der Ecke Nordwest, ca. 20 × 15 cm.',
  ],
  3: [
    'Die festgestellten Risse sind aufgrund von Verlauf und Breite als ausführungsrelevante Mängel einzustufen. Statische Relevanz wird verneint. Ursache liegt in mangelnder Bewegungsfuge nach DIN 18550-2 Abschn. 4.3.',
    'Die Entwässerungsanlage entspricht nicht den Anforderungen der DIN EN 12056-3. Instandsetzung der Korrosionsstellen und Erneuerung der Halterungen ist kurzfristig erforderlich.',
    'Feuchtigkeitsschäden sind auf unzureichende Dachabdichtung zurückzuführen. Umgehende Instandsetzung gemäß DIN 18531-1 wird empfohlen.',
  ],
};
