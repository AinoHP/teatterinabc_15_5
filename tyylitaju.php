<?php
$thisPage = "Lavastus";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Teatterin A B C</title>
    <meta charset="utf-8"/>
    <link href="assets/css/main.css" rel="stylesheet"/>
    <link href="assets/css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/component.css">
</head>
<body>
<?php include("nav.php"); ?>
<div id="pt-main" class="pt-perspective height">
    <div class="pt-page pt-page-1 height">
        <header class="diffheader" id="one">
            <div class="title">
                <div class="stages" id='first'>
                    <ul>
                        <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                        <li id="borderless"><h1 id="dark">Lavastus</h1></li>
                        <li id="borderless"><h1 id="light">Testaa tyylitajusi</h1></li>
                        <li id="selected">1. Arvo tyylilaji</li>
                        <li>2. Lajittele näytelmät</li>
                        <li>3. Tarkistus</li>
                    </ul>
                </div>
        </header>
        <div class="contentContainer height">
            <div id="machine1" class="randomizeMachine">
            </div>
            <div id="machine2" class="randomizeMachine">
            </div>
            <div id="machine3" class="randomizeMachine">
            </div>
            <div id="machine4" class="randomizeMachine">
            </div>
            <div id="machine5" class="randomizeMachine">
            </div>
            <div id="machine6" class="randomizeMachine">
            </div>
            <div id="machine7" class="randomizeMachine">
            </div>
            <div id="machine8" class="randomizeMachine">
            </div>
            <div class="infoC"><br><br>
                <p>Tyylisuunta teatterissa tai taiteessa ei ole yksiselitteinen asia. Eri elämänalueilla tyylilaji ilmenee eri tavoilla. Testaa tyylitajusi -pelissä pyritään luokittelemaan teatteriesitysten lavastuksia seuraaviin luokkiin: <b>Fantasia/satu, historiallinen, muut kulttuurit, pelkistys/tyylittely/nykyaika, realismi</b>.
<br><p>Peli alkaa, kun käytät ”Tyylitaju -konetta”. Klikkaa ”ARVO!” ja arvot itsellesi esityskuvia.</p>
                <div class="buttonC">
                    <button id="rndBtn" class="btnpadding">Arvo!</button>
                </div>
            </div>

        </div>
    </div>
    <div class="pt-page pt-page-2 height">
        <header class="diffheader">
            <div class="title">
                <div class="stages">
                    <ul>
                        <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                        <li id="borderless"><h1 id="dark">Lavastus</h1></li>
                        <li id="borderless"><h1 id="light">Testaa tyylitajusi</h1></li>
                        <li id="selected" onClick="reset()" class="goToFirst">1. Arvo tyylilaji</li>
                        <li id="selected" class="black blackBorder">2. Lajittele näytelmät</li>
                        <li>3. Tarkistus</li>
                    </ul>
                </div>
        </header>
        <div class="contentContainer">
<p>Mieti, mitä eri tyylilajien nimet sinulle kertovat ja mihin kategoriaan lavastuskuvat sinun mielestäsi kuuluvat.<br> Kun olet päätellyt, mihin luokkaan lavastus kuluu klikkaa kuvaa ja raahaa se mielestäsi sopivimman tyylilajin kohdalle. <br>Huom! Kaikkiin kategorioihin ei jokaisella kerralla tule kuvaa ja yhteen kategoriaan voi sopia useampikin lavastus.</p>
            <div id="gameContents"></div>
        </div>
        <div class="theGameContainer" id="gC">
            <ul class="gameUL"><!--
                  -->
                <li id="panel1"><img src="assets/images/blank.png" class="dropBox"/><img src="assets/images/blank.png"
                                                                                         class="dropBox"/><img
                        src="assets/images/BGtxt.svg"
                        class="dropBox"/><img src="assets/images/blank.png" class="dropBox"/>
                    <h1>Fantasia, satu</h1></li><!--
                  -->
                <li id="panel2"><img src="assets/images/blank.png" class="dropBox"/><img src="assets/images/blank.png"
                                                                                         class="dropBox"/><img
                        src="assets/images/BGtxt.svg"
                        class="dropBox"/><img src="assets/images/blank.png" class="dropBox"/>
                    <h1>Historiallinen</h1></li><!--
                  -->
                <li id="panel3"><img src="assets/images/blank.png" class="dropBox"/><img src="assets/images/blank.png"
                                                                                         class="dropBox"/><img
                        src="assets/images/BGtxt.svg"
                        class="dropBox"/><img src="assets/images/blank.png" class="dropBox"/>
                    <h1>Muut kulttuurit</h1></li><!--
                  -->
                <li id="panel4"><img src="assets/images/blank.png" class="dropBox"/><img src="assets/images/blank.png"
                                                                                         class="dropBox"/><img
                        src="assets/images/BGtxt.svg"
                        class="dropBox"/><img src="assets/images/blank.png" class="dropBox"/>
                    <h1>Pelkistys, tyylittely, nykyaika</h1></li><!--
                  -->
                <li id="panel5"><img src="assets/images/blank.png" class="dropBox"/><img src="assets/images/blank.png"
                                                                                         class="dropBox"/><img
                        src="assets/images/BGtxt.svg"
                        class="dropBox"/><img src="assets/images/blank.png" class="dropBox"/>
                    <h1>Realismi</h1></li><!-- -->
            </ul>
        </div>
        <div class="buttonD">
            <button id="buttonD" class="btnpadding">Valmis</button>
        </div>
    </div>
    <div class="pt-page pt-page-3 height">
        <header class="diffheader">
            <div class="title">
                <div class="stages">
                    <ul>
                        <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                        <li id="borderless"><h1 id="dark">Lavastus</h1></li>
                        <li id="borderless"><h1 id="light">Tyylitaju</h1></li>
                        <li id="selected" onClick="reset()" class="goToFirst">1. Arvo tyylilaji</li>
                        <li id="selected" class="goToSecond">2. Lajittele näytelmät</li>
                        <li id="selected" class="black blackBorder">3. Tarkistus</li>
                    </ul>
                </div>
        </header>
        <div class="briefing">
            <h1 id="percentAnswer"></h1>
<div id="percentDescription">Alkuperäinen teksti</div>
        </div>

        <div class="answerContainer" id="aCtop">
            <ul class="gameUL"><!--
                  -->
                <li id="panelA1"><a data-lightbox="kuvaus" href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a></li><!--
                  -->
                <li id="panelA2"><a data-lightbox="kuvaus" href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a></li><!--
                  -->
                <li id="panelA3"><a data-lightbox="kuvaus" href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a></li><!--
                  -->
                <li id="panelA4"><a data-lightbox="kuvaus" href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a></li><!--
                  -->
                <li id="panelA5"><a data-lightbox="kuvaus" href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a><a data-lightbox="kuvaus"
                                                                                  href="assets/images/blank.png"><img
                            src="assets/images/blank.png" class="dropBox"/></a></li>
            </ul>
            <ul class="answerFields">
                <li id="infoBox1">
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                </li>
                <li id="infoBox2">
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                </li>
                <li id="infoBox3">
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                </li>
                <li id="infoBox4">
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                </li>
                <li id="infoBox5">
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                    <div class="underScore"></div>
                </li>
            </ul>
        </div>
        <div class="answerContainer" id="aClower">
        </div>
        <div class="buttonF">
            <button onClick="reset()" class="btnpadding">Alkuun</button>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="assets/scripts/jquery.slotmachine.min.js" type="text/javascript"></script>
<script src="assets/scripts/jquery-ui.min.js" type="text/javascript"></script>
<script src="assets/scripts/styledata.js" type="text/javascript"></script>
<script src="assets/scripts/gamescript.js" type="text/javascript"></script>
<script src="assets/scripts/modernizr.custom.js" type="text/javascript"></script>
<script src="assets/scripts/pagetransitions.js" type="text/javascript"></script>
<script src="assets/scripts/lightroom.js" type="text/javascript"></script>
<script src="nav.js" type="text/javascript"></script>
</body>
</html>
