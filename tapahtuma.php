<?php
$thisPage = "Lavastus";
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
                <li id="borderless"><h1 id="dark">Lavastus</h1></li>
                <li id="borderless"><h1 id="light">Mitä on tapahtunut?</h1></li>
                <li id="selected">1. Valitse Lavastus</li>
                <li>2. tulkitse kuvaa</li>
                <li>3. Valmis</li>
            </ul>
        </div>
        <div class="stages" id='second'>
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Lavastus</h1></li>
                <li id="borderless"><h1 id="light">Mitä on tapahtunut?</h1></li>
                <li id="selected" class="goToFirst">1. Valitse Lavastus</li>
                <li id="selected" class="blackBorder black">2. tulkitse kuvaa</li>
                <li>3. Valmis</li>
            </ul>
        </div>
        <div class="stages" id="third">
            <ul>
                <li id="borderless"><img class="navi" src="assets/images/menu.gif"></li>
                <li id="borderless"><h1 id="dark">Lavastus</h1></li>
                <li id="borderless"><h1 id="light">Mitä on tapahtunut?</h1></li>
                <li id="selected" class="goToFirst">1. Valitse Lavastus</li>
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
            <h1>Mitä on tapahtunut</h1>
            <p>Valitse esityskuvagalleriasta näyttämökuva, joka vaikuttaa mielenkiintoiselta ja ajatuksia herättävältä. Valittuasi kuvan, sen viereen tulee kysymyksiä, joiden perusteella kuvasta rakentuu tapahtumasarja, jossa on alku, keskikohta ja loppu. Halutessasi voit kirjoittaa vapaasti ilman kysymyksiä. Kun klikkaat sanaan ”valmis” saa tiedot, milloin, missä ja mistä esityksestä kuva on otettu ja mitä siinä on tapahtunut.<br><br>

Kun vertaat omaa tulkintaasi näyttämökuvasta tästä esityksestä kirjoitettuun tekstiin muista, että nyt ei ole kyse oikeasta tai väärästä vaan siitä, miten eri tavoilla saman asian voi nähdä. Voit verrata kirjoittamaasi tekstiä myös muiden samasta kuvasta kirjoittaneiden kanssa. Myös etukäteistietomme kuvan esittämästä hetkestä vaikuttaa siihen, miten sen tulkitsemme.
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
                        Mikä tai/ja missä tapahtumapaikka on?
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Mikä on tapahtuma-aika?
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Keitä tässä paikassa on tai on ollut?
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Mitä on tapahtunut? Minkälainen tunnelma on?
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Mitä on tapahtunut ennen tämän kuvan ottamista?
                    </h1>
                    <textarea class="answerField copyAll"></textarea>
                </li>
                <li>
                    <h1>
                        Mitä tapahtuu tämän jälkeen?
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
                <h1>Esitystiedot</h1>
                <p class="fullArea" id="roleInfo"></p>
            </div>
        </div>
        <div class="column-33">
            <div class="textContainer">
                <ul class="noStyle">
                    <li>
                        <h1>Mikä tai/ja missä tapahtumapaikka on?</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Mikä on tapahtuma-aika?</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Keitä tässä paikassa on tai on ollut?</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Mitä on tapahtunut? Minkälainen tunnelma on?</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Mitä on tapahtunut ennen tämän kuvan ottamista?</h1>
                        <p class="pasteAll"></p>
                    </li>
                    <li>
                        <h1>Mitä tapahtuu tämän jälkeen?</h1>
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
<script src="assets/scripts/tapahtuma.js" type="text/javascript"></script>
<script src="nav.js" type="text/javascript"></script>
</body>
</html>