	<form action="roolihahmo2.php" method="get">
	
	<br />
	<h4> 1. Henkilön ulkonäkö </h4>
		<p>Henkilö on: <select name="sp">
			<option value="nainen"> nainen </option>
			<option value="mies"> mies </option>
			<option value="tyttö"> tyttö </option>
			<option value="poika"> poika </option>
		</select> </p>
		<p>Ikä: <input size="5" name="ika" value="<?PHP if (isset($ika)) print $ika;?>" type="text" /></p>
		<p>Pituus: <select name="pi">
		<option value="1">pienikasvuinen</option>
		<option value="2">lyhyt</option>
		<option value="3">normaalipituinen</option>
		<option value="4">pitkä</option>
		<option value="5">tavallista pitempi</option>
		</select> </p>
		<p>Paino: <select name="pa">
		<option value="1">alipainoinen</option>
		<option value="2">laiha</option>
		<option value="3">normaalipainoinen</option>
		<option value="4">vähän lihava</option>
		<option value="5">lihava</option>
		<option value="6">ylipainoinen</option>
		</select> </p>
		
		<p>Yleinen ulkonäkö: <select name="1">
		<option value="1">normaali</option>
		<option value="2">miellyttävä</option>
		<option value="3">epämiellyttävä</option>
		<option value="4">epäsiisti</option>
		<option value="5">siisti</option>
		<option value="6">huoliteltu</option>
		<option value="7">asiallinen</option>
		</select> </p>
		
		<p>Olemus: <select name="2">
		<option value="1">reipas</option>
		<option value="2">veltto</option>
		<option value="3">iloinen</option>
		<option value="4">passiivinen</option>
		<option value="5">välinpitämätön</option>
		<option value="6">neutraali</option>
		<option value="7">rauhaton</option>
		<option value="8">levollinen</option>
		</select> </p>
		
		<p>Ihon väri: <select name="3">
		<option value="1">vaalea</option>
		<option value="2">tumma</option>
		<option value="3">harmaa</option>
		<option value="4">laikukas</option>
		<option value="5">punertava</option>
		<option value="6">oliivi</option>
		</select> </p>
		
		<p>Kasvojen muoto: <select name="4">
		<option value="1">ovaali</option>
		<option value="2">kapea</option>
		<option value="3">leveä</option>
		<option value="4">pyöreä</option>
		<option value="5">päärynä</option>
		<option value="6">neliömäinen</option>
		<option value="7">sydän</option>
		<option value="8">timantti</option>
		</select> </p>
		
		<p>Hiusten väri: <select name="5">
		<option value="1">blondi</option>
		<option value="2">ruskea</option>
		<option value="3">tumma</option>
		<option value="4">punainen</option>
		<option value="5">harmaat</option>
		<option value="6">ei hiuksia</option>
		</select> </p>
		
		<p>Silmien väri: <select name="6">
		<option value="1">sininen</option>
		<option value="2">harmaa</option>
		<option value="3">vihreä</option>
		<option value="4">ruskea</option>
		<option value="5">siniharmaa</option>
		</select> </p>
		
		<p>Erityinen tuntomerkki: <select name="7">
		<option value="1">ei erityisiä tuntomerkkejä</option>
		<option value="2">arpia</option>
		<option value="3">pisamia</option>
		<option value="4">parta</option>
		<option value="5">ihottumaa</option>
		<option value="6">vino nenä</option>
		<option value="7">tuuheat kulmakarvat</option>
		<option value="8">suuret silmät</option>
		</select> </p>
		
	<br />	
	<h4> 2. Henkilön tausta </h4>
		
		<p>Henkilön arkipäivät kuluvat: <select name="8">
		<option value="1">peruskoulussa</option>
		<option value="2">lukiossa</option>
		<option value="3">ammattikoulussa</option>
		<option value="4">ammattikorkeakoulussa</
		option>
		<option value="5">yliopistossa</option>
		<option value="6">osa-aikatyössä</option>
		<option value="7">vakituisessa työssä</option>
		<option value="8">työttömänä</option>
		<option value="9">eläkeläisenä</option>
		</select> </p>
		
		<p>Suhtautuminen arkeen: <select name="9">
		<option value="1">on tyytyväinen </option>
		<option value="2">inhoaa arkea</option>
		<option value="3">kokee sen raskaaksi</option>
		<option value="4">ei erityisemmin ajattele 
		arkea</option>
		<option value="5">kokee sen välttämättömäksi 
		pahaksi</option>
		</select> </p>
		
		<p>Vastenmielisimmät aineet koulussa: <select name="10">
		<option value="1">ei ole</option>
		<option value="2">matemaattiset aineet </
		option>
		<option value="3">historialliset aineet</
		option>
		<option value="4">uskonto</option>
		<option value="5">kielet</option>
		<option value="6">taideaineet</option>
		<option value="7">ei vastenmielisiä aineita</
		option>
		</select> </p>
		
		<p>Mieluisimmat aineet koulussa: <select name="11">
		<option value="1">ei ole</option>
		<option value="2">matemaattiset aineet </
		option>
		<option value="3">historialliset aineet</
		option>
		<option value="4">uskonto</option>
		<option value="5">kielet</option>
		<option value="6">taideaineet</option>
		</select> </p>
		
		<p>Ystäväpiiri: <select name="12">
		<option value="1">ei yhtään ystävää </option>
		<option value="2">kaksi ystävää</option>
		<option value="3">muutamia ystäviä</option>
		<option value="4">paljon ystäviä</option>
		<option value="5">sopiva määrä ystäviä</
		option>
		</select> </p>
		
		<p>Suhteet ystäviin: <select name="13">
		<option value="1">ei yhtään ystävää </option>
		<option value="2">lämmin</option>
		<option value="3">kunnioittava</option>
		<option value="4">inhoava</option>
		<option value="5">halveksiva</option>
		<option value="6">iloinen</option>
		<option value="7">kannustava</option>
		<option value="8">luonnollinen</option>
		</select> </p>
		
		<p>Lempiharrastus: <select name="14">
		<option value="1">urheilu </option>
		<option value="2">laiskottelu</option>
		<option value="3">nukkuminen</option>
		<option value="4">soittaminen</option>
		<option value="5">kalastus</option>
		<option value="6">lukeminen</option>
		<option value="7">maalaaminen</option>
		<option value="8">musiikin kuuntelu</
		option>
		<option value="9">tuunaaminen</option>
		</select> </p>
		
		<p>Muu vapaa-ajan harrastus: <select name="15">
		<option value="1">tietokonepelit </option>
		<option value="2">television katselu</
		option>
		<option value="3">radion kuuntelu</option>
		<option value="4">sarjakuvien lukeminen</
		option>
		<option value="5">sanomalehtien 
		lukeminen</option>
		<option value="6">leipominen</option>
		<option value="7">ruoan laittaminen</
		option>
		<option value="8">luontoretkeily</option>
		</select> </p>
		
		<p>Asuminen: <select name="16">
		<option value="1">yksin </option>
		<option value="2">vanhempien kanssa </
		option>
		<option value="3">vanhempien ja sisarusten 
		kanssa </option>
		<option value="4">aviopuolison kanssa </
		option>
		<option value="5">aviopuolison ja lasten 
		kanssa </option>
		<option value="6">lasten kanssa</option>
		<option value="7">äidin kanssa </option>
		<option value="8">isän kanssa </option>
		<option value="9">uusioperheessä (asiat 
		hyvin)</option>
		<option value="10">uusioperheessä (asiat 
		huonosti)</option>
		<option value="11">aviopuolisoni kanssa</
		option>  
		<option value="12">ystävien kanssa</option>
		</select> </p>
		
		<p>Perhe on: <select name="18">
		<option value="1">henkilöllä ei ole perhettä</option>
		<option value="2">tavallinen</option>
		<option value="3">suuri</option>
		<option value="4">äänekäs</option>
		<option value="5">tylsä </option>
		<option value="6">tärkeä</option>
		<option value="7">inhottava</option>
		</select> </p>
		
		<p>Perheen sosiaalinen asema: <select name="19">
		<option value="1">henkilöllä ei ole perhettä</option>
		<option value="2">köyhä</option>
		<option value="3">keskituloinen</option>
		<option value="4">keskiluokkainen</option>
		<option value="5">yläluokkainen </option>
		</select> </p>
		
		<p>Perhe ajattelee henkilön olevan:  <select name="20">
		<option value="1">henkilöllä ei ole perhettä</option>
		<option value="2">mukava</option>
		<option value="3">iloinen</option>
		<option value="4">rakastettava</option>
		<option value="5">viisas</option>
		<option value="6">aktiivinen ja yritteliäs</
		option>
		<option value="7">tunnollinen</option>
		<option value="8">laiska ja passiivinen</
		option>
		<option value="9">kiukkuinen</option>
		<option value="10">raivostuttava</option>
		<option value="11">tyhmä</option>
		</select> </p>
		
		<p>Kotieläimet: <select name="17">
		<option value="1">ei kotieläimiä</option>
		<option value="2">kissa</option>
		<option value="3">koira</option>
		<option value="4">paljon eläimiä </option>
		<option value="5">inhoaa eläimiä</option>
		<option value="6">on allerginen</option>
		</select> </p>
		
		<p>Koti:  <select name="21">
		<option value="1">kerrostalossa</option>
		<option value="2">omakotitalossa</option>
		<option value="3">maalaistalossa</option>
		<option value="4">rivitalossa</option>
		<option value="5">mökissä</option>
		<option value="6">palatsissa</option>
		</select> </p>
		
		<p>Missä koti on:  <select name="22">
		<option value="1">kaupungissa</option>
		<option value="2">pienessä kylässä</option>
		<option value="3">maaseudulla</option>
		<option value="4">vuoristossa</option>
		<option value="5">saarella</option>
		<option value="6">metsässä</option>
		</select> </p>
		
		<p>Missä maassa: <input size="10" name="maa" value="<?PHP if (!isset($maa)) { print "Suomessa"; } else 	
		{ print $maa; } ?>" type="text" /></p>
		<br />
		<p>Henkilön nimi: <input size="12" name="nimi" value="<?PHP if ( isset($nimi) ) print $nimi;?>" type="text" /></p>
		
		<input type="hidden" name="submit" value="1">
		<p><input type="submit" name="Submit" value="Valmis" /></p>

	</form> 