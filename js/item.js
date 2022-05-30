var createItem = function() {
	var itemOuter = document.createElement("div");
	var itemAside1 = document.createElement("aside");
	var itemAside1OptionsTitleOuter = document.createElement("div");
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
	var itemAside3DescriptionText = document.createElement("p");
	var itemAside3EffectTitle = document.createElement("h3");
	var itemAside3EffectText = document.createElement("p");
	var itemAside4 = document.createElement("aside");
	itemOuter.setAttribute("id", "item-outer");
	itemOuter.setAttribute("name", "Items");
	itemAside1.setAttribute("id", "item-aside1");
	itemAside1OptionsTitleOuter.setAttribute("id", "item-options-title");
	itemAside1OptionsSearchOuter.setAttribute("id", "item-options-search");
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
	itemAside2DebutText.innerText = "Introduced in Generation I";
	itemAside3.setAttribute("id", "item-aside3");
	itemAside3Description.classList.add("item-description");
	itemAside3DescriptionText.innerText = "A peculiar stone that makes certain species of Pokémon evolve. It is as black as the night sky.";
	itemAside3EffectTitle.innerText = "Effect";
	itemAside3EffectText.innerHTML = "Can be used to evolve one of several Pokémon. This consumes the Moon Stone.<li>Causes Nidorina to evolve into Nidoqueen</li><li>Causes Nidorino to evolve into Nidoking</li><li>Causes Clefairy to evolve into Clefable</li><li>Causes Jigglypuff to evolve into Wigglytuff</li><li>Causes Skitty to evolve into Delcatty</li><li>Causes Munna to evolve into Musharna</li>";
	itemAside4.setAttribute("id", "item-aside4");
	document.querySelector("#contain").appendChild(itemOuter);
	itemOuter.appendChild(itemAside1);
	itemAside1.appendChild(itemAside1OptionsTitleOuter);
	itemAside1OptionsTitleOuter.appendChild(itemAside1OptionsSearchOuter);
	itemAside1OptionsSearchOuter.appendChild(itemAside1OptionsSearchExit);
	itemAside1OptionsSearchOuter.appendChild(itemAside1OptionsSearch);
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
	itemAside3Description.appendChild(itemAside3DescriptionText);
	itemAside3Description.appendChild(itemAside3EffectTitle);
	itemAside3Description.appendChild(itemAside3EffectText);
	itemOuter.appendChild(itemAside4);
	var itemAside4Sidebar = document.createElement("div");
	var itemAside4SidebarTitle = document.createElement("div");
	var itemAside4SidebarTitleTop = document.createElement("li");
	var itemAside4SidebarTitleTopText = document.createElement("h4");
	var itemAside4SidebarTitleBottom = document.createElement("li");
	var itemAside4SidebarUl = document.createElement("ul");
	var itemAside4SidebarValue = document.createElement("div");
	var itemAside4SidebarValueImgOuter = document.createElement("div");
	var itemAside4SidebarValueImg = document.createElement("img");
	var itemAside4SidebarValueTextOuter = document.createElement("div");
	var itemAside4SidebarValueTitle = document.createElement("h4");
	itemAside4Sidebar.classList.add("item-sidebar");
	itemAside4SidebarTitle.classList.add("item-sidebar-title");
	itemAside4SidebarTitleTopText.innerText = "Acquisition";
	itemAside4SidebarValue.classList.add("item-sidebar-value");
	itemAside4SidebarValueImg.src = "./media/Images/Misc/Pocket/Icon/" + MEDIAPath_Pocket_Icon + "/" + "Key Items" + ".png";
	itemAside4SidebarValueImg.setAttribute("title", "Key Items" + " Pocket");
	itemAside4SidebarValueImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
	itemAside4SidebarValueTitle.innerText = "Value";
	itemAside4.appendChild(itemAside4Sidebar);
	itemAside4Sidebar.appendChild(itemAside4SidebarTitle);
	itemAside4SidebarTitle.appendChild(itemAside4SidebarTitleTop);
	itemAside4SidebarTitleTop.appendChild(itemAside4SidebarTitleTopText);
	itemAside4SidebarTitle.appendChild(itemAside4SidebarTitleBottom);
	itemAside4Sidebar.appendChild(itemAside4SidebarUl);
	itemAside4Sidebar.appendChild(itemAside4SidebarValue);
	itemAside4SidebarValue.appendChild(itemAside4SidebarValueImgOuter);
	itemAside4SidebarValueImgOuter.appendChild(itemAside4SidebarValueImg);
	itemAside4SidebarValue.appendChild(itemAside4SidebarValueTextOuter);
	itemAside4SidebarValueTextOuter.appendChild(itemAside4SidebarValueTitle);
	var sidebarItemValue = ["1000", "3000"];
	for(var q = 0; q < sidebarItemValue.length; q++) {
		var itemAside4SidebarValueTextContent = document.createElement("span");
		var itemAside4SidebarValueImg = document.createElement("img");
		var itemAside4SidebarValueText = document.createElement("p");
		itemAside4SidebarValueImg.src = "./media/Images/Misc/Currency/" + MEDIAPath_Currency + "/" + "Pokémon Dollar" + ".png";
		itemAside4SidebarValueImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
		itemAside4SidebarValueTextOuter.appendChild(itemAside4SidebarValueTextContent);
		itemAside4SidebarValueTextContent.appendChild(itemAside4SidebarValueText);
		itemAside4SidebarValueText.appendChild(itemAside4SidebarValueImg);
		itemAside4SidebarValueText.innerHTML += sidebarItemValue[q];
	}
	var sidebarItemList = ["Finite", "Repeatable"];
	for(var q = 0; q < sidebarItemList.length; q++) {
		var itemAside4SidebarTitleBottomText = document.createElement("h6");
		itemAside4SidebarTitleBottomText.innerText = sidebarItemList[q];
		itemAside4SidebarTitleBottom.appendChild(itemAside4SidebarTitleBottomText);
	}
	for(var i = 0; i < Math.floor(Math.random() * 100); i++) {
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
	for(var q = 0; q < itemOptionsTitle.length; q++) {
		var itemAside1OptionsInput = document.createElement("input");
		var itemAside1OptionsLabel = document.createElement("label");
		itemAside1OptionsInput.setAttribute("type", "radio");
		itemAside1OptionsInput.setAttribute("name", "item-options");
		itemAside1OptionsInput.setAttribute("id", "item-options-" + q);
		itemAside1OptionsInput.setAttribute("autocomplete", "off");
		itemAside1OptionsInput.value = q;
		itemAside1OptionsLabel.setAttribute("for", "item-options-" + q);
		itemAside1OptionsLabel.setAttribute("data-search-name", itemOptionsTitle[q].toLowerCase());
		itemAside1OptionsLabel.setAttribute("name", "medium");
		itemAside1OptionsLabel.innerText = itemOptionsTitle[q];
		itemAside1Options.appendChild(itemAside1OptionsInput);
		itemAside1Options.appendChild(itemAside1OptionsLabel);
		itemAside1OptionsInput.addEventListener("click", itemOptionsSelector);

		function itemOptionsSelector() {
			itemAside2TitleName.innerText = itemOptionsTitle[this.value];
		}
		if(q == 0) {
			itemAside1OptionsLabel.click();
		}
	}
};