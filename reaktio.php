<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<?php
$thisPage = "Reaktio";
?>
<head>

<title>Todellinen minä </title>
<link href="assets/css/main.css" rel="stylesheet"/>
<link href="assets/css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="assets/css/font-awesome.min.css">

<?php

    /*Jos teet uuden kysymyksen reaktioform.php:hen niin sitten kirjoita uusi komentorivi allaolevaan osioon. Koska
    a = tehtävä 1, b = tehtävä 2, c = tehtävä 3 jne...  eli tehtävä 4 olisi....
	$e = $_GET['e']; */

	$a = $_GET['a'];
	$b = $_GET['b'];
	$c = $_GET['c'];
	$d = $_GET['d'];


	$valmis = $_GET['valmis'];
	$nimi = $_GET['nimi'];
?>
</head>

<body>
<?php include "nav.php"?>
<div class="topdiv"></div>

		<div id="sisalto">

<?php

if ($valmis == "YES"){

    /* Tästä alaspäin on reaktioformin kaikkien tehtävien kaikki eri vaihtoehdot kaikille eri arvoille */

	// Tehtävä 4:sen valintojen eri vaihtoehdot...
	print "<h4>Psykologi kertoo, mikä on $nimi" ."n todellinen minä</h4>";
	if ($d == "1") {
		echo  "<p>Et välitä siitä, miten asiat sujuvat, koska uskot, että kaikki asiat järjestyvät kuitenkin aina
		jotenkin. Omasta mielestäsi voit jättäytyä kaiken ulkopuolelle. Jos sinua sattuu huvittamaan pystyt
		ajattelemaan luovasti ja loogisesti, mutta yleensä kohtalonuskoisuutesi näyttää välinpitämättömyydeltä ja
		passiivisuudelta. Asioiden kasautumisesta voi ollakin hyötyä: yhtä asiaa etsiessäsi voi törmätä toiseen
		vielä tärkeämpään.</p>";
		}
		else if ($d == "2"){
		echo  "<p>Sinulla on aina kaikki asiat hyvässä järjestyksessä. Sinulta ei kulu turhaan aikaa tavaroiden
		etsimiseen. Ajattelet asioita suoraviivaisesti ja yksinkertaisesti. Uskot, että asioilla on aina looginen
		ratkaisu. Et suotta vatvo ja monimutkaista asioita, mutta joskus kun johdonmukaista ratkaisua ei löydy
		lopetat sen ajattelemisen siihen paikkaan. Joskus tarkka järjestelmällisyys estää erilaisten ja
		tavanomaisesta poikkeavien ratkaisujen löytymistä.Järjestelmällisyytesi saattaa johtaa jähmeyteen. Toisen
		tyyppinen saattaa sopeutua asioihin nopeammin ja vähemmällä vaivalla.</p>";
		}
		else if ($d == "3"){
		echo  "<p>Sinä et turhaan kiinnitä huomiota asioihin jotka koet turhiksi. Et myöskään välitä olleista ja
		menneistä vaan impulsiivisesti teet päätöksesi hetken mielijohteesta. Kukaan ei voi olla varma siitä, miten
		reagoit asioihin, koska olet ailahtelevainen ja hetken mieliala vaikuttaa ajatteluusi ja toimintaasi.
		Tarvittaessa pystyt järkeilemällä päättelemään, mistä löydät tarvitsemasi asiat, vaikka kaikki ei ole
		täydellisessä järjestyksessä. Ajattelusi toimii samankaltaisesti. Mielestäsi tärkeät asiat pidät
		aktiivisessa muistissa ja työn alla ja vähemmän tärkeät saavat vaikka unohtua. Sitä paitsi ajattelet, että
		sotkua on vaikea jäljitellä ja siistissä heikkoudet näkyisivät. Mottosi voisi olla: Asialliset hommat
		hoidetaan, muuten ollaan kuin Ellun kanat.</p>";
		}
		else if ($d == "4"){
		echo  "<p>Et kestä lainkaan sovituista asioista tai säännöistä poikkeamista. Jos joku tekee asioita
		totutusta poikkeavalla tavalla hermostut ja menetät toimintakykysi, koska turvaverkko eli täydellinen
		”järjestys” kaatuu.  Haluat tietää etukäteen siitä, miten asiat hoidetaan ja mitä tapahtuu. Jos
		ennakkosuunnitelmat vaihtuvat et pysty sopeutumaan siihen. Sotkussa olisi monenlaisia aineksia kun taas
		järjestys on helposti kapea-alaista. Sinun on vaikeaa ajatella luovasti ja vapaasti, ilman tiukkoja
		kategorioita. Siisteys ja tarkkuus saattaa viedä voimavarojasi.</p>";
		}
		else if ($d == "5"){
		echo  "<p>Sinun asiasi näyttävät oleva aikamoisessa sotkussa. Siitä huolimatta saat tarvittaessa aikaan
		paljon ja nopeasti.  Sinulla ajatuksissasi ilmenee järjestyksen ja kaaoksen ristiveto. Kykysi kestää
		epämääräisyyttä ja epäjärjestystä auttaa sinua löytämään uudenlaisia ajattelutapoja ja malleja, et ole
		yksioikoinen tai suoraviivainen. Sotkussa erilaisten elementtien paikka vaihtelee ja tuo mukanaan uusia
		ajatuksia, siisteys pyyhkii odottamattomat asiat syrjään. Toisaalta kaaos johtaa helposti myös siihen, että
		unohdat helposti asioita ja niitä jää tekemättä.</p>";
		}
		else if ($d == "6"){
		echo  "<p>Olet epäjärjestelmällinen kaaosihminen. Välillä yrität pitää asiat järjestyksessä, mutta et malta
		keskittyä yhteen asiaa pitkäksi aikaa vaan ryntäät asiasta toiseen niin, että edellisen tekeminen on vielä
		kesken. Innostut helposti ja keksit ja kehität luovia ratkaisuja ja ajatuksia, mutta sinun on vaikea saada
		asiat toteutettua ennen kuin taas löydät itsesi uuden mielenkiintoisen tehtävän parista. Olet altis
		kaikenlaisille vaikutteille hyville sekä huonoille.</p>";
		}

		//tehtävä 3:sen valintojen eri vaihtoehdot...
		if ($c == "1") {
		echo  "<p>Reagoit epämiellyttäviin asioihin äärimmäisen voimakkaasti. Sinulle ei ole keskitietä. Pidät
		itsestäsi ja omista asioistasi huolta. Sinulle ei ryppyillä. Et suostu hyväksymään, että on esteitä joita ei
		voisi voittaa.</p>";
		}
		else if ($c == "2"){
		echo  "<p>Suhtaudut epämiellyttäviin tapahtumiin aika passiivisesti. Kun kohtaat vaikeuksia et ala puolustaa
		oikeuksiasi vaan annat helposti periksi. Useimmiten arvioit tilanteen sellaiseksi ettei sille voi mitään ja
		alistuneesti hyväksyt sen. </p>";
		}
		else if ($c == "3"){
		echo  "<p>Epäilet helposti, että kaikki epämiellyttävät tapahtumat ovat suora hyökkäys sinua vastaan.
		Suhtaudut varautuneesti muihin ihmisiin ja uskot, että on ihmisiä jotka haluavat sinulle pahaa.</p>";
		}
		else if ($c == "4"){
		echo  "<p>Kun epämiellyttäviä asioita tapahtuu, tartut heti toimeen ja yrität saada selville, mitä on
		sattunut. Olet tottunut toimimaan aktiivisesti tilanteessa kuin tilanteessa. Vaikeinakin hetkinä pystyt
		olemaan rauhallinen ja järkevä.</p>";
		}
		else if ($c == "5"){
		echo  "<p>Suhtaudut asioihin välinpitämättömästi ja laiskasti. Kun jotain epämiellyttävää tapahtuu ohitat
		sen olan kohautuksella, et viitsi tehdä asialle mitään etkä viitsi ajatella sitä yhtään enempää. Mitä välii!
		</p>";
		}

		// Tehtävä 2:sen valintojen eri vaihtoehdot...
	    if ($b == "1") {
		echo  "<p>Sinun on vaikea tehdä yhteistyötä toisten kanssa ja varsinkin vieraiden. Vaikka haluaisikin, et
		pysty toimimaan kriisitilanteessa vaan vetäydyt syrjään ja toivot, että muut hoitavat asiat ja että sinulta
		ei kysytä mitään.</p>";
		}
		else if ($b == "2"){
		echo  "<p>Olet tottunut reagoimaan nopeasti ja heti. Et hermostu pikkuasioista. Luotat vankasti itseesi ja
		omaan toimintakykyysi ja suoraan ajatteluusi. Sinusta tuntuu, että sinun ei tarvitse etkä voi turvautua
		muihin ihmisiin.  </p>";
		}
		else if ($b == "3"){
		echo  "<p>Olet sosiaalinen luonne joka on tottunut siihen, että parhaan tuloksen saa aikaan kun ottaa
		huomioon kaikkien mielipiteen. Pystyt hätätilanteissa pitämään pääsi kylmänä.</p>";
		}
		else if ($b == "4"){
		echo  "<p>Olet piittaamaton. Et jaksa etkä viitsi toimia yleisten asioiden puolesta. Sinun mielestäsi muut
		saavat hoitaa asiat, ne eivät sinulle kuulu, eikä sinun tarvitse niihin puuttua. Et vältä siitä, miten
		ongelmat ratkaistaan. </p>";
		}

		else if ($b == "5"){
		echo  "<p>Et pysty hillitsemään itseäsi ja reaktioitasi. Sinun on miltei mahdotonta toimia yllättävissä ja
		vaikeissa tilanteissa. Pelkäät ihmisiä etkä pysty lainkaan luottamaan vieraisiin. </p>";
		}
		else if ($b == "6"){
		echo  "<p>Pidät itseäsi paljon muita ihmisiä parempana. Sinun mielestäsi ei ole järkeä kuunnella ketään
		muita. Itseluottamuksesi on ääretön. Et lamaudu vaikeissakaan tilanteissa.</p>";
		}

		// Tehtävä 1:sen valintojen eri vaihtoehdot...
	    if ($a == "1") {
		echo  "<p>Välität muista ihmisistä ja pyrit olemaan oikeudenmukainen.</p>";
		}
		else if ($a == "2"){
		echo  "<p>Viis veisaat muista ihmisistä ja muiden tunteista. Jokainen ihminen hoitakoon omat asiansa.</p>";
		}
		else if ($a == "3"){
		echo  "<p>Olet ahne ja itsekäs, mutta et haluaisi muiden huomaavan sitä.</p>";
		}
		else if ($a == "4"){
		echo  "<p>Olet itsevarma ja ahne. Et pätkääkään välitä mitä muut sinusta ajattelevat. Tärkeintä on, että
		sinulla itselläsi menee hyvin.</p>";
		}
		else if ($a == "5"){
		echo  "<p>Olet ystävällinen ja pidät ihmisistä, mutta olet niin ujo, hiljainen ja syrjäänvetäytyvä, että
		usein ihmiset eivät huomaa sinua.</p>";
		}
}
?>

<?php if($valmis!=="YES"){
	include "reaktioform.php";
	}
?>


		</div>


</body>
</html>
