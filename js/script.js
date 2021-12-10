$('body').mousedown(function(e) {
    if (e.button == 1) return false
});


function dropdown() {
    jQuery(document).ready(function(e) {
        function t(t) {
            e(t).bind("click", function(t) {
                t.preventDefault();
                e(this).parent().fadeOut()
            })
        }
        e(".dropdown-toggle").click(function() {
            var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
            e(".button-dropdown .dropdown-menu").hide();
            e(".button-dropdown .dropdown-toggle").removeClass("active");
            if (t) {
                e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
            }
        });
        e(document).bind("click", function(t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
        });
        e(document).bind("click", function(t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
        })
    });
}

$(".info-img-main").mapify();

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function getFullGameName(name) {
    var name;
    var arr = finaldataGame;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["Name"] == name) {
            return arr[q]["Full Name"];
        }
    }
}


function getPokémonID(name) {
    var name;
    var arr = finaldataReferenceDefault;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["Pokémon"] == name) {
            return arr[q]["ID"];
        }
    }
}

function getPokémonName(id) {
    var id;
    var arr = finaldataReferenceDefault;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["ID"] == id) {
            return arr[q]["Pokémon"];
        }
    }
}



function getPokémonData(arr,name,game) {
    var arr;
    var name;
    var game;
    var result = [];
    for (var i = 0; i < game.length; i++) {
        for (var q = 0; q < arr.length; q++) {
            if (arr[q][game[i]] == name) {
                if (finaldataLengthAll[q] == true && finaldataAreaAll[finaldataAreaAll.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                    var obj = new Object();
                    obj["Pokémon"] = arr[q]["Pokémon"];
                    if (finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                        obj["Folder Name"] = "";
                    }
                    else {
                        obj["Folder Name"] = finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName];
                    }
                    obj["File Name"] = finaldataReferenceAll[q]["File Name_" + JSONPath_FileName];
                    obj["Form"] = arr[q]["Form"];
                    obj["Variant"] = arr[q]["Variant"];
                    for (var u = 0; u < game.length; u++) {
                        if (arr[q][game[u]] != undefined) {
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





function getPokémonStatsEV(arr,name,games,game) {

    var arr;
    var name;
    var game;
    var result = [];

    if (name == "All") {
        for (var i = 0; i < game.length; i++) {
            for (var q = 0; q < arr.length; q++) {
                if (arr[q][game[i]] != undefined) {
                    if (finaldataLengthAll[q] == true && finaldataAreaAll[finaldataAreaAll.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[q]["Pokémon"];
                        if (finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName];
                        }
                        obj["File Name"] = finaldataReferenceAll[q]["File Name_" + JSONPath_FileName];
                        obj["Form"] = arr[q]["Form"];
                        obj["Variant"] = arr[q]["Variant"];
                        for (var u = 0; u < games.length; u++) {
                            if (arr[q][games[u]] != undefined) {
                                obj[games[u]] = arr[q][games[u]];
                            }
                        }
                        result[q] = obj;
                    }
                }
            }
        }
    }
    else {
        for (var i = 0; i < game.length; i++) {
            for (var q = 0; q < arr.length; q++) {
                if (arr[q][game[i]] == name) {
                    if (finaldataLengthAll[q] == true && finaldataAreaAll[finaldataAreaAll.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[q]["Pokémon"];
                        if (finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName];
                        }
                        obj["File Name"] = finaldataReferenceAll[q]["File Name_" + JSONPath_FileName];
                        obj["Form"] = arr[q]["Form"];
                        obj["Variant"] = arr[q]["Variant"];
                        for (var u = 0; u < games.length; u++) {
                            if (arr[q][games[u]] != undefined) {
                                obj[games[u]] = arr[q][games[u]];
                            }
                        }
                        result[q] = obj;
                    }
                }
            }
        }
    }
    
    var newResult = result.filter(value => Object.keys(value).length != 0);

    return newResult;
}




function undefinedInherit(arr) {

    var arr;
    var result = [];

    for (var q = 0; q < arr.length; q++) {
        var games = Object.keys(arr[arr.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])])
        games = games.filter(e => e != "ID" && e != "Pokémon" && e != "Form" && e != "Variant" && e != "Generation" && e != "Game");

        var game = Object.keys(arr[q]);
        game = game.filter(e => e == "ID" || e == "Pokémon" || e == "Form" || e == "Variant" || e == "Generation" || e == "Game")

        var obj = new Object();

        for (var u = 0; u < game.length; u++) {
            obj[game[u]] = arr[q][game[u]];
        }

        for (var u = 0; u < games.length; u++) {
            if (arr[q][games[u]] == undefined) {
                obj[games[u]] = arr[arr.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])][games[u]]
            }
            else {
                obj[games[u]] = arr[q][games[u]];
            }
        }

        result[q] = obj;

    }

  return result;
}


function getAbilityData(ability,data) {
    if (data == "Flavor") {
        var arr = finaldataAbilityFlavor;
        for (var q = 0; q < arr.length; q++) {
            if(arr[q][JSONPath_AbilityFlavor+"_"+"Name"] == ability) {
                return arr[q][JSONPath_AbilityFlavor+"_"+data]
            }
        }
    }
    else {
        var arr = finaldataAbility;
        for (var q = 0; q < arr.length; q++) {
            if(arr[q][JSONPath_AbilityReference+"_"+"Name"] == ability) {
                return arr[q][JSONPath_AbilityReference+"_"+data]
            }
        }
    }
    var ability;
    var data;

    

}


function getPokémonExperienceYield(arr,condition,game) {
    var condition;
    var arr;
    var game;
    var result = [];

   
    for (var i = 0; i < game.length; i++) {
        for (var q = 0; q < arr.length; q++) {

            if (condition == "Very High") {
                var conditions = parseInt(arr[q][game[i]]) >= 300;
            }
            if (condition == "High") {
                var conditions = parseInt(arr[q][game[i]]) >= 200 && parseInt(arr[q][game[i]]) <= 299;
            }
            if (condition == "Medium") {
                var conditions = parseInt(arr[q][game[i]]) >= 100 && parseInt(arr[q][game[i]]) <= 199;
            }
            if (condition == "Low") {
                var conditions = parseInt(arr[q][game[i]]) >= 50 && parseInt(arr[q][game[i]]) <= 99;
            }
            if (condition == "Very Low") {
                var conditions = parseInt(arr[q][game[i]]) >= 0 && parseInt(arr[q][game[i]]) <= 49;
            }

            if (conditions) {
                if (finaldataLengthAll[q] == true && finaldataAreaAll[finaldataAreaAll.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                    var obj = new Object();
                    obj["Pokémon"] = arr[q]["Pokémon"];
                    if (finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                        obj["Folder Name"] = "";
                    }
                    else {
                        obj["Folder Name"] = finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName];
                    }
                    obj["File Name"] = finaldataReferenceAll[q]["File Name_" + JSONPath_FileName];
                    obj["Form"] = arr[q]["Form"];
                    obj["Variant"] = arr[q]["Variant"];
                    obj["Category"] = condition;
                    for (var u = 0; u < game.length; u++) {
                        if (arr[q][game[u]] != undefined) {
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

function getPokémonGenderRatio(arr,names,game) {
    var arr;
    var names;
    var game;
    var result = [];

    for (var q = 0; q < arr.length; q++) {
        if (arr[q][game[0]] == names[0] && arr[q][game[1]] == names[1]) {
            if (finaldataLengthAll[q] == true && finaldataAreaAll[finaldataAreaAll.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                var obj = new Object();
                obj["Pokémon"] = arr[q]["Pokémon"];
                if (finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                    obj["Folder Name"] = "";
                }
                else {
                    obj["Folder Name"] = finaldataReferenceAll[q]["Folder Name_" + JSONPath_FolderName];
                }
                obj["File Name"] = finaldataReferenceAll[q]["File Name_" + JSONPath_FileName];
                obj["Form"] = arr[q]["Form"];
                obj["Variant"] = arr[q]["Variant"];
                for (var u = 0; u < game.length; u++) {
                    if (arr[q][game[u]] != undefined) {
                        obj[game[u]] = arr[q][game[u]];
                    }
                }
                result[q] = obj;
            }
        }
    }


    var newResult = result.filter(value => Object.keys(value).length !== 0);

    return newResult;
}


function getRegionalID(seperator,id,dex) {

    var seperator;
    var id;
    var dex;
    var arr = finaldataPokédexIDDefault;
    var tempid;

    if (seperator == "-") {
        seperator = - 1;
    }
    if (seperator == "+") {
        seperator = + 1;
    }
    if (seperator == "=") {
        seperator = "";
    }

    if (seperator != "") {
        for (var q = 0; q < arr.length; q++) {
            if (arr[q]["ID"] == id) {
                tempid = parseInt(arr[q][dex]) + seperator;
            }
        }
        for (var q = 0; q < arr.length; q++) {
            if (arr[q][dex] == tempid) {
                return arr[q]["ID"];
            }
        }
    }
    else {
        for (var q = 0; q < arr.length; q++) {
            if (arr[q]["ID"] == id) {
                return arr[q][dex];
            }
        }
    }
        
}




function introduction() {






    function introduce(x) {
      var x;
    
    
    
    var tempReference = []
    
    for (i = 0; i < finaldataReferenceAll.length; i++) {
      tempReference.push(finaldataReferenceAll[i]["Game"])
    }
    
    var gamenames = [];
    var gameids = [];
    
    for (i = 0; i < finaldataGame.length; i++) {
      gamenames.push(finaldataGame[i]["Name"]);
      gameids.push(finaldataGame[i]["ID"]);
    }
    
    
    for (i = 0; i < finaldataGame.length; i++) {
      gamenames.push(finaldataGame[i]["Name"]);
    }
    
    for (i = 0; i < tempReference.length; i++) {
      if (tempReference[i] == "The Isle of Armor") {
        tempReference[i] = "Sword/Shield";
      }
      if (tempReference[i] == "The Crown Tundra") {
        tempReference[i] = "Sword/Shield";
      }
    }
    
    
      var temparray1 = tempReference[x].split("/");
    
      
      
      for (i = 0; i < gameids.length; i++) {
        for (q = 0; q < temparray1.length; q++) {
    
          if (temparray1[q].toString() == gamenames[i].toString()) {
            temparray1[q] = temparray1[q].replaceAll(gamenames[i],gameids[i]);
          }
        }
      }
    
    
    var introduce = "";
    
    for (i = 0; i < temparray1.length; i++) {
      if (temparray1[i] <= GameID) {
        introduce += "true";
      }
    }
    
    let introduceResult;
    if (introduce.includes("true")) {
      introduceResult = true;
    }
    else {
      introduceResult = false;
    }
    
    return introduceResult;
    
    }
    
    
    
    
    
    
    function discontinue(x) {
    
      var x;
    
    
      var tempReference = []
    
      for (i = 0; i < finaldataReferenceAll.length; i++) {
        tempReference.push(finaldataReferenceAll[i]["Game"])
      }
    
      var gamenames = [];
      var gameids = [];
    
      for (i = 0; i < finaldataGame.length; i++) {
        gamenames.push(finaldataGame[i]["Name"]);
        gameids.push(finaldataGame[i]["ID"]);
      }
    
    
    for (i = 0; i < finaldataGame.length; i++) {
      gamenames.push(finaldataGame[i]["Name"]);
    }
    
    
    for (i = 0; i < tempReference.length; i++) {
      if (tempReference[i] == "The Isle of Armor") {
        tempReference[i] = "Sword/Shield";
      }
      if (tempReference[i] == "The Crown Tundra") {
        tempReference[i] = "Sword/Shield";
      }
    }
    
    
    
    if (tempReference[x].includes("-") && tempReference[x].includes("/")) {
      var temparr1 = [];
      temparr1.push(tempReference[x].split("-"));
      var temparr2 = [];
      
      
      for (q = 0; q < temparr1[0].length; q++) {
        temparr2.push(temparr1[0][q].split("/"));
      }
      
      for (i = 0; i < gameids.length; i++) {
        for (q = 0; q < temparr2.length; q++) {
          for (u = 0; u < temparr2[q].length; u++) {
            if (temparr2[q][u].toString() == gamenames[i].toString()) {
              temparr2[q][u] = temparr2[q][u].replaceAll(gamenames[i],gameids[i]);
            }
          }
        }
      }
    
    
    
    var discontinue = "";
    
    for (i = 0; i < temparr2[1].length; i++) {
      if (temparr2[1][i] <= GameID) {
        discontinue += "true"
      }
    }
    
    let discontinueResult;
    if (discontinue.includes("true")) {
      discontinueResult = true;
    }
    else {
      discontinueResult = false;
    }
    
    return discontinueResult;
    
    }
    else {
      return false;
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    for (x = 0; x < finaldataReferenceAll.length; x++) {
      var belong;
    
      if (introduce(x) == true && discontinue(x) == false) {
        belong = true;
      }
      if (introduce(x) == false && discontinue(x) == true || introduce(x) == true && discontinue(x) == true || introduce(x) == false && discontinue(x) == false) {
        belong = false;
      }
    
    
      finaldataLengthAll.push(belong);
    }
    
    
    
    for (x = 0; x < finaldataReferenceAll.length; x++) {
      if (finaldataReferenceAll[x]["Variant"].includes("Default")) {
        var belong;
    
        if (introduce(x) == true && discontinue(x) == false) {
          belong = true;
        }
        if (introduce(x) == false && discontinue(x) == true || introduce(x) == true && discontinue(x) == true || introduce(x) == false && discontinue(x) == false) {
          belong = false;
        }
      
        finaldataLengthDefault.push(belong);
      }
    }
    
}

