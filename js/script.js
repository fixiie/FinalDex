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
				if(finaldataPokémon[q][JSONPath_Reference] == "true") {
					var obj = new Object();
					obj["Integer"] = q;
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
	var popup = document.querySelector("#data-modal"+x+" .data-popup");
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
	var popup = document.querySelector("#data-modal"+x+" .data-popup");
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
		title = title.replaceAll("  ","");
	}
	if(navChecker != 1) {
		navChecker.fill(1);
		document.querySelector("#data-modal"+x+" #data-navigation label:nth-child(2)").click();
	}
	ul.setAttribute("name", type);
	if(type == "Ability") {
		id = getAbilityData(title,"ID");
		description = getAbilityData(title,"Flavor");
	} else if(type == "Held Item") {
		id = enhancetarget.getAttribute("name");
        description = getItemData(title,"Description").join("\n");
	}
	if(title.includes(" : ")) {
		title = title.split(" : ");
	}
	if(type == "Catch Rate") {
		if(Generation == 1) {
			formula = Math.round(((Math.min(parseInt(title)+1, 256)) / 256 * (85+1 / 256) / 256 * 100) * 10) / 10+"%";
		} else if(Generation == 2) {
			formula = Math.round(((Math.max(parseInt(title) / 3, 1)+1) / 256 * 100) * 10) / 10+"%";
		} else if(Generation == 3 || Generation == 4) {
			formula = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(title) / 3))) / 65536) ** 4 * 100) * 10) / 10+"%";
		} else if(Generation >= 5) {
			formula = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(title) / 3))) / 65536) ** 3 * 100) * 10) / 10+"%";
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
			formula = (parseInt(title)+1) * 256;
		} else if(Generation == 4) {
			formula = (parseInt(title)+1) * 255;
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
		icon = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(target.getAttribute("value"))+".png";
		iconpath.setAttribute("name","Item");
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
		additional = additional.charAt(0).toUpperCase()+additional.slice(1);
	}
	for(u = 0; u < lis.length; u++) {
		lis[u].remove();
	}
	
	if(type == "Ability") {
		var jsonpath = JSONPath_Ability;
		if(Generation <= 4) {
			var json = ["Primary","Secondary"];
		} else {
			var json = ["Primary","Secondary","Hidden"];
		}
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Egg Group") {
		var jsonpath = JSONPath_EggGroup;
		var json = ["Primary","Secondary"];
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Catch Rate") {
		var json = [JSONPath_CatchRate,"Percentage"];
	} else if(type == "Hatch Rate") {
		var json = ["Egg Cycle_"+JSONPath_HatchRateEggCycle,"Steps_"+JSONPath_HatchRateSteps];
	} else if(type == "Experience Yield") {
		var json = [JSONPath_ExperienceYield,"Category"];
	} else if(type == "Leveling Rate") {
		var json = [JSONPath_LevelingRate];
	} else if(type == "Type") {
		var jsonpath = JSONPath_Type;
		var json = ["Primary","Secondary"];
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Gender Ratio") {
		var jsonpath = JSONPath_GenderRatio;
		var json = ["Male","Female"];
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Base Stats") {
		if(Generation <= 1) {
			var jsonpath = JSONPath_BaseStats;
			var json = ["HP","Attack","Defense","Special","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		} else {
			var jsonpath = JSONPath_BaseStats;
			var json = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		}
	} else if(type == "EV Yield") {
		if(Generation <= 1) {
			var jsonpath = JSONPath_EVYield;
			var json = ["HP","Attack","Defense","Special","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		} else {
			var jsonpath = JSONPath_EVYield;
			var json = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		}
	} else if(type == "Held Item") {
		var jsonpath = JSONPath_HeldItem;
		var json = JSONPath_HeldItemPercentage;
		json = json.map(i => i+"_"+jsonpath);
	}
	if(id == undefined) {
		idpath.innerText = "";
		idpath.style.display = "none";
	} else if(id.includes("%")) {
		idpath.innerText = id;
		idpath.style.display = "unset";
	} else {
		idpath.innerText = "#"+id;
		idpath.style.display = "unset";
	}
	if(style == "Total") {
		titlepath.innerHTML = type+"<br>"+title;
	} else if(type == "Catch Rate" || type == "Experience Yield" || type == "Leveling Rate" || type == "Base Stats" || type == "EV Yield") {
		if(additional == undefined) {
			titlepath.innerHTML = type+"<br>"+title;
		} else {
			titlepath.innerHTML = type+" "+additional+"<br>"+title;
		}
	} else if(type == "Hatch Rate") {
		titlepath.innerHTML = "Egg Cycles<br>"+title;
	} else if(type == "Gender Ratio") {
		titlepath.innerHTML = type+"<br>"+"<span title='"+abbreviation+"'>"+alteration+"</span>";
	} else if (type == "Egg Group") {
        titlepath.innerHTML = type+"<br>"+"<span name='eggText"+title+"'>"+title+"</span>";
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						for(var y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						if(type == "Catch Rate") {
							if(Generation == 1) {
								obj["Percentage"] = Math.round(((Math.min(parseInt(arr[u][json[q]])+1, 256)) / 256 * (85+1 / 256) / 256 * 100) * 10) / 10+"%";
							}
							if(Generation == 2) {
								obj["Percentage"] = Math.round(((Math.max(parseInt(arr[u][json[q]]) / 3, 1)+1) / 256 * 100) * 10) / 10+"%";
							}
							if(Generation == 3 || Generation == 4) {
								obj["Percentage"] = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(arr[u][json[q]]) / 3))) / 65536) ** 4 * 100) * 10) / 10+"%";
							}
							if(Generation >= 5) {
								obj["Percentage"] = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(arr[u][json[q]]) / 3))) / 65536) ** 3 * 100) * 10) / 10+"%";
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
				if(arr[u][additional+"_"+jsonpath] == title) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
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
			return b[additional+"_"+jsonpath] - a[additional+"_"+jsonpath];
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						obj["Category"] = abbreviation2;
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						obj["Alteration"] = alteration2;
						obj["Abbreviation"] = abbreviation2;
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
            var int = result[u]["Integer"];
            var name = getPokémonName(int);

			var li = document.createElement("li");
			var span = document.createElement("span");
			if(type == "Ability") {
				if(Generation <= 4) {
					li.setAttribute("name","2");
				} else {
					li.setAttribute("name","3");
				}
			}
			var img = document.createElement("img");
            img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(int,"Box")+".png";
            img.title = name;
            img.setAttribute("value",int);
			img.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");

			if(getIntID(int,"") == x) {
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
						p.setAttribute("name","stat"+json[q].split("_")[0]);
					} else if(json[q].includes("_") && type != "Base Stats" || json[q].includes("_") && type != "EV Yield") {
						p.title = json[q].split("_")[0]+" "+type;
					} else if(type == "Catch Rate") {
						if(q == 0) {
							p.title = type;
						} else {
                            p.title = "When thrown at a full health "+name+" with an ordinary Poké Ball.";
						}
					} else if(type == "Experience Yield") {
						if(q == 0) {
							p.title = type;
						} else {
							p.title = type+" Category";
						}
					} else {
						p.title = type;
					}
					if(style == "Multiple") {
						if(result[u][json[q]] == title && json[q] == additional+"_"+jsonpath) {
							p.classList.add("select");
						}
					} else if(style == "Total") {
						if(json[q] == additional+"_"+jsonpath) {
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
								p.setAttribute("name","eggText"+result[u][json[q]]);
							} else {
								p.innerText = "–";
							}
						} else {
							if(result[u][json[q]] != undefined) {
								p.innerText = result[u][json[q]];
								if(type == "Ability") {
									p.setAttribute("name","Ability");
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
							img2.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+result[u][json[q]]+".png";
							img2.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
						}
						p.appendChild(img2);
					}
					li.appendChild(p);
				}
			}
		}
	} else {
		for(u = 0; u < result.length; u++) {
            var int = result[u]["Integer"];
            var name = getPokémonName(int);

			var li = document.createElement("li");
			var span = document.createElement("span");
			var img = document.createElement("img");
	
            img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(int,"Box")+".png";
            img.title = name;
            img.setAttribute("value",int);
			
			if(type == "Held Item") {
				li.setAttribute("name", json.length);
			}
			img.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
			if(getIntID(int,"") == x) {
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
					pimg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(result[u][json[q]])+".png";
                    pimg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
					pimg.title = result[u][json[q]];
					if(json[q].includes("_")) {
						span2.innerText = json[q].split("_")[0];
					} else {
						span2.innerText = json[q];
					}
					pimg.setAttribute("name","Item");
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

var variantIteration;
variantIteration = 0;

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

        searchFilter(document.getElementById("searchbar"),document.querySelector("#pokémon-outer > div ul"),"Remove");

        createContain(tempStr);

        ImageType("Populate");

        memory("Save","variant","game",document.querySelectorAll('#pokémon-outer > main[name="Settings"] > span[name="Variant"] input[type="checkbox"]'));
        memory("Restore","check","game",document.querySelectorAll('#pokémon-outer > div > ul input[type="checkbox"]'));
        memory("Restore","imgtype-path","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Path"]'));
        memory("Restore","imgtype-extension","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Extension"]'));
        memory("Restore","imgtype-type","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Type"]'));
        memory("Restore","imgtype-angle","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Angle"]'));

        ImageType("Execute");
        resizeDiv();
		dexSwitch();

		document.getElementById("searchbar").value = "";


        if (variantIteration != 0) {
            consoleText("Variants changed to "+tempStr.replace(/,([^,]*)$/, ' and $1').replaceAll(",",", ")+".");
        }

        variantIteration = variantIteration + 1;
	}
    

}


function preventCheckboxZero(base) {
    var base;
    var inputs = base.querySelectorAll(":scope input:checked");

    if (!inputs.length > 0) {
        event.target.checked = true;
        
        if(event.target.nextElementSibling.tagName == "LABEL") {
            event.target.nextElementSibling.animate([
                { transform: 'translateX(0px)'},
                { transform: 'translateX(2px)'},
                { transform: 'translateX(0px)'},
                { transform: 'translateX(-2px)'},
                { transform: 'translateX(0px)'}
            ], {
                duration: 200,
                easing: "linear",
                iterations: 1
            });
        }
        
    }
}

function dataRedirect() {

    var what;
    var where;

    var what;
    var typevariant;
    var lock;
    var notval = ["⮜","⮝","⮟","⮞"];

    var tar = this;
    if (tar.tagName == undefined) {
        tar = event.target;
    }

    if (what == undefined) {
        if(tar.getAttribute("value") != undefined) {
            what = tar.getAttribute("value");
        } else if (tar.innerText != undefined && tar.innerText != "" && tar.firstElementChild == undefined && !notval.includes(tar.innerText)) {
            what = tar.innerText;
        } else if(tar.getAttribute("title") != undefined) {
            what = tar.getAttribute("title");
        }
    }
    if (where == undefined) {
        var where = (tar.getAttribute("name")).toLowerCase();
    }
  

    if(where == "map") {
        typevariant = where;
    } else if(where == "ability") {
        typevariant = "abilities";
    } else {
        typevariant = where+"s";
    }
    typevariant = typevariant.charAt(0).toUpperCase()+typevariant.slice(1);
    var input = document.querySelector('#navigation input[value="'+typevariant+'"]:checked');
    var modal = document.querySelector(".data-modal-outer.open");




    
    if (what.includes(",")) {
        var y;
        y = what.split(",");

        for (var q = 0; q < y.length; q++) {
            var r = q+1;
            y[q] = r+". "+y[q];
        }
        y = y.join("\n")

        var selection = prompt("Enter Number:\n"+y,"");

        y = y.split("\n");
        
        for (var q = 0; q < y.length; q++) {
            var num = q+1;
            y[q] = y[q].split(num+". ")[1];
        }

        if (selection != null && selection != "") {
            if (parseInt(selection) != NaN && y[parseInt(selection)-1] != undefined) {
                what = y[parseInt(selection)-1];
            }
            else {
                consoleText("Returned an error.");
                return;
            }
        }
      
    }


    if (modal != null) {
        if (where != "map") {
            lock = confirm("Redirecting you to the "+where+" "+what+".\nDo you want to continue?");
        }
        else {
            lock = confirm("Redirecting you to "+what+".\nDo you want to continue?");
        }
    }
    else {
        if (input == null) {
            if (where != "map") {
                lock = confirm("Redirecting you to the "+where+" "+what+".\nDo you want to continue?");
            }
            else {
                lock = confirm("Redirecting you to "+what+".\nDo you want to continue?");
            }
        }
        else {
            lock = true;
        }
    }
    


    if (lock) {
        var z = what.toLowerCase();
        var modalOpen = document.querySelector(".data-modal-outer.open");
        var navInput = document.querySelector("#navigation > input[value='"+typevariant+"']");
        var searchExit = document.querySelector('#'+where+'-search-exit');
        var tar = document.querySelector('#'+where+'-options > label[data-search-name="'+z+'"]');

        searchExit.click();

        if (tar != null) {
            if (where == "item") {

                var pocket = tar.getAttribute("data-pocket");
                var pocketInput = document.querySelector('#item-options-pocket input[alt="'+pocket+'"]');
                if (pocketInput.checked == false) {
                    pocketInput.click();
                }
            }
        
            if(modalOpen != undefined) {
                modalOpen.classList.remove("open");
            }
            navInput.click();
            tar.click();
            tar.scrollIntoView();

        }
        else if (!notval.includes(this.innerText)) {
            if (where == "map") {
                consoleText("Could not find location.")
            }
            else {
                consoleText("Could not find "+where+".")
            }
        }
    }


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
		column = ["Primary","Secondary"];
		column = column.map(i => i+"_"+JSONPath_Type);
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
			column = ["Primary","Secondary","Hidden"];
		} else {
			column = ["Primary","Secondary"];
		}
		column = column.map(i => i+"_"+JSONPath_Ability);
	} else if(type.includes("Catch Rate")) {
		arr = finaldataPokémonCatchRate;
		column = JSONPath_CatchRate;
	} else if(type.includes("Hatch Rate")) {
		arr = finaldataPokémonHatchRate;
		column = ["Egg Cycle_"+JSONPath_HatchRateEggCycle,"Steps_"+JSONPath_HatchRateSteps];
	} else if(type.includes("Gender Ratio")) {
		arr = finaldataPokémonGenderRatio;
		column = ["Male","Female"];
		column = column.map(i => i+"_"+JSONPath_GenderRatio);
	} else if(type.includes("Egg Group")) {
		arr = finaldataPokémonEggGroup;
		column = ["Primary","Secondary"];
		column = column.map(i => i+"_"+JSONPath_EggGroup);
	} else if(type.includes("Experience Yield")) {
		arr = finaldataPokémonExperienceYield;
		column = JSONPath_ExperienceYield;
	} else if(type.includes("Leveling Rate")) {
		arr = finaldataPokémonLevelingRate;
		column = JSONPath_LevelingRate;
	} else if(type.includes("Held Item")) {
		arr = finaldataPokémonHeldItem;
		column = JSONPath_HeldItemPercentage;
		column = column.map(i => i+"_"+JSONPath_HeldItem);
	} else if(type.includes("Base Friendship")) {
		arr = finaldataPokémonFriendship;
		column = JSONPath_Friendship;
	} else if(type.includes("Base Stats HP")) {
		arr = finaldataPokémonBaseStats;
		column = "HP"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Attack")) {
		arr = finaldataPokémonBaseStats;
		column = "Attack"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Defense")) {
		arr = finaldataPokémonBaseStats;
		column = "Defense"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Special")) {
		arr = finaldataPokémonBaseStats;
		column = "Special"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Sp. Atk")) {
		arr = finaldataPokémonBaseStats;
		column = "Sp. Atk"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Sp. Def")) {
		arr = finaldataPokémonBaseStats;
		column = "Sp. Def"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Speed")) {
		arr = finaldataPokémonBaseStats;
		column = "Speed"+"_"+JSONPath_BaseStats;
	} else if(type.includes("Base Stats Total")) {
		arr = finaldataPokémonBaseStats;
		column = "Total"+"_"+JSONPath_BaseStats;
	} else if(type.includes("EV Yield HP")) {
		arr = finaldataPokémonEVYield;
		column = "HP"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Attack")) {
		arr = finaldataPokémonEVYield;
		column = "Attack"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Defense")) {
		arr = finaldataPokémonEVYield;
		column = "Defense"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Special")) {
		arr = finaldataPokémonEVYield;
		column = "Special"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Sp. Atk")) {
		arr = finaldataPokémonEVYield;
		column = "Sp. Atk"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Sp. Def")) {
		arr = finaldataPokémonEVYield;
		column = "Sp. Def"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Speed")) {
		arr = finaldataPokémonEVYield;
		column = "Speed"+"_"+JSONPath_EVYield;
	} else if(type.includes("EV Yield Total")) {
		arr = finaldataPokémonEVYield;
		column = "Total"+"_"+JSONPath_EVYield;
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
        combinedValues = combinedValues+values[i];
    }

    valueVSlimit = totallimit - combinedValues;

    var tempArr = [];

    for (i = 0; i < values.length; i++) {
        if ((valueVSlimit+values[i]) >= limit) {
            tempArr.push(limit)
        }
        else {
            tempArr.push(valueVSlimit+values[i])
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

        var tempArr = ["Moves","Stats","Additional",""];
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

    item.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+this.name+".png";
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
        var baseStats = base.querySelector(':scope span[name="Stats"] > span:nth-child(2) > span:last-child');
        baseStats.removeAttribute("name");
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
                consoleText("Added "+drag+" to Party.");
            }
            else {
                consoleText("Party is full!")
            }
        }
        else if (e.target.innerText == "Box") {
            storeInBox("pok:"+drag);
            consoleText("Added "+drag+" to Box.");
        }
        else if (e.target.innerText == "+") {
            var base = e.target.parentElement.parentElement;
            createParty(base,"pok:"+drag);
            partyShow(base);
            consoleText("Added "+drag+" to Party.");
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
                pok = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
        }
    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0]+":","")
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
    var baseIV = base.querySelector(':scope span[name="Stats"] > span:nth-child(2) > span[name="IV"]');
    var baseEV = base.querySelector(':scope span[name="Stats"] > span:nth-child(2) > span[name="EV"]');
    var baseStats = base.querySelector(':scope span[name="Stats"] > span:nth-child(2) > span:last-child');
    var baseMetLocation = base.querySelector(':scope span[name="Additional"] label[name="Location"] select');
    var baseMetLevel = base.querySelector(':scope span[name="Additional"] label[name="Level"] input');
    var baseMetDate = base.querySelector(':scope span[name="Additional"] label[name="Date"] input');
    var baseFriendship = base.querySelector(':scope span[name="Additional"] label[name="Friendship"] input');
    var baseExport = base.querySelector(':scope aside > span:last-child > select:last-child');

    var imgtype = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select[name="Path"]');
    var imgtypePath = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select[name="Path"] option[value="'+imgtype.value+'"]').getAttribute("data-path");
    var imgtypeCategory = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select[name="Path"] option[value="'+imgtype.value+'"]').getAttribute("data-category");
    var imgtypeExtension = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select[name="Extension"]').value;
    var imgtypeType = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select[name="Type"]').value;
    var imgtypeAngle = document.querySelector('#pokémon-outer main[name="Settings"] span[name="ImageType"] select[name="Angle"]').value;
    
    var type1 = returnData(i,"Type","undefined")[0];
    var type2 = returnData(i,"Type","undefined")[1];

    if (type2 != undefined) {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type2+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1+","+type2);
    }
    else {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type1+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1);
    }

    basePok.src = "./media/Images/Pokémon/"+imgtypeCategory+"/"+imgtypeExtension+"/"+imgtypeType+"/"+imgtypeAngle+"/"+imgtypePath+"/"+getPokémonMediaPath(i,imgtypeCategory)+"."+imgtypeExtension;
   
    
    basePok.setAttribute("value",i);
    basePok.title = getPokémonName(i);
    baseNick.setAttribute("placeholder",getPokémonName(i));


    if (HeldItem == true) {

        var items = [];
        var result = finaldataItems.map(el => el["Pocket_"+JSONPath_Items] == "Berries" ? {...el, ["Pocket_"+JSONPath_Items]: "a"} : el).map(el => el["Pocket_"+JSONPath_Items] == "Items" || el["Pocket_"+JSONPath_Items] == "Other Items"  ? {...el, ["Pocket_"+JSONPath_Items]: "b"} : el).map(el => el["Pocket_"+JSONPath_Items] != "a" && el["Pocket_"+JSONPath_Items] != "b" ? {...el, ["Pocket_"+JSONPath_Items]: "c"} : el);

        items = sortObjectArray(result,"Pocket_"+JSONPath_Items);

        var obj = new Object();
        obj["Name_"+JSONPath_Items] = "Item";
        items.unshift(obj);



        if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"] != undefined) {
            var req = [];
            if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"].includes(",")) {
                req = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"].split(",")
            }
            else {
                req[0] = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"];
            }
            for (var q = 0; q < items.length; q++) {
                if (items[q]["Name_"+JSONPath_Items] != undefined) {
                    if (req.includes(items[q]["Name_"+JSONPath_Items])) {
                        var teamItemOption = document.createElement("option");
                        teamItemOption.value = items[q]["Name_"+JSONPath_Items];
                        teamItemOption.innerText = items[q]["Name_"+JSONPath_Items];
                        baseItem.appendChild(teamItemOption);

                        if (items[q]["Icon_"+JSONPath_Items] != undefined) {
                            teamItemOption.setAttribute("name",items[q]["Icon_"+JSONPath_Items]);
                        }
                        else {
                            teamItemOption.setAttribute("name",items[q]["Name_"+JSONPath_Items]);
                        }
                    }
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
            for (var q = 0; q < items.length; q++) {
                if (items[q]["Name_"+JSONPath_Items] != undefined) {
                    if (!notreq.includes(items[q]["Name_"+JSONPath_Items])) {
                        var teamItemOption = document.createElement("option");
                        teamItemOption.value = items[q]["Name_"+JSONPath_Items];
                        teamItemOption.innerText = items[q]["Name_"+JSONPath_Items];
                        baseItem.appendChild(teamItemOption);

                        if (items[q]["Icon_"+JSONPath_Items] != undefined) {
                            teamItemOption.setAttribute("name",items[q]["Icon_"+JSONPath_Items]);
                        }
                        else {
                            teamItemOption.setAttribute("name",items[q]["Name_"+JSONPath_Items]);
                        }
                    }
                }
            }
        }
        else {
            for (var q = 0; q < items.length; q++) {
                if (items[q]["Name_"+JSONPath_Items] != undefined) {
                    var teamItemOption = document.createElement("option");
                    teamItemOption.value = items[q]["Name_"+JSONPath_Items];
                    teamItemOption.innerText = items[q]["Name_"+JSONPath_Items];
                    baseItem.appendChild(teamItemOption);

                    if (items[q]["Icon_"+JSONPath_Items] != undefined) {
                        teamItemOption.setAttribute("name",items[q]["Icon_"+JSONPath_Items]);
                    }
                    else {
                        teamItemOption.setAttribute("name",items[q]["Name_"+JSONPath_Items]);
                    }
                }
            }
        }
    }

    if (Gender == true) {
        var tempgender = returnData(i,"Gender Ratio","undefined");

        var possibleGender = [];
        if (getPokémonName(i).includes("Male")) {
            possibleGender = ["♂"];
        }
        else if (getPokémonName(i).includes("Female")) {
            possibleGender = ["♀"];
        }
        else {
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
        var x = u+1;
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
        var abilities = returnData(i,"Ability","");

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
        if (getAbilityData(baseAbility.value,"Flavor") != undefined) {
            baseAbility.setAttribute("title",getAbilityData(baseAbility.value,"Flavor"));
        }
    }

    



    if (nick != undefined) {
        baseNick.value = nick;
    }
    if (item != undefined && HeldItem == true) {
        var baseItems = baseItem.querySelectorAll(":scope option");
        var opt = baseItem.querySelector(':scope option[value="'+item+'"]')
        var tempArr = [];
        for (var q = 0; q < baseItems.length; q++) {
            tempArr.push(baseItems[q].value);
        }

        if (tempArr.includes(item)) {
            baseItem.value = item;
            baseItem.setAttribute("name",opt.getAttribute("name"));
            baseItem.style.fontStyle = "unset";
            baseItemImg.style.display = "unset";
            baseItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+opt.getAttribute("name")+".png";
            baseItemImg.setAttribute("title",item);
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

        baseStats.setAttribute("name",nature);
    }




    if (move != undefined) {
        var tempmove = [move];
        if (move.includes(",")) {
            tempmove = move.split(",");
        }
        for (var q = 0; q < tempmove.length; q++) {
            var y = q+1;
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
            var y = q+1;
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
            var y = q+1;
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
        if (baseFriendship != null) {
            if (friendship != undefined) {
                baseFriendship.value = friendship;
            }
            else if (returnData(i,"Base Friendship","")[0] != undefined){
                baseFriendship.value = returnData(i,"Base Friendship","")[0];
            }
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
    var arrE = finaldataLearnsetEvolution;
    var arrL = finaldataLearnsetLevel;
    var arrM = finaldataLearnsetMachine;
    var arrB = finaldataLearnsetBreed;

    var additional;

    var name = getPokémonName2(int);

    var evores = [];
    var lvlres = [];
    var machres = [];
    var breres = [];


    for(var i = 0; i < arrE.length; i++) {
		if(arrE[i]["Pokémon"] == name && getApplicable(arrE[i]["Game"])) {
            var obj = new Object();
            obj["Pokémon"] = arrE[i]["Pokémon"];
            obj["Move"] = arrE[i]["Move"];
            obj["Evolution"] = arrE[i]["Evolution"];
            obj["Additional"] = arrE[i]["Additional"];
            obj["Game"] = arrE[i]["Game"];
            obj["Type"] = "Prior Evolution";
            evores.push(obj)
		}
	}

    for(var i = 0; i < arrL.length; i++) {
		if(arrL[i]["Pokémon"] == name && getApplicable(arrL[i]["Game"])) {
            var obj = new Object();
            obj["Pokémon"] = arrL[i]["Pokémon"];
            obj["Factor"] = arrL[i]["Factor"];
            obj["Move"] = arrL[i]["Move"];
            obj["Game"] = arrL[i]["Game"];
            obj["Type"] = "Level Up";
            lvlres.push(obj)
		}
	}

    for(var i = 0; i < arrM.length; i++) {
		if(arrM[i]["Pokémon"] == name && getApplicable(arrM[i]["Game"])) {
            var obj = new Object();
            obj["Pokémon"] = arrM[i]["Pokémon"];
            obj["Machine"] = arrM[i]["Machine"];
            obj["Move"] = arrM[i]["Move"];
            obj["Game"] = arrM[i]["Game"];
            obj["Type"] = "Machine";
            machres.push(obj)
		}
	}

    for(var i = 0; i < arrB.length; i++) {
		if(arrB[i]["Pokémon"] == name && getApplicable(arrB[i]["Game"])) {
            var obj = new Object();
            obj["Pokémon"] = arrB[i]["Pokémon"];
            obj["Parent"] = arrB[i]["Parent"];
            obj["Item"] = arrB[i]["Item"];
            obj["Additional"] = arrB[i]["Additional"];
            obj["Move"] = arrB[i]["Move"];
            obj["Game"] = arrB[i]["Game"];
            obj["Type"] = "Breeding";
            breres.push(obj)
		}
	}

    var name = getPokémonName2([finaldataPokémon.map(function(e) {return e.ID;}).indexOf(finaldataPokémon[int]["ID"])]);


    if (!evores.length > 0) {
        for(var i = 0; i < arrE.length; i++) {
            if(arrE[i]["Pokémon"] == name && getApplicable(arrE[i]["Game"])) {
                var obj = new Object();
                obj["Pokémon"] = arrE[i]["Pokémon"];
                obj["Move"] = arrE[i]["Move"];
                obj["Evolution"] = arrE[i]["Evolution"];
                obj["Additional"] = arrE[i]["Additional"];
                obj["Game"] = arrE[i]["Game"];
                obj["Type"] = "Prior Evolution";
                evores.push(obj)
            }
        }
    }
    
    if (!lvlres.length > 0) {
        for(var i = 0; i < arrL.length; i++) {
            if(arrL[i]["Pokémon"] == name && getApplicable(arrL[i]["Game"])) {
                var obj = new Object();
                obj["Pokémon"] = arrL[i]["Pokémon"];
                obj["Factor"] = arrL[i]["Factor"];
                obj["Move"] = arrL[i]["Move"];
                obj["Game"] = arrL[i]["Game"];
                obj["Type"] = "Level Up";
                lvlres.push(obj)
            }
        }
    }

    if (!machres.length > 0) {
        for(var i = 0; i < arrM.length; i++) {
            if(arrM[i]["Pokémon"] == name && getApplicable(arrM[i]["Game"])) {
                var obj = new Object();
                obj["Pokémon"] = arrM[i]["Pokémon"];
                obj["Machine"] = arrM[i]["Machine"];
                obj["Move"] = arrM[i]["Move"];
                obj["Game"] = arrM[i]["Game"];
                obj["Type"] = "Machine";
                machres.push(obj)
            }
        }
    }

    if (!breres.length > 0) {
        for(var i = 0; i < arrB.length; i++) {
            if(arrB[i]["Pokémon"] == name && getApplicable(arrB[i]["Game"])) {
                var obj = new Object();
                obj["Pokémon"] = arrB[i]["Pokémon"];
                obj["Parent"] = arrB[i]["Parent"];
                obj["Item"] = arrB[i]["Item"];
                obj["Additional"] = arrB[i]["Additional"];
                obj["Move"] = arrB[i]["Move"];
                obj["Game"] = arrB[i]["Game"];
                obj["Type"] = "Egg Move";
                breres.push(obj)
            }
        }
    }

    

    var result = [];

    for(var q = 0; q < evores.length; q++) {
        result.push(evores[q]);
    }
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
    var opt = this.querySelector(':scope > option[value="'+this.value+'"]');

    if (this.value == "♂") {
        this.style.color = "var(--colorBlue)";
    }
    if (this.value == "♀") {
        this.style.color = "var(--colorRed)";
    }
    if (this.value == "☿") {
        this.style.color = "var(--fontDark)";
    }

    if (this.firstElementChild.value.includes("Move")) {
        if (this.value == this.firstElementChild.value) {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }
    
    if (this.firstElementChild.value.includes("Item")) {
        if (this.value == "Item") {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }



    if (this.firstElementChild.value == "Item") {
        this.setAttribute("name",opt.getAttribute("name"));
    }



    if (this.parentElement.getAttribute("name") == "Nature") {
        var base = this.parentElement.parentElement.parentElement;
        base.querySelector(':scope span[name="Stats"] > span:nth-child(2) > span:last-child').setAttribute("name",this.value);
    }

    if (this.parentElement.getAttribute("name") == "Ability") {
        if (getAbilityData(this.value,"Flavor") != undefined) {
            this.setAttribute("title",getAbilityData(this.value,"Flavor"));
        }
        this.setAttribute("name",this.querySelector(':scope > option[value="'+this.value+'"]').getAttribute("name"));
    }


    if (this.firstElementChild.value == "➢") {
        var tar = this.parentElement.parentElement.parentElement;
        var base = document.querySelectorAll('#pokémon-outer > main[name="Team"] section div[name="empty"]');
   

        if (this.value == "Add Copy to Box") {
            storeInBox(getPartyData(tar));
            consoleText("Copy added to Box.");
        }
        else if (this.value == "Add Copy to Party") {
            if (base.length > 0) {
                createParty(base[0],getPartyData(tar));
                partyShow(base[0]);
                consoleText("Copy added to Party.");
            }
            else {
                consoleText("Party is full!")
            }
        }
        else if (this.value == "Export Pokémon Data String") {
            navigator.clipboard.writeText(getPartyData(tar));
            console.log(getPartyData(tar));
            consoleText("Copied!");
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
            partyHide(tar);
            partyDefault(tar);
            consoleText("Pokémon deleted.");
        }
        else if (this.value == "Send to Box") {
            consoleText("Sent "+getPartyData(tar).split("|")[0].split("pok:")[1]+" to Box.");
            storeInBox(getPartyData(tar));
            partyHide(tar);
            partyDefault(tar);
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
                pok = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
        }

    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0]+":","")
        }
    }

    i = getPokémonInt(pok);

    var li = document.createElement("li");
    var shadow = document.createElement("span");
    var img = document.createElement("img");
    img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(i,"Box")+".png";
    img.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
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
    var iv = base.querySelectorAll(':scope > aside:first-child > span[name="Stats"] > span:nth-child(2) > span[name="IV"] > input');
    var ev = base.querySelectorAll(':scope > aside:first-child > span[name="Stats"] > span:nth-child(2) > span[name="EV"] > input');

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
    var data = prompt("Enter Pokémon Data String:","");

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
                    consoleText("Added "+getPokémonName(tempstr)+" to Party.")
                }
                else {
                    consoleText("Pokémon Unavailable.")
                }
            }
            else {
                consoleText("Data returned an error.")
            }
        }
        else {
            consoleText("Data returned an error.")
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

function getNatureTitle(nature) {
    var result = []

    if (nature == "Lonely" || nature == "Brave" || nature == "Adamant" || nature == "Naughty") {
        result[0] =  "+Attack";
    }
    else if (nature == "Bold" || nature == "Timid" || nature == "Modest" || nature == "Calm") {
        result[1] =  "-Attack";
    }

    if (nature == "Bold" || nature == "Relaxed" || nature == "Impish" || nature == "Lax") {
        result[0] =  "+Defense";
    }
    else if (nature == "Lonely" || nature == "Hasty" || nature == "Mild" || nature == "Gentle") {
        result[1] =  "-Defense";
    }

    if (nature == "Modest" || nature == "Mild" || nature == "Quiet" || nature == "Rash") {
        result[0] =  "+Sp. Atk";
    }
    else if (nature == "Adamant" || nature == "Impish" || nature == "Jolly" || nature == "Careful") {
        result[1] =  "-Sp. Atk";
    }

    if (nature == "Calm" || nature == "Gentle" || nature == "Sassy" || nature == "Careful") {
        result[0] =  "+Sp. Def";
    }
    else if (nature == "Naughty" || nature == "Lax" || nature == "Naive" || nature == "Rash") {
        result[1] =  "-Sp. Def";
    }

    if (nature == "Timid" || nature == "Hasty" || nature == "Jolly" || nature == "Naive") {
        result[0] =  "+Speed";
    }
    else if (nature == "Brave" || nature == "Relaxed" || nature == "Quiet" || nature == "Sassy") {
        result[1] =  "-Speed";
    }
    if(result.length == 0) {
        return "Neutral"
    }
    else {
        return result.join("\n");
    }
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
    var ivs = div.querySelectorAll(':scope aside > span[name="Stats"] > span:nth-child(2) > span[name="IV"] input[type="number"]');
    var evs = div.querySelectorAll(':scope aside > span[name="Stats"] > span:nth-child(2) > span[name="EV"] input[type="number"]');
    var natures = div.querySelectorAll(':scope aside span[name="Nature"] select');
    var friendships = div.querySelector(':scope aside label[name="Friendship"] input');
 
    var res = div.querySelectorAll(':scope aside > span[name="Stats"] > span:nth-child(2) > span:last-child input[type="number"]');


    for (var i = 0; i < res.length; i++) {

        var stat = Stats[i];
 

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
        var x = q+1;
        evos[q] = x+". "+evos[q];
    }

    evos = evos.join("\n");

    var reply = prompt("Change Evolution\nEnter Number:\n"+evos,"");
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
            consoleText("Evolution updated.");
        }
        else {
            consoleText("Number returned an error.")
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
        var x = q+1;
        forms[q] = x+". "+forms[q];
    }

    forms = forms.join("\n");

    var reply = prompt("Change Form\nEnter Number:\n"+forms,"");
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
            consoleText("Form updated.");
        }
        else {
            consoleText("Number returned an error.")
        }
        
    }
}


function moveLearnsetPartyBox(action) {
    var action;
    var base = document.querySelector(".move-learnset-content > ul");
    var lis = base.querySelectorAll(":scope > li");
    var boxImg = document.querySelectorAll('#pokémon-outer > main[name="Team"] > section[name="Box"] ul > li img[value]');
    var partyImg = document.querySelectorAll('#pokémon-outer > main[name="Team"] > section[name="Party"] > div img[value]');
    var partyArr = [];
    var boxArr = [];

    for (var q = 0; q < boxImg.length; q++) {
        if (boxImg[q].getAttribute("value") != undefined) {
            boxArr.push(boxImg[q].getAttribute("value"));
        }
        else {
            boxArr.push("");
        }
    }


    for (var q = 0; q < partyImg.length; q++) {
        if (partyImg[q].getAttribute("value") != undefined) {
            partyArr.push(partyImg[q].getAttribute("value"));
        }
        else {
            partyArr.push("");
        }
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }

    if (action != undefined) {
        for (var i = 0; i < lis.length; i++) {
            var lisImg = lis[i].querySelectorAll(":scope div img[value]");
            for (var q = 0; q < lisImg.length; q++) {
                var conditions = [];
                var tempArr = [];
                if(action.includes(",")) {
                    for (var u = 0; u < action.split(",").length; u++) {
                        tempArr.push(action.split(",")[u]);
                    }
                }
                else {
                    tempArr = [action];
                }

                for (var u = 0; u < tempArr.length; u++) {
                    if (tempArr[u] == "PARTY") {
                        conditions.push(partyArr.includes(lisImg[q].getAttribute("value")))
                    }
                    if (tempArr[u] == "BOX") {
                        conditions.push(boxArr.includes(lisImg[q].getAttribute("value")))
                    }
                }
                if (conditions[0] == true || conditions[1] == true) {
                    lis[i].style.removeProperty("display");
                }
            }
        }
    }
    else {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.removeProperty("display");
        }
    }
  



}

var moveLearnsetPB = [];
function movePartyBoxLearnset() {
    var label = this.parentElement.querySelector(':scope > label[for="'+this.id+'"]');

    if (this.checked == true) {
        if (!moveLearnsetPB.includes(label.innerText)) {
            moveLearnsetPB.push(label.innerText);
        }
    }
    else if (this.checked == false) {
        if (moveLearnsetPB.includes(label.innerText)) {
            moveLearnsetPB = moveLearnsetPB.filter(function(v) {
                return v != label.innerText;
            })
        }
    }
    var tempStr;

    if (moveLearnsetPB.length > 1) {
        tempStr = moveLearnsetPB.join(",");
    }
    else {
        tempStr = moveLearnsetPB[0];
    }

    var navMove = document.querySelector('#navigation input[value="Moves"]');
    navMove.addEventListener("change", function() {moveLearnsetPartyBox(tempStr);});

    moveLearnsetPartyBox(tempStr);
    
}




function abilityLearnsetPartyBox(action) {
    var action;
    var base = document.querySelector(".ability-sidebar > ul");
    var lis = base.querySelectorAll(":scope > li");
    var boxImg = document.querySelectorAll('#pokémon-outer > main[name="Team"] > section[name="Box"] ul > li img[value]');
    var partyImg = document.querySelectorAll('#pokémon-outer > main[name="Team"] > section[name="Party"] > div img[value]');
    var partyArr = [];
    var boxArr = [];

    for (var q = 0; q < boxImg.length; q++) {
        if (boxImg[q].getAttribute("value") != undefined) {
            boxArr.push(boxImg[q].getAttribute("value"));
        }
        else {
            boxArr.push("");
        }
    }


    for (var q = 0; q < partyImg.length; q++) {
        if (partyImg[q].getAttribute("value") != undefined) {
            partyArr.push(partyImg[q].getAttribute("value"));
        }
        else {
            partyArr.push("");
        }
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }

    if (action != undefined) {
        for (var i = 0; i < lis.length; i++) {
            var lisImg = lis[i].querySelectorAll(":scope div img[value]");
            for (var q = 0; q < lisImg.length; q++) {
                var conditions = [];
                var tempArr = [];
                if(action.includes(",")) {
                    for (var u = 0; u < action.split(",").length; u++) {
                        tempArr.push(action.split(",")[u]);
                    }
                }
                else {
                    tempArr = [action];
                }

                for (var u = 0; u < tempArr.length; u++) {
                    if (tempArr[u] == "PARTY") {
                        conditions.push(partyArr.includes(lisImg[q].getAttribute("value")))
                    }
                    if (tempArr[u] == "BOX") {
                        conditions.push(boxArr.includes(lisImg[q].getAttribute("value")))
                    }
                }
                if (conditions[0] == true || conditions[1] == true) {
                    lis[i].style.removeProperty("display");
                }
            }
        }
    }
    else {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.removeProperty("display");
        }
    }
  



}
var abilityLearnsetPB = [];
function abilityPartyBoxLearnset() {
    var label = this.parentElement.querySelector(':scope > label[for="'+this.id+'"]');

    if (this.checked == true) {
        if (!abilityLearnsetPB.includes(label.innerText)) {
            abilityLearnsetPB.push(label.innerText);
        }
    }
    else if (this.checked == false) {
        if (abilityLearnsetPB.includes(label.innerText)) {
            abilityLearnsetPB = abilityLearnsetPB.filter(function(v) {
                return v != label.innerText;
            })
        }
    }
    var tempStr;

    if (abilityLearnsetPB.length > 1) {
        tempStr = abilityLearnsetPB.join(",");
    }
    else {
        tempStr = abilityLearnsetPB[0];
    }

    var navAbility = document.querySelector('#navigation input[value="Abilities"]');
    navAbility.addEventListener("change", function() {abilityLearnsetPartyBox(tempStr);});

    abilityLearnsetPartyBox(tempStr);
    
}


function trainerPokExport() {
    var data = this.value;
    navigator.clipboard.writeText(data);
    consoleText("Copied Data String!");
}


function trainerPokCycle(event) {
    var tar = event.target;
    var val = tar.value;
    var base = tar.parentElement.querySelector(':scope > div[name="Data"]');


    var tempArr = [];
    var divs = base.querySelectorAll(':scope > div[name]');

    for (var q = 0; q < divs.length; q++) {
        tempArr.push(divs[q].getAttribute("name"));
    }

    if (tempArr.length > 1) {
        for (var q = 0; q < divs.length; q++) {
            divs[q].style.display = "none";
        }


        var div = base.querySelectorAll(':scope > div[name="'+val+'"]');
        for (var q = 0; q < div.length; q++) {
            div[q].style.display = "unset";
        }
        
        for (var q = 0; q < tempArr.length; q++) {
            if(tempArr[q] == val) {
                if (q != (parseInt(tempArr.length)-1)) {
                    event.target.value = tempArr[q+1];
                }
                else {
                    event.target.value = tempArr[0];   
                }
            }
        }
    }
}


function overviewMove(base) {

    var base;

    if (base.innerText == undefined) {
        base = this;
    }

    var trueBase = findUpTag(base,"BASE");

    var tar = trueBase.querySelector(':scope > div > div');
    var span = trueBase.querySelector(':scope > div > div span[name="'+base.value+'"]');
    var buttons = trueBase.querySelectorAll(":scope button")
    var x = parseInt(base.value);
    var y = parseInt(tar.lastChild.getAttribute("name"));
    var left = span.previousElementSibling;
    var right = span.nextElementSibling;
    var header = trueBase.querySelector(":scope > span h4");

    if (base.innerText == "‹" && left != undefined) {
        x = parseInt(base.value) - 1;
        tar.style.transform = "translate(-"+x+"00%, 0)";

        if (left != null) {
            header.innerText = left.querySelector(":scope img").getAttribute("title");
            for (var q = 0; q < buttons.length; q++) {
                buttons[q].value = left.getAttribute("name");
            }
        }

        for (var q = 0; q < buttons.length; q++) {
            buttons[q].style.removeProperty("display");
        }

        if (x <= 0) {
            buttons[0].style.display = "none";
        }
        else {
            buttons[0].style.removeProperty("display");
        }
    }
    else if (base.innerText == "›" && right != undefined) {
        x = parseInt(base.value)+1;
        tar.style.transform = "translate(-"+x+"00%, 0)";

        if (right != null) {
            header.innerText = right.querySelector(":scope img").getAttribute("title");
            for (var q = 0; q < buttons.length; q++) {
                buttons[q].value = right.getAttribute("name");
            }
        }

        for (var q = 0; q < buttons.length; q++) {
            buttons[q].style.removeProperty("display");
        }

        if (x >= y) {
            buttons[1].style.display = "none";
        }
        else {
            buttons[1].style.removeProperty("display");
        }
    }


}




function fullscreenIMG(imgs,x) {
    var imgs;
    var x;
    var base = document.querySelector("#fullscreen");
    var ul = base.querySelector(":scope > div ul");

    x = parseInt(x);
    var y = x+1;

    var baseBox = base.querySelectorAll(":scope > div ul li");
    for (var i = 0; i < baseBox.length; i++) {
        baseBox[i].remove();
    }

    var buttons = base.querySelectorAll(":scope button p");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("value",x);
        buttons[i].style.display = "none";
    }

    for (var i = 0; i < imgs.length; i++) {
        var imgBox = document.createElement("li");
        var img = document.createElement("img");
        img.src = imgs[i].src;
        img.title = imgs[i].title;
        imgBox.setAttribute("name",i);
        base.querySelector(":scope > div ul").appendChild(imgBox)
        imgBox.appendChild(img);        
        
        img.addEventListener("mousedown",function(event){if(event.button === 1){exitFullscreen()}});
        img.addEventListener("click",function(event){classSwitches("zoom",base.querySelectorAll(":scope img"))});
    }

    base.classList.add("open");
    ul.style.transform = "translate(-"+x+"00%)";
    base.focus();


    
    if (x > 0) {
        buttons[0].style.removeProperty("display");
    }
    if (y < imgs.length && imgs.length > 1) {
        buttons[1].style.removeProperty("display");
    }
}







function fullscreenMove(base) {
    var base;

    if (base.innerText == undefined) {
        base = this;
    }

    var base1 = base.parentElement.parentElement;
    var base2 = document.querySelector('#map-description-oview');

    var val = base.getAttribute("value");
    var tar1 = base1.querySelector(':scope > div ul');
    var tar2 = base2.querySelector(':scope > div > div');
    var li = tar1.querySelector(':scope > li[name="'+val+'"]');
    var buttons1 = base1.querySelectorAll(":scope button p");
    var buttons2 = base2.querySelectorAll(":scope button");
    var header = base2.querySelector(':scope > span:first-child h4')

    var x = parseInt(val);
    var y = parseInt(tar1.lastChild.getAttribute("name"));

    var left = li.previousElementSibling;
    var right = li.nextElementSibling;


    if (base.innerText == "«" && left != undefined) {
        x = x - 1;
        tar1.style.transform = "translate(-"+x+"00%, 0)";
        tar2.style.transform = "translate(-"+x+"00%, 0)";
        header.innerText = left.querySelector(":scope img").getAttribute("title");

        if (left != null) {
            for (var q = 0; q < buttons1.length; q++) {
                buttons1[q].setAttribute("value",left.getAttribute("name"));
                buttons2[q].setAttribute("value",left.getAttribute("name"));
            }
        }

        for (var q = 0; q < buttons1.length; q++) {
            buttons1[q].style.removeProperty("display");
            buttons2[q].style.removeProperty("display");
        }

        if (x <= 0) {
            buttons1[0].style.display = "none";
            buttons2[0].style.display = "none";
        }
        else {
            buttons1[0].style.removeProperty("display");
            buttons2[0].style.removeProperty("display");
        }
    }


    
    if (base.innerText == "»" && right != undefined) {
        x = x+1;
        tar1.style.transform = "translate(-"+x+"00%, 0)";
        tar2.style.transform = "translate(-"+x+"00%, 0)";
        header.innerText = right.querySelector(":scope img").getAttribute("title");

        if (right != null) {
            for (var q = 0; q < buttons1.length; q++) {
                buttons1[q].setAttribute("value",right.getAttribute("name"));
                buttons2[q].setAttribute("value",right.getAttribute("name"));
            }
        }

        for (var q = 0; q < buttons1.length; q++) {
            buttons1[q].style.removeProperty("display");
            buttons2[q].style.removeProperty("display");
        }
    
        if (x >= y) {
            buttons1[1].style.display = "none";
            buttons2[1].style.display = "none";
        }
        else {
            buttons1[1].style.removeProperty("display");
            buttons2[1].style.removeProperty("display");
        }
    }

  
   

}


function exitFullscreen(base) {
    var base = document.querySelector("#fullscreen");
    base.classList.remove("open");
}


function calculateTypeAdvantage(i) {
    var i;
    var primary = returnData(i,"Type","")[0];
    var secondary = returnData(i,"Type","")[1];

    var result = [];

    var Normal = [];
    var Weakness2x = [];
    var Weakness4x = [];
    var Strength2x = [];
    var Strength4x = [];
    var Immunity = [];

    var primaryNormal = [];
    var primary2xWeakness = [];
    var primary2xStrength = [];
    var primaryImmunity = [];
    var secondaryNormal = [];
    var secondary2xWeakness = [];
    var secondary2xStrength = [];
    var secondaryImmunity = [];


    primaryNormal = returnTypeAdvantage(primary,"Defending")[0];
    primary2xWeakness = returnTypeAdvantage(primary,"Defending")[1];
    primary2xStrength = returnTypeAdvantage(primary,"Defending")[2];
    primaryImmunity = returnTypeAdvantage(primary,"Defending")[3];

    if (secondary != undefined) {
        secondaryNormal = returnTypeAdvantage(secondary,"Defending")[0];
        secondary2xWeakness = returnTypeAdvantage(secondary,"Defending")[1];
        secondary2xStrength = returnTypeAdvantage(secondary,"Defending")[2];
        secondaryImmunity = returnTypeAdvantage(secondary,"Defending")[3];
    }


    for (var q = 0; q < primaryNormal.length; q++) {
        if (!Normal.includes(primaryNormal[q])){
            Normal.push(primaryNormal[q]);
        }
    }
    for (var q = 0; q < secondaryNormal.length; q++) {
        if (!Normal.includes(secondaryNormal[q])){
            Normal.push(secondaryNormal[q]);
        }
    }

    for (var q = 0; q < primaryImmunity.length; q++) {
        if (!Immunity.includes(primaryImmunity[q])){
            Immunity.push(primaryImmunity[q]);
        }
    }
    for (var q = 0; q < secondaryImmunity.length; q++) {
        if (!Immunity.includes(secondaryImmunity[q])){
            Immunity.push(secondaryImmunity[q]);
        }
    }

    for (var q = 0; q < primary2xStrength.length; q++) {
        if(secondary2xStrength.includes(primary2xStrength[q])) {
            Strength4x.push(primary2xStrength[q]);
        }
        else {
            Strength2x.push(primary2xStrength[q]);
        }
    }
    for (var q = 0; q < secondary2xStrength.length; q++) {
        if(!Strength2x.includes(secondary2xStrength[q]) && !Strength4x.includes(secondary2xStrength[q])) {
            Strength2x.push(secondary2xStrength[q]);
        }
 
    }

    for (var q = 0; q < primary2xWeakness.length; q++) {
        if(secondary2xWeakness.includes(primary2xWeakness[q])) {
            Weakness4x.push(primary2xWeakness[q]);
        }
        else {
            Weakness2x.push(primary2xWeakness[q]);
        }
    }
    for (var q = 0; q < secondary2xWeakness.length; q++) {
        if(!Weakness2x.includes(secondary2xWeakness[q]) && !Weakness4x.includes(secondary2xWeakness[q])) {
            Weakness2x.push(secondary2xWeakness[q]);
        }
    }

    var arrs = [Normal,Weakness2x,Weakness4x,Strength2x,Strength4x,Immunity];
    var arrsName = ["Normal","Weakness2x","Weakness4x","Strength2x","Strength4x","Immunity"];

    var tempWeakness = [];
    var tempStrength = [];

    for (var q = 0; q < arrs.length; q++) {
        for (var u = 0; u < arrs[q].length; u++) {
            if (Weakness2x.includes(arrs[q][u]) && arrsName[q] != "Weakness2x" && arrsName[q] != "Immunity") {
                var obj = new Object;
                obj["Name"] = arrsName[q];
                obj["Type"] = arrs[q][u];
                obj["ID"] = q;
                tempWeakness.push(obj)
            }
       
            if (Strength2x.includes(arrs[q][u]) && arrsName[q] != "Strength2x" && arrsName[q] != "Immunity") {
                var obj = new Object;
                obj["Name"] = arrsName[q];
                obj["Type"] = arrs[q][u];
                obj["ID"] = q;
                tempStrength.push(obj)
            }
  
        }
    }

    for (var q = 0; q < tempStrength.length; q++) {
        if (tempStrength[q]["Name"] == "Normal") {
            Normal = Normal.filter(function(val) {return val != tempStrength[q]["Type"]})
        }
        if (tempStrength[q]["Name"] == "Weakness2x") {
            Strength2x = Strength2x.filter(function(val) {return val != tempStrength[q]["Type"]})
            Weakness2x = Weakness2x.filter(function(val) {return val != tempStrength[q]["Type"]})
            if (!Normal.includes(tempStrength[q]["Type"])) {
                Normal.push(tempStrength[q]["Type"]);
            }
        }
    }

    for (var q = 0; q < tempWeakness.length; q++) {
        if (tempWeakness[q]["Name"] == "Normal") {
            Normal = Normal.filter(function(val) {return val != tempWeakness[q]["Type"]})
        }
        if (tempWeakness[q]["Name"] == "Strength2x") {
            Strength2x = Strength2x.filter(function(val) {return val != tempWeakness[q]["Type"]})
            Weakness2x = Weakness2x.filter(function(val) {return val != tempWeakness[q]["Type"]})
            if (!Normal.includes(tempWeakness[q]["Type"])) {
                Normal.push(tempWeakness[q]["Type"]);
            }
        }
    }
    

    for (var u = 0; u < Immunity.length; u++) {
        Normal = Normal.filter(function(val) {return val != Immunity[u]})
        Weakness2x = Weakness2x.filter(function(val) {return val != Immunity[u]})
        Weakness4x = Weakness4x.filter(function(val) {return val != Immunity[u]})
        Strength2x = Strength2x.filter(function(val) {return val != Immunity[u]})
        Strength4x = Strength4x.filter(function(val) {return val != Immunity[u]})
    }
    
    

    var types = ["NORMAL","FIGHTING","FLYING","POISON","GROUND","ROCK","BUG","GHOST","STEEL","FIRE","WATER","GRASS","ELECTRIC","PSYCHIC","ICE","DRAGON","DARK","FAIRY"];
    var FinalNormal = [];
    var FinalWeakness2x = [];
    var FinalWeakness4x = [];
    var FinalStrength2x = [];
    var FinalStrength4x = [];
    var FinalImmunity = [];
    

    for (var q = 0; q < types.length; q++) {
        for (var u = 0; u < Normal.length; u++) { 
            if (Normal[u] == types[q]) {
                FinalNormal[q] = Normal[u];
            }
        }
    }

    for (var q = 0; q < types.length; q++) {
        for (var u = 0; u < Weakness2x.length; u++) { 
            if (Weakness2x[u] == types[q]) {
                FinalWeakness2x[q] = Weakness2x[u];
            }
        }
    }

    for (var q = 0; q < types.length; q++) {
        for (var u = 0; u < Weakness4x.length; u++) { 
            if (Weakness4x[u] == types[q]) {
                FinalWeakness4x[q] = Weakness4x[u];
            }
        }
    }
    
    for (var q = 0; q < types.length; q++) {
        for (var u = 0; u < Strength2x.length; u++) { 
            if (Strength2x[u] == types[q]) {
                FinalStrength2x[q] = Strength2x[u];
            }
        }
    }
    
    for (var q = 0; q < types.length; q++) {
        for (var u = 0; u < Strength4x.length; u++) { 
            if (Strength4x[u] == types[q]) {
                FinalStrength4x[q] = Strength4x[u];
            }
        }
    }
    
    for (var q = 0; q < types.length; q++) {
        for (var u = 0; u < Immunity.length; u++) { 
            if (Immunity[u] == types[q]) {
                FinalImmunity[q] = Immunity[u];
            }
        }
    }

    FinalNormal = FinalNormal.filter(function(v) {return v != undefined;});
    FinalWeakness2x = FinalWeakness2x.filter(function(v) {return v != undefined;});
    FinalWeakness4x = FinalWeakness4x.filter(function(v) {return v != undefined;});
    FinalStrength2x = FinalStrength2x.filter(function(v) {return v != undefined;});
    FinalStrength4x = FinalStrength4x.filter(function(v) {return v != undefined;});
    FinalImmunity = FinalImmunity.filter(function(v) {return v != undefined;});

    result.push(FinalNormal);
    result.push(FinalWeakness2x);
    result.push(FinalWeakness4x);
    result.push(FinalStrength2x);
    result.push(FinalStrength4x);
    result.push(FinalImmunity);


    return result;
}

function formatCalcTypeAdvantage(arr) {
    
    var arr;
    var result;
    var tempArr = [];

    var Normal;
    var Weakness2x;
    var Weakness4x;
    var Strength2x;
    var Strength4x;
    var Immunity;

    for (var q = 0; q < arr.length; q++) {
        for (var u = 0; u < arr[q].length; u++) {
            arr[q][u] = titleCase(arr[q][u]);
        }
    }


    if (arr[0].length > 1) {
        Normal = arr[0].join(" / ");
    }
    else {
        Normal = arr[0][0];
    }

    if (arr[1].length > 1) {
        Weakness2x = arr[1].join(" / ");
    }
    else {
        Weakness2x = arr[1][0];
    }

    if (arr[2].length > 1) {
        Weakness4x = arr[2].join(" / ");
    }
    else {
        Weakness4x = arr[2][0];
    }

    if (arr[3].length > 1) {
        Strength2x = arr[3].join(" / ");
    }
    else {
        Strength2x = arr[3][0];
    }

    if (arr[4].length > 1) {
        Strength4x = arr[4].join(" / ");
    }
    else {
        Strength4x = arr[4][0];
    }

    if (arr[5].length > 1) {
        Immunity = arr[5].join(" / ");
    }
    else {
        Immunity = arr[5][0];
    }

    
    if (Strength4x != undefined) {
        tempArr.push("4×: "+Strength4x);
    }
    if (Strength2x != undefined) {
        tempArr.push("2×: "+Strength2x);
    }
    if (Weakness2x != undefined) {
        tempArr.push("½: "+Weakness2x);
    }
    if (Weakness4x != undefined) {
        tempArr.push("¼: "+Weakness4x);
    }
    if (Immunity != undefined) {
        tempArr.push("0×: "+Immunity);
    }
    result = tempArr.join("\n");
    return result;
}


function returnTypeAdvantage(type,condition) {
    var type;
    var condition;
    var arr = finaldataTypeChart;
    var keys = [];
    var result = [];
    var weakness = [];
    var strength = [];
    var immunity = [];
    var normal = [];
    var types = [];

    type = type.toUpperCase();

    for (var q = 0; q < arr.length; q++) {
        for (var u = 0; u < Object.keys(arr[q]).length; u++) {
            if (!types.includes(Object.keys(arr[q])[u])) {
                types.push(Object.keys(arr[q])[u]);
            }
        }
    }

    if (condition == "Defending") {
        for (var q = 0; q < arr.length; q++) {
            var keys = Object.keys(arr[q])

            for (var u = 0; u < keys.length; u++) {
                if (types[u] == type) {
                    if (arr[q][keys[u]].includes("½")) {
                        weakness.push(types[q])
                    }
                    else if (arr[q][keys[u]].includes("2")) {
                        strength.push(types[q])
                    }
                    else if (arr[q][keys[u]].includes("0")) {
                        immunity.push(types[q])
                    }
                    else if (arr[q][keys[u]].includes("1")) {
                        normal.push(types[q])
                    }
                }
            }
        }
    }
    else if (condition == "Attacking") {
        for (var q = 0; q < arr.length; q++) {
            var keys = Object.keys(arr[q])
 
            if (types[q] == type) {
                for (var u = 0; u < keys.length; u++) {
                    if (arr[q][keys[u]].includes("½")) {
                        weakness.push(types[u])
                    }
                    else if (arr[q][keys[u]].includes("2")) {
                        strength.push(types[u])
                    }
                    else if (arr[q][keys[u]].includes("0")) {
                        immunity.push(types[u])
                    }
                    else if (arr[q][keys[u]].includes("1")) {
                        normal.push(types[u])
                    }
                }
            }
        }
    }

    var result = [];
    result.push(normal)
    result.push(weakness);
    result.push(strength);
    result.push(immunity);

    return result;

}


function itemPockets() {


    var vals = this.parentElement.querySelectorAll(":scope > input:checked");
    var base = document.querySelector("#item-options");
    var nodes = base.querySelectorAll(':scope > label');

    for (var q = 0; q < nodes.length; q++) {
        nodes[q].style.display = "none";
    }

    for (var i = 0; i < vals.length; i++) {
        var val = (vals[i].value).toLowerCase();
        var node = base.querySelectorAll(':scope > label[data-pocket="'+val+'"]');
        for (var q = 0; q < node.length; q++) {
            node[q].style.removeProperty("display");
        }
    }


}
var testImageResult;
function testImage(url) {
    var tester=new Image();
    var testImageResult = undefined;
    var url;
    tester.src = url;
    tester.addEventListener("load", function() {
        testImageResult = true;
    });
    tester.addEventListener("error", function() {
        testImageResult = false;
    });

    return testImageResult;
}



function searchOptionsTitle(base) {

    var base;
    var searches = base.querySelectorAll(':scope > *:not(input)');
    var tempArr = [];
    var result = "";
    var exclude = ["name","attack","defense","spatk","spdef","speed","total"];

    for (var i = 0; i < searches.length; i++) {
        var search = searches[i].getAttributeNames()
        for (var q = 0; q < search.length; q++) {
            if (search[q].includes("data-search-")) {
                var check;
                for (var u = 0; u < exclude.length; u++) {
                    if (search[q].includes(exclude[u])) {
                        check = false
                        break;
                    }
                    else {
                        check = true;
                    }
                }
                if (check) {
                    if (!isNaN(parseInt(searches[i].getAttribute(search[q])))) {
                        tempArr.push(search[q].split("data-search-")[1]+":>");
                        tempArr.push(search[q].split("data-search-")[1]+":<");
                        tempArr.push(search[q].split("data-search-")[1]+"::");
                        tempArr.push(search[q].split("data-search-")[1]+":!");
                    }
                    else {
                        tempArr.push(search[q].split("data-search-")[1]+"::");
                        tempArr.push(search[q].split("data-search-")[1]+":!");
                    }
                }
            }
        }
    }


    tempArr = [...new Set(tempArr)];

    if (tempArr.length > 0) {
        result = "Search Options:\n"+tempArr.join("\n")+"\n[Enter] = Add Filter\n[Escape] = Remove Filters";
    }

    return result;
}















function mapBlink(base,area) {
  var area;
  var base;


  var holder = base.querySelector(":scope .mapify-holder");

  var img = base.querySelector(":scope .map-img");

  var coords = [];
  for (var i = 0; i < area.length; i++) {
    coords.push([]);
  }

  for (var i = 0; i < area.length; i++) {
    coords[i].push(getMapCoords(area[i]))
  }

  /*
  for (var i = 0; i < coords.length; i++) {
    for (var q = 0; q < coords[i].length; q++) {
        var polys = coords[i][q].split(",");
        console.log(polys)

        for (var key in polys) { // Convert percentage coordinates back to pixel coordinates relative to the image size
            if (key % 2 == 0) {  // X
                polys[key] = ($(img).width() * (polys[key] / 100));
            } else { // Y
                polys[key] = ',' + ($(img).height() * (polys[key] / 100)) + ' ';
            }
        }
        coords[i][q] = polys.join("");
    }
}
*/




  var polys = base.querySelectorAll(':scope polygon[name="active"]');
  for (var i = 0; i < polys.length; i++) {
    polys[i].remove();
  }

  var svgbase = base.querySelector(':scope .mapify-svg[name="Mark"]');

    if (svgbase == null) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add("mapify-svg");
        svg.setAttribute("name","Mark");
        holder.appendChild(svg)
    }

    svgbase = base.querySelector(':scope .mapify-svg[name="Mark"]');


  for (var i = 0; i < area.length; i++) {
    var polygon =  document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute("fill","none");
    polygon.classList.add("mapify-polygon");
    polygon.setAttribute("points",coords[0][i]);
    polygon.setAttribute("name","active");
    if (svgbase == null) {
        svg.appendChild(polygon)
    }
    else {
        svgbase.appendChild(polygon)
    }
  }
}


function resizeMap() {

    var options = document.querySelector("#map-options")
    var checked = options.querySelectorAll(':scope input:checked')
    var contain = document.querySelector("#map-contain");
    var mapImg = document.querySelector(".map-inner img[usemap]");

    var result = [];
    for (var i = 0; i < checked.length; i++) {
        var name = checked[i].nextElementSibling.innerText;
        result.push(name)
    }

    if (mapImg.classList.contains("mapify")) {
        if (result.length > 0) {
            mapBlink(contain,result);
        }
    }
}

function getMapCoords(area) {
  var area;

  var result = "";

  for (var i = 0; i < MapArea.length; i++) {
    if (MapArea[i]["id"].includes("<br>")) {
      var brk = MapArea[i]["id"].split("<br>");
      var check = false;
      for (var q = 0; q < brk.length; q++) {
        if (brk[q] == area) {
          check = true;
        }
      }
      if (check) {
        result = MapArea[i]["coords"];
        break;
      }
    }
    else if (MapArea[i]["id"] == area) {
      result = MapArea[i]["coords"];
    }
  }

  return result;
}







function excludeDuplicateAreas(arr) {
    var arr;
    var exclude = [];
    var broken = [];

    var arr1 = JSON.parse(JSON.stringify(arr));

    if ((GameID >= 7 && GameID <= 8) || GameID == 12) {
        broken = ["Marine Cave","Battle Tent","Terra Cave"];
    }
    if (GameID >= 14 && GameID <= 16) {
        broken = ["S.S. Spiral"];
    }

    var list = finaldataLocation;





    var del = [];

    for (var i = 0; i < arr1.length; i++) {

        var listboo = true;
        for (var q = 0; q < list.length; q++) {
            if (arr1[i]["id"].includes("<br>")) {
                var ids = arr1[i]["id"].split("<br>");
                for (var u = 0; u < ids.length; u++) {
                    if (ids[u] == list[q][JSONPath_Location+"_"+"Name"]) {
                        listboo = false;
                        break;
                    }
                }
            }
            else if (arr1[i]["id"] == list[q][JSONPath_Location+"_"+"Name"]) {
                listboo = false;
                break;
            }
        }

        if (listboo) {
            del.push(i)
        }
       
        for (var q = 0; q < broken.length; q++) {
            if (arr1[i]["id"] == broken[q]) {
                del.push(i);
            }
        }
    }
    
    var arrResult = [];
    for (var i = 0; i < arr1.length; i++) {
        if (!del.includes(i)) {
            arrResult.push(arr1[i]);
        }
    }

    var arr2 = JSON.parse(JSON.stringify(arrResult));
    var tempArr = [{}]
    for (var i = 0; i < arr2.length; i++) {
        var check = false;
        for (var q = 0; q < tempArr.length; q++) {
            if (tempArr[q]["coords"] == arr2[i]["coords"] && tempArr[q]["id"] != arr2[i]["id"]) {
                tempArr[q]["id"] += "<br>"+arr2[i]["id"];
                check = false;
                break
            }
            else {
                check = true;
            }
        }
        if (check) {
            tempArr.push(arr2[i])
        }
    }

    tempArr.splice(0, 1)

    var result = [];
    result = JSON.parse(JSON.stringify(tempArr));

    return result;
}




function searchFilter(bar,base,condition) {
    var bar;
    var base;
    var list = base.querySelectorAll(':scope > *:not(input)');
    var hidden = base.querySelectorAll(':scope > *:not(input).hidden');
    var filter = base.querySelectorAll(':scope > *:not(input).filtered');


    if (condition == "Add") {
        if (hidden.length > 0 || filter.length > 0) {
            if (hidden.length != list.length) {
                if (bar.value != "") {
                    bar.value = "";
                    bar.style.color = "var(--fontDark)";
                    for (var i = 0; i < hidden.length; i++) {
                        hidden[i].classList.add("filtered");
                    }
                    consoleText("Filter added...");

                    bar.style.setProperty("outline-color","var(--colorRed)","important");
                    bar.style.setProperty("border-color","var(--colorRed)","important");
                    bar.style.setProperty("border-style","solid");
                }
            }
        }
    }
    else if (condition == "Remove") {

        if (filter.length > 0) {
            bar.value = "";
            bar.style.color = "var(--fontDark)";

            for (var i = 0; i < list.length; i++) {
                list[i].classList.remove("filtered");
                list[i].classList.remove("hidden");
            }

            consoleText("Filters removed...");

            bar.style.removeProperty("outline-color");
            bar.style.removeProperty("border-color");
            bar.style.removeProperty("border-style");
        }
    }
}


function consoleText(text) {
    var text;
    var base = document.querySelector("#console")

    var p = document.createElement("p");
    p.innerText = text;
    base.appendChild(p);

    p.style.opacity = "1";

    setInterval(function() {
        p.style.opacity = "0";
            setTimeout(function () {
                p.remove();
            }, 1000);
    }, 1000);


}



function ImageType(action) {
    var action;



    var tar = document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"]');
    var path = tar.querySelector(":scope select[name='Path']");
    var ext = tar.querySelector(":scope select[name='Extension']");
    var type = tar.querySelector(":scope select[name='Type']");
    var angle = tar.querySelector(":scope select[name='Angle']");

    if (action.includes("Populate")) { 
        var exts = [];
        var types = [];
        var angles = [];

    
        for (var q = 0; q < ImageTypes.length; q++) {
            if (ImageTypes[q]["name"] == path.value) {
                exts.push(ImageTypes[q]["extension"]);
                types.push(ImageTypes[q]["type"]);
                angles.push(ImageTypes[q]["angle"]);
            }
        }

        exts = [...new Set(exts)];
        types = [...new Set(types)];
        angles = [...new Set(angles)];


        if (exts.length == 1 || exts[0] == undefined) {
            ext.classList.add("None");
            ext.setAttribute("disabled","");
        }
        else {
            ext.classList.remove("None");
            ext.removeAttribute("disabled");
        }
        if (types.length == 1 || types[0] == undefined) {
            type.classList.add("None");
            type.setAttribute("disabled","");
        }
        else {
            type.classList.remove("None");
            type.removeAttribute("disabled");
        }
        if (angles.length == 1 || angles[0] == undefined) {
            angle.classList.add("None");
            angle.setAttribute("disabled","");
        }
        else {
            angle.classList.remove("None");
            angle.removeAttribute("disabled");
        }


        var oldoptions = tar.querySelectorAll(":scope > span:last-child option");
        for (var q = 0; q < oldoptions.length; q++) {
            oldoptions[q].remove();
        }


        for (var q = 0; q < exts.length; q++) {
            var option = document.createElement("option");
            option.innerText = exts[q];
            option.setAttribute("value",exts[q]);
            ext.appendChild(option);
        }

        for (var q = 0; q < types.length; q++) {
            var option = document.createElement("option");
            option.innerText = types[q];
            option.setAttribute("value",types[q]);
            type.appendChild(option);
        }

        for (var q = 0; q < angles.length; q++) {
            var option = document.createElement("option");
            option.innerText = angles[q];
            option.setAttribute("value",angles[q]);
            angle.appendChild(option);
        }
    }
    if (action.includes("Execute")) {
        var conimg = document.querySelectorAll('#pokémon-outer > div ul li label > img');
        var parimg = document.querySelectorAll('#pokémon-outer > main[name="Team"] section[name="Party"] div aside img[value]');

        if (tar.value != "") {

            var dataPath = path.querySelector(":scope > option[value='"+path.value+"']").getAttribute("data-path");
            var dataCategory = path.querySelector(":scope > option[value='"+path.value+"']").getAttribute("data-category");
            var dataExtension = ext.value;
            var dataAngle = angle.value;
            var dataType = type.value;
            

            for (var q = 0; q < conimg.length; q++) {
                conimg[q].src = './media/Images/Pokémon/'+dataCategory+'/'+dataExtension+'/'+dataType+'/'+dataAngle+'/'+dataPath+'/'+getPokémonMediaPath(getPokémonInt(conimg[q].id),dataCategory)+"."+dataExtension;
                conimg[q].setAttribute("path",dataPath+"/"+getPokémonMediaPath(getPokémonInt(conimg[q].id),dataCategory)+"."+dataExtension);
            }
            for (var q = 0; q < parimg.length; q++) {
                parimg[q].src = './media/Images/Pokémon/'+dataCategory+'/'+dataExtension+'/'+dataType+'/'+dataAngle+'/'+dataPath+'/'+getPokémonMediaPath(parimg[q].getAttribute("value"),dataCategory)+"."+dataExtension;
                parimg[q].setAttribute("path",dataPath+"/"+getPokémonMediaPath(parimg[q].getAttribute("value"),dataCategory)+"."+dataExtension);
            }
        
            
        }

        memory("Save","imgtype-path","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Path"]'));
        memory("Save","imgtype-extension","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Extension"]'));
        memory("Save","imgtype-type","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Type"]'));
        memory("Save","imgtype-angle","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select[name="Angle"]'));

    }

}

