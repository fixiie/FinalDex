var createType = function() {
	var typeOuter = document.createElement("div");
	var typeAside1 = document.createElement("aside");
	var typeAside1OptionsTitleOuter = document.createElement("div");
	var typeAside1OptionsTitle = document.createElement("h2");
	var typeAside1OptionsOuter = document.createElement("div");
	var typeAside1Options = document.createElement("div");
	var typeAside2 = document.createElement("aside");
	var typeAside2Title = document.createElement("h1");
	var typeAside3 = document.createElement("aside");
	var typeAside3TypechartMatrix = document.createElement("div");
	var typeAside3TypechartEffectiveness = document.createElement("div");
	var typeAside3TypechartIneffectiveness = document.createElement("div");
	var typeAside3TypechartImmunity = document.createElement("div");
	var typeAside4 = document.createElement("aside");
	var typeAside4Description = document.createElement("div");
	var typeAside4DescriptionSelector = document.createElement("div");
	var typeAside4DescriptionTitleOuter = document.createElement("div");
	var typeAside4DescriptionTitleTitle = document.createElement("h1");
	var typeAside4DescriptionTitleImageOuter = document.createElement("div");
	var typeAside4DescriptionTitleImage = document.createElement("img");
	var typeAside4DescriptionAgainstOpposed = document.createElement("div");
	var typeAside4DescriptionAgainst = document.createElement("div");
	var typeAside4DescriptionAgainstEffective = document.createElement("div");
	var typeAside4DescriptionAgainstEffectiveTitle = document.createElement("h4");
	var typeAside4DescriptionAgainstEffectiveContain = document.createElement("data");
	var typeAside4DescriptionAgainstIneffective = document.createElement("div");
	var typeAside4DescriptionAgainstIneffectiveTitle = document.createElement("h4");
	var typeAside4DescriptionAgainstIneffectiveContain = document.createElement("data");
	var typeAside4DescriptionAgainstImmune = document.createElement("div");
	var typeAside4DescriptionAgainstImmuneTitle = document.createElement("h4");
	var typeAside4DescriptionAgainstImmuneContain = document.createElement("data");
	var typeAside4DescriptionAgainstDefault = document.createElement("div");
	var typeAside4DescriptionAgainstDefaultTitle = document.createElement("h4");
	var typeAside4DescriptionAgainstDefaultContain = document.createElement("data");
	var typeAside4DescriptionOpposed = document.createElement("div");
	var typeAside4DescriptionOpposedEffective = document.createElement("div");
	var typeAside4DescriptionOpposedEffectiveTitle = document.createElement("h4");
	var typeAside4DescriptionOpposedEffectiveContain = document.createElement("data");
	var typeAside4DescriptionOpposedIneffective = document.createElement("div");
	var typeAside4DescriptionOpposedIneffectiveTitle = document.createElement("h4");
	var typeAside4DescriptionOpposedIneffectiveContain = document.createElement("data");
	var typeAside4DescriptionOpposedImmune = document.createElement("div");
	var typeAside4DescriptionOpposedImmuneTitle = document.createElement("h4");
	var typeAside4DescriptionOpposedImmuneContain = document.createElement("data");
	var typeAside4DescriptionOpposedDefault = document.createElement("div");
	var typeAside4DescriptionOpposedDefaultTitle = document.createElement("h4");
	var typeAside4DescriptionOpposedDefaultContain = document.createElement("data");
	typeOuter.setAttribute("id", "type-outer");
	typeOuter.setAttribute("name", "Type Advantage");
	typeAside1.setAttribute("id", "type-aside1");
	typeAside1OptionsTitleOuter.setAttribute("id", "type-options-title");
	typeAside1OptionsTitle.innerText = "Type Charts";
	typeAside1OptionsOuter.setAttribute("id", "type-options-outer");
	typeAside1OptionsOuter.classList.add("scroll");
	typeAside1Options.setAttribute("id", "type-options");
	typeAside2.setAttribute("id", "type-aside2");
	typeAside2Title.setAttribute("id", "type-title");
	typeAside3.setAttribute("id", "type-aside3");
	typeAside3TypechartMatrix.setAttribute("id", "typechart-matrix");
	typeAside3TypechartMatrix.setAttribute("name", "0");
	typeAside3TypechartMatrix.classList.add("scroll");
	typeAside3TypechartEffectiveness.setAttribute("id", "typechart-effective");
	typeAside3TypechartEffectiveness.setAttribute("name", "1");
	typeAside3TypechartEffectiveness.classList.add("scroll");
	typeAside3TypechartIneffectiveness.setAttribute("id", "typechart-ineffective");
	typeAside3TypechartIneffectiveness.setAttribute("name", "2");
	typeAside3TypechartIneffectiveness.classList.add("scroll");
	typeAside3TypechartImmunity.setAttribute("id", "typechart-immunity");
	typeAside3TypechartImmunity.setAttribute("name", "3");
	typeAside3TypechartImmunity.classList.add("scroll");
	typeAside4.setAttribute("id", "type-aside4");
	typeAside4Description.classList.add("type-description");
	typeAside4DescriptionSelector.classList.add("type-selector");
	typeAside4DescriptionTitleOuter.classList.add("type-description-title");
	typeAside4DescriptionTitleTitle;
	typeAside4DescriptionTitleImageOuter.classList.add("type-symbol-outer");
	typeAside4DescriptionTitleImage.classList.add("type-symbol");
	typeAside4DescriptionTitleImage.setAttribute("onerror", "this.style.display='none';");
	typeAside4DescriptionTitleImage.setAttribute("alt", MEDIAPath_Type_Icon);
	typeAside4DescriptionAgainstOpposed.classList.add("type-againstopposed");
	typeAside4DescriptionAgainst.classList.add("type-against");
	typeAside4DescriptionAgainst.classList.add("scroll");
	typeAside4DescriptionAgainstEffective.classList.add("type-effective");
	typeAside4DescriptionAgainstEffectiveTitle.setAttribute("title", "Super Effective when used by a Move with with following types:");
	typeAside4DescriptionAgainstEffectiveTitle.innerText = "Super Effective";
	typeAside4DescriptionAgainstEffectiveContain.classList.add("type-effective-content");
	typeAside4DescriptionAgainstEffectiveContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionAgainstIneffective.classList.add("type-ineffective");
	typeAside4DescriptionAgainstIneffectiveTitle.setAttribute("title", "Not Very Effective when used by a Move with with following types:");
	typeAside4DescriptionAgainstIneffectiveTitle.innerText = "Not Very Effective";
	typeAside4DescriptionAgainstIneffectiveContain.classList.add("type-ineffective-content");
	typeAside4DescriptionAgainstIneffectiveContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionAgainstImmune.classList.add("type-immune");
	typeAside4DescriptionAgainstImmuneTitle.setAttribute("title", "No Effect when used by a Move with following types:");
	typeAside4DescriptionAgainstImmuneTitle.innerText = "No Effect";
	typeAside4DescriptionAgainstImmuneContain.classList.add("type-immune-content");
	typeAside4DescriptionAgainstImmuneContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionAgainstDefault.classList.add("type-normal");
	typeAside4DescriptionAgainstDefaultTitle.setAttribute("title", "Normal Effectiveness when used by a Move with following types:");
	typeAside4DescriptionAgainstDefaultTitle.innerText = "Normal Effectiveness";
	typeAside4DescriptionAgainstDefaultContain.classList.add("type-default-content");
	typeAside4DescriptionAgainstDefaultContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionOpposed.classList.add("type-opposed");
	typeAside4DescriptionOpposed.classList.add("scroll");
	typeAside4DescriptionOpposedEffective.classList.add("type-effective");
	typeAside4DescriptionOpposedEffectiveTitle.setAttribute("title", "Super Effective when used against an opposing Pokémon with following types:");
	typeAside4DescriptionOpposedEffectiveTitle.innerText = "Super Effective";
	typeAside4DescriptionOpposedEffectiveContain.classList.add("type-effective-content");
	typeAside4DescriptionOpposedEffectiveContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionOpposedIneffective.classList.add("type-ineffective");
	typeAside4DescriptionOpposedIneffectiveTitle.setAttribute("title", "Not Very Effective when used against an opposing Pokémon with following types:");
	typeAside4DescriptionOpposedIneffectiveTitle.innerText = "Not Very Effective";
	typeAside4DescriptionOpposedIneffectiveContain.classList.add("type-ineffective-content");
	typeAside4DescriptionOpposedIneffectiveContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionOpposedImmune.classList.add("type-immune");
	typeAside4DescriptionOpposedImmuneTitle.setAttribute("title", "No Effect when used against an opposing Pokémon with following types:");
	typeAside4DescriptionOpposedImmuneTitle.innerText = "No Effect";
	typeAside4DescriptionOpposedImmuneContain.classList.add("type-immune-content");
	typeAside4DescriptionOpposedImmuneContain.value = MEDIAPath_Type_Text;
	typeAside4DescriptionOpposedDefault.classList.add("type-normal");
	typeAside4DescriptionOpposedDefaultTitle.setAttribute("title", "Normal Effectiveness when used against an opposing Pokémon with following types:");
	typeAside4DescriptionOpposedDefaultTitle.innerText = "Normal Effectiveness";
	typeAside4DescriptionOpposedDefaultContain.classList.add("type-default-content");
	typeAside4DescriptionOpposedDefaultContain.value = MEDIAPath_Type_Text;
	document.querySelector("#contain").appendChild(typeOuter);
	typeOuter.appendChild(typeAside1);
	typeAside1.appendChild(typeAside1OptionsTitleOuter);
	typeAside1OptionsTitleOuter.appendChild(typeAside1OptionsTitle);
	typeAside1.appendChild(typeAside1OptionsOuter);
	typeAside1OptionsOuter.appendChild(typeAside1Options);
	typeOuter.appendChild(typeAside2);
	typeAside2.appendChild(typeAside2Title);
	typeOuter.appendChild(typeAside3);
	typeAside3.appendChild(typeAside3TypechartMatrix);
	typeAside3.appendChild(typeAside3TypechartEffectiveness);
	typeAside3.appendChild(typeAside3TypechartIneffectiveness);
	typeAside3.appendChild(typeAside3TypechartImmunity);
	typeOuter.appendChild(typeAside4);
	typeAside4.appendChild(typeAside4Description);
	typeAside4Description.appendChild(typeAside4DescriptionTitleOuter);
	typeAside4DescriptionTitleOuter.appendChild(typeAside4DescriptionTitleTitle);
	typeAside4DescriptionTitleOuter.appendChild(typeAside4DescriptionTitleImageOuter);
	typeAside4DescriptionTitleImageOuter.appendChild(typeAside4DescriptionTitleImage);
	typeAside4Description.appendChild(typeAside4DescriptionAgainstOpposed);
	typeAside4DescriptionAgainstOpposed.appendChild(typeAside4DescriptionSelector);
	typeAside4DescriptionAgainstOpposed.appendChild(typeAside4DescriptionAgainst);
	typeAside4DescriptionAgainst.appendChild(typeAside4DescriptionAgainstEffective);
	typeAside4DescriptionAgainstEffective.appendChild(typeAside4DescriptionAgainstEffectiveTitle);
	typeAside4DescriptionAgainstEffective.appendChild(typeAside4DescriptionAgainstEffectiveContain);
	typeAside4DescriptionAgainst.appendChild(typeAside4DescriptionAgainstIneffective);
	typeAside4DescriptionAgainstIneffective.appendChild(typeAside4DescriptionAgainstIneffectiveTitle);
	typeAside4DescriptionAgainstIneffective.appendChild(typeAside4DescriptionAgainstIneffectiveContain);
	typeAside4DescriptionAgainst.appendChild(typeAside4DescriptionAgainstImmune);
	typeAside4DescriptionAgainstImmune.appendChild(typeAside4DescriptionAgainstImmuneTitle);
	typeAside4DescriptionAgainstImmune.appendChild(typeAside4DescriptionAgainstImmuneContain);
	typeAside4DescriptionAgainst.appendChild(typeAside4DescriptionAgainstDefault);
	typeAside4DescriptionAgainstDefault.appendChild(typeAside4DescriptionAgainstDefaultTitle);
	typeAside4DescriptionAgainstDefault.appendChild(typeAside4DescriptionAgainstDefaultContain);
	typeAside4DescriptionAgainstOpposed.appendChild(typeAside4DescriptionOpposed);
	typeAside4DescriptionOpposed.appendChild(typeAside4DescriptionOpposedEffective);
	typeAside4DescriptionOpposedEffective.appendChild(typeAside4DescriptionOpposedEffectiveTitle);
	typeAside4DescriptionOpposedEffective.appendChild(typeAside4DescriptionOpposedEffectiveContain);
	typeAside4DescriptionOpposed.appendChild(typeAside4DescriptionOpposedIneffective);
	typeAside4DescriptionOpposedIneffective.appendChild(typeAside4DescriptionOpposedIneffectiveTitle);
	typeAside4DescriptionOpposedIneffective.appendChild(typeAside4DescriptionOpposedIneffectiveContain);
	typeAside4DescriptionOpposed.appendChild(typeAside4DescriptionOpposedImmune);
	typeAside4DescriptionOpposedImmune.appendChild(typeAside4DescriptionOpposedImmuneTitle);
	typeAside4DescriptionOpposedImmune.appendChild(typeAside4DescriptionOpposedImmuneContain);
	typeAside4DescriptionOpposed.appendChild(typeAside4DescriptionOpposedDefault);
	typeAside4DescriptionOpposedDefault.appendChild(typeAside4DescriptionOpposedDefaultTitle);
	typeAside4DescriptionOpposedDefault.appendChild(typeAside4DescriptionOpposedDefaultContain);

    var typeAside2Game = document.createElement("span");
    var typeAside2GameImage = document.createElement("img");
    typeAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    typeAside2GameImage.setAttribute("onerror","this.display='none'");
    typeAside2.appendChild(typeAside2Game);
    typeAside2Game.appendChild(typeAside2GameImage);

	for(var i = 0; i < 2; i++) {
		var typeAside4DescriptionSelectorInput = document.createElement("input");
		var typeAside4DescriptionSelectorLabel = document.createElement("label");
		typeAside4DescriptionSelectorInput.setAttribute("type", "radio");
		typeAside4DescriptionSelectorInput.setAttribute("value", i);
		typeAside4DescriptionSelectorInput.setAttribute("name", "type-selector");
		typeAside4DescriptionSelectorInput.setAttribute("id", "type-selector" + i);
		typeAside4DescriptionSelectorInput.setAttribute("autocomplete", "off");
		typeAside4DescriptionSelectorLabel.setAttribute("for", "type-selector" + i);
		if(i == 0) {
			typeAside4DescriptionSelectorInput.setAttribute("checked", "");
			typeAside4DescriptionSelectorInput.setAttribute("onclick", "this.parentElement.nextElementSibling.style.display='block';this.parentElement.nextElementSibling.nextElementSibling.style.display='none'");
			typeAside4DescriptionSelectorLabel.innerText = "Defending";
		}
		if(i == 1) {
			typeAside4DescriptionSelectorInput.setAttribute("onclick", "this.parentElement.nextElementSibling.style.display='none';this.parentElement.nextElementSibling.nextElementSibling.style.display='block'");
			typeAside4DescriptionSelectorLabel.innerText = "Attacking";
		}
		typeAside4DescriptionSelector.appendChild(typeAside4DescriptionSelectorInput);
		typeAside4DescriptionSelector.appendChild(typeAside4DescriptionSelectorLabel);
	}
	var typeAside3TypeChartMatrixTable = document.createElement("table");
	var typeAside3TypeChartMatrixTableHead = document.createElement("thead");
	var typeAside3TypeChartMatrixTableBody = document.createElement("tbody");
	typeAside3TypeChartMatrixTable.setAttribute("id", "typechart-matrix-table");
	typeAside3TypeChartMatrixTable.setAttribute("name", MEDIAPath_Type_Icon);
	typeAside3TypeChartMatrixTable.classList.add("typechart");
	var typeAside3TypeChartMatrixTableTR = document.createElement("tr");
	for(var i = 0; i < finaldataTypeChart.length + 1; i++) {
		var typeAside3TypeChartMatrixTableCol = document.createElement("colgroup");
		typeAside3TypeChartMatrixTable.appendChild(typeAside3TypeChartMatrixTableCol);
	}
	typeAside3TypeChartMatrixTable.appendChild(typeAside3TypeChartMatrixTableHead);
	typeAside3TypeChartMatrixTable.appendChild(typeAside3TypeChartMatrixTableBody);
	typeAside3TypeChartMatrixTableHead.appendChild(typeAside3TypeChartMatrixTableTR);
	var typeAside3TypeChartMatrixTableTH0 = document.createElement("th");
	typeAside3TypeChartMatrixTableTH0.setAttribute("title", "");
	typeAside3TypeChartMatrixTableTR.appendChild(typeAside3TypeChartMatrixTableTH0);
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		var typeAside3TypeChartMatrixTableTH = document.createElement("th");
		var typeAside3TypeChartMatrixTableTHIMG = document.createElement("img");
		typeAside3TypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
		typeAside3TypeChartMatrixTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
		typeAside3TypeChartMatrixTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
		typeAside3TypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
		typeAside3TypeChartMatrixTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
		typeAside3TypeChartMatrixTableTR.appendChild(typeAside3TypeChartMatrixTableTH);
		typeAside3TypeChartMatrixTableTH.appendChild(typeAside3TypeChartMatrixTableTHIMG);
	}
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		var typeAside3TypeChartMatrixTableTR = document.createElement("tr");
		var typeAside3TypeChartMatrixTableTH = document.createElement("th");
		var typeAside3TypeChartMatrixTableTHIMG = document.createElement("img");
		typeAside3TypeChartMatrixTableBody.appendChild(typeAside3TypeChartMatrixTableTR);
		typeAside3TypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
		typeAside3TypeChartMatrixTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
		typeAside3TypeChartMatrixTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
		typeAside3TypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
		typeAside3TypeChartMatrixTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
		typeAside3TypeChartMatrixTableTR.appendChild(typeAside3TypeChartMatrixTableTH);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			var typeAside3TypeChartMatrixTableTD = document.createElement("td");
			typeAside3TypeChartMatrixTableTD.innerText = finaldataTypeChart[i][finaldataTypeChartTitle[q]];
			typeAside3TypeChartMatrixTableTD.setAttribute("title", finaldataTypeChart[i][finaldataTypeChartTitle[q]]);
			typeAside3TypeChartMatrixTableTR.appendChild(typeAside3TypeChartMatrixTableTD);
		}
		typeAside3TypeChartMatrixTableTH.appendChild(typeAside3TypeChartMatrixTableTHIMG);
	}
	typeAside3TypechartMatrix.appendChild(typeAside3TypeChartMatrixTable);
	var TypeChartNormal = document.querySelectorAll('.typechart td[title="1×"]');
	var TypeChartMatrix = document.querySelectorAll('.typechart td[title="2×"]');
	var TypeChartInmatrix = document.querySelectorAll('.typechart td[title="½×"]');
	var TypeChartImmune = document.querySelectorAll('.typechart td[title="0×"]');
	for(var i = 0; i < TypeChartNormal.length; i++) {
		TypeChartNormal[i].setAttribute("title", "Normal Effectiveness");
	}
	for(var i = 0; i < TypeChartMatrix.length; i++) {
		TypeChartMatrix[i].setAttribute("title", "Super Effective");
	}
	for(var i = 0; i < TypeChartInmatrix.length; i++) {
		TypeChartInmatrix[i].setAttribute("title", "Not Very Effective");
	}
	for(var i = 0; i < TypeChartImmune.length; i++) {
		TypeChartImmune[i].setAttribute("title", "No Effect");
	}
	var typeAside3TypeChartEffectivenessTable = document.createElement("table");
	typeAside3TypeChartEffectivenessTable.setAttribute("id", "typechart-effectiveness-table");
	typeAside3TypeChartEffectivenessTable.setAttribute("name", MEDIAPath_Type_Icon);
	typeAside3TypeChartEffectivenessTable.classList.add("typechart");
	var typeAside3TypeChartEffectivenessTableTR = document.createElement("tr");
	typeAside3TypeChartEffectivenessTable.appendChild(typeAside3TypeChartEffectivenessTableTR);
	var tempEffectivenessArrLeft = [];
	var tempEffectivenessArrLeftCount = {};
	var tempEffectivenessArrRight = [];
	var tempEffectivenessArrRightCount = {};
	var tempEffectivenessArrLeftMax = [];
	var tempEffectivenessArrLeftMaxCount = {};
	var tempEffectivenessArrLeftMaxResult = [];
	var tempEffectivenessArrRightMax = [];
	var tempEffectivenessArrRightMaxCount = {};
	var tempEffectivenessArrRightMaxResult = [];
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
				tempEffectivenessArrLeftMax.push(i);
			}
		}
		for(var num of tempEffectivenessArrLeftMax) {
			tempEffectivenessArrLeftMaxCount[num] = tempEffectivenessArrLeftMaxCount[num] ? tempEffectivenessArrLeftMaxCount[num] + 1 : 1;
		}
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
				tempEffectivenessArrRightMax.push(i);
			}
		}
		for(var num of tempEffectivenessArrRightMax) {
			tempEffectivenessArrRightMaxCount[num] = tempEffectivenessArrRightMaxCount[num] ? tempEffectivenessArrRightMaxCount[num] + 1 : 1;
		}
		if(tempEffectivenessArrLeftMaxCount[i] != undefined) {
			tempEffectivenessArrLeftMaxResult.push(tempEffectivenessArrLeftMaxCount[i]);
		}
		if(tempEffectivenessArrRightMaxCount[i] != undefined) {
			tempEffectivenessArrRightMaxResult.push(tempEffectivenessArrRightMaxCount[i]);
		}
	}
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		var typeAside3TypeChartEffectivenessTableTR = document.createElement("tr");
		var typeAside3TypeChartEffectivenessTableTH = document.createElement("th");
		var typeAside3TypeChartEffectivenessTableTHIMG = document.createElement("img");
		typeAside3TypeChartEffectivenessTable.appendChild(typeAside3TypeChartEffectivenessTableTR);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
				tempEffectivenessArrLeft.push(i);
			}
		}
		for(var num of tempEffectivenessArrLeft) {
			tempEffectivenessArrLeftCount[num] = tempEffectivenessArrLeftCount[num] ? tempEffectivenessArrLeftCount[num] + 1 : 1;
		}
		if(tempEffectivenessArrLeftCount[i] == undefined) {
			tempEffectivenessArrLeftCount[i] = 0;
		}
		for(var q = 0; q < Math.max.apply(Math, tempEffectivenessArrLeftMaxResult) - tempEffectivenessArrLeftCount[i]; q++) {
			var typeAside3TypeChartEffectivenessTableTDLeft = document.createElement("td");
			typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTDLeft);
		}
		typeAside3TypeChartEffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
		typeAside3TypeChartEffectivenessTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
		typeAside3TypeChartEffectivenessTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
		typeAside3TypeChartEffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
		typeAside3TypeChartEffectivenessTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
				var typeAside3TypeChartEffectivenessTableTHLeft = document.createElement("th");
				var typeAside3TypeChartEffectivenessTableTHLeftIMG = document.createElement("img");
				typeAside3TypeChartEffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
				typeAside3TypeChartEffectivenessTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
				typeAside3TypeChartEffectivenessTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
				typeAside3TypeChartEffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
				typeAside3TypeChartEffectivenessTableTHLeftIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
				typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTHLeft);
				typeAside3TypeChartEffectivenessTableTHLeft.appendChild(typeAside3TypeChartEffectivenessTableTHLeftIMG);
			}
		}
		var typeAside3TypeChartEffectivenessTableTDLeftArrow = document.createElement("td");
		if(tempEffectivenessArrLeftCount[i] != 0) {
			typeAside3TypeChartEffectivenessTableTDLeftArrow.innerText = "→";
		}
		typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTDLeftArrow);
		typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTH);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
				tempEffectivenessArrRight.push(i);
			}
		}
		for(var num of tempEffectivenessArrRight) {
			tempEffectivenessArrRightCount[num] = tempEffectivenessArrRightCount[num] ? tempEffectivenessArrRightCount[num] + 1 : 1;
		}
		if(tempEffectivenessArrRightCount[i] == undefined) {
			tempEffectivenessArrRightCount[i] = 0;
		}
		var typeAside3TypeChartEffectivenessTableTDRightArrow = document.createElement("td");
		if(tempEffectivenessArrRightCount[i] != 0) {
			typeAside3TypeChartEffectivenessTableTDRightArrow.innerText = "→";
		}
		typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTDRightArrow);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
				var typeAside3TypeChartEffectivenessTableTHRight = document.createElement("th");
				var typeAside3TypeChartEffectivenessTableTHRightIMG = document.createElement("img");
				typeAside3TypeChartEffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
				typeAside3TypeChartEffectivenessTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
				typeAside3TypeChartEffectivenessTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
				typeAside3TypeChartEffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
				typeAside3TypeChartEffectivenessTableTHRightIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
				typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTHRight);
				typeAside3TypeChartEffectivenessTableTHRight.appendChild(typeAside3TypeChartEffectivenessTableTHRightIMG);
			}
		}
		typeAside3TypeChartEffectivenessTableTH.appendChild(typeAside3TypeChartEffectivenessTableTHIMG);
		for(var q = 0; q < Math.max.apply(Math, tempEffectivenessArrRightMaxResult) - tempEffectivenessArrRightCount[i]; q++) {
			var typeAside3TypeChartEffectivenessTableTDRight = document.createElement("td");
			typeAside3TypeChartEffectivenessTableTR.appendChild(typeAside3TypeChartEffectivenessTableTDRight);
		}
	}
	typeAside3TypechartEffectiveness.appendChild(typeAside3TypeChartEffectivenessTable);
	var typeAside3TypeChartIneffectivenessTable = document.createElement("table");
	typeAside3TypeChartIneffectivenessTable.setAttribute("id", "typechart-ineffectiveness-table");
	typeAside3TypeChartIneffectivenessTable.setAttribute("name", MEDIAPath_Type_Icon);
	typeAside3TypeChartIneffectivenessTable.classList.add("typechart");
	var typeAside3TypeChartIneffectivenessTableTR = document.createElement("tr");
	typeAside3TypeChartIneffectivenessTable.appendChild(typeAside3TypeChartIneffectivenessTableTR);
	var tempIneffectivenessArrLeft = [];
	var tempIneffectivenessArrLeftCount = {};
	var tempIneffectivenessArrRight = [];
	var tempIneffectivenessArrRightCount = {};
	var tempIneffectivenessArrLeftMax = [];
	var tempIneffectivenessArrLeftMaxCount = {};
	var tempIneffectivenessArrLeftMaxResult = [];
	var tempIneffectivenessArrRightMax = [];
	var tempIneffectivenessArrRightMaxCount = {};
	var tempIneffectivenessArrRightMaxResult = [];
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
				tempIneffectivenessArrLeftMax.push(i);
			}
		}
		for(var num of tempIneffectivenessArrLeftMax) {
			tempIneffectivenessArrLeftMaxCount[num] = tempIneffectivenessArrLeftMaxCount[num] ? tempIneffectivenessArrLeftMaxCount[num] + 1 : 1;
		}
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
				tempIneffectivenessArrRightMax.push(i);
			}
		}
		for(var num of tempIneffectivenessArrRightMax) {
			tempIneffectivenessArrRightMaxCount[num] = tempIneffectivenessArrRightMaxCount[num] ? tempIneffectivenessArrRightMaxCount[num] + 1 : 1;
		}
		if(tempIneffectivenessArrLeftMaxCount[i] != undefined) {
			tempIneffectivenessArrLeftMaxResult.push(tempIneffectivenessArrLeftMaxCount[i]);
		}
		if(tempIneffectivenessArrRightMaxCount[i] != undefined) {
			tempIneffectivenessArrRightMaxResult.push(tempIneffectivenessArrRightMaxCount[i]);
		}
	}
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		var typeAside3TypeChartIneffectivenessTableTR = document.createElement("tr");
		var typeAside3TypeChartIneffectivenessTableTH = document.createElement("th");
		var typeAside3TypeChartIneffectivenessTableTHIMG = document.createElement("img");
		typeAside3TypeChartIneffectivenessTable.appendChild(typeAside3TypeChartIneffectivenessTableTR);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
				tempIneffectivenessArrLeft.push(i);
			}
		}
		for(var num of tempIneffectivenessArrLeft) {
			tempIneffectivenessArrLeftCount[num] = tempIneffectivenessArrLeftCount[num] ? tempIneffectivenessArrLeftCount[num] + 1 : 1;
		}
		if(tempIneffectivenessArrLeftCount[i] == undefined) {
			tempIneffectivenessArrLeftCount[i] = 0;
		}
		for(var q = 0; q < Math.max.apply(Math, tempIneffectivenessArrLeftMaxResult) - tempIneffectivenessArrLeftCount[i]; q++) {
			var typeAside3TypeChartIneffectivenessTableTDLeft = document.createElement("td");
			typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTDLeft);
		}
		typeAside3TypeChartIneffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
		typeAside3TypeChartIneffectivenessTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
		typeAside3TypeChartIneffectivenessTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
		typeAside3TypeChartIneffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
		typeAside3TypeChartIneffectivenessTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
				var typeAside3TypeChartIneffectivenessTableTHLeft = document.createElement("th");
				var typeAside3TypeChartIneffectivenessTableTHLeftIMG = document.createElement("img");
				typeAside3TypeChartIneffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
				typeAside3TypeChartIneffectivenessTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
				typeAside3TypeChartIneffectivenessTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
				typeAside3TypeChartIneffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
				typeAside3TypeChartIneffectivenessTableTHLeftIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
				typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTHLeft);
				typeAside3TypeChartIneffectivenessTableTHLeft.appendChild(typeAside3TypeChartIneffectivenessTableTHLeftIMG);
			}
		}
		var typeAside3TypeChartIneffectivenessTableTDLeftArrow = document.createElement("td");
		if(tempIneffectivenessArrLeftCount[i] != 0) {
			typeAside3TypeChartIneffectivenessTableTDLeftArrow.innerText = "→";
		}
		typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTDLeftArrow);
		typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTH);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
				tempIneffectivenessArrRight.push(i);
			}
		}
		for(var num of tempIneffectivenessArrRight) {
			tempIneffectivenessArrRightCount[num] = tempIneffectivenessArrRightCount[num] ? tempIneffectivenessArrRightCount[num] + 1 : 1;
		}
		if(tempIneffectivenessArrRightCount[i] == undefined) {
			tempIneffectivenessArrRightCount[i] = 0;
		}
		var typeAside3TypeChartIneffectivenessTableTDRightArrow = document.createElement("td");
		if(tempIneffectivenessArrRightCount[i] != 0) {
			typeAside3TypeChartIneffectivenessTableTDRightArrow.innerText = "→";
		}
		typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTDRightArrow);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
				var typeAside3TypeChartIneffectivenessTableTHRight = document.createElement("th");
				var typeAside3TypeChartIneffectivenessTableTHRightIMG = document.createElement("img");
				typeAside3TypeChartIneffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
				typeAside3TypeChartIneffectivenessTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
				typeAside3TypeChartIneffectivenessTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
				typeAside3TypeChartIneffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
				typeAside3TypeChartIneffectivenessTableTHRightIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
				typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTHRight);
				typeAside3TypeChartIneffectivenessTableTHRight.appendChild(typeAside3TypeChartIneffectivenessTableTHRightIMG);
			}
		}
		typeAside3TypeChartIneffectivenessTableTH.appendChild(typeAside3TypeChartIneffectivenessTableTHIMG);
		for(var q = 0; q < Math.max.apply(Math, tempIneffectivenessArrRightMaxResult) - tempIneffectivenessArrRightCount[i]; q++) {
			var typeAside3TypeChartIneffectivenessTableTDRight = document.createElement("td");
			typeAside3TypeChartIneffectivenessTableTR.appendChild(typeAside3TypeChartIneffectivenessTableTDRight);
		}
	}
	typeAside3TypechartIneffectiveness.appendChild(typeAside3TypeChartIneffectivenessTable);
	var typeAside3TypeChartImmunityTable = document.createElement("table");
	typeAside3TypeChartImmunityTable.setAttribute("id", "typechart-immunity-table");
	typeAside3TypeChartImmunityTable.setAttribute("name", MEDIAPath_Type_Icon);
	typeAside3TypeChartImmunityTable.classList.add("typechart");
	var typeAside3TypeChartImmunityTableTR = document.createElement("tr");
	typeAside3TypeChartImmunityTable.appendChild(typeAside3TypeChartImmunityTableTR);
	var tempImmunityArrLeft = [];
	var tempImmunityArrLeftCount = {};
	var tempImmunityArrRight = [];
	var tempImmunityArrRightCount = {};
	var tempImmunityArrLeftMax = [];
	var tempImmunityArrLeftMaxCount = {};
	var tempImmunityArrLeftMaxResult = [];
	var tempImmunityArrRightMax = [];
	var tempImmunityArrRightMaxCount = {};
	var tempImmunityArrRightMaxResult = [];
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
				tempImmunityArrLeftMax.push(i);
			}
		}
		for(var num of tempImmunityArrLeftMax) {
			tempImmunityArrLeftMaxCount[num] = tempImmunityArrLeftMaxCount[num] ? tempImmunityArrLeftMaxCount[num] + 1 : 1;
		}
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
				tempImmunityArrRightMax.push(i);
			}
		}
		for(var num of tempImmunityArrRightMax) {
			tempImmunityArrRightMaxCount[num] = tempImmunityArrRightMaxCount[num] ? tempImmunityArrRightMaxCount[num] + 1 : 1;
		}
		if(tempImmunityArrLeftMaxCount[i] != undefined) {
			tempImmunityArrLeftMaxResult.push(tempImmunityArrLeftMaxCount[i]);
		}
		if(tempImmunityArrRightMaxCount[i] != undefined) {
			tempImmunityArrRightMaxResult.push(tempImmunityArrRightMaxCount[i]);
		}
	}
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
		var typeAside3TypeChartImmunityTableTR = document.createElement("tr");
		var typeAside3TypeChartImmunityTableTH = document.createElement("th");
		var typeAside3TypeChartImmunityTableTHIMG = document.createElement("img");
		typeAside3TypeChartImmunityTable.appendChild(typeAside3TypeChartImmunityTableTR);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
				tempImmunityArrLeft.push(i);
			}
		}
		for(var num of tempImmunityArrLeft) {
			tempImmunityArrLeftCount[num] = tempImmunityArrLeftCount[num] ? tempImmunityArrLeftCount[num] + 1 : 1;
		}
		if(tempImmunityArrLeftCount[i] == undefined) {
			tempImmunityArrLeftCount[i] = 0;
		}
		for(var q = 0; q < Math.max.apply(Math, tempImmunityArrLeftMaxResult) - tempImmunityArrLeftCount[i]; q++) {
			var typeAside3TypeChartImmunityTableTDLeft = document.createElement("td");
			typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTDLeft);
		}
		typeAside3TypeChartImmunityTableTH.innerText = finaldataTypeChartTitle[i];
		typeAside3TypeChartImmunityTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
		typeAside3TypeChartImmunityTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
		typeAside3TypeChartImmunityTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
		typeAside3TypeChartImmunityTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
				var typeAside3TypeChartImmunityTableTHLeft = document.createElement("th");
				var typeAside3TypeChartImmunityTableTHLeftIMG = document.createElement("img");
				typeAside3TypeChartImmunityTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
				typeAside3TypeChartImmunityTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
				typeAside3TypeChartImmunityTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
				typeAside3TypeChartImmunityTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
				typeAside3TypeChartImmunityTableTHLeftIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
				typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTHLeft);
				typeAside3TypeChartImmunityTableTHLeft.appendChild(typeAside3TypeChartImmunityTableTHLeftIMG);
			}
		}
		var typeAside3TypeChartImmunityTableTDLeftArrow = document.createElement("td");
		if(tempImmunityArrLeftCount[i] != 0) {
			typeAside3TypeChartImmunityTableTDLeftArrow.innerText = "→";
		}
		typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTDLeftArrow);
		typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTH);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
				tempImmunityArrRight.push(i);
			}
		}
		for(var num of tempImmunityArrRight) {
			tempImmunityArrRightCount[num] = tempImmunityArrRightCount[num] ? tempImmunityArrRightCount[num] + 1 : 1;
		}
		if(tempImmunityArrRightCount[i] == undefined) {
			tempImmunityArrRightCount[i] = 0;
		}
		var typeAside3TypeChartImmunityTableTDRightArrow = document.createElement("td");
		if(tempImmunityArrRightCount[i] != 0) {
			typeAside3TypeChartImmunityTableTDRightArrow.innerText = "→";
		}
		typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTDRightArrow);
		for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
			if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
				var typeAside3TypeChartImmunityTableTHRight = document.createElement("th");
				var typeAside3TypeChartImmunityTableTHRightIMG = document.createElement("img");
				typeAside3TypeChartImmunityTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
				typeAside3TypeChartImmunityTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
				typeAside3TypeChartImmunityTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
				typeAside3TypeChartImmunityTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
				typeAside3TypeChartImmunityTableTHRightIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
				typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTHRight);
				typeAside3TypeChartImmunityTableTHRight.appendChild(typeAside3TypeChartImmunityTableTHRightIMG);
			}
		}
		typeAside3TypeChartImmunityTableTH.appendChild(typeAside3TypeChartImmunityTableTHIMG);
		for(var q = 0; q < Math.max.apply(Math, tempImmunityArrRightMaxResult) - tempImmunityArrRightCount[i]; q++) {
			var typeAside3TypeChartImmunityTableTDRight = document.createElement("td");
			typeAside3TypeChartImmunityTableTR.appendChild(typeAside3TypeChartImmunityTableTDRight);
		}
	}
	typeAside3TypechartImmunity.appendChild(typeAside3TypeChartImmunityTable);
	var typeOptionsTitle = ["Matrix", "Effectiveness", "Ineffectiveness", "Immunity", ];
	for(var q = 0; q < typeOptionsTitle.length; q++) {
		var typeAside1OptionsInput = document.createElement("input");
		var typeAside1OptionsLabel = document.createElement("label");
		typeAside1OptionsInput.setAttribute("type", "radio");
		typeAside1OptionsInput.setAttribute("name", "type-options");
		typeAside1OptionsInput.setAttribute("id", "type-options-" + q);
		typeAside1OptionsInput.setAttribute("autocomplete", "off");
		typeAside1OptionsInput.value = q;
		typeAside1OptionsLabel.setAttribute("for", "type-options-" + q);
		typeAside1OptionsLabel.setAttribute("name", "large");
		typeAside1OptionsLabel.innerText = typeOptionsTitle[q];
		typeAside1Options.appendChild(typeAside1OptionsInput);
		typeAside1Options.appendChild(typeAside1OptionsLabel);
		typeAside1OptionsInput.addEventListener("click", typeOptionsSelector);

		function typeOptionsSelector() {
			typeAside2Title.innerText = typeOptionsTitle[this.value] + " Type Chart";
			var typechartContents = document.querySelectorAll("#type-aside3 div[name]");
			var typechartContent = document.querySelectorAll("#type-aside3 div[name='" + this.value + "']");
			for(var q = 0; q < typechartContents.length; q++) {
				typechartContents[q].style.display = "none";
			}
			for(var q = 0; q < typechartContent.length; q++) {
				typechartContent[q].style.display = "flex";
			}
		}
		if(q == 0) {
			typeAside1OptionsLabel.click();
		}
	}
};

function typeSwitch(type) {
	var type;
	var typeTitle = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
	var img = document.querySelectorAll(".type-againstopposed data img");
	for(var i = 0; i < img.length; i++) {
		img[i].remove();
	}
	var brk = document.querySelectorAll(".type-againstopposed data br");
	for(var i = 0; i < brk.length; i++) {
		brk[i].remove();
	}
	var spn = document.querySelectorAll(".type-againstopposed data span");
	for(var i = 0; i < spn.length; i++) {
		spn[i].remove();
	}
	let typetitle = document.querySelector(".type-description-title h1");
	let typeicon = document.querySelector(".type-symbol");
	let againstEffective = document.querySelector(".type-against .type-effective-content");
	let againstIneffective = document.querySelector(".type-against .type-ineffective-content");
	let againstImmune = document.querySelector(".type-against .type-immune-content");
	let againstDefault = document.querySelector(".type-against .type-default-content");
	let opposedEffective = document.querySelector(".type-opposed .type-effective-content");
	let opposedIneffective = document.querySelector(".type-opposed .type-ineffective-content");
	let opposedImmune = document.querySelector(".type-opposed .type-immune-content");
	let opposedDefault = document.querySelector(".type-opposed .type-default-content");
	typetitle.innerText = typeTitle;
	typeicon.src = "./media/Images/Misc/Type/Symbol/" + typeicon.alt + "/" + typeTitle + ".png";
	typeicon.title = typetitle.innerText;
	var againstEffectiveBreak = document.createElement("br");
	var againstIneffectiveBreak = document.createElement("br");
	var againstImmuneBreak = document.createElement("br");
	var againstDefaultBreak = document.createElement("br");
	var opposedEffectiveBreak = document.createElement("br");
	var opposedIneffectiveBreak = document.createElement("br");
	var opposedImmuneBreak = document.createElement("br");
	var opposedDefaultBreak = document.createElement("br");
	var selectors = document.querySelectorAll(".type-selector label");
	for(var i = 0; i < selectors.length; i++) {
		if(i == 0) {
			selectors[i].setAttribute("title", "When used on a " + typeTitle + "-type Pokémon");
		}
		if(i == 1) {
			selectors[i].setAttribute("title", "When used by a " + typeTitle + "-type Move");
		}
	}
	againstEffective.appendChild(againstEffectiveBreak);
	againstIneffective.appendChild(againstIneffectiveBreak);
	againstImmune.appendChild(againstImmuneBreak);
	againstDefault.appendChild(againstDefaultBreak);
	opposedEffective.appendChild(opposedEffectiveBreak);
	opposedIneffective.appendChild(opposedIneffectiveBreak);
	opposedImmune.appendChild(opposedImmuneBreak);
	opposedDefault.appendChild(opposedDefaultBreak);
	var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[0]).toString().split(",");
	var index = finaldataTypeChartTitle.indexOf(type);
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		if(finaldataTypeChart[i][type] == "0×") {
			var ImmunityType = document.createElement("img");
			ImmunityType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			ImmunityType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			ImmunityType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			ImmunityType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstImmune.appendChild(ImmunityType);
			var ImmunityTypeText = document.createElement("span");
			ImmunityTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstImmune.appendChild(ImmunityTypeText);
			againstImmuneBreak.remove();
		}
		if(finaldataTypeChart[i][type] == "½×") {
			var IneffectivenessType = document.createElement("img");
			IneffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			IneffectivenessType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			IneffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			IneffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstIneffective.appendChild(IneffectivenessType);
			var IneffectivenessTypeText = document.createElement("span");
			IneffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstIneffective.appendChild(IneffectivenessTypeText);
			againstIneffectiveBreak.remove();
		}
		if(finaldataTypeChart[i][type] == "1×") {
			var DefaultType = document.createElement("img");
			DefaultType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			DefaultType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			DefaultType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			DefaultType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstDefault.appendChild(DefaultType);
			var DefaultTypeText = document.createElement("span");
			DefaultTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstDefault.appendChild(DefaultTypeText);
			againstDefaultBreak.remove();
		}
		if(finaldataTypeChart[i][type] == "2×") {
			var EffectivenessType = document.createElement("img");
			EffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			EffectivenessType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			EffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			EffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstEffective.appendChild(EffectivenessType);
			var EffectivenessTypeText = document.createElement("span");
			EffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstEffective.appendChild(EffectivenessTypeText);
			againstEffectiveBreak.remove();
		}
	}
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "0×") {
			var ImmunityType = document.createElement("img");
			ImmunityType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			ImmunityType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			ImmunityType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			ImmunityType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedImmune.appendChild(ImmunityType);
			var ImmunityTypeText = document.createElement("span");
			ImmunityTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedImmune.appendChild(ImmunityTypeText);
			opposedImmuneBreak.remove();
		}
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "½×") {
			var IneffectivenessType = document.createElement("img");
			IneffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			IneffectivenessType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			IneffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			IneffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedIneffective.appendChild(IneffectivenessType);
			var IneffectivenessTypeText = document.createElement("span");
			IneffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedIneffective.appendChild(IneffectivenessTypeText);
			opposedIneffectiveBreak.remove();
		}
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "1×") {
			var DefaultType = document.createElement("img");
			DefaultType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			DefaultType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			DefaultType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			DefaultType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedDefault.appendChild(DefaultType);
			var DefaultTypeText = document.createElement("span");
			DefaultTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedDefault.appendChild(DefaultTypeText);
			opposedDefaultBreak.remove();
		}
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "2×") {
			var EffectivenessType = document.createElement("img");
			EffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			EffectivenessType.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='inline'");
			EffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			EffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedEffective.appendChild(EffectivenessType);
			var EffectivenessTypeText = document.createElement("span");
			EffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedEffective.appendChild(EffectivenessTypeText);
			opposedEffectiveBreak.remove();
		}
	}
}

function switchTypeChartMatrix() {
	const typeChartMatrixText = document.querySelectorAll(".typechart th");
	const typeChartMatrixImg = document.querySelectorAll(".typechart th img");
	const check1 = document.getElementById("typechart-title-switch-1");
	const check2 = document.getElementById("typechart-title-switch-2");
	const checklabel1 = document.querySelector("#typechart-title-switch-1 ~ label");
	const checklabel2 = document.querySelector("#typechart-title-switch-2 ~ label");
	if(check1.checked == true) {
		for(var i = 0; i < typeChartMatrixText.length; i++) {
			typeChartMatrixText[i].style.fontSize = "0.5vw";
		}
		for(var i = 0; i < typeChartMatrixImg.length; i++) {
			typeChartMatrixImg[i].style.display = "none";
		}
		checklabel1.parentElement.style.fontSize = "unset";
		checklabel1.style.display = "none";
		checklabel2.style.display = "block";
	}
	if(check2.checked == true) {
		for(var i = 0; i < typeChartMatrixText.length; i++) {
			typeChartMatrixText[i].style.fontSize = "0%";
		}
		for(var i = 0; i < typeChartMatrixImg.length; i++) {
			typeChartMatrixImg[i].style.display = "block";
		}
		checklabel1.parentElement.style.fontSize = "unset";
		checklabel1.style.display = "block";
		checklabel2.style.display = "none";
	}
}
$("#typechart-matrix-table td").bind("mouseover mouseleave", function(e) {
	var index = this.cellIndex;
	if(e.type == "mouseover") {
		$(this).parent().addClass("highlight");
		$(this).parents("table").find("tr").each(function() {
			$(this).find("th").eq(index).addClass("highlight");
		});
	} else {
		$(this).parent().removeClass("highlight");
		$(this).parents("table").find("tr").each(function() {
			$(this).find("th").eq(index).removeClass("highlight");
		});
	}
});