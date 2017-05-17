var imgCol, imgFolder, playId;
var getImages = [];
imgFolder = "assets/images/";
var doc = document.getElementsByClassName("plays");
for (var a = 0; a < doc.length; a++) {
    doc[a].setAttribute("playid", a);

    var h1 = document.createElement("H1");
    h1.innerHTML = roleArray[a]["name"];
    doc[a].appendChild(h1);

    var oImg = document.createElement("img");
    oImg.src = imgFolder + roleArray[a]["img"];
    doc[a].appendChild(oImg);

    var p = document.createElement("P");
    p.innerHTML = roleArray[a]["description"];
    doc[a].appendChild(p);
}
imgCol = [
    {"datavl": "annaliisaikoni1.png"},
    {"datavl": "ofeliaikoni.png"},
    {"datavl": "juliaikoni.png"},
    {"datavl": "hamletikoni1.png"},
    {"datavl": "niskavuoriikoni.png"},
    {"datavl": "kullervoikoni.png"},
    {"datavl": "romeoikoni.png"},
    {"datavl": "hamletikoni2.png"},
    {"datavl": "hamletikoni3.png"},
    {"datavl": "kullervoikoni2.png"},
    {"datavl": "annaliisaikoni2.png"},
    {"datavl": "niskavuoriikoni2.png"},
    {"datavl": "annaliisaikoni3.png"},
    {"datavl": "kullervoikoni3.png"},
    {"datavl": "hamletikoni4.png"},
    {"datavl": "niskavuoriikoni4.png"},
    {"datavl": "niskavuoriikoni5.png"},
    {"datavl": "hamletikoni5.png"},
    {"datavl": "annaliisaikoni4.png"}
];
function shuffle(tbl) {
    var arr = tbl.find("td");
    for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    var tmp;
    var rows = tbl.find("tr").length;
    var cols = tbl.find("tr:first td").length;
    for (i = 0; i < rows; i++) {
        tmp = tbl.find("tr").eq(i);
        tmp.html();
        for (j = 0; j < cols; j++)
            tmp.append(arr[i * cols + j]);
    }
}

function shuffleImg() {
    var cell = document.getElementsByClassName("cell");
    var row = document.getElementsByClassName("row");
    for (var i = 0; i < imgCol.length; i++)
        cell[i].innerHTML = "<img src='" + imgFolder + imgCol[i]["datavl"] + "'/>";
}
for (var i = 0; i < doc.length; i++) {
    doc[i].addEventListener('click', function (e) {
        var id = this.getAttribute("playid");
        toTwo(id);
        shuffleImg();
        shuffle($("#imageCollection"));
        e.preventDefault();
    });
}
function ShowContentClass(d) {
    document.getElementsByClassName(d)[0].style.display = "block";
}
function HideContentClass(d) {
    document.getElementsByClassName(d)[0].style.display = "none";
}
function HideContent(d) {
    document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
    document.getElementById(d).style.display = "block";
}

function reset() {
    window.location.reload(true);
}
var c,
    elemsc = document.getElementsByClassName("goToFirst");

for (c = 0; c < elemsc.length; c++) {
    elemsc[c].addEventListener("click", function () {
        reset();
    });
}
var elemsr = document.getElementsByClassName("reset");

for (c = 0; c < elemsr.length; c++) {
    elemsr[c].addEventListener("click", function () {
        reset();
    });
}
function toTwo(id) {
    playId = id;
    var copy = document.getElementsByClassName("infoTwo");
    var h1 = document.createElement("H1");
    h1.innerHTML = roleArray[id]["name"];
    copy[0].appendChild(h1);
    copy[0].insertBefore(h1, copy[0].childNodes[0]);

    var p = document.createElement("P");
    p.innerHTML = roleArray[id]["plot"];
    copy[0].appendChild(p);
    copy[0].insertBefore(p, copy[0].childNodes[1]);

    HideContent("one");
    ShowContent("two");
    ShowContent("first");
    HideContent("three");
    HideContent("third");
}
var t, b;
function chkActive() {
    var dox = document.getElementsByClassName("placeholderImg");
    for (t = 0; t < dox.length; t++) {
        if (dox[t].classList.contains("activeItem")) {
            dox[t].className = dox[t].className.replace(/(?:^|\s)activeItem(?!\S)/g, '');
        }
    }
}
document.getElementById("nextPage").addEventListener("click", function () {
    toThree();
});
document.getElementById("finalize").addEventListener("click", function () {
    toFinal();
});
function toThree() {
    ShowContent("three");
    ShowContent("second");
    HideContent("first");
    HideContent("two");
    var testChange;
    testChange = [];
    var descr = document.getElementById("describe");
    descr.innerHTML = roleArray[playId]["description"];
    var cC = document.getElementsByClassName("charContainer");
    var role = document.getElementsByClassName("roles");
    var char = document.getElementsByClassName("charTitle");
    var bg = document.getElementById("theBg");
    var roleNr;
    for (var c = 0; c < cC.length; c++) {
        roleNr = "role" + c;
        role[c].innerHTML = roleArray[playId][roleNr][0]["roleName"];
        char[c].innerHTML = roleArray[playId][roleNr][0]["title"];
    }
    var gameImg = document.getElementsByClassName("gameImg");
    var docx = document.getElementsByClassName("placeholderImg");

    function begin() {
        var d = document.getElementsByClassName("activeItem")[0];
        d.className = d.className.replace(/(?:^|\s)activeItem(?!\S)/g, '');
        for (var z = 0; z < gameImg.length; z++) {
            gameImg[z].src = "";
        }
        bg.className += " jumboBG";
    }
    for (t = 0; t < docx.length; t++) {
        docx[t].id = t;
        docx[t].addEventListener("click", function () {
            if (this.classList.contains("activeItem")) {
                this.className = this.className.replace(/(?:^|\s)activeItem(?!\S)/g, '');
                HideContentClass("gameContainer");
                bg.className += " jumboBG";
                for (var z = 0; z < gameImg.length; z++) {
                    gameImg[z].src = "";
                }
            } else {
                ShowContentClass("gameContainer");
                chkActive();
                this.className += " activeItem";
                bg.className = bg.className.replace(/(?:^|\s)jumboBG(?!\S)/g, '');
                var roleId = "role" + this.id;
                var currentRole = roleArray[playId][roleId][0];
                for (var g = 0; g < currentRole["imgStore"].length; g++) {
                    getImages[g] = currentRole["imgStore"][g]["imgLink"];
                    gameImg[g].src = imgFolder + getImages[g];
                    gameImg[g].id = g;
                    gameImg[g].setAttribute("value", g);
                    gameImg[g].addEventListener("click", function () {
                            if (document.getElementsByClassName("activeItem")[0]) {
                                if (document.getElementsByClassName("activeItem")[0].getAttribute("value") == undefined) {
                                    testChange.push(true);
                                }
                                document.getElementsByClassName("activeItem")[0].setAttribute("value", this.id);
                                document.getElementsByClassName("activeItem")[0].firstChild.src = imgFolder + currentRole["imgStore"][this.id]["imgThumb"];
                                HideContentClass("gameContainer");
                                begin();
                                if (testChange.length == 4) {
                                    var btn = document.getElementById("finalize");
                                    btn.className = btn.className.replace(/(?:^|\s)unActive(?!\S)/g, '');
                                }
                            }
                        }
                    )

                }
            }
        })
    }
}
function toFinal() {
    var roles = [];
    var docx = document.getElementsByClassName("placeholderImg");
    var analyze = document.getElementsByClassName("analyze");
    var gameImg = document.getElementsByClassName("gameImgS");
    var capt = document.getElementsByClassName("caption");
    var roleImages = [];
    var actorNames = [];
    var roleNames = [];
    for (var t = 0; t < docx.length; t++) {

        var thisRole = roleArray[playId]["role" + t][0]["imgStore"][docx[t].getAttribute("value")];
        roles[t] = thisRole["imgInfo"];
        roleImages[t] = thisRole["imgLink"];
        actorNames[t] = thisRole["actor"];
        roleNames[t] = roleArray[playId]["role" + t][0]["roleName"];
    }
    HideContent("three");
    HideContent("second");
    ShowContent("third");
    ShowContent("four");

    for (t = 0; t < analyze.length; t++) {
        analyze[t].innerHTML = roles[t];
        gameImg[t].src = imgFolder + roleImages[t];
        capt[t].firstChild.innerHTML = roleNames[t] + ": " + actorNames[t];
    }
}
