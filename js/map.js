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





	var mapAside3 = document.createElement("aside");
	var mapAside3MapOuter = document.createElement("div");
	var mapAside3MapOuter2 = document.createElement("div");
	var mapAside3MapInner = document.createElement("div");
	var mapAside3MapInner2 = document.createElement("div");
	var mapAside3MapZoomReset = document.createElement("span");
	var mapAside3MapZoomIn = document.createElement("span");
	var mapAside3MapFullscreen = document.createElement("span");
	var mapAside3MapImg = document.createElement("img");
	var mapAside3Map = document.createElement("map");
	mapAside3.setAttribute("id","map-aside3")
	mapAside3MapOuter.setAttribute("id","map-contain");
	mapAside3MapOuter2.classList.add("map-inner");
	mapAside3MapZoomReset.setAttribute("name","reset");
	mapAside3MapZoomIn.setAttribute("name","zoom");
	mapAside3MapFullscreen.setAttribute("name","fullscreen");
	mapAside3MapImg.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png";
	mapAside3MapImg.classList.add("map-img");
	mapAside3MapImg.setAttribute("usemap","#map");
	mapAside3Map.setAttribute("name","map");
	mapAside3Map.setAttribute("id","map");
	mapOuter.appendChild(mapAside3);
	mapAside3.appendChild(mapAside3MapOuter);


	var dir1 = ["Left","Top"];
	for(var q = 0; q < dir1.length; q++) {
		var mapAside3MapDirection = document.createElement("button");
		var mapAside3MapDirectionText = document.createElement("span");
		mapAside3MapDirection.setAttribute("name",dir1[q]);
		mapAside3MapDirectionText.setAttribute("name","Map");
		if (dir1[q] == "Left") {
			mapAside3MapDirectionText.innerText = "⮜";
			mapAside3MapOuter.appendChild(mapAside3MapDirection);
		}
		else if (dir1[q] == "Top") {
			mapAside3MapDirectionText.innerText = "⮝";
			mapAside3MapOuter2.appendChild(mapAside3MapDirection);
		}
		mapAside3MapDirection.appendChild(mapAside3MapDirectionText);
		mapAside3MapDirectionText.addEventListener("click", dataRedirect);
	}


	mapAside3MapOuter.appendChild(mapAside3MapOuter2);






	mapAside3MapOuter2.appendChild(mapAside3MapInner);
	mapAside3MapInner.appendChild(mapAside3MapZoomReset);
	mapAside3MapInner.appendChild(mapAside3MapZoomIn);
	mapAside3MapInner.appendChild(mapAside3MapFullscreen);
	mapAside3MapInner.appendChild(mapAside3MapInner2);
	mapAside3MapInner2.appendChild(mapAside3MapImg);
	mapAside3MapInner2.appendChild(mapAside3Map);






	mapAside1OptionsSearch.addEventListener("keyup", function() {search("Map");});
	mapAside1OptionsSearchExit.addEventListener("click", function() {exitSearch("Map");});
	mapAside3MapInner2.addEventListener("mousedown",function(event){if(event.button === 1){fullscreenIMG([mapAside3MapImg],0)}});






	var dir2 = ["Bottom","Right"];
	for(var q = 0; q < dir2.length; q++) {
		var mapAside3MapDirection = document.createElement("button");
		var mapAside3MapDirectionText = document.createElement("span");
		mapAside3MapDirection.setAttribute("name",dir2[q]);
		mapAside3MapDirectionText.setAttribute("name","Map");
		if (dir2[q] == "Bottom") {
			mapAside3MapDirectionText.innerText = "⮟";
			mapAside3MapOuter2.appendChild(mapAside3MapDirection);
		}
		else if (dir2[q] == "Right") {
			mapAside3MapDirectionText.innerText = "⮞";
			mapAside3MapOuter.appendChild(mapAside3MapDirection);
		}
		mapAside3MapDirection.appendChild(mapAside3MapDirectionText);
		mapAside3MapDirectionText.addEventListener("click", dataRedirect);
	}











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

	mapAside4DescriptionBorder = document.createElement("span");
	mapAside4Description.appendChild(mapAside4DescriptionBorder);

	var DescriptionSelector = document.createElement("div");
	DescriptionSelector.classList.add("map-description-selector-outer")
	mapAside4Description.appendChild(DescriptionSelector);

	var mapAside4DescriptionOview = document.createElement("base");
	mapAside4DescriptionOview.setAttribute("id", "map-description-oview");
	mapAside4DescriptionOview.setAttribute("name", "Overview");
	mapAside4Description.appendChild(mapAside4DescriptionOview);

	var mapAside4DescriptionOviewHeader = document.createElement("span");
	var mapAside4DescriptionOviewHeaderText = document.createElement("h4");
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
	mapAside4DescriptionOviewSelector.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){overviewMove(mapAside4DescriptionOviewButtonLeftButton)}else if(!delta.includes("-")){overviewMove(mapAside4DescriptionOviewButtonRightButton)}});
	mapAside4DescriptionOviewSelectorOuter.appendChild(mapAside4DescriptionOviewSelector);

	var mapAside4DescriptionOviewButtonRight = document.createElement("span");
	var mapAside4DescriptionOviewButtonRightButton = document.createElement("button");
	mapAside4DescriptionOviewButtonRightButton.innerText = "›";
	mapAside4DescriptionOviewButtonRightButton.value = 0;
	mapAside4DescriptionOviewSelectorOuter.appendChild(mapAside4DescriptionOviewButtonRight);
	mapAside4DescriptionOviewButtonRight.appendChild(mapAside4DescriptionOviewButtonRightButton);
	mapAside4DescriptionOviewButtonRightButton.addEventListener("click", overviewMove);

	var mapAside4DescriptionOviewDescription = document.createElement("span");

	mapAside4DescriptionOview.appendChild(mapAside4DescriptionOviewDescription);




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
		var poi = [];
		for(var u = 0; u < finaldataLocationPointOfInterest.length; u++) {
			if (getApplicable(finaldataLocationPointOfInterest[u]["Game"])) {
				if (finaldataLocationPointOfInterest[u]["Location"] == finaldataLocation[q][JSONPath_Location+"_"+"Name"]) {
					poi.push(finaldataLocationPointOfInterest[u]["Point of Interest"]);
				}
			}
		}
		if (poi.length > 0) {
			mapAside1OptionsLabel.setAttribute("data-search-pointofinterest",poi.join(",").toLowerCase());
		}
		else {
			mapAside1OptionsLabel.setAttribute("data-search-pointofinterest","none");
		}


		var nav = [];
		for(var u = 0; u < finaldataLocationNavigation.length; u++) {
			if (finaldataLocationNavigation[u][JSONPath_LocationNavigation+"_Name"] == finaldataLocation[q][JSONPath_Location+"_"+"Name"]) {
				nav.push(finaldataLocationNavigation[u][JSONPath_LocationNavigation+"_Navigation"]);
			}
		}
		if (nav.length > 0) {
			mapAside1OptionsLabel.setAttribute("data-search-navigation",nav.join(",").toLowerCase());
		}
		else {
			mapAside1OptionsLabel.setAttribute("data-search-navigation","none");
		}

		mapAside1OptionsLabel.innerText = finaldataLocation[q][JSONPath_Location+"_"+"Name"];
		mapAside1Options.appendChild(mapAside1OptionsInput);
		mapAside1Options.appendChild(mapAside1OptionsLabel);
		mapAside1OptionsInput.addEventListener("click", mapOptionsSelector);
		mapAside1OptionsLabel.setAttribute("tabindex",q+10);
		mapAside1OptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;mapOptionsSelector(event.target.previousElementSibling.value);}}});
	}

	var searchLis = document.querySelectorAll("#map-options > label");
    searchMapAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMapAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMapAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }
	searchMapAttributes = searchMapAttributes.filter(function(v) {return v !== "data-search-name";});
    for(q = 0; q < searchMapAttributes.length; q++) {
        searchMapAttributes[q] = searchMapAttributes[q].replaceAll("data-search-","")
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

		var mapImg = document.querySelector(".map-inner img[usemap]");

		if (mapImg.classList.contains("mapify")) {
			mapBlink(mapAside3MapOuter,[location]);
		}


		

		var mapDescriptionTitles = ["Overview","Pokémon", "Items", "Trainers", "Move Tutor"];

		if (poks.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Pokémon"));
		}
		if (items.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Items"));
		}
		if (trainers.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Trainers"));
		}
		if (tutors.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Move Tutor"));
		}

		var spans = DescriptionSelector.querySelectorAll(":scope span");
		for(var q = 0; q < spans.length; q++) {
			spans[q].remove();
		}

		var DescriptionSelectorUp = document.createElement("span");
		DescriptionSelector.appendChild(DescriptionSelectorUp);

		if (mapDescriptionTitles.length > 1) {
			var DescriptionSelectorDown = document.createElement("span");
			DescriptionSelector.appendChild(DescriptionSelectorDown);
		}

		for(var q = 0; q < mapDescriptionTitles.length; q++) {
			var DescriptionSelectorInput = document.createElement("input");
			var DescriptionSelectorLabel = document.createElement("label");
			DescriptionSelectorInput.setAttribute("type", "radio");
			DescriptionSelectorInput.setAttribute("name", "map-description-selector");
			DescriptionSelectorInput.setAttribute("id", "map-description-selector-"+q);
			DescriptionSelectorInput.setAttribute("autocomplete", "off");
			DescriptionSelectorInput.setAttribute("value", mapDescriptionTitles[q]);
			DescriptionSelectorLabel.setAttribute("for", "map-description-selector-"+q);
			DescriptionSelectorLabel.innerText = mapDescriptionTitles[q];

			if (q == 0) {
				DescriptionSelectorUp.appendChild(DescriptionSelectorInput);
				DescriptionSelectorUp.appendChild(DescriptionSelectorLabel);
				DescriptionSelectorLabel.innerText = location;
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
			else {
				DescriptionSelectorDown.appendChild(DescriptionSelectorInput);
				DescriptionSelectorDown.appendChild(DescriptionSelectorLabel);
			}

			DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);	  
		}

		var input = DescriptionSelector.querySelector(':scope div input[value="'+mapSelectorVal[0]+'"]');

		if(input != undefined) {
			input.click();
		}
		var descs = mapAside4DescriptionOviewDescription.querySelectorAll(":scope > *");
		for(var q = 0; q < descs.length; q++) {
			descs[q].remove();
		}

		
		var desc = [];
		for(var q = 0; q < finaldataLocationDescription.length; q++) {
			if (finaldataLocationDescription[q][JSONPath_LocationDescription+"_Name"] == location) {
				desc.push(finaldataLocationDescription[q][JSONPath_LocationDescription+"_Description"]);
			}
		}

		for(var q = 0; q < desc.length; q++) {
			var mapAside4DescriptionOviewDescriptionText = document.createElement("p");
			mapAside4DescriptionOviewDescriptionText.innerText = desc[q];
			mapAside4DescriptionOviewDescription.appendChild(mapAside4DescriptionOviewDescriptionText);
		}

		var poi = [];
		for(var q = 0; q < finaldataLocationPointOfInterest.length; q++) {
			if (getApplicable(finaldataLocationPointOfInterest[q]["Game"])) {
				if (finaldataLocationPointOfInterest[q]["Location"] == location) {
					var areadesc = [];
					var pointdesc = [];
					if (finaldataLocationPointOfInterest[q]["Area Description"] != undefined) {
						areadesc.push(finaldataLocationPointOfInterest[q]["Area Description"]);
					}
					if (finaldataLocationPointOfInterest[q]["Point Description"] != undefined) {
						pointdesc.push(finaldataLocationPointOfInterest[q]["Point Description"]);
					}

					var obj = new Object();
					obj["Header"] = finaldataLocationPointOfInterest[q]["Point of Interest"];
					if (areadesc.length > 0) {
						obj["Area Description"] = areadesc.join("\n");
					}
					if (pointdesc.length > 0) {
						obj["Point Description"] = pointdesc.join("\n");
					}
					poi.push(obj);
				}
			}
		}

		for(var q = 0; q < poi.length; q++) {
			if (poi[q]["Point Description"] != undefined) {
				var description = [];
				if (poi[q]["Area Description"] != undefined) {
					description.push(poi[q]["Area Description"]);
				}
				description.push(poi[q]["Point Description"]);

				var span = document.createElement("span");
				var header = document.createElement("h4");
				var desc = document.createElement("p");
				header.innerText = poi[q]["Header"];
				desc.innerHTML = description.join("<br>");
				mapAside4DescriptionOviewDescription.appendChild(span)
				span.appendChild(header)
				span.appendChild(desc)
			}
		}




		var imgs = mapAside4DescriptionOviewSelector.querySelectorAll(":scope > span");
		for (var q = 0; q < imgs.length; q++) {
			imgs[q].remove();
		}


		mapAside4DescriptionOviewHeaderText.innerText = "";
		mapAside4DescriptionOviewSelector.style.removeProperty("transform");
		mapAside4DescriptionOviewButtonLeftButton.value = 0;
		mapAside4DescriptionOviewButtonRightButton.value = 0;



		var loadLocation;
		var loadArea;
		var loadImages = [];

		for (var q = 0; q < tempLoadImages.length; q++) {
			if (tempLoadImages[q].includes("_")) {
				loadLocation = tempLoadImages[q].split("_")[0];
				loadArea = tempLoadImages[q].replaceAll(loadLocation+"_","")
			}
			else {
				loadLocation = tempLoadImages[q];
			}
			if (loadLocation == location) {
				loadImages.push(tempLoadImages[q])
			}
		}

		for (var q = 0; q < loadImages.length; q++) {
			if (loadImages[q].includes("_")) {
				loadLocation = loadImages[q].split("_")[0];
				loadArea = loadImages[q].replaceAll(loadLocation+"_","")
			}
			else {
				loadLocation = loadImages[q];
				loadArea = undefined;
			}

			var mapAside4DescriptionOviewImageInner = document.createElement("span");
			var mapAside4DescriptionOviewImage = document.createElement("img");
			mapAside4DescriptionOviewImage.src = "./media/Images/Location/Load/"+MEDIAPath_LocationLoad+"/"+loadImages[q]+".png";
			mapAside4DescriptionOviewSelector.appendChild(mapAside4DescriptionOviewImageInner);
			mapAside4DescriptionOviewImageInner.appendChild(mapAside4DescriptionOviewImage);

			//mapAside4DescriptionOviewImage.setAttribute("onerror","this.parentElement.remove()")

			if (loadArea != undefined) {
				mapAside4DescriptionOviewImage.setAttribute("title",loadArea);
			}
			else {
				mapAside4DescriptionOviewImage.setAttribute("title",location);
			}

			if (q == 0) {
				mapAside4DescriptionOviewImageInner.classList.add("open")
				if (loadArea != undefined) {
					mapAside4DescriptionOviewHeaderText.innerText = loadArea;
				}
				else {
					mapAside4DescriptionOviewHeaderText.innerText = location;
				}
			}
		}





		var overviewLocation;
		var overviewArea;
		var overviewImages = [];

		for (var q = 0; q < tempOverviewImages.length; q++) {
			if (tempOverviewImages[q].includes("_")) {
				overviewLocation = tempOverviewImages[q].split("_")[0];
				overviewArea = tempOverviewImages[q].replaceAll(overviewLocation+"_","")
			}
			else {
				overviewLocation = tempOverviewImages[q];
			}
			if (overviewLocation == location) {
				overviewImages.push(tempOverviewImages[q])
			}
		}

		for (var q = 0; q < overviewImages.length; q++) {
			if (overviewImages[q].includes("_")) {
				overviewLocation = overviewImages[q].split("_")[0];
				overviewArea = overviewImages[q].replaceAll(overviewLocation+"_","")
			}
			else {
				overviewLocation = overviewImages[q];
				overviewArea = undefined;
			}

			var mapAside4DescriptionOviewImageInner = document.createElement("span");
			var mapAside4DescriptionOviewImage = document.createElement("img");
			mapAside4DescriptionOviewImage.src = "./media/Images/Location/Overview/"+MEDIAPath_LocationOverview+"/"+overviewImages[q]+".png";
			mapAside4DescriptionOviewSelector.appendChild(mapAside4DescriptionOviewImageInner);
			mapAside4DescriptionOviewImageInner.appendChild(mapAside4DescriptionOviewImage);

			//mapAside4DescriptionOviewImage.setAttribute("onerror","this.parentElement.remove()")

			if (overviewArea != undefined) {
				mapAside4DescriptionOviewImage.setAttribute("title",overviewArea);
			}
			else {
				mapAside4DescriptionOviewImage.setAttribute("title",location);
			}

			if (q == 0) {
				mapAside4DescriptionOviewImageInner.classList.add("open")
				if (overviewArea != undefined) {
					mapAside4DescriptionOviewHeaderText.innerText = overviewArea;
				}
				else {
					mapAside4DescriptionOviewHeaderText.innerText = location;
				}
			}
		}









		var locimgs = mapAside4DescriptionOviewSelector.querySelectorAll(":scope img");
		var buttons = mapAside4DescriptionOviewSelectorOuter.querySelectorAll(":scope button");
		for (var q = 0; q < locimgs.length; q++) {
			locimgs[q].parentElement.setAttribute("name",q);
			locimgs[q].addEventListener("mousedown", function(event) { if(event.button === 0 || event.button === 1) {fullscreenIMG(locimgs,buttons[0].getAttribute("value"))};});
		}


		if (locimgs.length == 0) {
			mapAside4DescriptionOviewHeader.style.display = "none";
			mapAside4DescriptionOviewSelectorOuter.style.display = "none";
		}
		else {
			mapAside4DescriptionOviewHeader.style.removeProperty("display");
			mapAside4DescriptionOviewSelectorOuter.style.removeProperty("display");
		}

		if (locimgs.length < 2) {
			mapAside4DescriptionOviewButtonLeftButton.style.display = "none";
			mapAside4DescriptionOviewButtonRightButton.style.display = "none";
		}
		else if (locimgs.length > 1) {
			mapAside4DescriptionOviewButtonLeftButton.style.display = "none";
			mapAside4DescriptionOviewButtonRightButton.style.removeProperty("display");
		}
	
		for(var q = 0; q < items.length; q++) {
			if (items[q]["Area"] != undefined && items[q]["Title"] != undefined) {
				items[q]["Sort"] = items[q]["Area"]+" "+items[q]["Title"];
			}
			else if (items[q]["Area"] == undefined && items[q]["Title"] != undefined) {
				items[q]["Sort"] = items[q]["Title"];
			}
			else if (items[q]["Area"] != undefined && items[q]["Title"] == undefined) {
				items[q]["Sort"] = items[q]["Area"];
			}
			else {
				items[q]["Sort"] = "a";
			}
		}


		items = sortObjectArray(items, "Sort");

		for(var q = 0; q < items.length; q++) {
			if (items[q]["Sort"] == "a") {
				items[q]["Sort"] = location;
			}
		}

		var itemArea = [];
		for(var q = 0; q < items.length; q++) {
			itemArea.push(items[q]["Sort"]);
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
				mapAside4DescriptionItemUl.setAttribute("name",itemArea[q])
				mapAside4DescriptionItem.appendChild(mapAside4DescriptionItemUl);

				if (itemArea[q] != location) {
					var mapAside4DescriptionItemUlTitle = document.createElement("h4");
					mapAside4DescriptionItemUlTitle.innerText = itemArea[q];
					mapAside4DescriptionItemUl.appendChild(mapAside4DescriptionItemUlTitle);
				}
					
			}
			ul = mapAside4DescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			for(var u = 0; u < items.length; u++) {
				if (items[u]["Sort"] == itemArea[q]) {
					var quantity = items[u]["Quantity"];

					var mapAside4DescriptionItemLi = document.createElement("li");
					var mapAside4DescriptionItemIconOuter = document.createElement("div");
					mapAside4DescriptionItemIconOuter.setAttribute("name","Item");
					mapAside4DescriptionItemIconOuter.setAttribute("value",items[u]["Item"])
					ul.appendChild(mapAside4DescriptionItemLi);
					mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemIconOuter);
					mapAside4DescriptionItemIconOuter.addEventListener("click",dataRedirect)

					if (quantity == undefined) {
						quantity = 1;
					}
					if (quantity > 10) {
						quantity = 10;
					}


					var mapAside4DescriptionItemIconInner = document.createElement("span");
					mapAside4DescriptionItemIconOuter.appendChild(mapAside4DescriptionItemIconInner);

					for(var y = 0; y < quantity; y++) {
						var mapAside4DescriptionItemIcon = document.createElement("img");
						mapAside4DescriptionItemIcon.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(items[u]["Item"])+".png";
						mapAside4DescriptionItemIcon.setAttribute("onerror", "this.style.display='none';");
						mapAside4DescriptionItemIconInner.appendChild(mapAside4DescriptionItemIcon);
					}

					if (quantity > 1) {
						mapAside4DescriptionItemIconOuter.title = items[u]["Quantity"]+"x "+items[u]["Item"];
					}
					else {
						mapAside4DescriptionItemIconOuter.title = items[u]["Item"];
					}

					if (items[u]["Hidden"] == "Hidden") {
						mapAside4DescriptionItemIconOuter.title += " (Hidden)";
						mapAside4DescriptionItemIconOuter.classList.add("hidden");
					}


					var mapAside4DescriptionItemText = document.createElement("h6");
					mapAside4DescriptionItemText.innerText = items[u]["Item"];

					if (getMachineMove(items[u]["Item"]) != undefined) {
						mapAside4DescriptionItemText.innerText += " ("+getMachineMove(items[u]["Item"])+")";
					}
		
					mapAside4DescriptionItemIconOuter.appendChild(mapAside4DescriptionItemText);
		

					var mapAside4DescriptionItemDescriptionOuter = document.createElement("span");
					mapAside4DescriptionItemDescriptionOuter.setAttribute("name","Description");
					mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemDescriptionOuter);
					var mapAside4DescriptionItemDescription = document.createElement("p");
					mapAside4DescriptionItemDescription.innerText = items[u]["Description"];
					mapAside4DescriptionItemDescriptionOuter.appendChild(mapAside4DescriptionItemDescription);
				

					var itemTime = "";
					var itemDay = [];
					var itemSeason = [];

					var itemTimeResult = [];
	
					if (items[u]["Time"] != undefined) {
						itemTime = items[u]["Time"];
					}

					if (items[u]["Day"] != undefined) {
						if (items[u]["Day"].includes(",")) {
							var daySplit = items[u]["Day"].split(",");
							for(var y = 0; y < daySplit.length; y++) {
								itemDay.push(daySplit[y]);
							}
						}
						else {
							itemDay.push(items[u]["Day"])
						}
					}

					if (items[u]["Season"] != undefined) {
						if (items[u]["Season"].includes(",")) {
							var seasonSplit = items[u]["Season"].split(",");
							for(var y = 0; y < seasonSplit.length; y++) {
								itemSeason.push(seasonSplit[y]);
							}
						}
						else {
							itemSeason.push(items[u]["Season"])
						}
						
					}


					for(var y = 0; y < itemSeason.length; y++) {
						itemTimeResult.push(itemSeason[y]);
					}

					for(var y = 0; y < itemDay.length; y++) {
						itemTimeResult.push(itemDay[y]);
					}

					itemTimeResult = itemTimeResult.map(i => "("+i+" "+itemTime+")");
					itemTimeResult = itemTimeResult.map(i => i.replaceAll(" )",")"));
					var itemTimeResultFinish = "";

					for(var y = 0; y < itemTimeResult.length; y++) {
						itemTimeResultFinish += " "+itemTimeResult[y];
					}
					itemTimeResultFinish = itemTimeResultFinish.replaceAll(") (",", ");
					itemTimeResultFinish = itemTimeResultFinish.replace(/,([^,]*)$/, ' and $1');


					mapAside4DescriptionItemDescription.innerText += itemTimeResultFinish;
					
			

					if (items[u]["Field"] != undefined) {
						var mapAside4DescriptionItemRequirementOuter = document.createElement("span");
						var mapAside4DescriptionItemRequirementTitle = document.createElement("h5");
						mapAside4DescriptionItemRequirementOuter.setAttribute("name","Requirement");
						mapAside4DescriptionItemLi.appendChild(mapAside4DescriptionItemRequirementOuter);
						mapAside4DescriptionItemRequirementOuter.appendChild(mapAside4DescriptionItemRequirementTitle);

						mapAside4DescriptionItemRequirementTitle.innerText = "Requires:";


						if (items[u]["Field"].includes("/")) {
							for(var y = 0; y < items[u]["Field"].split("/").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(items[u]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(items[u]["Field"].split("/")[y]));
									itm = getMoveMachine(items[u]["Field"].split("/")[y]);
								}
								else if (getItemIcon(items[u]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(items[u]["Field"].split("/")[y]);
									itm = items[u]["Field"].split("/")[y];
								}

								var mapAside4DescriptionItemField = document.createElement("span");
								var mapAside4DescriptionItemFieldText = document.createElement("p");
								mapAside4DescriptionItemFieldText.innerText = items[u]["Field"].split("/")[y];
								mapAside4DescriptionItemRequirementOuter.appendChild(mapAside4DescriptionItemField);
								if (itemIcon != undefined) {
									var mapAside4DescriptionItemFieldImage = document.createElement("img");
									mapAside4DescriptionItemFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									mapAside4DescriptionItemFieldImage.title = items[u]["Field"].split("/")[y];
									mapAside4DescriptionItemField.appendChild(mapAside4DescriptionItemFieldImage);
									mapAside4DescriptionItemField.setAttribute("name","Item");
									mapAside4DescriptionItemField.setAttribute("value",itm);
									mapAside4DescriptionItemField.addEventListener("click",dataRedirect);
								}
								mapAside4DescriptionItemField.appendChild(mapAside4DescriptionItemFieldText);
								if (y != items[u]["Field"].split("/").length - 1) {
									var mapAside4DescriptionItemFieldSpace = document.createElement("p");
									mapAside4DescriptionItemFieldSpace.innerText = " or ";
									mapAside4DescriptionItemRequirementOuter.appendChild(mapAside4DescriptionItemFieldSpace)
								}
							}
						}
						else if (items[u]["Field"].includes(",")) {
							for(var y = 0; y < items[u]["Field"].split(",").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(items[u]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(items[u]["Field"].split(",")[y]));
									itm = getMoveMachine(items[u]["Field"].split(",")[y]);
								}
								else if (getItemIcon(items[u]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(items[u]["Field"].split(",")[y]);
									itm = items[u]["Field"].split(",")[y];
								}

								var mapAside4DescriptionItemField = document.createElement("span");
								var mapAside4DescriptionItemFieldText = document.createElement("p");
								mapAside4DescriptionItemFieldText.innerText = items[u]["Field"].split(",")[y];
								mapAside4DescriptionItemRequirementOuter.appendChild(mapAside4DescriptionItemField);
								if (itemIcon != undefined) {
									var mapAside4DescriptionItemFieldImage = document.createElement("img");
									mapAside4DescriptionItemFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									mapAside4DescriptionItemFieldImage.title = items[u]["Field"].split(",")[y];
									mapAside4DescriptionItemField.appendChild(mapAside4DescriptionItemFieldImage);
	
									mapAside4DescriptionItemField.setAttribute("name","Item");
									mapAside4DescriptionItemField.setAttribute("value",itm);
									mapAside4DescriptionItemField.addEventListener("click",dataRedirect);
								}
								mapAside4DescriptionItemField.appendChild(mapAside4DescriptionItemFieldText);
							}
						}
						else {
							var itemIcon;
							var itm;
							if (getMoveMachine(items[u]["Field"]) != undefined) {
								itemIcon = getItemIcon(getMoveMachine(items[u]["Field"]));
								itm = getMoveMachine(items[u]["Field"]);
							}
							else if (getItemIcon(items[u]["Field"]) != undefined) {
								itemIcon = getItemIcon(items[u]["Field"]);
								itm = items[u]["Field"];
							}

							var mapAside4DescriptionItemField = document.createElement("span");
							var mapAside4DescriptionItemFieldText = document.createElement("p");
							mapAside4DescriptionItemFieldText.innerText = items[u]["Field"];
							mapAside4DescriptionItemRequirementOuter.appendChild(mapAside4DescriptionItemField);
							if (itemIcon != undefined) {
								var mapAside4DescriptionItemFieldImage = document.createElement("img");
								mapAside4DescriptionItemFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
								mapAside4DescriptionItemFieldImage.title = items[u]["Field"];
								mapAside4DescriptionItemFieldImage.setAttribute("name","Item");
								mapAside4DescriptionItemField.appendChild(mapAside4DescriptionItemFieldImage);

								mapAside4DescriptionItemField.setAttribute("name","Item");
								mapAside4DescriptionItemField.setAttribute("value",itm);
								mapAside4DescriptionItemField.addEventListener("click",dataRedirect);
							}
							mapAside4DescriptionItemField.appendChild(mapAside4DescriptionItemFieldText);

						}
					}

				}
			}
		}

		for(var q = 0; q < poks.length; q++) {
			if (poks[q]["Area"] != undefined && poks[q]["Title"] != undefined) {
				poks[q]["Sort"] = poks[q]["Area"]+" - "+poks[q]["Title"];
			}
			else if (poks[q]["Area"] == undefined && poks[q]["Title"] != undefined) {
				poks[q]["Sort"] = poks[q]["Title"];
			}
			else if (poks[q]["Area"] != undefined && poks[q]["Title"] == undefined) {
				poks[q]["Sort"] = poks[q]["Area"];
			}
			else {
				poks[q]["Sort"] = "a";
			}
		}


		poks = sortObjectArray(poks, "Sort");

		for(var q = 0; q < poks.length; q++) {
			if (poks[q]["Sort"] == "a") {
				poks[q]["Sort"] = location;
			}
		}
	
		console.log(poks)
		var pokArea = [];
		for(var q = 0; q < poks.length; q++) {
			pokArea.push(poks[q]["Sort"]);
		}
		pokArea = [...new Set(pokArea)];
		console.log(pokArea)

		var uls = mapAside4DescriptionPok.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

	
		for(var q = 0; q < pokArea.length; q++) {
			var ul;
			ul = mapAside4DescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			if (ul == null) {
				var mapAside4DescriptionPokUl = document.createElement("ul");
				mapAside4DescriptionPokUl.setAttribute("name",pokArea[q])
				mapAside4DescriptionPok.appendChild(mapAside4DescriptionPokUl);

				if (pokArea[q] != location) {
					var mapAside4DescriptionPokUlTitle = document.createElement("h4");
					mapAside4DescriptionPokUlTitle.innerText = pokArea[q];
					mapAside4DescriptionPokUl.appendChild(mapAside4DescriptionPokUlTitle);
				}
			}
			ul = mapAside4DescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			for(var u = 0; u < poks.length; u++) {
				if (poks[u]["Sort"] == pokArea[q]) {


					var mapAside4DescriptionPokLi = document.createElement("li");
					ul.appendChild(mapAside4DescriptionPokLi);

					var mapAside4DescriptionPokOuter = document.createElement("li");
					var mapAside4DescriptionPokLvl = document.createElement("h6");
					var mapAside4DescriptionPokWrap = document.createElement("span");
					var mapAside4DescriptionPokIcon = document.createElement("img");
					var mapAside4DescriptionPokText = document.createElement("h6");
					mapAside4DescriptionPokOuter.setAttribute("name","pok");
					mapAside4DescriptionPokLvl.innerText = poks[u]["Level"];
					mapAside4DescriptionPokLvl.title = "Level";
					mapAside4DescriptionPokIcon.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(poks[u]["Pokémon"]),"Box")+".png";
					mapAside4DescriptionPokIcon.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					mapAside4DescriptionPokIcon.setAttribute("title",poks[u]["Pokémon"]);
					mapAside4DescriptionPokWrap.setAttribute("value",getPokémonInt(poks[u]["Pokémon"]));
					mapAside4DescriptionPokText.innerText = poks[u]["Pokémon"];

					if (poks[u]["Note"] != undefined) {
						mapAside4DescriptionPokOuter.setAttribute("title",poks[u]["Note"]);
					}

					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokOuter);
					mapAside4DescriptionPokOuter.appendChild(mapAside4DescriptionPokLvl);
					mapAside4DescriptionPokOuter.appendChild(mapAside4DescriptionPokWrap);
					mapAside4DescriptionPokWrap.appendChild(mapAside4DescriptionPokIcon);
					mapAside4DescriptionPokWrap.appendChild(mapAside4DescriptionPokText);

					mapAside4DescriptionPokWrap.addEventListener("click",modalData);


					var mapAside4DescriptionPokRate = document.createElement("li");
					var mapAside4DescriptionPokRateText = document.createElement("p");
					mapAside4DescriptionPokRate.setAttribute("name","Rate")
					mapAside4DescriptionPokRateText.title = "Rate";
					if (poks[u]["Rate"].includes(",")) {
						mapAside4DescriptionPokRateText.innerHTML = poks[u]["Rate"].replaceAll(",","\n").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="Spring">Spring</pre>').replaceAll("au:",'<pre name="Autumn">Autumn</pre>').replaceAll("su:",'<pre name="Summer">Summer</pre>').replaceAll("wi:",'<pre name="Winter">Winter</pre>');
					}
					else {
						mapAside4DescriptionPokRateText.innerHTML = poks[u]["Rate"];
					}
					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokRate);
					mapAside4DescriptionPokRate.appendChild(mapAside4DescriptionPokRateText);



					var mapAside4DescriptionPokType = document.createElement("li");
					var mapAside4DescriptionPokTypeWrap = document.createElement("span");
					var mapAside4DescriptionPokTypeEncounter = document.createElement("img");
					mapAside4DescriptionPokType.setAttribute("name","Encounter")


					//mapAside4DescriptionPokTypeEncounter.setAttribute("onerror", "this.style.display='none'");
					mapAside4DescriptionPokLi.appendChild(mapAside4DescriptionPokType);
					mapAside4DescriptionPokType.appendChild(mapAside4DescriptionPokTypeWrap);


					if (poks[u]["Tile"] != undefined) {
						var mapAside4DescriptionPokTypeTile = document.createElement("img");
						mapAside4DescriptionPokTypeTile.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+poks[u]["Tile"]+".png";
						mapAside4DescriptionPokTypeTile.title = poks[u]["Tile"];
						mapAside4DescriptionPokTypeTile.alt = poks[u]["Tile"];
						mapAside4DescriptionPokTypeTile.setAttribute("name","Tile");
						mapAside4DescriptionPokTypeWrap.appendChild(mapAside4DescriptionPokTypeTile);
					}

					var encounters = [];
					// Encounter
					if (poks[u]["Encounter"] != undefined) {
						if (poks[u]["Encounter"].includes(",")) {
							encounters = poks[u]["Encounter"].split(",");
						}
						else {
							encounters = [poks[u]["Encounter"]];
						}
					}


					for(var r = 0; r < encounters.length; r++) {
						var mapAside4DescriptionPokTypeEncounter = document.createElement("img");
						console.log(encounters)
						var encounter = encounters[r];
						if (encounter.includes("Surfing")) {
							encounter = encounter+"_M"
						}
						else {
							encounter = encounter;
						}

						if (encounter != undefined) {						
							if (encounter == "Static" && poks[u]["Tile"] == undefined) {
								mapAside4DescriptionPokTypeEncounter.src = "./media/Images/Pokémon/Overworld/Front/Normal/PNG/"+MEDIAPath_Encounter+"/"+getPokémonMediaPath(getPokémonInt(poks[u]["Pokémon"]),"Box")+".png";
								mapAside4DescriptionPokTypeEncounter.title = encounter+" "+poks[u]["Pokémon"];
							}
							else if (encounter == "Static" && poks[u]["Tile"] != undefined) {
								mapAside4DescriptionPokTypeEncounter.src = "./media/Images/Pokémon/Overworld/Front/Normal/PNG/"+MEDIAPath_Encounter+"/"+poks[u]["Tile"]+".png";
								mapAside4DescriptionPokTypeEncounter.title = encounter+" "+poks[u]["Pokémon"];
							}
							else {
								mapAside4DescriptionPokTypeEncounter.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounter+".png";
								mapAside4DescriptionPokTypeEncounter.title = encounter;
							}
							
							mapAside4DescriptionPokTypeEncounter.alt = encounter;
							mapAside4DescriptionPokTypeEncounter.setAttribute("name","Encounter");
						}
						mapAside4DescriptionPokTypeWrap.appendChild(mapAside4DescriptionPokTypeEncounter);
					}








	


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
				mapAside4DescriptionTutorUl.setAttribute("name",tutorArea[q])

				if (tutorArea[q] != location) {
					var mapAside4DescriptionTutorUlTitle = document.createElement("h4");
					mapAside4DescriptionTutorUlTitle.innerText = tutorArea[q];
					mapAside4DescriptionTutorUl.appendChild(mapAside4DescriptionTutorUlTitle);
				}


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
						mapAside4DescriptionTutorCostText.innerHTML = tutors[u]["Cost"].replaceAll(",","\n").replaceAll(" Yellow Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Yellow Shard.png" name="Item" title="Yellow Shard">').replaceAll(" Red Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Red Shard.png" name="Item" title="Red Shard">').replaceAll(" Blue Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Blue Shard.png" name="Item" title="Blue Shard">').replaceAll(" Green Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Green Shard.png" name="Item" title="Green Shard">');
						mapAside4DescriptionTutorAdditional.appendChild(mapAside4DescriptionTutorCost);
						mapAside4DescriptionTutorCost.appendChild(mapAside4DescriptionTutorCostHeader);
						mapAside4DescriptionTutorCost.appendChild(mapAside4DescriptionTutorCostText);
						
						var costImages = mapAside4DescriptionTutorCost.querySelectorAll(":scope img");
						for(var y = 0; y < costImages.length; y++) {
							costImages[y].addEventListener("click",dataRedirect);
						}
					}


			
				}
			}
		}





		mapAside2TitleText.innerText = location;
		mapAside2FlavorText.innerText = "";
	

		
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
					mapAside3NavigationInnerContent.setAttribute("name","Item");
					if (getMoveMachine(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u]) != undefined) {
						mapAside3NavigationInnerContent.setAttribute("value",getMoveMachine(finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u]));
					}
					else {
						mapAside3NavigationInnerContent.setAttribute("value",finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u]);
					}
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
					mapAside3NavigationInnerContent.addEventListener("click",dataRedirect);
				}
			}
		}


		var mapTop = mapAside3MapOuter.querySelector(':scope button[name="Top"]');
		var mapBottom = mapAside3MapOuter.querySelector(':scope button[name="Bottom"]');
		var mapLeft = mapAside3MapOuter.querySelector(':scope button[name="Left"]');
		var mapRight = mapAside3MapOuter.querySelector(':scope button[name="Right"]');
		

		mapTop.setAttribute("title","");
		mapBottom.setAttribute("title","");
		mapLeft.setAttribute("title","");
		mapRight.setAttribute("title","");
		mapTop.firstElementChild.setAttribute("value","");
		mapBottom.firstElementChild.setAttribute("value","");
		mapLeft.firstElementChild.setAttribute("value","");
		mapRight.firstElementChild.setAttribute("value","");

		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			var name = finaldataLocationConnection[q][JSONPath_LocationConnection+"_Name"];
			var north = finaldataLocationConnection[q][JSONPath_LocationConnection+"_North"];
			var south = finaldataLocationConnection[q][JSONPath_LocationConnection+"_South"];
			var west = finaldataLocationConnection[q][JSONPath_LocationConnection+"_West"];
			var east = finaldataLocationConnection[q][JSONPath_LocationConnection+"_East"];

			if(name == location) {
				if (north != undefined) {
					mapTop.setAttribute("title",north.replaceAll(",","\n"));
					mapTop.firstElementChild.setAttribute("value",north);
				}
				if (south != undefined) {
					mapBottom.setAttribute("title",south.replaceAll(",","\n"));
					mapBottom.firstElementChild.setAttribute("value",south);
				}
				if (west != undefined) {
					mapLeft.setAttribute("title",west.replaceAll(",","\n"));
					mapLeft.firstElementChild.setAttribute("value",west);
				}
				if (east != undefined) {
					mapRight.setAttribute("title",east.replaceAll(",","\n"));
					mapRight.firstElementChild.setAttribute("value",east);
				}
			}
		}
		








		
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
		mapAside4DescriptionTrainerUlTopTitleValue.innerHTML = mapAside4DescriptionTrainerUlTopTitleValue.innerHTML.replaceAll("PokéDollar",'<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" title="Pokémon Dollar" />');
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

				if (datas.length > 6) {
					mapAside4DescriptionTrainerUlTopTitleCountImg.src = "./media/Images/Misc/FinalDex/TrainerBall6.png";
				}
				else {
					mapAside4DescriptionTrainerUlTopTitleCountImg.src = "./media/Images/Misc/FinalDex/TrainerBall"+datas.length+".png";
				}
				
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
						if (getNatureTitle(nature) == "Neutral") {
							mapAside4DescriptionTrainerNature.title = "Neutral Nature";
						}
						else {
							mapAside4DescriptionTrainerNature.title = "Nature"+"\n"+getNatureTitle(nature);
						}
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
				var mapAside4DescriptionTrainerPokémonImageOuter = document.createElement("span");
				mapAside4DescriptionTrainerPokémon.setAttribute("name", "Pokémon");
				mapAside4DescriptionTrainerLi.appendChild(mapAside4DescriptionTrainerPokémon);
				mapAside4DescriptionTrainerPokémon.appendChild(mapAside4DescriptionTrainerPokémonImageOuter);

				if (item != undefined) {
					var mapAside4DescriptionTrainerHeldItem = document.createElement("img");
					mapAside4DescriptionTrainerHeldItem.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+item+".png";
					mapAside4DescriptionTrainerHeldItem.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					mapAside4DescriptionTrainerHeldItem.setAttribute("title",item);
					mapAside4DescriptionTrainerHeldItem.setAttribute("name","Item");
					mapAside4DescriptionTrainerHeldItem.setAttribute("value",item);
					mapAside4DescriptionTrainerPokémonImageOuter.appendChild(mapAside4DescriptionTrainerHeldItem);
					mapAside4DescriptionTrainerHeldItem.addEventListener("click", dataRedirect);
				}

				var mapAside4DescriptionTrainerPokémonImage = document.createElement("img");
				mapAside4DescriptionTrainerPokémonImage.src = "./media/Images/Pokémon/Battle/PNG/Normal/Front/"+ImageType_Path[0]+"/"+getPokémonMediaPath(getPokémonInt(pok),"Battle")+".png";
				mapAside4DescriptionTrainerPokémonImage.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
				mapAside4DescriptionTrainerPokémonImage.setAttribute("title", pok);
				mapAside4DescriptionTrainerPokémonImage.setAttribute("value",getPokémonInt(pok));
				mapAside4DescriptionTrainerPokémonImageOuter.appendChild(mapAside4DescriptionTrainerPokémonImage);
				mapAside4DescriptionTrainerPokémonImage.addEventListener("click", modalData);

				var mapAside4DescriptionTrainerPokémonText = document.createElement("h5");
				mapAside4DescriptionTrainerPokémonText.innerText = pok;
				mapAside4DescriptionTrainerPokémonImageOuter.appendChild(mapAside4DescriptionTrainerPokémonText);

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


	mapAside1OptionsSearch.title = searchOptionsTitle(mapAside1Options);

	var searchLis = document.querySelectorAll("#map-options > label");
    searchMapAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMapAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMapAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }
	searchMapAttributes = searchMapAttributes.filter(function(v) {return v !== "data-search-name";});
    for(q = 0; q < searchMapAttributes.length; q++) {
        searchMapAttributes[q] = searchMapAttributes[q].replaceAll("data-search-","")
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

	var mapdescriptionsel = document.querySelector('.map-description-selector-outer input[value="'+mapSelectorVal[0]+'"]')

	if (mapdescriptionsel != null) {
		mapdescriptionsel.click();
	}

	}
}
var mapSelectorVal = ["0"];
function mapDescriptionSelector() {
	var i = this.value;
	var mapDescriptionOuters = document.querySelectorAll('#map-description base[name]');
	var mapDescriptionOuter = document.querySelectorAll('#map-description base[name="'+i+'"]');
	for(var y = 0; y < mapDescriptionOuters.length; y++) {
		mapDescriptionOuters[y].style.display = "none";
	}
	for(var y = 0; y < mapDescriptionOuter.length; y++) {
		mapDescriptionOuter[y].style.removeProperty("display");
	}
	mapSelectorVal.fill(i)
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
			}, 300);
		}
	};
}

$('body').click(function(event) {
	if(!$(event.target).closest('.map-up').length && !$(event.target).is('.map-up')) {
		$(".map-up").removeClass("open");
	}
	if(!$(event.target).closest('.map-down').length && !$(event.target).is('.map-down')) {
		$(".map-down").removeClass("open");
	}
	if(!$(event.target).closest('.map-left').length && !$(event.target).is('.map-left')) {
		$(".map-left").removeClass("open");
	}
	if(!$(event.target).closest('.map-right').length && !$(event.target).is('.map-right')) {
		$(".map-right").removeClass("open");
	}
});


