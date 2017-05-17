<?php
$thisPage = "Pukusuunnittelu";
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Teatterin A B C</title>
        <meta charset="utf-8" />
        <link href="assets/css/main.css" rel="stylesheet"/>
        <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    </head>
    <body>
        <?php
        include ("nav.php");
        ?>
        <header class="mainheader">
            <div class="title">
                <div class="stages" id='first'>
                    <ul><li id="borderless"><img class="navi" src="assets/images/menu.gif"></li><li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li><li id="borderless"><h1 id="light">Muodonmuutos</h1></li><li id="selected">1. OTA KUVA</li><li>2. VALITSE PUKU</li><li>3. MUOKKAA KUVA</li>
                    </ul>
                </div>
                <div class="stages" id='second'>
                    <ul><li id="borderless"><img class="navi" src="assets/images/menu.gif"></li><li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li><li id="borderless"><h1 id="light">Muodonmuutos</h1></li><li id="selected" class="goToFirst">1. OTA KUVA</li><li id="selected">2. VALITSE PUKU</li><li>3. MUOKKAA KUVA</li>
                    </ul>
                </div>
                <div class="stages" id="third">
                    <ul><li id="borderless"><img class="navi" src="assets/images/menu.gif"></li><li id="borderless"><h1 id="dark">Pukusuunnittelu</h1></li><li id="borderless"><h1 id="light">Muodonmuutos</h1></li><li id="selected" class="goToFirst"> 1. OTA KUVA</li><li id="selected" class="goToSecond">2. VALITSE PUKU</li><li id="selected">3. MUOKKAA KUVA</li>
                    </ul>
                </div>
            </div>
        </header>

        <div class="stage1"  id="one">
            <div class="info">
                <h2>Käyttöohje</h2>
                <p>Muodonmuutos -pelissä voit liittää oman kasvokuvasi valitsemaasi esityspukuun. Aloita ottamalla kuva itsestäsi ja lataa kuva.
                   Tämän jälkeen voit jatkaa valitsemaan mieleisesi roolivaatteen.
                   Kun olet löytänyt sopivan puvun liitä kasvokuvasi siihen.
                  Voit muokata kuvan kallistuskulmaa, kokoa ja kirkkautta.
                   Kun kuva on valmis anna itsellesi taiteilijanimi.
                   Valitse jatka ja oman kuvasi rinnalle tulee esityskuva, jossa puku on roolihenkilön yllä.
                   Tässä paljastuu, näyttelijä joka on käyttänyt, pukua, milloin ja missä roolissa.
<br><br>

Voit tallentaa kuvasi tietokoneelle tai lähettää sähköpostilla, tai jakaa facebookissa tai instagramissa. Kun poistut pelistä,
kaikki käsittelemäsi materiaali katoaa. Voit myös palata alkuun ja ottaa uuden kuvan ja valita uuden puvun.</p>
                <p></p>
            </div>
            <div class="screenshot">
                <div id="canvasWrapper">
                    <video id="video"></video>
                    <canvas id="canvas"></canvas>
                    <img src="#" id="canvasPreview" />
                </div>
                <div class="buttons">
                    <div id="btn">
                        <button onclick="Pic()" id="webcam">Käytä kameraa</button>
                        <button onclick="takePic()" id="snap">Ota kuva</button>
                        <button onclick="loadPic()" id="load">Lataa kuva</button>
                        <button onclick="toTwo()">Valmis</button>
                        <input type='file' id="input"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="stage2" id='two'>
            <div class="galleria">
                <div class="galleriaPhoto" id="pasteData">
                </div>
            </div>
        </div>
        <div class="stage3" id="three">
            <div id="wrapper">
                <div class="contain">
                    <div class="information">
                        <h2>Muokkaa kuvaa</h2>
                        <p>Ottamasi kuva on pukukuvan takana. Klikkaa ja raahaa kuvaa, kunnes kasvosi ovat oikeassa kohdassa.
                        Voit myös suurentaa ja pienentää kuvaa raahaamalla kasvokuvan reunasta.</p>
                    </div>
                <div class="editor">
                    <canvas id="editorcanvas"></canvas>
                </div>
                 <div class="moveMe">
                    <ul class="username">
                        <p>Anna taiteilijanimesi</p>
                        <li><p>Etunimi</p></li>
                        <li><input type="text" name="txt" id="txt" value="" onChange = "copyName();"/></li>
                        <li><p>Sukunimi</p></li>
                        <li><input type="text" name="txt" id="txt2" value="" onchange = "copyLastName();"/></li>
                    </ul>
                </div>
               </div>
            </div>
            <div class="navbutton">
                <a onClick="toTwo()"><button id="previous">Takaisin</button></a>
                <a onClick="toFive()"><button  id="next">Jatka</button></a>
            </div>
        </div>
        <div class="stage5" id="five">
            <div id="wrapper">
                <div class="editor2">

                    <table>
                        <tr>
                            <td>
                             <table>
                                <tr><th><h2>Esityskuva</h2></th></tr>
                                <tr><td><img src="#" id="target2"></td>
                                <tr><td><h1 class="muodonmuutos-play-description" id="pasteName"></h1>
                                <div id="pasteHere" class="muodonmuutos-esityskuva-teksti"></div></td></tr>
                             </table>
                            </td>
                            <td>
                             <table>
                                    <tr><th><h2>Oma kuva</h2></th></tr>
                                    <tr><td><img src="" id="final"></td></tr>
                                    <tr><td><div id="txt1" class="muodonmuutos-omakuva-teksti"></div><div id="txt3" class="muodonmuutos-omakuva-teksti"></div><div class="muodonmuutos-perusteksti">näytelmässä</div>
                                <h1 id="pasteHereToo"></h1></td></tr>
                             </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="navbutton">
                <a onClick="toThree()"><button id="previous">Takaisin</button></a>
                <a onClick="toOne()"><button id="start">Aloita alusta</button></a>
                <a onClick="Share()"><button id="share">Jaa kuva</button></a>
            </div>
            <div id="share-buttons">

    <!-- Email -->
    <a href="mailto:?Subject=Simple Share Buttons&amp;Body=Teatterimuseo img src= "final"">
        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
    </a>

    <!-- Facebook -->
    <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
    </a>

    <!-- Twitter -->
    <a href="https://twitter.com/share?url=https://teatterimuseo.fi&amp;text=Teatterimuseo&amp;hashtags=teatterimuseo" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
    </a>

</div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
        <script src="assets/scripts/fabric.min.js" type="text/javascript"></script>
        <script src="assets/scripts/data.js" type="text/javascript"></script>
        <script src="assets/scripts/scripts.js" type="text/javascript"></script>
        <script src="assets/scripts/blazy.min.js" type="text/javascript"></script>
        <script src="nav.js" type="text/javascript"></script>
    </body>
</html>
