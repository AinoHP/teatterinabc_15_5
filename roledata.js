/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *       Roolituksen käyttöohje
 *
 *    Tietokanta näytelmälle
 *   --------------------------
 *   playId - tunnus, älä vaihda
 *   name - Esitelmän nimi
 *   plot - Juoniselostus
 *   description - Kuvaus esitelmästä, joka tulee alkusivulle.
 *   info - Tämä teksti tulee kun näytelmä on valittu ja siirrätyään roolittamaan
 *   img - Alkuvalikon kuva
 *
 *   Tietokanta hahmon tiedoille
 *   ---------------------------
 *    |- role1...role4 - Hahmojen tiedot tulevat tähän.
 *    |-- roleName - Hahmon nimi
 *    |-- title - Hahmon kuvaus tai titteli
 *    |-- imgStore - tallentaan kuvat hahmosta tänne
 *    |---- imgLink - Kuvan linkki/url
 *    |---- imgInfo - kuvan hahmon kuvaus, analyysi
 *    |---- imgThumb - kuvan pikkukuva, jota näytetään kun hahmo on valittu
 *    |---- actor - Näyttelijän nimi
 *
 *
 *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
roleArray = [
    {
        "playId": "0",
        "name": "Anna Liisa",
        "plot": "<p>Anna Liisa on viisitoistavuotiaana tullut raskaaksi talon rengille Mikolle. Mies kuitenkin jättää hänet ja Anna Liisa salaa raskautensa kaikilta. Mikon lisäksi ainoa, joka tietää Anna Liisan odottavan lasta, on Mikon äiti Husso. Anna Liisan ollessa matkalla Husson mökille synnyttämään lapsi syntyy metsään ennen kuin hän ehtii perille. Jotta kukaan ei kuulisi vauvan itkua, Anna Liisa laittaa kätensä tämän suun eteen ja vauva kuolee. Husso auttaa Anna Liisaa salaamaan tapahtuneen.</p><p> Näytelmän alussa tästä kaikesta on kulunut neljä vuotta. Anna Liisa on menossa naimisiin Johanneksen kanssa. Mikko kuitenkin palaa takaisin häiden alla ja vaatii Anna Liisaa vaimokseen.  Hän uhkaa paljastavansa menneisyyden tapahtumat, jos Anna Liisa ei suostu naimakauppoihin. Aluksi Anna Liisa aikoo myöntyä Mikon vaatimuksiin. Ja jotta vältytään yleiseltä häpeältä, sovitaan, että kihlajaiset järjestään kuin mitään ei olisi tapahtunut ja myöhemmin sulhaset vaihdettaisiin.</p><p> Anna Liisa kuitenkin muuttaa mielensä juhlissa ja tunnustaa tekonsa. Hänet vangitaan.Tulkinnanvaraista on se, saako Anna Liisa lopuksi läheistensä ja yhteisön ymmärryksen puolelleen. Ehkä myös Johannes antaa hänelle anteeksi sanoessaan: …sinä olet kumminkin se, joksi sinua alun pitäen luulinkin.</p> ",
        "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula erosullamcorper quis, lacinia quis facilisis sed sapien.",
        "img": "1. SKT 1920_kuvaaja ei tiedossa_04008004b.jpg",
        "role0": [{
            "roleName": "Anna Liisa",
            "title": "Talonomistaja Kortesuon tytär",
            "imgStore": [
                {
                    "imgLink": "1. SKT 1920_kuvaaja ei tiedossa_04008004b.jpg",
                    "imgInfo": "Anna Liisa on äärimmäisen rauhallinen ja harkitseva.  Hän liikkuu ja puhuu kuin vakava aikuinen nainen. Hän ei pilaile, juoruile, keksi hauskoja juttuja ja jaa salaisuuksia ystäviensä kanssa, kuten muut ikäisensä, alle 20-vuotiaat tytöt. Anna Liisassa on jopa pelottavaa totisuutta. Silmien takaa näkyy peitetty kauhu ja pelko tulevaa kohtaan. Muu perhe, varsinkin pikkusisko Pirkko yrittää piristää Anna Liisaa ja saada häneen iloa ja eloa. Hänen suhteensa ihmisiin, myös sulhaseensa Johannekseen, on muodollinen ja asiallinen. Anna Liisan liioiteltu hiljaisuus tuo esitykseen hidasta tempoa ja maltillisuutta, jossa vältetään tunnekuohuja. Kun totuus Anna Liisan teosta paljastuu, hän romahtaa.",
                    "imgThumb": "1. SKT 1920_kuvaaja ei tiedossa_04008004b.jpg",
                    "actor": "Tyyne Juntto"
                },
                {
                    "imgLink": "2. UUSI Turun Teatteri 1935_kuva Vario_02022011b.jpg",
                    "imgInfo": "Anna Liisa on runollinen ja haaveileva. Ikään kuin unohtamalla ja kieltämällä menneet tapahtumat ne pyyhkiytyisivät pois maailmasta. Anna Liisa näyttäytyy ympäristölleen herkkänä, hauraana ja puhtaana kukkana, jossa ei ole mitään pahaa eikä mitään vikaa. Hän on myös äärimmäisen ahkera ja tunnollinen. Koska Anna Liisa on eteerinen ja haavoittuvainen, kaikkien näytelmän henkilöiden on kohdeltava häntä silkkihansikkain. Tätä taustaa vasten Anna Liisan teon esille tuleminen on kaikille järkyttävää. Myös Anna Liisa itse herää kuin pitkästä unesta, kohtaa totuuden ja myöntää syyllisyytensä.",
                    "imgThumb": "2. UUSI Turun Teatteri 1935_kuva Vario_02022011b.jpg",
                    "actor": "Martta Suonio"
                },
                {
                    "imgLink": "5. UUSI Lahti 2000_kuvaaja Soila Puurtinen_kuva.jpg",
                    "imgInfo": "Anna Liisa pyrkii tekemään kaiken mahdollisimman oikein ja hyvin. Kotona hän tekee koko ajan töitä; puunaa, putsaa ja kitkee. Hän auttaa kylässä asuvia vähäosaisia ja on mukana seurakunnan toiminnassa. Hän ottaa ylenpalttisesti muita ihmisiä huomioon ja tyrkyttää apuaan, vaikka sitä ei tarvittaisikaan. Anna Liisan pyrkimys hyvittää tekonsa saa hänet epätoivon partaalle, koska tuntuu, että mikään ei riitä. Hän on koko ajan huolissaan kaikesta. Anna Liisan käymä sisäinen taistelu vie häneltä kaikki voimat ja hän onkin miltei aina väsynyt ja uupunut. Hänelle on suuri helpotus tunnustaa tekonsa. Anna Liisan ei tarvitse enää peitellä suurta häpeäänsä eikä pelätä paljastumista.",
                    "imgThumb": "5. UUSI Lahti 2000_kuvaaja Soila Puurtinen_kuva.jpg",
                    "actor": "Anna-Leena Sipilä"
                },
                {
                    "imgLink": "6. UUSI TTT 2011_kuva Jyrki Tervo_0470.jpg",
                    "imgInfo": "Anna Liisa on jännittynyt, kireä ja pelokas, eikä ole hetkeksikään voinut unohtaa aikaisempia tekojaan. Hänen sieluaan jäytää lakkaamatta syyllisyys, ja toisaalta pelko paljastumisesta. Tämän vuoksi Anna Liisan olemusta ympäröi hätäisyys. Hän ei voi olla ja istua rauhassa, vaan hänen täytyy rynnätä ja sännätä pakasta toiseen ja olla koko ajan tekemässä jotakin ”hyödyllistä”. Hänen hermostuneisuutensa ja levottomuutensa leimaa koko esityksen ilmapiiriä saaden sen tuntumaan sähköiseltä. Kun Anna Liisa lopulta tunnustaa tekonsa, hän rauhoittuu ja tekee sovinnon itsensä kanssa.",
                    "imgThumb": "6. UUSI TTT 2011_kuva Jyrki Tervo_0470.jpg",
                    "actor": "Suvi-Sini Peltola"
                }
            ]
        }],
        "role1": [{
            "roleName": "Husso",
            "title": "Mikon äiti",
            "imgStore": [
                {
                    "imgLink": "2. Tampereen Teatteri 1931_kuva Valokuvaamo Laurent_aaaaa032b.jpg",
                    "imgInfo": "Selväjärkinen Husso yrittää järkiperäisesti vakuuttaa Anna Liisalle, että hänen tässä tilanteessa kannattaa vaihtaa Johannes Mikkoon. Hän käyttäytyy näennäisen nöyristelevästi Kortesuon emännän ja isännän edessä. Hän ei voi käsittää, miksi Anna Liisa ei heti suostu Mikon vaimoksi tai miksi tyttö tunnustaa tekonsa.",
                    "imgThumb": "2. Tampereen Teatteri 1931_kuva Valokuvaamo Laurent_aaaaa032b.jpg",
                    "actor": "Aino Mattila"
                },
                {
                    "imgLink": "3. Helsingin Työväenteatteri_1948_kuva Relavuo_99002010009.jpg",
                    "imgInfo": "Husso on puhelias. Hän on tottunut selviämään elämästä oveluudella, juoruilemalla ja kertomalla toisista ihmisistä puolivalheellisia asioita, joista on hänelle itselleen hyötyä. Husso on elättänyt itsensä ja poikansa Mikon kaikenlaisilla pikkutöillä kylän taloissa, joten hän tietää kaiken kaikkien asioista. Hän on varma siitä, että saa juonittua Anna Liisan Mikolle vaimoksi. ",
                    "imgThumb": "3. Helsingin Työväenteatteri_1948_kuva Relavuo_99002010009.jpg",
                    "actor": "Saara Ranin"
                },
                {
                    "imgLink": "5. Kotkan Kaupunginteatteri_1989_kuva Pekka Syvänen_94006001.jpg",
                    "imgInfo": "Husso kertoo, miten asiat ovat. Hän ei nöyristele eikä kumartele rikkaampien edessä. Hän on omanarvontuntoinen ja määrätietoinen. Hänen mielestään on oikeus ja kohtuus, että hänen poikansa Mikko saa Anna Liisan vaimokseen.",
                    "imgThumb": "5. Kotkan Kaupunginteatteri_1989_kuva Pekka Syvänen_94006001.jpg",
                    "actor": "Salme Karppinen"
                },
                {
                    "imgLink": "6. TTT 2011_kuva Jyrki Tervo_2590.jpg",
                    "imgInfo": "Husso esittää vaatimatonta ja vähän tyhmää, vaikka hän todellisuudessa on kovapintainen, älykäs ja ovela. Hän tarkkailee sitä, mitä ympärillä tapahtuu ja tarttuu heti tilanteeseen, jos uskoo siitä olevan hyötyä hänelle itselleen ja Mikolle. Hän ei anna armoa Anna Liisalle, vaan puhuu tytölle kuin paha henki vakuuttaen sitä, että hänen olisi mentävä Mikon kanssa naimisiin.",
                    "imgThumb": "6. TTT 2011_kuva Jyrki Tervo_2590.jpg",
                    "actor": "Mika Honkanen"
                }
            ]
        }],
        "role2": [{
            "roleName": "Johannes",
            "title": "Anna Liisan sulhanen",
            "imgStore": [
                {
                    "imgLink": "1. SKT 1920_kuvaaja ei tiedossa_04008003.jpg",
                    "imgInfo": "Vakava, yksitotinen ja jähmeä Johannes on ihastunut Anna Liisan ahkeruuteen. Hän uskoo, ettei Anna Liisa vilkuile muita miehiä ja on varma siitä, että koti on aina kunnossa. Johanneksen ja Anna Liisan välinen suhde on muodollinen ja kankea. Vaikka Johannes antaa Anna Liisalle anteeksi, miehen on todella vaikea käsittää ja uskoa, mitä tyttö on tehnyt.",
                    "imgThumb": "1. SKT 1920_kuvaaja ei tiedossa_04008003.jpg",
                    "actor": "Näyttelijä tunnistamaton"
                },
                {
                    "imgLink": "3. Helsingin Työväenteatteri_1948_99002010006.jpg",
                    "imgInfo": "Optimistinen, turvallinen ja lempeä Johannes uskoo kaikista ihmisistä hyvää ja luottaa tulevaisuuteen. Hän näkee Anna Liisassa toisista poikkeavan ja erikoisen tytön, jonka uskoo saavan rauhan ja onnen avioliiton myötä. Hänen suhteensa Anna Liisaan on lämmin ja ystävällinen. Johannes on ehkä ainoa ihminen, joka ymmärtää miksi Anna Liisa on ajautunut tekoonsa.",
                    "imgThumb": "3. Helsingin Työväenteatteri_1948_99002010006.jpg",
                    "actor": "Esko Vettenranta"
                },
                {
                    "imgLink": "4. SKT 1972_kuva Kari Hakli_03019005695.jpg",
                    "imgInfo": "Realistinen ja suoraluonteinen Johannes tietää miten asioiden pitää olla ja miten ne pitää hoitaa. Hän ajattelee, että Anna Liisasta tulee hyvä ja ahkera vaimo. Johannes ei suotta hempeile, vaan saa ystävällisiksi tarkoitetut sanat kuulostamaan vähän töykeiltä. Hänen ja Anna Liisan suhde on mutkaton ja koruton. Anna Liisan tunnustaessa tekonsa Johannes ajattelee sisimmissään, että olisihan se pitänyt arvata, tämä tuntuikin liian hyvältä.",
                    "imgThumb": "4. SKT 1972_kuva Kari Hakli_03019005695.jpg",
                    "actor": "Hannu Lauri"
                },
                {
                    "imgLink": "5. Lahti 2000_kuva Soila Puurtinen_Mikko Jurkka, Tapani Kalliomäki, Anna-Leena Sipilä.jpg",
                    "imgInfo": "Iloinen, huumorintajuinen ja leikkisä Johannes on ihastunut Anna Liisassa siihen, että tytössä on jotain arvoituksellista, kuin tämä kätkisi jonkin suuren salaisuuden. Johannes yrittää auttaa Anna Liisaa kaikin tavoin, vaikka ei tiedäkään mikä hänen ongelmansa on. Jos yleinen ilmapiiri ja ihmisten suhtautuminen Anna Liisan tekoon ei olisi niin tuomitseva, Johannes voisi palata yhteen Anna Liisan kanssa tämän kärsittyä tuomionsa.",
                    "imgThumb": "5. Lahti 2000_kuva Soila Puurtinen_Mikko Jurkka, Tapani Kalliomäki, Anna-Leena Sipilä.jpg",
                    "actor": "Tapani Kalliomäki"
                }
            ]
        }],
        "role3": [{
            "roleName": "Mikko",
            "title": "Kortesuon entinen renki",
            "imgStore": [
                {
                    "imgLink": "1. Tampereen Teatteri 1931_kuva Valokuvaamo Laurent_90002021.jpg",
                    "imgInfo": "Mikko on kiero ja lipevä mies, joka äitinsä Husson yllyttämänä tulee vaatimaan Anna Liisaa vaimokseen. Mikko esittää itsevarmaa, mutta toisaalta epäilee sitä, onko hänellä mahdollisuutta saada vaatimuksensa toteutettua. Hän on koko ajan valmiina liukenemaan paikalta, jos tilanne näyttää epämiellyttävältä tai uhkaavalta. ",
                    "imgThumb": "1. Tampereen Teatteri 1931_kuva Valokuvaamo Laurent_90002021.jpg",
                    "actor": "Leo Lähteenmäki"
                },
                {
                    "imgLink": "3. Helsingin Työväenteatteri_1948_99002010009.jpg",
                    "imgInfo": "Mikko on aika paljon vanhempi kuin Anna Liisa. Hän ei ole mielestään tehnyt mitään väärää jättäessään Anna Liisan yksin tämän odottaessa lasta. Hän vähättelee Anna Liisan tunteita Johannesta kohtaan. Mikko on itsevarma ja on sitä mieltä, että hänellä on oikeus saada Anna Liisa vaimokseen.",
                    "imgThumb": "3. Helsingin Työväenteatteri_1948_99002010009.jpg",
                    "actor": "Uljas Kandolin"
                },
                {
                    "imgLink": "4. SKT_1972_kuva Kari Hakli_03019005687.jpg",
                    "imgInfo": "Päättäväinen ja asiallinen Mikko kertoo, miten asiat hänen mielestään ovat ja miten niiden pitää hänen paluunsa jälkeen sujua. Hän on heti valmiina ottamaan ohjat käsiinsä talossa. Hän ei pysty ymmärtämään Anna Liisan asennetta tilanteessa ja vielä vähemmän hän ymmärtää sitä, että tyttö tunnustaa tekonsa. ",
                    "imgThumb": "4. SKT_1972_kuva Kari Hakli_03019005687.jpg",
                    "actor": "Arto Tuominen"
                },
                {
                    "imgLink": "5. Lahti 2000_kuva Soila Puurtinen_Anna-Leena Sipilä ja Mikko Jurkka.jpg",
                    "imgInfo": "Mikko on kova puhumaan, hauska ja vitsikäs. Hän pystyy selittämään mustankin valkoiseksi. Hän on päättänyt puhumalla saada Anna Liisan itselleen takaisin. Mikko pitää Johannesta mitättömänä ja tylsänä itseensä verrattuna. Hänen mieleensä ei juolahdakaan, että Anna Liisa ei ilomielin suostuisi hänen vaimokseen, kun hän vihdoin on palannut.",
                    "imgThumb": "5. Lahti 2000_kuva Soila Puurtinen_Anna-Leena Sipilä ja Mikko Jurkka.jpg",
                    "actor": "Mikko Jurkka"
                }
            ]
        }]
    },
    {
        "playId": "1",
        "name": "Hamlet",
        "plot": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor. Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec ",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligulaeros ullamcorper quis, lacinia quis facilisis sed sapien.",
        "info": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula erosullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectusauctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend neclacus.Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum eratvehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque.Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blanditsit amet tortor.",
        "img": "2. Svenska Teatern_1963_97036062.jpg",
        "role0": [{
            "roleName": "Hamlet",
            "title": "Tanskan prinssi",
            "imgStore": [
                {
                    "imgLink": "1. Kansan Näyttämö 1927_Hamlet_97069137.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "1. Kansan Näyttämö 1927_Hamlet_97069137.jpg",
                    "actor": "Joel Rinne"
                },
                {
                    "imgLink": "2. Svenska Teatern_1963_97036062.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. Svenska Teatern_1963_97036062.jpg",
                    "actor": "Kurt Ingvall"
                },
                {
                    "imgLink": "3. Lilla Teatern_1985_96026002.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. Lilla Teatern_1985_96026002.jpg",
                    "actor": "Asko Sarkola"
                },
                {
                    "imgLink": "HKT 2012_Hamlet_kuva Stefan Bremer_hamlet18.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "HKT 2012_Hamlet_kuva Stefan Bremer_hamlet18.jpg",
                    "actor": "Eero Aho"
                }
            ]
        }],
        "role1": [{
            "roleName": "Ofelia",
            "title": "Hamletin lemmitty",
            "imgStore": [
                {
                    "imgLink": "1. Suomalainen Teatteri 1884_Hamlet_kuva Daniel Nyblin_aa160061.jpg",
                    "imgInfo": "Analyysi tästä hahmosta123",
                    "imgThumb": "1. Suomalainen Teatteri 1884_Hamlet_kuva Daniel Nyblin_aa160061.jpg",
                    "actor": "Ida Aalberg"
                },
                {
                    "imgLink": "2. Kansan Näyttämö 1927_Hamlet_kuvaaja ei tiedossa_97069135.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. Kansan Näyttämö 1927_Hamlet_kuvaaja ei tiedossa_97069135.jpg",
                    "actor": "Näyttelijä tunnistamaton"
                },
                {
                    "imgLink": "3. TTT 1968-1969_kuva Juhani Riekkola_97036059.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. TTT 1968-1969_kuva Juhani Riekkola_97036059.jpg",
                    "actor": "Salme Laaksonen"
                },
                {
                    "imgLink": "4. HKT 2012_Hamlet_kuva Stefan Bremer_hamlet15.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. HKT 2012_Hamlet_kuva Stefan Bremer_hamlet15.jpg",
                    "actor": "Anna-Maija Tuokko"
                }
            ]
        }],
        "role2": [{
            "roleName": "Gertrud",
            "title": "Hamletin äiti",
            "imgStore": [
                {
                    "imgLink": "1. Lahti 1982_kuvaaja ei tiedossa_ 82049035.jpg",
                    "imgInfo": "Analyysi tästä 4321",
                    "imgThumb": "1. Lahti 1982_kuvaaja ei tiedossa_ 82049035.jpg",
                    "actor": "Inkeri Luoma-aho"
                },
                {
                    "imgLink": "1. Yhtynyt Teatteri Kansan Näyttämö ja Koiton Näyttämö 1933_99002011003.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "1. Yhtynyt Teatteri Kansan Näyttämö ja Koiton Näyttämö 1933_99002011003.jpg",
                    "actor": "Elsa Rantalainen"
                },
                {
                    "imgLink": "2. Kansan Näyttämö 1927_kuvaaja ei tiedossa_99002011007.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. Kansan Näyttämö 1927_kuvaaja ei tiedossa_99002011007.jpg",
                    "actor": "Hilja Jorma"
                },
                {
                    "imgLink": "4. HKT 2012_Hamlet_kuva Stefan Bremer_hamlet9.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. HKT 2012_Hamlet_kuva Stefan Bremer_hamlet9.jpg",
                    "actor": "Tiia Louste"
                }
            ]
        }],
        "role3": [{
            "roleName": "Claudius",
            "title": "Hamletin isäpuoli",
            "imgStore": [
                {
                    "imgLink": "1. Kansan Näyttämö 1927_kuvaaja ei tiedossa_99002011006.jpg",
                    "imgInfo": "Analyysi tästä hahmosta53343",
                    "imgThumb": "1. Kansan Näyttämö 1927_kuvaaja ei tiedossa_99002011006.jpg",
                    "actor": "Otto Al'-Antila"
                },
                {
                    "imgLink": "2. Kotkan Näyttämö 1937_kuvaaja ei tiedossa_aa221078.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. Kotkan Näyttämö 1937_kuvaaja ei tiedossa_aa221078.jpg",
                    "actor": "Holger Salin"
                },
                {
                    "imgLink": "3. Svenska Teatern_1963_kuvaaja tuntematon_97036061.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. Svenska Teatern_1963_kuvaaja tuntematon_97036061.jpg",
                    "actor": "Eric Gustafsson"
                },
                {
                    "imgLink": "4. HKT 2012_Hamlet_kuva Stefan Bremer_hamlet6.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. HKT 2012_Hamlet_kuva Stefan Bremer_hamlet6.jpg",
                    "actor": "Esko Salminen"
                }
            ]
        }]
    },
    {
        "playId": "2",
        "name": "Kullervo",
        "plot": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor. Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec ",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligulaeros ullamcorper quis, lacinia quis facilisis sed sapien.",
        "info": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula erosullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectusauctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend neclacus.Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum eratvehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque.Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blanditsit amet tortor.",
        "img": "2. SKT 1972_kuva Kari Hakli_030190052220.jpg",
        "role0": [{
            "roleName": "Kullervo",
            "title": "Kalervon kiivasluontoinen poika",
            "imgStore": [
                {
                    "imgLink": "1. Kiertuenäyttämö_1910-luku_kuvaaja tuntematon_aa114759 (2).jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "1. Kiertuenäyttämö_1910-luku_kuvaaja tuntematon_aa114759 (2).jpg",
                    "actor": "Erkki Karu"
                },
                {
                    "imgLink": "2. SKT 1972_kuva Kari Hakli_030190052220.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. SKT 1972_kuva Kari Hakli_030190052220.jpg",
                    "actor": "Martti Järvinen"
                },
                {
                    "imgLink": "3. SKO 1993_kuva Kari Hakli_09004030002.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. SKO 1993_kuva Kari Hakli_09004030002.jpg",
                    "actor": "Jorma Hynninen"
                },
                {
                    "imgLink": "4. Nälkäteatteri 2005_kuva Heikki Herva_P6160290.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. Nälkäteatteri 2005_kuva Heikki Herva_P6160290.jpg",
                    "actor": "Tomi Alatalo"
                }
            ]
        }],
        "role1": [{
            "roleName": "Ainikki",
            "title": "Kullervon sisar",
            "imgStore": [
                {
                    "imgLink": "1. Kiertuenäyttämö_1910-luku_kuvaaja tuntematon_aa114759.jpg",
                    "imgInfo": "Analyysi tästä hahmosta123",
                    "imgThumb": "1. Kiertuenäyttämö_1910-luku_kuvaaja tuntematon_aa114759.jpg",
                    "actor": "Elli Kylmänen"
                },
                {
                    "imgLink": "2. SKT 1934_kuvaaja tuntematon_aa1151008.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. SKT 1934_kuvaaja tuntematon_aa1151008.jpg",
                    "actor": "Emmi Jurkka"
                },
                {
                    "imgLink": "3. HKT-TT 1952_kuva Kolmio_99002003058.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. HKT-TT 1952_kuva Kolmio_99002003058.jpg",
                    "actor": "Terttu Soinivirta"
                },
                {
                    "imgLink": "4. SKT 1972_kuva Kari Hakli_030190052251.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. SKT 1972_kuva Kari Hakli_030190052251.jpg",
                    "actor": "Aila Svedberg"
                }
            ]
        }],
        "role2": [{
            "roleName": "Kimmo",
            "title": "Kullervon ystävä",
            "imgStore": [
                {
                    "imgLink": "1. HKT-TT 1952_kuva Kolmio_99002003055.jpg",
                    "imgInfo": "Analyysi tästä 4321",
                    "imgThumb": "1. HKT-TT 1952_kuva Kolmio_99002003055.jpg",
                    "actor": "Arvo Lehesmaa"
                },
                {
                    "imgLink": "2. Samppalinnan kesäteatteri 1960_kuvaaja tuntematon_97042045.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. Samppalinnan kesäteatteri 1960_kuvaaja tuntematon_97042045.jpg",
                    "actor": "veikko Sinisalo"
                },
                {
                    "imgLink": "3. SKT 1972_kuva Kari Hakli_030190052211.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. SKT 1972_kuva Kari Hakli_030190052211.jpg",
                    "actor": "Jussi Jurkka"
                },
                {
                    "imgLink": "4. SKO 1993_kuva Kari Hakli_09025033015.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. SKO 1993_kuva Kari Hakli_09025033015.jpg",
                    "actor": "Jorma Silvasti"
                }
            ]
        }],
        "role3": [{
            "roleName": "Unto",
            "title": "Kalervon suvun vihollinen",
            "imgStore": [
                {
                    "imgLink": "1. HKT-TT 1952_kuva Kolmio_99002003057.jpg",
                    "imgInfo": "Analyysi tästä hahmosta53343",
                    "imgThumb": "1. HKT-TT 1952_kuva Kolmio_99002003057.jpg",
                    "actor": "Artturi Laakso"
                },
                {
                    "imgLink": "2. SKO 1993_Esityskuva_Tapani Valtasaari_Unto_kuvaaja Kari Hakli_SKO laina.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. SKO 1993_Esityskuva_Tapani Valtasaari_Unto_kuvaaja Kari Hakli_SKO laina.jpg",
                    "actor": "Tapani Valtasaari"
                },
                {
                    "imgLink": "3. SKT 2001_kuva Leena Klemelä_030190161659.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. SKT 2001_kuva Leena Klemelä_030190161659.jpg",
                    "actor": "Juhani Laitala"
                },
                {
                    "imgLink": "4. Nälkäteatteri 2005_kuva Heikki Herva_P6160232.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. Nälkäteatteri 2005_kuva Heikki Herva_P6160232.jpg",
                    "actor": "Juha Hurme"
                }
            ]
        }]
    },
    {
        "playId": "3",
        "name": "Niskavuoren nuori emäntä",
        "plot": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor. Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec ",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligulaeros ullamcorper quis, lacinia quis facilisis sed sapien.",
        "info": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula erosullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectusauctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend neclacus.Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum eratvehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque.Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blanditsit amet tortor.",
        "img": "JOO 2. HKT 1977_niskavuoren nuori emäntä016.jpg",
        "role0": [{
            "roleName": "Loviisa",
            "title": "Niskavuoren nuori emäntä",
            "imgStore": [
                {
                    "imgLink": "JOO 2. HKT 1977_niskavuoren nuori emäntä016.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "JOO 2. HKT 1977_niskavuoren nuori emäntä016.jpg",
                    "actor": "Marja Korhonen"
                },
                {
                    "imgLink": "JOO HKT-HTT 1957_99002076005.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "JOO HKT-HTT 1957_99002076005.jpg",
                    "actor": "Maija-Liisa Turkka"
                },
                {
                    "imgLink": "3. Turun kt 1984_kuva Matti Kivekäs_09025045087.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. Turun kt 1984_kuva Matti Kivekäs_09025045087.jpg",
                    "actor": "Kristiina Elstelä"
                },
                {
                    "imgLink": "4. Kuopion kt_kuva Mikko Mäntyniemi_NV 156.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. Kuopion kt_kuva Mikko Mäntyniemi_NV 156.jpg",
                    "actor": "Virpi Rautsiala"
                }
            ]
        }],
        "role1": [{
            "roleName": "Juhani",
            "title": "Niskavuoren isäntä",
            "imgStore": [
                {
                    "imgLink": "1. HKT 1977_kuva Kari Hakli_niskavuoren nuori emäntä001.jpg",
                    "imgInfo": "Analyysi tästä hahmosta123",
                    "imgThumb": "1. HKT 1977_kuva Kari Hakli_niskavuoren nuori emäntä001.jpg",
                    "actor": "Veikko Honkanen"
                },
                {
                    "imgLink": "2. Lahti 1987_kuva Veli Granö_05054002.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. Lahti 1987_kuva Veli Granö_05054002.jpg",
                    "actor": "Seppo Maijala "
                },
                {
                    "imgLink": "3. SKT 2004_kuva Leena Klemelä_07015020.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. SKT 2004_kuva Leena Klemelä_07015020.jpg",
                    "actor": "Markku Maalismaa "
                },
                {
                    "imgLink": "4. Kuopion kt 2013_kuva Mikko Mäntyniemi_NV 139.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. Kuopion kt 2013_kuva Mikko Mäntyniemi_NV 139.jpg",
                    "actor": "Karri Lämpsä"
                }
            ]
        }],
        "role2": [{
            "roleName": "Malviina",
            "title": "Juhanin rakastajatar",
            "imgStore": [
                {
                    "imgLink": "1. Kemin kt 1960_kuva Kemin Kuvaamo_aa113047.jpg",
                    "imgInfo": "Analyysi tästä 4321",
                    "imgThumb": "1. Kemin kt 1960_kuva Kemin Kuvaamo_aa113047.jpg",
                    "actor": "Pirkko Hirviniemi "
                },
                {
                    "imgLink": "2. HKT 1977_kuva Kari Hakli_niskavuoren nuori emäntä009.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. HKT 1977_kuva Kari Hakli_niskavuoren nuori emäntä009.jpg",
                    "actor": "Saara Pakkasvirta"
                },
                {
                    "imgLink": "3. SKT 2004_kuva Leena Klemelä_07015005.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "3. SKT 2004_kuva Leena Klemelä_07015005.jpg",
                    "actor": "Sari Puumalainen"
                },
                {
                    "imgLink": "4. Kuopion kt 2013_kuva Mikko Mäntyniemi_NV 36.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. Kuopion kt 2013_kuva Mikko Mäntyniemi_NV 36.jpg",
                    "actor": "Riina Björkbacka"
                }
            ]
        }],
        "role3": [{
            "roleName": "Vanha emäntä",
            "title": "Loviisan anoppi",
            "imgStore": [
                {
                    "imgLink": "1. Kemin kt 1936_kuva Kemin Kuvaamo_05011003.jpg",
                    "imgInfo": "Analyysi tästä hahmosta53343",
                    "imgThumb": "1. Kemin kt 1936_kuva Kemin Kuvaamo_05011003.jpg",
                    "actor": "Dagi Stenudd"
                },
                {
                    "imgLink": "2. HKT 1939_kuva Atelier Ortho_aaaaa039.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "2. HKT 1939_kuva Atelier Ortho_aaaaa039.jpg",
                    "actor": "Elsa Rantalainen"
                },
                {
                    "imgLink": "HKT 1977_niskavuoren nuori emäntä012.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "HKT 1977_niskavuoren nuori emäntä012.jpg",
                    "actor": "Eila Rinne"
                },
                {
                    "imgLink": "4. Kuopion kt 2013_kuva Mikko Mäntyniemi_NV 67.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4. Kuopion kt 2013_kuva Mikko Mäntyniemi_NV 67.jpg",
                    "actor": "Ritva Grönberg"
                }
            ]
        }]
    },
    {
        "playId": "4",
        "name": "Romeo ja Julia",
        "plot": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor. Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec ",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligulaeros ullamcorper quis, lacinia quis facilisis sed sapien.",
        "info": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula erosullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectusauctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend neclacus.Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum eratvehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque.Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blanditsit amet tortor.",
        "img": "4.romeojajulia2.jpg",
        "role0": [{
            "roleName": "Romeo",
            "title": "Montaguen poika",
            "imgStore": [
                {
                    "imgLink": "1.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "JohnyCash.ico",
                    "actor": "Johnny Cash"
                },
                {
                    "imgLink": "2.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "BlackSpidey.ico",
                    "actor": "Peter Parker"
                },
                {
                    "imgLink": "3.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "CaptainAdama.ico",
                    "actor": "Captain"
                },
                {
                    "imgLink": "4.romeojajulia2_romeo.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4.romeojajulia2_romeo.jpg",
                    "actor": "Teemu Koskinen"
                }
            ]
        }],
        "role1": [{
            "roleName": "Julia",
            "title": "Capuletin tytär",
            "imgStore": [
                {
                    "imgLink": "3.png",
                    "imgInfo": "Analyysi tästä hahmosta123",
                    "imgThumb": "JohnyCash.ico",
                    "actor": "Johnny Cash"
                },
                {
                    "imgLink": "4.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "BlackSpidey.ico",
                    "actor": "Peter Parker"
                },
                {
                    "imgLink": "1.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "CaptainAdama.ico",
                    "actor": "Captain"
                },
                {
                    "imgLink": "4.romeojajulia2_julia.jpg",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "4.romeojajulia2_julia.jpg",
                    "actor": "Mirka Mylläri"
                }
            ]
        }],
        "role2": [{
            "roleName": "Gertrud",
            "title": "Hamletin äiti",
            "imgStore": [
                {
                    "imgLink": "1.png",
                    "imgInfo": "Analyysi tästä 4321",
                    "imgThumb": "JohnyCash.ico",
                    "actor": "Johnny Cash"
                },
                {
                    "imgLink": "2.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "BlackSpidey.ico",
                    "actor": "Peter Parker"
                },
                {
                    "imgLink": "3.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "CaptainAdama.ico",
                    "actor": "Captain"
                },
                {
                    "imgLink": "4.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "Dr.ico",
                    "actor": "Doctor"
                }
            ]
        }],
        "role3": [{
            "roleName": "Claudius",
            "title": "Hamletin isäpuoli",
            "imgStore": [
                {
                    "imgLink": "1.png",
                    "imgInfo": "Analyysi tästä hahmosta53343",
                    "imgThumb": "JohnyCash.ico",
                    "actor": "Johnny Cash"
                },
                {
                    "imgLink": "2.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "BlackSpidey.ico",
                    "actor": "Peter Parker"
                },
                {
                    "imgLink": "3.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "CaptainAdama.ico",
                    "actor": "Captain"
                },
                {
                    "imgLink": "4.png",
                    "imgInfo": "Analyysi tästä hahmosta",
                    "imgThumb": "Dr.ico",
                    "actor": "Doctor"
                }
            ]
        }]
    }
];
