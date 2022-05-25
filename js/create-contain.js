var createContain = function(options) {

var options;

var div = document.querySelectorAll("#contain > div > div");

for (var q = 0; q < div.length; q++) {
    div[q].remove();
}


document.getElementById("load-description").innerHTML = "Creating Pokémon list<span>.</span><span>.</span><span>.</span>";




for (var i = 0; i < finaldataPokémon.length; i++) {

var conditions = [];





if (options != undefined) {
    if (options.includes("Default")) {
        conditions.push(finaldataPokémon[i]["Variant"].includes("Default"));
    }
    if (options.includes("Regional Form")) {
        conditions.push(finaldataPokémon[i]["Variant"].includes("Alolan") || finaldataPokémon[i]["Variant"].includes("Galarian"));
    }
    if (options.includes("Other Form")) {
        conditions.push(finaldataPokémon[i]["Variant"] == "Form");
    }
    if (options.includes("Mega Evolution")) {
        conditions.push(finaldataPokémon[i]["Variant"].includes("Mega"));
    }
    if (options.includes("Gigantamax")) {
        conditions.push(finaldataPokémon[i]["Variant"].includes("Gigantamax"));
    }
    /*
    if (options.includes("Shiny")) {
        var obj = new Object();
        for (var q = 0; q < options.length - 1; q++) {
            obj[options[q]] = conditions[q];
        }
        conditions.push(obj)
    }
    */
    
}


if (finaldataPokémon[i][JSONPath_Reference] == "true" && finaldataPokémonArea[i]["Filter_"+JSONPath_Area] != "Unobtainable") {
    for (var q = 0; q < conditions.length; q++) {
/*
        //console.log(Object.keys(conditions[q]))
        if (Object.keys(conditions[q]).length >= 1) {
            for (var u = 0; u < Object.keys(conditions[q]).length.length; u++) {

            }
        }
*/
        if (conditions[q] == true) {

        var x = finaldataPokémon[i]["ID"];

        var ID = finaldataPokémon[i]["ID"];
        var Name = finaldataPokémonForm[i]["Pokémon"];
        var formName = finaldataPokémonForm[i]["Form_"+JSONPath_Form];
        var variant = finaldataPokémon[i]["Variant"];




        var testarr = [];
        var teststr;

        var testnum =  Math.floor(Math.random() * 100) + 1;

        if (testnum >= 1 && testnum <= 25) {
            testarr = ["gastly","haunter","gengar"];
            teststr = "str1";
        }
        else if (testnum >= 26 && testnum <= 50) {
            testarr = ["machop","machoke","machamp"];
            teststr = "str2";
        }
        else if (testnum >= 51 && testnum <= 75) {
            testarr = ["zubat","golbat","crobat"];
            teststr = "str3";
        }
        else if (testnum >= 76 && testnum <= 99) {
            testarr = ["pichu","pikachu","raichu"];
            teststr = "str4";
        }
        else if (testnum == 100) {
            testarr = [];
            teststr = "";
        }



        var contentDiv = document.createElement("div");
        var contentInput = document.createElement("input");
        var contentLabel = document.createElement("label");
        var contentMain = document.createElement("main");
        var contentMainSpan = document.createElement("span");
        var contentMainButton = document.createElement("button");
        var contentMainButtonImg = document.createElement("img");
        var contentMainNationalID = document.createElement("p");
        var contentImg = document.createElement("img");
        var contentName = document.createElement("p");

        contentDiv.setAttribute("data-national",ID);

        if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] != undefined) {
            contentDiv.setAttribute("data-filter",finaldataPokémonArea[i]["Filter_"+JSONPath_Area].replaceAll(" ",""));
        }

        contentDiv.setAttribute("data-search-evolution",getEvolutionFamily(i).map(function(v){return v["Pokémon"]}).join(",").toLowerCase());
        contentDiv.setAttribute("data-search-type",returnData(i,"Type","lower,undefined"));
        contentDiv.setAttribute("data-search-ability",returnData(i,"Ability","lower,undefined"));
        contentDiv.setAttribute("data-search-catchrate",returnData(i,"Catch Rate","lower,undefined"));
        contentDiv.setAttribute("data-search-eggcycle",returnData(i,"Hatch Rate","lower,undefined")[0]);
        contentDiv.setAttribute("data-search-genderratio",returnData(i,"Gender Ratio","lower,undefined").join(":"));
        contentDiv.setAttribute("data-search-egggroup",returnData(i,"Egg Group","lower,undefined"));
        contentDiv.setAttribute("data-search-expyield",returnData(i,"Experience Yield","lower,undefined"));
        contentDiv.setAttribute("data-search-helditem",returnData(i,"Held Item","lower,undefined"));

        if (parseInt(returnData(i,"Experience Yield","lower,undefined")) >= 300) {
            contentDiv.setAttribute("data-search-expyieldcategory","Very High".toLowerCase());
        }
        else if (parseInt(returnData(i,"Experience Yield","lower,undefined")) >= 200 && parseInt(returnData(i,"Experience Yield","lower,undefined")) <= 299) {
            contentDiv.setAttribute("data-search-expyieldcategory","High".toLowerCase());
        }
        else if (parseInt(returnData(i,"Experience Yield","lower,undefined")) >= 100 && parseInt(returnData(i,"Experience Yield","lower,undefined")) <= 199) {
            contentDiv.setAttribute("data-search-expyieldcategory","Medium".toLowerCase());
        }
        else if (parseInt(returnData(i,"Experience Yield","lower,undefined")) >= 50 && parseInt(returnData(i,"Experience Yield","lower,undefined")) <= 99) {
            contentDiv.setAttribute("data-search-expyieldcategory","Low".toLowerCase());
        }
        else if (parseInt(returnData(i,"Experience Yield","lower,undefined")) >= 0 && parseInt(returnData(i,"Experience Yield","lower,undefined")) <= 49) {
            contentDiv.setAttribute("data-search-expyieldcategory","Very Low".toLowerCase());
        }

        contentDiv.setAttribute("data-search-levelrate",returnData(i,"Leveling Rate","lower,undefined"));
        contentDiv.setAttribute("data-search-statshp",returnData(i,"Base Stats HP","lower,undefined"));
        contentDiv.setAttribute("data-search-statsatk",returnData(i,"Base Stats Attack","lower,undefined"));
        contentDiv.setAttribute("data-search-statsdef",returnData(i,"Base Stats Defense","lower,undefined"));
        contentDiv.setAttribute("data-search-statsspatk",returnData(i,"Base Stats Sp. Atk","lower,undefined"));
        contentDiv.setAttribute("data-search-statsspdef",returnData(i,"Base Stats Sp. Def","lower,undefined"));
        contentDiv.setAttribute("data-search-statsspeed",returnData(i,"Base Stats Speed","lower,undefined"));
        contentDiv.setAttribute("data-search-statstotal",returnData(i,"Base Stats Total","lower,undefined"));
        contentDiv.setAttribute("data-search-evyieldhp",returnData(i,"EV Yield HP","lower,undefined"));
        contentDiv.setAttribute("data-search-evyieldatk",returnData(i,"EV Yield Attack","lower,undefined"));
        contentDiv.setAttribute("data-search-evyielddef",returnData(i,"EV Yield Defense","lower,undefined"));
        contentDiv.setAttribute("data-search-evyieldspatk",returnData(i,"EV Yield Sp. Atk","lower,undefined"));
        contentDiv.setAttribute("data-search-evyieldspdef",returnData(i,"EV Yield Sp. Def","lower,undefined"));
        contentDiv.setAttribute("data-search-evyieldspeed",returnData(i,"EV Yield Speed","lower,undefined"));
        contentDiv.setAttribute("data-search-evyieldtotal",returnData(i,"EV Yield Total","lower,undefined"));
        contentDiv.setAttribute("data-search-variant",variant.toLowerCase());

        
        contentInput.setAttribute("type","checkbox");
        contentInput.classList.add("save-cb-state");
        contentInput.setAttribute("id","finaldex-" + GameID + "-" + i);
        contentInput.setAttribute("name","finaldex-" + GameID + "-" + i);

        contentLabel.setAttribute("for","finaldex-" + GameID + "-" + i);
        contentLabel.addEventListener("click", function(){count()});

        contentMainButton.value = i;
        contentMainButton.addEventListener("click", modalPokdata);
        contentMainButtonImg.src = "./media/Images/Misc/FinalDex/Location.png";

        contentMainNationalID.classList.add("contain-nationalID");
        contentMainNationalID.innerText = "#" + ID;
        

        contentImg.classList.add("contain-img");
        contentImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        

        contentName.classList.add("contain-name");
        if (q == conditions.length + 1) {
            if (finaldataPokémon[i]["Variant"].includes("Default")) {
                contentName.innerText = "Shiny "+Name;
                contentImg.setAttribute("id","Shiny "+Name);
                contentDiv.setAttribute("data-search-name","Shiny "+Name.toLowerCase());
            }
            else if (formName != undefined) {
                contentName.innerText = "Shiny "+formName;
                contentImg.setAttribute("id","Shiny "+formName);
                contentDiv.setAttribute("data-search-name","Shiny "+formName.toLowerCase());
            }
        }
        else {
            if (formName != undefined) {
                contentName.innerText = formName;
                contentImg.setAttribute("id",formName);
                contentDiv.setAttribute("data-search-name",formName.toLowerCase());
            }
            else {
                contentName.innerText = Name;
                contentImg.setAttribute("id",Name);
                contentDiv.setAttribute("data-search-name",Name.toLowerCase());
            }
        }
       


        document.getElementById("contain-inner").appendChild(contentDiv);
        contentDiv.appendChild(contentInput);
        contentDiv.appendChild(contentLabel);
        contentLabel.appendChild(contentMain);
        contentMain.appendChild(contentMainSpan);
        contentMain.appendChild(contentMainButton);
        contentMainButton.appendChild(contentMainButtonImg);
        contentMain.appendChild(contentMainNationalID);
        contentLabel.appendChild(contentImg);
        contentLabel.appendChild(contentName);
        
    
        for (q = 0; q < JSONPath_Pokédex.length; q++) {
            var u = x - 1;
            let y = q + 1;
        


            var contentMainRegionalID = document.createElement("p");
/*
            if (finaldataPokédexIDDefault[u][JSONPath_Pokédex[q]] == undefined) {
                contentDiv.setAttribute("data-regional-" + y,"");
                contentMainRegionalID.innerText = "#";
            }
            else {
                contentDiv.setAttribute("data-regional-" + y,finaldataPokédexIDDefault[u][JSONPath_Pokédex[q]]);
                contentMainRegionalID.innerText = "#" + finaldataPokédexIDDefault[u][JSONPath_Pokédex[q]];
            }
*/
            contentMainRegionalID.classList.add("contain-regionalID-" + y);
            contentMain.appendChild(contentMainRegionalID);

        
        }
        }
    }
}

}


}

