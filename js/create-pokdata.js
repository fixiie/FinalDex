var createPokData = function(i,x) {

var defaultID = finaldataReferenceDefault[i]["ID"];
var defaultName = finaldataReferenceDefault[i]["Pokémon"];
var defaultCategory = finaldataCategoryDefault[i][JSONPath_Category];
var defaultDebutGeneration = finaldataReferenceDefault[i]["Generation"];
var defaultTypePrimary = finaldataTypeDefault[i]["Primary_"+JSONPath_Type];
var defaultTypeSecondary = finaldataTypeDefault[i]["Secondary_"+JSONPath_Type];
var defaultPokédexEntry = finaldataPokédexEntryDefault[i][JSONPath_PokédexEntry];
var defaultAbilityPrimary = finaldataAbilityDefault[i]["Primary_"+JSONPath_Ability];
var defaultAbilitySecondary = finaldataAbilityDefault[i]["Secondary_"+JSONPath_Ability];
var defaultAbilityHidden = finaldataAbilityDefault[i]["Hidden_"+JSONPath_Ability];
var defaultCatchRate = finaldataCatchRateDefault[i][JSONPath_CatchRate];
var defaultLevelingRate = finaldataLevelingRateDefault[i][JSONPath_LevelingRate];
var defaultGenderRatioMale = finaldataGenderRatioDefault[i]["Male_"+JSONPath_GenderRatio];
var defaultGenderRatioFemale = finaldataGenderRatioDefault[i]["Female_"+JSONPath_GenderRatio];
var defaultEggGroupPrimary = finaldataEggGroupDefault[i]["Primary_"+JSONPath_EggGroup];
var defaultEggGroupSecondary = finaldataEggGroupDefault[i]["Secondary_"+JSONPath_EggGroup];
var defaultHatchRateEggCycle = finaldataHatchRateDefault[i]["Egg Cycle_"+JSONPath_HatchRateEggCycle];
var defaultHatchRateSteps = finaldataHatchRateDefault[i]["Steps_"+JSONPath_HatchRateSteps];
var defaultExperienceYield = finaldataExperienceYieldDefault[i][JSONPath_ExperienceYield];
var defaultBaseStatsHP = finaldataBaseStatsDefault[i]["HP_"+JSONPath_BaseStats];
var defaultBaseStatsAtk = finaldataBaseStatsDefault[i]["Attack_"+JSONPath_BaseStats];
var defaultBaseStatsDef = finaldataBaseStatsDefault[i]["Defense_"+JSONPath_BaseStats];
var defaultBaseStatsSpecial = finaldataBaseStatsDefault[i]["Special_"+JSONPath_BaseStats];
var defaultBaseStatsSpAtk = finaldataBaseStatsDefault[i]["Sp. Atk_"+JSONPath_BaseStats];
var defaultBaseStatsSpDef = finaldataBaseStatsDefault[i]["Sp. Def_"+JSONPath_BaseStats];
var defaultBaseStatsSpeed = finaldataBaseStatsDefault[i]["Speed_"+JSONPath_BaseStats];
var defaultBaseStatsTotal = finaldataBaseStatsDefault[i]["Total_"+JSONPath_BaseStats];

var defaultEVYieldHP = finaldataEVYieldDefault[i]["HP_"+JSONPath_EVYield];
var defaultEVYieldAtk = finaldataEVYieldDefault[i]["Attack_"+JSONPath_EVYield];
var defaultEVYieldDef = finaldataEVYieldDefault[i]["Defense_"+JSONPath_EVYield];
var defaultEVYieldSpecial = finaldataEVYieldDefault[i]["Special_"+JSONPath_EVYield];
var defaultEVYieldSpAtk = finaldataEVYieldDefault[i]["Sp. Atk_"+JSONPath_EVYield];
var defaultEVYieldSpDef = finaldataEVYieldDefault[i]["Sp. Def_"+JSONPath_EVYield];
var defaultEVYieldSpeed = finaldataEVYieldDefault[i]["Speed_"+JSONPath_EVYield];
var defaultEVYieldTotal = finaldataEVYieldDefault[i]["Total_"+JSONPath_EVYield];



if (Generation == 1) {
    var catchRateFormula = Math.round(((Math.min(parseInt(defaultCatchRate)+1,256))/256*(85+1/256)/256*100)*10)/10;
}
if (Generation == 2) {
    var catchRateFormula = Math.round(((Math.max(parseInt(defaultCatchRate)/3,1)+1)/256*100)*10)/10;
}
if (Generation == 3 || Generation == 4) {
    var catchRateFormula = Math.round(((65535/Math.sqrt(Math.sqrt(255/(parseInt(defaultCatchRate)/3)))/65536)**4*100)*10)/10;
}
if (Generation >= 5) {
    var catchRateFormula = Math.round(((65536/Math.sqrt(Math.sqrt(255/(parseInt(defaultCatchRate)/3)))/65536)**3*100)*10)/10;
}

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

var pokdataAside1 = document.createElement("aside");
var pokdataAside1DivPortrait = document.createElement("div");
var pokdataAside1DivPortraitContent = document.createElement("div");
var pokdataAside1Portrait = document.createElement("img");

var pokdataAside1StatsEV = document.createElement("div");
var pokdataAside1StatsEVName = document.createElement("div");
var pokdataAside1StatsEVSelector = document.createElement("div");
var pokdataAside1OtherSelector = document.createElement("div");

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

var pokdataAside3 = document.createElement("aside");


var pokdataAside3Metadata = document.createElement("div");
var pokdataAside3DescriptionOuter = document.createElement("div");
var pokdataAside3Description = document.createElement("p");

var pokdataAside3MetadataSpan1 = document.createElement("span");
var pokdataAside3MetadataSpan2 = document.createElement("span");

var pokdataAside3MetadataSidebarOuter = document.createElement("div");
var pokdataAside3MetadataSidebar = document.createElement("div");

var pokdataAside3MetadataSidebarForm = document.createElement("div");

var pokdataAside3MetadataSidebarRow1 = document.createElement("div");
var pokdataAside3MetadataSidebarRow2 = document.createElement("div");
var pokdataAside3MetadataSidebarRow3 = document.createElement("div");
var pokdataAside3MetadataSidebarRow4 = document.createElement("div");



var pokdataAside3MetadataSidebarCatchRateOuter = document.createElement("span");
var pokdataAside3MetadataSidebarCatchRateToggle = document.createElement("span");
var pokdataAside3MetadataSidebarCatchRateContent = document.createElement("p");
var pokdataAside3MetadataSidebarCatchRateTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarCatchRate = document.createElement("h3");

var pokdataAside3MetadataSidebarLevelRateOuter = document.createElement("span");
var pokdataAside3MetadataSidebarLevelRateToggle = document.createElement("span");
var pokdataAside3MetadataSidebarLevelRateContent = document.createElement("p");
var pokdataAside3MetadataSidebarLevelRateTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarLevelRate = document.createElement("h3");

var pokdataAside3MetadataSidebarExpYieldOuter = document.createElement("span");
var pokdataAside3MetadataSidebarExpYieldToggle = document.createElement("span");
var pokdataAside3MetadataSidebarExpYieldContent = document.createElement("p");
var pokdataAside3MetadataSidebarExpYieldTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarExpYield = document.createElement("h3");



var pokdataAside3AreaDiv = document.createElement("div");
var pokdataAside3Area = document.createElement("div");
var pokdataAside3AreaTitle = document.createElement("h4");
var pokdataAside3AreaText = document.createElement("p");




pokdataDiv.setAttribute("id","pokdata-modal" + x);
pokdataDiv.classList.add("pokdata-modal-outer");
pokdataDivOverlay.classList.add("pokdata-modal-overlay");
pokdataDivOverlay.classList.add("pokdata-modal-close");
pokdataDivContent.classList.add("pokdata-modal");
pokdataNavigation.setAttribute("id","pokdata-navigation");

var navz = ["metadata","learnset","area"];
var navztitles = ["Pokédex","Learnset","Area"];
for (var q = 0; q < navz.length; q++) {
    var pokdataNavigationInput = document.createElement("input");
    var pokdataNavigationLabel = document.createElement("label");
    pokdataNavigationInput.setAttribute("type","radio");
    pokdataNavigationInput.setAttribute("name","pokdata-navigation" + x);
    pokdataNavigationInput.setAttribute("id","pokdata-navigation-" + navz[q] + x);
    pokdataNavigationInput.classList.add("pokdata-navigation-" + navz[q]);
    pokdataNavigationInput.setAttribute("value",q + 1);
    if (q == 0) {
        pokdataNavigationInput.setAttribute("checked",""); 
    }
    pokdataNavigationLabel.setAttribute("for","pokdata-navigation-" + navz[q] + x);
    pokdataNavigationLabel.innerText = navztitles[q];
    pokdataNavigation.appendChild(pokdataNavigationInput);
    pokdataNavigation.appendChild(pokdataNavigationLabel);
}


pokdataAside1.classList.add("pokdata-aside1");
pokdataAside1DivPortrait.classList.add("pokdata-portrait");
pokdataAside1DivPortraitContent.classList.add("pokdata-portrait-content");
pokdataAside1DivPortraitContent.setAttribute("onclick","this.nextElementSibling.classList.toggle('active');this.firstChild.classList.toggle('active')");
pokdataAside1Portrait.src = "./media/Images/Pokémon/Art/HOME/" + x + ".png";
pokdataAside1Portrait.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
pokdataAside1Portrait.setAttribute("id","pokdata-portrait-img-" + x);

pokdataAside1StatsEV.classList.add("pokdata-basestats");
pokdataAside1StatsEVName.classList.add("basename");
pokdataAside1StatsEVName.innerHTML = defaultName;

pokdataAside1StatsEVSelector.classList.add("pokdata-baseev-selector");
pokdataAside1OtherSelector.classList.add("pokdata-baseev-selector");

pokdataAside1DivIdNameOuter.classList.add("pokdata-idname-outer");
pokdataAside1DivIdName.classList.add("pokdata-idname");
pokdataAside1IDNational.classList.add("pokdata-nationalID");
pokdataAside1IDNational.innerText = "#" + defaultID;



pokdataAside1Name.classList.add("pokdata-name");
pokdataAside1Name.innerText = defaultName;
pokdataAside1DebutCategoryOuter.classList.add("pokdata-debutcategorytype-outer");
pokdataAside1DebutCategory.classList.add("pokdata-debutcategory");
pokdataAside1Debut.classList.add("pokdata-debut");
pokdataAside1Debut.innerText = "Introduced in " + defaultDebutGeneration;
pokdataAside1Category.classList.add("pokdata-category");
pokdataAside1Category.innerText = '"' + defaultCategory + ' Pokémon"';

pokdataAside1Type.classList.add("pokdata-type");

if (defaultTypePrimary != undefined) {
    var pokdataAside1TypePrimaryOuter = document.createElement("span");
    var pokdataAside1TypePrimary = document.createElement("span");
    var pokdataAside1TypePrimaryImg = document.createElement("img");
    var pokdataAside1TypePrimaryText = document.createElement("h3");
    pokdataAside1TypePrimary.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
    pokdataAside1TypePrimaryImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + defaultTypePrimary + ".png";
    pokdataAside1TypePrimaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';this.parentElement.parentElement.parentElement.lastElementChild.classList.add('error');");
    pokdataAside1TypePrimaryImg.title = defaultTypePrimary;
    pokdataAside1TypePrimaryText.innerText = defaultTypePrimary;
    pokdataAside1Type.appendChild(pokdataAside1TypePrimaryOuter);
    pokdataAside1TypePrimaryOuter.appendChild(pokdataAside1TypePrimary);
    pokdataAside1TypePrimary.appendChild(pokdataAside1TypePrimaryImg);
    pokdataAside1TypePrimary.appendChild(pokdataAside1TypePrimaryText);


    var pokdataAside1TypePrimaryCompare = document.createElement("div");
    var pokdataAside1TypePrimaryCompareTitle = document.createElement("span");
    var pokdataAside1TypePrimaryCompareTitleText = document.createElement("h2");
    var pokdataAside1TypePrimaryCompareOptions = document.createElement("div");
    var pokdataAside1TypePrimaryCompareUl = document.createElement("ul");
    
    pokdataAside1TypePrimaryCompare.setAttribute("id","pokdata-metadata-sidebar-type-compare");
    pokdataAside1TypePrimaryCompareTitle.setAttribute("name",defaultTypePrimary);
    pokdataAside1TypePrimaryCompareTitleText.innerText = defaultTypePrimary;
    pokdataAside1TypePrimaryCompareOptions.classList.add("pokdata-metadata-sidebar-type-compare-options");
    
    pokdataAside1TypePrimaryOuter.appendChild(pokdataAside1TypePrimaryCompare);
    pokdataAside1TypePrimaryCompare.appendChild(pokdataAside1TypePrimaryCompareTitle);
    pokdataAside1TypePrimaryCompareTitle.appendChild(pokdataAside1TypePrimaryCompareTitleText);
    pokdataAside1TypePrimaryCompareTitle.appendChild(pokdataAside1TypePrimaryCompareOptions);
    pokdataAside1TypePrimaryCompare.appendChild(pokdataAside1TypePrimaryCompareUl);
    
    
    for (var u = 0; u < 1; u++) {
    
        var pokdataAside1TypePrimaryCompareOptionsInput = document.createElement("input");
        var pokdataAside1TypePrimaryCompareOptionsLabel = document.createElement("label");
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("type","radio");
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-type-compare-option" + x + "-" + q);
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-type-compare-option" + x + "-" + q + "-" + u);
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("value","u");
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("alt","q");
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("autocomplete","off");
        pokdataAside1TypePrimaryCompareOptionsInput.setAttribute("checked","");
        
        pokdataAside1TypePrimaryCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-type-compare-option" + x + "-" + q + "-" + u);
        pokdataAside1TypePrimaryCompareOptionsLabel.innerText = "Other Pokémon";
    
        pokdataAside1TypePrimaryCompareOptions.appendChild(pokdataAside1TypePrimaryCompareOptionsInput);
        pokdataAside1TypePrimaryCompareOptions.appendChild(pokdataAside1TypePrimaryCompareOptionsLabel);
    }
    
    
    var JSONPath_TypePrimaryFull = ["Primary_"+JSONPath_Type,"Secondary_"+JSONPath_Type];
    var TypePrimaryResult = getPokémonData(finaldataTypeAll,defaultTypePrimary,JSONPath_TypePrimaryFull);
    
    for (var u = 0; u < TypePrimaryResult.length; u++) {
        var pokdataAside1TypePrimaryCompareLi = document.createElement("li");
        var pokdataAside1TypePrimaryCompareLiImgButton = document.createElement("button");
        var pokdataAside1TypePrimaryCompareLiImg = document.createElement("img");
        var pokdataAside1TypePrimaryCompareLiTypePrimaryOuter = document.createElement("span");
        pokdataAside1TypePrimaryCompareLiImgButton.classList.add("pokdata-modal-close-open");
        pokdataAside1TypePrimaryCompareLiImgButton.setAttribute("value",getPokémonID(TypePrimaryResult[u]["Pokémon"]));
        pokdataAside1TypePrimaryCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + TypePrimaryResult[u]["Folder Name"] + TypePrimaryResult[u]["File Name"] + ".png";
        pokdataAside1TypePrimaryCompareLiImg.setAttribute("name",TypePrimaryResult[u]["Folder Name"] + TypePrimaryResult[u]["File Name"]);
        pokdataAside1TypePrimaryCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    
        if (TypePrimaryResult[u]["Form"] != undefined) {
            pokdataAside1TypePrimaryCompareLiImg.setAttribute("title",TypePrimaryResult[u]["Form"]);
        }
        else {
            pokdataAside1TypePrimaryCompareLiImg.setAttribute("title",TypePrimaryResult[u]["Pokémon"]);
        }
    
    
        pokdataAside1TypePrimaryCompareUl.appendChild(pokdataAside1TypePrimaryCompareLi);
        pokdataAside1TypePrimaryCompareLi.appendChild(pokdataAside1TypePrimaryCompareLiImgButton);
        pokdataAside1TypePrimaryCompareLiImgButton.appendChild(pokdataAside1TypePrimaryCompareLiImg);
        pokdataAside1TypePrimaryCompareLi.appendChild(pokdataAside1TypePrimaryCompareLiTypePrimaryOuter);
    
        if (TypePrimaryResult[u]["Pokémon"] == getPokémonName(x)) {
            pokdataAside1TypePrimaryCompareLiImg.classList.add("select");
        }
    
        for (var p = 0; p < JSONPath_TypePrimaryFull.length; p++) {
            var pokdataAside1TypePrimaryCompareLiTypePrimaryText = document.createElement("p");
            var pokdataAside1TypePrimaryCompareLiTypePrimaryImg = document.createElement("img");


            if (MEDIAPath_Type_Text == undefined) {
                var pokdataAside1TypePrimaryCompareLiTypePrimaryText = document.createElement("p");
                if (TypePrimaryResult[u][JSONPath_TypePrimaryFull[p]] == undefined) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryText.innerText = "";
                }
                else {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryText.innerText = TypePrimaryResult[u][JSONPath_TypePrimaryFull[p]];
                }
                if (p == 0) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryText.setAttribute("title","Primary Type");
                }
                else if (p == 1) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryText.setAttribute("title","Secondary Type");
                }
                pokdataAside1TypePrimaryCompareLiTypePrimaryOuter.appendChild(pokdataAside1TypePrimaryCompareLiTypePrimaryText);
                if (TypePrimaryResult[u][JSONPath_TypePrimaryFull[p]] == defaultTypePrimary) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryText.classList.add("select");
                }
            }
            else {
                if (TypePrimaryResult[u][JSONPath_TypePrimaryFull[p]] == undefined) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryImg.src = "";
                }
                else {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + TypePrimaryResult[u][JSONPath_TypePrimaryFull[p]] + ".png";
                }

                if (p == 0) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryImg.setAttribute("title","Primary Type");
                }
                else if (p == 1) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryImg.setAttribute("title","Secondary Type");
                }
                pokdataAside1TypePrimaryCompareLiTypePrimaryOuter.appendChild(pokdataAside1TypePrimaryCompareLiTypePrimaryImg);
        
                if (TypePrimaryResult[u][JSONPath_TypePrimaryFull[p]] == defaultTypePrimary) {
                    pokdataAside1TypePrimaryCompareLiTypePrimaryImg.classList.add("select");
                }
            }
        }
    }
    
    


}
if (defaultTypeSecondary != undefined) {
    var pokdataAside1TypeSecondaryOuter = document.createElement("span");
    var pokdataAside1TypeSecondary = document.createElement("span");
    var pokdataAside1TypeSecondaryImg = document.createElement("img");
    var pokdataAside1TypeSecondaryText = document.createElement("h3");
    pokdataAside1TypeSecondary.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
    pokdataAside1TypeSecondaryImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + defaultTypeSecondary + ".png";
    pokdataAside1TypeSecondaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';this.parentElement.parentElement.parentElement.lastElementChild.classList.add('error');");
    pokdataAside1TypeSecondaryImg.title = defaultTypeSecondary;
    pokdataAside1TypeSecondaryText.innerText = defaultTypeSecondary;
    pokdataAside1Type.appendChild(pokdataAside1TypeSecondaryOuter);
    pokdataAside1TypeSecondaryOuter.appendChild(pokdataAside1TypeSecondary);
    pokdataAside1TypeSecondary.appendChild(pokdataAside1TypeSecondaryImg);
    pokdataAside1TypeSecondary.appendChild(pokdataAside1TypeSecondaryText);

    

var pokdataAside1TypeSecondaryCompare = document.createElement("div");
var pokdataAside1TypeSecondaryCompareTitle = document.createElement("span");
var pokdataAside1TypeSecondaryCompareTitleText = document.createElement("h2");
var pokdataAside1TypeSecondaryCompareOptions = document.createElement("div");
var pokdataAside1TypeSecondaryCompareUl = document.createElement("ul");

pokdataAside1TypeSecondaryCompare.setAttribute("id","pokdata-metadata-sidebar-type-compare");
pokdataAside1TypeSecondaryCompareTitle.setAttribute("name",defaultTypeSecondary);
pokdataAside1TypeSecondaryCompareTitleText.innerText = defaultTypeSecondary;
pokdataAside1TypeSecondaryCompareOptions.classList.add("pokdata-metadata-sidebar-type-compare-options");

pokdataAside1TypeSecondaryOuter.appendChild(pokdataAside1TypeSecondaryCompare);
pokdataAside1TypeSecondaryCompare.appendChild(pokdataAside1TypeSecondaryCompareTitle);
pokdataAside1TypeSecondaryCompareTitle.appendChild(pokdataAside1TypeSecondaryCompareTitleText);
pokdataAside1TypeSecondaryCompareTitle.appendChild(pokdataAside1TypeSecondaryCompareOptions);
pokdataAside1TypeSecondaryCompare.appendChild(pokdataAside1TypeSecondaryCompareUl);


for (var u = 0; u < 1; u++) {

    var pokdataAside1TypeSecondaryCompareOptionsInput = document.createElement("input");
    var pokdataAside1TypeSecondaryCompareOptionsLabel = document.createElement("label");
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("type","radio");
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-type-compare-option" + x + "-" + q);
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-type-compare-option" + x + "-" + q + "-" + u);
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("value","u");
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("alt","q");
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("autocomplete","off");
    pokdataAside1TypeSecondaryCompareOptionsInput.setAttribute("checked","");
    
    pokdataAside1TypeSecondaryCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-type-compare-option" + x + "-" + q + "-" + u);
    pokdataAside1TypeSecondaryCompareOptionsLabel.innerText = "Other Pokémon";

    pokdataAside1TypeSecondaryCompareOptions.appendChild(pokdataAside1TypeSecondaryCompareOptionsInput);
    pokdataAside1TypeSecondaryCompareOptions.appendChild(pokdataAside1TypeSecondaryCompareOptionsLabel);
}


var JSONPath_TypeSecondaryFull = ["Primary_"+JSONPath_Type,"Secondary_"+JSONPath_Type];
var TypeSecondaryResult = getPokémonData(finaldataTypeAll,defaultTypeSecondary,JSONPath_TypeSecondaryFull);

for (var u = 0; u < TypeSecondaryResult.length; u++) {
    var pokdataAside1TypeSecondaryCompareLi = document.createElement("li");
    var pokdataAside1TypeSecondaryCompareLiImgButton = document.createElement("button");
    var pokdataAside1TypeSecondaryCompareLiImg = document.createElement("img");
    var pokdataAside1TypeSecondaryCompareLiTypeSecondaryOuter = document.createElement("span");
    pokdataAside1TypeSecondaryCompareLiImgButton.classList.add("pokdata-modal-close-open");
    pokdataAside1TypeSecondaryCompareLiImgButton.setAttribute("value",getPokémonID(TypeSecondaryResult[u]["Pokémon"]));
    pokdataAside1TypeSecondaryCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + TypeSecondaryResult[u]["Folder Name"] + TypeSecondaryResult[u]["File Name"] + ".png";
    pokdataAside1TypeSecondaryCompareLiImg.setAttribute("name",TypeSecondaryResult[u]["Folder Name"] + TypeSecondaryResult[u]["File Name"]);
    pokdataAside1TypeSecondaryCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

    if (TypeSecondaryResult[u]["Form"] != undefined) {
        pokdataAside1TypeSecondaryCompareLiImg.setAttribute("title",TypeSecondaryResult[u]["Form"]);
    }
    else {
        pokdataAside1TypeSecondaryCompareLiImg.setAttribute("title",TypeSecondaryResult[u]["Pokémon"]);
    }


    pokdataAside1TypeSecondaryCompareUl.appendChild(pokdataAside1TypeSecondaryCompareLi);
    pokdataAside1TypeSecondaryCompareLi.appendChild(pokdataAside1TypeSecondaryCompareLiImgButton);
    pokdataAside1TypeSecondaryCompareLiImgButton.appendChild(pokdataAside1TypeSecondaryCompareLiImg);
    pokdataAside1TypeSecondaryCompareLi.appendChild(pokdataAside1TypeSecondaryCompareLiTypeSecondaryOuter);

    if (TypeSecondaryResult[u]["Pokémon"] == getPokémonName(x)) {
        pokdataAside1TypeSecondaryCompareLiImg.classList.add("select");
    }

    for (var p = 0; p < JSONPath_TypeSecondaryFull.length; p++) {
        var pokdataAside1TypeSecondaryCompareLiTypeSecondaryText = document.createElement("p");
        var pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg = document.createElement("img");

        if (MEDIAPath_Type_Text == undefined) {
            if (TypeSecondaryResult[u][JSONPath_TypeSecondaryFull[p]] == undefined) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryText.innerText = "";
            }
            else {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryText.innerText = TypeSecondaryResult[u][JSONPath_TypeSecondaryFull[p]];
            }
            if (p == 0) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryText.setAttribute("title","Primary Type");
            }
            else if (p == 1) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryText.setAttribute("title","Secondary Type");
            }
            pokdataAside1TypeSecondaryCompareLiTypeSecondaryOuter.appendChild(pokdataAside1TypeSecondaryCompareLiTypeSecondaryText);
    
            if (TypeSecondaryResult[u][JSONPath_TypeSecondaryFull[p]] == defaultTypeSecondary) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryText.classList.add("select");
            }
        }
        else {
            if (TypeSecondaryResult[u][JSONPath_TypeSecondaryFull[p]] == undefined) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg.src = "";
            }
            else {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + TypeSecondaryResult[u][JSONPath_TypeSecondaryFull[p]] + ".png";
            }
            if (p == 0) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg.setAttribute("title","Primary Type");
            }
            else if (p == 1) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg.setAttribute("title","Secondary Type");
            }
            pokdataAside1TypeSecondaryCompareLiTypeSecondaryOuter.appendChild(pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg);
    
            if (TypeSecondaryResult[u][JSONPath_TypeSecondaryFull[p]] == defaultTypeSecondary) {
                pokdataAside1TypeSecondaryCompareLiTypeSecondaryImg.classList.add("select");
            }
        }
    }
}
}







pokdataAside2.classList.add("pokdata-aside2");
pokdataAside2MapContain.setAttribute("id","pokdata-map-contain");
pokdataAside2MapZoomReset.classList.add("pokdata-zoom-reset");
pokdataAside2MapZoomOut.classList.add("pokdata-zoom-out");
pokdataAside2MapZoomIn.classList.add("pokdata-zoom-in");
pokdataAside2MapZoomFullscreen.classList.add("pokdata-zoom-fullscreen");
pokdataAside2Map.setAttribute("id","pokdata-map");
pokdataAside2Map.setAttribute("name",Region + "-" + MEDIAPath_Map);
pokdataAside2MapPanzoom.setAttribute("id","pokdata-map-panzoom-" + x);
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



pokdataAside3.classList.add("pokdata-aside3");

pokdataAside3Metadata.classList.add("pokdata-metadata");
pokdataAside3Metadata.setAttribute("id","pokdata-metadata" + x);
pokdataAside3DescriptionOuter.classList.add("pokdata-metadata-description");
pokdataAside3DescriptionOuter.classList.add("scroll");
pokdataAside3Description.innerText = defaultPokédexEntry;
pokdataAside3MetadataSpan1.setAttribute("name","1");
pokdataAside3MetadataSpan2.setAttribute("name","2");
pokdataAside3MetadataSidebarOuter.setAttribute("id","pokdata-metadata-sidebar-outer");
pokdataAside3MetadataSidebar.setAttribute("id","pokdata-metadata-sidebar");
pokdataAside3MetadataSidebar.setAttribute("name",Generation + "-" + GameID);


pokdataAside3MetadataSidebarForm.setAttribute("id","pokdata-form-selector");
pokdataAside3MetadataSidebarForm.classList.add("scroll");

pokdataAside3MetadataSidebarCatchRateOuter.classList.add("pokdata-metadata-sidebar-catchrate");
pokdataAside3MetadataSidebarCatchRateOuter.setAttribute("name","Catch Rate");
pokdataAside3MetadataSidebarCatchRateToggle.classList.add("pokdata-metadata-sidebar-catchrate-toggle");
pokdataAside3MetadataSidebarCatchRateToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
pokdataAside3MetadataSidebarCatchRateContent.classList.add("pokdata-metadata-sidebar-catchrate-content");
pokdataAside3MetadataSidebarCatchRateTitle.innerText = "Catch Rate";
pokdataAside3MetadataSidebarCatchRate.setAttribute("id","pokdata-metadata-sidebar-catchrate");
pokdataAside3MetadataSidebarCatchRate.setAttribute("title","When thrown at a full health " + defaultName + " with an ordinary Poké Ball.");
pokdataAside3MetadataSidebarCatchRate.innerText = catchRateFormula + "%";

pokdataAside3MetadataSidebarLevelRateOuter.classList.add("pokdata-metadata-sidebar-levelrate");
pokdataAside3MetadataSidebarLevelRateOuter.setAttribute("name","Leveling Rate");
pokdataAside3MetadataSidebarLevelRateToggle.classList.add("pokdata-metadata-sidebar-levelrate-toggle");
pokdataAside3MetadataSidebarLevelRateToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
pokdataAside3MetadataSidebarLevelRateContent.classList.add("pokdata-metadata-sidebar-levelrate-content");
pokdataAside3MetadataSidebarLevelRateTitle.innerText = "Leveling Rate";
pokdataAside3MetadataSidebarLevelRate.setAttribute("id","pokdata-metadata-sidebar-levelrate");

pokdataAside3MetadataSidebarLevelRate.setAttribute("title","Time approximated for " + defaultName + " to Level Up.");

pokdataAside3MetadataSidebarLevelRate.innerText = defaultLevelingRate;



pokdataAside3MetadataSidebarExpYieldOuter.classList.add("pokdata-metadata-sidebar-expyield");
pokdataAside3MetadataSidebarExpYieldOuter.setAttribute("name","Experience Yield");
pokdataAside3MetadataSidebarExpYieldToggle.classList.add("pokdata-metadata-sidebar-expyield-toggle");
pokdataAside3MetadataSidebarExpYieldToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active');");
pokdataAside3MetadataSidebarExpYieldContent.classList.add("pokdata-metadata-sidebar-expyield-content");
pokdataAside3MetadataSidebarExpYieldTitle.innerText = "Experience Yield";
pokdataAside3MetadataSidebarExpYield.setAttribute("id","pokdata-metadata-sidebar-expyield");
pokdataAside3MetadataSidebarExpYield.setAttribute("title","Experience gained approximated upon defeating " + defaultName + " in battle.");

if (parseInt(defaultExperienceYield) >= 300) { // Very High
    pokdataAside3MetadataSidebarExpYield.innerText = "Very High";
}
if (parseInt(defaultExperienceYield) >= 200 && parseInt(defaultExperienceYield) <= 299) { // High
    pokdataAside3MetadataSidebarExpYield.innerText = "High";
}
if (parseInt(defaultExperienceYield) >= 100 && parseInt(defaultExperienceYield) <= 199) { // Medium
    pokdataAside3MetadataSidebarExpYield.innerText = "Medium";
}
if (parseInt(defaultExperienceYield) >= 50 && parseInt(defaultExperienceYield) <= 99) { // Low
    pokdataAside3MetadataSidebarExpYield.innerText = "Low";
}
if (parseInt(defaultExperienceYield) >= 0 && parseInt(defaultExperienceYield) <= 49) { // Very Low
    pokdataAside3MetadataSidebarExpYield.innerText = "Very Low";
}


pokdataAside3AreaDiv.classList.add("pokdata-area");
pokdataAside3AreaDiv.setAttribute("id","pokdata-area" + x);
pokdataAside3Area.classList.add("pokdata-area-content");
pokdataAside3AreaTitle.classList.add("pokdata-area-title");
pokdataAside3AreaTitle.setAttribute("name",finaldataAreaDefault[i]["Filter_"+JSONPath_Area]);

if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Catchable") {
    pokdataAside3AreaTitle.title = "Pokémon caught in the Wild";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Snaggable") {
    pokdataAside3AreaTitle.title = "Shadow Pokémon caught from Trainers";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Evolve") {
    pokdataAside3AreaTitle.title = "Pokémon obtained via Evolution";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Trade Evolution") {
    pokdataAside3AreaTitle.title = "Pokémon obtained via Evolution by Trade";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Breed") {
    pokdataAside3AreaTitle.title = "Pokémon obtained through Breeding";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Gift") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly obtained by Receival";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Choice") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly obtained by choosing between it or another";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Swarm") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly caught during a Swarm";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Max Raid Battle") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly caught during a Max Raid Battle";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Poké Radar") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly caught with the Poké Radar";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "The Underground") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly caught with association to The Underground";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "White Forest") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly caught in the White Forest";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Unique") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly with a limited amount of encounters";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Event") {
    pokdataAside3AreaTitle.title = "Pokémon exclusivly encountered during an In-Game Event";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Unavailable") {
    pokdataAside3AreaTitle.title = "Pokémon not available";
}
if (finaldataAreaDefault[i]["Filter_"+JSONPath_Area] == "Unobtainable") {
    pokdataAside3AreaTitle.title = "Pokémon unobtainable";
}

pokdataAside3AreaTitle.innerText = finaldataAreaDefault[i]["Filter_"+JSONPath_Area];
pokdataAside3AreaText.classList.add("pokdata-area-text");
pokdataAside3AreaText.classList.add("scroll");
pokdataAside3AreaText.innerHTML = finaldataAreaDefault[i]["Area_"+JSONPath_Area];




for (q = 0; q < JSONPath_Pokédex.length; q++) {
    var pokdataAside1IDRegional = document.createElement("span");
    pokdataAside1IDRegional.classList.add("pokdata-regionalID-" + [q+1]);
    if (finaldataPokédexIDDefault[i][JSONPath_Pokédex[q]] != null) {
        pokdataAside1IDRegional.innerText = "#" + finaldataPokédexIDDefault[i][JSONPath_Pokédex[q]];
    }


    pokdataAside1DivIdName.appendChild(pokdataAside1IDRegional);
}





if (Generation >= 3 && GameID != 31 && GameID != 32) {
    var pokdataAside3MetadataSidebarRow1 = document.createElement("div");
    var pokdataAside3MetadataSidebarAbilityOuter = document.createElement("span");
    pokdataAside3MetadataSidebarAbilityOuter.classList.add("pokdata-metadata-sidebar-ability");
    pokdataAside3MetadataSidebarAbilityOuter.setAttribute("name",Generation);
    pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarRow1);
    pokdataAside3MetadataSidebarRow1.appendChild(pokdataAside3MetadataSidebarAbilityOuter);
    
    if (defaultAbilityPrimary !== undefined) {
        var pokdataAside3MetadataSidebarAbilityPrimaryOuter = document.createElement("span");
        var pokdataAside3MetadataSidebarAbilityPrimary = document.createElement("b");
        pokdataAside3MetadataSidebarAbilityPrimaryOuter.setAttribute("name","Primary");
        pokdataAside3MetadataSidebarAbilityPrimary.innerText = defaultAbilityPrimary;
        pokdataAside3MetadataSidebarAbilityPrimary.setAttribute("id","pokdata-metadata-sidebar-ability-primary");
        pokdataAside3MetadataSidebarAbilityPrimary.setAttribute("title","Primary Ability");
        pokdataAside3MetadataSidebarAbilityPrimary.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
        pokdataAside3MetadataSidebarAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilityPrimaryOuter);
        pokdataAside3MetadataSidebarAbilityPrimaryOuter.appendChild(pokdataAside3MetadataSidebarAbilityPrimary);
    }
    if (defaultAbilitySecondary !== undefined) {
        var pokdataAside3MetadataSidebarAbilitySecondaryOuter = document.createElement("span");
        var pokdataAside3MetadataSidebarAbilitySecondary = document.createElement("b");
        pokdataAside3MetadataSidebarAbilitySecondaryOuter.setAttribute("name","Secondary");
        pokdataAside3MetadataSidebarAbilitySecondary.innerText = defaultAbilitySecondary;
        pokdataAside3MetadataSidebarAbilitySecondary.setAttribute("id","pokdata-metadata-sidebar-ability-secondary");
        pokdataAside3MetadataSidebarAbilitySecondary.setAttribute("title","Secondary Ability");
        pokdataAside3MetadataSidebarAbilitySecondary.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
        pokdataAside3MetadataSidebarAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilitySecondaryOuter);
        pokdataAside3MetadataSidebarAbilitySecondaryOuter.appendChild(pokdataAside3MetadataSidebarAbilitySecondary);
    }
    if (Generation >= 5 && defaultAbilityHidden !== undefined) {
        var pokdataAside3MetadataSidebarAbilityHiddenOuter = document.createElement("span");
        var pokdataAside3MetadataSidebarAbilityHidden = document.createElement("b");
        pokdataAside3MetadataSidebarAbilityHiddenOuter.setAttribute("name","Hidden");
        pokdataAside3MetadataSidebarAbilityHidden.innerText = defaultAbilityHidden;
        pokdataAside3MetadataSidebarAbilityHidden.setAttribute("id","pokdata-metadata-sidebar-ability-hidden");
        pokdataAside3MetadataSidebarAbilityHidden.setAttribute("title","Hidden Ability");
        pokdataAside3MetadataSidebarAbilityHidden.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
        pokdataAside3MetadataSidebarAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilityHiddenOuter);
        pokdataAside3MetadataSidebarAbilityHiddenOuter.appendChild(pokdataAside3MetadataSidebarAbilityHidden);
    }

    if (Generation <= 4) {
        if (defaultAbilitySecondary === undefined) {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.classList.add("Primary");
        }
        else {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.classList.add("PrimarySecondary");
            pokdataAside3MetadataSidebarAbilitySecondaryOuter.classList.add("PrimarySecondary");
        }
    }

    if (Generation >= 5) {
        if (defaultAbilitySecondary === undefined && defaultAbilityHidden === undefined) {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.classList.add("Primary");
        }
        if (defaultAbilitySecondary === undefined && defaultAbilityHidden !== undefined) {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.classList.add("PrimaryHidden");
            pokdataAside3MetadataSidebarAbilityHiddenOuter.classList.add("PrimaryHidden");
        }
        if (defaultAbilitySecondary !== undefined && defaultAbilityHidden === undefined) {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.classList.add("PrimarySecondary");
            pokdataAside3MetadataSidebarAbilitySecondaryOuter.classList.add("PrimarySecondary");
        }
        if (defaultAbilitySecondary !== undefined && defaultAbilityHidden !== undefined) {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.classList.add("PrimarySecondaryHidden");
            pokdataAside3MetadataSidebarAbilitySecondaryOuter.classList.add("PrimarySecondaryHidden");
            pokdataAside3MetadataSidebarAbilityHiddenOuter.classList.add("PrimarySecondaryHidden");
        }
    }
}



pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarRow2);
pokdataAside3MetadataSidebarRow2.appendChild(pokdataAside3MetadataSidebarCatchRateOuter);


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

if (Generation >= 2 && GameID != 31 && GameID != 32) {
    var pokdataAside3MetadataSidebarHatchRateOuter = document.createElement("span");
    var pokdataAside3MetadataSidebarHatchRateToggle = document.createElement("span");
    var pokdataAside3MetadataSidebarHatchRateContent = document.createElement("p");
    var pokdataAside3MetadataSidebarHatchRateTitle = document.createElement("h5");
    var pokdataAside3MetadataSidebarHatchRate = document.createElement("h3");

    pokdataAside3MetadataSidebarHatchRateOuter.classList.add("pokdata-metadata-sidebar-hatchrate");
    pokdataAside3MetadataSidebarHatchRateOuter.setAttribute("name","Hatch Rate");
    pokdataAside3MetadataSidebarHatchRateToggle.classList.add("pokdata-metadata-sidebar-hatchrate-toggle");
    pokdataAside3MetadataSidebarHatchRateToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
    pokdataAside3MetadataSidebarHatchRateContent.classList.add("pokdata-metadata-sidebar-hatchrate-content");
    pokdataAside3MetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
    pokdataAside3MetadataSidebarHatchRate.setAttribute("id","pokdata-metadata-sidebar-hatchrate");
    if (defaultHatchRateSteps == undefined) {
        pokdataAside3MetadataSidebarHatchRate.innerText = defaultHatchRateEggCycle + " Steps";
        pokdataAside3MetadataSidebarHatchRate.setAttribute("title","Egg Cycles required to hatch an egg containing " + defaultName + ".");
    }
    else {
        pokdataAside3MetadataSidebarHatchRate.innerText = defaultHatchRateSteps + " Steps";
        pokdataAside3MetadataSidebarHatchRate.setAttribute("title","Steps required to hatch an egg containing " + defaultName + ".");
    }

    pokdataAside3MetadataSidebarRow2.appendChild(pokdataAside3MetadataSidebarHatchRateOuter);
    pokdataAside3MetadataSidebarHatchRateOuter.appendChild(pokdataAside3MetadataSidebarHatchRateToggle);
    pokdataAside3MetadataSidebarHatchRateToggle.appendChild(pokdataAside3MetadataSidebarHatchRateContent);
    pokdataAside3MetadataSidebarHatchRateContent.appendChild(pokdataAside3MetadataSidebarHatchRateTitle);
    pokdataAside3MetadataSidebarHatchRateContent.appendChild(pokdataAside3MetadataSidebarHatchRate);





    var pokdataAside3MetadataSidebarHatchRateCompare = document.createElement("div");
    var pokdataAside3MetadataSidebarHatchRateCompareTitle = document.createElement("span");
    var pokdataAside3MetadataSidebarHatchRateCompareTitleText = document.createElement("h3");
    var pokdataAside3MetadataSidebarHatchRateCompareOptions = document.createElement("div");
    var pokdataAside3MetadataSidebarHatchRateCompareUl = document.createElement("ul");
    
    var EggGroupTemp = [];
    for (var q = 0; q < finaldataHatchRateAll.length; q++) {
        if (finaldataHatchRateAll[q]["Egg Cycle_"+JSONPath_HatchRateEggCycle] != undefined && finaldataLengthAll[q] == true) {
            EggGroupTemp.push(finaldataHatchRateAll[q]["Egg Cycle_"+JSONPath_HatchRateEggCycle]);
        }
    }

    pokdataAside3MetadataSidebarHatchRateCompare.setAttribute("id","pokdata-metadata-sidebar-hatchrate-compare");
    pokdataAside3MetadataSidebarHatchRateCompareTitleText.innerHTML = "<span title='Each Egg Cycle equal to " + EggCycleStep + " Steps in the Overworld'>Egg Cycle:</span>" + "<span title='Varies between " + Math.min.apply(Math,EggGroupTemp) + "-" + Math.max.apply(Math,EggGroupTemp) + "'>" + defaultHatchRateEggCycle + "</span>";
    pokdataAside3MetadataSidebarHatchRateCompareOptions.classList.add("pokdata-metadata-sidebar-hatchrate-compare-options");
    
    pokdataAside3MetadataSidebarHatchRateOuter.appendChild(pokdataAside3MetadataSidebarHatchRateCompare);
    pokdataAside3MetadataSidebarHatchRateCompare.appendChild(pokdataAside3MetadataSidebarHatchRateCompareTitle);
    pokdataAside3MetadataSidebarHatchRateCompareTitle.appendChild(pokdataAside3MetadataSidebarHatchRateCompareTitleText);
    pokdataAside3MetadataSidebarHatchRateCompareTitle.appendChild(pokdataAside3MetadataSidebarHatchRateCompareOptions);
    pokdataAside3MetadataSidebarHatchRateCompare.appendChild(pokdataAside3MetadataSidebarHatchRateCompareUl);
    
    for (var u = 0; u < 1; u++) {
    
        var pokdataAside3MetadataSidebarHatchRateCompareOptionsInput = document.createElement("input");
        var pokdataAside3MetadataSidebarHatchRateCompareOptionsLabel = document.createElement("label");
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("type","radio");
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-hatchrate-compare-option" + x + "-" + q);
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-hatchrate-compare-option" + x + "-" + q + "-" + u);
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("value","u");
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("alt","q");
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("autocomplete","off");
        pokdataAside3MetadataSidebarHatchRateCompareOptionsInput.setAttribute("checked","");
        
        pokdataAside3MetadataSidebarHatchRateCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-hatchrate-compare-option" + x + "-" + q + "-" + u);
        pokdataAside3MetadataSidebarHatchRateCompareOptionsLabel.innerText = "Other Pokémon";
    
        pokdataAside3MetadataSidebarHatchRateCompareOptions.appendChild(pokdataAside3MetadataSidebarHatchRateCompareOptionsInput);
        pokdataAside3MetadataSidebarHatchRateCompareOptions.appendChild(pokdataAside3MetadataSidebarHatchRateCompareOptionsLabel);
    }

    var HatchRateName = ["Steps","Egg Cycle"];
    var JSONPath_HatchRateFull = ["Steps_" + JSONPath_HatchRateSteps,"Egg Cycle_" + JSONPath_HatchRateEggCycle];
    var HatchRateResult = getPokémonData(finaldataHatchRateAll,defaultHatchRateEggCycle,JSONPath_HatchRateFull);

    for (var u = 0; u < HatchRateResult.length; u++) {
        var pokdataAside3MetadataSidebarHatchRateCompareLi = document.createElement("li");
        var pokdataAside3MetadataSidebarHatchRateCompareLiImgButton = document.createElement("button");
        var pokdataAside3MetadataSidebarHatchRateCompareLiImg = document.createElement("img");
        var pokdataAside3MetadataSidebarHatchRateCompareLiHatchRateOuter = document.createElement("span");
        pokdataAside3MetadataSidebarHatchRateCompareLiImgButton.classList.add("pokdata-modal-close-open");
        pokdataAside3MetadataSidebarHatchRateCompareLiImgButton.setAttribute("value",getPokémonID(HatchRateResult[u]["Pokémon"]));
        pokdataAside3MetadataSidebarHatchRateCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + HatchRateResult[u]["Folder Name"] + HatchRateResult[u]["File Name"] + ".png";
        pokdataAside3MetadataSidebarHatchRateCompareLiImg.setAttribute("name",HatchRateResult[u]["Folder Name"] + HatchRateResult[u]["File Name"]);
        pokdataAside3MetadataSidebarHatchRateCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

        if (HatchRateResult[u]["Form"] != undefined) {
            pokdataAside3MetadataSidebarHatchRateCompareLiImg.setAttribute("title",HatchRateResult[u]["Form"]);
        }
        else {
            pokdataAside3MetadataSidebarHatchRateCompareLiImg.setAttribute("title",HatchRateResult[u]["Pokémon"]);
        }

        pokdataAside3MetadataSidebarHatchRateCompareUl.appendChild(pokdataAside3MetadataSidebarHatchRateCompareLi);
        pokdataAside3MetadataSidebarHatchRateCompareLi.appendChild(pokdataAside3MetadataSidebarHatchRateCompareLiImgButton);
        pokdataAside3MetadataSidebarHatchRateCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarHatchRateCompareLiImg);
        pokdataAside3MetadataSidebarHatchRateCompareLi.appendChild(pokdataAside3MetadataSidebarHatchRateCompareLiHatchRateOuter);

        if (HatchRateResult[u]["Pokémon"] == getPokémonName(x)) {
            pokdataAside3MetadataSidebarHatchRateCompareLiImg.classList.add("select");
        }

        for (var p = 0; p < HatchRateName.length; p++) {
            if (HatchRateResult[u][JSONPath_HatchRateFull[p]] != undefined) {
                var pokdataAside3MetadataSidebarHatchRateCompareLiHatchRate = document.createElement("p");

                if (HatchRateResult[u][JSONPath_HatchRateFull[p]] == undefined) {
                    pokdataAside3MetadataSidebarHatchRateCompareLiHatchRate.innerText = "";
                }
                else {
                    pokdataAside3MetadataSidebarHatchRateCompareLiHatchRate.innerText = HatchRateResult[u][JSONPath_HatchRateFull[p]];
                }
                pokdataAside3MetadataSidebarHatchRateCompareLiHatchRate.setAttribute("title",HatchRateName[p]);
                pokdataAside3MetadataSidebarHatchRateCompareLiHatchRateOuter.appendChild(pokdataAside3MetadataSidebarHatchRateCompareLiHatchRate);

                if (HatchRateResult[u][JSONPath_HatchRateFull[p]] == defaultHatchRateSteps || HatchRateResult[u][JSONPath_HatchRateFull[p]] == defaultHatchRateEggCycle) {
                    pokdataAside3MetadataSidebarHatchRateCompareLiHatchRate.classList.add("select");
                }
            }
        }
    }
}

if (Generation >= 2) {
    pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarRow3);

    var pokdataAside3MetadataSidebarGenderRatioOuter = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatioTitle = document.createElement("h5");
    var pokdataAside3MetadataSidebarGenderRatioBar = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatioToggle = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatioMale = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatioFemale = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatioGenderless = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatio = document.createElement("p");

    pokdataAside3MetadataSidebarGenderRatioOuter.classList.add("pokdata-metadata-sidebar-genderratio");
    pokdataAside3MetadataSidebarGenderRatioOuter.setAttribute("name","Gender Ratio");
    pokdataAside3MetadataSidebarGenderRatioTitle.innerText = "Gender ratio";
    pokdataAside3MetadataSidebarGenderRatioBar.classList.add("pokdata-metadata-sidebar-genderratio-bar")
    pokdataAside3MetadataSidebarGenderRatioToggle.classList.add("pokdata-metadata-sidebar-genderratio-toggle")
    pokdataAside3MetadataSidebarGenderRatioToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
    pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("id","pokdata-metadata-sidebar-genderratio-male");
    pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("id","pokdata-metadata-sidebar-genderratio-female");
    pokdataAside3MetadataSidebarGenderRatioGenderless.setAttribute("id","pokdata-metadata-sidebar-genderratio-genderless");
    pokdataAside3MetadataSidebarGenderRatioGenderless.setAttribute("title","");
    pokdataAside3MetadataSidebarGenderRatio.setAttribute("id","pokdata-metadata-sidebar-genderratio");

    if (defaultGenderRatioMale == "1" && defaultGenderRatioFemale == "0") { // Always Male
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 0 : 1 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","100% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","0% Female");
    }
    if (defaultGenderRatioMale == "7" && defaultGenderRatioFemale == "1") { // Very Often Male
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'><span title='Male'>♂</span></span> 7 : 1 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","87.5% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","12.5% Female");
    }
    if (defaultGenderRatioMale == "3" && defaultGenderRatioFemale == "1") { // Often Male
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 3 : 1 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","75% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","25% Female");
    }
    if (defaultGenderRatioMale == "1" && defaultGenderRatioFemale == "1") { // Equal
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 1 : 1 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","50% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","50% Female");
    }
    if (defaultGenderRatioMale == "1" && defaultGenderRatioFemale == "3") { // Often Female
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 1 : 3 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","25% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","75% Female");
    }
    if (defaultGenderRatioMale == "1" && defaultGenderRatioFemale == "7") { // Very Often Female
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 1 : 7 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","12.5% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","87.5% Female");
    }
    if (defaultGenderRatioMale == "0" && defaultGenderRatioFemale == "1") { // Always Female
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 0 : 1 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","0% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","100% Female");
    }
    if (defaultGenderRatioMale == "0" && defaultGenderRatioFemale == "0") { // Genderless
        pokdataAside3MetadataSidebarGenderRatio.innerHTML = "<span title='Male'>♂</span> 0 : 0 <span title='Female'>♀</span>";
        pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("title","0% Male");
        pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("title","0% Female");
        pokdataAside3MetadataSidebarGenderRatioGenderless.setAttribute("title","Genderless");
    }
    

    pokdataAside3MetadataSidebarGenderRatioOuter.appendChild(pokdataAside3MetadataSidebarGenderRatioTitle);
    pokdataAside3MetadataSidebarGenderRatioOuter.appendChild(pokdataAside3MetadataSidebarGenderRatioBar);
    pokdataAside3MetadataSidebarGenderRatioBar.appendChild(pokdataAside3MetadataSidebarGenderRatioToggle);
    pokdataAside3MetadataSidebarGenderRatioToggle.appendChild(pokdataAside3MetadataSidebarGenderRatioMale);
    pokdataAside3MetadataSidebarGenderRatioToggle.appendChild(pokdataAside3MetadataSidebarGenderRatioFemale);
    pokdataAside3MetadataSidebarGenderRatioToggle.appendChild(pokdataAside3MetadataSidebarGenderRatioGenderless);
    pokdataAside3MetadataSidebarGenderRatioOuter.appendChild(pokdataAside3MetadataSidebarGenderRatio);

    pokdataAside3MetadataSidebarRow3.appendChild(pokdataAside3MetadataSidebarGenderRatioOuter);







    var pokdataAside3MetadataSidebarGenderRatioCompare = document.createElement("div");
    var pokdataAside3MetadataSidebarGenderRatioCompareTitle = document.createElement("span");
    var pokdataAside3MetadataSidebarGenderRatioCompareTitleText = document.createElement("h3");
    var pokdataAside3MetadataSidebarGenderRatioCompareOptions = document.createElement("div");
    var pokdataAside3MetadataSidebarGenderRatioCompareUl = document.createElement("ul");
    
    pokdataAside3MetadataSidebarGenderRatioCompare.setAttribute("id","pokdata-metadata-sidebar-genderratio-compare");
    pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML = "<span>Gender Ratio:</span>" + "<span><span title='Male'>♂</span>&thinsp;" + defaultGenderRatioMale + " : " +  defaultGenderRatioFemale + "&thinsp;<span title='Female'>♀</span></span>";
    pokdataAside3MetadataSidebarGenderRatioCompareTitleText.setAttribute("name","");
    pokdataAside3MetadataSidebarGenderRatioCompareOptions.setAttribute("name","");
    pokdataAside3MetadataSidebarGenderRatioCompareOptions.classList.add("pokdata-metadata-sidebar-genderratio-compare-options");
    
    pokdataAside3MetadataSidebarGenderRatioBar.appendChild(pokdataAside3MetadataSidebarGenderRatioCompare);
    pokdataAside3MetadataSidebarGenderRatioCompare.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareTitle);
    pokdataAside3MetadataSidebarGenderRatioCompareTitle.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareTitleText);
    pokdataAside3MetadataSidebarGenderRatioCompareTitle.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareOptions);
    pokdataAside3MetadataSidebarGenderRatioCompare.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareUl);
    
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("1 : 0")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Always Male");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("7 : 1")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Very Often Male");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("3 : 1")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Often Male");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("1 : 1")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Equal Ratio");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("1 : 3")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Often Female");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("1 : 7")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Very Often Female");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("0 : 1")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Always Female");
    }
    if (pokdataAside3MetadataSidebarGenderRatioCompareTitleText.innerHTML.includes("0 : 0")) {
        pokdataAside3MetadataSidebarGenderRatioCompareTitleText.firstChild.nextElementSibling.setAttribute("title","Genderless");
    }

    for (var u = 0; u < 1; u++) {
    
        var pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput = document.createElement("input");
        var pokdataAside3MetadataSidebarGenderRatioCompareOptionsLabel = document.createElement("label");
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("type","radio");
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-genderratio-compare-option" + x + "-" + q);
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-genderratio-compare-option" + x + "-" + q + "-" + u);
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("value","u");
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("alt","q");
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("autocomplete","off");
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput.setAttribute("checked","");
        
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-genderratio-compare-option" + x + "-" + q + "-" + u);
        pokdataAside3MetadataSidebarGenderRatioCompareOptionsLabel.innerText = "Other Pokémon";
    
        pokdataAside3MetadataSidebarGenderRatioCompareOptions.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareOptionsInput);
        pokdataAside3MetadataSidebarGenderRatioCompareOptions.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareOptionsLabel);
    }
    
    var JSONPath_GenderRatioFull = ["Male","Female"];
    JSONPath_GenderRatioFull = JSONPath_GenderRatioFull.map(i => i + "_" + JSONPath_GenderRatio);
    var GenderRatioResult = getPokémonGenderRatio(finaldataGenderRatioAll,[defaultGenderRatioMale.toString(),defaultGenderRatioFemale.toString()],JSONPath_GenderRatioFull);

    for (var u = 0; u < GenderRatioResult.length; u++) {
        var pokdataAside3MetadataSidebarGenderRatioCompareLi = document.createElement("li");
        var pokdataAside3MetadataSidebarGenderRatioCompareLiImgButton = document.createElement("button");
        var pokdataAside3MetadataSidebarGenderRatioCompareLiImg = document.createElement("img");
        var pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatioOuter = document.createElement("span");
        pokdataAside3MetadataSidebarGenderRatioCompareLiImgButton.classList.add("pokdata-modal-close-open");
        pokdataAside3MetadataSidebarGenderRatioCompareLiImgButton.setAttribute("value",getPokémonID(GenderRatioResult[u]["Pokémon"]));
        pokdataAside3MetadataSidebarGenderRatioCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + GenderRatioResult[u]["Folder Name"] + GenderRatioResult[u]["File Name"] + ".png";
        pokdataAside3MetadataSidebarGenderRatioCompareLiImg.setAttribute("name",GenderRatioResult[u]["Folder Name"] + GenderRatioResult[u]["File Name"]);
        pokdataAside3MetadataSidebarGenderRatioCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

        if (GenderRatioResult[u]["Form"] != undefined) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiImg.setAttribute("title",GenderRatioResult[u]["Form"]);
        }
        else {
            pokdataAside3MetadataSidebarGenderRatioCompareLiImg.setAttribute("title",GenderRatioResult[u]["Pokémon"]);
        }
        pokdataAside3MetadataSidebarGenderRatioCompareUl.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareLi);
        pokdataAside3MetadataSidebarGenderRatioCompareLi.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareLiImgButton);
        pokdataAside3MetadataSidebarGenderRatioCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareLiImg);
        pokdataAside3MetadataSidebarGenderRatioCompareLi.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatioOuter);

        if (GenderRatioResult[u]["Pokémon"] == getPokémonName(x)) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiImg.classList.add("select");
        }
        var pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio = document.createElement("p");
        pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatioOuter.appendChild(pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio);
        for (var p = 0; p < JSONPath_GenderRatioFull.length; p++) {

            if (GenderRatioResult[u][JSONPath_GenderRatioFull[p]] == undefined) {
                pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerText += "";
            }
            else if (p == 0) {
                pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML += "<span title='Male'>♂</span> " + GenderRatioResult[u][JSONPath_GenderRatioFull[p]] + " : ";
            }
            else if (p == 1) {
                pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML += GenderRatioResult[u][JSONPath_GenderRatioFull[p]] + " <span title='Female'>♀</span>";
            }
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("1 : 0")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Always Male");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("7 : 1")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Very Often Male");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("3 : 1")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Often Male");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("1 : 1")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Equal Ratio");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("1 : 3")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Often Female");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("1 : 7")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Very Often Female");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("0 : 1")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Always Female");
        }
        if (pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.innerHTML.includes("0 : 0")) {
            pokdataAside3MetadataSidebarGenderRatioCompareLiGenderRatio.setAttribute("title","Genderless");
        }
    }

}

if (Generation >= 2 && GameID != 31 && GameID != 32) {

    var pokdataAside3MetadataSidebarEggGroupOuter = document.createElement("span");
    var pokdataAside3MetadataSidebarEggGroupTitle = document.createElement("h5");
    var pokdataAside3MetadataSidebarEggGroupPrimaryOuter = document.createElement("span");
    var pokdataAside3MetadataSidebarEggGroupPrimary = document.createElement("b");
    var pokdataAside3MetadataSidebarEggGroupSecondaryOuter = document.createElement("span");
    var pokdataAside3MetadataSidebarEggGroupSecondary = document.createElement("b");
    
    pokdataAside3MetadataSidebarEggGroupOuter.classList.add("pokdata-metadata-sidebar-egggroup");
    pokdataAside3MetadataSidebarEggGroupOuter.setAttribute("name","Egg Group");
    pokdataAside3MetadataSidebarEggGroupTitle.innerText = "Egg Group";
    pokdataAside3MetadataSidebarEggGroupPrimaryOuter.setAttribute("name","Primary");
    pokdataAside3MetadataSidebarEggGroupPrimary.innerText = defaultEggGroupPrimary;
    pokdataAside3MetadataSidebarEggGroupPrimary.setAttribute("id","pokdata-metadata-sidebar-egggroup1");
    pokdataAside3MetadataSidebarEggGroupPrimary.setAttribute("title","Primary Egg Group");
    pokdataAside3MetadataSidebarEggGroupPrimary.setAttribute("name",defaultEggGroupPrimary);
    pokdataAside3MetadataSidebarEggGroupPrimary.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
    pokdataAside3MetadataSidebarEggGroupSecondaryOuter.setAttribute("name","Secondary");
    pokdataAside3MetadataSidebarEggGroupSecondary.innerText = defaultEggGroupSecondary;
    pokdataAside3MetadataSidebarEggGroupSecondary.setAttribute("id","pokdata-metadata-sidebar-egggroup2");
    pokdataAside3MetadataSidebarEggGroupSecondary.setAttribute("title","Secondary Egg Group");
    pokdataAside3MetadataSidebarEggGroupSecondary.setAttribute("name",defaultEggGroupSecondary);
    pokdataAside3MetadataSidebarEggGroupSecondary.setAttribute("onclick","this.parentElement.lastChild.classList.toggle('active')");
    
    pokdataAside3MetadataSidebarRow3.appendChild(pokdataAside3MetadataSidebarEggGroupOuter);
    pokdataAside3MetadataSidebarEggGroupOuter.appendChild(pokdataAside3MetadataSidebarEggGroupTitle);
    pokdataAside3MetadataSidebarEggGroupOuter.appendChild(pokdataAside3MetadataSidebarEggGroupPrimaryOuter);
    pokdataAside3MetadataSidebarEggGroupPrimaryOuter.appendChild(pokdataAside3MetadataSidebarEggGroupPrimary);
    pokdataAside3MetadataSidebarEggGroupOuter.appendChild(pokdataAside3MetadataSidebarEggGroupSecondaryOuter);
    pokdataAside3MetadataSidebarEggGroupSecondaryOuter.appendChild(pokdataAside3MetadataSidebarEggGroupSecondary);





    if (defaultEggGroupSecondary == undefined) {
        pokdataAside3MetadataSidebarEggGroupPrimary.classList.add("SingleEggGroup");
        pokdataAside3MetadataSidebarEggGroupSecondary.style.display = "none";
    }

    
var eggGroupList = [defaultEggGroupPrimary,defaultEggGroupSecondary]
for (var q = 0; q < eggGroupList.length; q++) {
    var pokdataAside3MetadataSidebarEggGroupCompare = document.createElement("div");
    var pokdataAside3MetadataSidebarEggGroupCompareTitle = document.createElement("span");
    var pokdataAside3MetadataSidebarEggGroupCompareTitleText = document.createElement("h2");
    var pokdataAside3MetadataSidebarEggGroupCompareOptions = document.createElement("div");
    var pokdataAside3MetadataSidebarEggGroupCompareUl = document.createElement("ul");

    pokdataAside3MetadataSidebarEggGroupCompare.classList.add("pokdata-metadata-sidebar-egggroup-compare" + q)
    pokdataAside3MetadataSidebarEggGroupCompare.setAttribute("id","pokdata-metadata-sidebar-egggroup-compare");
    pokdataAside3MetadataSidebarEggGroupCompareTitle.setAttribute("name",eggGroupList[q]);
    pokdataAside3MetadataSidebarEggGroupCompareTitleText.innerText = eggGroupList[q];
    pokdataAside3MetadataSidebarEggGroupCompareOptions.classList.add("pokdata-metadata-sidebar-egggroup-compare-options");

    if (q == 0) {
        pokdataAside3MetadataSidebarEggGroupPrimaryOuter.appendChild(pokdataAside3MetadataSidebarEggGroupCompare);
    }

    if (q == 1) {
        pokdataAside3MetadataSidebarEggGroupSecondaryOuter.appendChild(pokdataAside3MetadataSidebarEggGroupCompare);
    }
    pokdataAside3MetadataSidebarEggGroupCompare.appendChild(pokdataAside3MetadataSidebarEggGroupCompareTitle);
    pokdataAside3MetadataSidebarEggGroupCompareTitle.appendChild(pokdataAside3MetadataSidebarEggGroupCompareTitleText);
    pokdataAside3MetadataSidebarEggGroupCompareTitle.appendChild(pokdataAside3MetadataSidebarEggGroupCompareOptions);
    pokdataAside3MetadataSidebarEggGroupCompare.appendChild(pokdataAside3MetadataSidebarEggGroupCompareUl);

    for (var u = 0; u < 1; u++) {

        var pokdataAside3MetadataSidebarEggGroupCompareOptionsInput = document.createElement("input");
        var pokdataAside3MetadataSidebarEggGroupCompareOptionsLabel = document.createElement("label");
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("type","radio");
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-egggroup-compare-option" + x + "-" + q);
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-egggroup-compare-option" + x + "-" + q + "-" + u);
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("value",u);
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("alt",q);
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("autocomplete","off");
        pokdataAside3MetadataSidebarEggGroupCompareOptionsInput.setAttribute("checked","");
      
        pokdataAside3MetadataSidebarEggGroupCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-egggroup-compare-option" + x + "-" + q + "-" + u);
        pokdataAside3MetadataSidebarEggGroupCompareOptionsLabel.innerText = "Other Pokémon";

        pokdataAside3MetadataSidebarEggGroupCompareOptions.appendChild(pokdataAside3MetadataSidebarEggGroupCompareOptionsInput);
        pokdataAside3MetadataSidebarEggGroupCompareOptions.appendChild(pokdataAside3MetadataSidebarEggGroupCompareOptionsLabel);
    }

    var EggGroupName = ["Primary","Secondary"];
    var JSONPath_EggGroupFull = EggGroupName;
    JSONPath_EggGroupFull = JSONPath_EggGroupFull.map(i => i + "_" + JSONPath_EggGroup);
    var EggGroupResult = getPokémonData(finaldataEggGroupAll,eggGroupList[q],JSONPath_EggGroupFull);


    for (var u = 0; u < EggGroupResult.length; u++) {
        var pokdataAside3MetadataSidebarEggGroupCompareLi = document.createElement("li");
        var pokdataAside3MetadataSidebarEggGroupCompareLiImgButton = document.createElement("button");
        var pokdataAside3MetadataSidebarEggGroupCompareLiImg = document.createElement("img");
        var pokdataAside3MetadataSidebarEggGroupCompareLiEggGroupOuter = document.createElement("span");
        pokdataAside3MetadataSidebarEggGroupCompareLiImgButton.classList.add("pokdata-modal-close-open");
        pokdataAside3MetadataSidebarEggGroupCompareLiImgButton.setAttribute("value",getPokémonID(EggGroupResult[u]["Pokémon"]));
        pokdataAside3MetadataSidebarEggGroupCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + EggGroupResult[u]["Folder Name"] + EggGroupResult[u]["File Name"] + ".png";
        pokdataAside3MetadataSidebarEggGroupCompareLiImg.setAttribute("name",EggGroupResult[u]["Folder Name"] + EggGroupResult[u]["File Name"]);
        pokdataAside3MetadataSidebarEggGroupCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

        if (EggGroupResult[u]["Form"] != undefined) {
            pokdataAside3MetadataSidebarEggGroupCompareLiImg.setAttribute("title",EggGroupResult[u]["Form"]);
        }
        else {
            pokdataAside3MetadataSidebarEggGroupCompareLiImg.setAttribute("title",EggGroupResult[u]["Pokémon"]);
        }

        pokdataAside3MetadataSidebarEggGroupCompareUl.appendChild(pokdataAside3MetadataSidebarEggGroupCompareLi);
        pokdataAside3MetadataSidebarEggGroupCompareLi.appendChild(pokdataAside3MetadataSidebarEggGroupCompareLiImgButton);
        pokdataAside3MetadataSidebarEggGroupCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarEggGroupCompareLiImg);
        pokdataAside3MetadataSidebarEggGroupCompareLi.appendChild(pokdataAside3MetadataSidebarEggGroupCompareLiEggGroupOuter);

        if (EggGroupResult[u]["Pokémon"] == getPokémonName(x)) {
            pokdataAside3MetadataSidebarEggGroupCompareLiImg.classList.add("select");
        }

        for (var p = 0; p < EggGroupName.length; p++) {
            var pokdataAside3MetadataSidebarEggGroupCompareLiEggGroup = document.createElement("p");

            if (EggGroupResult[u][JSONPath_EggGroupFull[p]] == undefined) {
                pokdataAside3MetadataSidebarEggGroupCompareLiEggGroup.innerText = "";
            }
            else {
                pokdataAside3MetadataSidebarEggGroupCompareLiEggGroup.innerText = EggGroupResult[u][JSONPath_EggGroupFull[p]];
            }
            pokdataAside3MetadataSidebarEggGroupCompareLiEggGroup.setAttribute("title",EggGroupName[p] + " Egg Group");
            pokdataAside3MetadataSidebarEggGroupCompareLiEggGroupOuter.appendChild(pokdataAside3MetadataSidebarEggGroupCompareLiEggGroup);

            if (EggGroupResult[u][JSONPath_EggGroupFull[p]] == eggGroupList[q]) {
                pokdataAside3MetadataSidebarEggGroupCompareLiEggGroup.classList.add("select");
            }
          
        }
    }
}

}


pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarRow4);


if (defaultPokédexEntry == undefined) {
    pokdataAside3Description.innerText = "";
 }


if (parseInt(x) - 1 != 0) {
var pokdataPrevious = document.createElement("div");
var pokdataPreviousNational = document.createElement("button");
var pokdataPreviousNationalImg = document.createElement("img");

pokdataPrevious.classList.add("pokdata-previous");
pokdataPreviousNational.setAttribute("id","pokdata-previous-national");
pokdataPreviousNational.setAttribute("name","national");
pokdataPreviousNational.classList.add("pokdata-modal-close-open");
pokdataPreviousNational.setAttribute("value",parseInt(x) - 1);
pokdataPreviousNational.title = "#" + [parseInt(x) - 1] + "\n" + getPokémonName([parseInt(x) - 1]);
pokdataPreviousNationalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + [parseInt(x) - 1] + ".png";
pokdataPreviousNationalImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

pokdataDivContent.appendChild(pokdataPrevious);
pokdataPrevious.appendChild(pokdataPreviousNational);
pokdataPreviousNational.appendChild(pokdataPreviousNationalImg);

}
if (parseInt(x) + 1 <= finaldataLengthDefault.length) {

var pokdataNext = document.createElement("div");
var pokdataNextNational = document.createElement("button");
var pokdataNextNationalImg = document.createElement("img");

pokdataNext.classList.add("pokdata-next");
pokdataNextNational.setAttribute("id","pokdata-next-national");
pokdataNextNational.setAttribute("name","national");
pokdataNextNational.classList.add("pokdata-modal-close-open");
pokdataNextNational.setAttribute("value",parseInt(x) + 1);
pokdataNextNational.title = "#" + [parseInt(x) + 1] + "\n" + getPokémonName([parseInt(x) + 1]);
pokdataNextNationalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + [parseInt(x) + 1] + ".png";
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
        pokdataPreviousRegional.title = "#" + [parseInt(finaldataPokédexIDDefault[i][JSONPath_Pokédex[q]]) - 1] + "\n" + getPokémonName(previousID);
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
        pokdataNextRegional.title = "#" + [parseInt(finaldataPokédexIDDefault[i][JSONPath_Pokédex[q]]) + 1] + "\n" + getPokémonName(nextID);
        pokdataNextRegionalImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + nextID + ".png";
        pokdataNextRegionalImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        
        pokdataNext.appendChild(pokdataNextRegional);
        pokdataNextRegional.appendChild(pokdataNextRegionalImg);
    }
}




var PokémonStage = finaldataEvolutionStageDefault[i]["Pokémon Stage_"+JSONPath_EvolutionStage];
var FamilyStage = finaldataEvolutionStageDefault[i]["Family Stage_"+JSONPath_EvolutionStage];

var Next = finaldataEvolutionSpecieDefault[i]["Next_"+JSONPath_EvolutionSpecie];
var Previous = finaldataEvolutionSpecieDefault[i]["Previous_"+JSONPath_EvolutionSpecie];

var PreviousPrevious;
var PreviousNext;
var NextPrevious;


if (Next != undefined) {
    NextPrevious = finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Next)) - 1]["Previous_"+JSONPath_EvolutionSpecie].split(",");

    var NextTypeMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Next)) - 1]["Type_"+JSONPath_EvolutionMethod];
    var NextFactorMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Next)) - 1]["Factor_"+JSONPath_EvolutionMethod];
    var NextAdditionalMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Next)) - 1]["Additional_"+JSONPath_EvolutionMethod];
    var NextFormMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Next)) - 1]["Form_"+JSONPath_EvolutionMethod];
}
else {
    NextPrevious = [];
}

if (Previous != undefined) {
    PreviousNext = finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie];
    PreviousPrevious = finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Previous)) - 1]["Previous_"+JSONPath_EvolutionSpecie];

    var PreviousTypeMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Previous)) - 1]["Type_"+JSONPath_EvolutionMethod];
    var PreviousFactorMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Previous)) - 1]["Factor_"+JSONPath_EvolutionMethod];
    var PreviousAdditionalMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Previous)) - 1]["Additional_"+JSONPath_EvolutionMethod];
    var PreviousFormMethod = finaldataEvolutionMethodDefault[parseInt(getPokémonID(Previous)) - 1]["Form_"+JSONPath_EvolutionMethod];
}
else {
    PreviousNext = [];
}


var evoprevious;

if (finaldataEvolutionSpecieDefault[i]["Previous_"+JSONPath_EvolutionSpecie] != undefined) {
    var evoprevious = finaldataEvolutionSpecieDefault[i]["Previous_"+JSONPath_EvolutionSpecie].split(",").length;
}
else {
    var evoprevious = 0;
}


var evonext;

if (finaldataEvolutionSpecieDefault[i]["Next_"+JSONPath_EvolutionSpecie] != undefined) {
    var evonext = finaldataEvolutionSpecieDefault[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length;
}
else {
    var evonext = 0;
}




if (evoprevious != 0 || evonext != 0) {

    var FamilyPokémon;

    if (PokémonStage == "First-Stage" && FamilyStage == "Two-Stage") { // 1/2 
        FamilyPokémon = finaldataEvolutionSpecieDefault[i]["Pokémon"]+","+finaldataEvolutionSpecieDefault[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "First-Stage" && FamilyStage == "Three-Stage") { // 1/3
        FamilyPokémon = finaldataEvolutionSpecieDefault[i]["Pokémon"]+","+finaldataEvolutionSpecieDefault[i]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Next)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "Second-Stage" && FamilyStage == "Two-Stage") { // 2/2
        FamilyPokémon = Previous+","+finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "Second-Stage" && FamilyStage == "Three-Stage") { // 2/3
        FamilyPokémon = Previous+","+finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataEvolutionSpecieDefault[i]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    else if (PokémonStage == "Third-Stage" && FamilyStage == "Three-Stage") { // 3/3
        FamilyPokémon = PreviousPrevious+","+finaldataEvolutionSpecieDefault[parseInt(getPokémonID(PreviousPrevious)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",")+","+finaldataEvolutionSpecieDefault[parseInt(getPokémonID(Previous)) - 1]["Next_"+JSONPath_EvolutionSpecie].split(",");
    }
    //FamilyPokémon = FamilyPokémon.replaceAll(",",", ");
    //FamilyPokémon = FamilyPokémon.replace(/,([^,]*)$/, " or" + "$1");
    
    
    for (var q = 0; q < FamilyPokémon.split(",").length; q++) {
        var ze = getPokémonID(FamilyPokémon.split(",")[q]);
        
        if(finaldataEggGroupDefault[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup] != undefined) {
            console.log(finaldataEggGroupDefault[parseInt(ze) - 1]["Primary_"+JSONPath_EggGroup])
        }
        if(finaldataEggGroupDefault[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup] != undefined) {
            console.log(finaldataEggGroupDefault[parseInt(ze) - 1]["Secondary_"+JSONPath_EggGroup])
        }
    
    }
    



    if (PreviousTypeMethod == undefined || NextTypeMethod == undefined) {
        PreviousTypeMethod = "";
        NextTypeMethod = "";
    }
    else if (PreviousTypeMethod == "Item" || NextTypeMethod == "Item") {
        PreviousTypeMethod = " with ";
        NextTypeMethod = " with ";
    }
    else {
        PreviousTypeMethod = " by "+PreviousTypeMethod;
        NextTypeMethod = " by "+NextTypeMethod;
    }
    if (PreviousFactorMethod == undefined || NextFactorMethod == undefined) {
        PreviousFactorMethod = "";
        NextFactorMethod = "";
    }
    else if (PreviousFactorMethod == "Special Level Up" || NextFactorMethod == "Special Level Up") {
        PreviousFactorMethod = "Level Up";
        NextFactorMethod = "Level Up";
    }
    else if(!isNaN(parseInt(PreviousFactorMethod)) || !isNaN(parseInt(NextFactorMethod))) {
        PreviousFactorMethod = " ("+PreviousFactorMethod+")";
        NextFactorMethod = " ("+NextFactorMethod+")";
    }
    else {
        PreviousFactorMethod = " "+PreviousFactorMethod;
        NextFactorMethod = " "+NextFactorMethod;
    }
    if (PreviousAdditionalMethod == undefined || NextAdditionalMethod == undefined) {
        PreviousAdditionalMethod = "";
        NextAdditionalMethod = "";
    }
    else {
        PreviousAdditionalMethod = " "+PreviousAdditionalMethod+".";
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

    if (finaldataEggGroupDefault[i]["Secondary_"+JSONPath_EggGroup] != undefined) {
        egggroups = finaldataEggGroupDefault[i]["Primary_"+JSONPath_EggGroup]+" or "+finaldataEggGroupDefault[i]["Secondary_"+JSONPath_EggGroup];
    }
    else {
        egggroups = finaldataEggGroupDefault[i]["Primary_"+JSONPath_EggGroup];
    }
}


for (var q = 0; q < evoprevious; q++) {


    var prv = finaldataEvolutionSpecieDefault[i]["Previous_"+JSONPath_EvolutionSpecie].split(",")[q];
    var pokdataEvolutionPrevious = document.createElement("div");
    var pokdataEvolutionPreviousContent = document.createElement("div");
    var pokdataEvolutionPreviousMain = document.createElement("main");
    var pokdataEvolutionPreviousButton = document.createElement("button");
    var pokdataEvolutionPreviousIDNational = document.createElement("h6");
    var pokdataEvolutionPreviousName = document.createElement("h4");
    var pokdataEvolutionPreviousDescription = document.createElement("p");
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

    if(finaldataEvolutionStageDefault[parseInt(getPokémonID(Previous)) - 1]["Pokémon Stage_"+JSONPath_EvolutionStage] == "First-Stage") {
        pokdataEvolutionPreviousDescription.innerHTML = "Breed "+FamilyPokémon+" with "+egggroups;
    }
    else {
        pokdataEvolutionPreviousDescription.innerHTML = "Evolve "+PreviousPrevious+PreviousTypeMethod+PreviousFactorMethod+PreviousAdditionalMethod+PreviousFormMethod;
    }

    pokdataEvolutionPreviousIDNational.innerText = "#" + getPokémonID(prv);
    
    pokdataEvolutionPreviousName.classList.add("pokdata-evolution-name");
    pokdataEvolutionPreviousName.innerText = prv;
    pokdataEvolutionPreviousToggle.classList.add("pokdata-evolution-toggle");
    pokdataEvolutionPreviousToggle.setAttribute("onclick","this.previousElementSibling.classList.toggle('active');");
    pokdataEvolutionPreviousButton.appendChild(pokdataEvolutionPreviousIDNational);

    pokdataDivContent.appendChild(pokdataEvolutionPrevious);
    pokdataEvolutionPrevious.appendChild(pokdataEvolutionPreviousContent);
    pokdataEvolutionPreviousContent.appendChild(pokdataEvolutionPreviousMain);
    pokdataEvolutionPreviousMain.appendChild(pokdataEvolutionPreviousButton);
    
    pokdataEvolutionPreviousButton.appendChild(pokdataEvolutionPreviousName);
    pokdataEvolutionPreviousMain.appendChild(pokdataEvolutionPreviousDescription);
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


    if(PreviousNext.length >= 1) {
        for (var u = 0; u < PreviousNext.length; u++) {
            pokdataEvolutionNextDescription.innerHTML += "Evolve "+PreviousNext[u]+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod+"<br>";
        }
    }
    else {
        for (var u = 0; u < 1; u++) {
            pokdataEvolutionNextDescription.innerHTML += "Evolve "+NextPrevious[u]+NextFormMethod+NextTypeMethod+NextFactorMethod+NextAdditionalMethod+"<br>";
        }
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












document.getElementById("pokdata").appendChild(pokdataDiv);
pokdataDiv.appendChild(pokdataDivOverlay);
pokdataDiv.appendChild(pokdataDivContent);
pokdataDivContent.appendChild(pokdataNavigation);




pokdataDivContent.appendChild(pokdataAside1);
pokdataAside1.appendChild(pokdataAside1DivPortrait);
pokdataAside1DivPortrait.appendChild(pokdataAside1DivPortraitContent);
pokdataAside1DivPortraitContent.appendChild(pokdataAside1Portrait);

pokdataAside1DivPortrait.appendChild(pokdataAside1StatsEV);
pokdataAside1StatsEV.appendChild(pokdataAside1StatsEVName);
pokdataAside1StatsEV.appendChild(pokdataAside1StatsEVSelector);
pokdataAside1StatsEV.appendChild(pokdataAside1OtherSelector);

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

pokdataAside2.appendChild(pokdataAside2MapContain);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomReset);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomOut);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomIn);
pokdataAside2MapContain.appendChild(pokdataAside2MapZoomFullscreen);
pokdataAside2MapContain.appendChild(pokdataAside2Map);
pokdataAside2Map.appendChild(pokdataAside2MapPanzoom);
pokdataAside2MapPanzoom.appendChild(pokdataAside2MapImage);
pokdataAside2MapPanzoom.appendChild(pokdataAside2MapMark);
pokdataAside2MapMark.appendChild(pokdataAside2MapMarkImage);


pokdataDivContent.appendChild(pokdataAside3);

pokdataAside3.appendChild(pokdataAside3Metadata);
pokdataAside3Metadata.appendChild(pokdataAside3DescriptionOuter);
pokdataAside3DescriptionOuter.appendChild(pokdataAside3Description);
pokdataAside3Metadata.appendChild(pokdataAside3MetadataSpan1);

pokdataAside3MetadataSidebarOuter.appendChild(pokdataAside3MetadataSidebarForm);

pokdataAside3Metadata.appendChild(pokdataAside3MetadataSidebarOuter);
pokdataAside3Metadata.appendChild(pokdataAside3MetadataSpan2);
pokdataAside3MetadataSidebarOuter.appendChild(pokdataAside3MetadataSidebar);





pokdataAside3MetadataSidebarCatchRateOuter.appendChild(pokdataAside3MetadataSidebarCatchRateToggle);
pokdataAside3MetadataSidebarCatchRateToggle.appendChild(pokdataAside3MetadataSidebarCatchRateContent);
pokdataAside3MetadataSidebarCatchRateContent.appendChild(pokdataAside3MetadataSidebarCatchRateTitle);
pokdataAside3MetadataSidebarCatchRateContent.appendChild(pokdataAside3MetadataSidebarCatchRate);

pokdataAside3MetadataSidebarRow4.appendChild(pokdataAside3MetadataSidebarExpYieldOuter);
pokdataAside3MetadataSidebarExpYieldOuter.appendChild(pokdataAside3MetadataSidebarExpYieldToggle);
pokdataAside3MetadataSidebarExpYieldToggle.appendChild(pokdataAside3MetadataSidebarExpYieldContent);
pokdataAside3MetadataSidebarExpYieldContent.appendChild(pokdataAside3MetadataSidebarExpYieldTitle);
pokdataAside3MetadataSidebarExpYieldContent.appendChild(pokdataAside3MetadataSidebarExpYield);

pokdataAside3MetadataSidebarRow4.appendChild(pokdataAside3MetadataSidebarLevelRateOuter);
pokdataAside3MetadataSidebarLevelRateOuter.appendChild(pokdataAside3MetadataSidebarLevelRateToggle);
pokdataAside3MetadataSidebarLevelRateToggle.appendChild(pokdataAside3MetadataSidebarLevelRateContent);
pokdataAside3MetadataSidebarLevelRateContent.appendChild(pokdataAside3MetadataSidebarLevelRateTitle);
pokdataAside3MetadataSidebarLevelRateContent.appendChild(pokdataAside3MetadataSidebarLevelRate);





var sels = ["Base Stats","EV Yield"];


var pokdataAside1OtherSelectorInput = document.createElement("input");
var pokdataAside1OtherSelectorLabel = document.createElement("label");
pokdataAside1OtherSelectorInput.setAttribute("type","radio");
pokdataAside1OtherSelectorInput.setAttribute("name","pokdata-baseev-"+x);
pokdataAside1OtherSelectorInput.setAttribute("id","pokdata-baseev-"+x+"-"+"otherpokémon");
pokdataAside1OtherSelectorInput.setAttribute("alt","otherpokémon");
pokdataAside1OtherSelectorInput.setAttribute("value",sels.length+1);
pokdataAside1OtherSelectorInput.setAttribute("onclick","var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');var node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='block';");
pokdataAside1OtherSelectorLabel.setAttribute("for","pokdata-baseev-"+x+"-"+"otherpokémon");
pokdataAside1OtherSelectorLabel.innerText = "Other Pokémon";
pokdataAside1OtherSelector.appendChild(pokdataAside1OtherSelectorInput);
pokdataAside1OtherSelector.appendChild(pokdataAside1OtherSelectorLabel);


var pokdataAside1Other = document.createElement("ul");
var pokdataAside1OtherUl = document.createElement("ul");
var pokdataAside1OtherFooter = document.createElement("h3");
pokdataAside1Other.setAttribute("name","otherpokémon");
pokdataAside1StatsEV.appendChild(pokdataAside1Other);
pokdataAside1Other.appendChild(pokdataAside1OtherUl);
pokdataAside1Other.appendChild(pokdataAside1OtherFooter);



if (Generation == 1) {
    var baseEv = ["HP","Atk","Def","Special","Speed","Total"];
    var baseEvFull = ["HP","Attack","Defense","Special","Speed","Total"];
    var baseEvList = [[defaultBaseStatsHP,defaultBaseStatsAtk,defaultBaseStatsDef,defaultBaseStatsSpecial,defaultBaseStatsSpeed,defaultBaseStatsTotal],[defaultEVYieldHP,defaultEVYieldAtk,defaultEVYieldDef,defaultEVYieldSpecial,defaultEVYieldSpeed,defaultEVYieldTotal]]
}
if (Generation >= 2) {
    var baseEv = ["HP","Atk","Def","Sp. Atk","Sp. Def","Speed","Total"];
    var baseEvFull = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
    var baseEvList = [[defaultBaseStatsHP,defaultBaseStatsAtk,defaultBaseStatsDef,defaultBaseStatsSpAtk,defaultBaseStatsSpDef,defaultBaseStatsSpeed,defaultBaseStatsTotal],[defaultEVYieldHP,defaultEVYieldAtk,defaultEVYieldDef,defaultEVYieldSpAtk,defaultEVYieldSpDef,defaultEVYieldSpeed,defaultEVYieldTotal]]
}

for (var q = 0; q < sels.length; q++) {
    var pokdataAside1StatsEVSelectorInput = document.createElement("input");
    var pokdataAside1StatsEVSelectorLabel = document.createElement("label");
    pokdataAside1StatsEVSelectorInput.setAttribute("type","radio");
    pokdataAside1StatsEVSelectorInput.setAttribute("name","pokdata-baseev-"+x);
    pokdataAside1StatsEVSelectorInput.setAttribute("id","pokdata-baseev-"+x+"-"+sels[q].toLowerCase().replace(" ",""));
    pokdataAside1StatsEVSelectorInput.setAttribute("alt",sels[q].toLowerCase().replace(" ",""));
    pokdataAside1StatsEVSelectorInput.setAttribute("value",q);
    pokdataAside1StatsEVSelectorInput.setAttribute("onclick","var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');var node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='block';");
    pokdataAside1StatsEVSelectorLabel.setAttribute("for","pokdata-baseev-"+x+"-"+sels[q].toLowerCase().replace(" ",""));
    pokdataAside1StatsEVSelectorLabel.innerText = sels[q];
    pokdataAside1StatsEVSelector.appendChild(pokdataAside1StatsEVSelectorInput);
    pokdataAside1StatsEVSelector.appendChild(pokdataAside1StatsEVSelectorLabel);

    if (q == 0) {
        pokdataAside1StatsEVSelectorInput.setAttribute("checked","");
    }
    
    var pokdataAside1StatsEVUl = document.createElement("ul");
    pokdataAside1StatsEVUl.setAttribute("name",sels[q].toLowerCase().replace(" ",""))
    pokdataAside1StatsEV.appendChild(pokdataAside1StatsEVUl);

    for (var u = 0; u < baseEv.length; u++) {
        var pokdataAside1StatEV = document.createElement("div");
        var pokdataAside1StatEVValue = document.createElement("li");
        var pokdataAside1StatsEVSpan = document.createElement("span");
        pokdataAside1StatEV.setAttribute("name",baseEv[u].toLowerCase().replace(" ","").replace(".",""));
        pokdataAside1StatEV.innerText = baseEv[u];
        pokdataAside1StatEVValue.classList.add(sels[q].toLowerCase().replace(" ","")+"-"+baseEv[u].toLowerCase().replace(" ","").replace(".",""));
        pokdataAside1StatsEVSpan.value = baseEvList[q][u];
        if (q == 0) {
            pokdataAside1StatEV.setAttribute("onclick","baseEVData('Base Stats','All',"+"'"+ baseEvFull[u] +"'"+","+x+")")
            pokdataAside1StatsEVSpan.setAttribute("onclick","baseEVData('Base Stats',"+baseEvList[q][u]+","+"'"+ baseEvFull[u] +"'"+","+x+")");
        }
        if (q == 1) {
            pokdataAside1StatEV.setAttribute("onclick","baseEVData('EV Yield','All',"+"'"+ baseEvFull[u] +"'"+","+x+")")
            pokdataAside1StatsEVSpan.setAttribute("onclick","baseEVData('EV Yield',"+baseEvList[q][u]+",'"+baseEvFull[u]+"',"+x+")");
        }
        pokdataAside1StatsEVUl.appendChild(pokdataAside1StatEV);
        pokdataAside1StatsEVUl.appendChild(pokdataAside1StatEVValue);
        pokdataAside1StatEVValue.appendChild(pokdataAside1StatsEVSpan);
    }    
}





var pokdataAside3LearnsetDiv = document.createElement("div");
var pokdataAside3Learnset = document.createElement("div");
var pokdataAside3LearnsetOptions = document.createElement("div");


pokdataAside3LearnsetDiv.classList.add("pokdata-learnset");
pokdataAside3LearnsetDiv.setAttribute("id","pokdata-learnset" + x);
pokdataAside3Learnset.classList.add("pokdata-learnset-content");
pokdataAside3LearnsetOptions.classList.add("pokdata-learnset-options");

var optz = ["Level Up","TM/HM","Breeding","Tutor","Transfer","Event"];
for (q = 0; q < optz.length; q++) {
    var pokdataAside3LearnsetOptionsInput = document.createElement("input");
    var pokdataAside3LearnsetOptionsLabel = document.createElement("label");

    pokdataAside3LearnsetOptionsInput.setAttribute("type","radio");
    pokdataAside3LearnsetOptionsInput.setAttribute("name","pokdata-learnset-options" + x);
    pokdataAside3LearnsetOptionsInput.setAttribute("id","pokdata-learnset-options" + q + "-" + x);
    pokdataAside3LearnsetOptionsInput.setAttribute("value",q);
    pokdataAside3LearnsetOptionsInput.setAttribute("alt",optz[q]);
    pokdataAside3LearnsetOptionsInput.setAttribute("autocomplete","off");
    pokdataAside3LearnsetOptionsLabel.innerText = optz[q];
    pokdataAside3LearnsetOptionsLabel.setAttribute("for","pokdata-learnset-options" + q +"-" + x);
    pokdataAside3LearnsetOptionsInput.setAttribute("onclick","var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > div[name]');var node=this.parentElement.parentElement.querySelector(':scope > div[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='block';");

    if (q == 0) {
        pokdataAside3LearnsetOptionsInput.setAttribute("checked","");
    }

    pokdataAside3LearnsetOptions.appendChild(pokdataAside3LearnsetOptionsInput);
    pokdataAside3LearnsetOptions.appendChild(pokdataAside3LearnsetOptionsLabel);
}
pokdataAside3.appendChild(pokdataAside3LearnsetDiv);
pokdataAside3LearnsetDiv.appendChild(pokdataAside3Learnset);
pokdataAside3Learnset.appendChild(pokdataAside3LearnsetOptions);

var categoriez1 = ["Lvl","Name","Type","Category","Power","Accuracy","PP"];
var categoriez2 = ["TM/HM","Name","Type","Category","Power","Accuracy","PP"];
var categoriez3 = ["Parents","Name","Type","Category","Power","Accuracy","PP"];
var categoriez4 = ["Tutor","Name","Type","Category","Power","Accuracy","PP"];
var categoriez5 = ["Game","Name","Type","Category","Power","Accuracy","PP"];
var categoriez6 = ["Events","Name","Type","Category","Power","Accuracy","PP"];
var categoriez = [categoriez1,categoriez2,categoriez3,categoriez4,categoriez5,categoriez6];



for (q = 0; q < optz.length; q++) {

    var pokdataAside3LearnsetOuter = document.createElement("div");

    var pokdataAside3LearnsetUl = document.createElement("ul");
    var pokdataAside3LearnsetTitle = document.createElement("h5");
    var pokdataAside3LearnsetTitleLi = document.createElement("li");

    pokdataAside3LearnsetUl.classList.add("scroll");
    pokdataAside3LearnsetOuter.setAttribute("id","pokdata-learnset-option" + q);
    pokdataAside3LearnsetOuter.classList.add("pokdata-learnset-option");
    pokdataAside3LearnsetOuter.setAttribute("name",optz[q].replace('/','').replace(' ',''));
    pokdataAside3Learnset.appendChild(pokdataAside3LearnsetOuter);

    pokdataAside3LearnsetOuter.appendChild(pokdataAside3LearnsetTitle);
    pokdataAside3LearnsetTitle.appendChild(pokdataAside3LearnsetTitleLi);

    pokdataAside3LearnsetOuter.appendChild(pokdataAside3LearnsetUl);


    for (u = 0; u < categoriez[q].length; u++) {
        var pokdataAside3LearnsetTitleLiText = document.createElement("p");
        pokdataAside3LearnsetTitleLiText.innerText = categoriez[q][u];
        pokdataAside3LearnsetTitleLi.appendChild(pokdataAside3LearnsetTitleLiText);
    }

    for (u = 0; u < Math.floor(Math.random() * 100); u++) {
        var pokdataAside3LearnsetLi = document.createElement("li");
        pokdataAside3LearnsetLi
        pokdataAside3LearnsetUl.appendChild(pokdataAside3LearnsetLi);
        for (y = 0; y < categoriez[q].length; y++) {
            var pokdataAside3LearnsetLiText = document.createElement("span");
            pokdataAside3LearnsetLiText.innerText = "data";
            pokdataAside3LearnsetLi.appendChild(pokdataAside3LearnsetLiText);
        }
    }

}



pokdataAside3.appendChild(pokdataAside3AreaDiv);
pokdataAside3AreaDiv.appendChild(pokdataAside3Area);
pokdataAside3Area.appendChild(pokdataAside3AreaTitle);
pokdataAside3Area.appendChild(pokdataAside3AreaText);






if (Generation >= 3 && GameID != 31 && GameID != 32) {
    if (Generation <= 4) {
        var abilityList = [defaultAbilityPrimary,defaultAbilitySecondary];
        var abilityName = ["Primary","Secondary"];
    }
    else {
        var abilityList = [defaultAbilityPrimary,defaultAbilitySecondary,defaultAbilityHidden];
        var abilityName = ["Primary","Secondary","Hidden"];
    }

    for (var q = 0; q < abilityList.length; q++) {
        var pokdataAside3MetadataSidebarAbilityCompare = document.createElement("div");
        var pokdataAside3MetadataSidebarAbilityCompareTitle = document.createElement("div");
        var pokdataAside3MetadataSidebarAbilityCompareTitleID = document.createElement("h4");
        var pokdataAside3MetadataSidebarAbilityCompareTitleName = document.createElement("h2");
        var pokdataAside3MetadataSidebarAbilityCompareOptions = document.createElement("div");
        var pokdataAside3MetadataSidebarAbilityCompareDescription = document.createElement("p");
        var pokdataAside3MetadataSidebarAbilityCompareDescriptionText = document.createElement("span");
        var pokdataAside3MetadataSidebarAbilityCompareUl = document.createElement("ul");


        pokdataAside3MetadataSidebarAbilityCompare.classList.add("pokdata-metadata-sidebar-ability-compare" + q)
        pokdataAside3MetadataSidebarAbilityCompare.setAttribute("id","pokdata-metadata-sidebar-ability-compare");
        pokdataAside3MetadataSidebarAbilityCompareTitleID.innerText = "#" + getAbilityData(abilityList[q],"ID");
        pokdataAside3MetadataSidebarAbilityCompareTitleName.innerText = abilityList[q];
        pokdataAside3MetadataSidebarAbilityCompareOptions.classList.add("pokdata-metadata-sidebar-ability-compare-options");
        pokdataAside3MetadataSidebarAbilityCompareDescriptionText.innerText = getAbilityData(abilityList[q],"Flavor");

        if (q == 0 && defaultAbilityPrimary !== undefined) {
            pokdataAside3MetadataSidebarAbilityPrimaryOuter.appendChild(pokdataAside3MetadataSidebarAbilityCompare);
        }
        if (q == 1 && defaultAbilitySecondary !== undefined) {
            pokdataAside3MetadataSidebarAbilitySecondaryOuter.appendChild(pokdataAside3MetadataSidebarAbilityCompare);
        }
        if (q == 2 && defaultAbilityHidden !== undefined) {
            pokdataAside3MetadataSidebarAbilityHiddenOuter.appendChild(pokdataAside3MetadataSidebarAbilityCompare);
        }

        pokdataAside3MetadataSidebarAbilityCompare.appendChild(pokdataAside3MetadataSidebarAbilityCompareTitle);
        pokdataAside3MetadataSidebarAbilityCompareTitle.appendChild(pokdataAside3MetadataSidebarAbilityCompareTitleID);
        pokdataAside3MetadataSidebarAbilityCompareTitle.appendChild(pokdataAside3MetadataSidebarAbilityCompareTitleName);
        pokdataAside3MetadataSidebarAbilityCompare.appendChild(pokdataAside3MetadataSidebarAbilityCompareOptions);
        pokdataAside3MetadataSidebarAbilityCompare.appendChild(pokdataAside3MetadataSidebarAbilityCompareDescription);
        pokdataAside3MetadataSidebarAbilityCompareDescription.appendChild(pokdataAside3MetadataSidebarAbilityCompareDescriptionText);
        pokdataAside3MetadataSidebarAbilityCompare.appendChild(pokdataAside3MetadataSidebarAbilityCompareUl);



        for (var u = 0; u < 2; u++) {

            var pokdataAside3MetadataSidebarAbilityCompareOptionsInput = document.createElement("input");
            var pokdataAside3MetadataSidebarAbilityCompareOptionsLabel = document.createElement("label");
            pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("type","radio");
            pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-ability-compare-option" + x + "-" + q);
            pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-ability-compare-option" + x + "-" + q + "-" + u);
            pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("value",u);
            pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("alt",q);
            pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("autocomplete","off");
            pokdataAside3MetadataSidebarAbilityCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-ability-compare-option" + x + "-" + q + "-" + u);


            if (u == 0) {
                pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("onclick","if(this.checked==true){this.parentElement.nextElementSibling.style.display='block';this.parentElement.nextElementSibling.nextElementSibling.style.display='none'}");
                pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("checked","");
                pokdataAside3MetadataSidebarAbilityCompareOptionsLabel.innerText = "Description";
            }
            if (u == 1) {
                pokdataAside3MetadataSidebarAbilityCompareOptionsInput.setAttribute("onclick","if(this.checked==true){this.parentElement.nextElementSibling.style.display='none';this.parentElement.nextElementSibling.nextElementSibling.style.display='block'}");
                pokdataAside3MetadataSidebarAbilityCompareOptionsLabel.innerText = "Other Pokémon";
            }

            pokdataAside3MetadataSidebarAbilityCompareOptions.appendChild(pokdataAside3MetadataSidebarAbilityCompareOptionsInput);
            pokdataAside3MetadataSidebarAbilityCompareOptions.appendChild(pokdataAside3MetadataSidebarAbilityCompareOptionsLabel);
        }

        var JSONPath_AbilityFull = abilityName;
        JSONPath_AbilityFull = JSONPath_AbilityFull.map(i => i + "_" + JSONPath_Ability);
        var AbilityResult = getPokémonData(finaldataAbilityAll,abilityList[q],JSONPath_AbilityFull);

        for (var u = 0; u < AbilityResult.length; u++) {
            var pokdataAside3MetadataSidebarAbilityCompareLi = document.createElement("li");
            var pokdataAside3MetadataSidebarAbilityCompareLiImgButton = document.createElement("button");
            var pokdataAside3MetadataSidebarAbilityCompareLiImg = document.createElement("img");
            var pokdataAside3MetadataSidebarAbilityCompareLiAbilityOuter = document.createElement("span");
            pokdataAside3MetadataSidebarAbilityCompareLiImgButton.classList.add("pokdata-modal-close-open");
            pokdataAside3MetadataSidebarAbilityCompareLiImgButton.setAttribute("value",getPokémonID(AbilityResult[u]["Pokémon"]));
            pokdataAside3MetadataSidebarAbilityCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + AbilityResult[u]["Folder Name"] + AbilityResult[u]["File Name"] + ".png";
            pokdataAside3MetadataSidebarAbilityCompareLiImg.setAttribute("name",AbilityResult[u]["Folder Name"] + AbilityResult[u]["File Name"]);
            pokdataAside3MetadataSidebarAbilityCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
            
            if (AbilityResult[u]["Form"] != undefined) {
                pokdataAside3MetadataSidebarAbilityCompareLiImg.setAttribute("title",AbilityResult[u]["Form"]);
            }
            else {
                pokdataAside3MetadataSidebarAbilityCompareLiImg.setAttribute("title",AbilityResult[u]["Pokémon"]);
            }

            pokdataAside3MetadataSidebarAbilityCompareUl.appendChild(pokdataAside3MetadataSidebarAbilityCompareLi);
            pokdataAside3MetadataSidebarAbilityCompareLi.appendChild(pokdataAside3MetadataSidebarAbilityCompareLiImgButton);
            pokdataAside3MetadataSidebarAbilityCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarAbilityCompareLiImg);
            pokdataAside3MetadataSidebarAbilityCompareLi.appendChild(pokdataAside3MetadataSidebarAbilityCompareLiAbilityOuter);
    
            if (AbilityResult[u]["Pokémon"] == getPokémonName(x)) {
                pokdataAside3MetadataSidebarAbilityCompareLiImg.classList.add("select");
            }

            for (var p = 0; p < abilityName.length; p++) {
                var pokdataAside3MetadataSidebarAbilityCompareLiAbility = document.createElement("p");

                if (AbilityResult[u][JSONPath_AbilityFull[p]] == undefined) {
                    pokdataAside3MetadataSidebarAbilityCompareLiAbility.innerText = "";
                }
                else {
                    pokdataAside3MetadataSidebarAbilityCompareLiAbility.innerText = AbilityResult[u][JSONPath_AbilityFull[p]];
                }
                pokdataAside3MetadataSidebarAbilityCompareLiAbility.setAttribute("title",abilityName[p] + " Ability");
                pokdataAside3MetadataSidebarAbilityCompareLiAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilityCompareLiAbility);

                if (AbilityResult[u][JSONPath_AbilityFull[p]] == abilityList[q]) {
                    pokdataAside3MetadataSidebarAbilityCompareLiAbility.classList.add("select");
                }
            }
        }



    }

}









var CatchRateTemp = [];
for (var q = 0; q < finaldataCatchRateAll.length; q++) {
    if (finaldataCatchRateAll[q][JSONPath_CatchRate] != undefined && finaldataLengthAll[q] == true) {
        CatchRateTemp.push(finaldataCatchRateAll[q][JSONPath_CatchRate]);
    }
}


var pokdataAside3MetadataSidebarCatchRateCompare = document.createElement("div");
var pokdataAside3MetadataSidebarCatchRateCompareTitle = document.createElement("span");
var pokdataAside3MetadataSidebarCatchRateCompareTitleText = document.createElement("h3");
var pokdataAside3MetadataSidebarCatchRateCompareOptions = document.createElement("div");
var pokdataAside3MetadataSidebarCatchRateCompareUl = document.createElement("ul");

pokdataAside3MetadataSidebarCatchRateCompare.setAttribute("id","pokdata-metadata-sidebar-catchrate-compare");
pokdataAside3MetadataSidebarCatchRateCompareTitleText.innerHTML = "<span>Catch Rate:</span>" + "<span title='Varies between " + Math.min.apply(Math,CatchRateTemp) + "-" + Math.max.apply(Math,CatchRateTemp) + "'>" + defaultCatchRate + "</span>";
pokdataAside3MetadataSidebarCatchRateCompareOptions.classList.add("pokdata-metadata-sidebar-catchrate-compare-options");

pokdataAside3MetadataSidebarCatchRateOuter.appendChild(pokdataAside3MetadataSidebarCatchRateCompare);
pokdataAside3MetadataSidebarCatchRateCompare.appendChild(pokdataAside3MetadataSidebarCatchRateCompareTitle);
pokdataAside3MetadataSidebarCatchRateCompareTitle.appendChild(pokdataAside3MetadataSidebarCatchRateCompareTitleText);
pokdataAside3MetadataSidebarCatchRateCompareTitle.appendChild(pokdataAside3MetadataSidebarCatchRateCompareOptions);
pokdataAside3MetadataSidebarCatchRateCompare.appendChild(pokdataAside3MetadataSidebarCatchRateCompareUl);

for (var u = 0; u < 1; u++) {

    var pokdataAside3MetadataSidebarCatchRateCompareOptionsInput = document.createElement("input");
    var pokdataAside3MetadataSidebarCatchRateCompareOptionsLabel = document.createElement("label");
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("type","radio");
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-catchrate-compare-option" + x + "-" + q);
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-catchrate-compare-option" + x + "-" + q + "-" + u);
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("value","u");
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("alt","q");
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("autocomplete","off");
    pokdataAside3MetadataSidebarCatchRateCompareOptionsInput.setAttribute("checked","");
    
    pokdataAside3MetadataSidebarCatchRateCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-catchrate-compare-option" + x + "-" + q + "-" + u);
    pokdataAside3MetadataSidebarCatchRateCompareOptionsLabel.innerText = "Other Pokémon";

    pokdataAside3MetadataSidebarCatchRateCompareOptions.appendChild(pokdataAside3MetadataSidebarCatchRateCompareOptionsInput);
    pokdataAside3MetadataSidebarCatchRateCompareOptions.appendChild(pokdataAside3MetadataSidebarCatchRateCompareOptionsLabel);
}



var JSONPath_CatchRateFull = [JSONPath_CatchRate];
var CatchRateResult = getPokémonData(finaldataCatchRateAll,defaultCatchRate,JSONPath_CatchRateFull);

for (var u = 0; u < CatchRateResult.length; u++) {
    var pokdataAside3MetadataSidebarCatchRateCompareLi = document.createElement("li");
    var pokdataAside3MetadataSidebarCatchRateCompareLiImgButton = document.createElement("button");
    var pokdataAside3MetadataSidebarCatchRateCompareLiImg = document.createElement("img");
    var pokdataAside3MetadataSidebarCatchRateCompareLiCatchRateOuter = document.createElement("span");
    pokdataAside3MetadataSidebarCatchRateCompareLiImgButton.classList.add("pokdata-modal-close-open");
    pokdataAside3MetadataSidebarCatchRateCompareLiImgButton.setAttribute("value",getPokémonID(CatchRateResult[u]["Pokémon"]));
    pokdataAside3MetadataSidebarCatchRateCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + CatchRateResult[u]["Folder Name"] + CatchRateResult[u]["File Name"] + ".png";
    pokdataAside3MetadataSidebarCatchRateCompareLiImg.setAttribute("name",CatchRateResult[u]["Folder Name"] + CatchRateResult[u]["File Name"]);
    pokdataAside3MetadataSidebarCatchRateCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

    if (CatchRateResult[u]["Form"] != undefined) {
        pokdataAside3MetadataSidebarCatchRateCompareLiImg.setAttribute("title",CatchRateResult[u]["Form"]);
    }
    else {
        pokdataAside3MetadataSidebarCatchRateCompareLiImg.setAttribute("title",CatchRateResult[u]["Pokémon"]);
    }

    pokdataAside3MetadataSidebarCatchRateCompareUl.appendChild(pokdataAside3MetadataSidebarCatchRateCompareLi);
    pokdataAside3MetadataSidebarCatchRateCompareLi.appendChild(pokdataAside3MetadataSidebarCatchRateCompareLiImgButton);
    pokdataAside3MetadataSidebarCatchRateCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarCatchRateCompareLiImg);
    pokdataAside3MetadataSidebarCatchRateCompareLi.appendChild(pokdataAside3MetadataSidebarCatchRateCompareLiCatchRateOuter);

    if (CatchRateResult[u]["Pokémon"] == getPokémonName(x)) {
        pokdataAside3MetadataSidebarCatchRateCompareLiImg.classList.add("select");
    }

    for (var p = 0; p < JSONPath_CatchRateFull.length + 1; p++) {
        var pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate = document.createElement("p");

        if (p == 0) {
            pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate.innerText = CatchRateResult[u][JSONPath_CatchRateFull[p]];
            pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate.setAttribute("title","Catch Rate");
        }
        if (p == 1) {
            pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate.innerText = catchRateFormula + "%";
            pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate.classList.add("select");
            pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate.setAttribute("title","Percentage");
        }

      
        pokdataAside3MetadataSidebarCatchRateCompareLiCatchRateOuter.appendChild(pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate);

        if (CatchRateResult[u][JSONPath_CatchRateFull[p]] == defaultCatchRate) {
            pokdataAside3MetadataSidebarCatchRateCompareLiCatchRate.classList.add("select");
        }
      
    }
}





var pokdataAside3MetadataSidebarLevelRateCompare = document.createElement("div");
var pokdataAside3MetadataSidebarLevelRateCompareTitle = document.createElement("span");
var pokdataAside3MetadataSidebarLevelRateCompareTitleText = document.createElement("h3");
var pokdataAside3MetadataSidebarLevelRateCompareOptions = document.createElement("div");
var pokdataAside3MetadataSidebarLevelRateCompareUl = document.createElement("ul");

pokdataAside3MetadataSidebarLevelRateCompare.setAttribute("id","pokdata-metadata-sidebar-levelrate-compare");
pokdataAside3MetadataSidebarLevelRateCompareTitleText.innerHTML = "<span>Leveling Rate:</span>" + "<span>" + defaultLevelingRate + "</span>";
pokdataAside3MetadataSidebarLevelRateCompareOptions.classList.add("pokdata-metadata-sidebar-levelrate-compare-options");

pokdataAside3MetadataSidebarLevelRateOuter.appendChild(pokdataAside3MetadataSidebarLevelRateCompare);
pokdataAside3MetadataSidebarLevelRateCompare.appendChild(pokdataAside3MetadataSidebarLevelRateCompareTitle);
pokdataAside3MetadataSidebarLevelRateCompareTitle.appendChild(pokdataAside3MetadataSidebarLevelRateCompareTitleText);
pokdataAside3MetadataSidebarLevelRateCompareTitle.appendChild(pokdataAside3MetadataSidebarLevelRateCompareOptions);
pokdataAside3MetadataSidebarLevelRateCompare.appendChild(pokdataAside3MetadataSidebarLevelRateCompareUl);

pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","")

if (defaultLevelingRate == "Erratic") { // Erratic
    pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","• Erratic\nFast\nMedium Fast\nMedium Slow\nSlow\nFluctuating");
}
if (defaultLevelingRate == "Fast") { // Fast
    pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","Erratic\n• Fast\nMedium Fast\nMedium Slow\nSlow\nFluctuating");
}
if (defaultLevelingRate == "Medium Fast") { // Medium Fast
    pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","Erratic\nFast\n• Medium Fast\nMedium Slow\nSlow\nFluctuating");
}
if (defaultLevelingRate == "Medium Slow") { // Medium Slow
    pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","Erratic\nFast\nMedium Fast\n• Medium Slow\nSlow\nFluctuating");
}
if (defaultLevelingRate == "Slow") { // Slow
    pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","Erratic\nFast\nMedium Fast\nMedium Slow\n• Slow\nFluctuating");
}
if (defaultLevelingRate == "Fluctuating") { // Fluctuating
    pokdataAside3MetadataSidebarLevelRateCompareTitleText.lastChild.setAttribute("title","Erratic\nFast\nMedium Fast\nMedium Slow\nSlow\n• Fluctuating");
}


for (var u = 0; u < 1; u++) {

    var pokdataAside3MetadataSidebarLevelRateCompareOptionsInput = document.createElement("input");
    var pokdataAside3MetadataSidebarLevelRateCompareOptionsLabel = document.createElement("label");
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("type","radio");
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-levelrate-compare-option" + x + "-" + q);
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-levelrate-compare-option" + x + "-" + q + "-" + u);
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("value","u");
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("alt","q");
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("autocomplete","off");
    pokdataAside3MetadataSidebarLevelRateCompareOptionsInput.setAttribute("checked","");
    
    pokdataAside3MetadataSidebarLevelRateCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-levelrate-compare-option" + x + "-" + q + "-" + u);
    pokdataAside3MetadataSidebarLevelRateCompareOptionsLabel.innerText = "Other Pokémon";

    pokdataAside3MetadataSidebarLevelRateCompareOptions.appendChild(pokdataAside3MetadataSidebarLevelRateCompareOptionsInput);
    pokdataAside3MetadataSidebarLevelRateCompareOptions.appendChild(pokdataAside3MetadataSidebarLevelRateCompareOptionsLabel);
}


var JSONPath_LevelRateFull = [JSONPath_LevelingRate];
var LevelRateResult = getPokémonData(finaldataLevelingRateAll,defaultLevelingRate,JSONPath_LevelRateFull);

for (var u = 0; u < LevelRateResult.length; u++) {
    var pokdataAside3MetadataSidebarLevelRateCompareLi = document.createElement("li");
    var pokdataAside3MetadataSidebarLevelRateCompareLiImgButton = document.createElement("button");
    var pokdataAside3MetadataSidebarLevelRateCompareLiImg = document.createElement("img");
    var pokdataAside3MetadataSidebarLevelRateCompareLiLevelRateOuter = document.createElement("span");
    pokdataAside3MetadataSidebarLevelRateCompareLiImgButton.classList.add("pokdata-modal-close-open");
    pokdataAside3MetadataSidebarLevelRateCompareLiImgButton.setAttribute("value",getPokémonID(LevelRateResult[u]["Pokémon"]));
    pokdataAside3MetadataSidebarLevelRateCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + LevelRateResult[u]["Folder Name"] + LevelRateResult[u]["File Name"] + ".png";
    pokdataAside3MetadataSidebarLevelRateCompareLiImg.setAttribute("name",LevelRateResult[u]["Folder Name"] + LevelRateResult[u]["File Name"]);
    pokdataAside3MetadataSidebarLevelRateCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

    if (LevelRateResult[u]["Form"] != undefined) {
        pokdataAside3MetadataSidebarLevelRateCompareLiImg.setAttribute("title",LevelRateResult[u]["Form"]);
    }
    else {
        pokdataAside3MetadataSidebarLevelRateCompareLiImg.setAttribute("title",LevelRateResult[u]["Pokémon"]);
    }


    pokdataAside3MetadataSidebarLevelRateCompareUl.appendChild(pokdataAside3MetadataSidebarLevelRateCompareLi);
    pokdataAside3MetadataSidebarLevelRateCompareLi.appendChild(pokdataAside3MetadataSidebarLevelRateCompareLiImgButton);
    pokdataAside3MetadataSidebarLevelRateCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarLevelRateCompareLiImg);
    pokdataAside3MetadataSidebarLevelRateCompareLi.appendChild(pokdataAside3MetadataSidebarLevelRateCompareLiLevelRateOuter);

    if (LevelRateResult[u]["Pokémon"] == getPokémonName(x)) {
        pokdataAside3MetadataSidebarLevelRateCompareLiImg.classList.add("select");
    }

    for (var p = 0; p < JSONPath_LevelRateFull.length; p++) {
        var pokdataAside3MetadataSidebarLevelRateCompareLiLevelRate = document.createElement("p");

        if (LevelRateResult[u][JSONPath_LevelRateFull[p]] == undefined) {
            pokdataAside3MetadataSidebarLevelRateCompareLiLevelRate.innerText = "";
        }
        else {
            pokdataAside3MetadataSidebarLevelRateCompareLiLevelRate.innerText = LevelRateResult[u][JSONPath_LevelRateFull[p]];
        }
        pokdataAside3MetadataSidebarLevelRateCompareLiLevelRate.setAttribute("title","Leveling Rate");
        pokdataAside3MetadataSidebarLevelRateCompareLiLevelRateOuter.appendChild(pokdataAside3MetadataSidebarLevelRateCompareLiLevelRate);

        if (LevelRateResult[u][JSONPath_LevelRateFull[p]] == defaultLevelingRate) {
            pokdataAside3MetadataSidebarLevelRateCompareLiLevelRate.classList.add("select");
        }
      
    }
}







var pokdataAside3MetadataSidebarExpYieldCompare = document.createElement("div");
var pokdataAside3MetadataSidebarExpYieldCompareTitle = document.createElement("span");
var pokdataAside3MetadataSidebarExpYieldCompareTitleText = document.createElement("h3");
var pokdataAside3MetadataSidebarExpYieldCompareOptions = document.createElement("div");
var pokdataAside3MetadataSidebarExpYieldCompareUl = document.createElement("ul");

pokdataAside3MetadataSidebarExpYieldCompare.setAttribute("id","pokdata-metadata-sidebar-expyield-compare");
pokdataAside3MetadataSidebarExpYieldCompareOptions.classList.add("pokdata-metadata-sidebar-expyield-compare-options");

pokdataAside3MetadataSidebarExpYieldOuter.appendChild(pokdataAside3MetadataSidebarExpYieldCompare);
pokdataAside3MetadataSidebarExpYieldCompare.appendChild(pokdataAside3MetadataSidebarExpYieldCompareTitle);
pokdataAside3MetadataSidebarExpYieldCompareTitle.appendChild(pokdataAside3MetadataSidebarExpYieldCompareTitleText);
pokdataAside3MetadataSidebarExpYieldCompareTitle.appendChild(pokdataAside3MetadataSidebarExpYieldCompareOptions);
pokdataAside3MetadataSidebarExpYieldCompare.appendChild(pokdataAside3MetadataSidebarExpYieldCompareUl);


if (parseInt(defaultExperienceYield) >= 300) { // Very High
    pokdataAside3MetadataSidebarExpYieldCompareTitleText.innerHTML = "<span>Experience Yield:</span>" + "<span title='• Very High: 300+\nHigh: 200-299\nMedium: 100-199\nLow: 50-99\nVery Low: 0-49'>" + defaultExperienceYield + "</span>";
}
if (parseInt(defaultExperienceYield) >= 200 && parseInt(defaultExperienceYield) <= 299) { // High
    pokdataAside3MetadataSidebarExpYieldCompareTitleText.innerHTML = "<span>Experience Yield:</span>" + "<span title='Very High: 300+\n• High: 200-299\nMedium: 100-199\nLow: 50-99\nVery Low: 0-49'>" + defaultExperienceYield + "</span>";
}
if (parseInt(defaultExperienceYield) >= 100 && parseInt(defaultExperienceYield) <= 199) { // Medium
    pokdataAside3MetadataSidebarExpYieldCompareTitleText.innerHTML = "<span>Experience Yield:</span>" + "<span title='Very High: 300+\nHigh: 200-299\n• Medium: 100-199\nLow: 50-99\nVery Low: 0-49'>" + defaultExperienceYield + "</span>";
}
if (parseInt(defaultExperienceYield) >= 50 && parseInt(defaultExperienceYield) <= 99) { // Low
    pokdataAside3MetadataSidebarExpYieldCompareTitleText.innerHTML = "<span>Experience Yield:</span>" + "<span title='Very High: 300+\nHigh: 200-299\nMedium: 100-199\n• Low: 50-99\nVery Low: 0-49'>" + defaultExperienceYield + "</span>";
}
if (parseInt(defaultExperienceYield) >= 0 && parseInt(defaultExperienceYield) <= 49) { // Very Low
    pokdataAside3MetadataSidebarExpYieldCompareTitleText.innerHTML = "<span>Experience Yield:</span>" + "<span title='Very High: 300+\nHigh: 200-299\nMedium: 100-199\nLow: 50-99\n• Very Low: 0-49'>" + defaultExperienceYield + "</span>";
}

for (var u = 0; u < 1; u++) {

    var pokdataAside3MetadataSidebarExpYieldCompareOptionsInput = document.createElement("input");
    var pokdataAside3MetadataSidebarExpYieldCompareOptionsLabel = document.createElement("label");
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("type","radio");
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-expyield-compare-option" + x + "-" + q);
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-expyield-compare-option" + x + "-" + q + "-" + u);
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("value","u");
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("alt","q");
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("autocomplete","off");
    pokdataAside3MetadataSidebarExpYieldCompareOptionsInput.setAttribute("checked","");
    
    pokdataAside3MetadataSidebarExpYieldCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-expyield-compare-option" + x + "-" + q + "-" + u);
    pokdataAside3MetadataSidebarExpYieldCompareOptionsLabel.innerText = "Other Pokémon";

    pokdataAside3MetadataSidebarExpYieldCompareOptions.appendChild(pokdataAside3MetadataSidebarExpYieldCompareOptionsInput);
    pokdataAside3MetadataSidebarExpYieldCompareOptions.appendChild(pokdataAside3MetadataSidebarExpYieldCompareOptionsLabel);
}

var JSONPath_ExperienceYieldFull = [JSONPath_ExperienceYield];
var ExpYieldResult = getPokémonExperienceYield(finaldataExperienceYieldAll,pokdataAside3MetadataSidebarExpYield.innerText,JSONPath_ExperienceYieldFull);

ExpYieldResult.sort(function (a, b) {
    return b[JSONPath_ExperienceYield] - a[JSONPath_ExperienceYield];
});


for (var u = 0; u < ExpYieldResult.length; u++) {
    var pokdataAside3MetadataSidebarExpYieldCompareLi = document.createElement("li");
    var pokdataAside3MetadataSidebarExpYieldCompareLiImgButton = document.createElement("button");
    var pokdataAside3MetadataSidebarExpYieldCompareLiImg = document.createElement("img");
    var pokdataAside3MetadataSidebarExpYieldCompareLiExpYieldOuter = document.createElement("span");
    pokdataAside3MetadataSidebarExpYieldCompareLiImgButton.classList.add("pokdata-modal-close-open");
    pokdataAside3MetadataSidebarExpYieldCompareLiImgButton.setAttribute("value",getPokémonID(ExpYieldResult[u]["Pokémon"]));
    pokdataAside3MetadataSidebarExpYieldCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + ExpYieldResult[u]["Folder Name"] + ExpYieldResult[u]["File Name"] + ".png";
    pokdataAside3MetadataSidebarExpYieldCompareLiImg.setAttribute("name",ExpYieldResult[u]["Folder Name"] + ExpYieldResult[u]["File Name"]);
    pokdataAside3MetadataSidebarExpYieldCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

    if (ExpYieldResult[u]["Form"] != undefined) {
        pokdataAside3MetadataSidebarExpYieldCompareLiImg.setAttribute("title",ExpYieldResult[u]["Form"]);
    }
    else {
        pokdataAside3MetadataSidebarExpYieldCompareLiImg.setAttribute("title",ExpYieldResult[u]["Pokémon"]);
    }

    pokdataAside3MetadataSidebarExpYieldCompareUl.appendChild(pokdataAside3MetadataSidebarExpYieldCompareLi);
    pokdataAside3MetadataSidebarExpYieldCompareLi.appendChild(pokdataAside3MetadataSidebarExpYieldCompareLiImgButton);
    pokdataAside3MetadataSidebarExpYieldCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarExpYieldCompareLiImg);
    pokdataAside3MetadataSidebarExpYieldCompareLi.appendChild(pokdataAside3MetadataSidebarExpYieldCompareLiExpYieldOuter);

    if (ExpYieldResult[u]["Pokémon"] == getPokémonName(x)) {
        pokdataAside3MetadataSidebarExpYieldCompareLiImg.classList.add("select");
    }

    for (var p = 0; p < JSONPath_ExperienceYieldFull.length; p++) {
        var pokdataAside3MetadataSidebarExpYieldCompareLiExpYield = document.createElement("p");

        if (ExpYieldResult[u][JSONPath_ExperienceYieldFull[p]] == undefined) {
            pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.innerText = "";
        }
        else {
            pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.innerText = ExpYieldResult[u][JSONPath_ExperienceYieldFull[p]];
        }
        pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.setAttribute("title","Experience Yield");
        pokdataAside3MetadataSidebarExpYieldCompareLiExpYieldOuter.appendChild(pokdataAside3MetadataSidebarExpYieldCompareLiExpYield);

        if (ExpYieldResult[u][JSONPath_ExperienceYieldFull[p]] == defaultExperienceYield) {
            pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.classList.add("select");
        }
      
    }
    for (var p = 0; p < JSONPath_ExperienceYieldFull.length; p++) {
        var pokdataAside3MetadataSidebarExpYieldCompareLiExpYield = document.createElement("p");

        if (ExpYieldResult[u][JSONPath_ExperienceYieldFull[p]] == undefined) {
            pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.innerText = "";
        }
        else {
            pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.innerText = ExpYieldResult[u]["Category"];
        }
        pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.setAttribute("title","Experience Yield");
        pokdataAside3MetadataSidebarExpYieldCompareLiExpYieldOuter.appendChild(pokdataAside3MetadataSidebarExpYieldCompareLiExpYield);

        if (ExpYieldResult[u]["Category"] == pokdataAside3MetadataSidebarExpYieldCompareTitleText.lastElementChild.innerText) {
            pokdataAside3MetadataSidebarExpYieldCompareLiExpYield.classList.add("select");
        }
      
    }
}







if (JSONPath_HeldItem != undefined) {

var HeldItemExists = "";
for (q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
    if (finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem] != undefined && finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem] != "") {
        HeldItemExists += "true";
    }
}

if (HeldItemExists.includes("true")) {
var pokdataAside3MetadataSidebarRow5 = document.createElement("div");

var pokdataAside3MetadataSidebarHeldItemOuter = document.createElement("span");
var pokdataAside3MetadataSidebarHeldItemTitle = document.createElement("h5");

pokdataAside3MetadataSidebarHeldItemOuter.setAttribute("id","pokdata-metadata-sidebar-helditem");
pokdataAside3MetadataSidebarHeldItemOuter.setAttribute("name","Held Item");
pokdataAside3MetadataSidebarHeldItemTitle.innerText = "Held Item";

pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarRow5);
pokdataAside3MetadataSidebarRow5.appendChild(pokdataAside3MetadataSidebarHeldItemOuter);
pokdataAside3MetadataSidebarHeldItemOuter.appendChild(pokdataAside3MetadataSidebarHeldItemTitle);


for (q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
    if (finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem] != undefined && finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem] != "") {
        var pokdataAside3MetadataSidebarHeldItem = document.createElement("div");
        var pokdataAside3MetadataSidebarHeldItemImg = document.createElement("img");
        pokdataAside3MetadataSidebarHeldItem.classList.add("pokdata-metadata-sidebar-helditem-img-outer");
        pokdataAside3MetadataSidebarHeldItem.setAttribute("id","pokdata-metadata-sidebar-helditem-img-outer" + q)
        pokdataAside3MetadataSidebarHeldItemImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + [finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem]]  + ".png";
        pokdataAside3MetadataSidebarHeldItemImg.title = [finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem]];
        pokdataAside3MetadataSidebarHeldItemImg.setAttribute("id","pokdata-metadata-sidebar-helditem-img");
        pokdataAside3MetadataSidebarHeldItemImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        pokdataAside3MetadataSidebarHeldItemImg.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
        pokdataAside3MetadataSidebarHeldItemOuter.appendChild(pokdataAside3MetadataSidebarHeldItem);
        pokdataAside3MetadataSidebarHeldItem.appendChild(pokdataAside3MetadataSidebarHeldItemImg);


        
        var pokdataAside3MetadataSidebarHeldItemCompare = document.createElement("div");
        var pokdataAside3MetadataSidebarHeldItemCompareTitle = document.createElement("div");
        var pokdataAside3MetadataSidebarHeldItemCompareTitleID = document.createElement("h4");
        var pokdataAside3MetadataSidebarHeldItemCompareTitleText = document.createElement("h2");
        var pokdataAside3MetadataSidebarHeldItemCompareTitlePercentage = document.createElement("h3");  
        var pokdataAside3MetadataSidebarHeldItemCompareTitleIMG = document.createElement("img");
        var pokdataAside3MetadataSidebarHeldItemCompareOptions = document.createElement("div");
        var pokdataAside3MetadataSidebarHeldItemCompareDescription = document.createElement("p");
        var pokdataAside3MetadataSidebarHeldItemCompareDescriptionText = document.createElement("span");
        var pokdataAside3MetadataSidebarHeldItemCompareUl = document.createElement("ul");
        

        pokdataAside3MetadataSidebarHeldItemCompare.classList.add("pokdata-metadata-sidebar-helditem-compare");
        pokdataAside3MetadataSidebarHeldItemCompare.setAttribute("id","pokdata-metadata-sidebar-helditem-compare" + q);
        pokdataAside3MetadataSidebarHeldItemCompareTitle.classList.add("pokdata-metadata-sidebar-helditem-compare-title")
        pokdataAside3MetadataSidebarHeldItemCompareTitleID.innerText = "#1";
        pokdataAside3MetadataSidebarHeldItemCompareTitleText.innerText = [finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem]];
        pokdataAside3MetadataSidebarHeldItemCompareTitlePercentage.innerText = JSONPath_HeldItemPercentage[q];
        pokdataAside3MetadataSidebarHeldItemCompareTitleIMG.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + [finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem]]  + ".png";
        pokdataAside3MetadataSidebarHeldItemCompareTitleIMG.setAttribute("title",[finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem]]);

        pokdataAside3MetadataSidebarHeldItemCompareTitleIMG.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        pokdataAside3MetadataSidebarHeldItemCompareOptions.setAttribute("name","");
        pokdataAside3MetadataSidebarHeldItemCompareOptions.classList.add("pokdata-metadata-sidebar-helditem-compare-options");
        pokdataAside3MetadataSidebarHeldItemCompareDescriptionText.innerText = "A peculiar stone that makes certain species of Pokémon evolve. It is black as the night sky.";

        pokdataAside3MetadataSidebarHeldItem.appendChild(pokdataAside3MetadataSidebarHeldItemCompare);
        pokdataAside3MetadataSidebarHeldItemCompare.appendChild(pokdataAside3MetadataSidebarHeldItemCompareTitle);
        pokdataAside3MetadataSidebarHeldItemCompareTitle.appendChild(pokdataAside3MetadataSidebarHeldItemCompareTitleID); 
        pokdataAside3MetadataSidebarHeldItemCompareTitle.appendChild(pokdataAside3MetadataSidebarHeldItemCompareTitleText);
        pokdataAside3MetadataSidebarHeldItemCompareTitle.appendChild(pokdataAside3MetadataSidebarHeldItemCompareTitlePercentage);
        pokdataAside3MetadataSidebarHeldItemCompareTitle.appendChild(pokdataAside3MetadataSidebarHeldItemCompareTitleIMG);
        pokdataAside3MetadataSidebarHeldItemCompare.appendChild(pokdataAside3MetadataSidebarHeldItemCompareOptions);
        pokdataAside3MetadataSidebarHeldItemCompare.appendChild(pokdataAside3MetadataSidebarHeldItemCompareDescription);
        pokdataAside3MetadataSidebarHeldItemCompareDescription.appendChild(pokdataAside3MetadataSidebarHeldItemCompareDescriptionText);
        pokdataAside3MetadataSidebarHeldItemCompare.appendChild(pokdataAside3MetadataSidebarHeldItemCompareUl);

        for (var u = 0; u < 2; u++) {

            var pokdataAside3MetadataSidebarHeldItemCompareOptionsInput = document.createElement("input");
            var pokdataAside3MetadataSidebarHeldItemCompareOptionsLabel = document.createElement("label");
            pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("type","radio");
            pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("name","pokdata-metadata-sidebar-helditem-compare-option" + x + "-" + q);
            pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("id","pokdata-metadata-sidebar-helditem-compare-option" + x + "-" + q + "-" + u);
            pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("value",u);
            pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("alt",q);
            pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("autocomplete","off");
            if (u == 0) {
                pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("onclick","if(this.checked==true){this.parentElement.nextElementSibling.style.display='block';this.parentElement.nextElementSibling.nextElementSibling.style.display='none'}");
                pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("checked","");
                pokdataAside3MetadataSidebarHeldItemCompareOptionsLabel.innerText = "Description";
            }
            if (u == 1) {
                pokdataAside3MetadataSidebarHeldItemCompareOptionsInput.setAttribute("onclick","if(this.checked==true){this.parentElement.nextElementSibling.style.display='none';this.parentElement.nextElementSibling.nextElementSibling.style.display='block'}");
                pokdataAside3MetadataSidebarHeldItemCompareOptionsLabel.innerText = "Other Pokémon";
            }
            
            pokdataAside3MetadataSidebarHeldItemCompareOptionsLabel.setAttribute("for","pokdata-metadata-sidebar-helditem-compare-option" + x + "-" + q + "-" + u);

            pokdataAside3MetadataSidebarHeldItemCompareOptions.appendChild(pokdataAside3MetadataSidebarHeldItemCompareOptionsInput);
            pokdataAside3MetadataSidebarHeldItemCompareOptions.appendChild(pokdataAside3MetadataSidebarHeldItemCompareOptionsLabel);
        }


        var JSONPath_HeldItemFull = JSONPath_HeldItemPercentage;
        JSONPath_HeldItemFull = JSONPath_HeldItemFull.map(i => i + "_" + JSONPath_HeldItem);
    
        var ItemResult = getPokémonData(finaldataHeldItemAll,finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem],JSONPath_HeldItemFull);

        for (var u = 0; u < ItemResult.length; u++) {
            var pokdataAside3MetadataSidebarHeldItemCompareLi = document.createElement("li");
            var pokdataAside3MetadataSidebarHeldItemCompareLiImgButton = document.createElement("button");
            var pokdataAside3MetadataSidebarHeldItemCompareLiImg = document.createElement("img");
            var pokdataAside3MetadataSidebarHeldItemCompareLiItemOuter = document.createElement("span");
            pokdataAside3MetadataSidebarHeldItemCompareLiImgButton.classList.add("pokdata-modal-close-open");
            pokdataAside3MetadataSidebarHeldItemCompareLiImgButton.setAttribute("value",getPokémonID(ItemResult[u]["Pokémon"]));
            pokdataAside3MetadataSidebarHeldItemCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + ItemResult[u]["Folder Name"] + ItemResult[u]["File Name"] + ".png";
            pokdataAside3MetadataSidebarHeldItemCompareLiImg.setAttribute("name",ItemResult[u]["Folder Name"] + ItemResult[u]["File Name"]);
            pokdataAside3MetadataSidebarHeldItemCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");

            if (ItemResult[u]["Form"] != undefined) {
                pokdataAside3MetadataSidebarHeldItemCompareLiImg.setAttribute("title",ItemResult[u]["Form"]);
            }
            else {
                pokdataAside3MetadataSidebarHeldItemCompareLiImg.setAttribute("title",ItemResult[u]["Pokémon"]);
            }
    

            pokdataAside3MetadataSidebarHeldItemCompareUl.appendChild(pokdataAside3MetadataSidebarHeldItemCompareLi);
            pokdataAside3MetadataSidebarHeldItemCompareLi.appendChild(pokdataAside3MetadataSidebarHeldItemCompareLiImgButton);
            pokdataAside3MetadataSidebarHeldItemCompareLiImgButton.appendChild(pokdataAside3MetadataSidebarHeldItemCompareLiImg);
            pokdataAside3MetadataSidebarHeldItemCompareLi.appendChild(pokdataAside3MetadataSidebarHeldItemCompareLiItemOuter);
    
            if (ItemResult[u]["Pokémon"] == getPokémonName(x)) {
                pokdataAside3MetadataSidebarHeldItemCompareLiImg.classList.add("select");
            }

            for (var p = 0; p < JSONPath_HeldItemFull.length; p++) {
                if (ItemResult[u][JSONPath_HeldItemFull[p]] != undefined) {
                    var pokdataAside3MetadataSidebarHeldItemCompareLiItem = document.createElement("p");
                    var pokdataAside3MetadataSidebarHeldItemCompareLiItemImg = document.createElement("img");
                    pokdataAside3MetadataSidebarHeldItemCompareLiItemImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + ItemResult[u][JSONPath_HeldItemFull[p]] + ".png";
                    pokdataAside3MetadataSidebarHeldItemCompareLiItemImg.setAttribute("title",ItemResult[u][JSONPath_HeldItemFull[p]]);
                    pokdataAside3MetadataSidebarHeldItemCompareLiItemImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
                    pokdataAside3MetadataSidebarHeldItemCompareLiItemImg.setAttribute("name","item");
                    pokdataAside3MetadataSidebarHeldItemCompareLiItem.innerHTML += JSONPath_HeldItemFull[p].split("_")[0];
                    pokdataAside3MetadataSidebarHeldItemCompareLiItemOuter.appendChild(pokdataAside3MetadataSidebarHeldItemCompareLiItem);
                    pokdataAside3MetadataSidebarHeldItemCompareLiItem.appendChild(pokdataAside3MetadataSidebarHeldItemCompareLiItemImg);
                }
                if (ItemResult[u][JSONPath_HeldItemFull[p]] == [finaldataHeldItemDefault[i][JSONPath_HeldItemPercentage[q]+"_"+JSONPath_HeldItem]]) {
                    pokdataAside3MetadataSidebarHeldItemCompareLiItem.classList.add("select");
                }
            }
        }
    }

}
HeldItemExists = "";
}
}

BaseStatCalc();
EVYieldCalc();
showMetadataLearnsetArea();
}



function BaseStatCalc() {

    var BaseStatsHP = [];
    var BaseStatsAtk = [];
    var BaseStatsDef = [];
    var BaseStatsSpecial = [];
    var BaseStatsSpAtk = [];
    var BaseStatsSpDef = [];
    var BaseStatsSpeed = [];
    var BaseStatsTotal = [];

    for (var q = 0; q < finaldataLengthAll.length; q++) {
        if (finaldataLengthAll[q] == true) {
            if (finaldataBaseStatsAll[q]["HP_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["HP_"+JSONPath_BaseStats] != "") {
                BaseStatsHP.push(parseInt(finaldataBaseStatsAll[q]["HP_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Attack_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Attack_"+JSONPath_BaseStats] != "") {
                BaseStatsAtk.push(parseInt(finaldataBaseStatsAll[q]["Attack_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Defense_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Defense_"+JSONPath_BaseStats] != "") {
                BaseStatsDef.push(parseInt(finaldataBaseStatsAll[q]["Defense_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Special_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Special_"+JSONPath_BaseStats] != "") {
                BaseStatsSpecial.push(parseInt(finaldataBaseStatsAll[q]["Special_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Sp. Atk_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Sp. Atk_"+JSONPath_BaseStats] != "") {
                BaseStatsSpAtk.push(parseInt(finaldataBaseStatsAll[q]["Sp. Atk_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Sp. Def_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Sp. Def_"+JSONPath_BaseStats] != "") {
                BaseStatsSpDef.push(parseInt(finaldataBaseStatsAll[q]["Sp. Def_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Speed_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Speed_"+JSONPath_BaseStats] != "") {
                BaseStatsSpeed.push(parseInt(finaldataBaseStatsAll[q]["Speed_"+JSONPath_BaseStats]));
            }
            if (finaldataBaseStatsAll[q]["Total_"+JSONPath_BaseStats] != undefined && finaldataBaseStatsAll[q]["Total_"+JSONPath_BaseStats] != "") {
                BaseStatsTotal.push(parseInt(finaldataBaseStatsAll[q]["Total_"+JSONPath_BaseStats]));
            }
        }
    }

    var baseval = document.querySelectorAll(".pokdata-basestats ul[name='basestats'] > li span");
    for (var q = 0; q < baseval.length; q++) {
        baseval[q].innerHTML = baseval[q].value + "&thinsp;&thinsp;";
    }

    
    var basehp = document.querySelectorAll(".basestats-hp span");
    var baseatk = document.querySelectorAll(".basestats-atk span");
    var basedef = document.querySelectorAll(".basestats-def span");
    var basespecial = document.querySelectorAll(".basestats-special span");
    var basespatk = document.querySelectorAll(".basestats-spatk span");
    var basespdef = document.querySelectorAll(".basestats-spdef span");
    var basespeed = document.querySelectorAll(".basestats-speed span");
    var basetotal = document.querySelectorAll(".basestats-total span");

    for (var q = 0; q < basehp.length; q++) {
        basehp[q].style.width = basehp[q].value / Math.max.apply(Math,BaseStatsHP) * 100 + "%";
    }
    for (var q = 0; q < baseatk.length; q++) {
        baseatk[q].style.width = baseatk[q].value / Math.max.apply(Math,BaseStatsAtk) * 100 + "%";
    }
    for (var q = 0; q < basedef.length; q++) {
        basedef[q].style.width = basedef[q].value / Math.max.apply(Math,BaseStatsDef) * 100 + "%";
    }
    for (var q = 0; q < basespecial.length; q++) {
        basespecial[q].style.width = basespecial[q].value / Math.max.apply(Math,BaseStatsSpecial) * 100 + "%";
    }
    for (var q = 0; q < basespatk.length; q++) {
        basespatk[q].style.width = basespatk[q].value / Math.max.apply(Math,BaseStatsSpAtk) * 100 + "%";
    }
    for (var q = 0; q < basespdef.length; q++) {
        basespdef[q].style.width = basespdef[q].value / Math.max.apply(Math,BaseStatsSpDef) * 100 + "%";
    }
    for (var q = 0; q < basespeed.length; q++) {
        basespeed[q].style.width = basespeed[q].value / Math.max.apply(Math,BaseStatsSpeed) * 100 + "%";
    }
    for (var q = 0; q < basetotal.length; q++) {
        basetotal[q].style.width = basetotal[q].value / Math.max.apply(Math,BaseStatsTotal) * 100 + "%";
    }
}




function EVYieldCalc() {

    var EVYieldHP = [];
    var EVYieldAtk = [];
    var EVYieldDef = [];
    var EVYieldSpecial = [];
    var EVYieldSpAtk = [];
    var EVYieldSpDef = [];
    var EVYieldSpeed = [];
    var EVYieldTotal = [];

    for (var q = 0; q < finaldataLengthAll.length; q++) {
        if (finaldataLengthAll[q] == true) {
            if (finaldataEVYieldAll[q]["HP_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["HP_"+JSONPath_EVYield] != "") {
                EVYieldHP.push(parseInt(finaldataEVYieldAll[q]["HP_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Attack_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Attack_"+JSONPath_EVYield] != "") {
                EVYieldAtk.push(parseInt(finaldataEVYieldAll[q]["Attack_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Defense_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Defense_"+JSONPath_EVYield] != "") {
                EVYieldDef.push(parseInt(finaldataEVYieldAll[q]["Defense_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Special_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Special_"+JSONPath_EVYield] != "") {
                EVYieldSpecial.push(parseInt(finaldataEVYieldAll[q]["Special_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Sp. Atk_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Sp. Atk_"+JSONPath_EVYield] != "") {
                EVYieldSpAtk.push(parseInt(finaldataEVYieldAll[q]["Sp. Atk_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Sp. Def_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Sp. Def_"+JSONPath_EVYield] != "") {
                EVYieldSpDef.push(parseInt(finaldataEVYieldAll[q]["Sp. Def_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Speed_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Speed_"+JSONPath_EVYield] != "") {
                EVYieldSpeed.push(parseInt(finaldataEVYieldAll[q]["Speed_"+JSONPath_EVYield]));
            }
            if (finaldataEVYieldAll[q]["Total_"+JSONPath_EVYield] != undefined && finaldataEVYieldAll[q]["Total_"+JSONPath_EVYield] != "") {
                EVYieldTotal.push(parseInt(finaldataEVYieldAll[q]["Total_"+JSONPath_EVYield]));
            }
        }
    }

    var evval = document.querySelectorAll(".pokdata-basestats ul[name='evyield'] > li span");
    for (var q = 0; q < evval.length; q++) {
        evval[q].innerHTML = evval[q].value + "&thinsp;&thinsp;";
    }

    
    var evhp = document.querySelectorAll(".evyield-hp span");
    var evatk = document.querySelectorAll(".evyield-atk span");
    var evdef = document.querySelectorAll(".evyield-def span");
    var evspecial = document.querySelectorAll(".evyield-special span");
    var evspatk = document.querySelectorAll(".evyield-spatk span");
    var evspdef = document.querySelectorAll(".evyield-spdef span");
    var evspeed = document.querySelectorAll(".evyield-speed span");
    var evtotal = document.querySelectorAll(".evyield-total span");

    for (var q = 0; q < evhp.length; q++) {
        evhp[q].style.width = evhp[q].value / Math.max.apply(Math,EVYieldHP) * 100 + "%";
    }
    for (var q = 0; q < evatk.length; q++) {
        evatk[q].style.width = evatk[q].value / Math.max.apply(Math,EVYieldAtk) * 100 + "%";
    }
    for (var q = 0; q < evdef.length; q++) {
        evdef[q].style.width = evdef[q].value / Math.max.apply(Math,EVYieldDef) * 100 + "%";
    }
    for (var q = 0; q < evspecial.length; q++) {
        evspecial[q].style.width = evspecial[q].value / Math.max.apply(Math,EVYieldSpecial) * 100 + "%";
    }
    for (var q = 0; q < evspatk.length; q++) {
        evspatk[q].style.width = evspatk[q].value / Math.max.apply(Math,EVYieldSpAtk) * 100 + "%";
    }
    for (var q = 0; q < evspdef.length; q++) {
        evspdef[q].style.width = evspdef[q].value / Math.max.apply(Math,EVYieldSpDef) * 100 + "%";
    }
    for (var q = 0; q < evspeed.length; q++) {
        evspeed[q].style.width = evspeed[q].value / Math.max.apply(Math,EVYieldSpeed) * 100 + "%";
    }
    for (var q = 0; q < evtotal.length; q++) {
        evtotal[q].style.width = evtotal[q].value / Math.max.apply(Math,EVYieldTotal) * 100 + "%";
    }
}




$('body').click(function(event) {
    if (!$(event.target).closest('.pokdata-evolve[name="evolve-from"]').length && !$(event.target).is('.pokdata-evolve[name="evolve-from"]')) {
        $('.pokdata-evolve[name="evolve-from"] main').removeClass("active");
    }
    if (!$(event.target).closest('.pokdata-evolve[name="evolve-to"]').length && !$(event.target).is('.pokdata-evolve[name="evolve-to"]')) {
        $('.pokdata-evolve[name="evolve-to"] main').removeClass("active");
    }
    if (!$(event.target).closest('.pokdata-portrait').length && !$(event.target).is('.pokdata-portrait')) {
        $('.pokdata-basestats').removeClass("active");
        $('.pokdata-portrait-content img').removeClass("active");
    }
    
    /*
    if (!$(event.target).closest('.pokdata-metadata-sidebar-egggroup-content span[name="Primary"]').length && !$(event.target).is('.pokdata-metadata-sidebar-egggroup-content span[name="Primary"]')) {
        $('.pokdata-metadata-sidebar-egggroup-compare0').removeClass("active");
    }
    if (!$(event.target).closest('.pokdata-metadata-sidebar-egggroup-content span[name="Secondary"]').length && !$(event.target).is('.pokdata-metadata-sidebar-egggroup-content span[name="Secondary"]')) {
        $('.pokdata-metadata-sidebar-egggroup-compare1').removeClass("active");
    }
    
    
    if (!$(event.target).closest('.pokdata-metadata-sidebar-ability span[name="Primary"]').length && !$(event.target).is('.pokdata-metadata-sidebar-ability span[name="Primary"]')) {
        $('.pokdata-metadata-sidebar-ability-compare0').removeClass("active");
    }
    if (!$(event.target).closest('.pokdata-metadata-sidebar-ability span[name="Secondary"]').length && !$(event.target).is('.pokdata-metadata-sidebar-ability span[name="Secondary"]')) {
        $('.pokdata-metadata-sidebar-ability-compare1').removeClass("active");
    }
    if (!$(event.target).closest('.pokdata-metadata-sidebar-ability span[name="Hidden"]').length && !$(event.target).is('.pokdata-metadata-sidebar-ability span[name="Hidden"]')) {
        $('.pokdata-metadata-sidebar-ability-compare2').removeClass("active");
    }


    if (!$(event.target).closest('.pokdata-metadata-sidebar-catchrate-content-outer').length && !$(event.target).is('.pokdata-metadata-sidebar-catchrate-content-outer')) {
        $('#pokdata-metadata-sidebar-catchrate-compare').removeClass("active");
    }

    if (!$(event.target).closest('.pokdata-metadata-sidebar-levelrate-content-outer').length && !$(event.target).is('.pokdata-metadata-sidebar-levelrate-content-outer')) {
        $('#pokdata-metadata-sidebar-levelrate-compare').removeClass("active");
    }

    if (!$(event.target).closest('.pokdata-metadata-sidebar-genderratio-bar').length && !$(event.target).is('.pokdata-metadata-sidebar-genderratio-bar')) {
        $('#pokdata-metadata-sidebar-genderratio-compare').removeClass("active");
    }

    if (!$(event.target).closest('.pokdata-metadata-sidebar-hatchrate-content-outer').length && !$(event.target).is('.pokdata-metadata-sidebar-hatchrate-content-outer')) {
        $('#pokdata-metadata-sidebar-hatchrate-compare').removeClass("active");
    }

    if (!$(event.target).closest('.pokdata-metadata-sidebar-expyield-content-outer').length && !$(event.target).is('.pokdata-metadata-sidebar-expyield-content-outer')) {
        $('#pokdata-metadata-sidebar-expyield-compare').removeClass("active");
    }

    if (!$(event.target).closest('.pokdata-metadata-sidebar-expyield-content-outer').length && !$(event.target).is('.pokdata-metadata-sidebar-expyield-content-outer')) {
        $('#pokdata-metadata-sidebar-expyield-compare').removeClass("active");
    }

    if (!$(event.target).closest('#pokdata-metadata-sidebar-helditem-img-outer0').length && !$(event.target).is('#pokdata-metadata-sidebar-helditem-img-outer0')) {
        $('#pokdata-metadata-sidebar-helditem-compare0').removeClass("active");
    }
    if (!$(event.target).closest('#pokdata-metadata-sidebar-helditem-img-outer1').length && !$(event.target).is('#pokdata-metadata-sidebar-helditem-img-outer1')) {
        $('#pokdata-metadata-sidebar-helditem-compare1').removeClass("active");
    }
    if (!$(event.target).closest('#pokdata-metadata-sidebar-helditem-img-outer2').length && !$(event.target).is('#pokdata-metadata-sidebar-helditem-img-outer2')) {
        $('#pokdata-metadata-sidebar-helditem-compare2').removeClass("active");
    }
    if (!$(event.target).closest('#pokdata-metadata-sidebar-helditem-img-outer3').length && !$(event.target).is('#pokdata-metadata-sidebar-helditem-img-outer3')) {
        $('#pokdata-metadata-sidebar-helditem-compare3').removeClass("active");
    }
    */
});



var navChecker = [1];

function showMetadataLearnsetArea() {
    var MetadataButton = document.querySelectorAll('#pokdata-navigation input[value="1"]');
    
    for (var i = 0; i < MetadataButton.length; i++) {
        MetadataButton[i].addEventListener("click", function() {
            this.parentElement.parentElement.lastElementChild.firstChild.style.display = "flex";
            this.parentElement.parentElement.lastElementChild.firstChild.nextElementSibling.style.display = "none";
            this.parentElement.parentElement.lastElementChild.lastElementChild.style.display = "none";
            navChecker.fill(1);
        });
    }
    var LearnsetButton = document.querySelectorAll('#pokdata-navigation input[value="2"]');
    
    for (var i = 0; i < LearnsetButton.length; i++) {
        LearnsetButton[i].addEventListener("click", function() {
            this.parentElement.parentElement.lastElementChild.firstChild.style.display = "none";
            this.parentElement.parentElement.lastElementChild.firstChild.nextElementSibling.style.display = "flex";
            this.parentElement.parentElement.lastElementChild.lastElementChild.style.display = "none";
            navChecker.fill(2);
        });
    }

    var AreaButton = document.querySelectorAll('#pokdata-navigation input[value="3"]');
    
    for (var i = 0; i < AreaButton.length; i++) {
        AreaButton[i].addEventListener("click", function() {
            this.parentElement.parentElement.lastElementChild.firstChild.style.display = "none";
            this.parentElement.parentElement.lastElementChild.firstChild.nextElementSibling.style.display = "none";
            this.parentElement.parentElement.lastElementChild.lastElementChild.style.display = "flex";
            navChecker.fill(3);
        });
    }
}


function navKeeper(x) {


    var MetadataButton = document.querySelector('#pokdata-modal' + x + ' #pokdata-navigation input[value="1"]');
    var LearnsetButton = document.querySelector('#pokdata-modal' + x + ' #pokdata-navigation input[value="2"]');
    var AreaButton = document.querySelector('#pokdata-modal' + x + ' #pokdata-navigation input[value="3"]');


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



function resetZoom(x) {
    var Zoom = document.querySelector("#pokdata-modal" + x + " .pokdata-zoom-reset");
    Zoom.click();
}










function baseEVData(arrName,value,type,i) {

    var lis = document.querySelectorAll("#pokdata-modal" + i + " .pokdata-basestats > ul[name='otherpokémon'] ul li");
    for (var q = 0; q < lis.length; q++) {
        lis[q].remove();
    }

    document.querySelector("#pokdata-modal" + i + " .pokdata-basestats input[value='3']").click();

    var arr;
    var value;
    var type;
    var arrName;
    
    if (arrName == "Base Stats") {
        var arr = finaldataBaseStatsAll;

        if (Generation == 1) {
            var full = ["HP_"+JSONPath_BaseStats,"Attack_"+JSONPath_BaseStats,"Defense_"+JSONPath_BaseStats,"Special_"+JSONPath_BaseStats,"Speed_"+JSONPath_BaseStats,"Total_"+JSONPath_BaseStats];
        }
        
        if (Generation >= 2) {
            var full = ["HP_"+JSONPath_BaseStats,"Attack_"+JSONPath_BaseStats,"Defense_"+JSONPath_BaseStats,"Sp. Atk_"+JSONPath_BaseStats,"Sp. Def_"+JSONPath_BaseStats,"Speed_"+JSONPath_BaseStats,"Total_"+JSONPath_BaseStats];
        }
        var half = [type+"_"+JSONPath_BaseStats];
    }
    if (arrName == "EV Yield") {
        var arr = finaldataEVYieldAll;

        if (Generation == 1) {
            var full = ["HP_"+JSONPath_EVYield,"Attack_"+JSONPath_EVYield,"Defense_"+JSONPath_EVYield,"Special_"+JSONPath_EVYield,"Speed_"+JSONPath_EVYield,"Total_"+JSONPath_EVYield];
        }
        
        if (Generation >= 2) {
            var full = ["HP_"+JSONPath_EVYield,"Attack_"+JSONPath_EVYield,"Defense_"+JSONPath_EVYield,"Sp. Atk_"+JSONPath_EVYield,"Sp. Def_"+JSONPath_EVYield,"Speed_"+JSONPath_EVYield,"Total_"+JSONPath_EVYield];
        }
        var half = [type+"_"+JSONPath_EVYield];
    }



    var footer = document.querySelector("#pokdata-modal" + i + " .pokdata-basestats > ul[name='otherpokémon'] > h3");

    footer.innerHTML = "<span>"+arrName+"</span><span>"+type+": "+value+"</span>";
    if(value == "All") {
        footer.innerHTML = "<span>"+arrName+"</span><span>"+type+"</span>";
    }
    else {
        footer.innerHTML = "<span>"+arrName+"</span><span>"+type+": "+value+"</span>";
    }
    var StatsEVResult = getPokémonStatsEV(arr,value,full,half);


    var total = ["Total_"+half[0].split("_")[1]]

    StatsEVResult.sort(function (a, b) {
        return b[total] - a[total];
    });



    if (value == "All") {
        StatsEVResult.sort(function (a, b) {
            return b[half] - a[half];
        });
    }

    for (var u = 0; u < StatsEVResult.length; u++) {
        var StatsEVCompareLi = document.createElement("li");
        var StatsEVCompareLiImgButton = document.createElement("button");
        var StatsEVCompareLiImg = document.createElement("img");

        StatsEVCompareLiImgButton.classList.add("pokdata-modal-close-open");
        StatsEVCompareLiImgButton.setAttribute("value",getPokémonID(StatsEVResult[u]["Pokémon"]));
        StatsEVCompareLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + StatsEVResult[u]["Folder Name"] + StatsEVResult[u]["File Name"] + ".png";
        StatsEVCompareLiImg.setAttribute("name",StatsEVResult[u]["Folder Name"] + StatsEVResult[u]["File Name"]);
        StatsEVCompareLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        
        if (StatsEVResult[u]["Form"] != undefined) {
            StatsEVCompareLiImg.setAttribute("title",StatsEVResult[u]["Form"]); 
        }
        else {
            StatsEVCompareLiImg.setAttribute("title",StatsEVResult[u]["Pokémon"]);
        }

        if (getPokémonID(StatsEVResult[u]["Pokémon"]) == i.toString()) {
            StatsEVCompareLiImg.classList.add("select");
        }

        document.querySelector("#pokdata-modal" + i + " .pokdata-basestats > ul[name='otherpokémon'] ul").appendChild(StatsEVCompareLi);
        StatsEVCompareLi.appendChild(StatsEVCompareLiImgButton);
        StatsEVCompareLiImgButton.appendChild(StatsEVCompareLiImg);

    
        if (StatsEVResult[u]["Pokémon"] == getPokémonName(x)) {
            StatsEVCompareLiImg.classList.add("select");
        }
    
        for (var p = 0; p < full.length; p++) {
            var StatsEVCompareLiStatsEV = document.createElement("p");
            if (StatsEVResult[u][full[p]] == undefined) {
                StatsEVCompareLiStatsEV.innerText = "";
            }
            else {
                StatsEVCompareLiStatsEV.innerText = StatsEVResult[u][full[p]];
            }
            StatsEVCompareLiStatsEV.setAttribute("title",full[p].split("_")[0]);
            StatsEVCompareLi.appendChild(StatsEVCompareLiStatsEV);

            if (full[p].split("_")[0] == type && StatsEVResult[u][full[p]] == value || full[p].split("_")[0] == type && value == "All") {
                StatsEVCompareLiStatsEV.classList.add("select");
            }
        }
    }
    modalPokdata();
}