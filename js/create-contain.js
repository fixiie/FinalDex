var createContain = function() {
    
document.getElementById("load-description").innerHTML = "Creating Pokémon list<span>.</span><span>.</span><span>.</span>";
    



var finaldataDefaultGame = [];

for (var i = 0; i < finaldataReferenceDefault.length; i++) {
    if (finaldataReferenceDefault[i].Game == "Black Version 2/White Version 2") {finaldataReferenceDefault[i].Game = "21,22";}
    if (finaldataReferenceDefault[i].Game == "Black/White") {finaldataReferenceDefault[i].Game = "19,20";}
    if (finaldataReferenceDefault[i].Game == "Black/White/Black Version 2/White Version 2") {finaldataReferenceDefault[i].Game = "19,20,21,22";}
    if (finaldataReferenceDefault[i].Game == "Crystal") {finaldataReferenceDefault[i].Game = "6";}
    if (finaldataReferenceDefault[i].Game == "Diamond/Pearl") {finaldataReferenceDefault[i].Game = "14,15";}
    if (finaldataReferenceDefault[i].Game == "Diamond/Pearl/Platinum") {finaldataReferenceDefault[i].Game = "14,15,16";}
    if (finaldataReferenceDefault[i].Game == "Emerald") {finaldataReferenceDefault[i].Game = "9";}
    if (finaldataReferenceDefault[i].Game == "FireRed") {finaldataReferenceDefault[i].Game = "10";}
    if (finaldataReferenceDefault[i].Game == "FireRed/LeafGreen") {finaldataReferenceDefault[i].Game = "10,11";}
    if (finaldataReferenceDefault[i].Game == "Gold/Silver") {finaldataReferenceDefault[i].Game = "4,5";}
    if (finaldataReferenceDefault[i].Game == "HeartGold/SoulSilver") {finaldataReferenceDefault[i].Game = "17,18";}
    if (finaldataReferenceDefault[i].Game == "LeafGreen") {finaldataReferenceDefault[i].Game = "11";}
    if (finaldataReferenceDefault[i].Game == "Let's Go Eevee") {finaldataReferenceDefault[i].Game = "31";}
    if (finaldataReferenceDefault[i].Game == "Let's Go Pikachu") {finaldataReferenceDefault[i].Game = "32";}
    if (finaldataReferenceDefault[i].Game == "Let's Go Pikachu/Let's Go Eevee") {finaldataReferenceDefault[i].Game = "31,32";}
    if (finaldataReferenceDefault[i].Game == "Moon") {finaldataReferenceDefault[i].Game = "28";}
    if (finaldataReferenceDefault[i].Game == "Omega Ruby/Alpha Sapphire") {finaldataReferenceDefault[i].Game = "25";}
    if (finaldataReferenceDefault[i].Game == "Platinum") {finaldataReferenceDefault[i].Game = "16";}
    if (finaldataReferenceDefault[i].Game == "Red/Blue") {finaldataReferenceDefault[i].Game = "1,2";}
    if (finaldataReferenceDefault[i].Game == "Red/Blue/Yellow") {finaldataReferenceDefault[i].Game = "1,2,3";}
    if (finaldataReferenceDefault[i].Game == "Ruby/Sapphire") {finaldataReferenceDefault[i].Game = "7,8";}
    if (finaldataReferenceDefault[i].Game == "Sun") {finaldataReferenceDefault[i].Game = "27";}
    if (finaldataReferenceDefault[i].Game == "Sun/Moon") {finaldataReferenceDefault[i].Game = "27,28";}
    if (finaldataReferenceDefault[i].Game == "Sun/Moon/Ultra Sun/Ultra Moon") {finaldataReferenceDefault[i].Game = "27,28,29,30";}
    if (finaldataReferenceDefault[i].Game == "Sword/Shield") {finaldataReferenceDefault[i].Game = "33,34";}
    if (finaldataReferenceDefault[i].Game == "The Crown Tundra") {finaldataReferenceDefault[i].Game = "36";}
    if (finaldataReferenceDefault[i].Game == "The Isle of Armor") {finaldataReferenceDefault[i].Game = "35";}
    if (finaldataReferenceDefault[i].Game == "Ultra Sun/Ultra Moon") {finaldataReferenceDefault[i].Game = "29,30";}
    if (finaldataReferenceDefault[i].Game == "X/Y") {finaldataReferenceDefault[i].Game = "23,24";}
    if (finaldataReferenceDefault[i].Game == "X/Y/Omega Ruby/Alpha Sapphire") {finaldataReferenceDefault[i].Game = "23,24,25,26";}
}
  
  for (var i = 0; i < finaldataReferenceDefault.length; i++) {
      for (var q = 0; q < finaldataReferenceDefault[i]["Game"].split(/[ ,]+/).length; q++) {
          if (finaldataReferenceDefault[i]["Game"].split(/[ ,]+/)[q] <= gameid) {
              finaldataDefaultGame.push("true" + q)
          }
          else {
              finaldataDefaultGame.push("false" + q)
          }
      }
  }

  finaldataDefaultGame = finaldataDefaultGame.join("")
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("4true0","4,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("3true0","3,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("2true0","2,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("1true0","1,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0true0","0,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0true0","0,true0");

  finaldataDefaultGame = finaldataDefaultGame.replaceAll("4false0","4,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("3false0","3,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("2false0","2,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("1false0","1,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0false0","0,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0false0","0,false0");

  var finaldataDefaultGame = finaldataDefaultGame.split(',');




for (var i = 0; i < finaldataDefaultGame.length; i++) {
    if (finaldataDefaultGame[i].includes("true")) {


    var x = i + 1;

    var defaultID = finaldataReferenceDefault[i]["ID"];
    var defaultName = finaldataReferenceDefault[i]["Pokémon"];


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
