var createExclusive = function() {
	var exclusiveOuter = document.createElement("div");
	var exclusiveAside1 = document.createElement("aside");
	var exclusiveAside1OptionsTitleOuter = document.createElement("div");
	var exclusiveAside1OptionsTitle = document.createElement("h2");
	var exclusiveAside1OptionsOuter = document.createElement("div");
	var exclusiveAside1Options = document.createElement("div");
	var exclusiveAside2 = document.createElement("aside");
	var exclusiveAside2Title = document.createElement("h1");
	var exclusiveAside3 = document.createElement("aside");
	var exclusiveAside3PokOuter = document.createElement("div");
	var exclusiveAside3ItemOuter = document.createElement("div");
	var exclusiveAside3FeatureOuter = document.createElement("div");
	exclusiveOuter.setAttribute("id", "exclusive-outer");
	exclusiveOuter.setAttribute("name", "Exclusives");
	exclusiveAside1.setAttribute("id", "exclusive-aside1");
	exclusiveAside1OptionsTitleOuter.setAttribute("id", "exclusive-options-title");
	exclusiveAside1OptionsTitle.innerText = "Version Exclusive";
	exclusiveAside1OptionsOuter.setAttribute("id", "exclusive-options-outer");
	exclusiveAside1OptionsOuter.classList.add("scroll");
	exclusiveAside1Options.setAttribute("id", "exclusive-options");
	exclusiveAside2.setAttribute("id", "exclusive-aside2");
	exclusiveAside2Title.innerText = "Exclusive Pokémon";
	exclusiveAside3.setAttribute("id", "exclusive-aside3");
	exclusiveAside3PokOuter.classList.add("exclusive-content-outer");
	exclusiveAside3PokOuter.setAttribute("name", "0");
	exclusiveAside3ItemOuter.classList.add("exclusive-content-outer");
	exclusiveAside3ItemOuter.setAttribute("name", "1");
	exclusiveAside3FeatureOuter.classList.add("exclusive-content-outer");
	exclusiveAside3FeatureOuter.setAttribute("name", "2");
	document.querySelector("#contain").appendChild(exclusiveOuter);
	exclusiveOuter.appendChild(exclusiveAside1);
	exclusiveAside1.appendChild(exclusiveAside1OptionsTitleOuter);
	exclusiveAside1OptionsTitleOuter.appendChild(exclusiveAside1OptionsTitle);
	exclusiveAside1.appendChild(exclusiveAside1OptionsOuter);
	exclusiveAside1OptionsOuter.appendChild(exclusiveAside1Options);
	exclusiveOuter.appendChild(exclusiveAside2);
	exclusiveAside2.appendChild(exclusiveAside2Title);
	exclusiveOuter.appendChild(exclusiveAside3);
	exclusiveAside3.appendChild(exclusiveAside3PokOuter);
	exclusiveAside3.appendChild(exclusiveAside3ItemOuter);
	exclusiveAside3.appendChild(exclusiveAside3FeatureOuter);

    var exclusiveAside2Game = document.createElement("span");
    var exclusiveAside2GameImage = document.createElement("img");
    exclusiveAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    exclusiveAside2GameImage.setAttribute("onerror","this.display='none'");
    exclusiveAside2.appendChild(exclusiveAside2Game);
    exclusiveAside2Game.appendChild(exclusiveAside2GameImage);

	var exclusiveOptions = [];
	var ExclusivePokémonExist = "";
	for(var i = 0; i < JSONPath_ExclusivePokémon.length; i++) {
		for(var q = 0; q < finaldataExclusivePokémon.length; q++) {
			if(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]] != undefined) {
				ExclusivePokémonExist += "true";
			}
		}
	}
	if(ExclusivePokémonExist.includes("true")) {
		exclusiveOptions.push("Pokémon");
		for(var i = 0; i < JSONPath_ExclusivePokémon.length; i++) {
			var exclusiveAside3Pok = document.createElement("div");
			var exclusiveAside3PokTitle = document.createElement("div");
			var exclusiveAside3PokTitleImg = document.createElement("img");
			var exclusiveAside3PokContent = document.createElement("ul");
			exclusiveAside3Pok.classList.add("exclusive-pok");
			exclusiveAside3PokTitle.classList.add("exclusive-pok-title");
			exclusiveAside3PokTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusivePokémon[i]).replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
			exclusiveAside3PokTitleImg.title = "Pokémon Exclusive to " + getFullGameName(JSONPath_ExclusivePokémon[i]);
			exclusiveAside3PokContent.classList.add("exclusive-pok-content");
			exclusiveAside3PokContent.classList.add("scroll");
			exclusiveAside3PokOuter.appendChild(exclusiveAside3Pok);
			exclusiveAside3Pok.appendChild(exclusiveAside3PokTitle);
			exclusiveAside3PokTitle.appendChild(exclusiveAside3PokTitleImg);
			exclusiveAside3Pok.appendChild(exclusiveAside3PokContent);
			for(var q = 0; q < finaldataExclusivePokémon.length; q++) {
				if(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]] != undefined) {
					var Exclusive = document.createElement("li");
					var ExclusiveImg = document.createElement("img");
					ExclusiveImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]]) + ".png";
					ExclusiveImg.setAttribute("title", finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]]);
					ExclusiveImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					exclusiveAside3PokContent.appendChild(Exclusive);
					Exclusive.appendChild(ExclusiveImg);
				}
			}
		}
	}
	var ExclusiveItemExist = "";
	for(var i = 0; i < JSONPath_ExclusiveItem.length; i++) {
		for(var q = 0; q < finaldataExclusiveItem.length; q++) {
			if(finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] != undefined) {
				ExclusiveItemExist += "true";
			}
		}
	}
	if(ExclusiveItemExist.includes("true")) {
		exclusiveOptions.push("Items");
		for(var i = 0; i < JSONPath_ExclusiveItem.length; i++) {
			var exclusiveAside3Item = document.createElement("div");
			var exclusiveAside3ItemTitle = document.createElement("div");
			var exclusiveAside3ItemTitleImg = document.createElement("img");
			var exclusiveAside3ItemContent = document.createElement("ul");
			exclusiveAside3Item.classList.add("exclusive-item");
			exclusiveAside3ItemTitle.classList.add("exclusive-item-title");
			exclusiveAside3ItemTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusiveItem[i]).replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
			exclusiveAside3ItemTitleImg.title = "Items exclusive to " + getFullGameName(JSONPath_ExclusiveItem[i]);
			exclusiveAside3ItemContent.classList.add("exclusive-item-content");
			exclusiveAside3ItemContent.classList.add("scroll");
			exclusiveAside3ItemOuter.appendChild(exclusiveAside3Item);
			exclusiveAside3Item.appendChild(exclusiveAside3ItemTitle);
			exclusiveAside3ItemTitle.appendChild(exclusiveAside3ItemTitleImg);
			exclusiveAside3Item.appendChild(exclusiveAside3ItemContent);
			for(var q = 0; q < finaldataExclusiveItem.length; q++) {
				if(finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] != undefined) {
					var Exclusive = document.createElement("li");
					var ExclusiveImg = document.createElement("img");
					ExclusiveImg.src = "./media/Images/Item/Bag/" + MEDIAPath_ExclusiveItem[i] + "/" + finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] + ".png";
					ExclusiveImg.setAttribute("title", finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]]);
					ExclusiveImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					exclusiveAside3ItemContent.appendChild(Exclusive);
					Exclusive.appendChild(ExclusiveImg);
				}
			}
		}
	}
	var ExclusiveFeatureExist = "";
	for(var i = 0; i < JSONPath_ExclusiveFeature.length; i++) {
		for(var q = 0; q < finaldataExclusiveFeature.length; q++) {
			if(finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]] != undefined) {
				ExclusiveFeatureExist += "true";
			}
		}
	}
	if(ExclusiveFeatureExist.includes("true")) {
		exclusiveOptions.push("Features");
		for(var i = 0; i < JSONPath_ExclusiveFeature.length; i++) {
			var exclusiveAside3Feature = document.createElement("div");
			var exclusiveAside3FeatureTitle = document.createElement("div");
			var exclusiveAside3FeatureTitleImg = document.createElement("img");
			var exclusiveAside3FeatureContent = document.createElement("ul");
			exclusiveAside3Feature.classList.add("exclusive-feature");
			exclusiveAside3FeatureTitle.classList.add("exclusive-feature-title");
			exclusiveAside3FeatureTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusiveFeature[i]).replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
			exclusiveAside3FeatureTitleImg.title = "Features exclusive to " + getFullGameName(JSONPath_ExclusiveFeature[i]);
			exclusiveAside3FeatureContent.classList.add("exclusive-feature-content");
			exclusiveAside3FeatureContent.classList.add("scroll");
			exclusiveAside3FeatureOuter.appendChild(exclusiveAside3Feature);
			exclusiveAside3Feature.appendChild(exclusiveAside3FeatureTitle);
			exclusiveAside3FeatureTitle.appendChild(exclusiveAside3FeatureTitleImg);
			exclusiveAside3Feature.appendChild(exclusiveAside3FeatureContent);
			for(var q = 0; q < finaldataExclusiveFeature.length; q++) {
				if(finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]] != undefined) {
					var Exclusive = document.createElement("li");
					Exclusive.innerText = finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]];
					Exclusive.setAttribute("title", finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]]);
					exclusiveAside3FeatureContent.appendChild(Exclusive);
				}
			}
		}
	}
	for(var q = 0; q < exclusiveOptions.length; q++) {
		var exclusiveAside1OptionsInput = document.createElement("input");
		var exclusiveAside1OptionsLabel = document.createElement("label");
		exclusiveAside1OptionsInput.setAttribute("type", "radio");
		exclusiveAside1OptionsInput.setAttribute("name", "exclusive-options");
		exclusiveAside1OptionsInput.setAttribute("id", "exclusive-options-" + q);
		exclusiveAside1OptionsInput.setAttribute("autocomplete", "off");
		exclusiveAside1OptionsInput.value = q;
		exclusiveAside1OptionsLabel.setAttribute("for", "exclusive-options-" + q);
		exclusiveAside1OptionsLabel.setAttribute("name", "large");
		exclusiveAside1OptionsLabel.innerText = exclusiveOptions[q];
		exclusiveAside1Options.appendChild(exclusiveAside1OptionsInput);
		exclusiveAside1Options.appendChild(exclusiveAside1OptionsLabel);
		exclusiveAside1OptionsInput.addEventListener("click", exclusiveOptionsSelector);

		function exclusiveOptionsSelector() {
			exclusiveAside2Title.innerText = "Exclusive " + exclusiveOptions[this.value];
			var exclusiveContents = document.querySelectorAll(".exclusive-content-outer[name]");
			var exclusiveContent = document.querySelectorAll(".exclusive-content-outer[name='" + this.value + "']");
			for(var q = 0; q < exclusiveContents.length; q++) {
				exclusiveContents[q].style.display = "none";
			}
			for(var q = 0; q < exclusiveContent.length; q++) {
				exclusiveContent[q].style.display = "flex";
			}
		}
		if(q == 0) {
			exclusiveAside1OptionsLabel.click();
		}
	}
};