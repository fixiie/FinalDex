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
	var itemAside2TitleID = document.createElement("h1");
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
		itemAside1OptionsPocketInput.addEventListener("click", function() {preventCheckboxZero(itemAside1OptionsPocketOuter);});
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
	var itemAside4SidebarTitleTop = document.createElement("li");
	var itemAside4SidebarTitleTopText = document.createElement("h4");
	var itemAside4SidebarTitleBottom = document.createElement("li");
	var itemAside4SidebarUl = document.createElement("ul");
	var itemAside4SidebarPrice = document.createElement("div");

	itemAside4Sidebar.classList.add("item-sidebar");
	itemAside4SidebarTitle.classList.add("item-sidebar-title");
	itemAside4SidebarTitleTopText.innerText = "Acquisition";
	itemAside4SidebarPrice.classList.add("item-sidebar-price");
	itemAside4.appendChild(itemAside4Sidebar);
	itemAside4Sidebar.appendChild(itemAside4SidebarTitle);
	itemAside4SidebarTitle.appendChild(itemAside4SidebarTitleTop);
	itemAside4SidebarTitleTop.appendChild(itemAside4SidebarTitleTopText);
	itemAside4SidebarTitle.appendChild(itemAside4SidebarTitleBottom);
	itemAside4Sidebar.appendChild(itemAside4SidebarUl);
	itemAside4Sidebar.appendChild(itemAside4SidebarPrice);

	var itemAside4SidebarCost = document.createElement("span");
	var itemAside4SidebarCostTitle = document.createElement("h4");
	var itemAside4SidebarCostText = document.createElement("span");
	itemAside4SidebarCostTitle.innerText = "Cost";
	itemAside4SidebarCost.setAttribute("name","Cost");
	itemAside4SidebarPrice.appendChild(itemAside4SidebarCost);
	itemAside4SidebarCost.appendChild(itemAside4SidebarCostTitle);
	itemAside4SidebarCost.appendChild(itemAside4SidebarCostText);

	var itemAside4SidebarValue = document.createElement("span");
	var itemAside4SidebarValueTitle = document.createElement("h4");
	var itemAside4SidebarValueText = document.createElement("span");
	itemAside4SidebarValueTitle.innerText = "Value";
	itemAside4SidebarValue.setAttribute("name","Value");
	itemAside4SidebarPrice.appendChild(itemAside4SidebarValue);
	itemAside4SidebarValue.appendChild(itemAside4SidebarValueTitle);
	itemAside4SidebarValue.appendChild(itemAside4SidebarValueText);



	var sidebarItemList = ["Finite", "Repeatable"];
	for(var q = 0; q < sidebarItemList.length; q++) {
		var itemAside4SidebarTitleBottomText = document.createElement("h6");
		itemAside4SidebarTitleBottomText.innerText = sidebarItemList[q];
		itemAside4SidebarTitleBottom.appendChild(itemAside4SidebarTitleBottomText);
	}
	for(var i = 0; i < 0; i++) {
		var itemAside4SidebarLi = document.createElement("li");
		itemAside4SidebarUl.appendChild(itemAside4SidebarLi);
		for(var q = 0; q < sidebarItemList.length; q++) {
			var itemAside4SidebarLiTextOuter = document.createElement("span");
			var itemAside4SidebarLiText = document.createElement("p");
			itemAside4SidebarLiText.innerText = "data";
			itemAside4SidebarLiText.setAttribute("title", sidebarItemList[q]);
			itemAside4SidebarLi.appendChild(itemAside4SidebarLiTextOuter);
			itemAside4SidebarLiTextOuter.appendChild(itemAside4SidebarLiText);
		}
	}



	var firstiteration = true;
	for(var q = 0; q < finaldataItems.length; q++) {
		if (finaldataItems[q]["Name_"+JSONPath_Items] != undefined && finaldataItems[q]["Pocket_"+JSONPath_Items] != "Unknown") {
			var itemAside1OptionsInput = document.createElement("input");
			var itemAside1OptionsLabel = document.createElement("label");
			var itemAside1OptionsLabelImageOuter = document.createElement("span");
			var itemAside1OptionsLabelImage = document.createElement("img");
			var itemAside1OptionsLabelText = document.createElement("p");
			itemAside1OptionsInput.setAttribute("type", "radio");
			itemAside1OptionsInput.setAttribute("name", "item-options");
			itemAside1OptionsInput.setAttribute("id", "item-options-" + q);
			itemAside1OptionsInput.setAttribute("autocomplete", "off");
			itemAside1OptionsInput.value = q;
			itemAside1OptionsLabel.setAttribute("for", "item-options-" + q);
			itemAside1OptionsLabel.setAttribute("data-search-name", finaldataItems[q]["Name_"+JSONPath_Items].toLowerCase());
			itemAside1OptionsLabel.setAttribute("data-pocket",finaldataItems[q]["Pocket_"+JSONPath_Items].toLowerCase());
			itemAside1OptionsLabel.setAttribute("name", "medium");
			itemAside1OptionsLabelImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+finaldataItems[q]["Icon_"+JSONPath_Items]+".png";
			itemAside1OptionsLabelImage.setAttribute("onerror","this.style.display='none';");
			itemAside1OptionsLabelText.innerText = finaldataItems[q]["Name_"+JSONPath_Items];
			itemAside1Options.appendChild(itemAside1OptionsInput);
			itemAside1Options.appendChild(itemAside1OptionsLabel);
			itemAside1OptionsLabel.appendChild(itemAside1OptionsLabelImageOuter);
			itemAside1OptionsLabelImageOuter.appendChild(itemAside1OptionsLabelImage);
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


		for(var q = 0; q < finaldataItemsDescription.length; q++) {
			if (finaldataItemsDescription[q]["Item"] == item) {
				if (item == "Energy Root") {
					console.log(getApplicable(finaldataItemsDescription[q]["Game"]))
				}
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



		itemAside4SidebarCostText.innerText = "N/A";
		itemAside4SidebarCostText.removeAttribute("title");
		itemAside4SidebarValueText.innerText = "N/A";
		itemAside4SidebarValueText.removeAttribute("title");

		for(var q = 0; q < finaldataItemsPrice.length; q++) {
			if (finaldataItemsPrice[q]["Item"] == item) {
				if (getApplicable(finaldataItemsPrice[q]["Game"])) {
					if (finaldataItemsPrice[q]["Buy"] != undefined) {
						itemAside4SidebarCostText.innerHTML = finaldataItemsPrice[q]["Buy"].replaceAll("Pokémon Dollar ",'<img src="./media/Images/Misc/Currency/'+MEDIAPath_Currency+'/Pokémon Dollar.png" title="Pokémon Dollar">');
						if (finaldataItemsPrice[q]["Buy Information"] != undefined) {
							itemAside4SidebarCostText.setAttribute("title",finaldataItemsPrice[q]["Buy Information"]);
						}
					}
				}
			}
			if (finaldataItemsPrice[q]["Item"] == item) {
				if (getApplicable(finaldataItemsPrice[q]["Game"])) {
					if (finaldataItemsPrice[q]["Sell"] != undefined) {
						itemAside4SidebarValueText.innerHTML = finaldataItemsPrice[q]["Sell"].replaceAll("Pokémon Dollar ",'<img src="./media/Images/Misc/Currency/'+MEDIAPath_Currency+'/Pokémon Dollar.png" title="Pokémon Dollar">');
						if(finaldataItemsPrice[q]["Sell Information"] != undefined) {
							itemAside4SidebarValueText.setAttribute("title",finaldataItemsPrice[q]["Sell Information"]);
						}
					}
				}
			}
		}

		
		for(var q = 0; q < finaldataItemsPriceExtra.length; q++) {
			if (finaldataItemsPriceExtra[q]["Item"] == item) {
				if (getApplicable(finaldataItemsPriceExtra[q]["Game"])) {
					if (finaldataItemsPriceExtra[q]["Buy Extra"] != undefined) {
						itemAside4SidebarCostText.title += finaldataItemsPriceExtra[q]["Buy Extra"];
					}
					if (finaldataItemsPriceExtra[q]["Sell Extra"] != undefined) {
						itemAside4SidebarValueText.title += finaldataItemsPriceExtra[q]["Sell Extra"];
					}
				}
			}
		}






	}
};