var createPokémon = function() {
	var contentOuter = document.createElement("div");
	contentOuter.setAttribute("id","pokémon-outer");
	contentOuter.setAttribute("name","Pokémon");
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

	navigationDex.setAttribute("id","dexswitch-outer");
	navigationDexContent.setAttribute("id","dexswitch");
	navigationSearch.setAttribute("id","search-outer");
	navigationSearchContent.setAttribute("id","search");
	navigationSearchInput.setAttribute("id","searchbar");
	navigationSearchInput.setAttribute("type","text");
	navigationSearchInput.setAttribute("placeholder","Search...");
	navigationSearchInput.setAttribute("onfocus","this.placeholder = ''");
	navigationSearchInput.setAttribute("onblur","this.placeholder = 'Search...'");
	navigationSearchInput.setAttribute("autocomplete","off");
	navigationSearchInput.setAttribute("tabindex","0");
	navigationSearchExit.setAttribute("id","search-exit");
	navigationCount.setAttribute("id","count-outer");
	navigationCountContent.setAttribute("id","count");
	navigationCountSpan1.setAttribute("id","count-current");
	navigationCountSpan2.setAttribute("id","count-slash");
	navigationCountSpan2.innerText = "/";
	navigationCountSpan3.setAttribute("id","count-total");
	navigationGame.setAttribute("id","gametitle-outer");
	navigationGameContent.setAttribute("id","gametitle");
	navigationGameImg.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","")+".png";
	navigationSettings.setAttribute("id","settings-outer");
	navigationSettingsImg.src = "./media/Images/Misc/FinalDex/Cog.png";

    var navigationDexOuter = document.createElement("span");
    var navigationDexInner = document.createElement("span");
	var navigationDexInput = document.createElement("input");
	var navigationDexLabel = document.createElement("label");
	navigationDexInput.setAttribute("type","radio");
	navigationDexInput.setAttribute("value","1");
	navigationDexInput.setAttribute("name","finaldex-dexswitch-"+GameID);
	navigationDexInput.setAttribute("id","dexswitch1");
	navigationDexInput.setAttribute("autocomplete","off");
	navigationDexLabel.setAttribute("for","dexswitch1");
	navigationDexLabel.setAttribute("name","National Pokédex");
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
		navigationDexInput.setAttribute("type","radio");
		navigationDexInput.setAttribute("value", x);
		navigationDexInput.setAttribute("name","finaldex-dexswitch-"+GameID);
		navigationDexInput.setAttribute("id","dexswitch"+x);
		navigationDexInput.setAttribute("autocomplete","off");
		navigationDexLabel.setAttribute("for","dexswitch"+x);
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

    navigationSearch.addEventListener("keyup", function() {search("Pokémon");});
    navigationSearchExit.addEventListener("click", function() {exitSearch("Pokémon");count();});


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
        teamImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");

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
            teamHeldItemImage.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
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


        var dataOptions = ["Moves","Stats","Additional"];
    
      
        for (var u = 0; u < dataOptions.length; u++) {
            var teamData = document.createElement("span");
     
            teamData.setAttribute("name",dataOptions[u]);
            
            teamData.classList.add("scroll");
            teamAside1.appendChild(teamData);

            for (var y = 0; y < 3; y++) {
                var teamDataInner = document.createElement("span");
                teamData.appendChild(teamDataInner);

                if (y == 2 && dataOptions[u] == "Stats" && natureTemp.length > 0) {
                    teamDataInner.setAttribute("name","Nature");
                }
                if (y == 2 && dataOptions[u] == "Moves" && Ability.length > 0) {
                    teamDataInner.setAttribute("name","Ability");
                }
                if (y == 2 && dataOptions[u] == "Stats" && natureTemp.length < 1) {
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

                else if (y == 1 && dataOptions[u] == "Stats") {
                    
                    
               
                    for (var r = 0; r < 4; r++) {
                        var teamDataStats = document.createElement("span");
                        teamDataInner.appendChild(teamDataStats);
                        for (var q = 0; q < Stats.length; q++) {
                            if (Stats[q] != "Total") {
                                var teamDataInput = document.createElement("input");
                                teamDataInput.setAttribute("type","number");

                                if (r == 1) {
                                    teamDataStats.setAttribute("name","IV");

                                    teamDataInput.setAttribute("placeholder","IV");
                                    teamDataInput.setAttribute("title","Individual Value"+"\n"+Stats[q]);
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
                                else if (r == 2) {
                                    teamDataStats.setAttribute("name","EV");

                                    if (Generation >= 1 && Generation <= 2) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","65535");
                                        teamDataInput.setAttribute("placeholder","EV");
                                        teamDataInput.setAttribute("title","Effort Value"+"\n"+Stats[q]);
                                    }
                                    else if (GameID >= 31 && GameID <= 32) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","200");
                                        teamDataInput.setAttribute("placeholder","AV");
                                        teamDataInput.setAttribute("title","Awakening Value"+"\n"+Stats[q]);
                                    }
                                    else if (Generation >= 3) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","255");
                                        teamDataInput.setAttribute("placeholder","EV");
                                        teamDataInput.setAttribute("title","Effort Value"+"\n"+Stats[q]);
                                        teamDataInput.addEventListener("blur", evInputMax);
                                        teamDataInput.addEventListener("focus", evInputMax);
                                        teamDataInput.addEventListener("change", evInputMax);
                                    }
                                    teamDataInput.addEventListener("change", inputMinMax);
                                }
                                else {
                                    teamDataInput.setAttribute("min","0");
                                    teamDataInput.setAttribute("max","0");
                                    teamDataInput.setAttribute("placeholder",Stats[q]+":")
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

                else if (y == 1 && dataOptions[u] == "Additional") {
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
                    consoleText("Pokémon deleted.");
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
                        consoleText("Sent "+saveddrag.getAttribute("data-pok")+" to Party.")
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


    var settingsDefaultResizeOuter = document.createElement("span");
    var settingsDefaultResize = document.createElement("div");
    var settingsDefaultResizeValue = document.createElement("p");
    var settingsDefaultResizeInput = document.createElement("input");

    var settingsDefaultThemeOuter = document.createElement("span");
    var settingsDefaultTheme = document.createElement("div");
    var settingsDefaultThemeInput = document.createElement("input");
    var settingsDefaultThemeSpan = document.createElement("span");


    var settingsDefaultImgtypeOuter = document.createElement("span");
    var settingsDefaultImgtypeOuterLeft = document.createElement("span");


    var settingsDefaultImgtypePath = document.createElement("select");
    var settingsDefaultImgtypeOuterRight = document.createElement("span");
    var settingsDefaultImgtypeExtension = document.createElement("select");
    var settingsDefaultImgtypeType = document.createElement("select");
    var settingsDefaultImgtypeAngle = document.createElement("select");

    var tempImgTypes = [...ImageTypes];
    tempImgTypes = removeDuplicateObjectFromArray(tempImgTypes, "name");    

    for (var i = 0; i < tempImgTypes.length; i++) { 
        var settingsDefaultImgtypeOption = document.createElement("option");
        settingsDefaultImgtypeOption.setAttribute("data-path",tempImgTypes[i]["path"]);
        settingsDefaultImgtypeOption.setAttribute("data-category",tempImgTypes[i]["category"]);

        settingsDefaultImgtypeOption.innerText = tempImgTypes[i]["name"];
        settingsDefaultImgtypeOption.value = tempImgTypes[i]["name"];
  
        settingsDefaultImgtypePath.appendChild(settingsDefaultImgtypeOption);
    }

    settingsDefaultImgtypePath.setAttribute("name","Path");
    settingsDefaultImgtypePath.setAttribute("title","Image Types");
    settingsDefaultImgtypeExtension.setAttribute("name","Extension");
    settingsDefaultImgtypeExtension.setAttribute("title","Extension");
    settingsDefaultImgtypeType.setAttribute("name","Type");
    settingsDefaultImgtypeType.setAttribute("title","Type");
    settingsDefaultImgtypeAngle.setAttribute("name","Angle");
    settingsDefaultImgtypeAngle.setAttribute("title","Angle");
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
    settingsDefaultImgtypeOuter.appendChild(settingsDefaultImgtypeOuterLeft);
    settingsDefaultImgtypeOuterLeft.appendChild(settingsDefaultImgtypePath);

    settingsDefaultImgtypeOuter.appendChild(settingsDefaultImgtypeOuterRight);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeExtension);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeType);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeAngle);


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
	settingsDefaultCheckboxCheck.setAttribute("title","Applies to current filters only");
	settingsDefaultCheckboxCheck.addEventListener("click", CheckAll);
	settingsDefaultCheckboxUncheck.innerText = "Uncheck All";
	settingsDefaultCheckboxUncheck.setAttribute("title","Applies to current filters only");
	settingsDefaultCheckboxUncheck.addEventListener("click", UncheckAll);

    settings.appendChild(settingsDefaultCheckbox);
	settingsDefaultCheckbox.appendChild(settingsDefaultCheckboxCheck);
	settingsDefaultCheckbox.appendChild(settingsDefaultCheckboxUncheck);




    var settingsVariant = document.createElement("span");
    var settingsVariantTop = document.createElement("span");
    var settingsVariantBottom = document.createElement("span");
    var settingsVariantButton = document.createElement("button");
	settingsVariant.setAttribute("name","Variant");
    settingsVariantButton.innerText = "Apply";
    settings.appendChild(settingsVariant);
    settingsVariant.appendChild(settingsVariantTop);
    settingsVariant.appendChild(settingsVariantBottom);
    settingsVariantBottom.appendChild(settingsVariantButton);

    
	var formopts = [];
	for(var q = 0; q < finaldataPokémon.length; q++) {
		if(finaldataPokémon[q][JSONPath_Reference] == "true") {
			formopts.push(finaldataPokémon[q]["Variant"]);
		}
	}
	formopts = formopts.filter((item) => !item.includes("Default ") && !item.includes(" Form") && !item.includes("Gender"));
	for(var q = 0; q < formopts.length; q++) {
		formopts[q] = formopts[q].replace("Alolan","Regional Form");
		formopts[q] = formopts[q].replace("Galarian","Regional Form");
		formopts[q] = formopts[q].replace("Mega","Mega Evolution");
	}
	formopts = [...new Set(formopts)];
	for(var i = 0; i < formopts.length; i++) {
		var settingsVariantInput = document.createElement("input");
		var settingsVariantLabel = document.createElement("label");
		var settingsVariantSpan = document.createElement("span");
		settingsVariantInput.setAttribute("type","checkbox");

		settingsVariantInput.setAttribute("id","settings-form-"+formopts[i]+"-"+i);
		settingsVariantInput.setAttribute("name",i);
		settingsVariantLabel.setAttribute("for","settings-form-"+formopts[i]+"-"+i);
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



    settingsDefaultImgtypePath.addEventListener("change", function() {ImageType("Populate,Execute");});
    settingsDefaultImgtypeExtension.addEventListener("change", function() {ImageType("Execute");});
    settingsDefaultImgtypeType.addEventListener("change", function() {ImageType("Execute");});
    settingsDefaultImgtypeAngle.addEventListener("change", function() {ImageType("Execute");});
    

    $( function() {
        $('#pokémon-outer > div li img').draggable();
        $('#pokémon-outer > main section[name="Box"] ul').droppable();
    } );


}

function count() {
	function showChecked() {
		sleep(10).then(() => {
			document.querySelector("#count-current").innerText = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden):not(.filtered) input:checked').length;
		});
	}

	function showTotal() {
		sleep(10).then(() => {
			document.querySelector("#count-total").innerText = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden):not(.filtered)').length;
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
		
            for(var q = 0; q < conimg.length; q++) {
                conimg[q].src = "./media/Images/Pokémon/"+dataType+"/"+dataPath+"/"+getPokémonMediaPath(getPokémonInt(conimg[q].id),dataType)+"."+dataExtension;
                conimg[q].setAttribute("path", dataPath+"/"+getPokémonMediaPath(getPokémonInt(conimg[q].id),dataType)+"."+dataExtension);
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
    searchFilter(document.querySelector("#searchbar"),document.querySelector("#pokémon-outer > div ul"),"Remove");
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

			var regEvoID = document.querySelectorAll('.data-evolution h6[name="regional"][value="'+p+'"]');
			for(u = 0; u < regEvoID.length; u++) {
				regEvoID[u].style.display = "unset";
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
			var natEvoID = document.querySelectorAll('.data-evolution h6[name="national"][value="0"]');
			for(u = 0; u < natEvoID.length; u++) {
				natEvoID[u].style.display = "unset";
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
	var uncheck = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden):not(.filtered) input:checked');
	for(var i = 0; i < uncheck.length; i++) {
		uncheck[i].click();
	}
    memory("Save","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));
    consoleText("Unchecked all in the current filter.")
}

function CheckAll() {
	count();
	var check = document.querySelectorAll('#pokémon-outer > div li:not([style*="display: none"]):not(.hidden):not(.filtered) input:not(:checked)');
	for(var i = 0; i < check.length; i++) {
		check[i].click();
	}
    memory("Save","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));
    consoleText("Checked all in the current filter.")
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

        if(finaldataPokémon[i][JSONPath_Reference] == "true" || finaldataPokémon[i][JSONPath_Reference] == "true") {
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
                    var evo = getEvolutionFamily(i).map(function(v) {return v["Pokémon"];});
                   
                    if (evo.length > 1) {
                        contentDiv.setAttribute("data-search-evolution", evo.join(",").toLowerCase());
                    }
                    else {
                        contentDiv.setAttribute("data-search-evolution", "none");
                    }
                    var typ = returnData(i, "Type","lower,undefined");
                    var cr = returnData(i, "Catch Rate","lower,undefined");

                    if (typ == "") {
                        typ = "none";
                    }
                    if (cr == "") {
                        cr = "none";
                    }
                    contentDiv.setAttribute("data-search-type", typ);
                    contentDiv.setAttribute("data-search-catchrate", cr);

                    if (Ability.length > 0) {
                        var ab = returnData(i, "Ability","lower,undefined");
                        if (ab == "") {
                            ab = "none";
                        }
                        contentDiv.setAttribute("data-search-ability", ab);
                    }

                    if (Gender == true) {
                        var ratio = returnData(i, "Gender Ratio","lower,undefined");
                        if(ratio[0] == "1" && ratio[1] == "0") { // Always Male
                            contentDiv.setAttribute("data-search-genderratio", "always male");
                        } else if(ratio[0] == "7" && ratio[1] == "1") { // Very Often Male
                            contentDiv.setAttribute("data-search-genderratio", "very often male");
                        } else if(ratio[0] == "3" && ratio[1] == "1") { // Often Male
                            contentDiv.setAttribute("data-search-genderratio", "often male");
                        } else if(ratio[0] == "1" && ratio[1] == "1") { // Equal Ratio
                            contentDiv.setAttribute("data-search-genderratio", "equal ratio");
                        } else if(ratio[0] == "1" && ratio[1] == "3") { // Often Female
                            contentDiv.setAttribute("data-search-genderratio", "often female");
                        } else if(ratio[0] == "1" && ratio[1] == "7") { // Very Often Female
                            contentDiv.setAttribute("data-search-genderratio", "very often female");
                        } else if(ratio[0] == "0" && ratio[1] == "1") { // Always Female
                            contentDiv.setAttribute("data-search-genderratio", "always female");
                        } else if(ratio[0] == "0" && ratio[1] == "0") { // Genderless
                            contentDiv.setAttribute("data-search-genderratio", "genderless");
                        } else {
                            contentDiv.setAttribute("data-search-genderratio", "none");
                        }
                    }

                    if (Egg == true) {
                        var hr = returnData(i, "Hatch Rate","lower,undefined")[0];
                        var eg = returnData(i, "Egg Group","lower,undefined");
                        if (hr == "") {
                            hr = "none";
                        }
                        if (eg == "") {
                            eg = "none";
                        }
                 
                        contentDiv.setAttribute("data-search-eggcycle", hr);
                        contentDiv.setAttribute("data-search-egggroup", eg);
                    }
                
                    if (HeldItem == true) {
                        var hld = returnData(i, "Held Item","lower,undefined");
                        if (hld == "") {
                            hld = "none";
                        }
                        contentDiv.setAttribute("data-search-helditem", hld);
                    }
                    //contentDiv.setAttribute("data-search-learnset",returnMoveSet(i,"onlymoves,noduplicate,lower"));

                    var xpyd = returnData(i, "Experience Yield","lower,undefined");
                    if (xpyd == "") {
                        xpyd = "none";
                    }
                    contentDiv.setAttribute("data-search-expyield", xpyd);

                    var xpydc = returnData(i, "Experience Yield","lower,undefined");
                    if (xpydc != "") {
                        xpydc = parseInt(xpyd);
                    }
                    else {
                        xpydc = "none";
                    }

                    if(xpydc >= 300) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Very High".toLowerCase());
                    } else if(xpydc >= 200 && xpydc <= 299) {
                        contentDiv.setAttribute("data-search-expyieldcategory","High".toLowerCase());
                    } else if(xpydc >= 100 && xpydc <= 199) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Medium".toLowerCase());
                    } else if(xpydc >= 50 && xpydc <= 99) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Low".toLowerCase());
                    } else if(xpydc >= 0 && xpydc <= 49) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Very Low".toLowerCase());
                    } else {
                        contentDiv.setAttribute("data-search-expyieldcategory",xpydc);
                    }

                    var lvlr = returnData(i, "Leveling Rate","lower,undefined");
                    if (lvlr == "") {
                        lvlr = "none";
                    }
                   
                    contentDiv.setAttribute("data-search-levelrate", lvlr);
                    

                    var statsevL = ["Base Stats","EV Yield"];
                    var statsevS = ["base","ev"];
                    for(var q = 0; q < statsevL.length; q++) {
                        for(var u = 0; u < Stats.length; u++) {
                            var dat = returnData(i, statsevL[q]+" "+Stats[u], "lower,undefined");
                            if (dat == "") {
                                dat = "none";
                            }
                            contentDiv.setAttribute("data-search-"+statsevS[q]+Stats[u].replaceAll(".","").replaceAll(" ","").toLowerCase(), dat);
                        }
                    }

                    contentDiv.setAttribute("data-search-variant", variant.toLowerCase());
                    contentInput.setAttribute("type","checkbox");
                    contentInput.setAttribute("id","finaldex-"+GameID+"-"+i);
                    contentInput.setAttribute("name",i);
                    contentLabel.setAttribute("for","finaldex-"+GameID+"-"+i);
                    contentButton.value = i;
                    contentButton.addEventListener("click", modalData);
                    contentButtonImg.src = "./media/Images/Misc/FinalDex/Location.png";
                    contentNationalID.classList.add("contain-nationalID");
                    contentNationalID.innerText = "#"+ID;
                    contentImg.classList.add("contain-img");
                    contentImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
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

    document.querySelector("#searchbar").title = searchOptionsTitle(document.querySelector("#pokémon-outer > div ul"));

    var searchLis = document.querySelectorAll("#pokémon-outer > div li");
    searchPokémonAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchPokémonAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchPokémonAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }
    searchPokémonAttributes = searchPokémonAttributes.filter(function(v) {return v !== "data-search-name";});
    for(q = 0; q < searchPokémonAttributes.length; q++) {
        searchPokémonAttributes[q] = searchPokémonAttributes[q].replaceAll("data-search-","")
    }

}