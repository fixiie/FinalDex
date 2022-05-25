function search() {

$('#searchbar').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#contain div > div');
    this.style.color = "var(--fontDark)";
    
    var uncheck = document.querySelectorAll('.filterby input:checked');
    for (var i = 0; i < uncheck.length; i++) {
        uncheck[i].checked = false;
    }

    var searchoptions = ["evolution::","evolution:!","type::","type:!","ability::","ability:!","catchrate::","catchrate:!","catchrate:>","catchrate:<","eggcycle::","eggcycle:!","eggcycle:>","eggcycle:<","genderratio::","genderratio:!","egggroup::","egggroup:!","expyield::","expyield:!","expyield:>","expyield:<","expyieldcategory::","expyieldcategory:!","levelrate::","levelrate:!","levelrate:>","levelrate:<","helditem::","helditem:!","statshp::","statshp:!","statshp:>","statshp:<","statsatk::","statsatk:!","statsatk:>","statsatk:<","statsdef::","statsdef:!","statsdef:>","statsdef:<","statsspatk::","statsspatk:!","statsspatk:>","statsspatk:<","statsspdef::","statsspdef:!","statsspdef:>","statsspdef:<","statsspeed::","statsspeed:!","statsspeed:>","statsspeed:<","statstotal::","statstotal:!","statstotal:>","statstotal:<","evyieldhp::","evyieldhp:!","evyieldhp:>","evyieldhp:<","evyieldatk::","evyieldatk:!","evyieldatk:>","evyieldatk:<","evyielddef::","evyielddef:!","evyielddef:>","evyielddef:<","evyieldspatk::","evyieldspatk:!","evyieldspatk:>","evyieldspatk:<","evyieldspdef::","evyieldspdef:!","evyieldspdef:>","evyieldspdef:<","evyieldspeed::","evyieldspeed:!","evyieldspeed:>","evyieldspeed:<","evyieldtotal::","evyieldtotal:!","evyieldtotal:>","evyieldtotal:<","variant::","variant:!"];
    
    if (Generation <= 2 || GameID == 31 || GameID == 32) {
        searchoptions = searchoptions.filter(item => !item.includes("ability"));
    }

    var searchspec;

    for (var i = 0; i < searchoptions.length; i++) {
        if (searchVal.includes(searchoptions[i])) {
            searchspec = searchoptions[i];
        }
    }


    if (searchVal.toLowerCase().includes("::") && searchVal.toLowerCase().includes(searchspec)) {
        filterItems.addClass('hidden');

        if (searchspec.includes("stats") || searchspec.includes("evyield") || searchspec.includes("catchrate") || searchspec.includes("eggcycle") || searchspec.includes("expyield") || searchspec.includes("levelrate")) {
            $('#contain div > div[data-search-' + searchspec.split("::")[0].toLowerCase() + '="' + searchVal.split("::")[1].toLowerCase() + '"]').removeClass('hidden');
        }
        else {
            $('#contain div > div[data-search-' + searchspec.split("::")[0].toLowerCase() + '*="' + searchVal.split("::")[1].toLowerCase() + '"]').removeClass('hidden');
        }

        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes(":!") && searchVal.toLowerCase().includes(searchspec)) {
        filterItems.addClass('hidden');

        if (searchspec.includes("stats") || searchspec.includes("evyield") || searchspec.includes("catchrate") || searchspec.includes("eggcycle") || searchspec.includes("expyield") || searchspec.includes("levelrate")) {
            $('#contain div > div:not([data-search-' + searchspec.split(":!")[0].toLowerCase() + '="' + searchVal.split(":!")[1].toLowerCase() + '"])').removeClass('hidden');
        }
        else {
            $('#contain div > div:not([data-search-' + searchspec.split(":!")[0].toLowerCase() + '*="' + searchVal.split(":!")[1].toLowerCase() + '"])').removeClass('hidden');
        }

        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes(":>") && searchVal.toLowerCase().includes(searchspec)) {
        for (var q = 0; q < filterItems.length; q++) {
            filterItems[q].classList.add("hidden");
            if (parseInt(filterItems[q].getAttribute("data-search-"+searchspec.split(":>")[0])) >= parseInt(searchVal.toLowerCase().split(searchspec)[1])) {
                filterItems[q].classList.remove('hidden');
            }
        }

        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes(":<") && searchVal.toLowerCase().includes(searchspec)) {
        for (var q = 0; q < filterItems.length; q++) {
            filterItems[q].classList.add("hidden");
            if (parseInt(filterItems[q].getAttribute("data-search-"+searchspec.split(":<")[0])) <= parseInt(searchVal.toLowerCase().split(searchspec)[1])) {
                filterItems[q].classList.remove('hidden');
            }
        }

        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase() != '') {
        filterItems.addClass('hidden');
        $('#contain div > div[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } 
    else {
        filterItems.removeClass('hidden');
    }



    count();
});



if (Ability.length >= 1) {
    $('#ability-options-search input').on('keyup', function() {
        var searchVal = $(this).val();
        var filterItems = $('#ability-options label');

        if (searchVal != '') {
            filterItems.addClass('hidden');
            $('#ability-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
        } else {
            filterItems.removeClass('hidden');
        }
    });
}

$('#move-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#move-options label');
    this.style.color = "var(--fontDark)";

    if (searchVal.toLowerCase().includes('type::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-type*="' + searchVal.toLowerCase().split("type::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('category::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-category*="' + searchVal.toLowerCase().split("category::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('pp::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-pp="' + searchVal.toLowerCase().split("pp::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('power::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-power="' + searchVal.toLowerCase().split("power::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('accuracy::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-accuracy="' + searchVal.toLowerCase().split("accuracy::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('contact::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-contact*="' + searchVal.toLowerCase().split("contact::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('tutor::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-tutor="' + searchVal.toLowerCase().split("tutor::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('machine::')) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-machine*="' + searchVal.toLowerCase().split("machine::")[1].replaceAll(" ","") + '"]').removeClass('hidden');
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('pp:>')) {
        for (var i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("hidden");
            if (parseInt(filterItems[i].getAttribute("data-search-pp")) >= parseInt(searchVal.toLowerCase().split("pp:>")[1].replaceAll(" ",""))) {
                filterItems[i].classList.remove('hidden');
            }
        }
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('pp:<')) {
        for (var i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("hidden");
            if (parseInt(filterItems[i].getAttribute("data-search-pp")) <= parseInt(searchVal.toLowerCase().split("pp:<")[1].replaceAll(" ",""))) {
                filterItems[i].classList.remove('hidden');
            }
        }
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('power:>')) {
        for (var i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("hidden");
            if (parseInt(filterItems[i].getAttribute("data-search-power")) >= parseInt(searchVal.toLowerCase().split("power:>")[1].replaceAll(" ",""))) {
                filterItems[i].classList.remove('hidden');
            }
        }
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('power:<')) {
        for (var i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("hidden");
            if (parseInt(filterItems[i].getAttribute("data-search-power")) <= parseInt(searchVal.toLowerCase().split("power:<")[1].replaceAll(" ",""))) {
                filterItems[i].classList.remove('hidden');
            }
        }
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('accuracy:>')) {
        for (var i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("hidden");
            if (parseInt(filterItems[i].getAttribute("data-search-accuracy").replaceAll("%","")) >= parseInt(searchVal.toLowerCase().split("accuracy:>")[1].replaceAll(" ",""))) {
                filterItems[i].classList.remove('hidden');
            }
        }
        this.style.color = "var(--colorRed)";
    }
    else if (searchVal.toLowerCase().includes('accuracy:<')) {
        for (var i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("hidden");
            if (parseInt(filterItems[i].getAttribute("data-search-accuracy").replaceAll("%","")) <= parseInt(searchVal.toLowerCase().split("accuracy:<")[1].replaceAll(" ",""))) {
                filterItems[i].classList.remove('hidden');
            }
        }
        this.style.color = "var(--colorRed)";
    }

    else if (!searchVal == '' && !searchVal.toLowerCase().includes("::")) {
        filterItems.addClass('hidden');
        $('#move-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } 
    else {
        filterItems.removeClass('hidden');
    }
});

$('#item-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#item-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('#item-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});

$('#map-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#map-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('#map-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});



$('#map-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#map-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('#map-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});






document.querySelector("#search-exit").addEventListener("click", exitSearch);

function exitSearch() {
    var filters = document.querySelectorAll('.filterby input:checked');
    var search = document.getElementById("searchbar");

    if (filters.length == 0) {
        search.value = "";
        $('#contain-inner div').removeClass('hidden');
        search.focus();
        count();
    }
}

if (Ability.length >= 1) {
document.querySelector("#ability-search-exit").addEventListener("click", exitAbilitySearch);

function exitAbilitySearch() {
    var search = document.getElementById("ability-search");
    search.value = "";
    $('#ability-options label').removeClass('hidden');
    search.focus();
}
}

document.querySelector("#move-search-exit").addEventListener("click", exitMoveSearch);

function exitMoveSearch() {
    var search = document.getElementById("move-search");
    search.value = "";
    $('#move-options label').removeClass('hidden');
    search.focus();
}

document.querySelector("#item-search-exit").addEventListener("click", exitItemSearch);

function exitItemSearch() {
    var search = document.getElementById("item-search");
    search.value = "";
    $('#item-options label').removeClass('hidden');
    search.focus();
}


document.querySelector("#map-search-exit").addEventListener("click", exitMapSearch);

function exitMapSearch() {
    var search = document.getElementById("map-search");
    search.value = "";
    $('#map-options label').removeClass('hidden');
    search.focus();
}

}