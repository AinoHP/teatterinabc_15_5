<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

	<?php
	$thisPage = "Roolihahmo2";
	?>

<head>

<title>SKENE - Roolihahmo</title>
<link href="assets/css/main.css" rel="stylesheet"/>
<link href="assets/css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="assets/css/font-awesome.min.css">


<?php
	function tarkistus($variable) {
	$variable = htmlentities(strip_tags(trim($variable)));
	return $variable;
	}
?>

<?php


function tyhja($variable) {

if ($variable == "") {
print "Et ole täyttänyt kaikkia tarvittavia kohtia. Täytä puuttuvat kohdat ja kokeile uudestaan.";
}
}

function valinta($muuttuja, $lause1, $lause2, $lause3, $lause4, $lause5, $lause6, $lause7, $lause8, $lause9, $lause10, $lause11) {
switch ($muuttuja) {
		case '1':
			echo  "$lause1";
		break;
		case '2':
			echo  "$lause2";
		break;
		case '3':
			echo  "$lause3";
		break;
		case '4':
			echo  "$lause4";
		break;
		case '5':
			echo  "$lause5";
		break;
		case '6':
			echo  "$lause6";
		break;
		case '7':
			echo  "$lause7";
		break;
		case '8':
			echo  "$lause8";
		break;
		case '9':
			echo  "$lause9";
		break;
		case '10':
			echo  "$lause10";
		break;
		case '11':
			echo  "$lause11";
		break;
	}
}


?>


<?php
	$status = "OK";

//Henkilön ulkonäkö
	$sukupuoli = $_GET['sp'];
	$nimi = tarkistus($_GET['nimi']);
	$ika = tarkistus($_GET['ika']);
	$pituus = tarkistus($_GET['pi']);
	$paino = tarkistus($_GET['pa']);

	$ulkonäkö = tarkistus($_GET['1']);
	$olemus = tarkistus($_GET['2']);
	$iho = tarkistus($_GET['3']);
	$kasvot = tarkistus($_GET['4']);
	$hiukset = tarkistus($_GET['5']);
	$silmät = tarkistus($_GET['6']);
	$tuntomerkki = tarkistus($_GET['7']);

//Henkilön taustaominaisuudet
	$arki1 = tarkistus($_GET['8']);
	$arki2 = tarkistus($_GET['9']);
	$aine1 = tarkistus($_GET['10']);
	$aine2 = tarkistus($_GET['11']);
	$ystävät1 = tarkistus($_GET['12']);
	$ystävät2 = tarkistus($_GET['13']);
	$harrastus1 = tarkistus($_GET['14']);
	$harrastus2 = tarkistus($_GET['15']);
	$asuminen = tarkistus($_GET['16']);
	$lemmikit = tarkistus($_GET['17']);
	$perhe1 = tarkistus($_GET['18']);
	$perhe2 = tarkistus($_GET['19']);
	$perhe3 = tarkistus($_GET['20']);
	$koti1 = tarkistus($_GET['21']);
	$koti2 = tarkistus($_GET['22']);


	$maa = tarkistus($_GET['maa']);
?>
</head>

<body>
		<?php include "nav.php"?>
	<div class="topdiv"></div>

		<div id="sisalto">

<!--<h2> Roolihahmon rakentamisen apukaavio</h2> -->

<?php //seuraavassa if:issä määritellään kaikki ne muuttujat joissa pitää olla jokin arvo ennen kuin lomake on valmis.
	if (($nimi == "") || ($ika == "")){
	$status = "NOTOK";

	    echo "<font color='red'><p><strong>Et ole täyttänyt kaikkia tarvittavia kohtia. Täytä puuttuvat kohdat ja
	    kokeile uudestaan.</strong></p></font>";
		echo "<span class='viiva'></span>";

		include "roolihahmo_form.php";
	}



	if($status=="OK"){

		print "<h2> $nimi</h2>";
		echo "<p> Nimeni on $nimi. Olen $ika-vuotias $sukupuoli. Kun katson peiliin näen";

		valinta ("$iho",
		" vaaleat",
		" tummat",
		" harmaat",
		" laikulliset",
		" punoittavat",
		" kellertävät",
		"",
		"",
		"",
		"",
		"");

		valinta ("$kasvot",
		" ja kaunismuotoiset, tasapainoiset kasvoni. ",
		" ja pitkät kapeat, mutta tasapaksut kasvoni. ",
		" ja leveät paksupiirteiset kasvoni. ",
		" ja pyöreät pienipiirteiset kasvoni. ",
		" ja vahvaleukaiset kapeaotsaiset kasvoni. ",
		" ja kulmikkaat miehekkäät kasvoni. ",
		" ja otsalta leveät ja leukaa kohti kapenevat kasvoni. ",
		" ja otsalta ja leuasta kapeat, mutta keskiosasta leveät kasvoni. ",
		"",
		"",
		"");

		valinta ("$hiukset",
		"Minulla on vaaleat hiukset ja ",
		"Minulla on ruskeat hiukset ja ",
		"Minulla on mustat hiukset ja ",
		"Minulla on punaiset hiukset ja ",
		"Minulla on maantienväriset hiukset ja ",
		"Olen kalju ",
		"",
		"",
		"",
		"",
		"");

		valinta ("$silmät",
		"siniset ",
		"harmaat ",
		"vihreät ",
		"ruskeat ",
		"siniharmaat ",
		"",
		"",
		"",
		"",
		"",
		"");

		echo "silmät. ";

		valinta ("$pituus",
		"En ole kovin pitkä. Voisi sanoa, että olen varsinainen pätkä. ",
		"Suhteessa muihin ihmisiin olen melko lyhyt. ",
		"Suhteessa muihin ihmisiin olen keskipituinen. ",
		"Olen tavallista pitempi. ",
		"Olen hujoppi, paljon tavallista pitempi. ",
		"",
		"",
		"",
		"",
		"",
		"");

		valinta ("$paino",
		"Minusta näkee selkeästi että olen hieman alipainoinen.",
		"Eikä minulla ole yhtään liikaa lihaa luiden päällä. Olen laiha. ",
		"En ole lihava enkä laiha. Olen aika sopusuhtainen. ",
		"Ruumiinrakenteeltani olen hiukan pyylevyyteen taipuvainen. ",
		"Vartaloni on tukeva ja pyöreä. ",
		"Olen niin paksu, että näytän miltei sumopainijalta. ",
		"",
		"",
		"",
		"",
		"");

		valinta ("$tuntomerkki",
		"Ulkonäössäni ei ole mitään erityistä ja silmiinpistävää. ",
		"Minut tunnistaa helposti siitä, että kasvoissani on arpia. ",
		"Kasvoni ovat aivan kesakkojen peitossa ja minua onkin sen vuoksi kutsuttu \"Pisamaksi\". ",
		"Minulla on paksu parta. ",
		"Olen allerginen ja sen takia minulla on kasvoissani ihottumaa. ",
		"Koko ikäni olen kärsinyt nenästäni, joka on vähän vinossa. ",
		"Minulla on todella paksut ja huomiota herättävät kulmakarvat. ",
		"Minulla on tavanomaista suuremmat silmät ja pitkät silmäripset joista minut muistetaan. ",
		"",
		"",
		"");

		echo "Omasta mielestäni näytän ";

		valinta ("$olemus",
		"tarmokkaalta",
		"vähän tarmottomalta",
		"hyväntuuliselta",
		"ponnettomalta",
		"haluttomalta",
		"tavanomaiselta",
		"hermostuneelta",
		"rauhalliselta",
		"",
		"",
		"");

		echo " ihmiseltä. Muiden mielestä olen ";

		valinta ("$ulkonäkö",
		"tavallisen näköinen. ",
		"ihastuttavan näköinen. ",
		"epämiellyttävän näköinen. ",
		"rähjäisen näköinen. ",
		"hyvin ja tarkasti pukeutuneen näköinen. ",
		"tyylikkään näköinen. ",
		"moitteettoman näköinen. ",
		"",
		"",
		"",
		"");

		echo "</p> <p> Asun ";

		valinta ("$asuminen",
		"omissa oloissani ",
		"äitini ja isäni kanssa ",
		"äitini, isäni ja sisarusteni kanssa ",
		"puolisoni kanssa ",
		"lasteni ja puolisoni kanssa ",
		"lasteni kanssa ",
		"kahdestaan äitini kanssa ",
		"kahdestaan isäni kanssa ",
		"suurperheessä, jossa ei välitetä siitä kuka on kenenkin kakara vaan kaikki asiat hoidetaan tasapuolisesti
		",
		"suurperheessä, jossa kaikki on yhtä painajaisunta ja arki ristiriitoja ",
		"aviopuolisoni kanssa",
		"kommuunissa ystävieni kanssa",
		"");

		valinta ("$koti1",
		"kerrostalossa ",
		"omakotitalossa ",
		"maalaistalossa ",
		"rivitalossa ",
		"mökissä ",
		"palatsissa ",
		"asuntolaivassa",
		"",
		"",
		"",
		"");

		valinta ("$koti2",
		"kaupungissa ",
		"pienessä kylässä ",
		"maaseudulla ",
		"vuoristossa ",
		"saarella ",
		"keskellä metsää ",
		"rannikolla",
		"",
		"",
		"",
		"");

		echo "$maa. ";

		valinta ("$perhe1",
		"Minulla ei ole perhettä eikä lähisukulaisia. ",
		"Meidän perheemme on tavallisistakin tavallisempi, mitään erikoisuuksia ei löydy. ",
		"Perheemme on iso ja joskus tuntuu siltä etten edes muista keitä siihen kuuluu. ",
		"Meidän perheemme saa aikaan paljon melua ja useimmiten tyhjästä. ",
		"Perheeni on harmaa ja ankea, siinä ei ole mitään erikoista tai merkittävää. ",
		"Perheeni on minulle todella merkittävä. En voisi elää ilman sitä. ",
		"En voi sietää perhettäni, enkä tule toimeen sukulaisteni kanssa. ",
		"",
		"",
		"",
		"");

		valinta ("$perhe3",
		"",
		"Tunnen, että perheeni ajattelee minun olevan mukava ja ystävällinen ja tulen heidän kanssaan hyvin toimeen.
		",
		"Perheeni mielestä olen iloinen ja optimistinen ihminen, joka selviytyy vastoinkäymisistä positiivisen
		luonteen ansiosta. ",
		"Perheeni rakastaa minua lämpimästi. ",
		"Perheeni pitää minua älykkään ja järkevänä. ",
		"Perheeni mielestä jaksan aina yrittää ja aloittaa alusta, vaikka asiat menisivät vähän pieleen. ",
		"Kaikki pitävät minua erittäin tarkkana ja huolellisena. ",
		"Olen saanut otsaani laiskurin leiman. Perheeni mielestä en saa mitään aikaan. ",
		"Perheeni mielestä olen aina kärttyinen ja kireä. ",
		"Perheeni mielestä olen raivostuttava. He eivät voi sietää tapojani eivätkä he ymmärrä suhtautumistani
		elämään. ",
		"Tiedän, että perheeni ajattelee minun olevan yksinkertainen. Minua ylisuojellaan sen vuoksi. ");

		valinta ("$perhe2",
		"",
		"Meillä ei ole paljon rahaa käytössä. Yritämme tulla toimeen mahdollisimman vähällä. Aina ei voi ostaa sitä
		mitä haluaisi. ",
		"Emme ole köyhiä tai rikkaita. Tulomme riittävät hyvin jokapäiväiseen elämiseen ja pystymme säästämään jos
		haluamme ostaa jotain isompaa.",
		"Tulemme toimeen oikein hyvin. Meillä ei ole puutetta mistään. ",
		"Meidän ei tarvitse puhua rahasta. Meillä on omaisuutta sen verran ettei taloudellisista asioista joudu
		huolehtimaan. ",
		"",
		"",
		"",
		"",
		"",
		"");

		valinta ("$lemmikit",
		"Minulla ei ole tällä hetkellä kotieläimiä. ",
		"Omistan kissan, sillä olen kissaihminen enkä voisi elää ilman kissaa. ",
		"Minulla on kunnia omistaa ihmisen paras ystävä eli koira. ",
		"Rakastan eläimiä ja minulla on useita kotieläimiä. ",
		"En voisi missään tapauksessa ottaa kotieläimiä, koska en voi sietää niitä. ",
		"Olen yliherkkä eläimille enkä voi pitää ainakaan karvaisia kotieläimiä. ",
		"",
		"",
		"",
		"",
		"");

		echo "</p><p> Tällä hetkellä ";

		valinta ("$arki1",
		"käyn koulua. ",
		"opiskelen lukiossa. ",
		"käyn ammattikoulua. ",
		"opiskelen ammattikorkeakoulussa. ",
		"opiskelen yliopistossa. ",
		"teen osa-aikatyötä. ",
		"minulla on vakituinen työpaikka. ",
		"minulla ei ole työtä. ",
		"olen eläkkeellä. ",
		"",
		"");

		valinta ("$arki2",
		"Mielestäni elämäni on mukavaa. Arjessa on paljon hauskaa ja mielenkiintoista. ",
		"Ei ole mitään niin tylsää ja vastenmielistä kuin arki. Kaikki toistuu aina samalla kaavalla. ",
		"Arki on työlästä ja raskasta. Minulla on vaikeuksia jaksaa kestää sitä. ",
		"Arki menee siinä sivussa. Ei ole mukavaa eikä ikävää. ",
		"On vain hyväksyttävä arkinen aherrus. Se on osa elämää, vaikka se ei ole mukavaa. ",
		"",
		"",
		"",
		"",
		"",
		"");

		valinta ("$harrastus1",
		"Olen aina pitänyt urheilusta ja harrastan sitä säännöllisesti. ",
		"Rakastan laiskottelua, ei ole mitään ihanampaa kuin olla tekemättä mitään.  ",
		"Jos saan valita mitä teen niin mieluiten nukun ja löhöän sängyssä. ",
		"Kaikkein eniten pidä soittamisesta joko yksin tai yhdessä muiden kanssa. ",
		"Aina kun minulla on mahdollisuus lähden kalastamaan se on jännittävää. ",
		"Kun minulla on vapaa-aikaa otan kirjan käteeni ja alan lukea. Olen himolukija. ",
		"Mieliharrastukseni on maalaaminen. Heti kun on aikaa otan pensselin käteeni ja alan sutia. ",
		"Ei ole mitään niin rentouttavaa ja toisaalta energisoivaa kuin musiikin kuunteleminen. Tilanteen mukaan voi
		valita oikean musiikin. ",
		"Mikään ei ole niin mukavaa kuin korjata ja muuttaa vanhoja tavaroita uuteen käyttöön. Siinä saa käyttää
		luovuuttaan.",
		"",
		"");

		valinta ("$harrastus2",
		"Joinakin päivinä voin myös pelata tietokonepelejä monta tuntia. ",
		"Katselen usein myös televisiota monta tuntia. ",
		"Kuuntelen myös paljon radiota. Siinä kuunnellessa voi tehdä myös kaikenlaista muuta. ",
		"Luen myös paljon sarjakuvia. Niitä on paljon helpompi lukea kuin kirjoja, koska niissä on kuvia. ",
		"Päivän suuri nautinto on kupillinen kahvia ja sanomalehden lukeminen. ",
		"Olen myös herkkusuu ja leivon mielelläni itse. ",
		"Minusta myös ruoan laittaminen on hauskaa. Erityisen mukavaa on kokeilla uusia reseptejä. ",
		"Tämän lisäksi luonnossa liikkuminen ja vaeltaminen on mukavaa ja rentouttavaa. ",
		"",
		"",
		"");

		valinta ("$aine2",
		"",
		"Olen aina ollut kiinnostunut matematiikasta, fysiikasta ja kemiasta. Pidän loogisesta ja
		luonnontieteellisestä ajattelusta niiden avulla pystyy selittämään kaikenlaisia ilmiöitä maailmassa. ",
		"Minusta historialliset aineet ovat todella mielenkiintoisa. On hauskaa eläytyä vanhoihin aikoihin. ",
		"Minua kiinnostavat hengelliset asiat. Mikä on elämän tarkoitus ja minne me joudumme kuoleman jälkeen. ",
		"Minusta eri kielet ovat mielenkiintoisia. Uusiin maihin ja kulttuureihin on paljon helpompi tutustua jos
		osaa niiden kieltä.",
		"Olen kiinnostunut taiteista. Ne antavat uusia näkökulmia maailmaan. ",
		"",
		"",
		"",
		"",
		"");

		valinta ("$aine1",
		"",
		"Mutta inhoan kaikkia asioita jotka liittyvät matematiikkaan, fysiikkaan ja kemiaan. En osaa niitä ja ne
		ovat tylsiä aiheita. ",
		"Mutta kaikki mikä liittyy historiaan on tylsää. Kuka haluaisi tietää ja mitä hyötyä on tietää jostain
		vanhoista pölyisistä asioista. ",
		"Mutta mikä voisi olla tylsempää hilpatihommaa kuin uskonto? ",
		"Mutta inhoan vieraita kieliä. Miksi minun pitäisi osata jotain vaikeaa mongerrusta? ",
		"Mutta kaikki mikä liittyy jotenkin taiteisiin on ihan pilipalihommaa. Se on hyödytöntä huuhaata. ",
		"Mutta en myöskään inhoa mitään inhimillisen toiminnan alueita. Minua kiehtovat kaikki uudet asiat.",
		"",
		"",
		"",
		"");

		valinta ("$ystävät1",
		"Olen yksinäinen, sillä minulla ei ole ystäviä.",
		"On kaksi ihmistä joita voin kutsua ystäväkseni. Muut ihmiset, joita tunnen,ovat jotenkin epäluotettavia. ",
		"Minulla on pari hyvää ystävää. En ole erityisen hyvä ystävystymään. ",
		"Minulla on paljon ystäviä. Jotkut heistä ovat läheisiä, mutta heidän joukossaan on myös paljon
		hyvänpäiväntuttuja.",
		"Minulla on juuri sopiva määrä ystäviä. Hyviä ystäviä sen verran, että ehdin viettää aikaa heidän kanssaan
		ja toisaalta hyväpäiväntuttuja joiden kanssa on mukava jutella. ",
		"",
		"",
		"",
		"",
		"",
		"");

		valinta ("$ystävät2",
		"",
		"Minulla on hyvin lämmin ja läheinen suhde ystäviini. Tuemme toisiamme kaikin tavoin. ",
		"Ystäväni kunnioittavat minua ja minä heitä. ",
		"Inhoan joitain ystäviäni ja he minua. Siedämme toisiamme ainoastaan siksi, että on pakko. ",
		"Jotkut ystäväni halveksivat minua elämäntapani vuoksi. ",
		"Meillä on ystävien kanssa aina hauskaa. ",
		"Tuemme ja kannustamme toisiamme niin paljon kuin voimme. Ystäväni ovat minulle todellinen voimavara. ",
		"Meillä on ystävien kanssa aina hauskaa. Meillä on samankaltainen huumorintaju ja pidämme samoista asioista.
		",
		"",
		"",
		"");

		include "reaktioform.php";
	}

?>

		</div>

		</div>

</div>

</body>
</html>
