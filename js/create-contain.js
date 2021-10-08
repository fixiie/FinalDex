var createContain = function(finaldataDefaultGame,finaldataFormDefault,finaldataPokédexIDDefault) {
    
document.getElementById("load-description").innerHTML = "Creating Pokémon list<span>.</span><span>.</span><span>.</span>";
    
for (var i = 0; i < finaldataDefaultGame.length; i++) {
    if (finaldataDefaultGame[i].includes("true")) {


    var x = i + 1;



    //alert(finaldataPokédexEntryDefault[i]["Red"])
    //alert(finaldataFormDefault[i]["Pokémon"])

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

    contentDiv.setAttribute("data-national",finaldataPokédexIDDefault[i][Pokédex]);
    contentDiv.setAttribute("data-search-name",finaldataFormDefault[i]["Pokémon"].toLowerCase());
    contentDiv.setAttribute("data-filter",fdataAreaFilter[i]);

    contentInput.setAttribute("type","checkbox");
    contentInput.classList.add("save-cb-state");
    contentInput.setAttribute("id","finaldex-" + gameid + "-" + x);
    contentInput.setAttribute("title","finaldex-" + gameid + "-" + x);

    contentLabel.setAttribute("for","finaldex-" + gameid + "-" + x);

    contentMain
    contentMainSpan

    contentMainButton.classList.add("pokdata-modal-open");
    contentMainButton.value = x;
    contentMainButtonImg.src = "./media/Images/Misc/FinalDex/Location.png";

    contentMainNationalID.classList.add("contain-nationalID");
    contentMainNationalID.innerText = "#" + finaldataPokédexIDDefault[i][Pokédex];


    contentImg
    contentImg.classList.add("contain-img");
    contentImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    contentImg.setAttribute("id",x);

    contentName.classList.add("contain-name");
    contentName.innerText = finaldataFormDefault[i]["Pokémon"];

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

    
    for (q = 0; q < RegionalPokédex.length; q++) {
        
        let x = q + 1;

        contentDiv.setAttribute("data-regional-" + x,finaldataPokédexIDDefault[i][RegionalPokédex[q]]);

        var contentMainRegionalID = document.createElement("p");
        contentMainRegionalID.classList.add("contain-regionalID-" + x);
        contentMainRegionalID.innerText = "#" + finaldataPokédexIDDefault[i][RegionalPokédex[q]];
        contentMain.appendChild(contentMainRegionalID);
    }
}
}

}
