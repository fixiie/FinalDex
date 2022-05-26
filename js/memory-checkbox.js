// Avoid scoping issues by encapsulating code inside anonymous function
function memoryCheckbox(what) {

    var what;
 
    // variable to store our current state
    var cbstate;

    // bind to the onload event

    // Get the current state from localstorage
    // State is stored as a JSON string
    cbstate = JSON.parse(localStorage['CBState'] || '{}');

    // Loop through state array and restore checked 
    // state for matching elements
    

    // Get all checkboxes that you want to monitor state for
    if (what == "contain") {
        for (var i in cbstate) {
            var el = document.querySelector('#pokémon-outer > div input[name="' + i + '"]');
            if (el) el.click();
        }
        var cb = document.querySelectorAll("#pokémon-outer > div .save-cb-state");
    }
    else {
        for (var i in cbstate) {
            var el = document.querySelector('input[name="' + i + '"]');
            if (el) el.click();
        }
        var cb = document.getElementsByClassName('save-cb-state');
    }

    // Loop through results and ...
    for (var i = 0; i < cb.length; i++) {
        //bind click event handler
        cb[i].addEventListener('click', function(evt) {
            // If checkbox is checked then save to state
            if (this.checked) {
                cbstate[this.name] = true;
            }

            // Else remove from state
            else if (cbstate[this.name]) {
                delete cbstate[this.name];
            }

            // Persist state
            localStorage.CBState = JSON.stringify(cbstate);
        });
    }
    
 
}
