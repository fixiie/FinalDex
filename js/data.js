var createData = function(id, i) {
	var i;
	var id;
	var dataDiv = document.createElement("div");
	var dataDivOverlay = document.createElement("div");
	var dataDivContent = document.createElement("div");
	var dataNavigation = document.createElement("section");
	var dataAside2MapContain = document.createElement("div");
	var dataAside2MapFullscreen = document.createElement("span");
	var dataAside2Map = document.createElement("div");
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
			dataFormInput.setAttribute("type","radio");
			dataFormInput.setAttribute("name","data-form-selector"+id);
			dataFormInput.setAttribute("id","data-form-selector-"+u);
			dataFormLabel.title = getPokémonName(u);
			if (variant.length <= 1) {
				dataFormLabel.title += "\n"+getPokémonName(u)+" cannot change form.";
			}
			else if (finaldataPokémonFormChange[u][JSONPath_FormChange] != undefined) {
				dataFormLabel.title += "\n"+finaldataPokémonFormChange[u][JSONPath_FormChange];
			}
			dataFormInput.value = u;
			dataFormLabel.setAttribute("for","data-form-selector-"+u);
			dataFormImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(u,"Box")+".png";
			dataFormImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			dataForm.appendChild(dataFormInput);
			dataForm.appendChild(dataFormLabel);
			dataFormLabel.appendChild(dataFormImg);
	
			if(!variant.length >= 2) {
				dataFormInput.setAttribute("checked","");
			}
			dataFormInput.addEventListener("click", loadData);
		}
	}

	icount = [];

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
	var dataAside2Area = document.createElement("ul");
	dataDiv.setAttribute("id","data-modal"+id);
	dataDiv.classList.add("data-modal-outer");
	dataDivOverlay.classList.add("data-modal-overlay");
	dataDivContent.classList.add("data-modal");
	dataNavigation.setAttribute("id","data-navigation");
	dataDivOverlay.addEventListener("click", modalData);
	dataForm.classList.add("data-form");
	var navz = ["metadata","learnset","area"];
	var navztitles = ["Data","Learnset","Area"];
	for(var q = 0; q < navz.length; q++) {
		var dataNavigationInput = document.createElement("input");
		var dataNavigationLabel = document.createElement("label");
		dataNavigationInput.setAttribute("type","radio");
		dataNavigationInput.setAttribute("name","data-navigation"+id);
		dataNavigationInput.setAttribute("id","data-navigation-"+navz[q]+id);
		dataNavigationInput.classList.add("data-navigation-"+navz[q]);
		dataNavigationInput.setAttribute("value", q+1);
		if(q == 0) {
			dataNavigationInput.setAttribute("checked","");
		}
		dataNavigationLabel.setAttribute("for","data-navigation-"+navz[q]+id);
		dataNavigationLabel.innerText = navztitles[q];
		dataNavigation.appendChild(dataNavigationInput);
		dataNavigation.appendChild(dataNavigationLabel);
	}
	dataAside1.classList.add("data-aside1");
	dataAside1DivPortrait.classList.add("data-portrait");
	dataAside1DivPortraitContent.classList.add("data-portrait-content");
	dataAside1Portrait.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	dataAside1Portrait.setAttribute("id","data-portrait-img-"+id);
	dataAside1StatsEVSelector.classList.add("data-baseev-selector");
	dataAside1DivIdNameOuter.classList.add("data-idname-outer");
	dataAside1DivIdName.classList.add("data-idname");
	dataAside1IDNational.classList.add("data-nationalID");
	dataAside1IDNational.innerText = "#"+id;
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
	dataAside1TypePrimaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
	dataAside1TypePrimaryImg.setAttribute("dataname","value");
	dataAside1Type.appendChild(dataAside1TypePrimaryOuter);
	dataAside1TypePrimaryOuter.appendChild(dataAside1TypePrimary);
	dataAside1TypePrimary.appendChild(dataAside1TypePrimaryImg);
	dataAside1TypePrimary.appendChild(dataAside1TypePrimaryText);
	var dataAside1TypeSecondaryOuter = document.createElement("span");
	var dataAside1TypeSecondary = document.createElement("span");
	var dataAside1TypeSecondaryImg = document.createElement("img");
	var dataAside1TypeSecondaryText = document.createElement("h3");
	dataAside1TypeSecondaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
	dataAside1TypeSecondaryImg.setAttribute("dataname","value");
	dataAside1Type.appendChild(dataAside1TypeSecondaryOuter);
	dataAside1TypeSecondaryOuter.appendChild(dataAside1TypeSecondary);
	dataAside1TypeSecondary.appendChild(dataAside1TypeSecondaryImg);
	dataAside1TypeSecondary.appendChild(dataAside1TypeSecondaryText);
	dataAside2.classList.add("data-aside2");
	dataAside2MapContain.setAttribute("id","data-map-contain");
	dataAside2MapFullscreen.classList.add("data-fullscreen");
	dataAside2Map.setAttribute("id","data-map");
	dataAside2Map.setAttribute("name", Region+"-"+MEDIAPath_Map);
	dataAside2MapImage.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png";
	dataAside2MapImage.onload = function() {
		dataAside2MapImage.setAttribute("width", dataAside2MapImage.width+"px");
		dataAside2MapImage.setAttribute("height", dataAside2MapImage.height+"px");
	};
	dataAside2MapImage.classList.add("data-img-main");
	dataAside2MapImage.setAttribute("name", Region+"-"+MEDIAPath_Map);
	dataAside2MapMark.classList.add("data-img-mark-outer");
	dataAside2MapMarkImage.classList.add("data-img-mark");
	dataAside2Metadata.classList.add("data");
	dataAside2Metadata.setAttribute("id","data"+id);
	dataAside2DescriptionOuter.classList.add("data-description");
	dataAside2DescriptionOuter.classList.add("scroll");
	dataAside2MetadataSidebarOuter.setAttribute("id","data-sidebar-outer");
	dataAside2MetadataSidebar.setAttribute("id","data-sidebar");
	dataAside2MetadataSidebar.setAttribute("name", Generation+"-"+GameID);
	dataAside2MetadataStats.classList.add("data-stats");
	dataAside2MetadataSidebarCatchRateOuter.classList.add("data-sidebar-catchrate");
	dataAside2MetadataSidebarCatchRateOuter.setAttribute("name","Catch Rate");
	dataAside2MetadataSidebarCatchRateToggle.classList.add("data-sidebar-catchrate-toggle");
	dataAside2MetadataSidebarCatchRateContent.classList.add("data-sidebar-catchrate-content");
	dataAside2MetadataSidebarCatchRateTitle.innerText = "Catch Rate";
	dataAside2MetadataSidebarCatchRate.setAttribute("id","data-sidebar-catchrate");
	dataAside2MetadataSidebarCatchRate.setAttribute("dataname","value");
	dataAside2MetadataSidebarCatchRate.setAttribute("value","");
	dataAside2MetadataSidebarLevelRateOuter.classList.add("data-sidebar-levelrate");
	dataAside2MetadataSidebarLevelRateOuter.setAttribute("name","Leveling Rate");
	dataAside2MetadataSidebarLevelRateToggle.classList.add("data-sidebar-levelrate-toggle");
	dataAside2MetadataSidebarLevelRateContent.classList.add("data-sidebar-levelrate-content");
	dataAside2MetadataSidebarLevelRateTitle.innerText = "Leveling Rate";
	dataAside2MetadataSidebarLevelRate.setAttribute("id","data-sidebar-levelrate");
	dataAside2MetadataSidebarLevelRate.setAttribute("dataname","value");
	dataAside2MetadataSidebarLevelRate.setAttribute("value","");
	dataAside2MetadataSidebarExpYieldOuter.classList.add("data-sidebar-expyield");
	dataAside2MetadataSidebarExpYieldOuter.setAttribute("name","Experience Yield");
	dataAside2MetadataSidebarExpYieldToggle.classList.add("data-sidebar-expyield-toggle");
	dataAside2MetadataSidebarExpYieldContent.classList.add("data-sidebar-expyield-content");
	dataAside2MetadataSidebarExpYieldTitle.innerText = "Experience Yield";
	dataAside2MetadataSidebarExpYield.setAttribute("id","data-sidebar-expyield");
	dataAside2MetadataSidebarExpYield.setAttribute("dataname","value");
	dataAside2MetadataSidebarExpYield.setAttribute("value","");
	dataAside2AreaDiv.classList.add("data-area");
	dataAside2AreaDiv.setAttribute("id","data-area"+id);
	dataAside2Area.classList.add("data-area-content");

	for(q = 0; q < JSONPath_Pokédex.length; q++) {
		var dataAside1IDRegional = document.createElement("span");
		dataAside1IDRegional.classList.add("data-regionalID-"+[q+1]);
		if(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]] != null) {
			dataAside1IDRegional.innerText = "#"+finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]];
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
		dataAside2MetadataSidebarAbilityPrimary.setAttribute("id","data-sidebar-ability-primary");
		dataAside2MetadataSidebarAbilityPrimary.setAttribute("title","Primary Ability");
		dataAside2MetadataSidebarAbilityPrimary.setAttribute("dataname","value");
		dataAside2MetadataSidebarAbilityPrimary.innerText = "Primary Ability";
		dataAside2MetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataAside2MetadataSidebarAbilityPrimary);
		var dataAside2MetadataSidebarAbilitySecondary = document.createElement("h5");
		dataAside2MetadataSidebarAbilitySecondary.setAttribute("id","data-sidebar-ability-secondary");
		dataAside2MetadataSidebarAbilitySecondary.setAttribute("title","Secondary Ability");
		dataAside2MetadataSidebarAbilitySecondary.setAttribute("dataname","value");
		dataAside2MetadataSidebarAbilitySecondary.innerText = "Secondary Ability";
		dataAside2MetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataAside2MetadataSidebarAbilitySecondary);
		if(Ability.length >= 3) {
			var dataAside2MetadataSidebarAbilityHiddenOuter = document.createElement("span");
			var dataAside2MetadataSidebarAbilityHidden = document.createElement("h5");
			dataAside2MetadataSidebarAbilityHidden.setAttribute("id","data-sidebar-ability-hidden");
			dataAside2MetadataSidebarAbilityHidden.setAttribute("title","Hidden Ability");
			dataAside2MetadataSidebarAbilityHidden.setAttribute("dataname","value");
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
		dataAside2MetadataSidebarHatchRateOuter.setAttribute("name","Hatch Rate");
		dataAside2MetadataSidebarHatchRateToggle.classList.add("data-sidebar-hatchrate-toggle");
		dataAside2MetadataSidebarHatchRateContent.classList.add("data-sidebar-hatchrate-content");
		dataAside2MetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
		dataAside2MetadataSidebarHatchRate.setAttribute("id","data-sidebar-hatchrate");
		dataAside2MetadataSidebarHatchRate.setAttribute("dataname","value");
		dataAside2MetadataSidebarHatchRate.setAttribute("value","");
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
		dataAside2MetadataSidebarGenderRatioOuter.setAttribute("name","Gender Ratio");
		dataAside2MetadataSidebarGenderRatioTitle.innerText = "Gender ratio";
		dataAside2MetadataSidebarGenderRatioBar.classList.add("data-sidebar-genderratio-bar");
		dataAside2MetadataSidebarGenderRatioToggle.classList.add("data-sidebar-genderratio-toggle");
		dataAside2MetadataSidebarGenderRatioToggle.setAttribute("dataname","value");
		dataAside2MetadataSidebarGenderRatioMale.setAttribute("name","male");
		dataAside2MetadataSidebarGenderRatioFemale.setAttribute("name","female");
		dataAside2MetadataSidebarGenderRatioGenderless.setAttribute("name","genderless");
		dataAside2MetadataSidebarGenderRatioGenderless.setAttribute("title","");
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
		dataAside2MetadataSidebarEggGroupOuter.setAttribute("name","Egg Group");
		dataAside2MetadataSidebarEggGroupTitle.innerText = "Egg Group";
		dataAside2MetadataSidebarEggGroupPrimaryOuter.setAttribute("name","Primary");
		dataAside2MetadataSidebarEggGroupPrimary.setAttribute("id","data-sidebar-egggroup1");
		dataAside2MetadataSidebarEggGroupPrimary.setAttribute("title","Primary Egg Group");
		dataAside2MetadataSidebarEggGroupPrimary.setAttribute("dataname","value");
		dataAside2MetadataSidebarEggGroupSecondaryOuter.setAttribute("name","Secondary");
		dataAside2MetadataSidebarEggGroupSecondary.setAttribute("id","data-sidebar-egggroup2");
		dataAside2MetadataSidebarEggGroupSecondary.setAttribute("title","Secondary Egg Group");
		dataAside2MetadataSidebarEggGroupSecondary.setAttribute("dataname","value");
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

      var d = getDefaultInt(i);

      var dataPrevious = document.createElement("div");
      var dataNext = document.createElement("div");
      dataPrevious.classList.add("data-previous");
      dataNext.classList.add("data-next");
      dataDivContent.appendChild(dataPrevious);
      dataDivContent.appendChild(dataNext);

	  if ((parseInt(getIntID(d,"")) - 1) > 0) {
        var dataPreviousNational = document.createElement("button");
        var dataPreviousNationalImg = document.createElement("img");
        
        dataPreviousNational.setAttribute("id","data-previous-national");
        dataPreviousNational.setAttribute("name","national");
        dataPreviousNational.setAttribute("value",getIntID("",(parseInt(getIntID(d,"")) - 1)));
        dataPreviousNational.title = "#"+(parseInt(getIntID(d,"")) - 1)+"\n"+finaldataPokémon[getIntID("",(parseInt(getIntID(d,"")) - 1))]["Pokémon"];
        dataPreviousNationalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",(parseInt(getIntID(d,"")) - 1)),"Box")+".png";
        dataPreviousNationalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
        
        dataPrevious.appendChild(dataPreviousNational);
        dataPreviousNational.appendChild(dataPreviousNationalImg);

        dataPreviousNational.addEventListener("click",modalData);
		dataPreviousNational.setAttribute("function","modalData");
	  }

	  if (finaldataPokémon[getIntID("",(parseInt(getIntID(d,""))+1))][JSONPath_Reference] == "true") {
        var dataNextNational = document.createElement("button");
        var dataNextNationalImg = document.createElement("img");
        
        dataNextNational.setAttribute("id","data-next-national");
        dataNextNational.setAttribute("name","national");
        dataNextNational.setAttribute("value",getIntID("",(parseInt(getIntID(d,""))+1)));
        dataNextNational.title = "#"+(parseInt(getIntID(d,""))+1)+"\n"+finaldataPokémon[getIntID("",(parseInt(getIntID(d,""))+1))]["Pokémon"];
        dataNextNationalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",(parseInt(getIntID(d,""))+1)),"Box")+".png";
        dataNextNationalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
        
        dataNext.appendChild(dataNextNational);
        dataNextNational.appendChild(dataNextNationalImg);

        dataNextNational.addEventListener("click",modalData);
		dataNextNational.setAttribute("function","modalData");
	  }
	  

	  for (q = 0; q < JSONPath_Pokédex.length; q++) {
	      var y = q+1;
	      var previousID = getRegionalID("-",getIntID(d,""),JSONPath_Pokédex[q]);
	      var nextID = getRegionalID("+",getIntID(d,""),JSONPath_Pokédex[q]);

	      if (previousID != undefined) {
	          var dataPreviousRegional = document.createElement("button");
	          var dataPreviousRegionalImg = document.createElement("img");
	  
	          dataPreviousRegional.setAttribute("id","data-previous-regional"+y);
	          dataPreviousRegional.setAttribute("name","regional"+y);
	          dataPreviousRegional.setAttribute("value",getIntID("",previousID));
	          dataPreviousRegional.title = "#"+finaldataPokémonPokédexID[getIntID("",previousID)][JSONPath_Pokédex[q]]+"\n"+finaldataPokémon[getIntID("",previousID)]["Pokémon"];
	          dataPreviousRegionalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",previousID),"Box")+".png";
	          dataPreviousRegionalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	          
	          dataPrevious.appendChild(dataPreviousRegional);
	          dataPreviousRegional.appendChild(dataPreviousRegionalImg);

              dataPreviousRegional.addEventListener("click",modalData);
			  dataPreviousRegional.setAttribute("function","modalData");
	      }
	      if (nextID != undefined) {
	          var dataNextRegional = document.createElement("button");
	          var dataNextRegionalImg = document.createElement("img");
	  
	          dataNextRegional.setAttribute("id","data-next-regional"+y); 
	          dataNextRegional.setAttribute("name","regional"+y);
	          dataNextRegional.setAttribute("value",getIntID("",nextID));
	          dataNextRegional.title = "#"+finaldataPokémonPokédexID[getIntID("",nextID)][JSONPath_Pokédex[q]]+"\n"+finaldataPokémon[getIntID("",nextID)]["Pokémon"];
	          dataNextRegionalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",nextID),"Box")+".png";
	          dataNextRegionalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	          
	          dataNext.appendChild(dataNextRegional);
	          dataNextRegional.appendChild(dataNextRegionalImg);

              dataNextRegional.addEventListener("click",modalData);
			  dataNextRegional.setAttribute("function","modalData");
	      }
	  }
	  
	  
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
	dataAside2MapContain.appendChild(dataAside2MapFullscreen);
	dataAside2MapContain.appendChild(dataAside2Map);
	dataAside2Map.appendChild(dataAside2MapImage);
	dataAside2Map.appendChild(dataAside2MapMark);
	dataAside2MapMark.appendChild(dataAside2MapMarkImage);
	dataDivContent.appendChild(dataAside2);
	dataAside2.appendChild(dataNavigation);
	dataAside2.appendChild(dataAside2Metadata);
	dataAside2Metadata.appendChild(dataAside2DescriptionOuter);
	dataAside2DescriptionOuter.appendChild(dataAside2Description);
	dataAside2MetadataSidebarOuter.appendChild(dataAside2MetadataStats);

	dataAside2MapFullscreen.addEventListener("click", function() {fullscreenIMG([dataAside2MapImage],0)});
	dataAside2Map.addEventListener("mousedown",function(event){if(event.button === 1){fullscreenIMG([dataAside2MapImage],0)}});


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
	dataAside2MetadataPopupListOuter.setAttribute("name","list");
	dataAside2MetadataPopupSpan1Icon.setAttribute("onerror","this.style.display='none'")
	dataAside2MetadataPopupTitleExit1.innerHTML = "<p>«</p>";
	dataAside2MetadataPopupTitleExit1.setAttribute("name","up");
	dataAside2MetadataPopupTitleExit2.innerHTML = "<p>»</p>";
	dataAside2MetadataPopupTitleExit2.setAttribute("name","down");
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
	var baseev = ["Base Stats","EV Yield"];
	for(var q = 0; q < baseev.length; q++) {
		var dataAside1StatsEVSelectorInput = document.createElement("input");
		var dataAside1StatsEVSelectorLabel = document.createElement("label");
		dataAside1StatsEVSelectorInput.setAttribute("type","radio");
		dataAside1StatsEVSelectorInput.setAttribute("name","data-baseev-"+id);
		dataAside1StatsEVSelectorInput.setAttribute("id","data-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
		dataAside1StatsEVSelectorInput.setAttribute("alt", baseev[q].toLowerCase().replace(" ",""));
		dataAside1StatsEVSelectorInput.setAttribute("value", q);
		dataAside1StatsEVSelectorInput.setAttribute("onclick","var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');var node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='flex';");
		dataAside1StatsEVSelectorLabel.setAttribute("for","data-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
		dataAside1StatsEVSelectorLabel.innerText = baseev[q];
		dataAside1StatsEVSelector.appendChild(dataAside1StatsEVSelectorInput);
		dataAside1StatsEVSelector.appendChild(dataAside1StatsEVSelectorLabel);
		if(q == 0) {
			dataAside1StatsEVSelectorInput.setAttribute("checked","");
		}
		var dataAside1StatsEVUl = document.createElement("ul");
		dataAside1StatsEVUl.setAttribute("name", baseev[q].toLowerCase().replace(" ",""));
		dataAside2MetadataStats.appendChild(dataAside1StatsEVUl);
		for(var u = 0; u < Stats.length; u++) {
			var dataAside1StatEV = document.createElement("div");
			var dataAside1StatEVValue = document.createElement("li");
			var dataAside1StatsEVSpan = document.createElement("span");
			dataAside1StatEV.setAttribute("name", Stats[u].toLowerCase().replace(" ","").replace(".",""));
			dataAside1StatEV.innerText = Stats[u];
			dataAside1StatEV.setAttribute("dataname","value");
			dataAside1StatEVValue.classList.add(baseev[q].toLowerCase().replace(" ","")+"-"+Stats[u].toLowerCase().replace(" ","").replace(".",""));
			dataAside1StatsEVSpan.setAttribute("dataname","value");
			dataAside1StatsEVSpan.setAttribute("value","");
			dataAside1StatsEVUl.appendChild(dataAside1StatEV);
			dataAside1StatsEVUl.appendChild(dataAside1StatEVValue);
			dataAside1StatEVValue.appendChild(dataAside1StatsEVSpan);
		}
	}
	var dataAside2LearnsetDiv = document.createElement("div");
	var dataAside2Learnset = document.createElement("div");
	dataAside2LearnsetDiv.classList.add("data-learnset");
	dataAside2LearnsetDiv.setAttribute("id","data-learnset"+id);
	dataAside2Learnset.classList.add("data-learnset-content");
	dataAside2.appendChild(dataAside2LearnsetDiv);
	dataAside2LearnsetDiv.appendChild(dataAside2Learnset);
	var dataAside2LearnsetOuter = document.createElement("div");
	var dataAside2LearnsetUl = document.createElement("ul");
	var dataAside2LearnsetTitle = document.createElement("h5");
	var dataAside2LearnsetTitleLi = document.createElement("li");
	dataAside2LearnsetOuter.setAttribute("id","data-learnset-option");
	dataAside2LearnsetOuter.classList.add("data-learnset-option");
	dataAside2Learnset.appendChild(dataAside2LearnsetOuter);
	dataAside2LearnsetOuter.appendChild(dataAside2LearnsetTitle);
	dataAside2LearnsetTitle.appendChild(dataAside2LearnsetTitleLi);
	dataAside2LearnsetOuter.appendChild(dataAside2LearnsetUl);
	var categoriez = ["Source","Move","Type","Category","Power","Accuracy","PP", ];
	for(u = 0; u < categoriez.length; u++) {
		var dataAside2LearnsetTitleLiText = document.createElement("p");
		dataAside2LearnsetTitleLiText.innerText = categoriez[u];
		dataAside2LearnsetTitleLi.appendChild(dataAside2LearnsetTitleLiText);
	}
	dataAside2.appendChild(dataAside2AreaDiv);
	dataAside2AreaDiv.appendChild(dataAside2Area);
	if(HeldItem == true) {
		var dataAside2MetadataSidebarRow5 = document.createElement("div");
		var dataAside2MetadataSidebarHeldItemOuter = document.createElement("span");
		var dataAside2MetadataSidebarHeldItemTitle = document.createElement("h5");
		dataAside2MetadataSidebarHeldItemOuter.classList.add("data-sidebar-helditem");
		dataAside2MetadataSidebarHeldItemOuter.setAttribute("name","Held Item");
		dataAside2MetadataSidebarHeldItemTitle.innerText = "Held Item";
		dataAside2MetadataSidebar.appendChild(dataAside2MetadataSidebarRow5);
		dataAside2MetadataSidebarRow5.appendChild(dataAside2MetadataSidebarHeldItemOuter);
		dataAside2MetadataSidebarHeldItemOuter.appendChild(dataAside2MetadataSidebarHeldItemTitle);
		var dataAside2MetadataSidebarHeldItem = document.createElement("div");
		dataAside2MetadataSidebarHeldItem.classList.add("data-sidebar-helditem-img-outer");
		dataAside2MetadataSidebarHeldItemOuter.appendChild(dataAside2MetadataSidebarHeldItem);
		for(q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
			var dataAside2MetadataSidebarHeldItemIcon = document.createElement("span");
			var dataAside2MetadataSidebarHeldItemImg = document.createElement("img");
			var dataAside2MetadataSidebarHeldItemText = document.createElement("h5");
			dataAside2MetadataSidebarHeldItemIcon.setAttribute("name", JSONPath_HeldItemPercentage[q]);
			dataAside2MetadataSidebarHeldItemIcon.setAttribute("dataname","value");
			dataAside2MetadataSidebarHeldItemImg.src = "";
			dataAside2MetadataSidebarHeldItemImg.title = "";
			dataAside2MetadataSidebarHeldItemImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
			dataAside2MetadataSidebarHeldItemText.innerText = "";
			dataAside2MetadataSidebarHeldItem.appendChild(dataAside2MetadataSidebarHeldItemIcon);
			dataAside2MetadataSidebarHeldItemIcon.appendChild(dataAside2MetadataSidebarHeldItemImg);
			dataAside2MetadataSidebarHeldItemIcon.appendChild(dataAside2MetadataSidebarHeldItemText);

		}
	}
    dataAside1TypePrimaryText.addEventListener("click", function() {callPopUp(id, finaldataPokémonType,"Type","Single");});
	dataAside1TypeSecondaryText.addEventListener("click", function() {callPopUp(id, finaldataPokémonType,"Type","Single");});

	dataAside1TypePrimaryImg.addEventListener("click", function() {callPopUp(id, finaldataPokémonType,"Type","Single");});
	dataAside1TypeSecondaryImg.addEventListener("click", function() {callPopUp(id, finaldataPokémonType,"Type","Single");});
	
	if(Ability.length >= 1) {
		dataAside2MetadataSidebarAbilityPrimary.addEventListener("click", function() {callPopUp(id, finaldataPokémonAbility,"Ability","Single");});
		dataAside2MetadataSidebarAbilitySecondary.addEventListener("click", function() {callPopUp(id, finaldataPokémonAbility,"Ability","Single");});
		if(Ability.length >= 3) {
			dataAside2MetadataSidebarAbilityHidden.addEventListener("click", function() {callPopUp(id, finaldataPokémonAbility,"Ability","Single");});
		}
	}
	if(Egg == true) {
		dataAside2MetadataSidebarEggGroupPrimary.addEventListener("click", function() {callPopUp(id, finaldataPokémonEggGroup,"Egg Group","Single");});
		dataAside2MetadataSidebarEggGroupSecondary.addEventListener("click", function() {callPopUp(id, finaldataPokémonEggGroup,"Egg Group","Single");});
	}
	dataAside2MetadataSidebarCatchRateOuter.addEventListener("click", function() {callPopUp(id, finaldataPokémonCatchRate,"Catch Rate","Single");});
	if(Egg == true) {
		dataAside2MetadataSidebarHatchRateOuter.addEventListener("click", function() {callPopUp(id, finaldataPokémonHatchRate,"Hatch Rate","Single");});
	}
    if(Gender == true) {
        dataAside2MetadataSidebarGenderRatioToggle.addEventListener("click", function() {callPopUp(id, finaldataPokémonGenderRatio,"Gender Ratio","Custom2");});
    }
	dataAside2MetadataSidebarExpYieldOuter.addEventListener("click", function() {callPopUp(id, finaldataPokémonExperienceYield,"Experience Yield","Custom1");});
	dataAside2MetadataSidebarLevelRateOuter.addEventListener("click", function() {callPopUp(id, finaldataPokémonLevelingRate,"Leveling Rate","Single");});
	var helditm = document.querySelectorAll("#data-modal"+id+" .data-sidebar-helditem-img-outer > span");
	for(q = 0; q < helditm.length; q++) {
		helditm[q].addEventListener("click", function() {callPopUp(id, finaldataPokémonHeldItem,"Held Item","Single");});
	}
	dataAside2MetadataPopupTitleExit1.querySelector(":scope > p").addEventListener("click", function() {OpenExitPopUp(id, false);});
	dataAside2MetadataPopupTitleExit2.querySelector(":scope > p").addEventListener("click", function() {OpenExitPopUp(id, true);});
	showMetadataLearnsetArea();
	var baseEV = document.querySelectorAll("#data-modal"+id+" .data-stats > ul li span");
	for(q = 0; q < baseEV.length; q++) {
		if(baseEV[q].parentElement.parentElement.getAttribute("name") == "basestats") {
			baseEV[q].addEventListener("click", function() {callPopUp(id, finaldataPokémonBaseStats,"Base Stats","Multiple");});
		} else if(baseEV[q].parentElement.parentElement.getAttribute("name") == "evyield") {
			baseEV[q].addEventListener("click", function() {callPopUp(id, finaldataPokémonEVYield,"EV Yield","Multiple");});
		}
	}
	var baseEVTotal = document.querySelectorAll("#data-modal"+id+" .data-stats > ul div");
	for(q = 0; q < baseEVTotal.length; q++) {
		if(baseEVTotal[q].parentElement.getAttribute("name") == "basestats") {
			baseEVTotal[q].addEventListener("click", function() {callPopUp(id, finaldataPokémonBaseStats,"Base Stats","Total");});
		} else if(baseEVTotal[q].parentElement.getAttribute("name") == "evyield") {
			baseEVTotal[q].addEventListener("click", function() {callPopUp(id, finaldataPokémonEVYield,"EV Yield","Total");});
		}
	}
};


function loadData() {
	var target = event.currentTarget;
	var i = target.getAttribute("value");
	var id = getIntID(i,"");
    var base = document.querySelector("#data-modal"+id);
	var portrait = base.querySelector(":scope .data-portrait");
	var category = base.querySelector(":scope .data-category");
	var debut = base.querySelector(":scope .data-debut");
	var name = base.querySelector(":scope .data-name");
	var type = base.querySelector(":scope .data-type");
	var description = base.querySelector(":scope .data-description");
	var basestats = base.querySelector(":scope .data-stats ul[name='basestats']");
	var evyield = base.querySelector(":scope .data-stats ul[name='evyield']");
	var ability = base.querySelector(":scope .data-sidebar-ability");
	var catchrate = base.querySelector(":scope .data-sidebar-catchrate");
	var hatchrate = base.querySelector(":scope .data-sidebar-hatchrate");
	var genderratio = base.querySelector(":scope .data-sidebar-genderratio");
	var egggroup = base.querySelector(":scope .data-sidebar-egggroup");
	var expyield = base.querySelector(":scope .data-sidebar-expyield");
	var levelrate = base.querySelector(":scope .data-sidebar-levelrate");
	var helditem = base.querySelector(":scope .data-sidebar-helditem");
    var area = base.querySelector(":scope .data-area ul");
    var evolution = base.querySelector(":scope .data-modal");

    if (evolution != undefined) {
        var evos = evolution.querySelectorAll(":scope .data-evolution");
        for(var q = 0; q < evos.length; q++) {
            evos[q].remove();
        }

        var previous = getEvolutionData(i,"Previous");
        var next = getEvolutionData(i,"Next");
        var evoArr = [previous,next];
        var evoArrName = ["previous","next"];


        for(var q = 0; q < evoArr.length; q++) {
            for(var u = 0; u < evoArr[q].length; u++) {
                var int = getPokémonInt(evoArr[q][u]["Pokémon"]);

                var x = u + 1;
                var evo = document.createElement("div");
                var evoContent = document.createElement("div");
                var evoToggle = document.createElement("button");
                var evoImg = document.createElement("img");
                var evoMain = document.createElement("main");
                var evoButton = document.createElement("button");
                var evoDescription = document.createElement("p");
                var evoID = document.createElement("span");
                var evoNationalID = document.createElement("h6");
                var evoName = document.createElement("h4");

                evo.classList.add("data-evolution");
                evo.setAttribute("name",evoArrName[q]+"-"+x+"/"+evoArr[q].length)
         
                evoButton.setAttribute("value",getPokémonInt(evoArr[q][u]["Pokémon"]));
                evoImg.src = './media/Images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(int,"Box")+'.png'
                evoImg.title = evoArr[q][u]["Pokémon"];

                evoImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/III-V/0.png'");
                if (getPokémonID(evoArr[q][u]["Pokémon"]) == undefined) {
                    evoNationalID.innerText = "#"+getPokémonID(getPokémonName2(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"]))));
                }
                else {
                    evoNationalID.innerText = "#"+getPokémonID(evoArr[q][u]["Pokémon"]);
                }
                
                evoNationalID.setAttribute("name","national");
                evoNationalID.setAttribute("value",0);
                evoName.innerText = evoArr[q][u]["Pokémon"];


                evolution.appendChild(evo);
                evo.appendChild(evoContent);
                if (q == 0){
                    evoContent.appendChild(evoMain);
                    evoContent.appendChild(evoToggle);
                    evoToggle.setAttribute("onclick","this.previousElementSibling.classList.toggle('active')");

      
                    if (finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage] != "Third-Stage" || finaldataPokémonEvolutionStage[getDefaultInt(i)]["Pokémon Stage_"+JSONPath_EvolutionStage] != "Third-Stage") {
                        evoDescription.innerHTML = formatEvolutionText(i,getOffspringData(evoArr[q][u]["Integer"]),"Previous")
                    }
                    else {
                        evoDescription.innerHTML = formatEvolutionText(i,evoArr[q][u],"Previous");
                    }

                }
                else if (q == 1) {
                    evoContent.appendChild(evoToggle);
                    evoContent.appendChild(evoMain);
                    evoToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
                    evoDescription.innerHTML = formatEvolutionText(i,evoArr[q][u],"Next");
                }

                evoToggle.appendChild(evoImg);
                evoMain.appendChild(evoButton);
                evoMain.appendChild(evoDescription);
                evoButton.appendChild(evoID);
                evoID.appendChild(evoNationalID);
                evoButton.appendChild(evoName);
                evoButton.addEventListener("click",modalData);
                evoButton.setAttribute("function","modalData");

                var eggSpan = evoDescription.querySelectorAll(':scope span[name*="egg"]');
                for(y = 0; y < eggSpan.length; y++) {
                    eggSpan[y].setAttribute("dataname","value")
                    eggSpan[y].addEventListener("click", function() {callPopUp(id, finaldataPokémonEggGroup,"Egg Group","Single");});
                }

                var pokSpan = evoDescription.querySelectorAll(':scope span[name="Pokémon"]');
                for(y = 0; y < pokSpan.length; y++) {
                    pokSpan[y].setAttribute("value",getPokémonInt(pokSpan[y].innerText))
                    pokSpan[y].addEventListener("click", modalData);
                }

                var itmSpan = evoDescription.querySelectorAll(':scope span[name="Item"]');
                for(y = 0; y < itmSpan.length; y++) {
                    itmSpan[y].addEventListener("click", dataRedirect);
                }


                for(y = 0; y < JSONPath_Pokédex.length; y++) {
                    var z = y+1;
                    var ID = getRegionalID("=",getPokémonID(evoArr[q][u]["Pokémon"]),JSONPath_Pokédex[y]);
                    var evoRegionalID = document.createElement("h6");
                    if (ID != undefined) {
                        evoRegionalID.innerText = "#"+ID;
                    }
                    else if (getPokémonID(getPokémonName2(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"])))) != undefined) {
                        evoRegionalID.innerText = "#"+getRegionalID("=",getPokémonID(getPokémonName2(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"])))),JSONPath_Pokédex[y]);
                    }
                    evoRegionalID.setAttribute("name","regional");
                    evoRegionalID.setAttribute("value",z);
                    evoID.appendChild(evoRegionalID);
                }

      
            }
        }
        
    }

    if (area != undefined) {
        var arealis = area.querySelectorAll(':scope > li');
        for(var t = 0; t < arealis.length; t++) {
            arealis[t].remove();
        }
        for(var q = 0; q < finaldataLocationPokémon.length; q++) {
            if (getApplicable(finaldataLocationPokémon[q]["Game"])) {
                if (getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémon[q]["Pokémon"])))) == finaldataPokémon[getDefaultInt(i)]["Pokémon"]) {
                    var pokLi = document.createElement("li");
                    area.appendChild(pokLi)

            

                    var pokLocation = document.createElement("span");
                    pokLocation.setAttribute("name","Location");
                    if (finaldataLocationPokémon[q]["Title"] != undefined) {
                        pokLocation.setAttribute("title",finaldataLocationPokémon[q]["Title"]);
                    }
                    pokLi.appendChild(pokLocation);

                    if (finaldataLocationPokémon[q]["Location"] != undefined) {
                        var pokLocationText = document.createElement("h3");
                        pokLocationText.innerText = finaldataLocationPokémon[q]["Location"];
                        pokLocationText.setAttribute("name","Map");
                        pokLocation.appendChild(pokLocationText);
                        pokLocationText.addEventListener("click",dataRedirect)
                        pokLocationText.setAttribute("function","dataRedirect");

                        if (finaldataLocationPokémon[q]["Area"] != undefined && finaldataLocationPokémon[q]["Area"] != finaldataLocationPokémon[q]["Location"]) {
                            var pokAreaText = document.createElement("h4");
                            pokAreaText.innerText = finaldataLocationPokémon[q]["Area"];
                            pokLocation.appendChild(pokAreaText);
                        }
                    }

                
            

    
                    var pokRate = document.createElement("span");
                    pokRate.setAttribute("name","Rate");
                    if (finaldataLocationPokémon[q]["Criteria"] != undefined) {
                        pokRate.setAttribute("title",finaldataLocationPokémon[q]["Criteria"]);
                    }
               
                    pokLi.appendChild(pokRate);

                    if (finaldataLocationPokémon[q]["Rate"] != undefined) {
                        var pokRateText = document.createElement("h4");
                        pokRateText.innerHTML = finaldataLocationPokémon[q]["Rate"].replaceAll(",","\n").replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="Spring">Spring</pre>').replaceAll("au:",'<pre name="Autumn">Autumn</pre>').replaceAll("su:",'<pre name="Summer">Summer</pre>').replaceAll("wi:",'<pre name="Winter">Winter</pre>').replaceAll("mon:",'<pre name="Monday">Monday</pre>').replaceAll("tue:",'<pre name="Tuesday">Tuesday</pre>').replaceAll("wed:",'<pre name="Wednesday">Wednesday</pre>').replaceAll("thu:",'<pre name="Thursday">Thursday</pre>').replaceAll("fri:",'<pre name="Friday">Friday</pre>').replaceAll("sat:",'<pre name="Saturday">Saturday</pre>').replaceAll("sun:",'<pre name="Sunday">Sunday</pre>');
                        pokRate.appendChild(pokRateText);
                    }

                    var pokEncounter = document.createElement("span");
                    pokEncounter.setAttribute("name","Encounter");
                    pokLi.appendChild(pokEncounter);


                    var encounters = [];
                    var enctitle = [];

                    if (finaldataLocationPokémon[q]["Tile"] != undefined) {
                        encounters.push(finaldataLocationPokémon[q]["Tile"]);
                        enctitle.push("Tile");
                    }
                    if (finaldataLocationPokémon[q]["Encounter"] != undefined) {
                        encounters.push(finaldataLocationPokémon[q]["Encounter"]);
                        enctitle.push("Encounter");
                    }
                    


                        var pokEncounterInner = document.createElement("span");
                        pokEncounter.appendChild(pokEncounterInner);
                        
                        var pokEncounterText = document.createElement("h4");
                        pokEncounter.appendChild(pokEncounterText);

                        var encounterTxtArr = [];
                        for(var u = 0; u < encounters.length; u++) {


                            var pokEncounterImage = document.createElement("img");
                            pokEncounterImage.title = encounters[u];
                            pokEncounterImage.setAttribute("onerror","this.remove();")

                            
                            if(encounters[u] == "Surfing") {
                                pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+"Surfing_M"+".png";
                            }
                            else {
                                pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounters[u]+".png";
                            }

                        
                            if (enctitle[u] != "Tile" || enctitle.length == 1) {
                                encounterTxtArr.push(encounters[u])
                            }
    
                            pokEncounterInner.appendChild(pokEncounterImage);
                
                        }


						for(var t = 0; t < encounterTxtArr.length; t++) {
							var pokEncounterTxt = document.createElement("span");
							pokEncounterTxt.innerText = encounterTxtArr[t]
							pokEncounterText.appendChild(pokEncounterTxt);

							pokEncounterTxt.innerText = pokEncounterTxt.innerText.replaceAll(" Spring","").replaceAll(" Summer","").replaceAll(" Winter","").replaceAll(" Autumn","");


							var rgs;
							if (Region.includes(",")) {
								rgs = Region.split(",")
							}
							else {
								rgs = [Region];
							}
							for(var r = 0; r < rgs.length; r++) {
								encounterTxtArr[t] = encounterTxtArr[t].replaceAll(" "+rgs[r],"").replaceAll(rgs[r]+" ","");
							}


							if (encounterTxtArr[t] == "Headbutt" || encounterTxtArr[t] == "Rock Smash") {
								pokEncounterTxt.setAttribute("name","Move");
								pokEncounterTxt.setAttribute("value",encounterTxtArr[t]);
								pokEncounterTxt.addEventListener("click", dataRedirect);
								pokEncounterTxt.setAttribute("function","dataRedirect");
							}
							if (encounterTxtArr[t] == "Surfing") {
								pokEncounterTxt.setAttribute("name","Move");
								pokEncounterTxt.setAttribute("value","Surf");
								pokEncounterTxt.addEventListener("click", dataRedirect);
								pokEncounterTxt.setAttribute("function","dataRedirect");
							}
						}
                
                        if (finaldataLocationPokémon[q]["Mechanic"] != undefined) {

                            var pokMechanicText = document.createElement("h3");
                            pokMechanicText.innerText = finaldataLocationPokémon[q]["Mechanic"];
                            pokEncounter.appendChild(pokMechanicText);
                        }

                        /*
                        if (Allies) {
                            var pokAllies = document.createElement("span");
                            var pokAllyHeader = document.createElement("h4");
                            pokAllies.setAttribute("name","Allies");
                            pokAllyHeader.innerText = "Allies";
                            pokLi.appendChild(pokAllies);
                            pokAllies.appendChild(pokAllyHeader);

                            if (finaldataLocationPokémon[q]["Allies"] != undefined) {
                                var ally = finaldataLocationPokémon[q]["Allies"].replaceAll("extremelyharshsunlight:",'').replaceAll("hail:",'').replaceAll("harshsunlight:",'').replaceAll("heavyrain:",'').replaceAll("rain:",'').replaceAll("sandstorm:",'').replaceAll("strongwinds:",'').replaceAll("fog:",'').replaceAll("cloudy:",'').replaceAll("clear:",'').replaceAll("blizzard:",'').replaceAll("snow:",'').replaceAll("thunderstorm:",'');
                                var allies = [];
                                if (ally.includes(",")) {
                                    allies = ally.split(",")
                                }
                                else {
                                    allies = [ally];
                                }

                                for(var r = 0; r < allies.length; r++) {
                                    var allyIMG = document.createElement("img");
                                    allyIMG.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(allies[r]),"Box")+".png";
                                    allyIMG.title = allies[r];
                                    pokAllies.appendChild(allyIMG);
                                }
                            
                            }
                        }
                        */
                        var pokPok = document.createElement("span");
                        var pokPokLvl = document.createElement("h5");
                        var pokPokImg = document.createElement("img");
            
                        pokPok.setAttribute("name","Pokémon");
                        pokPokLvl.innerText = "Lv. "+finaldataLocationPokémon[q]["Level"];
                        pokPokImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLocationPokémon[q]["Pokémon"]),"Box")+".png";
               
                        if(finaldataLocationPokémon[q]["Note"] != undefined) {
                            pokPokImg.setAttribute("title",finaldataLocationPokémon[q]["Note"])
                        }
                        pokLi.appendChild(pokPok);
                        pokPok.appendChild(pokPokLvl);
                        pokPok.appendChild(pokPokImg);
                    
                }
            }
        }
        for(var q = 0; q < finaldataLocationPokémon.length; q++) {
            if (getApplicable(finaldataLocationPokémon[q]["Game"])) {
                if (Allies) {

                    var ally = finaldataLocationPokémon[q]["Allies"];
                    var allies = [ally];
                    if (ally != undefined) {
                        ally = ally.replaceAll(/\,[\S\s]*?\:/g,",");
                        if(ally.includes(",")) {
                            allies = ally.split(",");
                        }
                    }
                    

                    for(var y = 0; y < allies.length; y++) {
                        if (allies[y] != undefined) {
                            if (allies[y] == finaldataPokémon[getDefaultInt(i)]["Pokémon"] && getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémon[q]["Pokémon"])))) != finaldataPokémon[getDefaultInt(i)]["Pokémon"] || allies[y] == finaldataPokémon[i]["Form"] && getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémon[q]["Pokémon"])))) != finaldataPokémon[getDefaultInt(i)]["Pokémon"]) {

                                var pokLi = document.createElement("li");
                                area.appendChild(pokLi)

                        

                                var pokLocation = document.createElement("span");
                                pokLocation.setAttribute("name","Location");
                                if (finaldataLocationPokémon[q]["Title"] != undefined) {
                                    pokLocation.setAttribute("title",finaldataLocationPokémon[q]["Title"]);
                                }
                                
                                pokLi.appendChild(pokLocation);

                                if (finaldataLocationPokémon[q]["Location"] != undefined) {
                                    var pokLocationText = document.createElement("h3");
                                    pokLocationText.innerText = finaldataLocationPokémon[q]["Location"];
                                    pokLocationText.setAttribute("name","Map");
                                    pokLocation.appendChild(pokLocationText);
                                    pokLocationText.addEventListener("click",dataRedirect)
                                    pokLocationText.setAttribute("function","dataRedirect");

                                    if (finaldataLocationPokémon[q]["Area"] != undefined && finaldataLocationPokémon[q]["Area"] != finaldataLocationPokémon[q]["Location"]) {
                                        var pokAreaText = document.createElement("h4");
                                        pokAreaText.innerText = finaldataLocationPokémon[q]["Area"];
                                        pokLocation.appendChild(pokAreaText);
                                    }
                                }

                            
                        

                
                                var pokRate = document.createElement("span");
                                pokRate.setAttribute("name","Rate");
                                if (finaldataLocationPokémon[q]["Criteria"] != undefined) {
                                    pokRate.setAttribute("title",finaldataLocationPokémon[q]["Criteria"]);
                                }            
                                pokLi.appendChild(pokRate);

                                if (finaldataLocationPokémon[q]["Rate"] != undefined) {
                                    var pokRateText = document.createElement("p");
                                    pokRateText.innerHTML = finaldataLocationPokémon[q]["Rate"].replaceAll(",","\n").replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="Spring">Spring</pre>').replaceAll("au:",'<pre name="Autumn">Autumn</pre>').replaceAll("su:",'<pre name="Summer">Summer</pre>').replaceAll("wi:",'<pre name="Winter">Winter</pre>').replaceAll("extremelyharshsunlight:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Extremely Harsh Sunlight.png" title="Extremely Harsh Sunlight">').replaceAll("hail:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Hail.png" title="Hail">').replaceAll("harshsunlight:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Harsh Sunlight.png" title="Harsh Sunlight">').replaceAll("heavyrain:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Heavy Rain.png" title="Heavy Rain">').replaceAll("rain:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Rain.png" title="Rain">').replaceAll("sandstorm:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Sandstorm.png" title="Sandstorm">').replaceAll("strongwinds:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Strong Winds.png" title="Strong Winds">').replaceAll("fog:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Fog.png" title="Fog">').replaceAll("cloudy:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Cloudy.png" title="Cloudy">').replaceAll("clear:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Clear.png" title="Clear">').replaceAll("blizzard:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Blizzard.png" title="Blizzard">').replaceAll("snow:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Snow.png" title="Snow">').replaceAll("thunderstorm:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"Thunderstorm/.png" title="Thunderstorm">');
                                    pokRate.appendChild(pokRateText);
                                }

                                var pokEncounter = document.createElement("span");
                                pokEncounter.setAttribute("name","Encounter");
                                pokLi.appendChild(pokEncounter);


                                var encounters = [];
                                var enctitle = [];

                                if (finaldataLocationPokémon[q]["Tile"] != undefined) {
                                    encounters.push(finaldataLocationPokémon[q]["Tile"]);
                                    enctitle.push("Tile");
                                }
                                if (finaldataLocationPokémon[q]["Encounter"] != undefined) {
                                    encounters.push(finaldataLocationPokémon[q]["Encounter"]);
                                    enctitle.push("Encounter");
                                }
                                

            
                                    var pokEncounterInner = document.createElement("span");
                                    pokEncounter.appendChild(pokEncounterInner);
                                    
                                    var pokEncounterText = document.createElement("h4");
                                    pokEncounter.appendChild(pokEncounterText);

                                    var encounterTxtArr = [];
                                    for(var u = 0; u < encounters.length; u++) {


                                        var pokEncounterImage = document.createElement("img");
                                        pokEncounterImage.title = encounters[u];
                                        pokEncounterImage.setAttribute("onerror","this.remove();")

                                        
                                        if(encounters[u] == "Surfing") {
                                            pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+"Surfing_M"+".png";
                                        }
                                        else {
                                            pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounters[u]+".png";
                                        }

                                    
                                        if (enctitle[u] != "Tile" || enctitle.length == 1) {
                                            encounterTxtArr.push(encounters[u])
                                        }
                
                                        pokEncounterInner.appendChild(pokEncounterImage);
                            
                                    }




                                    for(var u = 0; u < encounterTxtArr.length; u++) {
                                        var pokEncounterTxt = document.createElement("span");
                                        pokEncounterTxt.innerText = encounterTxtArr[u]
                                        pokEncounterText.appendChild(pokEncounterTxt);

										pokEncounterTxt.innerText = pokEncounterTxt.innerText.replaceAll(" Spring","").replaceAll(" Summer","").replaceAll(" Winter","").replaceAll(" Autumn","");

                                        var rgs;
                                        if (Region.includes(",")) {
                                            rgs = Region.split(",")
                                        }
                                        else {
                                            rgs = [Region];
                                        }
                                        for(var r = 0; r < rgs.length; r++) {
                                            encounterTxtArr[u] = encounterTxtArr[u].replaceAll(" "+rgs[r],"").replaceAll(rgs[r]+" ","").replaceAll(" Autumn","").replaceAll(" Spring","").replaceAll(" Winter","").replaceAll(" Summer","");
                                        }
										encounterTxtArr[u] = encounterTxtArr[u].replaceAll(" Spring","").replaceAll(" Summer","").replaceAll(" Winter","").replaceAll(" Autumn","");

                                        if (encounterTxtArr[u] == "Headbutt") {
                                            pokEncounterTxt.setAttribute("name","Move");
                                            pokEncounterTxt.setAttribute("value","Headbutt");
                                            pokEncounterTxt.addEventListener("click", dataRedirect);
                                            pokEncounterTxt.setAttribute("function","dataRedirect");
                                        }
                                        if (encounterTxtArr[u] == "Surfing") {
                                            pokEncounterTxt.setAttribute("name","Move");
                                            pokEncounterTxt.setAttribute("value","Surf");
                                            pokEncounterTxt.addEventListener("click", dataRedirect);
                                            pokEncounterTxt.setAttribute("function","dataRedirect");
                                        }
                                    }
                            
                                    if (finaldataLocationPokémon[q]["Mechanic"] != undefined) {
                                        var pokMechanicText = document.createElement("h3");
                                        pokMechanicText.innerText = finaldataLocationPokémon[q]["Mechanic"];
                                        pokEncounter.appendChild(pokMechanicText);
                                    }
                                    /*
                                    var pokAllies = document.createElement("span");
                                    var pokAllyHeader = document.createElement("h4");
                                    pokAllies.setAttribute("name","Allies");
                                    pokAllyHeader.innerText = "Allies";
                                    pokLi.appendChild(pokAllies);
                                    pokAllies.appendChild(pokAllyHeader);

                                    if (finaldataLocationPokémon[q]["Allies"] != undefined) {
                                        var ally = finaldataLocationPokémon[q]["Allies"].replaceAll("extremelyharshsunlight:",'').replaceAll("hail:",'').replaceAll("harshsunlight:",'').replaceAll("heavyrain:",'').replaceAll("rain:",'').replaceAll("sandstorm:",'').replaceAll("strongwinds:",'').replaceAll("fog:",'').replaceAll("cloudy:",'').replaceAll("clear:",'').replaceAll("blizzard:",'').replaceAll("snow:",'').replaceAll("thunderstorm:",'');
                                        var allies = [];
                                        if (ally.includes(",")) {
                                            allies = ally.split(",")
                                        }
                                        else {
                                            allies = [ally];
                                        }

                                        for(var r = 0; r < allies.length; r++) {
                                            var allyIMG = document.createElement("img");
                                            allyIMG.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(allies[r]),"Box")+".png";
                                            allyIMG.title = allies[r];
                                            pokAllies.appendChild(allyIMG);
                                        }
                                    
                                    }
                                    */

                        
                                    var pokPok = document.createElement("span");
                                    var pokPokIsAlly = document.createElement("h4");
                                    var pokPokLvl = document.createElement("h5");
                                    var pokPokImg = document.createElement("img");
                        
                                    pokPok.setAttribute("name","Pokémon");
                                    pokPokIsAlly.innerText = "Ally to "+finaldataLocationPokémon[q]["Pokémon"];
                                    pokPokLvl.innerText = "Lv. "+finaldataLocationPokémon[q]["Level"];
                                    pokPokImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLocationPokémon[q]["Pokémon"]),"Box")+".png";
                                    pokPokImg.setAttribute("value",getPokémonInt(finaldataLocationPokémon[q]["Pokémon"]));

                                    if(finaldataLocationPokémon[q]["Note"] != undefined) {
                                        pokPokImg.setAttribute("title",finaldataLocationPokémon[q]["Note"])
                                    }
                                    pokLi.appendChild(pokPok);
                                    pokPok.appendChild(pokPokIsAlly);
                                    pokPok.appendChild(pokPokLvl);
                                    pokPok.appendChild(pokPokImg);
                                    pokPokImg.addEventListener("click",modalData);
                                    pokPokImg.setAttribute("function","modalData");
                                break;
                            }
                        }
                    }
                }
            }
        }
    }


    var loc = area.querySelectorAll(":scope li span[name='Location'] > *[function]");
    var locs = [];

    for(var r = 0; r < loc.length; r++) {
        locs.push(loc[r].innerText)
    }
    
    locs = [...new Set(locs)];

    //mapBlink(document.querySelector("#data-map-contain"),locs)


	category.innerText = '"'+returnData(i,"Category","")[0]+' Pokémon"';
	if(returnData(i,"Pokédex Entry","")[0] != undefined) {
		description.querySelector(':scope p').innerText = returnData(i,"Pokédex Entry","")[0];
	}
	if(returnData(i,"Debut","")[0].includes("-")) {
		debut.innerText = "Introduced in "+returnData(i,"Debut","")[0].split("-")[0];
	} else {
		debut.innerText = "Introduced in "+returnData(i,"Debut","")[0];
	}
	if(Ability.length >= 1) {
		if(returnData(i,"Ability","")[0] != undefined) {
			ability.querySelector(':scope *[title="Primary Ability"]').innerText = returnData(i,"Ability","")[0];
			ability.querySelector(':scope *[title="Primary Ability"]').style.display = "flex";
		} else {
			ability.querySelector(':scope *[title="Primary Ability"]').style.display = "none";
		}
		if(returnData(i,"Ability","")[1] != undefined) {
			ability.querySelector(':scope *[title="Secondary Ability"]').innerText = returnData(i,"Ability","")[1];
			ability.querySelector(':scope *[title="Secondary Ability"]').style.display = "flex";
		} else {
			ability.querySelector(':scope *[title="Secondary Ability"]').style.display = "none";
		}
		if(Ability.length >= 3) {
			if(returnData(i,"Ability","")[2] != undefined) {
				ability.querySelector(':scope *[title="Hidden Ability"]').innerText = returnData(i,"Ability","")[2];
				ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.style.display = "flex";
			} else {
				ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.style.display = "none";
			}
		}
	}
    if (Gender == true) {
        genderratio.querySelector(':scope > span').style.display = "unset";

        if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "0") { // Always Male
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","100% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","0% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 0");
        } else if(returnData(i,"Gender Ratio","")[0] == "7" && returnData(i,"Gender Ratio","")[1] == "1") { // Very Often Male
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","87.5% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","12.5% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","7 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "3" && returnData(i,"Gender Ratio","")[1] == "1") { // Often Male
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","75% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","25% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","3 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "1") { // Equal Ratio
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","50% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","50% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "3") { // Often Female
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","25% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","75% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 3");
        } else if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "7") { // Very Often Female
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","12.5% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","87.5% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 7");
        } else if(returnData(i,"Gender Ratio","")[0] == "0" && returnData(i,"Gender Ratio","")[1] == "1") { // Always Female
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","0% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","100% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","0 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "0" && returnData(i,"Gender Ratio","")[1] == "0") { // Genderless
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","0% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","0% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","Genderless");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","0 : 0");
        }
    }
	levelrate.querySelector(':scope *[dataname="value"]').innerText = returnData(i,"Leveling Rate","")[0];
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i,"Leveling Rate","")[0]);
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("title","Time approximated for "+getPokémonName(i)+" to Level Up.");
	name.innerText = getPokémonName(i);
 

	if(Egg == true) {
        if(returnData(i,"Hatch Rate","")[1] != undefined) {
            hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i,"Hatch Rate","")[1]+" Steps";
            hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title","Steps required to hatch an egg containing "+getPokémonName(i)+".");
        } else {
            hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i,"Hatch Rate","")[0]+" Egg Cycles";
            hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title","Egg Cycles required to hatch an egg containing "+getPokémonName(i)+".");
        }
        hatchrate.querySelector(':scope *[dataname="value"').setAttribute("value", returnData(i,"Hatch Rate","")[0]);

		if(returnData(i,"Egg Group","")[0] != undefined) {
			egggroup.querySelector(':scope span[name="Primary"]').style.display = "flex";
			egggroup.querySelector(':scope span[name="Primary"]').querySelector(':scope *[dataname="value"').setAttribute("name","egg"+returnData(i,"Egg Group","")[0]);
			egggroup.querySelector(':scope span[name="Primary"]').querySelector(':scope *[dataname="value"').innerText = returnData(i,"Egg Group","")[0];
		} else {
			egggroup.querySelector(':scope span[name="Primary"]').style.display = "none";
		}
		if(returnData(i,"Egg Group","")[1] != undefined) {
			egggroup.querySelector(':scope span[name="Secondary"]').style.display = "flex";
			egggroup.querySelector(':scope span[name="Secondary"]').querySelector(':scope *[dataname="value"').setAttribute("name","egg"+returnData(i,"Egg Group","")[1]);
			egggroup.querySelector(':scope span[name="Secondary"]').querySelector(':scope *[dataname="value"').innerText = returnData(i,"Egg Group","")[1];
		} else {
			egggroup.querySelector(':scope span[name="Secondary"]').style.display = "none";
		}
	}
	var baseev = ["Base Stats","EV Yield"];
	var sts = [];
	for(var y = 0; y < baseev.length; y++) {
		for(var q = 0; q < Stats.length; q++) {
			if(y == 0) {
				var arr = finaldataPokémonBaseStats;
				var json = JSONPath_BaseStats;
				var taq = basestats;
			} else if(y == 1) {
				var arr = finaldataPokémonEVYield;
				var json = JSONPath_EVYield;
				var taq = evyield;
			}
			var temp1 = baseev[y].toLowerCase().replace(" ","").replace(".","");
			var temp2 = Stats[q].toLowerCase().replace(" ","").replace(".","");
			for(var u = 0; u < finaldataPokémon.length; u++) {
				if(finaldataPokémon[u][JSONPath_Reference] == "true") {
					if(arr[u][Stats[q]+"_"+json] != undefined && arr[u][Stats[q]+"_"+json] != "") {
						sts.push(parseInt(arr[u][Stats[q]+"_"+json]));
					}
				}
			}
			taq.querySelector(':scope .'+temp1+'-'+temp2).querySelector(':scope *[dataname="value"]').innerHTML = returnData(i, baseev[y]+" "+Stats[q],"")[0]+"&nbsp;&nbsp;";
			taq.querySelector(':scope .'+temp1+'-'+temp2).querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i, baseev[y]+" "+Stats[q],"")[0]);
			taq.querySelector(':scope .'+temp1+'-'+temp2).querySelector(':scope *[dataname="value"]').style.width = returnData(i, baseev[y]+" "+Stats[q],"")[0] / Math.max.apply(Math, sts) * 100+"%";
			sts = [];
		}
	}
	if(returnData(i,"Experience Yield","")[0] >= 300) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Very High";
	}
	if(returnData(i,"Experience Yield","")[0] >= 200 && returnData(i,"Experience Yield","")[0] <= 299) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "High";
	}
	if(returnData(i,"Experience Yield","")[0] >= 100 && returnData(i,"Experience Yield","")[0] <= 199) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Medium";
	}
	if(returnData(i,"Experience Yield","")[0] >= 50 && returnData(i,"Experience Yield","")[0] <= 99) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Low";
	}
	if(returnData(i,"Experience Yield","")[0] >= 0 && returnData(i,"Experience Yield","")[0] <= 49) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Very Low";
	}
	expyield.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i,"Experience Yield","")[0]);
	expyield.querySelector(':scope *[dataname="value"]').setAttribute("title","Experience gained approximated upon defeating "+getPokémonName(i)+" in battle.");
	if(getPokémonMediaPath(i,"Battle") != undefined) {
		portrait.querySelector(":scope img").src = "./media/Images/Pokémon/Art/HOME/"+getPokémonMediaPath(i,"Battle")+".png";
	}
	if(returnData(i,"Catch Rate","") != undefined) {
		var catchRateFormula;
		if(Generation == 1) {
			catchRateFormula = Math.round(((Math.min(parseInt(returnData(i,"Catch Rate",""))+1, 256)) / 256 * (85+1 / 256) / 256 * 100) * 10) / 10;
		}
		if(Generation == 2) {
			catchRateFormula = Math.round(((Math.max(parseInt(returnData(i,"Catch Rate","")) / 3, 1)+1) / 256 * 100) * 10) / 10;
		}
		if(Generation == 3 || Generation == 4) {
			catchRateFormula = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(returnData(i,"Catch Rate","")) / 3))) / 65536) ** 4 * 100) * 10) / 10;
		}
		if(Generation >= 5) {
			catchRateFormula = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(returnData(i,"Catch Rate","")) / 3))) / 65536) ** 3 * 100) * 10) / 10;
		}
		catchrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i,"Catch Rate",""));
		catchrate.querySelector(':scope *[dataname="value"]').setAttribute("title","When thrown at a full health "+getPokémonName(i)+" with an ordinary Poké Ball.");
		catchrate.querySelector(':scope *[dataname="value"]').innerText = catchRateFormula+"%";
	}
    if (HeldItem == true) {
        for(var q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
            if(returnData(i,"Held Item","")[q] != undefined) {
                helditem.querySelector(':scope > div span[name="'+JSONPath_HeldItemPercentage[q]+'"]').setAttribute("value", returnData(i,"Held Item","")[q]);
                helditem.querySelector(':scope > div span[name="'+JSONPath_HeldItemPercentage[q]+'"] img').src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(returnData(i,"Held Item","")[q])+".png";
                helditem.querySelector(':scope > div span[name="'+JSONPath_HeldItemPercentage[q]+'"] img').setAttribute("title", returnData(i,"Held Item","")[q]);
                helditem.querySelector(':scope > div span[name="'+JSONPath_HeldItemPercentage[q]+'"] img').style.display = "unset";
                helditem.querySelector(':scope > div span[name="'+JSONPath_HeldItemPercentage[q]+'"] h5').innerText = returnData(i,"Held Item","")[q];
            } else {
                helditem.querySelector(':scope > div span[name="'+JSONPath_HeldItemPercentage[q]+'"] img').style.display = "none";
            }
        }
        var heldcheck;
        for(var q = 0; q < returnData(i,"Held Item","").length; q++) {
            if(returnData(i,"Held Item","")[q] == undefined) {
                heldcheck = false;
            } else {
                heldcheck = true;
                break
            }
        }
        if(heldcheck == false) {
            helditem.parentElement.style.display = "none";
        } else {
            helditem.parentElement.style.display = "flex";
        }
    }
    if (formatCalcTypeAdvantage(calculateTypeAdvantage(i)) != undefined) {
        type.setAttribute("title",formatCalcTypeAdvantage(calculateTypeAdvantage(i)));
    }
    else {
        type.setAttribute("title","");
    }
	if(returnData(i,"Type","")[0] != undefined) {
		type.querySelector(":scope > span:first-child h3").style.display = "none";
		type.querySelector(":scope > span:first-child").classList.add("active");
		type.querySelector(":scope > span:first-child img").style.display = "inline";
		type.querySelector(":scope > span:first-child h3").innerText = returnData(i,"Type","")[0];
		type.querySelector(":scope > span:first-child img").setAttribute("src","./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnData(i,"Type","")[0]+".png");
        type.querySelector(":scope > span:first-child img").setAttribute("value", returnData(i,"Type","")[0]);
	} else {
		type.querySelector(":scope > span:first-child").classList.remove("active");
		type.querySelector(":scope > span:first-child img").style.display = "none";
	}
	if(returnData(i,"Type","")[1] != undefined) {
		type.querySelector(":scope > span:last-child h3").style.display = "none";
		type.querySelector(":scope > span:last-child").classList.add("active");
		type.querySelector(":scope > span:last-child img").style.display = "inline";
		type.querySelector(":scope > span:last-child h3").innerText = returnData(i,"Type","")[1];
		type.querySelector(":scope > span:last-child img").setAttribute("src","./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnData(i,"Type","")[1]+".png");
        type.querySelector(":scope > span:last-child img").setAttribute("value", returnData(i,"Type","")[1]);
	} else {
		type.querySelector(":scope > span:last-child").classList.remove("active");
		type.querySelector(":scope > span:last-child img").style.display = "none";
	}
	if(returnData(i,"Type","")[0] != undefined && returnData(i,"Type","")[1] != undefined) {
		type.setAttribute("name","2");
	} else {
		type.removeAttribute("name");
	}
	var dataAside2LearnsetUl = document.querySelector("#data-modal"+id+" .data-learnset-option > ul");
	var dataAside2LearnsetHeader = document.querySelectorAll("#data-modal"+id+" .data-learnset-option > h5 li p");
	var dataAside2LearnsetList = document.querySelectorAll("#data-modal"+id+" .data-learnset-option > ul li");
	for(u = 0; u < dataAside2LearnsetList.length; u++) {
		dataAside2LearnsetList[u].remove();
	}

    var learnsetArr = returnMoveSet(this.value,"");
    
	for (u = 0; u < learnsetArr.length; u++) {
        var dataAside2LearnsetLi = document.createElement("li");
        dataAside2LearnsetUl.appendChild(dataAside2LearnsetLi);

        for(y = 0; y < dataAside2LearnsetHeader.length; y++) {
            var dataAside2LearnsetLiText = document.createElement("span");
            dataAside2LearnsetLi.appendChild(dataAside2LearnsetLiText);
            if(y == 0) {

                dataAside2LearnsetLiText.title = "via "+learnsetArr[u]["Type"];

                if (learnsetArr[u]["Type"] == "Prior Evolution") {
                    var dataAside2LearnsetLiHeader = document.createElement("h6");
                    dataAside2LearnsetLiHeader.innerText = "Prior Evolution";
                    dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiHeader);

                    if(learnsetArr[u]["Evolution"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Evolution"].split(",").length; p++) {
                            var dataAside2LearnsetLiImg = document.createElement("img");
                            dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Evolution"].split(",")[p]),"Box")+'.png');
                            dataAside2LearnsetLiImg.setAttribute("title", learnsetArr[u]["Evolution"].split(",")[p]);
                            dataAside2LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Evolution"].split(",")[p]));
                            dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
                            dataAside2LearnsetLiImg.addEventListener("click", modalData);
                        }
                    } else {
                        var dataAside2LearnsetLiImg = document.createElement("img");
                        dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Evolution"]),"Box")+'.png');
                        dataAside2LearnsetLiImg.setAttribute("title", learnsetArr[u]["Evolution"]);
                        dataAside2LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Evolution"]));
                        dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
                        dataAside2LearnsetLiImg.addEventListener("click", modalData);
                    }
                }

                if (learnsetArr[u]["Type"] == "Level Up") {
                    dataAside2LearnsetLiText.innerText = learnsetArr[u]["Factor"];
                    if (learnsetArr[u]["Factor"] == "Evolution") {
                        dataAside2LearnsetLiText.title = "via Evolution Trigger";
                    }
                }
                else if (learnsetArr[u]["Type"] == "Machine") {
                    dataAside2LearnsetLiText.innerText = learnsetArr[u]["Machine"];
                }
                else if (learnsetArr[u]["Type"] == "Breeding") {

                    var dataAside2LearnsetLiHeader = document.createElement("h6");
                    dataAside2LearnsetLiHeader.innerText = "via Breeding";
                    dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiHeader);

                    if(learnsetArr[u]["Parent"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Parent"].split(",").length; p++) {
                            var dataAside2LearnsetLiImg = document.createElement("img");
                            dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]),"Box")+'.png');
                            dataAside2LearnsetLiImg.setAttribute("title", "with "+learnsetArr[u]["Parent"].split(",")[p]);
                            dataAside2LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]));
                            dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
                            dataAside2LearnsetLiImg.addEventListener("click", modalData);
                        }
                    } else {
                        var dataAside2LearnsetLiImg = document.createElement("img");
                        dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Parent"]),"Box")+'.png');
                        dataAside2LearnsetLiImg.setAttribute("title", "with "+learnsetArr[u]["Parent"]);
                        dataAside2LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"]));
                        dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
                        dataAside2LearnsetLiImg.addEventListener("click", modalData);
                    }
                }
                
            }
            if(y == 1) {
                dataAside2LearnsetLiText.title = "Move";
                if(learnsetArr[u]["Move"] == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = learnsetArr[u]["Move"];
                    dataAside2LearnsetLiText.setAttribute("name","move");
                    dataAside2LearnsetLiText.addEventListener("click", dataRedirect);
                }
            }
            if(y == 2) {
                dataAside2LearnsetLiText.title = "Type";
                if(getMoveData(learnsetArr[u]["Move"],"Type") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Type");
                }
                dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
            }
            if(y == 3) {
                dataAside2LearnsetLiText.title = "Category";
                if(getMoveData(learnsetArr[u]["Move"],"Category") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Category");
                }
                dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
            }
            if(y == 4) {
                dataAside2LearnsetLiText.title = "Power";
                if(getMoveData(learnsetArr[u]["Move"],"Power") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Power");
                }
            }
            if(y == 5) {
                dataAside2LearnsetLiText.title = "Accuracy";
                if(getMoveData(learnsetArr[u]["Move"],"Accuracy") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Accuracy");
                }
            }
            if(y == 6) {
                dataAside2LearnsetLiText.title = "PP";
                if(getMoveData(learnsetArr[u]["Move"],"PP Min") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerHTML = getMoveData(learnsetArr[u]["Move"],"PP Min")+" <span>(max. "+getMoveData(learnsetArr[u]["Move"],"PP Max")+")</span>";
                }
            }
        }
		
	}
    dexCheck();
}




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
	var MetadataButton = document.querySelector("#data-modal"+id+' #data-navigation input[value="1"]');
	var LearnsetButton = document.querySelector("#data-modal"+id+' #data-navigation input[value="2"]');
	var AreaButton = document.querySelector("#data-modal"+id+' #data-navigation input[value="3"]');
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
		var windowCount;
		var maxWindowCount;
		var currentWindow;
		var formSpec;
		var formFirst;
		maxWindowCount = 10;
		windowCount = document.querySelectorAll("#data > div");
		currentWindow = document.querySelector("#data-modal"+id);
		if (windowCount.length >= maxWindowCount) {
			for (var u = 0; u < windowCount.length; u++) {
				windowCount[u].remove();
			}
			console.log("Cleared some space")
		}
		if(currentWindow == null) {
			createData(id, int);
		}

        if(int != undefined) {
            formSpec = document.querySelector("#data-modal"+id+" .data-form > input[value='"+int+"'");
            formFirst = document.querySelector("#data-modal"+id+" .data-form > input:first-child");
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

		currentWindow = document.querySelector("#data-modal"+id);
		if(currentWindow != null) {
			currentWindow.classList.add("open");
		}
		navKeeper(id);
	}
	dexCheck();
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