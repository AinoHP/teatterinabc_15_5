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
                <li id="borderless"><h1 id="light">Profiloi roolihenkilö</h1></li>
                <li id="selected">1. Valitse roolihenkilö</li>
                <li>2. tulkitse kuvaa</li>
                <li>3. Valmis</li>
            </ul>
        </div>
        <div class="stages" id='second'>
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Profiloi roolihenkilö</h1></li>
                <li id="selected" class="goToFirst">1. Valitse roolihenkilö</li>
                <li id="selected" class="blackBorder black">2. tulkitse kuvaa</li>
                <li>3. Valmis</li>
            </ul>
        </div>
        <div class="stages" id="third">
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li>
                <li id="borderless"><h1 id="light">Profiloi roolihenkilö</h1></li>
                <li id="selected" class="goToFirst">1. Valitse roolihenkilö</li>
                <li id="selected" class="goToSecond">2. tulkitse kuvaa</li>
                <li id="selected" class="blackBorder black">3. Valmis</li>
            </ul>
        </div>
    </div>
</header>
<div id="one">
    <div class="wrapperb">
        <div class="profile" id="profile">
            <div class="pager" id="pager">
                <div class="previous"><i class="fa fa-arrow-left fa-2x"></i></div>
                <div class="next"><i class="fa fa-arrow-right fa-2x"></i></div>
            </div>
        </div>
        <div class="textwrap">
            <h1>Valitse kuva ja kirjoita siitä roolihenkilöstä joka on merkattu sulkakynällä!</h1><br>
<p>Valitse roolihahmogalleriasta mielenkiintoinen, kaunis, ärsyttävä tai muuten vaan mielikuvitusta herättävä roolikuva. Klikkaa kuvaa ja kirjoita kuvassa olevan sulkakynällä merkityn henkilön tarina. Halutessasi voi kirjoittaa vapaasti tai voit vastata valmiiksi annettuihin kysymyksiin. Mitä päättelet kuvasta? Anna kuvan kertoa sinulle!<br><br>

Kun klikkaat valmis-nappia, saat tiedon siitä, kuka roolihenkilö on ja mistä näytelmästä. Vertailussa ei ole kyse oikeasta tai väärästä vastauksesta vaan siitä, miten eri tavoilla asioita voi tulkita.<br><br>

Jos tiedämme, että kuvan henkilö esittää Romeo ja Julia -näytelmän Romeota liitämme kuvan henkilöön niitä ominaisuuksia, joita tiedämme Romeon roolihenkilöllä olevan. Jos emme tiedä kuvasta etukäteen mitään tulkitsemme kuvaa ilman ennakko-odotuksia pelkkänä kuvana.<br><br>

Jos haluat säilyttää tekstisi tallenna se koneellesi tai lähetä sähköpostilla haluamillesi henkilöille. Kun poistut pelistä, kirjoittamasi materiaali katoaa.
            </p>
        </div>
    </div>
</div>
<div id="two" class="height">
    <div class="wrapperindexb margin-top height">
        <div class="leftSide">
            <div class="imgContainer">
                <img id="bringFront" src="#" name="#" info="#" desc="#"/>
            </div>
            <div class="userWrite">
                <h1>Voit myös kirjoittaa vapaasti:</h1>
                <textarea class="answerArea copyAll resizeActive"></textarea>
            </div>
        </div>
        <div class="rightSide">
            <ul class="noStyle">
                <li>
                    <h1>
                        Yleistä tietoa henkilöstä
                    </h1>Minkä ikäinen hän on? Missä hän asuu? Missä maassa hän elää? Mikä vuosi on menossa?
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Henkilön suhteet
                    </h1>Onko hänellä perhettä vai asuuko hän yksin? Jos hänellä on perhe, minkälainen se on? Onko hänellä ystäviä? Minkälaiset suhteet hänellä on ihmisiin?
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Henkilön työelämä
                    </h1>Mitä hän tekee? Onko hän koululainen tai opiskelija? Työelämässä vai työtön? Kansalainen vai kuninkaallinen? Jos hän käy töissä, mikä on hänen ammattinsa? Mitä hän harrastaa?
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Henkilön mielentila
                    </h1>Minkälaisessa mielentilassa hän on kuvassa?
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Henkilön suurin toive
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Henkilön suurin pelko
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Mikä henkilön nimi on?
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
            </ul>
            <div class="btnS">
                <button class="btnpadding" id="prevButton">Paluu</button>
                <button class="btnpadding" id="nextButton">Valmis</button>
            </div>
        </div>
    </div>
</div>
<div id="three">
    <div class="wrapperindexb margin-top height">
        <div class="column-33">
            <div class="imgContainer">
                <img id="oImg" src="#"/>
            </div>
            <div class="textContainer">
                <h1>Vapaa kenttä</h1>
                <p class="pasteAll" id="freeSpeech"></p>
            </div>
        </div>
        <div class="column-33">
            <div class="textContainer">
                <h1>Kuvatiedot</h1>
                <p class="fullArea" id="roleInfo"></p>
            </div>
        </div>
        <div class="column-33">
            <div class="textContainer">
                <ul class="noStyle">
                    <li>
                        <h1>Yleistä tietoa henkilöstä</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Henkilön suhteet</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Henkilön työelämä</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Henkilön mielentila</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Henkilön suurin toive</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Henkilön suurin pelko</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Henkilön nimi</h1>
                        <p class="pasteAll"></p>
                    </li>
                </ul>
            </div>
            <div class="btnS">
                <button class="btnpadding" id="reset">alkuun</button>
            </div>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="assets/scripts/data.js" type="text/javascript"></script>
<script src="assets/scripts/roolihenkilo.js" type="text/javascript"></script>
<script src="nav.js" type="text/javascript"></script>
</body>
</html>
