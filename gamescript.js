var mc0 = document.getElementById("machine1");
var mc1 = document.getElementById("machine2");
var mc2 = document.getElementById("machine3");
var mc3 = document.getElementById("machine4");
var mc4 = document.getElementById("machine5");
var mc5 = document.getElementById("machine6");
var mc6 = document.getElementById("machine7");
var mc7 = document.getElementById("machine8");
var listID = [];
var slot1;
var slot4;
var slot2;
var slot3;
var slot5;
var slot6;
var slot7;
var slot8;
function rnd() {
    machine1.shuffle(5, onComplete);
    machine5.shuffle(5, onComplete);
    setTimeout(function () {
        machine2.shuffle(5, onComplete);
        machine6.shuffle(5, onComplete);
    }, 500);

    setTimeout(function () {
        machine7.shuffle(5, onComplete);
        machine3.shuffle(5, onComplete);
    }, 1000);

    setTimeout(function () {
        machine8.shuffle(5, onComplete);
        machine4.shuffle(5, onComplete);
    }, 1500);

}
var b = 0;
for (var i = 1; i < 9; i++) {
    var c = styleArray;

    var mc = document.getElementById("machine" + i);
    mc.innerHTML = "";
    for (var t = 0; 5 > t; t++) {
        var pic = c[b]["game"][t]["img"];
        var picId = c[b]["game"][t]["id"];
        var node = document.createElement("DIV");
        node.id = picId;
        node.innerHTML = "<img src='" + imgFolder + pic + "' />";
        mc.appendChild(node);
    }
    b++;
}

var machine1 = $("#machine1").slotMachine({
    active: 0,
    delay: 500
});

var machine2 = $("#machine2").slotMachine({
    active: 1,
    delay: 500,
    direction: 'down'
});

var machine3 = $("#machine3").slotMachine({
    active: 2,
    delay: 500
});
var machine4 = $("#machine4").slotMachine({
    active: 2,
    delay: 500
});
var machine5 = $("#machine5").slotMachine({
    active: 0,
    delay: 500
});

var machine6 = $("#machine6").slotMachine({
    active: 1,
    delay: 500,
    direction: 'down'
});

var machine7 = $("#machine7").slotMachine({
    active: 2,
    delay: 500
});
var machine8 = $("#machine8").slotMachine({
    active: 2,
    delay: 500
});

function onComplete(active) {
    switch (this.element[0].id) {
        case 'machine1':
            $("#machine1Result").text("Index: " + this.active);
            break;
        case 'machine2':
            $("#machine2Result").text("Index: " + this.active);
            break;
        case 'machine3':
            $("#machine3Result").text("Index: " + this.active);
            break;
        case 'machine4':
            $("#machine4Result").text("Index: " + this.active);
            break;
        case 'machine5':
            $("#machine5Result").text("Index: " + this.active);
            break;
        case 'machine6':
            $("#machine6Result").text("Index: " + this.active);
            break;
        case 'machine7':
            $("#machine7Result").text("Index: " + this.active);
            break;
        case 'machine8':
            $("#machine8Result").text("Index: " + this.active);
            break;
    }
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

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
