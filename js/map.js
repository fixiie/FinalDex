var createMap = function() {
	var mapOuter = document.createElement("div");
	var mapAside1 = document.createElement("aside");
	var mapAside1OptionsTitleOuter = document.createElement("div");
	var mapAside1OptionsSearchOuter = document.createElement("div");
	var mapAside1OptionsSearch = document.createElement("input");
	var mapAside1OptionsSearchExit = document.createElement("span");
	var mapAside2 = document.createElement("aside");
	var mapAside2Title = document.createElement("span");
	var mapAside2TitleText = document.createElement("h1");
	var mapAside2Flavor = document.createElement("span");
	var mapAside2FlavorText = document.createElement("h5");
	var mapAside3 = document.createElement("aside");
	var mapAside3MapOuter = document.createElement("div");
	var mapAside3MapZoomReset = document.createElement("span");
	var mapAside3MapZoomOut = document.createElement("span");
	var mapAside3MapZoomIn = document.createElement("span");
	var mapAside3MapZoomFullscreen = document.createElement("span");
	var mapAside3MapCancel = document.createElement("span");
	var mapAside3MapUp = document.createElement("div");
	var mapAside3MapUpToggle = document.createElement("div");
	var mapAside3MapUpMain = document.createElement("main");
	var mapAside3MapDown = document.createElement("div");
	var mapAside3MapDownToggle = document.createElement("div");
	var mapAside3MapDownMain = document.createElement("main");
	var mapAside3MapLeft = document.createElement("div");
	var mapAside3MapLeftToggle = document.createElement("div");
	var mapAside3MapLeftMain = document.createElement("main");
	var mapAside3MapRight = document.createElement("div");
	var mapAside3MapRightToggle = document.createElement("div");
	var mapAside3MapRightMain = document.createElement("main");
	var mapAside3Map = document.createElement("div");
	var mapAside3MapPanzoom = document.createElement("div");
	var mapAside3MapMark = document.createElement("div");
	var mapAside3MapImage = document.createElement("img");
	var mapAside3MapCordinateOuter = document.createElement("map");
	var mapAside4 = document.createElement("aside");
	mapOuter.setAttribute("id", "map-outer");
	mapOuter.setAttribute("name", "Map");
	mapAside1.setAttribute("id", "map-aside1");
	mapAside1OptionsTitleOuter.setAttribute("id", "map-options-title");
	mapAside1OptionsSearchOuter.setAttribute("id", "map-options-search");
	mapAside1OptionsSearch.setAttribute("type", "text");
	mapAside1OptionsSearch.setAttribute("id", "map-search");
	mapAside1OptionsSearch.setAttribute("placeholder", "Search Locations...");
	mapAside1OptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	mapAside1OptionsSearch.setAttribute("onblur", "this.placeholder='Search Locations...'");
	mapAside1OptionsSearch.setAttribute("autocomplete", "off");
	mapAside1OptionsSearchExit.setAttribute("id", "map-search-exit");
	mapAside2.setAttribute("id", "map-aside2");
	mapAside2Title.setAttribute("id", "map-title");
	mapAside2TitleText.innerText = "Map of " + Region;
	mapAside2Flavor.setAttribute("id", "map-flavor");
	mapAside2Flavor.setAttribute("title", "Slogan")
	mapAside3.setAttribute("id", "map-aside3");
	mapAside3MapOuter.setAttribute("id", "map-contain");
	mapAside3MapZoomReset.setAttribute("id", "zoom-reset");
	mapAside3MapZoomOut.classList.add("zoom-out");
	mapAside3MapZoomIn.classList.add("zoom-in");
	mapAside3MapZoomFullscreen.classList.add("zoom-fullscreen");
	mapAside3MapCancel.classList.add("map-cancel")
	mapAside3MapCancel.addEventListener("click", mapCancel);
	mapAside3MapUp.classList.add("map-up");
	mapAside3MapUpToggle.classList.add("map-up-toggle");
	mapAside3MapUpToggle.innerText = "↑";
	mapAside3MapUpMain
	mapAside3MapDown.classList.add("map-down");
	mapAside3MapDownToggle.classList.add("map-down-toggle");
	mapAside3MapDownToggle.innerText = "↓";
	mapAside3MapDownMain
	mapAside3MapLeft.classList.add("map-left");
	mapAside3MapLeftToggle.classList.add("map-left-toggle");
	mapAside3MapLeftToggle.innerText = "←";
	mapAside3MapLeftMain
	mapAside3MapRight.classList.add("map-right");
	mapAside3MapRightToggle.classList.add("map-right-toggle");
	mapAside3MapRightToggle.innerText = "→";
	mapAside3MapRightMain
	mapAside3Map.setAttribute("id", "map");
	mapAside3MapPanzoom.setAttribute("id", "map-panzoom");
	mapAside3MapPanzoom.setAttribute("name", Region + "-" + MEDIAPath_Map);
	mapAside3MapMark.classList.add("map-img-mark-outer");
	mapAside3MapImage.src = "./media/Images/Misc/Map/" + MEDIAPath_Map + "/Map.png";
	mapAside3MapImage.onload = function() {
		mapAside3MapImage.setAttribute("width", mapAside3MapImage.width + "px");
		mapAside3MapImage.setAttribute("height", mapAside3MapImage.height + "px");
	}
	mapAside3MapImage.classList.add("map-img-main");
	mapAside3MapImage.setAttribute("usemap", "#" + Region + "-" + MEDIAPath_Map + "-map");
	mapAside3MapCordinateOuter.setAttribute("id", Region + "-" + MEDIAPath_Map + "-map");
	mapAside3MapCordinateOuter.setAttribute("name", Region + "-" + MEDIAPath_Map + "-map");
	mapAside4.setAttribute("id", "map-aside4");
	document.querySelector("#contain").appendChild(mapOuter);
	mapOuter.appendChild(mapAside1);
	mapAside1.appendChild(mapAside1OptionsTitleOuter);
	mapAside1OptionsTitleOuter.appendChild(mapAside1OptionsSearchOuter);
	mapAside1OptionsSearchOuter.appendChild(mapAside1OptionsSearchExit);
	mapAside1OptionsSearchOuter.appendChild(mapAside1OptionsSearch);
	mapOuter.appendChild(mapAside2);
	mapAside2.appendChild(mapAside2Title);
	mapAside2Title.appendChild(mapAside2TitleText);
	mapAside2.appendChild(mapAside2Flavor);
	mapAside2Flavor.appendChild(mapAside2FlavorText);
	mapOuter.appendChild(mapAside3);
	mapAside3.appendChild(mapAside3MapOuter);
	mapAside3MapOuter.appendChild(mapAside3MapZoomReset);
	mapAside3MapOuter.appendChild(mapAside3MapZoomOut);
	mapAside3MapOuter.appendChild(mapAside3MapZoomIn);
	mapAside3MapOuter.appendChild(mapAside3MapZoomFullscreen);
	mapAside3MapOuter.appendChild(mapAside3MapCancel);
	mapAside3MapOuter.appendChild(mapAside3MapUp);
	mapAside3MapUp.appendChild(mapAside3MapUpToggle);
	mapAside3MapUp.appendChild(mapAside3MapUpMain);
	mapAside3MapOuter.appendChild(mapAside3MapDown);
	mapAside3MapDown.appendChild(mapAside3MapDownToggle);
	mapAside3MapDown.appendChild(mapAside3MapDownMain);
	mapAside3MapOuter.appendChild(mapAside3MapLeft);
	mapAside3MapLeft.appendChild(mapAside3MapLeftToggle);
	mapAside3MapLeft.appendChild(mapAside3MapLeftMain);
	mapAside3MapOuter.appendChild(mapAside3MapRight);
	mapAside3MapRight.appendChild(mapAside3MapRightToggle);
	mapAside3MapRight.appendChild(mapAside3MapRightMain);
	mapAside3MapOuter.appendChild(mapAside3Map);
	mapAside3Map.appendChild(mapAside3MapPanzoom);
	mapAside3MapPanzoom.appendChild(mapAside3MapMark);
	mapAside3MapPanzoom.appendChild(mapAside3MapImage);
	mapAside3MapPanzoom.appendChild(mapAside3MapCordinateOuter);


    var mapAside2Game = document.createElement("span");
    var mapAside2GameImage = document.createElement("img");
    mapAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    mapAside2GameImage.setAttribute("onerror","this.display='none'");
    mapAside2.appendChild(mapAside2Game);
    mapAside2Game.appendChild(mapAside2GameImage);

	var mapAside3AreaNavigation = document.createElement("div");
	mapAside3AreaNavigation.classList.add("map-area-navigation");
	mapAside3.appendChild(mapAside3AreaNavigation);
	var mapAside3AreaOuter = document.createElement("div");
	var mapAside3Area = document.createElement("span");
	mapAside3AreaNavigation.appendChild(mapAside3AreaOuter);
	mapAside3AreaOuter.appendChild(mapAside3Area);
	var mapAside3AreaContent = document.createElement("span");
	var mapAside3AreaTitle = document.createElement("h4");
	mapAside3AreaTitle.innerText = "Sub Area/Location";
	mapAside3Area.appendChild(mapAside3AreaContent);
	mapAside3AreaContent.appendChild(mapAside3AreaTitle);
	var mapAside3NavigationOuter = document.createElement("div");
	var mapAside3Navigation = document.createElement("span");
	var mapAside3NavigationContent = document.createElement("span");
	var mapAside3NavigationTitle = document.createElement("h4");
	mapAside3NavigationTitle.innerText = "Required for Navigation";
	mapAside3AreaNavigation.appendChild(mapAside3NavigationOuter);
	mapAside3NavigationOuter.appendChild(mapAside3Navigation);
	mapAside3Navigation.appendChild(mapAside3NavigationContent);
	mapAside3NavigationContent.appendChild(mapAside3NavigationTitle);
	mapOuter.appendChild(mapAside4);
	var mapAside4Description = document.createElement("div");
	mapAside4Description.setAttribute("id", "map-description");
	mapAside4.appendChild(mapAside4Description);
	var DescriptionSelectorOuter = document.createElement("div");
	DescriptionSelectorOuter.classList.add("map-description-selector-outer")
	mapAside4Description.appendChild(DescriptionSelectorOuter);
	var mapDescriptionTitles = ["Overview", "Pokémon", "Items", "Trainers", "Move Tutor"];
	for(var q = 0; q < mapDescriptionTitles.length; q++) {
		var DescriptionSelector = document.createElement("div");
		var DescriptionSelectorInput = document.createElement("input");
		var DescriptionSelectorLabel = document.createElement("label");
		DescriptionSelectorInput.setAttribute("type", "radio");
		DescriptionSelectorInput.setAttribute("name", "map-description-selector");
		DescriptionSelectorInput.setAttribute("id", "map-description-selector-" + q);
		DescriptionSelectorInput.setAttribute("autocomplete", "off");
		DescriptionSelectorInput.setAttribute("value", q);
		DescriptionSelectorLabel.setAttribute("for", "map-description-selector-" + q);
		DescriptionSelectorLabel.innerText = mapDescriptionTitles[q];
		DescriptionSelectorOuter.appendChild(DescriptionSelector);
		DescriptionSelector.appendChild(DescriptionSelectorInput);
		DescriptionSelector.appendChild(DescriptionSelectorLabel);
		DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);
		if(q == 0) {
			DescriptionSelectorLabel.click();
		}
	}
	var mapAside4DescriptionPok = document.createElement("base");
	mapAside4DescriptionPok.setAttribute("id", "map-description-pok");
	mapAside4DescriptionPok.setAttribute("name", "1");
	mapAside4Description.appendChild(mapAside4DescriptionPok);
	for(var q = 0; q < 2; q++) {
		var mapAside4DescriptionPokUl = document.createElement("ul");
		var mapAside4DescriptionPokUlTitle = document.createElement("h4");
		mapAside4DescriptionPokUlTitle.innerText = "B1F";
		mapAside4DescriptionPok.appendChild(mapAside4DescriptionPokUl);
		mapAside4DescriptionPokUl.appendChild(mapAside4DescriptionPokUlTitle);
		for(var u = 0; u < locationPokList.length; u++) {
			var mapAside4DescriptionPokLi = document.createElement("li");
			var mapAside4DescriptionPokIconOuter = document.createElement("div");
			var mapAside4DescriptionPokIcon = document.createElement("img");
			var mapAside4DescriptionPokLvOuter = document.createElement("span");
			var mapAside4DescriptionPokLv = document.createElement("p");
			var mapAside4DescriptionPokRateOuter = document.createElement("span");
			var mapAside4DescriptionPokRate = document.createElement("p");
			var mapAside4DescriptionPokTypeOuter = document.createElement("div");
			var mapAside4DescriptionPokType = document.createElement("img");
			mapAside4DescriptionPokIcon.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + locationPokList[u] + ".png";
			mapAside4DescriptionPokIcon.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			mapAside4DescriptionPokIcon.setAttribute("title", getPokémonName(locationPokList[u]));
			mapAside4DescriptionPokLv.innerText = locationPokListLv[u];
			mapAside4DescriptionPokRate.innerText = locationPokListRate[u];
			mapAside4DescriptionPokType.src = "./media/Images/Misc/Encounter/" + MEDIAPath_Encounter + "/" + locationPokListType[u] + ".png";
			mapAside4DescriptionPokType.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			mapAside4DescriptionPokType.setAttribute("title", locationPokListType[u]);
			mapAside4DescriptionPokUl.appendChild(mapAside4DescriptionPokLi);
			mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokIconOuter);
			mapAside4DescriptionPokIconOuter.appendChild(mapAside4DescriptionPokIcon);
			mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokLvOuter);
			mapAside4DescriptionPokLvOuter.appendChild(mapAside4DescriptionPokLv);
			mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokRateOuter);
			mapAside4DescriptionPokRateOuter.appendChild(mapAside4DescriptionPokRate);
			mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokTypeOuter);
			mapAside4DescriptionPokTypeOuter.appendChild(mapAside4DescriptionPokType);
		}
	}
	var mapAside4DescriptionItem = document.createElement("base");
	mapAside4DescriptionItem.setAttribute("id", "map-description-item");
	mapAside4DescriptionItem.setAttribute("name", "2");
	mapAside4Description.appendChild(mapAside4DescriptionItem);
	for(var q = 0; q < 4; q++) {
		var mapAside4DescriptionItemUl = document.createElement("ul");
		var mapAside4DescriptionItemUlTitle = document.createElement("h4");
		mapAside4DescriptionItemUlTitle.innerText = "B1F";
		mapAside4DescriptionItem.appendChild(mapAside4DescriptionItemUl);
		mapAside4DescriptionItemUl.appendChild(mapAside4DescriptionItemUlTitle);
		for(var u = 0; u < locationItemList.length; u++) {
			var mapAside4DescriptionItemLi = document.createElement("li");
			var mapAside4DescriptionItemIconOuter = document.createElement("div");
			var mapAside4DescriptionItemIcon = document.createElement("img");
			var mapAside4DescriptionItemLocationOuter = document.createElement("span");
			var mapAside4DescriptionItemLocation = document.createElement("p");
			mapAside4DescriptionItemIcon.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + locationItemList[u] + ".png";
			mapAside4DescriptionItemIcon.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			mapAside4DescriptionItemIcon.setAttribute("title", locationItemList[u]);
			mapAside4DescriptionItemLocation.innerText = locationItemListLocation[u];
			mapAside4DescriptionItemUl.appendChild(mapAside4DescriptionItemLi);
			mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemIconOuter);
			mapAside4DescriptionItemIconOuter.appendChild(mapAside4DescriptionItemIcon);
			mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemLocationOuter);
			mapAside4DescriptionItemLocationOuter.appendChild(mapAside4DescriptionItemLocation);
		}
	}
	var mapAside4DescriptionTrainer = document.createElement("base");
	mapAside4DescriptionTrainer.setAttribute("id", "map-description-trainer");
	mapAside4DescriptionTrainer.setAttribute("name", "3");
	mapAside4Description.appendChild(mapAside4DescriptionTrainer);
	for(var q = 0; q < locationTrainerPok.length; q++) {
		var x = q + 1;
		var mapAside4DescriptionTrainerUl = document.createElement("ul");
		var mapAside4DescriptionTrainerUlTop = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopCountOuter = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopCount = document.createElement("h5");
		var mapAside4DescriptionTrainerUlTopImgOuter = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopImgPrevious = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopImg = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopImgNext = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopTitle = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopTitleCount = document.createElement("span");
		var mapAside4DescriptionTrainerUlTopTitleCountImg = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopTitleName = document.createElement("h3");
		var mapAside4DescriptionTrainerUlTopTitleValue = document.createElement("h4");
		var mapAside4DescriptionTrainerUlContent = document.createElement("div");
		mapAside4DescriptionTrainerUl.setAttribute("name", q);
		mapAside4DescriptionTrainerUlTop.setAttribute("id", "map-description-trainer-top");
		mapAside4DescriptionTrainerUlTopCountOuter.setAttribute("id", "map-description-trainer-top-count");
		mapAside4DescriptionTrainerUlTopImgOuter.setAttribute("id", "map-description-trainer-top-img");
		mapAside4DescriptionTrainerUlTopImgPrevious.src = "./media/Images/Character/Battle/PNG/Front/" + MEDIAPath_Character_Battle + "/" + locationTrainerClass[q - 1] + ".png";
		mapAside4DescriptionTrainerUlTopImgPrevious.setAttribute("name", parseInt(q) - 1);
		mapAside4DescriptionTrainerUlTopImg.src = "./media/Images/Character/Battle/PNG/Front/" + MEDIAPath_Character_Battle + "/" + locationTrainerClass[q] + ".png";
		mapAside4DescriptionTrainerUlTopImg.setAttribute("name", parseInt(q));
		mapAside4DescriptionTrainerUlTopImgNext.src = "./media/Images/Character/Battle/PNG/Front/" + MEDIAPath_Character_Battle + "/" + locationTrainerClass[q + 1] + ".png";
		mapAside4DescriptionTrainerUlTopImgNext.setAttribute("name", parseInt(q) + 1);
		if(locationTrainerClass[q - 1] == undefined) {
			mapAside4DescriptionTrainerUlTopImgPrevious.style.visibility = "hidden";
			mapAside4DescriptionTrainerUlTopImgPrevious.style.pointerEvents = "none";
		}
		if(locationTrainerClass[q] == undefined) {
			mapAside4DescriptionTrainerUlTopImg.style.visibility = "hidden";
			mapAside4DescriptionTrainerUlTopImg.style.pointerEvents = "none";
		}
		if(locationTrainerClass[q + 1] == undefined) {
			mapAside4DescriptionTrainerUlTopImgNext.style.visibility = "hidden";
			mapAside4DescriptionTrainerUlTopImgNext.style.pointerEvents = "none";
		}
		mapAside4DescriptionTrainerUlTopImgPrevious.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		mapAside4DescriptionTrainerUlTopImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		mapAside4DescriptionTrainerUlTopImgNext.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		mapAside4DescriptionTrainerUlTopTitle.setAttribute("id", "map-description-trainer-top-title");
		mapAside4DescriptionTrainerUlTopTitleName.innerText = locationTrainerList[q];
		mapAside4DescriptionTrainerUlTopTitleValue.innerHTML = '<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" />' + locationTrainerValue[q];
		mapAside4DescriptionTrainerUlContent.setAttribute("id", "map-description-trainer-bottom");
		mapAside4DescriptionTrainer.appendChild(mapAside4DescriptionTrainerUl);
		mapAside4DescriptionTrainerUl.appendChild(mapAside4DescriptionTrainerUlTop);
		mapAside4DescriptionTrainerUlTop.appendChild(mapAside4DescriptionTrainerUlTopCountOuter);
		mapAside4DescriptionTrainerUlTopCountOuter.appendChild(mapAside4DescriptionTrainerUlTopCount);
		mapAside4DescriptionTrainerUlTop.appendChild(mapAside4DescriptionTrainerUlTopImgOuter);
		mapAside4DescriptionTrainerUlTopImgOuter.appendChild(mapAside4DescriptionTrainerUlTopImgPrevious);
		mapAside4DescriptionTrainerUlTopImgOuter.appendChild(mapAside4DescriptionTrainerUlTopImg);
		mapAside4DescriptionTrainerUlTopImgOuter.appendChild(mapAside4DescriptionTrainerUlTopImgNext);
		mapAside4DescriptionTrainerUlTop.appendChild(mapAside4DescriptionTrainerUlTopTitle);
		mapAside4DescriptionTrainerUlTopTitle.appendChild(mapAside4DescriptionTrainerUlTopTitleCount);
		mapAside4DescriptionTrainerUlTopTitleCount.appendChild(mapAside4DescriptionTrainerUlTopTitleCountImg);
		mapAside4DescriptionTrainerUlTopTitle.appendChild(mapAside4DescriptionTrainerUlTopTitleName);
		mapAside4DescriptionTrainerUlTopTitle.appendChild(mapAside4DescriptionTrainerUlTopTitleValue);
		mapAside4DescriptionTrainerUl.appendChild(mapAside4DescriptionTrainerUlContent);
		mapAside4DescriptionTrainerUlTopImgPrevious.addEventListener("click", mapDescriptionTrainerSelector);
		mapAside4DescriptionTrainerUlTopImg.addEventListener("click", mapDescriptionTrainerSelector);
		mapAside4DescriptionTrainerUlTopImgNext.addEventListener("click", mapDescriptionTrainerSelector);

		function mapDescriptionTrainerSelector() {
			var mapDescriptionTrainers = document.querySelectorAll('#map-description-trainer ul[name]');
			var mapDescriptionTrainer = document.querySelectorAll('#map-description-trainer ul[name="' + this.name + '"]');
			for(var y = 0; y < mapDescriptionTrainers.length; y++) {
				mapDescriptionTrainers[y].style.display = "none";
			}
			for(var y = 0; y < mapDescriptionTrainer.length; y++) {
				mapDescriptionTrainer[y].style.display = "unset";
			}
		}
		for(var u = 0; u < locationTrainerPok[q].length; u++) {
			var z = u + 1;
			var mapAside4DescriptionTrainerLi = document.createElement("li");
			var mapAside4DescriptionTrainerIconOuter = document.createElement("div");
			var mapAside4DescriptionTrainerIcon = document.createElement("img");
			var mapAside4DescriptionTrainerLvGender = document.createElement("div");
			var mapAside4DescriptionTrainerLv = document.createElement("h4");
			var mapAside4DescriptionTrainerGender = document.createElement("span");
			var mapAside4DescriptionTrainerHeldItem = document.createElement("img");
			var mapAside4DescriptionTrainerMoveOuter = document.createElement("span");
			mapAside4DescriptionTrainerUlTopCount.innerText = x + "/" + locationTrainerPok.length;
			mapAside4DescriptionTrainerUlTopTitleCountImg.src = "./media/Images/Misc/FinalDex/TrainerBall" + z + ".png";
			mapAside4DescriptionTrainerIconOuter.setAttribute("id", "map-description-trainer-icon")
			mapAside4DescriptionTrainerIcon.src = "./media/Images/Pokémon/Battle/PNG/Normal/Front/" + ImageType_Path[0] + "/" + locationTrainerPok[q][u] + ".png";
			mapAside4DescriptionTrainerIcon.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			mapAside4DescriptionTrainerIcon.setAttribute("title", getPokémonName(locationTrainerPok[q][u]));
			mapAside4DescriptionTrainerLvGender.setAttribute("id", "map-description-trainer-lvgender");
			mapAside4DescriptionTrainerLv.innerText = "Lv. " + locationTrainerLv[q][u];
			if(locationTrainerHeldItem[q][u] == "♂") {
				mapAside4DescriptionTrainerGender.setAttribute("title", "Male");
			}
			if(locationTrainerHeldItem[q][u] == "♀") {
				mapAside4DescriptionTrainerGender.setAttribute("title", "Female");
			}
			mapAside4DescriptionTrainerGender.innerText = locationTrainerGender[q][u];
			if(locationTrainerHeldItem[q][u] != undefined && locationTrainerHeldItem[q][u] != "") {
				mapAside4DescriptionTrainerHeldItem.src = "./media/Images/Item/Bag/" + "VIII" + "/" + locationTrainerHeldItem[q][u] + ".png";
			}
			mapAside4DescriptionTrainerHeldItem.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			mapAside4DescriptionTrainerHeldItem.setAttribute("title", locationTrainerHeldItem[q][u]);
			mapAside4DescriptionTrainerUlContent.appendChild(mapAside4DescriptionTrainerLi);
			mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerIconOuter);
			mapAside4DescriptionTrainerIconOuter.appendChild(mapAside4DescriptionTrainerIcon);
			mapAside4DescriptionTrainerIconOuter.appendChild(mapAside4DescriptionTrainerHeldItem);
			mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerMoveOuter);
			for(var y = 0; y < locationTrainerListMove[q][u].length; y++) {
				var mapAside4DescriptionTrainerMove = document.createElement("div");
				var mapAside4DescriptionTrainerMoveContent = document.createElement("p");
				mapAside4DescriptionTrainerMove.setAttribute("name", y);
				mapAside4DescriptionTrainerMove.classList.add("map-description-trainer-move");
				mapAside4DescriptionTrainerMoveContent.innerText = locationTrainerListMove[q][u][y];
				mapAside4DescriptionTrainerMoveOuter.appendChild(mapAside4DescriptionTrainerMove);
				mapAside4DescriptionTrainerMove.appendChild(mapAside4DescriptionTrainerMoveContent);
			}
			mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerLvGender);
			mapAside4DescriptionTrainerLvGender.appendChild(mapAside4DescriptionTrainerLv);
			mapAside4DescriptionTrainerLvGender.appendChild(mapAside4DescriptionTrainerGender);
		}
	}
	var mapAside1OptionsOuter = document.createElement("div");
	var mapAside1Options = document.createElement("div");
	mapAside1OptionsOuter.setAttribute("id", "map-options-outer");
	mapAside1OptionsOuter.setAttribute("name", "0");
	mapAside1Options.setAttribute("id", "map-options");
	mapAside1.appendChild(mapAside1OptionsOuter);
	mapAside1OptionsOuter.appendChild(mapAside1Options);
	for(var q = 0; q < finaldataLocation.length; q++) {
		var mapAside1OptionsInput = document.createElement("input");
		var mapAside1OptionsLabel = document.createElement("label");
		mapAside1OptionsInput.setAttribute("type", "radio");
		mapAside1OptionsInput.setAttribute("name", "map-options");
		mapAside1OptionsInput.setAttribute("id", "map-options-" + q);
		mapAside1OptionsInput.setAttribute("autocomplete", "off");
		mapAside1OptionsInput.value = q;
		mapAside1OptionsInput.alt = u;
		mapAside1OptionsLabel.setAttribute("for", "map-options-" + q);
		mapAside1OptionsLabel.setAttribute("name", "medium");
		mapAside1OptionsLabel.setAttribute("data-search-name", finaldataLocation[q][JSONPath_Location + "_" + "Name"].toLowerCase());
		mapAside1OptionsLabel.innerText = finaldataLocation[q][JSONPath_Location + "_" + "Name"];
		mapAside1Options.appendChild(mapAside1OptionsInput);
		mapAside1Options.appendChild(mapAside1OptionsLabel);
		mapAside1OptionsInput.addEventListener("click", mapOptionsSelector);
		if(q == 0) {
			mapAside1OptionsLabel.click();
		}
	}

	function mapOptionsSelector() {
		mapAside2TitleText.innerText = finaldataLocation[this.value][JSONPath_Location + "_" + "Name"];
		mapAside2FlavorText.innerText = "";
		var imgz = document.querySelectorAll(".map-img-mark-outer img");
		for(var q = 0; q < imgz.length; q++) {
			imgz[q].remove();
		}
		var upbtn = mapAside3MapUpMain.querySelectorAll(":scope > button");
		var leftbtn = mapAside3MapLeftMain.querySelectorAll(":scope > button");
		var rightbtn = mapAside3MapRightMain.querySelectorAll(":scope > button");
		var dwnbtn = mapAside3MapDownMain.querySelectorAll(":scope > button");
		for(var q = 0; q < upbtn.length; q++) {
			upbtn[q].remove();
		}
		for(var q = 0; q < leftbtn.length; q++) {
			leftbtn[q].remove();
		}
		for(var q = 0; q < rightbtn.length; q++) {
			rightbtn[q].remove();
		}
		for(var q = 0; q < dwnbtn.length; q++) {
			dwnbtn[q].remove();
		}
		for(var q = 0; q < finaldataLocationSlogan.length; q++) {
			if(finaldataLocationSlogan[q][JSONPath_LocationSlogan + "_" + "Name"] == finaldataLocation[this.value][JSONPath_Location + "_" + "Name"]) {
				mapAside2FlavorText.innerHTML = '"' + finaldataLocationSlogan[q][JSONPath_LocationSlogan + "_" + "Slogan"] + '"';
			}
		}
		var subs = mapAside3AreaContent.querySelectorAll(":scope > p");
		for(var q = 0; q < subs.length; q++) {
			subs[q].remove();
		}
		mapAside3AreaTitle.innerText = "Sub Area/Location";
		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Name"] == finaldataLocation[this.value][JSONPath_Location + "_" + "Name"] && finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Location"] != undefined) {
				for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Location"].split(",").length; u++) {
					var mapAside3AreaText = document.createElement("p");
					mapAside3AreaTitle.innerText = "Location";
					mapAside3AreaText.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Location"].split(",")[u];
					mapAside3AreaContent.appendChild(mapAside3AreaText);
					mapAside3AreaText.setAttribute("name", "map");
					mapAside3AreaText.addEventListener("click", dataRedirect);
				}
			}
		}
		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Location"] != undefined) {
				for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Location"].split(",").length; u++) {
					if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Location"].split(",")[u] == finaldataLocation[this.value][JSONPath_Location + "_" + "Name"]) {
						var mapAside3AreaText = document.createElement("p");
						mapAside3AreaTitle.innerText = "Sub Areas";
						mapAside3AreaText.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Name"];
						mapAside3AreaContent.appendChild(mapAside3AreaText);
						mapAside3AreaText.setAttribute("name", "map");
						mapAside3AreaText.addEventListener("click", dataRedirect);
					}
				}
			}
		}
		var navs = mapAside3NavigationContent.querySelectorAll(":scope > span");
		for(var q = 0; q < navs.length; q++) {
			navs[q].remove();
		}
		for(var q = 0; q < finaldataLocationNavigation.length; q++) {
			if(finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Name"] == finaldataLocation[this.value][JSONPath_Location + "_" + "Name"] && finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Name"] != undefined) {
				for(var u = 0; u < finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",").length; u++) {
					var mapAside3NavigationInnerContent = document.createElement("span")
					var mapAside3NavigationInnerImg = document.createElement("img");
					var mapAside3NavigationInnerText = document.createElement("p");
					mapAside3NavigationInnerText.innerText = finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u];
					if(finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Cut" || finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Strength") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Normal" + ".png";
					} else if(finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Waterfall" || finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Surf" || finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Dive" || finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Whirlpool") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Water" + ".png";
					} else if(finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Rock Smash" || finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Rock Climb") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Fighting" + ".png";
					} else if(finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] == "Defog") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Flying" + ".png";
					} else {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u] + ".png";
					}
					mapAside3NavigationInnerImg.setAttribute("title", finaldataLocationNavigation[q][JSONPath_LocationNavigation + "_" + "Navigation"].split(",")[u]);
					mapAside3NavigationInnerImg.setAttribute("onerror", "this.style.display='none'");
					mapAside3NavigationContent.appendChild(mapAside3NavigationInnerContent);
					mapAside3NavigationInnerContent.appendChild(mapAside3NavigationInnerImg);
					mapAside3NavigationInnerContent.appendChild(mapAside3NavigationInnerText);
				}
			}
		}
		mapAside3MapUp.style.display = "none";
		mapAside3MapLeft.style.display = "none";
		mapAside3MapRight.style.display = "none";
		mapAside3MapDown.style.display = "none";
		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "Name"] == finaldataLocation[this.value][JSONPath_Location + "_" + "Name"]) {
				if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "North"] != undefined) {
					mapAside3MapUp.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "North"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "North"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapUpMain.appendChild(btn);
					}
				} else {
					mapAside3MapUp.style.display = "none";
				}
				if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "West"] != undefined) {
					mapAside3MapLeft.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "West"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "West"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapLeftMain.appendChild(btn);
					}
				} else {
					mapAside3MapLeft.style.display = "none";
				}
				if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "East"] != undefined) {
					mapAside3MapRight.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "East"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "East"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapRightMain.appendChild(btn);
					}
				} else {
					mapAside3MapRight.style.display = "none";
				}
				if(finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "South"] != undefined) {
					mapAside3MapDown.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "South"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection + "_" + "South"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapDownMain.appendChild(btn);
					}
				} else {
					mapAside3MapDown.style.display = "none";
				}
			}
		}
		var mapAside3MapMarkImg = document.createElement("img");
		mapAside3MapMarkImg.src = "./media/Images/Misc/Map/" + MEDIAPath_Map + "/Mark/" + finaldataLocation[this.value][JSONPath_Location + "_" + "Name"] + ".png";
		mapAside3MapMarkImg.classList.add("map-img-mark");
		mapAside3MapMarkImg.setAttribute("onerror", "this.src='./media/Images/Misc/FinalDex/Error2.png';this.classList.remove('map-img-mark');this.classList.add('map-img-error');");
		mapAside3MapMark.appendChild(mapAside3MapMarkImg);
	}
}

function mapDescriptionSelector() {
	var mapDescriptionOuters = document.querySelectorAll('#map-description base[name]');
	var mapDescriptionOuter = document.querySelectorAll('#map-description base[name="' + this.value + '"]');
	for(var y = 0; y < mapDescriptionOuters.length; y++) {
		mapDescriptionOuters[y].style.display = "none";
	}
	for(var y = 0; y < mapDescriptionOuter.length; y++) {
		mapDescriptionOuter[y].style.display = "block";
	}
}
$('.zoom-fullscreen').click(function(e) {
	$('#map-contain').toggleClass('fullscreen');
	$('.zoom-fullscreen').toggleClass('fullscreen');
});
$(document).keydown(function(keyPressed) {
	if(keyPressed.keyCode == 27) {
		$('#map-contain').removeClass('fullscreen');
		$('.zoom-fullscreen').removeClass('fullscreen');
	}
});
$('#map-panzoom').mousedown(function(b) {
	if(b.which == 1) {} else if(b.which == 2) {
		$('#map-contain').toggleClass('fullscreen');
		$('.zoom-fullscreen').toggleClass('fullscreen');
	} else if(b.which == 3) {}
});
$("#map-panzoom").mousewheel(function(turn, delta) {
	if(delta == 1) $('.zoom-in').click();
	else $('.zoom-out').click();
	return false;
});
$("#map-panzoom").dblclick(function() {
	$('.zoom-in').click();
});

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
			}, 300);
		}
	};
}
$("#map-panzoom").contextmenu(doubleClicker(function(e) {
	$('.zoom-out').click();
}));
zoomReset();
$('body').click(function(event) {
	if(!$(event.target).closest('.map-up').length && !$(event.target).is('.map-up')) {
		$(".map-up").css("transform", "translateY(-50px)");
	}
	if(!$(event.target).closest('.map-down').length && !$(event.target).is('.map-down')) {
		$(".map-down").css("transform", "translateY(50px)");
	}
	if(!$(event.target).closest('.map-left').length && !$(event.target).is('.map-left')) {
		$(".map-left").css("transform", "translateX(-150px)");
	}
	if(!$(event.target).closest('.map-right').length && !$(event.target).is('.map-right')) {
		$(".map-right").css("transform", "translateX(150px)");
	}
});
var mapup = document.getElementsByClassName("map-up-toggle");
var i;
for(i = 0; i < mapup.length; i++) {
	mapup[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var mapupouter = this.parentElement;
		if(mapupouter.style.transform === "translateY(0px)") {
			mapupouter.style.transform = "translateY(-50px)";
		} else {
			mapupouter.style.transform = "translateY(0px)";
		}
	});
}
var mapdown = document.getElementsByClassName("map-down-toggle");
var i;
for(i = 0; i < mapdown.length; i++) {
	mapdown[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var mapdownouter = this.parentElement;
		if(mapdownouter.style.transform === "translateY(0px)") {
			mapdownouter.style.transform = "translateY(50px)";
		} else {
			mapdownouter.style.transform = "translateY(0px)";
		}
	});
}
var mapleft = document.getElementsByClassName("map-left-toggle");
var i;
for(i = 0; i < mapleft.length; i++) {
	mapleft[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var mapleftouter = this.parentElement;
		if(mapleftouter.style.transform === "translateX(0px)") {
			mapleftouter.style.transform = "translateX(-150px)";
		} else {
			mapleftouter.style.transform = "translateX(0px)";
		}
	});
}
var mapright = document.getElementsByClassName("map-right-toggle");
var i;
for(i = 0; i < mapright.length; i++) {
	mapright[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var maprightouter = this.parentElement;
		if(maprightouter.style.transform === "translateX(0px)") {
			maprightouter.style.transform = "translateX(150px)";
		} else {
			maprightouter.style.transform = "translateX(0px)";
		}
	});
}

function mapCancel() {
	var mapCancelInput = document.querySelectorAll('#map-options input:checked');
	for(var q = 0; q < mapCancelInput.length; q++) {
		mapCancelInput[q].checked = false;
	}
	var mapMark = document.querySelectorAll('.info-img-mark');
	for(var q = 0; q < mapMark.length; q++) {
		mapMark[q].style.display = "none";
	}
}

function zoomReset() {
	$('#zoom-reset').click();
}

(function() {
	$('#map-panzoom').panzoom({
		$zoomIn: $(".zoom-in"),
		$zoomOut: $(".zoom-out"),
		$reset: $("#zoom-reset"),
		startTransform: 'scale(1)',
		duration: 200,
		easing: 'ease-in-out',
		increment: 0.5,
		minScale: 1,
		contain: 'invert'
	}).panzoom('zoom');
})();