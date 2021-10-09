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
var defaultHatchRateEggCycle = finaldataHatchRateDefault[i]["EggCycle_"+JSONPath_HatchRateEggCycle];
var defaultHatchRateSteps = finaldataHatchRateDefault[i]["Steps_"+JSONPath_HatchRateSteps];
var defaultExperienceYield = finaldataExperienceYieldDefault[i][JSONPath_ExperienceYield];


var pokdataDiv = document.createElement("div");
var pokdataDivOverlay = document.createElement("div");
var pokdataDivContent = document.createElement("div");
var pokdataNavigation = document.createElement("section");
var pokdataNavigationInput1 = document.createElement("input");
var pokdataNavigationLabel1 = document.createElement("label");
var pokdataNavigationInput2 = document.createElement("input");
var pokdataNavigationLabel2 = document.createElement("label");
var pokdataAside0 = document.createElement("aside");

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
var pokdataAside1Portrait = document.createElement("img");

var pokdataAside1BaseStats = document.createElement("div");
var pokdataAside1BaseStatsName = document.createElement("div");

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
var pokdataAside1TypePrimary = document.createElement("img");
var pokdataAside1TypeSecondary = document.createElement("img");
var pokdataAside1TypeBreak = document.createElement("br");

var pokdataAside2 = document.createElement("aside");

var pokdataAside3 = document.createElement("aside");


var pokdataAside3Metadata = document.createElement("div");
var pokdataAside3DescriptionOuter = document.createElement("div");
var pokdataAside3Description = document.createElement("p");

var pokdataAside3MetadataSpan = document.createElement("span");

var pokdataAside3MetadataSidebarOuter = document.createElement("div");
var pokdataAside3MetadataSidebar = document.createElement("div");

var pokdataAside3MetadataSidebarForm = document.createElement("div");
var pokdataAside3MetadataSidebarFormDefaultInput = document.createElement("input");
var pokdataAside3MetadataSidebarFormDefaultLabel = document.createElement("label");

var pokdataAside3MetadataSidebarAbilityOuter = document.createElement("div");
var pokdataAside3MetadataSidebarAbilityPrimary = document.createElement("b");
var pokdataAside3MetadataSidebarAbilitySecondary = document.createElement("b");
var pokdataAside3MetadataSidebarAbilityHidden = document.createElement("b");
var pokdataAside3MetadataSidebarCatchRateOuter = document.createElement("div");
var pokdataAside3MetadataSidebarCatchRateContent = document.createElement("p");
var pokdataAside3MetadataSidebarCatchRateTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarCatchRate = document.createElement("h3");
var pokdataAside3MetadataSidebarLevelRateOuter = document.createElement("div");
var pokdataAside3MetadataSidebarLevelRateContent = document.createElement("p");
var pokdataAside3MetadataSidebarLevelRateTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarLevelRate = document.createElement("h4");
var pokdataAside3MetadataSidebarGenderRatioOuter = document.createElement("div");
var pokdataAside3MetadataSidebarGenderRatioContent = document.createElement("p");
var pokdataAside3MetadataSidebarGenderRatioTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarGenderRatioMale = document.createElement("span");
var pokdataAside3MetadataSidebarGenderRatioFemale = document.createElement("span");
var pokdataAside3MetadataSidebarGenderRatioGenderless = document.createElement("span");
var pokdataAside3MetadataSidebarGenderRatio = document.createElement("p");
var pokdataAside3MetadataSidebarEggGroupOuter = document.createElement("div");
var pokdataAside3MetadataSidebarEggGroupContent = document.createElement("p");
var pokdataAside3MetadataSidebarEggGroupTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarEggGroup1 = document.createElement("b");
var pokdataAside3MetadataSidebarEggGroup2 = document.createElement("b");
var pokdataAside3MetadataSidebarHatchRateOuter = document.createElement("div");
var pokdataAside3MetadataSidebarHatchRateContent = document.createElement("p");
var pokdataAside3MetadataSidebarHatchRateTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarHatchRate = document.createElement("h3");
var pokdataAside3MetadataSidebarExpYieldOuter = document.createElement("div");
var pokdataAside3MetadataSidebarExpYieldContent = document.createElement("p");
var pokdataAside3MetadataSidebarExpYieldTitle = document.createElement("h5");
var pokdataAside3MetadataSidebarExpYield = document.createElement("h3");
var pokdataAside3MetadataSidebarHeldItemOuter = document.createElement("div");
var pokdataAside3MetadataSidebarHeldItemContent = document.createElement("p");
var pokdataAside3MetadataSidebarHeldItemTitle = document.createElement("h5");






pokdataDiv.setAttribute("id","pokdata-modal" + x);
pokdataDiv.classList.add("pokdata-modal-outer");
pokdataDivOverlay.classList.add("pokdata-modal-overlay");
pokdataDivOverlay.classList.add("pokdata-modal-close");
pokdataDivContent.classList.add("pokdata-modal");
pokdataNavigation.setAttribute("id","pokdata-navigation");
pokdataNavigationInput1.setAttribute("type","radio");
pokdataNavigationInput1.setAttribute("name","pokdata-navigation" + x);
pokdataNavigationInput1.setAttribute("id","pokdata-navigation-main" + x);
pokdataNavigationInput1.classList.add("pokdata-navigation-main");
pokdataNavigationInput1.setAttribute("value","1");
pokdataNavigationInput1.setAttribute("checked","");
pokdataNavigationLabel1.setAttribute("for","pokdata-navigation-main" + x);
pokdataNavigationLabel1.innerText = "Main";
pokdataNavigationInput2.setAttribute("type","radio");
pokdataNavigationInput2.setAttribute("name","pokdata-navigation" + x);
pokdataNavigationInput2.setAttribute("id","pokdata-navigation-area" + x);
pokdataNavigationInput2.classList.add("pokdata-navigation-area");
pokdataNavigationInput2.setAttribute("value","2");
pokdataNavigationLabel2.setAttribute("for","pokdata-navigation-area" + x)
pokdataNavigationLabel2.innerText = "Area";
pokdataAside0.classList.add("pokdata-aside0");
pokdataAside0.setAttribute("name",pokdatarevision);


pokdataAside1.classList.add("pokdata-aside1");
pokdataAside1.setAttribute("name",pokdatarevision);
pokdataAside1DivPortrait.classList.add("pokdata-portrait");
pokdataAside1Portrait.setAttribute("id","pokdata-portrait-img-" + x);

pokdataAside1BaseStats.classList.add("pokdata-basestats");
pokdataAside1BaseStatsName.classList.add("basename");
pokdataAside1BaseStatsName.innerHTML = "Base Stats";


var basestatz = [{name:"HP",abbr:"hp",list:fdataBaseStatsHP[i]},{name:"Atk",abbr:"atk",list:fdataBaseStatsAtk[i]},{name:"Def",abbr:"def",list:fdataBaseStatsDef[i]},{name:"Sp. Atk",abbr:"spatk",list:fdataBaseStatsSpAtk[i]},{name:"Sp. Def",abbr:"spdef",list:fdataBaseStatsSpDef[i]},{name:"Speed",abbr:"speed",list:fdataBaseStatsSpeed[i]},{name:"Total",abbr:"total",list:fdataBaseStatsTotal[i]}]

for (var q = 0; q < basestatz.length; q++) {
    var pokdataAside1BaseStat = document.createElement("div");
    var pokdataAside1BaseStatValue = document.createElement("li");
    var pokdataAside1BaseStatSpan = document.createElement("span");
    pokdataAside1BaseStat.classList.add(basestatz[q].abbr);
    pokdataAside1BaseStat.innerText = basestatz[q].name;
    pokdataAside1BaseStatValue.classList.add(basestatz[q].abbr + "-value");
    pokdataAside1BaseStatValue.value = basestatz[q].list;
    pokdataAside1BaseStats.appendChild(pokdataAside1BaseStat);
    pokdataAside1BaseStats.appendChild(pokdataAside1BaseStatValue);
    pokdataAside1BaseStatValue.appendChild(pokdataAside1BaseStatSpan);
}



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
pokdataAside1TypePrimary.src = "./media/Images/Misc/Type/Text/" + iconTypePath + "/" + defaultTypePrimary + ".png";
pokdataAside1TypePrimary.setAttribute("onerror",'this.style.display="none"');
pokdataAside1TypePrimary.title = defaultTypePrimary;
pokdataAside1TypeSecondary.src = "./media/Images/Misc/Type/Text/" + iconTypePath + "/" + defaultTypeSecondary + ".png";
pokdataAside1TypeSecondary.setAttribute("onerror",'this.style.display="none"');
pokdataAside1TypeSecondary.title = defaultTypeSecondary;


pokdataAside2.classList.add("pokdata-aside2");
pokdataAside2.setAttribute("name",pokdatarevision);
pokdataAside2MapContain.setAttribute("id","pokdata-map-contain");
pokdataAside2MapContain.setAttribute("oncontextmenu","return false;");
pokdataAside2MapZoomReset.setAttribute("id","pokdata-zoom-reset");
pokdataAside2MapZoomOut.classList.add("pokdata-zoom-out");
pokdataAside2MapZoomIn.classList.add("pokdata-zoom-in");
pokdataAside2MapZoomFullscreen.classList.add("pokdata-zoom-fullscreen");
pokdataAside2Map.setAttribute("id","pokdata-map");
pokdataAside2Map.setAttribute("name",region + "-" + siblingGamesAbbr);
pokdataAside2MapPanzoom.setAttribute("id","pokdata-map-panzoom-" + x);
pokdataAside2MapPanzoom.setAttribute("name",region + "-" + siblingGamesAbbr);
pokdataAside2MapImage.src = "./media/Images/Map/" + siblingGamesAbbr + "/Map.png";
pokdataAside2MapImage.setAttribute("width",mapWidth);
pokdataAside2MapImage.setAttribute("height",mapHeight);
pokdataAside2MapImage.classList.add("pokdata-img-main");
pokdataAside2MapImage.setAttribute("name",region + "-" + siblingGamesAbbr);
pokdataAside2MapMark.classList.add("pokdata-img-mark-outer");
pokdataAside2MapMarkImage.classList.add("pokdata-img-mark");



pokdataAside3.classList.add("pokdata-aside3");
pokdataAside3.setAttribute("name",pokdatarevision);




pokdataAside3Metadata.classList.add("pokdata-metadata");
pokdataAside3Metadata.setAttribute("id","pokdata-metadata" + x);
pokdataAside3DescriptionOuter.classList.add("pokdata-metadata-description");
pokdataAside3DescriptionOuter.classList.add("scroll");
pokdataAside3Description.innerText = defaultPokédexEntry;
pokdataAside3MetadataSpan.setAttribute("name","1");
pokdataAside3MetadataSidebarOuter.setAttribute("id","pokdata-metadata-sidebar-outer");
pokdataAside3MetadataSidebar.setAttribute("id","pokdata-metadata-sidebar");
pokdataAside3MetadataSidebar.classList.add("scroll");


pokdataAside3MetadataSidebarForm.setAttribute("id","pokdata-form-selector");
pokdataAside3MetadataSidebarForm.classList.add("scroll");
pokdataAside3MetadataSidebarFormDefaultInput.setAttribute("type","radio");
pokdataAside3MetadataSidebarFormDefaultInput.setAttribute("name","pokdata-form-options" + x);
pokdataAside3MetadataSidebarFormDefaultInput.setAttribute("id","pokdata-form-default-" + x);
pokdataAside3MetadataSidebarFormDefaultInput.value = x;
pokdataAside3MetadataSidebarFormDefaultLabel.setAttribute("for","pokdata-form-default-" + x);

pokdataAside3MetadataSidebarAbilityOuter.classList.add("pokdata-metadata-sidebar-ability");
pokdataAside3MetadataSidebarAbilityOuter.setAttribute("name","1");
pokdataAside3MetadataSidebarAbilityPrimary.innerText = defaultAbilityPrimary;
pokdataAside3MetadataSidebarAbilityPrimary.setAttribute("id","pokdata-metadata-sidebar-ability-primary");
pokdataAside3MetadataSidebarAbilityPrimary.setAttribute("title","Primary Ability");
pokdataAside3MetadataSidebarAbilitySecondary.innerText = defaultAbilitySecondary;
pokdataAside3MetadataSidebarAbilitySecondary.setAttribute("id","pokdata-metadata-sidebar-ability-secondary");
pokdataAside3MetadataSidebarAbilitySecondary.setAttribute("title","Secondary Ability");
pokdataAside3MetadataSidebarAbilityHidden.innerText = defaultAbilityHidden;
pokdataAside3MetadataSidebarAbilityHidden.setAttribute("id","pokdata-metadata-sidebar-ability-hidden");
pokdataAside3MetadataSidebarAbilityHidden.setAttribute("title","Hidden Ability");
pokdataAside3MetadataSidebarCatchRateOuter.classList.add("pokdata-metadata-sidebar-catchrate");
pokdataAside3MetadataSidebarCatchRateContent.classList.add("pokdata-metadata-sidebar-catchrate-content");
pokdataAside3MetadataSidebarCatchRateTitle.innerText = "Catch Rate";
pokdataAside3MetadataSidebarCatchRate.setAttribute("id","pokdata-metadata-sidebar-catchrate");
pokdataAside3MetadataSidebarCatchRate.setAttribute("title","When thrown at a full health " + defaultName + " with an ordinary Poké Ball.");
pokdataAside3MetadataSidebarCatchRate.innerText = "catchRateFormula" + "%";

pokdataAside3MetadataSidebarLevelRateOuter.classList.add("pokdata-metadata-sidebar-levelrate");
pokdataAside3MetadataSidebarLevelRateContent.classList.add("pokdata-metadata-siderbar-levelrate-content")
pokdataAside3MetadataSidebarLevelRateTitle.innerText = "Leveling Rate";
pokdataAside3MetadataSidebarLevelRate.setAttribute("id","pokdata-metadata-sidebar-levelrate");
pokdataAside3MetadataSidebarLevelRate.setAttribute("title","Erratic\nFast\nMedium Fast\nMedium Slow\nSlow\nFluctuating");
pokdataAside3MetadataSidebarLevelRate.innerText = defaultLevelingRate;
pokdataAside3MetadataSidebarGenderRatioOuter.classList.add("pokdata-metadata-sidebar-genderratio");
pokdataAside3MetadataSidebarGenderRatioContent.classList.add("pokdata-metadata-sidebar-genderratio-content");
pokdataAside3MetadataSidebarGenderRatioTitle.innerText = "Gender ratio";
pokdataAside3MetadataSidebarGenderRatioMale.setAttribute("id","pokdata-metadata-sidebar-genderratio-male");

pokdataAside3MetadataSidebarGenderRatioFemale.setAttribute("id","pokdata-metadata-sidebar-genderratio-female");

pokdataAside3MetadataSidebarGenderRatioGenderless.setAttribute("id","pokdata-metadata-sidebar-genderratio-genderless");
pokdataAside3MetadataSidebarGenderRatioGenderless.setAttribute("title","");
pokdataAside3MetadataSidebarGenderRatio.setAttribute("id","pokdata-metadata-sidebar-genderratio");

pokdataAside3MetadataSidebarEggGroupOuter.classList.add("pokdata-metadata-sidebar-egggroup");
pokdataAside3MetadataSidebarEggGroupContent.classList.add("pokdata-metadata-sidebar-egggroup-content");
pokdataAside3MetadataSidebarEggGroupTitle.innerText = "Egg Group";
pokdataAside3MetadataSidebarEggGroup1.innerText = defaultEggGroupPrimary;
pokdataAside3MetadataSidebarEggGroup1.setAttribute("id","pokdata-metadata-sidebar-egggroup1");
pokdataAside3MetadataSidebarEggGroup1.setAttribute("title","Primary Egg Group");
pokdataAside3MetadataSidebarEggGroup1.setAttribute("name",defaultEggGroupPrimary);
pokdataAside3MetadataSidebarEggGroup2.innerText = defaultEggGroupSecondary;
pokdataAside3MetadataSidebarEggGroup2.setAttribute("id","pokdata-metadata-sidebar-egggroup2");
pokdataAside3MetadataSidebarEggGroup2.setAttribute("title","Secondary Egg Group");
pokdataAside3MetadataSidebarEggGroup2.setAttribute("name",defaultEggGroupSecondary);
pokdataAside3MetadataSidebarHatchRateOuter.classList.add("pokdata-metadata-sidebar-hatchrate");
pokdataAside3MetadataSidebarHatchRateContent.classList.add("pokdata-metadata-sidebar-hatchrate-content");
pokdataAside3MetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
pokdataAside3MetadataSidebarHatchRate.setAttribute("id","pokdata-metadata-sidebar-hatchrate");
pokdataAside3MetadataSidebarHatchRate.setAttribute("title","Steps required to hatch an egg containing " + fdataName[i] + ".");
pokdataAside3MetadataSidebarHatchRate.innerText = defaultHatchRateSteps;
pokdataAside3MetadataSidebarExpYieldOuter.classList.add("pokdata-metadata-sidebar-expyield");
pokdataAside3MetadataSidebarExpYieldContent.classList.add("pokdata-metadata-sidebar-expyield-content");
pokdataAside3MetadataSidebarExpYieldTitle.innerText = "Experience Yield";
pokdataAside3MetadataSidebarExpYield.setAttribute("id","pokdata-metadata-sidebar-expyield");
pokdataAside3MetadataSidebarExpYield.title = "300+ Very High\n200-299 High\n100-199 Medium\n50-99 Low\n0-49 Very Low";
pokdataAside3MetadataSidebarExpYield.innerText = defaultExperienceYield;
pokdataAside3MetadataSidebarHeldItemOuter.setAttribute("id","pokdata-metadata-sidebar-helditem");
pokdataAside3MetadataSidebarHeldItemContent.setAttribute("id","pokdata-metadata-sidebar-helditem-content");
pokdataAside3MetadataSidebarHeldItemTitle.innerText = "Held Item";






document.getElementById("pokdata").appendChild(pokdataDiv);
pokdataDiv.appendChild(pokdataDivOverlay);
pokdataDiv.appendChild(pokdataDivContent);
pokdataDivContent.appendChild(pokdataNavigation);
pokdataNavigation.appendChild(pokdataNavigationInput1);
pokdataNavigation.appendChild(pokdataNavigationLabel1);
pokdataNavigation.appendChild(pokdataNavigationInput2);
pokdataNavigation.appendChild(pokdataNavigationLabel2);
pokdataDivContent.appendChild(pokdataAside0);



pokdataDivContent.appendChild(pokdataAside1);
pokdataAside1.appendChild(pokdataAside1DivPortrait);
pokdataAside1DivPortrait.appendChild(pokdataAside1Portrait);

pokdataAside1DivPortrait.appendChild(pokdataAside1BaseStats);
pokdataAside1BaseStats.appendChild(pokdataAside1BaseStatsName);

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
pokdataAside1Type.appendChild(pokdataAside1TypePrimary);
pokdataAside1Type.appendChild(pokdataAside1TypeBreak);
pokdataAside1Type.appendChild(pokdataAside1TypeSecondary);


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
pokdataAside3Metadata.appendChild(pokdataAside3MetadataSpan);
pokdataAside3Metadata.appendChild(pokdataAside3MetadataSidebarOuter);
pokdataAside3MetadataSidebarOuter.appendChild(pokdataAside3MetadataSidebar);

pokdataAside3MetadataSidebarOuter.appendChild(pokdataAside3MetadataSidebarForm);
pokdataAside3MetadataSidebarForm.appendChild(pokdataAside3MetadataSidebarFormDefaultInput);
pokdataAside3MetadataSidebarForm.appendChild(pokdataAside3MetadataSidebarFormDefaultLabel);







pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarAbilityOuter);
pokdataAside3MetadataSidebarAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilityPrimary);
pokdataAside3MetadataSidebarAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilitySecondary);
pokdataAside3MetadataSidebarAbilityOuter.appendChild(pokdataAside3MetadataSidebarAbilityHidden);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarCatchRateOuter);
pokdataAside3MetadataSidebarCatchRateOuter.appendChild(pokdataAside3MetadataSidebarCatchRateContent);
pokdataAside3MetadataSidebarCatchRateContent.appendChild(pokdataAside3MetadataSidebarCatchRateTitle);
pokdataAside3MetadataSidebarCatchRateContent.appendChild(pokdataAside3MetadataSidebarCatchRate);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarLevelRateOuter);
pokdataAside3MetadataSidebarLevelRateOuter.appendChild(pokdataAside3MetadataSidebarLevelRateContent);
pokdataAside3MetadataSidebarLevelRateContent.appendChild(pokdataAside3MetadataSidebarLevelRateTitle);
pokdataAside3MetadataSidebarLevelRateContent.appendChild(pokdataAside3MetadataSidebarLevelRate);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarGenderRatioOuter);
pokdataAside3MetadataSidebarGenderRatioOuter.appendChild(pokdataAside3MetadataSidebarGenderRatioContent);
pokdataAside3MetadataSidebarGenderRatioContent.appendChild(pokdataAside3MetadataSidebarGenderRatioTitle);
pokdataAside3MetadataSidebarGenderRatioContent.appendChild(pokdataAside3MetadataSidebarGenderRatioMale);
pokdataAside3MetadataSidebarGenderRatioContent.appendChild(pokdataAside3MetadataSidebarGenderRatioFemale);
pokdataAside3MetadataSidebarGenderRatioContent.appendChild(pokdataAside3MetadataSidebarGenderRatioGenderless);
pokdataAside3MetadataSidebarGenderRatioContent.appendChild(pokdataAside3MetadataSidebarGenderRatio);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarEggGroupOuter);
pokdataAside3MetadataSidebarEggGroupOuter.appendChild(pokdataAside3MetadataSidebarEggGroupContent);
pokdataAside3MetadataSidebarEggGroupContent.appendChild(pokdataAside3MetadataSidebarEggGroupTitle);
pokdataAside3MetadataSidebarEggGroupContent.appendChild(pokdataAside3MetadataSidebarEggGroup1);
pokdataAside3MetadataSidebarEggGroupContent.appendChild(pokdataAside3MetadataSidebarEggGroup2);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarHatchRateOuter);
pokdataAside3MetadataSidebarHatchRateOuter.appendChild(pokdataAside3MetadataSidebarHatchRateContent);
pokdataAside3MetadataSidebarHatchRateContent.appendChild(pokdataAside3MetadataSidebarHatchRateTitle);
pokdataAside3MetadataSidebarHatchRateContent.appendChild(pokdataAside3MetadataSidebarHatchRate);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarExpYieldOuter);
pokdataAside3MetadataSidebarExpYieldOuter.appendChild(pokdataAside3MetadataSidebarExpYieldContent);
pokdataAside3MetadataSidebarExpYieldContent.appendChild(pokdataAside3MetadataSidebarExpYieldTitle);
pokdataAside3MetadataSidebarExpYieldContent.appendChild(pokdataAside3MetadataSidebarExpYield);
pokdataAside3MetadataSidebar.appendChild(pokdataAside3MetadataSidebarHeldItemOuter);
pokdataAside3MetadataSidebarHeldItemOuter.appendChild(pokdataAside3MetadataSidebarHeldItemContent);
pokdataAside3MetadataSidebarHeldItemContent.appendChild(pokdataAside3MetadataSidebarHeldItemTitle);


}