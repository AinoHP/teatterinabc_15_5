<?php
$thisPage = "Pukusuunnittelu";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Teatterin A B C</title>
    <meta charset="utf-8"/>
    <link href="assets/css/main.css" rel="stylesheet"/>
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
                <li id="borderless"><h1 id="light">Roolitus</h1></li>
                <li id="selected">1. Valitse näytelmä</li>
                <li>2. Valitse näyttelijät</li>
                <li>3. Valmis</li>
            </ul>
        </div>
        <div class="stages" id='second'>
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Roolitus</h1></li>
                <li id="selected" class="goToFirst">1. Valitse näytelmä</li>
                <li id="selected" class="blackBorder black">2. Valitse näyttelijät</li>
                <li>3. Valmis</li>
            </ul>
        </div>
        <div class="stages" id="third">
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Roolitus</h1></li>
                <li id="selected" class="goToFirst">1. Valitse näytelmä</li>
                <li id="selected">2. Valitse näyttelijät</li>
                <li id="selected" class="blackBorder black">3. Valmis</li>
            </ul>
        </div>
    </div>
</header>
<div id="one">
    <div class="wrapperc leftAlign">
        <div class="infoOne">
            <h1>Käyttöohje</h1>
            <p>Valitse sopivat näyttelijät esitykseen!<br><br>

Aloita valitsemalla jokin seuraavista näytelmistä Hamlet, Romeo ja Julia, Kullervo, Anna Liisa tai Niskavuoren nuori emäntä. Kun olet klikannut valitsemaasi näytelmän, saat luettavaksesi sen juoniselostuksen ja niiden roolihenkilöiden nimet, joille sinun on tarkoitus valita esittäjä.<br><br>

Esimerkiksi, jos olet valinnut Hamletin, eteesi tulee teksti, jossa kerrotaan, mitä näytelmässä nimeltä Hamlet tapahtuu. Samalla näet ne roolihenkilöt joille sinun pitää valita esittäjät. Tässä tapauksessa ne ovat Hamlet, Ofelia, Gertrud ja Claudius. Kun klikkaat roolihahmon nimeä, näet näyttelijät joista saat valita hänet, joka mielestäsi parhaiten sopii siihen tulkintaan, jonka haluat näytelmästä tehdä. Kun olet valinnut näyttelijän kaikkiin annettuihin rooleihin ja klikkaat valmis, saat analyysin siitä, minkälainen esitys valitsemillasi esittäjillä syntyy.<br><br>

Voit tallentaa esityksesi tiedot koneellesi tai lähettää sähköpostilla haluamillesi henkilöille. Kun poistut pelistä, kaikki käsittelemäsi materiaali katoaa.</p>
        </div>
        <div class="rows">
            <div class="plays">
            </div>
            <div class="plays">
            </div>
            <div class="plays">
            </div>
            <div class="plays">
            </div>
            <div class="plays">
            </div>
        </div>
    </div>
</div>
<div id="two">
    <div class="wrapperc leftAlign">
        <div class="infoTwo">
            <div class="buttonRole">
                <button class="btnpadding reset">Palaa</button>
                <button class="btnpadding" id="nextPage">Roolita</button>
            </div>
        </div>
        <table id="imageCollection">
            <tr class="row">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr class="row">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr class="row">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr class="row">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr class="row">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
        </table>
    </div>
</div>
<div class="viewheight" id="three">
    <div class="wrapperc leftAlign height">
        <div class="leftSide width40 height">
            <h1>Roolihahmoista</h1>
            <p id="describe"></p>
            <div class="roleContainer">
                <ul>
                    <li>
                        <div class="charContainer">
                            <div class="placeholderImg"><img class="roleImg" src=""/></div>
                            <div class="charText">
                                <h1 class="roles"></h1>
                                <p class="charTitle"></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="charContainer">
                            <div class="placeholderImg"><img class="roleImg" src=""/></div>
                            <div class="charText">
                                <h1 class="roles"></h1>
                                <p class="charTitle"></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="charContainer">
                            <div class="placeholderImg"><img class="roleImg" src=""/></div>
                            <div class="charText">
                                <h1 class="roles"></h1>
                                <p class="charTitle"></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="charContainer">
                            <div class="placeholderImg"><img class="roleImg" src=""/></div>
                            <div class="charText">
                                <h1 class="roles"></h1>
                                <p class="charTitle"></p>
                            </div>
                        </div>
                    </li>
                    <div class="buttonRole">
                        <button class="btnpadding reset">Palaa</button>
                        <button class="btnpadding unActive" id="finalize">Valmis</button>
                    </div>
            </div>
            </ul>
        </div>
        <div id="theBg" class="rightSide jumboBG width60 height">
            <div class="gameContainer">
                <img src="" class="gameImg"/>
                <img src="" class="gameImg"/>
                <img src="" class="gameImg"/>
                <img src="" class="gameImg"/>
            </div>
        </div>
    </div>
</div>
</div>
<div id="four" class="viewheight">
    <div class="wrapperc leftAlign height">
        <div class="leftSide width40 height">
            <h1 class="analysis">Analyysi</h1>
            <p class="analyze"></p>
            <p class="analyze"></p>
            <p class="analyze"></p>
            <p class="analyze"></p>
            <div class="buttonFinal">
                <button class="btnpadding reset">Alkuun</button>
            </div>
        </div>
        <div class="rightSide width60 height">
            <div class="finalBox gameContainer">
                <ul class="captioning">
                    <li class="inlineBlock fiveM">
                        <img src="" class="gameImgS"/>
                        <div class="caption"><h1></h1></div>
                    </li>
                    <li class="inlineBlock fiveM">
                        <img src="" class="gameImgS"/>
                        <div class="caption"><h1></h1></div>
                    </li>
                    <li class="inlineBlock fiveM">
                        <img src="" class="gameImgS"/>
                        <div class="caption"><h1></h1></div>
                    </li>
                    <li class="inlineBlock fiveM">
                        <img src="" class="gameImgS"/>
                        <div class="caption"><h1></h1></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script src="nav.js" type="text/javascript"></script>
<script src="assets/scripts/roledata.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="assets/scripts/roolitus.js" type="text/javascript"></script>
</body>
