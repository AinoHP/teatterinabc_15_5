<?php
$thisPage = "Pukusuunnittelu";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Roolihahmon rakentamisen apukaavio</title>
    <meta charset="utf-8"/>
    <link href="assets/css/main.css" rel="stylesheet"/>
    <link href="assets/css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
</head>
<body>
<?php include("nav.php"); ?>
		<div id="sisalto">
		<h2> Roolihahmon rakentamisen apukaavio</h2>
		<p>Rakenna oma roolihenkilö. Voit käyttää lähtökohtanan itseäsi, jotain tuntemaasi ihmistä, mielikuvaa, 
		jonkun Skenen pelipuolen hahmoista tai jonkun valmiiksi valituista kuvista. Miten sinun roolihahmosi vastaa 
		kysymyksiin?</p>
		<p>Vastaa jokaiseen kysymykseen ja paina lopussa olevaa "Valmis" nappia kun olet valmis.</p>
	    <span class="viiva"></span>
	    <?php include "roolihahmo_form.php" ?>
		</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="assets/scripts/jquery-ui.min.js" type="text/javascript"></script>
<script src="assets/scripts/data.js" type="text/javascript"></script>
<script src="assets/scripts/ajantaju.js" type="text/javascript"></script>
<script src="assets/scripts/lightroom.js" type="text/javascript"></script>
<script src="nav.js" type="text/javascript"></script>
</body>
</html>
