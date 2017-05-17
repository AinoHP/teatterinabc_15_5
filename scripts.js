var image, mod, stages, video, fabric, imgc, src, source, getData;
var canvas = new fabric.Canvas('canvas');
var editorcanvas = new fabric.Canvas('editorcanvas');
var playerFirstName = "";
var playerLastName = "";
stages = 1;
imgc = new Image();
mod = false;
canvas.setWidth(640);
canvas.setHeight(480);
window.onload = function () {
    (function () {
        bLazy = new Blazy({container: '#galleriaPhoto'});
    })
    ()
};
document.getElementById('input').addEventListener("change", function (e) {
    var input = e.target;
    var reader = new FileReader();
    reader.onload = function () {
        ShowContent('canvasPreview');
        HideContent('video');
        HideContent("canvas");
        HideContentClass('canvas-container');
        canvas.clear();
        editorcanvas.clear();
        canvas.setWidth(640);
        canvas.setHeight(480);
        img = new Image();
        img.src = reader.result;
        mod = true;
        if (img.width < 1600 || img.height < 1200) {
            img.onload = function () {
                image = new fabric.Image(img);
                image.selectable = false;
                canvas.selectable = false;
                image.setWidth(640);
                image.setHeight(480);
                canvas.centerObject(image);
                canvas.add(image);
                canvas.calcOffset();
                canvas.renderAll();
                document.getElementById('canvasPreview').src = canvas.toDataURL('png');
                editorcanvas.add(image);
                editorcanvas.controlsAboveOverlay = true;
                editorcanvas.centerObject(image);
                editorcanvas.renderAll();
            };
        } else {
            alert('Kuvan resoluutio maksimissaan 1600x1200');
        }
    };
    reader.readAsDataURL(input.files[0]);
});

function Pic() {
    cameraOn();
    HideContent('canvas');
    ShowContent('video');
    HideContentClass("canvas-container");
    HideContent('canvasPreview');
    document.getElementById('canvasPreview').src = '';
}
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
function loadPic() {
    document.getElementById('input').click();
}
function takePic() {
    ShowContent('canvas');
    HideContent('video');
    ShowContentClass("canvas-container");
    HideContent('canvasPreview');
    document.getElementById('canvasPreview').src = '';
}

function toOne() {
    stages = 1;
    document.getElementById('canvasPreview').src = '';
    canvas.clear();
    editorcanvas.clear();
    mod = false;
    HideContent('canvasPreview');
    HideContentClass('canvas-container');
    HideContent('canvas');
    ShowContent('video');
    ShowContent('one');
    ShowContent('first');
    HideContent('second');
    HideContent('two');
    HideContent('third');
    HideContent('three');
    HideContent('five');
}

function showNextDresses(dressIndex)
{
	var x = document.getElementById("pasteData"); // pasteDataan laitetaan pukukuvan tiedot

	var leftArrowStr = '<a onClick="showNextDresses(' + (dressIndex-5) + ')"><img src="assets/images/arrowleft80px.jpg" /></a>';
	var rightArrowStr = '<a onClick="showNextDresses(' + (dressIndex+5) + ')"><img src="assets/images/arrowright80px.jpg" /></a>';

	var node = document.createElement("div");
                if ( dressIndex > 0 )
					node.innerHTML = leftArrowStr;
				var i;
				for ( i = dressIndex; i < dressIndex + 5; i++ )
				{
					if ( i > 0 && i < imgArr.length ) // lisää vain niin monta kuvaa, kuin on jäljellä
					{
	                   node.innerHTML += "<img class=\"photo\" name=\"" + imgArr[i] ["name"] + "\" description=\"" + imgArr[i]["description"] + "\" src=\"" + imgFolder + imgArr[i]["img"] + "\" origin=\"" + imgFolder + imgArr[i]["originImg"] + "\" firstname=\"" + imgArr[i]["firstname"] + "\" lastname=\"" + imgArr[i]["lastname"]+ "\"/>&nbsp;&nbsp;";
					}
				}
				if ( dressIndex < imgArr.length + 5 )
					node.innerHTML += rightArrowStr;
                x.innerHTML = "";
				x.appendChild(node);

	$("img.photo").click(function () {
        var source = $(this).attr("src");
        var descr = $(this).attr("description");
        var name = $(this).attr("name");
        var origin = $(this).attr("origin");
		var firstname = $(this).attr("firstname");
		var lastname = $(this).attr("lastname");
        toThree(source, descr, name, origin, firstname, lastname);
    });
}

function toTwo() {
    if (mod === true) {
        video.pause();
        stages = 2;
        ShowContent('two');
        ShowContent('second');
        HideContent('one');
        HideContent('first');
        HideContent('third');
        HideContent('three');
        HideContent('five');
        if (!getData) {
             showNextDresses(0);
         }
    } else {
        alert('Valitse kuva ensin.');
    }
}

function toThree(source, descr, name, origin, firstname, lastname) {
    ShowContent('third');
    ShowContent('three');
    HideContent('one');
    HideContent('first');
    HideContent('second');
    HideContent('two');
    HideContent('five');
    ShowContentClass("canvas-container");
    if (stages === 2) {
        fabric.Image.fromURL(source, function (imgc) {
            if (imgc.width > 700 || imgc.height > 700) {

                editorcanvas.setHeight(imgc.height * 0.7);
                editorcanvas.setWidth(imgc.width * 0.7);
            } else {
                editorcanvas.setHeight(imgc.height);
                editorcanvas.setWidth(imgc.width);
            }

            if (imgc.width > 700 || imgc.height > 700) {
                imgc.setHeight(imgc.height * 0.7);
                imgc.setWidth(imgc.width * 0.7);
            }
            editorcanvas.setOverlayImage(imgc, editorcanvas.renderAll.bind(editorcanvas));
            editorcanvas.renderAll();
        });
        document.getElementById("target2").src = origin;
        document.getElementById("pasteHere").innerHTML = descr;
        document.getElementById("pasteName").innerHTML = name;
        document.getElementById("pasteHereToo").innerHTML = name;
        image.selectable = true;
		window.actorFirstName = firstname + "";
		window.actorLastName = lastname + "";
    }
    stages = 3;
}
function toFour() {

    ShowContent('four');
    HideContent('one');
    HideContent('first');
    HideContent('second');
    HideContent('two');
    HideContent('three');
    HideContent('five');
    stages = 4;
}
function toFive() {
    if (stages == 3) {
        editorcanvas.deactivateAll().renderAll();
        var final = editorcanvas.toDataURL('png');
        var finall = document.getElementById("final");
        finall.src = final;
        document.getElementById("txt1").innerHTML =
window.playerFirstName + "-" + "Roolietunimi";
        document.getElementById("txt3").innerHTML =
window.playerLastName + "-" + "Roolisukunimi"
    }
    stages = 5;
    ShowContent('five');
    HideContent('one');
    HideContent('first');
    HideContent('second');
    HideContent('two');
    HideContent('three');

}

function cameraOn() {
    // Put video listeners into place

    navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
    if (navigator.getUserMedia) {
        navigator.getUserMedia(
            {
                video: true,
                audio: false
            },
            function (stream) {
                var url = window.URL || window.webkitURL;
                video.src = url ? url.createObjectURL(stream) : stream;
                video.play();
            },
            function (error) {
                var g = document.getElementsByClassName("info")[0].getElementsByTagName("p")[2];
                g.innerHTML = "<br><span class='warning'>Kamera ei käytössä. Tarkista kytkentä tai lataa kuva levyltä.</span>";

            }
        );
    }
    else {
        alert('Selaimesi ei tue kuvien ottamista webkameralla!');

    }
}


video = document.getElementById("video"),
    videoObj = {"video": true},
    errBack = function (error) {
        console.log("Video capture error: ", error.code);
    };
// Put event listeners into place
window.addEventListener("DOMContentLoaded", function () {
    cameraOn();
}, false);
// Trigger photo take
document.getElementById("snap").addEventListener("click", function () {
    cameraOn();
    image = new fabric.Image(video);
    canvas.clear();
    editorcanvas.clear();
    canvas.selectable = false;
    canvas.setWidth(640);
    canvas.setHeight(480);
    image.setWidth(640);
    image.setHeight(480);
    canvas.add(image);
    editorcanvas.add(image);
    video.pause();
    editorcanvas.controlsAboveOverlay = true;
    image.selectable = false;
    editorcanvas.centerObject(image);
    editorcanvas.renderAll();
    canvas.centerObject(image);
    canvas.renderAll();
    mod = true;
});

function copyName() {
     playerFirstName = document.getElementById('txt').value + "";
}
function copyLastName() {
     playerLastName = document.getElementById('txt2').value + "";
}

var i,
    elems = document.getElementsByClassName("goToFirst");

for (i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", function () {
        toOne();
    });
}

var c,
    elemsc = document.getElementsByClassName("goToSecond");

for (c = 0; c < elemsc.length; c++) {
    elemsc[c].addEventListener("click", function () {
        toTwo();
    });
}

var a,
    elemsa = document.getElementsByClassName("goToThird");

for (a = 0; a < elemsa.length; a++) {
    elemsa[a].addEventListener("click", function () {
        toThird();
    });
}

$("input[type='button']").click(function () {
    $("input[id='input']").click();
});
