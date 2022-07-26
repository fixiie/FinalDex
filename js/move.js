var createMove = function() {
	var moveOuter = document.createElement("div");
	var moveAside1 = document.createElement("aside");
	var moveAside1OptionsTitleOuter = document.createElement("div");
	var moveAside1OptionsSearchOuter = document.createElement("div");
	var moveAside1OptionsSearch = document.createElement("input");
	var moveAside1OptionsSearchExit = document.createElement("span");
	var moveAside1OptionsOuter = document.createElement("div");
	var moveAside1Options = document.createElement("div");
	var moveAside2 = document.createElement("aside");
	var moveAside2Title = document.createElement("span");
	var moveAside2TitleID = document.createElement("h4");
	var moveAside2TitleName = document.createElement("h1");
	var moveAside2Debut = document.createElement("span");
	var moveAside2DebutText = document.createElement("h4");
	var moveAside3 = document.createElement("aside");
	var moveAside3Description = document.createElement("div");
	var moveAside3DescriptionText = document.createElement("p");
	var moveAside3EffectTitle = document.createElement("h3");
	var moveAside3EffectText = document.createElement("p");
	var moveAside4 = document.createElement("aside");
	moveOuter.setAttribute("id", "move-outer");
	moveOuter.setAttribute("name", "Moves");
	moveAside1.setAttribute("id", "move-aside1");
	moveAside1OptionsTitleOuter.setAttribute("id", "move-options-title");
	moveAside1OptionsSearchOuter.setAttribute("id", "move-options-search");
	moveAside1OptionsSearch.setAttribute("type", "text");
	moveAside1OptionsSearch.setAttribute("id", "move-search");
	moveAside1OptionsSearch.setAttribute("placeholder", "Search Moves...");
	moveAside1OptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	moveAside1OptionsSearch.setAttribute("onblur", "this.placeholder='Search Moves...'");
	moveAside1OptionsSearch.setAttribute("autocomplete", "off");
	moveAside1OptionsSearchExit.setAttribute("id", "move-search-exit");
	moveAside1OptionsOuter.setAttribute("id", "move-options-outer");
	moveAside1Options.setAttribute("id", "move-options");
	moveAside2.setAttribute("id", "move-aside2");
	moveAside2Title.classList.add("move-title");
	moveAside2TitleID.innerText = "#";
	moveAside2TitleName.innerText = "-";
	moveAside2Debut.classList.add("move-debut");
	moveAside2DebutText.innerText = "-";
	moveAside3.setAttribute("id", "move-aside3");
	moveAside3Description.classList.add("move-description");
	moveAside4.setAttribute("id", "move-aside4");
	document.querySelector("#contain").appendChild(moveOuter);
	moveOuter.appendChild(moveAside1);
	moveAside1.appendChild(moveAside1OptionsTitleOuter);
	moveAside1OptionsTitleOuter.appendChild(moveAside1OptionsSearchOuter);
	moveAside1OptionsSearchOuter.appendChild(moveAside1OptionsSearchExit);
	moveAside1OptionsSearchOuter.appendChild(moveAside1OptionsSearch);
	moveAside1.appendChild(moveAside1OptionsOuter);
	moveAside1OptionsOuter.appendChild(moveAside1Options);
	moveOuter.appendChild(moveAside2);
	moveAside2.appendChild(moveAside2Title);
	moveAside2Title.appendChild(moveAside2TitleID);
	moveAside2Title.appendChild(moveAside2TitleName);
	moveAside2.appendChild(moveAside2Debut);
	moveAside2Debut.appendChild(moveAside2DebutText);
	moveOuter.appendChild(moveAside3);
	moveAside3.appendChild(moveAside3Description);
	moveAside3Description.appendChild(moveAside3DescriptionText);
	moveAside3Description.appendChild(moveAside3EffectTitle);
	moveAside3Description.appendChild(moveAside3EffectText);
	moveOuter.appendChild(moveAside4);

	moveAside1OptionsSearch.addEventListener("keyup", function() {search("Move");});
	moveAside1OptionsSearchExit.addEventListener("click", function() {exitSearch("Move");});

    var moveAside2Game = document.createElement("span");
    var moveAside2GameImage = document.createElement("img");
    moveAside2GameImage.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")+".png";
    moveAside2GameImage.setAttribute("onerror","this.display='none'");
    moveAside2.appendChild(moveAside2Game);
    moveAside2Game.appendChild(moveAside2GameImage);

	var moveAside3Sidebar = document.createElement("div");
	var moveAside3SidebarLeft = document.createElement("div");
	var moveAside3SidebarType = document.createElement("div");
	var moveAside3SidebarTypeText = document.createElement("span");
	var moveAside3SidebarTypeTextImg = document.createElement("img");
	var moveAside3SidebarTypeTextText = document.createElement("h4");
	var moveAside3SidebarTypeMove = document.createElement("span");
	var moveAside3SidebarAttribute = document.createElement("div");
	var moveAside3SidebarAttributePowerPoints = document.createElement("span");
	var moveAside3SidebarAttributePowerPointsContent = document.createElement("span");
	var moveAside3SidebarAttributePowerPointsTitle = document.createElement("h3");
	var moveAside3SidebarAttributePowerPointsText = document.createElement("p");
	var moveAside3SidebarAttributePower = document.createElement("span");
	var moveAside3SidebarAttributePowerContent = document.createElement("span");
	var moveAside3SidebarAttributePowerTitle = document.createElement("h3");
	var moveAside3SidebarAttributePowerText = document.createElement("p");
	var moveAside3SidebarAttributeAccuracy = document.createElement("span");
	var moveAside3SidebarAttributeAccuracyContent = document.createElement("span");
	var moveAside3SidebarAttributeAccuracyTitle = document.createElement("h3");
	var moveAside3SidebarAttributeAccuracyText = document.createElement("p");
	var moveAside3SidebarAttributePriority = document.createElement("span");
	var moveAside3SidebarAttributePriorityContent = document.createElement("span");
	var moveAside3SidebarAttributePriorityTitle = document.createElement("h3");
	var moveAside3SidebarAttributePriorityText = document.createElement("p");
	var moveAside3SidebarRight = document.createElement("div");
	var moveAside3SidebarContact = document.createElement("div");
	var moveAside3SidebarContactContent = document.createElement("span");
	var moveAside3SidebarContactText = document.createElement("p");
	moveAside3Sidebar.classList.add("move-sidebar");
	moveAside3SidebarType.classList.add("move-sidebar-type");
	moveAside3SidebarTypeTextImg.setAttribute("title", "");
	moveAside3SidebarTypeTextText.innerText = "";
	moveAside3SidebarAttribute.classList.add("move-sidebar-attribute");
	moveAside3SidebarAttributePowerPointsTitle.innerText = "PP";
	moveAside3SidebarAttributePowerPointsText.innerText = "";
	moveAside3SidebarAttributePowerTitle.innerText = "Power";
	moveAside3SidebarAttributePowerText.innerText = "";
	moveAside3SidebarAttributeAccuracyTitle.innerText = "Accuracy";
	moveAside3SidebarAttributeAccuracyText.innerText = "";
	moveAside3SidebarAttributePriorityTitle.innerText = "Priority";
	moveAside3SidebarAttributePriorityText.innerText = "";
	moveAside3SidebarContact.classList.add("move-sidebar-contact");
	moveAside3SidebarContactText.innerText = "";
	moveAside3.appendChild(moveAside3Sidebar);
	moveAside3Sidebar.appendChild(moveAside3SidebarLeft);
	moveAside3Sidebar.appendChild(moveAside3SidebarRight);
	moveAside3SidebarLeft.appendChild(moveAside3SidebarType);
	moveAside3SidebarType.appendChild(moveAside3SidebarTypeText);
	moveAside3SidebarTypeText.appendChild(moveAside3SidebarTypeTextImg);
	moveAside3SidebarTypeText.appendChild(moveAside3SidebarTypeTextText);
	moveAside3SidebarType.appendChild(moveAside3SidebarTypeMove);
	moveAside3SidebarLeft.appendChild(moveAside3SidebarAttribute);

	moveAside3SidebarAttribute.appendChild(moveAside3SidebarAttributePowerPoints);
	moveAside3SidebarAttributePowerPoints.appendChild(moveAside3SidebarAttributePowerPointsContent);
	moveAside3SidebarAttributePowerPointsContent.appendChild(moveAside3SidebarAttributePowerPointsTitle);
	moveAside3SidebarAttributePowerPointsContent.appendChild(moveAside3SidebarAttributePowerPointsText);

	moveAside3SidebarAttribute.appendChild(moveAside3SidebarAttributePower);
	moveAside3SidebarAttributePower.appendChild(moveAside3SidebarAttributePowerContent);
	moveAside3SidebarAttributePowerContent.appendChild(moveAside3SidebarAttributePowerTitle);
	moveAside3SidebarAttributePowerContent.appendChild(moveAside3SidebarAttributePowerText);

	moveAside3SidebarAttribute.appendChild(moveAside3SidebarAttributeAccuracy);
	moveAside3SidebarAttributeAccuracy.appendChild(moveAside3SidebarAttributeAccuracyContent);
	moveAside3SidebarAttributeAccuracyContent.appendChild(moveAside3SidebarAttributeAccuracyTitle);
	moveAside3SidebarAttributeAccuracyContent.appendChild(moveAside3SidebarAttributeAccuracyText);

	moveAside3SidebarAttribute.appendChild(moveAside3SidebarAttributePriority);
	moveAside3SidebarAttributePriority.appendChild(moveAside3SidebarAttributePriorityContent);
	moveAside3SidebarAttributePriorityContent.appendChild(moveAside3SidebarAttributePriorityTitle);
	moveAside3SidebarAttributePriorityContent.appendChild(moveAside3SidebarAttributePriorityText);

	moveAside3SidebarRight.appendChild(moveAside3SidebarContact);
	moveAside3SidebarContact.appendChild(moveAside3SidebarContactContent);
	moveAside3SidebarContactContent.appendChild(moveAside3SidebarContactText);
	var moveAside4Learnset = document.createElement("div");
	moveAside4Learnset.classList.add("move-learnset");
	moveAside4.appendChild(moveAside4Learnset);
	var moveAside4LearnsetTitle = document.createElement("div");
	var moveAside4LearnsetTitleText = document.createElement("h2");
	moveAside4LearnsetTitle.classList.add("move-sidebar-title");
	moveAside4LearnsetTitleText.innerHTML = "Learnset";
	moveAside4Learnset.appendChild(moveAside4LearnsetTitle);
	moveAside4LearnsetTitle.appendChild(moveAside4LearnsetTitleText);
	
	var moveAside4LearnsetContent = document.createElement("div");
	var moveAside4LearnsetUl = document.createElement("ul");
	moveAside4LearnsetContent.classList.add("move-learnset-content");
	moveAside4Learnset.appendChild(moveAside4LearnsetContent);
	moveAside4LearnsetContent.appendChild(moveAside4LearnsetUl);
	var moveAside4LearnsetPartyBox = document.createElement("div");
	moveAside4LearnsetPartyBox.classList.add("learnset-partybox");
	moveAside4Learnset.appendChild(moveAside4LearnsetPartyBox);


	var parbo = ["Party","Box"];
	for(var q = 0; q < parbo.length; q++) {
		var moveAside4LearnsetInput = document.createElement("input");
		var moveAside4LearnsetLabel = document.createElement("label");
		moveAside4LearnsetInput.setAttribute("type","checkbox");
		moveAside4LearnsetInput.setAttribute("id","move-learnset-partybox-"+q);
		moveAside4LearnsetInput.setAttribute("name","move-learnset-partybox");
		moveAside4LearnsetLabel.setAttribute("for","move-learnset-partybox-"+q);
		moveAside4LearnsetLabel.innerText = parbo[q];
		moveAside4LearnsetLabel.title = "Show results from "+parbo[q];
		moveAside4LearnsetPartyBox.appendChild(moveAside4LearnsetInput);
		moveAside4LearnsetPartyBox.appendChild(moveAside4LearnsetLabel);
		moveAside4LearnsetInput.addEventListener("change",movePartyBoxLearnset);
	}


	var firstmoveiteration;
	for(var q = 0; q < finaldataMove.length; q++) {
		if(finaldataMove[q][JSONPath_MoveReference] == "true") {
			var moveAside1OptionsInput = document.createElement("input");
			var moveAside1OptionsLabel = document.createElement("label");
			moveAside1OptionsInput.setAttribute("type", "radio");
			moveAside1OptionsInput.setAttribute("name", "move-options");
			moveAside1OptionsInput.setAttribute("id", "move-options-"+q);
			moveAside1OptionsInput.setAttribute("autocomplete", "off");
			moveAside1OptionsInput.value = q;
			moveAside1OptionsLabel.setAttribute("for", "move-options-"+q);
			moveAside1OptionsLabel.setAttribute("name", "medium");
			if(finaldataMove[q]["Name"+"_"+JSONPath_MoveName] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-name", finaldataMove[q]["Name"+"_"+JSONPath_MoveName].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-name", "");
			}
			/*
			var moveset = returnMoveLearnset(finaldataMove[q]["Name"+"_"+JSONPath_MoveName],"");
			if (moveset.length > 0) {
				moveAside1OptionsLabel.setAttribute("data-search-learnset", moveset.join(",").toLowerCase());
			}
			else {
				moveAside1OptionsLabel.setAttribute("data-search-learnset", "");
			}
			*/

			if(finaldataMovePriority[q]["Priority_"+JSONPath_MovePriority] != undefined) {
				
				if (finaldataMovePriority[q]["Priority_"+JSONPath_MovePriority].includes("-")) {
					moveAside1OptionsLabel.setAttribute("data-search-priority", "-"+finaldataMovePriority[q]["Priority_"+JSONPath_MovePriority].replaceAll("-",""));
				}
				else if (finaldataMovePriority[q]["Priority_"+JSONPath_MovePriority].includes("+")) {
					moveAside1OptionsLabel.setAttribute("data-search-priority", "+"+finaldataMovePriority[q]["Priority_"+JSONPath_MovePriority].replaceAll("+",""));
				}
				else {
					moveAside1OptionsLabel.setAttribute("data-search-priority", finaldataMovePriority[q]["Priority_"+JSONPath_MovePriority]);
				}
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-priority", "");
			}

			if(finaldataMoveType[q]["Type_"+JSONPath_MoveType] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-type", finaldataMoveType[q]["Type_"+JSONPath_MoveType].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-type", "");
			}
			if(finaldataMoveCategory[q]["Category_"+JSONPath_MoveCategory] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-category", finaldataMoveCategory[q]["Category_"+JSONPath_MoveCategory].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-category", "");
			}
			if(finaldataMovePP[q]["PP Min_"+JSONPath_MovePP] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-pp", finaldataMovePP[q]["PP Min_"+JSONPath_MovePP].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-pp", "");
			}
			if(finaldataMovePower[q]["Power_"+JSONPath_MovePower] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-power", finaldataMovePower[q]["Power_"+JSONPath_MovePower].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-power", "");
			}
			if(finaldataMoveAccuracy[q]["Accuracy_"+JSONPath_MoveAccuracy] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-accuracy", finaldataMoveAccuracy[q]["Accuracy_"+JSONPath_MoveAccuracy].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-accuracy", "");
			}
	

			if(finaldataMoveOtherMoves[q]["Contact"] == "Makes contact") {
				moveAside1OptionsLabel.setAttribute("data-search-contact", "y");
			} else if(finaldataMoveOtherMoves[q]["Contact"] == "Does not make contact") {
				moveAside1OptionsLabel.setAttribute("data-search-contact", "n");
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-contact", "");
			}

			if(getTutorData(finaldataMove[q]["Name"+"_"+JSONPath_MoveName],"Move").length > 0) {
				moveAside1OptionsLabel.setAttribute("data-search-tutor", "y");
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-tutor", "n");
			}
			if(finaldataMoveMachine[q]["Machine_"+JSONPath_MoveMachine] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-machine", finaldataMoveMachine[q]["Machine_"+JSONPath_MoveMachine].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-machine", "");
			}
			moveAside1OptionsLabel.innerText = finaldataMove[q]["Name"+"_"+JSONPath_MoveName];
			moveAside1Options.appendChild(moveAside1OptionsInput);
			moveAside1Options.appendChild(moveAside1OptionsLabel);
			moveAside1OptionsLabel.setAttribute("tabindex",q+10);
			moveAside1OptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;moveOptionsSelector(event.target.previousElementSibling.value);}}});
			moveAside1OptionsInput.addEventListener("change", moveOptionsSelector);

			if(firstmoveiteration != true) {
				firstmoveiteration = true;
				moveAside1OptionsLabel.click();
			}
		}
	}

	moveAside1OptionsSearch.title = searchOptionsTitle(moveAside1Options);

	var searchLis = document.querySelectorAll("#move-options > label");
    searchMoveAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMoveAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMoveAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }
	searchMoveAttributes = searchMoveAttributes.filter(function(v) {return v !== "data-search-name";});
    for(q = 0; q < searchMoveAttributes.length; q++) {
        searchMoveAttributes[q] = searchMoveAttributes[q].replaceAll("data-search-","")
    }

	function moveOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
		
		moveAside2TitleName.innerText = finaldataMove[i]["Name"+"_"+JSONPath_MoveName];
		moveAside2TitleID.innerText = "#"+finaldataMoveID[i]["ID"+"_"+JSONPath_MoveID];
		if(finaldataMoveID[i]["ID Type"] != undefined) {
			moveAside2TitleID.title = finaldataMoveID[i]["ID Type"]+" Index number";
		} else {
			moveAside2TitleID.title = "Index number";
		}
		moveAside2DebutText.innerText = "Introduced in "+finaldataMove[i]["Debut"].split("-")[0];
		if (finaldataMoveDescription[i]["Description_"+JSONPath_MoveDescription] != undefined) {
			moveAside3DescriptionText.innerText = finaldataMoveDescription[i]["Description_"+JSONPath_MoveDescription];
		}
		moveAside3SidebarTypeTextImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
		moveAside3SidebarTypeTextImg.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+finaldataMoveType[i]["Type_"+JSONPath_MoveType]+".png";
		moveAside3SidebarTypeTextImg.setAttribute("title", finaldataMoveType[i]["Type_"+JSONPath_MoveType]);
		if(finaldataMoveType[i]["Type_"+JSONPath_MoveType] == undefined) {
			moveAside3SidebarTypeTextImg.style.display = "none";
			moveAside3SidebarTypeTextText.style.display = "block";
		} else {
			moveAside3SidebarTypeTextImg.style.display = "block";
			moveAside3SidebarTypeTextText.style.display = "none";
		}
		moveAside3SidebarTypeTextText.innerText = finaldataMoveType[i]["Type_"+JSONPath_MoveType];
		var cate = moveAside3SidebarTypeMove.querySelectorAll(":scope > *");
		for(var u = 0; u < cate.length; u++) {
			cate[u].remove();
		}
		for(var u = 0; u < finaldataMoveCategory[i]["Category_"+JSONPath_MoveCategory].split(",").length; u++) {
			var moveAside3SidebarTypeMoveImg = document.createElement("img");
			moveAside3SidebarTypeMoveImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
			moveAside3SidebarTypeMoveImg.src = "./media/Images/Misc/Type/Category/"+MEDIAPath_Type_Category+"/"+finaldataMoveCategory[i]["Category_"+JSONPath_MoveCategory].split(",")[u]+".png";
			moveAside3SidebarTypeMoveImg.setAttribute("title", finaldataMoveCategory[i]["Category_"+JSONPath_MoveCategory].split(",")[u]);
			moveAside3SidebarTypeMove.appendChild(moveAside3SidebarTypeMoveImg);
			var moveAside3SidebarTypeMoveText = document.createElement("h4");
			moveAside3SidebarTypeMoveText.innerText = finaldataMoveCategory[i]["Category_"+JSONPath_MoveCategory].split(",")[u];
			moveAside3SidebarTypeMove.appendChild(moveAside3SidebarTypeMoveText);
		}
		if(finaldataMovePP[i]["PP Min_"+JSONPath_MovePP] == undefined) {
			moveAside3SidebarAttributePowerPointsText.innerHTML = "–";
		} else if(finaldataMovePP[i]["PP Min_"+JSONPath_MovePP] != undefined && finaldataMovePP[i]["PP Max_"+JSONPath_MovePP] == undefined) {
			moveAside3SidebarAttributePowerPointsText.innerHTML = finaldataMovePP[i]["PP Min_"+JSONPath_MovePP];
		} else {
			moveAside3SidebarAttributePowerPointsText.innerHTML = finaldataMovePP[i]["PP Min_"+JSONPath_MovePP]+" <span>(max. "+finaldataMovePP[i]["PP Max_"+JSONPath_MovePP]+")</span>";
		}
		if(finaldataMovePower[i]["Power_"+JSONPath_MovePower] == undefined) {
			moveAside3SidebarAttributePowerText.innerText = "–";
		} else {
			moveAside3SidebarAttributePowerText.innerText = finaldataMovePower[i]["Power_"+JSONPath_MovePower];
		}
		if(finaldataMoveAccuracy[i]["Accuracy_"+JSONPath_MoveAccuracy] == undefined) {
			moveAside3SidebarAttributeAccuracyText.innerText = "–";
		} else {
			moveAside3SidebarAttributeAccuracyText.innerText = finaldataMoveAccuracy[i]["Accuracy_"+JSONPath_MoveAccuracy];
		}
		if(finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority] == undefined) {
			moveAside3SidebarAttributePriorityText.innerText = "–";
		} else {
			if (finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority] == "0" || finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority] == undefined) {
				moveAside3SidebarAttributePriority.style.display = "none";
			}
			else {
				moveAside3SidebarAttributePriority.style.removeProperty("display");
			}


			if (finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority].includes("-")) {
				moveAside3SidebarAttributePriorityText.innerText = "-"+finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority].replaceAll("-","");
			}
			else if (finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority].includes("+")) {
				moveAside3SidebarAttributePriorityText.innerText = "+"+finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority].replaceAll("+","");
			}
			else {
				moveAside3SidebarAttributePriorityText.innerText = finaldataMovePriority[i]["Priority_"+JSONPath_MovePriority];
			}
		}
		if(finaldataMoveOtherMoves[i]["Contact"] == "Makes contact") {
			moveAside3SidebarContactText.innerHTML = "Makes <b>contact</b>";
		} else if(finaldataMoveOtherMoves[i]["Contact"] == "Does not make contact") {
			moveAside3SidebarContactText.innerHTML = "Does not make <b>contact</b>";
		}
		if(finaldataMoveOtherMoves[i]["Contact"].includes("not") || finaldataMoveOtherMoves[i]["Contact"].includes("Not")) {
			moveAside3SidebarContact.setAttribute("name", "negative");
		} else {
			moveAside3SidebarContact.setAttribute("name", "positive");
		}
		var divs = moveAside3SidebarRight.querySelectorAll(":scope > div");
		for(var u = 0; u < divs.length; u++) {
			if(divs[u].getAttribute("class") == "move-sidebar-description-hmtm" || divs[u].getAttribute("class") == "move-sidebar-description-tutor" || divs[u].getAttribute("class") == "move-sidebar-description-other") {
				divs[u].remove();
			}
		}
		if(Generation == 1) {
			var othermove = ["Mirror Move", "Sound-Based", "Outside Battle"];
		}
		if(Generation == 2) {
			var othermove = ["Protect", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		if(Generation >= 3 && Generation <= 4) {
			var othermove = ["Protect", "Magic Coat", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		if(Generation >= 5 && Generation <= 8) {
			var othermove = ["Protect", "Magic Coat/Magic Bounce", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		for(var u = 0; u < othermove.length; u++) {
			if(finaldataMoveOtherMoves[i][othermove[u]] != undefined) {
				var moveAside3SidebarOther = document.createElement("div");
				var moveAside3SidebarOtherContent = document.createElement("span");
				var moveAside3SidebarOtherText = document.createElement("p");
				moveAside3SidebarOther.classList.add("move-sidebar-description-other");
				for(var q = 0; q < othermove.length; q++) {
					if(finaldataMoveOtherMoves[i][othermove[u]] == "Affected by "+othermove[q]) {
						moveAside3SidebarOtherText.innerHTML = "Affected by <b>"+othermove[q]+"</b>";
					} else if(finaldataMoveOtherMoves[i][othermove[u]] == "Not affected by "+othermove[q]) {
						moveAside3SidebarOtherText.innerHTML = "Not affected by <b>"+othermove[q]+"</b>";
					}
				}
				if(finaldataMoveOtherMoves[i][othermove[u]] == "Usable outside of battle") {
					moveAside3SidebarOtherText.innerHTML = "Usable <b>outside of battle</b>";
				} else if(finaldataMoveOtherMoves[i][othermove[u]] == "Is a sound-based move") {
					moveAside3SidebarOtherText.innerHTML = "Is a <b>sound-based</b> move";
				} else if(finaldataMoveOtherMoves[i][othermove[u]] == "Affected by Magic Coat and Magic Bounce") {
					moveAside3SidebarOtherText.innerHTML = "Affected by <b>Magic Coat and Magic Bounce</b>";
				} else if(finaldataMoveOtherMoves[i][othermove[u]] == "Not affected by Magic Coat") {
					moveAside3SidebarOtherText.innerHTML = "Not affected by <b>Magic Coat</b>";
				}
				moveAside3SidebarRight.appendChild(moveAside3SidebarOther);
				moveAside3SidebarOther.appendChild(moveAside3SidebarOtherContent);
				moveAside3SidebarOtherContent.appendChild(moveAside3SidebarOtherText);
				if(finaldataMoveOtherMoves[i][othermove[u]].includes("not") || finaldataMoveOtherMoves[i][othermove[u]].includes("Not")) {
					moveAside3SidebarOther.setAttribute("name", "negative");
				} else {
					moveAside3SidebarOther.setAttribute("name", "positive");
				}
			}
		}
		if(finaldataMoveMachine[i]["Machine_"+JSONPath_MoveMachine] != undefined) {
			var moveAside3SidebarHMTM = document.createElement("div");
			var moveAside3SidebarHMTMOuter = document.createElement("span");
			var moveAside3SidebarHMTMContent = document.createElement("span");
			var moveAside3SidebarHMTMTitle = document.createElement("h3");
			var moveAside3SidebarHMTMText = document.createElement("p");
			moveAside3SidebarHMTM.classList.add("move-sidebar-description-hmtm");
			moveAside3SidebarHMTMTitle.innerText = "Machine";
			moveAside3SidebarHMTMText.innerText = finaldataMoveMachine[i]["Machine_"+JSONPath_MoveMachine];
			moveAside3SidebarHMTMText.setAttribute("name","Item");
			moveAside3SidebarRight.appendChild(moveAside3SidebarHMTM);
			moveAside3SidebarHMTM.appendChild(moveAside3SidebarHMTMOuter);
			moveAside3SidebarHMTMOuter.appendChild(moveAside3SidebarHMTMContent);
			moveAside3SidebarHMTMContent.appendChild(moveAside3SidebarHMTMTitle);
			moveAside3SidebarHMTMContent.appendChild(moveAside3SidebarHMTMText);
			moveAside3SidebarHMTMText.addEventListener("click",dataRedirect)
		}
		if(getTutorData(finaldataMove[i]["Name"+"_"+JSONPath_MoveName],"Move").length > 0) {
			var moveAside3SidebarTutor = document.createElement("div");
			var moveAside3SidebarTutorOuter = document.createElement("span");
			var moveAside3SidebarTutorContent = document.createElement("span");
			var moveAside3SidebarTutorTitle = document.createElement("h3");
			var moveAside3SidebarTutorText = document.createElement("p");
			moveAside3SidebarTutor.classList.add("move-sidebar-description-tutor");
			moveAside3SidebarTutorTitle.innerText = "Move Tutor";
			moveAside3SidebarTutorText.innerText = getTutorData(finaldataMove[i]["Name"+"_"+JSONPath_MoveName],"Move")[0]["Location"];
			moveAside3SidebarTutorText.setAttribute("name","Map");
			moveAside3SidebarRight.appendChild(moveAside3SidebarTutor);
			moveAside3SidebarTutor.appendChild(moveAside3SidebarTutorOuter);
			moveAside3SidebarTutorOuter.appendChild(moveAside3SidebarTutorContent);
			moveAside3SidebarTutorContent.appendChild(moveAside3SidebarTutorTitle);
			moveAside3SidebarTutorContent.appendChild(moveAside3SidebarTutorText);
			moveAside3SidebarTutorText.addEventListener("click",dataRedirect);
		}
		var lis = moveAside4LearnsetUl.querySelectorAll(":scope > li");
		for(var u = 0; u < lis.length; u++) {
			lis[u].remove();
		}
		var learnsetlevelarr = [];
		for(var q = 0; q < finaldataLearnsetLevel.length; q++) {
			if(finaldataLearnsetLevel[q]["Move"] == finaldataMove[i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldataLearnsetLevel[q]["Game"]) == true) {
				var obj = new Object();
				obj["Pokémon"] = finaldataLearnsetLevel[q]["Pokémon"];
				obj["Factor"] = finaldataLearnsetLevel[q]["Factor"];
				learnsetlevelarr.push(obj);
			}
		}
		learnsetlevelarr = learnsetlevelarr.filter(
			(value) => Object.keys(value).length !== 0);
		learnsetlevelarr.sort(function(a, b) {
			return parseInt(a["Factor"]) - parseInt(b["Factor"]);
		});

		for(var q = 0; q < learnsetlevelarr.length; q++) {
			var moveAside4LearnsetLi = document.createElement("li");
			moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
			var moveAside4LearnsetLiImgOuter = document.createElement("div");
			var moveAside4LearnsetLiImg = document.createElement("img");
			var moveAside4LearnsetLiSourceOuter = document.createElement("span");
			var moveAside4LearnsetLiSource = document.createElement("p");
			moveAside4LearnsetLiSourceOuter.title = "Level Up";
			moveAside4LearnsetLiSource.innerHTML = "Level Up: "+"<b>"+learnsetlevelarr[q]["Factor"]+"</b>";
			moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(learnsetlevelarr[q]["Pokémon"]),"Box")+".png";
			moveAside4LearnsetLiImg.title = learnsetlevelarr[q]["Pokémon"];
			moveAside4LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetlevelarr[q]["Pokémon"]));
			moveAside4LearnsetLiImg.addEventListener("click", modalData);
			moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
			moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
			moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
			moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSource);
		}
		for(var q = 0; q < finaldataLearnsetEvolution.length; q++) {
			if(finaldataLearnsetEvolution[q]["Move"] == finaldataMove[i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldataLearnsetEvolution[q]["Game"]) == true) {
				var moveAside4LearnsetLi = document.createElement("li");
				moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
				var moveAside4LearnsetLiImgOuter = document.createElement("div");
				var moveAside4LearnsetLiImg = document.createElement("img");
				var moveAside4LearnsetLiSourceOuter = document.createElement("span");
				var moveAside4LearnsetLiSourceText = document.createElement("p");
				var moveAside4LearnsetLiSourceImgOuter = document.createElement("span");
				moveAside4LearnsetLiSourceOuter.title = "Prior Evolution";
				moveAside4LearnsetLiSourceText.innerText = "Prior Evolution:";
				if(finaldataLearnsetEvolution[q]["Evolution"].includes(",")) {
					for(var r = 0; r < finaldataLearnsetEvolution[q]["Evolution"].split(",").length; r++) {
						var moveAside4LearnsetLiSource = document.createElement("img");
						moveAside4LearnsetLiSource.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetEvolution[q]["Evolution"].split(",")[r]),"Box")+".png";
						moveAside4LearnsetLiSource.title = finaldataLearnsetEvolution[q]["Evolution"].split(",")[r];
						moveAside4LearnsetLiSource.setAttribute("value",getPokémonInt(finaldataLearnsetEvolution[q]["Evolution"].split(",")[r]))
						moveAside4LearnsetLiSourceImgOuter.appendChild(moveAside4LearnsetLiSource);
						moveAside4LearnsetLiSource.addEventListener("click", modalData);
					}
				} else if(finaldataLearnsetEvolution[q]["Evolution"] == "None") {
					moveAside4LearnsetLiSourceImgOuter.innerText = finaldataLearnsetEvolution[q]["Evolution"];
				} else {
					var moveAside4LearnsetLiSource = document.createElement("img");
					moveAside4LearnsetLiSource.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetEvolution[q]["Evolution"]),"Box")+".png";
					moveAside4LearnsetLiSource.title = finaldataLearnsetEvolution[q]["Evolution"];
					moveAside4LearnsetLiSource.setAttribute("value",getPokémonInt(finaldataLearnsetEvolution[q]["Evolution"]))
					moveAside4LearnsetLiSourceImgOuter.appendChild(moveAside4LearnsetLiSource);
					moveAside4LearnsetLiSource.addEventListener("click", modalData);
				}
		
				
				moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetEvolution[q]["Pokémon"]),"Box")+".png";
				moveAside4LearnsetLiImg.title = finaldataLearnsetEvolution[q]["Pokémon"];
				moveAside4LearnsetLiImg.setAttribute("value",getPokémonInt(finaldataLearnsetEvolution[q]["Pokémon"]));
				

				moveAside4LearnsetLiImg.addEventListener("click", modalData);
				moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
				moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
				moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
				moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
				moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSourceText);
				moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSourceImgOuter);
			}
		}
		for(var q = 0; q < finaldataLearnsetMachine.length; q++) {
			if(finaldataLearnsetMachine[q]["Move"] == finaldataMove[i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldataLearnsetMachine[q]["Game"]) == true) {
				var moveAside4LearnsetLi = document.createElement("li");
				moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
				var moveAside4LearnsetLiImgOuter = document.createElement("div");
				var moveAside4LearnsetLiImg = document.createElement("img");
				var moveAside4LearnsetLiSourceOuter = document.createElement("span");
				var moveAside4LearnsetLiSource = document.createElement("p");
				if(finaldataLearnsetMachine[q]["Machine"].includes("HM")) {
					moveAside4LearnsetLiSource.innerHTML = "<b>"+finaldataLearnsetMachine[q]["Machine"]+"</b>";
					moveAside4LearnsetLiSource.title = "HM";
				} else if(finaldataLearnsetMachine[q]["Machine"].includes("TM")) {
					moveAside4LearnsetLiSource.innerHTML = "<b>"+finaldataLearnsetMachine[q]["Machine"]+"</b>";
					moveAside4LearnsetLiSource.title = "TM";
				} else if(finaldataLearnsetMachine[q]["Machine"].includes("TR")) {
					moveAside4LearnsetLiSource.innerHTML = "<b>"+finaldataLearnsetMachine[q]["Machine"]+"</b>";
					moveAside4LearnsetLiSource.title = "TR";
				}

				moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetMachine[q]["Pokémon"]),"Box")+".png";
				moveAside4LearnsetLiImg.title = finaldataLearnsetMachine[q]["Pokémon"];
				moveAside4LearnsetLiImg.setAttribute("value",getPokémonInt(finaldataLearnsetMachine[q]["Pokémon"]));
				
				moveAside4LearnsetLiImg.addEventListener("click", modalData);
				moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
				moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
				moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
				moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
				moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSource);
			}
		}
		for(var q = 0; q < finaldataLearnsetBreed.length; q++) {
			if(finaldataLearnsetBreed[q]["Move"] == finaldataMove[i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldataLearnsetBreed[q]["Game"]) == true) {
				var moveAside4LearnsetLi = document.createElement("li");
				moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
				var moveAside4LearnsetLiImgOuter = document.createElement("div");
				var moveAside4LearnsetLiImg = document.createElement("img");
				var moveAside4LearnsetLiSourceOuter = document.createElement("span");
				var moveAside4LearnsetLiSourceText = document.createElement("p");
				var moveAside4LearnsetLiSourceImgOuter = document.createElement("span");
				moveAside4LearnsetLiSourceOuter.title = "Parent";
				moveAside4LearnsetLiSourceText.innerText = "Parent:";
				if(finaldataLearnsetBreed[q]["Parent"].includes(",")) {
					for(var r = 0; r < finaldataLearnsetBreed[q]["Parent"].split(",").length; r++) {
						var moveAside4LearnsetLiSource = document.createElement("img");
						moveAside4LearnsetLiSource.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetBreed[q]["Parent"].split(",")[r]),"Box")+".png";
						moveAside4LearnsetLiSource.title = finaldataLearnsetBreed[q]["Parent"].split(",")[r];
						moveAside4LearnsetLiSource.setAttribute("value",getPokémonInt(finaldataLearnsetBreed[q]["Parent"].split(",")[r]))
						moveAside4LearnsetLiSourceImgOuter.appendChild(moveAside4LearnsetLiSource);
						moveAside4LearnsetLiSource.addEventListener("click", modalData);
					}
				} else if(finaldataLearnsetBreed[q]["Parent"] == "None") {
					moveAside4LearnsetLiSourceImgOuter.innerText = finaldataLearnsetBreed[q]["Parent"];
				} else {
					var moveAside4LearnsetLiSource = document.createElement("img");
					moveAside4LearnsetLiSource.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetBreed[q]["Parent"]),"Box")+".png";
					moveAside4LearnsetLiSource.title = finaldataLearnsetBreed[q]["Parent"];
					moveAside4LearnsetLiSourceImgOuter.appendChild(moveAside4LearnsetLiSource);
				}

				moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLearnsetBreed[q]["Pokémon"]),"Box")+".png";
				moveAside4LearnsetLiImg.title = finaldataLearnsetBreed[q]["Pokémon"];
				moveAside4LearnsetLiImg.setAttribute("value",getPokémonInt(finaldataLearnsetBreed[q]["Pokémon"]));
				
				moveAside4LearnsetLiImg.addEventListener("click", modalData);
				moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
				moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
				moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
				moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
				moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSourceText);
				moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSourceImgOuter);
			}
		}

		var tempStr;
		if (moveLearnsetPB.length > 1) {
			tempStr = moveLearnsetPB.join(",");
		}
		else {
			tempStr = moveLearnsetPB[0];
		}
		moveLearnsetPartyBox(tempStr);
	}
};


