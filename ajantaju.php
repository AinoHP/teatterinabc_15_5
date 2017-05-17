<?php
$thisPage = "Pukusuunnittelu";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Teatterin A B C</title>
    <meta charset="utf-8"/>
    <link href="assets/css/main.css" rel="stylesheet"/>
    <link href="assets/css/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
</head>
<body>
<?php include("nav.php"); ?>
<header class="mainheader">
    <div class="title">
        <div class="stages" id='first'>
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Ajantaju</h1></li>
                <li id="selected">1. Valitse näytelmä</li>
                <li>2. Sijoita näyttelijät</li>
                <li>3. Tarkistus</li>
            </ul>
        </div>
        <div class="stages" id='second'>
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Ajantaju</h1></li>
                <li id="selected" class="goToFirst">1. Valitse näytelmä</li>
                <li id="selected">2. Sijoita näyttelijät</li>
                <li>3. Tarkistus</li>
            </ul>
        </div>
        <div class="stages" id="third">
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Ajantaju</h1></li>
                <li id="selected" class="goToFirst">1. Valitse näytelmä</li>
                <li id="selected" class="goToSecond">2. Sijoita näyttelijät</li>
                <li id="selected">3. Tarkistus</li>
            </ul>
        </div>
    </div>
</header>
<div id="one">
    <div class="wrapperb">
        <div class="tablea">
            <div class="textwrapper">
                <p><br>Ajantaju -pelissä valitset ensin näytelmän. Kun olet valinnut sen, saat näkyviisi viisi esityskuvaa näytelmästä. Sinun tehtäväsi on asettaa kuvat aikajärjestykseen vanhimmasta nuorimpaan.
                </p></div>
            <table>
                <tr id="trone">
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                </tr>
                <tr id="trtwo">
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                    <td><img class="select" src="#"/>
                        <div class="desc"></div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div id='two'>
    <div class="wrapperb">
        <div class="tableb">
<div class="textwrapper">
                <p><br>Mieti kuvien ikäjärjestystä. Kun olet päätellyt sen, aseta kuvat aikajärjestykseen vasemmalta oikealle, vanhimmasta uusimpaan. Klikkaa kuvaa ja pidä kursori alhaalla ja raahaa kuvat alapalkkiin.
                </p></div>
            <h1 class="titlename">Valittu näytelmä</h1>
            <div class="toptr">
                <ul class="topul" id="shuffleThis">
                    <li><img id="drag1" class="dragg" src="#"/></li>
                    <li><img id="drag2" class="dragg" src="#"/></li>
                    <li><img id="drag3" class="dragg" src="#"/></li>
                    <li><img id="drag4" class="dragg" src="#"/></li>
                    <li><img id="drag5" class="dragg" src="#"/></li>
                </ul>
            </div>
            <div class="toptr">
                <ul class="topul" id="answers">
                    <li><img src="assets/images/Vanha.png" class="drop" id="div1"/></li><!--
                    --><li><img src="assets/images/x.png" class="drop" id="div2"/></li><!--
                    --><li><img src="assets/images/x.png" class="drop" id="div3"/></li><!--
                    --><li><img src="assets/images/x.png" class="drop" id="div4"/></li><!--
                    --><li><img src="assets/images/Uusin.png" class="drop" id="div5"/></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="ready">
        <a onClick="CheckIt()">
            <button class="btnpadding" id="next">Valmis</button>
        </a>
    </div>
</div>
<div id="three">
    <div class="wrapperb">
        <div class="tableb">
<div class="textwrapper">
                <p><br>Jos haluat esityksistä lisätietoja, klikkaa ylempiä kuvia.
                </p></div>
            <h1 class="titlename">Valittu näytelmä</h1>
            <div class="toptr">
                <ul class="topul">
                    <li><a href="#" id="dragn1" data-lightbox="kuvaus" data-title=""/><img id="drags1" src="#"/></a>
                    </li><!--
                -->
                    <li><a href="#" id="dragn2" data-lightbox="kuvaus" data-title=""/><img id="drags2" src="#"/></a>
                    </li><!--
                -->
                    <li><a href="#" id="dragn3" data-lightbox="kuvaus" data-title=""/><img id="drags3" src="#"/></a>
                    </li><!--
                -->
                    <li><a href="#" id="dragn4" data-lightbox="kuvaus" data-title=""/><img id="drags4" src="#"/></a>
                    </li><!--
                -->
                    <li><a href="#" id="dragn5" data-lightbox="kuvaus" data-title=""/><img id="drags5" src="#"/></a>
                    </li>
                </ul>
            </div>
            <div class="toptr">
                <ul class="topul" id="answers2">
                </ul>
            </div>
        </div>
        <section class="answerpanel">
            <a onClick="reset()">
                <button class="reset" id="next">Alusta</button>
            </a>
<p id="score_animation"></p>
            <h1 id="finalblock"></h1>
            <p class="infotxt" id="scoredescription">Tässä on tekstii! Jee!</p>
        </section>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="assets/scripts/jquery-ui.min.js" type="text/javascript"></script>
<script src="assets/scripts/data.js" type="text/javascript"></script>
<script src="assets/scripts/ajantaju.js" type="text/javascript"></script>
<script src="assets/scripts/lightroom.js" type="text/javascript"></script>
<script src="nav.js" type="text/javascript"></script>
</body>
</html>
