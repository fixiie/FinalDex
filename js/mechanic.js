var createMechanic = function() {
	var mechanicOuter = document.createElement("div");
	var mechanicAside1 = document.createElement("aside");
	var mechanicAside1OptionsTitleOuter = document.createElement("div");
	var mechanicAside1OptionsTitle = document.createElement("h2");
	var mechanicAside1OptionsSub = document.createElement("div");
	var mechanicAside2 = document.createElement("aside");
	var mechanicAside2Title = document.createElement("h1");
	var mechanicAside3 = document.createElement("aside");
	var mechanicAside3Content = document.createElement("div");
	var mechanicAside4 = document.createElement("aside");
	var mechanicAside4Icon = document.createElement("div");
	var mechanicAside4IconImage = document.createElement("img");
	mechanicOuter.setAttribute("id", "mechanic-outer");
	mechanicOuter.setAttribute("name", "Mechanics");
	mechanicAside1.setAttribute("id", "mechanic-aside1");
	mechanicAside1OptionsTitleOuter.setAttribute("id", "mechanic-options-title");
	mechanicAside1OptionsTitle.innerText = "Mechanics";
	mechanicAside1OptionsSub.classList.add("mechanic-options-sub");
	var mechanicSub = ["Mechanics", "Features"];
	for(var u = 0; u < mechanicSub.length; u++) {
		var x = u + 1;
		var mechanicAside1OptionsSubInput = document.createElement("input");
		var mechanicAside1OptionsSubLabel = document.createElement("label");
		mechanicAside1OptionsSubInput.setAttribute("type", "radio");
		mechanicAside1OptionsSubInput.setAttribute("id", "mechanic-options-sub-selector-" + x);
		mechanicAside1OptionsSubInput.setAttribute("name", "mechanic-options-sub-selector");
		mechanicAside1OptionsSubInput.setAttribute("autocomplete", "off");
		mechanicAside1OptionsSubInput.setAttribute("value", u);
		mechanicAside1OptionsSubLabel.setAttribute("for", "mechanic-options-sub-selector-" + x);
		mechanicAside1OptionsSubLabel.innerText = mechanicSub[u];
		if(u == 0) {
			mechanicAside1OptionsSubInput.setAttribute("checked", "");
		}
		mechanicAside1OptionsSub.appendChild(mechanicAside1OptionsSubInput);
		mechanicAside1OptionsSub.appendChild(mechanicAside1OptionsSubLabel);
		mechanicAside1OptionsSubInput.addEventListener("click", mechanicSubOptionsSelector);

		function mechanicSubOptionsSelector() {
			var mechanicOptionsOuters = document.querySelectorAll("#mechanic-options-outer[name]");
			var mechanicOptionsOuter = document.querySelectorAll('#mechanic-options-outer[name="' + this.value + '"]');
			mechanicAside1OptionsTitle.innerText = mechanicSub[this.value];
			for(var y = 0; y < mechanicOptionsOuters.length; y++) {
				mechanicOptionsOuters[y].style.display = "none";
			}
			for(var y = 0; y < mechanicOptionsOuter.length; y++) {
				mechanicOptionsOuter[y].style.display = "block";
			}
		}
	}
	mechanicAside2.setAttribute("id", "mechanic-aside2");
	mechanicAside2Title.setAttribute("id", "mechanic-title");
	mechanicAside3.setAttribute("id", "mechanic-aside3");
	mechanicAside3Content.setAttribute("id", "mechanic-content");
	mechanicAside3Content.classList.add("scroll");
	mechanicAside4.setAttribute("id", "mechanic-aside4");
	mechanicAside4Icon.classList.add("mechanic-descriptionicon");
	mechanicAside4IconImage.src = "";
	mechanicAside4IconImage.setAttribute("id", "mechanic-descriptioniconimg");
	mechanicAside4IconImage.setAttribute("onerror", "this.src='./media/Images/Misc/FinalDex/Catching.png'");
	document.querySelector("#contain").appendChild(mechanicOuter);
	mechanicOuter.appendChild(mechanicAside1);
	mechanicAside1.appendChild(mechanicAside1OptionsTitleOuter);
	mechanicAside1OptionsTitleOuter.appendChild(mechanicAside1OptionsTitle);
	mechanicAside1.appendChild(mechanicAside1OptionsSub);
	mechanicOuter.appendChild(mechanicAside2);
	mechanicAside2.appendChild(mechanicAside2Title);
	mechanicOuter.appendChild(mechanicAside3);
	mechanicAside3.appendChild(mechanicAside3Content);
	mechanicOuter.appendChild(mechanicAside4);
	mechanicAside4.appendChild(mechanicAside4Icon);
	mechanicAside4Icon.appendChild(mechanicAside4IconImage);

    var mechanicAside2Game = document.createElement("span");
    var mechanicAside2GameImage = document.createElement("img");
    mechanicAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    mechanicAside2GameImage.setAttribute("onerror","this.display='none'");
    mechanicAside2.appendChild(mechanicAside2Game);
    mechanicAside2Game.appendChild(mechanicAside2GameImage);


	for(var i = 0; i < mechanicOptionsTitle.length; i++) {
		var mechanicAside1OptionsOuter = document.createElement("div");
		var mechanicAside1Options = document.createElement("div");
		mechanicAside1OptionsOuter.setAttribute("id", "mechanic-options-outer");
		mechanicAside1OptionsOuter.classList.add("scroll");
		mechanicAside1OptionsOuter.setAttribute("name", i);
		mechanicAside1Options.setAttribute("id", "mechanic-options");
		mechanicAside1.appendChild(mechanicAside1OptionsOuter);
		mechanicAside1OptionsOuter.appendChild(mechanicAside1Options);
		for(var q = 0; q < mechanicOptionsTitle[i].length; q++) {
			var mechanicAside1OptionsInput = document.createElement("input");
			var mechanicAside1OptionsLabel = document.createElement("label");
			mechanicAside1OptionsInput.setAttribute("type", "radio");
			mechanicAside1OptionsInput.setAttribute("name", "mechanic-options");
			mechanicAside1OptionsInput.setAttribute("id", "mechanic-options-" + i + "-" + q);
			mechanicAside1OptionsInput.setAttribute("autocomplete", "off");
			mechanicAside1OptionsInput.value = q;
			mechanicAside1OptionsInput.alt = i;
			mechanicAside1OptionsLabel.setAttribute("for", "mechanic-options-" + i + "-" + q);
			mechanicAside1OptionsLabel.setAttribute("name", "large");
			mechanicAside1OptionsLabel.innerText = mechanicOptionsTitle[i][q];
			mechanicAside1Options.appendChild(mechanicAside1OptionsInput);
			mechanicAside1Options.appendChild(mechanicAside1OptionsLabel);
			mechanicAside1OptionsInput.addEventListener("click", mechanicOptionsSelector);

			function mechanicOptionsSelector() {
				mechanicAside2Title.innerText = mechanicOptionsTitle[this.alt][this.value];
				mechanicAside3Content.innerHTML = mechanicOptions[this.alt][this.value];
				mechanicAside4IconImage.src = "./media/Images/Misc/FinalDex/" + mechanicOptionsTitle[this.alt][this.value] + ".png";
				mechanicAside4IconImage.style.display = "unset";
			}
			if(i == 0 && q == 0) {
				mechanicAside1OptionsLabel.click();
			}
		}
	}
};