var createNav = function() {




var navOptions = ["Pokémon","Moves","Abilities","Items","Map","Type Advantage","Exclusives","Tools"];

if (Ability.length <= 0) {
    for (var q = 0; q < navOptions.length; q++) {
        if (navOptions[q].includes("Abilities")) {
            navOptions.splice(q,1);
        }
    }
}



for (var q = 0; q < navOptions.length; q++) {
    var x = q + 1;
    var gamedataNavigationInput = document.createElement("input");
    var gamedataNavigationLabel = document.createElement("label");
    gamedataNavigationInput.setAttribute("type","radio");
    gamedataNavigationInput.setAttribute("name","gamedata-navigation");
    gamedataNavigationInput.setAttribute("id","gamedata-navigation-" + x);
    gamedataNavigationInput.setAttribute("value",navOptions[q]);
    gamedataNavigationInput.setAttribute("autocomplete","off");
    gamedataNavigationLabel.setAttribute("for","gamedata-navigation-" + x);
    gamedataNavigationLabel.innerText = navOptions[q];
    document.querySelector("#navigation").appendChild(gamedataNavigationInput);
    document.querySelector("#navigation").appendChild(gamedataNavigationLabel);

    if (q == 0) {
        gamedataNavigationInput.setAttribute("checked","");
    }

    
    gamedataNavigationInput.addEventListener("click", gamedataNavSelector);
}





function gamedataNavSelector() {
    var gamedataDivs = document.querySelectorAll('.gamedata-contentdiv');
    var gamedataDiv = document.querySelectorAll('.gamedata-contentdiv[name="' + this.value + '"]');

    for (var u = 0; u < gamedataDivs.length; u++) {
        gamedataDivs[u].style.display = "none";
    }
    for (var u = 0; u < gamedataDiv.length; u++) {
        gamedataDiv[u].style.display = "block";
    }
}














}