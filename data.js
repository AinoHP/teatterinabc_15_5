/*
 **********AJANTAJU******Käyttöohje*********************************
 *
 *          ****** Tärkeää *****
 *
 *       Jotta käyttökokemus ja esteettinen kokemus olisi kaikille sama ja miellyttävä, olisi suotavaa
 *       saada kuvista mahdollisimman saman kokoisia samaan taulukkoon/osioon. Resoluution iso
 *       vaihtelu taulukon/osion sisälllä, joko
 *
 *       -   skaalaa kuvat epämiellyttävän näköiseksi
 *       tai
 *      -   vaihtaa sivun asemointia,
 *
 *       joka puolestaan huonontaa käyttökokemusta.
 *
 *
 *
 *
 * imgFolder - Määrittele lainausmerkkien sisään kuvien kansioon polku. Oletuksena PÄÄKANSIO/assets/images/
 *
 * Tässä formaatissa ensin tulee tietueen nimi ja sen arvo. Esim name ja Hamlet. Nimi ja arvo erotellaan kaksoispisteellä ja ne kirjoitetaan aina lainausmerkkien sisään.
 * id - Älä vaihda. Avainarvo jokaiselle kohteelle.
 * name - Nimi
 * description - Kuvaus
 * thumbnail - Pääsivulla näkyvä kuva, jota käyttäjä klikkaa päästääkseen eteenpäin.
 * imgs - Sisältää viiden kuvan tietokannan, josta peli valitsee kuvat satunnaisessa järjestyksessä.
 *
 *
 *
 ***********************************************************************
 */
imgFolder = "assets/images/Pukusuunnittelu/Kaikki_kuvat/";
imgCol = [
    {
        "id": "1",
        "name": "Hamlet",
        "description": "Elli Tompurin kiertue 1913 ja 1914, Kuvaaja I. Nyman. <br>Elli Tompuri (Hamlet)",
        "thumbnail": "1_Elli_Tompurin_kiertue_1913_ja_1914_kuvaaja_I_Nyman_Sirjanelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "1_Tampereen_Tyovaen_Teatteri_1917_nelio.jpg", "desc": "Tampereen Työväen Teatteri 1917.<br>Aarne Orjatsalo (Hamlet)"},
            {"myvalue": "2", "img": "1_Kansan_Näyttämö_1927_nelio.jpg", "desc": "Elli Tompurin kiertue 1913 ja 1914, Kuvaaja I. Nyman. <br>Elli Tompuri (Hamlet)"},
            {"myvalue": "3", "img": "1_Svenska_Teatern_1963_nelio.jpg", "desc": "Svenska Teatern 1963, ohjaus Carl-Axel Heiknert, puvut Mirjami Lemponen. <br>May Pihlgren (Gertrud)<br>Eric Gustafsson (Klaudius)<br>Kurt Ingvall (Hamlet)<br>Sven Ehrström (Polonius)<br>Leif Wager (Laertes)"},
            {"myvalue": "4", "img": "1_Lilla_Teatern_1985_nelio.jpg", "desc": "Lilla Teatern 1985, ohjaus Benno Besson. Kuva: Jesus Moreno.<br>Elina Pohjanpää<br>Asko Sarkola (Hamlet)"},
            {"myvalue": "5", "img": "1_Q-teatteri_1995_nelio.jpg", "desc": "Q-teatteri 1995, ohjaus Erik Söderblom, puvut Pekka Ojamaa. Kuva: Patrik Pesonius.<br>Hannu Kivioja (Laertes)<br>Leea Klemola (Hamlet)"},
        ]
    },
    {
        "id": "2",
        "name": "Kullervo",
        "description": "Kiertuenäyttämö 1910-luvulla.<br>Erkki Karu (Kullervo)<br>Elli Kylmänen (Ainikki)",
        "thumbnail": "2_Kiertuenayttamo_1910-luku_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "2_Suomalainen_Teatteri_1895_nelio.jpg", "desc": "Suomalainen Teatteri 1895, kuva: Daniel Nyblin.<br>Mimmi Lähteenoja (äiti)<br>Kaarle Halme (Kullervo)"},
            {"myvalue": "2", "img": "2_Suomen_Kansallisteatteri_1918_nelio.jpg", "desc": "Suomen Kansallisteatteri 1918.<br>Jaakko Korhonen (Kullervo)"},
            {"myvalue": "3", "img": "2_Suomen_Kansallisteatteri_1934_nelio.jpg", "desc": "Suomen Kansallisteatteri 1934, ohjaus Pekka Alpo, (lav. Matti Warén).<br>Aarne Leppänen (Kullervo)"},
            {"myvalue": "4", "img": "2_Samppalinnan_kesateatteri_1960_nelio.jpg", "desc": "Samppalinnan kesäteatteri 1960, ohjaus Veikko Uusimäki.<br>Esko Salminen<br>Kaisu Leppänen"},
            {"myvalue": "5", "img": "2_KOM-teatteri_1975_nelio.jpg", "desc": "KOM-teatteri 1975, ohjaus Laura Jäntti, puvut: Paul Suominen. Kuva: Måns Hedström.<br>Erkki Saarela<br>Rea Mauranen"},
        ]
    }, {
        "id": "3",
        "name": "Nummisuutarit",
        "description": "Helsingin Kaupunginteatteri 1975, ohjaus Jouko Turkka. Kuva: Kari Hakli",
        "thumbnail": "3_Helsingin_Kaupunginteatteri_1975_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "3_Suomalainen_Maaseututeatteri_1914-1915_nelio.jpg", "desc": "Suomalainen Maaseututeatteri 1914-1915.<br>Ertta Virtamo (Iivari)<br>Kaarlo Braxén (Esko)<br>Iivari Paatero (Topias)<br>Rosa Pulkkinen (Anna-muori)<br>Otto Tuulos (eno Sakeri)<br>Aina Osa (Martta) <br>Simo Osa (Sepeteus)"},
            {"myvalue": "2", "img": "3_Turun_Tyovaen_Teatteri_1922_nelio.jpg", "desc": "Turun Työväen Teatteri 1922."},
            {"myvalue": "3", "img": "3_Svenska_Teatern_1932_nelio.jpg", "desc": "Svenska Teatern 1932, ohjaus Axel Slangus, (lav. Nils Wohlström). <br>Axel Slangus (Esko)<br>Waldemar Wohlström (Antres)<br>Sven Relander (Niko)<br>Jalo Lesche (Sakeri)<br>Erik Lindström (Iivari)"},
            {"myvalue": "4", "img": "3_Suomen_Kansallisteatteri_1951_nelio.jpg", "desc": "Suomen Kansallisteatteri 1951. Kuva: Kolmio.<br>Uuno Laakso (Lukkari)<br>Tyyne Haarla (Martta)<br>Vilho Siivola (Esko)"},
            {"myvalue": "5", "img": "3_Ryhmateatteri_Suomenlinnan_kesateatteri_1993_nelio.jpg", "desc": "Ryhmäteatteri/Suomenlinnan kesäteatteri 1993, ohjaus: Arto Af Hällström, puvut Marja Uusitalo. Kuva: Stefan Bremer.<br>Sari Havas (Kreeta)<br>Risto Kaskilahti (Mikko Vilkastus)<br>Sari Puumalainen (Jaana) <br>Martti Suosalo (Esko)"},
        ]
    },
    {
        "id": "4",
        "name": "Kolme sisarta",
        "description": "KOM-teatteri 1979, ohjaus Kaisa Korhonen, puvut Måns Hedström. Kuva: Rauno Träskelin.<br>Marja-Leena Kouki (Masa)<br>Pekka Milonoff (Kulygin Fjodor)<br>Sinikka Sokka (Irina)<br>Rose-Marie Precht (Olga)<br>Vesa Repo (Soljonyi)",
        "thumbnail": "4_KOM-teatteri_1979_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "4_Suomen_Kansallisteatteri_1947_nelio.jpg", "desc": "Suomen Kansallisteatteri 1947, ohjaus Eino Kalima, puvut Oili Soini. Kuva: Kolmio.<br>Kirsti Ortola (Natalja Ivanovna)<br>Vilho Siivola (Andrei)"},
            {"myvalue": "2", "img": "4_Suomen_Kansallisteatteri_1971-1972_nelio.jpg", "desc": "Suomen Kansallisteatteri 1971-1972, ohjaus Georgi Tovstonogov, puvut Sovia Junovitsh. Kuva: Kari Hakli.<br>Tea Ista (Masa)<br>Elli Castrén (Irina)<br>Martti Järvinen (paroni Tuzenbach)<br>Esa Saario (Soljonyi)<br>Risto Palm (Fedotik)"},
            {"myvalue": "3", "img": "4_KOM-teatteri_1979_nelio.jpg", "desc": "KOM-teatteri 1979, ohjaus Kaisa Korhonen, puvut Måns Hedström. Kuva: Rauno Träskelin.<br>Marja-Leena Kouki (Masa)<br>Pekka Milonoff (Kulygin Fjodor)<br>Sinikka Sokka (Irina)<br>Rose-Marie Precht (Olga)<br>Vesa Repo (Soljonyi)"},
            {"myvalue": "4", "img": "4_Turun_kaupunginteatteri_1985_nelio.jpg", "desc": "Turun Kaupunginteatteri 1985, ohjaus Taisto-Bertil Orsmaa. Kuva: Matti Kivekäs.<br>Riitta-Liisa Helminen (Masha)<br>Lasse Saaristo (Prozorov)<br>Marjukka Arasola (Olga)<br>Pirkko Hämäläinen (Irina)"},
            {"myvalue": "5", "img": "4_Kuopion_Kaupunginteatteri_2000_nelio.jpg", "desc": "Kuopion Kaupunginteatteri 2000, ohjaus Heini Tola, puvut Måns Hedström. Kuva: Måns Hedström.<br>Heikki Törmi (Prozorov)<br>Ullariikka Koskela (Irina)<br>Ilkka Pentti (Rode)<br>Jukka Auvinen (Tsebutykin)<br>Tuure Himanka (Fedotik)<br>Tiina Karvinen (Masa)<br>Heikki Railevirta (Tuzenbach)"},
        ]
    }, {
        "id": "5",
        "name": "Anna Liisa",
        "description": "Helsingin Työväen Teatteri 1948, ohjaus Arvi Tuomi,  (lav. Leo Lehto).<br>Uljas Kandolin (Mikko)<br>Vappu Jurkka (Anna Liisa)<br>Esko Vettenranta(Johannes)",
        "thumbnail": "5_Helsingin_Tyovaen_Teatteri_1948_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "5_Kansan_Nayttamo_1924_nelio.jpg", "desc": "Kansan Näyttämö 1924. Kuva: Atelier Ortho.<br>Sylvia Paatero (Pirkko)<br>Eine Laine (Anna Liisa)"},
            {"myvalue": "2", "img": "5_Jyvaskylan_Tyovaen_Teatteri_1944_nelio.jpg", "desc": "Jyväskylän Työväen Teatteri 1944, ohjaus Nisse Karlo. Kuva: Antti Lahtinen.<br>Martta Karlo (Husso) <br>Aune Hurme-Virtanen (Anna Liisa)"},
            {"myvalue": "3", "img": "5_Suomen_Kansallisteatteri_1972_nelio.jpg", "desc": "Suomen Kansallisteatteri 1972, ohjaus Sakari Puurunen, puvut Timo Sarpaneva. Kuva: Kari Hakli.<br>Elli Castrén (Anna Liisa)<br>Arto Tuominen (Mikko)"},
            {"myvalue": "4", "img": "5_Kotkan_Kaupunginteatteri_1989_nelio.jpg", "desc": "Kotkan Kaupunginteatteri 1989, ohjaus Erik Söderblom (vierailija). Kuva: Pekka Syvänen.<br>Salme Karppinen (Husso)<br>Irja Korhonen (Anna Liisa)<br>Kylli Köngäs (Pirkko)"},
            {"myvalue": "5", "img": "5_Tampereen_Tyovaen_Teatteri_2011_nelio.jpg", "desc": "Tampereen Työväen Teatteri 2011, ohjaus Sirkku Peltola, puvut Marjaana Mutanen.<br>Kuva: Jyrki Tervo."}
        ]
    },
    {
        "id": "6",
        "name": "Daniel Hjort",
        "description": "Helsingin Kansanteatteri – Työväenteatteri 1950, ohjaus Glory Leppänen. Kuva: Kolmio.<br>Saara Ranin<br>Martti Katajisto",
        "thumbnail": "6_Helsingin_Kansanteatteri_Tyovaenteatteri_1950_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "6_Suomen_Kansallisteatteri_1924_tai_1930_nelio.jpg", "desc": "Suomen Kansallisteatteri 1924 tai 1930.<br>Hilda Pihlajamäki<br>Matti Kiianlinna"},
            {"myvalue": "2", "img": "6_Viipurin_Nayttamo_1925-1926_nelio.jpg", "desc": "Viipurin Näyttämö 1925-1926, ohjaus Eino Jurkka.<br>Eino Jurkka (Piispa Sorolainen)<br>Joel Rinne (Daniel Hjort)<br>Rosi Rinne (Sigrid)<br>Ragnhild Peitsalo (Katri)"},
            {"myvalue": "3", "img": "6_Tampereen_Tyovaen_Teatteri_1941_nelio.jpg", "desc": "Tampereen Työväen Teatteri 1941, ohjaus Edvin Laine, (lav. Jussi Kari).<br>Helvi Erjakka<br>Kaarlo Kytö"},
            {"myvalue": "4", "img": "6_Vaasan_Kaupunginteatteri_1978_nelio.jpg", "desc": "Vaasan Kaupunginteatteri 1978, ohjaus Taisto-Bertil Orsmaa, puvut Kirsti Aho.<br>Kari Väänänen (Daniel Hjort)<br>Lahja Wilén (Katri)"},
            {"myvalue": "5", "img": "6_Teatterikorkeakoulu_1983_nelio.jpg", "desc": "Teatterikorkeakoulu 1983, ohjaus Jouko Turkka, puvut Tuula Laine ja Heikki Salonen. Kuva: Timo Simpanen.<br>Riitta Havukainen"},
        ]
    }, {
        "id": "7",
        "name": "Romeo ja Julia",
        "description": "Kansan Näyttämö 1934, ohjaus Mia Backman.<br>Fritz-Hugo Backman (Romeo)<br>Helvi Järveläinen (Julia)",
        "thumbnail": "7_Kansan_Nayttamo_1934_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "7_Suomalainen_teatteri_1881_nelio.jpg", "desc": "Suomalainen Teatteri 1881, ohjaus Kaarlo Bergbom.<br>Axel Ahlberg (Romeo)<br>Ida Aalberg (Julia)"},
            {"myvalue": "2", "img": "7_Suomen_Kansallisteatteri_1918_nelio.jpg", "desc": "Suomen Kansallisteatteri 1918, ohjaus Eino Kalima.<br>Hemmo Kallio (Lorenzo)<br>Aili Somersalmi (Julia) <br>Jussi Snellman (Romeo)"},
            {"myvalue": "3", "img": "7_Ryhmateatteri_1995_nelio.jpg", "desc": "Ryhmäteatteri 1995, ohjaus Arto af Hällström, puvut Marja Uusitalo. Kuva: Kari Hakli.<br>Liisa Mustonen (Julia)<br>Martti Suosalo (Romeo)"},
            {"myvalue": "4", "img": "7_Oulun_Kaupunginteatteri_2000_nelio.jpg", "desc": "Oulun Kaupunginteatteri 2000, ohjaus Maarit Pyökäri, puvut Pasi Räbinä. Kuva: Mika Friman<br>Mikko Leskelä (Romeo)<br>Olka Horila (Julia)"},
            {"myvalue": "5", "img": "Seinajoen_kaupunginteatterin_kuvapankista_2014_nelio.jpg", "desc": "Seinäjoen kaupunginteatteri 2014, ohjaus Antti Mikkola, Riikka Aurasmaa. <br>Anna Ackerman (Julia)<br>Topi Kohonen (Romeo)"}
        ]
    },
    {
        "id": "8",
        "name": "Seitsemän veljestä",
        "description": "Kansan Näyttämö 1931, ohjaus Teuvo Puro, Kuva Ortho.<br>Fred Idström (Lauri)<br>Hugo Hytönen (Lukkari)<br>Kaarlo Saarnio (Timo)<br>Rafael Pihlaja (Aapo)<br>Einar Rinne (Tuomas)<br>Kyösti Erämaa (Juhani)<br>Friz-Hugo Backman (Eero)<br>Ossi Korhonen (Simeoni)",
        "thumbnail": "8_Kansan_Nayttamo_1931_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "8_Sornaisten_Tyovaen_Nayttamo_1913_nelio.jpg", "desc": "Sörnäisten Työväen Näyttämö 1913"},
            {"myvalue": "2", "img": "8_Kansan_Nayttamo_1931_nelio.jpg", "desc": "Kansan Näyttämö 1931, ohjaus Teuvo Puro, Kuva Ortho.<br>Fred Idström (Lauri)<br>Hugo Hytönen (Lukkari)<br>Kaarlo Saarnio (Timo)<br>Rafael Pihlaja (Aapo)<br>Einar Rinne (Tuomas)<br>Kyösti Erämaa (Juhani)<br>Friz-Hugo Backman (Eero)<br>Ossi Korhonen (Simeoni)"},
            {"myvalue": "3", "img": "8_Viipurin_Nayttamo_1931_nelio.jpg", "desc": "Viipurin Näyttämö 1931, ohjaus Sven Hildén.<br>Artturi Laakso (Juhani)<br>Yrjö Hämäläinen (Aapo)<br>Onni Timonen (Tuomas)<br>Leo Saxberg (Simeoni)<br>Armas Immonen (Timo)<br>Toivo Mäkelä (Lauri)<br>Arvo Lehesmaa (Eero)<br>Runar Idefelt (Lukkari)"},
            {"myvalue": "4", "img": "8_Kuopion_Yhteisteatteri_1940_nelio.jpg", "desc": "Kuopion Yhteisteatteri 1940.<br>Urho Lahti (Aapo)<br>Mikko Lappalainen (Juhani)<br>Kalle Lappalainen (Simeoni)<br>Sulo Jokela (Tuomas)<br>Tauno Lehtihalmes (Timo)<br>Esko Tuomi (Lauri)<br>Osmo Karhunen (Esko) "},
            {"myvalue": "5", "img": "8_Turun_kaupunginteatteri_1972_nelio.jpg", "desc": "Turun kaupunginteatteri 1972 (kuva on vuodelta 1973), ohjaus Kalle Holmberg, puvut Måns Hedström. Kuva: Klaus Koszubatis.<br>Heikki Alho (Simeoni)<br>Vesa-Matti Loiri (Tuomas)<br>Arno Virtanen (Timo)<br>Heikki Kinnunen (Aapo)<br>Ilari Paatso (Lauri)<br>Juha Muje (Eero)<br>Esko Salminen (Juhani)<br>Kapo Manto (Lukkari)<br>Maria Nuotio (Lukkarin tytär)"}
        ]
    }, {
        "id": "9",
        "name": "Niskavuoren nuori emäntä",
        "description": "Kuvaus tähän",
        "thumbnail": "9_Helsingin_Kaupunginteatteri_1977_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "9_Porin_teatteri_1941_nelio.jpg", "desc": "Porin teatteri 1941, ohjaus Glory Leppänen.<br>Glory Leppänen (Loviisa)<br>Dagi Angervo (Malviina)"},
            {"myvalue": "2", "img": "9_Helsingin_Kaupunginteatteri-Tyovaenteatteri_1957_nelio.jpg", "desc": "Helsingin Kaupunginteatteri-Työväenteatteri 1957, ohjaus Ture Junttu, puvut Helvi Taisto. Kuva: Ädhäm Fethulla.<br>Uljas Kandolin (Juhani Niskavuori)<br>Terttu Soinvirta (Malviina)<br>Marja Korhonen (Loviisa Niskavuori)"},
            {"myvalue": "3", "img": "9_Helsingin_Kaupunginteatteri_1977_nelio.jpg", "desc": "Helsingin Kaupunginteatteri 1977, ohjaus Jouko Turkka, puvut Kaarina Hieta. Kuva: Kari Hakli.<br>Veikko Honkanen (Juhani Niskavuori)<br>Maija-Liisa Turkka (Loviisa Niskavuori)"},
            {"myvalue": "4", "img": "9_Suomen_Kansallisteatteri_2004_nelio.jpg", "desc": "Suomen kansallisteatteri 2004, ohjaus Juha Lehtola, puvut Kristiina Saha. Kuva: Leena Klemelä. <br>Markku Malismaa (Juhani)<br>Minttu Mustakallio (Heta)"},
            {"myvalue": "5", "img": "9_Kotkan_Kaupunginteatteri_2013_nelio.jpg", "desc": "Kotkan Kaupunginteatteri 2013, ohjaus Tommi Kainulainen, puvut Siru Kosonen. Kuva: Juha Lahtinen.<br>Mikkomarkus Ahtiainen (Juhani)<br>Ella Mustajärvi (Loviisa)"}
        ]
    },
    {
        "id": "10",
        "name": "Nukkekoti",
        "description": "Jyväskylän Kaupunginteatteri 1980, ohjaus Raiku Kemppi.<br>Minna Aro (Nora)<br>Eino Airo (Helmer)",
        "thumbnail": "10_Jyvaskylan_Kaupunginteatteri_1980_nelio.jpg",
        "imgs": [
            {"myvalue": "1", "img": "10_Suomalainen Teatteri_1880_nelio.jpg", "desc": "Suomalainen Teatteri 1880, ohjaus Kaarlo Bergbom. Kuva: Daniel Nyblin.<br>Elli Tompuri (Nora)"},
            {"myvalue": "2", "img": "10_Suomen-Kansallisteatteri_1930_nelio.jpg", "desc": "Suomen Kansallisteatteri 1930, ohjaus Eino Kalima. Kuva: Savia.<br>Elli Tompuri (Nora)"},
            {"myvalue": "3", "img": "10_Kotkan_Kaupunginteatteri_1961_nelio.jpg", "desc": "Kotkan Kaupunginteatteri 1961, ohjaus Raoul af Hällström. Kuva: Valokuvausliike A.G. Salonen<br>Rolf Labbart (Thorvald Helmer)<br>Martti Pennanen (Tohtori Rank)<br>Liisa Roine (Nora)<br>Lahja Wilén (Kristine Linde)"},
            {"myvalue": "4", "img": "10_Kuopion-Kaupunginteatteri_1979_nelio.jpg", "desc": "Kuopion Kaupunginteatteri 1979, ohjaus Kaija Siikala, puvut Markku Sirén. <br>Jaakko Haapanen<br>Soili Markkanen"},
            {"myvalue": "5", "img": "10_Tampereen_Teatteri_2002_nelio.jpg", "desc": "Tampereen Teatteri 2002, ohjaus Ritva Holmberg, puvut Milja Salovaara. Kuva: Harri Hinkka.<br>Anna-Elina Lyytikäinen (Nora)<br>Jukka Leisti (Nils Krogstad)"}
        ]
    }];

/*
 *********** Muodonmuutoksen data *****************************************
 *
 *
 *
 *
 *
 * Tässä formaatissa ensin tulee tietueen nimi ja sen arvo. Esim name ja Hamlet. Nimi ja arvo erotellaan kaksoispisteellä ja ne kirjoitetaan aina lainausmerkkien sisään.
 * name - Esityksen nimi
 * description - Kuvaus esitelmästä
 * img - Pukukuva, jota käyttäjä muokkaa.
 * originImg - Esityskuva, tulee pelin loppuun.
 *
 *
 *
 ***********************************************************************
 */
imgArr = [
    {
        "name": "Esityskuvan nimi",
        "description": "Useita käyttäjiä, käännetystä rakuunaunivormusta tehty renessanssihenkinen yläosa, Lahden työväenteatteri",
        "img": "MM_Pukukuva_useita-kayttajia_renessanssihenkinen_ylaosa.png",
        "originImg": "MM_Esityskuva_useita-kayttajia_renessanssihenkinen-ylaosa.jpg",
	"firstname": "Etu",
	"lastname": "Suku"
    },
    {
        "name": "Tansseja ja draamallisia kuvaelmia",
        "description": "Ella Eronen - Groteski, Tansseja ja draamallisia kuvaelmia -ilta, Suomen Kansallisteatteri 1933, puvut ja ohjaus Ella Eronen.",
        "img": "MM_Pukukuva_Ella Eronen_Groteski.png",
        "originImg": "MM_Esityskuva_Ella Eronen_Groteski_kuvaaja H. Iffland_90010451.jpg"

    },
    {
        "name": "Harhatunteet",
        "description": "Eeva-Kaarina Volanen - Markiisitar, Marivaux: Harhatunteet, Suomen Kansallisteatteri 1977, puvut Liisi Tandefelt, ohjaus Esko Elstelä. Kuva Mauri Helenius",
        "img": "teatteri abc puvut-4-leikattu_800px.png",
        "originImg": "MM_Esityskuva_Eeva-Kaarina Volanen_Markiisitar_kuvaaja Mauri Helenius_UK_SKT laina.jpg"
    },
    {
        "name": "Amadeus",
        "description": "Jussi Jurkka - Antonio Salieri, Shaffer: Amadeus, Suomen Kansallisteatteri 1981, puvut Anneli Qveflander, ohjaus Eugen Terttula. Kuva Johnny Korkman",
        "img": "MM_Pukukuva_Jussi Jurkka_Salieri.png",
        "originImg": "MM_Esityskuva_Jussi Jurkka_Salieri_kuvaaja Johnny Korkman_UK_SKT laina.jpg"
    },
    {
        "name": "Anna Bolena",
        "description": "Riikka Hakola - Anna Bolena, Donizetti: Anna Bolena, Suomen Kansallisooppera 1998, puvut Anna Kontek, ohjaus Jussi Tapola. Kuva Heikki Tuuli",
        "img": "MM_Pukukuva_Riikka Hakola_Anna Bolena.png",
        "originImg": "MM_Esityskuva_Riikka Hakola_Anna_Bolena_kuvaaja Heikki Tuuli_Ooppera laina1.jpg"
    },
    {
        "name": "Anna Bolena",
        "description": "Riccardo Zanellato - Enrico III, Donizetti: Anna Bolena, Suomen Kansallisooppera 1998, puvut Anna Kontek, ohjaus Jussi Tapola. Kuva Heikki Tuuli",
        "img": "MM_Pukukuva_Riccardo Zanellato_Enrico III.png",
        "originImg": "MM_Esityskuva_Riikka Hakola_Anna_Bolena_kuvaaja Heikki Tuuli_Ooppera laina2.jpg"
    },
    {
        "name": "Renessanssityylinen tyyppipuku",
        "description": "Useita käyttäjiä - renessanssityylinen tyyppipuku, 1900-luvun alku, tilattu luultavasti Saksasta.",
        "img": "MM_Pukukuva_useita käyttäjiä_renessanssityyppipuku.png",
        "originImg": "MM_Esityskuva_useita käyttäjiä_renessanssityyppipuku_Oiva Soini_Kreivi Nevers_kuvaaja Tenhovaara_Ooppera laina.jpg"
    },
    {
        "name": "Päivä tuhannesta",
        "description": "Teuvo Puro – Henrik III, Maxwell: Päivä tuhannesta, Suomen kansallisteatteri 1951, puvut Rolf Stegars, ohjaus Arvi Kivimaa.",
        "img": "MM_Pukukuva_Teuvo Puro_Henrik III.png",
        "originImg": "MM_Esityskuva_Teuvo Puro_Henrik VIII_kuva Kolmio_SKT laina.jpg"
    },
    {
        "name": "Viuhka",
        "description": "Useita käyttäjiä – rokokootakki. Tauno Palo käytti roolissa Paroni Del Chedron näytelmässä Viuhka  vuonna 1935, kuvassa Aarne Leppänen näytelmässä Porvari aatelismiehenä. Suomen Kansallisteatteri 1917 ja 1923, 1800-1900 -lukujen vaihteesta, luultavasti tilattu Saksasta.",
        "img": "MM_Pukukuva_useita käyttäjiä_rokokoo_Tauno Palo.png",
        "originImg": "MM_Esityskuva_useita käyttäjiä_rokokoo_Tauno Palo_Paroni Del Chedro_Viuhka_kuva Savia_SKT laina_rajattava.jpg"
    },
    {
        "name": "Romeo och Giulietta",
        "description": "Veronika Mattsson - Giulietta, Shakespeare: Romeo och Giulietta, Svenska Teatern 1976.",
        "img": "MM_Pukukuva_Christina Indrenius-Zalewski_Contessa Cappelletti.png",
        "originImg": "MM_Esityskuva_Christina Indrenius-Zalewski_Contessa Cappelletti_kuvaaja luultavasti Peter Widen_Svenskan laina.jpg"
    },
    {
        "name": "Elinan surma",
        "description": "Aili Somersalmi – Kirsti, Jotuni: Elinan surma. Suomen Kansallisteatteri 1942",
        "img": "MM_Pukukuva_Airi Somersalmi_Kirsti.png",
        "originImg": "MM_Esityskuva_Aili Somersalmi_Kirsti_Klaus Louhikon herra_kuva Kolmio_Museovirasto laina tai SKT laina_HK19570919_48.jpg"
    },
    {
        "name": "Goottilaistyylinen tyyppipuku",
        "description": "Useita käyttäjiä - goottilaistyylinen tyyppipuku, Svenska Teatern 1800-1900 -lukujen vaihteesta, tilattu luultavasti Saksasta.",
        "img": "MM_Pukukuva_useita käyttäjiä_goottilaistyylinen tyyppipuku 1800-1900 -vaihteesta.png",
        "originImg": "MM_Esityskuva_useita käyttäjiä_goottilaistyylinen tyyppipuku_Oulun työväen näyttämö 1974_kuvaaja Viena Maija Rotko_97042009.jpg"
    },
    {
        "name": "Varhaiskeskiaikainen tyyppipuku",
        "description": "Useita käyttäjiä - varhaiskeskiaikainen tyyppipuku, Svenska Teatern 1800-1900 -lukujen vaihteesta, luultavasti tilattu Saksasta.",
        "img": "MM_Pukukuva_useita käyttäjiä_varhaiskeskiaikainen naisen tyyppipuku.png",
        "originImg": "MM_Esityskuva_useita käyttäjiä_varhaiskeskiaikainen naisen tyyppipuku_Oili Jaatinen_Ofelia_Hamlet_Atelier Laurent_07032103001.jpg"
    },
    {
        "name": "Keskiaikainen tyyppipuku",
        "description": "Miehen keskiaikainen tyyppipuku 1800-1900 –lukujen vaihteesta.",
        "img": "MM_Pukukuva_useita käyttäjiä_miehen keskiaikainen tyyppipuku.png",
        "originImg": "MM_Esityskuva_useita käyttäjiä_miehen keskiaikainen tyyppipuku_Elinan surma_Porin näyttämö 1926 ehkä_kuvaaja tuntematon_97055081.jpg"
    },
    {
        "name": "Husaarin takki",
        "description": "Useita käyttäjiä - husaarin takki, Svenska Teatern 1900-luvulta 1960-luvulle.",
        "img": "MM_Pukukuva_useita käyttäjiä_husaaritakki.png",
        "originImg": "MM_Esityskuva_useita käyttäjiä_husaaritakki_Husarfeber 1924_10007064001.jpg"
    },
    {
        "name": "Anna Karenina",
        "description": "Mari Palo tai Riikka Rantanen – Anna Karenina, Tolstoi: Anna Karenina, 1800-luvun lopun turnyyripuku, Lahden kaupunginteatteri 2000, puvut Kaija Salaspuro, ohjaus Jotaarkka Pennanen.",
        "img": "MM_Pukukuva_Mari Palo tai Riikka Rantanen_Anna Karenina.png",
        "originImg": "MM_Esityskuva_Mari Palo tai Riikka Rantanen_Anna_Karenina_kuvaaja Kari Hakli_Lahti laina24.jpg"
    },
    {
        "name": "Aurora",
        "description": "Pirjo Luoma-Aho – Aurora Karamzin, Lampela: Aurora. Espoon Kaupunginteatteri 2002, puvut Johanna Viitanen, ohjaus Petteri Granström.",
        "img": "MM_Pukukuva_Pirjo Luoma-aho_Aurora.png",
        "originImg": "MM_Esityskuva_Pirjo Luoma-aho_Aurora_tulosteesta_skannattu.jpg"
    },
    {
        "name": "Romea ja Julia",
        "description": "Mikko Leskelä – Romeo, Shakespeare: Romeo ja Julia, Oulun kaupunginteatteri 2000, puvut Pasi Räbinä, ohjaus  Maarit Pyökäri.",
        "img": "MM_Pukukuva_Mikko Leskelä_Romeo.png",
        "originImg": "MM_Esityskuva_Mikko Leskelä_Romeo_kuvaaja Mika Friman_Oulu laina.jpg"
    },
    {
        "name": "Romea ja Julia",
        "description": "Olka Horila – Julia, Oulun kaupunginteatteri 2000, puvut Pasi Räbinä, ohjaus Maarit Pyökäri. Kuva Mika Friman.",
        "img": "MM_Pukukuva_Olka Horila_Julia.png",
        "originImg": "MM_Esityskuva_Olka Horila_Julia_kuvaaja Mika Friman_Oulu laina.jpg"
    },
    {
        "name": "Romea ja Julia",
        "description": "Jouko Turkka – Romeo, Shakespeare: Romeo ja Julia, Seinäjoen kaupunginteatteri 1968, pukusuunnittelu Toppo Nousiainen.",
        "img": "MM_Pukukuva_Jouko Turkka_Romeo.png",
        "originImg": "MM_Esityskuva_Jouko Turkka_Romeo_kuvaaja Kalevi A. Mäkinen_Seinäjoki laina.jpg"
    },
    {
        "name": "Don Louis",
        "description": "Kurt Ingvall – Don Louis / Kommendörens staty / Don Juans far, Molière: Don Juan, Svenska Teatern 1977, puvut Liisi Tandefelt. UK julkaisun kuvat: Peter Widén",
        "img": "MM_Pukukuva_Kurt Ingvall_Don Louis.png",
        "originImg": "MM_Esityskuva_Kurt Ingvall_Don Louis_kuvaaja Peter Widen_Svenska laina.jpg"
    },
    {
        "name": "Hamlet",
        "description": "Leea Klemola - Hamlet, Shakespeare: Hamlet, Q-teatteri 1993, puvut Pekka Ojamaa, ohjaus Erik Söderblom.",
        "img": "MM_Pukukuva_Leea Klemola_Hamlet.png",
        "originImg": "MM_Esityskuva_Leea Klemola_Hamlet_kuvaaja Patrik Pesonius_lupa OK_09004029003.jpg"
    },
    {
        "name": "Hamlet",
        "description": "Heli Takala - Ofelia, Shakespeare: Hamlet, Q-teatteri 1993, puvut Pekka Ojamaa, ohjaus Erik Söderblom.",
        "img": "MM_Pukukuva_Heli Takala_Ofelia.png",
        "originImg": "eikuvaa.jpg"
    },
    {
        "name": "Kaksi kuningatarta",
        "description": "Emmi Jurkka (1899-1990) - Kuningatar Elisabet, Schiller: Kaksi kuningatarta, Teatteri Jurkka 1975.",
        "img": "MM_Pukukuva_Emmi Jurkka_Kuningatar Elisabet.png",
        "originImg": "MM_Esityskuva_Emmi Jurkka_Kuningatar Elisabet_kuvaaja Patrick Oras_Jurkka laina.jpg"
    },
    {
        "name": "Myrsky",
        "description": "Salme Laakkonen - Miranda, Shakespeare: Myrsky, Tampereen Työväen Teatteri 1973, puvut Liisi Tandefelt, ohjaus Esko Elstelä.",
        "img": "MM_Pukukuva_Salme Laakkonen_Miranda.png",
        "originImg": "MM_Esityskuva_Salme Laaksonen_Miranda_Myrsky_kuvaaja Timo Palm_95024002010.jpg"
    },
    {
        "name": "Romeo ja Julia",
        "description": "Marc Gassot - Romeo, Shakespeare: Romeo ja Julia, Turun Kaupunginteatteri 2008, puvut Tuomas Lampinen, ohjaus Juha Siltanen.",
        "img": "MM_Pukukuva_Marc Gassot_Romeo.png",
        "originImg": "MM_Esityskuva_Marc Gassot_Romeo_kuvaaja Robert Seger_Turku laina.jpg"
    },
    {
        "name": "Romeo ja Julia",
        "description": "Anneli Juustinen - Lady Montague, Shakespeare: Romeo ja Julia, Oulun Kaupunginteatteri 2000, puvut Pasi Räbinä, ohjaus Maarit Pyökäri. Kuva Mika Friman.",
        "img": "MM_Pukukuva_Anneli Juustinen_Lady Montague.png",
        "originImg": "MM_Esityskuva_Anneli Juustinen_Lady Montague_kuvaaja Mika Friman_10028013.jpg"
    },
    {
        "name": "Romeo ja Julia",
        "description": "Jorma Koho - Capulet, Shakespeare: Romeo ja Julia, Oulun Kaupunginteatteri 2000, puvut Pasi Räbinä, ohjaus Maarit Pyökäri. Kuva Mika Friman.",
        "img": "MM_Pukukuva_Jorma Koho_Capulet.png",
        "originImg": "MM_Esityskuva_Jorma Koho_Capulet_kuvaaja Mika Friman_Oulu laina.jpg"
    },
    {
        "name": "Porvari aatelismiehenä",
        "description": "Miina Turunen - Nicole, Molière: Porvari aatelismiehenä, Helsingin Kaupunginteatteri 2002, puvut Sari Salmela, ohjaus Arto af Hällström. Kuva Tapio Vanhatalo.",
        "img": "MM_Pukukuva_Miina Turunen_Nicole.png",
        "originImg": "eikuvaa.jpg"
    },
    {
        "name": "Patarouva",
        "description": "Tatjana Romanova - Naamiaisjuhlan vieras, Tshaikovski: Patarouva, Suomen Kansallisooppera 2005, puvut Kimmo Viskari, ohjaus Vilppu Kiljunen.",
        "img": "MM_Pukukuva_Tatjana Romanova_Naamiaisjuhlan vieras.png",
        "originImg": "MM_Esityskuva_Tatjana Romanova_Naamiaisjuhlan vieras_patarouva_kuvaaja Heikki Tuuli_Ooppera laina.jpg"
    },
    {
        "name": "Patarouva",
        "description": "Ilkka Hämäläinen - Seremoniamestari, Tshaikovski: Patarouva, Suomen Kansallisooppera 2005 (kuva vuodelta 2007), puvut Kimmo Viskari, ohjaus Vilppu Kiljunen.",
        "img": "MM_Pukukuva_Ilkka Hämäläinen (Eugen Antoni)_Seremoniamestari.png",
        "originImg": "MM_Esityskuva_Eugen Antoni_Seremoniamestari_patarouva_kuvaaja Heikki Tuuli_Ooppera laina.jpg"
    },
    {
        "name": "Galilein elämä",
        "description": "Esko Salminen - Paavi, Brecht: Galilein elämä, Turun kaupunginteatteri 1973, puvut Liisi Tandefelt, ohjaus Ralf Långbacka.",
        "img": "MM_Pukukuva_Esko Salminen_Paavi.png",
        "originImg": "MM_Esityskuva_Esko Salminen_Paavi_kuvaaja Klaus Koszubatis_lupa ok_03006006101.jpg"
    },
    {
        "name": "Kuningas lähtee Ranskaan",
        "description": "Savonlinna oopperakuoron jäsen - Sotilas, Sallinen: Kuningas lähtee Ranskaan, Savonlinnan oopperajuhlat 1984, puvut Ralf Forsström, ohjaus Ralf Långbacka.",
        "img": "MM_Pukukuva_Sotilas_Kuningas lähtee Ranskaan.png",
        "originImg": "MM_Esityskuva_Sotilas_Kuningas lähtee Ranskaan_skannattu kirjasta.jpg"
    },
    {
        "name": "Kullervo",
        "description": "Paula Etelävuori - Unton vaimo, Kivi/Sallinen: Kullervo, Suomen Kansallisooppera 1993, puvut Pekka Ojamaa, ohjaus Kalle Holmberg. Kuva Kari Hakli.",
        "img": "MM_Pukukuva_Paula Etelävuori_Unton vaimo.png",
        "originImg": "MM_Esityskuva_Paula Etelävuori_Unton vaimo_kuvaaja Kari Hakli_SKO laina.jpg"
    },
    {
        "name": "Kolme sisarta",
        "description": "Sinikka Sokka – Irina, Tsehov: Kolme sisarta, KOM-teatteri 1979, puvut Måns Hedström, ohjaus Kaisa Korhonen.",
        "img": "MM_Pukukuva_Sinikka Sokka_Irina.png",
        "originImg": "MM_Esityskuva_Sinikka Sokka_Irina_kuvaaja Rauno Träskelin_90008043.jpg"
    },
    {
        "name": "Maria Stuart",
        "description": "Axel Ahlberg (1855-1927) - Mortimer, Schiller: Maria Stuart, Suomen Kansallisteatteri, puvut Bure Litonius ja Oili Soininen, ohjaus Kaarlo Bergbom.",
        "img": "MM_Pukukuva_Axel Ahlberg ja Unto Somersalmi_Mortimer.png",
        "originImg": "MM_Esityskuva_Axel Ahlberg ja Urho Somersalmi_Mortimer_kuvaaja ei tiedossa_90002270.png"
    },
    {
        "name": "Satakieli",
        "description": "Kyösti Silvennoinen – Kuninkaan  hovimies, Stravinski: Satakieli, Suomen Kansallisooppera 1992, puvut Anna Kontek, ohjaus Juha Hemánus.",
        "img": "MM_Pukukuva_Kyösti Silvennoinen_Kuninkaan hovimies.png",
        "originImg": "MM_Esityskuva_Kyösti Silvennoinen_Kuninkaan hovimies_kuvaaja Kari Hakli_Ooppera laina.jpg"
    },
    {
        "name": "Giselle",
        "description": "Adam: Giselle, Suomen Kansallisooppera 1981, puvut Pekka Nurmimaa, toteutus Leonid Lavrovski (Corralli-Perrot-Petipan mukaan).",
        "img": "MM_Pukukuva_Kirsi Aromaa tai kuorolainen_Giselle.png",
        "originImg": "MM_Esityskuva_Kirsi Aromaa tai kuorolainen_Giselle_kuvaaja Kari Hakli_1606002.jpg"
    },
    {
        "name": "Leiri maailman laidalla",
        "description": "Tomi Enbuska - Hausmann, Saraspää – Sipari: Leiri maailman laidalla, Rovaniemen Kaupunginteatteri 2009, puvut Ina Jakobsson, ohjaus Taava Hakala. Kuva Timo Lindholm.",
        "img": "MM_Pukukuva_Tomi Enbuska_Hausmann.png",
        "originImg": "MM_Esityskuva_Tomi Enbuska_Hausmann_Leiri maailman laidalla__ Rovaniemen kaupunginteatteri 2009_kuvaaja Timo Lindholm_kuva cdltäkö.jpg"
    }

];
/*
 *       ** Profiloi roolihenkilön data **
 *       Käyttöohjeet samat kuin edellisessä.
 *
 *       Tällä hetkellä name ja description (eli nimi ja kuvaus) eivät ole käytössä, mutta ovat mukana, jos on tarve
 *       laajentaa.
 *
 *       Tärkeät kohdat siis info (tulee lopuksi Tietoa Roolista -sarakkeen alle) ja img (roolihenkilön kuva).
 *
 *       Jos info teksti on pitkä ja sitä pitää muokata helpommin luettavaan muotoon niin lisää <br><br> -tägi  (2 kappaletta)
 *       teksin joukkoon mutta ennen lainausmerkkejä. Nämä katkovat nykyisen rivin.
 *       Vaihtoehtoisesti lisää </p><p> kappaleen loppuun. Tämä lopettaa leipätekstin ja aloittaa samalla uuden.
 *       Eroja on lähinnä marginaalissa. <br><br> tekee isomman rivivaihdon ja  </p><p> hieman pienemmän.
 *
 *
 *       Suosin </p><p> käyttöä, niille on määritetty yhdenmukainen marginaali ja se on yhdenmukainen koko sivuston kanssa.
 */
profileArray = [
    {
        "name": "Anna Liisa",
        "description": "Kuvaus tähän",
        "info": "Suvi-Sini Peltola – Anna Liisa. Minna Canth: Anna Liisa, Tampereen Työväen Teatteri 2011, ohjaus Sirkku Peltola, puvut Marjaana Mutanen. Kuva Jyrki Tervo. <h1>Juoniselostus</h1><p></p><p>Anna Liisa, on viisitoistavuotiaana tullut raskaaksi talon rengille, Mikolle. Mies kuitenkin jättää hänet ja Anna Liisa salaa raskautensa kaikilta. Mikon lisäksi ainoa joka tietää, että Anna Liisa odottaa lasta, on Mikon äiti Husso.</p><p> Anna Liisa on matkalla Husson, mökille synnyttämään, mutta lapsi syntyy metsään ennen kuin hän ehtii perille. Jotta kukaan ei kuulisi vauvan itkua, Anna Liisa laittaa kätensä tämän suun eteen ja vauva kuolee. Husso auttaa Anna Liisaa salaamaan tapahtuneen.</p><p>Näytelmän alussa tästä kaikesta on kulunut neljä vuotta. Anna Liisa on menossa naimisiin Johanneksen kanssa. Mikko kuitenkin palaa takaisin häiden alla ja vaatii Anna Liisaa vaimokseen.  Hän uhkaa, että jos Anna Liisa ei suostu naimakauppoihin, hän paljastaa menneisyyden tapahtumat. Aluksi Anna Liisa aikoo myöntyä Mikon vaatimuksiin. Ja jotta vältytään yleiseltä häpeältä, sovitaan, että kihlajaiset järjestään kuin mitään ei olisi tapahtunut ja myöhemmin sulhaset vaihdettaisiin.</p><p> Tunnontuskia poteva Anna Liisa kuitenkin muuttaa mielensä juhlissa ja tunnustaa tekonsa. Hänet vangitaan. Lopuksi Anna Liisa saa kuitenkin läheistensä ja yhteisön ymmärryksen puolelleen. Myös Johannes antaa hänelle anteeksi. Johannes: …sinä olet kumminkin se, joksi sinua alun pitäen luulinkin.</p><h1>Roolihahmosta</h1>Sini-Suvi Peltolan esittämä Anna Liisa oli näytöksen alusta asti jännittynyt, kireä ja pelokas, hän ei ollut unohtanut aikaisempia tekojaan. Hänen sieluaan jäyti lakkaamatta pelko paljastumisesta. <p>Tämä oli musikaalimuotoinen versio Anna Liisan tarinasta: Puhuttuun dialogiin tuli katkeamia tanssillisilla ja musiikillisilla osuuksilla.Tanssi, liike ja musiikki ilmaisivat ja kuvittivat Anna Liisan ja koko yhteisön tunnetiloja ja sielunmaisemaa. Toisaalta ne myös raikastivat ja kevensivät Anna Liisaa ympäröivää ahdistavaa tunnelmaa. Tämän tulkinnan sydän oli Anna Liisan traaginen sisäinen taistelu. </p>Esityksen puvut olivat yksinkertaiset. Ne olivat väreiltään kirkkaat ja selkeät ja ilmensivät roolihenkilöiden mielentilaa.",
        "img": "PR_Anna Liisa TTT 2011, Kuvassa Anna-Liisa (Suvi-Sini Peltola) Kuvaaja Jyrki Tervo.jpg"
    },
    {
        "name": "Esitystalous",
        "description": "Kuvaus tähän",
        "info": "Tommi Korpela – Rami Niittymaa. Juha Jokela: Esitystalous, Espoon Kaupunginteatteri 2010, ohjaus Juha Jokela, puvut Sari Suominen. Kuva Stefan Bremer.<h1>Juoniselostus</h1><p>Esitystalous – näytelmässä pohditaan ja etsitään vastausta kysymykseen, mitä suomalaisessa yhteiskunnassa tapahtuu ja mikä on sen nykytilanne. Se koostuu keskenään irrallisista osista jotka solmiutuvat yhteen esityksen lopussa.</p><p>Tekstistä nousee esiin kolme pääteemaa: yritysmaailma ja kilpailuyhteiskunta, politiikka ja sen valtarakenteet sekä riippumattoman akateemisen tutkijan ja tutkimusmaailman asema ja suhde ympäröivään yhteiskuntaan.Kaiken kehyksenä on Enterstage Finland OY:n toimitusjohtajan, yritysvalmentaja Rami Niittymaan persoona ja hänen innovatiivinen, röyhkeä ja itsevarma kilpailuun perustuva ajattelunsa.</p> Niittymaan pääteesit esitystalous-termille ovat: Kaikki vuorovaikutus on esiintymistä … Ja se joka tänä päivänä esiintyy huonosti, ei voi tänä päivänä menestyä. Kilpailu on niin kovaa, että se, jolla ei ole esiintymiseen liittyvää osaamista – kirjallista, suullista tai visuaalista karismaa – ni se ei yksinkertaisesti pärjää… <p>Todellisuudella sinänsä ja yksilöillä ei Niittymaan mielestä merkitystä kunhan viesti saadaan perille sellaisena kuin halutaan.</p><h1>Roolihahmosta</h1>Tommi Korpelan esittämä Ramin hahmo on kovapintainen yritysguru, joka ei menetä kasvojaan missään tilanteessa. Hän on tyly ja omahyväinen. Hän on etevä puhuja ja sen avulla hän selviää erinomaisesti elämässä. <p>Korpelan katsottiin ilmentävän kuvaamaansa hahmoa hyvin. Hänen roolisuoritusta yritysvalmentajana pidettiin karismaattisena ja uskottavana. </p>Roolipuvut näyttivät tyypillisiltä esitysajankohtana käytetyltä vaatteita.",
        "img": "PR_Esitystalous Espoon kaupunginteatteri 2010_Tommi Korpela3_valokuva Stefan Bremer.jpg"
    }
    ,
    {
        "name": "Hamlet",
        "description": "Kuvaus tähän",
        "info": "Seisomassa Eero Aho – Hamlet, Tom Wentzel – Aave. William Shakespeare: Hamlet, Helsingin Kaupunginteatteri 2012, ohjaus Kari Heiskanen, puvut Sari Salmela. Kuva Stefan Bremer.<h1>Juoniselostus</h1><p>Hamlet-näytelmä kertoo Tanskan prinssistä Hamletista, joka saapuu ulkomailta isänsä hautajaisiin. Hamlet kohtaa yöllä isänsä haamun, joka kertoo nykyisen kuninkaan (Hamletin sedän Caludiuksen) käyttäneen myrkkyä päästäkseen valtaistuimelle ja kuningattaren (Hamletin äidin Gertrudin) mieheksi.</p><p> Hamlet päättää kostaa isänsä kokeman vääryyden ja punoo juonen kuninkaan päänmenoksi.Järkyttynyt Hamlet menee tapaamaan häneen ihastunutta Ofeliaa. Hamlet käyttäytyy niin, että näyttää Ofelian silmissä hullulta. Pelästynyt Ofelia kertoo asiasta isälleen, kuninkaan neuvonantajalle Poloniukselle.Linnaan saapuu kiertävä teatteriseurue. Yhdessä näyttelijöiden kanssa Hamlet suunnittelee esityksen isänsä surmasta haamun kuvaamalla tavalla. Hamlet haluaa nähdä, miten Caludius reagoi tarinaan. Nähdessään näytelmän Claudius järkyttyy ja kauhistuu, ja Hamlet vakuuttuu, että haamu on puhunut totta ja että Claudius on syyllinen.</p><p>Kuningatar Gertrud kutsuu poikansa puheilleen ja kuuliaisesti Hamlet saapuu paikalle. Kuningattaren pyynnöstä Polonius on piiloutunut huoneeseen, jotta voisi kuunnella heidän välisensä keskustelun ja arvioida onko Hamlet hullu vai ei.Kun Hamlet kuulee ääntä verhojen takaa hän pistää sinne miekallaan ja tappaa Poloniuksen. Heti teon jälkeen haamu ilmestyy, mutta vain Hamlet näkee sen.</p> <p>Tämän tapahtuman jälkeen äitikin alkaa uskoa Hamletin menettäneen järkensä.Hamletin luultiin olevan seonnut rakkaudesta Ofeliaan, mutta Claudius ymmärtää, että kyseessä onkin juoni häntä vastaan. Hän yrittää lähettää Hamletin Englantiin teloitettavaksi, mutta Hamlet pakenee ja palaa takaisin.</p><p> Claudius juonii Hamletin kaksintaisteluun Ofelian Laertes-veljen kanssa. Laerteksella on myrkkyyn kastettua miekkaa. Mutta, jos Hamlet voittaisi taistelun Laerteksen pitäisi tarjota myrkkyä sisältävä voitonmalja Hamletille.Taistelu kuitenkin keskeytyy, kun isänsä kuolemaa sureva Ofelia hukuttautuu. Hamletin tajutessa Ofelian kuolleen, hän tunnustaa rakkautensa tähän. Claudius ehdottaa kaksintaistelun jatkamista. Laertes onnistuu viiltämään Hamletia myrkytetyllä miekallaan. Hamlet tunnustaa salajuonensa ennen kuolemaansa, koska kuningatar kuolee juotuaan vahingossa Hamletille tarkoitetusta myrkkymaljasta. Hamlet kiiruhtaa Claudiuksen luokse ja tappaa hänet, ennen kuin itse kuolee miekasta saamaansa myrkkyyn.</p><h1>Roolihahmosta</h1><p>Joidenkin mielestä Hamlet sekoaa oikeasti kohdattuaan isänsä haamun, mutta toiset näkevät hänet määrätietoisena ihmisenä, joka suunnitelmansa toteuttaakseen vain näyttelee hullua.Se, mitä katsojat ja kriitikot ovat Hamletin roolitulkinnalta odottaneet, on vaihdellut eri aikoina paljon. Hamletin roolihahmo on nähty romanttisena uneksijana, intellektuellina, idealistina, kyynikkona ja hänen tekojensa motiivit on tulkittu erilaisiksi riippuen kunkin ajan psykologisista suuntauksista. </p><p>Hamletin älykkyys ja esittäjän ikä ovat olleet erityisen keskusteltuja asioita. Voiko nuori ihminen, jolla ei ole elämänkokemusta esittää uskottavasti Hamletin monitahoisen roolin? Onko vanhempi mies olemukseltaan liian vanha esittämään Hamletia? </p><p>Hamlet tuntee, että sekä hänen äitinsä ja Ofelia on pettänyt hänet, mutta pettymys ei kuitenkaan tullut tässä esityksessä ilmi. Tulkinta oli siirretty nykypäivään, ja se näkyi kielen lisäksi myös lavastuksessa ja pukusuunnittelussa. Eero Ahon tulkitsema Hamlet oli ollut hauska ja komea.Hulluuskohtaukset olivat olleet intensiivisiä ja Hamletin katkeruus ja viha olivat näkyneet hahmossa. Viha oli syttynyt epätietoisuudesta ja kyynisyydestä. Roolityö oli ollut liikunnallinen: näyttelijä käytti hyväkseen lavasteita ja hyppi ja kiipeili niiden päällä.</p>",
        "img": "PR_Hamlet_HKT 2012_1.jpg"
    }
    ,
    {
        "name": "Jotain toista",
        "description": "Kuvaus tähän",
        "info": "Edessä Ida Kuningas, taustalla Lotta Kaihua ja Elena Leeve. Milja Sarkola: Jotain toista, Q-teatteri 2015, ohjaus Milja Sarkola, puvut Riitta Röpelinen. Kuva Pate Pesonius.<h1>Juoniselostus</h1><p>Esityksen päähenkilö on teatteriohjaaja. Hän on lesbo, ja hänellä on puoliso ja lapsia.  Työltä ei tahdo riittää aikaa puolisolle ja ohjaajaa muutenkin ahdistaa mennä kotiin, vaikka rakastaakin puolisoaan. Siksi hän viettää aikaa baareissa muiden naisten kanssa. </p><p>Riidoilta ei vältytä, ja pariskunta kokeilee mm. parisuhdeterapiaa. Kompleksiensa takia ohjaaja tekee teatteriesitystä seksuaalisuudestaan ja tutkii esityksessään, miten halu ilmenee.</p><p> Ohjaaja käyttää omia muistojaan ja kokemuksiaan tarkastellakseen, miltä tuntuu haluta toista ihmistä ja miten halu syntyy, muuttuu ja katoaa. Hän pohtii myös sitä, miten vieraaseen ihmiseen on mahdollista tuntea halua, mutta läheisyys omaan puolisoon ahdistaa.</p><h1>Roolihahmosta</h1><p>Ida Kuninkaan esittämä ohjaaja on työnarkomaani, tiukka ja itsevarma, mutta samalla myös neuroottinen, himoitseva ja epävarma oman itsensä ja halujensa suhteen.<p/> <p>Esittäjän suoritus teki hahmosta moniulotteisen ja ilmeikkään. Roolihahmo kuvattiin herkkänä, mutta pinnan alla kytevät kompleksit tulivat selkeästi esille. Esityksen puvut ilmensivät hyvin roolihenkilöiden luonnetta. Pukujen avulla ilmaistiin myös sisällöllisiä asioita.</p>",
        "img": "PR_Jotain toista, Q-teatteri 2015, Iida Kuningas (edessä), Lotta Kaihua ja Elena Leeve (taustalla), kuvaaja Pate Pesonius.jpg"
    }
    ,
    {
        "name": "Järki ja tunteet",
        "description": "Kuvaus tähän",
        "info": "Edessä Jouko Klemettilä – Sir John Middleton, Heidi Herala – Rouva Dashwood, istumassa Sara Melleri – Marianne, Kreeta Salminen – Elinor, takana Mirja Partti - palvelija. Jon Jory – Jane Austen: Järki ja tunteet, Helsingin Kaupunginteatteri 2014, ohjaus Laura Jäntti, puvut Sari Salmela. Kuva Charlotte Estman-Wennström.<h1>Juoniselostus</h1><p>Marianne Dashwood on 17-vuotias tyttö, jolla on erittäin romanttinen kuva rakkaudesta.Marianneen on rakastunut häntä vanhempi eversti Brandon.Marianne ei voi hyväksyä everstin rakkautta, koska ei pidä sitä aitona-rakastua ei voi hänen mielestään kuin kerran.Hän rakastuukin itse John Willoughbyyn, ja tunne on molemminpuolinen.Willoughby ei kuitenkaan ole kertonut ihan kaikkea Mariannelle, ja asioiden oikean laidan paljastuessa Mariannen sydän särkyy. Hän pääsee kuitenkin yli sydänsurustaan. Hän ottaa esimerkkiä hillitymmästä Elinor-sisarestaan, jonka esimerkin avulla hän oppii ajattelemaan sekä sydämellään että järjellään. Myös Mariannen käsitys rakkaudesta muuttuu, ja Marianne pystyy vastaamaan eversti Brandonin tunteisiin.</p><h1>Roolihahmosta</h1>Marianne on hyvin tunteellinen. Hän heittäytyy unelmiinsa ja pitää itsepäisesti kiinni käsityksestään rakastumisesta. Marianne kuitenkin kasvaa ihmisenä näytelmän aikana ja on lopulta valmis muuttamaan ajatustapaansa ja kehittämään itseään. Sara Meller esitti Mariannen räiskyvänä ja kapinallisena, mutta myös hauskana hahmona. Vaikka näyttelemistyyliä kuvailtiin ylikorostuneen pateettiseksi, sen katsottiin kuitenkin kuvaavan nuoren naisen tunnemaailmaa aidolla tavalla. Esityksen puvut olivat perinteiseen esitystapaan epookkityylisiä eli pyrkivät ilmentämään näytelmän esitysaikaa.",
        "img": "PR_Järki ja tunteet_HKT 2014_kuva Charlotte Estman-Wennström_jarki9.jpg"
    }
    ,
    {
        "name": "Kaspar Hauser",
        "description": "Kuvaus tähän",
        "info": "Lotta Kaihua, Eero Ritala, sohvalla Jussi Nikkilä. Johannes Ekholm – Akse Pettersson: Kaspar Hauser, Q-teatteri 2014, ohjaus Akse Pettersson, puvut Emmi Leeve. Kuva Pate Pesonius.<h1>Juoniselostus</h1><p>16-vuotiaaksi asti pimeässä kellarissa elänyt poika on muukalainen, jonka ajatusmaailma poikkeaa totutusta ja hän kyseenalaistaa kaiken kysymällä ”miksi”.Kaikenlainen ”haluaminen” pyörittää maailmaa, mutta Kaspar ei halua kuin vettä ja leipää ja tulla ratsastajaksi kuten isänsä.</p><p>Esityksen voi nähdä kertovan elämän pirstaleisuudesta, ohi puhumisesta, levottomuudesta ja siitä kauhusta, kun ei tiedä, kuka on.Se kuvaa niitä valtavia suorituspaineita, joita jokaiselle meistä nykyään asetetaan.Se kertoi elämän suorittamisesta elämisen sijaan.Yksinkertaisuuden ja läsnäolon unohtamisesta. Siitä, että putoan kyydistä, jos en omista uusinta häkkyrää tai seuraa jotain tv-sarjaa.Spektaakkeliyhteiskunnasta.</p><h1>Roolihahmosta</h1><p>Yhden ihmisen tarinaa esittää useampi näyttelijä (Lotta Kaihua, Eero Ritala ja Jussi Nikkilä) somen ympärillä pyörivän yhteiskunnan näkökulmasta, jossa kaikki ovat tavallaan Kaspar Hausereita. Kaspar kyseenalaistaa internetin ja yhteiskunnan normit erilaisella käytöksellään. Nyky-yhteiskunnassa ihminen pyrkii jatkuvasti kehittämään itseään kauppatavaran lailla. Jatkuvien elämysten metsästämistä vastaan toimi vetäytyminen kaikesta sohvalle tv-sarjan ja pelin ääreen.</p> <p>Esitys oli visuaalisesti todella runsas ja moniulotteinen. Joidenkin mielestä näyttämöllepano oli jopa niin vaikuttava, että näytelmän idea jäi osittain sen jalkoihin.</p>",
        "img": "PR_Kaspar Hauser Q-teatteri 2014, vas. Lotta Kaihua, Eero Ritala ja Jussi Nikkilä, kuvaaja Pate Pesonius.jpg"
    }
    ,
    {
        "name": "Kristuksen morsian",
        "description": "Kuvaus tähän",
        "info": "Wanda Dubiel – Henriikka, Joanna Haartti – Marion. Heini Junkkaala: Kristuksen morsian, Suomen Kansallisteatteri 2010, ohjaus Saana Lavaste, puvut Veera Laakso ja Katerina Zherbina. Kuva Petri Summanen.<h1>Juoniselostus</h1><p>33-vuotias nainen Marion valmistelee häitään tyttöystävänsä Julian kanssa. Marionin äiti ja edesmennyt isoisä ovat pappeja, mutta Marion itse on irtautunut luterilaisesta kirkosta ja uskosta. Uskonnollinen kasvatus vaikuttaa kuitenkin lakkaamatta hänen ajatteluunsa. Avioliiton kynnyksellä Marionia alkaa kalvaa epäilys, että hän tekee syntiä, jos menee naisen kanssa naimisiin. Hän pyytää Jumalalta ”merkkiä” siitä, mitä hänen pitäisi tehdä. Jeesus ilmestyykin Marionille baarissa ja sanoo:” Minä tulen pelastamaan sinut.”<p>Tapahtuman jälkeen Marion päättää ”eheytyä” ja liittyy Simeon-seurakuntaan, uskonnolliseen liikkeeseen joka kirjaimellisen Raamatun-tulkintansa pohjalta vastustaa naispappeutta ja homoseksuaaleja. Marion pyrkii muuttamaan elämänsä ja identiteettinsä ja ryhtyy suunnittelemaan avioliittoa miehen kanssa.</p><p> Marionin tekemät päätökset ja toiminta laukaisevat myös muiden näytelmän henkilöiden ajattelu- ja pohdintaprosesseja. Keskeisten roolihahmojen ajatukset ja asetelmat vaihtuvat päittäin näytelmän aikana. Nuoremmasta sukupolvesta tulee konservatiivisempaa kuin vanhempi. Kukaan ei ole ainoastaan hyvä tai paha, oikeassa tai väärässä, syytön tai ehdoitta syyllinen.</p><p> Tämän Kristuksen morsian -tulkinnan keskeinen lavastuselementti on kirja. Kun sen lehtiä käännetään, näyttämökuva muuttuu. Kuin taikaiskusta päästään vaatekauppaan, kirkkoon, Hieronymus Boschin helvettiin, kotiin, seurakunnan keittiöön… Kirjan kannessa lukee ”Lue minut”. Teksti viittaa Lewis Carrollin Liisa ihmemaassa -romaaniin ja antaa avaimia esityksen tulkintaan. Avointa ja ihmettelevää suhtautumistapaa tukee myös esityksen musiikki ja äänimaailma, joka on kun piirretystä amerikkalaisesta prinsessaelokuvasta, jossa tapahtuu ihmeitä.</p><h1>Roolihahmosta</h1><p>Näytelmän päähenkilöllä Marionilla, jota esitti Joanna Haartti, on vaikeuksia löytää oma identiteettinsä. Se, mitä muut sanovat vaikuttaa häneen, sillä hän on hyvin epävarma. Hänestä tulee ahdistunut, ja aikomuksenaan puhdistautua homoseksuaalisesta hän hylkää vanhan minuutensa.</p><p> Esityksessä Marion oli sekä hauska että koskettava hahmo. Marionista näky selvästi hänen kokemansa epävarmuus. Esityksen puvut olivat tyyliteltyjä ja esitysajankohdalle tyypillisiä. </p> ",
        "img": "PR_kristuksenmorsian_16.jpg"
    }
    ,
    {
        "name": "Lokki",
        "description": "Kuvaus tähän",
        "info": "Vasemmalla istumassa Inkeri Mertanen – Irina Nikolajevna Arkadina, keskellä Jussi-Pekka Parviainen – Konstantin Gavrilovits Treplev, oikealla seisomassa Maruska Verona – Nina Mihailovna Zaretsnaja. Anton Tsehov: Lokki, Tampereen Teatteri 2013, ohjaus Samuli Reunanen, puvut Mikko Saastamoinen. Kuva Mika Hiltunen.<h1>Juoniselostus</h1><p>Konstantin ”Kostja” Treplev on uraansa aloitteleva kirjailija. Hän on rakastunut nuoreen, näyttelijän urasta haaveilevaan Ninaan. Tämä kuitenkin on rakastunut suosittuun kirjailijaan, Trigoriniin, joka taas tapailee Kostjan kuuluisaa näyttelijätär-äitiä Irinaa. Tilanhoitajan tytär Masha puolestaan on rakastunut Kostjaan, mutta menee lopulta naimisiin toisen miehen kanssa jäätyään ilman vastarakkautta. </p><p>Kostja on kirjoittanut uudenlaisen näytelmän, joka on tarkoitus esittää maatilalla lomailevalle perheelle seurueineen. Äiti Irina ei ymmärrä poikansa näytelmää ja pilkkaa sitä. Esitys keskeytyy ja Kostja poistuu paikalta vihaisena ja nöyryytettynä. Kaksi vuotta myöhemmin Kostjan kirjailijanura on nousussa, mutta hänen mielenterveytensä on järkkynyt oman äidin halveksunnan takia, ja hän on yrittänyt itsemurhaa. Kostja tapaa maatilalla yllättäen vierailevan Ninan, jonka kirjailija Trigorin on jättänyt ja josta on tullut b-luokan näyttelijätär. Nuoret päätyvät elämässä erilaisiin ratkaisuihin; Kostaj ampuu lopulta itsensä, mutta Nina jatkaa matkaansa.</p><h1>Roolihahmosta</h1><p>Kostja on kovasti rakastunut, mutta erittäin turhautunut, koska ei saa vastarakkautta Ninalta tai edes äidiltään. Hän tuntee myös paineita kirjoittamisessa äitinsä kuuluisuuden takia. Äiti ei kuitenkaan osoita kiintymyksen merkkejä edes pakon edessä, vaan nöyryyttää ja vähättelee poikaansa julkisesti.</p><p> Jussi-Pekka Parviainen esitti turhautuneen ja epätoivoisen nuorukaisen roolin intensiivisesti. Roolihahmon kamppailu pakahduttavan rakkauden ja sen täyttymättömyyden kanssa nousi selkeästi esille. Roolihahmolla oli esityksessä oma musiikkiteema ”Kostjan valssi”.</p>",
        "img": "PR_Lokki_TT 2013_kuva Mika Hiltunen_Lokki_3.jpg"
    }
    ,
    {
        "name": "Luulosairas",
        "description": "Kuvaus tähän",
        "info": "Kreeta Salminen – Angelique, Minttu Mustakallio – palvelustyttö Toinette, Jukka-Pekka Palo – Argan. Moliere: Luulosairas, Suomen Kansallisteatteri 2015, ohjaus Arto af Hällström, puvut Tarja Simonen. Kuva Tuomo Manninen.<h1>Juoniselostus</h1><p>Näytelmä on komedia jonka tapahtumat sijoittuva 1600-luvulle. Herra Argan on luulosairas, joka käyttää aikansa ja rahansa diagnooseihin ja lääkkeisiin. Hän päättää naittaa Angelique-tyttärensä lääkäriksi valmistuvalle lääkärin pojalle.</p><p> Arganin palvelustyttö, Toinette, yrittää kertoa, ettei Angelique koskaan suostu naimakauppoihin, mutta Argan vain suuttuu. Angelique onkin rakastunut toiseen mieheen, Cleanteen, ja pyytää Toinetten apua päästäkseen naimisiin tämän kanssa.</p><p> Tyttären salainen rakkaus paljastuu ja Argan päättää lähettää tämän rangaistukseksi luostariin. Toinette tulee taas auttamaan ja pyytää Arganin veljeä puhumaan Arganille. Veljen suostuttelu ei onnistu. Hän vain suututtaa Arganin lääkärin, joka häipyy.</p><p> Argan on paniikissa kun  Toinette tulee sisään ja esittää maailman parasta lääkäriä. Hän onnistuu puhumaan järkeä Arganille ja tilanne rauhoittuu. Keskustelu Angeliquen luostariin lähettämisestä kuitenkin jatkuu ja tilanne kärjistyy uudelleen veljen syyttäessä Arganin uutta vaimoa juonittelusta. </p><p>Toinetten ehdotuksesta Argan tekeytyy kuolleeksi. Käy ilmi, että vaimo välittääkin vain miehensä rahoista. Kuolleeksi isäänsä luulevan Angeliquen lohduton itku ja kieltäytyminen naimasta Cleantea vastoin isän viimeistä tahtoa liikuttaa Argania. Kun hän herää valekuolleista hän antaa siunauksensa Angeliquen ja Cleanten avioliitolle.</p><h1>Roolihahmosta</h1><p>Toinette on älykäs nainen, joka keksii ovelia suunnitelmia. Hän osaa lukea tilanteita ja mukautua niihin nopeasti. Toinette on isännälleen ja tämän tyttärelle erittäin uskollinen, ja haluaa heille vain parasta. Mimmi Mustakallion esittämä Toinetten rooli toteutettiin ylinäyttelemällä. Sitä pidettiin vaivattomasti ja hyvin tehtynä, mutta yliampumista myös kritisoitiin. Rooli esitettiin erittäin fyysisesti ja liikunnallisesti. </p>",
        "img": "PR_Luulosairas12_SKT 2015_kuva Tuomo Manninen.jpg"
    }
    ,
    {
        "name": "Niskavuoren nuori emäntä",
        "description": "Kuvaus tähän",
        "info": "Minna Turunen – Malviina, Heidi Kiviharju – Loviisa. Juhani Tervapää (Hella Wuolijoki): Niskavuoren nuori emäntä, Tampereen Työväen Teatteri 2003, ohjaus Jotaarkka Pennanen, puvut Tellervo Helminen. Kuva Ari Ijäs.<h1>Juoniselostus</h1><p>Näytelmän tapahtumat sijoittuvat 1880-luvun Suomen maaseudulle. Loviisan mentyä naimisiin talon isännän Juhani Niskavuoren kanssa hänestä on tullut Niskavuoren nuori emäntä. Heille on jo syntynyt lapsi, mutta nuori emäntä, ujo ja arka Loviisa, ei kuitenkaan löydä paikkaansa talossa.Juhanilla on ollut suhde talon meijerikkö Malviinan kanssa ja he ovat saaneet lapsen jo ennen kuin Juhani on avioitunut Loviisan kanssa. Huhutaan, että Juhani olisi mennyt Loviisan kanssa naimisiin vain rahojen takia, ja että Juhani olisikin todellisuudessa vieläkin rakastunut Malviinaan.</p><p> Kun Loviisa saa tietää suhteesta ja hän järkyttyy siitä niin pahasti, että ottaa lapsensa ja pakenee metsään. Lopulta hän kuitenkin palaa takaisin. Mutta metsästä ei palaa näytelmän alun hiljainen ja nöyrä Loviisa, vaan määrätietoinen ja voimakastahtoinen nuori emäntä. Kun vanha emäntä kuolee, Loviisa ottaa ohjat käsiinsä. Hän tahtoo päästä eroon Malviinasta, niinpä Loviisa ryhtyy toimeen ja lähettää hänet pois.</p><p>Juhani raivostuu saatuaan tietää, että Malviina on häädetty talosta. Hän vaatii Loviisaa paljastamaan tämän olinpaikan. Kun muu ei tunnu auttavan, eikä etsinnöissä synny tulosta, Juhani yrittää hukuttaa murheensa tarttumalla viinapulloon.</p><p>Kaikkien tapahtumien ohella Juhanista on tulossa valtiopäivämies ja juuri tuona päivänä, kun isäntä on humalassa, taloon on tulossa arvokkaita vieraita tapaamaan häntä. Saunan ja kahvin avulla Juhani saadaan kuitenkin edustuskuntoon. Lopulta hän sanoo Loviisalle tulleensa järkiinsä. Hän ei halua menettää taloaan ja asemaansa yhden naisen tähden.</p><h1>Roolihahmosta</h1><p>Malviina on omanarvontuntoinen ja määrätietoinen. Hän on tukalassa tilanteessa. Hänellä on suhde varattuun mieheen ja hänen asemansa piikana tekee suhteen talon isäntään muutenkin mahdottomaksi. Heillä on kuitenkin yhteinen lapsi.Malviina tuntee itsensä nöyryytetyksi, eikä hänellä ole muuta vaihtoehtoa kuin lähteä pois lapsensa kanssa.</p><p>Minna Turusen näyttelemän Malviinan ja Juhanin välistä rakkautta kuvailtiin intohimoiseksi. Vaikka Maliviinan roolihahmosta nähtiin puuttuvan tunteiden paatos, hänen tuntemuksensa ja toimintansa motiivit nousivat selkeästi esiin. Hahmon teot esitettiin neutraalisti, hän ei ollut oikeassa tai väärässä. Tässä tulkinnassa Malviinan roolihenkilö kärsi eniten rakkauden vuoksi ja se näkyi myös näyttelemistavassa. Esityksen pukujen sanottiin olleen Niskavuori-näytelmissä perinteisesti nähtyjä roolivaatteita ja ne kuvasivat esityksen tapahtuma-aikaa. </p>",
        "img": "PR_Niskavuoren nuori emäntä_TTT 2003_kuva Ari Ijäs_05055006_malviinaloviisa.jpg"
    }
    ,
    {
        "name": "Nukkekoti",
        "description": "Kuvaus tähän",
        "info": "Elina Salovaara – Rouva Linde, Anna-Elina Lyytikäinen – Nora. Henrik Ibsen: Nukkekoti, Tampereen Teatteri 2002, ohjaus Ritva Holmberg, puvut Milja Salovaara. Kuva Harri Hinkka.<h1>Juoniselostus</h1><p>Nora on kolmen lapsen äiti ja onnellisesti naimisissa tulevan pankinjohtajana Torvarld Helmerin kanssa. Avioliiton alkuvaiheissa Torvaldin terveys oli ollut vaarassa, ja pelastaakseen hänen henkensä Nora otti lainaksi rahaa herra Krogstadilta. Koska naisen allekirjoitus ei velkakirjaan kelvannut, Nora väärensi siihen isänsä nimikirjoituksen. Hän teki kuitenkin virheen ja laittoi velkakirjan päiväyksen isänsä kuolinpäivää myöhemmäksi.</p><p>Lainan Noralle antanut Krogstad erotetaan. Säilyttääkseen paikkansa pankissa hän uhkaa paljaastaa Torvaldille, että Nora on lainannut häneltä rahaa, ja hän kirjoittaa miehelle kirjeen, joka paljastuessaan mustaisi Torvaldin maineen. Noran ystävä, rouva Linde, saa Krogstadin luopuman kiristyksestä. Torvald saa kuitenkin kiristyskirjeen käsiinsä ja raivostuu saadessaan tietää, mitä Nora on tehnyt. Yllättäen saapuuva uusi kirje, jossa Noran velkakirja palautetaan, saa Torvaldin heti antamaan anteeksi vaimollee. Nora ei voi kuitenkaan hyväksyä miehensä ulkokultaista asennetta, etää kaikki on hyvin, jos miehen maine ei vaan tuhriudu. Hän päättää lähteä ja jättää miehensä ja lapsensa.</p><h1>Roolihahmosta</h1>Noran roolin esittäminen on ollut naisnäyttelijälle tilaisuus, jolla näyttelijä on voinut osoittaa monipuolisesti taitonsa ja eläytymiskykynsä. Noraa on pidetty samankaltaisena suurena roolina naisnäyttelijälle kuin Shakespearen Hamlet on miesnäyttelijälle.Nukkekoti oli ilmestyessään kiistanalainen, sillä se kritisoi aikansa avioliittonormeja. Oli ennenkuulumatonta, että nainen jättäisi lapsensa.</p><p>Nora on ymmärtäväinen ja rohkea, mutta elänyt koko elämänsä suojattuna. Muut ihmiset eivät suhtaudu Noraan vakavasti, koska näyttää siltä ettei hän ole koskaan joutunut ottamaan vastuuta elämästään. Lapsuudenkodissa hän oli ollut isä silmäterä lellikki ja aviomies Torvald oli tehnyt hänestä edustusvaimon. Mutta nähdessään ympärillään kaksinaamaisuutta ja valheellisuutta Nora ei pysty enää elämään nukkekotimaisessa ympäristössä, jossa tärkeintä on säilyttää kulissit.</p><p>Tämä Anna-Elina Lyytikäisen tulkitsema Nora oli nykyaikainen nainen, mutta näyttelijäntyön katsottiin noudatelleen perinteisten esitystapojen linjaa. Hahmosta nousi esille Noran herkkyys ja epävarmuus. Esityksen kuluessa aviomiestään miellyttmään pyrkivästä tytöstä kasvoi tilanteeseensa pettynyt, mutta ratkaisuunsa tyytyväinen, tasapainon löytänyt nainen. Tämän esityksen puvut olivat nykyaikaisia, mutta niissä oli tyyliä, joka toi esitykseen historiallisuutta.</p>",
        "img": "PR_Nukkekoti_TT 2002_kuva Harri Hinkka_09022004.jpg"
    }
    ,
    {
        "name": "Nummisuutarit",
        "description": "Kuvaus tähän",
        "info": "Aku Hirviniemi – Esko. Aleksis Kivi: Nummisuutarit, Suomen Kansallisteatteri 2015, ohjaus Janne Reinikainen, puvut Tarja Simonen. Kuva Stefan Bremer.<h1>Juoniselostus</h1><p>Suutarimestari Topiaksen poika, Esko, halutaan saattaa avioliittoon mahdollisimman nopeasti. Syy on se, että hän saa perinnön, jos menee naimisiin ennen perheen kasvattitytär Jaana. Tyttö puolestaan saa perinnön, jos menee naimisiin ennen Eskoa. Jaanalla on jo sulhanen katsottuna. Hän on rakastunut kylän seppään.</p><p> Esko lähtee kosiomatkalle, mutta toivottu morsian onkin juuri menossa naimisiin toisen kanssa. Morsiamen isä oli vain vitsaillut naimakauppa-asiasta Eskon isälle. Tästä Esko raivostuu ja aloittaa tappelun ystävänsä Mikon yllyttämänä.  Lopulta kaksikko pakenee hääjuhlista.</p><p> Kotimatkalla miehet kulkevat krouvista krouviin ja Mikko tuhlaa kaikki rahat. Esko suuttuu Mikolle, joka vältelläkseen vastuuta tapahtumista juottaa Eskon ensihumalaan ja lietsoo riitaa lähtien lopuksi karkuun. Juopunut Esko nujakoi paikalle saapuvan Antreksen kanssa ja luulee että on tappanut tämän.</p><p>Silloin paikalle tulee myös häätarjoiluiden hankinnassa epäonnistunut Eskon veli seurueineen, johon kuuluu myös Jaanan isä naamioituneena rosvoksi. Antres kuitenkin paranee, ja kaikkien epäonnistumiset päätetään sälyttää rosvon harteille.</p><p> Perillä kotona kuitenkin selviää, ettei rosvoa oikeasti olekaan, vaan mies on Jaanan isä. Eskon ja hänen vanhempiensa haaveet perinnöstä haihtuvat, kun isä antaa naimaluvan Jaanalle. Lisäksi Esko on joutumassa käräjille kosioreissulla aiheutettujen vahinkojen vuoksi. Kaikki päättyy kuitenkin onnellisesti Jaanan luvatessa puolet perinnöstään kasvattivanhemmilleen. Esko päättää pysytellä tästä lähin erossa naimakaupoista.</p><h1>Roolihahmosta</h1>Esko on hieman yksinkertainen, mutta rehellinen poika. Hänellä on taipumusta uhoamiseen, mutta hän ei olisi joutunut pulaan ilman huijarimaista ystäväänsä.</p><p>Kansallisteatterin esitys oli tuotu nykyaikaan, mutta sitä ei oltu sidottu tiettyyn paikkaan tai aikaan. Näyttämöllä näkyi viitteitä nykyaikaan ja populaarikulttuuriin puvustuksessa, tematiikassa ja kielessä.Aku Hirviniemen Esko oli nykyaikaisen suomalaisen junttimiehen stereotyypppi. Roolihahmo oli hidas ja juro, mutta myös vilpitön, hyvä puhuja ja suututettuna pelottavan aggressiivinen.</p>",
        "img": "PR_Nummisuutarit, Kansallisteatteri 2015, Eskon roolissa Aku Hirviniemi, kuvaaja Stefan Bremer.jpg"
    }
    ,
    {
        "name": "Nummibodarit",
        "description": "Kuvaus tähän",
        "info": "Sauli Suonpää – Mikko, Hannu Lintukoski – Esko. Aleksis Kivi – Sakari Hokkanen: Nummibodarit, Jyväskylän Kaupunginteatteri 2016, ohjaus Sakari Hokkanen, puvut Tuovi Räisänen. Kuva Jiri Halttunen.<h1>Juoniselostus</h1><p>Suutarimestari Topiaksen poika, Esko, halutaan saattaa avioon mahdollisimman nopeasti. Syy on se, että hän saa perinnön, jos menee naimisiin ennen suutarin kasvattitytär Jaana. Tyttö puolestaan saa perinnön, jos menee naimisiin ennen Eskoa. Jaanalla on jo sulhanen katsottuna. Hän on rakastunut kylän seppään.</p><p> Esko lähtee kosiomatkalle, mutta toivottu morsian onkin menossa naimisiin toisen kanssa. Morsiamen isä oli vain vitsaillut naimakauppa-asiasta Eskon isälle. Tästä Esko raivostuu ja aloittaa tappelun ystävänsä Mikon yllyttämänä.Lopulta kaksikko pakenee hääjuhlista.</p><p> Kotimatkalla miehet kulkevat krouvista krouviin ja Mikko tuhlaa kaikki rahat. Esko suuttuu Mikolle, joka vältelläkseen vastuuta tapahtumista juottaa Eskon ensihumalaan ja lietsoo riitaa lähtien lopuksi karkuun. Juopunut Esko nujakoi paikalle saapuvan Antreksen kanssa ja luulee että on tappanut tämän.</p><p> Silloin paikalle tulee myös häätarjoiluiden hankinnassa epäonnistunut Eskon veli seurueineen, johon kuuluu myös Jaanan isä naamioituneena rosvoksi. Antres kuitenkin paranee, ja kaikkien epäonnistumiset päätetään sälyttää rosvon harteille.</p><p> Perillä kotona kuitenkin selviää, ettei rosvoa oikeasti olekaan, vaan mies on Jaanan isä. Eskon ja hänen vanhempiensa haaveet perinnöstä haihtuvat, kun isä antaa naimaluvan Jaanalle. Lisäksi Esko on joutumassa käräjille kosioreissulla tehtyjen vahingontekojen vuoksi. Kaikki päättyy kuitenkin onnellisesti Jaanan luvatessa puolet perinnöstään kasvattivanhemmilleen. Esko päättää pysytellä tästä lähin erossa naimakaupoista.</p><h1>Roolihahmosta</h1><p>Esko on hieman yksinkertainen, mutta rehellinen poika. Hänellä on kyllä taipumusta uhoamiseen, mutta hän ei olisi joutunut pulaan ilman huijarimaista ystäväänsä.</p><p> Nummibodarit on nykyaikaistettu versio Nummisuutareista. Juoni noudattelee alkuperäistä juonta, mutta siinä viitataan nykypäivän ilmiöihin niin käsikirjoituksessa, kielessä kuin näyttämöasussakin. Puvut ovat 90-luvun tyyliä.</p><p>Tämän esityksen Esko Hannu Lintukoski oli kuin suuri lapsi, aikamiespoika, joka on asunut äitinsä hemmoteltavana vähän liian pitkään. Roolia pidettiin fyysisenä, mutta sen katsottiin kuvastavan hyvin Eskon hyväuskoista ja herkästi kimpaantuvaa sielunmaisemaa.</p>",
        "img": "PR_Nummibodarit  Jyväskylän kaupt. 2016, vas. Mikko(Sauli Suonpää) oik. Esko (Hannu Lintukoski), kuvaaja Jiri Halttunen.jpg"
    }
    ,
    {
        "name": "Romeo ja Julia",
        "description": "Kuvaus tähän",
        "info": "Anna Ackerman – Julia, Topi Kohonen – Romeo. William Shakespeare: Romeo ja Julia, Seinäjoen Kaupunginteatteri 2014, ohjaus Antti Mikkola, puvut Riikka Aurasmaa. Kuva Jukka Kontkanen.<h1>Juoniselostus</h1><p>Näytelmän tapahtumat sijoittuva Verona-kaupunkiin Italiassa. Se kertoo kahden nuoren Romeo Montaguen ja Julia Capuletin rakkaustarinana. Nuorten suvut ovat riidoissa keskenään ja vihanpito on levinnyt myös palvelijoiden keskuuteen. </p><p>Romeo on onnettomasti rakastunut neitoon joka ei vastaa hänen tunteisiinsa ja sen vuoksi hän on masentunut. Ystävät saavat Romeon kuitenkin tulemaan Capuleitien perhe järjestämiin tanssiaiset jonne he saapuvat ”kutsumattomina” ja naamioituneena. Heti ensi silmäyksellä Romeo ja Julia rakastuvat tulisesti toisiinsa ja Romeo unohtaa sydänsurunsa. Illan aikana he saavat selville toistensa henkilöllisyyden ja tietävät olevansa eripuraisten sukujen lapsia. </p><p>Samana yönä Romeo kiipeää muurin yli Capuleitien puutarhaan ja näkee Julian parvekkeella. Julia huomaa myös Romeon ja siitä alkaa maailman kuuluisin parvekekohtaus, joka kestää aamun sarastuksen saakka. Yön aikana nuoret päättävät pimittää rakkautensa ja menevät seuraavana päivänä salaa naimisiin pappi Lorenzon kammiossa.</p><p> Pian tämän jälkeen Romeo joutuu monen väärinkäsityksen seurauksena taisteluun ja tappaa Julian serkun Tybaltin. Tämän takia Romeo ajetaan maanpakoon.</p><p> Julia on äärettömän onneton Romeon tuomiosta. Hänen vanhempansa luulevat, että Julia suree Tybaltin kuolemaa. He ajattelevat, että Julia unohtaa epätoivonsa, jos hänellä on muuta ajateltavaa ja sopivat että neito menee naimisiin kreivi Parisin kanssa.</p><p> Julia ei tietenkään voi eikä aio avioitua Parisin kanssa. Hänen rippipappinsa Lorenzo keksii juonen, jonka avulla nuoret jälleen löytäisivät toisensa.  Suunnitelma on seuraavan lainen: Julia juo Lorenzolta saamaansa yrttijuomaa, joka vaivuttaa hänet sikeään uneen ja muut luulevat, että hän on kuollut. Lorenzo lähettää viestin maanpaossa olevalle Romeolle, jonka on tarkoitus tulla hautaholviin, jonne Julia on haudattu ja jossa tämä heräisi, kun Romeo on saapunut. Tämän jälkeen nuoret voisivat yhdessä karata Veronasta. </p><p>Kaikki ei kuitenkaan mene suunnitelmien mukaan. Hääpäivän aamuna Julian imettäjä löytää tytön ”kuolleena” ja häät muuttuvat hautajaisiksi. Pappi Lorenzo on lähettänyt kollegansa viemään Romeolle kirjeen, jossa hän kertoo missä Julia on ja antaa tälle ohjeita, miten toimia. Kirje ei kuitenkaan koskaan pääse perille vaan Romeo saa tiedon Julian kuolemasta omalta palvelijaltaan ja luulee sen olevan totta. Tämän kuultuaan nuorukainen ryntää suin päin ostamaan itselleen myrkkyä.</p><p> Romeo menee Capuletien hautaholviin ja löytää Julian elottomana. Romeo juo hankkimansa myrkyn ja kuolee. Kun Julia herää ja huomaa Romeon surmanneen itsensä, hän ottaa tikarin ja tappaa sillä itsensä.</p><p> Näiden järkyttävien ja traagisten tapahtuminen jälkeen Montaguetien- ja Capuletien perheet vihdoin sopivat riitansa.</p><h1>Roolihahmosta</h1>Romeo on rikkaan Montaguen poika. Hän on palavasti rakastunut Rosalina-nimiseen Capuletiin, jolta ei kuitenkaan saa vastarakkautta. Siksi Romeo on erittäin alla päin ja hänen kerrotaan vaeltelevan yksin metsässä itkemässä. Hänellä on erittäin voimakkaat tunteet, ja niiden vallassa hän tekee paljon ajattelemattomia asioita. Romeon tunteet Rosalinaa kohtaa kuitenkin jäähtyvät, kun hän tanssiaisissa tapaa Julian josta tulee hänen tulisen rakkautensa kohde.</p><p> Tässä esityksessä Romeon ja Julian tarinaan sekä juonta että lavastusta oli muokattu nykyaikaisemmaksi. Siinä käytettiin videota joissa paikkakunnan nuoret kertovat ajatuksiaan rakkaudesta ja näyttämöllä näkyi mopoautoja ja älypuhelimia. Puvut olivat esitysajankohdan vaatteita.</p><p>Tässä tulkinnassa korostui nuorten suhde vanhempiin, joka heidän työkiireidensä vuoksi oli etäinen. Esitykseen oli yhdistetty Shakespearen tekstiä ja nykyaikaisempaa kieltä ja Romeon näyttelijän Topi Korhosen äänenkäyttöä kehuttiin selkeäksi.</p>",
        "img": "PR_Romeo ja Julia_Seinäjoki 2014_kuva Jukka Kontkanen_IMG_4689-1100x733_sulka.jpg"
    }
    ,
    {
        "name": "Skavabölen pojat",
        "description": "Kuvaus tähän",
        "info": "Heikki Hela - Pekka, Mari Posti – Anja Sallinen, Eemu Korpela – Evert, Mari Turunen – Pirjo. Antti Raivio: Skavabölen pojat, Tampereen Teatteri 2015, ohjaus Marika Vapaavuori, puvut Mari Pajula. Kuva Harri Hinkka.<h1>Juoniselostus</h1><p>Evert ja hänen isoveljensä Rupert kasvavat hyvin toimeentulevassa perheessä. Isä on valtion virkamies ja äiti taiteilija. Perhe kuitenkin alkaa hajota, kun selviää, että isällä on toinen nainen. Vanhemmat eroavat ja Evert veljineen muuttaa isän ja tämän uuden vaimon luokse. Evertin elämään tulee vaikeita asioita. Menettäessään lastensa huoltajuuden äidin mielenterveys alkaa järkkyä ja hänestä tulee itsetuhoinen. Isä alkaa juopotella ja käyttäytyy väkivaltaisesti.</p><p> Evert ja hänen veljensä yrittävät elää normaalia elämää ja pakenevat todellisuutta mielikuvituksellisiin leikkeihin. Pojat tekevät verivalan ja lupaavat aina pitää toisistaan huolta, vielä kymmenen vuotta  tapahtumien jälkeenkin, kun isoveli tulee kotiin armeijasta ja muistot palautuvat mieleen.</p><h1>Roolihahmosta</h1>Erityisesti Evert ottaa perheen hajoamisen raskaasti. Juuri Evert oli se, jolta äiti kuuli ensimmäistä kertaa isän suhteesta. Evert ei vielä vuosienkaan päästä ole oikein päässyt yli kaikesta tapahtuneesta. Evertin, Eemu Korpela, kokemia iloa ja surua esitettiin aidolla tavalla. Tunteiden kuvaus vaikutti luonnolliselta, vaikka lapsen ja nuoren roolia esittikin aikuinen. ",
        "img": "PR_Skavabolen_pojat_Tampereen Teatteri 2015 Kuvaaja Harri Hinkka kuva 2 Heikki Hela, Mari Posti, Eemu Korpela ja Mari Turunen.jpg"
    }
    ,
    {
        "name": "Särkelä itte",
        "description": "Kuvaus tähän",
        "info": "Heikki Nousiainen – Julius Särkelä, Natalil Lintala – Saara Särkelä, Aaro Wichmann – Martti Fallsten. Ilmari Turja: Särkelä itte, Tampereen Teatteri 2010, ohjaus Tommi Auvinen, puvut Mari Pajula. Kuva Harri Hinkka.<h1>Juoniselostus</h1><p>Julius Särkelä on tehtaanjohtaja. Hän on määrätietoisella työllään hankkinut itselleen kodin ja tärkeän aseman. Särkelän päivä menee pilalle, kun Heroja tulee perimään miehelle antamaansa lainaa takaisin. Särkelä kuitenkin kiistää velan, koska Herojalla ei ole virallista todistusta mukanaan, eikä Heroja saa rahojaan.</p><p> Särkelä vastustaa myös tyttärensä suunnitelmia lähteä Turkuun opiskelemaan. Lisäksi hän ei ole ollenkaan tyytyväinen tyttärensä avioliittoaikeisiin, koska hän vihaa sulhasehdokkaan isää, patruuna Fallstenia. Kinaa syntyy myös muiden kyläläisten kanssa. Paikkakunnalle on rakennettu silta, jota Särkelä on vastustanut alusta alkaen. Vihkiäisjuhlia järjestää juuri Fallsten. Kaiken kukkuraksi juhliin pyydetään lainaksi vieläpä johtajan flyygeliä, jota Särkelä ei suostu antamaan kaiken kansan kolhittavaksi.</p><p>Heroja palaa kuitenkin myöhemmin takaisin, ja odottaessaan ryhtyy syömään eväitään Särkelän huoneessa, mikä vihastuttaa Särkelää entisestään. Särkelällä on kuitenkin seuranaan lääkäri Kosonen, joka toimii välikätenä tilanteessa. Heroja on huomaa, että Särkelän ongelma onkin julkisuudenkipeys: Särkelä on kateellinen Fallstenille, sillä tämä on saanut kylässä kaiken huomion itselleen, vaikka Särkelä on itse saanut paljon aikaan kylässä omalla kovalla työllään ja ansaitsisi tunnustusta. Kosonen keksii suunnitelman: hän pyytää Fallstenia tulemaan itse paikan päälle ja kutsumaan Särkelän puhujaksi juhliin. Pyyntö juhlapuheen pidosta ilahduttaa Särkelää niin paljon, että suostuu antamaan flyygelinkin lainaksi. Tilaisuudessa ramppikuumetta poteva Särkelä unohtaa juhlapuheen päällystakkinsa taskuun, ja puheesta uhkaa tulla katastrofi. Särkelän päästessä vauhtiin puheesta kuitenkin kehkeytyy menestys, jota kehutaan kylällä ja vielä seuraavan päivän sanomalehdessäkin. Lopulta Särkelä maksaa velkansa Herojalle ja hyväksyy niin sillan kuin tyttärensä opiskelun ja avioliitonkin.</p><h1>Roolihahmosta</h1>Särkelä on itsekeskeinen mies, joka pitää tiukkaa kuria sekä töissä että kotonaan. Hän on itsepäinen ja kateellinen. Särkelä haluaa, että ihmiset tekevät kaiken aina hänen päätöstensä mukaan. Kaikki tämä kumpuaa epävarmuudesta. Mutta hänessä on myös toinen puoli, sillä Särkelä osaa olla myös hauska ja mukava. Tässä tulkinnassa Heikki Nousiainen esittää Särkelän vastahankaisena miehenä, joka kuitenkin oli jollain tavalla sympaattinen. Rooli oli fyysisesti vauhdikas ja esittäjän liikkumista kuvailtiin notkeaksi.",
        "img": "Särkelä itte_TT 2010_kuva Harri Hinkka_Sarkela 6_muokattu.jpg"
    }
    ,
    {
        "name": "Vanja-eno",
        "description": "Kuvaus tähän",
        "info": "Santeri Kinnunen – Ivan Petrovits Voinitski, Esko Salminen – Aleksandr Vladimorovits Serebrjakov. Anton Tsehov: Vanja-eno, Helsingin Kaupunginteatteri 2014, ohjaus Tamás Ascher, puvut Györgyi Szakács. Kuva Tapio Vanhatalo.<h1>Juoniselostus</h1><p>Vanja elää ja työskentelee maatilalla. Hän antaa tilan tuoton kuolleen sisarensa miehelle, joka on yliopiston professori. Vanjan sisarentytär Sonja, omistaa maatilan ja auttaa enoaan tilanhoidossa. Aikaisemmin Vanja on ihaillut professoria, mutta myöhemmin hän on pettynyt siihen, ettei tämä ole saanut juuri mitään aikaan.</p><p> Professori ja hänen nuori Jelena-vaimonsa ilmestyvät tilalle. Vanja ja Jelena ovat vanhoja ystäviä ja Vanja huomaa rakastavansa Jelenaa ja tunnustaa tälle tunteensa. Jelena ei kuitenkaan vastaa Vanjan tunteisiin. Tilanne kärjistyy, kun professori suunnittelee myyvänsä tilan. Vanja yrittää ampua professorin, mutta ei osu häneen. Tilanne saadaan sovittua ja professori päättää lopulta lähteä vaimoineen.</p><p> Vanja on varastanut morfiinia ystävältään, tohtori Astrovilta, ja uhkaa ottaa yliannostuksen huumetta. Astrov ja Sonja kuitenkin onnistuvat puhumaan Vanjan ympäri ja kaikki pysyy ennallaan.</p><h1>Roolihahmosta</h1><p>Vanja on turhautunut ja kärsii ikäkriisistä. Hän on pettynyt omaan elämäänsä ja aiemmin ihailemaansa professoriin. Tyytymättömyys siihen, että ei ole kyennyt muuttamaan omaa kohtaloaan ja tekemään ratkaisevia valintoja tekevät hänestä epätoivoisen.</p><p>Santeri Kinnunen näytteli Vanja roolin veijarimaiseen tyyliin. Hahmosta ei kuitenkaan ollut pelkästä hauska, vaan siinä näkyi myös tuska ja epätoivo. Esityksen puvut olivat luoneet illuusion maalaiselämästä.</p>",
        "img": "PR_Vanja-eno_HKT 2014_kuva Tapio Vanhatalo_vanja18.jpg"
    }
    ,
    {
        "name": "Vanja-eno",
        "description": "Kuvaus tähän",
        "info": "Ville Sandqvist – Vanja. Anton Tsehov: Vanja-eno, Hämeenlinnan kaupunginteatteri 2005, ohjaus Kaisa Korhonen, puvut Sari Salmela. Kuva Terho Aalto.<h1>Juoniselostus</h1><p>Vanja elää ja työskentelee maatilalla. Hän antaa tilan tuoton kuolleen sisarensa miehelle, joka on yliopiston professori. Vanjan sisarentytär Sonja, omistaa maatilan ja auttaa enoaan tilanhoidossa. Aikaisemmin Vanja on ihaillut professoria, mutta myöhemmin hän on pettynyt siihen, ettei tämä ole saanut juuri mitään aikaan.</p> <p>Professori ja hänen nuori Jelena-vaimonsa ilmestyvät tilalle. Vanja ja Jelena ovat vanhoja ystäviä ja Vanja huomaa rakastavansa Jelenaa ja tunnustaa tälle tunteensa. Jelena ei kuitenkaan vastaa Vanjan tunteisiin. Tilanne kärjistyy, kun professori suunnittelee myyvänsä tilan. Vanja yrittää ampua professorin, mutta ei osu häneen. Tilanne saadaan sovittua ja professori päättää lopulta lähteä vaimoineen.</p><p> Vanja on varastanut morfiinia ystävältään, tohtori Astrovilta, ja uhkaa ottaa yliannostuksen huumetta. Astrov ja Sonja kuitenkin onnistuvat puhumaan Vanjan ympäri ja kaikki pysyy ennallaan.</p><h1>Roolihahmosta</h1>Vanja on turhautunut ja kärsii ikäkriisistä. Hän on pettynyt omaan elämäänsä ja aiemmin ihailemaansa professoriin. Tyytymättömyys siihen, että ei ole kyennyt muuttamaan omaa kohtaloaan ja tekemään ratkaisevia valintoja, tekevät hänestä epätoivoisen.</p><p>Tässä tulkinnassa Vanja-enon erilaiset tuntemukset hulluudesta päättäväisyyteen muodostivat eheän kokonaisuuden, jotka toivat Vanjan sisimmän esille. Hahmon juominen korostui, kun Vanja kumosi huikan pullosta joka asian kohdalla. Ville Sandqvistin esittämä Vanja oli jo luovuttanut elämässään, ja hahmon katsottiin olevan syvemmällä kurjuudessaan kuin aikaisemmissa tulkinnoissa. Esityksen puvustus oli suunniteltu ajattomaan tyyliin. Puvuissa korostettiin maalaisten ja kaupunkilaisten välistä eroa.</p>",
        "img": "PR_Vanja-eno_Hämeenlinna 2005_kuva Terho Aalto_11031001.jpg"
    }
    ,
    {
        "name": "Vanja-eno",
        "description": "Kuvaus tähän",
        "info": "Krista Kosonen – Jelena, Heikki Nousiainen – professori Serebrjakov. Anton Tsehov: Vanja-eno, Suomen Kansallisteatteri 2014, ohjaus Paavo Westerberg, puvut Pirjo Valinen. Kuva Stefan Bremer.<h1>Juoniselostus</h1><p>Vanja elää ja työskentelee maatilalla. Hän antaa tilan tuoton kuolleen sisarensa miehelle, joka on yliopiston professori. Vanjan sisarentytär Sonja, omistaa maatilan ja auttaa enoaan tilanhoidossa. Aikaisemmin Vanja on ihaillut professoria, mutta myöhemmin hän on pettynyt siihen, ettei tämä ole saanut juuri mitään aikaan.</p><p> Professori ja hänen nuori Jelena-vaimonsa ilmestyvät tilalle. Vanja ja Jelena ovat vanhoja ystäviä ja Vanja huomaa rakastavansa Jelenaa ja tunnustaa tälle tunteensa. Jelena ei kuitenkaan vastaa Vanjan tunteisiin. Tilanne kärjistyy, kun professori suunnittelee myyvänsä tilan. Vanja yrittää ampua professorin, mutta ei osu häneen. Tilanne saadaan sovittua ja professori päättää lopulta lähteä vaimoineen.</p><p> Vanja on varastanut morfiinia ystävältään, tohtori Astrovilta, ja uhkaa ottaa yliannostuksen huumetta. Astrov ja Sonja kuitenkin onnistuvat puhumaan Vanjan ympäri ja kaikki pysyy ennallaan.</p><h1>Roolihahmosta</h1><p>27-vuotias Jelena on mennyt jo eläköityneen professori Serebrjakovin kanssa naimisiin. Jelena tajuaa, että professorin sijaan hän olikin ihastunut professorin uraan, ja elää nyt rakkaudettomassa avioliitossa vanhan miehen kanssa.</p><p>Pariskunta matkustaa kesäksi tilalle, jota hoitaa professorin edesmenneen ensimmäisen vaimon kanssa saatu Sonja-tytär ja tämän eno Vanja. Jelena ja Vanja ovat vanhoja ystäviä, mutta nyt Vanja huomaa rakastavana Jelenaa ja tunnustaakin asian tälle. Jelena ei kuitenkaan vastaa Vanjan tunteisiin.</p><p>Sonja puolestaan on rakastunut tohtori Astroviin. Hän pyytää Jelenalta apua selvittääkseen, onko hänellä tunteita Sonjaa kohtaan. Jelenan tiedustellessa asiaa, Astrov tunnustaa Jelenalle rakastavansa tätä.</p><p> Kun professori ehdottaa tilan myymistä, tilanne kärjistyy. Professori päättää lopulta olla myymättä tilaa, mutta lähtee Jelenan kanssa takaisin kaupunkiin.</p><p> Jelena myöntää lähtiessään Astroville, että hänellä on helliä tunteita tätä kohtaan, mutta jatkaa kuitenkin elämäänsä professorin kanssa. </p><p>Jelena on muusamainen neito, johon kaikki miehet ihastuvat. Hän ei itse haluaisi olla tällaisen huomion keskipisteenä. Jelena tukahduttaa tunteensa. Hän on turhautunut rakkaudettomassa avioliitossaan, eikä hänellä kotona ole oikein mitään tekemistäkään. Krista Kososen esittämä Jelena oli ollut hillitty ja salaperäinen. Tunteet kätkevä ja sisäisiä ristiriitoja kuvaava näyttelemistyylin koettiin onnistuneen erittäin hyvin.</p>",
        "img": "PR_Särkelä itte_TT 2010_kuva Harri Hinkka_Sarkela 6.jpg"
    }
];

/*
 *       ** Mitä on tapahtunut data **
 *       Käyttöohjeet samat kuin edellisessä. Tässä ongelmana on, että tekstit ovat liian pitkiä tähjän laitettavaksi. Todn. näk korjattavissa kuitenkin
 */
lastArr = [
    {
        "name": "Golem-muunnelmia",
        "description": "Golem-muunnelmia on Kiasmassa esitetty esitystaiteen esitys",
        "info": "Golem-muunnelmia, Toisissa tiloissa –kollektiivi Kiasma-teatterissa 2011, koollekutsuja Esa Kirkkopelto. Kuva Kansallisgalleria / Timo Wright.<h1>Mitä on tapahtunut</h1><p>Taru Golemista eli savijättiläisestä, jolla oli yli-inhimilliset voimat, on peräsin 1500-luvulta. Kerrotaan, että Prahassa asunut rabbi Löw herätti sen henkiin, jotta se suojelisi synagogaa ja juutalaisyhdyskuntaa. Golemia pystyi ohjaamaan ja käsittelemään hepreankielisellä salasanalla. Kerran se unohdettiin tehdä hengettömäksi sapattina eli juutalaisten lepopäivänä, jolloin se riistäytyi kontrollista ja kääntyi ihmisiä vastaan. Golem saatiin lopulta vangittua synagogan ullakolle, mutta tarun mukaan se ilmestyy kaupunkiin aina 33 vuoden välein.</p><p>Golem-muunnelmia -esityksessä ei varsinaisesti seurattu Golem -myyttiä, vaan tutkittiin sen tarinan tematiikkaa ja sen herättämiä ajatuksia. Miten ne vaikuttavat ihmisiin tässä ajassa ja jokapäiväisessä elämässämme? Siinä pohdittiin syntymän ja kuoleman rajaa ja sen hallitsemista. Mitkä kaikki asiat ovat Golemaattisia ilmiöitä? Se oli esitys luomisesta: sen materiasta, tekniikasta sekä luoduksi tulemisen kokemuksesta.</p><p>Yleisö oli mukana esityksessä. Aluksi yleisö osallistui keskusteluun Golemin tarinasta ja aihepiiristä, ja sen jälkeen kaikki osallistuivat teokseen erilaisilla harjoitteilla. Esityksessä eloton heräsi eloon myös lavastuksessa, sillä joskus yleisö muodosti itse lavastuksen. Yleisöstä muodostui mm. New Yorkin kaupunki ja WTC-pilvenpiirtäjät, joihin terroristi-iskun lentokoneet törmäävät.</p><h1>Kuvassa</h1>Kohtauksessa katsojat ovat pystyttäneet kaupunging keskelle muurin ja elävät elämäänsä jaetussa kaupungissa.",
        "img": "VM_20110220_kiasma_golemmuunnelmat-64.jpg"
    },
    {
        "name": "Täällä Pohjantähden alla",
        "description": "Kuvaus tähän",
        "info": " Täällä Pohjantähden alla 2011, Suomen Kansallisteatteri 2011, ohjaus Saana Lavaste ja Mika Myllyaho, lavastus Veera Laakso ja Katri Rentto. Kuva Aura Nukari.<h1>Mitä on tapahtunut</h1><p>Väinö Linnan kirjoittama Täällä Pohjantähden alla kuvaa Koskelan suvun elämää pappilan torppari Jussin ja hänen perheensä näkökulmasta. Teoksessa kerrotaan kovan työnteon hallitsemasta maalaiselämästä, Akselin ja Elinan rakkaustarinasta, oikeudenmukaisuudesta sekä Pentinkulman yhteisön elämästä vihan ja väkivallan leimaaman sisällissodan ympärillä.</p><p>Täällä Pohjantähden alla 2011 on sijoitettu esitysajankohdan nykypäivään. Näytelmän sisällä kaksi ohjaajaa, Mika Myllyaho ja Saana Lavaste, valmistelevat yhdessä esitystä Väinö Linnan Täällä Pohjantähden alla -teoksesta. Heidän tavoitteenaan on käyttää näytelmän pohjana Linnan tarinaa ja yhdistää sen teemoja nykypäivän Suomeen. Ohjaajat eivät kuitenkaan löydä henkilökohtaista yhtymäkohtaa romaaniin ja ajautuvat lopulta riitoihin esityksen teemoista: Lavaste tutkii sisällissodan teemojen innoittamana suomalaista yhteiskuntaa poliittisesta näkökulmasta tekemällä yhteisöteatteria, kun taas Myllyaho tarkastelee vihaa ja sen voittamista psykologiselta kannalta. Esityksen lavastus oli viitteellinen ja pelkistetty.</p><h1>Kuvassa</h1>Miesohjaaja yrittää puuttua tilanteeseen, jossa Anttoo Laurila on saanut häädön ja suuntaa näreissään asuntovaununsa kanssa kohti Itämerta.",
        "img": "VM_6142948643_ba42227d5f_o.jpg"
    }
    ,
    {
        "name": "Eduskunta",
        "description": "Kuvaus tähän",
        "info": "Piia Peltola, Santtu Karvonen, Noora Dadu. Susanna Kuparinen: Eduskunta, Ryhmäteatteri 2011, ohjaus Susanna Kuparinen, lavastus Akse Pettersson. Kuva Kai Bäckström. <h1>Mitä on tapahtunut</h1><p>Eduskunta – satiiri vaurauden uusjaosta on ns. dokumenttiteatteria, jonka tekstiosuus perustuu tutkittuihin faktoihin: esityksen repliikit ovat peräisin eduskunnan täysistuntojen pöytäkirjoista, ja taustoittamista varten on myös haastateltu viranomaisia ja asiantuntijoita. Tärkeimpiä esityksessä käsiteltäviä asioita ovat kansanedustajien ideologiat, sosiaalipoliittinen asiantuntemus sekä veroja kiertävät sijoittajat.</p><p> Esitys tarkastelee sekä poliitikkojen että virkamiesten vallankäyttöä suomalaisessa politiikassa. Teoksessa halutaan tutkia, mihin valtion rahat oikeasti päätyvät. Eduskunta sai ensi-iltansa vuoden 2011 eduskuntavaalien alla, jolloin sen käsittelyyn joutui myös kansanedustajien valmistautuminen vaaleihin.</p><h1>Kuvassa</h1><p>Kuntopyörä kuvaa sosiaaliturvan kokonaisuudistus ”Sataa”, joka aiheutti kohua esityksellään pienentää nuorten toimeentulotukea. Kuntopyörää polkemalla uudistuskomitean Osmo Soininvaara jakelee sähköshokkeja.</p>",
        "img": "VM_DSC_3273.jpg"
    }
    ,
    {
        "name": "Punahilkka - kuvia rakkaudesta ja kuolemasta",
        "description": "Punahilkka, kuvia rakkaudesta ja kuolemasta",
        "info": "Vasemmalla Tuire Salonen, Marja Pesonen. Märta Tikkanen: Punahilkka – kuvia rakkaudesta ja kuolemasta, Turun Kaupunginteatteri 1988, ohjaus Laura Jäntti, lavastus Tiina Makkonen. Kuva Matti Kivekäs. <h1>Mitä on tapahtunut</h1><p>Punahilkka – Kuvia rakkaudesta ja kuolemasta perustuu Märta Tikkasen romaaniin Punahilkka. Punahilkka kasvaa perheessä, jonka vanhemmat eivät koskaan riitele. Äidillä on silti vaikeaa kotona, ja hänen mielensäkin alkaa järkkyä. Punahilkka kasvaa aikuiseksi ja äidin varoituksista huolimatta rakastuu Suteen. Sudesta kuitenkin tulee aggressiivinen ja viinaanmenevä eikä riidoilta Punahilkan omassa perheessä vältytä. Susi halveksii Punahilkan työtä, ja lopulta Punahilkan asema on yhtä tukahdutettu kuin äidillä hänen lapsuudenkodissaan. Susi kuitenkin kuolee syöpään, mutta merkkejä Punahilkan omasta kohtalosta tosin on jo nähtävillä Punahilkan omassa tyttäressä.</p><p> Esityksen teemoja ovat parisuhde, lapset, kuolema, väkivalta ja hellyys. Susi toimii Punahilkan keinona kapinoida vanhempia vastaan.  Punahilkka tarvitsee rakkautta ja turvautuu Suteen, joka kuitenkin muuttuu väkivaltaiseksi.</p><p> Punahilkan esityspaikkana oli Hjeltin talo, vanha kaupunkipalatsi Turussa, jossa yleisö oli lähellä näyttelijöitä ja teatteriesityksen sijaan ikään kuin vieraana Punahilkan talossa. Tapahtumia seurattiin useammassa huoneessa: Punahilkan lapsuudenkodissa ja Punahilkan ja Suden kodissa. Lavastus liittyi konkreettisesti esityksen dramaturgiaan, ja valaistus keskittyi korostamaan oleellisia tapahtumia tilanteissa.</p><h1>Kuvassa</h1>Punahilkan lapsuudenkodissa oli yleisölläkin mahdollisuus olla konkreettisesti vieraana.",
        "img": "VM_Punahilkka_Turun_Kt_91015009.jpg"
    }
    ,
    {
        "name": "Kullervo.nyt",
        "description": "Kuvaus tähän",
        "info": "Suvi-Maaria Virta. Anna Viitala: Kullervo.nyt, Joensuun Kaupunginteatteri 2010, ohjaus Perttu Leinonen, lavastus Kaisu Koponen. Kuva Tuua Savuoja.<h1>Mitä on tapahtunut</h1><p>Orpopoika Kullervo on orjana Unton talossa. Unto on tappanut Kullervon vanhemmat eli veljensä Kalervon perheen, mutta pientä Kullervoa hän ei kyennyt murhaamaan. Unto myy Kullervon orjaksi Ilmariselle, jonka emännän kanssa äkkipikainen Kullervo heti riitaantuu. Ilmarisen emäntä leipoo Kullervon eväsleivän sisälle kiven, johon tämä rikkoo isältään saamansa puukon. Kullervo vannoo kostoa. Hän antaa petojen raadella Ilmarisen karjan ja surmaa Ilmarisen emännän. Karkumatkalla Kullervo löytääkin perheensä, jonka luuli olevan kuollut. Kullervo lähtee uudelleen metsään ja rakastuu tapaamaansa Ainikkiin tietämättä tämän olevan hänen sisarensa. Sukulaisuuden paljastuessa Ainikki hukuttautuu. Kullervon kertoessa kotona tilanteesta Kullervon äiti kuolee järkytykseen, ja Kullervon isä sekä toinen sisar riistävät henkensä. Kullervo päättää lähteä kostamaan Untolle kärsimyksensä. Metsästä keräämänsä joukkion kanssa Kullervo tappaa Unton perheen ja polttaa talon, minkä jälkeen Kullervo lopulta surmaa itsensä.</p><p>Kullervo.nyt noudattelee Aleksis Kiven kirjoittamaa Kullervon tarinaa, mutta itse Kullervo-hahmoa ei esityksessä koskaan näytetä. Esityksessä kuljetaan nykypäivän Kullervon aiheuttamien tuhojen jäljissä, ja juoni tiivistyy silminnäkijöiden kertomusten ympärille.</p> <h1>Kuvassa</h1><p>Kohtauksessa on päädytty yhdelle Kullervon hirmutyön jälkeisistä tapahtumapaikoista. Lavastus liitti esityksen kiinteästi nykypäivään.</p>",
        "img": "VM_Kullervo_nyt_Joensuun_Kt_12.jpg"
    }
    ,
    {
        "name": "Aniara",
        "description": "Kuvaus tähän",
        "info": "Maria Ahlroth, Peter Kanerva. Harry Martinson: Aniara, Teater 90° 2010, ohjaus Aleksis Meaney, lavastus Tiina Hauta-aho. Kuva Tekla Pohjolainen. <h1>Mitä on tapahtunut</h1><p>Kaukaisessa tulevaisuudessa kahdeksantuhatta ihmistä on matkalla saastuneelta Maa-planeetalta kohti Marsia. Avaruusalus Aniara kuitenkin suistuu pois kurssiltaan meteoroidin törmäyksestä ja eksyy avaruuteen. Aluksi tämä tietoa pimitetään matkustajilta, mutta lopulta se on pakko paljastaa. Matkustajat joutuvat perustamaan alukseen uuden yhteiskunnan, sillä sinne he tulevat jäämään ikuisiksi ajoiksi.</p><p>Aniarassa pohditaan valtaa ja vallankäyttöä avaruusaluksen johdon ja erilaisten sinne syntyvien uskonnollisten ryhmittyminen kautta. Esitys kuvaa myös sitä, kuinka ihmisellä on taipumus vältellä karua todellisuuttaa kauneuden, muistojen ja fantasioiden avulla. Pysyäkseen järjissään ja säilyttääkseen uskon tulevaan matkustajat perustavat mielikuvituksellisia hengellisiä kultteja ja katselevat aluksen tietokonejärjestelmä Miiman avulla kuvia maasta ja muista maailmoista.</p><p>Kaapelitehtaan Pannuhallin kellaritilasta oli lavastettu valojen avulla avaruusalus, jonka sisällä yleisö liikkui esityksen aikana. Lavastuksen lisäksi myös puvuissa ja rekvisiitassa oli käytetty pieniä mutta poikkeavia tekniikoita, jotka toivat esitykseen scifi-teeman tuntua.</p> <h1>Kuvassa</h1><p>Avaruusaluksen miehistö laatii toimintasuunnitelmaa.</p> ",
        "img": "VM_aniara_teatterimuseo_03.jpg"
    }
    ,
    {
        "name": "Leikin loppu",
        "description": "Kuvaus tähän",
        "info": "Pentti Siimes, Tarmo Manni. Samuel Beckett: Leikin loppu, Suomen Kansallisteatteri 1957 (uusintaensi-ilta 1970), ohjaus Jack Witikka, lavastus Pekka Heiskanen. Kuvaaja Kari Hakli (vuonna 1970).<h1>Mitä on tapahtunut</h1><p>Leikin loppu kertoo maailmasta jossa ei ole mitään jäljellä. Ainoat elossa olevat ihmiset ovat sokea ja halvaantunut Hamm, hänen löytö- tai orjapoikansa Clov, sekä hänen jalattomina roskalaatikoissa asuvat vanhempansa Nell ja Nagg. Näytelmä sijoittuu yhteen huoneeseen, jonka ulkopuolella on vain tyhjyyttä. Näytelmässä ei varsinaisesti tapahdu mitään – tarinoita yritetään kertoa ja kaikenlaista tehdään, mutta toiminta ei koskaan valmistu eivätkä henkilöt reagoi tapahtumiin loogisesti.</p><p> Esityksessä tarkastellaan valtasuhteita: Hamm tarvitsee apua, mutta kohtelee Clovia huonosti, kun taas Clov haluaisi lähteä, mutta ei pysty.</p><p> Tämän esityksen lavastus on minimalistinen, kuin hataraseinäinen rakennus pommituksen jäljiltä. Sen valaistus on kova ja kliininen ja siitä synty vaikutelma ikään kuin näytelmän henkilöt olisivat mikroskoopin alla tutkittavana.</p><h1>Kuvassa</h1><p>Hammin ja Clovin välinen vaikea suhde tiivistyy hajonneessa huoneessa keskellä ei mitään.</p>",
        "img": "VM_leikin_loppu_1.jpg"
    }
    ,
    {
        "name": "Bakkantit 2",
        "description": "Kuvaus tähän",
        "info": "Ville Ahonen, Laura Koistinen (Vesterinen), Anna Mustonen. Euripides: Bakkantit 2, Und er libet 2008, ohjaus Anna-Mari Karvonen, lavastus Hanna Käyhkö. Kuva Hanna Käyhkö. <h1>Mitä on tapahtunut</h1><p>Teoksen inspiraationa on ollut antiikin kreikkalainen näytelmä Euripideen kirjoittama Bakkantit, joka kertoo ihmisluonnon kahtiajakoisuudesta, joka on toisaalta järkevä ja sivistynyt, mutta toisaalta toimii vaistojen ja mielihalujen mukaan.</p><p>Bakkantit 2 käsittelee erilaisia tunteiden ja ruumiin ääritiloja varsinkin liikkeen ja liikkumattomuuden avulla, jolloin esitykseen yhdistyy myös tanssin piirteitä. Esityksen teemaksi nousee lisäksi kahtiajakoisuus yksinäisyyden ja yhteisöllisyyden välillä.</p><h1>Kuvassa</h1>Kohtaus valoa hehkuvan pöydän äärellä kuvastaa hautajaisia.",
        "img": "VM_Bakkantit2_004_Kuva_Heidi_Lind.jpg"
    }
    ,
    {
        "name": "Sorsastaja",
        "description": "Kuvaus tähän",
        "info": "Pirkko Saisio. Pirkko Saisio: Sorsastaja, Suomen Kansallisteatteri 2006, ohjaus Pirkko Saisio. Kuva Leena Klemelä. <h1>Mitä on tapahtunut</h1><p>Sorsastaja on esitys, jossa afrikkalaistaustaiset suomalaiset näyttelijät pohtivat identiteettiään. Esityksen alkupuolella näyttämöllä on ohjaaja ja neljä näyttelijää, jotka valmistelevat teatteriesitystä. He esittävät ohjaajan ohjeiden mukaan kohtauksia omasta elämästään ja kohtaamistaan ennakkoluuloista. Esityksen loppupuolella esitetään ensimmäisessä näytöksessä harjoiteltu näytelmä. Siinä tulkitaan Musta Pekka –korttien hahmojen avulla Kullervon tarinaa oman isän ja oman maan etsinnästä, ja kukin näyttelijöistä esittävät vuorotellen Kullervoa. </p><p>Esityksessä mietitään, miksi oman identiteetin rakentamiseksi nähdään niin paljon vaivaa. Siitä nousee myös esille kysymys, mitä omasta elämästä voi tuoda näyttämölle.</p><p>Lavastus on yksinkertainen, ja se esittää pienen teatterin tarpeistovarastoa.</p><h1>Kuvassa</h1>Ohjaaja ohjeistaa kutakin näyttelijää ottamaan rooleja omien kokemusten, toisten näyttelijöiden tai sukulaisten roolien tai hyllykön barbien avulla, jotka toistensa klooneina edustavat enemmistöä. ",
        "img": "VM_Sorsastaja_SKT_3114 saisio.jpg"
    }
    ,
    {
        "name": "Helsinki by Night I",
        "description": "Kuvaus tähän",
        "info": "Eero-Tapio Vuori. Helsinki by Night I, Todellisuuden tutkimuskeskus 2005, kokonaiskonsepti työryhmä. Kuva Julius Elo. <br><h1>Mitä on tapahtunut</h1><p>Työryhmä on valmistanut Helsinki By Night I -esitystä varten kaupungille tapahtumapisteitä, joita katsojat kiertävät katsomassa bussilla itse valitsemassaan järjestyksessä. Helsingistä halutaan tuoda esille kaupungin arki ja sen tavalliset tarinat, ja tavoitteena on saada ne sekoittumaan sitä varten tehtyyn esitysmateriaaliin. Lavastuksena käytetään koko Helsinkiä. Esityksen tarinoiden merkitys vaihtuu sen mukaan, missä järjestyksessä katsoja sen eri osia näkee ja miten hän yhdistää näkemänsä ja kokemansa asiat ja tapahtumat toisiinsa.</p><h1>Kuvassa</h1><p>Esiintymistä varten rakennettu materiaali painoja nostavasta esiintyjästä sekoittuu tien varren miljöössä tavallisten autojen seassa arkiseen todellisuuteen. Elävän esiintyjän olemassaolo luo lisäksi kontrastin ihmisen ja metallin täyttämän ympäristön välille.</p>",
        "img": "VM_HBN.jpg"
    }
    ,
    {
        "name": "Kokkola",
        "description": "Kuvaus tähän",
        "info": "Juho Kuosmanen, Jussi Rantamäki, Klaus Klemola. Leea Klemola: Kokkola, Tampereen Teatteri – Aurinkoteatteri 2004, ohjaus Leea Klemola, lavastus Erkki Saarainen. Kuva Studio Rexicon / Mika Hiltunen.<h1>Mitä on tapahtunut</h1><p>Kokkola kuvaa ihmisten elämää paukkupakkasilla suomalaisella syrjäseudulla. Juominen, tupakointi ja kiroilu kuuluvat arkeen. Elämässä on yksinäisyyttä ja syrjäytyneisyyttä ja täyttymätöntä rakkautta. Roolihenkilöt tuntevat itsensä aina jollain tapaa vajavaisiksi. Ihmisten väliseen kanssakäymiseen eivät kuulu läheisyys eikä turhat puheet. Henkilöt kuitenkin välittävät toisistaan omilla tavoillaan ja saavat toisiltaan tukea ja hyväksyntää.</p><p>Näytelmässä pohditaan maantieteellisen arktisen sijainnin vaikutusta ihmiseen, ihmisen mieleen ja kehollisuuteen. <h1>Kuvassa</h1><p>Henkilöhuolintayrityksen bussilla kierretään keräämässä ihmisiä hangesta tai milloin mistäkin – ihmisiä, jotka tarvitsevat apua, mutta eivät välttämättä itse osaa sitä pyytää.</p>",
        "img": "VM_Kokkola_Tampereen_Teatteri__E0D0205.jpg"
    }
    ,
    {
        "name": "Anna-Liisa",
        "description": "Kuvaus tähän",
        "info": "Oikealla Liisu Mikkonen – Anna-Liisa. Minna Canth: Anna-Liisa, Savonlinnan Kaupunginteatteri 2004, ohjaus Ritva Söderström, visualisointi Jarmo Hirvonen. Kuva Sakari Martikainen.<h1>Mitä on tapahtunut</h1><p>Anna Liisa on tullut nuorena raskaaksi Mikolle, talon rengille. Tämä kuitenkin jättää Anna Liisan, joka päättää salata raskautensa. Lapsi syntyy metsään, ja hädissään Anna Liisa peittää kädellään vauvan suun itkua hillitäkseen, jolloin vauva kuolee. Neljä vuotta tapahtuman jälkeen Anna Liisa on menossa naimisiin talollisen Johanneksen kanssa. Mikko palaa takaisin häiden alla ja vaatii Anna Liisaa vaimokseen uhaten äitinsä Husson kanssa paljastaa Anna Liisan menneisyyden. Perheen ja miesten kesken laaditaan yhdessä suunnitelma järjestää kihlajaisjuhlat kuin mitään ei olisi tapahtunut. Anna Liisa kuitenkin tunnontuskissaan muuttaa mielensä ja tunnustaa tekonsa kyläläisten edessä, täten joutuen vangituksi.</p><p>Esityksen keskiössä on Anna Liisan halu tehdä oikein, sillä hän haluaisi päästä eroon salaisuudestaan, mutta toisaalta tunnustuksella olisi myös vakavia seurauksia sekä hänelle itselleen että hänen perheelleen.</p><h1>Kuvassa</h1><p>Kohtauksessa ilmenee Anna Liisan ahdistunut mielenmaisema. Etualalla istuva lapsi kuvaa Anna Liisan mieltä kalvavaa muistoa lapsesta, joka hänellä voisi nyt olla.</p>",
        "img": "VM_Anna-Liisa (1) SLN Kaupungin teatteri.jpg"
    }
    ,
    {
        "name": "Tarpeettomia ihmisiä",
        "description": "Kuvaus tähän",
        "info": "Hannu-Pekka Björkman, Sari Mällinen, Eero Aho, Tiina Lymi. Reko Lundán: Tarpeettomia ihmisiä, KOM-teatteri 2003, ohjaus Reko Lundán, lavastus Teppo Järvinen. Kuva Riikka Palonen. <h1>Mitä on tapahtunut</h1><p>Koneasentaja Kari irtisanotaan tehtaalta, ja työttömäksi jääminen saa hänet hermoromahduksen partaalle. Kari ei tunne itseään sen tarpeellisemmaksi parisuhteessaankaan vaimonsa Tuulan kanssa. Kaiken lisäksi Tuula ylennetään työssään, ja itsetuntonsa menettäneelle Karille jää ainoastaan väkivalta keinoksi ilmentää itseään. Myös Tuulan ystävä, Petri, väsyy työhönsä. Hän joutuu olemaan paljon yksin vaimonsa työskennellessä lentoemäntänä, ja hän ihastuukin kaupan kassaneitiin, Tuulan työkaveriin Sonjaan. Petri aloittaa suhteen tämän kanssa. Hän haluaisi kuitenkin myös säilyttää pitkän avioliittonsa. Suhde lopulta paljastuu, ja Petrin ja Sonjankin suhde alkaa rakoilla. Vaikka Petri ei oikein osaakaan auttaa, on hän ja Sonja pystyvät auttamaan Tuulaa ja Karia.</p><p>Tarpeettomia ihmisiä kertoo tarpeesta olla hyödyllinen. Lisäksi siinä käsitellään katkeruudesta kumpuavaa väkivaltaa, jonka kohteeksi joutuvat yleensä täysin viattomat.</p><p>Esityksen lavastus kuvaa karusti aikaansa sekä kodin ja kaupan läheistä suhdetta toisiinsa. Muutamien yksinkertaisten muutosten lisäysten avulla tapahtumapaikkaa pystyttiin vaihtamaan nopeasti.</p><h1>Kuvassa</h1><p>Kohtauksessa istutaan iltaa yhdessä Tuulan ja Karin kotona kaupan pikkujoulujen jälkeen. Pikkujoulut käynnistävät tapahtumasarjojen ketjun.</p>",
        "img": "VM_Tarpeettomia2.jpg"
    }
    ,
    {
        "name": "Suomen hevonen",
        "description": "Kuvaus tähän",
        "info": "Tiina Lymi, Sari Mällinen, Hannu-Pekka Björkman, Marja Packalén. Sirkku Peltola: Suomen hevonen, KOM-teatteri 2004, ohjaus Pekka Milonoff, lavastus Eeva Ijäs. Kuva Riikka Palonen. <h1>Mitä on tapahtunut</h1><p>Suomen hevonen tapahtuu kuvitteellisessa Kimasen kylässä, Hakamäen tilalla 2000-luvun alkupuolella. Perheen aikamiespoika Kai saa isänsä Lassin mukaan ”bisnekseen” jonka tarkoituksena on myydä talon oma viimeinen hevonen Harmo ja kaikki lähiseudun ”tarpeettomat” hevoset Italiaan gurmeeravintolaan. Kaikki tämä on tarkoitus tehdään salaa.</p><p> Latvialainen kuljettaja ajaa kuitenkin kuorman ojaan ja rekkalastillinen suomenhevosia leviää Hakamäen talon pelolle. Lassi lopettaa loukkaantuneet eläimet ja uskottelee talon väelle, että liha josta he tekevät lihapullia ja Lindströmin pihvejä on nautaa. </p><p>Kai oli saanut rahat hevosista ”heti kun lasti oli lähtenyt” ja hän oli jo ehtinyt ostaa harrikan. Hän ei suostu myymää pyörää, vaikka sisilialaiset vaativat rahojaan takaisin. Kain äiti Aili kavaltaa oman Äitensä hautajaisrahat maksaakseen hoitoalan kurssin johon Kai muka osallistuu.  Lasku Italiaan saadaan maksettua.</p><p>Tosiasiat paljastuvat yksi toisensa jälkeen: Äite saa tietää, että arkkurahat on varastettu. Käy ilmi, että Harmo ja muut hevoset ovat paloina pakastimessa. Kaikki saavat tietää, että Lassi on jättänyt EU-tukihakemuksen tekemättä ja tukia pitää palautta takautuvastikin. Kai on ajanut moottoripyöränsä korjauskelvottomaksi. Selviää, että Äiten Jaanalle lahjoittama hevostaulu on Ilja Repinin maalaama arvoteos ja voi pelastaa perheen perikadolta. Jaana on leikannut hevoset irti maalauksesta. Äite kuolee.</p><p>Suomen hevonen tarkastelee vanhan ja nykyisen ajan suhdetta sovittelemalla maalaiselämää yhteen sekä EU-ajan tuomien muutosten, että kaupunkilaistumisen rinnalla. Esityksessä pohditaan myös vanhan matriarkkaäidin, katkeroituneen ex-kotirouvan, epäonnistuneen ex-miehen ja hänen uuden hermoherkän naisystävänsä sekä perheen lasten välisiä ihmissuhteita kaikkien yrittäessä jatkaa elämäänsä normaalisti epävarmojen aikojen keskellä.</p><p>Lavastuksessa kuvattiin 70-luvun pientilaa todentuntuisesti. Siitä haluttiin kuitenkin tehdä koominen ja karikatyyrimäinen käyttämällä vanhoja kolhiintuneita ja kirkkaanvärisiä lavasteita ja rekvisiittaa.</p><h1>Kuvassa</h1><p>Isoäiti valmistaa lihapullia. Hänelle eikä lapsenlapselle ole vielä kerrottu, että jauheliha on peräisin perheen hevosesta.</p>",
        "img": "VM_Suomenhev7.jpg"
    }
    ,
    {
        "name": "Kolme pientä sisarta",
        "description": "Kuvaus tähän",
        "info": "Tuire Tuomisto. Anton Tšehov – Katariina Numminen: Kolme pientä sisarta, Todellisuuden tutkimuskeskus 2005, ohjaus Katariina Numminen, lavastus työryhmä. Kuva Pilvi Porkola. <h1>Mitä on tapahtunut</h1><p>Kolme pientä sisarta perustuu Anton Tsehovin näytelmään Kolme sisarta, jossa hiljaiseen pikkukaupunkiin muuttaneet sisarukset kaipaavat takaisin Moskovaan. Siskot ja heidän veljensä morsiamineen kaipaavat myös rakkautta – ainoa naimisissa oleva sisar elää rakkaudettomassa avioliitossa, eikä veljelläkään mene sen paremmin. Kaupunkiin saapunut rykmentti luo toivoa uudenlaisesta elämästä, mutta sen lähdettyä kaikki on taas kuten aiemminkin, mikään ei muuttunut.</p><p> Kolme pientä sisarta -esityksen teemoja ovat rakkaus ja luopuminen. Siinä käsiteltiin myös muistia ja unohtamista sekä erilaisia suhteita: lapsien ja isovanhempien sekä leikin ja teatterin välillä.</p> <h1>Kuvassa</h1><p>Pöytäliinaan on heijastettu video, jossa oikeat sisarukset isovanhempineen esittävät kohtauksia Tsehovin näytelmästä.Tässä esityksessä esiintyjällä, valolla, äänellä ja videolla kaikilla oli tärkeä rooli.</p>",
        "img": "VM_kps1 002.jpg"
    }
    ,
    {
        "name": "Amerikkalainen tyttö",
        "description": "Kuvaus tähän",
        "info": "Essi Hellén, Emmi Parviainen, Iida-Maria Heinonen, Karoliina Niskanen, Milla Kangas. Monika Fagerholm: Amerikkalainen tyttö, Teatteri Takomo 2012, ohjaus Essi Räisänen, lavastus ja fjisoinnit Milja Aho. Kuva Milja Aho.<h1>Mitä on tapahtunut</h1><p>Amerikkalainen tyttö on saanut vaikutteita Monika Fagerholmin samannimisestä romaanista. Siinä nuori amerikkalainen tyttö hukkuu järveen ja hänen poikaystävänsä löydetään hirttäytyneenä metsästä Seudulla syksyllä 1969. Vuosia myöhemmin paikkakunnan tytöt Sandra ja Doris alkavat leikkiä Amerikkalaisen tytön mysteeriä. Leikin tarkoituksena on rekonstruoida kauan aikaisemmin tapahtunut tragedia, mutta se toimii myös keinona piiloutua omalta onnettomuudeltaan tai kipeiltä muistoilta. Tytöille selviää kuitenkin, että unelmointi ei välttämättä ole aina vapauttavaa, ja amerikkalaisen tytön tavoin myös leikki voi loppua lampeen.</p><p>Esitys tarkastelee nuorten tyttöjen unelmia, jotka voivat myös olla vaarallisia. Tematiikkaan kuuluu rakkaudella ja kuolemalla leikittely. Esityksessä ei pyritty tuomaan Fagerholmin romaanista itse tarinaa esille, vaan välittämään katsojille tunnelmia, mielikuvia ja lukukokemus. Siksi esityksessä käytetään vuorottelua: ajassa hypitään eteen- ja taaksepäin, toisto ja staattisuus vaihtelevat keskenään, ja tyttöjengi vaihtelee rooleja näyttelijöiden ja muusikoiden välillä.</p> <h1>Kuvassa</h1>Pienoismallit esittävät Seudun taloja, altapäin valaistu taso kuvastaa Bule-lampea ja taustan videoprojisoinnissa näytetään vedenalaisia ruokoja. Lavastuksessa pyrittiin tuomaan kirjan tunnelma esille",
        "img": "VM_Milja_Aho_Amerikkalainen_tyttö.jpg"
    }
    ,
    {
        "name": "Leiri maailman laidalla",
        "description": "Kuvaus tähän",
        "info": "Seppo Saraspää – Lauri Sipari: Leiri maailman laidalla, Rovaniemen Kaupunginteatteri 2009, ohjaus Taava Hakala, lavastus Sampo Pyhälä. Kuva Timo Lindholm.<h1>Mitä on tapahtunut</h1><p>Keskelle jatkosodanaikaista Lapin erämaata on pystytetty vankileiri, jossa pidetään venäläisiä sotavankeja pakkotyöläisinä puunkaadossa saksalaissotilaiden valvovien silmien alla. Leirille saapuu nälissään kolttamies, joka ystävystyy leirin suomalaisen tulkin kanssa. Yksi vangeista pakenee leiriltä, ja häntä etsimään lähetetään tulkki ja koltta paikallisen luonnon ja olosuhteiden tuntijana. Yhteisen eristäytyneisyytensä takia vangit ja vartijat ovat alkaneet lähentyä keskenään, ja leiristä muodostuu tiivis yhteisö, jota aletaan puolustaa ulkopuoliselta maailmalta.</p><p>Leiri maailman laidalla käsittelee sodan mielettömyyttä. Sen kantavina teemoina on myös pettymys elämään ja ulkopuolisuuden tunne. Tärkeässä asemassa on myös Lappi ja sen luonto. </p><p> Lavastusta pidettiin erittäin onnistuneena esityksen tematiikan ja Lapin luonnon kuvaajana. Siinä hyödynnettiin erilaisia luukkuja, joilla näyttelijöiden ja tarpeiston liikuttelun lisäksi peitettiin ja korostettiin asioita talvisen Lapin miljööstä.</p><h1>Kuvassa</h1><p>Kolttamies ja tulkki ovat lähteneet erämaahan etsimään karannutta vankia.</p>",
        "img": "VM_Leiri265.jpg"
    }
    ,
    {
        "name": "Ihmisiä hyvinvointivaltiossa",
        "description": "Kuvaus tähän",
        "info": "Edessä Ismo Kallio. Reko Lundán: Ihmisiä hyvinvointivaltiossa, Suomen Kansallisteatteri 2003, ohjaus Reko Lundán, lavastus Markku Hakuri. Kuva Leena Klemelä. <h1>Mitä on tapahtunut</h1><p>Ihmisiä hyvinvointivaltiossa käsittelee 1980- ja 1990-lukujen taloudellisia mullistuksia Suomessa. Roolihahmoihin kuuluu tuon ajan poliitikkoja ja pankkiireita, mutta työmarkkinoita ja työttömyyttä tarkastellaan esityksessä erityisesti tavallisen veronmaksajan näkökulmasta: ihmiset unohdettiin, kun päättäjät keskittyivät pelastamaan instituutioita. </p><p>Revyy-muodossa esitetyn näytelmän miljöönä on Helsingin ydinkeskustassa ollut Kamppin rakennustyömaa.</p><h1>Kuvassa</h1><p>Pankkikriisi aiheuttaa ongelmia myös Suomen pörssissä.</p>",
        "img": "VM_Ihmisiä 10.jpg"
    }
    ,
    {
        "name": "Jessikan pentu",
        "description": "Kuvaus tähän",
        "info": "Leea Klemola: Jessikan pentu, Lahden kaupunginteatteri 2014, ohjaus Anne Rautiainen, lavastus Annukka Pykäläinen. Kuva Tarmo Valmela.<h1>Mitä on tapahtunut</h1><p>Jessika kärsii paniikkihäiriöistä. Hän on turhautunut teknologian täyttämään nyky-yhteiskuntaan ja haaveilee yhteydestä luontoon. Jessika ei myöskään ole tyytyväinen perheasioihinsa. Hän päättää valmistella teatteriesityksen näyttääkseen pojalleen, kuinka olisi halunnut kaiken tapahtuneen. Apuna esityksessä Jessikalla on miehensä, äitinsä sekä terapiakoira Jekku. Esitys ei kuitenkaan suju suunnitelmien mukaan, sillä koira ampaisee tuon tuosta jäniksen perään eikä tekniikkakaan toimi, ja Jessikan kaipuu luontoon vain vahvistuu.</p><p>Jessikan pentu –esityksessä pohditaan lasten kasvattamisen lisäksi yleisestikin ihmislajin kehittymistä. Keskeisenä teemana on ihmisen suhde luontoon sekä ihmisen ja eläimen väliset erot.</p><h1>Kuvassa</h1><p>Jessikan valmistelema näytelmä sijoittuu metsään.  Lavastuksen avulla kiteytyy esityksen teema ihmisen ja luonnon välisestä suhteesta.</p>",
        "img": "VM_Jessikan pentu_2.jpg"
    }
];
