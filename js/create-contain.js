var createContain = function() {


document.getElementById("load-description").innerHTML = "Creating Pokémon list<span>.</span><span>.</span><span>.</span>";
    

for (var i = 0; i < finaldataLengthAll.length; i++) {
    if (finaldataLengthAll[i] == true && finaldataReferenceAll[i].Variant.includes("Default") && finaldataAreaAll[i]["Filter_"+JSONPath_Area] != "Unobtainable") {
        

    var x = finaldataReferenceAll[i]["ID"];

    var defaultID = finaldataReferenceAll[i]["ID"];
    var defaultName = finaldataReferenceAll[i]["Pokémon"];


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

    contentDiv.setAttribute("data-national",defaultID);
    contentDiv.setAttribute("data-search-name",defaultName.toLowerCase());

   
    contentDiv.setAttribute("data-filter",finaldataAreaAll[i]["Filter_"+JSONPath_Area].replaceAll(" ",""));

    contentInput.setAttribute("type","checkbox");
    contentInput.classList.add("save-cb-state");
    contentInput.setAttribute("id","finaldex-" + GameID + "-" + x);
    contentInput.setAttribute("title","finaldex-" + GameID + "-" + x);

    contentLabel.setAttribute("for","finaldex-" + GameID + "-" + x);

    contentMain
    contentMainSpan

    contentMainButton.classList.add("pokdata-modal-open");
    contentMainButton.value = x;
    contentMainButtonImg.src = "./media/Images/Misc/FinalDex/Location.png";

    contentMainNationalID.classList.add("contain-nationalID");
    contentMainNationalID.innerText = "#" + defaultID;
    

    contentImg
    contentImg.classList.add("contain-img");
    contentImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    contentImg.setAttribute("id",x);

    contentName.classList.add("contain-name");
    contentName.innerText = defaultName;

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

        if (finaldataPokédexIDDefault[u][JSONPath_Pokédex[q]] == undefined) {
            contentDiv.setAttribute("data-regional-" + y,"");
            contentMainRegionalID.innerText = "#";
        }
        else {
            contentDiv.setAttribute("data-regional-" + y,finaldataPokédexIDDefault[u][JSONPath_Pokédex[q]]);
            contentMainRegionalID.innerText = "#" + finaldataPokédexIDDefault[u][JSONPath_Pokédex[q]];
        }

        contentMainRegionalID.classList.add("contain-regionalID-" + y);
        contentMain.appendChild(contentMainRegionalID);

       
    }
   
}

}

}

