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
	mapAside2TitleText.innerText = "Map of "+Region.replaceAll(","," & ");
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
	mapAside3MapPanzoom.setAttribute("name", Region+"-"+MEDIAPath_Map);
	mapAside3MapMark.classList.add("map-img-mark-outer");
	mapAside3MapImage.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png";
	mapAside3MapImage.onload = function() {
		mapAside3MapImage.setAttribute("width", mapAside3MapImage.width+"px");
		mapAside3MapImage.setAttribute("height", mapAside3MapImage.height+"px");
	}
	mapAside3MapImage.classList.add("map-img-main");
	mapAside3MapImage.setAttribute("usemap", "#"+Region+"-"+MEDIAPath_Map+"-map");
	mapAside3MapCordinateOuter.setAttribute("id", Region+"-"+MEDIAPath_Map+"-map");
	mapAside3MapCordinateOuter.setAttribute("name", Region+"-"+MEDIAPath_Map+"-map");
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
    mapAside2GameImage.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")+".png";
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

	var mapAside4DescriptionOview = document.createElement("base");
	mapAside4DescriptionOview.setAttribute("id", "map-description-oview");
	mapAside4DescriptionOview.setAttribute("name", "Overview");
	mapAside4Description.appendChild(mapAside4DescriptionOview);

	var mapAside4DescriptionOviewHeader = document.createElement("span");
	var mapAside4DescriptionOviewHeaderText = document.createElement("h4");
	mapAside4DescriptionOviewHeaderText.innerText = "B1F";
	mapAside4DescriptionOview.appendChild(mapAside4DescriptionOviewHeader);
	mapAside4DescriptionOviewHeader.appendChild(mapAside4DescriptionOviewHeaderText);

	var mapAside4DescriptionOviewSelectorOuter = document.createElement("div");
	mapAside4DescriptionOview.appendChild(mapAside4DescriptionOviewSelectorOuter);

	var mapAside4DescriptionOviewButtonLeft = document.createElement("span");
	var mapAside4DescriptionOviewButtonLeftButton = document.createElement("button");
	mapAside4DescriptionOviewButtonLeftButton.innerText = "‹";
	mapAside4DescriptionOviewButtonLeftButton.value = 0;
	mapAside4DescriptionOviewSelectorOuter.appendChild(mapAside4DescriptionOviewButtonLeft);
	mapAside4DescriptionOviewButtonLeft.appendChild(mapAside4DescriptionOviewButtonLeftButton);
	mapAside4DescriptionOviewButtonLeftButton.style.display = "none";
	mapAside4DescriptionOviewButtonLeftButton.addEventListener("click", overviewMove);


	var mapAside4DescriptionOviewSelector = document.createElement("div");
	mapAside4DescriptionOviewSelectorOuter.appendChild(mapAside4DescriptionOviewSelector);


	var testimgs = ["Mistralton City Spring B","Celestial Tower 2F BW","Relic Castle B4F R BW","Twist Mountain Route 7 Autumn BW"]
	for (var q = 0; q < testimgs.length; q++) {
		var mapAside4DescriptionOviewImageInner = document.createElement("span");
		var mapAside4DescriptionOviewImage = document.createElement("img");
		mapAside4DescriptionOviewImageInner.setAttribute("name",q);
		mapAside4DescriptionOviewImage.src = "./media/Images/Location/Overworld/BW/"+testimgs[q]+".png";
		mapAside4DescriptionOviewSelector.appendChild(mapAside4DescriptionOviewImageInner);
		mapAside4DescriptionOviewImageInner.appendChild(mapAside4DescriptionOviewImage);
		//mapAside4DescriptionOviewImage.setAttribute("onerror","this.parentElement.remove()")
		if (q == 0) {
			mapAside4DescriptionOviewImageInner.classList.add("open")
		}
	}

	var mapAside4DescriptionOviewButtonRight = document.createElement("span");
	var mapAside4DescriptionOviewButtonRightButton = document.createElement("button");
	mapAside4DescriptionOviewButtonRightButton.innerText = "›";
	mapAside4DescriptionOviewButtonRightButton.value = 0;
	mapAside4DescriptionOviewSelectorOuter.appendChild(mapAside4DescriptionOviewButtonRight);
	mapAside4DescriptionOviewButtonRight.appendChild(mapAside4DescriptionOviewButtonRightButton);
	mapAside4DescriptionOviewButtonRightButton.addEventListener("click", overviewMove);

	var mapAside4DescriptionOviewDescription = document.createElement("span");
	var mapAside4DescriptionOviewDescriptionText = document.createElement("p");
	mapAside4DescriptionOviewDescriptionText.innerText = "Acuity Lakefront is an area in Pokémon Diamond, Pearl, and Platinum. It is located directly outside Lake Acuity, and connects Route 217 to Snowpoint City. Acuity Lakefront has the same Pokémon and music as Route 217. Despite being similar to Route 217, Eevee will not evolve into Glaceon here.";
	mapAside4DescriptionOview.appendChild(mapAside4DescriptionOviewDescription);
	mapAside4DescriptionOviewDescription.appendChild(mapAside4DescriptionOviewDescriptionText);


	var mapAside4DescriptionPok = document.createElement("base");
	mapAside4DescriptionPok.setAttribute("id", "map-description-pok");
	mapAside4DescriptionPok.setAttribute("name", "Pokémon");
	mapAside4Description.appendChild(mapAside4DescriptionPok);

	var mapAside4DescriptionItem = document.createElement("base");
	mapAside4DescriptionItem.setAttribute("id", "map-description-item");
	mapAside4DescriptionItem.setAttribute("name", "Items");
	mapAside4Description.appendChild(mapAside4DescriptionItem);


	var mapAside4DescriptionTrainer = document.createElement("base");
	mapAside4DescriptionTrainer.setAttribute("id", "map-description-trainer");
	mapAside4DescriptionTrainer.setAttribute("name", "Trainers");
	mapAside4Description.appendChild(mapAside4DescriptionTrainer);

	var mapAside4DescriptionTutor = document.createElement("base");
	mapAside4DescriptionTutor.setAttribute("id", "map-description-tutor");
	mapAside4DescriptionTutor.setAttribute("name", "Move Tutor");
	mapAside4Description.appendChild(mapAside4DescriptionTutor);

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
		mapAside1OptionsInput.setAttribute("id", "map-options-"+q);
		mapAside1OptionsInput.setAttribute("autocomplete", "off");
		mapAside1OptionsInput.value = q;
		mapAside1OptionsLabel.setAttribute("for", "map-options-"+q);
		mapAside1OptionsLabel.setAttribute("name", "medium");
		mapAside1OptionsLabel.setAttribute("data-search-name", finaldataLocation[q][JSONPath_Location+"_"+"Name"].toLowerCase());
		mapAside1OptionsLabel.innerText = finaldataLocation[q][JSONPath_Location+"_"+"Name"];
		mapAside1Options.appendChild(mapAside1OptionsInput);
		mapAside1Options.appendChild(mapAside1OptionsLabel);
		mapAside1OptionsInput.addEventListener("click", mapOptionsSelector);
		mapAside1OptionsLabel.setAttribute("tabindex",q+10);
		mapAside1OptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;mapOptionsSelector(event.target.previousElementSibling.value);}}});
		if(q == 0) {
			mapAside1OptionsLabel.click();
		}
	}

	function mapOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
		var location = finaldataLocation[i][JSONPath_Location+"_"+"Name"];
		var trainers = getLocationTrainers(location);
		var items = [];
		var poks = [];
		var tutors = [];
		items = getLocationItems(location);
		poks = getLocationPokémon(location);
		tutors = getTutorData(location,"Location");


		var mapDescriptionTitles = ["Overview", "Pokémon", "Items", "Trainers", "Move Tutor"];

		if (trainers.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Trainers"));
		}
		if (items.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Items"));
		}
		if (poks.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Pokémon"));
		}
		if (tutors.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Move Tutor"));
		}

		var titles = DescriptionSelectorOuter.querySelectorAll(":scope > div");
		for(var q = 0; q < titles.length; q++) {
			titles[q].remove();
		}

		for(var q = 0; q < mapDescriptionTitles.length; q++) {
			var DescriptionSelector = document.createElement("div");
			var DescriptionSelectorInput = document.createElement("input");
			var DescriptionSelectorLabel = document.createElement("label");
			DescriptionSelectorInput.setAttribute("type", "radio");
			DescriptionSelectorInput.setAttribute("name", "map-description-selector");
			DescriptionSelectorInput.setAttribute("id", "map-description-selector-"+q);
			DescriptionSelectorInput.setAttribute("autocomplete", "off");
			DescriptionSelectorInput.setAttribute("value", mapDescriptionTitles[q]);
			DescriptionSelectorLabel.setAttribute("for", "map-description-selector-"+q);
			DescriptionSelectorLabel.innerText = mapDescriptionTitles[q];
			DescriptionSelectorOuter.appendChild(DescriptionSelector);
			DescriptionSelector.appendChild(DescriptionSelectorInput);
			DescriptionSelector.appendChild(DescriptionSelectorLabel);
			DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);
			if (q == 0) {
				DescriptionSelectorInput.setAttribute("checked","")
				var mapDescriptionOuters = document.querySelectorAll('#map-description base[name]');
				var mapDescriptionOuter = document.querySelectorAll('#map-description base[name="'+mapDescriptionTitles[q]+'"]');
				for(var y = 0; y < mapDescriptionOuters.length; y++) {
					mapDescriptionOuters[y].style.display = "none";
				}
				for(var y = 0; y < mapDescriptionOuter.length; y++) {
					mapDescriptionOuter[y].style.removeProperty("display");
				}
			}
		}

		var input = DescriptionSelectorOuter.querySelector(':scope > div input[value="'+mapSelectorVal[0]+'"]');

		if(input != undefined) {
			input.click();
		}



		for(var q = 0; q < items.length; q++) {
			if (items[q]["Area"] == undefined) {
				items[q]["Area"] = "a";
			}
		}

		items = sortObjectArray(items, "Area");

		for(var q = 0; q < items.length; q++) {
			if (items[q]["Area"] == "a") {
				items[q]["Area"] = location;
			}
		}

		var itemArea = [];
		for(var q = 0; q < items.length; q++) {
			itemArea.push(items[q]["Area"]);
		}
		itemArea = [...new Set(itemArea)];

		var uls = mapAside4DescriptionItem.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

		for(var q = 0; q < itemArea.length; q++) {
			var ul;
			ul = mapAside4DescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			if (ul == null) {
				var mapAside4DescriptionItemUl = document.createElement("ul");
				mapAside4DescriptionItem.appendChild(mapAside4DescriptionItemUl);
				var mapAside4DescriptionItemUlTitle = document.createElement("h4");
				mapAside4DescriptionItemUl.appendChild(mapAside4DescriptionItemUlTitle);
				mapAside4DescriptionItemUl.setAttribute("name",itemArea[q])
				mapAside4DescriptionItemUlTitle.innerText = itemArea[q];
			}
			ul = mapAside4DescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			for(var u = 0; u < items.length; u++) {
				if (items[u]["Area"] == itemArea[q]) {
					var mapAside4DescriptionItemLi = document.createElement("li");
					var mapAside4DescriptionItemIconOuter = document.createElement("div");
					mapAside4DescriptionItemIconOuter.setAttribute("name","Item");
					mapAside4DescriptionItemIconOuter.setAttribute("value",items[u]["Item"])
					ul.appendChild(mapAside4DescriptionItemLi);
					mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemIconOuter);
					mapAside4DescriptionItemIconOuter.addEventListener("click",dataRedirect)

					for(var y = 0; y < items[u]["Quantity"]; y++) {
						var mapAside4DescriptionItemIcon = document.createElement("img");
						mapAside4DescriptionItemIcon.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+items[u]["Icon"]+".png";
						mapAside4DescriptionItemIcon.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
						if (items[u]["Quantity"] == 1) {
							mapAside4DescriptionItemIcon.setAttribute("title",items[u]["Item"]);
						}
						else {
							mapAside4DescriptionItemIcon.setAttribute("title",items[u]["Quantity"]+"x "+items[u]["Item"]);
						}
						mapAside4DescriptionItemIconOuter.appendChild(mapAside4DescriptionItemIcon);
					}

					if (items[u]["Location Description"] != undefined) {
						var mapAside4DescriptionItemLocationOuter = document.createElement("span");
						var mapAside4DescriptionItemLocation = document.createElement("p");
						mapAside4DescriptionItemLocation.innerText = items[u]["Location Description"];
						mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemLocationOuter);
						mapAside4DescriptionItemLocationOuter.appendChild(mapAside4DescriptionItemLocation);
					}
				}
			}
		}



		for(var q = 0; q < poks.length; q++) {
			if (poks[q]["Area"] == undefined) {
				poks[q]["Area"] = "a";
			}
		}

		poks = sortObjectArray(poks, "Area");

		for(var q = 0; q < poks.length; q++) {
			if (poks[q]["Area"] == "a") {
				poks[q]["Area"] = location;
			}
		}

		var pokArea = [];
		for(var q = 0; q < poks.length; q++) {
			pokArea.push(poks[q]["Area"]);
		}
		pokArea = [...new Set(pokArea)];


		var uls = mapAside4DescriptionPok.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}


		for(var q = 0; q < pokArea.length; q++) {
			var ul;
			ul = mapAside4DescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			if (ul == null) {
				var mapAside4DescriptionPokUl = document.createElement("ul");
				mapAside4DescriptionPok.appendChild(mapAside4DescriptionPokUl);
				var mapAside4DescriptionPokUlTitle = document.createElement("h4");
				mapAside4DescriptionPokUl.appendChild(mapAside4DescriptionPokUlTitle);
				mapAside4DescriptionPokUl.setAttribute("name",pokArea[q])
				mapAside4DescriptionPokUlTitle.innerText = pokArea[q];
			}
			ul = mapAside4DescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			for(var u = 0; u < poks.length; u++) {
				if (poks[u]["Area"] == pokArea[q]) {
					var mapAside4DescriptionPokLi = document.createElement("li");
					ul.appendChild(mapAside4DescriptionPokLi);

					var mapAside4DescriptionPokIconOuter = document.createElement("div");
					var mapAside4DescriptionPokIconText = document.createElement("p");
					var mapAside4DescriptionPokIcon = document.createElement("img");
					mapAside4DescriptionPokIcon.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(poks[u]["Pokémon"])+".png";
					mapAside4DescriptionPokIcon.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					mapAside4DescriptionPokIcon.setAttribute("title",poks[u]["Pokémon"]);
					mapAside4DescriptionPokIcon.setAttribute("value",getPokémonInt(poks[u]["Pokémon"]));
					mapAside4DescriptionPokIconText.innerText = poks[u]["Pokémon"];
					mapAside4DescriptionPokIconOuter.appendChild(mapAside4DescriptionPokIcon);
					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokIconOuter);

					mapAside4DescriptionPokIcon.addEventListener("click",modalData)
					

					var mapAside4DescriptionPokLvl = document.createElement("span");
					var mapAside4DescriptionPokLvlText = document.createElement("p");
					mapAside4DescriptionPokLvlText.innerText = "Lvl. "+poks[u]["Level"];
					mapAside4DescriptionPokLvlText.title = "Level";
					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokLvl);
					mapAside4DescriptionPokLvl.appendChild(mapAside4DescriptionPokLvlText);

					var mapAside4DescriptionPokRate = document.createElement("span");
					var mapAside4DescriptionPokRateText = document.createElement("p");
					mapAside4DescriptionPokRateText.title = "Rate";
					if (poks[u]["Rate"].includes(",")) {
						mapAside4DescriptionPokRateText.innerHTML = poks[u]["Rate"].replaceAll(",","\n").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">');
					}
					else {
						mapAside4DescriptionPokRateText.innerHTML = poks[u]["Rate"];
					}
					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokRate);
					mapAside4DescriptionPokRate.appendChild(mapAside4DescriptionPokRateText);


					var mapAside4DescriptionPokType = document.createElement("span");
					var mapAside4DescriptionPokTypeImage = document.createElement("img");
					mapAside4DescriptionPokTypeImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+poks[u]["Type Icon"]+".png";
					mapAside4DescriptionPokTypeImage.title = poks[u]["Type Name"];
					mapAside4DescriptionPokTypeImage.setAttribute("onerror", "this.style.display='none'");
					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokType);
					mapAside4DescriptionPokType.appendChild(mapAside4DescriptionPokTypeImage);


				}
			}
		}




		for(var q = 0; q < tutors.length; q++) {
			if (tutors[q]["Area"] == undefined) {
				tutors[q]["Area"] = "a";
			}
		}

		tutors = sortObjectArray(tutors, "Area");

		for(var q = 0; q < tutors.length; q++) {
			if (tutors[q]["Area"] == "a") {
				tutors[q]["Area"] = location;
			}
		}

		var tutorArea = [];
		for(var q = 0; q < tutors.length; q++) {
			tutorArea.push(tutors[q]["Area"]);
		}
		tutorArea = [...new Set(tutorArea)];

		var uls = mapAside4DescriptionTutor.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

		for(var q = 0; q < tutorArea.length; q++) {
			var ul;
			ul = mapAside4DescriptionTutor.querySelector(':scope > ul[name="'+tutorArea[q]+'"]');

			if (ul == null) {
				var mapAside4DescriptionTutorUl = document.createElement("ul");
				mapAside4DescriptionTutor.appendChild(mapAside4DescriptionTutorUl);
				var mapAside4DescriptionTutorUlTitle = document.createElement("h4");
				mapAside4DescriptionTutorUl.appendChild(mapAside4DescriptionTutorUlTitle);
				mapAside4DescriptionTutorUl.setAttribute("name",tutorArea[q])
				mapAside4DescriptionTutorUlTitle.innerText = tutorArea[q];
			}
			ul = mapAside4DescriptionTutor.querySelector(':scope > ul[name="'+tutorArea[q]+'"]');

			for(var u = 0; u < tutors.length; u++) {
				if (tutors[u]["Area"] == tutorArea[q]) {
					var mapAside4DescriptionTutorLi = document.createElement("li");
					ul.appendChild(mapAside4DescriptionTutorLi);

					var mapAside4DescriptionTutorMove = document.createElement("span");
					var mapAside4DescriptionTutorMoveText = document.createElement("h4");
					mapAside4DescriptionTutorMoveText.innerText = tutors[u]["Move"];
					mapAside4DescriptionTutorMoveText.setAttribute("name","Move");
					mapAside4DescriptionTutorMoveText.title = formatMoveData(tutors[u]["Move"]);
					mapAside4DescriptionTutorMoveText.style.color = "var(--type"+getMoveData(tutors[u]["Move"],"Type")+")";
					mapAside4DescriptionTutorLi.appendChild(mapAside4DescriptionTutorMove);
					mapAside4DescriptionTutorMove.appendChild(mapAside4DescriptionTutorMoveText);
					mapAside4DescriptionTutorMoveText.addEventListener("click",dataRedirect);

					if (tutors[u]["Requirement"] != undefined || tutors[u]["Cost"] != undefined || tutors[u]["Rate"] != undefined || tutors[u]["Time"]) {
						var mapAside4DescriptionTutorAdditional = document.createElement("span");
						mapAside4DescriptionTutorLi.appendChild(mapAside4DescriptionTutorAdditional);
					}

					if (tutors[u]["Requirement"] != undefined) {
						var mapAside4DescriptionTutorReq = document.createElement("span");
						var mapAside4DescriptionTutorReqHeader = document.createElement("h5");
						var mapAside4DescriptionTutorReqText = document.createElement("p");
						mapAside4DescriptionTutorReqHeader.innerText = "Requires:";
						mapAside4DescriptionTutorReqText.innerText = tutors[u]["Requirement"];
						mapAside4DescriptionTutorAdditional.appendChild(mapAside4DescriptionTutorReq);
						mapAside4DescriptionTutorReq.appendChild(mapAside4DescriptionTutorReqHeader);
						mapAside4DescriptionTutorReq.appendChild(mapAside4DescriptionTutorReqText);
					}

					if (tutors[u]["Time"] != undefined) {
						var mapAside4DescriptionTutorTime = document.createElement("span");
						var mapAside4DescriptionTutorTimeHeader = document.createElement("h5");
						var mapAside4DescriptionTutorTimeText = document.createElement("p");
						mapAside4DescriptionTutorTimeHeader.innerText = "Time:"
						mapAside4DescriptionTutorTimeText.innerText = tutors[u]["Time"].replaceAll(","," / ");
						mapAside4DescriptionTutorAdditional.appendChild(mapAside4DescriptionTutorTime);
						mapAside4DescriptionTutorTime.appendChild(mapAside4DescriptionTutorTimeHeader);
						mapAside4DescriptionTutorTime.appendChild(mapAside4DescriptionTutorTimeText);
					}

					if (tutors[u]["Rate"] != undefined) {
						var mapAside4DescriptionTutorRate = document.createElement("span");
						var mapAside4DescriptionTutorRateHeader = document.createElement("h5");
						var mapAside4DescriptionTutorRateText = document.createElement("p");
						mapAside4DescriptionTutorRateHeader.innerText = "Available:"
						mapAside4DescriptionTutorRateText.innerText = tutors[u]["Rate"];
						mapAside4DescriptionTutorAdditional.appendChild(mapAside4DescriptionTutorRate);
						mapAside4DescriptionTutorRate.appendChild(mapAside4DescriptionTutorRateHeader);
						mapAside4DescriptionTutorRate.appendChild(mapAside4DescriptionTutorRateText);
					}


					if (tutors[u]["Cost"] != undefined) {
						var mapAside4DescriptionTutorCost = document.createElement("span");
						var mapAside4DescriptionTutorCostHeader = document.createElement("h5");
						var mapAside4DescriptionTutorCostText = document.createElement("p");
						mapAside4DescriptionTutorCostHeader.innerText = "Cost:";
						mapAside4DescriptionTutorCostText.innerHTML = tutors[u]["Cost"].replaceAll(",","\n").replaceAll(" Yellow Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Yellow Shard.png">').replaceAll(" Red Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Red Shard.png">').replaceAll(" Blue Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Blue Shard.png">').replaceAll(" Green Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Green Shard.png">');
						mapAside4DescriptionTutorAdditional.appendChild(mapAside4DescriptionTutorCost);
						mapAside4DescriptionTutorCost.appendChild(mapAside4DescriptionTutorCostHeader);
						mapAside4DescriptionTutorCost.appendChild(mapAside4DescriptionTutorCostText);
					}


			
				}
			}
		}





		mapAside2TitleText.innerText = location;
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
			if(finaldataLocationSlogan[q][JSONPath_LocationSlogan+"_"+"Name"] == location) {
				mapAside2FlavorText.innerHTML = '"'+finaldataLocationSlogan[q][JSONPath_LocationSlogan+"_"+"Slogan"]+'"';
			}
		}
		var subs = mapAside3AreaContent.querySelectorAll(":scope > p");
		for(var q = 0; q < subs.length; q++) {
			subs[q].remove();
		}
		mapAside3AreaTitle.innerText = "Sub Area/Location";
		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Name"] == location && finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"] != undefined) {
				for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",").length; u++) {
					var mapAside3AreaText = document.createElement("p");
					mapAside3AreaTitle.innerText = "Location";
					mapAside3AreaText.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",")[u];
					mapAside3AreaContent.appendChild(mapAside3AreaText);
					mapAside3AreaText.setAttribute("name", "map");
					mapAside3AreaText.addEventListener("click", dataRedirect);
				}
			}
		}
		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"] != undefined) {
				for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",").length; u++) {
					if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",")[u] == location) {
						var mapAside3AreaText = document.createElement("p");
						mapAside3AreaTitle.innerText = "Sub Areas";
						mapAside3AreaText.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Name"];
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
			if(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Name"] == location && finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Name"] != undefined) {
				for(var u = 0; u < finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",").length; u++) {
					var mapAside3NavigationInnerContent = document.createElement("span")
					var mapAside3NavigationInnerImg = document.createElement("img");
					var mapAside3NavigationInnerText = document.createElement("p");
					mapAside3NavigationInnerText.innerText = finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u];
					if(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Cut" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Strength") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Normal"+".png";
					} else if(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Waterfall" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Surf" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Dive" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Whirlpool") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Water"+".png";
					} else if(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Rock Smash" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Rock Climb") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Fighting"+".png";
					} else if(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Defog") {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Flying"+".png";
					} else {
						mapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u]+".png";
					}
					mapAside3NavigationInnerImg.setAttribute("title", finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u]);
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
			if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Name"] == location) {
				if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"North"] != undefined) {
					mapAside3MapUp.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"North"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"North"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapUpMain.appendChild(btn);
					}
				} else {
					mapAside3MapUp.style.display = "none";
				}
				if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"West"] != undefined) {
					mapAside3MapLeft.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"West"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"West"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapLeftMain.appendChild(btn);
					}
				} else {
					mapAside3MapLeft.style.display = "none";
				}
				if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"East"] != undefined) {
					mapAside3MapRight.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"East"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"East"].split(",")[u];
						btn.setAttribute("name", "map");
						btn.addEventListener("click", dataRedirect);
						mapAside3MapRightMain.appendChild(btn);
					}
				} else {
					mapAside3MapRight.style.display = "none";
				}
				if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"South"] != undefined) {
					mapAside3MapDown.style.display = "unset";
					for(var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"South"].split(",").length; u++) {
						var btn = document.createElement("button");
						btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"South"].split(",")[u];
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
		mapAside3MapMarkImg.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Mark/"+location+".png";
		mapAside3MapMarkImg.classList.add("map-img-mark");
		mapAside3MapMarkImg.setAttribute("onerror", "this.src='./media/Images/Misc/FinalDex/Error2.png';this.classList.remove('map-img-mark');this.classList.add('map-img-error');");
		mapAside3MapMark.appendChild(mapAside3MapMarkImg);







		
	var uls = document.querySelectorAll("#map-description-trainer > ul");
	for(var q = 0; q < uls.length; q++) {
		uls[q].remove();
	}


	for(var q = 0; q < trainers.length; q++) {
		var trainerName = trainers[q]["Name"];
		var trainerClass = trainers[q]["Class"];
		var trainerImage = trainers[q]["Image"];
		var trainerItems = trainers[q]["Items"];
		var trainerGender = trainers[q]["Gender"];
		var trainerReward = trainers[q]["Reward"];
		var trainerReq = trainers[q]["Requirement"];
		var trainerExtra = trainers[q]["Extra"];
		var trainerMatch = trainers[q]["Match"];
		var trainerInfo = trainers[q]["Information"];

		var trainerPrevious = undefined;
		var trainerNext = undefined;

		if (q != 0) {
			trainerPrevious = trainers[q-1];
		}
		if (q != ((trainers.length)-1)) {
			trainerNext = trainers[q+1];
		}


		var mapAside4DescriptionTrainerUl = document.createElement("ul");
		var mapAside4DescriptionTrainerUlTop = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopCountOuter = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopImgOuter = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopImgPrevious = document.createElement("span");
		var mapAside4DescriptionTrainerUlTopImgPreviousImage = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopImgCurrent = document.createElement("span");
		var mapAside4DescriptionTrainerUlTopImgCurrentImage = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopImgNext = document.createElement("span");
		var mapAside4DescriptionTrainerUlTopImgNextImage = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopTitle = document.createElement("div");
		var mapAside4DescriptionTrainerUlTopTitleCount = document.createElement("span");
		var mapAside4DescriptionTrainerUlTopTitleCountImg = document.createElement("img");
		var mapAside4DescriptionTrainerUlTopTitleName = document.createElement("h4");
		var mapAside4DescriptionTrainerUlTopTitleValue = document.createElement("h5");
		var mapAside4DescriptionTrainerUlContent = document.createElement("div");
		mapAside4DescriptionTrainerUl.setAttribute("name", q);
		mapAside4DescriptionTrainerUlTop.setAttribute("id", "map-description-trainer-top");
		mapAside4DescriptionTrainerUlTopCountOuter.setAttribute("id", "map-description-trainer-top-count");
		mapAside4DescriptionTrainerUlTopImgOuter.setAttribute("id", "map-description-trainer-top-img");
		mapAside4DescriptionTrainerUlTopImgPreviousImage.setAttribute("name", parseInt(q) - 1);
		mapAside4DescriptionTrainerUlTopImgCurrentImage.src = "./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+trainerImage+".png";
		mapAside4DescriptionTrainerUlTopImgCurrentImage.setAttribute("name", parseInt(q));
		mapAside4DescriptionTrainerUlTopImgNextImage.setAttribute("name", parseInt(q)+1);		

		if (trainerInfo != undefined) {
			mapAside4DescriptionTrainerUlTopImgCurrentImage.title = trainerInfo;
			mapAside4DescriptionTrainerUlTopImgCurrentImage.style.cursor = "help";
		}

		if(trainerPrevious != undefined) {
			mapAside4DescriptionTrainerUlTopImgPreviousImage.src = "./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+trainerPrevious["Image"]+".png";
			mapAside4DescriptionTrainerUlTopImgPreviousImage.title = trainers[q-1]["Class"]+"\n"+trainers[q-1]["Name"];
		}
		else {
			mapAside4DescriptionTrainerUlTopImgPrevious.style.visibility = "hidden";
			mapAside4DescriptionTrainerUlTopImgPrevious.style.pointerEvents = "none";
		}
		if(trainerNext != undefined) {
			mapAside4DescriptionTrainerUlTopImgNextImage.src = "./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+trainerNext["Image"]+".png";
			mapAside4DescriptionTrainerUlTopImgNextImage.title = trainers[q+1]["Class"]+"\n"+trainers[q+1]["Name"];
		}
		else {
			mapAside4DescriptionTrainerUlTopImgNext.style.visibility = "hidden";
			mapAside4DescriptionTrainerUlTopImgNext.style.pointerEvents = "none";
		}

		mapAside4DescriptionTrainerUlTopImgPreviousImage.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		mapAside4DescriptionTrainerUlTopImgCurrentImage.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		mapAside4DescriptionTrainerUlTopImgNextImage.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		mapAside4DescriptionTrainerUlTopTitle.setAttribute("id", "map-description-trainer-top-title");
		mapAside4DescriptionTrainerUlTopTitleName.innerText = trainerClass+"\n"+trainerName;

		if (trainerReq != undefined) {
			mapAside4DescriptionTrainerUlTopTitleName.title = trainerReq;
			mapAside4DescriptionTrainerUlTopTitleName.setAttribute("name","add");
		}

		mapAside4DescriptionTrainerUlTopTitleValue.innerHTML = trainerReward;
		mapAside4DescriptionTrainerUlTopTitleValue.innerHTML = mapAside4DescriptionTrainerUlTopTitleValue.innerHTML.replaceAll("PokéDollar",'<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" />');
		mapAside4DescriptionTrainerUlContent.setAttribute("id", "map-description-trainer-bottom");
		mapAside4DescriptionTrainer.appendChild(mapAside4DescriptionTrainerUl);
		mapAside4DescriptionTrainerUl.appendChild(mapAside4DescriptionTrainerUlTop);
		mapAside4DescriptionTrainerUlTop.appendChild(mapAside4DescriptionTrainerUlTopCountOuter);
		mapAside4DescriptionTrainerUlTop.appendChild(mapAside4DescriptionTrainerUlTopImgOuter);
		mapAside4DescriptionTrainerUlTopImgOuter.appendChild(mapAside4DescriptionTrainerUlTopImgPrevious);
		mapAside4DescriptionTrainerUlTopImgPrevious.appendChild(mapAside4DescriptionTrainerUlTopImgPreviousImage);
		mapAside4DescriptionTrainerUlTopImgOuter.appendChild(mapAside4DescriptionTrainerUlTopImgCurrent);
		mapAside4DescriptionTrainerUlTopImgCurrent.appendChild(mapAside4DescriptionTrainerUlTopImgCurrentImage);
		mapAside4DescriptionTrainerUlTopImgOuter.appendChild(mapAside4DescriptionTrainerUlTopImgNext);
		mapAside4DescriptionTrainerUlTopImgNext.appendChild(mapAside4DescriptionTrainerUlTopImgNextImage);
		mapAside4DescriptionTrainerUlTop.appendChild(mapAside4DescriptionTrainerUlTopTitle);
		mapAside4DescriptionTrainerUlTopTitle.appendChild(mapAside4DescriptionTrainerUlTopTitleCount);
		mapAside4DescriptionTrainerUlTopTitleCount.appendChild(mapAside4DescriptionTrainerUlTopTitleCountImg);
		mapAside4DescriptionTrainerUlTopTitle.appendChild(mapAside4DescriptionTrainerUlTopTitleName);
		mapAside4DescriptionTrainerUlTopTitle.appendChild(mapAside4DescriptionTrainerUlTopTitleValue);
		mapAside4DescriptionTrainerUl.appendChild(mapAside4DescriptionTrainerUlContent);
		mapAside4DescriptionTrainerUlTopImgPreviousImage.addEventListener("click", mapDescriptionTrainerSelector);
		mapAside4DescriptionTrainerUlTopImgCurrentImage.addEventListener("click", mapDescriptionTrainerSelector);
		mapAside4DescriptionTrainerUlTopImgNextImage.addEventListener("click", mapDescriptionTrainerSelector);


		var mapAside4DescriptionTrainerUlTopMatch = document.createElement("span");
		mapAside4DescriptionTrainerUlTopMatch.setAttribute("name","Match");
		mapAside4DescriptionTrainerUlTopCountOuter.appendChild(mapAside4DescriptionTrainerUlTopMatch);

		var mapAside4DescriptionTrainerUlTopCount = document.createElement("h5");
		mapAside4DescriptionTrainerUlTopCount.innerText = (q+1)+"/"+getLocationTrainers(location).length;
		mapAside4DescriptionTrainerUlTopCount.setAttribute("name","Count");
		mapAside4DescriptionTrainerUlTopCountOuter.appendChild(mapAside4DescriptionTrainerUlTopCount);
	
		var mapAside4DescriptionTrainerUlTopItems = document.createElement("span");
		mapAside4DescriptionTrainerUlTopItems.setAttribute("name","Items");
		mapAside4DescriptionTrainerUlTopCountOuter.appendChild(mapAside4DescriptionTrainerUlTopItems);


		if (trainerExtra != undefined) {
			var mapAside4DescriptionTrainerUlTopImgCurrentExtra = document.createElement("img");
			mapAside4DescriptionTrainerUlTopImgCurrentExtra.src = "./media/Images/Misc/FinalDex/"+trainerExtra+".png";
			mapAside4DescriptionTrainerUlTopImgCurrentExtra.title = trainerExtra;
			mapAside4DescriptionTrainerUlTopImgCurrentExtra.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
			mapAside4DescriptionTrainerUlTopImgCurrentExtra.setAttribute("name","Extra");
			mapAside4DescriptionTrainerUlTopImgCurrent.appendChild(mapAside4DescriptionTrainerUlTopImgCurrentExtra);
		}

		if (trainerMatch != undefined) {
			var mapAside4DescriptionTrainerUlTopMatchText = document.createElement("i");
			mapAside4DescriptionTrainerUlTopMatchText.innerText = trainerMatch;
			mapAside4DescriptionTrainerUlTopMatch.appendChild(mapAside4DescriptionTrainerUlTopMatchText);
		}


		if (trainerItems != undefined) {
			var tempItems = [];
			tempItems = trainerItems.split("x ");

			for(var u = 0; u < parseInt(tempItems[0]); u++) {
				var mapAside4DescriptionTrainerUlTopItemsImage = document.createElement("img");
				mapAside4DescriptionTrainerUlTopItemsImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+tempItems[1]+".png";
				mapAside4DescriptionTrainerUlTopItemsImage.title = tempItems.join("x ");
				mapAside4DescriptionTrainerUlTopItemsImage.setAttribute("name","Items");
				mapAside4DescriptionTrainerUlTopItems.appendChild(mapAside4DescriptionTrainerUlTopItemsImage);
			}
		}



		if (trainers[q]["Pokémon"].includes("\n")) {
			var datas = trainers[q]["Pokémon"].split("\n");
			for(var u = 0; u < datas.length; u++) {

				var data = datas[u];
				var pok = undefined;
				var item = undefined;
				var level = undefined;
				var gender = undefined;
				var move = undefined;
				var ability = undefined;
				var iv = undefined;
				var ev = undefined;
				var nature = undefined;

				if(data.includes("|")) {
					data = data.split("|")
					for (var r = 0; r < data.length; r++) {
						if (data[r].split(":")[0] == "pok") {
							pok = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "it") {
							item = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "lv") {
							level = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "ge") {
							gender = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "mo") {
							move = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "ab") {
							ability = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "iv") {
							iv = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "ev") {
							ev = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
						if (data[r].split(":")[0] == "na") {
							nature = data[r].replaceAll(data[r].split(":")[0]+":","")
						}
					}
				}
				else {
					if (data.split(":")[0] == "pok") {
						pok = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "it") {
						item = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "lv") {
						level = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "ge") {
						gender = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "mo") {
						move = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "ab") {
						ability = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "iv") {
						iv = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "ev") {
						ev = data.replaceAll(data.split(":")[0]+":","")
					}
					if (data.split(":")[0] == "na") {
						nature = data.replaceAll(data.split(":")[0]+":","")
					}
				}

				var mapAside4DescriptionTrainerLi = document.createElement("li");
				mapAside4DescriptionTrainerUlContent.appendChild(mapAside4DescriptionTrainerLi);

				mapAside4DescriptionTrainerUlTopTitleCountImg.src = "./media/Images/Misc/FinalDex/TrainerBall"+datas.length+".png";
				
				if (nature != undefined || ability != undefined || level != undefined || gender != undefined) {
					var mapAside4DescriptionTrainerAdditional = document.createElement("div");
					var mapAside4DescriptionTrainerAdditionalInner = document.createElement("span");
					mapAside4DescriptionTrainerAdditional.setAttribute("name", "Additional");
					mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerAdditional);
					mapAside4DescriptionTrainerAdditional.appendChild(mapAside4DescriptionTrainerAdditionalInner);

					if (move == undefined && iv == undefined && ev == undefined) {
						mapAside4DescriptionTrainerAdditional.style.width = "25%";
					}
				
					if (nature != undefined) {
						var mapAside4DescriptionTrainerNature = document.createElement("p");
						mapAside4DescriptionTrainerNature.innerText = nature;
						mapAside4DescriptionTrainerNature.title = "Nature"+"\n"+getNatureTitle(nature);
						mapAside4DescriptionTrainerNature.setAttribute("name","Nature");
						mapAside4DescriptionTrainerAdditionalInner.appendChild(mapAside4DescriptionTrainerNature);
					}

					if (ability != undefined) {
						var mapAside4DescriptionTrainerAbility = document.createElement("p");
						mapAside4DescriptionTrainerAbility.innerText = ability;
						mapAside4DescriptionTrainerAbility.title = getAbilityPosition(getPokémonInt(pok),ability)+" Ability\n"+getAbilityData(ability,"Flavor");
						mapAside4DescriptionTrainerAbility.setAttribute("name","Ability");
						mapAside4DescriptionTrainerAdditionalInner.appendChild(mapAside4DescriptionTrainerAbility);
						mapAside4DescriptionTrainerAbility.addEventListener("click", dataRedirect);
					}
					if (level != undefined) {
						var mapAside4DescriptionTrainerLv = document.createElement("h5");
						if (level.includes("-")) {
							mapAside4DescriptionTrainerLv.innerText = "Lvls. "+level;
						}
						else {
							mapAside4DescriptionTrainerLv.innerText = "Lvl. "+level;
						}
						mapAside4DescriptionTrainerAdditionalInner.appendChild(mapAside4DescriptionTrainerLv);
					}
					if (gender != undefined) {
						var mapAside4DescriptionTrainerGender = document.createElement("span");
						if (gender == "♂") {
							mapAside4DescriptionTrainerGender.setAttribute("title", "Male");
						}
						if(gender == "♀") {
							mapAside4DescriptionTrainerGender.setAttribute("title", "Female");
						}
						if(gender == "☿") {
							mapAside4DescriptionTrainerGender.setAttribute("title", "Genderless");
						}
						mapAside4DescriptionTrainerGender.innerText = gender;
						mapAside4DescriptionTrainerAdditionalInner.appendChild(mapAside4DescriptionTrainerGender);
					}
				}


				var mapAside4DescriptionTrainerPokémon = document.createElement("div");
				var mapAside4DescriptionTrainerPokémonImage = document.createElement("span");
				mapAside4DescriptionTrainerPokémon.setAttribute("name", "Pokémon");
				mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerPokémon);
				mapAside4DescriptionTrainerPokémon.appendChild(mapAside4DescriptionTrainerPokémonImage);

				if (item != undefined) {
					var mapAside4DescriptionTrainerHeldItem = document.createElement("img");
					mapAside4DescriptionTrainerHeldItem.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+item+".png";
					mapAside4DescriptionTrainerHeldItem.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					mapAside4DescriptionTrainerHeldItem.setAttribute("title",item);
					mapAside4DescriptionTrainerHeldItem.setAttribute("name","Item");
					mapAside4DescriptionTrainerHeldItem.setAttribute("value",item);
					mapAside4DescriptionTrainerPokémonImage.appendChild(mapAside4DescriptionTrainerHeldItem);
					mapAside4DescriptionTrainerHeldItem.addEventListener("click", dataRedirect);
				}

				var mapAside4DescriptionTrainerPokémonImageMain = document.createElement("img");
				mapAside4DescriptionTrainerPokémonImageMain.src = "./media/Images/Pokémon/Battle/PNG/Normal/Front/"+ImageType_Path[0]+"/"+getPokémonMediaPath(pok)+".png";
				mapAside4DescriptionTrainerPokémonImageMain.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
				mapAside4DescriptionTrainerPokémonImageMain.setAttribute("title", pok);
				mapAside4DescriptionTrainerPokémonImageMain.setAttribute("value",getPokémonInt(pok));
				mapAside4DescriptionTrainerPokémonImage.appendChild(mapAside4DescriptionTrainerPokémonImageMain);
				mapAside4DescriptionTrainerPokémonImageMain.addEventListener("click", modalData);

				var mapAside4DescriptionTrainerPokémonText = document.createElement("h5");
				mapAside4DescriptionTrainerPokémonText.innerText = pok;
				mapAside4DescriptionTrainerPokémonImage.appendChild(mapAside4DescriptionTrainerPokémonText);

				if (move != undefined || iv != undefined || ev != undefined) {
					var mapAside4DescriptionTrainerData = document.createElement("div");
					mapAside4DescriptionTrainerData.setAttribute("name","Data");
					mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerData);
				}

				if (move != undefined) {
					var moves = undefined;
					var mapAside4DescriptionTrainerMove = document.createElement("div");
					mapAside4DescriptionTrainerMove.setAttribute("name", "Moves");
					mapAside4DescriptionTrainerData.appendChild(mapAside4DescriptionTrainerMove);

					if (move.includes(",")) {
						moves = move.split(",");
					}
					else {
						moves = move;
					}
					for(var y = 0; y < moves.length; y++) {
						var mapAside4DescriptionTrainerMoveText = document.createElement("p");
						mapAside4DescriptionTrainerMoveText.innerText = moves[y];
						mapAside4DescriptionTrainerMoveText.title = formatMoveData(moves[y]);
						mapAside4DescriptionTrainerMoveText.style.color = "var(--type"+getMoveData(moves[y],"Type")+")";
						mapAside4DescriptionTrainerMoveText.setAttribute("name","Move");
						mapAside4DescriptionTrainerMove.appendChild(mapAside4DescriptionTrainerMoveText);
						mapAside4DescriptionTrainerMoveText.addEventListener("click", dataRedirect);
					}
				}

				if (iv != undefined) {
					var ivs = undefined;
					var mapAside4DescriptionTrainerIV = document.createElement("div");
					mapAside4DescriptionTrainerIV.setAttribute("name", "Individual Values");
					mapAside4DescriptionTrainerData.appendChild(mapAside4DescriptionTrainerIV);

					if (iv.includes(",")) {
						ivs = iv.split(",");
					}
					else {
						ivs = iv;
					}
					for(var y = 0; y < ivs.length; y++) {
						if (ivs[y] != "") {
							var mapAside4DescriptionTrainerIVText = document.createElement("p");
							mapAside4DescriptionTrainerIVText.innerText = Stats[y]+" IV: "+ivs[y];
							mapAside4DescriptionTrainerIVText.setAttribute("name","IV");
							mapAside4DescriptionTrainerIV.appendChild(mapAside4DescriptionTrainerIVText);
						}
					}
				}

				if (ev != undefined) {
					var evs = undefined;
					var mapAside4DescriptionTrainerEV = document.createElement("div");
					mapAside4DescriptionTrainerEV.setAttribute("name", "Effort Values");
					mapAside4DescriptionTrainerData.appendChild(mapAside4DescriptionTrainerEV);

					if (ev.includes(",")) {
						evs = ev.split(",");
					}
					else {
						evs = ev;
					}
					for(var y = 0; y < evs.length; y++) {
						if (evs[y] != "") {
							var mapAside4DescriptionTrainerEVText = document.createElement("p");
							mapAside4DescriptionTrainerEVText.innerText = Stats[y]+" EV: "+evs[y];
							mapAside4DescriptionTrainerEVText.setAttribute("name","EV");
							mapAside4DescriptionTrainerEV.appendChild(mapAside4DescriptionTrainerEVText);
						}
					}
				}

				var mapAside4DescriptionTrainerButtonsExport = document.createElement("button");
				mapAside4DescriptionTrainerButtonsExport.innerText = "➢";
				mapAside4DescriptionTrainerButtonsExport.value = datas[u];
				mapAside4DescriptionTrainerButtonsExport.title = "Export Pokémon Buttons String";
				mapAside4DescriptionTrainerButtonsExport.setAttribute("name","Export");
				mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerButtonsExport);
				mapAside4DescriptionTrainerButtonsExport.addEventListener("click", trainerPokExport);

				if (move != undefined || iv != undefined || ev != undefined ) {
					var adds = mapAside4DescriptionTrainerLi.querySelectorAll(':scope > div[name="Data"] > div[name]');
					if (adds.length > 1) {
						var mapAside4DescriptionTrainerButtonsCycle = document.createElement("button");
						mapAside4DescriptionTrainerButtonsCycle.innerText = "⟲";
						mapAside4DescriptionTrainerButtonsCycle.value = "Individual Values";
						mapAside4DescriptionTrainerButtonsCycle.setAttribute("name","Cycle");
						mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerButtonsCycle);
						mapAside4DescriptionTrainerButtonsCycle.addEventListener("click", trainerPokCycle);
					}
				}



			}
		}
	}

	function mapDescriptionTrainerSelector() {
		var i = this.name;
		var mapDescriptionTrainers = document.querySelectorAll('#map-description-trainer ul[name]');
		var mapDescriptionTrainer = document.querySelectorAll('#map-description-trainer ul[name="'+i+'"]');
		for(var y = 0; y < mapDescriptionTrainers.length; y++) {
			mapDescriptionTrainers[y].style.display = "none";
		}
		for(var y = 0; y < mapDescriptionTrainer.length; y++) {
			mapDescriptionTrainer[y].style.display = "unset";
		}
	}
	}
}
var mapSelectorVal = [""];
function mapDescriptionSelector() {
	var i = this.value;
	var mapDescriptionOuters = document.querySelectorAll('#map-description base[name]');
	var mapDescriptionOuter = document.querySelectorAll('#map-description base[name="'+i+'"]');
	for(var y = 0; y < mapDescriptionOuters.length; y++) {
		mapDescriptionOuters[y].style.display = "none";
	}
	for(var y = 0; y < mapDescriptionOuter.length; y++) {
		mapDescriptionOuter[y].style.display = "block";
	}
	mapSelectorVal.fill(i)
	console.log(mapSelectorVal)
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
/*
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
*/
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