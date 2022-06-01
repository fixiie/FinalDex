var createData = function(id, i) {
	var i;
	var id;
	var dataDiv = document.createElement("div");
	var dataDivOverlay = document.createElement("div");
	var dataDivContent = document.createElement("div");
	var dataNavigation = document.createElement("section");
	var dataAside2MapContain = document.createElement("div");
	var dataAside2MapZoomReset = document.createElement("span");
	var dataAside2MapZoomOut = document.createElement("span");
	var dataAside2MapZoomIn = document.createElement("span");
	var dataAside2MapZoomFullscreen = document.createElement("span");
	var dataAside2Map = document.createElement("div");
	var dataAside2MapPanzoom = document.createElement("div");
	var dataAside2MapImage = document.createElement("img");
	var dataAside2MapMark = document.createElement("div");
	var dataAside2MapMarkImage = document.createElement("img");
	var dataForm = document.createElement("section");
	var variant = [];
	for(var u = 0; u < finaldataPokémon.length; u++) {
		if(finaldataPokémon[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
			variant.push(finaldataPokémon[u]["Pokémon"]);
		}
	}
	for(var u = 0; u < finaldataPokémon.length; u++) {
		if(finaldataPokémon[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
			var dataFormInput = document.createElement("input");
			var dataFormLabel = document.createElement("label");
			var dataFormImg = document.createElement("img");
			dataFormInput.setAttribute("type", "radio");
			dataFormInput.setAttribute("name", "data-form-selector" + id);
			dataFormInput.setAttribute("id", "data-form-selector-" + u);
			dataFormInput.value = u;
			dataFormLabel.setAttribute("for", "data-form-selector-" + u);
			dataFormImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			dataForm.appendChild(dataFormInput);
			dataForm.appendChild(dataFormLabel);
			dataFormLabel.appendChild(dataFormImg);
			if(finaldataPokémonForm[u]["Form_" + JSONPath_Form] == undefined) {
				dataFormImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataPokémonForm[u]["Pokémon"]) + ".png";
				dataFormLabel.title = finaldataPokémonForm[u]["Pokémon"];
			} else {
				dataFormImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataPokémonForm[u]["Form_" + JSONPath_Form]) + ".png";
				dataFormLabel.title = finaldataPokémonForm[u]["Form_" + JSONPath_Form];
			}
			if(!variant.length >= 2) {
				dataFormInput.setAttribute("checked", "");
			}
			dataFormInput.addEventListener("click", loadData);
		}
	}
	var dataAside1 = document.createElement("aside");
	var dataAside1DivPortrait = document.createElement("div");
	var dataAside1DivPortraitContent = document.createElement("div");
	var dataAside1Portrait = document.createElement("img");
	var dataAside1StatsEVSelector = document.createElement("div");
	var dataAside1DivIdNameOuter = document.createElement("div");
	var dataAside1DivIdName = document.createElement("p");
	var dataAside1DivIdNameBreak = document.createElement("br");
	var dataAside1IDNational = document.createElement("span");
	var dataAside1Name = document.createElement("p");
	var dataAside1DebutCategoryOuter = document.createElement("div");
	var dataAside1DebutCategory = document.createElement("p");
	var dataAside1DebutCategoryBreak = document.createElement("br");
	var dataAside1Debut = document.createElement("span");
	var dataAside1Category = document.createElement("span");
	var dataAside1Type = document.createElement("div");
	var dataAside2 = document.createElement("aside");
	var dataAside2 = document.createElement("aside");
	var dataAside2Metadata = document.createElement("div");
	var dataAside2MetadataStats = document.createElement("div");
	var dataAside2DescriptionOuter = document.createElement("div");
	var dataAside2Description = document.createElement("p");
	var dataAside2MetadataSidebarOuter = document.createElement("div");
	var dataAside2MetadataSidebar = document.createElement("div");
	var dataAside2MetadataSidebarRow1 = document.createElement("div");
	var dataAside2MetadataSidebarRow2 = document.createElement("div");
	var dataAside2MetadataSidebarRow3 = document.createElement("div");
	var dataAside2MetadataSidebarRow4 = document.createElement("div");
	var dataAside2MetadataSidebarCatchRateOuter = document.createElement("span");
	var dataAside2MetadataSidebarCatchRateToggle = document.createElement("span");
	var dataAside2MetadataSidebarCatchRateContent = document.createElement("p");
	var dataAside2MetadataSidebarCatchRateTitle = document.createElement("h5");
	var dataAside2MetadataSidebarCatchRate = document.createElement("h3");
	var dataAside2MetadataSidebarLevelRateOuter = document.createElement("span");
	var dataAside2MetadataSidebarLevelRateToggle = document.createElement("span");
	var dataAside2MetadataSidebarLevelRateContent = document.createElement("p");
	var dataAside2MetadataSidebarLevelRateTitle = document.createElement("h5");
	var dataAside2MetadataSidebarLevelRate = document.createElement("h3");
	var dataAside2MetadataSidebarExpYieldOuter = document.createElement("span");
	var dataAside2MetadataSidebarExpYieldToggle = document.createElement("span");
	var dataAside2MetadataSidebarExpYieldContent = document.createElement("p");
	var dataAside2MetadataSidebarExpYieldTitle = document.createElement("h5");
	var dataAside2MetadataSidebarExpYield = document.createElement("h3");
	var dataAside2AreaDiv = document.createElement("div");
	var dataAside2Area = document.createElement("div");
	var dataAside2AreaTitle = document.createElement("h4");
	var dataAside2AreaText = document.createElement("p");
	dataDiv.setAttribute("id", "data-modal" + id);
	dataDiv.classList.add("data-modal-outer");
	dataDivOverlay.classList.add("data-modal-overlay");
	dataDivContent.classList.add("data-modal");
	dataNavigation.setAttribute("id", "data-navigation");
	dataDivOverlay.addEventListener("click", modalData);
	dataForm.classList.add("data-form");
	var navz = ["metadata", "learnset", "area"];
	var navztitles = ["Data", "Learnset", "Area"];
	for(var q = 0; q < navz.length; q++) {
		var dataNavigationInput = document.createElement("input");
		var dataNavigationLabel = document.createElement("label");
		dataNavigationInput.setAttribute("type", "radio");
		dataNavigationInput.setAttribute("name", "data-navigation" + id);
		dataNavigationInput.setAttribute("id", "data-navigation-" + navz[q] + id);
		dataNavigationInput.classList.add("data-navigation-" + navz[q]);
		dataNavigationInput.setAttribute("value", q + 1);
		if(q == 0) {
			dataNavigationInput.setAttribute("checked", "");
		}
		dataNavigationLabel.setAttribute("for", "data-navigation-" + navz[q] + id);
		dataNavigationLabel.innerText = navztitles[q];
		dataNavigation.appendChild(dataNavigationInput);
		dataNavigation.appendChild(dataNavigationLabel);
	}
	dataAside1.classList.add("data-aside1");
	dataAside1DivPortrait.classList.add("data-portrait");
	dataAside1DivPortraitContent.classList.add("data-portrait-content");
	dataAside1Portrait.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	dataAside1Portrait.setAttribute("id", "data-portrait-img-" + id);
	dataAside1StatsEVSelector.classList.add("data-baseev-selector");
	dataAside1DivIdNameOuter.classList.add("data-idname-outer");
	dataAside1DivIdName.classList.add("data-idname");
	dataAside1IDNational.classList.add("data-nationalID");
	dataAside1IDNational.innerText = "#" + id;
	dataAside1Name.classList.add("data-name");
	dataAside1DebutCategoryOuter.classList.add("data-debutcategorytype-outer");
	dataAside1DebutCategory.classList.add("data-debutcategory");
	dataAside1Debut.classList.add("data-debut");
	dataAside1Category.classList.add("data-category");
	dataAside1Type.classList.add("data-type");
	var dataAside1TypePrimaryOuter = document.createElement("span");
	var dataAside1TypePrimary = document.createElement("span");
	var dataAside1TypePrimaryImg = document.createElement("img");
	var dataAside1TypePrimaryText = document.createElement("h3");
	dataAside1TypePrimaryImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block';");
	dataAside1TypePrimaryImg.setAttribute("dataname", "value");
	dataAside1Type.appendChild(dataAside1TypePrimaryOuter);
	dataAside1TypePrimaryOuter.appendChild(dataAside1TypePrimary);
	dataAside1TypePrimary.appendChild(dataAside1TypePrimaryImg);
	dataAside1TypePrimary.appendChild(dataAside1TypePrimaryText);
	var dataAside1TypeSecondaryOuter = document.createElement("span");
	var dataAside1TypeSecondary = document.createElement("span");
	var dataAside1TypeSecondaryImg = document.createElement("img");
	var dataAside1TypeSecondaryText = document.createElement("h3");
	dataAside1TypeSecondaryImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block';");
	dataAside1TypeSecondaryImg.setAttribute("dataname", "value");
	dataAside1Type.appendChild(dataAside1TypeSecondaryOuter);
	dataAside1TypeSecondaryOuter.appendChild(dataAside1TypeSecondary);
	dataAside1TypeSecondary.appendChild(dataAside1TypeSecondaryImg);
	dataAside1TypeSecondary.appendChild(dataAside1TypeSecondaryText);
	dataAside2.classList.add("data-aside2");
	dataAside2MapContain.setAttribute("id", "data-map-contain");
	dataAside2MapZoomReset.classList.add("data-zoom-reset");
	dataAside2MapZoomOut.classList.add("data-zoom-out");
	dataAside2MapZoomIn.classList.add("data-zoom-in");
	dataAside2MapZoomFullscreen.classList.add("data-zoom-fullscreen");
	dataAside2Map.setAttribute("id", "data-map");
	dataAside2Map.setAttribute("name", Region + "-" + MEDIAPath_Map);
	dataAside2MapPanzoom.setAttribute("id", "data-map-panzoom-" + id);
	dataAside2MapPanzoom.setAttribute("name", Region + "-" + MEDIAPath_Map);
	dataAside2MapImage.src = "./media/Images/Misc/Map/" + MEDIAPath_Map + "/Map.png";
	dataAside2MapImage.onload = function() {
		dataAside2MapImage.setAttribute("width", dataAside2MapImage.width + "px");
		dataAside2MapImage.setAttribute("height", dataAside2MapImage.height + "px");
	};
	dataAside2MapImage.classList.add("data-img-main");
	dataAside2MapImage.setAttribute("name", Region + "-" + MEDIAPath_Map);
	dataAside2MapMark.classList.add("data-img-mark-outer");
	dataAside2MapMarkImage.classList.add("data-img-mark");
	dataAside2Metadata.classList.add("data");
	dataAside2Metadata.setAttribute("id", "data" + id);
	dataAside2DescriptionOuter.classList.add("data-description");
	dataAside2DescriptionOuter.classList.add("scroll");
	dataAside2MetadataSidebarOuter.setAttribute("id", "data-sidebar-outer");
	dataAside2MetadataSidebar.setAttribute("id", "data-sidebar");
	dataAside2MetadataSidebar.setAttribute("name", Generation + "-" + GameID);
	dataAside2MetadataStats.classList.add("data-stats");
	dataAside2MetadataSidebarCatchRateOuter.classList.add("data-sidebar-catchrate");
	dataAside2MetadataSidebarCatchRateOuter.setAttribute("name", "Catch Rate");
	dataAside2MetadataSidebarCatchRateToggle.classList.add("data-sidebar-catchrate-toggle");
	dataAside2MetadataSidebarCatchRateContent.classList.add("data-sidebar-catchrate-content");
	dataAside2MetadataSidebarCatchRateTitle.innerText = "Catch Rate";
	dataAside2MetadataSidebarCatchRate.setAttribute("id", "data-sidebar-catchrate");
	dataAside2MetadataSidebarCatchRate.setAttribute("dataname", "value");
	dataAside2MetadataSidebarCatchRate.setAttribute("value", "");
	dataAside2MetadataSidebarLevelRateOuter.classList.add("data-sidebar-levelrate");
	dataAside2MetadataSidebarLevelRateOuter.setAttribute("name", "Leveling Rate");
	dataAside2MetadataSidebarLevelRateToggle.classList.add("data-sidebar-levelrate-toggle");
	dataAside2MetadataSidebarLevelRateContent.classList.add("data-sidebar-levelrate-content");
	dataAside2MetadataSidebarLevelRateTitle.innerText = "Leveling Rate";
	dataAside2MetadataSidebarLevelRate.setAttribute("id", "data-sidebar-levelrate");
	dataAside2MetadataSidebarLevelRate.setAttribute("dataname", "value");
	dataAside2MetadataSidebarLevelRate.setAttribute("value", "");
	dataAside2MetadataSidebarExpYieldOuter.classList.add("data-sidebar-expyield");
	dataAside2MetadataSidebarExpYieldOuter.setAttribute("name", "Experience Yield");
	dataAside2MetadataSidebarExpYieldToggle.classList.add("data-sidebar-expyield-toggle");
	dataAside2MetadataSidebarExpYieldContent.classList.add("data-sidebar-expyield-content");
	dataAside2MetadataSidebarExpYieldTitle.innerText = "Experience Yield";
	dataAside2MetadataSidebarExpYield.setAttribute("id", "data-sidebar-expyield");
	dataAside2MetadataSidebarExpYield.setAttribute("dataname", "value");
	dataAside2MetadataSidebarExpYield.setAttribute("value", "");
	dataAside2AreaDiv.classList.add("data-area");
	dataAside2AreaDiv.setAttribute("id", "data-area" + id);
	dataAside2Area.classList.add("data-area-content");
	dataAside2AreaTitle.classList.add("data-area-title");
	dataAside2AreaText.classList.add("data-area-text");
	dataAside2AreaText.classList.add("scroll");
	/*
	  dataAside2AreaTitle.setAttribute("name",finaldataPokémonArea[i]["Filter_"+JSONPath_Area]);
	  
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Catchable") {
	      dataAside2AreaTitle.title = "Pokémon caught in the Wild";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Snaggable") {
	      dataAside2AreaTitle.title = "Shadow Pokémon caught from Trainers";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Evolve") {
	      dataAside2AreaTitle.title = "Pokémon obtained via Evolution";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Trade Evolution") {
	      dataAside2AreaTitle.title = "Pokémon obtained via Evolution by Trade";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Breed") {
	      dataAside2AreaTitle.title = "Pokémon obtained through Breeding";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Gift") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly obtained by Receival";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Choice") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly obtained by choosing between it or another";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Swarm") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly caught during a Swarm";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Max Raid Battle") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly caught during a Max Raid Battle";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Poké Radar") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly caught with the Poké Radar";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "The Underground") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly caught with association to The Underground";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "White Forest") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly caught in the White Forest";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Unique") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly with a limited amount of encounters";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Event") {
	      dataAside2AreaTitle.title = "Pokémon exclusivly encountered during an In-Game Event";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Unavailable") {
	      dataAside2AreaTitle.title = "Pokémon not available";
	  }
	  if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Unobtainable") {
	      dataAside2AreaTitle.title = "Pokémon unobtainable";
	  }
	  
	  dataAside2AreaTitle.innerText = finaldataPokémonArea[i]["Filter_"+JSONPath_Area];
	  dataAside2AreaText.innerHTML = finaldataPokémonArea[i]["Area_"+JSONPath_Area];
	  
	  
	  
	  */
	for(q = 0; q < JSONPath_Pokédex.length; q++) {
		var dataAside1IDRegional = document.createElement("span");
		dataAside1IDRegional.classList.add("data-regionalID-" + [q + 1]);
		if(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]] != null) {
			dataAside1IDRegional.innerText = "#" + finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]];
		}
		dataAside1DivIdName.appendChild(dataAside1IDRegional);
	}
	if(Ability.length >= 1) {
		var dataAside2MetadataSidebarRow1 = document.createElement("div");
		var dataAside2MetadataSidebarAbilityOuter = document.createElement("span");
		dataAside2MetadataSidebarAbilityOuter.classList.add("data-sidebar-ability");
		dataAside2MetadataSidebarAbilityOuter.setAttribute("name", Generation);
		dataAside2MetadataSidebar.appendChild(dataAside2MetadataSidebarRow1);
		dataAside2MetadataSidebarRow1.appendChild(dataAside2MetadataSidebarAbilityOuter);
		var dataAside2MetadataSidebarAbilityPrimarySecondaryOuter = document.createElement("span");
		dataAside2MetadataSidebarAbilityOuter.appendChild(dataAside2MetadataSidebarAbilityPrimarySecondaryOuter);
		var dataAside2MetadataSidebarAbilityPrimary = document.createElement("h5");
		dataAside2MetadataSidebarAbilityPrimary.setAttribute("id", "data-sidebar-ability-primary");
		dataAside2MetadataSidebarAbilityPrimary.setAttribute("title", "Primary Ability");
		dataAside2MetadataSidebarAbilityPrimary.setAttribute("dataname", "value");
		dataAside2MetadataSidebarAbilityPrimary.innerText = "Primary Ability";
		dataAside2MetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataAside2MetadataSidebarAbilityPrimary);
		var dataAside2MetadataSidebarAbilitySecondary = document.createElement("h5");
		dataAside2MetadataSidebarAbilitySecondary.setAttribute("id", "data-sidebar-ability-secondary");
		dataAside2MetadataSidebarAbilitySecondary.setAttribute("title", "Secondary Ability");
		dataAside2MetadataSidebarAbilitySecondary.setAttribute("dataname", "value");
		dataAside2MetadataSidebarAbilitySecondary.innerText = "Secondary Ability";
		dataAside2MetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataAside2MetadataSidebarAbilitySecondary);
		if(Ability.length >= 3) {
			var dataAside2MetadataSidebarAbilityHiddenOuter = document.createElement("span");
			var dataAside2MetadataSidebarAbilityHidden = document.createElement("h5");
			dataAside2MetadataSidebarAbilityHidden.setAttribute("id", "data-sidebar-ability-hidden");
			dataAside2MetadataSidebarAbilityHidden.setAttribute("title", "Hidden Ability");
			dataAside2MetadataSidebarAbilityHidden.setAttribute("dataname", "value");
			dataAside2MetadataSidebarAbilityHidden.innerText = "Hidden Ability";
			dataAside2MetadataSidebarAbilityOuter.appendChild(dataAside2MetadataSidebarAbilityHiddenOuter);
			dataAside2MetadataSidebarAbilityHiddenOuter.appendChild(dataAside2MetadataSidebarAbilityHidden);
		}
	}
	dataAside2MetadataSidebar.appendChild(dataAside2MetadataSidebarRow2);
	dataAside2MetadataSidebarRow2.appendChild(dataAside2MetadataSidebarCatchRateOuter);
	var EggCycleStep;
	if((Generation >= 2 && Generation <= 3) || Generation == 7) {
		EggCycleStep = "256";
	}
	if(Generation == 4) {
		EggCycleStep = "255";
	}
	if(Generation >= 5 && Generation <= 6) {
		EggCycleStep = "257";
	}
	if(Egg == true) {
		var dataAside2MetadataSidebarHatchRateOuter = document.createElement("span");
		var dataAside2MetadataSidebarHatchRateToggle = document.createElement("span");
		var dataAside2MetadataSidebarHatchRateContent = document.createElement("p");
		var dataAside2MetadataSidebarHatchRateTitle = document.createElement("h5");
		var dataAside2MetadataSidebarHatchRate = document.createElement("h3");
		dataAside2MetadataSidebarHatchRateOuter.classList.add("data-sidebar-hatchrate");
		dataAside2MetadataSidebarHatchRateOuter.setAttribute("name", "Hatch Rate");
		dataAside2MetadataSidebarHatchRateToggle.classList.add("data-sidebar-hatchrate-toggle");
		dataAside2MetadataSidebarHatchRateContent.classList.add("data-sidebar-hatchrate-content");
		dataAside2MetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
		dataAside2MetadataSidebarHatchRate.setAttribute("id", "data-sidebar-hatchrate");
		dataAside2MetadataSidebarHatchRate.setAttribute("dataname", "value");
		dataAside2MetadataSidebarHatchRate.setAttribute("value", "");
		dataAside2MetadataSidebarRow2.appendChild(dataAside2MetadataSidebarHatchRateOuter);
		dataAside2MetadataSidebarHatchRateOuter.appendChild(dataAside2MetadataSidebarHatchRateToggle);
		dataAside2MetadataSidebarHatchRateToggle.appendChild(dataAside2MetadataSidebarHatchRateContent);
		dataAside2MetadataSidebarHatchRateContent.appendChild(dataAside2MetadataSidebarHatchRateTitle);
		dataAside2MetadataSidebarHatchRateContent.appendChild(dataAside2MetadataSidebarHatchRate);
	}
	if(Gender == true) {
		dataAside2MetadataSidebar.appendChild(dataAside2MetadataSidebarRow3);
		var dataAside2MetadataSidebarGenderRatioOuter = document.createElement("span");
		var dataAside2MetadataSidebarGenderRatioTitle = document.createElement("h5");
		var dataAside2MetadataSidebarGenderRatioBar = document.createElement("span");
		var dataAside2MetadataSidebarGenderRatioToggle = document.createElement("span");
		var dataAside2MetadataSidebarGenderRatioMale = document.createElement("span");
		var dataAside2MetadataSidebarGenderRatioFemale = document.createElement("span");
		var dataAside2MetadataSidebarGenderRatioGenderless = document.createElement("span");
		dataAside2MetadataSidebarGenderRatioOuter.classList.add("data-sidebar-genderratio");
		dataAside2MetadataSidebarGenderRatioOuter.setAttribute("name", "Gender Ratio");
		dataAside2MetadataSidebarGenderRatioTitle.innerText = "Gender ratio";
		dataAside2MetadataSidebarGenderRatioBar.classList.add("data-sidebar-genderratio-bar");
		dataAside2MetadataSidebarGenderRatioToggle.classList.add("data-sidebar-genderratio-toggle");
		dataAside2MetadataSidebarGenderRatioToggle.setAttribute("dataname", "value");
		dataAside2MetadataSidebarGenderRatioMale.setAttribute("name", "male");
		dataAside2MetadataSidebarGenderRatioFemale.setAttribute("name", "female");
		dataAside2MetadataSidebarGenderRatioGenderless.setAttribute("name", "genderless");
		dataAside2MetadataSidebarGenderRatioGenderless.setAttribute("title", "");
		dataAside2MetadataSidebarGenderRatioBar.style.display = "none";
		dataAside2MetadataSidebarGenderRatioOuter.appendChild(dataAside2MetadataSidebarGenderRatioTitle);
		dataAside2MetadataSidebarGenderRatioOuter.appendChild(dataAside2MetadataSidebarGenderRatioBar);
		dataAside2MetadataSidebarGenderRatioBar.appendChild(dataAside2MetadataSidebarGenderRatioToggle);
		dataAside2MetadataSidebarGenderRatioToggle.appendChild(dataAside2MetadataSidebarGenderRatioMale);
		dataAside2MetadataSidebarGenderRatioToggle.appendChild(dataAside2MetadataSidebarGenderRatioFemale);
		dataAside2MetadataSidebarGenderRatioToggle.appendChild(dataAside2MetadataSidebarGenderRatioGenderless);
		dataAside2MetadataSidebarRow3.appendChild(dataAside2MetadataSidebarGenderRatioOuter);
	}
	if(Egg == true) {
		var dataAside2MetadataSidebarEggGroupOuter = document.createElement("span");
		var dataAside2MetadataSidebarEggGroupTitle = document.createElement("h5");
		var dataAside2MetadataSidebarEggGroupPrimarySecondaryOuter = document.createElement("span");
		var dataAside2MetadataSidebarEggGroupPrimaryOuter = document.createElement("span");
		var dataAside2MetadataSidebarEggGroupPrimary = document.createElement("b");
		var dataAside2MetadataSidebarEggGroupSecondaryOuter = document.createElement("span");
		var dataAside2MetadataSidebarEggGroupSecondary = document.createElement("b");
		dataAside2MetadataSidebarEggGroupOuter.classList.add("data-sidebar-egggroup");
		dataAside2MetadataSidebarEggGroupOuter.setAttribute("name", "Egg Group");
		dataAside2MetadataSidebarEggGroupTitle.innerText = "Egg Group";
		dataAside2MetadataSidebarEggGroupPrimaryOuter.setAttribute("name", "Primary");
		dataAside2MetadataSidebarEggGroupPrimary.setAttribute("id", "data-sidebar-egggroup1");
		dataAside2MetadataSidebarEggGroupPrimary.setAttribute("title", "Primary Egg Group");
		dataAside2MetadataSidebarEggGroupPrimary.setAttribute("dataname", "value");
		dataAside2MetadataSidebarEggGroupSecondaryOuter.setAttribute("name", "Secondary");
		dataAside2MetadataSidebarEggGroupSecondary.setAttribute("id", "data-sidebar-egggroup2");
		dataAside2MetadataSidebarEggGroupSecondary.setAttribute("title", "Secondary Egg Group");
		dataAside2MetadataSidebarEggGroupSecondary.setAttribute("dataname", "value");
		dataAside2MetadataSidebarEggGroupPrimaryOuter.style.display = "none";
		dataAside2MetadataSidebarEggGroupSecondaryOuter.style.display = "none";
		dataAside2MetadataSidebarRow3.appendChild(dataAside2MetadataSidebarEggGroupOuter);
		dataAside2MetadataSidebarEggGroupOuter.appendChild(dataAside2MetadataSidebarEggGroupTitle);
		dataAside2MetadataSidebarEggGroupOuter.appendChild(dataAside2MetadataSidebarEggGroupPrimarySecondaryOuter);
		dataAside2MetadataSidebarEggGroupPrimarySecondaryOuter.appendChild(dataAside2MetadataSidebarEggGroupPrimaryOuter);
		dataAside2MetadataSidebarEggGroupPrimaryOuter.appendChild(dataAside2MetadataSidebarEggGroupPrimary);
		dataAside2MetadataSidebarEggGroupPrimarySecondaryOuter.appendChild(dataAside2MetadataSidebarEggGroupSecondaryOuter);
		dataAside2MetadataSidebarEggGroupSecondaryOuter.appendChild(dataAside2MetadataSidebarEggGroupSecondary);
	}
	dataAside2MetadataSidebar.appendChild(dataAside2MetadataSidebarRow4);
	/*
	  if (parseInt(id) - 1 != 0) {
	  var dataPrevious = document.createElement("div");
	  var dataPreviousNational = document.createElement("button");
	  var dataPreviousNationalImg = document.createElement("img");
	  
	  dataPrevious.classList.add("data-previous");
	  dataPreviousNational.setAttribute("id","data-previous-national");
	  dataPreviousNational.setAttribute("name","national");
	  dataPreviousNational.classList.add("data-modal-close-open");
	  dataPreviousNational.setAttribute("value",parseInt(id) - 1);
	  dataPreviousNational.title = "#" + [parseInt(id) - 1] + "\n" + getPokémonName(getIntID("",[parseInt(id) - 1]));
	  dataPreviousNationalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(getPokémonName(getIntID("",[parseInt(id) - 1]))) + ".png";
	  dataPreviousNationalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	  
	  dataDivContent.appendChild(dataPrevious);
	  dataPrevious.appendChild(dataPreviousNational);
	  dataPreviousNational.appendChild(dataPreviousNationalImg);
	  
	  }
	  
	  if (parseInt(id) + 1 <= finaldataPokémon.length) {
	  
	  var dataNext = document.createElement("div");
	  var dataNextNational = document.createElement("button");
	  var dataNextNationalImg = document.createElement("img");
	  
	  dataNext.classList.add("data-next");
	  dataNextNational.setAttribute("id","data-next-national");
	  dataNextNational.setAttribute("name","national");
	  dataNextNational.classList.add("data-modal-close-open");
	  dataNextNational.setAttribute("value",parseInt(id) + 1);
	  dataNextNational.title = "#" + [parseInt(id) + 1] + "\n" + getPokémonName(getIntID("",[parseInt(id) - 1]));
	  dataNextNationalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(getPokémonName(getIntID("",[parseInt(id) - 1]))) + ".png";
	  dataNextNationalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	  
	  dataDivContent.appendChild(dataNext);
	  dataNext.appendChild(dataNextNational);
	  dataNextNational.appendChild(dataNextNationalImg);
	  
	  
	  
	  }
	  
	  for (q = 0; q < JSONPath_Pokédex.length; q++) {
	      var y = q + 1;
	  
	      var previousID = parseInt(getRegionalID("-",x.toString(),JSONPath_Pokédex[q].toString()));
	      var nextID = parseInt(getRegionalID("+",x.toString(),JSONPath_Pokédex[q].toString()));
	  
	      if (!isNaN(parseFloat(previousID))) {
	          var dataPreviousRegional = document.createElement("button");
	          var dataPreviousRegionalImg = document.createElement("img");
	  
	          dataPreviousRegional.setAttribute("id","data-previous-regional" + y);
	          dataPreviousRegional.setAttribute("name","regional" + y);
	          dataPreviousRegional.classList.add("data-modal-close-open");
	          dataPreviousRegional.setAttribute("value",previousID);
	          dataPreviousRegional.title = "#" + [parseInt(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]]) - 1] + "\n" + getPokémonName(previousID);
	          dataPreviousRegionalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + previousID + ".png";
	          dataPreviousRegionalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	          
	          dataPrevious.appendChild(dataPreviousRegional);
	          dataPreviousRegional.appendChild(dataPreviousRegionalImg);
	      }
	      if (!isNaN(parseFloat(nextID))) {
	          var dataNextRegional = document.createElement("button");
	          var dataNextRegionalImg = document.createElement("img");
	  
	          dataNextRegional.setAttribute("id","data-next-regional" + y); 
	          dataNextRegional.setAttribute("name","regional" + y);
	          dataNextRegional.classList.add("data-modal-close-open");
	          dataNextRegional.setAttribute("value",nextID);
	          dataNextRegional.title = "#" + [parseInt(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]]) + 1] + "\n" + getPokémonName(nextID);
	          dataNextRegionalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + nextID + ".png";
	          dataNextRegionalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	          
	          dataNext.appendChild(dataNextRegional);
	          dataNextRegional.appendChild(dataNextRegionalImg);
	      }
	  }
	  
	  
	  
	  
	  var PokémonStage = finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage];
	  var FamilyStage = finaldataPokémonEvolutionStage[i]["Family Stage_"+JSONPath_EvolutionStage];
	  
	  var Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
	  var Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
	  
	  var PreviousPrevious;
	  var PreviousNext;
	  var NextPrevious;
	  
	  
	  if (Next != undefined) {
	      NextPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Next)) - 1]["Previous_"+JSONPath_EvolutionSpecie].split(",");
	      var NextTypeMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Type_"+JSONPath_EvolutionMethod];
	      var NextFactorMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Factor_"+JSONPath_EvolutionMethod];
	      var NextAdditionalMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Additional_"+JSONPath_EvolutionMethod];
	      var NextFormMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Form_"+JSONPath_EvolutionMethod];
	  }
	  else {
	      NextPrevious = [];
	  }
	  
	  if (Previous != undefined) {
	      PreviousNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie];
	      PreviousPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Previous_"+JSONPath_EvolutionSpecie];
	  
	      var PreviousTypeMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Type_"+JSONPath_EvolutionMethod];
	      var PreviousFactorMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Factor_"+JSONPath_EvolutionMethod];
	      var PreviousAdditionalMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Additional_"+JSONPath_EvolutionMethod];
	      var PreviousFormMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Form_"+JSONPath_EvolutionMethod];
	  }
	  else {
	      PreviousNext = [];
	  }
	  
	  
	  var evoprevious;
	  
	  if (finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie] != undefined) {
	      var evoprevious = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie].split(",").length;
	  }
	  else {
	      var evoprevious = 0;
	  }
	  
	  
	  var evonext;
	  
	  if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
	      var evonext = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length;
	  }
	  else {
	      var evonext = 0;
	  }
	  
	  
	  
	  
	  if (evoprevious != 0 || evonext != 0) {
	  
	      var EggArr1;
	  
	      if (PokémonStage == "First-Stage" && FamilyStage == "Two-Stage") { // 1/2 
	          EggArr1 = finaldataPokémonEvolutionSpecie[i]["Pokémon"]+","+finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
	      }
	      else if (PokémonStage == "First-Stage" && FamilyStage == "Three-Stage") { // 1/3
	          EggArr1 = finaldataPokémonEvolutionSpecie[i]["Pokémon"]+","+finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Next)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
	      }
	      else if (PokémonStage == "Second-Stage" && FamilyStage == "Two-Stage") { // 2/2
	          EggArr1 = Previous+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
	      }
	      else if (PokémonStage == "Second-Stage" && FamilyStage == "Three-Stage") { // 2/3
	          EggArr1 = Previous+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
	      }
	      else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
	          EggArr1 = PreviousPrevious+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(PreviousPrevious)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
	      }
	  
	      
	      var EggArr2 = [];
	      for (var q = 0; q < EggArr1.split(",").length; q++) {
	          var ze = getPokémonID(EggArr1.split(",")[q]);
	  
	          if (finaldataPokémonEggGroup[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] == finaldataEggGroup[i]["Primary_"+JSONPath_EggGroup] && finaldataPokémonEggGroup[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup] == finaldataEggGroup[i]["Secondary_"+JSONPath_EggGroup]) {
	              EggArr2.push(finaldataPokémonEggGroup[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] + "," + finaldataPokémonEggGroup[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup])
	          }
	          else {
	              EggArr2.push(finaldataPokémonEggGroup[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] + "," + finaldataPokémonEggGroup[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup])
	          }
	         
	      }
	  
	      EggArr1 = EggArr1.split(",")
	  
	      for (var q = 0; q < EggArr1.length; q++) {
	          if (EggArr1[q] == Previous) {
	              EggArr1.splice(q,1);
	          }
	      }
	  
	      for (var q = 0; q < EggArr2.length; q++) {
	          EggArr2[q] = EggArr2[q].replaceAll(",undefined","");
	          EggArr2[q] = EggArr2[q].replaceAll("undefined,","");
	          EggArr2[q] = EggArr2[q].replaceAll("undefined","");
	          EggArr2[q] = EggArr2[q].replaceAll(",",", ");
	          EggArr2[q] = EggArr2[q].replace(/,([^,]*)$/, " or " + "$1");
	      }
	  
	      EggArrTemp = [...new Set(EggArr2)];
	  
	      EggArr3 = EggArrTemp.filter(function(item, pos) {
	          return EggArrTemp.indexOf(item) == pos;
	      })
	  
	      var EggArr4 = [];
	  
	      for (var q = 0; q < EggArr3.length; q++) {
	          for (var u = 0; u < EggArr1.length; u++) {
	              if (EggArr2[u] == EggArr3[q]) {
	                  EggArr4[q] += EggArr1[u] + ",";
	              }
	          }
	      }
	  
	  
	      for (var q = 0; q < EggArr4.length; q++) {
	          EggArr4[q] = EggArr4[q].replace(/,([^,]*)$/, "");
	          EggArr4[q] = EggArr4[q].replace(/,([^,]*)$/, " or " + "$1");
	          EggArr4[q] = EggArr4[q].replaceAll(",",", ");
	          EggArr4[q] = EggArr4[q].replaceAll("undefined","");
	  
	      }
	  
	  
	  
	  
	  
	  
	  
	  
	      if (PreviousTypeMethod == undefined) {
	          PreviousTypeMethod = "";
	      }
	      else if (PreviousTypeMethod == "Item") {
	          PreviousTypeMethod = " with ";
	      }
	      else {
	          PreviousTypeMethod = " by "+PreviousTypeMethod;
	      }
	  
	      if (NextTypeMethod == undefined) {
	          NextTypeMethod = "";
	      }
	      else if (NextTypeMethod == "Item") {
	          NextTypeMethod = " with ";
	      }
	      else {
	          NextTypeMethod = " by "+NextTypeMethod;
	      }
	  
	  
	  
	      if (PreviousFactorMethod == undefined) {
	          PreviousFactorMethod = "";
	      }
	      else if (PreviousFactorMethod == "Special Level Up") {
	          PreviousFactorMethod = "Level Up";
	      }
	      else if(!isNaN(parseInt(PreviousFactorMethod))) {
	          PreviousFactorMethod = " ("+PreviousFactorMethod+")";
	      }
	      else {
	          PreviousFactorMethod = " "+PreviousFactorMethod;
	      }
	  
	  
	      if (NextFactorMethod == undefined) {
	          NextFactorMethod = "";
	      }
	      else if (NextFactorMethod == "Special Level Up") {
	          NextFactorMethod = "Level Up";
	      }
	      else if(!isNaN(parseInt(NextFactorMethod))) {
	          NextFactorMethod = " ("+NextFactorMethod+")";
	      }
	      else {
	          NextFactorMethod = " "+NextFactorMethod;
	      }
	  
	  
	  
	      if (PreviousAdditionalMethod == undefined) {
	          PreviousAdditionalMethod = "";
	      }
	      else {
	          PreviousAdditionalMethod = " "+PreviousAdditionalMethod+".";
	      }
	   
	  
	      if (NextAdditionalMethod == undefined) {
	          NextAdditionalMethod = "";
	      }
	      else {
	          NextAdditionalMethod = " "+NextAdditionalMethod+".";
	      }
	  
	  
	      if (PreviousFormMethod == undefined || NextFormMethod == undefined) {
	          PreviousFormMethod = "";
	          NextFormMethod = "";
	      }
	      else {
	          PreviousFormMethod = " "+PreviousFormMethod;
	          NextFormMethod = " "+NextFormMethod;
	      }
	  
	   
	  
	      var egggroups;
	  
	      if (finaldataEggGroup[i]["Secondary_"+JSONPath_EggGroup] != undefined) {
	          egggroups = finaldataEggGroup[i]["Primary_"+JSONPath_EggGroup]+" or "+finaldataEggGroup[i]["Secondary_"+JSONPath_EggGroup];
	      }
	      else {
	          egggroups = finaldataEggGroup[i]["Primary_"+JSONPath_EggGroup];
	      }
	  }
	  
	  
	  for (var q = 0; q < evoprevious; q++) {
	  
	  
	      var prv = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie].split(",")[q];
	  
	     
	      var dataEvolutionPrevious = document.createElement("div");
	      var dataEvolutionPreviousContent = document.createElement("div");
	      var dataEvolutionPreviousMain = document.createElement("main");
	      var dataEvolutionPreviousButton = document.createElement("button");
	      var dataEvolutionPreviousDescription = document.createElement("p");
	      var dataEvolutionPreviousIDNational = document.createElement("h6");
	      var dataEvolutionPreviousName = document.createElement("h4");
	      var dataEvolutionPreviousToggle = document.createElement("div");
	      var dataEvolutionPreviousImg = document.createElement("img");
	  
	  
	      dataEvolutionPrevious.classList.add("data-evolution");
	      dataEvolutionPrevious.setAttribute("name","previous-" + (q+1) + "/" + evoprevious);
	      dataEvolutionPreviousContent.classList.add("data-evolution-content");
	      dataEvolutionPreviousMain
	      dataEvolutionPreviousButton.classList.add("data-modal-close-open")
	      dataEvolutionPreviousButton.value = getPokémonID(prv);
	      dataEvolutionPreviousImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonID(prv) + ".png";
	      dataEvolutionPreviousImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	      dataEvolutionPreviousIDNational.innerText = "#" + getPokémonID(prv);
	      dataEvolutionPreviousName.classList.add("data-evolution-name");
	      dataEvolutionPreviousName.innerText = prv;
	      dataEvolutionPreviousToggle.classList.add("data-evolution-toggle");
	      dataEvolutionPreviousToggle.setAttribute("onclick","this.previousElementSibling.classList.toggle('active');");
	  
	      for (var u = 0; u < EggArr4.length; u++) {
	          if (u == 0) {
	          dataEvolutionPreviousDescription.innerHTML = "Breed " + EggArr4[u] + " with " + EggArr3[u];
	          }
	          else {
	              dataEvolutionPreviousDescription.innerHTML += "<br>Breed " + EggArr4[u] + " with " + EggArr3[u];
	          }
	      }
	  
	  
	      dataEvolutionPreviousButton.appendChild(dataEvolutionPreviousIDNational);
	      dataDivContent.appendChild(dataEvolutionPrevious);
	      dataEvolutionPrevious.appendChild(dataEvolutionPreviousContent);
	      dataEvolutionPreviousContent.appendChild(dataEvolutionPreviousMain);
	      dataEvolutionPreviousMain.appendChild(dataEvolutionPreviousButton);
	      dataEvolutionPreviousMain.appendChild(dataEvolutionPreviousDescription);
	      dataEvolutionPreviousButton.appendChild(dataEvolutionPreviousName);
	      dataEvolutionPreviousContent.appendChild(dataEvolutionPreviousToggle);
	      dataEvolutionPreviousToggle.appendChild(dataEvolutionPreviousImg);
	  
	      
	   
	  
	  }
	  
	  
	  
	  for (var q = 0; q < evonext; q++) {
	  
	      var dataEvolutionNext = document.createElement("div");
	      var dataEvolutionNextContent = document.createElement("div");
	      var dataEvolutionNextMain = document.createElement("main");
	      var dataEvolutionNextButton = document.createElement("button");
	      var dataEvolutionNextIDNational = document.createElement("h6");
	      var dataEvolutionNextName = document.createElement("h4");
	      var dataEvolutionNextDescription = document.createElement("p");
	      var dataEvolutionNextToggle = document.createElement("div");
	      var dataEvolutionNextImg = document.createElement("img");
	     
	     
	      dataEvolutionNext.classList.add("data-evolution");
	      dataEvolutionNext.setAttribute("name","next-" + (q+1) + "/" + evonext)
	      dataEvolutionNextContent.classList.add("data-evolution-content");
	      dataEvolutionNextMain
	      dataEvolutionNextButton.classList.add("data-modal-close-open")
	      dataEvolutionNextButton.value = getPokémonID(Next);
	      dataEvolutionNextImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonID(Next) + ".png";
	      dataEvolutionNextImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	     
	      dataEvolutionNextIDNational.innerText = "#" + getPokémonID(Next);
	      
	      dataEvolutionNextName.classList.add("data-evolution-name");
	      dataEvolutionNextName.innerText = Next;
	      dataEvolutionNextToggle.classList.add("data-evolution-toggle");
	      dataEvolutionNextToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active');");
	  
	  
	      if (PreviousNext != "") {
	          if(PreviousNext.length >= 1) {
	              for (var u = 0; u < PreviousNext.split(",").length; u++) {
	                  dataEvolutionNextDescription.innerHTML += "Evolve "+PreviousNext.split(",")[u]+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod+"<br>";
	              }
	          }
	          else {
	              for (var u = 0; u < 1; u++) {
	                  dataEvolutionNextDescription.innerHTML += "Evolve "+NextPrevious.split(",")[u]+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod+"<br>";
	              }
	          }
	      }
	      else {
	          dataEvolutionNextDescription.innerHTML = "Evolve "+NextPrevious+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod;
	      }
	        
	  
	      dataEvolutionNextButton.appendChild(dataEvolutionNextIDNational);
	     
	      dataDivContent.appendChild(dataEvolutionNext);
	      dataEvolutionNext.appendChild(dataEvolutionNextContent);
	      dataEvolutionNextContent.appendChild(dataEvolutionNextToggle);
	      dataEvolutionNextToggle.appendChild(dataEvolutionNextImg);
	  
	      dataEvolutionNextContent.appendChild(dataEvolutionNextMain);
	      dataEvolutionNextMain.appendChild(dataEvolutionNextButton);
	      dataEvolutionNextButton.appendChild(dataEvolutionNextName);
	      dataEvolutionNextMain.appendChild(dataEvolutionNextDescription);
	  
	  
	  }
	  
	  
	  */
	document.getElementById("data").appendChild(dataDiv);
	dataDiv.appendChild(dataDivOverlay);
	dataDiv.appendChild(dataDivContent);
	dataDivContent.appendChild(dataForm);
	dataDivContent.appendChild(dataAside1);
	dataAside1.appendChild(dataAside1DivPortrait);
	dataAside1DivPortrait.appendChild(dataAside1DivPortraitContent);
	dataAside1DivPortraitContent.appendChild(dataAside1Portrait);
	dataAside2MetadataStats.appendChild(dataAside1StatsEVSelector);
	dataAside1.appendChild(dataAside1DivIdNameOuter);
	dataAside1DivIdNameOuter.appendChild(dataAside1DivIdName);
	dataAside1DivIdName.appendChild(dataAside1IDNational);
	dataAside1DivIdName.appendChild(dataAside1DivIdNameBreak);
	dataAside1DivIdName.appendChild(dataAside1Name);
	dataAside1.appendChild(dataAside1DebutCategoryOuter);
	dataAside1DebutCategoryOuter.appendChild(dataAside1DebutCategory);
	dataAside1DebutCategory.appendChild(dataAside1Category);
	dataAside1DebutCategory.appendChild(dataAside1DebutCategoryBreak);
	dataAside1DebutCategory.appendChild(dataAside1Debut);
	dataAside1DebutCategoryOuter.appendChild(dataAside1Type);
	dataDivContent.appendChild(dataAside2);
	dataAside2AreaDiv.appendChild(dataAside2MapContain);
	dataAside2MapContain.appendChild(dataAside2MapZoomReset);
	dataAside2MapContain.appendChild(dataAside2MapZoomOut);
	dataAside2MapContain.appendChild(dataAside2MapZoomIn);
	dataAside2MapContain.appendChild(dataAside2MapZoomFullscreen);
	dataAside2MapContain.appendChild(dataAside2Map);
	dataAside2Map.appendChild(dataAside2MapPanzoom);
	dataAside2MapPanzoom.appendChild(dataAside2MapImage);
	dataAside2MapPanzoom.appendChild(dataAside2MapMark);
	dataAside2MapMark.appendChild(dataAside2MapMarkImage);
	dataDivContent.appendChild(dataAside2);
	dataAside2.appendChild(dataNavigation);
	dataAside2.appendChild(dataAside2Metadata);
	dataAside2Metadata.appendChild(dataAside2DescriptionOuter);
	dataAside2DescriptionOuter.appendChild(dataAside2Description);
	dataAside2MetadataSidebarOuter.appendChild(dataAside2MetadataStats);
	var dataAside2MetadataPopup = document.createElement("div");
	var dataAside2MetadataPopupOuter = document.createElement("div");
	var dataAside2MetadataPopupSpan1 = document.createElement("span");
	var dataAside2MetadataPopupSpan1ID = document.createElement("h4");
	var dataAside2MetadataPopupSpan1Icon = document.createElement("img");
	var dataAside2MetadataPopupSpan2 = document.createElement("span");
	var dataAside2MetadataPopupSpan2Title = document.createElement("h2");
	var dataAside2MetadataPopupSpan2Description = document.createElement("p");
	var dataAside2MetadataPopupTitleExit1 = document.createElement("button");
	var dataAside2MetadataPopupTitleExit2 = document.createElement("button");
	var dataAside2MetadataPopupListOuter = document.createElement("div");
	var dataAside2MetadataPopupList = document.createElement("ul");
	dataAside2MetadataPopup.classList.add("data-popup");
	dataAside2MetadataPopupListOuter.setAttribute("name", "list");
	dataAside2MetadataPopupTitleExit1.innerHTML = "<p>«</p>";
	dataAside2MetadataPopupTitleExit1.setAttribute("name", "up");
	dataAside2MetadataPopupTitleExit2.innerHTML = "<p>»</p>";
	dataAside2MetadataPopupTitleExit2.setAttribute("name", "down");
	dataAside2Metadata.appendChild(dataAside2MetadataPopup);
	dataAside2MetadataPopup.appendChild(dataAside2MetadataPopupOuter);
	dataAside2MetadataPopupOuter.appendChild(dataAside2MetadataPopupSpan1);
	dataAside2MetadataPopupSpan1.appendChild(dataAside2MetadataPopupSpan1ID);
	dataAside2MetadataPopupSpan1.appendChild(dataAside2MetadataPopupSpan1Icon);
	dataAside2MetadataPopupOuter.appendChild(dataAside2MetadataPopupSpan2);
	dataAside2MetadataPopupSpan2.appendChild(dataAside2MetadataPopupSpan2Title);
	dataAside2MetadataPopupSpan2.appendChild(dataAside2MetadataPopupSpan2Description);
	dataAside2MetadataPopupOuter.appendChild(dataAside2MetadataPopupTitleExit1);
	dataAside2MetadataPopupOuter.appendChild(dataAside2MetadataPopupTitleExit2);
	dataAside2MetadataPopup.appendChild(dataAside2MetadataPopupListOuter);
	dataAside2MetadataPopupListOuter.appendChild(dataAside2MetadataPopupList);
	dataAside2Metadata.appendChild(dataAside2MetadataSidebarOuter);
	dataAside2MetadataSidebarOuter.appendChild(dataAside2MetadataSidebar);
	dataAside2MetadataSidebarCatchRateOuter.appendChild(dataAside2MetadataSidebarCatchRateToggle);
	dataAside2MetadataSidebarCatchRateToggle.appendChild(dataAside2MetadataSidebarCatchRateContent);
	dataAside2MetadataSidebarCatchRateContent.appendChild(dataAside2MetadataSidebarCatchRateTitle);
	dataAside2MetadataSidebarCatchRateContent.appendChild(dataAside2MetadataSidebarCatchRate);
	dataAside2MetadataSidebarRow4.appendChild(dataAside2MetadataSidebarExpYieldOuter);
	dataAside2MetadataSidebarExpYieldOuter.appendChild(dataAside2MetadataSidebarExpYieldToggle);
	dataAside2MetadataSidebarExpYieldToggle.appendChild(dataAside2MetadataSidebarExpYieldContent);
	dataAside2MetadataSidebarExpYieldContent.appendChild(dataAside2MetadataSidebarExpYieldTitle);
	dataAside2MetadataSidebarExpYieldContent.appendChild(dataAside2MetadataSidebarExpYield);
	dataAside2MetadataSidebarRow4.appendChild(dataAside2MetadataSidebarLevelRateOuter);
	dataAside2MetadataSidebarLevelRateOuter.appendChild(dataAside2MetadataSidebarLevelRateToggle);
	dataAside2MetadataSidebarLevelRateToggle.appendChild(dataAside2MetadataSidebarLevelRateContent);
	dataAside2MetadataSidebarLevelRateContent.appendChild(dataAside2MetadataSidebarLevelRateTitle);
	dataAside2MetadataSidebarLevelRateContent.appendChild(dataAside2MetadataSidebarLevelRate);
	var baseev = ["Base Stats", "EV Yield"];
	for(var q = 0; q < baseev.length; q++) {
		var dataAside1StatsEVSelectorInput = document.createElement("input");
		var dataAside1StatsEVSelectorLabel = document.createElement("label");
		dataAside1StatsEVSelectorInput.setAttribute("type", "radio");
		dataAside1StatsEVSelectorInput.setAttribute("name", "data-baseev-" + id);
		dataAside1StatsEVSelectorInput.setAttribute("id", "data-baseev-" + id + "-" + baseev[q].toLowerCase().replace(" ", ""));
		dataAside1StatsEVSelectorInput.setAttribute("alt", baseev[q].toLowerCase().replace(" ", ""));
		dataAside1StatsEVSelectorInput.setAttribute("value", q);
		dataAside1StatsEVSelectorInput.setAttribute("onclick", "var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');var node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='flex';");
		dataAside1StatsEVSelectorLabel.setAttribute("for", "data-baseev-" + id + "-" + baseev[q].toLowerCase().replace(" ", ""));
		dataAside1StatsEVSelectorLabel.innerText = baseev[q];
		dataAside1StatsEVSelector.appendChild(dataAside1StatsEVSelectorInput);
		dataAside1StatsEVSelector.appendChild(dataAside1StatsEVSelectorLabel);
		if(q == 0) {
			dataAside1StatsEVSelectorInput.setAttribute("checked", "");
		}
		var dataAside1StatsEVUl = document.createElement("ul");
		dataAside1StatsEVUl.setAttribute("name", baseev[q].toLowerCase().replace(" ", ""));
		dataAside2MetadataStats.appendChild(dataAside1StatsEVUl);
		for(var u = 0; u < Stats.length; u++) {
			var dataAside1StatEV = document.createElement("div");
			var dataAside1StatEVValue = document.createElement("li");
			var dataAside1StatsEVSpan = document.createElement("span");
			dataAside1StatEV.setAttribute("name", Stats[u].toLowerCase().replace(" ", "").replace(".", ""));
			dataAside1StatEV.innerText = Stats[u];
			dataAside1StatEV.setAttribute("dataname", "value");
			dataAside1StatEVValue.classList.add(baseev[q].toLowerCase().replace(" ", "") + "-" + Stats[u].toLowerCase().replace(" ", "").replace(".", ""));
			dataAside1StatsEVSpan.setAttribute("dataname", "value");
			dataAside1StatsEVSpan.setAttribute("value", "");
			dataAside1StatsEVUl.appendChild(dataAside1StatEV);
			dataAside1StatsEVUl.appendChild(dataAside1StatEVValue);
			dataAside1StatEVValue.appendChild(dataAside1StatsEVSpan);
		}
	}
	var dataAside2LearnsetDiv = document.createElement("div");
	var dataAside2Learnset = document.createElement("div");
	dataAside2LearnsetDiv.classList.add("data-learnset");
	dataAside2LearnsetDiv.setAttribute("id", "data-learnset" + id);
	dataAside2Learnset.classList.add("data-learnset-content");
	dataAside2.appendChild(dataAside2LearnsetDiv);
	dataAside2LearnsetDiv.appendChild(dataAside2Learnset);
	var dataAside2LearnsetOuter = document.createElement("div");
	var dataAside2LearnsetUl = document.createElement("ul");
	var dataAside2LearnsetTitle = document.createElement("h5");
	var dataAside2LearnsetTitleLi = document.createElement("li");
	dataAside2LearnsetOuter.setAttribute("id", "data-learnset-option");
	dataAside2LearnsetOuter.classList.add("data-learnset-option");
	dataAside2Learnset.appendChild(dataAside2LearnsetOuter);
	dataAside2LearnsetOuter.appendChild(dataAside2LearnsetTitle);
	dataAside2LearnsetTitle.appendChild(dataAside2LearnsetTitleLi);
	dataAside2LearnsetOuter.appendChild(dataAside2LearnsetUl);
	var categoriez = ["Source", "Move", "Type", "Category", "Power", "Accuracy", "PP", ];
	for(u = 0; u < categoriez.length; u++) {
		var dataAside2LearnsetTitleLiText = document.createElement("p");
		dataAside2LearnsetTitleLiText.innerText = categoriez[u];
		dataAside2LearnsetTitleLi.appendChild(dataAside2LearnsetTitleLiText);
	}
	dataAside2.appendChild(dataAside2AreaDiv);
	dataAside2AreaDiv.appendChild(dataAside2Area);
	dataAside2Area.appendChild(dataAside2AreaTitle);
	dataAside2Area.appendChild(dataAside2AreaText);
	if(HeldItem == true) {
		var dataAside2MetadataSidebarRow5 = document.createElement("div");
		var dataAside2MetadataSidebarHeldItemOuter = document.createElement("span");
		var dataAside2MetadataSidebarHeldItemTitle = document.createElement("h5");
		dataAside2MetadataSidebarHeldItemOuter.classList.add("data-sidebar-helditem");
		dataAside2MetadataSidebarHeldItemOuter.setAttribute("name", "Held Item");
		dataAside2MetadataSidebarHeldItemTitle.innerText = "Held Item";
		dataAside2MetadataSidebar.appendChild(dataAside2MetadataSidebarRow5);
		dataAside2MetadataSidebarRow5.appendChild(dataAside2MetadataSidebarHeldItemOuter);
		dataAside2MetadataSidebarHeldItemOuter.appendChild(dataAside2MetadataSidebarHeldItemTitle);
		var dataAside2MetadataSidebarHeldItem = document.createElement("div");
		dataAside2MetadataSidebarHeldItem.classList.add("data-sidebar-helditem-img-outer");
		dataAside2MetadataSidebarHeldItemOuter.appendChild(dataAside2MetadataSidebarHeldItem);
		for(q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
			var dataAside2MetadataSidebarHeldItemImg = document.createElement("img");
			dataAside2MetadataSidebarHeldItemImg.src = "";
			dataAside2MetadataSidebarHeldItemImg.title = "";
			dataAside2MetadataSidebarHeldItemImg.setAttribute("name", JSONPath_HeldItemPercentage[q]);
			dataAside2MetadataSidebarHeldItemImg.setAttribute("onerror", "this.src='./media/Images/Misc/FinalDex/Error.png'");
			dataAside2MetadataSidebarHeldItemImg.setAttribute("dataname", "value");
			dataAside2MetadataSidebarHeldItem.appendChild(dataAside2MetadataSidebarHeldItemImg);
		}
	}
    dataAside1TypePrimaryText.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonType, "Type", "Single");
	});
	dataAside1TypeSecondaryText.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonType, "Type", "Single");
	});

	dataAside1TypePrimaryImg.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonType, "Type", "Single");
	});
	dataAside1TypeSecondaryImg.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonType, "Type", "Single");
	});
	if(Ability.length >= 1) {
		dataAside2MetadataSidebarAbilityPrimary.addEventListener("click", function() {
			callPopUp(id, finaldataPokémonAbility, "Ability", "Single");
		});
		dataAside2MetadataSidebarAbilitySecondary.addEventListener("click", function() {
			callPopUp(id, finaldataPokémonAbility, "Ability", "Single");
		});
		if(Ability.length >= 3) {
			dataAside2MetadataSidebarAbilityHidden.addEventListener("click", function() {
				callPopUp(id, finaldataPokémonAbility, "Ability", "Single");
			});
		}
	}
	if(Egg == true) {
		dataAside2MetadataSidebarEggGroupPrimary.addEventListener("click", function() {
			callPopUp(id, finaldataPokémonEggGroup, "Egg Group", "Single");
		});
		dataAside2MetadataSidebarEggGroupSecondary.addEventListener("click", function() {
			callPopUp(id, finaldataPokémonEggGroup, "Egg Group", "Single");
		});
	}
	dataAside2MetadataSidebarCatchRateOuter.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonCatchRate, "Catch Rate", "Single");
	});
	if(Egg == true) {
		dataAside2MetadataSidebarHatchRateOuter.addEventListener("click", function() {
			callPopUp(id, finaldataPokémonHatchRate, "Hatch Rate", "Single");
		});
	}
    if(Gender == true) {
        dataAside2MetadataSidebarGenderRatioToggle.addEventListener("click", function() {
            callPopUp(id, finaldataPokémonGenderRatio, "Gender Ratio", "Custom2");
        });
    }
	dataAside2MetadataSidebarExpYieldOuter.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonExperienceYield, "Experience Yield", "Custom1");
	});
	dataAside2MetadataSidebarLevelRateOuter.addEventListener("click", function() {
		callPopUp(id, finaldataPokémonLevelingRate, "Leveling Rate", "Single");
	});
	var helditm = document.querySelectorAll("#data-modal" + id + " .data-sidebar-helditem-img-outer > img");
	for(q = 0; q < helditm.length; q++) {
		helditm[q].addEventListener("click", function() {
			callPopUp(id, finaldataPokémonHeldItem, "Held Item", "Single");
		});
	}
	dataAside2MetadataPopupTitleExit1.querySelector(":scope > p").addEventListener("click", function() {
		OpenExitPopUp(id, false);
	});
	dataAside2MetadataPopupTitleExit2.querySelector(":scope > p").addEventListener("click", function() {
		OpenExitPopUp(id, true);
	});
	showMetadataLearnsetArea();
	var baseEV = document.querySelectorAll("#data-modal" + id + " .data-stats > ul li span");
	for(q = 0; q < baseEV.length; q++) {
		if(baseEV[q].parentElement.parentElement.getAttribute("name") == "basestats") {
			baseEV[q].addEventListener("click", function() {
				callPopUp(id, finaldataPokémonBaseStats, "Base Stats", "Multiple");
			});
		} else if(baseEV[q].parentElement.parentElement.getAttribute("name") == "evyield") {
			baseEV[q].addEventListener("click", function() {
				callPopUp(id, finaldataPokémonEVYield, "EV Yield", "Multiple");
			});
		}
	}
	var baseEVTotal = document.querySelectorAll("#data-modal" + id + " .data-stats > ul div");
	for(q = 0; q < baseEVTotal.length; q++) {
		if(baseEVTotal[q].parentElement.getAttribute("name") == "basestats") {
			baseEVTotal[q].addEventListener("click", function() {
				callPopUp(id, finaldataPokémonBaseStats, "Base Stats", "Total");
			});
		} else if(baseEVTotal[q].parentElement.getAttribute("name") == "evyield") {
			baseEVTotal[q].addEventListener("click", function() {
				callPopUp(id, finaldataPokémonEVYield, "EV Yield", "Total");
			});
		}
	}
};
$("body").click(function(event) {
	if(!$(event.target).closest('.data-evolution[name*="previous"]').length && !$(event.target).is('.data-evolution[name*="previous"]')) {
		$('.data-evolution[name*="previous"] main').removeClass("active");
	}
	if(!$(event.target).closest('.data-evolution[name*="next"]').length && !$(event.target).is('.data-evolution[name*="next"]')) {
		$('.data-evolution[name*="next"] main').removeClass("active");
	}
});
var navChecker = [1];

function showMetadataLearnsetArea() {
	var MetadataButton = document.querySelectorAll('#data-navigation input[value="1"]');
	for(var i = 0; i < MetadataButton.length; i++) {
		MetadataButton[i].addEventListener("click", function() {
			this.parentElement.nextElementSibling.style.display = "flex";
			this.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
			this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
			navChecker.fill(1);
		});
	}
	var LearnsetButton = document.querySelectorAll('#data-navigation input[value="2"]');
	for(var i = 0; i < LearnsetButton.length; i++) {
		LearnsetButton[i].addEventListener("click", function() {
			this.parentElement.nextElementSibling.style.display = "none";
			this.parentElement.nextElementSibling.nextElementSibling.style.display = "flex";
			this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
			navChecker.fill(2);
		});
	}
	var AreaButton = document.querySelectorAll('#data-navigation input[value="3"]');
	for(var i = 0; i < AreaButton.length; i++) {
		AreaButton[i].addEventListener("click", function() {
			this.parentElement.nextElementSibling.style.display = "none";
			this.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
			this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "flex";
			navChecker.fill(3);
		});
	}
}

function navKeeper(id) {
	var MetadataButton = document.querySelector("#data-modal" + id + ' #data-navigation input[value="1"]');
	var LearnsetButton = document.querySelector("#data-modal" + id + ' #data-navigation input[value="2"]');
	var AreaButton = document.querySelector("#data-modal" + id + ' #data-navigation input[value="3"]');
	if(navChecker == 1) {
		MetadataButton.click();
	}
	if(navChecker == 2) {
		LearnsetButton.click();
	}
	if(navChecker == 3) {
		AreaButton.click();
	}
}

function resetZoom(id) {
	var Zoom = document.querySelector("#data-modal" + id + " .data-zoom-reset");
	Zoom.click();
}

function modalData() {
	var int;
	var id;
	var def;
	int = this.getAttribute("value");
	def = true;
	for(var i = 0; i < finaldataPokémon.length; i++) {
		if(int != undefined) {
			if(i == int) {
				id = finaldataPokémon[i]["ID"];
				if(!finaldataPokémon[i]["Variant"].includes("Default")) {
					def = false;
				}
			}
		}
	}
	var activeWindow;
	activeWindow = document.querySelector(".data-modal-outer.open");
	if(activeWindow != null) {
		activeWindow.classList.remove("open");
	}
	if(id != undefined) {
		var currentWindow;
		var formSpec;
		var formFirst;
		currentWindow = document.querySelector("#data-modal" + id);
		if(currentWindow == null) {
			createData(id, int);
			panZoomModal(id);
			if(int != undefined) {
				formSpec = document.querySelector("#data-modal" + id + " .data-form > input[value='" + int + "'");
				formFirst = document.querySelector("#data-modal" + id + " .data-form > input:first-child");
				if(def == false) {
					if(formSpec != null) {
						formSpec.click();
					}
				} else if(def == true) {
					if(formFirst != null) {
						formFirst.click();
					}
				}
			}
		}
		currentWindow = document.querySelector("#data-modal" + id);
		if(currentWindow != null) {
			currentWindow.classList.add("open");
		}
		navKeeper(id);
		resetZoom(id);
	}
	dexCheck();
}

function panZoomModal(x) {
	$("#data-map-panzoom-" + x).panzoom({
		$zoomIn: $(".data-zoom-in"),
		$zoomOut: $(".data-zoom-out"),
		$reset: $(".data-zoom-reset"),
		startTransform: "scale(1)",
		duration: 200,
		easing: "ease-in-out",
		increment: 0.5,
		minScale: 1,
		contain: "invert",
	});
	$("#data-modal" + x + " .data-zoom-fullscreen").click(function(e) {
		$("#data-modal" + x + " #data-map-contain").toggleClass("fullscreen");
		$("#data-modal" + x + " .data-zoom-fullscreen").toggleClass("fullscreen");
	});
	$("#data-map-panzoom-" + x).keydown(function(keyPressed) {
		if(keyPressed.keyCode == 27) {
			$("#data-modal" + x + " .data-zoom-fullscreen").removeClass("fullscreen");
		}
	});
	$("#data-map-panzoom-" + x).mousedown(function(b) {
		if(b.which == 1) {} else if(b.which == 2) {
			$("#data-modal" + x + " #data-map-contain").toggleClass("fullscreen");
			$("#data-modal" + x + " .data-zoom-fullscreen").toggleClass("fullscreen");
		} else if(b.which == 3) {}
	});
	$("#data-map-panzoom-" + x).mousedown(doubleClicker(function(b, e) {
		if(b.which == 1) {
			$("#data-modal" + x + " .data-zoom-in").click();
		} else if(b.which == 2) {} else if(b.which == 3) {
			$("#data-modal" + x + " .data-zoom-out").click();
		}
	}));
}

function doubleClicker(handler) {
	var timeout = 0,
		clicked = false;
	return function(e) {
		e.preventDefault();
		if(clicked) {
			clearTimeout(timeout);
			clicked = false;
			return handler.apply(this, arguments);
		} else {
			clicked = true;
			timeout = setTimeout(function() {
				clicked = false;
			}, 1000);
		}
	};
}