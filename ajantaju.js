var stages, n, i, t, e, x, descr, y, c, d, id, p, score, selectt, xmlhttp, list, xmlDoc, answer, orig, points, mod, answers, elems;
answers = [];
orig = [];
desc = [];
mod = 1;
load();
stages=1;
function load() {
    x = imgCol;
    y = document.getElementsByClassName("select");
    c = document.getElementsByClassName("desc");
    for (i = 0; i < x.length; i++) {
        y[i].src = imgFolder+x[i]["thumbnail"];
		
        c[i].innerHTML = x[i]["name"];
        y[i].setAttribute("id", x[i]["id"]);
    }
}
function listAll(id) {
    c = imgCol;
    y = document.getElementsByClassName("dragg");
    p = document.getElementsByClassName("titlename");
    for (i = 0; i < c.length; i++) {
        x = c[i]["id"];
        if (id == x) {
            for (d = 0; d < 5; d++) {

                y[d].src = imgFolder+c[i]["imgs"][d]["img"];
                e = c[i]["imgs"][d]["myvalue"];
                descr = c[i]["imgs"][d]["desc"];
                y[d].setAttribute("myvalue", e);
                y[d].setAttribute("data-title", descr);
            }
            var ul = document.getElementById('shuffleThis');
            p[0].innerText = c[i]["name"];
            p[1].innerText = p[0].innerText;
            for (var h = ul.children.length; h >= 0; h--) {
                ul.appendChild(ul.children[Math.random() * h | 0]);
            }
            for (e = 1; e < 6; e++) {
                orig[e - 1] = document.getElementById("drag" + e).getAttribute("src");
                desc[e - 1] = document.getElementById("drag" + e).getAttribute("data-title");
            }
            return;
        }
    }
}

function HideContent(d) {
    document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
    document.getElementById(d).style.display = "block";
}

function toOne() {
    stages = 1;
    ShowContent('one');
    ShowContent('first');
    HideContent('second');
    HideContent('two');
    HideContent('third');
    HideContent('three');
    location.reload();
}
function toTwo(id) {
    stages = 2;
    ShowContent('two');
    ShowContent('second');
    HideContent('one');
    HideContent('first');
    HideContent('third');
    HideContent('three');
    if (stages==2) {
                listAll(id);
    }
}
function toThree(score) {
    document.getElementById("finalblock").innerHTML = (score * 100 / 5) + "%";
    stages = 3;
    HideContent('two');
    HideContent('second');
    HideContent('one');
    HideContent('first');
    ShowContent('third');
    ShowContent('three');
    if (mod == 1) {
        for (var n = 1; n < 6; n++) {
            document.getElementById("drags" + n).setAttribute("src", orig[n - 1]); // paste orig array
            document.getElementById("dragn" + n).setAttribute("href", orig[n - 1]);
            document.getElementById("dragn" + n).setAttribute("data-title", desc[n - 1]);
			}
        mod = 0;
	}
     var percentage = (score * 100 / 5);
     switch ( percentage )
     {
         case 0: document.getElementById("scoredescription").innerHTML = 
"Päättely ei suju aina yhtä hyvin, mutta älä lannistu vaan kokeile uudestaan."; break;
         case 20: document.getElementById("scoredescription").innerHTML 
= "Olet päässyt päättelyn alkuun, mutta vielä on paljon harjoiteltavaa."; break;
         case 40: document.getElementById("scoredescription").innerHTML 
= "Kohtalaisen hyvä! Tarvitset kuitenkin vielä harjoitusta."; break;
         case 60: document.getElementById("scoredescription").innerHTML 
= "Melko hyvä! Tarvitset vielä jonkin verran harjoitusta."; break;
         case 80: document.getElementById("scoredescription").innerHTML 
= "Oikein hyvä! Tarvitset enää vähän harjoitusta."; break;
         case 100: document.getElementById("scoredescription").innerHTML 
= "Bravo! Bravo! Olet ajoituksen mestari!";
         document.getElementById("score_animation").innerHTML = "<img src='assets/images/ballerina.gif' />";
         break;
    }
}
function CheckIt() {
    points = 0;
    e = 1;
    for (n = 1; n < 6; n++) {

        list = document.getElementById("div" + n);
        answer = list.getAttribute("myvalue");
        answers[n - 1] = answer;
    }

    for (t = 0; t < 5; t++) {

        if (answers[t] == t + 1) {
            points++;
            e++;
        } else {
            document.getElementById("div" + e).style = "opacity: 0.5;";
            e++;
        }
    }
    toThree(points);
    var clone = document.getElementById("answers").cloneNode(true);
    document.getElementById("answers2").appendChild(clone);
}
elems = document.getElementsByClassName("select");
for (i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", function () {
        toTwo(this.id);
    });

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function reset() {
    window.location.reload(true);
}
$(function () {
    $(".dragg").draggable({
        containment: '.tableb',
        opacity: "0.7",
        scroll: false,
        connectToSortable: '.drop',
        helper: 'clone',
        revert: 'invalid'
    });
    
    $('.drop').droppable({
        accept: '.dragg',
        drop: function (event, ui) {
            $(this).attr("src", ui.draggable.attr("src"));
            $(this).attr("myvalue", ui.draggable.attr("myvalue"));
        }
    });
});

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function (a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }

    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy;
        b._touchStart = function (a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function (a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function (a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function () {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function () {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);
var b = document.getElementsByClassName("goToFirst");
for (i = 0; i < b.length; i++) {
    b[i].addEventListener("click", function () {
        toOne();
    });
}
var c = document.getElementsByClassName("goToSecond");
for (i = 0; i < c.length; i++) {
    c[i].addEventListener("click", function () {
       toTwo();
    });
}