function getAllIndexes(arr, val) {
	var indexes = [],
		i = -1;
	while((i = arr.indexOf(val, i + 1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

function titleCase(str) {
	if(isNaN(str)) {
		var splitStr = str.toLowerCase().split(' ');
		for(var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
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
		Previous = finaldataPokémonEvolutionSpecie[i]["Previous_" + JSONPath_EvolutionSpecie];
		Next = finaldataPokémonEvolutionSpecie[i]["Next_" + JSONPath_EvolutionSpecie];
		if(Previous != undefined) {
			result.push(Previous);
			Previous = finaldataPokémonEvolutionSpecie[i]["Previous_" + JSONPath_EvolutionSpecie];
		}
		if(Next != undefined) {
			if(finaldataPokémonEvolutionSpecie[i]["Next_" + JSONPath_EvolutionSpecie] != undefined) {
				if(finaldataPokémonEvolutionSpecie[i]["Next_" + JSONPath_EvolutionSpecie].includes(",")) {
					for(var y = 0; y < finaldataPokémonEvolutionSpecie[i]["Next_" + JSONPath_EvolutionSpecie].split(",").length; y++) {
						Next = finaldataPokémonEvolutionSpecie[i]["Next_" + JSONPath_EvolutionSpecie].split(",")[y];
						result.push(Next);
					}
				} else {
					Next = finaldataPokémonEvolutionSpecie[i]["Next_" + JSONPath_EvolutionSpecie];
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

function getPokémonMediaPath(pok) {
	var arr = finaldataPokémonPath;
	var arr2 = finaldataPokémonForm;
	var result = [];
	for(i = 0; i < arr.length; i++) {
		if(arr2[i]["Form_" + JSONPath_Form] == pok) {
			if(arr[i]["Folder_" + JSONPath_Path] == undefined) {
				result.push(arr[i]["File_" + JSONPath_Path]);
			} else {
				result.push(arr[i]["Folder_" + JSONPath_Path] + arr[i]["File_" + JSONPath_Path]);
			}
		} else if(arr[i]["Pokémon"] == pok) {
			if(arr[i]["Folder_1-8"] == undefined) {
				result.push(arr[i]["File_" + JSONPath_Path]);
			} else {
				result.push(arr[i]["Folder_" + JSONPath_Path] + arr[i]["File_" + JSONPath_Path]);
			}
		}
	}
	return result[0];
}

function getMachineMove(machine) {
	var machine;
	var arr = finaldataMoveMachine;
	var result;
	for(i = 0; i < arr.length; i++) {
		if(arr[i]["Machine_" + JSONPath_MoveMachine] == machine) {
			result = arr[i]["Name" + "_" + JSONPath_MoveName]
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

function getRegionalID(seperator, id, dex) {
	var seperator;
	var id;
	var dex;
	var arr = finaldataPokémonPokédexID;
	var tempid;
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
				tempid = parseInt(arr[q][dex]) + seperator;
			}
		}
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][dex] == tempid) {
				return arr[q]["ID"];
			}
		}
	} else {
		for(var q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				return arr[q][dex];
			}
		}
	}
}

function getMoveData(move, type) {
	var type;
	var move;
	var arr;
	var game;
	if(type == "PP Min") {
		arr = finaldataMovePP;
		game = "PP Min_" + JSONPath_MovePP;
	}
	if(type == "PP Max") {
		arr = finaldataMovePP;
		game = "PP Max_" + JSONPath_MovePP;
	}
	if(type == "Power") {
		arr = finaldataMovePower;
		game = "Power_" + JSONPath_MovePower;
	}
	if(type == "Accuracy") {
		arr = finaldataMoveAccuracy;
		game = "Accuracy_" + JSONPath_MoveAccuracy;
	}
	if(type == "Type") {
		arr = finaldataMoveType;
		game = "Type_" + JSONPath_MoveType;
	}
	if(type == "Category") {
		arr = finaldataMoveCategory;
		game = "Category_" + JSONPath_MoveCategory;
	}
	for(var i = 0; i < arr.length; i++) {
		if(arr[i]["Name" + "_" + JSONPath_MoveName] == move) {
			return arr[i][game]
		}
	}
}

function getAbilityData(ability, data) {
	if(data == "Flavor") {
		var arr = finaldataAbilityFlavor;
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][JSONPath_AbilityFlavor + "_" + "Name"] == ability) {
				return arr[q][JSONPath_AbilityFlavor + "_" + data]
			}
		}
	} else {
		var arr = finaldataAbility;
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][JSONPath_AbilityReference + "_" + "Name"] == ability) {
				return arr[q][JSONPath_AbilityReference + "_" + data]
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
			return arr[q]["Pokémon Stage_" + JSONPath_EvolutionStage];
		}
	}
}

function getPokémonInt(name) {
	var name;
	var arr = finaldataPokémonForm;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name || arr[q]["Form_" + JSONPath_Form] == name) {
			return q;
		}
	}
}

function getPokémonName(int) {
	var int;
	var arr = finaldataPokémonForm;
	for(var i = 0; i < arr.length; i++) {
		if(int == i) {
			if(arr[i]["Form_" + JSONPath_Form] != undefined) {
				return arr[i]["Form_" + JSONPath_Form];
			} else {
				return arr[i]["Pokémon"];
			}
		}
	}
}