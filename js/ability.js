var createAbility = function() {
	if(Ability.length >= 1) {
		var abilityOuter = document.createElement("div");
		var abilityAside1 = document.createElement("aside");
		var abilityAside1OptionsTitleOuter = document.createElement("div");
		var abilityAside1OptionsSearchOuter = document.createElement("div");
		var abilityAside1OptionsSearch = document.createElement("input");
		var abilityAside1OptionsSearchExit = document.createElement("span");
		var abilityAside1OptionsOuter = document.createElement("div");
		var abilityAside1Options = document.createElement("div");
		var abilityAside2 = document.createElement("aside");
		var abilityAside2Title = document.createElement("span");
		var abilityAside2TitleID = document.createElement("h1");
		var abilityAside2TitleName = document.createElement("h1");
		var abilityAside2Debut = document.createElement("span");
		var abilityAside2DebutText = document.createElement("h4");
		var abilityAside3 = document.createElement("aside");
		var abilityAside3Description = document.createElement("div");
		var abilityAside3DescriptionText = document.createElement("p");
		var abilityAside3EffectTitle = document.createElement("h3");
		var abilityAside3EffectText = document.createElement("p");
		var abilityAside4 = document.createElement("aside");
		var abilityAside4Sidebar = document.createElement("div");
		var abilityAside4SidebarTitle = document.createElement("div");
		var abilityAside4SidebarTitleLiTop = document.createElement("li");
		var abilityAside4SidebarTitleLiBottom = document.createElement("li");
		var abilityAside4SidebarUl = document.createElement("ul");
		abilityAside4Sidebar.classList.add("ability-sidebar");
		abilityAside4SidebarTitle.classList.add("ability-sidebar-title");
		abilityAside4.appendChild(abilityAside4Sidebar);
		abilityAside4Sidebar.appendChild(abilityAside4SidebarTitle);
		abilityAside4SidebarTitle.appendChild(abilityAside4SidebarTitleLiTop);
		abilityAside4SidebarTitle.appendChild(abilityAside4SidebarTitleLiBottom);
		abilityAside4Sidebar.appendChild(abilityAside4SidebarUl);
		var abilityAside4SidebarTitleLiTopText = document.createElement("h4");
		abilityAside4SidebarTitleLiTop.appendChild(abilityAside4SidebarTitleLiTopText);
		if(Generation <= 4) {
			var sidebarAbilityList = ["Pokémon", "Primary Ability", "Secondary Ability", ];
		}
		if(Generation >= 5) {
			var sidebarAbilityList = ["Pokémon", "Primary Ability", "Secondary Ability", "Hidden Ability", ];
		}
		for(var q = 0; q < sidebarAbilityList.length; q++) {
			var abilityAside4SidebarTitleLiBottomText = document.createElement("h6");
			abilityAside4SidebarTitleLiBottomText.innerText = sidebarAbilityList[q];
			abilityAside4SidebarTitleLiBottom.appendChild(abilityAside4SidebarTitleLiBottomText);
		}
		abilityOuter.setAttribute("id", "ability-outer");
		abilityOuter.setAttribute("name", "Abilities");
		abilityAside1.setAttribute("id", "ability-aside1");
		abilityAside1OptionsTitleOuter.setAttribute("id", "ability-options-title");
		abilityAside1OptionsSearchOuter.setAttribute("id", "ability-options-search");
		abilityAside1OptionsSearch.setAttribute("type", "text");
		abilityAside1OptionsSearch.setAttribute("id", "ability-search");
		abilityAside1OptionsSearch.setAttribute("placeholder", "Search Abilities...");
		abilityAside1OptionsSearch.setAttribute("onfocus", "this.placeholder=''");
		abilityAside1OptionsSearch.setAttribute("onblur", "this.placeholder='Search Abilities...'");
		abilityAside1OptionsSearch.setAttribute("autocomplete", "off");
		abilityAside1OptionsSearchExit.setAttribute("id", "ability-search-exit");
		abilityAside1OptionsOuter.setAttribute("id", "ability-options-outer");
		abilityAside1Options.setAttribute("id", "ability-options");
		abilityAside2.setAttribute("id", "ability-aside2");
		abilityAside2Title.classList.add("ability-title");
		abilityAside2TitleName.innerText = "Abilities";
		abilityAside2Debut.classList.add("ability-debut");
		abilityAside3.setAttribute("id", "ability-aside3");
		abilityAside3Description.classList.add("ability-description");
		abilityAside4.setAttribute("id", "ability-aside4");
		document.querySelector("#contain").appendChild(abilityOuter);
		abilityOuter.appendChild(abilityAside1);
		abilityAside1.appendChild(abilityAside1OptionsTitleOuter);
		abilityAside1OptionsTitleOuter.appendChild(abilityAside1OptionsSearchOuter);
		abilityAside1OptionsSearchOuter.appendChild(abilityAside1OptionsSearchExit);
		abilityAside1OptionsSearchOuter.appendChild(abilityAside1OptionsSearch);
		abilityAside1.appendChild(abilityAside1OptionsOuter);
		abilityAside1OptionsOuter.appendChild(abilityAside1Options);
		abilityOuter.appendChild(abilityAside2);
		abilityAside2.appendChild(abilityAside2Title);
		abilityAside2Title.appendChild(abilityAside2TitleID);
		abilityAside2Title.appendChild(abilityAside2TitleName);
		abilityAside2.appendChild(abilityAside2Debut);
		abilityAside2Debut.appendChild(abilityAside2DebutText);
		abilityOuter.appendChild(abilityAside3);
		abilityAside3.appendChild(abilityAside3Description);
		abilityAside3Description.appendChild(abilityAside3DescriptionText);
		abilityAside3Description.appendChild(abilityAside3EffectTitle);
		abilityAside3Description.appendChild(abilityAside3EffectText);
		abilityOuter.appendChild(abilityAside4);

        var abilityAside2Game = document.createElement("span");
        var abilityAside2GameImage = document.createElement("img");
        abilityAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
        abilityAside2GameImage.setAttribute("onerror","this.display='none'");
        abilityAside2.appendChild(abilityAside2Game);
        abilityAside2Game.appendChild(abilityAside2GameImage);


		var firstabilityiteration;
		for(var q = 0; q < finaldataAbility.length; q++) {
			for(var u = 0; u < finaldataAbility.length; u++) {
				if(Object.keys(finaldataAbility[q])[u] == JSONPath_AbilityReference + "_" + "Name") {
					var abilityAside1OptionsInput = document.createElement("input");
					var abilityAside1OptionsLabel = document.createElement("label");
					abilityAside1OptionsInput.setAttribute("type", "radio");
					abilityAside1OptionsInput.setAttribute("name", "ability-options");
					abilityAside1OptionsInput.setAttribute("id", "ability-options-" + q);
					abilityAside1OptionsInput.setAttribute("autocomplete", "off");
					abilityAside1OptionsInput.value = q;
					abilityAside1OptionsLabel.setAttribute("for", "ability-options-" + q);
					abilityAside1OptionsLabel.setAttribute("name", "medium");
					abilityAside1OptionsLabel.setAttribute("data-search-name", finaldataAbility[q][
						JSONPath_AbilityReference + "_" + "Name"
					].toLowerCase());
					abilityAside1OptionsLabel.innerText = finaldataAbility[q][JSONPath_AbilityReference + "_" + "Name"];
					abilityAside1Options.appendChild(abilityAside1OptionsInput);
					abilityAside1Options.appendChild(abilityAside1OptionsLabel);
					abilityAside1OptionsInput.addEventListener("click", abilityOptionsSelector);

					function abilityOptionsSelector() {
						abilityAside4SidebarTitleLiTopText.innerHTML = "Pokémon with&nbsp;" + "<u>" + finaldataAbility[this.value][
							JSONPath_AbilityReference + "_" + "Name"
						] + "</u>";
						abilityAside2TitleID.innerText = "#" + getAbilityData(finaldataAbility[this.value][
							JSONPath_AbilityReference + "_" + "Name"
						], "ID");
						abilityAside2DebutText.innerText = "Introduced in " + getAbilityData(finaldataAbility[this.value][
							JSONPath_AbilityReference + "_" + "Name"
						], "Debut");
						abilityAside2TitleName.innerText = finaldataAbility[this.value][
							JSONPath_AbilityReference + "_" + "Name"
						];
						abilityAside3DescriptionText.innerText = getAbilityData(finaldataAbility[this.value][
							JSONPath_AbilityReference + "_" + "Name"
						], "Flavor");
						var lis = document.querySelectorAll("#ability-aside4 ul li");
						for(var q = 0; q < lis.length; q++) {
							lis[q].remove();
						}
						var sidebarAbilityListFull = sidebarAbilityList.map(
							(i) => i + "_" + JSONPath_Ability);
						sidebarAbilityListFull = sidebarAbilityListFull.filter(
							(item) => item !== "Pokémon" + "_" + JSONPath_Ability);
						for(var q = 0; q < sidebarAbilityListFull.length; q++) {
							sidebarAbilityListFull[q] = sidebarAbilityListFull[q].replaceAll(" Ability", "");
						}
						var AbilityResults = getPokémonData(finaldataPokémonAbility, finaldataAbility[this.value][
							JSONPath_AbilityReference + "_" + "Name"
						], sidebarAbilityListFull);
						for(var i = 0; i < AbilityResults.length; i++) {
							var abilityAside4SidebarLi = document.createElement("li");
							abilityAside4SidebarUl.appendChild(abilityAside4SidebarLi);
							for(var q = 0; q < sidebarAbilityList.length; q++) {
								if(q == 0) {
									var abilityAside4SidebarLiImgOuter = document.createElement("div");
									var abilityAside4SidebarLiImg = document.createElement("img");
									abilityAside4SidebarLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + AbilityResults[i]["Folder"] + AbilityResults[i]["File"] + ".png";
									abilityAside4SidebarLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
									if(AbilityResults[i]["Form"] != undefined) {
										abilityAside4SidebarLiImg.setAttribute("title", AbilityResults[i]["Form"]);
										abilityAside4SidebarLiImg.setAttribute("value",getPokémonInt(AbilityResults[i]["Form"]));
									} else {
										abilityAside4SidebarLiImg.setAttribute("title", AbilityResults[i]["Pokémon"]);
										abilityAside4SidebarLiImg.setAttribute("value",getPokémonInt(AbilityResults[i]["Pokémon"]));
									}
									abilityAside4SidebarLi.appendChild(abilityAside4SidebarLiImgOuter);
									abilityAside4SidebarLiImgOuter.appendChild(abilityAside4SidebarLiImg);
									abilityAside4SidebarLiImg.addEventListener("click", modalData);
								} else if(q != 0) {
									var abilityAside4SidebarLiTextOuter = document.createElement("span");
									var abilityAside4SidebarLiText = document.createElement("button");
									if(AbilityResults[i][sidebarAbilityListFull[q - 1]] != undefined) {
										abilityAside4SidebarLiText.innerText = AbilityResults[i][sidebarAbilityListFull[q - 1]];
									}
									if(AbilityResults[i][sidebarAbilityListFull[q - 1]] == finaldataAbility[this.value][
											JSONPath_AbilityReference + "_" + "Name"
										]) {
										abilityAside4SidebarLiText.classList.add("active");
									} else {
										abilityAside4SidebarLiText.addEventListener("click", dataRedirect);
									}
									abilityAside4SidebarLiText.setAttribute("name", "ability");
									abilityAside4SidebarLiText.setAttribute("title", sidebarAbilityList[q]);
									abilityAside4SidebarLi.appendChild(abilityAside4SidebarLiTextOuter);
									abilityAside4SidebarLiTextOuter.appendChild(abilityAside4SidebarLiText);
								}
							}
						}
					}
					if(firstabilityiteration != true) {
						firstabilityiteration = true;
						abilityAside1OptionsLabel.click();
					}
				}
			}
		}
	}
};