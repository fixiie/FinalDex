


function partyMemory(action) {
    var action;
    var partySlots = document.querySelectorAll('#pokémon-outer > main[name="Team"] section[name="Party"] > div');
    if (action == "Save") {
        var partyMemory = [];
        for(var i = 0; i < partySlots.length; i++) {
            if (partySlots[i].getAttribute("name") != "empty") {
                partyMemory.push(getPartyData(partySlots[i]))
            }
            else {
                partyMemory.push("")
            }
        }
        localStorage.setItem("finaldex-party-"+GameID, partyMemory.join("/"));
    }
    else if (action == "Restore") {
        var tempArr = localStorage.getItem("finaldex-party-"+GameID);
        if (tempArr != undefined) {
            tempArr = localStorage.getItem("finaldex-party-"+GameID).split("/");
            if (tempArr.length == partySlots.length) {
                for(var i = 0; i < tempArr.length; i++) {
                    if (tempArr[i] != "") {
                        createParty(partySlots[i],tempArr[i]);
                        partyShow(partySlots[i]);
                    }
                }
            }
        }
    }
}




function boxMemory(action) {
    var action;

    if (action == "Save") {
        localStorage.setItem("finaldex-box-"+GameID, getAllBoxData());
    }
    else if (action == "Restore") {
        var tempArr = [];
        var tempStr = localStorage.getItem("finaldex-box-"+GameID);

        if (tempStr != "undefined" && tempStr != undefined) {
            if (tempStr.includes("/")) {
                tempArr = tempStr.split("/");
                for(var i = 0; i < tempArr.length; i++) {
                    storeInBox(tempArr[i]);
                }
            }
            else {
                tempArr[0] = tempStr;
                for(var i = 0; i < tempArr.length; i++) {
                    storeInBox(tempArr[i]);
                }
            }
        }
    }

}


function memory(action,name,suffix,element) {

	var action;
	var name;
	var suffix;
	var element;

	var tempArr = [];
	var tempStr;

	if (suffix != undefined) {
		tempArr.push("finaldex");
	}
	if (name != undefined) {
		tempArr.push(name);
	}
	if (suffix == "game") {
		tempArr.push(GameID);
	}

	if (tempArr.length > 1) {
		tempStr = tempArr.join("-");
	}
	else {
		tempStr = tempArr[0];
	}
	
	if (element != undefined) {
		if (NodeList.prototype.isPrototypeOf(element) == true) {
			for(var i = 0; i < element.length; i++) {
				if (action == "Save") {
					localStorage.setItem(tempStr+"-"+element[i].getAttribute("name"),element[i].checked);
				}
				else if (action == "Restore") {
					if (JSON.parse(localStorage.getItem(tempStr+"-"+element[i].getAttribute("name"))) != null) {
						element[i].checked = JSON.parse(localStorage.getItem(tempStr+"-"+element[i].getAttribute("name")));
					}
				}
			}
		}
		else {
			if (action == "Save") {
				localStorage.setItem(tempStr,element.value);
			}
			else if (action == "Restore") {
				if (localStorage.getItem(tempStr) != null) {
					element.value = localStorage.getItem(tempStr);
				}
			}
		}
	}


}



function memoryDexSwitch() {
	var radio = document.getElementsByName("finaldex-dexswitch-" + GameID);
	var val = localStorage.getItem("finaldex-dexswitch-" + GameID);
	for(var i = 0; i < radio.length; i++) {
		if(radio[i].value == val) {
			radio[i].click();
		} else if(val == null) {
			radio[radio.length - 1].click();
		}
	}
	$('input[name="finaldex-dexswitch-' + GameID + '"]').on("change", function() {
		localStorage.setItem("finaldex-dexswitch-" + GameID, $(this).val());
	});
}
