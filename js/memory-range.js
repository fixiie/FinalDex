function setUpEventHandlers() {
    $(".save-ra-state").change(function() {
        localStorage[this.id] = $(this).val();
    });
}

function loadLocalStorageValues() {
    $(".save-ra-state").each(function() {
        if (typeof localStorage[this.id] !== "undefined") {
            $(this).val(localStorage[this.id]);
        }
    });
}

$(function() {
    setUpEventHandlers();
    loadLocalStorageValues();
    document.getElementById('resize').click();
});