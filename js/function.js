function getAllIndexes(arr, val) {
	var indexes = [],
		i = -1;
	while((i = arr.indexOf(val, i+1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

function titleCase(str) {
	if(isNaN(str)) {
		var splitStr = str.toLowerCase().split(' ');
		for(var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase()+splitStr[i].substring(1);
		}
		splitStr = splitStr.join(' ');
		return splitStr;
	}
}


function getEvolutionFamily(i) {
	var i;
	var stage = [];
	var specie = [];
	var Previous;
	var Next;
	stage = finaldataPokémonEvolutionStage;
	specie = finaldataPokémonEvolutionSpecie;
	var result = [];
	result.push(finaldataPokémon[i]["Pokémon"])
	for(var q = 0; q < 10; q++) {
		Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
		Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
		if(Previous != undefined) {
			result.push(Previous);
			Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
		}
		if(Next != undefined) {
			if(finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
				if(finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
					for(var y = 0; y < finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
						Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y];
						result.push(Next);
					}
				} else {
					Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
					result.push(Next);
				}
			}
		}
		result = [...new Set(result)];
		if(result[q] != undefined) {
			i = parseInt(getPokémonInt(result[q]));
		}
	}
	for(var q = 0; q < result.length; q++) {
		var obj = new Object();
		obj["Pokémon"] = result[q];
		obj["ID"] = getPokémonID(result[q]);
		obj["Stage"] = getEvolutionStage(result[q]);
		result[q] = obj;
	}
	result.sort(function(a, b) {
		return parseInt(a["ID"]) - parseInt(b["ID"]);
	});
	result.forEach(function(val, u) {
		if(val["Stage"] == "First-Stage") result[u]["Stage"] = "1";
		if(val["Stage"] == "Second-Stage") result[u]["Stage"] = "2";
		if(val["Stage"] == "Third-Stage") result[u]["Stage"] = "3";
	});
	result.sort(function(a, b) {
		return parseInt(a["Stage"]) - parseInt(b["Stage"]);
	});
	return result;
}

function getIntID(int, id) {
	var int;
	var id;
	if(id == undefined || id == "") { // int --> id
		for(var i = 0; i < finaldataPokémon.length; i++) {
			if(int == i) {
				return finaldataPokémon[i]["ID"];
			}
		}
	} else if(int == undefined || int == "") { // id --> int
		for(var i = 0; i < finaldataPokémon.length; i++) {
			if(id == finaldataPokémon[i]["ID"]) {
				return i;
			}
		}
	}
}

function getPokémonMediaPath(pok,type) {
	var pok;
	var type;
	var arr = finaldataPokémonPath;
	var arr2 = finaldataPokémonForm;
	var result;

	if(type == "Battle" || type == "Art") {
		json = JSONPath_BattlePath;
	}
	else if (type == "Box") {
		json = JSONPath_BoxPath;
	}

	for(i = 0; i < arr.length; i++) {
		if(arr2[i]["Form_"+JSONPath_Form] == pok) {
			if(arr[i][type+" Folder_"+json] == undefined) {
				result = arr[i][type+" File_"+json];
			} else {
				result = arr[i][type+" Folder_"+json]+arr[i][type+" File_"+json];
			}
		} else if(arr[i]["Pokémon"] == pok) {
			if(arr[i][type+" Folder_"+json] == undefined) {
				result = arr[i][type+" File_"+json];
			} else {
				result = arr[i][type+" Folder_"+json]+arr[i][type+" File_"+json];
			}
		}
	}
	return result;
}




function getMachineMove(machine) {
	var machine;
	var arr = finaldataMoveMachine;
	var result;
	for(i = 0; i < arr.length; i++) {
		if(arr[i]["Machine_"+JSONPath_MoveMachine] == machine) {
			result = arr[i]["Name_"+JSONPath_MoveName]
		}
	}
	return result;
}

function getMoveMachine(move) {
	var move;
	var arr = finaldataMoveMachine;
	var result;
	for(i = 0; i < arr.length; i++) {
		if(arr[i]["Name_"+JSONPath_MoveName] == move) {
			result = arr[i]["Machine_"+JSONPath_MoveMachine]
		}
	}
	return result;
}



function Continuation(arr, column, style) {
	var arr;
	var column;
	var style;
	var temparr1 = [];
	var result = [];
	var names = [];
	if(style == "Single") {
		for(i = 0; i < arr.length; i++) {
			if(arr[i][column].includes(",")) {
				temparr1.push(arr[i][column].split(","));
			} else {
				temparr1.push(arr[i][column]);
			}
		}
		for(i = 0; i < temparr1.length; i++) {
			if(temparr1[i].includes(GameName)) {
				result[i] = true;
			} else {
				result[i] = false;
			}
		}
	} else if(style == "Multiple") {
		for(i = 0; i < finaldataGame.length; i++) {
			if(parseInt(finaldataGame[i]["ID"]) <= GameID) {
				names.push(finaldataGame[i]["Name"]);
			}
		}
		for(i = 0; i < finaldataGame.length; i++) {
			if(finaldataGame[i]["Name"] == GameName) {
				if(finaldataGame[i]["Sibling"] != undefined) {
					if(finaldataGame[i]["Sibling"].includes(",")) {
						for(q = 0; q < finaldataGame[i]["Sibling"].split(",").length; q++) {
							for(u = 0; u < finaldataGame.length; u++) {
								if(finaldataGame[u]["ID"] == finaldataGame[i]["Sibling"].split(",")[q]) {
									names.push(finaldataGame[u]["Name"]);
								}
							}
						}
					} else {
						for(u = 0; u < finaldataGame.length; u++) {
							if(finaldataGame[u]["ID"] == finaldataGame[i]["Sibling"]) {
								names.push(finaldataGame[u]["Name"]);
							}
						}
					}
				}
			}
		}
		var temprun;
		var tempres = [];
		var temparrtype = [];
		for(i = 0; i < arr.length; i++) {
			if(arr[i][column].includes(",")) {
				temparr1.push(arr[i][column].split(","));
				temparrtype.push("+");
			} else if(arr[i][column].includes("-")) {
				temparr1.push(arr[i][column].split("-"));
				temparrtype.push("-");
			} else {
				temparr1.push(arr[i][column]);
				temparrtype.push("+");
			}
		}
		for(i = 0; i < temparr1.length; i++) {
			var boolean = [];
			if(temparrtype[i] == "-") {
				for(q = 0; q < finaldataGame.length; q++) {
					if(finaldataGame[q]["Name"] == temparr1[i][0]) {
						temprun = true;
					}
					if(finaldataGame[q]["Name"] == temparr1[i][1]) {
						tempres.push(finaldataGame[q]["Name"])
						temprun = false;
					}
					if(temprun == true) {
						tempres.push(finaldataGame[q]["Name"])
					}
				}
				for(q = 0; q < tempres.length; q++) {
					if(tempres[q].includes(GameName)) {
						boolean.push(true);
					} else {
						boolean.push(false);
					}
				}
				tempres = [];
			} else {
				for(q = 0; q < names.length; q++) {
					if(temparr1[i].includes(names[q])) {
						boolean.push(true);
					} else {
						boolean.push(false);
					}
				}
			}
			if(boolean.includes(true)) {
				result[i] = true;
			} else {
				result[i] = false;
			}
			boolean = [];
		}
	}
	return result;
}

function getRegionalID(seperator,id,dex) {
	var seperator;
	var id;
	var dex;
	var arr = finaldataPokémonPokédexID;
	var tempid;
    var result;

	if(seperator == "-") {
		seperator = -1;
	}
	if(seperator == "+") {
		seperator = +1;
	}
	if(seperator == "=") {
		seperator = "";
	}
	if(seperator != "") {
		for(var q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				tempid = parseInt(arr[q][dex])+seperator;
                break;
			}
		}
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][dex] == tempid) {
				result = arr[q]["ID"];
                break;
			}
		}
	} else {
		for(var q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				result = arr[q][dex];
                break;
			}
		}
	}

    return result
}

function getMoveData(move, type) {
	var type;
	var move;
	var arr;
	var game;
	if(type == "PP Min") {
		arr = finaldataMovePP;
		game = "PP Min_"+JSONPath_MovePP;
	}
	if(type == "PP Max") {
		arr = finaldataMovePP;
		game = "PP Max_"+JSONPath_MovePP;
	}
	if(type == "Power") {
		arr = finaldataMovePower;
		game = "Power_"+JSONPath_MovePower;
	}
	if(type == "Accuracy") {
		arr = finaldataMoveAccuracy;
		game = "Accuracy_"+JSONPath_MoveAccuracy;
	}
	if(type == "Type") {
		arr = finaldataMoveType;
		game = "Type_"+JSONPath_MoveType;
	}
	if(type == "Category") {
		arr = finaldataMoveCategory;
		game = "Category_"+JSONPath_MoveCategory;
	}
    if(type == "Description") {
		arr = finaldataMoveDescription;
		game = "Description_"+JSONPath_MoveDescription;
	}
	for(var i = 0; i < arr.length; i++) {
		if(arr[i]["Name"+"_"+JSONPath_MoveName] == move) {
			return arr[i][game]
		}
	}
}

function getAbilityData(ability, data) {
	if(data == "Flavor") {
		var arr = finaldataAbilityFlavor;
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][JSONPath_AbilityFlavor+"_"+"Name"] == ability) {
				return arr[q][JSONPath_AbilityFlavor+"_"+data]
			}
		}
	} else {
		var arr = finaldataAbility;
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][JSONPath_AbilityReference+"_"+"Name"] == ability) {
				return arr[q][JSONPath_AbilityReference+"_"+data]
			}
		}
	}
	var ability;
	var data;
}

function getFullGameName(name) {
	var name;
	var arr = finaldataGame;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Name"] == name) {
			return arr[q]["Full Name"];
		}
	}
}

function getPokémonID(name) {
	var name;
	var arr = finaldataPokémon;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name) {
			return arr[q]["ID"];
		}
	}
}

function getEvolutionStage(name) {
	var name;
	var arr = finaldataPokémonEvolutionStage;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name) {
			return arr[q]["Pokémon Stage_"+JSONPath_EvolutionStage];
		}
	}
}

function abbreviateStats(stats) {
    var stats;
    if (stats == "Attack") {
        return "Atk";
    }
    if (stats == "Defense") {
        return "Def";
    }
    if (stats == "Sp. Atk") {
        return "SpAtk";
    }
    if (stats == "Sp. Def") {
        return "SpDef";
    }
    if (stats == "Speed") {
        return "Spe";
    }
    return stats;
}

function findUpTag(el, tag) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === tag)
            return el;
    }
    return null;
}

function getPokémonInt(name) {
	var name;
	var arr = finaldataPokémonForm;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name || arr[q]["Form_"+JSONPath_Form] == name) {
			return q;
		}
	}
}

function getPokémonName(int) {
	var int;
	var arr = finaldataPokémonForm;
	for(var i = 0; i < arr.length; i++) {
		if(int == i) {
			if(arr[i]["Form_"+JSONPath_Form] != undefined) {
				return arr[i]["Form_"+JSONPath_Form];
			} else {
				return arr[i]["Pokémon"];
			}
		}
	}
}

function getPokémonName2(int) {
	var int;
	var arr = finaldataPokémonForm;
	for(var i = 0; i < arr.length; i++) {
		if(int == i) {
			if(arr[i]["Form_"+JSONPath_Form] != undefined && !arr[i]["Variant"].includes("Default")) {
				return arr[i]["Form_"+JSONPath_Form];
			} else {
				return arr[i]["Pokémon"];
			}
		}
	}
}





function removeDuplicateObjectFromArray(array, key) {
    let check = {};
    let res = [];
    for(let i=0; i<array.length; i++) {
        if(!check[array[i][key]]){
            check[array[i][key]] = true;
            res.push(array[i]);
        }
    }
    return res;
}

function friendshipModifer(friendship) {
    var friendship;

    return 1+(Math.floor((10*friendship)/255)/100)
}


function getPokémonForm(i) {
    var i;
    var id = getIntID(i,"");
    var result = [];

    for(var u = 0; u < finaldataPokémonForm.length; u++) {
		if(finaldataPokémonForm[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
            if (finaldataPokémonForm[u]["Form_"+JSONPath_Form] != undefined) {
                result.push(finaldataPokémonForm[u]["Form_"+JSONPath_Form]);
            }
            else {
                result.push(finaldataPokémonForm[u]["Pokémon"]);
            }
		}
	}

    return result;
}

function getPositionAbility(i,column) {
    var arr = finaldataPokémonAbility;
    var column;
    var i;
    var result;

    for (var q = 0; q < arr.length; q++) {
        if (q == i) {
            if (arr[q][column+"_"+JSONPath_Ability] != undefined) {
                result = arr[q][column+"_"+JSONPath_Ability];
                break;
            }
        }
    }

    if (result == undefined) {
        for (var q = 0; q < arr.length; q++) {
            if (q == getDefaultInt(i)) {
                result = arr[q][column+"_"+JSONPath_Ability];
                break;
            }
        }
    }

    return result;
}


function getAbilityPosition(i,ability) {
    var arr = finaldataPokémonAbility;
	var i;
    var ability;
    var result;

    for (var q = 0; q < arr.length; q++) {
        if (q == i) {
			var keys = Object.keys(arr[q]);
			for (var u = 0; u < keys.length; u++) {
				if (arr[q][keys[u]] == ability && keys[u].includes(JSONPath_Ability)) {
					result = keys[u].replaceAll("_"+JSONPath_Ability,"");
					break;
				}
			}
        }
    }

    if (result == undefined) {
        for (var q = 0; q < arr.length; q++) {
			if (q == getDefaultInt(i)) {
				var keys = Object.keys(arr[q]);
				for (var u = 0; u < keys.length; u++) {
					if (arr[q][keys[u]] == ability && keys[u].includes(JSONPath_Ability)) {
						result = keys[u].replaceAll("_"+JSONPath_Ability,"");
						break;
					}
				}
			}
		}
    }

    return result;
}

function getDefaultInt(i) {

    var i;
    var id = getIntID(i,"");
    var arr = finaldataPokémon;
    var result;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["ID"] == id) {
            result = q;
            break;
        }
    }

    return result;
}


function getLocationTrainers(location) {

	var arr = finaldataLocationTrainers;
	var location;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q]["Location"] == location) {
				result.push(arr[q]);
			}
		}
	}

	return result;

}


function getLocationItems(location) {

	var arr = finaldataLocationItems;
	var location;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q]["Location"] == location) {
				result.push(arr[q]);
			}
		}
	}

	return result;
}

function getLocationPokémon(location) {

	var arr = finaldataLocationPokémon;
	var location;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q]["Location"] == location) {
				result.push(arr[q]);
			}
		}
	}

	return result;

}


function sortObjectArray(objectsArr, prop) {
	var objectsArr;
	var prop;
	var ascending = true;

	let objectsHaveProp = objectsArr.every(object => object.hasOwnProperty(prop));

	if(objectsHaveProp) {
		let newObjectsArr = objectsArr.slice();
		newObjectsArr.sort((a, b) => {
			if(isNaN(Number(a[prop])))  {
				let textA = a[prop].toUpperCase(),
					textB = b[prop].toUpperCase();
				if(ascending)   {
	
					return textA < textB ? -1 : textA > textB ? 1 : 0;
				} else {
		
					return textB < textA ? -1 : textB > textA ? 1 : 0;
				}
			} else {
				return ascending ? a[prop] - b[prop] : b[prop] - a[prop];
			}
		});

		return newObjectsArr;
	}

	return objectsArr;
}






function getTutorData(val,column) {
	var val;
	var column;
	var arr = finaldataLocationTutor;
	var result = [];

	for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if (arr[q][column] == val) {
				result.push(arr[q])
			}
		}
	}

	return result;
}



function getApplicable(val) {
	var val;

	if (val == GameName) {
		return true;
	}
	else if (val.includes(GameName+",")) {
		return true;
	}
	else if (val.includes(","+GameName)) {
		return true;
	}
	return false;
}



function getItemIcon(item) {
    var item;
	var arr = finaldataItems;

	for (var q = 0; q < arr.length; q++) {
		if (arr[q]["Name_"+JSONPath_Items] == item) {
			return arr[q]["Icon_"+JSONPath_Items]
		}
	}
    return;
}


var searchPokémonAttributes = [];
var searchMoveAttributes = [];
var searchAbilityAttributes = [];
var searchItemAttributes = [];
var searchMapAttributes = [];

function search(type) {
    var type;
	var tag;

    if (type == "Pokémon") {
        base = document.querySelector("#pokémon-outer > div ul");
        searchAttributes = searchPokémonAttributes;
		tag = "li";
    }
    else if (type == "Move") {
        base = document.querySelector("#move-options");
        searchAttributes = searchMoveAttributes;
		tag = "label";
    }
    else if (type == "Ability") {
        base = document.querySelector("#ability-options");
        searchAttributes = searchAbilityAttributes;
		tag = "label";
    }
    else if (type == "Item") {
        base = document.querySelector("#item-options");
        searchAttributes = searchItemAttributes;
		tag = "label";
    }
    else if (type == "Map") {
        base = document.querySelector("#map-options");
        searchAttributes = searchMapAttributes;
		tag = "label";
    }

	var tar = event.target
    var searchValue = (tar.value).toLowerCase();
    var searchPositive = [];
    var searchNegative = [];
    var searchGreater = [];
    var searchLower = [];
	var searchVar = [];


    if (searchValue.includes("::") && searchAttributes.includes(searchValue.split("::")[0])) {
        searchPositive = searchValue.split("::");
		searchVar = searchValue.split("::");
    }
    else if (searchValue.includes(":!") && searchAttributes.includes(searchValue.split(":!")[0])) {
        searchNegative = searchValue.split(":!");
		searchVar = searchValue.split(":!");
    }
    else if (searchValue.includes(":>") && searchAttributes.includes(searchValue.split(":>")[0])) {
        searchGreater = searchValue.split(":>");
		searchVar = searchValue.split(":>");
    }
    else if (searchValue.includes(":<") && searchAttributes.includes(searchValue.split(":<")[0])) {
        searchLower = searchValue.split(":<");
		searchVar = searchValue.split(":<");
    }
    else {
        var searchName = event.target.value;
    }

	var tags =  base.querySelectorAll(':scope > '+tag);
	for(i = 0; i < tags.length; i++) {
		tags[i].classList.remove("hidden");
	}

    tar.style.color = "var(--fontDark)";


	var check;

	if (searchVar.length > 0) {
		if (tags[0].getAttribute('data-search-'+searchVar[0]).match(/[a-z]/g) ) {
			check = false;
		}
		else {
			check = true;
		}
	}
    if (searchPositive.length > 0 && searchAttributes.includes(searchPositive[0])) {
        if (parseInt(searchPositive[1]) != NaN) {
            var tags = base.querySelectorAll(':scope > '+tag+':not([data-search-'+searchPositive[0]+'*="'+searchPositive[1]+'"])');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        else {
            var tags = base.querySelectorAll(':scope > '+tag+':not([data-search-'+searchPositive[0]+'="'+searchPositive[1]+'"])');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        tar.style.color = "var(--colorRed)";
    }
    else if (searchNegative.length > 0 && searchAttributes.includes(searchNegative[0])) {
        if (parseInt(searchNegative[1]) != NaN) {
            var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchNegative[0]+'*="'+searchNegative[1]+'"]');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        else {
            var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchNegative[0]+'="'+searchNegative[1]+'"]');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        tar.style.color = "var(--colorRed)";
    }
	else if (searchLower.length > 0 && searchAttributes.includes(searchLower[0]) && check) {
        var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchLower[0]+']');
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.add("hidden");
		}
        for(i = 0; i < tags.length; i++) {
			if (tags[i].getAttribute("data-search-"+searchLower[0]) != "") {
				if (parseInt(tags[i].getAttribute("data-search-"+searchLower[0])) <= parseInt(searchLower[1])) {
					tags[i].classList.remove("hidden");
				}
			}
        }
        tar.style.color = "var(--colorRed)";
    }
    else if (searchGreater.length > 0 && searchAttributes.includes(searchGreater[0]) && check) {
        var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchGreater[0]+']');
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.add("hidden");
		}
        for(i = 0; i < tags.length; i++) {
			if (tags[i].getAttribute("data-search-"+searchGreater[0]) != "") {
				if (parseInt(tags[i].getAttribute("data-search-"+searchGreater[0])) >= parseInt(searchGreater[1])) {
					tags[i].classList.remove("hidden");
				}
			}
        }
        tar.style.color = "var(--colorRed)";
    }
    else if (event.target.value.length > 0) {
        var tags = base.querySelectorAll(':scope > '+tag+':not([data-search-name*="'+searchName+'"])');
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.add("hidden");
		}
        tar.style.color = "var(--fontDark)";
    }
	else {
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.remove("hidden");
		}
		tar.style.color = "var(--fontDark)";
	}
	
    count();
}
function exitSearch(base) {
    var base;
	var tag;
	var tar = event.target;

    if (base == "Pokémon") {
        base = document.querySelector("#pokémon-outer > div ul");
		tag = "li";
    }
    if (base == "Move") {
        base = document.querySelector("#move-options");
		tag = "label";
    }
    if (base == "Ability") {
        base = document.querySelector("#ability-options");
		tag = "label";
    }
    if (base == "Item") {
        base = document.querySelector("#item-options");
		tag = "label";
    }
    if (base == "Map") {
        base = document.querySelector("#map-options");
		tag = "label";
		
    }
    
    var items = base.querySelectorAll(":scope > "+tag);
    for (i = 0; i < items.length; i++) {
        items[i].classList.remove("hidden");
    }

    var search = tar.nextElementSibling;
	search.style.color = "var(--fontDark)";
    search.value = "";
    search.focus();
}


function getEvolutionData(i,column) {
	var i;
	var column;
	var arrName = finaldataPokémonEvolutionSpecie;
	var arrOffspring = finaldataPokémonOffspring;
	var arrStage = finaldataPokémonEvolutionStage;
	var arrMethod = finaldataPokémonEvolutionMethod;

	var result = [];

	if (column == "Previous") {
		var pokémon = arrName[i][column+"_"+JSONPath_EvolutionSpecie];
		var offspring = arrOffspring[getPokémonInt(pokémon)]["Offspring_"+JSONPath_Offspring];
		var factor = arrOffspring[getPokémonInt(pokémon)]["Factor_"+JSONPath_Offspring];

		if (pokémon == undefined) {
			pokémon = arrName[getDefaultInt(i)][column+"_"+JSONPath_EvolutionSpecie];
		}
		if (offspring == undefined) {
			offspring = arrOffspring[getPokémonInt(pokémon)]["Offspring_"+JSONPath_Offspring];
		}
		if (factor == undefined) {
			factor = arrOffspring[getPokémonInt(pokémon)]["Factor_"+JSONPath_Offspring];
		}

		var obj = new Object();
		obj["Pokémon"] = pokémon;
		obj["Offspring"] = offspring;
		obj["Factor"] = factor;
		result.push(obj)
	} 
	else if (column == "Next") {
		var pokémon = arrName[i][column+"_"+JSONPath_EvolutionSpecie];
		var stage = arrStage[getPokémonInt(pokémon)]["Pokémon Stage_"+JSONPath_EvolutionStage];
		var method = arrMethod[getPokémonInt(pokémon)]["Type_"+JSONPath_EvolutionMethod];
		var factor = arrMethod[getPokémonInt(pokémon)]["Factor_"+JSONPath_EvolutionMethod];
		var additional = arrMethod[getPokémonInt(pokémon)]["Additional_"+JSONPath_EvolutionMethod];
		var gender = arrMethod[getPokémonInt(pokémon)]["Gender_"+JSONPath_EvolutionMethod];

		if (pokémon == undefined) {
			pokémon = arrName[getDefaultInt(i)][column+"_"+JSONPath_EvolutionSpecie];
		}
		if (stage == undefined) {
			stage = arrStage[getPokémonInt(pokémon)]["Pokémon Stage_"+JSONPath_EvolutionStage];
		}
		if (method == undefined) {
			method = arrMethod[getPokémonInt(pokémon)]["Type_"+JSONPath_EvolutionMethod];	
		}
		if (factor == undefined) {
			factor = arrMethod[getPokémonInt(pokémon)]["Factor_"+JSONPath_EvolutionMethod];
		}
		if (additional == undefined) {
			additional = arrMethod[getPokémonInt(pokémon)]["Additional_"+JSONPath_EvolutionMethod];
		}
		if (gender == undefined) {
			gender = arrMethod[getPokémonInt(pokémon)]["Gender_"+JSONPath_EvolutionMethod];
		}

		var obj = new Object();
		obj["Pokémon"] = pokémon;
		obj["Stage"] = stage;
		obj["Method"] = method;
		obj["Factor"] = factor;
		obj["Additional"] = additional;
		obj["Gender"] = gender;
		result.push(obj)	
	}
	

	return result;
}







function formatEvolutionText(i,obj,type) {
	var i;
	var obj;
	var type;
	var result = "";
	var pokémon = getPokémonName(i);
	
	console.log(obj)
	console.log(i)

	if (type == "Previous") {

	}
	if (type == "Next") {


		for(var name in obj) {
			if (obj[name] == undefined) {
				obj[name] = "";
			}
			if (name == "Factor" && obj[name] != "" && obj["Method"] != "Item") {
				obj[name] = "("+obj[name]+")"
			}
			if (obj[name] == "Special Level Up") {
				obj[name] = "Level Up";
			}
			if (obj[name] == "Special Trade") {
				obj[name] = "Trade";
			}
			if (name == "Additional" && obj[name] != "") {
				obj[name] = obj[name]+".";
			}
		}

		if (obj["Method"] == "Level Up" && obj["Method"] == "Trade") {
			result = "Evolve "+obj["Gender"]+" "+pokémon+ " by "+obj["Method"]+" "+obj["Factor"]+" "+obj["Additional"];
		}
		else if (obj["Method"] == "Item") {
			result = "Evolve "+obj["Gender"]+" "+pokémon+ " with "+obj["Factor"]+" "+obj["Additional"];
		}
		else if(obj["Method"] == "Unique") {
			result = "Evolve "+obj["Gender"]+" "+pokémon+obj["Factor"]+" "+obj["Additional"];
		}
		else if (obj["Method"] == "Unavailable") {
			result = "Evolution Unavailable."
		}
	
	}

	result = result.replaceAll("  "," ");
	return result;
}