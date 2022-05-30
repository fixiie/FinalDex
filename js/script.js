function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function getPokémonData(arr, name, game) {
	var arr;
	var name;
	var game;
	var result = [];
	for(var i = 0; i < game.length; i++) {
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][game[i]] == name) {
				if(finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {
						return e.ID;
					}).indexOf(arr[q]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable") {
					var obj = new Object();
					obj["Pokémon"] = arr[q]["Pokémon"];
					if(finaldataPokémonPath[q]["Folder_" + JSONPath_Path] == undefined) {
						obj["Folder"] = "";
					} else {
						obj["Folder"] = finaldataPokémonPath[q]["Folder_" + JSONPath_Path];
					}
					obj["File"] = finaldataPokémonPath[q]["File_" + JSONPath_Path];
					obj["Form"] = finaldataPokémonForm[q]["Form_" + JSONPath_Form];
					obj["Variant"] = arr[q]["Variant"];
					for(var u = 0; u < game.length; u++) {
						if(arr[q][game[u]] != undefined) {
							obj[game[u]] = arr[q][game[u]];
						}
					}
					result[q] = obj;
				}
			}
		}
	}
	var newResult = result.filter(value => Object.keys(value).length !== 0);
	return newResult;
}

function OpenExitPopUp(x, active) {
	var x;
	var active;
	var popup = document.querySelector("#data-modal" + x + " .data-popup");
	if(active == false) {
		popup.classList.add("open");
		popup.classList.remove("close");
	} else {
		popup.classList.remove("open");
		popup.classList.add("close");
	}
}

function callPopUp(x, arr, type, style) {
	var x;
	var arr;
	var type;
	var popup = document.querySelector("#data-modal" + x + " .data-popup");
	var ul = popup.querySelector(":scope ul");
	var lis = popup.querySelectorAll(":scope li");
	var idpath = popup.querySelector(":scope span > h4");
	var iconpath = popup.querySelector(":scope span > img");
	var titlepath = popup.querySelector(":scope span > h2");
	var descriptionpath = popup.querySelector(":scope span > p");
	if(!popup.getAttribute("class").includes("open") && !popup.getAttribute("class").includes("close")) {
		popup.classList.add("close");
	}
	var id;
	var icon;
	var title;
	var description;
	var additional;
	var style;
	var formula;
	var abbreviation;
	var alteration;
	var target = event.currentTarget;
	var enhancetarget;
	if(target.getAttribute("dataname") == "value") {
		enhancetarget = target;
	} else {
		enhancetarget = target.querySelector(':scope [dataname="value"]');
	}
	if(enhancetarget.getAttribute("value") != undefined) {
		title = enhancetarget.getAttribute("value");
	} else if(enhancetarget.innerText != "") {
		title = enhancetarget.innerText;
	} else if(enhancetarget.getAttribute("title") != undefined) {
		title = enhancetarget.getAttribute("title");
	}
	if(title.includes("  ")) {
		title = title.replaceAll("  ", "");
	}
	if(navChecker != 1) {
		navChecker.fill(1);
		document.querySelector("#data-modal" + x + " #data-navigation label:nth-child(2)").click();
	}
	ul.setAttribute("name", type);
	if(type == "Ability") {
		id = getAbilityData(title, "ID");
		description = getAbilityData(title, "Flavor");
	} else if(type == "Held Item") {
		id = enhancetarget.getAttribute("name");
	}
	if(title.includes(" : ")) {
		title = title.split(" : ");
	}
	if(type == "Catch Rate") {
		if(Generation == 1) {
			formula = Math.round(((Math.min(parseInt(title) + 1, 256)) / 256 * (85 + 1 / 256) / 256 * 100) * 10) / 10 + "%";
		} else if(Generation == 2) {
			formula = Math.round(((Math.max(parseInt(title) / 3, 1) + 1) / 256 * 100) * 10) / 10 + "%";
		} else if(Generation == 3 || Generation == 4) {
			formula = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(title) / 3))) / 65536) ** 4 * 100) * 10) / 10 + "%";
		} else if(Generation >= 5) {
			formula = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(title) / 3))) / 65536) ** 3 * 100) * 10) / 10 + "%";
		}
	} else if(type == "Experience Yield") {
		if(title >= 300) {
			abbreviation = "Very High";
		} else if(title >= 200 && title <= 299) {
			abbreviation = "High";
		} else if(title >= 100 && title <= 199) {
			abbreviation = "Medium";
		} else if(title >= 50 && title <= 99) {
			abbreviation = "Low";
		} else if(title >= 0 && title <= 49) {
			abbreviation = "Very Low";
		}
	} else if(type == "Hatch Rate") {
		if(Generation == 2 || Generation == 7) {
			formula = parseInt(title) * 256;
		} else if(Generation == 3) {
			formula = (parseInt(title) + 1) * 256;
		} else if(Generation == 4) {
			formula = (parseInt(title) + 1) * 255;
		} else if(Generation == 5 || Generation == 6) {
			formula = parseInt(title) * 257;
		}
	} else if(type == "Gender Ratio") {
		if(title[0] == "1" && title[1] == "0") { // Always Male
			alteration = "<span name='Male'>♂</span> 1 : 0 <span name='Female'>♀</span>";
			abbreviation = "Always Male";
		} else if(title[0] == "7" && title[1] == "1") { // Very Often Male
			alteration = "<span name='Male'>♂</span> 7 : 1 <span name='Female'>♀</span>";
			abbreviation = "Very Often Male";
		} else if(title[0] == "3" && title[1] == "1") { // Often Male
			alteration = "<span name='Male'>♂</span> 3 : 1 <span name='Female'>♀</span>";
			abbreviation = "Often Male";
		} else if(title[0] == "1" && title[1] == "1") { // Equal Ratio
			alteration = "<span name='Male'>♂</span> 1 : 1 <span name='Female'>♀</span>";
			abbreviation = "Equal Ratio";
		} else if(title[0] == "1" && title[1] == "3") { // Often Female
			alteration = "<span name='Male'>♂</span> 1 : 3 <span name='Female'>♀</span>";
			abbreviation = "Often Female";
		} else if(title[0] == "1" && title[1] == "7") { // Very Often Female
			alteration = "<span name='Male'>♂</span> 1 : 7 <span name='Female'>♀</span>";
			abbreviation = "Very Often Female";
		} else if(title[0] == "0" && title[1] == "1") { // Always Female
			alteration = "<span name='Male'>♂</span> 0 : 1 <span name='Female'>♀</span>";
			abbreviation = "Always Female";
		} else if(title[0] == "0" && title[1] == "0") { // Genderless
			alteration = "<span name='Male'>♂</span> 0 : 0 <span name='Female'>♀</span>";
			abbreviation = "Genderless";
		}
	}
	if(type == "Held Item") {
		icon = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + target.title + ".png";
		iconpath.setAttribute("name", "Item");
		iconpath.addEventListener("click", dataRedirect);
	}
	if(type == "Base Stats" && style == "Multiple" || type == "EV Yield" && style == "Multiple") {
		additional = target.parentElement.getAttribute("class").split("-")[1];
	} else if(type == "Base Stats" && style == "Total" || type == "EV Yield" && style == "Total") {
		additional = target.getAttribute("name");
	}
	if(additional == "hp") {
		additional = "HP";
	} else if(additional == "atk") {
		additional = "attack";
	} else if(additional == "def") {
		additional = "defense";
	} else if(additional == "spatk") {
		additional = "Sp. Atk";
	} else if(additional == "spdef") {
		additional = "Sp. Def";
	}
	if(additional != undefined) {
		additional = additional.charAt(0).toUpperCase() + additional.slice(1);
	}
	for(u = 0; u < lis.length; u++) {
		lis[u].remove();
	}
	if(type == "Type") {
		popup.querySelector(":scope > div").setAttribute("name", "type" + title);
	} else if(type == "Egg Group") {
		popup.querySelector(":scope > div").setAttribute("name", "egg" + title);
	} else if(type == "Base Stats" || type == "EV Yield") {
		popup.querySelector(":scope > div").setAttribute("name", "stat" + additional);
	} else {
		popup.querySelector(":scope > div").removeAttribute("name");
	}
	if(type == "Ability") {
		var jsonpath = JSONPath_Ability;
		if(Generation <= 4) {
			var json = ["Primary", "Secondary"];
		} else {
			var json = ["Primary", "Secondary", "Hidden"];
		}
		json = json.map(i => i + "_" + jsonpath);
	} else if(type == "Egg Group") {
		var jsonpath = JSONPath_EggGroup;
		var json = ["Primary", "Secondary"];
		json = json.map(i => i + "_" + jsonpath);
	} else if(type == "Catch Rate") {
		var json = [JSONPath_CatchRate, "Percentage"];
	} else if(type == "Hatch Rate") {
		var json = ["Egg Cycle_" + JSONPath_HatchRateEggCycle, "Steps_" + JSONPath_HatchRateSteps];
	} else if(type == "Experience Yield") {
		var json = [JSONPath_ExperienceYield, "Category"];
	} else if(type == "Leveling Rate") {
		var json = [JSONPath_LevelingRate];
	} else if(type == "Type") {
		var jsonpath = JSONPath_Type;
		var json = ["Primary", "Secondary"];
		json = json.map(i => i + "_" + jsonpath);
	} else if(type == "Gender Ratio") {
		var jsonpath = JSONPath_GenderRatio;
		var json = ["Male", "Female"];
		json = json.map(i => i + "_" + jsonpath);
	} else if(type == "Base Stats") {
		if(Generation <= 1) {
			var jsonpath = JSONPath_BaseStats;
			var json = ["HP", "Attack", "Defense", "Special", "Speed", "Total"];
			json = json.map(i => i + "_" + jsonpath);
		} else {
			var jsonpath = JSONPath_BaseStats;
			var json = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"];
			json = json.map(i => i + "_" + jsonpath);
		}
	} else if(type == "EV Yield") {
		if(Generation <= 1) {
			var jsonpath = JSONPath_EVYield;
			var json = ["HP", "Attack", "Defense", "Special", "Speed", "Total"];
			json = json.map(i => i + "_" + jsonpath);
		} else {
			var jsonpath = JSONPath_EVYield;
			var json = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"];
			json = json.map(i => i + "_" + jsonpath);
		}
	} else if(type == "Held Item") {
		var jsonpath = JSONPath_HeldItem;
		var json = JSONPath_HeldItemPercentage;
		json = json.map(i => i + "_" + jsonpath);
	}
	if(id == undefined) {
		idpath.innerText = "";
		idpath.style.display = "none";
	} else if(id.includes("%")) {
		idpath.innerText = id;
		idpath.style.display = "unset";
	} else {
		idpath.innerText = "#" + id;
		idpath.style.display = "unset";
	}
	if(style == "Total") {
		titlepath.innerHTML = type + "<br>" + title;
	} else if(type == "Catch Rate" || type == "Experience Yield" || type == "Leveling Rate" || type == "Base Stats" || type == "EV Yield") {
		if(additional == undefined) {
			titlepath.innerHTML = type + "<br>" + title;
		} else {
			titlepath.innerHTML = type + " " + additional + "<br>" + title;
		}
	} else if(type == "Hatch Rate") {
		titlepath.innerHTML = "Egg Cycles<br>" + title;
	} else if(type == "Gender Ratio") {
		titlepath.innerHTML = type + "<br>" + "<span title='" + abbreviation + "'>" + alteration + "</span>";
	} else {
		titlepath.innerText = title;
	}
	if(icon != undefined) {
		iconpath.style.display = "unset";
		iconpath.src = icon;
	} else {
		iconpath.style.display = "none";
	}
	iconpath.title = title;
	descriptionpath.innerText = description;
	if(description == undefined) {
		descriptionpath.style.display = "none";
	} else {
		descriptionpath.style.display = "flex";
	}
	var result = [];
	if(style == "Single") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][json[q]] == title) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {
							return e.ID;
						}).indexOf(arr[u]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable") {
						var obj = new Object();
						obj["Pokémon"] = arr[u]["Pokémon"];
						obj["Form"] = finaldataPokémonForm[u]["Form_" + JSONPath_Form];
						obj["Variant"] = arr[u]["Variant"];
						obj["File"] = finaldataPokémon[u]["File_" + JSONPath_Path];
						if(finaldataPokémon[u]["Folder_" + JSONPath_Path] == undefined) {
							obj["Folder"] = "";
						} else {
							obj["Folder"] = finaldataPokémon[u]["Folder_" + JSONPath_Path];
						}
						for(var y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						if(type == "Catch Rate") {
							if(Generation == 1) {
								obj["Percentage"] = Math.round(((Math.min(parseInt(arr[u][json[q]]) + 1, 256)) / 256 * (85 + 1 / 256) / 256 * 100) * 10) / 10 + "%";
							}
							if(Generation == 2) {
								obj["Percentage"] = Math.round(((Math.max(parseInt(arr[u][json[q]]) / 3, 1) + 1) / 256 * 100) * 10) / 10 + "%";
							}
							if(Generation == 3 || Generation == 4) {
								obj["Percentage"] = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(arr[u][json[q]]) / 3))) / 65536) ** 4 * 100) * 10) / 10 + "%";
							}
							if(Generation >= 5) {
								obj["Percentage"] = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(arr[u][json[q]]) / 3))) / 65536) ** 3 * 100) * 10) / 10 + "%";
							}
						}
						result[u] = obj;
					}
				}
			}
		}
	} else if(style == "Multiple") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][additional + "_" + jsonpath] == title) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {
							return e.ID;
						}).indexOf(arr[u]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable") {
						var obj = new Object();
						obj["Pokémon"] = arr[u]["Pokémon"];
						obj["Form"] = finaldataPokémonForm[u]["Form_" + JSONPath_Form];
						obj["Variant"] = arr[u]["Variant"];
						obj["File"] = finaldataPokémon[u]["File_" + JSONPath_Path];
						if(finaldataPokémon[u]["Folder_" + JSONPath_Path] == undefined) {
							obj["Folder"] = "";
						} else {
							obj["Folder"] = finaldataPokémon[u]["Folder_" + JSONPath_Path];
						}
						for(var y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
	} else if(style == "Total") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][json[q]] != undefined) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {
							return e.ID;
						}).indexOf(arr[u]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable") {
						var obj = new Object();
						obj["Pokémon"] = arr[u]["Pokémon"];
						obj["Form"] = finaldataPokémonForm[u]["Form_" + JSONPath_Form];
						obj["Variant"] = arr[u]["Variant"];
						obj["File"] = finaldataPokémon[u]["File_" + JSONPath_Path];
						if(finaldataPokémon[u]["Folder_" + JSONPath_Path] == undefined) {
							obj["Folder"] = "";
						} else {
							obj["Folder"] = finaldataPokémon[u]["Folder_" + JSONPath_Path];
						}
						for(var y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
		result.sort(function(a, b) {
			return b[additional + "_" + jsonpath] - a[additional + "_" + jsonpath];
		});
	} else if(style == "Custom1") {
		for(var q = 0; q < json.length; q++) {
			for(var u = 0; u < arr.length; u++) {
				var condition;
				var abbreviation2;
				if(abbreviation == "Very High") {
					condition = parseInt(arr[u][json[q]]) >= 300;
					abbreviation2 = "Very High";
				}
				if(abbreviation == "High") {
					condition = parseInt(arr[u][json[q]]) >= 200 && parseInt(arr[u][json[q]]) <= 299;
					abbreviation2 = "High";
				}
				if(abbreviation == "Medium") {
					condition = parseInt(arr[u][json[q]]) >= 100 && parseInt(arr[u][json[q]]) <= 199;
					abbreviation2 = "Medium";
				}
				if(abbreviation == "Low") {
					condition = parseInt(arr[u][json[q]]) >= 50 && parseInt(arr[u][json[q]]) <= 99;
					abbreviation2 = "Low";
				}
				if(abbreviation == "Very Low") {
					condition = parseInt(arr[u][json[q]]) >= 0 && parseInt(arr[u][json[q]]) <= 49;
					abbreviation2 = "Very Low";
				}
				if(condition) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {
							return e.ID;
						}).indexOf(arr[u]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable") {
						var obj = new Object();
						obj["Pokémon"] = arr[u]["Pokémon"];
						obj["Form"] = finaldataPokémonForm[u]["Form_" + JSONPath_Form];
						obj["Variant"] = arr[u]["Variant"];
						obj["Category"] = abbreviation2;
						obj["File"] = finaldataPokémon[u]["File_" + JSONPath_Path];
						if(finaldataPokémon[u]["Folder_" + JSONPath_Path] == undefined) {
							obj["Folder"] = "";
						} else {
							obj["Folder"] = finaldataPokémon[u]["Folder_" + JSONPath_Path];
						}
						for(var y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
		result.sort(function(a, b) {
			return b[json[0]] - a[json[0]];
		});
	} else if(style == "Custom2") {
		for(var q = 0; q < json.length; q++) {
			for(var u = 0; u < arr.length; u++) {
				var alteration2;
				var abbreviation2;
				if(arr[u][json[0]] == "1" && arr[u][json[1]] == "0") { // Always Male
					alteration2 = "<span name='Male'>♂</span> 1 : 0 <span name='Female'>♀</span>";
					abbreviation2 = "Always Male";
				} else if(arr[u][json[0]] == "7" && arr[u][json[1]] == "1") { // Very Often Male
					alteration2 = "<span name='Male'>♂</span> 7 : 1 <span name='Female'>♀</span>";
					abbreviation2 = "Very Often Male";
				} else if(arr[u][json[0]] == "3" && arr[u][json[1]] == "1") { // Often Male
					alteration2 = "<span name='Male'>♂</span> 3 : 1 <span name='Female'>♀</span>";
					abbreviation2 = "Often Male";
				} else if(arr[u][json[0]] == "1" && arr[u][json[1]] == "1") { // Equal Ratio
					alteration2 = "<span name='Male'>♂</span> 1 : 1 <span name='Female'>♀</span>";
					abbreviation2 = "Equal Ratio";
				} else if(arr[u][json[0]] == "1" && arr[u][json[1]] == "3") { // Often Female
					alteration2 = "<span name='Male'>♂</span> 1 : 3 <span name='Female'>♀</span>";
					abbreviation2 = "Often Female";
				} else if(arr[u][json[0]] == "1" && arr[u][json[1]] == "7") { // Very Often Female
					alteration2 = "<span name='Male'>♂</span> 1 : 7 <span name='Female'>♀</span>";
					abbreviation2 = "Very Often Female";
				} else if(arr[u][json[0]] == "0" && arr[u][json[1]] == "1") { // Always Female
					alteration2 = "<span name='Male'>♂</span> 0 : 1 <span name='Female'>♀</span>";
					abbreviation2 = "Always Female";
				} else if(arr[u][json[0]] == "0" && arr[u][json[1]] == "0") { // Genderless
					alteration2 = "<span name='Male'>♂</span> 0 : 0 <span name='Female'>♀</span>";
					abbreviation2 = "Genderless";
				}
				if(alteration == alteration2) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) {
							return e.ID;
						}).indexOf(arr[u]["ID"])]["Filter_" + JSONPath_Area] != "Unobtainable") {
						var obj = new Object();
						obj["Pokémon"] = arr[u]["Pokémon"];
						obj["Form"] = finaldataPokémonForm[u]["Form_" + JSONPath_Form];
						obj["Variant"] = arr[u]["Variant"];
						obj["Alteration"] = alteration2;
						obj["Abbreviation"] = abbreviation2;
						obj["File"] = finaldataPokémon[u]["File_" + JSONPath_Path];
						if(finaldataPokémon[u]["Folder_" + JSONPath_Path] == undefined) {
							obj["Folder"] = "";
						} else {
							obj["Folder"] = finaldataPokémon[u]["Folder_" + JSONPath_Path];
						}
						for(var y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
		result.sort(function(a, b) {
			return b[json[0]] - a[json[0]];
		});
	}
	result = result.filter(value => Object.keys(value).length !== 0);
	if(icon == undefined) {
		for(u = 0; u < result.length; u++) {
			var li = document.createElement("li");
			var span = document.createElement("span");
			if(type == "Ability") {
				if(Generation <= 4) {
					li.setAttribute("name", "2");
				} else {
					li.setAttribute("name", "3");
				}
			}
			var img = document.createElement("img");
			if(result[u]["Form"] != undefined) {
				img.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(result[u]["Form"]) + ".png";
				img.title = result[u]["Form"];
				img.value = getPokémonInt(result[u]["Form"]);
			} else {
				img.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(result[u]["Pokémon"]) + ".png";
				img.title = result[u]["Pokémon"];
				img.value = getPokémonInt(result[u]["Pokémon"]);
			}
			img.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			if(result[u]["Pokémon"] == getPokémonName(getIntID("", x))) {
				li.classList.add("select");
			}
			img.addEventListener("click", modalData);
			ul.appendChild(li);
			li.appendChild(span);
			span.appendChild(img);
			if(type == "Gender Ratio") {
				var p = document.createElement("p");
				p.title = result[u]["Abbreviation"];
				if(result[u]["Category"] == formula) {
					p.classList.add("select");
				}
				if(result[u]["Alteration"] != undefined) {
					p.innerHTML = result[u]["Alteration"];
				} else {
					p.innerText = "–";
				}
				li.appendChild(p);
			} else {
				for(q = 0; q < json.length; q++) {
					var p = document.createElement("p");
					if(type == "Hatch Rate" && q == 0) {
						p.title = "Egg Cycles";
					} else if(type == "Hatch Rate" && q == 1) {
						p.title = "Steps";
					} else if(type == "Base Stats" || type == "EV Yield") {
						p.title = json[q].split("_")[0];
						p.setAttribute("name", "stat" + json[q].split("_")[0]);
					} else if(json[q].includes("_") && type != "Base Stats" || json[q].includes("_") && type != "EV Yield") {
						p.title = json[q].split("_")[0] + " " + type;
					} else if(type == "Catch Rate") {
						if(q == 0) {
							p.title = type;
						} else {
							if(result[u]["Form"] != undefined) {
								p.title = "When thrown at a full health " + result[u]["Form"] + " with an ordinary Poké Ball.";
							} else {
								p.title = "When thrown at a full health " + result[u]["Pokémon"] + " with an ordinary Poké Ball.";
							}
						}
					} else if(type == "Experience Yield") {
						if(q == 0) {
							p.title = type;
						} else {
							p.title = type + " Category";
						}
					} else {
						p.title = type;
					}
					if(style == "Multiple") {
						if(result[u][json[q]] == title && json[q] == additional + "_" + jsonpath) {
							p.classList.add("select");
						}
					} else if(style == "Total") {
						if(json[q] == additional + "_" + jsonpath) {
							p.classList.add("select");
						}
					} else if(type == "Catch Rate" || type == "Hatch Rate" || type == "Experience Yield") {
						if(result[u][json[q]] == title || result[u][json[q]] == formula || result[u][json[q]] == abbreviation) {
							p.classList.add("select");
						}
					} else {
						if(result[u][json[q]] == title) {
							p.classList.add("select");
						}
					}
					if(type != "Type") {
						if(type == "Egg Group") {
							if(result[u][json[q]] != undefined) {
								p.innerText = result[u][json[q]];
								p.setAttribute("name", "egg" + result[u][json[q]]);
							} else {
								p.innerText = "–";
							}
						} else {
							if(result[u][json[q]] != undefined) {
								p.innerText = result[u][json[q]];
								if(type == "Ability") {
									p.setAttribute("name", "Ability");
									p.addEventListener("click", dataRedirect);
									p.classList.add("active");
								}
							} else {
								p.innerText = "–";
							}
						}
					} else {
						var img2 = document.createElement("img");
						if(result[u][json[q]] != undefined) {
							img2.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + result[u][json[q]] + ".png";
							img2.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
						}
						p.appendChild(img2);
					}
					li.appendChild(p);
				}
			}
		}
	} else {
		for(u = 0; u < result.length; u++) {
			var li = document.createElement("li");
			var span = document.createElement("span");
			var img = document.createElement("img");
			if(result[u]["Form"] != undefined) {
				img.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(result[u]["Form"]) + ".png";
				img.title = result[u]["Form"];
				img.value = getPokémonInt(result[u]["Form"]);
			} else {
				img.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(result[u]["Pokémon"]) + ".png";
				img.title = result[u]["Pokémon"];
				img.value = getPokémonInt(result[u]["Pokémon"]);
			}
			if(type == "Held Item") {
				li.setAttribute("name", json.length);
			}
			img.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			if(result[u]["Pokémon"] == getPokémonName(getIntID(x, ""))) {
				img.classList.add("select");
			}
			img.addEventListener("click", modalData);
			ul.appendChild(li);
			li.appendChild(span);
			span.appendChild(img);
			for(q = 0; q < json.length; q++) {
				var p = document.createElement("p");
				var span2 = document.createElement("span");
				var pimg = document.createElement("img");
				if(result[u][json[q]] != undefined) {
					pimg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + result[u][json[q]] + ".png";
                    pimg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
					pimg.title = result[u][json[q]];
					if(json[q].includes("_")) {
						span2.innerText = json[q].split("_")[0];
					} else {
						span2.innerText = json[q];
					}
					pimg.setAttribute("name", "Item");
					pimg.addEventListener("click", dataRedirect);
					pimg.classList.add("active");
				} else {
					span2.innerText = "–";
					pimg.style.display = "none";
				}
				p.title = json[q].split("_")[0];
				if(result[u][json[q]] == title) {
					pimg.classList.add("select");
				}
				if(result[u][json[q]] == title && json[q].split("_")[0] == id) {
					span2.classList.add("select");
					li.classList.add("select");
				}
				li.appendChild(p);
				p.appendChild(span2);
				p.appendChild(pimg);
			}
		}
	}
	ul.querySelector(":scope > li.select").scrollIntoView();
}

function rememberVariant() {
	var target = event.currentTarget;
	if(target.checked == false) {
		localStorage.resetCheck = JSON.stringify(target.getAttribute("id"));
	}
}
var variantRotation;

function variantSelector() {
	var variants = [];
	if(document.querySelectorAll("#reset-aside1 div > input:checked").length >= 1) {
		var inputs = document.querySelectorAll("#reset-aside1 div > input");
		var labels = document.querySelectorAll("#reset-aside1 div > label");
		for(q = 0; q < inputs.length; q++) {
			if(inputs[q].checked == true) {
				variants.push(labels[q].innerHTML.replaceAll("<span></span>", ""))
			} else {
				variants = variants.filter(item => item != labels[q].innerHTML.replaceAll("<span></span>", ""));
			}
		}
		imgType();
		resizeDiv();
		dexSwitch();
		memoryCheckbox("contain");
		document.getElementById("searchbar").value = "";
		$("body").removeClass("modal-open");
		$(".reset-modal-outer.open").removeClass("open");
	} else {
		if(variantRotation != true && localStorage.resetCheck != undefined) {
			if(document.getElementById(localStorage.resetCheck.replaceAll('"', '')) != undefined) {
				document.getElementById(localStorage.resetCheck.replaceAll('"', '')).click();
				//variantSelector();
			}
		} else if(variantRotation != true && localStorage.resetCheck == undefined) {
			if(document.body.contains(document.querySelector("#reset-aside1 div input:first-child"))) {
				document.querySelector("#reset-aside1 div input:first-child").click();
				//variantSelector();
			}
		}
		if(document.querySelector("#reset-aside1 div button") != undefined) {
			document.querySelector("#reset-aside1 div button").animate([{
				transform: 'translateX(0%)'
			}, {
				transform: 'translateX(1%)'
			}, {
				transform: 'translateX(0%)'
			}, {
				transform: 'translateX(-1%)'
			}, {
				transform: 'translateX(0%)'
			}], {
				duration: 200,
				easing: "linear",
				iterations: 1
			});
		}
	}
	variantRotation = true;
}

function dataRedirect() {
	var type = (this.getAttribute("name")).toLowerCase();
	var x;
	var typevariant;
	if(this.innerHTML != undefined && this.innerHTML != "") {
		x = (this.innerHTML).toLowerCase();
	} else if(this.getAttribute("title") != undefined) {
		x = (this.getAttribute("title")).toLowerCase();
	}
	if(type == "map") {
		typevariant = type;
	} else if(type == "ability") {
		typevariant = "abilities";
	} else {
		typevariant = type + "s";
	}
	typevariant = typevariant.charAt(0).toUpperCase() + typevariant.slice(1);
	if(document.querySelector(".data-modal-outer.open") != undefined) {
		document.querySelector(".data-modal-outer.open").classList.remove("open");
	}
	document.querySelector("#navigation > input[value='" + typevariant + "']").click();
	document.querySelector('#' + type + '-options > label[data-search-name="' + x + '"]').click();
	document.querySelector('#' + type + '-options > label[data-search-name="' + x + '"]').scrollIntoView();
}

function returnData(id, type, additional) {
	var id;
	var arr;
	var type;
	var additional;
	var column;
	var check;
	var result = [];
	if(type.includes("Type")) {
		arr = finaldataPokémonType;
		column = ["Primary", "Secondary"];
		column = column.map(i => i + "_" + JSONPath_Type);
	} else if(type.includes("Debut")) {
		arr = finaldataPokémon;
		column = ["Debut"];
	} else if(type.includes("Category")) {
		arr = finaldataPokémonCategory;
		column = JSONPath_Category;
	} else if(type.includes("Pokédex Entry")) {
		arr = finaldataPokémonPokédexEntry;
		column = JSONPath_PokédexEntry;
	} else if(type.includes("Ability")) {
		arr = finaldataPokémonAbility;
		if(Generation >= 5) {
			column = ["Primary", "Secondary", "Hidden"];
		} else {
			column = ["Primary", "Secondary"];
		}
		column = column.map(i => i + "_" + JSONPath_Ability);
	} else if(type.includes("Catch Rate")) {
		arr = finaldataPokémonCatchRate;
		column = JSONPath_CatchRate;
	} else if(type.includes("Hatch Rate")) {
		arr = finaldataPokémonHatchRate;
		column = ["Egg Cycle_" + JSONPath_HatchRateEggCycle, "Steps_" + JSONPath_HatchRateSteps];
	} else if(type.includes("Gender Ratio")) {
		arr = finaldataPokémonGenderRatio;
		column = ["Male", "Female"];
		column = column.map(i => i + "_" + JSONPath_GenderRatio);
	} else if(type.includes("Egg Group")) {
		arr = finaldataPokémonEggGroup;
		column = ["Primary", "Secondary"];
		column = column.map(i => i + "_" + JSONPath_EggGroup);
	} else if(type.includes("Experience Yield")) {
		arr = finaldataPokémonExperienceYield;
		column = JSONPath_ExperienceYield;
	} else if(type.includes("Leveling Rate")) {
		arr = finaldataPokémonLevelingRate;
		column = JSONPath_LevelingRate;
	} else if(type.includes("Held Item")) {
		arr = finaldataPokémonHeldItem;
		column = JSONPath_HeldItemPercentage;
		column = column.map(i => i + "_" + JSONPath_HeldItem);
	} else if(type.includes("Base Stats HP")) {
		arr = finaldataPokémonBaseStats;
		column = "HP" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Attack")) {
		arr = finaldataPokémonBaseStats;
		column = "Attack" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Defense")) {
		arr = finaldataPokémonBaseStats;
		column = "Defense" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Sp. Atk")) {
		arr = finaldataPokémonBaseStats;
		column = "Sp. Atk" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Sp. Def")) {
		arr = finaldataPokémonBaseStats;
		column = "Sp. Def" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Speed")) {
		arr = finaldataPokémonBaseStats;
		column = "Speed" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Total")) {
		arr = finaldataPokémonBaseStats;
		column = "Total" + "_" + JSONPath_BaseStats;
	} else if(type.includes("EV Yield HP")) {
		arr = finaldataPokémonEVYield;
		column = "HP" + "_" + JSONPath_EVYield;
	} else if(type.includes("EV Yield Attack")) {
		arr = finaldataPokémonEVYield;
		column = "Attack" + "_" + JSONPath_EVYield;
	} else if(type.includes("EV Yield Defense")) {
		arr = finaldataPokémonEVYield;
		column = "Defense" + "_" + JSONPath_EVYield;
	} else if(type.includes("EV Yield Sp. Atk")) {
		arr = finaldataPokémonEVYield;
		column = "Sp. Atk" + "_" + JSONPath_EVYield;
	} else if(type.includes("EV Yield Sp. Def")) {
		arr = finaldataPokémonEVYield;
		column = "Sp. Def" + "_" + JSONPath_EVYield;
	} else if(type.includes("EV Yield Speed")) {
		arr = finaldataPokémonEVYield;
		column = "Speed" + "_" + JSONPath_EVYield;
	} else if(type.includes("EV Yield Total")) {
		arr = finaldataPokémonEVYield;
		column = "Total" + "_" + JSONPath_EVYield;
	}
	for(var i = 0; i < arr.length; i++) {
		if(i == id) {
			if(Array.isArray(column)) {
				for(var q = 0; q < column.length; q++) {
					result.push(arr[i][column[q]]);
				}
			} else {
				result.push(arr[i][column]);
			}
		}
	}
	for(var i = 0; i < result.length; i++) {
		if(result[i] == undefined) {
			check = true;
		} else {
			check = false;
			break;
		}
	}
	if(check == true) {
		result = [];
		for(var i = 0; i < arr.length; i++) {
			if(i == id) {
				if(Array.isArray(column)) {
					for(var q = 0; q < column.length; q++) {
						result.push(arr[arr.map(function(e) {
							return e.ID;
						}).indexOf(arr[i]["ID"])][column[q]]);
					}
				} else {
					result.push(arr[arr.map(function(e) {
						return e.ID;
					}).indexOf(arr[i]["ID"])][column]);
				}
			}
		}
	}
	if(additional.includes("lower")) {
		if(result.length >= 1 && result != undefined) {
			result = result.map(element => {
				if(element != undefined && isNaN(element)) {
					return element.toLowerCase();
				} else {
					return element;
				}
			});
		}
	}
	if(additional.includes("upper")) {
		if(result.length >= 1 && result != undefined) {
			result = result.map(element => {
				if(element != undefined && isNaN(element)) {
					return element.toUpperCase();
				} else {
					return element;
				}
			});
		}
	}
	if(additional.includes("undefined")) {
		if(result.length >= 1 && result != undefined) {
			result = result.filter(function(element) {
				return element !== undefined;
			});
		}
	}
	return result;
}

function loadData() {
	var target = event.currentTarget;
	var i = target.getAttribute("value");
	var id = getIntID(i, "");
	var portrait = document.querySelector("#data-modal" + id + " .data-portrait");
	var category = document.querySelector("#data-modal" + id + " .data-category");
	var debut = document.querySelector("#data-modal" + id + " .data-debut");
	var name = document.querySelector("#data-modal" + id + " .data-name");
	var type = document.querySelector("#data-modal" + id + " .data-type");
	var description = document.querySelector("#data-modal" + id + " .data-description");
	var basestats = document.querySelector("#data-modal" + id + " .data-stats ul[name='basestats']");
	var evyield = document.querySelector("#data-modal" + id + " .data-stats ul[name='evyield']");
	var ability = document.querySelector("#data-modal" + id + " .data-sidebar-ability");
	var catchrate = document.querySelector("#data-modal" + id + " .data-sidebar-catchrate");
	var hatchrate = document.querySelector("#data-modal" + id + " .data-sidebar-hatchrate");
	var genderratio = document.querySelector("#data-modal" + id + " .data-sidebar-genderratio");
	var egggroup = document.querySelector("#data-modal" + id + " .data-sidebar-egggroup");
	var expyield = document.querySelector("#data-modal" + id + " .data-sidebar-expyield");
	var levelrate = document.querySelector("#data-modal" + id + " .data-sidebar-levelrate");
	var helditem = document.querySelector("#data-modal" + id + " .data-sidebar-helditem");
	category.innerText = '"' + returnData(i, "Category", "")[0] + ' Pokémon"';
	if(returnData(i, "Pokédex Entry", "")[0] != undefined) {
		description.querySelector(':scope p').innerText = returnData(i, "Pokédex Entry", "")[0];
	}
	if(returnData(i, "Debut", "")[0].includes("-")) {
		debut.innerText = "Introduced in " + returnData(i, "Debut", "")[0].split("-")[0];
	} else {
		debut.innerText = "Introduced in " + returnData(i, "Debut", "")[0];
	}
	if(Ability.length >= 1) {
		if(returnData(i, "Ability", "")[0] != undefined) {
			ability.querySelector(':scope *[title="Primary Ability"]').innerText = returnData(i, "Ability", "")[0];
			ability.querySelector(':scope *[title="Primary Ability"]').style.display = "flex";
		} else {
			ability.querySelector(':scope *[title="Primary Ability"]').style.display = "none";
		}
		if(returnData(i, "Ability", "")[1] != undefined) {
			ability.querySelector(':scope *[title="Secondary Ability"]').innerText = returnData(i, "Ability", "")[1];
			ability.querySelector(':scope *[title="Secondary Ability"]').style.display = "flex";
		} else {
			ability.querySelector(':scope *[title="Secondary Ability"]').style.display = "none";
		}
		if(Ability.length >= 3) {
			if(returnData(i, "Ability", "")[2] != undefined) {
				ability.querySelector(':scope *[title="Hidden Ability"]').innerText = returnData(i, "Ability", "")[2];
				ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.style.display = "flex";
			} else {
				ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.style.display = "none";
			}
		}
	}
	genderratio.querySelector(':scope > span').style.display = "unset";
	if(returnData(i, "Gender Ratio", "")[0] == "1" && returnData(i, "Gender Ratio", "")[1] == "0") { // Always Male
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "100% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "0% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "1 : 0");
	} else if(returnData(i, "Gender Ratio", "")[0] == "7" && returnData(i, "Gender Ratio", "")[1] == "1") { // Very Often Male
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "87.5% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "12.5% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "7 : 1");
	} else if(returnData(i, "Gender Ratio", "")[0] == "3" && returnData(i, "Gender Ratio", "")[1] == "1") { // Often Male
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "75% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "25% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "3 : 1");
	} else if(returnData(i, "Gender Ratio", "")[0] == "1" && returnData(i, "Gender Ratio", "")[1] == "1") { // Equal Ratio
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "50% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "50% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "1 : 1");
	} else if(returnData(i, "Gender Ratio", "")[0] == "1" && returnData(i, "Gender Ratio", "")[1] == "3") { // Often Female
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "25% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "75% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "1 : 3");
	} else if(returnData(i, "Gender Ratio", "")[0] == "1" && returnData(i, "Gender Ratio", "")[1] == "7") { // Very Often Female
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "12.5% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "87.5% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "1 : 7");
	} else if(returnData(i, "Gender Ratio", "")[0] == "0" && returnData(i, "Gender Ratio", "")[1] == "1") { // Always Female
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "0% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "100% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "0 : 1");
	} else if(returnData(i, "Gender Ratio", "")[0] == "0" && returnData(i, "Gender Ratio", "")[1] == "0") { // Genderless
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title", "0% Male");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title", "0% Female");
		genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title", "Genderless");
		genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value", "0 : 0");
	}
	levelrate.querySelector(':scope *[dataname="value"]').innerText = returnData(i, "Leveling Rate", "")[0];
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i, "Leveling Rate", "")[0]);
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("title", "Time approximated for " + getPokémonName(i) + " to Level Up.");
	name.innerText = getPokémonName(i);
	if(returnData(i, "Hatch Rate", "")[1] != undefined) {
		hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i, "Hatch Rate", "")[1] + " Steps";
		hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title", "Steps required to hatch an egg containing " + getPokémonName(i) + ".");
	} else {
		hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i, "Hatch Rate", "")[0] + " Egg Cycles";
		hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title", "Egg Cycles required to hatch an egg containing " + getPokémonName(i) + ".");
	}
	hatchrate.querySelector(':scope *[dataname="value"').setAttribute("value", returnData(i, "Hatch Rate", "")[0]);
	if(Egg == true) {
		if(returnData(i, "Egg Group", "")[0] != undefined) {
			egggroup.querySelector(':scope span[name="Primary"]').style.display = "flex";
			egggroup.querySelector(':scope span[name="Primary"]').querySelector(':scope *[dataname="value"').setAttribute("name", "egg" + returnData(i, "Egg Group", "")[0]);
			egggroup.querySelector(':scope span[name="Primary"]').querySelector(':scope *[dataname="value"').innerText = returnData(i, "Egg Group", "")[0];
		} else {
			egggroup.querySelector(':scope span[name="Primary"]').style.display = "none";
		}
		if(returnData(i, "Egg Group", "")[1] != undefined) {
			egggroup.querySelector(':scope span[name="Secondary"]').style.display = "flex";
			egggroup.querySelector(':scope span[name="Secondary"]').querySelector(':scope *[dataname="value"').setAttribute("name", "egg" + returnData(i, "Egg Group", "")[1]);
			egggroup.querySelector(':scope span[name="Secondary"]').querySelector(':scope *[dataname="value"').innerText = returnData(i, "Egg Group", "")[1];
		} else {
			egggroup.querySelector(':scope span[name="Secondary"]').style.display = "none";
		}
	}
	var baseev = ["Base Stats", "EV Yield"];
	var sts = [];
	for(var y = 0; y < baseev.length; y++) {
		for(var q = 0; q < Stats.length; q++) {
			if(y == 0) {
				var arr = finaldataPokémonBaseStats;
				var json = JSONPath_BaseStats;
				var taq = basestats;
			} else if(y == 1) {
				var arr = finaldataPokémonEVYield;
				var json = JSONPath_EVYield;
				var taq = evyield;
			}
			var temp1 = baseev[y].toLowerCase().replace(" ", "").replace(".", "");
			var temp2 = Stats[q].toLowerCase().replace(" ", "").replace(".", "");
			for(var u = 0; u < finaldataPokémon.length; u++) {
				if(finaldataPokémon[u][JSONPath_Reference] == "true") {
					if(arr[u][Stats[q] + "_" + json] != undefined && arr[u][Stats[q] + "_" + json] != "") {
						sts.push(parseInt(arr[u][Stats[q] + "_" + json]));
					}
				}
			}
			taq.querySelector(':scope .' + temp1 + '-' + temp2).querySelector(':scope *[dataname="value"]').innerHTML = returnData(i, baseev[y] + " " + Stats[q], "")[0] + "&nbsp;&nbsp;";
			taq.querySelector(':scope .' + temp1 + '-' + temp2).querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i, baseev[y] + " " + Stats[q], "")[0]);
			taq.querySelector(':scope .' + temp1 + '-' + temp2).querySelector(':scope *[dataname="value"]').style.width = returnData(i, baseev[y] + " " + Stats[q], "")[0] / Math.max.apply(Math, sts) * 100 + "%";
			sts = [];
		}
	}
	if(returnData(i, "Experience Yield", "")[0] >= 300) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Very High";
	}
	if(returnData(i, "Experience Yield", "")[0] >= 200 && returnData(i, "Experience Yield", "")[0] <= 299) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "High";
	}
	if(returnData(i, "Experience Yield", "")[0] >= 100 && returnData(i, "Experience Yield", "")[0] <= 199) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Medium";
	}
	if(returnData(i, "Experience Yield", "")[0] >= 50 && returnData(i, "Experience Yield", "")[0] <= 99) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Low";
	}
	if(returnData(i, "Experience Yield", "")[0] >= 0 && returnData(i, "Experience Yield", "")[0] <= 49) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Very Low";
	}
	expyield.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i, "Experience Yield", "")[0]);
	expyield.querySelector(':scope *[dataname="value"]').setAttribute("title", "Experience gained approximated upon defeating " + getPokémonName(i) + " in battle.");
	if(getPokémonMediaPath(getPokémonName(i)) != undefined) {
		portrait.querySelector(":scope img").src = "./media/Images/Pokémon/Art/HOME/" + getPokémonMediaPath(getPokémonName(i)) + ".png";
	}
	if(returnData(i, "Catch Rate", "") != undefined) {
		var catchRateFormula;
		if(Generation == 1) {
			catchRateFormula = Math.round(((Math.min(parseInt(returnData(i, "Catch Rate", "")) + 1, 256)) / 256 * (85 + 1 / 256) / 256 * 100) * 10) / 10;
		}
		if(Generation == 2) {
			catchRateFormula = Math.round(((Math.max(parseInt(returnData(i, "Catch Rate", "")) / 3, 1) + 1) / 256 * 100) * 10) / 10;
		}
		if(Generation == 3 || Generation == 4) {
			catchRateFormula = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(returnData(i, "Catch Rate", "")) / 3))) / 65536) ** 4 * 100) * 10) / 10;
		}
		if(Generation >= 5) {
			catchRateFormula = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(returnData(i, "Catch Rate", "")) / 3))) / 65536) ** 3 * 100) * 10) / 10;
		}
		catchrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i, "Catch Rate", ""));
		catchrate.querySelector(':scope *[dataname="value"]').setAttribute("title", "When thrown at a full health " + getPokémonName(i) + " with an ordinary Poké Ball.");
		catchrate.querySelector(':scope *[dataname="value"]').innerText = catchRateFormula + "%";
	}
	for(var q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
		if(returnData(i, "Held Item", "")[q] != undefined) {
			helditem.querySelector(':scope > div img[name="' + JSONPath_HeldItemPercentage[q] + '"]').setAttribute("src", "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + returnData(i, "Held Item", "")[q] + ".png");
			helditem.querySelector(':scope > div img[name="' + JSONPath_HeldItemPercentage[q] + '"]').setAttribute("title", returnData(i, "Held Item", "")[q]);
			helditem.querySelector(':scope > div img[name="' + JSONPath_HeldItemPercentage[q] + '"]').style.display = "unset";
		} else {
			helditem.querySelector(':scope > div img[name="' + JSONPath_HeldItemPercentage[q] + '"]').style.display = "none";
		}
	}
	var heldcheck;
	for(var q = 0; q < returnData(i, "Held Item", "").length; q++) {
		if(returnData(i, "Held Item", "")[q] == undefined) {
			heldcheck = false;
		} else {
			heldcheck = true;
			break
		}
	}
	if(heldcheck == false) {
		helditem.parentElement.style.display = "none";
	} else {
		helditem.parentElement.style.display = "flex";
	}
	if(returnData(i, "Type", "")[0] != undefined) {
		type.querySelector(":scope > span:first-child h3").style.display = "none";
		type.querySelector(":scope > span:first-child").classList.add("active");
		type.querySelector(":scope > span:first-child img").style.display = "inline";
		type.querySelector(":scope > span:first-child h3").innerText = returnData(i, "Type", "")[0];
		type.querySelector(":scope > span:first-child img").setAttribute("src", "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + returnData(i, "Type", "")[0] + ".png");
		type.querySelector(":scope > span:first-child img").setAttribute("title", returnData(i, "Type", "")[0]);
	} else {
		type.querySelector(":scope > span:first-child").classList.remove("active");
		type.querySelector(":scope > span:first-child img").style.display = "none";
	}
	if(returnData(i, "Type", "")[1] != undefined) {
		type.querySelector(":scope > span:last-child h3").style.display = "none";
		type.querySelector(":scope > span:last-child").classList.add("active");
		type.querySelector(":scope > span:last-child img").style.display = "inline";
		type.querySelector(":scope > span:last-child h3").innerText = returnData(i, "Type", "")[1];
		type.querySelector(":scope > span:last-child img").setAttribute("src", "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + returnData(i, "Type", "")[1] + ".png");
		type.querySelector(":scope > span:last-child img").setAttribute("title", returnData(i, "Type", "")[1]);
	} else {
		type.querySelector(":scope > span:last-child").classList.remove("active");
		type.querySelector(":scope > span:last-child img").style.display = "none";
	}
	if(returnData(i, "Type", "")[0] != undefined && returnData(i, "Type", "")[1] != undefined) {
		type.setAttribute("name", "2");
	} else {
		type.removeAttribute("name");
	}
	var dataAside2LearnsetUl = document.querySelector("#data-modal" + id + " .data-learnset-option > ul");
	var dataAside2LearnsetHeader = document.querySelectorAll("#data-modal" + id + " .data-learnset-option > h5 li p");
	var dataAside2LearnsetList = document.querySelectorAll("#data-modal" + id + " .data-learnset-option > ul li");
	for(u = 0; u < dataAside2LearnsetList.length; u++) {
		dataAside2LearnsetList[u].remove();
	}
	for(u = 0; u < finaldataLearnsetLevel.length; u++) {
		if(finaldataLearnsetLevel[u]["Pokémon"] == finaldataPokémon[i]["Pokémon"] && finaldataLearnsetLevel[u]["Form"] == finaldataPokémon[i]["Form"]) {
			var dataAside2LearnsetLi = document.createElement("li");
			dataAside2LearnsetUl.appendChild(dataAside2LearnsetLi);
			for(y = 0; y < dataAside2LearnsetHeader.length; y++) {
				var dataAside2LearnsetLiText = document.createElement("span");
				dataAside2LearnsetLi.appendChild(dataAside2LearnsetLiText);
				if(y == 0) {
					dataAside2LearnsetLiText.title = "Level Up";
					if(finaldataLearnsetLevel[u]["Factor"] == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = finaldataLearnsetLevel[u]["Factor"];
					}
				}
				if(y == 1) {
					dataAside2LearnsetLiText.title = "Move";
					if(finaldataLearnsetLevel[u]["Move"] == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = finaldataLearnsetLevel[u]["Move"];
						dataAside2LearnsetLiText.setAttribute("name", "move");
						dataAside2LearnsetLiText.addEventListener("click", dataRedirect);
					}
				}
				if(y == 2) {
					dataAside2LearnsetLiText.title = "Type";
					if(getMoveData(finaldataLearnsetLevel[u]["Move"], "Type") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetLevel[u]["Move"], "Type");
					}
					dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
				}
				if(y == 3) {
					dataAside2LearnsetLiText.title = "Category";
					if(getMoveData(finaldataLearnsetLevel[u]["Move"], "Category") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetLevel[u]["Move"], "Category");
					}
					dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
				}
				if(y == 4) {
					dataAside2LearnsetLiText.title = "Power";
					if(getMoveData(finaldataLearnsetLevel[u]["Move"], "Power") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetLevel[u]["Move"], "Power");
					}
				}
				if(y == 5) {
					dataAside2LearnsetLiText.title = "Accuracy";
					if(getMoveData(finaldataLearnsetLevel[u]["Move"], "Accuracy") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetLevel[u]["Move"], "Accuracy");
					}
				}
				if(y == 6) {
					dataAside2LearnsetLiText.title = "PP";
					if(getMoveData(finaldataLearnsetLevel[u]["Move"], "PP Min") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerHTML = getMoveData(finaldataLearnsetLevel[u]["Move"], "PP Min") + " <span>(max. " + getMoveData(finaldataLearnsetLevel[u]["Move"], "PP Max") + ")</span>";
					}
				}
			}
		}
	}
	for(u = 0; u < finaldataLearnsetMachine.length; u++) {
		if(finaldataLearnsetMachine[u]["Pokémon"] == finaldataPokémon[i]["Pokémon"] && finaldataLearnsetMachine[u]["Form"] == finaldataPokémon[i]["Form"]) {
			var dataAside2LearnsetLi = document.createElement("li");
			dataAside2LearnsetUl.appendChild(dataAside2LearnsetLi);
			for(y = 0; y < dataAside2LearnsetHeader.length; y++) {
				var dataAside2LearnsetLiText = document.createElement("span");
				dataAside2LearnsetLi.appendChild(dataAside2LearnsetLiText);
				if(y == 0) {
					if(finaldataLearnsetMachine[u]["Machine"].includes("TM")) {
						dataAside2LearnsetLiText.title = "TM";
					} else if(finaldataLearnsetMachine[u]["Machine"].includes("HM")) {
						dataAside2LearnsetLiText.title = "HM";
					} else if(finaldataLearnsetMachine[u]["Machine"].includes("TR")) {
						dataAside2LearnsetLiText.title = "TR";
					}
					if(finaldataLearnsetMachine[u]["Machine"] == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = finaldataLearnsetMachine[u]["Machine"];
					}
				}
				if(y == 1) {
					dataAside2LearnsetLiText.title = "Move";
					if(getMachineMove(finaldataLearnsetMachine[u]["Machine"]) == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMachineMove(finaldataLearnsetMachine[u]["Machine"]);
						dataAside2LearnsetLiText.setAttribute("name", "move");
						dataAside2LearnsetLiText.addEventListener("click", dataRedirect);
					}
				}
				if(y == 2) {
					dataAside2LearnsetLiText.title = "Type";
					if(getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Type") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Type");
					}
					dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
				}
				if(y == 3) {
					dataAside2LearnsetLiText.title = "Category";
					if(getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Category") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Category");
					}
					dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
				}
				if(y == 4) {
					dataAside2LearnsetLiText.title = "Power";
					if(getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Power") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Power");
					}
				}
				if(y == 5) {
					dataAside2LearnsetLiText.title = "Accuracy";
					if(getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Accuracy") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "Accuracy");
					}
				}
				if(y == 6) {
					dataAside2LearnsetLiText.title = "PP";
					if(getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "PP Min") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerHTML = getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "PP Min") + " <span>(max. " + getMoveData(getMachineMove(finaldataLearnsetMachine[u]["Machine"]), "PP Max") + ")</span>";
					}
				}
			}
		}
	}
	for(u = 0; u < finaldataLearnsetBreed.length; u++) {
		if(finaldataLearnsetBreed[u]["Pokémon"] == finaldataPokémon[i]["Pokémon"] && finaldataLearnsetBreed[u]["Form"] == finaldataPokémon[i]["Form"]) {
			var dataAside2LearnsetLi = document.createElement("li");
			dataAside2LearnsetUl.appendChild(dataAside2LearnsetLi);
			for(y = 0; y < dataAside2LearnsetHeader.length; y++) {
				var dataAside2LearnsetLiText = document.createElement("span");
				dataAside2LearnsetLi.appendChild(dataAside2LearnsetLiText);
				if(y == 0) {
					dataAside2LearnsetLiText.title = "Parent";
					if(finaldataLearnsetBreed[u]["Parent"] == undefined) {
						dataAside2LearnsetLiText.innerText = "–";
					} else if(finaldataLearnsetBreed[u]["Parent"] == "None") {
						dataAside2LearnsetLiText.innerText = finaldataLearnsetBreed[u]["Parent"];
					} else {
						if(finaldataLearnsetBreed[u]["Parent"].includes(",")) {
							for(p = 0; p < finaldataLearnsetBreed[u]["Parent"].split(",").length; p++) {
								var dataAside2LearnsetLiImg = document.createElement("img");
								dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/' + MEDIAPath_Pokémon_Box + '/' + getPokémonMediaPath(finaldataLearnsetBreed[u]["Parent"].split(",")[p]) + '.png');
								dataAside2LearnsetLiImg.setAttribute("title", finaldataLearnsetBreed[u]["Parent"].split(",")[p]);
								dataAside2LearnsetLiImg.value = getPokémonInt(finaldataLearnsetBreed[u]["Parent"].split(",")[p]);
								dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
								dataAside2LearnsetLiImg.addEventListener("click", modalData);
							}
						} else {
							var dataAside2LearnsetLiImg = document.createElement("img");
							dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/' + MEDIAPath_Pokémon_Box + '/' + getPokémonMediaPath(finaldataLearnsetBreed[u]["Parent"]) + '.png');
							dataAside2LearnsetLiImg.setAttribute("title", finaldataLearnsetBreed[u]["Parent"]);
							dataAside2LearnsetLiImg.value = getPokémonInt(finaldataLearnsetBreed[u]["Parent"]);
							dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
							dataAside2LearnsetLiImg.addEventListener("click", modalData);
						}
					}
				}
				if(y == 1) {
					dataAside2LearnsetLiText.title = "Move";
					if(finaldataLearnsetBreed[u]["Move"] == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = finaldataLearnsetBreed[u]["Move"];
						dataAside2LearnsetLiText.setAttribute("name", "move");
						dataAside2LearnsetLiText.addEventListener("click", dataRedirect);
					}
				}
				if(y == 2) {
					dataAside2LearnsetLiText.title = "Type";
					if(getMoveData(finaldataLearnsetBreed[u]["Move"], "Type") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetBreed[u]["Move"], "Type");
					}
					dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
				}
				if(y == 3) {
					dataAside2LearnsetLiText.title = "Category";
					if(getMoveData(finaldataLearnsetBreed[u]["Move"], "Category") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetBreed[u]["Move"], "Category");
					}
					dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
				}
				if(y == 4) {
					dataAside2LearnsetLiText.title = "Power";
					if(getMoveData(finaldataLearnsetBreed[u]["Move"], "Power") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetBreed[u]["Move"], "Power");
					}
				}
				if(y == 5) {
					dataAside2LearnsetLiText.title = "Accuracy";
					if(getMoveData(finaldataLearnsetBreed[u]["Move"], "Accuracy") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerText = getMoveData(finaldataLearnsetBreed[u]["Move"], "Accuracy");
					}
				}
				if(y == 6) {
					dataAside2LearnsetLiText.title = "PP";
					if(getMoveData(finaldataLearnsetBreed[u]["Move"], "PP Min") == undefined) {
						dataAside2LearnsetLiText.innerHTML = "–";
					} else {
						dataAside2LearnsetLiText.innerHTML = getMoveData(finaldataLearnsetBreed[u]["Move"], "PP Min") + " <span>(max. " + getMoveData(finaldataLearnsetBreed[u]["Move"], "PP Max") + ")</span>";
					}
				}
			}
		}
	}
}



function partyBoxOpen() {
    var target = event.target;

    if (target.innerText == "Party") {
        if (document.querySelector('#pokémon-outer main section[name="Party"].open') != undefined) {
            document.querySelector('#pokémon-outer main section[name="Party"]').classList.remove("open");
            if (document.querySelector('#pokémon-outer main.open') != undefined) {
                document.querySelector('#pokémon-outer main').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon-outer main section[name="Party"]').classList.add("open");
            if (document.querySelector('#pokémon-outer main.open') == undefined) {
                document.querySelector('#pokémon-outer main').classList.add("open");
            }        
        }
        if (document.querySelector('#pokémon-outer main section[name="Box"].open') != undefined) {
            document.querySelector('#pokémon-outer main section[name="Box"]').classList.remove("open");
        }
    }
    else if (target.innerText == "Box") {
        if (document.querySelector('#pokémon-outer main section[name="Box"].open') != undefined) {
            document.querySelector('#pokémon-outer main section[name="Box"]').classList.remove("open");
            if (document.querySelector('#pokémon-outer main.open') != undefined) {
                document.querySelector('#pokémon-outer main').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon-outer main section[name="Box"]').classList.add("open");
            if (document.querySelector('#pokémon-outer main.open') == undefined) {
                document.querySelector('#pokémon-outer main').classList.add("open");
            }    
        }

        if (document.querySelector('#pokémon-outer main section[name="Party"].open') != undefined) {
            document.querySelector('#pokémon-outer main section[name="Party"]').classList.remove("open");
        }
    }
}



$(document).on('click', function(e) {
    if (!$(e.target).is($("#pokémon-outer > main")) && $("#pokémon-outer > main").has(e.target).length === 0) {
        $("#pokémon-outer > main.open").removeClass();
        $("#pokémon-outer > main > section.open").removeClass();
    }
});





function inputMinMax() {
    var val = parseInt(this.value);
    var min = parseInt(this.min);
    var max = parseInt(this.max);

    if(val <= min) {
        this.value = min;
    }
    else if(val >= max) {
        this.value = max;
    }
}


function partyDataSwitch() {

    var dataAll = this.parentElement.parentElement.querySelectorAll(':scope > span[name]');
    for (q = 0; q < dataAll.length; q++) {
        dataAll[q].style.display = "none";
    }

    var data = this.parentElement.parentElement.querySelector(':scope > span[name="'+this.value+'"]');
    data.style.display = "flex";

    if (this.value = data.nextElementSibling.getAttribute("name") != null) {
        this.value = data.nextElementSibling.getAttribute("name");

    }
    else {
        this.value = data.parentElement.querySelectorAll(":scope > span[name]")[0].getAttribute("name");
    }
}


function imgtyp() {
    console.log(this.value)
}

function partyExitSwitch() {




        var asides1 = this.parentElement.parentElement.parentElement.querySelectorAll(":scope > aside");
        var aside1 = this.parentElement.parentElement.parentElement.querySelector(":scope > aside:last-child");

        var asides2 = this.parentElement.parentElement.querySelectorAll(":scope > aside");
        var aside2 = this.parentElement.parentElement.querySelector(":scope > aside:first-child");

    


    if (asides1 != undefined) {
        for (q = 0; q < asides1.length; q++) {
            asides1[q].style.display = "none";
        }
    }

    if (asides2 != undefined) {
        for (q = 0; q < asides2.length; q++) {
            asides2[q].style.display = "none";
        }
    }





    if (aside1 != undefined) {
        aside1.style.display = "flex";
    }

    if (aside2 != undefined) {
        aside2.style.display = "flex";
    }

}