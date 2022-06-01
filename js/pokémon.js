var createPokémon = function() {
	var contentOuter = document.createElement("div");
	contentOuter.setAttribute("id", "pokémon-outer");
	contentOuter.setAttribute("name", "Pokémon");
	document.querySelector("#contain").appendChild(contentOuter);
	var AreaFilterTemp1 = [];
	for(var q = 0; q < finaldataPokémonArea.length; q++) {
		if(finaldataPokémonArea[q]["Filter_" + JSONPath_Area] != undefined) {
			AreaFilterTemp1.push(finaldataPokémonArea[q]["Filter_" + JSONPath_Area]);
		}
	}
	let AreaFilterTemp2 = [...AreaFilterTemp1];
	AreaFilterTemp2.splice(AreaFilterTemp2.indexOf(""), 1);
	AreaFilterTemp2.splice(AreaFilterTemp2.indexOf("Unobtainable"), 1);
	let AreaFilterNumberTemp1 = new Set(AreaFilterTemp2);
	let AreaFilterNumberTemp2 = [...AreaFilterNumberTemp1];
	AreaFilterNumberTemp2.forEach(function(val, u) {
		if(val == "Catchable") AreaFilterNumberTemp2[u] = "1.1";
		if(val == "Snaggable") AreaFilterNumberTemp2[u] = "1.2";
		if(val == "Evolve") AreaFilterNumberTemp2[u] = "2.1";
		if(val == "Trade Evolution") AreaFilterNumberTemp2[u] = "2.2";
		if(val == "Breed") AreaFilterNumberTemp2[u] = "2.3";
		if(val == "Gift") AreaFilterNumberTemp2[u] = "3.1";
		if(val == "Choice") AreaFilterNumberTemp2[u] = "3.2";
		if(val == "Swarm") AreaFilterNumberTemp2[u] = "4.1";
		if(val == "Max Raid Battle") AreaFilterNumberTemp2[u] = "4.2";
		if(val == "Poké Radar") AreaFilterNumberTemp2[u] = "4.3";
		if(val == "The Underground") AreaFilterNumberTemp2[u] = "4.4";
		if(val == "White Forest") AreaFilterNumberTemp2[u] = "4.5";
		if(val == "Unique") AreaFilterNumberTemp2[u] = "5.1";
		if(val == "Event") AreaFilterNumberTemp2[u] = "5.2";
		if(val == "Unavailable") AreaFilterNumberTemp2[u] = "6.1";
		if(val == "Unobtainable") AreaFilterNumberTemp2[u] = "6.2";
	});
	AreaFilterNumberTemp2.sort();
	AreaFilterNumberTemp2.forEach(function(val, u) {
		if(val == "1.1") AreaFilterNumberTemp2[u] = "Catchable";
		if(val == "1.2") AreaFilterNumberTemp2[u] = "Snaggable";
		if(val == "2.1") AreaFilterNumberTemp2[u] = "Evolve";
		if(val == "2.2") AreaFilterNumberTemp2[u] = "Trade Evolution";
		if(val == "2.3") AreaFilterNumberTemp2[u] = "Breed";
		if(val == "3.1") AreaFilterNumberTemp2[u] = "Gift";
		if(val == "3.2") AreaFilterNumberTemp2[u] = "Choice";
		if(val == "4.1") AreaFilterNumberTemp2[u] = "Swarm";
		if(val == "4.2") AreaFilterNumberTemp2[u] = "Max Raid Battle";
		if(val == "4.3") AreaFilterNumberTemp2[u] = "Poké Radar";
		if(val == "4.4") AreaFilterNumberTemp2[u] = "The Underground";
		if(val == "4.5") AreaFilterNumberTemp2[u] = "White Forest";
		if(val == "5.1") AreaFilterNumberTemp2[u] = "Unique";
		if(val == "5.2") AreaFilterNumberTemp2[u] = "Event";
		if(val == "6.1") AreaFilterNumberTemp2[u] = "Unavailable";
		if(val == "6.2") AreaFilterNumberTemp2[u] = "Unobtainable";
	});
	let AreaFilter = new Set(AreaFilterNumberTemp2);
	let AreaFilters = [...AreaFilter];
	var navigation = document.createElement("nav");
	var navigationContent = document.createElement("ul");
	var navigationDex = document.createElement("li");
	var navigationDexContent = document.createElement("a");
	var navigationSearch = document.createElement("li");
	var navigationSearchContent = document.createElement("a");
	var navigationSearchInput = document.createElement("input");
	var navigationSearchExit = document.createElement("span");
	var navigationCount = document.createElement("li");
	var navigationCountContent = document.createElement("a");
	var navigationCountSpan1 = document.createElement("span");
	var navigationCountSpan2 = document.createElement("span");
	var navigationCountSpan3 = document.createElement("span");
	var navigationGame = document.createElement("li");
	var navigationGameContent = document.createElement("a");
	var navigationGameImg = document.createElement("img");
	var navigationSettings = document.createElement("li");
	var navigationSettingsImg = document.createElement("img");

	navigationDex.setAttribute("id", "dexswitch-outer");
	navigationDexContent.setAttribute("id", "dexswitch");
	navigationSearch.setAttribute("id", "search-outer");
	navigationSearchContent.setAttribute("id", "search");
	navigationSearchInput.setAttribute("id", "searchbar");
	navigationSearchInput.setAttribute("type", "text");
	navigationSearchInput.setAttribute("placeholder", "Search...");
	navigationSearchInput.setAttribute("onfocus", "this.placeholder = ''");
	navigationSearchInput.setAttribute("onblur", "this.placeholder = 'Search...'");
	navigationSearchInput.setAttribute("autocomplete", "off");
	navigationSearchInput.setAttribute("tabindex", "0");
	var searchoptions = ["checked:: [true/false]", "catchable:: [wild/gift/...]", "evolution:: [charizard/slowbro/...]", "type:: [normal/fighting/...]", "ability:: [static/shadow tag/...]", "catchrate:: [value]", "eggcycle:: [value]", "genderratio:: [7:0/3:1/...]", "egggroup:: [field/human-like/...]", "expyield:: [value]", "expyieldcategory:: [very high/medium/...]", "levelrate:: [value]", "helditem:: [silver powder/sitrus berry/...]", "variant:: [default/form/...]", "statshp:: [value]", "...", "evyieldhp:: [value]", "...", "equal::", "doesnotequal:!", "greaterthan:>", "lessthan:<", ];
	if(Ability.length <= 0) {
		for(var q = 0; q < searchoptions.length; q++) {
			if(searchoptions[q].includes("ability")) {
				searchoptions.splice(q, 1);
			}
		}
	}
	if(Egg != true) {
		for(var q = 0; q < searchoptions.length; q++) {
			if(searchoptions[q].includes("egg")) {
				searchoptions.splice(q, 1);
			}
		}
	}
	if(Gender != true) {
		for(var q = 0; q < searchoptions.length; q++) {
			if(searchoptions[q].includes("gender")) {
				searchoptions.splice(q, 1);
			}
		}
	}
	if(HeldItem != true) {
		for(var q = 0; q < searchoptions.length; q++) {
			if(searchoptions[q].includes("item")) {
				searchoptions.splice(q, 1);
			}
		}
	}
	navigationSearchInput.setAttribute("title", " Search Options:" + "\n" + searchoptions.join("\n"));
	navigationSearchExit.setAttribute("id", "search-exit");
	navigationCount.setAttribute("id", "count-outer");
	navigationCountContent.setAttribute("id", "count");
	navigationCountSpan1.setAttribute("id", "count-current");
	navigationCountSpan2.setAttribute("id", "count-slash");
	navigationCountSpan2.innerText = "/";
	navigationCountSpan3.setAttribute("id", "count-total");
	navigationGame.setAttribute("id", "gametitle-outer");
	navigationGameContent.setAttribute("id", "gametitle");
	navigationGameImg.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
	navigationSettings.setAttribute("id", "settings-outer");
	navigationSettingsImg.src = "./media/Images/Misc/FinalDex/Cog.png";



	var navigationDexInput = document.createElement("input");
	var navigationDexLabel = document.createElement("label");
	navigationDexInput.setAttribute("type", "radio");
	navigationDexInput.setAttribute("value", "1");
	navigationDexInput.setAttribute("name", "finaldex-dexswitch" + GameID);
	navigationDexInput.setAttribute("id", "dexswitch1");
	navigationDexInput.setAttribute("autocomplete", "off");
	navigationDexLabel.setAttribute("for", "dexswitch1");
	navigationDexLabel.setAttribute("name", "National Pokédex");
	navigationDexLabel.innerText = "National Pokédex";
	navigationDexContent.appendChild(navigationDexInput);
	navigationDexContent.appendChild(navigationDexLabel);
	for(var i = 0; i < JSONPath_Pokédex.length; i++) {
		let x = i + 2;
		var navigationDexInput = document.createElement("input");
		var navigationDexLabel = document.createElement("label");
		navigationDexInput.setAttribute("type", "radio");
		navigationDexInput.setAttribute("value", x);
		navigationDexInput.setAttribute("name", "finaldex-dexswitch" + GameID);
		navigationDexInput.setAttribute("id", "dexswitch" + x);
		navigationDexInput.setAttribute("autocomplete", "off");
		navigationDexLabel.setAttribute("for", "dexswitch" + x);
		navigationDexLabel.setAttribute("name", JSONPath_Pokédex[i].split("_")[0]);
		navigationDexLabel.innerText = JSONPath_Pokédex[i].split("_")[0];
		navigationDexContent.appendChild(navigationDexInput);
		navigationDexContent.appendChild(navigationDexLabel);
	}
	contentOuter.appendChild(navigation);
	navigation.appendChild(navigationContent);
	navigationContent.appendChild(navigationDex);
	navigationDex.appendChild(navigationDexContent);
	navigationContent.appendChild(navigationCount);
	navigationCount.appendChild(navigationCountContent);
	navigationCountContent.appendChild(navigationCountSpan1);
	navigationCountContent.appendChild(navigationCountSpan2);
	navigationCountContent.appendChild(navigationCountSpan3);
	navigationContent.appendChild(navigationSearch);
	navigationSearch.appendChild(navigationSearchContent);
	navigationSearchContent.appendChild(navigationSearchExit);
	navigationSearchContent.appendChild(navigationSearchInput);
	navigationContent.appendChild(navigationGame);
	navigationGame.appendChild(navigationGameContent);
	navigationGameContent.appendChild(navigationGameImg);
	navigationContent.appendChild(navigationSettings);
	navigationSettings.appendChild(navigationSettingsImg);

    var team = document.createElement("main");
    var teamNav = document.createElement("section");
    var teamParty = document.createElement("section");
    var teamBox = document.createElement("section");
    var teamPartyButton = document.createElement("button");
    var teamBoxButton = document.createElement("button");
    var teamPartyButtonInner = document.createElement("span");
    var teamBoxButtonInner = document.createElement("span");
    team.setAttribute("name","Team");
    teamPartyButton.innerText = "Party";
    teamBoxButton.innerText = "Box";
    teamPartyButtonInner.classList.add("blinkindicator");
    teamBoxButtonInner.classList.add("blinkindicator");
    teamParty.setAttribute("name","Party");
    teamBox.setAttribute("name","Box");

    contentOuter.appendChild(team);
    team.appendChild(teamParty);
    team.appendChild(teamBox);
    team.appendChild(teamNav);
    teamNav.appendChild(teamPartyButton);
    teamPartyButton.appendChild(teamPartyButtonInner);
    teamNav.appendChild(teamBoxButton);
    teamBoxButton.appendChild(teamBoxButtonInner);

    teamPartyButton.addEventListener("click", partyBoxOpen);
    teamBoxButton.addEventListener("click", partyBoxOpen);

    navigationSettingsImg.addEventListener("click", openSettings);


    itemOptionsTitle.unshift("Item");
    if (Natures.length > 0) {
        Natures.unshift("Nature")
    }

    for (var i = 0; i < 6; i++) {
        var ranPok = Math.floor(Math.random() * 100) + 1;
        var ranItem = Math.floor(Math.random() * itemOptionsTitle.length);

        var teamDiv = document.createElement("div");
        var teamAside1 = document.createElement("aside");
        var teamAside2 = document.createElement("aside");
        var teamAdd = document.createElement("button");
        var teamLeft = document.createElement("span");
        var teamExitButton = document.createElement("button");
        var teamQuestionButton = document.createElement("button");
        var teamPokémon = document.createElement("span");
        var teamHeldItem = document.createElement("span");
        var teamHeldItemInput = document.createElement("select");
        var teamImgOuter = document.createElement("span");
        var teamImg = document.createElement("img");
        var teamHeldItemImage = document.createElement("img");
        var teamMiddle = document.createElement("span");
        var teamCount = document.createElement("h5");
        var teamGender = document.createElement("select");

        var teamRight = document.createElement("span");
        var teamStatsButton = document.createElement("button");
        var teamExportButton = document.createElement("button");
        var teamLevel = document.createElement("input");
        var teamNickOuter = document.createElement("span");
        var teamNick = document.createElement("input");

        if (ImageType_Extension[1] == "GIF") {
            teamImg.src = "./media/Images/Pokémon/Battle/GIF/Normal/Front/"+ImageType_Path[1]+"/" + getPokémonMediaPath(getPokémonName(getIntID("",ranPok))) + ".gif";
        }
        else {
            teamImg.src = "./media/Images/Pokémon/Battle/PNG/Normal/Front/"+ImageType_Path[0]+"/" + getPokémonMediaPath(getPokémonName(getIntID("",ranPok))) + ".png";
        }
        teamImg.setAttribute("value", getIntID("",ranPok));
        teamImg.setAttribute("title",getPokémonName(getIntID("",ranPok)));
        teamImg.addEventListener("click", modalData);
        teamImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
        teamHeldItemImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemOptionsTitle[ranItem]+".png";
        teamHeldItemImage.setAttribute("onerror", "this.src='./media/Images/Misc/FinalDex/Error.png'");
        teamHeldItemImage.title = itemOptionsTitle[ranItem];

        teamCount.innerText = (i+1)+"/"+"6"


        teamExitButton.innerText = "❌";
        teamQuestionButton.innerText = "⋮⋮⋮";
        teamStatsButton.innerText = "⟲";
        teamExportButton.innerText = "➢";

        teamAdd.innerText = "+";
        teamAdd.classList.add("blinkindicator");

        teamStatsButton.setAttribute("value","Individual Values");
        teamStatsButton.setAttribute("id",Math.floor(Math.random() * 1000) + 1)


        teamNickOuter.setAttribute("name","Name");
        teamImgOuter.setAttribute("name","Pokémon");
        teamHeldItem.setAttribute("name","Item");


        teamLevel.setAttribute("type","number");
        teamLevel.setAttribute("min","1");
        teamLevel.setAttribute("max","100");
        teamLevel.setAttribute("placeholder","Lvl.");
        teamNick.setAttribute("type","text");
        teamNick.setAttribute("placeholder",getPokémonName(getIntID("",ranPok)));
        if (Generation >= 1 && Generation <= 5) {
            teamNick.setAttribute("maxlength","10");
        }
        else if (Generation >= 6) {
            teamNick.setAttribute("maxlength","12");
        }
   

        for (var u = 0; u < itemOptionsTitle.length; u++) {
            var teamHeldItemOption = document.createElement("option");
            teamHeldItemOption.value = itemOptionsTitle[u];
            teamHeldItemOption.innerText = itemOptionsTitle[u];    
            teamHeldItemInput.appendChild(teamHeldItemOption);
        }


        teamLevel.addEventListener("change", inputMinMax);




        teamParty.appendChild(teamDiv);
        teamDiv.appendChild(teamAside1);
        teamDiv.appendChild(teamAside2);
        teamAside2.appendChild(teamAdd);

        teamAside1.appendChild(teamLeft);
        teamLeft.appendChild(teamExitButton);
        teamLeft.appendChild(teamLevel);
        teamLeft.appendChild(teamQuestionButton);
        teamAside1.appendChild(teamPokémon);
        teamPokémon.appendChild(teamHeldItem);
        teamHeldItem.appendChild(teamHeldItemInput);
        teamPokémon.appendChild(teamImgOuter);
        teamImgOuter.appendChild(teamHeldItemImage);
        teamImgOuter.appendChild(teamImg);
        teamPokémon.appendChild(teamNickOuter);
        teamNickOuter.appendChild(teamNick);
        
        teamAside1.appendChild(teamMiddle);
        teamMiddle.appendChild(teamCount);
        teamMiddle.appendChild(teamGender);





        

        var col1 = returnData(getIntID("",ranPok), "Type", "undefined")[0];
        var col2 = returnData(getIntID("",ranPok), "Type", "undefined")[1];

        if (col2 != undefined) {
            $(teamAside1).css({background: "linear-gradient(to right,var(--type"+col1+"),var(--type"+col2+"))"});
        }
        else {
            $(teamAside1).css({background: "linear-gradient(to right,var(--type"+col1+"),var(--type"+col1+"))"});
        }

        teamAside1.querySelector(':scope select').value = itemOptionsTitle[ranItem];

        
        var genders = ["♂","♀","☿"]
        for (var u = 0; u < genders.length; u++) {
            var teamGenderOptions = document.createElement("option");
            teamGenderOptions.value = genders[u];
            teamGenderOptions.innerText = genders[u];
            teamGender.appendChild(teamGenderOptions);
        }






        var dataOptions = ["Moves","Individual Values","Effort Values","Calculated Stats"];
        for (var u = 0; u < dataOptions.length; u++) {
            var teamData = document.createElement("span");
            teamData.setAttribute("name",dataOptions[u]);
            teamAside1.appendChild(teamData);

            for (var y = 0; y < 3; y++) {
                var teamDataInner = document.createElement("span");
                teamData.appendChild(teamDataInner);

                if (y == 2 && u != 0 && Natures.length > 0) {
                    teamDataInner.setAttribute("name","Nature");
                }

                if (y == 0) {
                    var teamDataTitle = document.createElement("h5");
                    teamDataTitle.innerText = dataOptions[u];
                    teamDataInner.appendChild(teamDataTitle);
                }

                else if (u > 0 && y == 1) {
                    for (var q = 0; q < Stats.length; q++) {
                        if (Stats[q] != "Total") {
                            var teamDataInput = document.createElement("input");
                            teamDataInput.setAttribute("type","number");
                            if (u == 1) {
                                teamDataInput.setAttribute("placeholder",Stats[q]+" IVs");
                                teamDataInput.setAttribute("min","0");
                                teamDataInput.setAttribute("max","31");
                            }
                            else if (u == 2) {
                                teamDataInput.setAttribute("placeholder",Stats[q]+" EVs");
                                teamDataInput.setAttribute("min","0");
                                teamDataInput.setAttribute("max","255");
                            }
                            else if (u == 3) {
                                teamDataInput.setAttribute("placeholder",Stats[q]);
                                teamDataInput.setAttribute("min","");
                                teamDataInput.setAttribute("max","");
                            }
                            teamDataInner.appendChild(teamDataInput);
                            teamDataInput.addEventListener("change", inputMinMax)
                        }
                    }
                }
                else if (y == 1 && dataOptions[u] == "Moves") {
                    for (var p = 0; p < 4; p++) {
                        var teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelect);

                        for (var q = 0; q < finaldataMove.length; q++) {
                            if (finaldataMove[q]["Name_"+JSONPath_MoveName] != undefined) {
                                var teamDataOption = document.createElement("option");
                                teamDataOption.setAttribute("value",finaldataMove[q]["Name_"+JSONPath_MoveName]);
                                teamDataOption.innerText = finaldataMove[q]["Name_"+JSONPath_MoveName];
                                teamDataSelect.appendChild(teamDataOption);
                            }
                        }

                        for (var r = 0; r < Infinity; r++) {
                            var rand = Math.floor(Math.random() * finaldataMove.length);
                            if (finaldataMove[rand]["Name_"+JSONPath_MoveName] != undefined) {
                                teamDataSelect.value = finaldataMove[rand]["Name_"+JSONPath_MoveName];
                                break;
                            }
                        }

                    }
                }
                else if (y == 2 && dataOptions[u] == "Moves") {
                    if (Ability.length > 0) {
                        var teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelect);
                        
                        for (var q = 0; q < returnData(getIntID("",ranPok), "Ability", "undefined").length; q++) {
                            var teamDataOption = document.createElement("option");
                            teamDataOption.setAttribute("value",returnData(getIntID("",ranPok), "Ability", "undefined")[q]);
                            teamDataOption.innerText = returnData(getIntID("",ranPok), "Ability", "undefined")[q];
                            teamDataSelect.appendChild(teamDataOption);
                        }
                    }
                }

                if (y == 2 && dataOptions[u] != "Moves" && Natures.length > 0) {
                    var teamDataSelect = document.createElement("select");
                    teamDataInner.appendChild(teamDataSelect);
                    teamDataSelect.addEventListener("change", partyNature)
                    for (var q = 0; q < Natures.length; q++) {
                        var teamDataOption = document.createElement("option");
                        teamDataOption.setAttribute("value",Natures[q]);
                        teamDataOption.innerText = Natures[q];
                        teamDataSelect.appendChild(teamDataOption);
                    }
                }
            }
        }



        teamAside1.appendChild(teamRight);
        teamRight.appendChild(teamStatsButton);
        teamRight.appendChild(teamExportButton);

        teamStatsButton.addEventListener("click", partyDataSwitch);
        teamExitButton.addEventListener("click", function() {partyDefault(this.parentElement.parentElement.parentElement);});
        teamExitButton.addEventListener("click", function() {partyHide(this.parentElement.parentElement.parentElement);});
        teamHeldItemInput.addEventListener("change", partyItem);




    }



    var boxDiv = document.createElement("ul");
    teamBox.appendChild(boxDiv);

    for (var q = 0; q < 120; q++) {
        
        var ranPok = Math.floor(Math.random() * 100) + 1; 
        var boxImgOuter = document.createElement("li");
        var boxShadow = document.createElement("span");
        var boxImg = document.createElement("img");
        boxImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonName(getIntID("",ranPok)))+".png";
        boxImg.setAttribute("value", getIntID("",ranPok));
        boxImg.setAttribute("title",getPokémonName(getIntID("",ranPok)));
        boxImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
        boxDiv.appendChild(boxImgOuter);
        boxImgOuter.appendChild(boxShadow);
        boxImgOuter.appendChild(boxImg);
        
    }
    $(function() {
        $("#pokémon-outer > main ul").sortable();
        $("#pokémon-outer > main ul").disableSelection();
    });

    $(function() {
        $('#pokémon-outer > main section[name="Party"]').sortable();
        $('#pokémon-outer > main section[name="Party"]').disableSelection();
    });

    var PartyPlus = document.querySelectorAll('#pokémon-outer main[name="Team"] section[name="Party"] aside > button');
    var PartyBox = document.querySelectorAll('#pokémon-outer > main[name="Team"] section:not([name]) > button');

    var PPPB = [PartyPlus,PartyBox]
    for(var u = 0; u < PPPB.length; u++) {
        for(var q = 0; q < PPPB[u].length; q++) {
            PPPB[u][q].addEventListener("dragenter",dragEnter);
            PPPB[u][q].addEventListener("dragleave",dragLeave);
            PPPB[u][q].addEventListener("dragover",dragOver);
            PPPB[u][q].addEventListener("drop",dragDrop);
        }
    }



	var content = document.createElement("div");
	var contentInner = document.createElement("ul");
	contentOuter.appendChild(content);
	content.appendChild(contentInner);


	for(var i = 0; i < finaldataPokémon.length; i++) {
		if((finaldataPokémon[i][JSONPath_Reference] == "true" && finaldataPokémonArea[i]["Filter_" + JSONPath_Area] != "Unobtainable") || (finaldataPokémon[i][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {return e.ID;}).indexOf(finaldataPokémon[i]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable")) {
			var ID = finaldataPokémon[i]["ID"];
			var Name = finaldataPokémonForm[i]["Pokémon"];
			var formName = finaldataPokémonForm[i]["Form_" + JSONPath_Form];
			var variant = finaldataPokémon[i]["Variant"];
			var contentDiv = document.createElement("li");
			var contentInput = document.createElement("input");
			var contentLabel = document.createElement("label");
			var contentMainUp = document.createElement("main");
			var contentSpan = document.createElement("span");
			var contentButton = document.createElement("button");
			var contentButtonImg = document.createElement("img");
			var contentNationalID = document.createElement("caption");
			var contentImg = document.createElement("img");
			var contentMainDown = document.createElement("main");
			var contentName = document.createElement("p");
            contentDiv.setAttribute("id",i);

			if(finaldataPokémonArea[i]["Filter_" + JSONPath_Area] != undefined) {
				contentDiv.setAttribute("data-filter", finaldataPokémonArea[i]["Filter_" + JSONPath_Area].replaceAll(" ", ""));
			}
			contentDiv.setAttribute("data-search-evolution", getEvolutionFamily(i).map(function(v) {
				return v["Pokémon"];
			}).join(",").toLowerCase());
			contentDiv.setAttribute("data-search-type", returnData(i, "Type", "lower,undefined"));
			contentDiv.setAttribute("data-search-catchrate", returnData(i, "Catch Rate", "lower,undefined"));

            if (Ability.length > 0) {
                contentDiv.setAttribute("data-search-ability", returnData(i, "Ability", "lower,undefined"));
            }

            if (Gender == true) {
                contentDiv.setAttribute("data-search-genderratio", returnData(i, "Gender Ratio", "lower,undefined").join(":"));
            }
            if (Egg == true) {
                contentDiv.setAttribute("data-search-eggcycle", returnData(i, "Hatch Rate", "lower,undefined")[0]);
                contentDiv.setAttribute("data-search-egggroup", returnData(i, "Egg Group", "lower,undefined"));
            }
			contentDiv.setAttribute("data-search-expyield", returnData(i, "Experience Yield", "lower,undefined"));
            if (HeldItem == true) {
                contentDiv.setAttribute("data-search-helditem", returnData(i, "Held Item", "lower,undefined"));
            }

			if(parseInt(returnData(i, "Experience Yield", "lower,undefined")) >= 300) {
				contentDiv.setAttribute("data-search-expyieldcategory", "Very High".toLowerCase());
			} else if(parseInt(returnData(i, "Experience Yield", "lower,undefined")) >= 200 && parseInt(returnData(i, "Experience Yield", "lower,undefined")) <= 299) {
				contentDiv.setAttribute("data-search-expyieldcategory", "High".toLowerCase());
			} else if(parseInt(returnData(i, "Experience Yield", "lower,undefined")) >= 100 && parseInt(returnData(i, "Experience Yield", "lower,undefined")) <= 199) {
				contentDiv.setAttribute("data-search-expyieldcategory", "Medium".toLowerCase());
			} else if(parseInt(returnData(i, "Experience Yield", "lower,undefined")) >= 50 && parseInt(returnData(i, "Experience Yield", "lower,undefined")) <= 99) {
				contentDiv.setAttribute("data-search-expyieldcategory", "Low".toLowerCase());
			} else if(parseInt(returnData(i, "Experience Yield", "lower,undefined")) >= 0 && parseInt(returnData(i, "Experience Yield", "lower,undefined")) <= 49) {
				contentDiv.setAttribute("data-search-expyieldcategory", "Very Low".toLowerCase());
			}
			contentDiv.setAttribute("data-search-levelrate", returnData(i, "Leveling Rate", "lower,undefined"));

            var statsevL = ["Base Stats","EV Yield"];
            var statsevS = ["stats","evyield"];
            for(var q = 0; q < statsevL.length; q++) {
                for(var u = 0; u < Stats.length; u++) {
                    contentDiv.setAttribute("data-search-"+statsevS[q]+Stats[u].replaceAll(".","").replaceAll(" ","").toLowerCase(), returnData(i, statsevL[q]+" "+Stats[u], "lower,undefined"));
                }
            }

			contentDiv.setAttribute("data-search-variant", variant.toLowerCase());
			contentInput.setAttribute("type", "checkbox");
			contentInput.classList.add("save-cb-state");
			contentInput.setAttribute("id", "finaldex-" + GameID + "-" + i);
			contentInput.setAttribute("name", "finaldex-" + GameID + "-" + i);
			contentLabel.setAttribute("for", "finaldex-" + GameID + "-" + i);
			contentButton.value = i;
			contentButton.addEventListener("click", modalData);
            contentButton.addEventListener("click", count);
			contentButtonImg.src = "./media/Images/Misc/FinalDex/Location.png";
			contentNationalID.classList.add("contain-nationalID");
			contentNationalID.innerText = "#" + ID;
			contentImg.classList.add("contain-img");
			contentImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			contentName.classList.add("contain-name");
			if(formName != undefined) {
				contentName.innerText = formName;
				contentImg.setAttribute("id", formName);
				contentDiv.setAttribute("data-search-name", formName.toLowerCase());
			} else {
				contentName.innerText = Name;
				contentImg.setAttribute("id", Name);
				contentDiv.setAttribute("data-search-name", Name.toLowerCase());
			}
			contentDiv.setAttribute("data-national", ID);
			contentInner.appendChild(contentDiv);
			contentDiv.appendChild(contentInput);
			contentDiv.appendChild(contentLabel);
			contentLabel.appendChild(contentMainUp);
			contentMainUp.appendChild(contentSpan);
			contentMainUp.appendChild(contentButton);
			contentButton.appendChild(contentButtonImg);
			contentMainUp.appendChild(contentNationalID);
			contentLabel.appendChild(contentImg);
			contentLabel.appendChild(contentMainDown);
			contentMainDown.appendChild(contentName);
			for(q = 0; q < JSONPath_Pokédex.length; q++) {
				let y = q + 1;
				var contentMainRegionalID = document.createElement("caption");
				if(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]] == undefined) {
					if(finaldataPokémonPokédexID[finaldataPokémonPokédexID.map(function(e) {
							return e.ID;
						}).indexOf(finaldataPokémon[i]["ID"])][JSONPath_Pokédex[q]] != undefined) {
						contentDiv.setAttribute("data-regional-" + y, finaldataPokémonPokédexID[finaldataPokémonPokédexID.map(function(e) {
							return e.ID;
						}).indexOf(finaldataPokémon[i]["ID"])][JSONPath_Pokédex[q]]);
						contentMainRegionalID.innerText = "#" + finaldataPokémonPokédexID[finaldataPokémonPokédexID.map(function(e) {
							return e.ID;
						}).indexOf(finaldataPokémon[i]["ID"])][JSONPath_Pokédex[q]];
					} else {
						contentDiv.setAttribute("data-regional-" + y, "");
						contentMainRegionalID.innerText = "#";
					}
				} else {
					contentDiv.setAttribute("data-regional-" + y, finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]]);
					contentMainRegionalID.innerText = "#" + finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]];
				}
				contentMainRegionalID.classList.add("contain-regionalID-" + y);
				contentMainUp.appendChild(contentMainRegionalID);
			}
            contentDiv.addEventListener("dragstart", dragStart);
            contentDiv.addEventListener("dragend", dragEnd);
            contentDiv.addEventListener("drag", dragMove);
		}
	}



    var settings = document.createElement("main");
    settings.setAttribute("name","Settings");
	contentOuter.appendChild(settings);












    var settingsDefaultImgtypeOuter = document.createElement("span");
    var settingsDefaultImgtype = document.createElement("select");

    var settingsDefaultResizeOuter = document.createElement("span");
    var settingsDefaultResize = document.createElement("div");
    var settingsDefaultResizeValue = document.createElement("p");
    var settingsDefaultResizeInput = document.createElement("input");

    var settingsDefaultThemeOuter = document.createElement("span");
    var settingsDefaultTheme = document.createElement("div");
    var settingsDefaultThemeInput = document.createElement("input");
    var settingsDefaultThemeSpan = document.createElement("span");








    for (var i = 0; i < ImageType_Path.length; i++) { 
        var settingsDefaultImgtypeOption = document.createElement("option");
        settingsDefaultImgtypeOption.setAttribute("data-path",ImageType_Path[i]);
        settingsDefaultImgtypeOption.setAttribute("data-type",ImageType_Type[i]);
        settingsDefaultImgtypeOption.setAttribute("data-extension",ImageType_Extension[i]);

        if (ImageType_Type[i].includes("Battle")) {
            settingsDefaultImgtypeOption.innerText = "Battle";
            settingsDefaultImgtypeOption.value = "Battle";
        }
        if (ImageType_Type[i].includes("Battle") && Generation <= 5) {
            settingsDefaultImgtypeOption.innerText = "Battle Sprites";
            settingsDefaultImgtypeOption.value = "Battle Sprites";
        }
        if (ImageType_Type[i].includes("Battle") && Generation >= 6 || ImageType_Type[i].includes("Battle") && GameID == 12 || ImageType_Type[i].includes("Battle") && GameID == 13) {
            settingsDefaultImgtypeOption.innerText = "Battle Models";
            settingsDefaultImgtypeOption.value = "Battle Models";
        }
        if (ImageType_Type[i].includes("Art")) {
            settingsDefaultImgtypeOption.innerText = ImageType_Path[i] + " " + ImageType_Type[i];
            settingsDefaultImgtypeOption.value = ImageType_Path[i] + " " + ImageType_Type[i];
        }
        if (ImageType_Path[i].includes("Recolor")) {
            settingsDefaultImgtypeOption.innerText = "Recolor Battle Sprites";
            settingsDefaultImgtypeOption.value = "Recolor Battle Sprites";
        }

        if (ImageType_Extension[i].includes("GIF")) {
            settingsDefaultImgtypeOption.innerText += " Animated";
            settingsDefaultImgtypeOption.value += " Animated";
    
        }
  
        settingsDefaultImgtype.appendChild(settingsDefaultImgtypeOption);
    }




    settingsDefaultImgtypeOuter.setAttribute("name","ImageType");
    settingsDefaultResizeOuter.setAttribute("name","Resize");
    settingsDefaultResize.setAttribute("id","resize-outer");
    settingsDefaultResizeValue.setAttribute("id","resize-value");
    settingsDefaultResizeInput.setAttribute("type","range");
    settingsDefaultResizeInput.setAttribute("id","resize");
    settingsDefaultResizeInput.setAttribute("min","60");
    settingsDefaultResizeInput.setAttribute("max","540");
    settingsDefaultResizeInput.setAttribute("value","300");
    settingsDefaultResizeInput.setAttribute("step","60");
    settingsDefaultResizeInput.setAttribute("autocomplete","off");
    settingsDefaultResizeInput.setAttribute("onclick","resizeDiv()");
    settingsDefaultResizeInput.classList.add("save-ra-state");
    settingsDefaultThemeOuter.setAttribute("name","Theme");
    settingsDefaultTheme.setAttribute("id","theme");
    settingsDefaultThemeInput.setAttribute("type","checkbox");
    settingsDefaultThemeInput.addEventListener('change', switchTheme, false);
    if (localStorage.getItem('finaldex-theme') == 'dark') {
        settingsDefaultThemeInput.checked = true;
    }


    settings.appendChild(settingsDefaultImgtypeOuter);
    settingsDefaultImgtypeOuter.appendChild(settingsDefaultImgtype);


    settings.appendChild(settingsDefaultResizeOuter);
    settingsDefaultResizeOuter.appendChild(settingsDefaultResize);
    settingsDefaultResize.appendChild(settingsDefaultResizeValue);
    settingsDefaultResize.appendChild(settingsDefaultResizeInput);

    settings.appendChild(settingsDefaultThemeOuter);
    settingsDefaultThemeOuter.appendChild(settingsDefaultTheme);
    settingsDefaultTheme.appendChild(settingsDefaultThemeInput);
    settingsDefaultTheme.appendChild(settingsDefaultThemeSpan);


    var settingsDefaultCheckbox = document.createElement("span")
	var settingsDefaultCheckboxCheck = document.createElement("button");
	var settingsDefaultCheckboxUncheck = document.createElement("button");


    settingsDefaultCheckbox.setAttribute("name","Checkbox");
	settingsDefaultCheckboxCheck.innerText = "Check All";
	settingsDefaultCheckboxCheck.setAttribute("title", "Applies to current filters only");
	settingsDefaultCheckboxCheck.addEventListener("click", CheckAll);
	settingsDefaultCheckboxUncheck.innerText = "Uncheck All";
	settingsDefaultCheckboxUncheck.setAttribute("title", "Applies to current filters only");
	settingsDefaultCheckboxUncheck.addEventListener("click", UncheckAll);

    settings.appendChild(settingsDefaultCheckbox);
	settingsDefaultCheckbox.appendChild(settingsDefaultCheckboxCheck);
	settingsDefaultCheckbox.appendChild(settingsDefaultCheckboxUncheck);




    var settingsVariant = document.createElement("span");
    
	var formopts = [];
	for(var q = 0; q < finaldataPokémon.length; q++) {
		if(finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[q]["Filter_" + JSONPath_Area] != "Unobtainable") {
			formopts.push(finaldataPokémon[q]["Variant"]);
		}
	}
	formopts = formopts.filter(
		(item) => !item.includes("Default ") && !item.includes(" Form") && !item.includes("Gender"));
	for(var q = 0; q < formopts.length; q++) {
		formopts[q] = formopts[q].replace("Form", "Other Form");
		formopts[q] = formopts[q].replace("Alolan", "Regional Form");
		formopts[q] = formopts[q].replace("Galarian", "Regional Form");
		formopts[q] = formopts[q].replace("Mega", "Mega Evolution");
	}
	formopts = [...new Set(formopts)];
	for(var i = 0; i < formopts.length; i++) {
		var settingsVariantInput = document.createElement("input");
		var settingsVariantLabel = document.createElement("label");
		var settingsVariantSpan = document.createElement("span");
		settingsVariantInput.setAttribute("type", "checkbox");
		settingsVariantInput.classList.add("save-cb-state");
		settingsVariantInput.setAttribute("id", "settings-form-" + formopts[i] + "-" + i);
		settingsVariantInput.setAttribute("name", "settings-form-" + formopts[i] + "-" + GameID + "-" + i);
		settingsVariantLabel.setAttribute("for", "settings-form-" + formopts[i] + "-" + i);
		settingsVariantLabel.innerText = formopts[i];
		settingsVariant.appendChild(settingsVariantInput);
		settingsVariant.appendChild(settingsVariantLabel);
		settingsVariantLabel.appendChild(settingsVariantSpan);
		settingsVariantInput.addEventListener("click", rememberVariant);
        settingsVariantInput.addEventListener("click", variantSelector);
	}

	settingsVariant.setAttribute("name", "Variant");

    settings.appendChild(settingsVariant);




    settingsDefaultImgtype.addEventListener("change",imageType);
    settingsDefaultImgtype.addEventListener("click",imageType);
    settingsDefaultImgtype.click();




    $( function() {
        $('#pokémon-outer > div li img').draggable();
        $('#pokémon-outer > main section[name="Box"] ul').droppable();
      } );
    };

function count() {
	function showChecked() {
		sleep(10).then(() => {
			document.querySelector("#count-current").innerText = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden) input:checked').length;
		});
	}

	function showTotal() {
		sleep(10).then(() => {
			document.querySelector("#count-total").innerText = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden)').length;
		});
	}
	showChecked();
	showTotal();
}

function imgTypeDrop() {
	document.getElementById("imgtype").classList.toggle("imgtype-show");
	document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(180deg)";
	var dropdowns = document.getElementsByClassName("imgtype");
	var i;
	for(i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if(openDropdown.classList.contains("imgtype-show")) {} else {
			document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(0deg)";
		}
	}
}
window.onclick = function(event) {
	if(!event.target.matches("#imgtype-toggle")) {
		var dropdowns = document.getElementsByClassName("imgtype");
		var i;
		for(i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if(openDropdown.classList.contains("imgtype-show")) {
				openDropdown.classList.remove("imgtype-show");
				document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(0deg)";
			}
		}
	}
};

function imgType() {
	var imgTypeBox = document.getElementById("imgtype-toggle");
	var imgType = document.querySelectorAll("#imgtype input");
	var conimg = document.querySelectorAll(".contain-img");
	for(var i = 0; i < imgType.length; i++) {
		if(imgType[i].checked == true) {
			var dataType = imgType[i].getAttribute("data-type");
			var dataPath = imgType[i].getAttribute("data-path");
			var dataExtension = imgType[i].getAttribute("data-extension");
			imgTypeBox.innerHTML = '<span class="imgtype-arrow">▾</span>' + "<p>" + imgType[i].parentElement.innerText + "</p>" + '<div><img src="./media/Images/Misc/FinalDex/' + dataExtension + '.png" name="' + dataExtension + '" /></div>';
			if(!dataType.includes("Art")) {
				for(var q = 0; q < conimg.length; q++) {
					if(conimg[q].getAttribute("id").includes("Shiny")) {
						conimg[q].src = "./media/Images/Pokémon/" + dataType + "/" + dataExtension + "/Shiny/Front/" + dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
						conimg[q].setAttribute("path", dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension);
					} else {
						conimg[q].src = "./media/Images/Pokémon/" + dataType + "/" + dataExtension + "/Normal/Front/" + dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
						conimg[q].setAttribute("path", dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension);
					}
				}
			} else {
				for(var q = 0; q < conimg.length; q++) {
					conimg[q].src = "./media/Images/Pokémon/" + dataType + "/" + dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
				}
			}
		}
	}
}




function resizeDiv() {
    var sliderDefaultValue = 300;
    var containIDDefaultDisplay = "flex";
    var containImgDefaultHeight = "60%";
    var containImgDefaultMargin = "0 5%";
    var containNameDefaultDisplay = "flex";

	var slider = document.getElementById("resize");
	var output = document.getElementById("resize-value");
	var lis = document.querySelectorAll("#pokémon-outer > div li");
	var id = document.querySelectorAll("#pokémon-outer > div main:first-child");
	var img = document.querySelectorAll("#pokémon-outer > div .contain-img");
	var name = document.querySelectorAll("#pokémon-outer > div main:last-child");
	var sliderSwitch = 180;
	for(i = 0; i < lis.length; i++) {
		lis[i].style.width = slider.value + "px";
		lis[i].style.height = slider.value + "px";
		lis[i].style.fontSize = slider.value / 15 + "px";
		if(slider.value <= sliderSwitch) {
			id[i].style.display = "none";
			img[i].style.height = "90%";
			img[i].style.margin = "5%";
			name[i].style.display = "none";
		}
		if(slider.value >= sliderSwitch) {
			id[i].style.display = containIDDefaultDisplay;
			img[i].style.height = containImgDefaultHeight;
			img[i].style.margin = containImgDefaultMargin;
			name[i].style.display = containNameDefaultDisplay;
		}
	}
	output.innerText = Math.round((slider.value / sliderDefaultValue) * 100) + "%";
}

function search() {
	$("#searchbar").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#pokémon-outer > div li");
		this.style.color = "var(--fontDark)";
		var uncheck = document.querySelectorAll(".filterby input:checked");
		for(var i = 0; i < uncheck.length; i++) {
			uncheck[i].checked = false;
		}
		var searchoptions = ["evolution::", "evolution:!", "type::", "type:!", "ability::", "ability:!", "catchrate::", "catchrate:!", "catchrate:>", "catchrate:<", "eggcycle::", "eggcycle:!", "eggcycle:>", "eggcycle:<", "genderratio::", "genderratio:!", "egggroup::", "egggroup:!", "expyield::", "expyield:!", "expyield:>", "expyield:<", "expyieldcategory::", "expyieldcategory:!", "levelrate::", "levelrate:!", "levelrate:>", "levelrate:<", "helditem::", "helditem:!", "statshp::", "statshp:!", "statshp:>", "statshp:<", "statsatk::", "statsatk:!", "statsatk:>", "statsatk:<", "statsdef::", "statsdef:!", "statsdef:>", "statsdef:<", "statsspatk::", "statsspatk:!", "statsspatk:>", "statsspatk:<", "statsspdef::", "statsspdef:!", "statsspdef:>", "statsspdef:<", "statsspeed::", "statsspeed:!", "statsspeed:>", "statsspeed:<", "statstotal::", "statstotal:!", "statstotal:>", "statstotal:<", "evyieldhp::", "evyieldhp:!", "evyieldhp:>", "evyieldhp:<", "evyieldatk::", "evyieldatk:!", "evyieldatk:>", "evyieldatk:<", "evyielddef::", "evyielddef:!", "evyielddef:>", "evyielddef:<", "evyieldspatk::", "evyieldspatk:!", "evyieldspatk:>", "evyieldspatk:<", "evyieldspdef::", "evyieldspdef:!", "evyieldspdef:>", "evyieldspdef:<", "evyieldspeed::", "evyieldspeed:!", "evyieldspeed:>", "evyieldspeed:<", "evyieldtotal::", "evyieldtotal:!", "evyieldtotal:>", "evyieldtotal:<", "variant::", "variant:!", "checked::", ];
		if(Generation <= 2 || GameID == 31 || GameID == 32) {
			searchoptions = searchoptions.filter((item) => !item.includes("ability"));
		}
		var searchspec;
		for(var i = 0; i < searchoptions.length; i++) {
			if(searchVal.includes(searchoptions[i])) {
				searchspec = searchoptions[i];
			}
		}
		if(searchVal.toLowerCase().includes("checked::true") && searchVal.toLowerCase().includes(searchspec)) {
			filterItems.addClass("hidden");
			$("#pokémon-outer > div input:checked").parent().removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("checked::false") && searchVal.toLowerCase().includes(searchspec)) {
			filterItems.addClass("hidden");
			$("#pokémon-outer > div input:not(:checked)").parent().removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("::") && searchVal.toLowerCase().includes(searchspec)) {
			filterItems.addClass("hidden");
			if(searchspec.includes("stats") || searchspec.includes("evyield") || searchspec.includes("catchrate") || searchspec.includes("eggcycle") || searchspec.includes("expyield") || searchspec.includes("levelrate")) {
				$("#pokémon-outer > div li[data-search-" + searchspec.split("::")[0].toLowerCase() + '="' + searchVal.split("::")[1].toLowerCase() + '"]').removeClass("hidden");
			} else {
				$("#pokémon-outer > div li[data-search-" + searchspec.split("::")[0].toLowerCase() + '*="' + searchVal.split("::")[1].toLowerCase() + '"]').removeClass("hidden");
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes(":!") && searchVal.toLowerCase().includes(searchspec)) {
			filterItems.addClass("hidden");
			if(searchspec.includes("stats") || searchspec.includes("evyield") || searchspec.includes("catchrate") || searchspec.includes("eggcycle") || searchspec.includes("expyield") || searchspec.includes("levelrate")) {
				$("#pokémon-outer > div li:not([data-search-" + searchspec.split(":!")[0].toLowerCase() + '="' + searchVal.split(":!")[1].toLowerCase() + '"])').removeClass("hidden");
			} else {
				$("#pokémon-outer > div li:not([data-search-" + searchspec.split(":!")[0].toLowerCase() + '*="' + searchVal.split(":!")[1].toLowerCase() + '"])').removeClass("hidden");
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes(":>") && searchVal.toLowerCase().includes(searchspec)) {
			for(var q = 0; q < filterItems.length; q++) {
				filterItems[q].classList.add("hidden");
				if(parseInt(filterItems[q].getAttribute("data-search-" + searchspec.split(":>")[0])) >= parseInt(searchVal.toLowerCase().split(searchspec)[1])) {
					filterItems[q].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes(":<") && searchVal.toLowerCase().includes(searchspec)) {
			for(var q = 0; q < filterItems.length; q++) {
				filterItems[q].classList.add("hidden");
				if(parseInt(filterItems[q].getAttribute("data-search-" + searchspec.split(":<")[0])) <= parseInt(searchVal.toLowerCase().split(searchspec)[1])) {
					filterItems[q].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase() != "") {
			filterItems.addClass("hidden");
			$('#pokémon-outer > div li[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
		count();
	});
	if(Ability.length >= 1) {
		$("#ability-options-search input").on("keyup", function() {
			var searchVal = $(this).val();
			var filterItems = $("#ability-options label");
			if(searchVal != "") {
				filterItems.addClass("hidden");
				$('#ability-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass("hidden");
			} else {
				filterItems.removeClass("hidden");
			}
		});
	}
	$("#move-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#move-options label");
		this.style.color = "var(--fontDark)";
		if(searchVal.toLowerCase().includes("type::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-type*="' + searchVal.toLowerCase().split("type::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("category::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-category*="' + searchVal.toLowerCase().split("category::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("pp::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-pp="' + searchVal.toLowerCase().split("pp::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("power::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-power="' + searchVal.toLowerCase().split("power::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("accuracy::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-accuracy="' + searchVal.toLowerCase().split("accuracy::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("contact::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-contact*="' + searchVal.toLowerCase().split("contact::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("tutor::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-tutor="' + searchVal.toLowerCase().split("tutor::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("machine::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-machine*="' + searchVal.toLowerCase().split("machine::")[1].replaceAll(" ", "") + '"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("pp:>")) {
			for(var i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.add("hidden");
				if(parseInt(filterItems[i].getAttribute("data-search-pp")) >= parseInt(searchVal.toLowerCase().split("pp:>")[1].replaceAll(" ", ""))) {
					filterItems[i].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("pp:<")) {
			for(var i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.add("hidden");
				if(parseInt(filterItems[i].getAttribute("data-search-pp")) <= parseInt(searchVal.toLowerCase().split("pp:<")[1].replaceAll(" ", ""))) {
					filterItems[i].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("power:>")) {
			for(var i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.add("hidden");
				if(parseInt(filterItems[i].getAttribute("data-search-power")) >= parseInt(searchVal.toLowerCase().split("power:>")[1].replaceAll(" ", ""))) {
					filterItems[i].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("power:<")) {
			for(var i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.add("hidden");
				if(parseInt(filterItems[i].getAttribute("data-search-power")) <= parseInt(searchVal.toLowerCase().split("power:<")[1].replaceAll(" ", ""))) {
					filterItems[i].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("accuracy:>")) {
			for(var i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.add("hidden");
				if(parseInt(filterItems[i].getAttribute("data-search-accuracy").replaceAll("%", "")) >= parseInt(searchVal.toLowerCase().split("accuracy:>")[1].replaceAll(" ", ""))) {
					filterItems[i].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("accuracy:<")) {
			for(var i = 0; i < filterItems.length; i++) {
				filterItems[i].classList.add("hidden");
				if(parseInt(filterItems[i].getAttribute("data-search-accuracy").replaceAll("%", "")) <= parseInt(searchVal.toLowerCase().split("accuracy:<")[1].replaceAll(" ", ""))) {
					filterItems[i].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(!searchVal == "" && !searchVal.toLowerCase().includes("::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	$("#item-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#item-options label");
		if(searchVal != "") {
			filterItems.addClass("hidden");
			$('#item-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	$("#map-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#map-options label");
		if(searchVal != "") {
			filterItems.addClass("hidden");
			$('#map-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	$("#map-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#map-options label");
		if(searchVal != "") {
			filterItems.addClass("hidden");
			$('#map-options label[data-search-name*="' + searchVal.toLowerCase() + '"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	document.querySelector("#search-exit").addEventListener("click", exitSearch);

	function exitSearch() {
		var filters = document.querySelectorAll(".filterby input:checked");
		var search = document.getElementById("searchbar");
		if(filters.length == 0) {
			search.value = "";
			$("#pokémon-outer > div li").removeClass("hidden");
			search.focus();
			count();
		}
	}
	if(Ability.length >= 1) {
		document.querySelector("#ability-search-exit").addEventListener("click", exitAbilitySearch);

		function exitAbilitySearch() {
			var search = document.getElementById("ability-search");
			search.value = "";
			$("#ability-options label").removeClass("hidden");
			search.focus();
		}
	}
	document.querySelector("#move-search-exit").addEventListener("click", exitMoveSearch);

	function exitMoveSearch() {
		var search = document.getElementById("move-search");
		search.value = "";
		$("#move-options label").removeClass("hidden");
		search.focus();
	}
	document.querySelector("#item-search-exit").addEventListener("click", exitItemSearch);

	function exitItemSearch() {
		var search = document.getElementById("item-search");
		search.value = "";
		$("#item-options label").removeClass("hidden");
		search.focus();
	}
	document.querySelector("#map-search-exit").addEventListener("click", exitMapSearch);

	function exitMapSearch() {
		var search = document.getElementById("map-search");
		search.value = "";
		$("#map-options label").removeClass("hidden");
		search.focus();
	}
}

function sort() {
	var dexEventListener = document.querySelectorAll("#dexswitch input");
	for(var i = 0; i < dexEventListener.length; i++) {
		dexEventListener[i].addEventListener("click", dexMove);
		dexEventListener[i].addEventListener("click", dexSwitch);
	}
}

function dexMove() {
	var x = this.value;
	if(x == JSONPath_Pokédex.length + 1) {
		this.nextElementSibling.style.display = "none";
		this.parentElement.firstChild.nextElementSibling.style.display = "flex";
	} else {
		this.nextElementSibling.style.display = "none";
		this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "flex";
	}
	dexChecker.fill(x);
}

function dexSwitch() {
	var divList = $("#pokémon-outer > div li");
	var x = dexChecker[0];
	if(x == JSONPath_Pokédex.length + 1) {
		divList.sort(function(a, b) {
			return $(a).data("national") - $(b).data("national");
		});
		$("#pokémon-outer > div ul").html(divList);
	} else {
		for(q = 0; q < JSONPath_Pokédex.length; q++) {
			divList.sort(function(a, b) {
				return $(a).data("regional-" + x) - $(b).data("regional-" + x);
			});
			$("#pokémon-outer > div ul").html(divList);
		}
	}
	dexCheck();
	count();
}

function dexCheck() {
	var contdiv = document.querySelectorAll("#pokémon-outer > div li");
	for(u = 0; u < contdiv.length; u++) {
		contdiv[u].style.display = "inline-block";
	}
	let contid = document.querySelectorAll("#pokémon-outer > div caption");
	for(u = 0; u < contid.length; u++) {
		contid[u].style.display = "none";
	}
	var ids = document.querySelectorAll(".data-idname span");
	for(u = 0; u < ids.length; u++) {
		ids[u].style.display = "none";
	}
	var prev = document.querySelectorAll(".data-previous button");
	for(u = 0; u < prev.length; u++) {
		prev[u].style.display = "none";
	}
	var nxt = document.querySelectorAll(".data-next button");
	for(u = 0; u < nxt.length; u++) {
		nxt[u].style.display = "none";
	}
	/*
	  var unobtainablediv = document.querySelectorAll('#pokémon-outer > div li[data-filter="Unobtainable"]');
	  for (u = 0; u < unobtainablediv.length; u++) {
	      unobtainablediv[u].style.display = "none";
	  }
	  */
	for(q = 0; q < [JSONPath_Pokédex.length + 1]; q++) {
		var p = q + 1;
		if(dexChecker == p && dexChecker != JSONPath_Pokédex.length + 1) {
			let contreg = document.querySelectorAll(".contain-regionalID-" + p);
			for(u = 0; u < contreg.length; u++) {
				contreg[u].style.display = "flex";
			}
			var contregdiv = document.querySelectorAll("#pokémon-outer > div li[data-regional-" + p + '=""]');
			for(u = 0; u < contregdiv.length; u++) {
				contregdiv[u].style.display = "none";
			}
			var regID = document.querySelectorAll(".data-regionalID-" + p);
			for(u = 0; u < regID.length; u++) {
				regID[u].style.display = "unset";
			}
			var regPrevious = document.querySelectorAll(".data-previous button[name='regional" + p + "']");
			for(u = 0; u < regPrevious.length; u++) {
				regPrevious[u].style.display = "flex";
			}
			var regNext = document.querySelectorAll(".data-next button[name='regional" + p + "']");
			for(u = 0; u < regNext.length; u++) {
				regNext[u].style.display = "flex";
			}
		} else if(dexChecker == p && dexChecker == JSONPath_Pokédex.length + 1) {
			let contnat = document.querySelectorAll(".contain-nationalID");
			for(u = 0; u < contnat.length; u++) {
				contnat[u].style.display = "flex";
			}
			var natID = document.querySelectorAll(".data-nationalID");
			for(u = 0; u < natID.length; u++) {
				natID[u].style.display = "unset";
			}
			var natPrevious = document.querySelectorAll(".data-previous button[name='national']");
			for(u = 0; u < natPrevious.length; u++) {
				natPrevious[u].style.display = "flex";
			}
			var natNext = document.querySelectorAll(".data-next button[name='national']");
			for(u = 0; u < natNext.length; u++) {
				natNext[u].style.display = "flex";
			}
		}
	}
}

function UncheckAll() {
	count();
	var uncheck = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden) input:checked');
	for(var i = 0; i < uncheck.length; i++) {
		uncheck[i].click();
	}
}

function CheckAll() {
	count();
	var check = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden) input:not(:checked)');
	for(var i = 0; i < check.length; i++) {
		check[i].click();
	}
}
