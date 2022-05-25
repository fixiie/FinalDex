var createNav = function() {

var AreaFilterTemp1 = [];
for (var q = 0; q < finaldataPokémonArea.length; q++) {
    if (finaldataPokémonArea[q]["Filter_"+JSONPath_Area] != undefined) {
        AreaFilterTemp1.push(finaldataPokémonArea[q]["Filter_"+JSONPath_Area]);
    }
}
let AreaFilterTemp2 = [...AreaFilterTemp1];
AreaFilterTemp2.splice(AreaFilterTemp2.indexOf(""), 1);
AreaFilterTemp2.splice(AreaFilterTemp2.indexOf("Unobtainable"), 1);
let AreaFilterNumberTemp1 = new Set(AreaFilterTemp2);
let AreaFilterNumberTemp2 = [...AreaFilterNumberTemp1];
AreaFilterNumberTemp2.forEach(function(val, u) { if (val == "Catchable") AreaFilterNumberTemp2[u] = "1.1"; if (val == "Snaggable") AreaFilterNumberTemp2[u] = "1.2"; if (val == "Evolve") AreaFilterNumberTemp2[u] = "2.1"; if (val == "Trade Evolution") AreaFilterNumberTemp2[u] = "2.2"; if (val == "Breed") AreaFilterNumberTemp2[u] = "2.3"; if (val == "Gift") AreaFilterNumberTemp2[u] = "3.1"; if (val == "Choice") AreaFilterNumberTemp2[u] = "3.2"; if (val == "Swarm") AreaFilterNumberTemp2[u] = "4.1"; if (val == "Max Raid Battle") AreaFilterNumberTemp2[u] = "4.2"; if (val == "Poké Radar") AreaFilterNumberTemp2[u] = "4.3"; if (val == "The Underground") AreaFilterNumberTemp2[u] = "4.4"; if (val == "White Forest") AreaFilterNumberTemp2[u] = "4.5"; if (val == "Unique") AreaFilterNumberTemp2[u] = "5.1"; if (val == "Event") AreaFilterNumberTemp2[u] = "5.2"; if (val == "Unavailable") AreaFilterNumberTemp2[u] = "6.1"; if (val == "Unobtainable") AreaFilterNumberTemp2[u] = "6.2";});
AreaFilterNumberTemp2.sort()
AreaFilterNumberTemp2.forEach(function(val, u) { if (val == "1.1") AreaFilterNumberTemp2[u] = "Catchable"; if (val == "1.2") AreaFilterNumberTemp2[u] = "Snaggable"; if (val == "2.1") AreaFilterNumberTemp2[u] = "Evolve"; if (val == "2.2") AreaFilterNumberTemp2[u] = "Trade Evolution"; if (val == "2.3") AreaFilterNumberTemp2[u] = "Breed"; if (val == "3.1") AreaFilterNumberTemp2[u] = "Gift"; if (val == "3.2") AreaFilterNumberTemp2[u] = "Choice"; if (val == "4.1") AreaFilterNumberTemp2[u] = "Swarm"; if (val == "4.2") AreaFilterNumberTemp2[u] = "Max Raid Battle"; if (val == "4.3") AreaFilterNumberTemp2[u] = "Poké Radar"; if (val == "4.4") AreaFilterNumberTemp2[u] = "The Underground"; if (val == "4.5") AreaFilterNumberTemp2[u] = "White Forest"; if (val == "5.1") AreaFilterNumberTemp2[u] = "Unique"; if (val == "5.2") AreaFilterNumberTemp2[u] = "Event"; if (val == "6.1") AreaFilterNumberTemp2[u] = "Unavailable"; if (val == "6.2") AreaFilterNumberTemp2[u] = "Unobtainable";});
let AreaFilter = new Set(AreaFilterNumberTemp2);
let AreaFilters = [...AreaFilter];


var navigation = document.createElement("nav");
var navigationContent = document.createElement("ul");
var navigationFilter = document.createElement("li");
var navigationFilterContent = document.createElement("a");
var navigationFilterContentSpan = document.createElement("span");
var navigationFilterDrop = document.createElement("ul");

var navigationShowAll = document.createElement("li");
var navigationShowAllContent = document.createElement("a");
var navigationDex = document.createElement("li");
var navigationDexContent = document.createElement("a");
var navigationSearch = document.createElement("li");
var navigationSearchContent = document.createElement("a");
var navigationSearchInput = document.createElement("input");
var navigationSearchExit = document.createElement("span");
var navigationCount = document.createElement("li");
var navigationCountContent = document.createElement("a");
var navigationCountSpan1 = document.createElement("span");
var navigationCountSpan2 = document.createElement("span");
var navigationCountSpan3 = document.createElement("span");
var navigationGame = document.createElement("li");
var navigationGameContent = document.createElement("a");
var navigationGameImg = document.createElement("img");
var navigationSettings = document.createElement("li");
var navigationSettingsContent = document.createElement("a");
var navigationSettingsImg = document.createElement("img");
var navigationSettingsDrop = document.createElement("ul");
var navigationSettingsDropImgtype = document.createElement("li");
var navigationSettingsDropImgtypeDiv = document.createElement("div");
var navigationSettingsDropImgtypeDrop = document.createElement("button");
var navigationSettingsDropImgtypeDropText = document.createElement("p");
var navigationSettingsDropImgtypeDropSpan = document.createElement("span");
var navigationSettingsDropImgtypeDropImgOuter = document.createElement("div");
var navigationSettingsDropImgtypeDropImg = document.createElement("img");
var navigationSettingsDropImgtypeContent = document.createElement("div");
var navigationSettingsDropResize = document.createElement("li");
var navigationSettingsDropResizeDiv = document.createElement("div");
var navigationSettingsDropResizeValue = document.createElement("p");
var navigationSettingsDropResizeInput = document.createElement("input");
var navigationSettingsDropTheme = document.createElement("li");
var navigationSettingsDropThemeDiv = document.createElement("div");
var navigationSettingsDropThemeInput = document.createElement("input");
var navigationSettingsDropThemeSpan = document.createElement("span");


navigation
navigationContent
navigationFilter.setAttribute("id","filter-outer");
navigationFilter.classList.add("button-dropdown");
navigationFilterContent.setAttribute("id","filter");
navigationFilterContent.classList.add("dropdown-toggle");
navigationFilterContent.innerText = "Filter By";
navigationFilterContentSpan.innerText = "▾";
navigationFilterDrop.classList.add("dropdown-menu");

for (var i = 0; i < AreaFilters.length; i++) {
    var navigationFilterBy = document.createElement("li");
    var navigationFilterByInput = document.createElement("input");
    var navigationFilterByLabel = document.createElement("label");
    var navigationFilterByAbbr = document.createElement("abbr");
    navigationFilterBy.classList.add("filterby");
    navigationFilterByInput.setAttribute("type","checkbox");
    navigationFilterByInput.setAttribute("id","filterby-" + AreaFilters[i]);
    navigationFilterByInput.setAttribute("value",AreaFilters[i].replaceAll(" ",""));
    navigationFilterByLabel.setAttribute("for","filterby-" + AreaFilters[i]);
    navigationFilterByLabel.innerText = AreaFilters[i];
    if (AreaFilters[i] == "Catchable") {
        navigationFilterByAbbr.title = "Pokémon caught in the Wild";
    }
    if (AreaFilters[i] == "Snaggable") {
        navigationFilterByAbbr.title = "Shadow Pokémon caught from Trainers";
    }
    if (AreaFilters[i] == "Evolve") {
        navigationFilterByAbbr.title = "Pokémon obtained via Evolution";
    }
    if (AreaFilters[i] == "Trade Evolution") {
        navigationFilterByAbbr.title = "Pokémon obtained via Evolution by Trade";
    }
    if (AreaFilters[i] == "Breed") {
        navigationFilterByAbbr.title = "Pokémon obtained through Breeding";
    }
    if (AreaFilters[i] == "Gift") {
        navigationFilterByAbbr.title = "Pokémon exclusivly obtained by Receival";
    }
    if (AreaFilters[i] == "Choice") {
        navigationFilterByAbbr.title = "Pokémon exclusivly obtained by choosing between it or another";
    }
    if (AreaFilters[i] == "Swarm") {
        navigationFilterByAbbr.title = "Pokémon exclusivly caught during a Swarm";
    }
    if (AreaFilters[i] == "Max Raid Battle") {
        navigationFilterByAbbr.title = "Pokémon exclusivly caught during a Max Raid Battle";
    }
    if (AreaFilters[i] == "Poké Radar") {
        navigationFilterByAbbr.title = "Pokémon exclusivly caught with the Poké Radar";
    }
    if (AreaFilters[i] == "The Underground") {
        navigationFilterByAbbr.title = "Pokémon exclusivly caught with association to The Underground";
    }
    if (AreaFilters[i] == "White Forest") {
        navigationFilterByAbbr.title = "Pokémon exclusivly caught in the White Forest";
    }
    if (AreaFilters[i] == "Unique") {
        navigationFilterByAbbr.title = "Pokémon exclusivly with a limited amount of encounters";
    }
    if (AreaFilters[i] == "Event") {
        navigationFilterByAbbr.title = "Pokémon exclusivly encountered during an In-Game Event";
    }
    if (AreaFilters[i] == "Unavailable") {
        navigationFilterByAbbr.title = "Pokémon not available";
    }
    if (AreaFilters[i] == "Unobtainable") {
        navigationFilterByAbbr.title = "Pokémon unobtainable";
    }
    navigationFilterByAbbr.innerText = "ℹ";
    navigationFilterDrop.appendChild(navigationFilterBy)
    navigationFilterBy.appendChild(navigationFilterByInput)
    navigationFilterBy.appendChild(navigationFilterByLabel)
    navigationFilterByLabel.appendChild(navigationFilterByAbbr)

}





navigationShowAll.setAttribute("id","showall-outer");
navigationShowAllContent.setAttribute("id","showall");
navigationShowAllContent.setAttribute("onclick","showAll()");
navigationShowAllContent.innerText = "All";
navigationDex.setAttribute("id","dexswitch-outer");
navigationDexContent.setAttribute("id","dexswitch");

navigationSearch.setAttribute("id","search-outer");
navigationSearchContent.setAttribute("id","search");
navigationSearchInput.setAttribute("id","searchbar");
navigationSearchInput.setAttribute("type","text");
navigationSearchInput.setAttribute("placeholder","Search...");
navigationSearchInput.setAttribute("onfocus","this.placeholder = ''");
navigationSearchInput.setAttribute("onblur","this.placeholder = 'Search...'");
navigationSearchInput.setAttribute("autocomplete","off");
navigationSearchInput.setAttribute("tabindex","0");







var searchoptions = ["evolution:: [charizard/slowbro/...]","type:: [normal/fighting/...]","ability:: [static/shadow tag/...]","catchrate:: [value]","eggcycle:: [value]","genderratio:: [7:0/3:1/...]","egggroup:: [field/human-like/...]","expyield:: [value]","expyieldcategory:: [very high/medium/...]","levelrate:: [value]","helditem:: [silver powder/sitrus berry/...]","variant:: [default/form/...]","statshp:: [value]","statshp:> [value]","statshp:< [value]","...","evyieldhp:: [value]","evyieldhp:> [value]","evyieldhp:< [value]","...","equal::","doesnotequal:!","greaterthan:>","lessthan:<"];
if (Ability.length <= 0) {
    for (var q = 0; q < searchoptions.length; q++) {
        if (searchoptions[q].includes("ability")) {
            searchoptions.splice(q,1);
        }
    }
}
if (Egg != true) {
    for (var q = 0; q < searchoptions.length; q++) {
        if (searchoptions[q].includes("egg")) {
            searchoptions.splice(q,1);
        }
    }
}
if (Gender != true) {
    for (var q = 0; q < searchoptions.length; q++) {
        if (searchoptions[q].includes("gender")) {
            searchoptions.splice(q,1);
        }
    }
}
if (HeldItem != true) {
    for (var q = 0; q < searchoptions.length; q++) {
        if (searchoptions[q].includes("item")) {
            searchoptions.splice(q,1);
        }
    }
}




navigationSearchInput.setAttribute("title"," Search Examples:"+"\n"+searchoptions.join("\n"));

navigationSearchExit.setAttribute("id","search-exit");
navigationCount.setAttribute("id","count-outer");
navigationCountContent.setAttribute("id","count");
navigationCountContent.classList.add("reset-modal-open");
navigationCountSpan1.setAttribute("id","count-current");
navigationCountSpan2.setAttribute("id","count-slash");
navigationCountSpan2.innerText = "/"
navigationCountSpan3.setAttribute("id","count-total");
navigationGame.setAttribute("id","gametitle-outer");
navigationGameContent.setAttribute("id","gametitle");
navigationGameContent.classList.add("gamedata-modal-open");
navigationGameImg.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","") + ".png";
navigationSettings.setAttribute("id","settings-outer");
navigationSettings.classList.add("button-dropdown");
navigationSettingsContent.setAttribute("id","settings");
navigationSettingsImg.src = "./media/Images/Misc/FinalDex/Cog.png";
navigationSettingsImg.setAttribute("id","settings-img");
navigationSettingsImg.classList.add("dropdown-toggle");
navigationSettingsDrop.classList.add("dropdown-menu");
navigationSettingsDropImgtype

navigationSettingsDropImgtypeDiv.setAttribute("id","imgtype-outer");
navigationSettingsDropImgtypeDrop.setAttribute("id","imgtype-toggle");
navigationSettingsDropImgtypeDrop.setAttribute("onclick","imgTypeDrop()");
navigationSettingsDropImgtypeDropSpan.classList.add("imgtype-arrow");
navigationSettingsDropImgtypeDropSpan.innerText = "▾";
navigationSettingsDropImgtypeContent.setAttribute("id","imgtype");
navigationSettingsDropImgtypeContent.classList.add("imgtype");


for (var i = 0; i < ImageType_Name.length; i++) { 
    

    var x = i + 1;
    var navigationSettingsDropImgtypeLabel = document.createElement("label");
    var navigationSettingsDropImgtypeInput = document.createElement("input");
    var navigationSettingsDropImgtypeImg = document.createElement("img");
    var navigationSettingsDropImgtypeSpan = document.createElement("span");

    if (ImageType_Path[i].includes("Battle")) {
        navigationSettingsDropImgtypeLabel.innerText = "Battle";
    }
    if (ImageType_Path[i].includes("Battle") && Generation <= 5) {
        navigationSettingsDropImgtypeLabel.innerText = "Battle Sprites";
    }
    if (ImageType_Path[i].includes("Battle") && Generation >= 6 || ImageType_Path[i].includes("Battle") && GameID == 12 || ImageType_Path[i].includes("Battle") && GameID == 13) {
        navigationSettingsDropImgtypeLabel.innerText = "Battle Models";
    }
    if (ImageType_Path[i].includes("Art")) {
        navigationSettingsDropImgtypeLabel.innerText = ImageType_Name[i] + " " + ImageType_Path[i];
    }
    if (ImageType_Name[i].includes("Recolor")) {
        navigationSettingsDropImgtypeLabel.innerText = "Recolor Battle Sprites";
    }
    navigationSettingsDropImgtypeInput.setAttribute("type","radio");
    navigationSettingsDropImgtypeInput.setAttribute("value",x);
    navigationSettingsDropImgtypeInput.setAttribute("data-type",ImageType_Path[i]);
    navigationSettingsDropImgtypeInput.setAttribute("data-path",ImageType_Name[i]);
    navigationSettingsDropImgtypeInput.setAttribute("name","finaldex-imgtype" + GameID);
    navigationSettingsDropImgtypeInput.setAttribute("autocomplete","off");
    navigationSettingsDropImgtypeInput.setAttribute("onclick","imgType()");
    navigationSettingsDropImgtypeImg.src = "";
    navigationSettingsDropImgtypeImg.setAttribute("name","");
    navigationSettingsDropImgtypeSpan.classList.add("imgtype-check");

    if(ImageType_Extension[i].toLowerCase() == "png") {
        navigationSettingsDropImgtypeLabel.setAttribute("for","imgtype-" + ImageType_Name[i] + "-png");
        navigationSettingsDropImgtypeImg.src = "./media/Images/Misc/FinalDex/PNG.png";
        navigationSettingsDropImgtypeImg.setAttribute("name","png");
        navigationSettingsDropImgtypeInput.setAttribute("data-extension","png");
        navigationSettingsDropImgtypeInput.setAttribute("id","imgtype-" + ImageType_Name[i] + "-png");
    }
    if(ImageType_Extension[i].toLowerCase() == "gif") {
        navigationSettingsDropImgtypeLabel.setAttribute("for","imgtype-" + ImageType_Name[i] + "-gif");
        navigationSettingsDropImgtypeImg.src = "./media/Images/Misc/FinalDex/GIF.png";
        navigationSettingsDropImgtypeImg.setAttribute("name","gif");
        navigationSettingsDropImgtypeInput.setAttribute("data-extension","gif");
        navigationSettingsDropImgtypeInput.setAttribute("id","imgtype-" + ImageType_Name[i] + "-gif");
    }

    navigationSettingsDropImgtypeContent.appendChild(navigationSettingsDropImgtypeLabel);
    navigationSettingsDropImgtypeLabel.appendChild(navigationSettingsDropImgtypeInput);
    navigationSettingsDropImgtypeLabel.appendChild(navigationSettingsDropImgtypeImg);
    navigationSettingsDropImgtypeLabel.appendChild(navigationSettingsDropImgtypeSpan);
}

navigationSettingsDropImgtypeContent.firstChild.firstChild.nextElementSibling.setAttribute("checked","")
navigationSettingsDropImgtypeDropText.innerHTML = navigationSettingsDropImgtypeContent.firstChild.innerText;
navigationSettingsDropImgtypeDropImg.src = "./media/Images/Misc/FinalDex/" + navigationSettingsDropImgtypeContent.firstChild.firstChild.nextElementSibling.getAttribute("data-extension") + ".png";
navigationSettingsDropImgtypeDropImg.setAttribute("name",navigationSettingsDropImgtypeContent.firstChild.firstChild.nextElementSibling.getAttribute("data-extension"));
navigationSettingsDropImgtypeDropImg.classList.add("imgtype-extension");

navigationSettingsDropResize
navigationSettingsDropResizeDiv.setAttribute("id","resize-outer");
navigationSettingsDropResizeValue.setAttribute("id","resize-value");
navigationSettingsDropResizeInput.setAttribute("type","range");
navigationSettingsDropResizeInput.setAttribute("id","resize");
navigationSettingsDropResizeInput.setAttribute("min","60");
navigationSettingsDropResizeInput.setAttribute("max","540");
navigationSettingsDropResizeInput.setAttribute("value","300");
navigationSettingsDropResizeInput.setAttribute("step","60");
navigationSettingsDropResizeInput.setAttribute("autocomplete","off");
navigationSettingsDropResizeInput.setAttribute("onclick","resizeDiv()");
navigationSettingsDropResizeInput.classList.add("save-ra-state");
navigationSettingsDropTheme
navigationSettingsDropThemeDiv.setAttribute("id","theme");
navigationSettingsDropThemeInput.setAttribute("type","checkbox");
navigationSettingsDropThemeSpan

var navigationDexInput = document.createElement("input");
var navigationDexLabel = document.createElement("label");
navigationDexInput.setAttribute("type","radio");
navigationDexInput.setAttribute("value","1");
navigationDexInput.setAttribute("name","finaldex-dexswitch" + GameID)
navigationDexInput.setAttribute("id","dexswitch1");
navigationDexInput.setAttribute("autocomplete","off");
navigationDexLabel.setAttribute("for","dexswitch1");
navigationDexLabel.setAttribute("name","National Pokédex");
navigationDexLabel.innerText = "National Pokédex";
navigationDexContent.appendChild(navigationDexInput);
navigationDexContent.appendChild(navigationDexLabel);
for (var i = 0; i < JSONPath_Pokédex.length; i++) {
    let x = i + 1;
    var navigationDexInput = document.createElement("input");
    var navigationDexLabel = document.createElement("label");
    navigationDexInput.setAttribute("type","radio");
    navigationDexInput.setAttribute("value",[x + 1]);
    navigationDexInput.setAttribute("name","finaldex-dexswitch" + GameID)
    navigationDexInput.setAttribute("id","dexswitch" + [x + 1]);
    navigationDexInput.setAttribute("autocomplete","off");
    navigationDexLabel.setAttribute("for","dexswitch" + [x + 1]);
    navigationDexLabel.setAttribute("name",JSONPath_Pokédex[i].split("_")[0]);
    navigationDexLabel.innerText = JSONPath_Pokédex[i].split("_")[0];
    navigationDexContent.appendChild(navigationDexInput);
    navigationDexContent.appendChild(navigationDexLabel);
}



document.getElementById("navigation").appendChild(navigation);
navigation.appendChild(navigationContent);
navigationContent.appendChild(navigationFilter);
navigationFilter.appendChild(navigationFilterContent);
navigationFilterContent.appendChild(navigationFilterContentSpan);
navigationFilter.appendChild(navigationFilterDrop);

navigationContent.appendChild(navigationShowAll);
navigationShowAll.appendChild(navigationShowAllContent);
navigationContent.appendChild(navigationDex);
navigationDex.appendChild(navigationDexContent);
navigationContent.appendChild(navigationSearch);
navigationSearch.appendChild(navigationSearchContent);
navigationSearchContent.appendChild(navigationSearchExit);
navigationSearchContent.appendChild(navigationSearchInput);
navigationContent.appendChild(navigationCount);
navigationCount.appendChild(navigationCountContent);
navigationCountContent.appendChild(navigationCountSpan1);
navigationCountContent.appendChild(navigationCountSpan2);
navigationCountContent.appendChild(navigationCountSpan3);
navigationContent.appendChild(navigationGame);
navigationGame.appendChild(navigationGameContent);
navigationGameContent.appendChild(navigationGameImg);
navigationContent.appendChild(navigationSettings);
navigationSettings.appendChild(navigationSettingsContent);
navigationSettings.appendChild(navigationSettingsImg);
navigationSettings.appendChild(navigationSettingsDrop);

navigationSettingsDrop.appendChild(navigationSettingsDropImgtype);
navigationSettingsDropImgtype.appendChild(navigationSettingsDropImgtypeDiv);
navigationSettingsDropImgtypeDiv.appendChild(navigationSettingsDropImgtypeDrop);
navigationSettingsDropImgtypeDrop.appendChild(navigationSettingsDropImgtypeDropSpan);
navigationSettingsDropImgtypeDrop.appendChild(navigationSettingsDropImgtypeDropText);
navigationSettingsDropImgtypeDrop.appendChild(navigationSettingsDropImgtypeDropImgOuter);;
navigationSettingsDropImgtypeDropImgOuter.appendChild(navigationSettingsDropImgtypeDropImg);
navigationSettingsDropImgtypeDiv.appendChild(navigationSettingsDropImgtypeContent);


navigationSettingsDrop.appendChild(navigationSettingsDropResize);
navigationSettingsDropResize.appendChild(navigationSettingsDropResizeDiv);
navigationSettingsDropResizeDiv.appendChild(navigationSettingsDropResizeValue);
navigationSettingsDropResizeDiv.appendChild(navigationSettingsDropResizeInput);

navigationSettingsDrop.appendChild(navigationSettingsDropTheme);
navigationSettingsDropTheme.appendChild(navigationSettingsDropThemeDiv);
navigationSettingsDropThemeDiv.appendChild(navigationSettingsDropThemeInput);
navigationSettingsDropThemeDiv.appendChild(navigationSettingsDropThemeSpan);

}