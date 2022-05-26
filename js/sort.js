function sort() {

    var dexEventListener = document.querySelectorAll('#dexswitch input');
    for (var i = 0; i < dexEventListener.length; i++) {
        dexEventListener[i].addEventListener("click", dexMove);
        dexEventListener[i].addEventListener("click", dexSwitch);
    }

}

function dexMove() {

    var x = this.value

    if (x == JSONPath_Pokédex.length + 1) {
        this.nextElementSibling.style.display = "none";
        this.parentElement.firstChild.nextElementSibling.style.display = "flex";
    }
    else {
        this.nextElementSibling.style.display = "none";
        this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "flex";
    }

    dexChecker.fill(x);
}


function dexSwitch() {


    var divList = $('#pokémon-outer > div li');
    var x = dexChecker[0];


    if (x == JSONPath_Pokédex.length + 1) {
        divList.sort(function(a, b) {
            return $(a).data("national") - $(b).data("national")
        });
        $("#pokémon-outer > div ul").html(divList);
    }
    else {
        for (q = 0; q < JSONPath_Pokédex.length; q++) {
            divList.sort(function(a, b) {
                return $(a).data("regional-" + x) - $(b).data("regional-" + x)
            });
            $("#pokémon-outer > div ul").html(divList);
        }
    }

    dexCheck();
    count();
}





function dexCheck() {
    var contdiv = document.querySelectorAll('#pokémon-outer > div li');
    for (u = 0; u < contdiv.length; u++) {
        contdiv[u].style.display = "inline-block";
    }
    let contid = document.querySelectorAll('#pokémon-outer > div caption');
    for (u = 0; u < contid.length; u++) {
            contid[u].style.display = "none";
    }
    var ids = document.querySelectorAll(".pokdata-idname span");
    for (u = 0; u < ids.length; u++) {
        ids[u].style.display = "none";
    }
    var prev = document.querySelectorAll(".pokdata-previous button");
    for (u = 0; u < prev.length; u++) {
        prev[u].style.display = "none";
    }
    var nxt = document.querySelectorAll(".pokdata-next button");
    for (u = 0; u < nxt.length; u++) {
        nxt[u].style.display = "none";
    }
    /*
    var unobtainablediv = document.querySelectorAll('#pokémon-outer > div li[data-filter="Unobtainable"]');
    for (u = 0; u < unobtainablediv.length; u++) {
        unobtainablediv[u].style.display = "none";
    }
    */

    for (q = 0; q < [JSONPath_Pokédex.length + 1]; q++) {
        var p = q + 1;

        if (dexChecker == p && dexChecker != JSONPath_Pokédex.length + 1) {
            let contreg = document.querySelectorAll('.contain-regionalID-' + p);
            for (u = 0; u < contreg.length; u++) {
                contreg[u].style.display = "flex";
            }
            var contregdiv = document.querySelectorAll('#pokémon-outer > div li[data-regional-' + p + '=""]');
            for (u = 0; u < contregdiv.length; u++) {
                contregdiv[u].style.display = "none";
            }
            var regID = document.querySelectorAll(".pokdata-regionalID-" + p);
            for (u = 0; u < regID.length; u++) {
                regID[u].style.display = "unset";
            }
            var regPrevious = document.querySelectorAll(".pokdata-previous button[name='regional" + p + "']");
            for (u = 0; u < regPrevious.length; u++) {
                regPrevious[u].style.display = "flex";
            }
            var regNext = document.querySelectorAll(".pokdata-next button[name='regional" + p + "']");
            for (u = 0; u < regNext.length; u++) {
                regNext[u].style.display = "flex";
            }
        }
        else if (dexChecker == p && dexChecker == JSONPath_Pokédex.length + 1) {
            let contnat = document.querySelectorAll('.contain-nationalID');
            for (u = 0; u < contnat.length; u++) {
                contnat[u].style.display = "flex";
            }
            var natID = document.querySelectorAll(".pokdata-nationalID");
            for (u = 0; u < natID.length; u++) {
                natID[u].style.display = "unset";
            }
            var natPrevious = document.querySelectorAll(".pokdata-previous button[name='national']");
            for (u = 0; u < natPrevious.length; u++) {
                natPrevious[u].style.display = "flex";
            }
            var natNext = document.querySelectorAll(".pokdata-next button[name='national']");
            for (u = 0; u < natNext.length; u++) {
                natNext[u].style.display = "flex";
            }
        }
    }
}
