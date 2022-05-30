var createNav = function() {
	var navOptions = ["Pokémon", "Moves", "Abilities", "Items", "Map", "Mechanics", "Type Advantage", "Exclusives", "Tools"];
	if(Ability.length <= 0) {
		for(var q = 0; q < navOptions.length; q++) {
			if(navOptions[q].includes("Abilities")) {
				navOptions.splice(q, 1);
			}
		}
	}
	for(var q = 0; q < navOptions.length; q++) {
		var x = q + 1;
		var navigationInput = document.createElement("input");
		var navigationLabel = document.createElement("label");
		navigationInput.setAttribute("type", "radio");
		navigationInput.setAttribute("name", "navigation");
		navigationInput.setAttribute("id", "navigation-" + x);
		navigationInput.setAttribute("value", navOptions[q]);
		navigationInput.setAttribute("autocomplete", "off");
		navigationLabel.setAttribute("for", "navigation-" + x);
		navigationLabel.innerText = navOptions[q];
		document.querySelector("#navigation").appendChild(navigationInput);
		document.querySelector("#navigation").appendChild(navigationLabel);
		if(q == 0) {
			navigationInput.setAttribute("checked", "");
		}
		navigationInput.addEventListener("click", navSelector);
	}
}

function navSelector() {
    var navContents = document.querySelectorAll('#contain > div');
    var navContent = document.querySelectorAll('#contain > div[name="' + this.value + '"]');
    for(var u = 0; u < navContents.length; u++) {
        navContents[u].style.display = "none";
    }
    for(var u = 0; u < navContent.length; u++) {
        navContent[u].style.display = "block";
    }
}