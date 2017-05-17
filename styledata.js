/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *       Tyylitajun käyttöohje
 *
 *    Tietokanta kuville
 *   --------------------------
 *   slot - mihin arvontakoneeseen kuvat tulevat. Ensimmäinen on 1 ja viimeinen on 8.
 *   game - pelin kuvat ja tiedot tulevat tämän alle.
 *   id - tunnus, älä vaihda. Jos lisäät kuvia, lisää aina uusi tunnus.
 *   img - kuvan nimi
 *   info - Puvustus kyseisestä kuvasta.
 *       Huomaa että tähän voi syöttää mitä vain. Eli tietueen nimen voi vaihtaa esim. Nimi -> Tuotanto.
 *
 *
 *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
var imgFolder = "../teatterinabc/assets/images/Tyylitaju/";
styleArray = [
    {
        "slot": "1",
        "game": [{
            "id": "1",
            "img": "21_KaunotarjaHirvio_HKT 2007_kuva Charlotte Estman-Wennström.jpg",
            "info": [{
              "genre": "Fantasia, satu",
              "Nimi": "Kaunotar ja hirviö, Helsingin Kaupunginteatteri (2007)",
              "Ohjaus": "Hans Berdtsson",
              "Näyttelijät": "Elina Silander- Babette, Markku Huhtamo- Maurice, Risto Kaskilahti- Lumière",
              "Lavastus": "Katariina Kirjavainen",
              "Käsikirjoitus": "Linda Woolverton- Alan Menken- Howard Ashman- Tim Rice",
              "Puvustus": "Sari Salmela"  }]
        },
            {
                "id": "2",
                "img": "97048485_SKT 1952_Saituri_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Saituri, Suomen Kansallisteatteri (1952)",
                    "Ohjaus": "Arvi Kivimaa",
                    "Lavastus": "Rolf Stegars",
                    "Käsikirjoitus": "Molière"
                }]
            },
            {
                "id": "3",
                "img": "08030218_TTT 1931_Viktoria ja hänen husaarinsa_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Viktoria ja hänen husaarinsa, Tampereen Työväen Teatteri (1931)",
                    "Näyttelijät": "Elna Hellman- Kreivitär Viktoria, Alpo Wikman- John Cunlight, Kaarlo Kytö- Stefan Koltay",
                    "Lavastus": "Jussi Kari",
                    "Käsikirjoitus": "Emmerich Földes- Paul Abraham",
                    "Puvustus": "Arno Hjort"
                }]
            },
            {
                "id": "4",
                "img": "40_MaijaPoppanen_HKT 2009_kuva Tapio Vanhatalo.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Maija Poppanen, Helsingin Kaupunginteatteri (2009)",
                    "Ohjaus": "Hans Berdtsson",
                    "Näyttelijä": "Eero Saarinen- Yrjö Pankki",
                    "Lavastus": "Katariina Kirjavainen",
                    "Käsikirjoitus": "Pamela Lyndon Travers- Julian Fellowes",
                    "Puvustus": "Sari Salmela"
                }]
            },
            {
                "id": "5",
                "img": "aa114795_Svenska Teatern 1932_Nummisuutarit_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Nummisuutarit, Svenska Teatern (1932)",
                    "Ohjaus": "Axel Slangus",
                    "Näyttelijät": "Alex Slangus- Esko, Waldemar Wohström- Antres, Sven Relander- Niko, Jalo Lesche- Sakeri, Erik Lindström- Iivari",
                    "Lavastus": "Nils Wohlström",
                    "Käsikirjoitus": "Aleksis Kivi"
                }]
            }]
    }, {
        "slot": "2",
        "game": [{
            "id": "6",
            "img": "82_OnnelijaAnneli_HKT 2013_kuva Charlotte Estman-Wennström.jpg",
            "info": [{
              "genre": "Fantasia, satu",
              "Nimi": "Onneli ja Anneli, Helsingin Kaupunginteatteri (2013)",
              "Ohjaus": "Lilja Fischer",
              "Näyttelijät": "Jaakko Nieminen- Orpolapsi, Sari Haapamäki- Tangelstiina, Sampo Kerola- Orpolapsi",
              "Lavastus": "Katariina Kirjavainen",
              "Käsikirjoitus": "Marjatta Kurenniemi- Eppu Nuotio- Tuutikki Tolonen",
              "Puvustus": "Katariina Kirjavainen"  }]
        },
            {
                "id": "7",
                "img": "97068069_Viipurin Näyttämö 1929_Hamlet_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Hamlet, Viipurin Näyttämö (1929)",
                    "Käsikirjoittaja": "William Shakespeare"
                }]
            },
            {
                "id": "8",
                "img": "97048115_SKT 1926_Caesar ja Cleopatra_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Caesar ja Cleopatra, Suomen Kansallisteatteri (1926)",
                    "Ohjaus": "Pekka Alpo",
                    "Näyttelijät": "Ruth Snellman- Kleopatra, Paavo Jännes- Caesar",
                    "Käsikirjoitus": "George Bernard Shaw"
                }]
            },
            {
                "id": "9",
                "img": "97038121_SKT 1959_Uninäytelmä_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Uninäytelmä, Suomen Kansallisteatteri (1959)",
                    "Ohjaus": "Arvi Kivimaa",
                    "Näyttelijä": "Eeva-Kaarina Volanen- Indran tytär, Arvo Lehesmaa- Asianajaja",
                    "Lavastus": "Rolf Stegars",
                    "Käsikirjoitus": "August Strindberg",
                    "Puvustus": "Soili Soininen"
                }]
            },
            {
                "id": "10",
                "img": "Anna-Liisa (1)_ Savonlinnan kt 2004_kuva Sakari Martikainen.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Anna Liisa, Savonlinnan Kaupunginteatteri (2004)",
                    "Ohjaus": "Ritva Söderström",
                    "Näyttelijät": "Liisu Mikkonen- Anna-Liisa",
                    "Lavastus": "Jarmo Hirvonen",
                    "Käsikirjoitus": "Minna Canth"
                }]
            }]
    },
    {
        "slot": "3",
        "game": [{
            "id": "40",
            "img": "91_Tarzan_HKT 2014_kuva Mirka Kleemola Imagenary Oy.jpg",
            "info": [{
                "genre": "Fantasia, satu",
                "Nimi": "Tarzan, Helsingin Kaupunginteatteri (2014)",
                "Ohjaus": "Kari Rentola",
                "Lavastus": "Katariina Kirjavainen",
                "Käsikirjoitus": "Edgar Rice Burroughs- Phil Collins- David Henry Hwang",
                "Puvustus": "Elina Kolehmainen"
            }]
        },
            {
                "id": "11",
                "img": "03006010136_Turun kt 1974_Kirsikkapuisto_kuva Klaus Koszubatis.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Kirsikkapuisto, Turun Kaupunginteatteri (1974)",
                    "Ohjaus": "Ralf Långbacka",
                    "Näyttelijät": "Esko Pesonen- Gajev, Esko Salminen- Lopahin, Maikki Länsiö- Ljubov Andrejevna Ranevskaja, Paavo Tuominen- Firs",
                    "Lavastus": "Kaj Puumalainen",
                    "Käsikirjoitus": "Anton Tsehov",
                    "Puvustus": "Helvi Salo"
                }]
            },
            {
                "id": "12",
                "img": "97068538_Viipurin sotateatteri 1942_Keltainen prinssi_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Keltainen prinssi(Hymyn maa), Viipurin sotateatteri (1942)"
                }]
            },
            {
                "id": "13",
                "img": "09025045066_Kullervo_Turun kt 1982_kuvaaja Matti Kivekäs.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Kullervo, Turun Kaupunginteatteri (1982)",
                    "Ohjaus": "Jotaarkka Pennanen",
                    "Näyttelijät": "Lasse Saaristo- Kullervo, Marjukka Arasola- Ilmarin emäntä",
                    "Lavastus": "Juha Lukala",
                    "Käsikirjoitus": "Aleksis Kivi",
                    "Puvustus": "Merja Levo"
                }]
            },
            {
                "id": "14",
                "img": "billy5_HKT 2015_kuva Mirka Kleemola.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Billy Elliot, Helsingin Kaupunginteatteri (2015)",
                    "Ohjaus": "Markku Nenonen",
                    "Näyttelijät": "Lassi Hirvonen- Billy Elliot, Leena Uotila- isoäiti",
                    "Lavastus": "Jani Uljas ja Jari Ijäs",
                    "Käsikirjoitus": "Lee Hall- Elton John",
                    "Puvustus": "Elina Kolehmainen"
                }]
            }]
    },
    {
        "slot": "4",
        "game": [{
            "id": "15",
            "img": "115530_Kesäyön unelma_Viipurin Näyttämö 1930_kuvaaja tuntematon.jpg",
            "info": [{
                "genre": "Fantasia, satu",
                "Nimi": "Kesäyön unelma, Viipurin Näyttämö (1930)",
                "Ohjaus": "Otto Al'-Antila",
                "Näyttelijä": "Elli Rantala- Titania",
                "Käsikirjoitus": "William Shakespeare"
            }]
        },
            {
                "id": "16",
                "img": "aa109319_SKT 1940_Niskavuoren nuori emäntä_kuva Tyyne Savia.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Niskavuoren nuori emäntä, Suomen Kansallisteatteri (1940)",
                    "Ohjaus": "Eino Kalima",
                    "Näyttelijät": "Jorma Nortimo- Herrassyötinki, Mary Hannikainen- Vallesmanska, Kaisu Leppänen- Loviisa, Helmi Lindelöf- Herrassönskä, Uuno Montonen- Vallesmanni, Tyyne Haarla- Heta, Urho Somersalmi- Juhani, Taito Mäkelä- Tohtori, Eino Kaipainen- Antti, Senja Lehti- Kustaava.",
                    "Lavastus": "Matti Warén",
                    "Käsikirjoitus": "Juhani Tervapää (Hella Wuolijoki)"
                }]
            },
            {
                "id": "17",
                "img": "11026107003_HKT 1988_Siddhartha_kuva Kari Hakli.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Siddhartha- Prinssi valoa etsimässä, Helsingin Kaupunginteatteri (1988)",
                    "Ohjaus": "Ralf Forsström",
                    "Näyttelijä": "Harri Heikkinen- Siddhartha/Buddha",
                    "Lavastus": "Ralf Forsström",
                    "Käsikirjoitus": "Ralf Forsström"
                }]
            },
            {
                "id": "18",
                "img": "aitikortti-4746_SKT 2015_kuva Tuomo Manninen.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Äitikortti, Suomen Kansallisteatteri (2015)",
                    "Ohjaus": "Olka Horila",
                    "Näyttelijä": "Kreeta Salminen- Marjut, Joel Mäkinen- Jarkko, Meri Nenonen- Maarit, Petri Manninen- Janne, Aarni Kivinen- Jouni, Mari Lehtonen- Marja",
                    "Lavastus": "Katri Rentto",
                    "Käsikirjoitus": "Anu Silfverberg",
                    "Puvustus": "Katri Rentto"
                }]
            },
            {
                "id": "19",
                "img": "försäljarna2_HKT 2008_kuva Henrik Schütt.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Försäljarna, Helsingin Kaupunginteatteri (Lilla Teatern) (2008)",
                    "Ohjaus": "Pentti Kotkaniemi",
                    "Näyttelijät": "Tom Wentzel- George Aaronow, Asko Sarkola- Shelly Levene",
                    "Lavastus": "Jyrki Seppä",
                    "Käsikirjoitus": "David Mamet",
                    "Puvustus": "Jyrki Seppä"
                }]
            }]
    },
    {
        "slot": "5",
        "game": [{
            "id": "20",
            "img": "09035001_Prinsessa Ruusunen_Mikkelin Teatteri 1996_kuva Sirkku Sommarberg.jpg",
            "info": [{
                "genre": "Fantasia, satu",
                "Nimi": "Prinsessa Ruusunen, Mikkelin Teatteri (1996)",
                "Ohjaus": "Reijo Paukku",
                "Näyttelijät": "Henna Hyttinen- Prinsessa Ruusunen, Jukka Ruotsalainen- Prinssi Florestan",
                "Lavastus": "Reijo Paukku",
                "Käsikirjoitus": "Zacharias Topelius"
            }]
        },
            {
                "id": "21",
                "img": "aa115186_Porin Teatteri 1941_Niskavuoren nuori emäntä_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Niskavuoren nuori emäntä, Porin Teatteri (1941)",
                    "Ohjaus": "Glory Leppänen",
                    "Näyttelijät": "Ensio Jouko- Juhani, Aino Ahlgren- Vanha emäntä, Jenny Hjelmman- Heta, Sylvi Salonen- Kustaava",
                    "Käsikirjoitus":"Juhani Tervapää (Hella Wuolijoki)"
                }]
            },
            {
                "id": "22",
                "img": "030190172674_HKT 1976_Hasan_kuva Kari Hakli.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Hasan- Tuhannen ja yhden yön tarinoita, Helsingin Kaupunginteatteri (1976)",
                    "Ohjaus": "Risto Aaltonen",
                    "Lavastus": "Markku Sironen",
                    "Käsikirjoitus": "Pekka Suhonen"
                }]
            },
            {
                "id": "23",
                "img": "Kaspar Hauser_Q-teatteri 2014_kuva Pate Pesonius.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Kaspar Hauser, Q-teatteri (2014)",
                    "Ohjaus":"Johannes Ekholm, Akse Petterson",
                    "Näyttelijät": "Jussi Nikkilä, Eero Ritala",
                    "Lavastus": "Ville Seppänen",
                    "Käsikirjoitus": "Johannes Ekholm, Akse Pettersson",
                    "Puvustus": "Emmi Leeve"
                }]
            },
            {
                "id": "24",
                "img": "KattoKassinen11B_HKT 2005_kuva Tapio Vanhatalo .jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Katto-Kassinen, Helsingin Kaupunginteatteri (2005)",
                    "Ohjaus": "Kurt Nuotio",
                    "Näyttelijä": "Risto Kaskilahti- Neiti Pässinen",
                    "Lavastus": "Katariina Kirjavainen",
                    "Käsikirjoitus": "Astrid Lindgren",
                    "Puvustus": "Sari Salmela"
                }]
            }]
    },
    {
        "slot": "6",
        "game": [{
            "id": "25",
            "img": "97067178_Prinsessa Ruusunen_Tampereen Teatteri_kuvaaja tuntematon.jpg",
            "info": [{
                "genre": "Fantasia, satu",
                "Nimi": "Prinsessa Ruusunen; Tampereen Teatteri (1920-luku)",
                "Käsikirjoitus": "Zacharias Topelius"
            }]
        },
            {
                "id": "26",
                "img": "Amadeus2_SKT 1981_kuva Johnny Korkman_SKT laina.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Amadeus, Suomen Kansallisteatteri (1981)",
                    "Ohjaus": "Eugen Terttula",
                    "Näyttelijät": "Roger Nikkanen- Salierin palvelija, Jussi Jurkka- Antonio Salieri",
                    "Lavastus": "Anneli Qveflander",
                    "Käsikirjoitus": "Peter Shaffer",
                    "Puvustus": "Anneli Qveflander"
                }]
            },
            {
                "id": "27",
                "img": "99002003077_Helsingin Kansanteatteri 1936_Dshainah_kuva Ortho.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Dshainah, Helsingin Kansanteatteri (1936)",
                    "Ohjaus": "Eine Laine",
                    "Näyttelijät": "Malmi Vilppula- Dsainah-Lilo, Kyösti Erämaa- Pierre Claudel",
                    "Lavastus": "Lasse Elo",
                    "Käsikirjoitus": "Alfred Grünwald, Fritz Lähner-Beda, Paul Abraham"
                }]
            },
            {
                "id": "28",
                "img": "kristuksenmorsian_05_SKT 2010_kuva ehkä Petri Summanen.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Kristuksen morsian, Suomen Kansallisteatteri (2010)",
                    "Ohjaus": "Saana Lavaste",
                    "Lavastus": "Veera Laakso",
                    "Käsikirjoitus": "Heini Junkkaala"
                }]
            },
            {
                "id": "29",
                "img": "Pohjalla21_SKT 2014_kuva Stefan Bremer.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Pohjalla, Suomen Kansallisteatteri (2014)",
                    "Ohjaus": "Janne Reinikainen",
                    "Näyttelijät": "Pia Piltz- Natasha, Antti Pääkkönen- Andrei Mitrits Klests, Paula Siimes- Kvasnja, Inga Börn- Nastja, Pirjo Luoma-Aho- Paroni, Esa-Matti Long- Satin, Petri Manninen- näyttelijä, Tuomas Rinta-Panttila- Anton",
                    "Lavastus": "Kati Lukka",
                    "Käsikirjoitus": "Maksim Gorki"
                }]
            }]
    },
    {
        "slot": "7",
        "game": [{
            "id": "30",
            "img": "pekka10_HKT 2007_kuva Tapio Vanhatalo.jpg",
            "info": [{
                "genre": "Fantasia, satu",
                "Nimi": "Pekka Töpöhäntä, Helsingin Kaupunginteatteri (2007)",
                "Ohjaus": "Anneli Mäkelä",
                "Lavastus": "Katariina Kirjavainen",
                "Käsikirjoitus": "Gösta Knutsson",
                "Puvustus": "Sari Salmela"
            }]
        },
            {
                "id": "31",
                "img": "arsenikkia8_HKT 2010_kuva Tapio Vanhatalo.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Arsenikkia ja vanhoja pitsejä, Helsingin Kaupunginteatteri (2010)",
                    "Ohjaus": "Neil Hardwick",
                    "Näyttelijät": "Esko Roine- Abby Brewster, Asko Sarkola- Martha Brewster",
                    "Lavastus": "Jyrki Seppä",
                    "Käsikirjoitus": "Joseph Kesserling"
                }]
            },
            {
                "id": "32",
                "img": "99002004126_Helsingin KT-TT 1961_Teetä Tokiossa_kuvaaja tuntematon.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Teetä Tokiossa, Helsingin Kansanteatteri- Työväenteatteri (1961)",
                    "Näyttelijät": "Assi Nortia- Tateshe, Uljas Kandolin- Koichi Asano, Saara Ranin- Rouva Jakoby, Seppo Kolehmainen- Palveluspoika",
                    "Ohjaus": "Vivica Bandler",
                    "Lavastus": "Kalervo Hakala",
                    "Käsikirjoitus": "Leonard Spiegelglass"
                }]
            },
            {
                "id": "33",
                "img": "Press_Niskavuori3_Kuopion kt 2013_Niskavuoren nuori emäntä_kuva Mikko Mäntyniemi.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Niskavuoren nuori emäntä, Kuopion Kaupunginteatteri (2013)",
                    "Ohjaus": "Heini Tola",
                    "Näyttelijä": "Virpi Rautsiala- Loviisa",
                    "Lavastus": "Veera-Maija Murtola",
                    "Käsikirjoitus": "Juhani Tervapää (Hella Wuolijoki)",
                    "Puvustus": "Veera-Maija Murtola"
                }]
            },
            {
                "id": "34",
                "img": "Tarpeettomia6.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Tarpeettomia ihmisiä, KOM-teatteri (2003)",
                    "Ohjaus": "Reko Lundán",
                    "Näyttelijät": "Sari Mällinen- Tuula, Tiina Lymi- Sonja",
                    "Lavastus": "Teppo Järvinen",
                    "Käsikirjoitus": "Reko Lundán"
                }]
            }]
    },
    {
        "slot": "8",
        "game": [{
            "id": "35",
            "img": "rosvot9_HKT 2011_kuva Tapio Vanhatalo.jpg",
            "info": [{
                "genre": "Fantasia, satu",
                "Nimi": "Kolme iloista rosvoa, Helsingin Kaupunginteatteri (2011)",
                "Ohjaus": "Milko Lehto",
                "Näyttelijät": "Saana Saarijärvi- Leipuri, Ilkka Kokkonen- Soiton- ja uinninopettaja Antilla, Matti Laine- Kuljettaja Jytkynen, Inka Tiitinen- Ratikkatyttö",
                "Lavastus": "Katariina Kirjavainen",
                "Käsikirjoitus": "Thorbjörn Egner",
                "Puvustus": "Elina Kolehmainen"
            }]
        },
            {
                "id": "36",
                "img": "luulosairas28_SKT 2015_kuva Tuomo Manninen.jpg",
                "info": [{
                    "genre": "Historiallinen",
                    "Nimi": "Luulosairas, Suomen Kansallisteatteri (2015)",
                    "Ohjaus": "Art af Hällström",
                    "Lavastus": "Kati Lukka",
                    "Käsikirjoitus": "Moliére",
                    "Puvustus": "Tarja Simonen"
                }]
            },
            {
                "id": "37",
                "img": "Zambezi4091_Kassandrateatteri 2008_kuva Johnny Korkman.jpg",
                "info": [{
                    "genre": "Muut kulttuurit",
                    "Nimi": "Zambezi, Kassandrateatteri (2008)",
                    "Ohjaus": "Ritva Siikala",
                    "Näyttelijä": "Maryan Guuleed",
                    "Lavastus": "Ralf Forrström",
                    "Käsikirjoitus": "Bengt Ahlfros, Ritva Siikala",
                    "Puvustus": "Ralf Forsström"
                }]
            },
            {
                "id": "38",
                "img": "Resman_Wasa Teater 2015_Jorden runt på 80 dagar_kuva Mimmi Resman.jpg",
                "info": [{
                    "genre": "Pelkistys, tyylittely, nykyaika",
                    "Nimi": "Jorden runt på 80 dagar, Wasa Teater (2015)",
                    "Ohjaus": "Arn-Henrik Blomqvist",
                    "Näyttelijät":"Johan Fagerrud- Phileas Fogg, Sixten Stjernberg- Detektiv Fix",
                    "Lavastus": "Mimmi Resman",
                    "Käsikirjoitus": "Jules Verne",
                    "Puvustus": "Mimmi Resman"
                }]
            },
            {
                "id": "39",
                "img": "tiina2_Suomenhev_KOM 2004_kuva Riikka Palonen.jpg",
                "info": [{
                    "genre": "Realismi",
                    "Nimi": "Suomen hevonen, KOM-teatteri (2004)",
                    "Ohjaus": "Pekka Milonoff",
                    "Näyttelijät": "Marja Packalén- Aili, Tiina Lymi- Jaana, Hannu-Pekka Björkman- Ailin äite",
                    "Lavastus": "Eeva Ijäs",
                    "Käsikirjoittaja": "Sirkku Peltola",
                    "Puvut": "Niina Pasanen"
                }]
            }]
    }
];
