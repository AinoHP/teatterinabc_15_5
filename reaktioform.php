<form action="reaktio.php" method="get">
	<br />
	<span class="viiva"></span>
	<br />
	<br />
	<h2> Miten <?php echo $nimi;?> reagoi erilaisiin asioihin?</h2>

		<p class="tapahtuma">1. Kun <?php echo $nimi;?> näkee, että joku ihminen pudottaa taskustaan 5 euroa,
		hän...</p>
		<table class="reaktio">
			<tr>
				<td><input type="radio" name="a" value="1" /></td>
				<td>Huutaa ja yrittää palauttaa rahan. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="a" value="2" /></td>
				<td>Katselee tapahtumaa välinpitämättömästi ja antaa tuulen viedä setelin. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="a" value="3" /></td>
				<td>Yrittää huomaamattomasti poimia setelin itselleen. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="a" value="4" /></td>
				<td>Ottaa setelin itselleen välittämättä muista. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="a" value="5" /></td>
				<td>Yrittää kiinnittää rahansa kadottaneen huomion, mutta
				ei onnistu siinä ja seteli lentää pois. <br /></td>
			</tr>
		</table>
		<br>


		<p class="tapahtuma">2. Tavaratalon hissi juuttuu kerrosten väliin. Hissi on täynnä ihmisiä.
		<?php echo $nimi;?>...</p>
		<table class="reaktio">
			<tr>
				<td><input type="radio" name="b" value="1" /></td>
				<td>Ei puhu kenenkään kanssa ja katselee varpaankärkiään ja kärsien odottaa, että apu tulisi
				paikalle. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="b" value="2" /></td>
				<td>Painaa heti hälytysnappia ja yrittää saada kontaktin ulkomaailmaan. Toimii heti eikä edes tulisi
				mieleen kysyä muilta, mitä tilanteessa kannattaisi tehdä. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="b" value="3" /></td>
				<td>Alkaa keskustella muiden hississä olevien kanssa, mikä olisi paras keino saada apua paikalle
				mahdollisimman nopeasti.<br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="b" value="4" /></td>
				<td>Seisoo paikoillaan eikä välitä koko tilanteesta. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="b" value="5" /></td>
				<td>Saa kauhukohtauksen, koska on suljetussa tilassa ja ahdistuu siitä niin, että alkaa huutaa. Ei
				pysty kommunikoimaan muiden kanssa. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="b" value="6" /></td>
				<td>Katsoo ylimielisenä muiden reagointia tilanteeseen. Kun toiset äänestävät siitä, miten pitäisi
				toimia, runttaa ylimielisesti toisten ajatukset ja määrää, miten pitää toimia. <br /></td>
			</tr>
		</table>
<br>

		<p class="tapahtuma">3. Auto on peruuttanut pyörätelineessä olevan polkupyörän takarenkaan soikeaksi.
		<?php echo $nimi;?>...</p>
		<table class="reaktio">
			<tr>
				<td><input type="radio" name="c" value="1" /></td>
				<td>Saa raivokohtauksen ja huutaa, että tekijä saadaan varmasti kiinni ja että hän saa maksaa
				teostaan.<br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="c" value="2" /></td>
				<td>Ottaa pyörän ja taluttaa sen kotiin, koska syyllistä ei kuitenkaan voi saada kiinni. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="c" value="3" /></td>
				<td>Katsoo pyörää ja ahdistuneena miettii, kuka ja miksi joku vainoaa häntä. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="c" value="4" /></td>
				<td>Tutkii, mitä pyörälle on tapahtunut. Alkaa kysellä ja ottaa selvää ihmisiltä oliko kukaan
				nähnyt, mitä on tapahtunut. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="c" value="5" /></td>
				<td>Katsoo rikki mennyttä takarengasta ja jättää pyörä siihen, koska ei kuitenkaan korjaisi sitä tai
				veisi korjaamolle. <br /></td>
			</tr>
		</table>

<br>
		<p class="tapahtuma">4. Missä järjestyksessä <?php echo $nimi;?>n tavarat ovat</p>
		<table class="reaktio">
			<tr>
				<td><input type="radio" name="d" value="1" /></td>
				<td>Hänen kaikki tavaransa ovat sekaisin. Asiat jäävät yleensä siihen missä niitä on viimeksi
				käytetty. Hänestä tuntuu siltä, että on ajanhukkaa järjestellä tavaroita, sillä ei ole mitään
				merkitystä. <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="d" value="2" /></td>
				<td>Kaikki hänen tavaransa ovat järjestyksessä. Hän palauttaa kaikki paikoilleen heti käytön
				jälkeen. Hänen mielestään tavaroiden pitää olla siististi määrätyllä paikoillaan. Hän on erittäin
				tehokas.<br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="d" value="3" /></td>
				<td>Hän ei välitä, missä järjestyksessä tavarat ovat. Ne ovat niin kuin ne ovat ja sillä ei ole
				mitään väliä. Muilla ei voi olla mitään sanottavaa hänen tavaroiden järjestykseen. Jos häntä itseään
				sattuu huvittamaan asiat voivat olla vaikka kuinka hyvässä järjestyksessä.<br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="d" value="4" /></td>
				<td>Hänen tavaransa ovat pikkutarkassa järjestyksessä. Kaikilla tavaroilla on määrätty oma
				paikkansa. Hän haluaa, että kaikki on niin kuin aina on ollut.  <br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="d" value="5" /></td>
				<td>Hän ei ole turhan tarkka siitä, että tavarat ovat järjestyksessä. Hänen tavaransa ovat toisaalta
				sekaisin ja toisaalta kaaoksessa on järjestys, oma logiikkansa.<br /></td>
			</tr>
			<tr>
				<td><input type="radio" name="d" value="6" /></td>
				<td>Hän yrittää pitää tavarat järjestyksessä onnistumatta siinä. Hän aloittaa usein uusia
				siisteyskampanjoita, mutta järjestyksen ylläpito unohtuu muutaman päivän kuluessa.<br /></td>
			</tr>
		</table>
		<input type="hidden" name="nimi" value="<?php echo $nimi;?>">
		<input type="hidden" name="valmis" value="YES">
		<p><input type="submit" name="Submit" value="Valmis" /></p>

	</form>
