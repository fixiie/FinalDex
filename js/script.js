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
				img.setAttribute("value",getPokémonInt(result[u]["Form"]));
			} else {
				img.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(result[u]["Pokémon"]) + ".png";
				img.title = result[u]["Pokémon"];
				img.setAttribute("value",getPokémonInt(result[u]["Pokémon"]));
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
				img.setAttribute("value",getPokémonInt(result[u]["Form"]));
			} else {
				img.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(result[u]["Pokémon"]) + ".png";
				img.title = result[u]["Pokémon"];
				img.setAttribute("value",getPokémonInt(result[u]["Pokémon"]));
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


var variantRotation;

function variantSelector() {

    var inputs = document.querySelectorAll('#pokémon-outer > main[name="Settings"] span[name="Variant"] input:checked');

	if(inputs.length > 0) {
        var tempArr = [];
        var tempStr;
        for (var i = 0; i < inputs.length; i++) {
            tempArr.push(inputs[i].nextElementSibling.innerText)
        }
        if (tempArr.length > 1) {
            tempStr = tempArr.join(",");
        }
        else {
            tempStr = tempArr[0];
        }
        createContain(tempStr);

        memory("Save","variant","game",document.querySelectorAll('#pokémon-outer > main[name="Settings"] > span[name="Variant"] input[type="checkbox"]'));
        memory("Restore","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));
        memory("Restore","imgtype","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select'));

        imageType();
        resizeDiv();
		dexSwitch();

		document.getElementById("searchbar").value = "";
	}
    

}


function preventCheckboxZero(base) {
    var base;
    var inputs = base.querySelectorAll(":scope input:checked");

    if (!inputs.length > 0) {
        event.target.checked = true;
        
        if(event.target.nextElementSibling.tagName == "LABEL") {
            event.target.nextElementSibling.animate([
                { transform: 'translateX(0%)'},
                { transform: 'translateX(1%)'},
                { transform: 'translateX(0%)'},
                { transform: 'translateX(-1%)'},
                { transform: 'translateX(0%)'}
            ], {
                duration: 200,
                easing: "linear",
                iterations: 1
            });
        }
        
    }
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

function returnData(int, type, additional) {
	var int;
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
	} else if(type.includes("Base Friendship")) {
		arr = finaldataPokémonFriendship;
		column = JSONPath_Friendship;
	} else if(type.includes("Base Stats HP")) {
		arr = finaldataPokémonBaseStats;
		column = "HP" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Attack")) {
		arr = finaldataPokémonBaseStats;
		column = "Attack" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Defense")) {
		arr = finaldataPokémonBaseStats;
		column = "Defense" + "_" + JSONPath_BaseStats;
	} else if(type.includes("Base Stats Special")) {
		arr = finaldataPokémonBaseStats;
		column = "Special" + "_" + JSONPath_BaseStats;
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
	} else if(type.includes("EV Yield Special")) {
		arr = finaldataPokémonEVYield;
		column = "Special" + "_" + JSONPath_EVYield;
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
		if(i == int) {
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
			if(i == int) {
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
    if (Gender == true) {
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
    }
	levelrate.querySelector(':scope *[dataname="value"]').innerText = returnData(i, "Leveling Rate", "")[0];
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i, "Leveling Rate", "")[0]);
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("title", "Time approximated for " + getPokémonName(i) + " to Level Up.");
	name.innerText = getPokémonName(i);
 

	if(Egg == true) {
        if(returnData(i, "Hatch Rate", "")[1] != undefined) {
            hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i, "Hatch Rate", "")[1] + " Steps";
            hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title", "Steps required to hatch an egg containing " + getPokémonName(i) + ".");
        } else {
            hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i, "Hatch Rate", "")[0] + " Egg Cycles";
            hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title", "Egg Cycles required to hatch an egg containing " + getPokémonName(i) + ".");
        }
        hatchrate.querySelector(':scope *[dataname="value"').setAttribute("value", returnData(i, "Hatch Rate", "")[0]);

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
    if (HeldItem == true) {
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

    var learnsetArr = returnMoveSet(this.value,"");
    
	for (u = 0; u < learnsetArr.length; u++) {
        var dataAside2LearnsetLi = document.createElement("li");
        dataAside2LearnsetUl.appendChild(dataAside2LearnsetLi);

        for(y = 0; y < dataAside2LearnsetHeader.length; y++) {
            var dataAside2LearnsetLiText = document.createElement("span");
            dataAside2LearnsetLi.appendChild(dataAside2LearnsetLiText);
            if(y == 0) {
                if (learnsetArr[u]["Factor"] != undefined) {
                    dataAside2LearnsetLiText.title = "Level Up";
                    dataAside2LearnsetLiText.innerText = learnsetArr[u]["Factor"];
                }
                else if (learnsetArr[u]["Machine"] != undefined) {
                    dataAside2LearnsetLiText.title = "Machine";
                    dataAside2LearnsetLiText.innerText = learnsetArr[u]["Machine"];
                }
                else if (learnsetArr[u]["Parent"] != undefined) {
                    if(learnsetArr[u]["Parent"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Parent"].split(",").length; p++) {
                            var dataAside2LearnsetLiImg = document.createElement("img");
                            dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/' + MEDIAPath_Pokémon_Box + '/' + getPokémonMediaPath(learnsetArr[u]["Parent"].split(",")[p]) + '.png');
                            dataAside2LearnsetLiImg.setAttribute("title", learnsetArr[u]["Parent"].split(",")[p]);
                            dataAside2LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]));
                            dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
                            dataAside2LearnsetLiImg.addEventListener("click", modalData);
                        }
                    } else {
                        var dataAside2LearnsetLiImg = document.createElement("img");
                        dataAside2LearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/' + MEDIAPath_Pokémon_Box + '/' + getPokémonMediaPath(learnsetArr[u]["Parent"]) + '.png');
                        dataAside2LearnsetLiImg.setAttribute("title", learnsetArr[u]["Parent"]);
                        dataAside2LearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"]));
                        dataAside2LearnsetLiText.appendChild(dataAside2LearnsetLiImg);
                        dataAside2LearnsetLiImg.addEventListener("click", modalData);
                    }
                }
                
            }
            if(y == 1) {
                dataAside2LearnsetLiText.title = "Move";
                if(learnsetArr[u]["Move"] == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = learnsetArr[u]["Move"];
                    dataAside2LearnsetLiText.setAttribute("name", "move");
                    dataAside2LearnsetLiText.addEventListener("click", dataRedirect);
                }
            }
            if(y == 2) {
                dataAside2LearnsetLiText.title = "Type";
                if(getMoveData(learnsetArr[u]["Move"], "Type") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"], "Type");
                }
                dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
            }
            if(y == 3) {
                dataAside2LearnsetLiText.title = "Category";
                if(getMoveData(learnsetArr[u]["Move"], "Category") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"], "Category");
                }
                dataAside2LearnsetLiText.setAttribute("name", dataAside2LearnsetLiText.innerText);
            }
            if(y == 4) {
                dataAside2LearnsetLiText.title = "Power";
                if(getMoveData(learnsetArr[u]["Move"], "Power") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"], "Power");
                }
            }
            if(y == 5) {
                dataAside2LearnsetLiText.title = "Accuracy";
                if(getMoveData(learnsetArr[u]["Move"], "Accuracy") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"], "Accuracy");
                }
            }
            if(y == 6) {
                dataAside2LearnsetLiText.title = "PP";
                if(getMoveData(learnsetArr[u]["Move"], "PP Min") == undefined) {
                    dataAside2LearnsetLiText.innerHTML = "–";
                } else {
                    dataAside2LearnsetLiText.innerHTML = getMoveData(learnsetArr[u]["Move"], "PP Min") + " <span>(max. " + getMoveData(learnsetArr[u]["Move"], "PP Max") + ")</span>";
                }
            }
        }
		
	}

}



function partyBoxOpen(e) {
    var target = e.target;

    if (target.innerText == "Party") {
        if (document.querySelector('#pokémon-outer main[name="Team"] section[name="Party"].open') != undefined) {
            document.querySelector('#pokémon-outer main[name="Team"] section[name="Party"]').classList.remove("open");
            if (document.querySelector('#pokémon-outer main[name="Team"].open') != undefined) {
                document.querySelector('#pokémon-outer main[name="Team"]').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon-outer main section[name="Party"]').classList.add("open");
            if (document.querySelector('#pokémon-outer main[name="Team"].open') == undefined) {
                document.querySelector('#pokémon-outer main[name="Team"]').classList.add("open");
            }        
        }
        if (document.querySelector('#pokémon-outer main[name="Team"] section[name="Box"].open') != undefined) {
            document.querySelector('#pokémon-outer main[name="Team"] section[name="Box"]').classList.remove("open");
        }
    }
    else if (target.innerText == "Box") {
        if (document.querySelector('#pokémon-outer main[name="Team"] section[name="Box"].open') != undefined) {
            document.querySelector('#pokémon-outer main[name="Team"] section[name="Box"]').classList.remove("open");
            if (document.querySelector('#pokémon-outer main[name="Team"].open') != undefined) {
                document.querySelector('#pokémon-outer main[name="Team"]').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon-outer main[name="Team"] section[name="Box"]').classList.add("open");
            if (document.querySelector('#pokémon-outer main[name="Team"].open') == undefined) {
                document.querySelector('#pokémon-outer main[name="Team"]').classList.add("open");
            }    
        }

        if (document.querySelector('#pokémon-outer main[name="Team"] section[name="Party"].open') != undefined) {
            document.querySelector('#pokémon-outer main[name="Team"] section[name="Party"]').classList.remove("open");
        }
    }
}


/*
$(document).on('click', function(e) {
    if (!$(e.target).is($("#pokémon-outer > main[name='Team']")) && $("#pokémon-outer > main[name='Team']").has(e.target).length === 0) {
        $("#pokémon-outer > main[name='Team'].open").removeClass();
        $("#pokémon-outer > main[name='Team'] > section.open").removeClass();
    }
});
*/

$(document).on('click', function(e) {
    if (!$(e.target).is($("#pokémon-outer > main[name='Settings']")) && $("#pokémon-outer > main[name='Settings']").has(e.target).length === 0 && !$(e.target).is($("#settings-outer img")) && $("#settings-outer img").has(e.target).length === 0) {
        $("#pokémon-outer > main[name='Settings'].open").removeClass();
        $("#settings-outer img.open").removeClass();
    }
});




function evInputMax() {

    var totallimit = 510;
    var limit = 255;
    var combinedValues = 0;
    var valueVSlimit;
    var base = this.parentElement.querySelectorAll(":scope input");
    var values = [];

    for (i = 0; i < base.length; i++) {
        if(base[i].value != "") {
            values.push(parseInt(base[i].value))
        }
        else {
            values.push(0)
        }
    }



    for (i = 0; i < values.length; i++) {
        combinedValues = combinedValues + values[i];
    }

    valueVSlimit = totallimit - combinedValues;

    var tempArr = [];

    for (i = 0; i < values.length; i++) {
        if ((valueVSlimit + values[i]) >= limit) {
            tempArr.push(limit)
        }
        else {
            tempArr.push(valueVSlimit + values[i])
        }
    }

    for (i = 0; i < base.length; i++) {
        base[i].setAttribute("max",tempArr[i]);
    }
}


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

    if (this.value == 0) {
        this.value = "";
    }
    partyMemory("Save");
}



function partyDataSwitchAll() {


    var base = document.querySelectorAll('#pokémon-outer main[name="Team"] > section[name="Party"] > div');
    for (u = 0; u < base.length; u++) {
        var base2 = base[u].querySelectorAll(':scope > aside > span[name]');
        var base3 = base[u].querySelector(':scope > aside > span:last-child button');

        var tempArr = ["Moves","Individual Values","Effort Values","Additional",""];
        for (i = 0; i < tempArr.length; i++) {
            var base4 = base[u].querySelector(':scope > aside > span[name="'+tempArr[i]+'"]');

            if (base3.value == "") {
                for (q = 0; q < base2.length; q++) {
                    base2[q].classList.remove("show");
                    base2[q].classList.remove("showstart");
                    base2[q].classList.remove("showmiddle");
                    base2[q].classList.remove("showend");
                }

                base[u].querySelector(':scope > aside > span[name="'+tempArr[tempArr.length - 2]+'"]').classList.add("showend");

                base3.value = base2[0].getAttribute("name");
                break;
            }
            if (base3.value == tempArr[i]) {
                for (q = 0; q < base2.length; q++) {
                    base2[q].classList.remove("show");
                    base2[q].classList.remove("showstart");
                    base2[q].classList.remove("showmiddle");
                    base2[q].classList.remove("showend");
                }
          
                base4.classList.add("show");

                if (tempArr[i] == tempArr[0]) {
                    base4.classList.add("showstart");
                }
                if (tempArr[i] != tempArr[0]) {
                    base4.classList.add("showmiddle");
                }
  
                
                if (base3.value = base4.nextElementSibling.getAttribute("name") != null) {
                    base3.value = base4.nextElementSibling.getAttribute("name");
                }
                else {
                    base3.value = "";
                }
                break;
            }
        }
       
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


function imageType() {


    var conimg = document.querySelectorAll('#pokémon-outer > div ul li label > img');
    var parimg = document.querySelectorAll('#pokémon-outer > main[name="Team"] section[name="Party"] div aside img[value]');

    var select = document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select')

    if (select.value != "") {

        var dataPath = select.querySelector(":scope > option[value='"+select.value+"']").getAttribute("data-path");
        var dataType = select.querySelector(":scope > option[value='"+select.value+"']").getAttribute("data-type");
        var dataExtension = select.querySelector(":scope > option[value='"+select.value+"']").getAttribute("data-extension");
        


        if(!dataType.includes("Art")) {
            for (var q = 0; q < conimg.length; q++) {
                conimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataExtension + '/Normal/Front/' + dataPath + '/' + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
                conimg[q].setAttribute("path",dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension);
            }
            for (var q = 0; q < parimg.length; q++) {
                parimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataExtension + '/Normal/Front/' + dataPath + '/' + getPokémonMediaPath(parimg[q].title) + "." + dataExtension;
                parimg[q].setAttribute("path",dataPath + "/" + getPokémonMediaPath(parimg[q].title) + "." + dataExtension);
            }
        }
        else {
            for (var q = 0; q < conimg.length; q++) {
                conimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataPath + '/' + getPokémonMediaPath(conimg[q].id) + "." + dataExtension;
                conimg[q].setAttribute("path",dataPath + "/" + getPokémonMediaPath(conimg[q].id) + "." + dataExtension);
            }
            for (var q = 0; q < parimg.length; q++) {
                parimg[q].src = './media/Images/Pokémon/' + dataType + '/' + dataPath + '/' + getPokémonMediaPath(parimg[q].title) + "." + dataExtension;
                parimg[q].setAttribute("path",dataPath + "/" + getPokémonMediaPath(parimg[q].title) + "." + dataExtension);
            }
        }
    }

    memory("Save","imgtype","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select'));
}


function openSettings() {

    if (document.body.contains(document.querySelector('#pokémon-outer > main[name="Settings"].open'))) {
        document.querySelector("#pokémon-outer > main:last-child").classList.remove("open");
        document.querySelector("#settings-outer img").classList.remove("open");
    }
    else if (!document.body.contains(document.querySelector('#pokémon-outer > main[name="Settings"].open'))) {
        document.querySelector("#pokémon-outer > main:last-child").classList.add("open");
        document.querySelector("#settings-outer img").classList.add("open");
    }

}




function partyItem() {

    var base = this.parentElement.parentElement.parentElement.parentElement;
    var item = base.querySelector(':scope span[name="Pokémon"] img:first-child');

    item.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+this.value+".png";
    item.title = this.value;


    if (this.value == "Item") {
        item.style.display = "none";
    }
    else {
        item.style.display = "unset";
    }
}


function partyDefault(base) {
    var base;

    var inputs = base.querySelectorAll(':scope input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        if (inputs[i].parentElement.getAttribute("name") == "Date") {
            inputs[i].style.color = "transparent";
        }
    }

    var selects = base.querySelectorAll(':scope select');
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].querySelector(":scope > option:first-child") != undefined) {
            selects[i].value = selects[i].querySelector(":scope > option:first-child").value;
        }
        else {
            selects[i].value = "";
        }

        if (selects[i].parentElement.getAttribute("name") == "Ability") {
            selects[i].title = "";
            selects[i].setAttribute("name","Primary");
        }
    }
    var options = base.querySelectorAll(':scope option');
    for (var i = 0; i < options.length; i++) {
        options[i].removeAttribute("disabled");
    }



    if (HeldItem == true) {
        var held = base.querySelector(":scope img:not([value])");
        held.src = "";
        held.style.display = "none";

        var options = base.querySelectorAll(':scope span[name="Item"] select option');
        for (var i = 0; i < options.length; i++) {
            options[i].remove();
        }
    }

    if (Gender == true) {
        var gender = base.querySelector(':scope > aside > span:last-child > select:nth-child(2)')
        var genders = gender.querySelectorAll(':scope > option');

        gender.removeAttribute("name");
        for (var u = 0; u < genders.length; u++) {
            genders[u].remove();
        }
    }


    var moves = base.querySelectorAll(':scope > aside span[name="Moves"] span:nth-child(2) select')
    for (var u = 0; u < moves.length; u++) {
        moves[u].removeAttribute("name");
        moves[u].style.fontStyle = "italic";
        var movesOptions = moves[u].querySelectorAll(":scope option");
        for (var q = 0; q < movesOptions.length; q++) {
            movesOptions[q].remove();
        }
    }

    var background = base.querySelector(":scope > aside:first-child");
    var pok = base.querySelector(":scope img[value]");
    var name = base.querySelector(':scope span[name="Name"] input');

    background.style.background = "";
    pok.src = "";
    pok.title = "";
    pok.setAttribute("value","");

    name.setAttribute("placeholder","");

    if (Ability.length > 0) {
        var ability = base.querySelector(':scope span[name="Moves"] > span:last-child select');
        var abilities = ability.querySelectorAll(':scope option');
        for (var q = 0; q < abilities.length; q++) {
            abilities[q].remove();
        }
    }

    if (Natures.length > 0) {
        var baseStats1 = base.querySelector(':scope span[name="Individual Values"] > span:nth-child(2) > span:last-child');
        var baseStats2 = base.querySelector(':scope span[name="Effort Values"] > span:nth-child(2) > span:last-child');
        
        baseStats1.removeAttribute("name");
        baseStats2.removeAttribute("name");
    }

}









function dragStart(e) {

    var tar = e.target;
    savedtar = e.target;
    for (var q = 0; q < 10; q++) {
        if (tar.tagName == "LI") {
            break;
        }
        tar = tar.parentElement;
    }
    drag = getPokémonName(tar.id);
    
    var blinks = document.getElementsByClassName("blinkindicator");
    for (var q = 0; q < blinks.length; q++) {
        blinks[q].classList.add("enabled");
    }
}

function dragEnter(e) {
    if (e.target.innerText == "Party") {
        var tar = document.querySelectorAll('#pokémon-outer > main[name="Team"] section[name="Party"] > div[name="empty"]');
        if (tar.length > 0) {
            e.target.classList.add("hover");
        }
    }
    else {
        e.target.classList.add("hover");
    }
}

function dragLeave(e) {
    e.target.classList.remove("hover");
}


function dragMove(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnd(e) {
    drag = undefined;
    var blinks = document.getElementsByClassName("blinkindicator");
    for (var q = 0; q < blinks.length; q++) {
        blinks[q].classList.remove("enabled");
    }
}

function dragDrop(e) {

    var hov = document.querySelectorAll('.hover');
    for(var i = 0; i < hov.length; i++) {
        hov[i].classList.remove("hover");
    }


    if (drag != undefined) {
        if (e.target.innerText == "Party") {
            var base = document.querySelectorAll('#pokémon-outer > main[name="Team"] section div[name="empty"]');
            if (base.length > 0) {
                createParty(base[0],"pok:"+drag);
                partyShow(base[0]);
            }
            else {
                alert("Party is full!")
            }
        }
        else if (e.target.innerText == "Box") {
            storeInBox("pok:"+drag);
        }
        else if (e.target.innerText == "+") {
            var base = e.target.parentElement.parentElement;
            createParty(base,"pok:"+drag);
            partyShow(base);
        }
    }
}

function createParty(base,data) {

    var base;
    var data;
    var i;
    var pok;
    var item;
    var nick;
    var level;
    var gender;
    var move;
    var ability;
    var iv;
    var ev;
    var nature;
    var metlocation;
    var metlevel;
    var metdate;
    var friendship;


    if(data.includes("|")) {
        data = data.split("|")
        for (var q = 0; q < data.length; q++) {
            if (data[q].split(":")[0] == "pok") {
                pok = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
        }
    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0] + ":","")
        }
    }

    i = getPokémonInt(pok);

    partyDefault(base);


    var baseBackground = base.querySelector(":scope > aside:first-child");
    var basePok = base.querySelector(":scope img[value]");
    var baseItem = base.querySelector(':scope span[name="Item"] select');
    var baseItemImg = base.querySelector(':scope span[name="Pokémon"] img:not([value])');
    var baseNick = base.querySelector(':scope span[name="Name"] input');
    var baseLevel = base.querySelector(':scope input[placeholder="Lvl."]');
    var baseGender = base.querySelector(':scope aside > span:last-child > select:nth-child(2)');
    var baseMove = base.querySelector(':scope span[name="Moves"] span:nth-child(2)');
    var baseMoves = base.querySelectorAll(':scope span[name="Moves"] > span:nth-child(2) select');
    var baseAbility = base.querySelector(':scope span[name="Ability"] select');
    var baseNature = base.querySelectorAll(':scope span[name="Nature"] select');
    var baseIV = base.querySelector(':scope span[name="Individual Values"] > span:nth-child(2) > span:first-child');
    var baseEV = base.querySelector(':scope span[name="Effort Values"] > span:nth-child(2) > span:first-child');
    var baseStats1 = base.querySelector(':scope span[name="Individual Values"] > span:nth-child(2) > span:last-child');
    var baseStats2 = base.querySelector(':scope span[name="Effort Values"] > span:nth-child(2) > span:last-child');
    var baseMetLocation = base.querySelector(':scope span[name="Additional"] label[name="Location"] select');
    var baseMetLevel = base.querySelector(':scope span[name="Additional"] label[name="Level"] input');
    var baseMetDate = base.querySelector(':scope span[name="Additional"] label[name="Date"] input');
    var baseFriendship = base.querySelector(':scope span[name="Additional"] label[name="Friendship"] input');
    var baseExport = base.querySelector(':scope aside > span:last-child > select:last-child');

    var imgtype = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select')
    var opt = imgtype.querySelector(':scope > option[value="'+imgtype.value+'"]');
    
    var type1 = returnData(i, "Type", "undefined")[0];
    var type2 = returnData(i, "Type", "undefined")[1];

    if (type2 != undefined) {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type2+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1+","+type2);
    }
    else {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type1+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1);
    }

    if (opt.getAttribute("data-type") != "Art") {
        basePok.src = "./media/Images/Pokémon/"+opt.getAttribute("data-type")+"/"+opt.getAttribute("data-extension")+"/Normal/Front/"+opt.getAttribute("data-path")+"/"+getPokémonMediaPath(getPokémonName(i))+"."+opt.getAttribute("data-extension");
    }
    else {
        basePok.src = "./media/Images/Pokémon/"+opt.getAttribute("data-type")+"/"+opt.getAttribute("data-path")+"/"+getPokémonMediaPath(getPokémonName(i))+"."+opt.getAttribute("data-extension");
    }
    basePok.setAttribute("value",i);
    basePok.title = getPokémonName(i);
    baseNick.setAttribute("placeholder",getPokémonName(i));


    if (HeldItem == true) {
        if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"] != undefined) {
            var req = [];
            if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"].includes(",")) {
                req = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"].split(",")
            }
            else {
                req[0] = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"];
            }

            var items = itemOptionsTitle;
            for (var q = 0; q < items.length; q++) {
                if (req.includes(items[q])) {
                    var option = document.createElement("option");
                    option.innerText = items[q];
                    option.value = items[q];
                    baseItem.appendChild(option)
                }
            }
            baseItemImg.style.display = "unset";
            baseItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+baseItem.querySelector(":scope option:first-child").value+".png";
        }
        else if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"] != undefined) {
            var notreq = [];
            if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"].includes(",")) {
                notreq = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"].split(",")
            }
            else {
                notreq[0] = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"];
            }

            var items = itemOptionsTitle;
            for (var q = 0; q < items.length; q++) {
                if (!notreq.includes(items[q])) {
                    var option = document.createElement("option");
                    option.innerText = items[q];
                    option.value = items[q];
                    baseItem.appendChild(option)
                }
            }
        }
        else {
            var items = itemOptionsTitle;
            for (var q = 0; q < items.length; q++) {
                var option = document.createElement("option");
                option.innerText = items[q];
                option.value = items[q];
                baseItem.appendChild(option)
            }
        }
    }

    if (Gender == true) {
        var tempgender = returnData(i, "Gender Ratio", "undefined");

        var possibleGender = [];
        if (tempgender[0] == "0" && tempgender[1] == "0") {
            possibleGender = ["☿"];
        }
        else if (tempgender[0] == "0") {
            possibleGender = ["♀"];
        }
        else if (tempgender[1] == "0") {
            possibleGender = ["♂"];
        }
        else {
            possibleGender = ["♂","♀"];
        }

        if (possibleGender[0] == "♂") {
            baseGender.style.color = "var(--colorBlue)";
        }
        if (possibleGender[0] == "♀") {
            baseGender.style.color = "var(--colorRed)";
        }
        if (possibleGender[0] == "☿") {
            baseGender.style.color = "var(--fontDark)";
        }

        for (var q = 0; q < possibleGender.length; q++) {
            var option = document.createElement("option");
            option.innerText = possibleGender[q];
            option.value = possibleGender[q];
            option.setAttribute("name",possibleGender[q]);
            baseGender.appendChild(option)
        }
    }


    if (getEvolutionFamily(i).length > 1) {
        baseExport.querySelector(':scope > option[value="Change Evolution"]').removeAttribute("disabled");
    }
    else {
        baseExport.querySelector(':scope > option[value="Change Evolution"]').setAttribute("disabled","");
    }

    if (getPokémonForm(i).length > 1) {
        baseExport.querySelector(':scope > option[value="Change Form"]').removeAttribute("disabled");
    }
    else {
        baseExport.querySelector(':scope > option[value="Change Form"]').setAttribute("disabled","");
    }




    var tempmoves = returnMoveSet(i,"onlymoves,noduplicate");
    tempmoves.unshift("Move");
    for (var u = 0; u < baseMoves.length; u++) {
        var x = u + 1;
        for (var q = 0; q < tempmoves.length; q++) {
            var option = document.createElement("option");
            if (q == 0) {
                option.innerText = tempmoves[q]+" #"+x;
                option.value = tempmoves[q]+" #"+x;
            }
            else {
                option.innerText = tempmoves[q];
                option.value = tempmoves[q];
                option.title = formatMoveData(tempmoves[q]);
            }

            option.setAttribute("name","styleBackgroundType"+getMoveData(tempmoves[q],"Type"));
            baseMoves[u].appendChild(option)
        }
    }


    if (Ability.length > 0) {
        var abilities = returnData(i, "Ability", "");

        for (var q = 0; q < abilities.length; q++) {
            if (abilities[q] != undefined) {
                var option = document.createElement("option");
                option.innerText = abilities[q];
                option.value = abilities[q];
                if (q == 0) {
                    option.setAttribute("name","Primary")
                }
                if (q == 1) {
                    option.setAttribute("name","Secondary")
                }
                if (q == 2) {
                    option.setAttribute("name","Hidden")
                }
                baseAbility.appendChild(option)
            }
        }
        if (getAbilityData(baseAbility.value, "Flavor") != undefined) {
            baseAbility.setAttribute("title",getAbilityData(baseAbility.value, "Flavor"));
        }
    }

    



    if (nick != undefined) {
        baseNick.value = nick;
    }
    if (item != undefined && HeldItem == true) {
        var baseItems = baseItem.querySelectorAll(":scope option");
        var tempArr = [];
        for (var q = 0; q < baseItems.length; q++) {
            tempArr.push(baseItems[q].value);
        }

        if (tempArr.includes(item)) {
            baseItem.value = item;
            baseItem.style.fontStyle = "unset";
            baseItemImg.style.display = "unset";
            baseItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+item+".png"
        }
    }
    if (level != undefined) {
        baseLevel.value = level;
    }
    if (gender != undefined && Gender == true) {
        baseGender.value = gender;
        if (gender == "♂") {
            baseGender.style.color = "var(--colorBlue)";
        }
        if (gender == "♀") {
            baseGender.style.color = "var(--colorRed)";
        }
        if (gender == "☿") {
            baseGender.style.color = "var(--fontDark)";
        }
    }
    if (ability != undefined && Ability.length > 0) {
        var abtemp = baseAbility.querySelector(':scope > option[name="'+ability+'"]');

        if (abtemp != undefined) {
            baseAbility.value = abtemp.value;
            baseAbility.setAttribute("name",ability);
            baseAbility.style.fontStyle = "unset";
        }
    }
    if (nature != undefined && Natures.length > 0) {
        for (var q = 0; q < baseNature.length; q++) {
            baseNature[q].value = nature;
        }

        baseStats1.setAttribute("name",nature);
        baseStats2.setAttribute("name",nature);
    }




    if (move != undefined) {
        var tempmove = [move];
        if (move.includes(",")) {
            tempmove = move.split(",");
        }
        for (var q = 0; q < tempmove.length; q++) {
            var y = q + 1;
            if (tempmove[q] != "") {
                if (tempmoves.includes(tempmove[q])) {
                    baseMove.querySelector(":scope > span:nth-child("+y+") select").value = tempmove[q];
                    if (!tempmove[q].includes("Move")) {
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").title = formatMoveData(tempmove[q]);
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").style.fontStyle = "unset";
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").setAttribute("name","styleBackgroundType"+getMoveData(tempmove[q],"Type"))
                    }
                }
            }
            else {
                baseMove.querySelector(":scope > span:nth-child("+y+") select").value = baseMove.querySelector(":scope > span:nth-child("+y+") select").firstElementChild.value;
            }
        }
    }
    if (iv != undefined) {
        var tempiv = [iv];
        if (iv.includes(",")) {
            tempiv = iv.split(",");
        }
        for (var q = 0; q < tempiv.length; q++) {
            var y = q + 1;
            if (baseIV.querySelector(":scope input:nth-child("+y+")") != undefined) {
                baseIV.querySelector(":scope input:nth-child("+y+")").value = tempiv[q];
            }
        }
    }
    if (ev != undefined) {
        var tempev = [ev];
        if (ev.includes(",")) {
            tempev = ev.split(",");
        }
        for (var q = 0; q < tempev.length; q++) {
            var y = q + 1;
            if (baseEV.querySelector(":scope > input:nth-child("+y+")") != undefined) {
                baseEV.querySelector(":scope > input:nth-child("+y+")").value = tempev[q];
            }
        }
    }

    if (metlocation != undefined) {
        baseMetLocation.value = metlocation;
    }
    if (metlevel != undefined) {
        baseMetLevel.value = metlevel;
    }
    if (metdate != undefined) {
        baseMetDate.value = metdate;
        baseMetDate.style.color = null;
    }
    if (Friendship == true) {
        if (friendship != undefined) {
            baseFriendship.value = friendship;
        }
        else if (returnData(i,"Base Friendship", "")[0] != undefined){
            baseFriendship.value = returnData(i,"Base Friendship", "")[0];
        }
    }



    boxMemory("Save");
    partyMemory("Save");
}





function partyNature() {
    var base = this.parentElement.parentElement.parentElement.parentElement;

    var select = base.querySelectorAll(':scope span[name="Nature"] select');

    for (var q = 0; q < select.length; q++) {
        select[q].value = this.value;
    }

}



function partyShow(base) {
    var base;

    if (base.getAttribute("name") == "empty") {
        base.removeAttribute("name");
    }

    calcPartyStat(base);

    var asides = base.querySelectorAll(":scope > aside");
    var aside = base.querySelector(":scope > aside:first-child");

    for (q = 0; q < asides.length; q++) {
        asides[q].style.display = "none";
    }
    aside.style.display = "flex";
    partyMemory("Save");
}


function partyHide(base) {
    var base;

    if (base.getAttribute("name") != "empty") {
        base.setAttribute("name","empty");
    }
    
    var asides = base.querySelectorAll(":scope > aside");
    var aside = base.querySelector(":scope > aside:last-child");

    for (q = 0; q < asides.length; q++) {
        asides[q].style.display = "none";
    }
    aside.style.display = "flex";

    partyMemory("Save");
}



function deleteBox(element) {
    element.remove();
    boxMemory("Save");
}

function returnMoveSet(int,additional) {
    var int;
    var arrl = finaldataLearnsetLevel;
    var arrm = finaldataLearnsetMachine;
    var arrb = finaldataLearnsetBreed;
    var arrlL = finaldataLearnsetLevelLength;
    var arrmL = finaldataLearnsetMachineLength;
    var arrbL = finaldataLearnsetBreedLength;
    var additional;

    var name = getPokémonName2(int);

    var lvlres = [];
    var machres = [];
    var breres = [];


    for(var i = 0; i < arrl.length; i++) {
		if(arrl[i]["Pokémon"] == name && arrlL[i] == true) {
            var obj = new Object();
            obj["Pokémon"] = arrl[i]["Pokémon"];
            obj["Form"] = arrl[i]["Form"];
            obj["Factor"] = arrl[i]["Factor"];
            obj["Move"] = arrl[i]["Move"];
            obj["Game"] = arrl[i]["Game"];
            obj["Type"] = "Level Up";
            lvlres.push(obj)
		}
	}
    if (!lvlres.length > 0) {
        for(var i = 0; i < arrl.length; i++) {
            if(arrl[i]["Form"] == name && arrlL[i] == true) {
                var obj = new Object();
                obj["Pokémon"] = arrl[i]["Pokémon"];
                obj["Form"] = arrl[i]["Form"];
                obj["Factor"] = arrl[i]["Factor"];
                obj["Move"] = arrl[i]["Move"];
                obj["Game"] = arrl[i]["Game"];
                obj["Type"] = "Level Up";
                lvlres.push(obj)
            }
        }
    }

    for(var i = 0; i < arrm.length; i++) {
		if(arrm[i]["Pokémon"] == name && arrmL[i] == true) {
            var obj = new Object();
            obj["Pokémon"] = arrm[i]["Pokémon"];
            obj["Form"] = arrm[i]["Form"];
            obj["Machine"] = arrm[i]["Machine"];
            obj["Move"] = arrm[i]["Move"];
            obj["Game"] = arrm[i]["Game"];
            obj["Type"] = "Machine";
            machres.push(obj)
		}
	}
    if (!machres.length > 0) {
        for(var i = 0; i < arrm.length; i++) {
            if(arrm[i]["Form"] == name && arrmL[i] == true) {
                var obj = new Object();
                obj["Pokémon"] = arrm[i]["Pokémon"];
                obj["Form"] = arrm[i]["Form"];
                obj["Machine"] = arrm[i]["Machine"];
                obj["Move"] = arrm[i]["Move"];
                obj["Game"] = arrm[i]["Game"];
                obj["Type"] = "Machine";
                machres.push(obj)
            }
        }
    }


    for(var i = 0; i < arrb.length; i++) {
		if(arrb[i]["Pokémon"] == name && arrbL[i] == true) {
            var obj = new Object();
            obj["Pokémon"] = arrb[i]["Pokémon"];
            obj["Form"] = arrb[i]["Form"];
            obj["Parent"] = arrb[i]["Parent"];
            obj["Item"] = arrb[i]["Item"];
            obj["Additional"] = arrb[i]["Additional"];
            obj["Move"] = arrb[i]["Move"];
            obj["Game"] = arrb[i]["Game"];
            obj["Type"] = "Breeding";
            breres.push(obj)
		}
	}

    if (!breres.length > 0) {
        for(var i = 0; i < arrb.length; i++) {
            if(arrb[i]["Form"] == name && arrbL[i] == true) {
                var obj = new Object();
                obj["Pokémon"] = arrb[i]["Pokémon"];
                obj["Form"] = arrb[i]["Form"];
                obj["Parent"] = arrb[i]["Parent"];
                obj["Item"] = arrb[i]["Item"];
                obj["Additional"] = arrb[i]["Additional"];
                obj["Move"] = arrb[i]["Move"];
                obj["Game"] = arrb[i]["Game"];
                obj["Type"] = "Breeding";
                breres.push(obj)
            }
        }
    }


    var name = getPokémonName2([finaldataPokémon.map(function(e) {return e.ID;}).indexOf(finaldataPokémon[int]["ID"])]);

    if (!lvlres.length > 0) {
        for(var i = 0; i < arrl.length; i++) {
            if(arrl[i]["Pokémon"] == name && arrlL[i] == true) {
                var obj = new Object();
                obj["Pokémon"] = arrl[i]["Pokémon"];
                obj["Form"] = arrl[i]["Form"];
                obj["Factor"] = arrl[i]["Factor"];
                obj["Move"] = arrl[i]["Move"];
                obj["Game"] = arrl[i]["Game"];
                obj["Type"] = "Level Up";
                lvlres.push(obj)
            }
        }
    }

    if (!machres.length > 0) {
        for(var i = 0; i < arrm.length; i++) {
            if(arrm[i]["Pokémon"] == name && arrmL[i] == true) {
                var obj = new Object();
                obj["Pokémon"] = arrm[i]["Pokémon"];
                obj["Form"] = arrm[i]["Form"];
                obj["Machine"] = arrm[i]["Machine"];
                obj["Move"] = arrm[i]["Move"];
                obj["Game"] = arrm[i]["Game"];
                obj["Type"] = "Machine";
                machres.push(obj)
            }
        }
    }

    if (!breres.length > 0) {
        for(var i = 0; i < arrb.length; i++) {
            if(arrb[i]["Pokémon"] == name && arrbL[i] == true) {
                var obj = new Object();
                obj["Pokémon"] = arrb[i]["Pokémon"];
                obj["Form"] = arrb[i]["Form"];
                obj["Parent"] = arrb[i]["Parent"];
                obj["Item"] = arrb[i]["Item"];
                obj["Additional"] = arrb[i]["Additional"];
                obj["Move"] = arrb[i]["Move"];
                obj["Game"] = arrb[i]["Game"];
                obj["Type"] = "Breeding";
                breres.push(obj)
            }
        }
    }

    

    var result = [];

    for(var q = 0; q < lvlres.length; q++) {
        result.push(lvlres[q]);
    }
    for(var q = 0; q < machres.length; q++) {
        result.push(machres[q]);
    }
    for(var q = 0; q < breres.length; q++) {
        result.push(breres[q]);
    }
    if (additional.includes("noduplicate")) {
        result = removeDuplicateObjectFromArray(result,"Move");
    }
    if (additional.includes("onlymoves")) {
        for(var q = 0; q < result.length; q++) {
            result[q] = result[q]["Move"];
        }
    }
    if (additional.includes("lower")) {
        if (typeof result[0] == "object") {
            for(var q = 0; q < result.length; q++) {
                for (var u = 0; u < Object.keys(result[q]).length; u++) {
                    result[q][Object.keys(result[q])[u]] = result[q][Object.keys(result[q])[u]].toLowerCase();
                }
            }
        }
        else {
            for(var q = 0; q < result.length; q++) {
                result[q] = result[q].toLowerCase();
            }
        }
    }

    return result;
}



function selectModify(e) {


    if (this.value == "♂") {
        this.style.color = "var(--colorBlue)";
    }
    if (this.value == "♀") {
        this.style.color = "var(--colorRed)";
    }
    if (this.value == "☿") {
        this.style.color = "var(--fontDark)";
    }

    if (this.firstElementChild.value.includes("Move") || this.firstElementChild.value == "Item") {
        if (this.value == this.firstElementChild.value) {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }


    if (this.parentElement.getAttribute("name") == "Nature") {
        var base = this.parentElement.parentElement.parentElement;
        base.querySelector(':scope span[name="Individual Values"] > span:nth-child(2) > span:last-child').setAttribute("name",this.value);
        base.querySelector(':scope span[name="Effort Values"] > span:nth-child(2) > span:last-child').setAttribute("name",this.value);
    }

    if (this.parentElement.getAttribute("name") == "Ability") {
        if (getAbilityData(this.value, "Flavor") != undefined) {
            this.setAttribute("title",getAbilityData(this.value, "Flavor"));
        }
        this.setAttribute("name",this.querySelector(':scope > option[value="'+this.value+'"]').getAttribute("name"));
    }


    if (this.firstElementChild.value == "➢") {
        var tar = this.parentElement.parentElement.parentElement;
        var base = document.querySelectorAll('#pokémon-outer > main[name="Team"] section div[name="empty"]');
   

        if (this.value == "Add Copy to Box") {
            storeInBox(getPartyData(tar));
        }
        else if (this.value == "Add Copy to Party") {
            if (base.length > 0) {
                createParty(base[0],getPartyData(tar));
                partyShow(base[0]);
            }
            else {
                alert("Party is full!")
            }
        }
        else if (this.value == "Export Pokémon Data String") {
            navigator.clipboard.writeText(getPartyData(tar));
            console.log(getPartyData(tar));
            alert("Copied!");
        }
        else if (this.value == "Change Evolution") {
            changePartyEvolution(tar,tar.querySelector(":scope img[value]").getAttribute("value"));
        }
        else if (this.value == "Change Form") {
            changePartyForm(tar,tar.querySelector(":scope img[value]").getAttribute("value"));
        }
        this.value = "➢";
    }
    if (this.firstElementChild.value == "❌") {
        var tar = this.parentElement.parentElement.parentElement;
        if (this.value == "Delete") {
            partyHide(this.parentElement.parentElement.parentElement);
            partyDefault(this.parentElement.parentElement.parentElement);
        }
        else if (this.value == "Send to Box") {
            storeInBox(getPartyData(this.parentElement.parentElement.parentElement));
            partyHide(this.parentElement.parentElement.parentElement);
            partyDefault(this.parentElement.parentElement.parentElement);
        }
        this.value = "❌";
    }

    if (this.firstElementChild.value.includes("Move")) {
        var sel = this.parentElement.parentElement.querySelectorAll(':scope select');
        var opts = this.parentElement.parentElement.querySelectorAll(':scope option');
        var optz = this.parentElement.parentElement.querySelectorAll(':scope option[value="'+this.value+'"]');

        var selvals = [];
        
        for(var i = 0; i < sel.length; i++) {
            selvals.push(sel[i].value)
        }

        for(var i = 0; i < opts.length; i++) {
            if (!selvals.includes(opts[i].value)) {
                opts[i].style.display = "unset";
                opts[i].removeAttribute("disabled");
            }
        }
     
        for(var i = 0; i < optz.length; i++) {
            optz[i].style.display = "none";
            optz[i].setAttribute("disabled","");
        }
        if (!this.value.includes("Move #")) {
            this.title = formatMoveData(this.value);
        }
        else {
            this.title = "";
        }

        this.setAttribute("name","styleBackgroundType"+getMoveData(this.value,"Type"));
    }

    partyMemory("Save");
}

function storeInBox(data) {

    var data;
    var box = document.querySelector('#pokémon-outer > main[name="Team"] > section[name="Box"] ul');

    var i;
    var pok;
    var item;
    var nick;
    var level;
    var gender;
    var move;
    var ability;
    var iv;
    var ev;
    var nature;
    var metlocation;
    var metlevel;
    var metdate;
    var friendship;

    if(data.includes("|")) {
        data = data.split("|")
        for (var q = 0; q < data.length; q++) {
            if (data[q].split(":")[0] == "pok") {
                pok = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0] + ":","")
            }
        }

    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0] + ":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0] + ":","")
        }
    }

    i = getPokémonInt(pok);

    var li = document.createElement("li");
    var shadow = document.createElement("img");
    var img = document.createElement("img");
    img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonName(i))+".png";
    img.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
    img.setAttribute("value",i);
    box.appendChild(li)
    li.appendChild(shadow)
    li.appendChild(img)

    if (i != undefined) {
        li.setAttribute("data-pok",pok);
    }
    if (item != undefined) {
        li.setAttribute("data-item",item);
    }
    if (nick != undefined) {
        li.setAttribute("data-nick",nick);
    }
    if (level != undefined) {
        li.setAttribute("data-level",level);
    }
    if (gender != undefined) {
        li.setAttribute("data-gender",gender);
    }
    if (move != undefined) {
        li.setAttribute("data-move",move);
    }
    if (ability != undefined) {
        li.setAttribute("data-ability",ability);
    }
    if (iv != undefined) {
        li.setAttribute("data-iv",iv);
    }
    if (ev != undefined) {
        li.setAttribute("data-ev",ev);
    }
    if (nature != undefined) {
        li.setAttribute("data-nature",nature);
    }
    if (metlocation != undefined) {
        li.setAttribute("data-metlocation",metlocation);
    }
    if (metlevel != undefined) {
        li.setAttribute("data-metlevel",metlevel);
    }
    if (metdate != undefined) {
        li.setAttribute("data-metdate",metdate);
    }
    if (friendship != undefined) {
        li.setAttribute("data-friendship",friendship);
    }
   

    var titlearr = [];

    if (level != undefined) {
        titlearr.push("Lv. "+level)
    }
    if (nick != undefined && gender != undefined) {
        titlearr.push(gender+" "+pok+" ("+nick+")");
    }
    else if (nick != undefined && gender == undefined) {
        titlearr.push(pok+" ("+nick+")");
    }
    else if (nick == undefined && gender != undefined) {
        titlearr.push(gender+" "+pok);
    }
    else if (nick == undefined && gender == undefined) {
        titlearr.push(pok);
    }
    else if (nick != undefined && gender == undefined) {
        titlearr.push(nick);
    }
    if (item != undefined) {
        titlearr.push("Item: "+item);
    }
    if (ability != undefined) {
        titlearr.push("Ability: "+getPositionAbility(i,ability));
    }
    if (move != undefined) {
        if (move.includes(",")) {
            titlearr.push("")
            for (var q = 0; q < move.split(",").length; q++) {
                if (move.split(",")[q] != "" && !move.split(",")[q].includes("Move")) {
                    titlearr.push(move.split(",")[q]);
                }
            }
        }
    }


    img.setAttribute("title",titlearr.join("\n"));
    boxMemory("Save");
}


function getPartyData(base) {
    var base;
    var data = [];

    var name = base.querySelector(':scope > aside:first-child > span > span[name="Name"] input');
    var level = base.querySelector(':scope > aside:first-child > span:first-child > input[type="number"]');
    var item = base.querySelector(':scope > aside:first-child > span > span[name="Item"] > select');
    var nick = base.querySelector(':scope > aside:first-child > span > span[name="Name"] > input[type="text"]');
    var gender = base.querySelector(':scope > aside:first-child > span:last-child > select:nth-child(2)');
    var ability = base.querySelector(':scope > aside:first-child > span[name="Moves"] > span[name="Ability"] > select');

    var nature = base.querySelectorAll(':scope > aside:first-child > span > span[name="Nature"] > select');
    var move = base.querySelectorAll(':scope > aside:first-child > span[name="Moves"] > span:nth-child(2) > span select');
    var iv = base.querySelectorAll(':scope > aside:first-child > span[name="Individual Values"] > span:nth-child(2) > span:first-child > input');
    var ev = base.querySelectorAll(':scope > aside:first-child > span[name="Effort Values"] > span:nth-child(2) > span:first-child > input');

    var metlocation = base.querySelector(':scope > aside:first-child > span[name="Additional"] label[name="Location"] select');
    var metlvl = base.querySelector(':scope > aside:first-child > span[name="Additional"] label[name="Level"] input');
    var metdate = base.querySelector(':scope > aside:first-child > span[name="Additional"] label[name="Date"] input');
    var friendship = base.querySelector(':scope > aside:first-child > span[name="Additional"] label[name="Friendship"] input');


    if (name != undefined) {
        if (name.placeholder != undefined) {
            data.push("pok:"+name.placeholder);
        }
    }
    if (level != undefined) {
        if (level.value != undefined && level.value != "") {
            data.push("lv:"+level.value);
        }
    }
    if (item != undefined) {
        if (item.value != undefined && item.value != "Item") {
            data.push("it:"+item.value);
        }
    }
    if (nick != undefined) {
        if (nick.value != undefined && nick.value != "") {
            data.push("ni:"+nick.value);
        }
    }
    if (gender != undefined) {
        if (gender.value != undefined) {
            data.push("ge:"+gender.value);
        }
    }
    if (ability != undefined) {
        if (ability.value != undefined) {
            data.push("ab:"+ability.getAttribute("name"));
        }
    }
    if (nature[0] != undefined) {
        if (nature[0].value != undefined && nature[0].value != "Nature") {
            data.push("na:"+nature[0].value);
        }
    }

    if (move != undefined) {
        var movearr = [];
        var movestr;
        for(var q = 0; q < move.length; q++) {
            if (!move[q].value.includes("Move")) {
                movearr.push(move[q].value);
            }
            else {
                movearr.push("");
            }
        }
        if (movearr.length > 1) {
            movestr = movearr.join(",");
        }
        else {
            movestr = movearr[0];
        }
        if (movestr != undefined) {
            if (movestr.replaceAll(",","").length > 0) {
                data.push("mo:"+movestr);
            }
        }
    }
    if (iv != undefined) {
        var ivarr = [];
        var ivstr;
        for(var q = 0; q < iv.length; q++) {
            ivarr.push(iv[q].value);
        }
        if (ivarr.length > 1) {
            ivstr = ivarr.join(",");
        }
        else {
            ivstr = ivarr[0];
        }
        if (ivstr != undefined) {
            if (ivstr.replaceAll(",","").length > 0) {
                data.push("iv:"+ivstr);
            }
        }
    }
    if (ev != undefined) {
        var evarr = [];
        var evstr;
        for(var q = 0; q < ev.length; q++) {
            evarr.push(ev[q].value);
        }
        if (evarr.length > 1) {
            evstr = evarr.join(",");
        }
        else {
            evstr = evarr[0];
        }
        if (evstr != undefined) {
            if (evstr.replaceAll(",","").length > 0) {
                data.push("ev:"+evstr);
            }
        }
    }
    if (metlocation != undefined) {
        if (metlocation.value != undefined && metlocation.value != "") {
            data.push("metlo:"+metlocation.value);
        }
    }
    if (metlvl != undefined) {
        if (metlvl.value != undefined && metlvl.value != "") {
            data.push("metlv:"+metlvl.value);
        }
    }
    if (metdate != undefined) {
        if (metdate.value != undefined && metdate.value != "") {
            data.push("metda:"+metdate.value);
        }
    }
    if (friendship != undefined) {
        if (friendship.value != undefined && friendship.value != "") {
            data.push("fr:"+friendship.value);
        }
    }


    if (data.length > 1) {
        data = data.join("|");
    }
    else {
        data = data[0];
    }

    return data;
}

function getAllBoxData() {
    var lis = document.querySelectorAll('#pokémon-outer > main[name="Team"] > section[name="Box"] > ul li');
    var data = [];
    for (var i = 0; i < lis.length; i++) {
        data.push(getBoxData(lis[i]))
    }
    if (data.length > 1) {
        data = data.join("/");
    }
    else {
        data = data[0];
    }
    return data;
}
function getBoxData(base) {
    var base;
    var data = [];

    if (base.getAttribute("data-pok") != null) {
        data.push("pok:"+base.getAttribute("data-pok"))
    }
    if (base.getAttribute("data-nick") != null) {
        data.push("ni:"+base.getAttribute("data-nick"))
    }
    if (base.getAttribute("data-level") != null) {
        data.push("lv:"+base.getAttribute("data-level"))
    }
    if (base.getAttribute("data-item") != null) {
        data.push("it:"+base.getAttribute("data-item"))
    }
    if (base.getAttribute("data-gender") != null) {
        data.push("ge:"+base.getAttribute("data-gender"))
    }
    if (base.getAttribute("data-ability") != null) {
        data.push("ab:"+base.getAttribute("data-ability"))
    }
    if (base.getAttribute("data-move") != null) {
        data.push("mo:"+base.getAttribute("data-move"))
    }
    if (base.getAttribute("data-nature") != null) {
        data.push("na:"+base.getAttribute("data-nature"))
    }
    if (base.getAttribute("data-iv") != null) {
        data.push("iv:"+base.getAttribute("data-iv"))
    }
    if (base.getAttribute("data-ev") != null) {
        data.push("ev:"+base.getAttribute("data-ev"))
    }
    if (base.getAttribute("data-metlocation") != null) {
        data.push("metlo:"+base.getAttribute("data-metlocation"))
    }
    if (base.getAttribute("data-metlevel") != null) {
        data.push("metlv:"+base.getAttribute("data-metlevel"))
    }
    if (base.getAttribute("data-metdate") != null) {
        data.push("metda:"+base.getAttribute("data-metdate"))
    }
    if (base.getAttribute("data-friendship") != null) {
        data.push("fr:"+base.getAttribute("data-friendship"))
    }

    if(data.length > 1) {
        data = data.join("|");
    }
    else {
        data = data[0]
    }

    return data;
}


function partyAdd() {
    var data = prompt("Enter Pokémon Data String:", "");

    if (data != null && data != "") {
        if (data.includes("pok:")) {
            var temparr = [];
            var tempstr;

            if (data.includes("|")) {
                temparr = data.split("pok:");
                if (temparr.length > 1) {
                    temparr = temparr[1].split("|");
                    tempstr = getPokémonInt(temparr[0]);
                }
            }
            else {
                temparr = data.split("pok:");
                tempstr = getPokémonInt(temparr[1]);
            }
            if (tempstr != undefined) {
                if (finaldataPokémon[parseInt(tempstr)][JSONPath_Reference] == "true") {
                    createParty(this.parentElement.parentElement,data)
                    partyShow(this.parentElement.parentElement);
                }
                else {
                    alert("Pokémon Unavailable.")
                }
            }
            else {
                alert("Data returned an error.")
            }
        }
        else {
            alert("Data returned an error.")
        }
    }
}

function reNumberMove(base) {
    var base;
    var selects = base.querySelectorAll(":scope select > option:first-child")

    for (var q = 0; q < selects.length; q++) {
        var x = q+1;
        selects[q].value = "Move #"+x;
        selects[q].innerText = "Move #"+x;
    }
    partyMemory("Save");
}


function statsCalc(type,level,base,iv,ev,nature,friendship) {
    var type;
    var level;
    var base;
    var iv;
    var ev;
    var nature;
    var friendship;

    if (typeof level == "string") {
        level = parseInt(level);
    }
    if (typeof base == "string") {
        base = parseInt(base);
    }
    if (typeof iv == "string") {
        iv = parseInt(iv);
    }
    if (typeof ev == "string") {
        ev = parseInt(ev);
    }
    if (typeof friendship == "string") {
        friendship = parseInt(friendship);
    }

    if (type == "HP") {
        if (base == 1) {
            return 1;
        }
        else {
            if (Generation >= 1 && Generation <= 2) {
                return Math.floor((((base+iv)*2+(Math.ceil(Math.sqrt(ev))/4))*level)/100)+level+10;
            }
            else if (GameID >= 31 && GameID <= 32) {
                return Math.floor(((2*base+iv)*level)/100)+level+10+ev;
            }
            else if (Generation >= 3) {
                return Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+level+10;
            }
        }
    }
    else {
        if (Generation >= 1 && Generation <= 2) {
            return Math.floor((((base+iv)*2+Math.floor(Math.ceil(Math.sqrt(ev))/4))*level)/100)+5;
        }
        else if (GameID >= 31 && GameID <= 32) {
            return Math.floor(((((2*base+iv)*level)/100)+5)*nature*friendship)+ev;
        }
        else if (Generation >= 3) {
            return Math.floor((Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+5)*nature);
        }
    }
}


function natureModifier(type,nature) {
    if (type == "Attack") {
        if (nature == "Lonely" || nature == "Brave" || nature == "Adamant" || nature == "Naughty") {
            return 1.1;
        }
        else if (nature == "Bold" || nature == "Timid" || nature == "Modest" || nature == "Calm") {
            return 0.9;
        }
    }
    else if (type == "Defense") {
        if (nature == "Bold" || nature == "Relaxed" || nature == "Impish" || nature == "Lax") {
            return 1.1;
        }
        else if (nature == "Lonely" || nature == "Hasty" || nature == "Mild" || nature == "Gentle") {
            return 0.9;
        }
    }
    else if (type == "Sp. Atk") {
        if (nature == "Modest" || nature == "Mild" || nature == "Quiet" || nature == "Rash") {
            return 1.1;
        }
        else if (nature == "Adamant" || nature == "Impish" || nature == "Jolly" || nature == "Careful") {
            return 0.9;
        }
    }
    else if (type == "Sp. Def") {
        if (nature == "Calm" || nature == "Gentle" || nature == "Sassy" || nature == "Careful") {
            return 1.1;
        }
        else if (nature == "Naughty" || nature == "Lax" || nature == "Naive" || nature == "Rash") {
            return 0.9;
        }
    }
    else if (type == "Speed") {
        if (nature == "Timid" || nature == "Hasty" || nature == "Jolly" || nature == "Naive") {
            return 1.1;
        }
        else if (nature == "Brave" || nature == "Relaxed" || nature == "Quiet" || nature == "Sassy") {
            return 0.9;
        }
    }
    return 1;
}


function calcPartyStat(divBase) {

    var divBase;
    var div;

    if (divBase.tagName == "DIV") {
        div = divBase;
    }
    else {
        div = findUpTag(divBase,"DIV");
    }

    var int = getPokémonInt(div.querySelector(':scope span[name="Pokémon"] img[value]').title)
    var level = div.querySelector(':scope aside > span:first-child input[type="number"]')
    var ivs = div.querySelectorAll(':scope aside > span[name="Individual Values"] > span:nth-child(2) > span:first-child input[type="number"]');
    var evs = div.querySelectorAll(':scope aside > span[name="Effort Values"] > span:nth-child(2) > span:first-child input[type="number"]');
    var natures = div.querySelectorAll(':scope aside span[name="Nature"] select');
    var friendships = div.querySelector(':scope aside label[name="Friendship"] input');

    var ivev = ["Individual Values","Effort Values"];

    for (var q = 0; q < ivev.length; q++) {
        var res = div.querySelectorAll(':scope aside > span[name="'+ivev[q]+'"] > span:nth-child(2) > span:last-child input[type="number"]');

        for (var i = 0; i < res.length; i++) {

            var stat = evs[i].placeholder.replaceAll(" EV","");

            var lvl = level.value;
            var base = returnData(int,"Base Stats "+stat,"")[0];
            var iv = ivs[i].value
            var ev = evs[i].value
            var nature;
            var friendship;

            if (Natures.length > 0) {
                nature = natureModifier(stat,natures[0].value);
            }
            else {
                nature = 1;
            }

            if (Friendship == true) {
                if (friendships.value != undefined && friendships.value != "") {
                    friendship = friendshipModifer(friendships.value);
                }
                else {
                    friendship = 1;
                }
            }

            if (lvl != "") {
                if (iv == "") {
                    iv = 0;
                }
                if (ev == "") {
                    ev = 0;
                }
                res[i].setAttribute("min",statsCalc(stat,lvl,base,iv,ev,nature,friendship));
                res[i].setAttribute("max",statsCalc(stat,lvl,base,iv,ev,nature,friendship));
                res[i].value = statsCalc(stat,lvl,base,iv,ev,nature,friendship);
            }
            else {
                res[i].setAttribute("min","0");
                res[i].setAttribute("max","0");
                res[i].value = 0;
            }
        }
    }



}

function formatMoveData(move) {

    var move;
    var tempStr;
    var tempArr = [];

    if (getMoveData(move,"Category") != undefined) {
        tempArr.push("Category: "+getMoveData(move,"Category"));
    }

    if (getMoveData(move,"PP Min") != undefined) {
        tempArr.push("PP: "+getMoveData(move,"PP Min"));
    }

    if (getMoveData(move,"Power") != undefined) {
        tempArr.push("Power: "+getMoveData(move,"Power"));
    }
    else {
        tempArr.push("Power: "+"–");
    }

    if (getMoveData(move,"Accuracy") != undefined) {
        tempArr.push("Accuracy: "+getMoveData(move,"Accuracy"));
    }
    else {
        tempArr.push("Accuracy: "+"–");
    }



    tempStr = tempArr.join("\n")

    return tempStr;

}


function dateHideShow(event,status) {
    var status;
    var tar = event.target;

    if (tar.value == "") {
        if (status == "open") {
            tar.style.color = "var(--fontDark)";
        }
        else if (status == "close"){
            tar.style.color = "transparent";
        }
    }
    else {
        if (status == "open"){
            tar.style.color = "var(--fontDark)";
        }
        else if (status == "close"){
            tar.style.color = null;
        }
    }
    
}





function changePartyEvolution(base,i) {

    var base;
    var evos = getEvolutionFamily(i).map(function(v) {return v["Pokémon"];});
    var data = getPartyData(base);

    evos = evos.filter(function(v) {
        return v != finaldataPokémon[i]["Pokémon"];
    })
    evos = evos.filter(function(v) {
        return v != finaldataPokémonForm[i]["Form_"+JSONPath_Form];
    })

    for (var q = 0; q < evos.length; q++) {
        var x = q + 1;
        evos[q] = x+". "+evos[q];
    }

    evos = evos.join("\n");

    var reply = prompt("Enter Number:\n"+evos,"");
    var num = [];

    if (reply != null && reply != "") {
        evos = evos.split("\n");

        for (var q = 0; q < evos.length; q++) {
            num.push(evos[q].split(". ",2)[0]);
        }

        for (var q = 0; q < evos.length; q++) {
            evos[q] = evos[q].split(". ",2)[1];
        }

        var result = evos[parseInt(reply)-1]




        if (data.includes("|")) {
            if (data.includes("pok")) {
                data = data.split("|");
                for (var u = 0; u < data.length; u++) {
                    if (data[u].includes("pok:")) {
                        data[u] = data[u].split(":",1)[0]+":"+result;
                        break;
                    }
                }
                data = data.join("|");
            }
        }
        else {
            if (data.includes("pok")) {
                data = data.split(":",1)[0]+":"+result;
            }
        }


        if (num.includes(reply)) {
            createParty(base,data)
            partyShow(base);
        }
        else {
            alert("Number returned an error.")
        }

        
    }
}





function changePartyForm(base,i) {

    var base;
    var forms = getPokémonForm(i);
    var data = getPartyData(base);


    forms = forms.filter(function(v) {
        return v != getPokémonName(i);
    })

    for (var q = 0; q < forms.length; q++) {
        var x = q + 1;
        forms[q] = x+". "+forms[q];
    }

    forms = forms.join("\n");

    var reply = prompt("Enter Number:\n"+forms,"");
    var num = [];

    if (reply != null && reply != "") {

        forms = forms.split("\n");

        for (var q = 0; q < forms.length; q++) {
            num.push(forms[q].split(". ",2)[0]);
        }

        for (var q = 0; q < forms.length; q++) {
            forms[q] = forms[q].split(". ",2)[1];
        }

        var result = forms[parseInt(reply)-1]

        if (data.includes("|")) {
            if (data.includes("pok")) {
                data = data.split("|");
                for (var u = 0; u < data.length; u++) {
                    if (data[u].includes("pok:")) {
                        data[u] = data[u].split(":",1)[0]+":"+result;
                        break;
                    }
                }
                data = data.join("|");
            }
        }
        else {
            if (data.includes("pok")) {
                data = data.split(":",1)[0]+":"+result;
            }
        }

        if (num.includes(reply)) {
            createParty(base,data)
            partyShow(base);
        }
        else {
            alert("Number returned an error.")
        }
        
    }
}