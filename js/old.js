

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



/*
  if (Generation == 3) {
    var gamespecific = ["Deoxys"];

    for (q = 0; q < gamespecific.length; q++) {
      for (u = 0; u < finaldataPokémonReference.length; u++) {
          if (finaldataPokémon[u]["Pokémon"] == gamespecific[q] && !finaldataPokémon[u]["Game"].includes(GameName)) {
              finaldataPokémonReference[u] = false;
          }
      }
    }


    for (q = 0; q < gamespecific.length; q++) {
      for (u = 0; u < finaldataPokémonReference.length; u++) {
        if (finaldataPokémon[u]["Pokémon"] == gamespecific[q] && finaldataPokémonReference[u] == true && finaldataPokémon[u]["Variant"].includes("Form")) {
          finaldataPokémon[u]["Variant"] = "Default Form";
          break
        }
      }
    }
  }
*/

function getPokémonStatsEV(arr,name,games,game) {

    var arr;
    var name;
    var game;
    var result = [];

    if (name == "All") {
        for (var i = 0; i < game.length; i++) {
            for (var q = 0; q < arr.length; q++) {
                if (arr[q][game[i]] != undefined) {
                    if (finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[q]["Pokémon"];
                        if (finaldataPokémon[q]["Folder Name_" + JSONPath_Path] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_Path];
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
                    if (finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                        var obj = new Object();
                        obj["Pokémon"] = arr[q]["Pokémon"];
                        if (finaldataPokémon[q]["Folder Name_" + JSONPath_Path] == undefined) {
                            obj["Folder Name"] = "";
                        }
                        else {
                            obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_Path];
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
                if (finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                    var obj = new Object();
                    obj["Pokémon"] = arr[q]["Pokémon"];
                    if (finaldataPokémon[q]["Folder Name_" + JSONPath_Path] == undefined) {
                        obj["Folder Name"] = "";
                    }
                    else {
                        obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_Path];
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
            if (finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[finaldataPokémonArea.map(function(e) { return e.ID; }).indexOf(arr[q]["ID"])]["Filter_"+JSONPath_Area] != "Unobtainable") {
                var obj = new Object();
                obj["Pokémon"] = arr[q]["Pokémon"];
                if (finaldataPokémon[q]["Folder Name_" + JSONPath_Path] == undefined) {
                    obj["Folder Name"] = "";
                }
                else {
                    obj["Folder Name"] = finaldataPokémon[q]["Folder Name_" + JSONPath_Path];
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




function getEvolutionFamily(i) {

    var i;

    var PokémonStage;
    var FamilyStage;
    var FamilyPokémon;

    var PreviousPrevious;
    var Previous;
    var PreviousNext;
    var PreviousNextNext;
    var PreviousPreviousNext;
    var Name;
    var Next;
    var NextNext;


    
/*
    if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage] != "None" || finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Next_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Previous_"+JSONPath_EvolutionSpecie] == undefined && finaldataPokémonEvolutionStage[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Pokémon Stage_"+JSONPath_EvolutionStage] != "None") {
        Name = finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Pokémon"];
        Previous = finaldataPokémonEvolutionSpecie[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Previous_"+JSONPath_EvolutionSpecie];
        PokémonStage = finaldataPokémonEvolutionStage[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Pokémon Stage_"+JSONPath_EvolutionStage];
        FamilyStage = finaldataPokémonEvolutionStage[finaldataPokémonEvolutionSpecie.map(function(e) { return e.ID; }).indexOf(finaldataPokémonEvolutionSpecie[i]["ID"])]["Family Stage_"+JSONPath_EvolutionStage];

        if (Previous != undefined) {
            PreviousNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Previous))]["Next_"+JSONPath_EvolutionSpecie];
            PreviousPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(Previous))]["Previous_"+JSONPath_EvolutionSpecie];
            if (PreviousPrevious != undefined) {
                PreviousPreviousNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(PreviousPrevious))]["Next_"+JSONPath_EvolutionSpecie];
            }
            if (PreviousNext != undefined) {
                PreviousNextNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonInt(PreviousNext))]["Next_"+JSONPath_EvolutionSpecie];
            }
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
            FamilyPokémon = Previous+","+PreviousNext+","+PreviousNextNext;
        }
        else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
            FamilyPokémon = PreviousPrevious+","+PreviousPreviousNext+","+PreviousNext;
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
            FamilyPokémon = Previous+","+PreviousNext+","+PreviousNextNext;
        }
        else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
            FamilyPokémon = PreviousPrevious+","+PreviousPreviousNext+","+PreviousNext;
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
  
*/
    return [""];
}



function xaxa(i) {




    var i;
    var stage = [];
    var specie = [];
    var result = [];

    stage = finaldataPokémonEvolutionStage;
    specie = finaldataPokémonEvolutionSpecie;


    var obj1 = new Object();
    obj1["Pokémon"] = specie[i]["Pokémon"];
    obj1["Stage"] = stage[i]["Pokémon Stage_"+JSONPath_EvolutionStage];
    obj1["ID"] = specie[i]["ID"];
    result.push(obj1);

    for (var u = 0; u < result.length; u++) {
        if (specie[i]["Previous_"+JSONPath_EvolutionSpecie] != undefined) {
            var obj = new Object();
            obj["Pokémon"] = specie[i]["Previous_"+JSONPath_EvolutionSpecie];
            obj["Stage"] = stage[getPokémonInt(specie[i]["Previous_"+JSONPath_EvolutionSpecie])]["Pokémon Stage_"+JSONPath_EvolutionStage];
            obj["ID"] = stage[getPokémonInt(specie[i]["Previous_"+JSONPath_EvolutionSpecie])]["ID"];
            result.push(obj);

            i = getPokémonInt(specie[i]["Previous_"+JSONPath_EvolutionSpecie]);
        }

    }

    for (var u = 0; u < result.length; u++) {
        if (specie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
            if (specie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                for (var y = 0; y < specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
                    var obj = new Object();
                    obj["Pokémon"] = specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y];
                    obj["Stage"] = stage[getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y])]["Pokémon Stage_"+JSONPath_EvolutionStage].split(",")[y];
                    obj["ID"] = stage[getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y])]["ID"].split(",")[y];
                    result.push(obj);

                    i = getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y]);   
                }
               
            }
            else {
                var obj = new Object();
                obj["Pokémon"] = specie[i]["Next_"+JSONPath_EvolutionSpecie];
                obj["Stage"] = stage[getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie])]["Pokémon Stage_"+JSONPath_EvolutionStage];
                obj["ID"] = stage[getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie])]["ID"];
                result.push(obj);

                i = getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie]);    
            }
        }

    }

    result.sort(function (a, b) {
        return parseInt(a["ID"]) - parseInt(b["ID"]);
    });

    result.forEach(function(val, u) { if (val["Stage"] == "First-Stage") result[u]["Stage"] = "1"; if (val["Stage"] == "Second-Stage") result[u]["Stage"] = "2"; if (val["Stage"] == "Third-Stage") result[u]["Stage"] = "3"; });
    
    result.sort(function (a, b) {
        return parseInt(a["Stage"]) - parseInt(b["Stage"]);
    });
    
    return result;    
}



function ranfunc(i) {

    var i;
    var name;
    var stage = [];
    var specie = [];


    name = finaldataPokémon[i]["Pokémon"];



    stage = finaldataPokémonEvolutionStage;
    specie = finaldataPokémonEvolutionSpecie;

    var result = [name];


var o;

    for (var u = 0; u < 30; u++) {
        if (o != undefined) {
            if (specie[o]["Previous_"+JSONPath_EvolutionSpecie] != undefined) {
                //console.log(specie[o]["Previous_"+JSONPath_EvolutionSpecie]+"_Previous")
                result.push(specie[o]["Previous_"+JSONPath_EvolutionSpecie])
                o = getPokémonInt(specie[o]["Previous_"+JSONPath_EvolutionSpecie]);
            }
            else if (specie[o]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                //console.log(specie[o]["Next_"+JSONPath_EvolutionSpecie]+"_Next")
                if (specie[o]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                    for (var y = 0; y < specie[o]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
                        result.push(specie[o]["Next_"+JSONPath_EvolutionSpecie].split(",")[y])
                        o = getPokémonInt(specie[o]["Next_"+JSONPath_EvolutionSpecie].split(",")[y]);
                    }
                }
                else {
                    result.push(specie[o]["Next_"+JSONPath_EvolutionSpecie])
                    o = getPokémonInt(specie[o]["Next_"+JSONPath_EvolutionSpecie]);    
                }
            }
            else {
                break;
            }
        }
        else {
            if (specie[i]["Previous_"+JSONPath_EvolutionSpecie] != undefined) {
                //console.log(specie[i]["Previous_"+JSONPath_EvolutionSpecie]+"_Previous")
                result.push(specie[i]["Previous_"+JSONPath_EvolutionSpecie])
                o = getPokémonInt(specie[i]["Previous_"+JSONPath_EvolutionSpecie]);
            }
            else if (specie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                //console.log(specie[i]["Next_"+JSONPath_EvolutionSpecie]+"_Next")
                if (specie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                    for (var y = 0; y < specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
                        result.push(specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y])
                        o = getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y]);
                        console.log(specie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y])
                    }
                    console.log()
                }
                else {
                    result.push(specie[i]["Next_"+JSONPath_EvolutionSpecie])
                    o = getPokémonInt(specie[i]["Next_"+JSONPath_EvolutionSpecie]);    
                }
            }
            else {
                break;
            }
        }
            result = [...new Set(result)];
    }

    return result;
}



function ranfucxd(i) {


    var i;

    var stage = [];
    var specie = [];
    var Previous;
    var Next;

    stage = finaldataPokémonEvolutionStage;
    specie = finaldataPokémonEvolutionSpecie;

    var result = [];

    result.push(finaldataPokémon[i]["Pokémon"])

    for (var q = 0; q < 10; q++) {

        Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
        Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];

        if (Previous != undefined) {
            result.push(Previous);
            Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
        }


        if (Next != undefined) {
            if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                    for (var y = 0; y < finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
                        Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y];
                        result.push(Next);
                    }
                }
                else {
                    Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
                    result.push(Next);
                }
            }
        }


        result = [...new Set(result)];

        if (result[q] != undefined) {
            i = parseInt(getPokémonInt(result[q]));
        }
    }


    result = [...new Set(result)];
    for (var q = 0; q < result.length; q++) {
        var obj = new Object();
        obj["Pokémon"] = result[q];
        obj["ID"] = getPokémonID(result[q]);
        obj["Stage"] = getEvolutionStage(result[q]);
        result[q] = obj;
    }



    result.sort(function (a, b) {
        return parseInt(a["ID"]) - parseInt(b["ID"]);
    });

    result.forEach(function(val, u) { if (val["Stage"] == "First-Stage") result[u]["Stage"] = "1"; if (val["Stage"] == "Second-Stage") result[u]["Stage"] = "2"; if (val["Stage"] == "Third-Stage") result[u]["Stage"] = "3"; });
    
    result.sort(function (a, b) {
        return parseInt(a["Stage"]) - parseInt(b["Stage"]);
    });

    return result;
}
















function xzazsd(i) {

    console.log(finaldataPokémon[i]["Pokémon"])
    var i;

    var stage = [];
    var specie = [];
    var Previous;
    var Next;

    stage = finaldataPokémonEvolutionStage;
    specie = finaldataPokémonEvolutionSpecie;

    var result = [];

    result.push(finaldataPokémon[i]["Pokémon"])

    for (var q = 0; q < 10; q++) {

        Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
        Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];

        if (Previous != undefined) {
            result.push(Previous);
            Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
        }


        if (Next != undefined) {
            if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
                if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
                    for (var y = 0; y < finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
                        Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y];
                        result.push(Next);
                    }
                }
                else {
                    Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
                    result.push(Next);
                }
            }
        }


        result = [...new Set(result)];

        if (result[q] != undefined) {
            i = parseInt(getPokémonInt(result[q]));
        }
    }


    result = [...new Set(result)];

    return result;
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











function Continuation(arr,column,style) {

    var arr;
    var column;
    var style;
    var temparr1 = [];
    var result = [];
    var names = [];

    if (style == "Single") {
        for (i = 0; i < arr.length; i++) {
            if (arr[i].includes(",")) {
                for (q = 0; q < arr[i].split(",").length; q++) {
                    if (arr[i].split(",")[q] == GameName) {
                        result[i] = true;
                    }
                }
                if (result[i] == undefined) {
                    result[i] = false;
                }
            }
            else {
                if (arr[i] == GameName) {
                    result[i] = true;
                }
                else {
                    result[i] = false;
                }
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
