var createTool = function() {
	var toolOuter = document.createElement("div");
	var toolAside1 = document.createElement("aside");
	var toolAside1OptionsTitleOuter = document.createElement("div");
	var toolAside1OptionsTitle = document.createElement("h2");
	var toolAside1OptionsOuter = document.createElement("div");
	var toolAside1Options = document.createElement("div");
	var toolAside2 = document.createElement("aside");
	var toolAside2Title = document.createElement("h1");
	var toolAside3 = document.createElement("aside");
	var toolAside3TimersOuter = document.createElement("div");
	var toolAside3TimerSelectorOuter = document.createElement("div");
	toolOuter.setAttribute("id", "tool-outer");
	toolOuter.setAttribute("name", "Tools");
	toolAside1.setAttribute("id", "tool-aside1");
	toolAside1OptionsTitleOuter.setAttribute("id", "tool-options-title");
	toolAside1OptionsTitle.innerText = "Tools";
	toolAside1OptionsOuter.setAttribute("id", "tool-options-outer");
	toolAside1OptionsOuter.classList.add("scroll");
	toolAside1Options.setAttribute("id", "tool-options");
	toolAside2.setAttribute("id", "tool-aside2");
	toolAside2Title.innerText = "Tools";
	toolAside3.setAttribute("id", "tool-aside3");
	toolAside3TimersOuter.setAttribute("id", "timers-outer");
	toolAside3TimersOuter.setAttribute("name", "0");
	toolAside3TimerSelectorOuter.setAttribute("id", "timer-selector-outer");
	document.querySelector("#contain").appendChild(toolOuter);
	toolOuter.appendChild(toolAside1);
	toolAside1.appendChild(toolAside1OptionsTitleOuter);
	toolAside1OptionsTitleOuter.appendChild(toolAside1OptionsTitle);
	toolAside1.appendChild(toolAside1OptionsOuter);
	toolAside1OptionsOuter.appendChild(toolAside1Options);
	toolOuter.appendChild(toolAside2);
	toolAside2.appendChild(toolAside2Title);
	toolOuter.appendChild(toolAside3);
	toolAside3.appendChild(toolAside3TimersOuter);
	toolAside3TimersOuter.appendChild(toolAside3TimerSelectorOuter);


  var toolAside2Game = document.createElement("span");
  var toolAside2GameImage = document.createElement("img");
  toolAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
  toolAside2GameImage.setAttribute("onerror","this.display='none'");
  toolAside2.appendChild(toolAside2Game);
  toolAside2Game.appendChild(toolAside2GameImage);










	function createTimer() {
		var stopwatchcountdown = ["stopwatch", "countdown"];
		for(var q = 0; q < stopwatchcountdown.length; q++) {
			var toolAside3TimerOuter = document.createElement("div");
			var toolAside3Timer = document.createElement("div");
			var toolAside3TimerPausePlay = document.createElement("button");
			var toolAside3TimerTime = document.createElement("p");
			var toolAside3TimerSet = document.createElement("div");
			var toolAside3TimerSetSpan = document.createElement("span");
			var toolAside3TimerSetInputHours = document.createElement("input");
			var toolAside3TimerSetInputMinutes = document.createElement("input");
			var toolAside3TimerSetInputSeconds = document.createElement("input");
			var toolAside3TimerSetInputMilliseconds = document.createElement("input");
			var toolAside3TimerList = document.createElement("ul");
			var toolAside3TimerLaps = document.createElement("button");
			var toolAside3TimerReset = document.createElement("button");
			toolAside3TimerOuter.setAttribute("id", stopwatchcountdown[q] + "-outer");
			toolAside3Timer.setAttribute("id", stopwatchcountdown[q]);
			toolAside3TimerPausePlay.setAttribute("id", stopwatchcountdown[q] + "-start-stop");
			toolAside3TimerPausePlay.setAttribute("title", "Start");
			toolAside3TimerPausePlay.innerText = "\u23F5";
			toolAside3TimerTime.setAttribute("id", stopwatchcountdown[q] + "-time");
			toolAside3TimerSet.setAttribute("id", stopwatchcountdown[q] + "-set");
			toolAside3TimerSetSpan;
			toolAside3TimerSetInputHours.setAttribute("type", "number");
			toolAside3TimerSetInputHours.setAttribute("min", "0");
			toolAside3TimerSetInputHours.setAttribute("max", "9999");
			toolAside3TimerSetInputHours.setAttribute("autocomplete", "off");
			toolAside3TimerSetInputHours.setAttribute("placeholder", "00");
			toolAside3TimerSetInputHours.setAttribute("title", "Hours");
			toolAside3TimerSetInputHours.classList.add(stopwatchcountdown[q] + "-hours");
			toolAside3TimerSetInputMinutes.setAttribute("type", "number");
			toolAside3TimerSetInputMinutes.setAttribute("min", "0");
			toolAside3TimerSetInputMinutes.setAttribute("max", "59");
			toolAside3TimerSetInputMinutes.setAttribute("autocomplete", "off");
			toolAside3TimerSetInputMinutes.setAttribute("placeholder", "00");
			toolAside3TimerSetInputMinutes.setAttribute("title", "Minutes");
			toolAside3TimerSetInputMinutes.classList.add(stopwatchcountdown[q] + "-minutes");
			toolAside3TimerSetInputSeconds.setAttribute("type", "number");
			toolAside3TimerSetInputSeconds.setAttribute("min", "0");
			toolAside3TimerSetInputSeconds.setAttribute("max", "59");
			toolAside3TimerSetInputSeconds.setAttribute("autocomplete", "off");
			toolAside3TimerSetInputSeconds.setAttribute("placeholder", "00");
			toolAside3TimerSetInputSeconds.setAttribute("title", "Seconds");
			toolAside3TimerSetInputSeconds.classList.add(stopwatchcountdown[q] + "-seconds");
			toolAside3TimerSetInputMilliseconds.setAttribute("type", "number");
			toolAside3TimerSetInputMilliseconds.setAttribute("min", "0");
			toolAside3TimerSetInputMilliseconds.setAttribute("max", "99");
			toolAside3TimerSetInputMilliseconds.setAttribute("autocomplete", "off");
			toolAside3TimerSetInputMilliseconds.setAttribute("placeholder", "00");
			toolAside3TimerSetInputMilliseconds.setAttribute("title", "Milliseconds");
			toolAside3TimerSetInputMilliseconds.classList.add(stopwatchcountdown[q] + "-milliseconds");
			toolAside3TimerList.setAttribute("id", stopwatchcountdown[q] + "-list");
			toolAside3TimerLaps.setAttribute("id", stopwatchcountdown[q] + "-laps");
			toolAside3TimerLaps.setAttribute("title", "Laps");
			toolAside3TimerLaps.innerHTML = "<p>\u23F7</p>";
			toolAside3TimerReset.setAttribute("id", stopwatchcountdown[q] + "-reset");
			toolAside3TimerReset.setAttribute("title", "Reset");
			toolAside3TimerReset.innerHTML = "<p>\u23F9</p>";
			toolAside3TimersOuter.appendChild(toolAside3TimerOuter);
			toolAside3TimerOuter.appendChild(toolAside3Timer);
			toolAside3Timer.appendChild(toolAside3TimerPausePlay);
			toolAside3Timer.appendChild(toolAside3TimerSet);
			toolAside3TimerSet.appendChild(toolAside3TimerReset);
			toolAside3TimerSet.appendChild(toolAside3TimerTime);
			toolAside3TimerSet.appendChild(toolAside3TimerSetSpan);
			toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputHours);
			toolAside3TimerSetSpan.innerHTML += ":";
			toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputMinutes);
			toolAside3TimerSetSpan.innerHTML += ":";
			toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputSeconds);
			toolAside3TimerSetSpan.innerHTML += ":";
			toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputMilliseconds);
			toolAside3TimerOuter.appendChild(toolAside3TimerList);

			toolAside3TimerSet.appendChild(toolAside3TimerLaps);
		}
		for(var q = 0; q < stopwatchcountdown.length; q++) {
			var x = q + 1;
			var toolAside3TimerSelector = document.createElement("div");
			var toolAside3TimerSelectorInput = document.createElement("input");
			var toolAside3TimerSelectorLabel = document.createElement("label");
			toolAside3TimerSelector.setAttribute("id", "timer-selector");
			toolAside3TimerSelectorInput.setAttribute("type", "radio");
			toolAside3TimerSelectorInput.setAttribute("id", "timerselector" + x);
			toolAside3TimerSelectorInput.setAttribute("name", "timerselector");
			toolAside3TimerSelectorInput.setAttribute("autocomplete", "off");
			toolAside3TimerSelectorLabel.setAttribute("for", "timerselector" + x);
			toolAside3TimerSelectorLabel.innerText = titleCase(stopwatchcountdown[q]);
			toolAside3TimerSelectorOuter.appendChild(toolAside3TimerSelector);
			toolAside3TimerSelector.appendChild(toolAside3TimerSelectorInput);
			toolAside3TimerSelector.appendChild(toolAside3TimerSelectorLabel);
			if(q == 0) {
				toolAside3TimerSelectorLabel.click();
			}
			toolAside3TimerSelectorInput.addEventListener("click", timerSelector);
		}
	}

	function createRNG() {
		var toolAside3RNGOuter = document.createElement("div");
		var toolAside3RNG = document.createElement("div");
		var toolAside3RNGOptions = document.createElement("div");
		var toolAside3RNGOptionsIterations = document.createElement("div");
		var toolAside3RNGOptionsIterationsText = document.createElement("p");
		var toolAside3RNGOptionsIterationsInput = document.createElement("input");
		var toolAside3RNGOptionsTitle = document.createElement("div");
		var toolAside3RNGOptionsTitleIterations = document.createElement("div");
		var toolAside3RNGOptionsTitleIterationsText = document.createElement("p");
		var toolAside3RNGOptionsTitleMin = document.createElement("div");
		var toolAside3RNGOptionsTitleMinText = document.createElement("p");
		var toolAside3RNGOptionsTitleMax = document.createElement("div");
		var toolAside3RNGOptionsTitleMaxText = document.createElement("p");
		var toolAside3RNGOptionsUl = document.createElement("ul");
		var toolAside3RNGOptionsExecute = document.createElement("div");
		var toolAside3RNGOptionsExecuteButton = document.createElement("button");
		var toolAside3RNGResult = document.createElement("div");
		toolAside3RNGOuter.classList.add("rng-outer");
		toolAside3RNGOuter.setAttribute("name", "1");
		toolAside3RNG.setAttribute("id", "rng");
		toolAside3RNGResult.classList.add("result");
		toolAside3RNGResult.classList.add("scroll");
		toolAside3RNGOptions.classList.add("options");
		toolAside3RNGOptionsIterations.classList.add("iterations");
		toolAside3RNGOptionsIterationsText.innerText = "Iterations";
		toolAside3RNGOptionsIterationsInput.setAttribute("type", "number");
		toolAside3RNGOptionsIterationsInput.setAttribute("min", "1");
		toolAside3RNGOptionsIterationsInput.setAttribute("max", "1000");
		toolAside3RNGOptionsIterationsInput.setAttribute("value", "1");
		toolAside3RNGOptionsIterationsInput.setAttribute("autocomplete", "off");
		toolAside3RNGOptionsTitle.classList.add("title");
		toolAside3RNGOptionsTitleIterations.classList.add("it");
		toolAside3RNGOptionsTitleIterationsText.innerText = "#";
		toolAside3RNGOptionsTitleMin.classList.add("min");
		toolAside3RNGOptionsTitleMinText.innerText = "Min";
		toolAside3RNGOptionsTitleMax.classList.add("max");
		toolAside3RNGOptionsTitleMaxText.innerText = "Max";
		toolAside3RNGOptionsUl.classList.add("scroll");
		toolAside3RNGOptionsExecute.classList.add("execute");
		toolAside3RNGOptionsExecuteButton.innerText = "Generate Random Numbers";
		toolAside3.appendChild(toolAside3RNGOuter);
		toolAside3RNGOuter.appendChild(toolAside3RNG);
		toolAside3RNG.appendChild(toolAside3RNGResult);
		toolAside3RNG.appendChild(toolAside3RNGOptions);
		toolAside3RNGOptions.appendChild(toolAside3RNGOptionsExecute);
		toolAside3RNGOptionsExecute.appendChild(toolAside3RNGOptionsExecuteButton);
		toolAside3RNGOptions.appendChild(toolAside3RNGOptionsIterations);
		toolAside3RNGOptionsIterations.appendChild(toolAside3RNGOptionsIterationsText);
		toolAside3RNGOptionsIterations.appendChild(toolAside3RNGOptionsIterationsInput);
		toolAside3RNGOptions.appendChild(toolAside3RNGOptionsTitle);
		toolAside3RNGOptionsTitle.appendChild(toolAside3RNGOptionsTitleIterations);
		toolAside3RNGOptionsTitleIterations.appendChild(toolAside3RNGOptionsTitleIterationsText);
		toolAside3RNGOptionsTitle.appendChild(toolAside3RNGOptionsTitleMin);
		toolAside3RNGOptionsTitleMin.appendChild(toolAside3RNGOptionsTitleMinText);
		toolAside3RNGOptionsTitle.appendChild(toolAside3RNGOptionsTitleMax);
		toolAside3RNGOptionsTitleMax.appendChild(toolAside3RNGOptionsTitleMaxText);
		toolAside3RNGOptions.appendChild(toolAside3RNGOptionsUl);
	}
	function createType() {


		var typeOuter = document.createElement("div");
		var typeTitle = document.createElement("div");

		var typeContent = document.createElement("div");
		var typeContentTypechartMatrix = document.createElement("div");
		var typeContentTypechartEffectiveness = document.createElement("div");
		var typeContentTypechartIneffectiveness = document.createElement("div");
		var typeContentTypechartImmunity = document.createElement("div");
		var typeSidebar = document.createElement("div");
		var typeSidebarDescription = document.createElement("div");
		var typeSidebarDescriptionSelector = document.createElement("div");
		var typeSidebarDescriptionTitleOuter = document.createElement("div");
		var typeSidebarDescriptionTitleTitle = document.createElement("h1");
		var typeSidebarDescriptionTitleImageOuter = document.createElement("div");
		var typeSidebarDescriptionTitleImage = document.createElement("img");
		var typeSidebarDescriptionAgainstOpposed = document.createElement("div");
		var typeSidebarDescriptionAgainst = document.createElement("div");
		var typeSidebarDescriptionAgainstEffective = document.createElement("div");
		var typeSidebarDescriptionAgainstEffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstEffectiveContain = document.createElement("data");
		var typeSidebarDescriptionAgainstIneffective = document.createElement("div");
		var typeSidebarDescriptionAgainstIneffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstIneffectiveContain = document.createElement("data");
		var typeSidebarDescriptionAgainstImmune = document.createElement("div");
		var typeSidebarDescriptionAgainstImmuneTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstImmuneContain = document.createElement("data");
		var typeSidebarDescriptionAgainstDefault = document.createElement("div");
		var typeSidebarDescriptionAgainstDefaultTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstDefaultContain = document.createElement("data");
		var typeSidebarDescriptionOpposed = document.createElement("div");
		var typeSidebarDescriptionOpposedEffective = document.createElement("div");
		var typeSidebarDescriptionOpposedEffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedEffectiveContain = document.createElement("data");
		var typeSidebarDescriptionOpposedIneffective = document.createElement("div");
		var typeSidebarDescriptionOpposedIneffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedIneffectiveContain = document.createElement("data");
		var typeSidebarDescriptionOpposedImmune = document.createElement("div");
		var typeSidebarDescriptionOpposedImmuneTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedImmuneContain = document.createElement("data");
		var typeSidebarDescriptionOpposedDefault = document.createElement("div");
		var typeSidebarDescriptionOpposedDefaultTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedDefaultContain = document.createElement("data");
		typeOuter.setAttribute("id", "type-outer");
		typeOuter.setAttribute("name", "2");


		typeTitle.setAttribute("name", "Title");

		typeContent.setAttribute("name", "Content");
		typeContentTypechartMatrix.setAttribute("id", "typechart-matrix");
		typeContentTypechartMatrix.setAttribute("name", "0");
		typeContentTypechartMatrix.classList.add("scroll");
		typeContentTypechartEffectiveness.setAttribute("id", "typechart-effective");
		typeContentTypechartEffectiveness.setAttribute("name", "1");
		typeContentTypechartEffectiveness.classList.add("scroll");
		typeContentTypechartIneffectiveness.setAttribute("id", "typechart-ineffective");
		typeContentTypechartIneffectiveness.setAttribute("name", "2");
		typeContentTypechartIneffectiveness.classList.add("scroll");
		typeContentTypechartImmunity.setAttribute("id", "typechart-immunity");
		typeContentTypechartImmunity.setAttribute("name", "3");
		typeContentTypechartImmunity.classList.add("scroll");
		
		typeSidebar.setAttribute("name", "Sidebar");
		typeSidebarDescription.classList.add("type-description");
		typeSidebarDescriptionSelector.classList.add("type-selector");
		typeSidebarDescriptionTitleOuter.classList.add("type-description-title");
		typeSidebarDescriptionTitleTitle;
		typeSidebarDescriptionTitleImageOuter.classList.add("type-symbol-outer");
		typeSidebarDescriptionTitleImage.classList.add("type-symbol");
		typeSidebarDescriptionTitleImage.setAttribute("onerror", "this.style.display='none';");
		typeSidebarDescriptionTitleImage.setAttribute("alt", MEDIAPath_Type_Icon);
		typeSidebarDescriptionAgainstOpposed.classList.add("type-againstopposed");
		typeSidebarDescriptionAgainst.classList.add("type-against");
		typeSidebarDescriptionAgainst.classList.add("scroll");
		typeSidebarDescriptionAgainstEffective.classList.add("type-effective");
		typeSidebarDescriptionAgainstEffectiveTitle.setAttribute("title", "Super Effective when used by a Move with with following types:");
		typeSidebarDescriptionAgainstEffectiveTitle.innerText = "Super Effective";
		typeSidebarDescriptionAgainstEffectiveContain.classList.add("type-effective-content");
		typeSidebarDescriptionAgainstEffectiveContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionAgainstIneffective.classList.add("type-ineffective");
		typeSidebarDescriptionAgainstIneffectiveTitle.setAttribute("title", "Not Very Effective when used by a Move with with following types:");
		typeSidebarDescriptionAgainstIneffectiveTitle.innerText = "Not Very Effective";
		typeSidebarDescriptionAgainstIneffectiveContain.classList.add("type-ineffective-content");
		typeSidebarDescriptionAgainstIneffectiveContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionAgainstImmune.classList.add("type-immune");
		typeSidebarDescriptionAgainstImmuneTitle.setAttribute("title", "No Effect when used by a Move with following types:");
		typeSidebarDescriptionAgainstImmuneTitle.innerText = "No Effect";
		typeSidebarDescriptionAgainstImmuneContain.classList.add("type-immune-content");
		typeSidebarDescriptionAgainstImmuneContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionAgainstDefault.classList.add("type-normal");
		typeSidebarDescriptionAgainstDefaultTitle.setAttribute("title", "Normal Effectiveness when used by a Move with following types:");
		typeSidebarDescriptionAgainstDefaultTitle.innerText = "Normal Effectiveness";
		typeSidebarDescriptionAgainstDefaultContain.classList.add("type-default-content");
		typeSidebarDescriptionAgainstDefaultContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionOpposed.classList.add("type-opposed");
		typeSidebarDescriptionOpposed.classList.add("scroll");
		typeSidebarDescriptionOpposedEffective.classList.add("type-effective");
		typeSidebarDescriptionOpposedEffectiveTitle.setAttribute("title", "Super Effective when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedEffectiveTitle.innerText = "Super Effective";
		typeSidebarDescriptionOpposedEffectiveContain.classList.add("type-effective-content");
		typeSidebarDescriptionOpposedEffectiveContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionOpposedIneffective.classList.add("type-ineffective");
		typeSidebarDescriptionOpposedIneffectiveTitle.setAttribute("title", "Not Very Effective when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedIneffectiveTitle.innerText = "Not Very Effective";
		typeSidebarDescriptionOpposedIneffectiveContain.classList.add("type-ineffective-content");
		typeSidebarDescriptionOpposedIneffectiveContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionOpposedImmune.classList.add("type-immune");
		typeSidebarDescriptionOpposedImmuneTitle.setAttribute("title", "No Effect when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedImmuneTitle.innerText = "No Effect";
		typeSidebarDescriptionOpposedImmuneContain.classList.add("type-immune-content");
		typeSidebarDescriptionOpposedImmuneContain.value = MEDIAPath_Type_Text;
		typeSidebarDescriptionOpposedDefault.classList.add("type-normal");
		typeSidebarDescriptionOpposedDefaultTitle.setAttribute("title", "Normal Effectiveness when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedDefaultTitle.innerText = "Normal Effectiveness";
		typeSidebarDescriptionOpposedDefaultContain.classList.add("type-default-content");
		typeSidebarDescriptionOpposedDefaultContain.value = MEDIAPath_Type_Text;

		toolAside3.appendChild(typeOuter);

		typeOuter.appendChild(typeTitle);

		typeOuter.appendChild(typeSidebar);

		typeOuter.appendChild(typeContent);
		typeContent.appendChild(typeContentTypechartMatrix);
		typeContent.appendChild(typeContentTypechartEffectiveness);
		typeContent.appendChild(typeContentTypechartIneffectiveness);
		typeContent.appendChild(typeContentTypechartImmunity);




		typeSidebar.appendChild(typeSidebarDescription);
		typeSidebarDescription.appendChild(typeSidebarDescriptionTitleOuter);
		typeSidebarDescriptionTitleOuter.appendChild(typeSidebarDescriptionTitleTitle);
		typeSidebarDescriptionTitleOuter.appendChild(typeSidebarDescriptionTitleImageOuter);
		typeSidebarDescriptionTitleImageOuter.appendChild(typeSidebarDescriptionTitleImage);
		typeSidebarDescription.appendChild(typeSidebarDescriptionAgainstOpposed);
		typeSidebarDescriptionAgainstOpposed.appendChild(typeSidebarDescriptionSelector);
		typeSidebarDescriptionAgainstOpposed.appendChild(typeSidebarDescriptionAgainst);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstEffective);
		typeSidebarDescriptionAgainstEffective.appendChild(typeSidebarDescriptionAgainstEffectiveTitle);
		typeSidebarDescriptionAgainstEffective.appendChild(typeSidebarDescriptionAgainstEffectiveContain);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstIneffective);
		typeSidebarDescriptionAgainstIneffective.appendChild(typeSidebarDescriptionAgainstIneffectiveTitle);
		typeSidebarDescriptionAgainstIneffective.appendChild(typeSidebarDescriptionAgainstIneffectiveContain);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstImmune);
		typeSidebarDescriptionAgainstImmune.appendChild(typeSidebarDescriptionAgainstImmuneTitle);
		typeSidebarDescriptionAgainstImmune.appendChild(typeSidebarDescriptionAgainstImmuneContain);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstDefault);
		typeSidebarDescriptionAgainstDefault.appendChild(typeSidebarDescriptionAgainstDefaultTitle);
		typeSidebarDescriptionAgainstDefault.appendChild(typeSidebarDescriptionAgainstDefaultContain);
		typeSidebarDescriptionAgainstOpposed.appendChild(typeSidebarDescriptionOpposed);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedEffective);
		typeSidebarDescriptionOpposedEffective.appendChild(typeSidebarDescriptionOpposedEffectiveTitle);
		typeSidebarDescriptionOpposedEffective.appendChild(typeSidebarDescriptionOpposedEffectiveContain);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedIneffective);
		typeSidebarDescriptionOpposedIneffective.appendChild(typeSidebarDescriptionOpposedIneffectiveTitle);
		typeSidebarDescriptionOpposedIneffective.appendChild(typeSidebarDescriptionOpposedIneffectiveContain);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedImmune);
		typeSidebarDescriptionOpposedImmune.appendChild(typeSidebarDescriptionOpposedImmuneTitle);
		typeSidebarDescriptionOpposedImmune.appendChild(typeSidebarDescriptionOpposedImmuneContain);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedDefault);
		typeSidebarDescriptionOpposedDefault.appendChild(typeSidebarDescriptionOpposedDefaultTitle);
		typeSidebarDescriptionOpposedDefault.appendChild(typeSidebarDescriptionOpposedDefaultContain);
	
		for(var i = 0; i < 2; i++) {
			var typeSidebarDescriptionSelectorInput = document.createElement("input");
			var typeSidebarDescriptionSelectorLabel = document.createElement("label");
			typeSidebarDescriptionSelectorInput.setAttribute("type", "radio");
			typeSidebarDescriptionSelectorInput.setAttribute("value", i);
			typeSidebarDescriptionSelectorInput.setAttribute("name", "type-selector");
			typeSidebarDescriptionSelectorInput.setAttribute("id", "type-selector" + i);
			typeSidebarDescriptionSelectorInput.setAttribute("autocomplete", "off");
			typeSidebarDescriptionSelectorLabel.setAttribute("for", "type-selector" + i);
			if(i == 0) {
				typeSidebarDescriptionSelectorInput.setAttribute("checked", "");
				typeSidebarDescriptionSelectorInput.setAttribute("onclick", "this.parentElement.nextElementSibling.style.display='block';this.parentElement.nextElementSibling.nextElementSibling.style.display='none'");
				typeSidebarDescriptionSelectorLabel.innerText = "Defending";
			}
			if(i == 1) {
				typeSidebarDescriptionSelectorInput.setAttribute("onclick", "this.parentElement.nextElementSibling.style.display='none';this.parentElement.nextElementSibling.nextElementSibling.style.display='block'");
				typeSidebarDescriptionSelectorLabel.innerText = "Attacking";
			}
			typeSidebarDescriptionSelector.appendChild(typeSidebarDescriptionSelectorInput);
			typeSidebarDescriptionSelector.appendChild(typeSidebarDescriptionSelectorLabel);
		}
		var typeContentTypeChartMatrixTable = document.createElement("table");
		var typeContentTypeChartMatrixTableHead = document.createElement("thead");
		var typeContentTypeChartMatrixTableBody = document.createElement("tbody");
		typeContentTypeChartMatrixTable.setAttribute("id", "typechart-matrix-table");
		typeContentTypeChartMatrixTable.setAttribute("name", MEDIAPath_Type_Icon);
		typeContentTypeChartMatrixTable.classList.add("typechart");
		var typeContentTypeChartMatrixTableTR = document.createElement("tr");
		for(var i = 0; i < finaldataTypeChart.length + 1; i++) {
			var typeContentTypeChartMatrixTableCol = document.createElement("colgroup");
			typeContentTypeChartMatrixTable.appendChild(typeContentTypeChartMatrixTableCol);
		}
		typeContentTypeChartMatrixTable.appendChild(typeContentTypeChartMatrixTableHead);
		typeContentTypeChartMatrixTable.appendChild(typeContentTypeChartMatrixTableBody);
		typeContentTypeChartMatrixTableHead.appendChild(typeContentTypeChartMatrixTableTR);
		var typeContentTypeChartMatrixTableTH0 = document.createElement("th");
		typeContentTypeChartMatrixTableTH0.setAttribute("title", "");
		typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTH0);
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartMatrixTableTH = document.createElement("th");
			var typeContentTypeChartMatrixTableTHIMG = document.createElement("img");
			typeContentTypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartMatrixTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartMatrixTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartMatrixTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTH);
			typeContentTypeChartMatrixTableTH.appendChild(typeContentTypeChartMatrixTableTHIMG);
		}
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartMatrixTableTR = document.createElement("tr");
			var typeContentTypeChartMatrixTableTH = document.createElement("th");
			var typeContentTypeChartMatrixTableTHIMG = document.createElement("img");
			typeContentTypeChartMatrixTableBody.appendChild(typeContentTypeChartMatrixTableTR);
			typeContentTypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartMatrixTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartMatrixTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartMatrixTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTH);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				var typeContentTypeChartMatrixTableTD = document.createElement("td");
				typeContentTypeChartMatrixTableTD.innerText = finaldataTypeChart[i][finaldataTypeChartTitle[q]];
				typeContentTypeChartMatrixTableTD.setAttribute("title", finaldataTypeChart[i][finaldataTypeChartTitle[q]]);
				typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTD);
			}
			typeContentTypeChartMatrixTableTH.appendChild(typeContentTypeChartMatrixTableTHIMG);
		}
		typeContentTypechartMatrix.appendChild(typeContentTypeChartMatrixTable);
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
		var typeContentTypeChartEffectivenessTable = document.createElement("table");
		typeContentTypeChartEffectivenessTable.setAttribute("id", "typechart-effectiveness-table");
		typeContentTypeChartEffectivenessTable.setAttribute("name", MEDIAPath_Type_Icon);
		typeContentTypeChartEffectivenessTable.classList.add("typechart");
		var typeContentTypeChartEffectivenessTableTR = document.createElement("tr");
		typeContentTypeChartEffectivenessTable.appendChild(typeContentTypeChartEffectivenessTableTR);
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
			var typeContentTypeChartEffectivenessTableTR = document.createElement("tr");
			var typeContentTypeChartEffectivenessTableTH = document.createElement("th");
			var typeContentTypeChartEffectivenessTableTHIMG = document.createElement("img");
			typeContentTypeChartEffectivenessTable.appendChild(typeContentTypeChartEffectivenessTableTR);
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
				var typeContentTypeChartEffectivenessTableTDLeft = document.createElement("td");
				typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDLeft);
			}
			typeContentTypeChartEffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartEffectivenessTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartEffectivenessTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartEffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartEffectivenessTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
					var typeContentTypeChartEffectivenessTableTHLeft = document.createElement("th");
					var typeContentTypeChartEffectivenessTableTHLeftIMG = document.createElement("img");
					typeContentTypeChartEffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartEffectivenessTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartEffectivenessTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartEffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartEffectivenessTableTHLeftIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTHLeft);
					typeContentTypeChartEffectivenessTableTHLeft.appendChild(typeContentTypeChartEffectivenessTableTHLeftIMG);
				}
			}
			var typeContentTypeChartEffectivenessTableTDLeftArrow = document.createElement("td");
			if(tempEffectivenessArrLeftCount[i] != 0) {
				typeContentTypeChartEffectivenessTableTDLeftArrow.innerText = "→";
			}
			typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDLeftArrow);
			typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTH);
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
			var typeContentTypeChartEffectivenessTableTDRightArrow = document.createElement("td");
			if(tempEffectivenessArrRightCount[i] != 0) {
				typeContentTypeChartEffectivenessTableTDRightArrow.innerText = "→";
			}
			typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDRightArrow);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
					var typeContentTypeChartEffectivenessTableTHRight = document.createElement("th");
					var typeContentTypeChartEffectivenessTableTHRightIMG = document.createElement("img");
					typeContentTypeChartEffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartEffectivenessTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartEffectivenessTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartEffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartEffectivenessTableTHRightIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTHRight);
					typeContentTypeChartEffectivenessTableTHRight.appendChild(typeContentTypeChartEffectivenessTableTHRightIMG);
				}
			}
			typeContentTypeChartEffectivenessTableTH.appendChild(typeContentTypeChartEffectivenessTableTHIMG);
			for(var q = 0; q < Math.max.apply(Math, tempEffectivenessArrRightMaxResult) - tempEffectivenessArrRightCount[i]; q++) {
				var typeContentTypeChartEffectivenessTableTDRight = document.createElement("td");
				typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDRight);
			}
		}
		typeContentTypechartEffectiveness.appendChild(typeContentTypeChartEffectivenessTable);
		var typeContentTypeChartIneffectivenessTable = document.createElement("table");
		typeContentTypeChartIneffectivenessTable.setAttribute("id", "typechart-ineffectiveness-table");
		typeContentTypeChartIneffectivenessTable.setAttribute("name", MEDIAPath_Type_Icon);
		typeContentTypeChartIneffectivenessTable.classList.add("typechart");
		var typeContentTypeChartIneffectivenessTableTR = document.createElement("tr");
		typeContentTypeChartIneffectivenessTable.appendChild(typeContentTypeChartIneffectivenessTableTR);
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
			var typeContentTypeChartIneffectivenessTableTR = document.createElement("tr");
			var typeContentTypeChartIneffectivenessTableTH = document.createElement("th");
			var typeContentTypeChartIneffectivenessTableTHIMG = document.createElement("img");
			typeContentTypeChartIneffectivenessTable.appendChild(typeContentTypeChartIneffectivenessTableTR);
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
				var typeContentTypeChartIneffectivenessTableTDLeft = document.createElement("td");
				typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDLeft);
			}
			typeContentTypeChartIneffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartIneffectivenessTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartIneffectivenessTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartIneffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartIneffectivenessTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
					var typeContentTypeChartIneffectivenessTableTHLeft = document.createElement("th");
					var typeContentTypeChartIneffectivenessTableTHLeftIMG = document.createElement("img");
					typeContentTypeChartIneffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartIneffectivenessTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartIneffectivenessTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartIneffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartIneffectivenessTableTHLeftIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTHLeft);
					typeContentTypeChartIneffectivenessTableTHLeft.appendChild(typeContentTypeChartIneffectivenessTableTHLeftIMG);
				}
			}
			var typeContentTypeChartIneffectivenessTableTDLeftArrow = document.createElement("td");
			if(tempIneffectivenessArrLeftCount[i] != 0) {
				typeContentTypeChartIneffectivenessTableTDLeftArrow.innerText = "→";
			}
			typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDLeftArrow);
			typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTH);
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
			var typeContentTypeChartIneffectivenessTableTDRightArrow = document.createElement("td");
			if(tempIneffectivenessArrRightCount[i] != 0) {
				typeContentTypeChartIneffectivenessTableTDRightArrow.innerText = "→";
			}
			typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDRightArrow);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
					var typeContentTypeChartIneffectivenessTableTHRight = document.createElement("th");
					var typeContentTypeChartIneffectivenessTableTHRightIMG = document.createElement("img");
					typeContentTypeChartIneffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartIneffectivenessTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartIneffectivenessTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartIneffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartIneffectivenessTableTHRightIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTHRight);
					typeContentTypeChartIneffectivenessTableTHRight.appendChild(typeContentTypeChartIneffectivenessTableTHRightIMG);
				}
			}
			typeContentTypeChartIneffectivenessTableTH.appendChild(typeContentTypeChartIneffectivenessTableTHIMG);
			for(var q = 0; q < Math.max.apply(Math, tempIneffectivenessArrRightMaxResult) - tempIneffectivenessArrRightCount[i]; q++) {
				var typeContentTypeChartIneffectivenessTableTDRight = document.createElement("td");
				typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDRight);
			}
		}
		typeContentTypechartIneffectiveness.appendChild(typeContentTypeChartIneffectivenessTable);
		var typeContentTypeChartImmunityTable = document.createElement("table");
		typeContentTypeChartImmunityTable.setAttribute("id", "typechart-immunity-table");
		typeContentTypeChartImmunityTable.setAttribute("name", MEDIAPath_Type_Icon);
		typeContentTypeChartImmunityTable.classList.add("typechart");
		var typeContentTypeChartImmunityTableTR = document.createElement("tr");
		typeContentTypeChartImmunityTable.appendChild(typeContentTypeChartImmunityTableTR);
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
			var typeContentTypeChartImmunityTableTR = document.createElement("tr");
			var typeContentTypeChartImmunityTableTH = document.createElement("th");
			var typeContentTypeChartImmunityTableTHIMG = document.createElement("img");
			typeContentTypeChartImmunityTable.appendChild(typeContentTypeChartImmunityTableTR);
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
				var typeContentTypeChartImmunityTableTDLeft = document.createElement("td");
				typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDLeft);
			}
			typeContentTypeChartImmunityTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartImmunityTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartImmunityTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartImmunityTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartImmunityTableTHIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
					var typeContentTypeChartImmunityTableTHLeft = document.createElement("th");
					var typeContentTypeChartImmunityTableTHLeftIMG = document.createElement("img");
					typeContentTypeChartImmunityTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartImmunityTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartImmunityTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartImmunityTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartImmunityTableTHLeftIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTHLeft);
					typeContentTypeChartImmunityTableTHLeft.appendChild(typeContentTypeChartImmunityTableTHLeftIMG);
				}
			}
			var typeContentTypeChartImmunityTableTDLeftArrow = document.createElement("td");
			if(tempImmunityArrLeftCount[i] != 0) {
				typeContentTypeChartImmunityTableTDLeftArrow.innerText = "→";
			}
			typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDLeftArrow);
			typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTH);
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
			var typeContentTypeChartImmunityTableTDRightArrow = document.createElement("td");
			if(tempImmunityArrRightCount[i] != 0) {
				typeContentTypeChartImmunityTableTDRightArrow.innerText = "→";
			}
			typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDRightArrow);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
					var typeContentTypeChartImmunityTableTHRight = document.createElement("th");
					var typeContentTypeChartImmunityTableTHRightIMG = document.createElement("img");
					typeContentTypeChartImmunityTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartImmunityTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartImmunityTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartImmunityTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartImmunityTableTHRightIMG.setAttribute("onerror", "this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTHRight);
					typeContentTypeChartImmunityTableTHRight.appendChild(typeContentTypeChartImmunityTableTHRightIMG);
				}
			}
			typeContentTypeChartImmunityTableTH.appendChild(typeContentTypeChartImmunityTableTHIMG);
			for(var q = 0; q < Math.max.apply(Math, tempImmunityArrRightMaxResult) - tempImmunityArrRightCount[i]; q++) {
				var typeContentTypeChartImmunityTableTDRight = document.createElement("td");
				typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDRight);
			}
		}
		typeContentTypechartImmunity.appendChild(typeContentTypeChartImmunityTable);
		
		var typeOptionsTitle = ["Matrix", "Effectiveness", "Ineffectiveness", "Immunity", ];
		for(var q = 0; q < typeOptionsTitle.length; q++) {
			var typeTitleOptionsInput = document.createElement("input");
			var typeTitleOptionsLabel = document.createElement("label");
			typeTitleOptionsInput.setAttribute("type", "radio");
			typeTitleOptionsInput.setAttribute("name", "type-options");
			typeTitleOptionsInput.setAttribute("id", "type-options-" + q);
			typeTitleOptionsInput.setAttribute("autocomplete", "off");
			typeTitleOptionsInput.value = q;
			typeTitleOptionsLabel.setAttribute("for", "type-options-" + q);
			typeTitleOptionsLabel.innerText = typeOptionsTitle[q];
			typeTitle.appendChild(typeTitleOptionsInput);
			typeTitle.appendChild(typeTitleOptionsLabel);
			typeTitleOptionsInput.addEventListener("click", typeOptionsSelector);
	
			function typeOptionsSelector() {
				var typechartContents = document.querySelectorAll("#type-outer > div[name='Content'] div[name]");
				var typechartContent = document.querySelectorAll("#type-outer > div[name='Content'] div[name='" + this.value + "']");
				for(var q = 0; q < typechartContents.length; q++) {
					typechartContents[q].style.display = "none";
				}
				for(var q = 0; q < typechartContent.length; q++) {
					typechartContent[q].style.display = "flex";
				}
			}
			if(q == 0) {
				typeTitleOptionsLabel.click();
			}
		}
		
	};

	createTimer();
	createRNG();
	createType();


	var toolOptionsTitle = ["Timers","Random Number Generator","Type Advantage"];

	// Counter, Damage Calculator, Catch Rate Calculator, Shiny Odds Calculator, IV Calculator, Pokémon Finder, Item Checklist

	for(var q = 0; q < toolOptionsTitle.length; q++) {
		var toolAside1OptionsInput = document.createElement("input");
		var toolAside1OptionsLabel = document.createElement("label");
		toolAside1OptionsInput.setAttribute("type", "radio");
		toolAside1OptionsInput.setAttribute("name", "tool-options");
		toolAside1OptionsInput.setAttribute("id", "tool-options-" + q);
		toolAside1OptionsInput.setAttribute("autocomplete", "off");
		toolAside1OptionsInput.value = q;
		toolAside1OptionsLabel.setAttribute("for", "tool-options-" + q);
		toolAside1OptionsLabel.setAttribute("name", "large");
		toolAside1OptionsLabel.innerHTML = toolOptionsTitle[q];
		toolAside1Options.appendChild(toolAside1OptionsInput);
		toolAside1Options.appendChild(toolAside1OptionsLabel);
		toolAside1OptionsInput.addEventListener("click", toolOptionsSelector);

		function toolOptionsSelector() {
			var i = this.value;
			toolAside2Title.innerText = toolOptionsTitle[i];
			var toolContents = document.querySelectorAll("#tool-aside3 > div[name]");
			var toolContent = document.querySelectorAll("#tool-aside3 > div[name='"+i+"']");
			for(var q = 0; q < toolContents.length; q++) {
				toolContents[q].style.display = "none";
			}
			for(var q = 0; q < toolContent.length; q++) {
				toolContent[q].style.display = "block";
			}
		}
		if(q == 0) {
			toolAside1OptionsLabel.click();
		}
	}


};

function countdown() {
	/*
	    polyfills for IE8
	  */
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(countdownCallback) {
			for(var i = 0; i < this.length; i++) {
				countdownCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(countdownCallback) {
			var countdownItems = [];
			for(var i = 0; i < this.length; i++) {
				countdownItems.push(countdownCallback(this[i]));
			}
			return countdownItems;
		};
	}
	var countdownSecondInMilliseconds = 1000;
	var countdownMinuteInMilliseconds = 60 * countdownSecondInMilliseconds;
	var countdownHourInMilliseconds = 60 * countdownMinuteInMilliseconds;
	var countdownFloor = Math.floor;
	var countdownExtractMilliseconds = function(countdownTimeInMilliseconds) {
		return countdownTimeInMilliseconds % 1000;
	};
	var countdownExtractSeconds = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownSecondInMilliseconds);
	};
	var countdownExtractMinutes = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownMinuteInMilliseconds);
	};
	var countdownExtractHours = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownHourInMilliseconds);
	};
	var countdownPad = function(countdownNumber) {
		if(countdownNumber < 10) {
			return "0" + countdownNumber;
		} else {
			return countdownNumber;
		}
	};
	var countdownExtractTime = function(countdownTimeInMilliseconds) {
		var countdownMilliseconds = countdownExtractHours(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownHours * countdownHourInMilliseconds;
		var countdownMilliseconds = countdownExtractMinutes(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownMinutes * countdownMinuteInMilliseconds;
		var countdownMilliseconds = countdownExtractSeconds(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownSeconds * countdownSecondInMilliseconds;
		var countdownMilliseconds = countdownTimeInMilliseconds;
		return {
			countdownHours: countdownHours,
			countdownMinutes: countdownMinutes,
			countdownSeconds: countdownSeconds,
			countdownMilliseconds: countdownMilliseconds,
		};
	};
	var countdownLap = function(countdownNetTime, countdownPreviousLap) {
		this.countdownPreviousLap = countdownPreviousLap;
		this.countdownNetTime = countdownNetTime;
	};
	countdownLap.prototype = {
		countdownMilitaryTime: function(countdownTimeInMilliseconds) {
			var countdownTimeSeparator = ":";
			var countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownTime.countdownMilliseconds = countdownTime.countdownMilliseconds / 10;
			return ["countdownHours", "countdownMinutes", "countdownSeconds", "countdownMilliseconds", ].map(function(countdownProperty) {
				return countdownPad(countdownTime[countdownProperty]);
			}).join(countdownTimeSeparator);
		},
		countdownSplitString: function() {
			if(this.countdownPreviousLap != null) {
				var countdownTimeDifference = this.countdownNetTime - this.countdownPreviousLap.countdownNetTime;
				return this.countdownMilitaryTime(countdownTimeDifference);
			} else {
				return this.countdownMilitaryTime(this.countdownNetTime);
			}
		},
	};
	var CountDown = (window.CountDown = function(countdownOptions) {
		if(countdownOptions == null) {
			countdownOptions = {};
		}
		var countdown_this = this;
		var countdownCallbackProperties = ["countdownCallback", "countdownCallbackTarget", "countdownLapCallback", "countdownLapCallbackTarget", ];
		var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
		var countdownTimerSetHours = document.querySelector(".countdown-hours");
		var countdownTimerSetMinutes = document.querySelector(".countdown-minutes");
		var countdownTimerSetSeconds = document.querySelector(".countdown-seconds");
		var countdownTimerSetMilliseconds = document.querySelector(".countdown-milliseconds");
		var countdownInput = document.querySelectorAll("#countdown-set input");
		for(var i = 0; i < countdownInput.length; i++) {
			countdownInput[i].addEventListener("click", countdownSetTime);
			countdownInput[i].addEventListener("click", countdownSelect);
			countdownInput[i].addEventListener("focus", countdownSetTime);
			countdownInput[i].addEventListener("keydown", countdownSetTime);
			countdownInput[i].addEventListener("change", countdownSetTime);
			countdownInput[i].addEventListener("change", countdownFormatNumber);
		}
		document.querySelector("#countdown-start-stop").addEventListener("click", countdownHideShow);
		document.querySelector("#countdown-reset").addEventListener("click", countdownReset);

		function countdownReset() {
			countdownTimerSetHours.value = "";
			countdownTimerSetMinutes.value = "";
			countdownTimerSetSeconds.value = "";
			countdownTimerSetMilliseconds.value = "";
			var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
			countdownLaps = [];
			countdownLapDidChange(null, true);
			if(countdown.countdownRunning()) {
				document.getElementById("countdown-time").style.display = "none";
				document.querySelector("#countdown-set > span").style.display = "flex";
				replaceClass(countdownStartStopButton, "countdown-stop", "countdown-start");
				countdownStartStopButton.innerHTML = "⏵︎";
				countdownStartStopButton.setAttribute("title", "Start");
				countdown.reset();
			}
		}

		function countdownHideShow() {
			countdownTimerSetHours.value = [countdownPad(countdownHours)];
			countdownTimerSetMinutes.value = [countdownPad(countdownMinutes)];
			countdownTimerSetSeconds.value = [countdownPad(countdownSeconds)];
			countdownTimerSetMilliseconds.value = [
				countdownPad(countdownMilliseconds / 10),
			];
			var a = parseInt(countdownTimerSetHours.value);
			var b = parseInt(countdownTimerSetMinutes.value);
			var c = parseInt(countdownTimerSetSeconds.value);
			var d = parseInt(countdownTimerSetMilliseconds.value);
			a = a || 0;
			b = b || 0;
			c = c || 0;
			d = d || 0;
			if(a + b + c + d > 0) {
				if(!countdown.countdownRunning()) {
					document.getElementById("countdown-time").style.display = "flex";
					document.querySelector("#countdown-set > span").style.display = "none";
				} else {
					document.getElementById("countdown-time").style.display = "none";
					document.querySelector("#countdown-set > span").style.display = "flex";
				}
			} else {
				document.querySelector("#countdown-set span").animate(
					[{
						transform: "translateX(0px)"
					}, {
						transform: "translateX(2px)"
					}, {
						transform: "translateX(0px)"
					}, {
						transform: "translateX(-2px)"
					}, {
						transform: "translateX(0px)"
					}, ], {
						duration: 200,
						easing: "linear",
						iterations: 1,
					});
			}
		}

		function countdownFormatNumber() {
			if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
				this.value = "0" + this.value;
			}
		}

		function countdownSelect() {
			this.select();
		}

		function countdownSetTime() {
			if(this.value == "" || this.value == "0") {
				this.value = "00";
			}
			if(!countdown.countdownRunning()) {
				if(this.classList.contains("countdown-hours")) {
					var countdownNetTime = (countdownHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("countdown-minutes")) {
					var countdownNetTime = (countdownMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("countdown-seconds")) {
					var countdownNetTime = (countdownSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("countdown-milliseconds")) {
					var countdownNetTime = (countdownMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}


			var hours = document.querySelector(".countdown-hours").value;
			var minutes = document.querySelector(".countdown-minutes").value;
			var second = document.querySelector(".countdown-seconds").value;
			var millisecond = document.querySelector(".countdown-milliseconds").value;

			if (hours == "") {
				hours = "00";
			}
			if (minutes == "") {
				minutes = "00";
			}
			if (second == "") {
				second = "00";
			}
			if (millisecond == "") {
				millisecond = "00";
			}
			document.querySelector("#countdown-time").innerHTML = hours+":"+minutes+":"+second+":"+millisecond;
		}
		var countdownRunning = false;
		var countdownLaps = [];
		countdownCallbackProperties.forEach(function(countdownProperty) {
			if(countdownOptions[countdownProperty] != null) {
				countdown_this[countdownProperty] = countdownOptions[countdownProperty];
			}
		});
		this.countdownRunning = function() {
			return countdownRunning;
		};
		this.countdownHours = function() {
			return countdownHours;
		};
		this.countdownMinutes = function() {
			return countdownMinutes;
		};
		this.countdownSeconds = function() {
			return countdownSeconds;
		};
		this.countdownMilliseconds = function() {
			return countdownMilliseconds;
		};
		this.countdownNetTime = function() {
			return countdownNetTime;
		};
		this.countdownMilitaryTime = function() {
			return [
				countdownPad(countdownHours),
				countdownPad(countdownMinutes),
				countdownPad(countdownSeconds),
				countdownPad(countdownMilliseconds / 10),
			].join(":");
		};
		this.countdownCallbackArgument = this.countdownMilitaryTime;
		var countdownTimeDidChange = function() {
			var countdownCallback = countdown_this.countdownCallback;
			if(countdownCallback != null) {
				var countdownCallbackTarget = countdown_this.countdownCallbackTarget || window;
				if(typeof countdownCallback === "string") {
					countdownCallback = countdownCallbackTarget[countdownCallback];
				}
				if(typeof countdownCallback === "function") {
					countdownCallback.call(countdownCallbackTarget, countdown_this.countdownCallbackArgument.call(countdown_this));
				}
			}
		};
		var countdownLapDidChange = function(countdownLap, countdownIsReset) {
			if(countdown_this.countdownLapCallback != null) {
				var countdownLapCallbackTarget = countdown_this.countdownLapCallbackTarget || window;
				var countdownLapCallback = countdown_this.countdownLapCallback;
				if(typeof countdownLapCallback === "string") {
					countdownLapCallback = countdownLapCallbackTarget[countdownLapCallback];
				}
				if(typeof countdownLapCallback === "function") {
					countdownLapCallback.call(countdownLapCallbackTarget, countdownLap && countdownLap.countdownSplitString(), countdownIsReset);
				}
			}
		};
		var countdownInitializeTimer = function(countdownTimeInMilliseconds) {
			var coutdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownHours = coutdownTime.countdownHours;
			countdownMinutes = coutdownTime.countdownMinutes;
			countdownSeconds = coutdownTime.countdownSeconds;
			countdownMilliseconds = coutdownTime.countdownMilliseconds;
			countdownNetTime = countdownTimeInMilliseconds;
			countdownTimeDidChange();
			return countdown_this;
		};
		var countdownIncrementByTenMilliseconds = function() {
			if(countdownMilliseconds === 0) {
				countdownMilliseconds = 990;
				if(countdownSeconds === 0) {
					countdownSeconds = 59;
					if(countdownMinutes === 0) {
						countdownMinutes = 59;
						countdownHours -= 1;
					} else {
						countdownMinutes -= 1;
					}
				} else {
					countdownSeconds -= 1;
				}
			} else {
				countdownMilliseconds -= 10;
			}
			if(countdownHours + countdownMinutes + countdownSeconds + countdownMilliseconds <= 0) {
				countdown.stop();
				var countdownCompletedAudio = new Audio("./media/Sounds/FinalDex/Complete.wav");
				countdownCompletedAudio.play();
				document.getElementById("countdown-time").style.display = "none";
				document.querySelector("#countdown-set > span").style.display = "flex";
				var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
				document.querySelector(".countdown-hours").value = "";
				document.querySelector(".countdown-minutes").value = "";
				document.querySelector(".countdown-seconds").value = "";
				document.querySelector(".countdown-milliseconds").value = "";
				countdownTimerSetHours.value = "";
				countdownTimerSetMinutes.value = "";
				countdownTimerSetSeconds.value = "";
				countdownTimerSetMilliseconds.value = "";
				replaceClass(countdownStartStopButton, "countdown-stop", "countdown-start");
				countdownStartStopButton.innerHTML = "⏵︎";
				countdownStartStopButton.setAttribute("title", "Start");
			}
			countdownNetTime -= 10;
			countdownTimeDidChange();
			return countdown_this;
		};
		/*
		    Kick starts the countdown
		  */
		this.start = function() {
			countdownRunning = true;
			this.interval = setInterval(function() {
				countdownIncrementByTenMilliseconds();
			}, 10);
		};
		/*
		    Halts/Pauses the countdown
		  */
		this.stop = function() {
			if(this.interval != null) {
				clearInterval(this.interval);
			}
			countdownRunning = false;
		};
		/*
		    Captures a lap
		  */
		this.countdownAddLap = function() {
			var countdownPreviousLap = countdownLaps[countdownLaps.length - 1];
			var countdownCurrentLap = new countdownLap(countdownNetTime);
			countdownLaps.push(countdownCurrentLap);
			countdownLapDidChange(countdownCurrentLap, false);
		};
		/*
		    Resets all laps, invokes lapDidChange
		  */
		this.countdownResetLaps = function() {
			countdownLaps = [];
			countdownLapDidChange(null, true);
		};
		/*
		    resets the countdown
		  */
		this.reset = function() {
			this.stop();
			this.countdownResetLaps();
			countdownInitializeTimer(0);
		};
		/* 
		    Initializing countdownNetTime if provided via options
		  */
		if(countdownOptions.countdownNetTime != null) {
			countdownNetTime = countdownOptions.countdownNetTime;
			countdownInitializeTimer(countdownNetTime);
		}
	});
	var count = document.getElementById("countdown-time");
	var countdownLapContainer = document.getElementById("countdown-list");
	var countdownLapCount = 0;
	window.countdownUpdateCount = function(countdownMilitaryTime) {
		count.innerHTML = countdownMilitaryTime;
	};
	window.countdownUpdateLap = function(countdownLapSplitString, countdownIsReset) {
		if(countdownIsReset) {
			document.querySelector("#countdown-time").innerHTML = "";
			countdownLapContainer.innerHTML = "";
			countdownLapCount = 0;
		} else {
			var countdownli = document.createElement("li");
			countdownLapCount += 1;
			countdownli.innerHTML = "<span>#" + countdownLapCount + "</span>" + count.innerHTML;
			countdownLapContainer.appendChild(countdownli);
		}
	};
	var replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	var countdown = new CountDown({
		countdownCallback: "countdownUpdateCount",
		countdownLapCallback: "countdownUpdateLap",
	});
	var countdownStartStopButton = document.getElementById("countdown-start-stop");
	var countdownResetButton = document.querySelector("#countdown-reset");
	var countdownLapsButton = document.querySelector("#countdown-laps");
	var countdownTimerSetHours = document.querySelector(".countdown-hours");
	var countdownTimerSetMinutes = document.querySelector(".countdown-minutes");
	var countdownTimerSetSeconds = document.querySelector(".countdown-seconds");
	var countdownTimerSetMilliseconds = document.querySelector(".countdown-milliseconds");
	var countdownStartStopButtonEvent = function() {
		var a = parseInt(countdownTimerSetHours.value);
		var b = parseInt(countdownTimerSetMinutes.value);
		var c = parseInt(countdownTimerSetSeconds.value);
		var d = parseInt(countdownTimerSetMilliseconds.value);
		a = a || 0;
		b = b || 0;
		c = c || 0;
		d = d || 0;
		if(!countdown.countdownRunning() && a + b + c + d > 0) {
			replaceClass(countdownStartStopButton, "countdown-start", "countdown-stop");
			countdownStartStopButton.innerHTML = "⏸︎";
			countdownStartStopButton.setAttribute("title", "Pause");
			countdown.start();
		} else if(a + b + c + d > 0) {
			replaceClass(countdownStartStopButton, "countdown-stop", "countdown-start");
			countdownStartStopButton.innerHTML = "⏵︎";
			countdownStartStopButton.setAttribute("title", "Start");
			countdown.stop();
		}
	};
	var countdownResetButtonEvent = function() {
		var watch = document.querySelector("#countdown-time");
		if(!countdown.countdownRunning()) {} else {
			watch.innerHTML = "";
			countdown.reset();
		}
	};
	var countdownLapsButtonEvent = function() {
		var watch = document.querySelector("#countdown-time");
		if (watch.innerHTML != "00:00:00:00" && watch.innerHTML != "") {
			countdown.countdownAddLap();
		}
	};

	function countdownLapsScroll() {
		document.querySelector("#countdown-list").scrollTo(0, document.querySelector("#countdown-list").scrollHeight);
	}
	countdownStartStopButton.addEventListener("click", countdownStartStopButtonEvent);
	countdownResetButton.addEventListener("click", countdownResetButtonEvent);
	countdownLapsButton.addEventListener("click", countdownLapsButtonEvent);
	countdownLapsButton.addEventListener("click", countdownLapsScroll);
}

function stopwatch() {
	/*
	    polyfills for IE8
	  */
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(stopwatchCallback) {
			for(var i = 0; i < this.length; i++) {
				stopwatchCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(stopwatchCallback) {
			var stopwatchItems = [];
			for(var i = 0; i < this.length; i++) {
				stopwatchItems.push(stopwatchCallback(this[i]));
			}
			return stopwatchItems;
		};
	}
	var stopwatchSecondInMilliseconds = 1000;
	var stopwatchMinuteInMilliseconds = 60 * stopwatchSecondInMilliseconds;
	var stopwatchHourInMilliseconds = 60 * stopwatchMinuteInMilliseconds;
	var stopwatchFloor = Math.floor;
	var stopwatchExtractMilliseconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchTimeInMilliseconds % 1000;
	};
	var stopwatchExtractSeconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchSecondInMilliseconds);
	};
	var stopwatchExtractMinutes = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchMinuteInMilliseconds);
	};
	var stopwatchExtractHours = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchHourInMilliseconds);
	};
	var stopwatchPad = function(stopwatchNumber) {
		if(stopwatchNumber < 10) {
			return "0" + stopwatchNumber;
		} else {
			return stopwatchNumber;
		}
	};
	var stopwatchExtractTime = function(stopwatchTimeInMilliseconds) {
		var stopwatchMilliseconds = stopwatchExtractHours(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchHours * stopwatchHourInMilliseconds;
		var stopwatchMilliseconds = stopwatchExtractMinutes(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchMinutes * stopwatchMinuteInMilliseconds;
		var stopwatchMilliseconds = stopwatchExtractSeconds(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchSeconds * stopwatchSecondInMilliseconds;
		var stopwatchMilliseconds = stopwatchTimeInMilliseconds;
		return {
			stopwatchHours: stopwatchHours,
			stopwatchMinutes: stopwatchMinutes,
			stopwatchSeconds: stopwatchSeconds,
			stopwatchMilliseconds: stopwatchMilliseconds,
		};
	};
	var stopwatchLap = function(stopwatchNetTime, stopwatchPreviousLap) {
		this.stopwatchPreviousLap = stopwatchPreviousLap;
		this.stopwatchNetTime = stopwatchNetTime;
	};
	stopwatchLap.prototype = {
		stopwatchMilitaryTime: function(stopwatchTimeInMilliseconds) {
			var stopwatchTimeSeparator = ":";
			var stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchTime.stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds / 10;
			return ["stopwatchHours", "stopwatchMinutes", "stopwatchSeconds", "stopwatchMilliseconds", ].map(function(stopwatchProperty) {
				return stopwatchPad(stopwatchTime[stopwatchProperty]);
			}).join(stopwatchTimeSeparator);
		},
		stopwatchSplitString: function() {
			if(this.stopwatchPreviousLap != null) {
				var stopwatchTimeDifference = this.stopwatchNetTime - this.stopwatchPreviousLap.stopwatchNetTime;
				return this.stopwatchMilitaryTime(stopwatchTimeDifference);
			} else {
				return this.stopwatchMilitaryTime(this.stopwatchNetTime);
			}
		},
	};
	var StopWatch = (window.StopWatch = function(stopwatchOptions) {
		if(stopwatchOptions == null) {
			stopwatchOptions = {};
		}
		var stopwatch_this = this;
		var stopwatchCallbackProperties = ["stopwatchCallback", "stopwatchCallbackTarget", "stopwatchLapCallback", "stopwatchLapCallbackTarget", ];
		var stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);
		var stopwatchTimerSetHours = document.querySelector(".stopwatch-hours");
		var stopwatchTimerSetMinutes = document.querySelector(".stopwatch-minutes");
		var stopwatchTimerSetSeconds = document.querySelector(".stopwatch-seconds");
		var stopwatchTimerSetMilliseconds = document.querySelector(".stopwatch-milliseconds");
		var stopwatchInput = document.querySelectorAll("#stopwatch-set input");
		for(var i = 0; i < stopwatchInput.length; i++) {
			stopwatchInput[i].addEventListener("click", stopwatchSetTime);
			stopwatchInput[i].addEventListener("click", stopwatchSelect);
			stopwatchInput[i].addEventListener("focus", stopwatchSetTime);
			stopwatchInput[i].addEventListener("keydown", stopwatchSetTime);
			stopwatchInput[i].addEventListener("change", stopwatchSetTime);
			stopwatchInput[i].addEventListener("change", stopwatchFormatNumber);
		}
		document.querySelector("#stopwatch-start-stop").addEventListener("click", stopwatchHideShow);
		document.querySelector("#stopwatch-reset").addEventListener("click", stopwatchReset);

		function stopwatchReset() {
			stopwatchTimerSetHours.value = "";
			stopwatchTimerSetMinutes.value = "";
			stopwatchTimerSetSeconds.value = "";
			stopwatchTimerSetMilliseconds.value = "";
			var stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);
			stopwatchLaps = [];
			stopwatchLapDidChange(null, true);
			if(stopwatch.stopwatchRunning()) {
				document.querySelector("#stopwatch-time").style.display = "none";
				document.querySelector("#stopwatch-set > span").style.display = "flex";
				replaceClass(stopwatchStartStopButton, "stopwatch-stop", "stopwatch-start");
				stopwatchStartStopButton.innerHTML = "⏵︎";
				stopwatchStartStopButton.setAttribute("title", "Start");
				stopwatch.reset();
			}
		}

		function stopwatchHideShow() {
			stopwatchTimerSetHours.value = [stopwatchPad(stopwatchHours)];
			stopwatchTimerSetMinutes.value = [stopwatchPad(stopwatchMinutes)];
			stopwatchTimerSetSeconds.value = [stopwatchPad(stopwatchSeconds)];
			stopwatchTimerSetMilliseconds.value = [
				stopwatchPad(stopwatchMilliseconds / 10),
			];
			if(!stopwatch.stopwatchRunning()) {
				document.getElementById("stopwatch-time").style.display = "flex";
				document.querySelector("#stopwatch-set > span").style.display = "none";
			} else {
				document.getElementById("stopwatch-time").style.display = "none";
				document.querySelector("#stopwatch-set > span").style.display = "flex";
			}
		}

		function stopwatchFormatNumber() {
			if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
				this.value = "0" + this.value;
			}
		}

		function stopwatchSelect() {
			this.select();
		}

		function stopwatchSetTime() {
			if(this.value == "" || this.value == "0") {
				this.value = "00";
			}
			if(!stopwatch.stopwatchRunning()) {
				if(this.classList.contains("stopwatch-hours")) {
					var stopwatchNetTime = (stopwatchHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("stopwatch-minutes")) {
					var stopwatchNetTime = (stopwatchMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("stopwatch-seconds")) {
					var stopwatchNetTime = (stopwatchSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("stopwatch-milliseconds")) {
					var stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}

			var hours = document.querySelector(".stopwatch-hours").value;
			var minutes = document.querySelector(".stopwatch-minutes").value;
			var second = document.querySelector(".stopwatch-seconds").value;
			var millisecond = document.querySelector(".stopwatch-milliseconds").value;

			if (hours == "") {
				hours = "00";
			}
			if (minutes == "") {
				minutes = "00";
			}
			if (second == "") {
				second = "00";
			}
			if (millisecond == "") {
				millisecond = "00";
			}
			document.querySelector("#stopwatch-time").innerHTML = hours+":"+minutes+":"+second+":"+millisecond;
		}
		var stopwatchRunning = false;
		var stopwatchLaps = [];
		stopwatchCallbackProperties.forEach(function(stopwatchProperty) {
			if(stopwatchOptions[stopwatchProperty] != null) {
				stopwatch_this[stopwatchProperty] = stopwatchOptions[stopwatchProperty];
			}
		});
		this.stopwatchRunning = function() {
			return stopwatchRunning;
		};
		this.stopwatchHours = function() {
			return stopwatchHours;
		};
		this.stopwatchMinutes = function() {
			return stopwatchMinutes;
		};
		this.stopwatchSeconds = function() {
			return stopwatchSeconds;
		};
		this.stopwatchMilliseconds = function() {
			return stopwatchMilliseconds;
		};
		this.stopwatchNetTime = function() {
			return stopwatchNetTime;
		};
		this.stopwatchMilitaryTime = function() {
			return [
				stopwatchPad(stopwatchHours),
				stopwatchPad(stopwatchMinutes),
				stopwatchPad(stopwatchSeconds),
				stopwatchPad(stopwatchMilliseconds / 10),
			].join(":");
		};
		this.stopwatchCallbackArgument = this.stopwatchMilitaryTime;
		var stopwatchTimeDidChange = function() {
			var stopwatchCallback = stopwatch_this.stopwatchCallback;
			if(stopwatchCallback != null) {
				var stopwatchCallbackTarget = stopwatch_this.stopwatchCallbackTarget || window;
				if(typeof stopwatchCallback === "string") {
					stopwatchCallback = stopwatchCallbackTarget[stopwatchCallback];
				}
				if(typeof stopwatchCallback === "function") {
					stopwatchCallback.call(stopwatchCallbackTarget, stopwatch_this.stopwatchCallbackArgument.call(stopwatch_this));
				}
			}
		};
		var stopwatchLapDidChange = function(stopwatchLap, stopwatchIsReset) {
			if(stopwatch_this.stopwatchLapCallback != null) {
				var stopwatchLapCallbackTarget = stopwatch_this.stopwatchLapCallbackTarget || window;
				var stopwatchLapCallback = stopwatch_this.stopwatchLapCallback;
				if(typeof stopwatchLapCallback === "string") {
					stopwatchLapCallback = stopwatchLapCallbackTarget[stopwatchLapCallback];
				}
				if(typeof stopwatchLapCallback === "function") {
					stopwatchLapCallback.call(stopwatchLapCallbackTarget, stopwatchLap && stopwatchLap.stopwatchSplitString(), stopwatchIsReset);
				}
			}
		};
		var stopwatchInitializeTimer = function(stopwatchTimeInMilliseconds) {
			var coutdownTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchHours = coutdownTime.stopwatchHours;
			stopwatchMinutes = coutdownTime.stopwatchMinutes;
			stopwatchSeconds = coutdownTime.stopwatchSeconds;
			stopwatchMilliseconds = coutdownTime.stopwatchMilliseconds;
			stopwatchNetTime = stopwatchTimeInMilliseconds;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		var stopwatchIncrementByTenMilliseconds = function() {
			if(stopwatchMilliseconds === 990) {
				stopwatchMilliseconds = 0;
				if(stopwatchSeconds === 59) {
					stopwatchSeconds = 0;
					if(stopwatchMinutes === 59) {
						stopwatchMinutes = 0;
						stopwatchHours += 1;
					} else {
						stopwatchMinutes += 1;
					}
				} else {
					stopwatchSeconds += 1;
				}
			} else {
				stopwatchMilliseconds += 10;
			}
			stopwatchNetTime += 10;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		/*
		    Kick starts the stopwatch
		  */
		this.start = function() {
			stopwatchRunning = true;
			this.interval = setInterval(function() {
				stopwatchIncrementByTenMilliseconds();
			}, 10);
		};
		/*
		    Halts/Pauses the stopwatch
		  */
		this.stop = function() {
			if(this.interval != null) {
				clearInterval(this.interval);
			}
			stopwatchRunning = false;
		};
		/*
		    Captures a lap
		  */
		this.stopwatchAddLap = function() {
			var stopwatchPreviousLap = stopwatchLaps[stopwatchLaps.length - 1];
			var stopwatchCurrentLap = new stopwatchLap(stopwatchNetTime);
			stopwatchLaps.push(stopwatchCurrentLap);
			stopwatchLapDidChange(stopwatchCurrentLap, false);
		};
		/*
		    Resets all laps, invokes lapDidChange
		  */
		this.stopwatchResetLaps = function() {
			stopwatchLaps = [];
			stopwatchLapDidChange(null, true);
		};
		/*
		    resets the stopwatch
		  */
		this.reset = function() {
			this.stop();
			this.stopwatchResetLaps();
			stopwatchInitializeTimer(0);
		};
		/* 
		    Initializing stopwatchNetTime if provided via options
		  */
		if(stopwatchOptions.stopwatchNetTime != null) {
			stopwatchNetTime = stopwatchOptions.stopwatchNetTime;
			stopwatchInitializeTimer(stopwatchNetTime);
		}
	});
	var watch = document.getElementById("stopwatch-time");
	var stopwatchLapContainer = document.getElementById("stopwatch-list");
	var stopwatchLapCount = 0;
	window.stopwatchUpdateWatch = function(stopwatchMilitaryTime) {
		watch.innerHTML = stopwatchMilitaryTime;
	};
	window.stopwatchUpdateLap = function(stopwatchLapSplitString, stopwatchIsReset) {
		if(stopwatchIsReset) {
			document.querySelector("#stopwatch-time").innerHTML = "";
			stopwatchLapContainer.innerHTML = "";
			stopwatchLapCount = 0;
		} else {
			var stopwatchli = document.createElement("li");
			stopwatchLapCount += 1;
			stopwatchli.innerHTML = "<span>#" + stopwatchLapCount + "</span>" + watch.innerHTML;
			stopwatchLapContainer.appendChild(stopwatchli);
		}
	};
	var replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	var stopwatch = new StopWatch({
		stopwatchCallback: "stopwatchUpdateWatch",
		stopwatchLapCallback: "stopwatchUpdateLap",
	});
	var stopwatchStartStopButton = document.getElementById("stopwatch-start-stop");
	var stopwatchResetButton = document.querySelector("#stopwatch-reset");
	var stopwatchLapsButton = document.querySelector("#stopwatch-laps");
	var stopwatchTimerSetHours = document.querySelector(".stopwatch-hours");
	var stopwatchTimerSetMinutes = document.querySelector(".stopwatch-minutes");
	var stopwatchTimerSetSeconds = document.querySelector(".stopwatch-seconds");
	var stopwatchTimerSetMilliseconds = document.querySelector(".stopwatch-milliseconds");
	var stopwatchStartStopButtonEvent = function() {
		if(!stopwatch.stopwatchRunning()) {
			replaceClass(stopwatchStartStopButton, "stopwatch-start", "stopwatch-stop");
			stopwatchStartStopButton.innerHTML = "⏸︎";
			stopwatchStartStopButton.setAttribute("title", "Pause");
			stopwatch.start();
		} else {
			replaceClass(stopwatchStartStopButton, "stopwatch-stop", "stopwatch-start");
			stopwatchStartStopButton.innerHTML = "⏵︎";
			stopwatchStartStopButton.setAttribute("title", "Start");
			stopwatch.stop();
		}
	};
	var stopwatchResetButtonEvent = function() {
		var watch = document.querySelector("#stopwatch-time");
		if(!stopwatch.stopwatchRunning()) {} else {
			watch.innerHTML = "";
			stopwatch.reset();
		}
	};
	var stopwatchLapsButtonEvent = function() {
		var watch = document.querySelector("#stopwatch-time");
		if (watch.innerHTML != "00:00:00:00" && watch.innerHTML != "") {
			stopwatch.stopwatchAddLap();
		}
	};

	function stopwatchLapsScroll() {
		document.querySelector("#stopwatch-list").scrollTo(0, document.querySelector("#stopwatch-list").scrollHeight);
	}
	stopwatchStartStopButton.addEventListener("click", stopwatchStartStopButtonEvent);
	stopwatchResetButton.addEventListener("click", stopwatchResetButtonEvent);
	stopwatchLapsButton.addEventListener("click", stopwatchLapsButtonEvent);
	stopwatchLapsButton.addEventListener("click", stopwatchLapsScroll);
}

function RNG() {
	var lastMin = 1;
	var lastMax = 100;

	function rollNumber() {
		addIteration();
		var iteration = document.querySelector("#rng .iterations input").value;
		for(var i = 0; i < iteration; i++) {
			var x = i + 1;

			function generateNumber(x) {
				var min = parseInt(document.querySelector("#rng ul li[name='" + x + "'] div:nth-child(2) input").value);
				var max = parseInt(document.querySelector("#rng ul li[name='" + x + "'] div:nth-child(3) input").value) + 1;
				var random1 = Math.floor(Math.random() * (max - min)) + min;
				var output = document.querySelector(".result div[name='" + x + "']");
				var intervalRandom = setInterval(genRandom, 100);
				var startDate = new Date();
				var durationMin = 1000;
				var durationMax = 3000;

				function genRandom() {
					var random2 = Math.floor(Math.random() * (max - min)) + min;
					var currentDate = new Date();
					output.innerText = random2;
					if(currentDate - startDate > durationMax) {
						stopcount();
					} else if(random1 == random2 && currentDate - startDate > durationMin) {
						stopcount();
					}

					function stopcount() {
						output.innerText = random1;
						clearInterval(intervalRandom);
						output.style.color = "gold";
					}
				}
			}
			generateNumber(x);
		}
	}
	document.querySelector("#rng button").addEventListener("click", rollNumber);
	document.querySelector("#rng .iterations input").addEventListener("change", addIteration);
	addIteration();

	function addIteration() {
		var iteration = document.querySelector("#rng .iterations input").value;
		var themin = [];
		var themax = [];
		var lis = document.querySelectorAll("#rng ul li");
		for(var q = 0; q < lis.length; q++) {
			themin.push(lis[q].lastElementChild.previousElementSibling.firstChild.value);
			themax.push(lis[q].lastElementChild.firstChild.value);
			lis[q].remove();
		}
		var outs = document.querySelectorAll("#rng .result div");
		for(var q = 0; q < outs.length; q++) {
			outs[q].remove();
		}
		for(var i = 0; i < iteration; i++) {
			var x = i + 1;
			var li = document.createElement("li");
			var it = document.createElement("div");
			var itText = document.createElement("p");
			var min = document.createElement("div");
			var minInput = document.createElement("input");
			var max = document.createElement("div");
			var maxInput = document.createElement("input");
			li.setAttribute("name", x);
			it.setAttribute("name", "it");
			itText.innerText = "#" + x;
			itText.setAttribute("title", "Iteration");
			min.setAttribute("name", "min");
			minInput.setAttribute("type", "number");
			minInput.setAttribute("title", "Min");
			minInput.setAttribute("autocomplete", "off");
			if(themin[i] != undefined) {
				minInput.setAttribute("value", themin[i]);
			} else if(lastMin != undefined) {
				minInput.setAttribute("value", lastMin);
			} else {
				minInput.setAttribute("value", "1");
			}
			max.setAttribute("name", "max");
			maxInput.setAttribute("type", "number");
			maxInput.setAttribute("title", "Max");
			maxInput.setAttribute("autocomplete", "off");
			if(themax[i] != undefined) {
				maxInput.setAttribute("value", themax[i]);
			} else if(lastMax != undefined) {
				maxInput.setAttribute("value", lastMax);
			} else {
				maxInput.setAttribute("value", "100");
			}
			minInput.setAttribute("min", "1");
			minInput.setAttribute("max", parseInt(maxInput.value) - 1);
			maxInput.setAttribute("min", parseInt(minInput.value) + 1);
			maxInput.setAttribute("max", "1000");
			document.querySelector("#rng ul").appendChild(li);
			li.appendChild(it);
			it.appendChild(itText);
			li.appendChild(min);
			min.appendChild(minInput);
			li.appendChild(max);
			max.appendChild(maxInput);
			var out = document.createElement("div");
			out.setAttribute("name", x);
			out.title = "#" + x + "\n" + "Number between " + minInput.value + "-" + maxInput.value;
			out.innerText = "-";
			document.querySelector("#rng .result").appendChild(out);
			minInput.addEventListener("change", minmaxChange);
			maxInput.addEventListener("change", minmaxChange);
		}
		document.querySelector("#rng ul").scrollTo(0, document.querySelector("#rng ul").scrollHeight);
	}

	function minmaxChange() {
		var Min = this.parentElement.parentElement.querySelector(':scope > div[name="min"] > input');
		var Max = this.parentElement.parentElement.querySelector(':scope > div[name="max"] > input');
		Min.max = parseInt(Max.value) - 1;
		Max.min = parseInt(Min.value) + 1;
		lastMin = Min.value;
		lastMax = Max.value;
	}
}

function timerSelector() {
	if(document.querySelector("#timerselector1").checked == true) {
		document.querySelector("#stopwatch-outer").style.display = "inline-block";
		document.querySelector("#countdown-outer").style.display = "none";
		document.querySelector("#countdown-reset").click();
	}
	if(document.querySelector("#timerselector2").checked == true) {
		document.querySelector("#stopwatch-outer").style.display = "none";
		document.querySelector("#countdown-outer").style.display = "inline-block";
		document.querySelector("#stopwatch-reset").click();
	}
}





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