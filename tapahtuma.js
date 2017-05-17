var listProfile = document.getElementById("profile");
var imgFolder = "assets/images/";
if (lastArr.length <= 5) {
    var ul = document.createElement("UL");
    listProfile.appendChild(ul);
    ul.setAttribute("class", "activeUL");
    listAll(ul);
} else {
    listToFive();
}
function listToFive() {
    var counter = 0;
    var ulCounter = [];
    var x = 0;
    ulCounter[x] = document.createElement("UL");
    ulCounter[0].setAttribute("class", "activeUL");
    listProfile.appendChild(ulCounter[x]);
    for (var i = 0; i < lastArr.length; i++) {
        var name = lastArr[i]["name"];
        var desc = lastArr[i]["description"];
        var info = lastArr[i]["info"];
        var img = lastArr[i]["img"];
        var node = document.createElement("LI");
        node.innerHTML =
            "<img class='imgArrayRole' name='" + name + "'description='" + desc + "' info='" + info + "' src='" + imgFolder + img + "'/>";
        ulCounter[x].appendChild(node);
        ulCounter[x].innerHTML += " ";
        if (counter == 7) {
            x++;
            ulCounter[x] = document.createElement("UL");
            listProfile.appendChild(ulCounter[x]);
            ulCounter[x].setAttribute("class", "unactiveUL");
            counter = -1;
        }
        counter++;
    }
}
function listAll(ul) {
    for (var i = 0; i < lastArr.length; i++) {
        var name = lastArr[i]["name"];
        var desc = lastArr[i]["description"];
        var info = lastArr[i]["info"];
        var img = lastArr[i]["img"];
        var node = document.createElement("LI");
        node.innerHTML =
            "<img class='imgArrayRole' name='" + name + "'description='" + desc + "' info='" + info + "' src='" + imgFolder + img + "'/>";
        ul.appendChild(node);
        ul.innerHTML += " ";
    }
}
var currentIndex = 0,
    items = $('.profile ul'),
    itemAmt = items.length;
function cycleItems() {

    var item = $('.profile ul')[currentIndex];
    item.setAttribute("class", "activeUL");
}

$('.pager .next').click(function () {
    var hideItem = $('.profile ul')[currentIndex];
    hideItem.setAttribute("class", "unactiveUL");
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
});

$('.pager .previous').click(function () {
    var hideItem = $('.profile ul')[currentIndex];
    hideItem.setAttribute("class", "unactiveUL");
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
    }
    cycleItems();
});
function ShowContentClass(d) {
    document.getElementsByClassName(d)[0].style.display = "block";
    document.getElementsByClassName(d)[1].style.display = "block";
}
function HideContentClass(d) {
    document.getElementsByClassName(d)[0].style.display = "none";
    document.getElementsByClassName(d)[1].style.display = "none";
}
function HideContent(d) {
    document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
    document.getElementById(d).style.display = "block";
}
function toTwo(desc, name, info, source) {
    HideContent("one");
    HideContent("first");
    HideContent("three");
    HideContent("third");
    ShowContent("two");
    ShowContent("second");
    var v = document.getElementById("bringFront");
    v.setAttribute("desc", desc);
    v.setAttribute("name", name);
    v.setAttribute("info", info);
    v.setAttribute("src", source);
}
function toThree() {
    var oImg = document.getElementById("bringFront").src;
    var info = document.getElementById("bringFront").getAttribute("info");
    var b = document.getElementsByClassName("copyAll");
    var c = document.getElementsByClassName("pasteAll");
    HideContent("one");
    HideContent("first");
    HideContent("second");
    HideContent("two");
    ShowContent("three");
    ShowContent("third");
    for (var a = 0; b.length > a; a++) {
        c[a].innerHTML = b[a].value;
        if (c[a].innerHTML == "") {
            c[a].innerHTML = "(tyhjä)";
        }
    }
    document.getElementById("oImg").src = oImg;
    document.getElementById("roleInfo").innerHTML = info;
    console.log(document.getElementById("freeSpeech").innerHTML);

}
var i,
    elems = document.getElementsByClassName("goToFirst");

for (i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", function () {
        reset();
    });
}

var c,
    elemsc = document.getElementsByClassName("goToSecond");

for (c = 0; c < elemsc.length; c++) {
    elemsc[c].addEventListener("click", function () {
        toTwo();
    });
}
document.getElementById("prevButton").addEventListener("click", function () {
    reset();
});
document.getElementById("reset").addEventListener("click", function () {
    reset();
});
document.getElementById("nextButton").addEventListener("click", function () {
    toThree();
});
$("img.imgArrayRole").click(function () {
    var desc = $(this).attr("description");
    var name = $(this).attr("name");
    var info = $(this).attr("info");
    var source = $(this).attr("src");
    toTwo(desc, name, info, source);
});
function reset() {
    window.location.reload(true);
}