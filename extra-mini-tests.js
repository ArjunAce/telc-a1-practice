(function (root) {
  const EXTRA_MINI_TESTS = [
    {
      id: "extra-mini-1",
      section: "reading-mini",
      kind: "Mini-Test",
      title: "Extra Mini-Test 1",
      instruction: "Lesen Sie die Texte und Aufgaben. Markieren Sie die richtige Antwort. Zeit: 25 Minuten.",
      difficulty: "medium",
      timerMinutes: 25,
      groups: [
        {
          title: "Teil 1",
          blocks: [
            {
              heading: "Text A",
              text: `Hallo Paula,
ich bin schon im Sprachzentrum. Der Kurs beginnt heute erst um 9.30 Uhr, nicht um 9.00 Uhr. Frau Berger ist krank, deshalb kommt Herr Klein. Wir sind in Raum 12.
Bis gleich
Mina`,
              questions: [
                { label: "Mina ist im Sprachzentrum.", type: "tf", answer: "richtig" },
                { label: "Der Kurs beginnt heute um 9.00 Uhr.", type: "tf", answer: "falsch" },
                { label: "Der Kurs ist heute in Raum 12.", type: "tf", answer: "richtig" }
              ]
            },
            {
              heading: "Text B",
              text: `Liebe Nachbarn,
am Samstag machen wir im Hof ein kleines Fest. Es beginnt um 16 Uhr. Bitte bringen Sie etwas zu essen mit. Getränke kaufen wir zusammen.
Familie Roth`,
              questions: [
                { label: "Das Fest ist am Samstag.", type: "tf", answer: "richtig" },
                { label: "Die Nachbarn sollen Getränke mitbringen.", type: "tf", answer: "falsch" }
              ]
            }
          ]
        },
        {
          title: "Teil 2",
          blocks: [
            {
              situation: "Sie möchten heute Abend einen Film sehen.",
              options: [
                { value: "a", text: "Kino Lichtblick - Filme täglich ab 18 Uhr, Tickets online und an der Kasse." },
                { value: "b", text: "Musikschule West - Klavierunterricht für Kinder und Erwachsene." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie suchen frisches Brot am Sonntagmorgen.",
              options: [
                { value: "a", text: "Bäckerei Korn - Sonntag 7.00-11.00 Uhr geöffnet." },
                { value: "b", text: "Bäckerei Mitte - Montag bis Freitag 6.30-18.00 Uhr." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie möchten eine Waschmaschine kaufen.",
              options: [
                { value: "a", text: "Elektro Punkt - Kühlschränke, Waschmaschinen und Herde." },
                { value: "b", text: "Buchladen Kapitel - Romane, Kalender und Karten." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie brauchen nach 18 Uhr Medikamente.",
              options: [
                { value: "a", text: "Apotheke am Park - Heute Notdienst bis 22 Uhr." },
                { value: "b", text: "Praxis Dr. Neumann - Sprechzeit 8.00-12.00 Uhr." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie möchten Ihre Haare schneiden lassen.",
              options: [
                { value: "a", text: "Fitnessraum Aktiv - Training ohne Vertrag." },
                { value: "b", text: "Salon Mira - Waschen, Schneiden, Föhnen." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "b" }]
            }
          ]
        },
        {
          title: "Teil 3",
          blocks: [
            {
              sign: "Bitte leise sein. Prüfung im Raum.",
              questions: [{ label: "Man soll hier laut sprechen.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Fahrstuhl außer Betrieb. Bitte Treppe benutzen.",
              questions: [{ label: "Der Fahrstuhl funktioniert heute.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Schwimmbad: Kinder nur mit Erwachsenen.",
              questions: [{ label: "Kinder dürfen nur mit einem Erwachsenen hinein.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Anmeldung im Erdgeschoss, Zimmer 4.",
              questions: [{ label: "Man meldet sich in Zimmer 4 an.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Heute keine Beratung. Neuer Termin: Dienstag.",
              questions: [{ label: "Die Beratung ist heute.", type: "tf", answer: "falsch" }]
            }
          ]
        }
      ]
    },
    {
      id: "extra-mini-2",
      section: "reading-mini",
      kind: "Mini-Test",
      title: "Extra Mini-Test 2",
      instruction: "Lesen Sie die Texte und Aufgaben. Markieren Sie die richtige Antwort. Zeit: 25 Minuten.",
      difficulty: "medium",
      timerMinutes: 25,
      groups: [
        {
          title: "Teil 1",
          blocks: [
            {
              heading: "Text A",
              text: `Hallo Diego,
ich kann heute nicht mit dir Fußball spielen. Meine Tochter hat um 17 Uhr einen Termin beim Zahnarzt. Morgen nach der Arbeit habe ich Zeit. Geht es bei dir um 18 Uhr?
Viele Grüße
Lars`,
              questions: [
                { label: "Lars spielt heute Fußball mit Diego.", type: "tf", answer: "falsch" },
                { label: "Lars hat mit seiner Tochter einen Zahnarzttermin.", type: "tf", answer: "richtig" },
                { label: "Lars möchte sich morgen um 18 Uhr treffen.", type: "tf", answer: "richtig" }
              ]
            },
            {
              heading: "Text B",
              text: `Liebe Frau Schuster,
Ihr Paket liegt seit Montag in unserer Filiale. Bitte holen Sie es bis Freitag ab. Bringen Sie Ihren Ausweis mit. Die Filiale schließt um 19 Uhr.
PaketShop Nord`,
              questions: [
                { label: "Frau Schuster soll ihren Ausweis mitbringen.", type: "tf", answer: "richtig" },
                { label: "Die Filiale ist bis 21 Uhr geöffnet.", type: "tf", answer: "falsch" }
              ]
            }
          ]
        },
        {
          title: "Teil 2",
          blocks: [
            {
              situation: "Sie möchten einen Schlüssel machen lassen.",
              options: [
                { value: "a", text: "Schlüsseldienst Bauer - Schlüssel, Schlösser und Türöffnung." },
                { value: "b", text: "Schreibwaren Lind - Hefte, Stifte und Kopien." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie suchen einen Deutschkurs am Abend.",
              options: [
                { value: "a", text: "Volkshochschule - Deutsch A1, Dienstag und Donnerstag 18.30 Uhr." },
                { value: "b", text: "Sportverein Grün - Yoga am Morgen, Montag 8.00 Uhr." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie möchten gebrauchte Möbel kaufen.",
              options: [
                { value: "a", text: "Secondhand Möbel - Tische, Stühle, Schränke günstig." },
                { value: "b", text: "Reinigung Blitz - Hemden und Jacken reinigen." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie brauchen Hilfe bei einem kranken Hund.",
              options: [
                { value: "a", text: "Tierarztpraxis Luna - Sprechstunde für Hunde und Katzen." },
                { value: "b", text: "Blumenhaus Rose - Pflanzen für Balkon und Garten." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie möchten ein Fahrrad für zwei Tage mieten.",
              options: [
                { value: "a", text: "Radstation City - Fahrräder pro Stunde, Tag oder Wochenende." },
                { value: "b", text: "Autohof Süd - Mietwagen und Transporter." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            }
          ]
        },
        {
          title: "Teil 3",
          blocks: [
            {
              sign: "Wartezimmer: Bitte Handy ausschalten.",
              questions: [{ label: "Im Wartezimmer darf man telefonieren.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Markt heute nur bis 13 Uhr.",
              questions: [{ label: "Nach 13 Uhr ist der Markt geschlossen.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Eingang wegen Bauarbeiten hinten.",
              questions: [{ label: "Man kann vorne hineingehen.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Bitte beim Fahrer einsteigen.",
              questions: [{ label: "Man steigt vorne beim Fahrer ein.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Keine Fahrräder im Hausflur abstellen.",
              questions: [{ label: "Fahrräder dürfen im Hausflur stehen.", type: "tf", answer: "falsch" }]
            }
          ]
        }
      ]
    },
    {
      id: "extra-mini-3",
      section: "reading-mini",
      kind: "Mini-Test",
      title: "Extra Mini-Test 3",
      instruction: "Lesen Sie die Texte und Aufgaben. Markieren Sie die richtige Antwort. Zeit: 30 Minuten.",
      difficulty: "hard",
      timerMinutes: 30,
      groups: [
        {
          title: "Teil 1",
          blocks: [
            {
              heading: "Text A",
              text: `Liebe Eltern,
am Mittwoch macht die Klasse 1B einen Ausflug in den Stadtpark. Die Kinder treffen sich um 8.15 Uhr vor der Schule. Bitte geben Sie Ihrem Kind Frühstück, Wasser und eine Regenjacke mit. Wir sind um 13 Uhr zurück.
Viele Grüße
Frau Hansen`,
              questions: [
                { label: "Die Klasse fährt am Mittwoch in den Stadtpark.", type: "tf", answer: "richtig" },
                { label: "Die Kinder treffen sich im Stadtpark.", type: "tf", answer: "falsch" },
                { label: "Die Kinder sollen eine Regenjacke mitbringen.", type: "tf", answer: "richtig" }
              ]
            },
            {
              heading: "Text B",
              text: `Hallo Kira,
ich habe die Tickets für das Konzert gekauft. Es beginnt um 20 Uhr, aber die Türen öffnen schon um 19 Uhr. Ich warte um 18.45 Uhr an der Haltestelle Theater. Bitte komm pünktlich.
Tom`,
              questions: [
                { label: "Das Konzert beginnt um 19 Uhr.", type: "tf", answer: "falsch" },
                { label: "Tom wartet an der Haltestelle Theater.", type: "tf", answer: "richtig" }
              ]
            }
          ]
        },
        {
          title: "Teil 2",
          blocks: [
            {
              situation: "Sie möchten am Samstag mit Kindern schwimmen gehen.",
              options: [
                { value: "a", text: "Familienbad Welle - Samstag 9.00-18.00 Uhr, Kinderbecken geöffnet." },
                { value: "b", text: "Sauna Ruhe - Eintritt erst ab 18 Jahren, Samstag ab 14 Uhr." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie wollen einen Termin für eine Wohnungsbesichtigung machen.",
              options: [
                { value: "a", text: "Immobilien Klar - Besichtigungen nach Termin, Telefon 44218." },
                { value: "b", text: "Umzug Fix - Kartons und Transporter für Ihren Umzug." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie suchen ein Restaurant mit vegetarischem Essen.",
              options: [
                { value: "a", text: "Grillhaus Adler - Fleischgerichte und Würstchen vom Grill." },
                { value: "b", text: "Bistro Garten - Suppen, Salate und vegetarische Tagesgerichte." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "b" }]
            },
            {
              situation: "Sie möchten Ihr Kind nachmittags betreuen lassen.",
              options: [
                { value: "a", text: "Kinderzeit - Betreuung nach der Schule bis 17 Uhr." },
                { value: "b", text: "Sprachcafé Plus - Deutsch sprechen für Erwachsene." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie brauchen eine Fahrkarte und Informationen zum Bus.",
              options: [
                { value: "a", text: "Verkehrsbüro - Tickets, Fahrpläne und Auskunft." },
                { value: "b", text: "Stadtarchiv - Alte Fotos und Bücher zur Stadtgeschichte." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            }
          ]
        },
        {
          title: "Teil 3",
          blocks: [
            {
              sign: "Bibliothek: Rückgabe der Bücher auch draußen am Automaten.",
              questions: [{ label: "Man kann Bücher am Automaten zurückgeben.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Praxis geschlossen. In Notfällen bitte Krankenhaus aufsuchen.",
              questions: [{ label: "Die Praxis hat heute geöffnet.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Nur Barzahlung. Kartenleser defekt.",
              questions: [{ label: "Man kann hier mit Karte bezahlen.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Kursraum gewechselt: A1 heute in Raum 205.",
              questions: [{ label: "Der A1-Kurs ist heute in Raum 205.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Bitte Schuhe vor dem Sportraum ausziehen.",
              questions: [{ label: "Man soll die Schuhe im Sportraum anlassen.", type: "tf", answer: "falsch" }]
            }
          ]
        }
      ]
    },
    {
      id: "extra-mini-4",
      section: "reading-mini",
      kind: "Mini-Test",
      title: "Extra Mini-Test 4",
      instruction: "Lesen Sie die Texte und Aufgaben. Markieren Sie die richtige Antwort. Zeit: 30 Minuten.",
      difficulty: "hard",
      timerMinutes: 30,
      groups: [
        {
          title: "Teil 1",
          blocks: [
            {
              heading: "Text A",
              text: `Guten Tag Herr Karim,
Ihr Termin bei Frau Dr. Seidel ist nicht am Dienstag, sondern am Donnerstag um 10.40 Uhr. Bitte kommen Sie zehn Minuten früher und bringen Sie Ihre Versichertenkarte mit.
Praxis Seidel`,
              questions: [
                { label: "Herr Karim hat den Termin am Donnerstag.", type: "tf", answer: "richtig" },
                { label: "Der Termin beginnt um 10.30 Uhr.", type: "tf", answer: "falsch" },
                { label: "Herr Karim soll seine Versichertenkarte mitbringen.", type: "tf", answer: "richtig" }
              ]
            },
            {
              heading: "Text B",
              text: `Liebe Sara,
ich bin heute im Büro und komme erst um 18.30 Uhr nach Hause. Das Essen steht im Kühlschrank. Kannst du bitte noch Tomaten und Reis kaufen? Geld liegt auf dem Tisch.
Mama`,
              questions: [
                { label: "Mama kommt vor 18 Uhr nach Hause.", type: "tf", answer: "falsch" },
                { label: "Sara soll Tomaten und Reis kaufen.", type: "tf", answer: "richtig" }
              ]
            }
          ]
        },
        {
          title: "Teil 2",
          blocks: [
            {
              situation: "Sie möchten am Nachmittag einen Computer benutzen.",
              options: [
                { value: "a", text: "Stadtbibliothek - Internetplätze, Mo-Fr 10.00-19.00 Uhr." },
                { value: "b", text: "Copyshop Schnell - Druck und Kopien, keine Computerplätze." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie suchen einen Sportkurs für den Rücken.",
              options: [
                { value: "a", text: "GesundFit - Rückengymnastik Mittwoch 17.30 Uhr." },
                { value: "b", text: "Tanzstudio Rio - Salsa und Tango am Wochenende." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie möchten Ihre Jacke reinigen lassen.",
              options: [
                { value: "a", text: "Schneiderei Fein - Hosen kürzen und Knöpfe annähen." },
                { value: "b", text: "Textilreinigung Sauber - Mäntel, Jacken und Hemden reinigen." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "b" }]
            },
            {
              situation: "Sie brauchen ein Geschenk und Blumen.",
              options: [
                { value: "a", text: "Blumen & Mehr - Sträuße, kleine Geschenke und Karten." },
                { value: "b", text: "Baumarkt Hammer - Werkzeug, Farbe und Holz." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            },
            {
              situation: "Sie möchten wissen, wann der nächste Zug fährt.",
              options: [
                { value: "a", text: "Reisezentrum Bahnhof - Fahrkarten und Zugauskunft." },
                { value: "b", text: "Hotel Gleis 1 - Zimmer direkt am Bahnhof." }
              ],
              questions: [{ label: "Antwort", type: "ab", answer: "a" }]
            }
          ]
        },
        {
          title: "Teil 3",
          blocks: [
            {
              sign: "Zimmer frei ab 15 Uhr. Vorher keine Anmeldung.",
              questions: [{ label: "Man kann vor 15 Uhr einchecken.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Bitte Einkaufswagen zurückbringen. Pfand: 1 Euro.",
              questions: [{ label: "Für den Einkaufswagen braucht man 1 Euro Pfand.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Wegen Schnee fällt Linie 8 heute aus.",
              questions: [{ label: "Die Linie 8 fährt heute normal.", type: "tf", answer: "falsch" }]
            },
            {
              sign: "Elternabend beginnt im Musikraum.",
              questions: [{ label: "Der Elternabend ist im Musikraum.", type: "tf", answer: "richtig" }]
            },
            {
              sign: "Mittagsangebot nur von 11.30 bis 14.00 Uhr.",
              questions: [{ label: "Das Mittagsangebot gibt es den ganzen Tag.", type: "tf", answer: "falsch" }]
            }
          ]
        }
      ]
    }
  ];

  root.EXTRA_MINI_TESTS = EXTRA_MINI_TESTS;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = EXTRA_MINI_TESTS;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
