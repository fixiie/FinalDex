var createPokData = function(id,i) {

var i;
var id;



var pokdataDiv = document.createElement("div");
var pokdataDivOverlay = document.createElement("div");
var pokdataDivContent = document.createElement("div");
var pokdataNavigation = document.createElement("section");

var pokdataAside2MapContain = document.createElement("div");
var pokdataAside2MapZoomReset = document.createElement("span");
var pokdataAside2MapZoomOut = document.createElement("span");
var pokdataAside2MapZoomIn = document.createElement("span");
var pokdataAside2MapZoomFullscreen = document.createElement("span");
var pokdataAside2Map = document.createElement("div");
var pokdataAside2MapPanzoom = document.createElement("div");
var pokdataAside2MapImage = document.createElement("img");
var pokdataAside2MapMark = document.createElement("div");
var pokdataAside2MapMarkImage = document.createElement("img");



var pokdataForm = document.createElement("section");


var variant = [];

for (var u = 0; u < finaldataPokémon.length; u++) {
    if (finaldataPokémon[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
        variant.push(finaldataPokémon[u]["Pokémon"])
    }
}

for (var u = 0; u < finaldataPokémon.length; u++) {
    if (finaldataPokémon[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
        var pokdataFormInput = document.createElement("input");
        var pokdataFormLabel = document.createElement("label");
        var pokdataFormImg = document.createElement("img");
        pokdataFormInput.setAttribute("type","radio");
        pokdataFormInput.setAttribute("name","pokdata-form-selector"+id);
        pokdataFormInput.setAttribute("id","pokdata-form-selector-"+u);
        pokdataFormInput.value = u;
        pokdataFormLabel.setAttribute("for","pokdata-form-selector-"+u);
        pokdataFormImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        pokdataForm.appendChild(pokdataFormInput)
        pokdataForm.appendChild(pokdataFormLabel)
        pokdataFormLabel.appendChild(pokdataFormImg)

        if (finaldataPokémonForm[u]["Form_"+JSONPath_Form] == undefined) {
            pokdataFormImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(finaldataPokémonForm[u]["Pokémon"])+".png";
            pokdataFormLabel.title = finaldataPokémonForm[u]["Pokémon"];
        }
        else {
            pokdataFormImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(finaldataPokémonForm[u]["Form_"+JSONPath_Form])+".png";
            pokdataFormLabel.title = finaldataPokémonForm[u]["Form_"+JSONPath_Form];
        }

        if (!variant.length >= 2) {
            pokdataFormInput.setAttribute("checked","");
        }

        pokdataFormInput.addEventListener("click", loadData);
    }
}







var pokdataAside1 = document.createElement("aside");
var pokdataAside1DivPortrait = document.createElement("div");
var pokdataAside1DivPortraitContent = document.createElement("div");
var pokdataAside1Portrait = document.createElement("img");

var pokdataAside1StatsEVSelector = document.createElement("div");

var pokdataAside1DivIdNameOuter = document.createElement("div");
var pokdataAside1DivIdName = document.createElement("p");
var pokdataAside1DivIdNameBreak = document.createElement("br");
var pokdataAside1IDNational = document.createElement("span");
var pokdataAside1Name = document.createElement("p");
var pokdataAside1DebutCategoryOuter = document.createElement("div");
var pokdataAside1DebutCategory = document.createElement("p");
var pokdataAside1DebutCategoryBreak = document.createElement("br");
var pokdataAside1Debut = document.createElement("span");
var pokdataAside1Category = document.createElement("span");

var pokdataAside1Type = document.createElement("div");

var pokdataAside2 = document.createElement("aside");

var pokdataAside2 = document.createElement("aside");


var pokdataAside2Metadata = document.createElement("div");
var pokdataAside2MetadataStats = document.createElement("div");
var pokdataAside2DescriptionOuter = document.createElement("div");
var pokdataAside2Description = document.createElement("p");

var pokdataAside2MetadataSidebarOuter = document.createElement("div");
var pokdataAside2MetadataSidebar = document.createElement("div");

var pokdataAside2MetadataSidebarRow1 = document.createElement("div");
var pokdataAside2MetadataSidebarRow2 = document.createElement("div");
var pokdataAside2MetadataSidebarRow3 = document.createElement("div");
var pokdataAside2MetadataSidebarRow4 = document.createElement("div");



var pokdataAside2MetadataSidebarCatchRateOuter = document.createElement("span");
var pokdataAside2MetadataSidebarCatchRateToggle = document.createElement("span");
var pokdataAside2MetadataSidebarCatchRateContent = document.createElement("p");
var pokdataAside2MetadataSidebarCatchRateTitle = document.createElement("h5");
var pokdataAside2MetadataSidebarCatchRate = document.createElement("h3");

var pokdataAside2MetadataSidebarLevelRateOuter = document.createElement("span");
var pokdataAside2MetadataSidebarLevelRateToggle = document.createElement("span");
var pokdataAside2MetadataSidebarLevelRateContent = document.createElement("p");
var pokdataAside2MetadataSidebarLevelRateTitle = document.createElement("h5");
var pokdataAside2MetadataSidebarLevelRate = document.createElement("h3");

var pokdataAside2MetadataSidebarExpYieldOuter = document.createElement("span");
var pokdataAside2MetadataSidebarExpYieldToggle = document.createElement("span");
var pokdataAside2MetadataSidebarExpYieldContent = document.createElement("p");
var pokdataAside2MetadataSidebarExpYieldTitle = document.createElement("h5");
var pokdataAside2MetadataSidebarExpYield = document.createElement("h3");



var pokdataAside2AreaDiv = document.createElement("div");
var pokdataAside2Area = document.createElement("div");
var pokdataAside2AreaTitle = document.createElement("h4");
var pokdataAside2AreaText = document.createElement("p");




pokdataDiv.setAttribute("id","pokdata-modal"+id);
pokdataDiv.classList.add("pokdata-modal-outer");
pokdataDivOverlay.classList.add("pokdata-modal-overlay");
pokdataDivContent.classList.add("pokdata-modal");
pokdataNavigation.setAttribute("id","pokdata-navigation");

pokdataDivOverlay.addEventListener("click", modalPokdata);

pokdataForm.classList.add("pokdata-form");

var navz = ["metadata","learnset","area"];
var navztitles = ["Pokédex","Learnset","Area"];
for (var q = 0; q < navz.length; q++) {
    var pokdataNavigationInput = document.createElement("input");
    var pokdataNavigationLabel = document.createElement("label");
    pokdataNavigationInput.setAttribute("type","radio");
    pokdataNavigationInput.setAttribute("name","pokdata-navigation"+id);
    pokdataNavigationInput.setAttribute("id","pokdata-navigation-" + navz[q]+id);
    pokdataNavigationInput.classList.add("pokdata-navigation-" + navz[q]);
    pokdataNavigationInput.setAttribute("value",q + 1);
    if (q == 0) {
        pokdataNavigationInput.setAttribute("checked",""); 
    }
    pokdataNavigationLabel.setAttribute("for","pokdata-navigation-" + navz[q]+id);
    pokdataNavigationLabel.innerText = navztitles[q];
    pokdataNavigation.appendChild(pokdataNavigationInput);
    pokdataNavigation.appendChild(pokdataNavigationLabel);
}


pokdataAside1.classList.add("pokdata-aside1");
pokdataAside1DivPortrait.classList.add("pokdata-portrait");
pokdataAside1DivPortraitContent.classList.add("pokdata-portrait-content");
pokdataAside1Portrait.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
pokdataAside1Portrait.setAttribute("id","pokdata-portrait-img-"+id);



pokdataAside1StatsEVSelector.classList.add("pokdata-baseev-selector");

pokdataAside1DivIdNameOuter.classList.add("pokdata-idname-outer");
pokdataAside1DivIdName.classList.add("pokdata-idname");
pokdataAside1IDNational.classList.add("pokdata-nationalID");
pokdataAside1IDNational.innerText = "#" + id;



pokdataAside1Name.classList.add("pokdata-name");
pokdataAside1DebutCategoryOuter.classList.add("pokdata-debutcategorytype-outer");
pokdataAside1DebutCategory.classList.add("pokdata-debutcategory");
pokdataAside1Debut.classList.add("pokdata-debut");
pokdataAside1Category.classList.add("pokdata-category");

pokdataAside1Type.classList.add("pokdata-type");





var pokdataAside1TypePrimaryOuter = document.createElement("span");
var pokdataAside1TypePrimary = document.createElement("span");
var pokdataAside1TypePrimaryImg = document.createElement("img");
var pokdataAside1TypePrimaryText = document.createElement("h3");
pokdataAside1TypePrimaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
pokdataAside1TypePrimaryImg.setAttribute("dataname","value");
pokdataAside1Type.appendChild(pokdataAside1TypePrimaryOuter);
pokdataAside1TypePrimaryOuter.appendChild(pokdataAside1TypePrimary);
pokdataAside1TypePrimary.appendChild(pokdataAside1TypePrimaryImg);
pokdataAside1TypePrimary.appendChild(pokdataAside1TypePrimaryText);

var pokdataAside1TypeSecondaryOuter = document.createElement("span");
var pokdataAside1TypeSecondary = document.createElement("span");
var pokdataAside1TypeSecondaryImg = document.createElement("img");
var pokdataAside1TypeSecondaryText = document.createElement("h3");
pokdataAside1TypeSecondaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
pokdataAside1TypeSecondaryImg.setAttribute("dataname","value");
pokdataAside1Type.appendChild(pokdataAside1TypeSecondaryOuter);
pokdataAside1TypeSecondaryOuter.appendChild(pokdataAside1TypeSecondary);
pokdataAside1TypeSecondary.appendChild(pokdataAside1TypeSecondaryImg);
pokdataAside1TypeSecondary.appendChild(pokdataAside1TypeSecondaryText);




pokdataAside2.classList.add("pokdata-aside2");
pokdataAside2MapContain.setAttribute("id","pokdata-map-contain");
pokdataAside2MapZoomReset.classList.add("pokdata-zoom-reset");
pokdataAside2MapZoomOut.classList.add("pokdata-zoom-out");
pokdataAside2MapZoomIn.classList.add("pokdata-zoom-in");
pokdataAside2MapZoomFullscreen.classList.add("pokdata-zoom-fullscreen");
pokdataAside2Map.setAttribute("id","pokdata-map");
pokdataAside2Map.setAttribute("name",Region + "-" + MEDIAPath_Map);
pokdataAside2MapPanzoom.setAttribute("id","pokdata-map-panzoom-"+id);
pokdataAside2MapPanzoom.setAttribute("name",Region + "-" + MEDIAPath_Map);
pokdataAside2MapImage.src = "./media/Images/Misc/Map/" + MEDIAPath_Map + "/Map.png";
pokdataAside2MapImage.onload = function(){
    pokdataAside2MapImage.setAttribute("width",pokdataAside2MapImage.width+"px");
    pokdataAside2MapImage.setAttribute("height",pokdataAside2MapImage.height+"px");
}
pokdataAside2MapImage.classList.add("pokdata-img-main");
pokdataAside2MapImage.setAttribute("name",Region + "-" + MEDIAPath_Map);
pokdataAside2MapMark.classList.add("pokdata-img-mark-outer");
pokdataAside2MapMarkImage.classList.add("pokdata-img-mark");




pokdataAside2Metadata.classList.add("pokdata-metadata");
pokdataAside2Metadata.setAttribute("id","pokdata-metadata"+id);
pokdataAside2DescriptionOuter.classList.add("pokdata-metadata-description");
pokdataAside2DescriptionOuter.classList.add("scroll");
pokdataAside2MetadataSidebarOuter.setAttribute("id","pokdata-metadata-sidebar-outer");
pokdataAside2MetadataSidebar.setAttribute("id","pokdata-metadata-sidebar");
pokdataAside2MetadataSidebar.setAttribute("name",Generation + "-" + GameID);

pokdataAside2MetadataStats.classList.add("pokdata-metadata-stats");


pokdataAside2MetadataSidebarCatchRateOuter.classList.add("pokdata-metadata-sidebar-catchrate");
pokdataAside2MetadataSidebarCatchRateOuter.setAttribute("name","Catch Rate");
pokdataAside2MetadataSidebarCatchRateToggle.classList.add("pokdata-metadata-sidebar-catchrate-toggle");
pokdataAside2MetadataSidebarCatchRateContent.classList.add("pokdata-metadata-sidebar-catchrate-content");
pokdataAside2MetadataSidebarCatchRateTitle.innerText = "Catch Rate";
pokdataAside2MetadataSidebarCatchRate.setAttribute("id","pokdata-metadata-sidebar-catchrate");
pokdataAside2MetadataSidebarCatchRate.setAttribute("dataname","value");
pokdataAside2MetadataSidebarCatchRate.setAttribute("value","");



pokdataAside2MetadataSidebarLevelRateOuter.classList.add("pokdata-metadata-sidebar-levelrate");
pokdataAside2MetadataSidebarLevelRateOuter.setAttribute("name","Leveling Rate");
pokdataAside2MetadataSidebarLevelRateToggle.classList.add("pokdata-metadata-sidebar-levelrate-toggle");
pokdataAside2MetadataSidebarLevelRateContent.classList.add("pokdata-metadata-sidebar-levelrate-content");
pokdataAside2MetadataSidebarLevelRateTitle.innerText = "Leveling Rate";
pokdataAside2MetadataSidebarLevelRate.setAttribute("id","pokdata-metadata-sidebar-levelrate");
pokdataAside2MetadataSidebarLevelRate.setAttribute("dataname","value");
pokdataAside2MetadataSidebarLevelRate.setAttribute("value","");


pokdataAside2MetadataSidebarExpYieldOuter.classList.add("pokdata-metadata-sidebar-expyield");
pokdataAside2MetadataSidebarExpYieldOuter.setAttribute("name","Experience Yield");
pokdataAside2MetadataSidebarExpYieldToggle.classList.add("pokdata-metadata-sidebar-expyield-toggle");
pokdataAside2MetadataSidebarExpYieldContent.classList.add("pokdata-metadata-sidebar-expyield-content");
pokdataAside2MetadataSidebarExpYieldTitle.innerText = "Experience Yield";
pokdataAside2MetadataSidebarExpYield.setAttribute("id","pokdata-metadata-sidebar-expyield");
pokdataAside2MetadataSidebarExpYield.setAttribute("dataname","value");
pokdataAside2MetadataSidebarExpYield.setAttribute("value","");



pokdataAside2AreaDiv.classList.add("pokdata-area");
pokdataAside2AreaDiv.setAttribute("id","pokdata-area"+id);
pokdataAside2Area.classList.add("pokdata-area-content");
pokdataAside2AreaTitle.classList.add("pokdata-area-title");
pokdataAside2AreaText.classList.add("pokdata-area-text");
pokdataAside2AreaText.classList.add("scroll");


/*
pokdataAside2AreaTitle.setAttribute("name",finaldataPokémonArea[i]["Filter_"+JSONPath_Area]);

if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Catchable") {
    pokdataAside2AreaTitle.title = "Pokémon caught in the Wild";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Snaggable") {
    pokdataAside2AreaTitle.title = "Shadow Pokémon caught from Trainers";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Evolve") {
    pokdataAside2AreaTitle.title = "Pokémon obtained via Evolution";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Trade Evolution") {
    pokdataAside2AreaTitle.title = "Pokémon obtained via Evolution by Trade";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Breed") {
    pokdataAside2AreaTitle.title = "Pokémon obtained through Breeding";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Gift") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly obtained by Receival";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Choice") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly obtained by choosing between it or another";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Swarm") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly caught during a Swarm";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Max Raid Battle") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly caught during a Max Raid Battle";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Poké Radar") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly caught with the Poké Radar";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "The Underground") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly caught with association to The Underground";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "White Forest") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly caught in the White Forest";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Unique") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly with a limited amount of encounters";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Event") {
    pokdataAside2AreaTitle.title = "Pokémon exclusivly encountered during an In-Game Event";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Unavailable") {
    pokdataAside2AreaTitle.title = "Pokémon not available";
}
if (finaldataPokémonArea[i]["Filter_"+JSONPath_Area] == "Unobtainable") {
    pokdataAside2AreaTitle.title = "Pokémon unobtainable";
}

pokdataAside2AreaTitle.innerText = finaldataPokémonArea[i]["Filter_"+JSONPath_Area];
pokdataAside2AreaText.innerHTML = finaldataPokémonArea[i]["Area_"+JSONPath_Area];




for (q = 0; q < JSONPath_Pokédex.length; q++) {
    var pokdataAside1IDRegional = document.createElement("span");
    pokdataAside1IDRegional.classList.add("pokdata-regionalID-" + [q+1]);
    if (finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]] != null) {
        pokdataAside1IDRegional.innerText = "#" + finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]];
    }


    pokdataAside1DivIdName.appendChild(pokdataAside1IDRegional);
}
*/

if (Ability.length >= 1) {
    var pokdataAside2MetadataSidebarRow1 = document.createElement("div");
    var pokdataAside2MetadataSidebarAbilityOuter = document.createElement("span");
    pokdataAside2MetadataSidebarAbilityOuter.classList.add("pokdata-metadata-sidebar-ability");
    pokdataAside2MetadataSidebarAbilityOuter.setAttribute("name",Generation);
    pokdataAside2MetadataSidebar.appendChild(pokdataAside2MetadataSidebarRow1);
    pokdataAside2MetadataSidebarRow1.appendChild(pokdataAside2MetadataSidebarAbilityOuter);
    
    var pokdataAside2MetadataSidebarAbilityPrimarySecondaryOuter = document.createElement("span");
    pokdataAside2MetadataSidebarAbilityOuter.appendChild(pokdataAside2MetadataSidebarAbilityPrimarySecondaryOuter);

    var pokdataAside2MetadataSidebarAbilityPrimary = document.createElement("h5");

    pokdataAside2MetadataSidebarAbilityPrimary.setAttribute("id","pokdata-metadata-sidebar-ability-primary");
    pokdataAside2MetadataSidebarAbilityPrimary.setAttribute("title","Primary Ability");
    pokdataAside2MetadataSidebarAbilityPrimary.setAttribute("dataname","value");
    pokdataAside2MetadataSidebarAbilityPrimary.innerText = "Primary Ability";
    pokdataAside2MetadataSidebarAbilityPrimarySecondaryOuter.appendChild(pokdataAside2MetadataSidebarAbilityPrimary);




    var pokdataAside2MetadataSidebarAbilitySecondary = document.createElement("h5");

    pokdataAside2MetadataSidebarAbilitySecondary.setAttribute("id","pokdata-metadata-sidebar-ability-secondary");
    pokdataAside2MetadataSidebarAbilitySecondary.setAttribute("title","Secondary Ability");
    pokdataAside2MetadataSidebarAbilitySecondary.setAttribute("dataname","value");
    pokdataAside2MetadataSidebarAbilitySecondary.innerText = "Secondary Ability";
    pokdataAside2MetadataSidebarAbilityPrimarySecondaryOuter.appendChild(pokdataAside2MetadataSidebarAbilitySecondary);



    if (Ability.length >= 3) {
        var pokdataAside2MetadataSidebarAbilityHiddenOuter = document.createElement("span");
        var pokdataAside2MetadataSidebarAbilityHidden = document.createElement("h5");
        pokdataAside2MetadataSidebarAbilityHidden.setAttribute("id","pokdata-metadata-sidebar-ability-hidden");
        pokdataAside2MetadataSidebarAbilityHidden.setAttribute("title","Hidden Ability");
        pokdataAside2MetadataSidebarAbilityHidden.setAttribute("dataname","value");
        pokdataAside2MetadataSidebarAbilityHidden.innerText = "Hidden Ability";
        pokdataAside2MetadataSidebarAbilityOuter.appendChild(pokdataAside2MetadataSidebarAbilityHiddenOuter);
        pokdataAside2MetadataSidebarAbilityHiddenOuter.appendChild(pokdataAside2MetadataSidebarAbilityHidden);
    }

}





pokdataAside2MetadataSidebar.appendChild(pokdataAside2MetadataSidebarRow2);
pokdataAside2MetadataSidebarRow2.appendChild(pokdataAside2MetadataSidebarCatchRateOuter);


var EggCycleStep;


if (Generation >= 2 && Generation <= 3 || Generation == 7) {
    EggCycleStep = "256"
}
if (Generation == 4) {
    EggCycleStep = "255"
}
if (Generation >= 5 && Generation <= 6) {
    EggCycleStep = "257"
}



if (Egg == true) {
    var pokdataAside2MetadataSidebarHatchRateOuter = document.createElement("span");
    var pokdataAside2MetadataSidebarHatchRateToggle = document.createElement("span");
    var pokdataAside2MetadataSidebarHatchRateContent = document.createElement("p");
    var pokdataAside2MetadataSidebarHatchRateTitle = document.createElement("h5");
    var pokdataAside2MetadataSidebarHatchRate = document.createElement("h3");

    pokdataAside2MetadataSidebarHatchRateOuter.classList.add("pokdata-metadata-sidebar-hatchrate");
    pokdataAside2MetadataSidebarHatchRateOuter.setAttribute("name","Hatch Rate");
    pokdataAside2MetadataSidebarHatchRateToggle.classList.add("pokdata-metadata-sidebar-hatchrate-toggle");
    pokdataAside2MetadataSidebarHatchRateContent.classList.add("pokdata-metadata-sidebar-hatchrate-content");
    pokdataAside2MetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
    pokdataAside2MetadataSidebarHatchRate.setAttribute("id","pokdata-metadata-sidebar-hatchrate");
    pokdataAside2MetadataSidebarHatchRate.setAttribute("dataname","value");
    pokdataAside2MetadataSidebarHatchRate.setAttribute("value","");

    pokdataAside2MetadataSidebarRow2.appendChild(pokdataAside2MetadataSidebarHatchRateOuter);
    pokdataAside2MetadataSidebarHatchRateOuter.appendChild(pokdataAside2MetadataSidebarHatchRateToggle);
    pokdataAside2MetadataSidebarHatchRateToggle.appendChild(pokdataAside2MetadataSidebarHatchRateContent);
    pokdataAside2MetadataSidebarHatchRateContent.appendChild(pokdataAside2MetadataSidebarHatchRateTitle);
    pokdataAside2MetadataSidebarHatchRateContent.appendChild(pokdataAside2MetadataSidebarHatchRate);

}

if (Gender == true) {
    pokdataAside2MetadataSidebar.appendChild(pokdataAside2MetadataSidebarRow3);

    var pokdataAside2MetadataSidebarGenderRatioOuter = document.createElement("span");
    var pokdataAside2MetadataSidebarGenderRatioTitle = document.createElement("h5");
    var pokdataAside2MetadataSidebarGenderRatioBar = document.createElement("span");
    var pokdataAside2MetadataSidebarGenderRatioToggle = document.createElement("span");
    var pokdataAside2MetadataSidebarGenderRatioMale = document.createElement("span");
    var pokdataAside2MetadataSidebarGenderRatioFemale = document.createElement("span");
    var pokdataAside2MetadataSidebarGenderRatioGenderless = document.createElement("span");


    pokdataAside2MetadataSidebarGenderRatioOuter.classList.add("pokdata-metadata-sidebar-genderratio");
    pokdataAside2MetadataSidebarGenderRatioOuter.setAttribute("name","Gender Ratio");
    pokdataAside2MetadataSidebarGenderRatioTitle.innerText = "Gender ratio";
    pokdataAside2MetadataSidebarGenderRatioBar.classList.add("pokdata-metadata-sidebar-genderratio-bar")
    pokdataAside2MetadataSidebarGenderRatioToggle.classList.add("pokdata-metadata-sidebar-genderratio-toggle")
    pokdataAside2MetadataSidebarGenderRatioToggle.setAttribute("dataname","value");
    pokdataAside2MetadataSidebarGenderRatioMale.setAttribute("name","male");
    pokdataAside2MetadataSidebarGenderRatioFemale.setAttribute("name","female");
    pokdataAside2MetadataSidebarGenderRatioGenderless.setAttribute("name","genderless");
    pokdataAside2MetadataSidebarGenderRatioGenderless.setAttribute("title","");

    pokdataAside2MetadataSidebarGenderRatioBar.style.display = "none";

    pokdataAside2MetadataSidebarGenderRatioOuter.appendChild(pokdataAside2MetadataSidebarGenderRatioTitle);
    pokdataAside2MetadataSidebarGenderRatioOuter.appendChild(pokdataAside2MetadataSidebarGenderRatioBar);
    pokdataAside2MetadataSidebarGenderRatioBar.appendChild(pokdataAside2MetadataSidebarGenderRatioToggle);
    pokdataAside2MetadataSidebarGenderRatioToggle.appendChild(pokdataAside2MetadataSidebarGenderRatioMale);
    pokdataAside2MetadataSidebarGenderRatioToggle.appendChild(pokdataAside2MetadataSidebarGenderRatioFemale);
    pokdataAside2MetadataSidebarGenderRatioToggle.appendChild(pokdataAside2MetadataSidebarGenderRatioGenderless);

    pokdataAside2MetadataSidebarRow3.appendChild(pokdataAside2MetadataSidebarGenderRatioOuter);

}

if (Egg == true) {

    var pokdataAside2MetadataSidebarEggGroupOuter = document.createElement("span");
    var pokdataAside2MetadataSidebarEggGroupTitle = document.createElement("h5");
    var pokdataAside2MetadataSidebarEggGroupPrimarySecondaryOuter = document.createElement("span");
    var pokdataAside2MetadataSidebarEggGroupPrimaryOuter = document.createElement("span");
    var pokdataAside2MetadataSidebarEggGroupPrimary = document.createElement("b");
    var pokdataAside2MetadataSidebarEggGroupSecondaryOuter = document.createElement("span");
    var pokdataAside2MetadataSidebarEggGroupSecondary = document.createElement("b");
    
    pokdataAside2MetadataSidebarEggGroupOuter.classList.add("pokdata-metadata-sidebar-egggroup");
    pokdataAside2MetadataSidebarEggGroupOuter.setAttribute("name","Egg Group");
    pokdataAside2MetadataSidebarEggGroupTitle.innerText = "Egg Group";
    pokdataAside2MetadataSidebarEggGroupPrimaryOuter.setAttribute("name","Primary");
    pokdataAside2MetadataSidebarEggGroupPrimary.setAttribute("id","pokdata-metadata-sidebar-egggroup1");
    pokdataAside2MetadataSidebarEggGroupPrimary.setAttribute("title","Primary Egg Group");
    pokdataAside2MetadataSidebarEggGroupPrimary.setAttribute("dataname","value");
    pokdataAside2MetadataSidebarEggGroupSecondaryOuter.setAttribute("name","Secondary");
    pokdataAside2MetadataSidebarEggGroupSecondary.setAttribute("id","pokdata-metadata-sidebar-egggroup2");
    pokdataAside2MetadataSidebarEggGroupSecondary.setAttribute("title","Secondary Egg Group");
    pokdataAside2MetadataSidebarEggGroupSecondary.setAttribute("dataname","value");
    
    pokdataAside2MetadataSidebarEggGroupPrimaryOuter.style.display = "none";
    pokdataAside2MetadataSidebarEggGroupSecondaryOuter.style.display = "none";

    pokdataAside2MetadataSidebarRow3.appendChild(pokdataAside2MetadataSidebarEggGroupOuter);
    pokdataAside2MetadataSidebarEggGroupOuter.appendChild(pokdataAside2MetadataSidebarEggGroupTitle);
    pokdataAside2MetadataSidebarEggGroupOuter.appendChild(pokdataAside2MetadataSidebarEggGroupPrimarySecondaryOuter)
    pokdataAside2MetadataSidebarEggGroupPrimarySecondaryOuter.appendChild(pokdataAside2MetadataSidebarEggGroupPrimaryOuter);
    pokdataAside2MetadataSidebarEggGroupPrimaryOuter.appendChild(pokdataAside2MetadataSidebarEggGroupPrimary);
    pokdataAside2MetadataSidebarEggGroupPrimarySecondaryOuter.appendChild(pokdataAside2MetadataSidebarEggGroupSecondaryOuter);
    pokdataAside2MetadataSidebarEggGroupSecondaryOuter.appendChild(pokdataAside2MetadataSidebarEggGroupSecondary);

}


pokdataAside2MetadataSidebar.appendChild(pokdataAside2MetadataSidebarRow4);




/*
if (parseInt(id) - 1 != 0) {
var pokdataPrevious = document.createElement("div");
var pokdataPreviousNational = document.createElement("button");
var pokdataPreviousNationalImg = document.createElement("img");

pokdataPrevious.classList.add("pokdata-previous");
pokdataPreviousNational.setAttribute("id","pokdata-previous-national");
pokdataPreviousNational.setAttribute("name","national");
pokdataPreviousNational.classList.add("pokdata-modal-close-open");
pokdataPreviousNational.setAttribute("value",parseInt(id) - 1);
pokdataPreviousNational.title = "#" + [parseInt(id) - 1] + "\n" + getPokémonName(getIntID("",[parseInt(id) - 1]));
pokdataPreviousNationalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(getPokémonName(getIntID("",[parseInt(id) - 1]))) + ".png";
pokdataPreviousNationalImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

pokdataDivContent.appendChild(pokdataPrevious);
pokdataPrevious.appendChild(pokdataPreviousNational);
pokdataPreviousNational.appendChild(pokdataPreviousNationalImg);

}

if (parseInt(id) + 1 <= finaldataPokémon.length) {

var pokdataNext = document.createElement("div");
var pokdataNextNational = document.createElement("button");
var pokdataNextNationalImg = document.createElement("img");

pokdataNext.classList.add("pokdata-next");
pokdataNextNational.setAttribute("id","pokdata-next-national");
pokdataNextNational.setAttribute("name","national");
pokdataNextNational.classList.add("pokdata-modal-close-open");
pokdataNextNational.setAttribute("value",parseInt(id) + 1);
pokdataNextNational.title = "#" + [parseInt(id) + 1] + "\n" + getPokémonName(getIntID("",[parseInt(id) - 1]));
pokdataNextNationalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(getPokémonName(getIntID("",[parseInt(id) - 1]))) + ".png";
pokdataNextNationalImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

pokdataDivContent.appendChild(pokdataNext);
pokdataNext.appendChild(pokdataNextNational);
pokdataNextNational.appendChild(pokdataNextNationalImg);



}

for (q = 0; q < JSONPath_Pokédex.length; q++) {
    var y = q + 1;

    var previousID = parseInt(getRegionalID("-",x.toString(),JSONPath_Pokédex[q].toString()));
    var nextID = parseInt(getRegionalID("+",x.toString(),JSONPath_Pokédex[q].toString()));

    if (!isNaN(parseFloat(previousID))) {
        var pokdataPreviousRegional = document.createElement("button");
        var pokdataPreviousRegionalImg = document.createElement("img");

        pokdataPreviousRegional.setAttribute("id","pokdata-previous-regional" + y);
        pokdataPreviousRegional.setAttribute("name","regional" + y);
        pokdataPreviousRegional.classList.add("pokdata-modal-close-open");
        pokdataPreviousRegional.setAttribute("value",previousID);
        pokdataPreviousRegional.title = "#" + [parseInt(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]]) - 1] + "\n" + getPokémonName(previousID);
        pokdataPreviousRegionalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + previousID + ".png";
        pokdataPreviousRegionalImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        
        pokdataPrevious.appendChild(pokdataPreviousRegional);
        pokdataPreviousRegional.appendChild(pokdataPreviousRegionalImg);
    }
    if (!isNaN(parseFloat(nextID))) {
        var pokdataNextRegional = document.createElement("button");
        var pokdataNextRegionalImg = document.createElement("img");

        pokdataNextRegional.setAttribute("id","pokdata-next-regional" + y); 
        pokdataNextRegional.setAttribute("name","regional" + y);
        pokdataNextRegional.classList.add("pokdata-modal-close-open");
        pokdataNextRegional.setAttribute("value",nextID);
        pokdataNextRegional.title = "#" + [parseInt(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]]) + 1] + "\n" + getPokémonName(nextID);
        pokdataNextRegionalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + nextID + ".png";
        pokdataNextRegionalImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        
        pokdataNext.appendChild(pokdataNextRegional);
        pokdataNextRegional.appendChild(pokdataNextRegionalImg);
    }
}




var PokémonStage = finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage];
var FamilyStage = finaldataPokémonEvolutionStage[i]["Family Stage_"+JSONPath_EvolutionStage];

var Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
var Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];

var PreviousPrevious;
var PreviousNext;
var NextPrevious;


if (Next != undefined) {
    NextPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Next)) - 1]["Previous_"+JSONPath_EvolutionSpecie].split(",");
    var NextTypeMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Type_"+JSONPath_EvolutionMethod];
    var NextFactorMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Factor_"+JSONPath_EvolutionMethod];
    var NextAdditionalMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Additional_"+JSONPath_EvolutionMethod];
    var NextFormMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Next)) - 1]["Form_"+JSONPath_EvolutionMethod];
}
else {
    NextPrevious = [];
}

if (Previous != undefined) {
    PreviousNext = finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie];
    PreviousPrevious = finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Previous_"+JSONPath_EvolutionSpecie];

    var PreviousTypeMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Type_"+JSONPath_EvolutionMethod];
    var PreviousFactorMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Factor_"+JSONPath_EvolutionMethod];
    var PreviousAdditionalMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Additional_"+JSONPath_EvolutionMethod];
    var PreviousFormMethod = finaldataPokémonEvolutionMethod[parseInt(getPokémonID(Previous)) - 1]["Form_"+JSONPath_EvolutionMethod];
}
else {
    PreviousNext = [];
}


var evoprevious;

if (finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie] != undefined) {
    var evoprevious = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie].split(",").length;
}
else {
    var evoprevious = 0;
}


var evonext;

if (finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
    var evonext = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length;
}
else {
    var evonext = 0;
}




if (evoprevious != 0 || evonext != 0) {

    var EggArr1;

    if (PokémonStage == "First-Stage" && FamilyStage == "Two-Stage") { // 1/2 
        EggArr1 = finaldataPokémonEvolutionSpecie[i]["Pokémon"]+","+finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "First-Stage" && FamilyStage == "Three-Stage") { // 1/3
        EggArr1 = finaldataPokémonEvolutionSpecie[i]["Pokémon"]+","+finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Next)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "Second-Stage" && FamilyStage == "Two-Stage") { // 2/2
        EggArr1 = Previous+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "Second-Stage" && FamilyStage == "Three-Stage") { // 2/3
        EggArr1 = Previous+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
        EggArr1 = PreviousPrevious+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(PreviousPrevious)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataPokémonEvolutionSpecie[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }

    
    var EggArr2 = [];
    for (var q = 0; q < EggArr1.split(",").length; q++) {
        var ze = getPokémonID(EggArr1.split(",")[q]);

        if (finaldataPokémonEggGroup[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] == finaldataEggGroup[i]["Primary_"+JSONPath_EggGroup] && finaldataPokémonEggGroup[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup] == finaldataEggGroup[i]["Secondary_"+JSONPath_EggGroup]) {
            EggArr2.push(finaldataPokémonEggGroup[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] + "," + finaldataPokémonEggGroup[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup])
        }
        else {
            EggArr2.push(finaldataPokémonEggGroup[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] + "," + finaldataPokémonEggGroup[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup])
        }
       
    }

    EggArr1 = EggArr1.split(",")

    for (var q = 0; q < EggArr1.length; q++) {
        if (EggArr1[q] == Previous) {
            EggArr1.splice(q,1);
        }
    }

    for (var q = 0; q < EggArr2.length; q++) {
        EggArr2[q] = EggArr2[q].replaceAll(",undefined","");
        EggArr2[q] = EggArr2[q].replaceAll("undefined,","");
        EggArr2[q] = EggArr2[q].replaceAll("undefined","");
        EggArr2[q] = EggArr2[q].replaceAll(",",", ");
        EggArr2[q] = EggArr2[q].replace(/,([^,]*)$/, " or " + "$1");
    }

    EggArrTemp = [...new Set(EggArr2)];

    EggArr3 = EggArrTemp.filter(function(item, pos) {
        return EggArrTemp.indexOf(item) == pos;
    })

    var EggArr4 = [];

    for (var q = 0; q < EggArr3.length; q++) {
        for (var u = 0; u < EggArr1.length; u++) {
            if (EggArr2[u] == EggArr3[q]) {
                EggArr4[q] += EggArr1[u] + ",";
            }
        }
    }


    for (var q = 0; q < EggArr4.length; q++) {
        EggArr4[q] = EggArr4[q].replace(/,([^,]*)$/, "");
        EggArr4[q] = EggArr4[q].replace(/,([^,]*)$/, " or " + "$1");
        EggArr4[q] = EggArr4[q].replaceAll(",",", ");
        EggArr4[q] = EggArr4[q].replaceAll("undefined","");

    }








    if (PreviousTypeMethod == undefined) {
        PreviousTypeMethod = "";
    }
    else if (PreviousTypeMethod == "Item") {
        PreviousTypeMethod = " with ";
    }
    else {
        PreviousTypeMethod = " by "+PreviousTypeMethod;
    }

    if (NextTypeMethod == undefined) {
        NextTypeMethod = "";
    }
    else if (NextTypeMethod == "Item") {
        NextTypeMethod = " with ";
    }
    else {
        NextTypeMethod = " by "+NextTypeMethod;
    }



    if (PreviousFactorMethod == undefined) {
        PreviousFactorMethod = "";
    }
    else if (PreviousFactorMethod == "Special Level Up") {
        PreviousFactorMethod = "Level Up";
    }
    else if(!isNaN(parseInt(PreviousFactorMethod))) {
        PreviousFactorMethod = " ("+PreviousFactorMethod+")";
    }
    else {
        PreviousFactorMethod = " "+PreviousFactorMethod;
    }


    if (NextFactorMethod == undefined) {
        NextFactorMethod = "";
    }
    else if (NextFactorMethod == "Special Level Up") {
        NextFactorMethod = "Level Up";
    }
    else if(!isNaN(parseInt(NextFactorMethod))) {
        NextFactorMethod = " ("+NextFactorMethod+")";
    }
    else {
        NextFactorMethod = " "+NextFactorMethod;
    }



    if (PreviousAdditionalMethod == undefined) {
        PreviousAdditionalMethod = "";
    }
    else {
        PreviousAdditionalMethod = " "+PreviousAdditionalMethod+".";
    }
 

    if (NextAdditionalMethod == undefined) {
        NextAdditionalMethod = "";
    }
    else {
        NextAdditionalMethod = " "+NextAdditionalMethod+".";
    }


    if (PreviousFormMethod == undefined || NextFormMethod == undefined) {
        PreviousFormMethod = "";
        NextFormMethod = "";
    }
    else {
        PreviousFormMethod = " "+PreviousFormMethod;
        NextFormMethod = " "+NextFormMethod;
    }

 

    var egggroups;

    if (finaldataEggGroup[i]["Secondary_"+JSONPath_EggGroup] != undefined) {
        egggroups = finaldataEggGroup[i]["Primary_"+JSONPath_EggGroup]+" or "+finaldataEggGroup[i]["Secondary_"+JSONPath_EggGroup];
    }
    else {
        egggroups = finaldataEggGroup[i]["Primary_"+JSONPath_EggGroup];
    }
}


for (var q = 0; q < evoprevious; q++) {


    var prv = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie].split(",")[q];

   
    var pokdataEvolutionPrevious = document.createElement("div");
    var pokdataEvolutionPreviousContent = document.createElement("div");
    var pokdataEvolutionPreviousMain = document.createElement("main");
    var pokdataEvolutionPreviousButton = document.createElement("button");
    var pokdataEvolutionPreviousDescription = document.createElement("p");
    var pokdataEvolutionPreviousIDNational = document.createElement("h6");
    var pokdataEvolutionPreviousName = document.createElement("h4");
    var pokdataEvolutionPreviousToggle = document.createElement("div");
    var pokdataEvolutionPreviousImg = document.createElement("img");


    pokdataEvolutionPrevious.classList.add("pokdata-evolution");
    pokdataEvolutionPrevious.setAttribute("name","previous-" + (q+1) + "/" + evoprevious);
    pokdataEvolutionPreviousContent.classList.add("pokdata-evolution-content");
    pokdataEvolutionPreviousMain
    pokdataEvolutionPreviousButton.classList.add("pokdata-modal-close-open")
    pokdataEvolutionPreviousButton.value = getPokémonID(prv);
    pokdataEvolutionPreviousImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonID(prv) + ".png";
    pokdataEvolutionPreviousImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    pokdataEvolutionPreviousIDNational.innerText = "#" + getPokémonID(prv);
    pokdataEvolutionPreviousName.classList.add("pokdata-evolution-name");
    pokdataEvolutionPreviousName.innerText = prv;
    pokdataEvolutionPreviousToggle.classList.add("pokdata-evolution-toggle");
    pokdataEvolutionPreviousToggle.setAttribute("onclick","this.previousElementSibling.classList.toggle('active');");

    for (var u = 0; u < EggArr4.length; u++) {
        if (u == 0) {
        pokdataEvolutionPreviousDescription.innerHTML = "Breed " + EggArr4[u] + " with " + EggArr3[u];
        }
        else {
            pokdataEvolutionPreviousDescription.innerHTML += "<br>Breed " + EggArr4[u] + " with " + EggArr3[u];
        }
    }


    pokdataEvolutionPreviousButton.appendChild(pokdataEvolutionPreviousIDNational);
    pokdataDivContent.appendChild(pokdataEvolutionPrevious);
    pokdataEvolutionPrevious.appendChild(pokdataEvolutionPreviousContent);
    pokdataEvolutionPreviousContent.appendChild(pokdataEvolutionPreviousMain);
    pokdataEvolutionPreviousMain.appendChild(pokdataEvolutionPreviousButton);
    pokdataEvolutionPreviousMain.appendChild(pokdataEvolutionPreviousDescription);
    pokdataEvolutionPreviousButton.appendChild(pokdataEvolutionPreviousName);
    pokdataEvolutionPreviousContent.appendChild(pokdataEvolutionPreviousToggle);
    pokdataEvolutionPreviousToggle.appendChild(pokdataEvolutionPreviousImg);

    
 

}



for (var q = 0; q < evonext; q++) {

    var pokdataEvolutionNext = document.createElement("div");
    var pokdataEvolutionNextContent = document.createElement("div");
    var pokdataEvolutionNextMain = document.createElement("main");
    var pokdataEvolutionNextButton = document.createElement("button");
    var pokdataEvolutionNextIDNational = document.createElement("h6");
    var pokdataEvolutionNextName = document.createElement("h4");
    var pokdataEvolutionNextDescription = document.createElement("p");
    var pokdataEvolutionNextToggle = document.createElement("div");
    var pokdataEvolutionNextImg = document.createElement("img");
   
   
    pokdataEvolutionNext.classList.add("pokdata-evolution");
    pokdataEvolutionNext.setAttribute("name","next-" + (q+1) + "/" + evonext)
    pokdataEvolutionNextContent.classList.add("pokdata-evolution-content");
    pokdataEvolutionNextMain
    pokdataEvolutionNextButton.classList.add("pokdata-modal-close-open")
    pokdataEvolutionNextButton.value = getPokémonID(Next);
    pokdataEvolutionNextImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonID(Next) + ".png";
    pokdataEvolutionNextImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
   
    pokdataEvolutionNextIDNational.innerText = "#" + getPokémonID(Next);
    
    pokdataEvolutionNextName.classList.add("pokdata-evolution-name");
    pokdataEvolutionNextName.innerText = Next;
    pokdataEvolutionNextToggle.classList.add("pokdata-evolution-toggle");
    pokdataEvolutionNextToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active');");


    if (PreviousNext != "") {
        if(PreviousNext.length >= 1) {
            for (var u = 0; u < PreviousNext.split(",").length; u++) {
                pokdataEvolutionNextDescription.innerHTML += "Evolve "+PreviousNext.split(",")[u]+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod+"<br>";
            }
        }
        else {
            for (var u = 0; u < 1; u++) {
                pokdataEvolutionNextDescription.innerHTML += "Evolve "+NextPrevious.split(",")[u]+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod+"<br>";
            }
        }
    }
    else {
        pokdataEvolutionNextDescription.innerHTML = "Evolve "+NextPrevious+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod;
    }
      

    pokdataEvolutionNextButton.appendChild(pokdataEvolutionNextIDNational);
   
    pokdataDivContent.appendChild(pokdataEvolutionNext);
    pokdataEvolutionNext.appendChild(pokdataEvolutionNextContent);
    pokdataEvolutionNextContent.appendChild(pokdataEvolutionNextToggle);
    pokdataEvolutionNextToggle.appendChild(pokdataEvolutionNextImg);

    pokdataEvolutionNextContent.appendChild(pokdataEvolutionNextMain);
    pokdataEvolutionNextMain.appendChild(pokdataEvolutionNextButton);
    pokdataEvolutionNextButton.appendChild(pokdataEvolutionNextName);
    pokdataEvolutionNextMain.appendChild(pokdataEvolutionNextDescription);


}


*/



document.getElementById("pokdata").appendChild(pokdataDiv);
pokdataDiv.appendChild(pokdataDivOverlay);
pokdataDiv.appendChild(pokdataDivContent);

pokdataDivContent.appendChild(pokdataForm);


pokdataDivContent.appendChild(pokdataAside1);
pokdataAside1.appendChild(pokdataAside1DivPortrait);
pokdataAside1DivPortrait.appendChild(pokdataAside1DivPortraitContent);
pokdataAside1DivPortraitContent.appendChild(pokdataAside1Portrait);

pokdataAside2MetadataStats.appendChild(pokdataAside1StatsEVSelector);

pokdataAside1.appendChild(pokdataAside1DivIdNameOuter);
pokdataAside1DivIdNameOuter.appendChild(pokdataAside1DivIdName);
pokdataAside1DivIdName.appendChild(pokdataAside1IDNational);
pokdataAside1DivIdName.appendChild(pokdataAside1DivIdNameBreak);
pokdataAside1DivIdName.appendChild(pokdataAside1Name);
pokdataAside1.appendChild(pokdataAside1DebutCategoryOuter);
pokdataAside1DebutCategoryOuter.appendChild(pokdataAside1DebutCategory);
pokdataAside1DebutCategory.appendChild(pokdataAside1Category);
pokdataAside1DebutCategory.appendChild(pokdataAside1DebutCategoryBreak);
pokdataAside1DebutCategory.appendChild(pokdataAside1Debut);
pokdataAside1DebutCategoryOuter.appendChild(pokdataAside1Type);


pokdataDivContent.appendChild(pokdataAside2);

pokdataAside2AreaDiv.appendChild(pokdataAside2MapContain);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomReset);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomOut);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomIn);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomFullscreen);
pokdataAside2MapContain.appendChild(pokdataAside2Map);
pokdataAside2Map.appendChild(pokdataAside2MapPanzoom);
pokdataAside2MapPanzoom.appendChild(pokdataAside2MapImage);
pokdataAside2MapPanzoom.appendChild(pokdataAside2MapMark);
pokdataAside2MapMark.appendChild(pokdataAside2MapMarkImage);


pokdataDivContent.appendChild(pokdataAside2);
pokdataAside2.appendChild(pokdataNavigation);
pokdataAside2.appendChild(pokdataAside2Metadata);
pokdataAside2Metadata.appendChild(pokdataAside2DescriptionOuter);
pokdataAside2DescriptionOuter.appendChild(pokdataAside2Description);
pokdataAside2MetadataSidebarOuter.appendChild(pokdataAside2MetadataStats);


var pokdataAside2MetadataPopup = document.createElement("div");
var pokdataAside2MetadataPopupOuter = document.createElement("div");

var pokdataAside2MetadataPopupSpan1 = document.createElement("span");
var pokdataAside2MetadataPopupSpan1ID = document.createElement("h4");
var pokdataAside2MetadataPopupSpan1Icon = document.createElement("img");
var pokdataAside2MetadataPopupSpan2 = document.createElement("span");
var pokdataAside2MetadataPopupSpan2Title = document.createElement("h2");
var pokdataAside2MetadataPopupSpan2Description = document.createElement("p");

var pokdataAside2MetadataPopupTitleExit1 = document.createElement("button");
var pokdataAside2MetadataPopupTitleExit2 = document.createElement("button");

var pokdataAside2MetadataPopupListOuter = document.createElement("div");
var pokdataAside2MetadataPopupList = document.createElement("ul");

pokdataAside2MetadataPopup.classList.add("pokdata-metadata-popup");
pokdataAside2MetadataPopupListOuter.setAttribute("name","list");
pokdataAside2MetadataPopupTitleExit1.innerHTML = "<p>«</p>";
pokdataAside2MetadataPopupTitleExit1.setAttribute("name","up");
pokdataAside2MetadataPopupTitleExit2.innerHTML = "<p>»</p>";
pokdataAside2MetadataPopupTitleExit2.setAttribute("name","down");

pokdataAside2Metadata.appendChild(pokdataAside2MetadataPopup);
pokdataAside2MetadataPopup.appendChild(pokdataAside2MetadataPopupOuter);
pokdataAside2MetadataPopupOuter.appendChild(pokdataAside2MetadataPopupSpan1);
pokdataAside2MetadataPopupSpan1.appendChild(pokdataAside2MetadataPopupSpan1ID);
pokdataAside2MetadataPopupSpan1.appendChild(pokdataAside2MetadataPopupSpan1Icon);
pokdataAside2MetadataPopupOuter.appendChild(pokdataAside2MetadataPopupSpan2);
pokdataAside2MetadataPopupSpan2.appendChild(pokdataAside2MetadataPopupSpan2Title);
pokdataAside2MetadataPopupSpan2.appendChild(pokdataAside2MetadataPopupSpan2Description);
pokdataAside2MetadataPopupOuter.appendChild(pokdataAside2MetadataPopupTitleExit1);
pokdataAside2MetadataPopupOuter.appendChild(pokdataAside2MetadataPopupTitleExit2);
pokdataAside2MetadataPopup.appendChild(pokdataAside2MetadataPopupListOuter);
pokdataAside2MetadataPopupListOuter.appendChild(pokdataAside2MetadataPopupList);



pokdataAside2Metadata.appendChild(pokdataAside2MetadataSidebarOuter);
pokdataAside2MetadataSidebarOuter.appendChild(pokdataAside2MetadataSidebar);





pokdataAside2MetadataSidebarCatchRateOuter.appendChild(pokdataAside2MetadataSidebarCatchRateToggle);
pokdataAside2MetadataSidebarCatchRateToggle.appendChild(pokdataAside2MetadataSidebarCatchRateContent);
pokdataAside2MetadataSidebarCatchRateContent.appendChild(pokdataAside2MetadataSidebarCatchRateTitle);
pokdataAside2MetadataSidebarCatchRateContent.appendChild(pokdataAside2MetadataSidebarCatchRate);

pokdataAside2MetadataSidebarRow4.appendChild(pokdataAside2MetadataSidebarExpYieldOuter);
pokdataAside2MetadataSidebarExpYieldOuter.appendChild(pokdataAside2MetadataSidebarExpYieldToggle);
pokdataAside2MetadataSidebarExpYieldToggle.appendChild(pokdataAside2MetadataSidebarExpYieldContent);
pokdataAside2MetadataSidebarExpYieldContent.appendChild(pokdataAside2MetadataSidebarExpYieldTitle);
pokdataAside2MetadataSidebarExpYieldContent.appendChild(pokdataAside2MetadataSidebarExpYield);

pokdataAside2MetadataSidebarRow4.appendChild(pokdataAside2MetadataSidebarLevelRateOuter);
pokdataAside2MetadataSidebarLevelRateOuter.appendChild(pokdataAside2MetadataSidebarLevelRateToggle);
pokdataAside2MetadataSidebarLevelRateToggle.appendChild(pokdataAside2MetadataSidebarLevelRateContent);
pokdataAside2MetadataSidebarLevelRateContent.appendChild(pokdataAside2MetadataSidebarLevelRateTitle);
pokdataAside2MetadataSidebarLevelRateContent.appendChild(pokdataAside2MetadataSidebarLevelRate);





var baseev = ["Base Stats","EV Yield"];
for (var q = 0; q < baseev.length; q++) {
    var pokdataAside1StatsEVSelectorInput = document.createElement("input");
    var pokdataAside1StatsEVSelectorLabel = document.createElement("label");
    pokdataAside1StatsEVSelectorInput.setAttribute("type","radio");
    pokdataAside1StatsEVSelectorInput.setAttribute("name","pokdata-baseev-"+id);
    pokdataAside1StatsEVSelectorInput.setAttribute("id","pokdata-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
    pokdataAside1StatsEVSelectorInput.setAttribute("alt",baseev[q].toLowerCase().replace(" ",""));
    pokdataAside1StatsEVSelectorInput.setAttribute("value",q);
    pokdataAside1StatsEVSelectorInput.setAttribute("onclick","var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');var node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='flex';");
    pokdataAside1StatsEVSelectorLabel.setAttribute("for","pokdata-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
    pokdataAside1StatsEVSelectorLabel.innerText = baseev[q];
    pokdataAside1StatsEVSelector.appendChild(pokdataAside1StatsEVSelectorInput);
    pokdataAside1StatsEVSelector.appendChild(pokdataAside1StatsEVSelectorLabel);

    if (q == 0) {
        pokdataAside1StatsEVSelectorInput.setAttribute("checked","");
    }
    
    var pokdataAside1StatsEVUl = document.createElement("ul");
    pokdataAside1StatsEVUl.setAttribute("name",baseev[q].toLowerCase().replace(" ",""))
    pokdataAside2MetadataStats.appendChild(pokdataAside1StatsEVUl);

    for (var u = 0; u < Stats.length; u++) {
        var pokdataAside1StatEV = document.createElement("div");
        var pokdataAside1StatEVValue = document.createElement("li");
        var pokdataAside1StatsEVSpan = document.createElement("span");
        pokdataAside1StatEV.setAttribute("name",Stats[u].toLowerCase().replace(" ","").replace(".",""));
        pokdataAside1StatEV.innerText = Stats[u];
        pokdataAside1StatEV.setAttribute("dataname","value");
        pokdataAside1StatEVValue.classList.add(baseev[q].toLowerCase().replace(" ","")+"-"+Stats[u].toLowerCase().replace(" ","").replace(".",""));

        pokdataAside1StatsEVSpan.setAttribute("dataname","value");
        pokdataAside1StatsEVSpan.setAttribute("value","");
        pokdataAside1StatsEVUl.appendChild(pokdataAside1StatEV);
        pokdataAside1StatsEVUl.appendChild(pokdataAside1StatEVValue);
        pokdataAside1StatEVValue.appendChild(pokdataAside1StatsEVSpan);
    }    
}







var pokdataAside2LearnsetDiv = document.createElement("div");
var pokdataAside2Learnset = document.createElement("div");



pokdataAside2LearnsetDiv.classList.add("pokdata-learnset");
pokdataAside2LearnsetDiv.setAttribute("id","pokdata-learnset"+id);
pokdataAside2Learnset.classList.add("pokdata-learnset-content");
pokdataAside2.appendChild(pokdataAside2LearnsetDiv);
pokdataAside2LearnsetDiv.appendChild(pokdataAside2Learnset);









var pokdataAside2LearnsetOuter = document.createElement("div");

var pokdataAside2LearnsetUl = document.createElement("ul");
var pokdataAside2LearnsetTitle = document.createElement("h5");
var pokdataAside2LearnsetTitleLi = document.createElement("li");

pokdataAside2LearnsetOuter.setAttribute("id","pokdata-learnset-option");
pokdataAside2LearnsetOuter.classList.add("pokdata-learnset-option");
pokdataAside2Learnset.appendChild(pokdataAside2LearnsetOuter);

pokdataAside2LearnsetOuter.appendChild(pokdataAside2LearnsetTitle);
pokdataAside2LearnsetTitle.appendChild(pokdataAside2LearnsetTitleLi);

pokdataAside2LearnsetOuter.appendChild(pokdataAside2LearnsetUl);



var categoriez = ["Source","Move","Type","Category","Power","Accuracy","PP"];
for (u = 0; u < categoriez.length; u++) {
    var pokdataAside2LearnsetTitleLiText = document.createElement("p");
    pokdataAside2LearnsetTitleLiText.innerText = categoriez[u];
    pokdataAside2LearnsetTitleLi.appendChild(pokdataAside2LearnsetTitleLiText);
}




pokdataAside2.appendChild(pokdataAside2AreaDiv);
pokdataAside2AreaDiv.appendChild(pokdataAside2Area);
pokdataAside2Area.appendChild(pokdataAside2AreaTitle);
pokdataAside2Area.appendChild(pokdataAside2AreaText);



if (HeldItem == true) {

var pokdataAside2MetadataSidebarRow5 = document.createElement("div");

var pokdataAside2MetadataSidebarHeldItemOuter = document.createElement("span");
var pokdataAside2MetadataSidebarHeldItemTitle = document.createElement("h5");

pokdataAside2MetadataSidebarHeldItemOuter.classList.add("pokdata-metadata-sidebar-helditem");
pokdataAside2MetadataSidebarHeldItemOuter.setAttribute("name","Held Item");
pokdataAside2MetadataSidebarHeldItemTitle.innerText = "Held Item";

pokdataAside2MetadataSidebar.appendChild(pokdataAside2MetadataSidebarRow5);
pokdataAside2MetadataSidebarRow5.appendChild(pokdataAside2MetadataSidebarHeldItemOuter);
pokdataAside2MetadataSidebarHeldItemOuter.appendChild(pokdataAside2MetadataSidebarHeldItemTitle);

var pokdataAside2MetadataSidebarHeldItem = document.createElement("div");
pokdataAside2MetadataSidebarHeldItem.classList.add("pokdata-metadata-sidebar-helditem-img-outer");
pokdataAside2MetadataSidebarHeldItemOuter.appendChild(pokdataAside2MetadataSidebarHeldItem);

for (q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
    var pokdataAside2MetadataSidebarHeldItemImg = document.createElement("img");
    pokdataAside2MetadataSidebarHeldItemImg.src = "";
    pokdataAside2MetadataSidebarHeldItemImg.title = "";
    pokdataAside2MetadataSidebarHeldItemImg.setAttribute("name",JSONPath_HeldItemPercentage[q]);
    pokdataAside2MetadataSidebarHeldItemImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    pokdataAside2MetadataSidebarHeldItemImg.setAttribute("dataname","value");
    pokdataAside2MetadataSidebarHeldItem.appendChild(pokdataAside2MetadataSidebarHeldItemImg);

}

}




    pokdataAside1TypePrimaryImg.addEventListener("click", function(){callPopUp(id,finaldataPokémonType,"Type","Single")});
    pokdataAside1TypeSecondaryImg.addEventListener("click", function(){callPopUp(id,finaldataPokémonType,"Type","Single")});




if (Ability.length >= 1) {
    pokdataAside2MetadataSidebarAbilityPrimary.addEventListener("click", function(){callPopUp(id,finaldataPokémonAbility,"Ability","Single")});
    pokdataAside2MetadataSidebarAbilitySecondary.addEventListener("click", function(){callPopUp(id,finaldataPokémonAbility,"Ability","Single")});

    if (Ability.length >= 3) {
        pokdataAside2MetadataSidebarAbilityHidden.addEventListener("click", function(){callPopUp(id,finaldataPokémonAbility,"Ability","Single")});
    }                                                                                               
}


if (Egg == true) {
    pokdataAside2MetadataSidebarEggGroupPrimary.addEventListener("click", function(){callPopUp(id,finaldataPokémonEggGroup,"Egg Group","Single")});
    pokdataAside2MetadataSidebarEggGroupSecondary.addEventListener("click", function(){callPopUp(id,finaldataPokémonEggGroup,"Egg Group","Single")});
}

pokdataAside2MetadataSidebarCatchRateOuter.addEventListener("click", function(){callPopUp(id,finaldataPokémonCatchRate,"Catch Rate","Single")});

if (pokdataAside2MetadataSidebarHatchRateOuter != undefined) {
    pokdataAside2MetadataSidebarHatchRateOuter.addEventListener("click", function(){callPopUp(id,finaldataPokémonHatchRate,"Hatch Rate","Single")});
}

pokdataAside2MetadataSidebarGenderRatioToggle.addEventListener("click", function(){callPopUp(id,finaldataPokémonGenderRatio,"Gender Ratio","Custom2")});
pokdataAside2MetadataSidebarExpYieldOuter.addEventListener("click", function(){callPopUp(id,finaldataPokémonExperienceYield,"Experience Yield","Custom1")});
pokdataAside2MetadataSidebarLevelRateOuter.addEventListener("click", function(){callPopUp(id,finaldataPokémonLevelingRate,"Leveling Rate","Single")});

var helditm = document.querySelectorAll("#pokdata-modal"+id+" .pokdata-metadata-sidebar-helditem-img-outer > img");
for (q = 0; q < helditm.length; q++) {
    helditm[q].addEventListener("click", function(){callPopUp(id,finaldataPokémonHeldItem,"Held Item","Single")});
}

pokdataAside2MetadataPopupTitleExit1.querySelector(":scope > p").addEventListener("click", function(){OpenExitPopUp(id,false)});
pokdataAside2MetadataPopupTitleExit2.querySelector(":scope > p").addEventListener("click", function(){OpenExitPopUp(id,true)});


showMetadataLearnsetArea();


var baseEV = document.querySelectorAll("#pokdata-modal"+id+" .pokdata-metadata-stats > ul li span");
for (q = 0; q < baseEV.length; q++) {
    if (baseEV[q].parentElement.parentElement.getAttribute("name") == "basestats") {
        baseEV[q].addEventListener("click", function(){callPopUp(id,finaldataPokémonBaseStats,"Base Stats","Multiple")});
    }
    else if (baseEV[q].parentElement.parentElement.getAttribute("name") == "evyield") {
        baseEV[q].addEventListener("click", function(){callPopUp(id,finaldataPokémonEVYield,"EV Yield","Multiple")});
    }
}


var baseEVTotal = document.querySelectorAll("#pokdata-modal"+id+" .pokdata-metadata-stats > ul div");
for (q = 0; q < baseEVTotal.length; q++) {
    if (baseEVTotal[q].parentElement.getAttribute("name") == "basestats") {
        baseEVTotal[q].addEventListener("click", function(){callPopUp(id,finaldataPokémonBaseStats,"Base Stats","Total")});
    }
    else if (baseEVTotal[q].parentElement.getAttribute("name") == "evyield") {
        baseEVTotal[q].addEventListener("click", function(){callPopUp(id,finaldataPokémonEVYield,"EV Yield","Total")});
    }
}



}






$('body').click(function(event) {
    if (!$(event.target).closest('.pokdata-evolution[name*="previous"]').length && !$(event.target).is('.pokdata-evolution[name*="previous"]')) {
        $('.pokdata-evolution[name*="previous"] main').removeClass("active");
    }
    if (!$(event.target).closest('.pokdata-evolution[name*="next"]').length && !$(event.target).is('.pokdata-evolution[name*="next"]')) {
        $('.pokdata-evolution[name*="next"] main').removeClass("active");
    }
});



var navChecker = [1];

function showMetadataLearnsetArea() {
    var MetadataButton = document.querySelectorAll('#pokdata-navigation input[value="1"]');
    
    for (var i = 0; i < MetadataButton.length; i++) {
        MetadataButton[i].addEventListener("click", function() {
            this.parentElement.nextElementSibling.style.display = "flex";
            this.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
            this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
            navChecker.fill(1);
        });
    }
    var LearnsetButton = document.querySelectorAll('#pokdata-navigation input[value="2"]');
    
    for (var i = 0; i < LearnsetButton.length; i++) {
        LearnsetButton[i].addEventListener("click", function() {
            this.parentElement.nextElementSibling.style.display = "none";
            this.parentElement.nextElementSibling.nextElementSibling.style.display = "flex";
            this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
            navChecker.fill(2);
        });
    }

    var AreaButton = document.querySelectorAll('#pokdata-navigation input[value="3"]');
    
    for (var i = 0; i < AreaButton.length; i++) {
        AreaButton[i].addEventListener("click", function() {
            this.parentElement.nextElementSibling.style.display = "none";
            this.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
            this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "flex";
            navChecker.fill(3);
        });
    }
}


function navKeeper(id) {

    var MetadataButton = document.querySelector('#pokdata-modal'+id+' #pokdata-navigation input[value="1"]');
    var LearnsetButton = document.querySelector('#pokdata-modal'+id+' #pokdata-navigation input[value="2"]');
    var AreaButton = document.querySelector('#pokdata-modal'+id+' #pokdata-navigation input[value="3"]');


    if (navChecker == 1) {
        MetadataButton.click();
    }
    if (navChecker == 2) {
        LearnsetButton.click();
    }
    if (navChecker == 3) {
        AreaButton.click();
    }
}



function resetZoom(id) {
    var Zoom = document.querySelector("#pokdata-modal"+id+" .pokdata-zoom-reset");
    Zoom.click();
}


