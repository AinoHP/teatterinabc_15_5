<nav id="nav">
    <ul class="links">
        <li<?php
        if ($thisPage == "Etusivu")
            echo " id=\"currentpage\"";
        ?>>
            <a href="index.php">Teatterin A B C</a></li>
        <li<?php
        if ($thisPage == "Romeojulia")
            echo " id=\"currentpage\"";
        ?>>
            <a href="#">Romeo ja Julia</a></li>
        <li <?php
        if ($thisPage == "Pukusuunnittelu")
            echo " id=\"currentpage\"";
        ?>>
            <a href="pukusuunnittelu.php">Pukusuunnittelu</a></li>
        <li<?php
        if ($thisPage == "Lavastus")
            echo " id=\"currentpage\"";
        ?>>
            <a href="lavastus.php">Lavastus</a></li>
        <li<?php
        if ($thisPage == "Teatterimuseo")
            echo " id=\"currentpage\"";
        ?>>
            <a href="http://www.teatterimuseo.fi/">Teatterimuseo</a></li>
    </ul>
</nav>
<?php
if ($thisPage == "Pukusuunnittelu") {
    echo '<nav id="sub_nav" class="shadowBox">
<ul class="sub_links">
    <li>
            <img src="assets/images/teatteripukuikoni.png" alt=""/>
            <div class="sub_text">
                <a href="teatteripuku.php"><h1>teatteripuku</h1></a>
                <a href="muodonmuutos.php"><p>Tehtävä:</p>
                <p id="emp">muodonmuutos</p></a>
            </div>
    </li>
    <li>
       <img src="assets/images/ajantajuikoni.png" alt=""/>
            <div class="sub_text">
                <a href="#"><h1>teatteripuku suomessa</h1></a>
                <a href="ajantaju.php"><p>Tehtävä:</p>
                    <p id="emp">ajantaju</p></a>
            </div>
    </li>
    <li>
            <img src="assets/images/profiloirooliikoni.png" alt=""/>
            <div class="sub_text">
                <a href="#puvutkertovat.php"><h1>mitä puvut kertovat</h1></a>
                <a href="roolihenkilo.php"><p>Tehtävä:</p>
                <p id="emp">profiloi roolihenkilö</p></a>
            </div>
    </li>
    <li>
        <img src="assets/images/roolitusikoni.png" alt=""/>
        <div class="sub_text">
            <a href="#"><h1>puku ja historiallinen aikakausi</h1></a>
            <a href="roolitus.php"><p>Tehtävä:</p>
                <p id="emp">roolitus</p>
            </a>
        </div>
    </li>
    <li>
        <img src="assets/images/mail.png" alt=""/>
        <div class="sub_text">
            <a href="roolihahmo.php"><p class="black">Luo roolihahmo</p></a>
        </div>
    </li>
    <li class="navi">
        <i id="floatThis" class="fa fa-2x fa-times"></i>
    </li>
</ul>
</nav> ';
}
if ($thisPage == "Lavastus") {
    echo '<nav id="sub_nav" class="shadowBox">
    <ul class="sub_links">

        <li>
            <img src="assets/images/lavastusikoni1.png" alt=""/>
            <div class="sub_text">
                <a href="lavastuksensuunnittelu.php"> <h1>Mitä kuva kertoo lavastuksesta</h1></a>
                <a href="tapahtuma.php"><p>Tehtävä: Mitä on tapahtunut?</p></a>
            </div>
        </li>
        <li>
            <img src="assets/images/pienoismallikuva.png" alt=""/>
            <div class="sub_text">
            <a href="lavastuksenhistoria.php"><h1>Lavastuksesta suomessa</h1></a>
            <a href="pienoismalli.php"><p>Tehtävä: tee oma pienoismalli</p></a>
            </div>
        </li>
        <li>
            <img src="assets/images/tyylitaju.jpg" alt=""/>
            <div class="sub_text">
                <a href="lavastuksenhistoria.php"><h1>Länsimaisen lavastuksen historiaa</h1></a>
                <a href="nykylavastus.php"><h1>Moninainen nykylavastus</h1></a>
                <a href="tyylitaju.php"><p>Tehtävä: Testaa tyylitajusi</p></a>
            </div>
        </li>
      <li class="navi">
     <i id="floatThis" class="fa fa-2x fa-times"></i>
    </li>
    </ul>
</nav>
';
}
?>
