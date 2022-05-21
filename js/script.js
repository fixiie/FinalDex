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
    var arr = finaldataPokémon;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["Pokémon"] == name) {
            return arr[q]["ID"];
        }
    }
}

function getPokémonInt(name) {
    var name;
    var arr = finaldataPokémon;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["Pokémon"] == name || arr[q]["Form"] == name) {
            return q;
        }
    }
}






function getPokémonName(int) {
    var int;
    var arr = finaldataPokémon;

    for (var i = 0; i < arr.length; i++) {
        if (int == i) {
            if (arr[i]["Form"] != undefined) {
                return arr[i]["Form"];
            }
            else {
                return arr[i]["Pokémon"];
            }
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
                if (finaldataPokémonReference[q] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                    var obj = new Object();
                    obj["Pokémon"] = arr[q]["Pokémon"];
                    if (finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                        obj["Folder Name"] = "";
                    }
                    else {
                        obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName];
                    }
                    obj["File Name"] = finaldataPokémon[q]["File Name_" + JSONPath_FileName];
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
                    if (finaldataPokémonReference[q] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[q]["Pokémon"];
                        if (finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName];
                        }
                        obj["File Name"] = finaldataPokémon[q]["File Name_" + JSONPath_FileName];
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
                    if (finaldataPokémonReference[q] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[q]["Pokémon"];
                        if (finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName];
                        }
                        obj["File Name"] = finaldataPokémon[q]["File Name_" + JSONPath_FileName];
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

function getMoveData(move,type) {
    var type;
    var move;
    var arr;
    var game;

    if (type == "PP Min") {
        arr = finaldataMovePP;
        game = "PP Min_"+JSONPath_MovePP;
    }
    if (type == "PP Max") {
        arr = finaldataMovePP;
        game = "PP Max_"+JSONPath_MovePP;
    }
    if (type == "Power") {
        arr = finaldataMovePower;
        game = "Power_"+JSONPath_MovePower;
    }
    if (type == "Accuracy") {
        arr = finaldataMoveAccuracy;
        game = "Accuracy_"+JSONPath_MoveAccuracy;
    }
    if (type == "Type") {
        arr = finaldataMoveType;
        game = "Type_"+JSONPath_MoveType;
    }
    if (type == "Category") {
        arr = finaldataMoveCategory;
        game = "Category_"+JSONPath_MoveCategory;
    }

    for (var i = 0; i < arr.length; i++) {
        if(arr[i]["Name"+"_"+JSONPath_MoveName] == move) {
            return arr[i][game]
        }
    }
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
                if (finaldataPokémonReference[q] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                    var obj = new Object();
                    obj["Pokémon"] = arr[q]["Pokémon"];
                    if (finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                        obj["Folder Name"] = "";
                    }
                    else {
                        obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName];
                    }
                    obj["File Name"] = finaldataPokémon[q]["File Name_" + JSONPath_FileName];
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
            if (finaldataPokémonReference[q] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                var obj = new Object();
                obj["Pokémon"] = arr[q]["Pokémon"];
                if (finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName] == undefined) {
                    obj["Folder Name"] = "";
                }
                else {
                    obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_FolderName];
                }
                obj["File Name"] = finaldataPokémon[q]["File Name_" + JSONPath_FileName];
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
    var arr = finaldataPokémonPokédexID;
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




function ContinuationDiscontinuation() {


    function introduce(x) {
      var x;

    var tempReference = []
    
    for (i = 0; i < finaldataPokémon.length; i++) {
      tempReference.push(finaldataPokémon[i]["Game"])
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
        tempReference[i] = "Sword,Shield";
      }
      if (tempReference[i] == "The Crown Tundra") {
        tempReference[i] = "Sword,Shield";
      }
    }
    
    
      var temparray1 = tempReference[x].split(",");
    
      
      
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
    
      for (i = 0; i < finaldataPokémon.length; i++) {
        tempReference.push(finaldataPokémon[i]["Game"])
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
        tempReference[i] = "Sword,Shield";
      }
      if (tempReference[i] == "The Crown Tundra") {
        tempReference[i] = "Sword,Shield";
      }
    }
    
    
    
    if (tempReference[x].includes("-") && tempReference[x].includes(",")) {
      var temparr1 = [];
      temparr1.push(tempReference[x].split("-"));
      var temparr2 = [];
      
      
      for (q = 0; q < temparr1[0].length; q++) {
        temparr2.push(temparr1[0][q].split(","));
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    for (x = 0; x < finaldataPokémon.length; x++) {
      var belong;
    
      if (introduce(x) == true && discontinue(x) == false) {
        belong = true;
      }
      if (introduce(x) == false && discontinue(x) == true || introduce(x) == true && discontinue(x) == true || introduce(x) == false && discontinue(x) == false) {
        belong = false;
      }
    
    
      finaldataPokémonReference.push(belong);
    }
    
    
}








function Continuation(arr,column,style) {

    var arr;
    var column;
    var style;
    var temparr1 = [];
    var result = [];
    var names = [];

    if (style == "Single") {
        for (i = 0; i < arr.length; i++) {
            if (arr[i][column].includes(",")) {
                temparr1.push(arr[i][column].split(","));
            }
            else {
                temparr1.push(arr[i][column]);
            }
        }
        for (i = 0; i < temparr1.length; i++) {
            if (temparr1[i].includes(GameName)) {
                result[i] = true;
            }
            else {
                result[i] = false;
            }
        }
    }
    else if (style == "Multiple") {
        for (i = 0; i < finaldataGame.length; i++) {
            if (parseInt(finaldataGame[i]["ID"]) <= GameID) {
                names.push(finaldataGame[i]["Name"]);
            }
        }

        for (i = 0; i < finaldataGame.length; i++) {
            if (finaldataGame[i]["Name"] == GameName) {
                if (finaldataGame[i]["Sibling"] != undefined) {
                    if (finaldataGame[i]["Sibling"].includes(",")) {
                        for (q = 0; q < finaldataGame[i]["Sibling"].split(",").length; q++) {
                            for (u = 0; u < finaldataGame.length; u++) {
                                if (finaldataGame[u]["ID"] == finaldataGame[i]["Sibling"].split(",")[q]) {
                                    names.push(finaldataGame[u]["Name"]);
                                }
                            }
                        }
                    }
                    else {
                        for (u = 0; u < finaldataGame.length; u++) {
                            if (finaldataGame[u]["ID"] == finaldataGame[i]["Sibling"]) {
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

        for (i = 0; i < arr.length; i++) {
            if (arr[i][column].includes(",")) {
                temparr1.push(arr[i][column].split(","));
                temparrtype.push("+");
            }
            else if (arr[i][column].includes("-")) {
                temparr1.push(arr[i][column].split("-"));
                temparrtype.push("-");
            }
            else {
                temparr1.push(arr[i][column]);
                temparrtype.push("+");
            }
        }
        
        

        for (i = 0; i < temparr1.length; i++) {
            var boolean = [];
            if(temparrtype[i] == "-") {
                for (q = 0; q < finaldataGame.length; q++) {
                    if (finaldataGame[q]["Name"] == temparr1[i][0]) {
                        temprun = true;
                    }
                    if (finaldataGame[q]["Name"] == temparr1[i][1]) {
                        tempres.push(finaldataGame[q]["Name"])
                        temprun = false;
                    }

                    if (temprun == true) {
                        tempres.push(finaldataGame[q]["Name"])
                    }
                }

                for (q = 0; q < tempres.length; q++) {
                    if (tempres[q].includes(GameName)) {
                        boolean.push(true);
                    }
                    else {
                        boolean.push(false);
                    }
                }

                tempres = [];
            }
            else {
                for (q = 0; q < names.length; q++) {
                    if (temparr1[i].includes(names[q])) {
                        boolean.push(true);
                    }
                    else {
                        boolean.push(false);
                    }
                }
            }
            
            if (boolean.includes(true)) {
                result[i] = true;
            }
            else {
                result[i] = false;
            }
            boolean = [];
        }

    }

    return result;
    

}


function getMachineMove(machine) {
    
    var machine;
    var arr = finaldataMoveMachine;
    var result;

    for (i = 0; i < arr.length; i++) {
        if (arr[i]["Machine_" + JSONPath_MoveMachine] == machine) {
            result = arr[i]["Name"+"_"+JSONPath_MoveName]
        }
    }
    return result;
}

function getPokémonMediaPath(pok) {

    var arr = finaldataPokémon;
    var result = [];
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i]["Form"] == pok) {
            if (arr[i]["Folder Name_1-8"] == undefined) {
                result.push(arr[i]["File Name_1-8"]);
            }
            else {
                result.push(arr[i]["Folder Name_1-8"] + arr[i]["File Name_1-8"]);
            }
        }
        else if (arr[i]["Pokémon"] == pok) {
            if (arr[i]["Folder Name_1-8"] == undefined) {
                result.push(arr[i]["File Name_1-8"]);
            }
            else {
                result.push(arr[i]["Folder Name_1-8"] + arr[i]["File Name_1-8"]);
            }
        }
    }
    return result[0];

}



function OpenExitPopUp(x,active) {
    var x;
    var active;

    var popup = document.querySelector("#pokdata-modal" + x + " .pokdata-metadata-popup");
    if (active == false) {
        popup.classList.add("open");
        popup.classList.remove("close");
    }
    else {
        popup.classList.remove("open");
        popup.classList.add("close");
    }

}

function callPopUp(x,arr,type,style) { // id,icon,description,additional

    var x;
    var arr;
    var type;

    var popup = document.querySelector("#pokdata-modal" + x + " .pokdata-metadata-popup");
    var ul = popup.querySelector(":scope ul");
    var lis = popup.querySelectorAll(":scope li");

    var idpath = popup.querySelector(":scope span > h4");
    var iconpath = popup.querySelector(":scope span > img");
    var titlepath = popup.querySelector(":scope span > h2");
    var descriptionpath = popup.querySelector(":scope span > p");

    if (!popup.getAttribute("class").includes("open") && !popup.getAttribute("class").includes("close")) {
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

    if (target.getAttribute("dataname") == "value") {
        enhancetarget = target;
    }
    else {
        enhancetarget = target.querySelector(':scope [dataname="value"]');
    }

    if (enhancetarget.getAttribute("value") != undefined) {
        title = enhancetarget.getAttribute("value");
    }
    else if (enhancetarget.innerText != "") {
        title = enhancetarget.innerText;
    }
    else if (enhancetarget.getAttribute("title") != undefined) {
        title = enhancetarget.getAttribute("title");
    }

    if (title.includes("  ")) {
        title = title.replaceAll("  ","");
    }

    if (navChecker != 1) {
        navChecker.fill(1);
        document.querySelector("#pokdata-navigation label:nth-child(2)").click();
    }

    ul.setAttribute("name",type);


    if (type == "Ability") {
        id = getAbilityData(title,"ID");
        description = getAbilityData(title,"Flavor");
    }
    else if (type == "Held Item") {
        id = enhancetarget.getAttribute("name");

    }
    if (title.includes(" : ")) {
        title = title.split(" : ");
    }

    if (type == "Catch Rate") {
        if (Generation == 1) {
            formula = Math.round(((Math.min(parseInt(title)+1,256))/256*(85+1/256)/256*100)*10)/10 + "%";
        }
        else if (Generation == 2) {
            formula = Math.round(((Math.max(parseInt(title)/3,1)+1)/256*100)*10)/10 + "%";
        }
        else if (Generation == 3 || Generation == 4) {
            formula = Math.round(((65535/Math.sqrt(Math.sqrt(255/(parseInt(title)/3)))/65536)**4*100)*10)/10 + "%";
        }
        else if (Generation >= 5) {
            formula = Math.round(((65536/Math.sqrt(Math.sqrt(255/(parseInt(title)/3)))/65536)**3*100)*10)/10 + "%";
        }
    }
    else if (type == "Experience Yield") {
        if (title >= 300) {
            abbreviation = "Very High";
        }
        else if (title >= 200 && title <= 299) {
            abbreviation = "High";
        }
        else if (title >= 100 && title <= 199) {
            abbreviation = "Medium";
        }
        else if (title >= 50 && title <= 99) {
            abbreviation = "Low";
        }
        else if (title >= 0 && title <= 49) {
            abbreviation = "Very Low";
        }
    }
    else if (type == "Hatch Rate") {
        if (Generation == 2 || Generation == 7) {
            formula = parseInt(title) * 256;
        }
        else if (Generation == 3) {
            formula = (parseInt(title)+1) * 256;
        }
        else if (Generation == 4) {
            formula = (parseInt(title)+1) * 255;
        }
        else if (Generation == 5 || Generation == 6) {
            formula = parseInt(title) * 257;
        }
    }
    else if (type == "Gender Ratio") {
        if (title[0] == "1" && title[1] == "0") { // Always Male
            alteration = "<span name='Male'>♂</span> 1 : 0 <span name='Female'>♀</span>";
            abbreviation = "Always Male";
        }
        else if (title[0] == "7" && title[1] == "1") { // Very Often Male
            alteration = "<span name='Male'>♂</span> 7 : 1 <span name='Female'>♀</span>";
            abbreviation = "Very Often Male";
        }
        else if (title[0] == "3" && title[1] == "1") { // Often Male
            alteration = "<span name='Male'>♂</span> 3 : 1 <span name='Female'>♀</span>";
            abbreviation = "Often Male";
        }
        else if (title[0] == "1" && title[1] == "1") { // Equal Ratio
            alteration = "<span name='Male'>♂</span> 1 : 1 <span name='Female'>♀</span>";
            abbreviation = "Equal Ratio";
        }
        else if (title[0] == "1" && title[1] == "3") { // Often Female
            alteration = "<span name='Male'>♂</span> 1 : 3 <span name='Female'>♀</span>";
            abbreviation = "Often Female";
        }
        else if (title[0] == "1" && title[1] == "7") { // Very Often Female
            alteration = "<span name='Male'>♂</span> 1 : 7 <span name='Female'>♀</span>";
            abbreviation = "Very Often Female";
        }
        else if (title[0] == "0" && title[1] == "1") { // Always Female
            alteration = "<span name='Male'>♂</span> 0 : 1 <span name='Female'>♀</span>";
            abbreviation = "Always Female";
        }
        else if (title[0] == "0" && title[1] == "0") { // Genderless
            alteration = "<span name='Male'>♂</span> 0 : 0 <span name='Female'>♀</span>";
            abbreviation = "Genderless";
        }
    }

    if (type == "Held Item") {
        icon = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+target.title+".png";
        iconpath.setAttribute("name","Item");
        iconpath.addEventListener("click", dataRedirect);
    }


    if (type == "Base Stats" && style == "Multiple" || type == "EV Yield" && style == "Multiple") {
        additional = target.parentElement.getAttribute("class").split("-")[1];
    }
    else if (type == "Base Stats" && style == "Total" || type == "EV Yield" && style == "Total") {
        additional = target.getAttribute("name");
    }

    if (additional == "hp") {
        additional = "HP";
    }
    else if (additional == "atk") {
        additional = "attack";
    }
    else if (additional == "def") {
        additional = "defense";
    }
    else if (additional == "spatk") {
        additional = "Sp. Atk";
    }
    else if (additional == "spdef") {
        additional = "Sp. Def";
    }

    if (additional != undefined) {
        additional = additional.charAt(0).toUpperCase() + additional.slice(1);
    }

    
    for (u = 0; u < lis.length; u++) {
        lis[u].remove();
    }

    if (type == "Type") {
        popup.querySelector(":scope > div").setAttribute("name","type"+title);
    }
    else if (type == "Egg Group") {
        popup.querySelector(":scope > div").setAttribute("name","egg"+title);
    }
    else if (type == "Base Stats" || type == "EV Yield") {
        popup.querySelector(":scope > div").setAttribute("name","stat"+additional);
    }
    else {
        popup.querySelector(":scope > div").removeAttribute("name");
    }

    if (type == "Ability") {
        var jsonpath = JSONPath_Ability;
        if (Generation <= 4) {
            var json = ["Primary","Secondary"];
        }
        else {
            var json = ["Primary","Secondary","Hidden"];
        }
        json = json.map(i => i + "_" + jsonpath);
    }
    else if (type == "Egg Group") {
        var jsonpath = JSONPath_EggGroup;
        var json = ["Primary","Secondary"];
        json = json.map(i => i + "_" + jsonpath);
    }
    else if (type == "Catch Rate") {
        var json = [JSONPath_CatchRate,"Percentage"];
    }
    else if (type == "Hatch Rate") {
        var json = ["Egg Cycle_"+JSONPath_HatchRateEggCycle,"Steps_"+JSONPath_HatchRateSteps];
    }
    else if (type == "Experience Yield") {
        var json = [JSONPath_ExperienceYield,"Category"];
    }
    else if (type == "Leveling Rate") {
        var json = [JSONPath_LevelingRate];
    }
    else if (type == "Type") {
        var jsonpath = JSONPath_Type;
        var json = ["Primary","Secondary"];
        json = json.map(i => i + "_" + jsonpath);
    }
    else if (type == "Gender Ratio") {
        var jsonpath = JSONPath_GenderRatio;
        var json = ["Male","Female"];
        json = json.map(i => i + "_" + jsonpath);
    }
    else if (type == "Base Stats") {
        if (Generation <= 1) {
            var jsonpath = JSONPath_BaseStats;
            var json = ["HP","Attack","Defense","Special","Speed","Total"];
            json = json.map(i => i + "_" + jsonpath);
        }
        else {
            var jsonpath = JSONPath_BaseStats;
            var json = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
            json = json.map(i => i + "_" + jsonpath);
        }
    }
    else if (type == "EV Yield") {
        if (Generation <= 1) {
            var jsonpath = JSONPath_EVYield;
            var json = ["HP","Attack","Defense","Special","Speed","Total"];
            json = json.map(i => i + "_" + jsonpath);
        }
        else {
            var jsonpath = JSONPath_EVYield;
            var json = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
            json = json.map(i => i + "_" + jsonpath);
        }
    }
    else if (type == "Held Item") {
        var jsonpath = JSONPath_HeldItem;
        var json = JSONPath_HeldItemPercentage;
        json = json.map(i => i + "_" + jsonpath);
    }

    if (id == undefined) {
        idpath.innerText = "";
        idpath.style.display = "none";
    }
    else if (id.includes("%")) {
        idpath.innerText = id;
        idpath.style.display = "unset";
    }
    else {
        idpath.innerText = "#"+id;
        idpath.style.display = "unset";
    }

    if (style == "Total") {
        titlepath.innerHTML = type+"<br>"+title;
    }
    else if (type == "Catch Rate" || type == "Experience Yield" || type == "Leveling Rate" || type == "Base Stats" || type == "EV Yield") {
        if (additional == undefined) {
            titlepath.innerHTML = type+"<br>"+title;
        }
        else {
            titlepath.innerHTML = type+" "+additional+"<br>"+title;
        }
    }
    else if (type == "Hatch Rate") {
        titlepath.innerHTML = "Egg Cycles<br>"+title;
    }
    else if (type == "Gender Ratio") {
        titlepath.innerHTML = type+"<br>"+"<span title='"+abbreviation+"'>"+alteration+"</span>";
    }
    else {
        titlepath.innerText = title;
    }

    if (icon != undefined) {
        iconpath.style.display = "unset";
        iconpath.src = icon;
    }
    else {
        iconpath.style.display = "none";
    }

    iconpath.title = title;
    descriptionpath.innerText = description;

    if (description == undefined) {
        descriptionpath.style.display = "none";
    }
    else {
        descriptionpath.style.display = "flex";
    }



    var result = [];

    if (style == "Single") {
        for (q = 0; q < json.length; q++) {
            for (u = 0; u < arr.length; u++) {
                if (arr[u][json[q]] == title) {
                    if(finaldataPokémonReference[u] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[u]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[u]["Pokémon"];
                        obj["Form"] = arr[u]["Form"];
                        obj["Variant"] = arr[u]["Variant"];
                        obj["File Name"] = finaldataPokémon[u]["File Name_" + JSONPath_FileName];

                        if (finaldataPokémon[u]["Folder Name_"+JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[u]["Folder Name_"+JSONPath_FolderName];
                        }
                 
                        for (var y = 0; y < json.length; y++) {
                            if (arr[u][json[y]] != undefined) {
                                obj[json[y]] = arr[u][json[y]];
                            }
                        }

                        if (type == "Catch Rate") {
                            if (Generation == 1) {
                                obj["Percentage"] = Math.round(((Math.min(parseInt(arr[u][json[q]])+1,256))/256*(85+1/256)/256*100)*10)/10 + "%";
                            }
                            if (Generation == 2) {
                                obj["Percentage"] = Math.round(((Math.max(parseInt(arr[u][json[q]])/3,1)+1)/256*100)*10)/10 + "%";
                            }
                            if (Generation == 3 || Generation == 4) {
                                obj["Percentage"] = Math.round(((65535/Math.sqrt(Math.sqrt(255/(parseInt(arr[u][json[q]])/3)))/65536)**4*100)*10)/10 + "%";
                            }
                            if (Generation >= 5) {
                                obj["Percentage"] = Math.round(((65536/Math.sqrt(Math.sqrt(255/(parseInt(arr[u][json[q]])/3)))/65536)**3*100)*10)/10 + "%";
                            }
                        }

                        result[u] = obj;
                    }
                }
            }
        }
    }

    else if (style == "Multiple") {
        for (q = 0; q < json.length; q++) {
            for (u = 0; u < arr.length; u++) {
                if (arr[u][additional+"_"+jsonpath] == title) {
                    if(finaldataPokémonReference[u] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[u]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[u]["Pokémon"];
                        obj["Form"] = arr[u]["Form"];
                        obj["Variant"] = arr[u]["Variant"];
                        obj["File Name"] = finaldataPokémon[u]["File Name_" + JSONPath_FileName];

                        if (finaldataPokémon[u]["Folder Name_"+JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[u]["Folder Name_"+JSONPath_FolderName];
                        }
                 
                        for (var y = 0; y < json.length; y++) {
                            if (arr[u][json[y]] != undefined) {
                                obj[json[y]] = arr[u][json[y]];
                            }
                        }

                        result[u] = obj;
                    }
                }
            }
        }
    }

    else if (style == "Total") {
        for (q = 0; q < json.length; q++) {
            for (u = 0; u < arr.length; u++) {
                if (arr[u][json[q]] != undefined) {
                    if(finaldataPokémonReference[u] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[u]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[u]["Pokémon"];
                        obj["Form"] = arr[u]["Form"];
                        obj["Variant"] = arr[u]["Variant"];
                        obj["File Name"] = finaldataPokémon[u]["File Name_" + JSONPath_FileName];

                        if (finaldataPokémon[u]["Folder Name_"+JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[u]["Folder Name_"+JSONPath_FolderName];
                        }
                 
                        for (var y = 0; y < json.length; y++) {
                            if (arr[u][json[y]] != undefined) {
                                obj[json[y]] = arr[u][json[y]];
                            }
                        }
                        result[u] = obj;
                    }
                }
            }
        }
        result.sort(function (a, b) {
            return b[additional+"_"+jsonpath] - a[additional+"_"+jsonpath];
        });
    }

    else if (style == "Custom1") {
        for (var q = 0; q < json.length; q++) {
            for (var u = 0; u < arr.length; u++) {
                
                var condition;
                var abbreviation2;

                if (abbreviation == "Very High") {
                    condition = parseInt(arr[u][json[q]]) >= 300;
                    abbreviation2 = "Very High";
                }
                if (abbreviation == "High") {
                    condition = parseInt(arr[u][json[q]]) >= 200 && parseInt(arr[u][json[q]]) <= 299;
                    abbreviation2 = "High";
                }
                if (abbreviation == "Medium") {
                    condition = parseInt(arr[u][json[q]]) >= 100 && parseInt(arr[u][json[q]]) <= 199;
                    abbreviation2 = "Medium";
                }
                if (abbreviation == "Low") {
                    condition = parseInt(arr[u][json[q]]) >= 50 && parseInt(arr[u][json[q]]) <= 99;
                    abbreviation2 = "Low";
                }
                if (abbreviation == "Very Low") {
                    condition = parseInt(arr[u][json[q]]) >= 0 && parseInt(arr[u][json[q]]) <= 49;
                    abbreviation2 = "Very Low";
                }
    
                if (condition) {
                    if (finaldataPokémonReference[u] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[u]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();

                        obj["Pokémon"] = arr[u]["Pokémon"];
                        obj["Form"] = arr[u]["Form"];
                        obj["Variant"] = arr[u]["Variant"];
                        obj["Category"] = abbreviation2;
                        obj["File Name"] = finaldataPokémon[u]["File Name_" + JSONPath_FileName];

                        if (finaldataPokémon[u]["Folder Name_" + JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[u]["Folder Name_" + JSONPath_FolderName];
                        }
              
                        for (var y = 0; y < json.length; y++) {
                            if (arr[u][json[y]] != undefined) {
                                obj[json[y]] = arr[u][json[y]];
                            }
                        }
                        result[u] = obj;
                    }
                }
            }
        }
        result.sort(function (a, b) {
            return b[json[0]] - a[json[0]];
        });
    }

    else if (style == "Custom2") {
        for (var q = 0; q < json.length; q++) {
            for (var u = 0; u < arr.length; u++) {

                var alteration2;
                var abbreviation2;

                if (arr[u][json[0]] == "1" && arr[u][json[1]] == "0") { // Always Male
                    alteration2 = "<span name='Male'>♂</span> 1 : 0 <span name='Female'>♀</span>";
                    abbreviation2 = "Always Male";
                }
                else if (arr[u][json[0]] == "7" && arr[u][json[1]] == "1") { // Very Often Male
                    alteration2 = "<span name='Male'>♂</span> 7 : 1 <span name='Female'>♀</span>";
                    abbreviation2 = "Very Often Male";
                }
                else if (arr[u][json[0]] == "3" && arr[u][json[1]] == "1") { // Often Male
                    alteration2 = "<span name='Male'>♂</span> 3 : 1 <span name='Female'>♀</span>";
                    abbreviation2 = "Often Male";
                }
                else if (arr[u][json[0]] == "1" && arr[u][json[1]] == "1") { // Equal Ratio
                    alteration2 = "<span name='Male'>♂</span> 1 : 1 <span name='Female'>♀</span>";
                    abbreviation2 = "Equal Ratio";
                }
                else if (arr[u][json[0]] == "1" && arr[u][json[1]] == "3") { // Often Female
                    alteration2 = "<span name='Male'>♂</span> 1 : 3 <span name='Female'>♀</span>";
                    abbreviation2 = "Often Female";
                }
                else if (arr[u][json[0]] == "1" && arr[u][json[1]] == "7") { // Very Often Female
                    alteration2 = "<span name='Male'>♂</span> 1 : 7 <span name='Female'>♀</span>";
                    abbreviation2 = "Very Often Female";
                }
                else if (arr[u][json[0]] == "0" && arr[u][json[1]] == "1") { // Always Female
                    alteration2 = "<span name='Male'>♂</span> 0 : 1 <span name='Female'>♀</span>";
                    abbreviation2 = "Always Female";
                }
                else if (arr[u][json[0]] == "0" && arr[u][json[1]] == "0") { // Genderless
                    alteration2 = "<span name='Male'>♂</span> 0 : 0 <span name='Female'>♀</span>";
                    abbreviation2 = "Genderless";
                }

                if (alteration == alteration2) {
                    if (finaldataPokémonReference[u] == true && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[u]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();

                        obj["Pokémon"] = arr[u]["Pokémon"];
                        obj["Form"] = arr[u]["Form"];
                        obj["Variant"] = arr[u]["Variant"];
                        obj["Alteration"] = alteration2;
                        obj["Abbreviation"] = abbreviation2;
                        obj["File Name"] = finaldataPokémon[u]["File Name_" + JSONPath_FileName];

                        if (finaldataPokémon[u]["Folder Name_" + JSONPath_FolderName] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[u]["Folder Name_" + JSONPath_FolderName];
                        }
              
                        for (var y = 0; y < json.length; y++) {
                            if (arr[u][json[y]] != undefined) {
                                obj[json[y]] = arr[u][json[y]];
                            }
                        }
                        result[u] = obj;
                    }
                }
            }
        }
        result.sort(function (a, b) {
            return b[json[0]] - a[json[0]];
        });
    }


    result = result.filter(value => Object.keys(value).length !== 0);


    if (icon == undefined) {
        for (u = 0; u < result.length; u++) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            
            if (type == "Ability") {
                if (Generation <= 4) {
                    li.setAttribute("name","2");
                }
                else {
                    li.setAttribute("name","3");
                }
            }
          
            var img = document.createElement("img");
            if (result[u]["Form"] != undefined) {
                img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(result[u]["Form"])+".png";
                img.title = result[u]["Form"];
                img.value = getPokémonInt(result[u]["Form"]);
            }
            else {
                img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(result[u]["Pokémon"])+".png";
                img.title = result[u]["Pokémon"];
                img.value = getPokémonInt(result[u]["Pokémon"]);
            }
            img.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
           
            if (result[u]["Pokémon"] == getPokémonName(getIntID("",x))) {
                li.classList.add("select");
            }

            img.addEventListener("click", function(){modalPokdata("open")});

            ul.appendChild(li);
            li.appendChild(span);
            span.appendChild(img);


      
            if (type == "Gender Ratio") {

                var p = document.createElement("p");

                p.title = result[u]["Abbreviation"];
            
                if (result[u]["Category"] == formula) {
                    p.classList.add("select");
                }
            
                if (result[u]["Alteration"] != undefined) {
                    p.innerHTML = result[u]["Alteration"];   
                }
                else {
                    p.innerText = "–";
                }

                li.appendChild(p);

            }
            else {
                for (q = 0; q < json.length; q++) {
    
                    var p = document.createElement("p");
              
                    if (type == "Hatch Rate" && q == 0) {
                        p.title = "Egg Cycles";
                    }
                    else if (type == "Hatch Rate" && q == 1) {
                        p.title = "Steps";
                    }
                    else if (type == "Base Stats" || type == "EV Yield") {
                        p.title = json[q].split("_")[0];
                        p.setAttribute("name","stat"+json[q].split("_")[0]);
                    }
                    else if (json[q].includes("_") && type != "Base Stats" || json[q].includes("_") && type != "EV Yield") {
                        p.title = json[q].split("_")[0] + " " + type;
                    }
                    else if (type == "Catch Rate") {
                        if (q == 0) {
                            p.title = type;
                        }
                        else {
                            if (result[u]["Form"] != undefined) {
                                p.title = "When thrown at a full health "+result[u]["Form"]+" with an ordinary Poké Ball.";
                            }
                            else {
                                p.title = "When thrown at a full health "+result[u]["Pokémon"]+" with an ordinary Poké Ball.";
                            }

                            
                        }
                    }
                    else if (type == "Experience Yield") {
                        if (q == 0) {
                            p.title = type;
                        }
                        else {
                            p.title = type+" Category";
                        }
                    }
                    else {
                        p.title = type;
                    }

                
                if (style == "Multiple") {
                    if (result[u][json[q]] == title && json[q] == additional+"_"+jsonpath) {
                        p.classList.add("select");
                    }
                }
                else if (style == "Total") {
                    if (json[q] == additional+"_"+jsonpath) {
                        p.classList.add("select");
                    }
                }
                else if (type == "Catch Rate" || type == "Hatch Rate" || type == "Experience Yield") {
                    if (result[u][json[q]] == title || result[u][json[q]] == formula || result[u][json[q]] == abbreviation) {
                        p.classList.add("select");
                    }
                }
                else {
                    if (result[u][json[q]] == title) {
                        p.classList.add("select");
                    }
                }
    
    
    
    
                if (type != "Type") {
                    if (type == "Egg Group") {
                        if (result[u][json[q]] != undefined) {
                            p.innerText = result[u][json[q]];
                            p.setAttribute("name","egg"+result[u][json[q]]);
                        }
                        else {
                            p.innerText = "–";
                        }
                    }
                    else {
                        if (result[u][json[q]] != undefined) {
                            p.innerText = result[u][json[q]];
                            
                            if (type == "Ability") {
                                p.setAttribute("name","Ability");
                                p.addEventListener("click", dataRedirect);
                                p.classList.add("active");
                            }
                        }
                        else {
                            p.innerText = "–";
                        }
                    }
                    
                }
                else {
                    var img2 = document.createElement("img");
                    if (result[u][json[q]] != undefined) {
                        img2.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+result[u][json[q]]+".png";
                        img2.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
                    }
                    p.appendChild(img2);
                }
                
                li.appendChild(p);
                    
              
                    
                }
            }
            
        }
}
else {
    for (u = 0; u < result.length; u++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        if (result[u]["Form"] != undefined) {
            img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(result[u]["Form"])+".png";
            img.title = result[u]["Form"];
            img.value = getPokémonInt(result[u]["Form"]);
        }
        else {
            img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(result[u]["Pokémon"])+".png";
            img.title = result[u]["Pokémon"];
            img.value = getPokémonInt(result[u]["Pokémon"]);
        }
        if (type == "Held Item") {
            li.setAttribute("name",json.length);
        }
        img.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

        if(result[u]["Pokémon"] == getPokémonName(getIntID(x,""))) {
            img.classList.add("select");
        }

        img.addEventListener("click", function(){modalPokdata("open")});
        
        ul.appendChild(li);
        li.appendChild(span);
        span.appendChild(img);


        for (q = 0; q < json.length; q++) {
     
            var p = document.createElement("p");
            var span2 = document.createElement("span");
            var pimg = document.createElement("img");


            if (result[u][json[q]] != undefined) {
                pimg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+result[u][json[q]]+".png";
                pimg.title = result[u][json[q]];
                if(json[q].includes("_")) {
                    span2.innerText = json[q].split("_")[0];
                }
                else {
                    span2.innerText = json[q];
                }
                pimg.setAttribute("name","Item");
                pimg.addEventListener("click", dataRedirect);
                pimg.classList.add("active");
            }
            else {
                span2.innerText = "–";
                pimg.style.display = "none";
            }

            p.title = json[q].split("_")[0];
         
   
            if (result[u][json[q]] == title) {
                pimg.classList.add("select");
            }

            if (result[u][json[q]] == title && json[q].split("_")[0] == id) {
                span2.classList.add("select");
            }
        


            li.appendChild(p);
            p.appendChild(span2);
            p.appendChild(pimg);
            
        }
    }
}


}


function rememberVariant() {
    var target = event.currentTarget;
    if (target.checked == false) {
        localStorage.resetCheck = JSON.stringify(target.getAttribute("id"));
    }
}

var variantRotation;
function variantSelector() {
    var variants = [];

    if (document.querySelectorAll("#reset-aside1 div > input:checked").length >= 1) {
        var inputs = document.querySelectorAll("#reset-aside1 div > input");
        var labels = document.querySelectorAll("#reset-aside1 div > label");
        for (q = 0; q < inputs.length; q++) {
            if(inputs[q].checked == true) {
                variants.push(labels[q].innerHTML.replaceAll("<span></span>",""))
            }
            else {
                variants = variants.filter(item => item != labels[q].innerHTML.replaceAll("<span></span>",""));
            }
        }

        createContain(variants);
        imgType();
        resizeDiv();
        memoryCheckbox("contain");
        count();

        document.getElementById("searchbar").value = "";        

        $("body").removeClass("modal-open");
        $(".reset-modal-outer.open").removeClass("open");
    }
    else {
        if (variantRotation != true) {
            //document.getElementById(localStorage.resetCheck.replaceAll('"','')).click();
            //variantSelector();
        }
        document.querySelector("#reset-aside1 div button").animate([
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
    variantRotation = true;
}


function UncheckAll() {
    count();
    var uncheck = document.querySelectorAll('#contain-inner div:not([style*="display: none"]):not(.hidden) input:checked');
    for (var i = 0; i < uncheck.length; i++) {
        uncheck[i].click();
    }
}

function CheckAll() {
    count();
    var check = document.querySelectorAll('#contain-inner div:not([style*="display: none"]):not(.hidden) input:not(:checked)');
    for (var i = 0; i < check.length; i++) {
        check[i].click();
    }
}

function dataRedirect() {
    var type = (this.getAttribute("name")).toLowerCase();
    var x;
    var typevariant;

    if (this.innerHTML != undefined && this.innerHTML != "") {
        x = (this.innerHTML).toLowerCase();
    }
    else if (this.getAttribute("title") != undefined) {
        x = (this.getAttribute("title")).toLowerCase();
    }

    if (type == "map") {
        typevariant = type;
    }
    else if (type == "ability") {
        typevariant = "abilities";
    }
    else {
        typevariant = type + "s";
    }
    typevariant = typevariant.charAt(0).toUpperCase() + typevariant.slice(1);

    if (document.querySelector(".gamedata-modal-outer.open") == undefined) { // if not open
        document.querySelector(".pokdata-modal-outer.open").classList.remove("open");
        document.querySelector(".gamedata-modal-outer").classList.add("open");
        document.querySelector(".gamedata-modal-outer .gamedata-nav > input[value='"+typevariant+"']").click();
    }
    document.querySelector('#'+type+'-options > label[data-search-name="'+x+'"]').click();
    document.querySelector('#'+type+'-options > label[data-search-name="'+x+'"]').scrollIntoView();
}

function returnData(id,type,additional) {
    var id;
    var arr;
    var type;
    var additional;
    var column;
    var check;
    var result = [];


    if (type.includes("Type")) {
        arr = finaldataPokémonType;
        column = ["Primary","Secondary"];
        column = column.map(i => i + "_" + JSONPath_Type);
    }
    else if (type.includes("Debut")) {
        arr = finaldataPokémon;
        column = ["Generation","Game"];
    }
    else if (type.includes("Category")) {
        arr = finaldataPokémonCategory;
        column = JSONPath_Category;
    }
    else if (type.includes("Ability")) {
        arr = finaldataPokémonAbility;
        if (Generation >= 5) {
            column = ["Primary","Secondary","Hidden"];
        }
        else {
            column = ["Primary","Secondary"];
        }
        column = column.map(i => i + "_" + JSONPath_Ability);
    }
    else if (type.includes("Catch Rate")) {
        arr = finaldataPokémonCatchRate;
        column = JSONPath_CatchRate;

    }
    else if (type.includes("Hatch Rate")) {
        arr = finaldataPokémonHatchRate;
        column = ["Egg Cycle_"+JSONPath_HatchRateEggCycle,"Steps_"+JSONPath_HatchRateSteps];
    }
    else if (type.includes("Gender Ratio")) {
        arr = finaldataPokémonGenderRatio;
        column = ["Male","Female"];
        column = column.map(i => i + "_" + JSONPath_GenderRatio);
    }
    else if (type.includes("Egg Group")) {
        arr = finaldataPokémonEggGroup;
        column = ["Primary","Secondary"];
        column = column.map(i => i + "_" + JSONPath_EggGroup);
    }
    else if (type.includes("Experience Yield")) {
        arr = finaldataPokémonExperienceYield;
        column = JSONPath_ExperienceYield;
    }
    else if (type.includes("Leveling Rate")) {
        arr = finaldataPokémonLevelingRate;
        column = JSONPath_LevelingRate;
    }
    else if (type.includes("Held Item")) {
        arr = finaldataPokémonHeldItem;
        column = JSONPath_HeldItemPercentage;
        column = column.map(i => i + "_" + JSONPath_HeldItem);
    }
    else if (type.includes("Base Stats HP")) {
        arr = finaldataPokémonBaseStats;
        column = "HP"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("Base Stats Attack")) {
        arr = finaldataPokémonBaseStats;
        column = "Attack"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("Base Stats Defense")) {
        arr = finaldataPokémonBaseStats;
        column = "Defense"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("Base Stats Sp. Atk")) {
        arr = finaldataPokémonBaseStats;
        column = "Sp. Atk"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("Base Stats Sp. Def")) {
        arr = finaldataPokémonBaseStats;
        column = "Sp. Def"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("Base Stats Speed")) {
        arr = finaldataPokémonBaseStats;
        column = "Speed"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("Base Stats Total")) {
        arr = finaldataPokémonBaseStats;
        column = "Total"+"_"+JSONPath_BaseStats;
    }
    else if (type.includes("EV Yield HP")) {
        arr = finaldataPokémonEVYield;
        column = "HP"+"_"+JSONPath_EVYield;
    }
    else if (type.includes("EV Yield Attack")) {
        arr = finaldataPokémonEVYield;
        column = "Attack"+"_"+JSONPath_EVYield;
    }
    else if (type.includes("EV Yield Defense")) {
        arr = finaldataPokémonEVYield;
        column = "Defense"+"_"+JSONPath_EVYield;
    }
    else if (type.includes("EV Yield Sp. Atk")) {
        arr = finaldataPokémonEVYield;
        column = "Sp. Atk"+"_"+JSONPath_EVYield;
    }
    else if (type.includes("EV Yield Sp. Def")) {
        arr = finaldataPokémonEVYield;
        column = "Sp. Def"+"_"+JSONPath_EVYield;
    }
    else if (type.includes("EV Yield Speed")) {
        arr = finaldataPokémonEVYield;
        column = "Speed"+"_"+JSONPath_EVYield;
    }
    else if (type.includes("EV Yield Total")) {
        arr = finaldataPokémonEVYield;
        column = "Total"+"_"+JSONPath_EVYield;
    }



    for (var i = 0; i < arr.length; i++) {
        if(i == id) {
            if (Array.isArray(column)) {
                for (var q = 0; q < column.length; q++) {
                    result.push(arr[i][column[q]]);
                }
        
            }
            else {
                result.push(arr[i][column]);
            }
        }
    }

    for (var i = 0; i < result.length; i++) {
        if (result[i] == undefined) {
            check = true;
        }
        else {
            check = false;
            break;
        }
    }

    if (check == true) {
        result = [];
        for (var i = 0; i < arr.length; i++) {
            if (i == id) {
                if (Array.isArray(column)) {
                    for (var q = 0; q < column.length; q++) {
                        if (arr[arr.map(function(e) { return e.ID; }).indexOf(arr[i]["ID"])][column[q]] != undefined) {
                            result.push(arr[arr.map(function(e) { return e.ID; }).indexOf(arr[i]["ID"])][column[q]]);
                        }
                    }
            
                }
                else {
                    if (arr[arr.map(function(e) { return e.ID; }).indexOf(arr[i]["ID"])][column] != undefined) {
                        result.push(arr[arr.map(function(e) { return e.ID; }).indexOf(arr[i]["ID"])][column]); 
                    }
                }
            }
        }
    }

    if (additional.includes("lower")) {
        if (result.length >= 1 && result != undefined) {
            result = result.map(element => {
                if (element != undefined && isNaN(element)) {
                    return element.toLowerCase();
                }
                else {
                    return element;
                }
            });
        }
    }
    if (additional.includes("upper")) {
        if (result.length >= 1 && result != undefined) {
            result = result.map(element => {
                if (element != undefined && isNaN(element)) {
                    return element.toUpperCase();
                }
                else {
                    return element;
                }
            });
        }
    }
    if (additional.includes("undefined")) {
        if (result.length >= 1 && result != undefined) {
            result = result.filter(function(element) {
                return element !== undefined;
            });
        }
    }


    return result;

}



function getEvolutionFamily(id) {

    var id;
    var i = id;




    var PokémonStage;
    var FamilyStage;
    var FamilyPokémon;

    var PreviousPrevious;
    var Previous;
    var PreviousNext;
    var Name;
    var Next;
    var NextNext;


    

    if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage] != "None" || finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Next_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Previous_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionStage[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Pokémon Stage_"+JSONPath_EvolutionStage] != "None") {
        Name = finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Pokémon"];
        Previous = finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Previous_"+JSONPath_EvolutionSpecie];
        PokémonStage = finaldataPokémonEvolutionStage[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Pokémon Stage_"+JSONPath_EvolutionStage];
        FamilyStage = finaldataPokémonEvolutionStage[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Family Stage_"+JSONPath_EvolutionStage];

        if (Previous != undefined) {
            PreviousNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Previous))]["Next_"+JSONPath_EvolutionSpecie];
            PreviousPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Previous))]["Previous_"+JSONPath_EvolutionSpecie];
        }

        if (finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
            if (finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                Next = finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Next_"+JSONPath_EvolutionSpecie].split(",");
            }
            else {
                Next = finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Next_"+JSONPath_EvolutionSpecie];
            }
        }
        if (Next != undefined) {
            if (Array.isArray(Next)) {
                NextNext = [];
                for (var q = 0; q < Next.length; q++) {
                    if (finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next[q]))]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                        NextNext.push(finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next[q]))]["Next_"+JSONPath_EvolutionSpecie]);
                    }
                }
            }
            else {
                if (finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                    if (finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                        NextNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie].split(",");
                    }
                    else {
                        NextNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie];
                    }
                }
            }
        }
    
        if (PokémonStage == "First-Stage" && FamilyStage == "Two-Stage") { // 1/2 
            FamilyPokémon = Name+","+Next;
        }
        else if (PokémonStage == "First-Stage" && FamilyStage == "Three-Stage") { // 1/3
            FamilyPokémon = Name+","+Next+","+NextNext;
        }
        else if (PokémonStage == "Second-Stage" && FamilyStage == "Two-Stage") { // 2/2
            FamilyPokémon = Previous+","+PreviousNext;
        }
        else if (PokémonStage == "Second-Stage" && FamilyStage == "Three-Stage") { // 2/3
            FamilyPokémon = Previous+","+PreviousNext+","+Next;
        }
        else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
            FamilyPokémon = PreviousPrevious+","+Previous+","+PreviousNext;
        }
        else {
            FamilyPokémon = Name;
        }
    }
    else {
        Name = finaldataPokémonEvolutionSpecie[i]["Pokémon"];
        Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
        PokémonStage = finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage];
        FamilyStage = finaldataPokémonEvolutionStage[i]["Family Stage_"+JSONPath_EvolutionStage];

        if (Previous != undefined) {
            PreviousNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Previous))]["Next_"+JSONPath_EvolutionSpecie];
            PreviousPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Previous))]["Previous_"+JSONPath_EvolutionSpecie];
        }

        if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
            if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
            }
            else {
                Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
            }
        }


        if (Next != undefined) {
            if (Array.isArray(Next)) {
                for (var q = 0; q < Next.length; q++) {
                    NextNext = [];
                    if (finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next[q]))]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                        NextNext.push(finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next[q]))]["Next_"+JSONPath_EvolutionSpecie]);
                    }
                    
                }
            }
            else {
                if (finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                    if (finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                        NextNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie].split(",");
                    }
                    else {
                        NextNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Next))]["Next_"+JSONPath_EvolutionSpecie];
                    }
                }
            }
        }
    
        if (PokémonStage == "First-Stage" && FamilyStage == "Two-Stage") { // 1/2 
            FamilyPokémon = Name+","+Next;
        }
        else if (PokémonStage == "First-Stage" && FamilyStage == "Three-Stage") { // 1/3
            FamilyPokémon = Name+","+Next+","+NextNext;
        }
        else if (PokémonStage == "Second-Stage" && FamilyStage == "Two-Stage") { // 2/2
            FamilyPokémon = Previous+","+PreviousNext;
        }
        else if (PokémonStage == "Second-Stage" && FamilyStage == "Three-Stage") { // 2/3
            FamilyPokémon = Previous+","+PreviousNext+","+Next;
        }
        else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
            FamilyPokémon = PreviousPrevious+","+Previous+","+PreviousNext;
        }
        else {
            FamilyPokémon = Name;
        }
    }

    if (FamilyPokémon != undefined) {
        if (FamilyPokémon.includes(",")) {
            FamilyPokémon = FamilyPokémon.split(",");
        }
        else {
            FamilyPokémon = [FamilyPokémon];
        }
    }
  

    return FamilyPokémon;
}


function getIntID(int,id) {
    var int;
    var id;
    if (id == undefined || id == "") { // int --> id
        for (var i = 0; i < finaldataPokémon.length; i++) {
            if (int == i) {
                return finaldataPokémon[i]["ID"];
            }
        }
    }
    else if (int == undefined || int == "") { // id --> int
        for (var i = 0; i < finaldataPokémon.length; i++) {
            if (id == finaldataPokémon[i]["ID"]) {
                return i;
            }
        }
    }
}





function loadData() {
    var target = event.currentTarget;
    var i = target.getAttribute("value");
    var id = getIntID(i,"");

    var portrait = document.querySelector("#pokdata-modal"+id+" .pokdata-portrait");
    var category = document.querySelector("#pokdata-modal"+id+" .pokdata-category");
    var debut = document.querySelector("#pokdata-modal"+id+" .pokdata-debut");
    var name = document.querySelector("#pokdata-modal"+id+" .pokdata-name");
    var type = document.querySelector("#pokdata-modal"+id+" .pokdata-type");
    var basestats = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-stats ul[name='basestats']");
    var evyield = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-stats ul[name='evyield']");
    var ability = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-ability");
    var catchrate = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-catchrate");
    var hatchrate = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-hatchrate");
    var genderratio = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-genderratio");
    var egggroup = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-egggroup");
    var expyield = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-expyield");
    var levelrate = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-levelrate");
    var helditem = document.querySelector("#pokdata-modal"+id+" .pokdata-metadata-sidebar-helditem");

    
    category.innerText = '"'+returnData(i,"Category","")[0]+' Pokémon"';

    if (returnData(i,"Debut","")[0].includes("-")) {
        debut.innerText = "Introduced in "+returnData(i,"Debut","")[0].split("-")[0];
    }
    else {
        debut.innerText = "Introduced in "+returnData(i,"Debut","")[0];
    }


    if (Ability.length >= 1) {
        if (returnData(i,"Ability","")[0] != undefined) {
            ability.querySelector(':scope *[title="Primary Ability"]').innerText = returnData(i,"Ability","")[0];
            ability.querySelector(':scope *[title="Primary Ability"]').style.display = "flex";
        }
        else {
            ability.querySelector(':scope *[title="Primary Ability"]').style.display = "none";
        }
        if (returnData(i,"Ability","")[1] != undefined) {
            ability.querySelector(':scope *[title="Secondary Ability"]').innerText = returnData(i,"Ability","")[1];
            ability.querySelector(':scope *[title="Secondary Ability"]').style.display = "flex";
        }
        else {
            ability.querySelector(':scope *[title="Secondary Ability"]').style.display = "none";
        }

        if (Ability.length >= 3) {
            if (returnData(i,"Ability","")[2] != undefined) {
                ability.querySelector(':scope *[title="Hidden Ability"]').innerText = returnData(i,"Ability","")[2];
                ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.style.display = "flex";
            }
            else {
                ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.style.display = "none";
            }
        }
    }

    
    
    genderratio.querySelector(':scope > span').style.display = "unset";

    if (returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "0") { // Always Male
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","100% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","0% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 0");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "7" && returnData(i,"Gender Ratio","")[1] == "1") { // Very Often Male
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","87.5% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","12.5% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","7 : 1");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "3" && returnData(i,"Gender Ratio","")[1] == "1") { // Often Male
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","75% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","25% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","3 : 1");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "1") { // Equal Ratio
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","50% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","50% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 1");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "3") { // Often Female
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","25% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","75% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 3");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "7") { // Very Often Female
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","12.5% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","87.5% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 7");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "0" && returnData(i,"Gender Ratio","")[1] == "1") { // Always Female
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","0% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","100% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","0 : 1");
    }
    else if (returnData(i,"Gender Ratio","")[0] == "0" && returnData(i,"Gender Ratio","")[1] == "0") { // Genderless
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","0% Male");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","0% Female");
        genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","Genderless");
        genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","0 : 0");
    }

    levelrate.querySelector(':scope *[dataname="value"]').innerText = returnData(i,"Leveling Rate","")[0];
    levelrate.querySelector(':scope *[dataname="value"]').setAttribute("value",returnData(i,"Leveling Rate","")[0]);
    levelrate.querySelector(':scope *[dataname="value"]').setAttribute("title","Time approximated for "+getPokémonName(i)+" to Level Up.");

    name.innerText = getPokémonName(i);

    hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i,"Hatch Rate","")[1] + " Steps";
    hatchrate.querySelector(':scope *[dataname="value"').setAttribute("value",returnData(i,"Hatch Rate","")[0]);
    hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title","Steps required to hatch an egg containing "+getPokémonName(i)+".");

    if (Egg == true) {
        if (returnData(i,"Egg Group","")[0] != undefined) {
            egggroup.querySelector(':scope span[name="Primary"]').style.display = "flex";
            egggroup.querySelector(':scope span[name="Primary"]').querySelector(':scope *[dataname="value"').setAttribute("name","egg"+returnData(i,"Egg Group","")[0]);
            egggroup.querySelector(':scope span[name="Primary"]').querySelector(':scope *[dataname="value"').innerText = returnData(i,"Egg Group","")[0];
        }
        else {
            egggroup.querySelector(':scope span[name="Primary"]').style.display = "none";
        }
        if (returnData(i,"Egg Group","")[1] != undefined) {
            egggroup.querySelector(':scope span[name="Secondary"]').style.display = "flex";
            egggroup.querySelector(':scope span[name="Secondary"]').querySelector(':scope *[dataname="value"').setAttribute("name","egg"+returnData(i,"Egg Group","")[1]);
            egggroup.querySelector(':scope span[name="Secondary"]').querySelector(':scope *[dataname="value"').innerText = returnData(i,"Egg Group","")[1];
        }
        else {
            egggroup.querySelector(':scope span[name="Secondary"]').style.display = "none";
        }        
    }



    var baseev = ["Base Stats","EV Yield"];
    var sts = [];

    for (var y = 0; y < baseev.length; y++) {
        for (var q = 0; q < Stats.length; q++) {

            if (y == 0) {
                var arr = finaldataPokémonBaseStats;
                var json = JSONPath_BaseStats;
                var taq = basestats;
            }
            else if (y == 1) {
                var arr = finaldataPokémonEVYield;
                var json = JSONPath_EVYield;
                var taq = evyield;
            }

            var temp1 = baseev[y].toLowerCase().replace(" ","").replace(".","");
            var temp2 = Stats[q].toLowerCase().replace(" ","").replace(".","");


            for (var u = 0; u < finaldataPokémonReference.length; u++) {
                if (finaldataPokémonReference[u] == true) {
                    if (arr[u][Stats[q]+"_"+json] != undefined && arr[u][Stats[q]+"_"+json] != "") {
                        sts.push(parseInt(arr[u][Stats[q]+"_"+json]));
                    }
                }
            }


            taq.querySelector(':scope .'+temp1+'-'+temp2).querySelector(':scope *[dataname="value"]').innerHTML = returnData(i,baseev[y]+" "+Stats[q],"")[0] + "&nbsp;&nbsp;";
            taq.querySelector(':scope .'+temp1+'-'+temp2).querySelector(':scope *[dataname="value"]').setAttribute("value",returnData(i,baseev[y]+" "+Stats[q],"")[0]);
            taq.querySelector(':scope .'+temp1+'-'+temp2).querySelector(':scope *[dataname="value"]').style.width = returnData(i,baseev[y]+" "+Stats[q],"")[0] / Math.max.apply(Math,sts) * 100 + "%";
            sts = [];
        }
    }



    if (returnData(i,"Experience Yield","")[0] >= 300) {
        expyield.querySelector(':scope *[dataname="value"]').innerText = "Very High";
    }
    if (returnData(i,"Experience Yield","")[0] >= 200 && returnData(i,"Experience Yield","")[0] <= 299) {
        expyield.querySelector(':scope *[dataname="value"]').innerText = "High";
    }
    if (returnData(i,"Experience Yield","")[0] >= 100 && returnData(i,"Experience Yield","")[0] <= 199) {
        expyield.querySelector(':scope *[dataname="value"]').innerText = "Medium";
    }
    if (returnData(i,"Experience Yield","")[0] >= 50 && returnData(i,"Experience Yield","")[0] <= 99) {
        expyield.querySelector(':scope *[dataname="value"]').innerText = "Low";
    }
    if (returnData(i,"Experience Yield","")[0] >= 0 && returnData(i,"Experience Yield","")[0] <= 49) {
        expyield.querySelector(':scope *[dataname="value"]').innerText = "Very Low";
    }

    expyield.querySelector(':scope *[dataname="value"]').setAttribute("value",returnData(i,"Experience Yield","")[0]);
    expyield.querySelector(':scope *[dataname="value"]').setAttribute("title","Experience gained approximated upon defeating "+getPokémonName(i)+" in battle.");


    if (getPokémonMediaPath(getPokémonName(i)) != undefined) {
        portrait.querySelector(":scope img").src = "./media/Images/Pokémon/Art/HOME/"+getPokémonMediaPath(getPokémonName(i))+".png";
    }

    if (returnData(i,"Catch Rate","") != undefined) {
        var catchRateFormula;
        if (Generation == 1) {
            catchRateFormula = Math.round(((Math.min(parseInt(returnData(i,"Catch Rate",""))+1,256))/256*(85+1/256)/256*100)*10)/10;
        }
        if (Generation == 2) {
            catchRateFormula = Math.round(((Math.max(parseInt(returnData(i,"Catch Rate",""))/3,1)+1)/256*100)*10)/10;
        }
        if (Generation == 3 || Generation == 4) {
            catchRateFormula = Math.round(((65535/Math.sqrt(Math.sqrt(255/(parseInt(returnData(i,"Catch Rate",""))/3)))/65536)**4*100)*10)/10;
        }
        if (Generation >= 5) {
            catchRateFormula = Math.round(((65536/Math.sqrt(Math.sqrt(255/(parseInt(returnData(i,"Catch Rate",""))/3)))/65536)**3*100)*10)/10;
        }
        catchrate.querySelector(':scope *[dataname="value"]').setAttribute("value",returnData(i,"Catch Rate",""));
        catchrate.querySelector(':scope *[dataname="value"]').setAttribute("title","When thrown at a full health "+getPokémonName(i)+" with an ordinary Poké Ball.");
        catchrate.querySelector(':scope *[dataname="value"]').innerText = catchRateFormula+"%";
    }
    


    for (var q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
        if (returnData(i,"Held Item","")[q] != undefined) {
            helditem.querySelector(':scope > div img[name="'+JSONPath_HeldItemPercentage[q]+'"]').setAttribute("src","./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+returnData(i,"Held Item","")[q]+".png");
            helditem.querySelector(':scope > div img[name="'+JSONPath_HeldItemPercentage[q]+'"]').setAttribute("title",returnData(i,"Held Item","")[q]);
            helditem.querySelector(':scope > div img[name="'+JSONPath_HeldItemPercentage[q]+'"]').style.display = "unset";
        }
        else {
            helditem.querySelector(':scope > div img[name="'+JSONPath_HeldItemPercentage[q]+'"]').style.display = "none";
        }
    }

    if (returnData(i,"Held Item","").length <= 0) {
        helditem.parentElement.style.display = "none";
    }
    else {
        helditem.parentElement.style.display = "flex";
    }




    if (returnData(i,"Type","")[0] != undefined) {
        type.querySelector(":scope > span:first-child h3").style.display = "none";
        type.querySelector(":scope > span:first-child").classList.add("active");
        type.querySelector(":scope > span:first-child img").style.display = "inline";
        type.querySelector(":scope > span:first-child h3").innerText = returnData(i,"Type","")[0];        
        type.querySelector(":scope > span:first-child img").setAttribute("src","./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnData(i,"Type","")[0]+".png");
        type.querySelector(":scope > span:first-child img").setAttribute("title",returnData(i,"Type","")[0]);
    }
    else {
        type.querySelector(":scope > span:first-child").classList.remove("active");
        type.querySelector(":scope > span:first-child img").style.display = "none";
    }
    if (returnData(i,"Type","")[1] != undefined) {
        type.querySelector(":scope > span:last-child h3").style.display = "none";
        type.querySelector(":scope > span:last-child").classList.add("active");
        type.querySelector(":scope > span:last-child img").style.display = "inline";
        type.querySelector(":scope > span:last-child h3").innerText = returnData(i,"Type","")[1];
        type.querySelector(":scope > span:last-child img").setAttribute("src","./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnData(i,"Type","")[1]+".png");
        type.querySelector(":scope > span:last-child img").setAttribute("title",returnData(i,"Type","")[1]);
    }
    else {
        type.querySelector(":scope > span:last-child").classList.remove("active");
        type.querySelector(":scope > span:last-child img").style.display = "none";
    }

}


function titleCase(str) {
    if (isNaN(str)) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        splitStr = splitStr.join(' ');

        return splitStr; 
    }
 }