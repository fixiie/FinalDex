var createPokémon = function() {
	var contentOuter = document.createElement("div");
	contentOuter.setAttribute("id", "pokémon-outer");
	contentOuter.setAttribute("name", "Pokémon");
	document.querySelector("#contain").appendChild(contentOuter);
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
	var searchoptions = ["checked:: [true/false]", "catchable:: [wild/gift/...]", "evolution:: [charizard/slowbro/...]", "type:: [normal/fighting/...]", "ability:: [static/shadow tag/...]", "catchrate:: [value]", "eggcycle:: [value]", "genderratio:: [7:1/3:1/...]", "egggroup:: [field/human-like/...]", "expyield:: [value]", "expyieldcategory:: [very high/medium/...]", "levelrate:: [value]","learnset:: [leech seed/surf/...]","helditem:: [silver powder/sitrus berry/...]","variant:: [default/form/...]", "statshp:: [value]", "...", "evyieldhp:: [value]", "..."];
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
	navigationSearchInput.setAttribute("title", " Search Options:"+"\n"+searchoptions.join("\n"));
	navigationSearchExit.setAttribute("id", "search-exit");
	navigationCount.setAttribute("id", "count-outer");
	navigationCountContent.setAttribute("id", "count");
	navigationCountSpan1.setAttribute("id", "count-current");
	navigationCountSpan2.setAttribute("id", "count-slash");
	navigationCountSpan2.innerText = "/";
	navigationCountSpan3.setAttribute("id", "count-total");
	navigationGame.setAttribute("id", "gametitle-outer");
	navigationGameContent.setAttribute("id", "gametitle");
	navigationGameImg.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")+".png";
	navigationSettings.setAttribute("id", "settings-outer");
	navigationSettingsImg.src = "./media/Images/Misc/FinalDex/Cog.png";

    var navigationDexOuter = document.createElement("span");
    var navigationDexInner = document.createElement("span");
	var navigationDexInput = document.createElement("input");
	var navigationDexLabel = document.createElement("label");
	navigationDexInput.setAttribute("type", "radio");
	navigationDexInput.setAttribute("value", "1");
	navigationDexInput.setAttribute("name", "finaldex-dexswitch-"+GameID);
	navigationDexInput.setAttribute("id", "dexswitch1");
	navigationDexInput.setAttribute("autocomplete", "off");
	navigationDexLabel.setAttribute("for", "dexswitch1");
	navigationDexLabel.setAttribute("name", "National Pokédex");
	navigationDexLabel.innerText = "National Pokédex";
    navigationDexContent.appendChild(navigationDexOuter);
    navigationDexOuter.appendChild(navigationDexInner);
	navigationDexInner.appendChild(navigationDexInput);
	navigationDexInner.appendChild(navigationDexLabel);
    navigationDexInput.addEventListener("click", dexMove);
    navigationDexInput.addEventListener("click", dexSwitch);

	for(var i = 0; i < JSONPath_Pokédex.length; i++) {
		let x = i+2;
		var navigationDexInput = document.createElement("input");
		var navigationDexLabel = document.createElement("label");
		navigationDexInput.setAttribute("type", "radio");
		navigationDexInput.setAttribute("value", x);
		navigationDexInput.setAttribute("name", "finaldex-dexswitch-"+GameID);
		navigationDexInput.setAttribute("id", "dexswitch"+x);
		navigationDexInput.setAttribute("autocomplete", "off");
		navigationDexLabel.setAttribute("for", "dexswitch"+x);
		navigationDexLabel.setAttribute("name", JSONPath_Pokédex[i].split("_")[0]);
		navigationDexLabel.innerText = JSONPath_Pokédex[i].split("_")[0];
		navigationDexInner.appendChild(navigationDexInput);
		navigationDexInner.appendChild(navigationDexLabel);
        navigationDexInput.addEventListener("click", dexMove);
		navigationDexInput.addEventListener("click", dexSwitch);
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





    var natureTemp = [];

    if (Natures.length > 0) {
        natureTemp = Natures;
    }

    for (var i = 0; i < 6; i++) {
        var teamDiv = document.createElement("div");
        var teamAside1 = document.createElement("aside");
        var teamAside2 = document.createElement("aside");
        var teamAdd = document.createElement("button");
        var teamLeft = document.createElement("span");
        var teamExit = document.createElement("select");
        var teamGrab = document.createElement("button");
        var teamPokémon = document.createElement("span");


        var teamImgOuter = document.createElement("span");
        var teamImg = document.createElement("img");

        var teamRight = document.createElement("span");
        var teamStatsButton = document.createElement("button");
        var teamExport = document.createElement("select");
        var teamLevel = document.createElement("input");
        var teamNickOuter = document.createElement("span");
        var teamNick = document.createElement("input");

        teamDiv.setAttribute("name","empty")
        teamImg.src = "";
        teamImg.setAttribute("value","");
        teamImg.setAttribute("title","");
        teamImg.addEventListener("click", modalData);
        teamImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");

        teamGrab.innerText = "⋮⋮⋮";
        teamStatsButton.innerText = "⟲";

        teamAdd.innerText = "+";
        teamAdd.classList.add("blinkindicator");

        teamStatsButton.setAttribute("value","Moves");
        teamNickOuter.setAttribute("name","Name");
        teamImgOuter.setAttribute("name","Pokémon");


        teamLevel.setAttribute("type","number");
        teamLevel.setAttribute("min","0");
        teamLevel.setAttribute("max","100");
        teamLevel.setAttribute("placeholder","Lvl.");
        teamNick.setAttribute("type","text");
        teamNick.setAttribute("placeholder","Pokémon");
        if (Generation >= 1 && Generation <= 5) {
            teamNick.setAttribute("maxlength","10");
        }
        else if (Generation >= 6) {
            teamNick.setAttribute("maxlength","12");
        }
   

        teamAdd.addEventListener("click", partyAdd)

        teamLevel.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamLevel.addEventListener("change", inputMinMax);
        teamLevel.addEventListener("change", function() {calcPartyStat(this);});

        teamNick.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamNick.addEventListener("click",function(event){if(event.which === 0){this.blur()}});


        teamParty.appendChild(teamDiv);
        teamDiv.appendChild(teamAside1);
        teamDiv.appendChild(teamAside2);
        teamAside2.appendChild(teamAdd);

        teamAside1.appendChild(teamLeft);
        teamLeft.appendChild(teamExit);
        teamLeft.appendChild(teamLevel);
        teamLeft.appendChild(teamGrab);
        teamAside1.appendChild(teamPokémon);

        if (HeldItem == true) {
            var teamItemOuter = document.createElement("span");
            teamItemOuter.setAttribute("name","Item");
            teamPokémon.appendChild(teamItemOuter);
        }


        teamPokémon.appendChild(teamImgOuter);

        if (HeldItem == true) {

            var teamItemSelect = document.createElement("select");
            teamItemOuter.appendChild(teamItemSelect);

            var teamHeldItemImage = document.createElement("img");
            teamHeldItemImage.src = "";
            teamHeldItemImage.setAttribute("onerror", "this.src='./media/Images/Misc/FinalDex/Error.png'");
            teamHeldItemImage.setAttribute("name","Item");
            teamHeldItemImage.setAttribute("title","");
            teamImgOuter.appendChild(teamHeldItemImage);

            teamItemSelect.addEventListener("change",selectModify);
            teamItemSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            teamItemSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            teamItemSelect.addEventListener("change", partyItem);
            teamHeldItemImage.addEventListener("click", dataRedirect);
        }


        teamImgOuter.appendChild(teamImg);
        teamPokémon.appendChild(teamNickOuter);
        teamNickOuter.appendChild(teamNick);
        



 





        var exitOptions = ["❌","Send to Box","Delete"];
        for (var u = 0; u < exitOptions.length; u++) {
            var teamExitOption = document.createElement("option");
            teamExitOption.setAttribute("value",exitOptions[u]);
            teamExitOption.innerText = exitOptions[u];
            teamExit.appendChild(teamExitOption);
        }

        var exportOptions = ["➢","Add Copy to Party","Add Copy to Box","Change Evolution","Change Form","Export Pokémon Data String"];
        for (var u = 0; u < exportOptions.length; u++) {
            var teamExportOption = document.createElement("option");
            teamExportOption.setAttribute("value",exportOptions[u]);
            teamExportOption.innerText = exportOptions[u];
            teamExport.appendChild(teamExportOption);
        }

        teamExit.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
        teamExit.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamExit.addEventListener("change", selectModify);
        teamExport.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
        teamExport.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamExport.addEventListener("change", selectModify);


        if (GameID >= 31 && GameID <= 32) {
            var dataOptions = ["Moves","Individual Values","Awakening Values","Additional"];
        }
        else {
            var dataOptions = ["Moves","Individual Values","Effort Values","Additional"];
        }
        for (var u = 0; u < dataOptions.length; u++) {
            var teamData = document.createElement("span");
            if (dataOptions[u] == "Awakening Values") {
                teamData.setAttribute("name","Effort Values");
            }
            else {
                teamData.setAttribute("name",dataOptions[u]);
            }
            teamData.classList.add("scroll");
            teamAside1.appendChild(teamData);

            for (var y = 0; y < 3; y++) {
                var teamDataInner = document.createElement("span");
                teamData.appendChild(teamDataInner);

                if (y == 2 && dataOptions[u].includes("Values") && natureTemp.length > 0) {
                    teamDataInner.setAttribute("name","Nature");
                }
                if (y == 2 && dataOptions[u] == "Moves" && Ability.length > 0) {
                    teamDataInner.setAttribute("name","Ability");
                }
                if (y == 2 && dataOptions[u].includes("Values") && natureTemp.length < 1) {
                    teamDataInner.remove();
                }
                if (y == 2 && dataOptions[u] == "Moves" && Ability.length < 1) {
                    teamDataInner.remove();
                }
                if (y == 2 && dataOptions[u] == "Additional") {
                    teamDataInner.remove();
                }


                if (y == 0) {
                    var teamDataTitle = document.createElement("h5");
                    teamDataTitle.innerText = dataOptions[u];
                    teamDataInner.appendChild(teamDataTitle);
                }

                else if (y == 1 && u >= 1 && u <= 2) {
                    for (var r = 0; r < 2; r++) {
                        var teamDataStats = document.createElement("span");
                        teamDataInner.appendChild(teamDataStats);
                        for (var q = 0; q < Stats.length; q++) {
                            if (Stats[q] != "Total") {
                                var teamDataInput = document.createElement("input");
                                teamDataInput.setAttribute("type","number");

                                if (u == 1 && r == 0) {
                                    teamDataInput.setAttribute("placeholder",Stats[q]+" IV");
                                    if (Generation >= 1 && Generation <= 2) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","15");
                                    }
                                    else if (Generation >= 3) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","31");
                                    }
                                    teamDataInput.addEventListener("change", inputMinMax);
                                }
                                else if (u == 2 && r == 0) {
                                    if (Generation >= 1 && Generation <= 2) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","65535");
                                        teamDataInput.setAttribute("placeholder",Stats[q]+" EV");
                                    }
                                    else if (GameID >= 31 && GameID <= 32) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","200");
                                        teamDataInput.setAttribute("placeholder",Stats[q]+" AV");
                                    }
                                    else if (Generation >= 3) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","255");
                                        teamDataInput.setAttribute("placeholder",Stats[q]+" EV");
                                        teamDataInput.addEventListener("blur", evInputMax);
                                        teamDataInput.addEventListener("focus", evInputMax);
                                        teamDataInput.addEventListener("change", evInputMax);
                                    }
                                    teamDataInput.addEventListener("change", inputMinMax);
                                }
                                if (r == 1) {
                                    teamDataInput.setAttribute("min","0");
                                    teamDataInput.setAttribute("max","0");
                                    teamDataInput.addEventListener("change", inputMinMax);
                                    teamDataInput.setAttribute("title",Stats[q]);
                                    teamDataInput.setAttribute("disabled","");
                                }
                              
                                teamDataInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                                teamDataInput.addEventListener("change", function() {calcPartyStat(this);});
                                teamDataStats.appendChild(teamDataInput);
                            }
                        }
                    }
                }

                else if (y == 1 && u == 3) {
                    var teamDataAddOuter = document.createElement("span");
                    teamDataInner.appendChild(teamDataAddOuter);
                    
                    if (Friendship == true) {
                        var teamDataAdd = document.createElement("label");
                        var teamDataAddText = document.createElement("span");
                        var teamDataAddInput = document.createElement("input");
                        teamDataAdd.setAttribute("name","Friendship");
                        teamDataAddText.innerText = "Friendship: ";
                        teamDataAddInput.setAttribute("type","number");
                        teamDataAddInput.setAttribute("min","0");
                        teamDataAddInput.setAttribute("max","255");
                        teamDataAddOuter.appendChild(teamDataAdd);
                        teamDataAdd.appendChild(teamDataAddText);
                        teamDataAdd.appendChild(teamDataAddInput);
                        teamDataAddInput.addEventListener("change", inputMinMax);
                        teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        teamDataAddInput.addEventListener("change",function() {calcPartyStat(this);});
                    }

                    var met = ["Location","Level","Date"];
                    for(var r = 0; r < met.length; r++) {
                        var teamDataAdd = document.createElement("label");
                        var teamDataAddText = document.createElement("span");
                        teamDataAdd.setAttribute("name",met[r]);
                        teamDataAddText.innerText = met[r]+" Met: ";
                        teamDataAddOuter.appendChild(teamDataAdd);
                        teamDataAdd.appendChild(teamDataAddText)
                        if (met[r] == "Location") {
                            var teamDataAddInput = document.createElement("select");
                            teamDataAdd.appendChild(teamDataAddInput)
                            teamDataAddInput.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                            teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                            teamDataAddInput.addEventListener("change", selectModify);

                            var teamDataAddLabel = document.createElement("option");
                            teamDataAddLabel.innerText = "";
                            teamDataAddLabel.value = "";
                            teamDataAddInput.appendChild(teamDataAddLabel)

                            for(var t = 0; t < finaldataLocation.length; t++) {
                                if (finaldataLocation[t][JSONPath_Location+"_Name"] != undefined) {
                                    var teamDataAddLabel = document.createElement("option");
                                    teamDataAddLabel.innerText = finaldataLocation[t][JSONPath_Location+"_Name"];
                                    teamDataAddLabel.value = finaldataLocation[t][JSONPath_Location+"_Name"];
                                    teamDataAddInput.appendChild(teamDataAddLabel)
                                }
                            }
                        }
                        else if (met[r] == "Level") {
                            var teamDataAddInput = document.createElement("input");
                            teamDataAddInput.setAttribute("type","number");
                            teamDataAddInput.setAttribute("min","0");
                            teamDataAddInput.setAttribute("max","100");
                            teamDataAdd.appendChild(teamDataAddInput)
                            teamDataAddInput.addEventListener("change", inputMinMax);
                            teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        }
                        else if (met[r] == "Date") {
                            var teamDataAddInput = document.createElement("input");
                            teamDataAddInput.setAttribute("type","date");
                            teamDataAdd.appendChild(teamDataAddInput)
                            teamDataAddInput.addEventListener("change", inputMinMax);
                            teamDataAddInput.addEventListener("focus", function() {dateHideShow(event,"open");});
                            teamDataAddInput.addEventListener("blur", function() {dateHideShow(event,"close");});
                            teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        }
                    }

 
                }

                else if (y == 1 && dataOptions[u] == "Moves") {
                    for (var p = 0; p < 4; p++) {
                        var teamDataSelectOuter = document.createElement("span");
                        var teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelectOuter);
                        teamDataSelectOuter.appendChild(teamDataSelect);
                        teamDataSelect.addEventListener("change",selectModify);
                        teamDataSelect.addEventListener("focus",selectModify);
                        teamDataSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                        teamDataSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                    }
                }
                else if (y == 2 && dataOptions[u] == "Moves") {
                    if (Ability.length > 0) {
                        var teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelect);
                        teamDataSelect.addEventListener("change",selectModify);
                        teamDataSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                        teamDataSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                    }
                }

                if (y == 2 && u >= 1 && u <= 2) {
                    if (natureTemp.length > 0) {
                        var teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelect);
                        teamDataSelect.addEventListener("change",selectModify);
                        teamDataSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                        teamDataSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        teamDataSelect.addEventListener("change", partyNature);
                        teamDataSelect.addEventListener("change", function() {calcPartyStat(this);});
                        for (var q = 0; q < natureTemp.length; q++) {
                            var teamDataOption = document.createElement("option");
                            teamDataOption.setAttribute("value",natureTemp[q]);
                            teamDataOption.innerText = natureTemp[q];
                            teamDataSelect.appendChild(teamDataOption);
                        }
                    }
                }
            }
        }



        teamAside1.appendChild(teamRight);
        teamRight.appendChild(teamStatsButton);

        if (Gender == true) {
            var teamGender = document.createElement("select");
            teamRight.appendChild(teamGender);
            teamGender.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            teamGender.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            teamGender.addEventListener("change",selectModify);
        }

        teamRight.appendChild(teamExport);

        teamStatsButton.addEventListener("click", partyDataSwitchAll);




    }



    var boxDiv = document.createElement("ul");
    teamBox.appendChild(boxDiv);
    var teamBoxTrash = document.createElement("button");
    var teamBoxTrashImg = document.createElement("img");
    teamBoxTrashImg.src = "./media/Images/Misc/FinalDex/Prohibition.svg";
    teamBoxTrashImg.classList.add("deselect");
    teamBox.appendChild(teamBoxTrash);
    teamBoxTrash.appendChild(teamBoxTrashImg);

    var btnImg = document.querySelector('#pokémon-outer > main section[name="Box"] > button img');
    var blinktar = document.querySelector('#pokémon-outer > main section:not([name]) > button:first-child');
    var data = [];



    $(function() {
        $('#pokémon-outer > main section[name="Box"] > ul').sortable({
            start: function(e, ui) {
                saveddrag = ui.item.context;
                startDrag();
                boxMemory("Save");
            },
            stop: function(e, ui) {
                stopDrag();
                boxMemory("Save");
            },
        });

        $('#pokémon-outer > main section[name="Party"] > div span[name="Moves"] > span:nth-child(2)').sortable({
            stop: function(e,ui) {
                reNumberMove(e.target);
            },
            axis: "y",
            scroll: false,
        });

        $('#pokémon-outer > main section[name="Box"] > button').droppable({
            drop: function(e, ui) {
                if (saveddrag != undefined) {
                    deleteBox(saveddrag);
                }
            }
        });

        $('#pokémon-outer > main section:not([name]) > button:first-child').droppable({
            drop: function(e, ui) {
                var tar = document.querySelectorAll('#pokémon-outer > main[name="Team"] section[name="Party"] > div[name="empty"]');
                if (saveddrag != undefined) {
                    if (tar.length > 0) {
                        if (data.length > 1) {
                            data = data.join("|")
                        }
                        else {
                            data = data[0];
                        }
                        deleteBox(saveddrag);
                        createParty(tar[0],data);
                        partyShow(tar[0]);
                    }
                    else {
                        alert("Party is full!")
                    }
                }
            }
        });


        function startDrag() {
            saveddrag.style.pointerEvents = "none";

            if (saveddrag.getAttribute("data-pok") != undefined) {
                data.push("pok:"+saveddrag.getAttribute("data-pok"));
            }
            if (saveddrag.getAttribute("data-item") != undefined) {
                data.push("it:"+saveddrag.getAttribute("data-item"));
            }
            if (saveddrag.getAttribute("data-nick") != undefined) {
                data.push("ni:"+saveddrag.getAttribute("data-nick"));
            }
            if (saveddrag.getAttribute("data-level") != undefined) {
                data.push("lv:"+saveddrag.getAttribute("data-level"));
            }
            if (saveddrag.getAttribute("data-gender") != undefined) {
                data.push("ge:"+saveddrag.getAttribute("data-gender"));
            }
            if (saveddrag.getAttribute("data-move") != undefined) {
                data.push("mo:"+saveddrag.getAttribute("data-move"));
            }
            if (saveddrag.getAttribute("data-ability") != undefined) {
                data.push("ab:"+saveddrag.getAttribute("data-ability"));
            }
            if (saveddrag.getAttribute("data-iv") != undefined) {
                data.push("iv:"+saveddrag.getAttribute("data-iv"));
            }
            if (saveddrag.getAttribute("data-ev") != undefined) {
                data.push("ev:"+saveddrag.getAttribute("data-ev"));
            }
            if (saveddrag.getAttribute("data-nature") != undefined) {
                data.push("na:"+saveddrag.getAttribute("data-nature"));
            }
            if (saveddrag.getAttribute("data-metlocation") != undefined) {
                data.push("metlo:"+saveddrag.getAttribute("data-metlocation"));
            }
            if (saveddrag.getAttribute("data-metlevel") != undefined) {
                data.push("metlv:"+saveddrag.getAttribute("data-metlevel"));
            }
            if (saveddrag.getAttribute("data-metdate") != undefined) {
                data.push("metda:"+saveddrag.getAttribute("data-metdate"));
            }
            if (saveddrag.getAttribute("data-friendship") != undefined) {
                data.push("fr:"+saveddrag.getAttribute("data-friendship"));
            }

            boxDrag = true;
            blinktar.firstElementChild.classList.add("enabled");
        }
        function stopDrag() {
            saveddrag.style.pointerEvents = "unset";
            saveddrag = "";
            boxDrag = false;
            btnImg.classList.remove("prohibition");
            blinktar.firstElementChild.classList.remove("enabled");
            data = [];
        }
    });

    $("body").mousemove(function (e) {
        if (boxDrag == true) {
            if (e.target === btnImg) {
                btnImg.classList.add("prohibition");
            }
            else {
                btnImg.classList.remove("prohibition");
            }



            var tar = document.querySelectorAll('#pokémon-outer > main[name="Team"] section[name="Party"] > div[name="empty"]');
            if (tar.length > 0) {
                if (e.target === blinktar) {
                    blinktar.firstElementChild.classList.add("hover");
                }
                else {
                    blinktar.firstElementChild.classList.remove("hover");
                }
            }
        }
        else {
            var hovers = document.getElementsByClassName("hover");
            for (var u = 0; u < hovers.length; u++) {
                hovers[u].classList.remove("hover");
            }
        }
       

        
    });

    $(function() {
        $('#pokémon-outer > main section[name="Party"]').sortable({
            stop: function(e,ui) {
            },
            axis: "y",
            scroll: false,
        });
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
            settingsDefaultImgtypeOption.innerText = ImageType_Path[i]+" "+ImageType_Type[i];
            settingsDefaultImgtypeOption.value = ImageType_Path[i]+" "+ImageType_Type[i];
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
    settingsDefaultResizeInput.setAttribute("max","420");
    settingsDefaultResizeInput.setAttribute("value","240");
    settingsDefaultResizeInput.setAttribute("step","60");
    settingsDefaultResizeInput.setAttribute("autocomplete","off");
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

    settingsDefaultResizeInput.addEventListener("change",resizeDiv);

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
    var settingsVariantTop = document.createElement("span");
    var settingsVariantBottom = document.createElement("span");
    var settingsVariantButton = document.createElement("button");
	settingsVariant.setAttribute("name", "Variant");
    settingsVariantButton.innerText = "Apply";
    settings.appendChild(settingsVariant);
    settingsVariant.appendChild(settingsVariantTop);
    settingsVariant.appendChild(settingsVariantBottom);
    settingsVariantBottom.appendChild(settingsVariantButton);

    
	var formopts = [];
	for(var q = 0; q < finaldataPokémon.length; q++) {
		if(finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[q]["Filter_"+JSONPath_Area] != "Unobtainable") {
			formopts.push(finaldataPokémon[q]["Variant"]);
		}
	}
	formopts = formopts.filter((item) => !item.includes("Default ") && !item.includes(" Form") && !item.includes("Gender"));
	for(var q = 0; q < formopts.length; q++) {
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

		settingsVariantInput.setAttribute("id", "settings-form-"+formopts[i]+"-"+i);
		settingsVariantInput.setAttribute("name",i);
		settingsVariantLabel.setAttribute("for", "settings-form-"+formopts[i]+"-"+i);
		settingsVariantLabel.innerText = formopts[i];
		settingsVariantTop.appendChild(settingsVariantInput);
		settingsVariantTop.appendChild(settingsVariantLabel);
		settingsVariantLabel.appendChild(settingsVariantSpan);
        settingsVariantInput.addEventListener("click", function() {preventCheckboxZero(this.parentElement);});
        if (i == 0) {
            settingsVariantInput.checked = true
        }

	}

    settingsVariantButton.addEventListener("click", variantSelector);




    settingsDefaultImgtype.addEventListener("change",imageType);




    $( function() {
        $('#pokémon-outer > div li img').draggable();
        $('#pokémon-outer > main section[name="Box"] ul').droppable();
    } );


}

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
			imgTypeBox.innerHTML = '<span class="imgtype-arrow">▾</span>'+"<p>"+imgType[i].parentElement.innerText+"</p>"+'<div><img src="./media/Images/Misc/FinalDex/'+dataExtension+'.png" name="'+dataExtension+'" /></div>';
			if(!dataType.includes("Art")) {
				for(var q = 0; q < conimg.length; q++) {
					if(conimg[q].getAttribute("id").includes("Shiny")) {
						conimg[q].src = "./media/Images/Pokémon/"+dataType+"/"+dataExtension+"/Shiny/Front/"+dataPath+"/"+getPokémonMediaPath(conimg[q].id)+"."+dataExtension;
						conimg[q].setAttribute("path", dataPath+"/"+getPokémonMediaPath(conimg[q].id)+"."+dataExtension);
					} else {
						conimg[q].src = "./media/Images/Pokémon/"+dataType+"/"+dataExtension+"/Normal/Front/"+dataPath+"/"+getPokémonMediaPath(conimg[q].id)+"."+dataExtension;
						conimg[q].setAttribute("path", dataPath+"/"+getPokémonMediaPath(conimg[q].id)+"."+dataExtension);
					}
				}
			} else {
				for(var q = 0; q < conimg.length; q++) {
					conimg[q].src = "./media/Images/Pokémon/"+dataType+"/"+dataPath+"/"+getPokémonMediaPath(conimg[q].id)+"."+dataExtension;
				}
			}
		}
	}
}




function resizeDiv() {
    var sliderDefaultValue = 240;
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
		lis[i].style.width = slider.value+"px";
		lis[i].style.height = slider.value+"px";
		lis[i].style.fontSize = slider.value / 15+"px";
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
	output.innerText = Math.round((slider.value / sliderDefaultValue) * 100)+"%";

    memory("Save","resize","site",document.getElementById("resize"))
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
		var searchoptions = ["evolution::", "evolution:!", "type::", "type:!", "ability::", "ability:!", "catchrate::", "catchrate:!", "catchrate:>", "catchrate:<", "eggcycle::", "eggcycle:!", "eggcycle:>", "eggcycle:<", "genderratio::", "genderratio:!", "egggroup::", "egggroup:!", "expyield::", "expyield:!", "expyield:>", "expyield:<", "expyieldcategory::", "expyieldcategory:!", "levelrate::", "levelrate:!", "levelrate:>", "levelrate:<", "helditem::", "helditem:!", "statshp::", "statshp:!", "statshp:>", "statshp:<", "statsattack::", "statsattack:!", "statsattack:>", "statsattack:<", "statsdefense::", "statsdefense:!", "statsdefense:>", "statsdefense:<", "statsspatk::", "statsspatk:!", "statsspatk:>", "statsspatk:<", "statsspdef::", "statsspdef:!", "statsspdef:>", "statsspdef:<", "statsspeed::", "statsspeed:!", "statsspeed:>", "statsspeed:<", "statstotal::", "statstotal:!", "statstotal:>", "statstotal:<", "evyieldhp::", "evyieldhp:!", "evyieldhp:>", "evyieldhp:<", "evyieldatk::", "evyieldatk:!", "evyieldatk:>", "evyieldatk:<", "evyielddef::", "evyielddef:!", "evyielddef:>", "evyielddef:<", "evyieldspatk::", "evyieldspatk:!", "evyieldspatk:>", "evyieldspatk:<", "evyieldspdef::", "evyieldspdef:!", "evyieldspdef:>", "evyieldspdef:<", "evyieldspeed::", "evyieldspeed:!", "evyieldspeed:>", "evyieldspeed:<", "evyieldtotal::", "evyieldtotal:!", "evyieldtotal:>", "evyieldtotal:<", "variant::", "variant:!", "checked::","learnset::","learnset:!"];
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
				$("#pokémon-outer > div li[data-search-"+searchspec.split("::")[0].toLowerCase()+'="'+searchVal.split("::")[1].toLowerCase()+'"]').removeClass("hidden");
			} else {
				$("#pokémon-outer > div li[data-search-"+searchspec.split("::")[0].toLowerCase()+'*="'+searchVal.split("::")[1].toLowerCase()+'"]').removeClass("hidden");
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes(":!") && searchVal.toLowerCase().includes(searchspec)) {
			filterItems.addClass("hidden");
			if(searchspec.includes("stats") || searchspec.includes("evyield") || searchspec.includes("catchrate") || searchspec.includes("eggcycle") || searchspec.includes("expyield") || searchspec.includes("levelrate")) {
				$("#pokémon-outer > div li:not([data-search-"+searchspec.split(":!")[0].toLowerCase()+'="'+searchVal.split(":!")[1].toLowerCase()+'"])').removeClass("hidden");
			} else {
				$("#pokémon-outer > div li:not([data-search-"+searchspec.split(":!")[0].toLowerCase()+'*="'+searchVal.split(":!")[1].toLowerCase()+'"])').removeClass("hidden");
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes(":>") && searchVal.toLowerCase().includes(searchspec)) {
			for(var q = 0; q < filterItems.length; q++) {
				filterItems[q].classList.add("hidden");
				if(parseInt(filterItems[q].getAttribute("data-search-"+searchspec.split(":>")[0])) >= parseInt(searchVal.toLowerCase().split(searchspec)[1])) {
					filterItems[q].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes(":<") && searchVal.toLowerCase().includes(searchspec)) {
			for(var q = 0; q < filterItems.length; q++) {
				filterItems[q].classList.add("hidden");
				if(parseInt(filterItems[q].getAttribute("data-search-"+searchspec.split(":<")[0])) <= parseInt(searchVal.toLowerCase().split(searchspec)[1])) {
					filterItems[q].classList.remove("hidden");
				}
			}
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase() != "") {
			filterItems.addClass("hidden");
			$('#pokémon-outer > div li[data-search-name*="'+searchVal.toLowerCase()+'"]').removeClass("hidden");
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
				$('#ability-options label[data-search-name*="'+searchVal.toLowerCase()+'"]').removeClass("hidden");
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
			$('#move-options label[data-search-type*="'+searchVal.toLowerCase().split("type::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("category::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-category*="'+searchVal.toLowerCase().split("category::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("pp::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-pp="'+searchVal.toLowerCase().split("pp::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("power::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-power="'+searchVal.toLowerCase().split("power::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("accuracy::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-accuracy="'+searchVal.toLowerCase().split("accuracy::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("contact::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-contact*="'+searchVal.toLowerCase().split("contact::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("tutor::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-tutor="'+searchVal.toLowerCase().split("tutor::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
			this.style.color = "var(--colorRed)";
		} else if(searchVal.toLowerCase().includes("machine::")) {
			filterItems.addClass("hidden");
			$('#move-options label[data-search-machine*="'+searchVal.toLowerCase().split("machine::")[1].replaceAll(" ", "")+'"]').removeClass("hidden");
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
			$('#move-options label[data-search-name*="'+searchVal.toLowerCase()+'"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	$("#item-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#item-options label");
		if(searchVal != "") {
			filterItems.addClass("hidden");
			$('#item-options label[data-search-name*="'+searchVal.toLowerCase()+'"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	$("#map-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#map-options label");
		if(searchVal != "") {
			filterItems.addClass("hidden");
			$('#map-options label[data-search-name*="'+searchVal.toLowerCase()+'"]').removeClass("hidden");
		} else {
			filterItems.removeClass("hidden");
		}
	});
	$("#map-options-search input").on("keyup", function() {
		var searchVal = $(this).val();
		var filterItems = $("#map-options label");
		if(searchVal != "") {
			filterItems.addClass("hidden");
			$('#map-options label[data-search-name*="'+searchVal.toLowerCase()+'"]').removeClass("hidden");
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

function dexMove() {
	var x = parseInt(this.value);

	if (x > JSONPath_Pokédex.length) {
		this.parentElement.style.transform = "translate(0%)";
	}
    else {
		this.parentElement.style.transform = "translate(-"+x+"00%)";
	}
	dexChecker.fill(x);
}

function dexSwitch() {
	var divList = $("#pokémon-outer > div li");
	var x = dexChecker[0];
	if(x == JSONPath_Pokédex.length+1) {
		divList.sort(function(a, b) {
			return $(a).data("national") - $(b).data("national");
		});
		$("#pokémon-outer > div ul").html(divList);
	} else {
		for(q = 0; q < JSONPath_Pokédex.length; q++) {
			divList.sort(function(a, b) {
				return $(a).data("regional-"+x) - $(b).data("regional-"+x);
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
	for(q = 0; q < [JSONPath_Pokédex.length+1]; q++) {
		var p = q+1;
		if(dexChecker == p && dexChecker != JSONPath_Pokédex.length+1) {
			let contreg = document.querySelectorAll(".contain-regionalID-"+p);
			for(u = 0; u < contreg.length; u++) {
				contreg[u].style.display = "flex";
			}
			var contregdiv = document.querySelectorAll("#pokémon-outer > div li[data-regional-"+p+'=""]');
			for(u = 0; u < contregdiv.length; u++) {
				contregdiv[u].style.display = "none";
			}
			var regID = document.querySelectorAll(".data-regionalID-"+p);
			for(u = 0; u < regID.length; u++) {
				regID[u].style.display = "unset";
			}
			var regPrevious = document.querySelectorAll(".data-previous button[name='regional"+p+"']");
			for(u = 0; u < regPrevious.length; u++) {
				regPrevious[u].style.display = "flex";
			}
			var regNext = document.querySelectorAll(".data-next button[name='regional"+p+"']");
			for(u = 0; u < regNext.length; u++) {
				regNext[u].style.display = "flex";
			}
		} else if(dexChecker == p && dexChecker == JSONPath_Pokédex.length+1) {
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
    memory("Save","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));
}

function CheckAll() {
	count();
	var check = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden) input:not(:checked)');
	for(var i = 0; i < check.length; i++) {
		check[i].click();
	}
    memory("Save","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));
}





function createContain(condition) {

    var condition;

    var lis = document.querySelectorAll("#pokémon-outer > div li");
    for (var q = 0; q < lis.length; q++) {
        lis[q].remove();
    }

	for(var i = 0; i < finaldataPokémon.length; i++) {
        var conditions = [];
        if (condition != undefined) {
            if (condition.includes("Default")) {
                conditions.push(finaldataPokémon[i]["Variant"].includes("Default"));
            }
            if (condition.includes("Regional Form")) {
                conditions.push(finaldataPokémon[i]["Variant"].includes("Alolan") || finaldataPokémon[i]["Variant"].includes("Galarian"));
            }
            if (condition.includes("Form")) {
                conditions.push(finaldataPokémon[i]["Variant"] == "Form");
            }
            if (condition.includes("Mega Evolution")) {
                conditions.push(finaldataPokémon[i]["Variant"].includes("Mega"));
            }
            if (condition.includes("Gigantamax")) {
                conditions.push(finaldataPokémon[i]["Variant"].includes("Gigantamax"));
            }
        }

        if(finaldataPokémon[i][JSONPath_Reference] == "true" && finaldataPokémonArea[i]["Filter_"+JSONPath_Area] != "Unobtainable" || finaldataPokémon[i][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {return e.ID;}).indexOf(finaldataPokémon[i]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
            for (var q = 0; q < conditions.length; q++) {
                if (conditions[q] == true) {
                    var ID = finaldataPokémon[i]["ID"];
                    var Name = finaldataPokémonForm[i]["Pokémon"];
                    var formName = finaldataPokémonForm[i]["Form_"+JSONPath_Form];
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

                    if(finaldataPokémonArea[i]["Filter_"+JSONPath_Area] != undefined) {
                        contentDiv.setAttribute("data-filter", finaldataPokémonArea[i]["Filter_"+JSONPath_Area].replaceAll(" ", ""));
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
                    contentDiv.setAttribute("data-search-learnset",returnMoveSet(i,"onlymoves,noduplicate,lower"));

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
                    contentInput.setAttribute("id", "finaldex-"+GameID+"-"+i);
                    contentInput.setAttribute("name",i);
                    contentLabel.setAttribute("for", "finaldex-"+GameID+"-"+i);
                    contentButton.value = i;
                    contentButton.addEventListener("click", modalData);
                    contentButtonImg.src = "./media/Images/Misc/FinalDex/Location.png";
                    contentNationalID.classList.add("contain-nationalID");
                    contentNationalID.innerText = "#"+ID;
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
                    document.querySelector("#pokémon-outer > div > ul").appendChild(contentDiv);
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
                    
                    contentInput.addEventListener("change",function() {memory("Save","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));});
                    contentInput.addEventListener("change", count);


                    for(q = 0; q < JSONPath_Pokédex.length; q++) {
                        let y = q+1;
                        var contentMainRegionalID = document.createElement("caption");
                        if(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]] == undefined) {
                            if(finaldataPokémonPokédexID[finaldataPokémonPokédexID.map(function(e) {
                                    return e.ID;
                                }).indexOf(finaldataPokémon[i]["ID"])][JSONPath_Pokédex[q]] != undefined) {
                                contentDiv.setAttribute("data-regional-"+y, finaldataPokémonPokédexID[finaldataPokémonPokédexID.map(function(e) {
                                    return e.ID;
                                }).indexOf(finaldataPokémon[i]["ID"])][JSONPath_Pokédex[q]]);
                                contentMainRegionalID.innerText = "#"+finaldataPokémonPokédexID[finaldataPokémonPokédexID.map(function(e) {
                                    return e.ID;
                                }).indexOf(finaldataPokémon[i]["ID"])][JSONPath_Pokédex[q]];
                            } else {
                                contentDiv.setAttribute("data-regional-"+y, "");
                                contentMainRegionalID.innerText = "#";
                            }
                        } else {
                            contentDiv.setAttribute("data-regional-"+y, finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]]);
                            contentMainRegionalID.innerText = "#"+finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]];
                        }
                        contentMainRegionalID.classList.add("contain-regionalID-"+y);
                        contentMainUp.appendChild(contentMainRegionalID);
                    }
                    contentDiv.addEventListener("dragstart", dragStart);
                    contentDiv.addEventListener("dragend", dragEnd);
                    contentDiv.addEventListener("drag", dragMove);
                }
            }
        }
        conditions = [];
	}
}