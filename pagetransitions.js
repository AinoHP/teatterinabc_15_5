var PageTransitions = (function () {

    var $main = $('#pt-main'),
        $pages = $main.children('div.pt-page'),
        animcursor = 1,
        pagesCount = $pages.length,
        current = 0,
        isAnimating = false,
        endCurrPage = false,
        endNextPage = false,
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
    // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    // support css animations
        support = Modernizr.cssanimations;

    function init() {

        $pages.each(function () {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        $pages.eq(current).addClass('pt-page-current');
        $("#rndBtn").one('click', function () {

            if (isAnimating) {
                return false;
            }
            rnd();
            setTimeout(function () {
                slot1 = mc0.firstElementChild.childNodes[machine1.active];
                slot2 = mc1.firstElementChild.childNodes[machine2.active];
                slot3 = mc2.firstElementChild.childNodes[machine3.active];
                slot4 = mc3.firstElementChild.childNodes[machine4.active];
                slot5 = mc4.firstElementChild.childNodes[machine5.active];
                slot6 = mc5.firstElementChild.childNodes[machine6.active];
                slot7 = mc6.firstElementChild.childNodes[machine7.active];
                slot8 = mc7.firstElementChild.childNodes[machine8.active];
                document.getElementsByClassName("pt-page-1")[0].style.display = "none";
                nextPage(animcursor);
                var game = document.getElementById("gameContents");
                game.appendChild(slot1);
                game.appendChild(slot2);
                game.appendChild(slot3);
                game.appendChild(slot4);
                game.appendChild(slot5);
                game.appendChild(slot6);
                game.appendChild(slot7);
                game.appendChild(slot8);
                slot1.className = "randomizeMachineAlt";
                slot2.className = "randomizeMachineAlt";
                slot3.className = "randomizeMachineAlt";
                slot4.className = "randomizeMachineAlt";
                slot5.className = "randomizeMachineAlt";
                slot6.className = "randomizeMachineAlt";
                slot7.className = "randomizeMachineAlt";
                slot8.className = "randomizeMachineAlt";
                var imgs = document.getElementById("gameContents").getElementsByTagName("img");
                var divs = document.getElementById("gameContents").getElementsByTagName("div");
                var imgArs = [];
                for (var c = 0; c < imgs.length; c++) {
                    imgs[c].id = divs[c].id;
                    listID.push(divs[c].id);
                    imgs[c].className = "draggables";
                    imgArs[c] = imgs[c].src;
                }
                for (var f = 0; f < divs.length; f++) {
                    var node = document.createElement("IMG");
                    node.className = "bgFaded";
                    node.src = imgArs[f];
                    divs[f].appendChild(node);
                }
                $(function () {
                    $(".draggables").draggable({
                        containment: 'window',
                        opacity: "0.7",
                        scroll: true,
                        connectToSortable: '.dropBox',
                        helper: 'original',
                        cursorAt: {
                            top: 5,
                            left: 5
                        },
                        revert: 'invalid'
                    });
                    $('.dropBox').droppable({
                        accept: '.draggables',
                        hoverClass: "highlights",
                        drop: function (event, ui) {
                            $(this).attr("src", ui.draggable.attr("src"));
                            $(this).attr("id", ui.draggable.attr("id"));
                            ui.draggable.remove();
                            $(this).droppable('option', 'accept', ui.draggable);
                            $(this).droppable("destroy");
                        }
                    });
                });
                isAnimating = false;
            }, 5500);
        });

        document.getElementById("buttonD").addEventListener("click", function () {
            nextPage(animcursor);
            var answers = 0,
                i = 1,
                j = 0,
                genres = [];
                genres[0] = "Fantasia, satu",
                genres[1] = "Historiallinen",
                genres[2] = "Muut kulttuurit",
                genres[3] = "Pelkistys, tyylittely, nykyaika",
                genres[4] = "Realismi";
            for (var c = 0; c < 5; c++) {
                var
                    panel = document.getElementById("panel" + i),
                    thisIMG = panel.getElementsByTagName("IMG");
                for (var p = 0; p < thisIMG.length; p++) {
                    if (thisIMG[p].id) {

                        var currentObj = getObjects(styleArray, "id", thisIMG[p].id);
                        if (genres[j] == currentObj[0]["info"][0]["genre"]) {
                            answers++;
                        } else {
                            thisIMG[p].style.opacity = "0.4";
                        }
                    }
                }
                i++;
                j++;
            }
            nextPage(2);
            var copyN = document.getElementById("gC");
            for (var c = 2; c < 19; c += 4) {
                if (copyN.getElementsByTagName("IMG")[c].outerHTML == '<img src="assets/images/BGtxt.svg" class="dropBox ui-droppable">') {
                    copyN.getElementsByTagName("IMG")[c].src = "assets/images/blank.gif";
                }
            }
            document.getElementsByClassName("pt-page-2")[0].style.display = "none";
           document.getElementById("percentAnswer").innerHTML = (answers * 100 / 8) + "%";

            var correctPercent = answers * 100 / 8;
            document.getElementById("percentAnswer").innerHTML = correctPercent + "%";
            if ( correctPercent < 20 )
            document.getElementById("percentDescription").innerHTML = " Päättely ei suju aina yhtä hyvin, mutta älä lannistu vaan kokeile uudestaan.";
            else if ( correctPercent < 40 )
            document.getElementById("percentDescription").innerHTML = "Olet päässyt päättelyn alkuun, mutta vielä on paljon harjoiteltavaa";
            else if ( correctPercent < 60 )
            document.getElementById("percentDescription").innerHTML = "Kohtalaisen hyvä! Tarvitset kuitenkin vielä harjoitusta.";
            else if ( correctPercent < 80 )
            document.getElementById("percentDescription").innerHTML = "Melko hyvä! Tarvitset vielä jonkin verran harjoitusta.";
            else if ( correctPercent < 100 )
            document.getElementById("percentDescription").innerHTML = "Oikein hyvä! Tarvitset enää vähän harjoitusta.";
            else
            document.getElementById("percentDescription").innerHTML = "Bravo! Bravo! Sinulla on mestarillinen tyylitaju!";

            var pasteD = document.getElementById("aClower");
            pasteD.appendChild(copyN);
            var b = 0,
                tick,
                fstPlace = 0,
                secPlace = 0,
                thrPlace = 0,
                frPlace = 0,
                fthPlace = 0;

            for (var a = 0; a < listID.length; a++) {
                var currentItem = listID[a];
                var curObj = getObjects(styleArray, "id", currentItem);
                var textG = "";
                var nodeObj;
                var newP;

                if (genres[0] == curObj[0]["info"][0]["genre"]) {
                    document.getElementById("panelA1").getElementsByTagName("IMG")[fstPlace].src = imgFolder + curObj[0]["img"];
                    for (var h in curObj[0]["info"][0]) {
                        textG += h + " : " + curObj[0]["info"][0][h] + "<br>";
                        document.getElementById("panelA1").getElementsByTagName("IMG")[fstPlace].parentNode.setAttribute("href", imgFolder + curObj[0]["img"]);
                        document.getElementById("panelA1").getElementsByTagName("IMG")[fstPlace].parentNode.setAttribute("data-title", textG);
                        document.getElementById("panelA1").getElementsByTagName("IMG")[fstPlace].parentNode.setAttribute("data-lightbox", "kuvaus");
                      //  nodeObj = curObj[0]["info"][0][1] + curObj[0]["info"][0][1];
                      //  console.log(nodeObj);
                      //  newP = document.createElement("P");
                      //  newP.innerHTML = textG;
                      //  document.getElementById("infoBox").childNodes[fstPlace].appendChild(newP);

                    }
                    fstPlace++;
                }
                if (genres[1] == curObj[0]["info"][0]["genre"]) {
                    document.getElementById("panelA2").getElementsByTagName("IMG")[secPlace].src = imgFolder + curObj[0]["img"];
                    for (var h in curObj[0]["info"][0]) {
                        textG += h + " : " + curObj[0]["info"][0][h] + "<br>";
                        document.getElementById("panelA2").getElementsByTagName("IMG")[secPlace].parentNode.setAttribute("href", imgFolder + curObj[0]["img"]);
                        document.getElementById("panelA2").getElementsByTagName("IMG")[secPlace].parentNode.setAttribute("data-title", textG);
                        document.getElementById("panelA2").getElementsByTagName("IMG")[secPlace].parentNode.setAttribute("data-lightbox", "kuvaus");
                    }
                    secPlace++;
                }
                if (genres[2] == curObj[0]["info"][0]["genre"]) {
                    document.getElementById("panelA3").getElementsByTagName("IMG")[thrPlace].src = imgFolder + curObj[0]["img"];
                    for (var h in curObj[0]["info"][0]) {
                        textG += h + " : " + curObj[0]["info"][0][h] + "<br>";
                        document.getElementById("panelA3").getElementsByTagName("IMG")[thrPlace].parentNode.setAttribute("href", imgFolder + curObj[0]["img"]);
                        document.getElementById("panelA3").getElementsByTagName("IMG")[thrPlace].parentNode.setAttribute("data-title", textG);
                        document.getElementById("panelA3").getElementsByTagName("IMG")[thrPlace].parentNode.setAttribute("data-lightbox", "kuvaus");
                    }
                    thrPlace++;
                }
                if (genres[3] == curObj[0]["info"][0]["genre"]) {
                    document.getElementById("panelA4").getElementsByTagName("IMG")[frPlace].src = imgFolder + curObj[0]["img"];
                    //nodeObj = "<p>" + curObj[0]["info"][0]["Nimi"] + "</p><p> " + curObj[0]["info"][0]["Ohjaaja"] + "</p>";
                    //document.getElementById("infoBox4").childNodes[frPlace].innerHTML = nodeObj;
                    for (var h in curObj[0]["info"][0]) {
                        textG += h + " : " + curObj[0]["info"][0][h] + "<br>";
                    //}
                    document.getElementById("panelA4").getElementsByTagName("IMG")[frPlace].parentNode.setAttribute("href", imgFolder + curObj[0]["img"]);
                    document.getElementById("panelA4").getElementsByTagName("IMG")[frPlace].parentNode.setAttribute("data-title", textG);
                    document.getElementById("panelA4").getElementsByTagName("IMG")[frPlace].parentNode.setAttribute("data-lightbox", "kuvaus");
                  }
                    frPlace++;
                }
                if (genres[4] == curObj[0]["info"][0]["genre"]) {
                    document.getElementById("panelA5").getElementsByTagName("IMG")[fthPlace].src = imgFolder + curObj[0]["img"];
                    for (var h in curObj[0]["info"][0]) {
                        textG += h + " : " + curObj[0]["info"][0][h] + "<br>";
                        document.getElementById("panelA5").getElementsByTagName("IMG")[fthPlace].parentNode.setAttribute("href", imgFolder + curObj[0]["img"]);
                        document.getElementById("panelA5").getElementsByTagName("IMG")[fthPlace].parentNode.setAttribute("data-title", textG);
                        document.getElementById("panelA5").getElementsByTagName("IMG")[fthPlace].parentNode.setAttribute("data-lightbox", "kuvaus");
                    }
                    fthPlace++;
                }

            }
        });

    }

    function nextPage(animation) {

        if (isAnimating) {
            return false;
        }

        isAnimating = true;

        var $currPage = $pages.eq(current);

        if (current < pagesCount - 1) {
            ++current;
        }
        else {
            current = 0;
        }

        var $nextPage = $pages.eq(current).addClass('pt-page-current'),
            outClass = '', inClass = '';

        switch (animation) {

            case 1:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 2:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 3:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 4:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 5:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 6:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 7:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 8:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 9:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 10:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 11:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 12:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 13:
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                inClass = 'pt-page-moveFromRight';
                break;
            case 14:
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 15:
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 16:
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                inClass = 'pt-page-moveFromTop';
                break;
            case 17:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 18:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 19:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 20:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 21:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-scaleUpDown pt-page-delay300';
                break;
            case 22:
                outClass = 'pt-page-scaleDownUp';
                inClass = 'pt-page-scaleUp pt-page-delay300';
                break;
            case 23:
                outClass = 'pt-page-moveToLeft pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 24:
                outClass = 'pt-page-moveToRight pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 25:
                outClass = 'pt-page-moveToTop pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 26:
                outClass = 'pt-page-moveToBottom pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 27:
                outClass = 'pt-page-scaleDownCenter';
                inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                break;
            case 28:
                outClass = 'pt-page-rotateRightSideFirst';
                inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                break;
            case 29:
                outClass = 'pt-page-rotateLeftSideFirst';
                inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                break;
            case 30:
                outClass = 'pt-page-rotateTopSideFirst';
                inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                break;
            case 31:
                outClass = 'pt-page-rotateBottomSideFirst';
                inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                break;
            case 32:
                outClass = 'pt-page-flipOutRight';
                inClass = 'pt-page-flipInLeft pt-page-delay500';
                break;
            case 33:
                outClass = 'pt-page-flipOutLeft';
                inClass = 'pt-page-flipInRight pt-page-delay500';
                break;
            case 34:
                outClass = 'pt-page-flipOutTop';
                inClass = 'pt-page-flipInBottom pt-page-delay500';
                break;
            case 35:
                outClass = 'pt-page-flipOutBottom';
                inClass = 'pt-page-flipInTop pt-page-delay500';
                break;
            case 36:
                outClass = 'pt-page-rotateFall pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 37:
                outClass = 'pt-page-rotateOutNewspaper';
                inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                break;
            case 38:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 39:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 40:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 41:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 42:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-rotatePullRight pt-page-delay180';
                break;
            case 43:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                break;
            case 44:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                break;
            case 45:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-rotatePullTop pt-page-delay180';
                break;
            case 46:
                outClass = 'pt-page-rotateFoldLeft';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 47:
                outClass = 'pt-page-rotateFoldRight';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 48:
                outClass = 'pt-page-rotateFoldTop';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 49:
                outClass = 'pt-page-rotateFoldBottom';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 50:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-rotateUnfoldLeft';
                break;
            case 51:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-rotateUnfoldRight';
                break;
            case 52:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-rotateUnfoldTop';
                break;
            case 53:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-rotateUnfoldBottom';
                break;
            case 54:
                outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomLeftIn';
                break;
            case 55:
                outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomRightIn';
                break;
            case 56:
                outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomTopIn';
                break;
            case 57:
                outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomBottomIn';
                break;
            case 58:
                outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeLeftIn';
                break;
            case 59:
                outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeRightIn';
                break;
            case 60:
                outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeTopIn';
                break;
            case 61:
                outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeBottomIn';
                break;
            case 62:
                outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselLeftIn';
                break;
            case 63:
                outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselRightIn';
                break;
            case 64:
                outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselTopIn';
                break;
            case 65:
                outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselBottomIn';
                break;
            case 66:
                outClass = 'pt-page-rotateSidesOut';
                inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                break;
            case 67:
                outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
                break;

        }

        $currPage.addClass(outClass).on(animEndEventName, function () {
            $currPage.off(animEndEventName);
            endCurrPage = true;
            if (endNextPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });

        $nextPage.addClass(inClass).on(animEndEventName, function () {
            $nextPage.off(animEndEventName);
            endNextPage = true;
            if (endCurrPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });

        if (!support) {
            onEndAnimation($currPage, $nextPage);
        }

    }

    function onEndAnimation($outpage, $inpage) {
        endCurrPage = false;
        endNextPage = false;
        resetPage($outpage, $inpage);
        isAnimating = false;
    }

    function resetPage($outpage, $inpage) {
        $outpage.attr('class', $outpage.data('originalClassList'));
        $inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
    }

    init();

    return {init: init};

})();
