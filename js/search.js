function search() {

$('#searchbar').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#contain div');

    var uncheck = document.querySelectorAll('.filterby input:checked');
    for (var i = 0; i < uncheck.length; i++) {
        uncheck[i].checked = false;
    }

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});




$('#ability-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#ability-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});

$('#move-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#move-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});

$('#item-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#item-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});

$('#map-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#map-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});



$('#map-options-search input').on('keyup', function() {
    var searchVal = $(this).val();
    var filterItems = $('#map-options label');

    if (searchVal != '') {
        filterItems.addClass('hidden');
        $('[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    } else {
        filterItems.removeClass('hidden');
    }
});






document.querySelector("#search-exit").addEventListener("click", exitSearch);

function exitSearch() {
    var search = document.getElementById("searchbar");
    search.value = "";
    $('#contain div').removeClass('hidden');
    search.focus();
}

document.querySelector("#ability-search-exit").addEventListener("click", exitAbilitySearch);

function exitAbilitySearch() {
    var search = document.getElementById("ability-search");
    search.value = "";
    $('#ability-options label').removeClass('hidden');
    search.focus();
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