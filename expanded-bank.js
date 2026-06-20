/*
 * Original telc A1-style practice data. This is not official exam content.
 */
var EXPANDED_A1_BANK = [
  {
    id: "exp-read-1-01",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 1",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "easy",
    text: `Hallo Mia,
ich bin bei Frau Becker im Haus. Sie hat deinen Schlüssel. Du kannst heute bis 18 Uhr kommen. Bitte klingel bei Becker, nicht bei mir.
Liebe Grüße
Lena`,
    questions: [
      { label: "Mia soll bei Frau Becker klingeln.", type: "tf", answer: "richtig" },
      { label: "Mia kann den Schlüssel morgen holen.", type: "tf", answer: "falsch" },
      { label: "Frau Becker hat den Schlüssel.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-02",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 2",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "easy",
    text: `Liebe Klasse,
morgen schreiben wir keinen Test. Wir lesen im Kursbuch Seite 30. Bitte bringen Sie auch Ihr Heft und einen Bleistift mit.
Viele Grüße
Herr Brandt`,
    questions: [
      { label: "Morgen schreibt die Klasse einen Test.", type: "tf", answer: "falsch" },
      { label: "Die Klasse braucht das Kursbuch.", type: "tf", answer: "richtig" },
      { label: "Die Klasse soll einen Bleistift mitbringen.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-03",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 3",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "easy",
    text: `Guten Tag Frau Salim,
Ihr Termin im Bürgerbüro ist am Montag um 10.15 Uhr. Bitte bringen Sie Ihren Pass und ein Foto mit.
Ihr Bürgerbüro`,
    questions: [
      { label: "Frau Salim hat am Montag einen Termin.", type: "tf", answer: "richtig" },
      { label: "Der Termin ist um 11.15 Uhr.", type: "tf", answer: "falsch" },
      { label: "Frau Salim braucht ihren Pass.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-04",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 4",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "easy",
    text: `Lieber Omar,
am Sonntag grillen wir im Park. Wir treffen uns um 13 Uhr am Eingang. Bring bitte Wasser und Brot mit. Fleisch kaufen wir schon.
Bis Sonntag
Jonas`,
    questions: [
      { label: "Omar soll am Sonntag in den Park kommen.", type: "tf", answer: "richtig" },
      { label: "Die Freunde treffen sich um 15 Uhr.", type: "tf", answer: "falsch" },
      { label: "Omar soll Fleisch kaufen.", type: "tf", answer: "falsch" }
    ]
  },
  {
    id: "exp-read-1-05",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 5",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "medium",
    text: `Hallo Papa,
mein Bus kommt heute später. Ich bin erst um 17.40 Uhr am Bahnhof. Kannst du mich dort abholen? Ich warte vor der Bäckerei.
Deine Eva`,
    questions: [
      { label: "Eva kommt heute später an.", type: "tf", answer: "richtig" },
      { label: "Eva wartet vor der Apotheke.", type: "tf", answer: "falsch" },
      { label: "Eva möchte am Bahnhof abgeholt werden.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-06",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 6",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "medium",
    text: `Liebe Teilnehmer,
der A1-Kurs ist heute nicht in Raum 2. Wir lernen in Raum 6, neben dem Sekretariat. Der Kurs beginnt wie immer um 18 Uhr.
Sprachzentrum Nord`,
    questions: [
      { label: "Der A1-Kurs ist heute in Raum 2.", type: "tf", answer: "falsch" },
      { label: "Raum 6 ist neben dem Sekretariat.", type: "tf", answer: "richtig" },
      { label: "Der Kurs beginnt heute früher.", type: "tf", answer: "falsch" }
    ]
  },
  {
    id: "exp-read-1-07",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 7",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "medium",
    text: `Sehr geehrter Herr Novak,
der Handwerker kommt am Donnerstag zwischen 8 und 10 Uhr. Er repariert das Fenster im Wohnzimmer. Bitte bleiben Sie zu Hause.
Hausverwaltung Stein`,
    questions: [
      { label: "Der Handwerker kommt am Donnerstag.", type: "tf", answer: "richtig" },
      { label: "Der Handwerker repariert die Küche.", type: "tf", answer: "falsch" },
      { label: "Herr Novak soll zu Hause sein.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-08",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 8",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "medium",
    text: `Hallo Tarek,
ich gehe nach dem Deutschkurs in den Supermarkt. Wir brauchen Reis, Tomaten und Tee. Bitte kauf du noch Eier, wenn du nach Hause kommst.
Danke
Samira`,
    questions: [
      { label: "Samira geht vor dem Deutschkurs einkaufen.", type: "tf", answer: "falsch" },
      { label: "Samira kauft Reis und Tomaten.", type: "tf", answer: "richtig" },
      { label: "Tarek soll Eier kaufen.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-09",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 9",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "hard",
    text: `Liebe Frau Chen,
ich kann am Freitag nicht arbeiten, weil mein Sohn krank ist. Am Samstag kann ich aber von 9 bis 14 Uhr kommen. Ist das möglich?
Viele Grüße
Nora Klein`,
    questions: [
      { label: "Nora kann am Freitag arbeiten.", type: "tf", answer: "falsch" },
      { label: "Nora möchte am Samstag arbeiten.", type: "tf", answer: "richtig" },
      { label: "Nora kann bis 16 Uhr bleiben.", type: "tf", answer: "falsch" }
    ]
  },
  {
    id: "exp-read-1-10",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 10",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "hard",
    text: `Guten Morgen Herr Wagner,
Ihr Termin morgen um 8 Uhr fällt leider aus. Frau Dr. Ali ist krank. Wir haben einen neuen Termin für Sie: Mittwoch, 14 Uhr.
Praxis Ali`,
    questions: [
      { label: "Der Termin morgen findet statt.", type: "tf", answer: "falsch" },
      { label: "Frau Dr. Ali ist krank.", type: "tf", answer: "richtig" },
      { label: "Der neue Termin ist am Mittwoch um 14 Uhr.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-11",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 11",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "hard",
    text: `Liebe Eltern,
heute endet die Betreuung schon um 15 Uhr. Bitte holen Sie Ihre Kinder pünktlich ab. Ab morgen sind wir wieder bis 16.30 Uhr da.
Kita Blumenweg`,
    questions: [
      { label: "Heute ist die Betreuung bis 16.30 Uhr geöffnet.", type: "tf", answer: "falsch" },
      { label: "Die Eltern sollen die Kinder heute um 15 Uhr abholen.", type: "tf", answer: "richtig" },
      { label: "Ab morgen ist die Kita länger geöffnet.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-1-12",
    section: "reading-1",
    kind: "True / False",
    title: "Reading Part 1 - Nachricht 12",
    instruction: "Read the text. Are the statements correct (+) or incorrect (-)?",
    difficulty: "hard",
    text: `Hallo Herr Yilmaz,
wir konnten Ihr Paket heute nicht zustellen. Es liegt ab 16 Uhr bei Nachbarin Frau Hartmann, Wohnung 3 links. Bitte bringen Sie Ihren Ausweis mit.
Paketdienst City`,
    questions: [
      { label: "Herr Yilmaz bekommt das Paket bei Frau Hartmann.", type: "tf", answer: "richtig" },
      { label: "Das Paket liegt ab 14 Uhr bereit.", type: "tf", answer: "falsch" },
      { label: "Herr Yilmaz braucht seinen Ausweis.", type: "tf", answer: "richtig" }
    ]
  },
  {
    id: "exp-read-2-01",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 1",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "easy",
    situation: "Sie möchten am Morgen einen Kaffee trinken und frühstücken.",
    options: [
      { value: "a", text: "Café Morgenrot\nFrühstück ab 7.00 Uhr\nKaffee, Brötchen, Eier" },
      { value: "b", text: "Bar Nachtlicht\nGeöffnet ab 20.00 Uhr\nMusik und Getränke" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-read-2-02",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 2",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "easy",
    situation: "Sie suchen eine neue Hose.",
    options: [
      { value: "a", text: "Bücherwelt\nRomane, Kinderbücher, Kalender\nMo-Sa geöffnet" },
      { value: "b", text: "Mode Punkt\nHosen, Hemden, Jacken\nUmkleidekabinen im 1. Stock" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-read-2-03",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 3",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "easy",
    situation: "Sie möchten ein Fahrrad kaufen.",
    options: [
      { value: "a", text: "Radhaus Grün\nNeue und gebrauchte Fahrräder\nReparatur und Beratung" },
      { value: "b", text: "Autowäsche Blitz\nAuto sauber in 10 Minuten\nAuch Innenreinigung" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-read-2-04",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 4",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "easy",
    situation: "Sie brauchen eine neue Brille.",
    options: [
      { value: "a", text: "Schuhmarkt City\nSchuhe für Kinder und Erwachsene\nHeute 20 Prozent" },
      { value: "b", text: "Optik Klar\nBrillen, Kontaktlinsen, Sehtest\nTermine ohne Anmeldung" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-read-2-05",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 5",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "medium",
    situation: "Sie möchten am Dienstagabend einen Yoga-Kurs besuchen.",
    options: [
      { value: "a", text: "Yoga am Park\nDienstag und Donnerstag\n18.30-19.30 Uhr\nAnfänger willkommen" },
      { value: "b", text: "Laufgruppe Nord\nTraining Sonntag 8.00 Uhr\nTreffpunkt: Brücke" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-read-2-06",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 6",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "medium",
    situation: "Ihre Waschmaschine ist kaputt.",
    options: [
      { value: "a", text: "Möbelhaus West\nTische, Stühle, Schränke\nLieferung möglich" },
      { value: "b", text: "Service Elektro\nReparatur von Waschmaschinen\nHausbesuch am selben Tag" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-read-2-07",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 7",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "medium",
    situation: "Sie möchten für zwei Nächte ein ruhiges Zimmer mit Frühstück.",
    options: [
      { value: "a", text: "Pension Lindenhof\nRuhige Zimmer\nFrühstück inklusive\nAb 45 Euro pro Nacht" },
      { value: "b", text: "Jugendclub Laut\nPartyraum mieten\nMusik bis 2.00 Uhr" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-read-2-08",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 8",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "medium",
    situation: "Sie suchen eine Betreuung für Ihr Kind nach der Schule.",
    options: [
      { value: "a", text: "Musikschule Klang\nKlavier und Gitarre\nKurse für Erwachsene" },
      { value: "b", text: "Hort Regenbogen\nBetreuung nach der Schule\nHausaufgabenhilfe bis 17 Uhr" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-read-2-09",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 9",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "hard",
    situation: "Sie wollen am Sonntag ein Formular kopieren und ausdrucken.",
    options: [
      { value: "a", text: "Kopierladen Express\nDrucken, Kopieren, Scannen\nSonntag 10.00-14.00 Uhr geöffnet" },
      { value: "b", text: "Papier Kraus\nHefte und Stifte\nMontag bis Freitag geöffnet" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-read-2-10",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 10",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "hard",
    situation: "Sie möchten abends etwas Warmes essen, aber nicht im Restaurant sitzen.",
    options: [
      { value: "a", text: "Restaurant Toskana\nWarme Küche bis 22 Uhr\nNur Essen im Lokal" },
      { value: "b", text: "Asia Box\nWarme Gerichte zum Mitnehmen\nTäglich bis 21.30 Uhr" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-read-2-11",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 11",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "hard",
    situation: "Sie möchten einen A1-Kurs machen, aber nur am Wochenende.",
    options: [
      { value: "a", text: "Deutsch kompakt A1\nSamstag und Sonntag\n10.00-13.00 Uhr\nStart im Mai" },
      { value: "b", text: "Deutsch schnell B1\nMontag bis Donnerstag\n18.00-20.00 Uhr" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-read-2-12",
    section: "reading-2",
    kind: "Ad Choice",
    title: "Reading Part 2 - Anzeige 12",
    instruction: "Read the situation and the two ads. Which ad fits?",
    difficulty: "hard",
    situation: "Sie möchten für eine alte Nachbarin Medikamente nach Hause bringen lassen.",
    options: [
      { value: "a", text: "Drogerie Schön\nShampoo, Creme, Babynahrung\nKeine Lieferung" },
      { value: "b", text: "Apotheke Kurier\nMedikamente und Beratung\nLieferung nach Hause möglich" }
    ],
    questions: [{ label: "Welche Anzeige passt?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-read-3-01",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 1",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "easy",
    sign: "Eingang\nBitte hier klingeln.",
    questions: [{ label: "Sie sollen am Eingang klingeln.", type: "tf", answer: "richtig" }]
  },
  {
    id: "exp-read-3-02",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 2",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "easy",
    sign: "Kasse\nNur Barzahlung.",
    questions: [{ label: "Sie können hier mit Karte bezahlen.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-read-3-03",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 3",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "easy",
    sign: "Wartezimmer\nBitte leise sprechen.",
    questions: [{ label: "Im Wartezimmer soll man leise sein.", type: "tf", answer: "richtig" }]
  },
  {
    id: "exp-read-3-04",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 4",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "easy",
    sign: "Spielplatz\nHunde verboten.",
    questions: [{ label: "Hunde dürfen auf den Spielplatz.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-read-3-05",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 5",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "medium",
    sign: "Bibliothek Ost\nHeute nur bis 13.00 Uhr geöffnet.",
    questions: [{ label: "Sie können heute um 15.00 Uhr Bücher ausleihen.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-read-3-06",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 6",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "medium",
    sign: "Straßenbahn 7\nHeute Ersatzbus ab Haltestelle Markt.",
    questions: [{ label: "Die Straßenbahn 7 fährt heute normal.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-read-3-07",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 7",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "medium",
    sign: "Schwimmhalle\nFamilientag: Sonntag 10.00-16.00 Uhr.",
    questions: [{ label: "Familien können am Sonntag in die Schwimmhalle gehen.", type: "tf", answer: "richtig" }]
  },
  {
    id: "exp-read-3-08",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 8",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "medium",
    sign: "Hausordnung\nFahrräder bitte im Keller abstellen.",
    questions: [{ label: "Fahrräder sollen im Keller stehen.", type: "tf", answer: "richtig" }]
  },
  {
    id: "exp-read-3-09",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 9",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "hard",
    sign: "Praxis Schulte\nHeute Akutsprechstunde 8.00-9.00 Uhr.\nTermine ab 10.00 Uhr.",
    questions: [{ label: "Patienten ohne Termin können heute um 8.30 Uhr kommen.", type: "tf", answer: "richtig" }]
  },
  {
    id: "exp-read-3-10",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 10",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "hard",
    sign: "Kino Stern\nFilm um 18.00 Uhr ausverkauft.\nKarten für 20.30 Uhr noch da.",
    questions: [{ label: "Sie können noch Karten für 18.00 Uhr kaufen.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-read-3-11",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 11",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "hard",
    sign: "Volkshochschule\nAnmeldung A1 nur online.\nDas Büro hilft mittwochs 14.00-17.00 Uhr.",
    questions: [{ label: "Man kann sich jeden Tag im Büro für A1 anmelden.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-read-3-12",
    section: "reading-3",
    kind: "True / False",
    title: "Reading Part 3 - Schild 12",
    instruction: "Read the sign or notice. Is the statement correct (+) or incorrect (-)?",
    difficulty: "hard",
    sign: "Supermarkt Nord\nHeute wegen Inventur ab 12.00 Uhr geschlossen.\nMorgen normal geöffnet.",
    questions: [{ label: "Heute Nachmittag kann man im Supermarkt einkaufen.", type: "tf", answer: "falsch" }]
  },
  {
    id: "exp-listen-01",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 1",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine kurze Nachricht.",
    text: "Hallo Ben, ich bin im Supermarkt. Ich kaufe Brot und Milch. Bitte kauf du Äpfel. Bis gleich.",
    options: [
      { value: "a", text: "Ben soll Äpfel kaufen." },
      { value: "b", text: "Ben soll Brot kaufen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-02",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 2",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine Durchsage.",
    text: "Achtung am Gleis zwei. Der Zug nach Bonn fährt heute um 9 Uhr 20 ab.",
    options: [
      { value: "a", text: "Der Zug fährt um 9 Uhr 20." },
      { value: "b", text: "Der Zug fährt um 10 Uhr 20." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-03",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 3",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine Mailbox.",
    text: "Guten Tag Frau Meier. Ihr Tisch ist heute Abend um 19 Uhr reserviert. Wir freuen uns auf Sie.",
    options: [
      { value: "a", text: "Frau Meier hat einen Tisch reserviert." },
      { value: "b", text: "Frau Meier hat ein Zimmer reserviert." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-04",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 4",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine Information.",
    text: "Die Praxis ist heute geschlossen. Bitte rufen Sie morgen ab 8 Uhr wieder an.",
    options: [
      { value: "a", text: "Die Praxis ist heute geöffnet." },
      { value: "b", text: "Die Praxis ist heute geschlossen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-05",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 5",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine Nachricht.",
    text: "Hallo Anna, der Deutschkurs beginnt heute in Raum fünf. Ich warte vor der Tür.",
    options: [
      { value: "a", text: "Der Kurs ist in Raum fünf." },
      { value: "b", text: "Der Kurs ist in Raum vier." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-06",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 6",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine kurze Ansage.",
    text: "Liebe Kunden, die Bäckerei schließt heute um 13 Uhr. Morgen sind wir wieder ab 6 Uhr da.",
    options: [
      { value: "a", text: "Die Bäckerei schließt heute um 13 Uhr." },
      { value: "b", text: "Die Bäckerei öffnet heute um 13 Uhr." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-07",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 7",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine Nachricht.",
    text: "Hallo Tim, ich komme heute nicht zum Fußball. Ich bin krank und bleibe zu Hause.",
    options: [
      { value: "a", text: "Die Person geht heute zum Fußball." },
      { value: "b", text: "Die Person bleibt zu Hause." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-08",
    section: "listening-1",
    kind: "Listening Choice",
    title: "Listening - Ansage 8",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "easy",
    situation: "Sie hören eine Information im Hotel.",
    text: "Das Frühstück ist von 7 Uhr bis 10 Uhr im Restaurant im Erdgeschoss.",
    options: [
      { value: "a", text: "Das Frühstück ist im Restaurant." },
      { value: "b", text: "Das Frühstück ist im Zimmer." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-09",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 9",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Nachricht.",
    text: "Hallo Sara, ich bin schon an der Haltestelle. Der Bus kommt in zehn Minuten. Bitte komm schnell.",
    options: [
      { value: "a", text: "Sara soll zur Haltestelle kommen." },
      { value: "b", text: "Sara soll zum Bahnhof kommen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-10",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 10",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Ansage im Kaufhaus.",
    text: "Liebe Kunden, Kinderjacken finden Sie heute im zweiten Stock, neben den Schuhen.",
    options: [
      { value: "a", text: "Kinderjacken sind im ersten Stock." },
      { value: "b", text: "Kinderjacken sind im zweiten Stock." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-11",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 11",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine telefonische Nachricht.",
    text: "Guten Tag Herr Demir. Ihr Fahrrad ist fertig. Sie können es heute bis 18 Uhr abholen.",
    options: [
      { value: "a", text: "Herr Demir kann sein Fahrrad abholen." },
      { value: "b", text: "Herr Demir soll sein Auto bringen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-12",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 12",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Nachricht von einer Freundin.",
    text: "Hallo Lina, der Film beginnt doch erst um 20 Uhr. Wir treffen uns um 19 Uhr 30 vor dem Kino.",
    options: [
      { value: "a", text: "Der Film beginnt um 19 Uhr 30." },
      { value: "b", text: "Der Film beginnt um 20 Uhr." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-13",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 13",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Ansage in der Schule.",
    text: "Der Elternabend der Klasse 2B ist heute nicht in Raum 12, sondern in Raum 18.",
    options: [
      { value: "a", text: "Der Elternabend ist in Raum 18." },
      { value: "b", text: "Der Elternabend ist in Raum 12." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-14",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 14",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Nachricht.",
    text: "Hallo Mama, ich habe mein Handy im Bus vergessen. Ich gehe jetzt zum Fundbüro am Bahnhof.",
    options: [
      { value: "a", text: "Das Handy ist in der Schule." },
      { value: "b", text: "Das Handy wurde im Bus vergessen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-15",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 15",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Durchsage im Supermarkt.",
    text: "Heute kosten Bananen ein Euro neunzig pro Kilo. Das Angebot gilt nur heute.",
    options: [
      { value: "a", text: "Bananen sind heute im Angebot." },
      { value: "b", text: "Äpfel sind heute im Angebot." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-16",
    section: "listening-2",
    kind: "Listening Choice",
    title: "Listening - Ansage 16",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "medium",
    situation: "Sie hören eine Mailbox.",
    text: "Guten Tag Frau Rossi. Die Wohnung kann am Mittwoch um 16 Uhr besichtigt werden. Bitte bringen Sie Ihren Ausweis mit.",
    options: [
      { value: "a", text: "Die Besichtigung ist am Mittwoch." },
      { value: "b", text: "Die Besichtigung ist am Freitag." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-17",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 17",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Nachricht.",
    text: "Hallo Pavel, ich kann dich heute nicht um 15 Uhr treffen. Ich habe noch Arbeit. Geht es auch um 17 Uhr im Café am Markt?",
    options: [
      { value: "a", text: "Die Person möchte das Treffen verschieben." },
      { value: "b", text: "Die Person möchte das Treffen absagen und nicht kommen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-18",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 18",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Durchsage am Bahnhof.",
    text: "Der Zug nach Leipzig fährt heute nicht von Gleis drei. Bitte gehen Sie zu Gleis fünf. Die Abfahrt ist um 11 Uhr 10.",
    options: [
      { value: "a", text: "Der Zug fährt von Gleis drei." },
      { value: "b", text: "Der Zug fährt von Gleis fünf." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-19",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 19",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Nachricht von der Bibliothek.",
    text: "Guten Tag. Ihr Buch ist jetzt da. Sie können es bis Freitag abholen. Danach geben wir es an die nächste Person.",
    options: [
      { value: "a", text: "Das Buch muss bis Freitag abgeholt werden." },
      { value: "b", text: "Das Buch kann erst nach Freitag abgeholt werden." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-20",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 20",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Ansage im Sportverein.",
    text: "Das Training für Anfänger fällt heute aus. Der Trainer ist krank. Fortgeschrittene trainieren normal um 19 Uhr.",
    options: [
      { value: "a", text: "Anfänger trainieren heute nicht." },
      { value: "b", text: "Alle Gruppen trainieren heute normal." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-21",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 21",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Nachricht vom Kindergarten.",
    text: "Liebe Eltern, morgen machen wir einen Ausflug. Die Kinder brauchen feste Schuhe, eine Regenjacke und etwas zu trinken.",
    options: [
      { value: "a", text: "Die Kinder sollen Sportsachen mitbringen." },
      { value: "b", text: "Die Kinder brauchen feste Schuhe und eine Regenjacke." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-22",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 22",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine telefonische Bestellung.",
    text: "Guten Tag, ich möchte einen kleinen Kuchen für Samstag bestellen. Bitte ohne Nüsse, denn mein Sohn hat eine Allergie.",
    options: [
      { value: "a", text: "Der Kuchen soll ohne Nüsse sein." },
      { value: "b", text: "Der Kuchen soll mit vielen Nüssen sein." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "a" }]
  },
  {
    id: "exp-listen-23",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 23",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Ansage im Museum.",
    text: "Die Führung um 14 Uhr ist voll. Es gibt noch Plätze für die Führung um 15 Uhr 30. Treffpunkt ist an der Kasse.",
    options: [
      { value: "a", text: "Für 14 Uhr gibt es noch Plätze." },
      { value: "b", text: "Für 15 Uhr 30 gibt es noch Plätze." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  },
  {
    id: "exp-listen-24",
    section: "listening-3",
    kind: "Listening Choice",
    title: "Listening - Ansage 24",
    instruction: "Use browser text-to-speech to read the text aloud. Listen and choose the correct answer.",
    difficulty: "hard",
    situation: "Sie hören eine Nachricht von einem Kollegen.",
    text: "Hallo Jana, ich öffne morgen das Büro. Du musst erst um 10 Uhr kommen. Bitte bring die Briefe zur Post.",
    options: [
      { value: "a", text: "Jana soll morgen um 8 Uhr kommen." },
      { value: "b", text: "Jana soll Briefe zur Post bringen." }
    ],
    questions: [{ label: "Was ist richtig?", type: "ab", answer: "b" }]
  }
];

if (typeof window !== "undefined") {
  window.EXPANDED_A1_BANK = EXPANDED_A1_BANK;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = EXPANDED_A1_BANK;
}
