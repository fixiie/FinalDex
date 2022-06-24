var createNav = function() {
	var navOptions = ["Pokémon","Moves","Abilities","Items","Map","Mechanics","Type Advantage","Tools"];
	if(Ability.length <= 0) {
		for(var q = 0; q < navOptions.length; q++) {
			if(navOptions[q].includes("Abilities")) {
				navOptions.splice(q, 1);
			}
		}
	}

	for(var q = 0; q < navOptions.length; q++) {
		if(navOptions[q].includes("Mechanics")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
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
		navigationInput.addEventListener("change", navSelector);
	}

	var fullscreenButtonLeft = document.createElement("button");
	var fullscreenButtonLeftText = document.createElement("p");
	var fullscreenOverlay = document.createElement("span");
	var fullscreenDiv = document.createElement("div");
	var fullscreenUl = document.createElement("ul");
	var fullscreenButtonRight = document.createElement("button");
	var fullscreenButtonRightText = document.createElement("p");
	fullscreenButtonLeftText.innerText = "«";
	fullscreenButtonRightText.innerText = "»";
	fullscreenButtonLeftText.value = 0;
	fullscreenButtonRightText.value = 0;
	var fullscreen = document.querySelector("#fullscreen");
    fullscreen.setAttribute("tabindex","0");
	fullscreen.appendChild(fullscreenButtonLeft);
	fullscreenButtonLeft.appendChild(fullscreenButtonLeftText);
	fullscreen.appendChild(fullscreenOverlay);
	fullscreen.appendChild(fullscreenDiv);
	fullscreenDiv.appendChild(fullscreenUl);
	fullscreen.appendChild(fullscreenButtonRight);
	fullscreenButtonRight.appendChild(fullscreenButtonRightText);


	fullscreen.addEventListener("keyup",function(event){if(event.which === 37){fullscreenMove(fullscreenButtonLeftText)}else if(event.which === 39){fullscreenMove(fullscreenButtonRightText)}});
	fullscreen.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(!delta.includes("-")){fullscreenMove(fullscreenButtonLeftText)}else if(delta.includes("-")){fullscreenMove(fullscreenButtonRightText)}});

	fullscreenOverlay.addEventListener("click",exitFullscreen);
	fullscreenButtonLeftText.addEventListener("click",fullscreenMove);
	fullscreenButtonRightText.addEventListener("click",fullscreenMove);
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