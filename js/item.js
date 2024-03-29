var createItem = function() {
	var itemOuter = document.createElement("div");
	var itemAside1 = document.createElement("aside");
	var itemAside1OptionsTitleOuter = document.createElement("div");
	var itemAside1OptionsPocketOuter = document.createElement("div");
	var itemAside1OptionsSearchOuter = document.createElement("div");
	var itemAside1OptionsSearch = document.createElement("input");
	var itemAside1OptionsSearchExit = document.createElement("span");
	var itemAside1OptionsOuter = document.createElement("div");
	var itemAside1Options = document.createElement("div");
	var itemAside2 = document.createElement("aside");
	var itemAside2Title = document.createElement("span");
	var itemAside2TitleID = document.createElement("h4");
	var itemAside2TitleName = document.createElement("h1");
	var itemAside2Debut = document.createElement("span");
	var itemAside2DebutText = document.createElement("h4");
	var itemAside3 = document.createElement("aside");
	var itemAside3Description = document.createElement("div");
	var itemAside4 = document.createElement("aside");
	itemOuter.setAttribute("id", "item-outer");
	itemOuter.setAttribute("name", "Items");
	itemAside1.setAttribute("id", "item-aside1");
	itemAside1OptionsTitleOuter.setAttribute("id", "item-options-title");
	itemAside1OptionsSearchOuter.setAttribute("id", "item-options-search");
	itemAside1OptionsPocketOuter.setAttribute("id", "item-options-pocket");
	itemAside1OptionsSearch.setAttribute("type", "text");
	itemAside1OptionsSearch.setAttribute("id", "item-search");
	itemAside1OptionsSearch.setAttribute("placeholder", "Search Items...");
	itemAside1OptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	itemAside1OptionsSearch.setAttribute("onblur", "this.placeholder='Search Items...'");
	itemAside1OptionsSearch.setAttribute("autocomplete", "off");
	itemAside1OptionsSearchExit.setAttribute("id", "item-search-exit");
	itemAside1OptionsOuter.setAttribute("id", "item-options-outer");
	itemAside1Options.setAttribute("id", "item-options");
	itemAside2.setAttribute("id", "item-aside2");
	itemAside2Title.classList.add("item-title");
	itemAside2TitleID.innerText = "#";
	itemAside2TitleName.innerText = "Items";
	itemAside2Debut.classList.add("item-debut");
	itemAside3.setAttribute("id", "item-aside3");
	itemAside3Description.classList.add("item-description");
	itemAside4.setAttribute("id", "item-aside4");
	document.querySelector("#contain").appendChild(itemOuter);
	itemOuter.appendChild(itemAside1);
	itemAside1.appendChild(itemAside1OptionsTitleOuter);
	itemAside1OptionsTitleOuter.appendChild(itemAside1OptionsSearchOuter);
	itemAside1OptionsSearchOuter.appendChild(itemAside1OptionsSearchExit);
	itemAside1OptionsSearchOuter.appendChild(itemAside1OptionsSearch);
	itemAside1OptionsTitleOuter.appendChild(itemAside1OptionsPocketOuter);
	itemAside1.appendChild(itemAside1OptionsOuter);
	itemAside1OptionsOuter.appendChild(itemAside1Options);
	itemOuter.appendChild(itemAside2);
	itemAside2.appendChild(itemAside2Title);
	itemAside2Title.appendChild(itemAside2TitleID);
	itemAside2Title.appendChild(itemAside2TitleName);
	itemAside2.appendChild(itemAside2Debut);
	itemAside2Debut.appendChild(itemAside2DebutText);
	itemOuter.appendChild(itemAside3);
	itemAside3.appendChild(itemAside3Description);
	itemOuter.appendChild(itemAside4);

	itemAside1OptionsSearch.addEventListener("keyup", function() {search("Item");});
	itemAside1OptionsSearchExit.addEventListener("click", function() {exitSearch("Item");});

	var pockets = [];
	for (var q = 0; q < finaldataItems.length; q++) {
		if(finaldataItems[q]["Pocket_"+JSONPath_Items] != undefined && finaldataItems[q]["Pocket_"+JSONPath_Items] != "Unknown") {
			pockets.push(finaldataItems[q]["Pocket_"+JSONPath_Items])
		}

	}
	pockets = pockets.filter(function(v) {return v !== undefined;});
	pockets = [...new Set(pockets)];
	
	for (var q = 0; q < pockets.length; q++) {
		var itemAside1OptionsPocketInput = document.createElement("input");
		var itemAside1OptionsPocketLabel = document.createElement("label");
		var itemAside1OptionsPocketLabelImage = document.createElement("img");
		var itemAside1OptionsPocketLabelText = document.createElement("p");
		itemAside1OptionsPocketInput.setAttribute("type","checkbox");
		itemAside1OptionsPocketInput.setAttribute("name","item-options-pocket");
		itemAside1OptionsPocketInput.setAttribute("id","item-options-pocket-"+q);
		itemAside1OptionsPocketInput.setAttribute("alt",pockets[q].toLowerCase());
		itemAside1OptionsPocketInput.value = pockets[q];
		itemAside1OptionsPocketLabel.setAttribute("for","item-options-pocket-"+q);
		itemAside1OptionsPocketLabelImage.src = "./media/Images/Item/Pocket/Icon/"+MEDIAPath_Item_Pocket+"/"+pockets[q]+".png";
		itemAside1OptionsPocketLabelImage.title = pockets[q]+" Pocket";
		itemAside1OptionsPocketLabelImage.setAttribute("onerror",'this.style.display = "none";this.nextElementSibling.style.display = "unset";')
		itemAside1OptionsPocketLabelText.innerText = pockets[q];
		itemAside1OptionsPocketOuter.appendChild(itemAside1OptionsPocketInput)
		itemAside1OptionsPocketOuter.appendChild(itemAside1OptionsPocketLabel)
		itemAside1OptionsPocketLabel.appendChild(itemAside1OptionsPocketLabelImage)
		itemAside1OptionsPocketLabel.appendChild(itemAside1OptionsPocketLabelText)
		itemAside1OptionsPocketInput.addEventListener("change",itemPockets);
		//itemAside1OptionsPocketInput.addEventListener("click", function() {preventCheckboxZero(itemAside1OptionsPocketOuter);});
		itemAside1OptionsPocketInput.click();
	}

    var itemAside2Game = document.createElement("span");
    var itemAside2GameImage = document.createElement("img");
    itemAside2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    itemAside2GameImage.setAttribute("onerror","this.display='none'");
    itemAside2.appendChild(itemAside2Game);
    itemAside2Game.appendChild(itemAside2GameImage);

	var itemAside4Sidebar = document.createElement("div");
	var itemAside4SidebarTitle = document.createElement("div");
	var itemAside4SidebarTitleText = document.createElement("h2");

	var itemAside4SidebarUl = document.createElement("ul");
	var itemAside4SidebarPrice = document.createElement("div");

	itemAside4Sidebar.classList.add("item-sidebar");
	itemAside4SidebarTitle.classList.add("item-sidebar-title");
	itemAside4SidebarTitleText.innerText = "Acquisition";
	itemAside4SidebarPrice.classList.add("item-sidebar-price");
	itemAside4.appendChild(itemAside4Sidebar);
	itemAside4Sidebar.appendChild(itemAside4SidebarTitle);
	itemAside4SidebarTitle.appendChild(itemAside4SidebarTitleText);
	itemAside4Sidebar.appendChild(itemAside4SidebarUl);
	itemAside4Sidebar.appendChild(itemAside4SidebarPrice);



	var itemAside4SidebarValue = document.createElement("span");
	var itemAside4SidebarValueTitle = document.createElement("h4");
	var itemAside4SidebarValueTextOuter = document.createElement("span");
	var itemAside4SidebarValueText = document.createElement("p");
	var itemAside4SidebarValueCurrencyImg = document.createElement("img");
	itemAside4SidebarValueTitle.innerText = "Value";
	itemAside4SidebarValue.setAttribute("name","Value");
	itemAside4SidebarPrice.appendChild(itemAside4SidebarValue);
	itemAside4SidebarValue.appendChild(itemAside4SidebarValueTitle);
	itemAside4SidebarValue.appendChild(itemAside4SidebarValueTextOuter);
	itemAside4SidebarValueTextOuter.appendChild(itemAside4SidebarValueCurrencyImg);
	itemAside4SidebarValueTextOuter.appendChild(itemAside4SidebarValueText);


	var firstiteration = true;
	for(var q = 0; q < finaldataItems.length; q++) {
		if (finaldataItems[q]["Name_"+JSONPath_Items] != undefined && finaldataItems[q]["Pocket_"+JSONPath_Items] != "Unknown") {
			var itemAside1OptionsInput = document.createElement("input");
			var itemAside1OptionsLabel = document.createElement("label");
			var itemAside1OptionsLabelText = document.createElement("p");
			itemAside1OptionsInput.setAttribute("type", "radio");
			itemAside1OptionsInput.setAttribute("name", "item-options");
			itemAside1OptionsInput.setAttribute("id", "item-options-" + q);
			itemAside1OptionsInput.setAttribute("autocomplete", "off");
			itemAside1OptionsInput.value = q;
			itemAside1OptionsLabel.setAttribute("for", "item-options-" + q);
			itemAside1OptionsLabel.setAttribute("data-search-name", finaldataItems[q]["Name_"+JSONPath_Items].toLowerCase());
			if (finaldataItems[q]["Pocket_"+JSONPath_Items] != undefined) {
				itemAside1OptionsLabel.setAttribute("data-pocket",finaldataItems[q]["Pocket_"+JSONPath_Items].toLowerCase());
			}
			itemAside1OptionsLabel.setAttribute("name", "medium");
			if (finaldataItems[q]["Icon_"+JSONPath_Items] != undefined) {
				var itemAside1OptionsLabelImageOuter = document.createElement("span");
				var itemAside1OptionsLabelImage = document.createElement("img");
				itemAside1OptionsLabelImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+finaldataItems[q]["Icon_"+JSONPath_Items]+".png";
				itemAside1OptionsLabelImage.setAttribute("onerror","this.style.display='none';");
				itemAside1OptionsLabel.appendChild(itemAside1OptionsLabelImageOuter);
				itemAside1OptionsLabelImageOuter.appendChild(itemAside1OptionsLabelImage);
			}
			if (getMachineMove(finaldataItems[q]["Name_"+JSONPath_Items]) != undefined) {
				itemAside1OptionsLabelText.innerText = finaldataItems[q]["Name_"+JSONPath_Items]+" ("+getMachineMove(finaldataItems[q]["Name_"+JSONPath_Items])+")";
			}
			else {
				itemAside1OptionsLabelText.innerText = finaldataItems[q]["Name_"+JSONPath_Items];
			}
			itemAside1Options.appendChild(itemAside1OptionsInput);
			itemAside1Options.appendChild(itemAside1OptionsLabel);

			itemAside1OptionsLabel.appendChild(itemAside1OptionsLabelText);
			itemAside1OptionsInput.addEventListener("click", itemOptionsSelector);

			itemAside1OptionsLabel.setAttribute("tabindex",q+10);
			itemAside1OptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;itemOptionsSelector(event.target.previousElementSibling.value);}}});


			if (firstiteration == true) {
				itemAside1OptionsInput.click();
			}
			firstiteration = false;
		}

	}


	itemAside1OptionsSearch.title = searchOptionsTitle(itemAside1Options);

	var searchLis = document.querySelectorAll("#item-options > label");
    searchItemAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchItemAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchItemAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }
	searchItemAttributes = searchItemAttributes.filter(function(v) {return v !== "data-search-name";});
    for(q = 0; q < searchItemAttributes.length; q++) {
        searchItemAttributes[q] = searchItemAttributes[q].replaceAll("data-search-","")
    }
	
	function itemOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
		var item = finaldataItems[i]["Name_"+JSONPath_Items];

		itemAside2TitleName.innerText = finaldataItems[i]["Name_"+JSONPath_Items];
		itemAside2TitleID.innerText = "#"+finaldataItems[i]["ID_"+JSONPath_Items];

		var destexts = itemAside3Description.querySelectorAll(":scope > p");
		for(var q = 0; q < destexts.length; q++) {
			destexts[q].remove();
		}

		if (getMachineMove(item) != undefined) {
			var itemAside3DescriptionText = document.createElement("p");
			itemAside3DescriptionText.innerHTML = item+" contains the move <span name='Move'>"+getMachineMove(item)+"</span>.";
			itemAside3Description.appendChild(itemAside3DescriptionText);
			itemAside3DescriptionText.querySelector(":scope span").addEventListener("click",dataRedirect);
			itemAside3DescriptionText.querySelector(":scope span").setAttribute("function","dataRedirect");
		}
		else {
			for(var q = 0; q < finaldataItemsDescription.length; q++) {
				if (finaldataItemsDescription[q]["Item"] == item) {
					if (getApplicable(finaldataItemsDescription[q]["Game"])) {
						var check = true;
						if (finaldataItemsDescription[q]["Index"] != undefined) {
							check = finaldataItemsDescription[q]["Index"] == finaldataItems[i]["Index_"+JSONPath_Items];
						}
						if (check) {
							var itemAside3DescriptionText = document.createElement("p");
							itemAside3DescriptionText.innerText = finaldataItemsDescription[q]["Description"];
							itemAside3Description.appendChild(itemAside3DescriptionText);
							if(finaldataItemsDescription[q]["Version"] != undefined) {
								itemAside3DescriptionText.title = finaldataItemsDescription[q]["Version"];
							}
						}
					}
				}
			}
		}

		var lis = itemAside4SidebarUl.querySelectorAll(":scope li");
		
		for(var q = 0; q < lis.length; q++) {
			lis[q].remove();
		}

		

		for(var q = 0; q < finaldataPokémonHeldItem.length; q++) {
			for(var u = 0; u < JSONPath_HeldItemPercentage.length; u++) {
				if(finaldataPokémonHeldItem[q][JSONPath_HeldItemPercentage[u]+"_"+JSONPath_HeldItem] == item) {

					var itemAside4SidebarLi = document.createElement("li");
					itemAside4SidebarLi.setAttribute("name","Held");
					itemAside4SidebarUl.appendChild(itemAside4SidebarLi);

					var itemAside4SidebarPokémon = document.createElement("span");
					itemAside4SidebarPokémon.setAttribute("name","Pokémon");
					itemAside4SidebarLi.appendChild(itemAside4SidebarPokémon);

				
					var itemAside4SidebarPokémonImg = document.createElement("img");
					itemAside4SidebarPokémonImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(q,"Box")+".png";
					itemAside4SidebarPokémonImg.title = getPokémonName(q);
					itemAside4SidebarPokémonImg.setAttribute("value",q);
					itemAside4SidebarPokémon.appendChild(itemAside4SidebarPokémonImg);
					itemAside4SidebarPokémonImg.addEventListener("click",modalData)



					var itemAside4SidebarDescription = document.createElement("span");
					itemAside4SidebarDescription.setAttribute("name","Description");
					itemAside4SidebarLi.appendChild(itemAside4SidebarDescription);

			
					var itemAside4SidebarDescriptionText = document.createElement("p");
					itemAside4SidebarDescriptionText.innerText = JSONPath_HeldItemPercentage[u]+" chance to be held by a wild "+finaldataPokémon[q]["Pokémon"]+".";
					itemAside4SidebarDescriptionText.setAttribute("title","Location Description");
					itemAside4SidebarDescription.appendChild(itemAside4SidebarDescriptionText);
					

					var itemAside4SidebarItem = document.createElement("span");
					itemAside4SidebarItem.setAttribute("name","Item");
					itemAside4SidebarLi.appendChild(itemAside4SidebarItem);

					var itemAside4SidebarItemImg = document.createElement("img");
					itemAside4SidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataPokémonHeldItem[q][JSONPath_HeldItemPercentage[u]+"_"+JSONPath_HeldItem])+".png";
					itemAside4SidebarItemImg.setAttribute("onerror",'this.style.display = "none";')
					itemAside4SidebarItemImg.title = finaldataPokémonHeldItem[q][JSONPath_HeldItemPercentage[u]+"_"+JSONPath_HeldItem];
					itemAside4SidebarItem.appendChild(itemAside4SidebarItemImg);
		
				}
			}
			
		}





		for(var q = 0; q < finaldataLocationItems.length; q++) {
			if (getApplicable(finaldataLocationItems[q]["Game"])) {
				if(finaldataLocationItems[q]["Item"] == item) {
					var itemAside4SidebarLi = document.createElement("li");
					itemAside4SidebarLi.setAttribute("name","Location")
					itemAside4SidebarUl.appendChild(itemAside4SidebarLi);

					var quantity = finaldataLocationItems[q]["Quantity"];

					if (quantity == undefined) {
						quantity = 1;
					}
					if (quantity > 10) {
						quantity = 10;
					}

					var itemAside4SidebarLocation = document.createElement("span");
					var itemAside4SidebarLocationText = document.createElement("h3");
					itemAside4SidebarLocation.setAttribute("name","Location");
					itemAside4SidebarLocationText.innerText = finaldataLocationItems[q]["Location"];
					itemAside4SidebarLocationText.setAttribute("name","Map")
					itemAside4SidebarLocationText.setAttribute("title","Location");
					itemAside4SidebarLi.appendChild(itemAside4SidebarLocation);
					itemAside4SidebarLocation.appendChild(itemAside4SidebarLocationText);

					itemAside4SidebarLocationText.addEventListener("click",dataRedirect)
					itemAside4SidebarLocationText.setAttribute("function","dataRedirect");


					if (finaldataLocationItems[q]["Area"] != undefined && finaldataLocationItems[q]["Area"] != finaldataLocationItems[q]["Location"]) {
						var itemAside4SidebarAreaText = document.createElement("h5");
						itemAside4SidebarAreaText.innerText = finaldataLocationItems[q]["Area"];
						itemAside4SidebarLocation.appendChild(itemAside4SidebarAreaText);
					}



					if (finaldataLocationItems[q]["Description"] != undefined) {
						var itemAside4SidebarDescription = document.createElement("span");
						itemAside4SidebarDescription.setAttribute("name","Description");
						itemAside4SidebarLi.appendChild(itemAside4SidebarDescription);
						var itemAside4SidebarDescriptionText = document.createElement("p");
						itemAside4SidebarDescriptionText.innerText = finaldataLocationItems[q]["Description"];
						itemAside4SidebarDescriptionText.setAttribute("title","Location Description");
						itemAside4SidebarDescription.appendChild(itemAside4SidebarDescriptionText);
					}

					var itemAside4SidebarRequirementOuter = document.createElement("span");
					itemAside4SidebarRequirementOuter.setAttribute("name","Requirement");
					itemAside4SidebarLi.appendChild(itemAside4SidebarRequirementOuter);

					if (finaldataLocationItems[q]["Field"] != undefined) {
	
						var itemAside4SidebarRequirementTitle = document.createElement("h5");
						itemAside4SidebarRequirementTitle.innerText = "Requires:";
						itemAside4SidebarRequirementOuter.appendChild(itemAside4SidebarRequirementTitle);


						if (finaldataLocationItems[q]["Field"].includes("/")) {
							for(var y = 0; y < finaldataLocationItems[q]["Field"].split("/").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(finaldataLocationItems[q]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(finaldataLocationItems[q]["Field"].split("/")[y]));
									itm = getMoveMachine(finaldataLocationItems[q]["Field"].split("/")[y]);
								}
								else if (getItemIcon(finaldataLocationItems[q]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(finaldataLocationItems[q]["Field"].split("/")[y]);
									itm = finaldataLocationItems[q]["Field"].split("/")[y];
								}

								var itemAside4SidebarField = document.createElement("span");
								var itemAside4SidebarFieldText = document.createElement("p");
								itemAside4SidebarFieldText.innerText = finaldataLocationItems[q]["Field"].split("/")[y];
								itemAside4SidebarRequirementOuter.appendChild(itemAside4SidebarField);
								if (itemIcon != undefined) {
									var itemAside4SidebarFieldImage = document.createElement("img");
									itemAside4SidebarFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									itemAside4SidebarFieldImage.title = finaldataLocationItems[q]["Field"].split("/")[y];
									itemAside4SidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
									itemAside4SidebarField.appendChild(itemAside4SidebarFieldImage);
	
									itemAside4SidebarField.setAttribute("name","Item");
									itemAside4SidebarField.setAttribute("value",itm);
									itemAside4SidebarField.addEventListener("click",dataRedirect);
									itemAside4SidebarField.setAttribute("function","dataRedirect");
								}
								itemAside4SidebarField.appendChild(itemAside4SidebarFieldText);
								if (y != finaldataLocationItems[q]["Field"].split("/").length - 1) {
									var itemAside4SidebarFieldSpace = document.createElement("p");
									itemAside4SidebarFieldSpace.innerText = " or ";
									itemAside4SidebarRequirementOuter.appendChild(itemAside4SidebarFieldSpace)
								}
							}
						}
						else if (finaldataLocationItems[q]["Field"].includes(",")) {
							for(var y = 0; y < finaldataLocationItems[q]["Field"].split(",").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(finaldataLocationItems[q]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(finaldataLocationItems[q]["Field"].split(",")[y]));
									itm = getMoveMachine(finaldataLocationItems[q]["Field"].split(",")[y]);
								}
								else if (getItemIcon(finaldataLocationItems[q]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(finaldataLocationItems[q]["Field"].split(",")[y]);
									itm = finaldataLocationItems[q]["Field"].split(",")[y];
								}

								var itemAside4SidebarField = document.createElement("span");
								var itemAside4SidebarFieldText = document.createElement("p");
								itemAside4SidebarFieldText.innerText = finaldataLocationItems[q]["Field"].split(",")[y];
								itemAside4SidebarRequirementOuter.appendChild(itemAside4SidebarField);
								if (itemIcon != undefined) {
									var itemAside4SidebarFieldImage = document.createElement("img");
									itemAside4SidebarFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									itemAside4SidebarFieldImage.title = finaldataLocationItems[q]["Field"].split(",")[y];
									itemAside4SidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
									itemAside4SidebarField.appendChild(itemAside4SidebarFieldImage);
	
									itemAside4SidebarField.setAttribute("name","Item");
									itemAside4SidebarField.setAttribute("value",itm);
									itemAside4SidebarField.addEventListener("click",dataRedirect);
									itemAside4SidebarField.setAttribute("function","dataRedirect");
								}
								itemAside4SidebarField.appendChild(itemAside4SidebarFieldText);
							}
						}
						else {
							var itemIcon;
							var itm;
							if (getMoveMachine(finaldataLocationItems[q]["Field"]) != undefined) {
								itemIcon = getItemIcon(getMoveMachine(finaldataLocationItems[q]["Field"]));
								itm = getMoveMachine(finaldataLocationItems[q]["Field"]);
							}
							else if (getItemIcon(finaldataLocationItems[q]["Field"]) != undefined) {
								itemIcon = getItemIcon(finaldataLocationItems[q]["Field"]);
								itm = finaldataLocationItems[q]["Field"];
							}

							var itemAside4SidebarField = document.createElement("span");
							var itemAside4SidebarFieldText = document.createElement("p");
							itemAside4SidebarFieldText.innerText = finaldataLocationItems[q]["Field"];
							itemAside4SidebarRequirementOuter.appendChild(itemAside4SidebarField);
							if (itemIcon != undefined) {
								var itemAside4SidebarFieldImage = document.createElement("img");
								itemAside4SidebarFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
								itemAside4SidebarFieldImage.title = finaldataLocationItems[q]["Field"];
								itemAside4SidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
								itemAside4SidebarFieldImage.setAttribute("name","Item");
								itemAside4SidebarField.appendChild(itemAside4SidebarFieldImage);

								itemAside4SidebarField.setAttribute("name","Item");
								itemAside4SidebarField.setAttribute("value",itm);
								itemAside4SidebarField.addEventListener("click",dataRedirect);
								itemAside4SidebarField.setAttribute("function","dataRedirect");
							}
							itemAside4SidebarField.appendChild(itemAside4SidebarFieldText);

						}
					}

					var itemAside4SidebarItem = document.createElement("span");
					itemAside4SidebarItem.setAttribute("name","Item");
					itemAside4SidebarLi.appendChild(itemAside4SidebarItem);

					for(var u = 0; u < quantity; u++) {
						var itemAside4SidebarItemImg = document.createElement("img");
						itemAside4SidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataLocationItems[q]["Item"])+".png";
						itemAside4SidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
						itemAside4SidebarItem.appendChild(itemAside4SidebarItemImg);
					}

					if (quantity != 1) { 
						itemAside4SidebarItem.title = finaldataLocationItems[q]["Quantity"]+"x "+finaldataLocationItems[q]["Item"];
					}
					else {
						itemAside4SidebarItem.title = finaldataLocationItems[q]["Item"];
					}




					var itemAside4SidebarItemText = document.createElement("p");
					if (quantity != 1) { 
						itemAside4SidebarItemText.innerHTML = finaldataLocationItems[q]["Quantity"]+"x <br>"+finaldataLocationItems[q]["Item"];
					}
					else {
						itemAside4SidebarItemText.innerHTML = finaldataLocationItems[q]["Item"];
					}
					itemAside4SidebarItem.appendChild(itemAside4SidebarItemText);

					if (finaldataLocationItems[q]["Hidden"] == "Hidden") {
						itemAside4SidebarLi.classList.add("hidden");
						itemAside4SidebarItem.title += " (Hidden)";
					}

			
				}
			}
		}



		for(var q = 0; q < finaldataLocationPickup.length; q++) {
			if (getApplicable(finaldataLocationPickup[q]["Game"])) {
				if(finaldataLocationPickup[q]["Item"] == item) {
					var itemAside4SidebarLi = document.createElement("li");
					itemAside4SidebarLi.setAttribute("name","Pickup");
					itemAside4SidebarUl.appendChild(itemAside4SidebarLi);

			
					var itemAside4SidebarPickup = document.createElement("span");
					var itemAside4SidebarPickupTitle = document.createElement("h5");
					var itemAside4SidebarPickupText = document.createElement("h3");
					itemAside4SidebarPickup.setAttribute("name","Ability");
					itemAside4SidebarPickupTitle.innerText = "Ability";
					itemAside4SidebarPickupText.innerText = "Pickup";
					itemAside4SidebarPickupText.title = "Pickup";
					itemAside4SidebarPickupText.setAttribute("name","Ability");
					itemAside4SidebarLi.appendChild(itemAside4SidebarPickup);
					itemAside4SidebarPickup.appendChild(itemAside4SidebarPickupTitle);
					itemAside4SidebarPickup.appendChild(itemAside4SidebarPickupText);


					itemAside4SidebarPickupText.addEventListener("click",dataRedirect)
					itemAside4SidebarPickupText.setAttribute("function","dataRedirect");

	

					var itemAside4SidebarDescription = document.createElement("span");
					itemAside4SidebarDescription.setAttribute("name","Description");
					itemAside4SidebarLi.appendChild(itemAside4SidebarDescription);
					var itemAside4SidebarDescriptionText = document.createElement("p");
					itemAside4SidebarDescriptionText.setAttribute("title","Location Description");
					itemAside4SidebarDescription.appendChild(itemAside4SidebarDescriptionText);


					var PickupText;
					var PickupLevel = "";
					var PickupRate = "";
					var PickupLocation = "";
					var PickupAdditional = "";

	

					if (finaldataLocationPickup[q]["Level"] != undefined) {
						PickupLevel = 'Level '+finaldataLocationPickup[q]["Level"];
					}
					if (finaldataLocationPickup[q]["Rate"] != undefined) {
						PickupRate = finaldataLocationPickup[q]["Rate"];
					}
					if (finaldataLocationPickup[q]["Location"] != undefined) {
						PickupLocation = 'at <span name="Map" title="'+finaldataLocationPickup[q]["Location"]+'" onclick="dataRedirect()">'+finaldataLocationPickup[q]["Location"]+'</span>';
					}
					if (finaldataLocationPickup[q]["Additional"] != undefined) {
						PickupAdditional = 'on '+finaldataLocationPickup[q]["Additional"];
					}

					PickupText = PickupRate+' chance to be found by a '+PickupLevel+' Pokémon '+PickupAdditional+' '+PickupLocation+' with the ability <span name="Ability" title="Pickup" onclick="dataRedirect()">Pickup</span>';

					PickupText = PickupText.replaceAll("  "," ");

					itemAside4SidebarDescriptionText.innerHTML = PickupText;


					var itemAside4SidebarItem = document.createElement("span");
					itemAside4SidebarItem.setAttribute("name","Item");
					itemAside4SidebarItem.title = finaldataLocationPickup[q]["Item"];
					itemAside4SidebarLi.appendChild(itemAside4SidebarItem);

			
					var itemAside4SidebarItemImg = document.createElement("img");
					itemAside4SidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataLocationPickup[q]["Item"])+".png";
					itemAside4SidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
					itemAside4SidebarItem.appendChild(itemAside4SidebarItemImg);

					var itemAside4SidebarItemText = document.createElement("p");
					itemAside4SidebarItemText.innerText = finaldataLocationItems[q]["Item"];
					itemAside4SidebarItem.appendChild(itemAside4SidebarItemText);

					
				}
			}
		}



		itemAside4SidebarValueCurrencyImg.src = "";
		itemAside4SidebarValueCurrencyImg.title = "";
		itemAside4SidebarValueCurrencyImg.style.display = "none";
		itemAside4SidebarValueText.innerText = "N/A";
		itemAside4SidebarValueText.removeAttribute("title");

		for(var q = 0; q < finaldataItemsPrice.length; q++) {
			if (finaldataItemsPrice[q]["Item"] == item) {
				if (getApplicable(finaldataItemsPrice[q]["Game"])) {
					if (finaldataItemsPrice[q]["Sell Amount"] != undefined) {
						if (finaldataItemsPrice[q]["Sell Currency"] != undefined) {
							itemAside4SidebarValueCurrencyImg.src = './media/Images/Misc/Currency/'+MEDIAPath_Currency+'/'+finaldataItemsPrice[q]["Sell Currency"]+'.png';
							itemAside4SidebarValueCurrencyImg.style.display = "unset";
							itemAside4SidebarValueCurrencyImg.title = finaldataItemsPrice[q]["Sell Currency"];
						}

						itemAside4SidebarValueText.innerText = finaldataItemsPrice[q]["Sell Amount"];
						
						if(finaldataItemsPrice[q]["Sell Additional"] != undefined) {
							itemAside4SidebarValueText.setAttribute("title",finaldataItemsPrice[q]["Sell Additional"]);
						}
					}
				}
			}
		}

		
		






	}
};