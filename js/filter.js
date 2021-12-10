function filter() {

var $filterCheckboxes = $('.filterby input');
var filterFunc = function() {

    document.getElementById("searchbar").value = "";

    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

        if (!selectedFilters.hasOwnProperty(this.name)) {
            selectedFilters[this.name] = [];
        }

        selectedFilters[this.name].push(this.value);
    });

    var $filteredResults = $('#contain-inner div');

    $.each(selectedFilters, function(name, filterValues) {

        $filteredResults = $filteredResults.filter(function() {

            var matched = false,
                currentFilterValues = $(this).data('filter').split(' ');

            $.each(currentFilterValues, function(_, currentFilterValue) {


                if ($.inArray(currentFilterValue, filterValues) != -1) {
                    matched = true;
                    return false;
                }
            });

            return matched;

        });
    });

    $('#contain-inner div').addClass('hidden').filter($filteredResults).removeClass('hidden');
}

$filterCheckboxes.on('change', filterFunc);

}

function showAll() {

    var search = document.getElementById("searchbar");

    if (search.value == "") {

        var uncheck = document.querySelectorAll('.filterby input:checked');
        for (var i = 0; i < uncheck.length; i++) {
            uncheck[i].checked = false;
        }
        $('#contain-inner div').removeClass('hidden');

    }
    else {
        search.value = "";
        $('#contain-inner div').removeClass('hidden')
    }

}
