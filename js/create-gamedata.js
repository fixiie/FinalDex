var createGameData = function() {

document.getElementById("load-description").innerHTML = "Creating Game Modal<span>.</span><span>.</span><span>.</span>";

var gamedataDiv = document.createElement("div");
var gamedataDivOverlay = document.createElement("div");
var gamedataDivContent = document.createElement("div");

var gamedataNavigation = document.createElement("base");

var gamedataGameTitle = document.createElement("div");
var gamedataGameTitleImg = document.createElement("img");


gamedataDiv.setAttribute("id","gamedata-modal-outer");
gamedataDiv.classList.add("gamedata-modal-outer");
gamedataDivOverlay.classList.add("gamedata-modal-overlay");
gamedataDivContent.classList.add("gamedata-modal");

gamedataNavigation.classList.add("gamedata-nav");

gamedataGameTitle.setAttribute("id","gamedata-title");
gamedataGameTitleImg.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","") + ".png"
gamedataGameTitleImg.setAttribute("title",GameFullName);

if (Generation >= 3 && GameID != 31 && GameID != 32) {
    var GamedataNavigation = ["Mechanics","Exclusives","Type Advantage","Tools","Abilities","Moves","Items","Map"];
}
else {
    var GamedataNavigation = ["Mechanics","Exclusives","Type Advantage","Tools","Moves","Items","Map"];
}

for (var q = 0; q < GamedataNavigation.length; q++) {
    var x = q + 1;
    var gamedataNavigationInput = document.createElement("input");
    var gamedataNavigationLabel = document.createElement("label");
    gamedataNavigationInput.setAttribute("type","radio");
    gamedataNavigationInput.setAttribute("name","gamedata-navigation");
    gamedataNavigationInput.setAttribute("id","gamedata-navigation-" + x);
    gamedataNavigationInput.setAttribute("value",GamedataNavigation[q]);
    gamedataNavigationInput.setAttribute("autocomplete","off");
    gamedataNavigationLabel.setAttribute("for","gamedata-navigation-" + x);
    gamedataNavigationLabel.innerText = GamedataNavigation[q];
    gamedataNavigation.appendChild(gamedataNavigationInput);
    gamedataNavigation.appendChild(gamedataNavigationLabel);

    
    gamedataNavigationInput.addEventListener("click", gamedataNavSelector);
}





document.getElementById("gamedata").appendChild(gamedataDiv);
gamedataDiv.appendChild(gamedataDivOverlay);
gamedataDiv.appendChild(gamedataDivContent);

gamedataDivContent.appendChild(gamedataNavigation);
gamedataDivContent.appendChild(gamedataGameTitle);
gamedataGameTitle.appendChild(gamedataGameTitleImg);

















// Mechanics Start
var gamedataMechanicOuter = document.createElement("div");
var gamedataMechanicAside1 = document.createElement("aside");

var gamedataMechanicAside1OptionsTitleOuter = document.createElement("div");
var gamedataMechanicAside1OptionsTitle = document.createElement("h2");


var gamedataMechanicAside1OptionsSub = document.createElement("div");

var gamedataMechanicAside2 = document.createElement("aside");
var gamedataMechanicAside2Title = document.createElement("h1");

var gamedataMechanicAside3 = document.createElement("aside");
var gamedataMechanicAside3Content = document.createElement("div");

var gamedataMechanicAside4 = document.createElement("aside");
var gamedataMechanicAside4Icon = document.createElement("div");
var gamedataMechanicAside4IconImage = document.createElement("img");


gamedataMechanicOuter.setAttribute("id","mechanic-outer");
gamedataMechanicOuter.setAttribute("name","Mechanics");
gamedataMechanicOuter.classList.add("gamedata-contentdiv");

gamedataMechanicAside1.setAttribute("id","mechanic-aside1");
gamedataMechanicAside1OptionsTitleOuter.setAttribute("id","mechanic-options-title");
gamedataMechanicAside1OptionsTitle.innerText = "Mechanics";
gamedataMechanicAside1OptionsSub.classList.add("mechanic-options-sub");



var mechanicSub = ["Mechanics","Features"];

for (var u = 0; u < mechanicSub.length; u++) {

var x = u + 1;

var gamedataMechanicAside1OptionsSubInput = document.createElement("input");
var gamedataMechanicAside1OptionsSubLabel = document.createElement("label");
gamedataMechanicAside1OptionsSubInput.setAttribute("type","radio");
gamedataMechanicAside1OptionsSubInput.setAttribute("id","mechanic-options-sub-selector-" + x);
gamedataMechanicAside1OptionsSubInput.setAttribute("name","mechanic-options-sub-selector");
gamedataMechanicAside1OptionsSubInput.setAttribute("autocomplete","off");
gamedataMechanicAside1OptionsSubInput.setAttribute("value",u)
gamedataMechanicAside1OptionsSubLabel.setAttribute("for","mechanic-options-sub-selector-" + x);
gamedataMechanicAside1OptionsSubLabel.innerText = mechanicSub[u];

gamedataMechanicAside1OptionsSub.appendChild(gamedataMechanicAside1OptionsSubInput);
gamedataMechanicAside1OptionsSub.appendChild(gamedataMechanicAside1OptionsSubLabel);


gamedataMechanicAside1OptionsSubInput.addEventListener("click", mechanicSubOptionsSelector);

    function mechanicSubOptionsSelector() {
        var mechanicOptionsOuters = document.querySelectorAll('#mechanic-options-outer[name]');
        var mechanicOptionsOuter = document.querySelectorAll('#mechanic-options-outer[name="' + this.value + '"]');

        gamedataMechanicAside1OptionsTitle.innerText = mechanicSub[this.value];

        for (var y = 0; y < mechanicOptionsOuters.length; y++) {
            mechanicOptionsOuters[y].style.display = "none";
        }

        for (var y = 0; y < mechanicOptionsOuter.length; y++) {
            mechanicOptionsOuter[y].style.display = "block";
        }
    }
}



gamedataMechanicAside2.setAttribute("id","mechanic-aside2");
gamedataMechanicAside2Title.setAttribute("id","mechanic-title");


gamedataMechanicAside3.setAttribute("id","mechanic-aside3");
gamedataMechanicAside3Content.setAttribute("id","mechanic-content");
gamedataMechanicAside3Content.classList.add("scroll");

gamedataMechanicAside4.setAttribute("id","mechanic-aside4");
gamedataMechanicAside4Icon.classList.add("mechanic-descriptionicon");
gamedataMechanicAside4IconImage.src = "";
gamedataMechanicAside4IconImage.setAttribute("id","mechanic-descriptioniconimg");
gamedataMechanicAside4IconImage.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Catching.png'");

gamedataDivContent.appendChild(gamedataMechanicOuter);
gamedataMechanicOuter.appendChild(gamedataMechanicAside1);
gamedataMechanicAside1.appendChild(gamedataMechanicAside1OptionsTitleOuter);
gamedataMechanicAside1OptionsTitleOuter.appendChild(gamedataMechanicAside1OptionsTitle);
gamedataMechanicAside1.appendChild(gamedataMechanicAside1OptionsSub);

gamedataMechanicOuter.appendChild(gamedataMechanicAside2);
gamedataMechanicAside2.appendChild(gamedataMechanicAside2Title);

gamedataMechanicOuter.appendChild(gamedataMechanicAside3);
gamedataMechanicAside3.appendChild(gamedataMechanicAside3Content);

gamedataMechanicOuter.appendChild(gamedataMechanicAside4);
gamedataMechanicAside4.appendChild(gamedataMechanicAside4Icon);
gamedataMechanicAside4Icon.appendChild(gamedataMechanicAside4IconImage);




for (var i = 0; i < mechanicOptionsTitle.length; i++) {
    var gamedataMechanicAside1OptionsOuter = document.createElement("div");
    var gamedataMechanicAside1Options = document.createElement("div");

    gamedataMechanicAside1OptionsOuter.setAttribute("id","mechanic-options-outer");
    gamedataMechanicAside1OptionsOuter.classList.add("scroll");
    gamedataMechanicAside1OptionsOuter.setAttribute("name",i)
    gamedataMechanicAside1Options.setAttribute("id","mechanic-options");

    gamedataMechanicAside1.appendChild(gamedataMechanicAside1OptionsOuter);
    gamedataMechanicAside1OptionsOuter.appendChild(gamedataMechanicAside1Options);

    for (var q = 0; q < mechanicOptionsTitle[i].length; q++) {
        var gamedataMechanicAside1OptionsInput = document.createElement("input");
        var gamedataMechanicAside1OptionsLabel = document.createElement("label");
        gamedataMechanicAside1OptionsInput.setAttribute("type","radio");
        gamedataMechanicAside1OptionsInput.setAttribute("name","mechanic-options");
        gamedataMechanicAside1OptionsInput.setAttribute("id","mechanic-options-" + i + "-" + q);
        gamedataMechanicAside1OptionsInput.setAttribute("autocomplete","off");
        gamedataMechanicAside1OptionsInput.value = q;
        gamedataMechanicAside1OptionsInput.alt = i;
        gamedataMechanicAside1OptionsLabel.setAttribute("for","mechanic-options-" + i + "-" + q);
        gamedataMechanicAside1OptionsLabel.setAttribute("name","large");
        gamedataMechanicAside1OptionsLabel.innerText = mechanicOptionsTitle[i][q];
        gamedataMechanicAside1Options.appendChild(gamedataMechanicAside1OptionsInput);
        gamedataMechanicAside1Options.appendChild(gamedataMechanicAside1OptionsLabel);

        gamedataMechanicAside1OptionsInput.addEventListener("click", mechanicOptionsSelector);
        function mechanicOptionsSelector() {
            gamedataMechanicAside2Title.innerText = mechanicOptionsTitle[this.alt][this.value];
            gamedataMechanicAside3Content.innerHTML = mechanicOptions[this.alt][this.value];
            gamedataMechanicAside4IconImage.src = "./media/Images/Misc/FinalDex/" + mechanicOptionsTitle[this.alt][this.value] + ".png";
            gamedataMechanicAside4IconImage.style.display = "unset";
        }
    }

}
// Mechanics End



// Exclusives Start
var gamedataExclusiveOuter = document.createElement("div");

var gamedataExclusiveAside1 = document.createElement("aside");
var gamedataExclusiveAside1OptionsTitleOuter = document.createElement("div");
var gamedataExclusiveAside1OptionsTitle = document.createElement("h2");
var gamedataExclusiveAside1OptionsOuter = document.createElement("div");
var gamedataExclusiveAside1Options = document.createElement("div");

var gamedataExclusiveAside2 = document.createElement("aside");
var gamedataExclusiveAside2Title = document.createElement("h1");

var gamedataExclusiveAside3 = document.createElement("aside");
var gamedataExclusiveAside3PokOuter = document.createElement("div");
var gamedataExclusiveAside3ItemOuter = document.createElement("div");
var gamedataExclusiveAside3FeatureOuter = document.createElement("div");



gamedataExclusiveOuter.setAttribute("id","exclusive-outer");
gamedataExclusiveOuter.setAttribute("name","Exclusives");
gamedataExclusiveOuter.classList.add("gamedata-contentdiv");

gamedataExclusiveAside1.setAttribute("id","exclusive-aside1");
gamedataExclusiveAside1OptionsTitleOuter.setAttribute("id","exclusive-options-title");
gamedataExclusiveAside1OptionsTitle.innerText = "Version Exclusive";
gamedataExclusiveAside1OptionsOuter.setAttribute("id","exclusive-options-outer");
gamedataExclusiveAside1OptionsOuter.classList.add("scroll");
gamedataExclusiveAside1Options.setAttribute("id","exclusive-options");


gamedataExclusiveAside2.setAttribute("id","exclusive-aside2");
gamedataExclusiveAside2Title.innerText = "Exclusive Pokémon";

gamedataExclusiveAside3.setAttribute("id","exclusive-aside3");
gamedataExclusiveAside3PokOuter.classList.add("exclusive-content-outer");
gamedataExclusiveAside3PokOuter.setAttribute("name","0");
gamedataExclusiveAside3ItemOuter.classList.add("exclusive-content-outer");
gamedataExclusiveAside3ItemOuter.setAttribute("name","1");
gamedataExclusiveAside3FeatureOuter.classList.add("exclusive-content-outer");
gamedataExclusiveAside3FeatureOuter.setAttribute("name","2");


gamedataDivContent.appendChild(gamedataExclusiveOuter);

gamedataExclusiveOuter.appendChild(gamedataExclusiveAside1);
gamedataExclusiveAside1.appendChild(gamedataExclusiveAside1OptionsTitleOuter);
gamedataExclusiveAside1OptionsTitleOuter.appendChild(gamedataExclusiveAside1OptionsTitle);
gamedataExclusiveAside1.appendChild(gamedataExclusiveAside1OptionsOuter);
gamedataExclusiveAside1OptionsOuter.appendChild(gamedataExclusiveAside1Options);


gamedataExclusiveOuter.appendChild(gamedataExclusiveAside2);
gamedataExclusiveAside2.appendChild(gamedataExclusiveAside2Title);

gamedataExclusiveOuter.appendChild(gamedataExclusiveAside3);
gamedataExclusiveAside3.appendChild(gamedataExclusiveAside3PokOuter);
gamedataExclusiveAside3.appendChild(gamedataExclusiveAside3ItemOuter);
gamedataExclusiveAside3.appendChild(gamedataExclusiveAside3FeatureOuter);


var exclusiveOptions = [];

var ExclusivePokémonExist = "";
for (var i = 0; i < JSONPath_ExclusivePokémon.length; i++) {
    for (var q = 0; q < finaldataExclusivePokémon.length; q++) {
        if (finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]] != undefined) {
            ExclusivePokémonExist += "true";
        }
    }
}

if (ExclusivePokémonExist.includes("true")) {
    exclusiveOptions.push("Pokémon");
    for (var i = 0; i < JSONPath_ExclusivePokémon.length; i++) {

        var gamedataExclusiveAside3Pok = document.createElement("div");
        var gamedataExclusiveAside3PokTitle = document.createElement("div");
        var gamedataExclusiveAside3PokTitleImg = document.createElement("img");
        var gamedataExclusiveAside3PokContent = document.createElement("ul");

        gamedataExclusiveAside3Pok.classList.add("exclusive-pok");
        gamedataExclusiveAside3PokTitle.classList.add("exclusive-pok-title");
        gamedataExclusiveAside3PokTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusivePokémon[i]).replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","") + ".png";
        
        gamedataExclusiveAside3PokTitleImg.title = "Pokémon Exclusive to " + getFullGameName(JSONPath_ExclusivePokémon[i]);
        gamedataExclusiveAside3PokContent.classList.add("exclusive-pok-content");
        gamedataExclusiveAside3PokContent.classList.add("scroll");

        gamedataExclusiveAside3PokOuter.appendChild(gamedataExclusiveAside3Pok);
        gamedataExclusiveAside3Pok.appendChild(gamedataExclusiveAside3PokTitle);
        gamedataExclusiveAside3PokTitle.appendChild(gamedataExclusiveAside3PokTitleImg);
        gamedataExclusiveAside3Pok.appendChild(gamedataExclusiveAside3PokContent);


        for (var q = 0; q < finaldataExclusivePokémon.length; q++) {
            if (finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]] != undefined) {
                var Exclusive = document.createElement("li");
                var ExclusiveImg = document.createElement("img");
                ExclusiveImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonID(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]]) + ".png";
                ExclusiveImg.setAttribute("title",finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]]);
                ExclusiveImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
                gamedataExclusiveAside3PokContent.appendChild(Exclusive);
                Exclusive.appendChild(ExclusiveImg);
            }
        }
    }
}

var ExclusiveItemExist = "";
for (var i = 0; i < JSONPath_ExclusiveItem.length; i++) {
    for (var q = 0; q < finaldataExclusiveItem.length; q++) {
        if (finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] != undefined) {
            ExclusiveItemExist += "true";
        }
    }
}

if (ExclusiveItemExist.includes("true")) {
    exclusiveOptions.push("Items");
    for (var i = 0; i < JSONPath_ExclusiveItem.length; i++) {
        var gamedataExclusiveAside3Item = document.createElement("div");
        var gamedataExclusiveAside3ItemTitle = document.createElement("div");
        var gamedataExclusiveAside3ItemTitleImg = document.createElement("img");
        var gamedataExclusiveAside3ItemContent = document.createElement("ul");

        gamedataExclusiveAside3Item.classList.add("exclusive-item");
        gamedataExclusiveAside3ItemTitle.classList.add("exclusive-item-title");
        gamedataExclusiveAside3ItemTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusiveItem[i]).replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","") + ".png";
        gamedataExclusiveAside3ItemTitleImg.title = "Items exclusive to " + getFullGameName(JSONPath_ExclusiveItem[i]);
        gamedataExclusiveAside3ItemContent.classList.add("exclusive-item-content");
        gamedataExclusiveAside3ItemContent.classList.add("scroll");

        gamedataExclusiveAside3ItemOuter.appendChild(gamedataExclusiveAside3Item);
        gamedataExclusiveAside3Item.appendChild(gamedataExclusiveAside3ItemTitle);
        gamedataExclusiveAside3ItemTitle.appendChild(gamedataExclusiveAside3ItemTitleImg);
        gamedataExclusiveAside3Item.appendChild(gamedataExclusiveAside3ItemContent);


        for (var q = 0; q < finaldataExclusiveItem.length; q++) {
            if (finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] != undefined) {
                var Exclusive = document.createElement("li");
                var ExclusiveImg = document.createElement("img");
                ExclusiveImg.src = "./media/Images/Item/Bag/" + MEDIAPath_ExclusiveItem[i] + "/" + finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] + ".png";
                ExclusiveImg.setAttribute("title",finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]]);
                ExclusiveImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
                gamedataExclusiveAside3ItemContent.appendChild(Exclusive);
                Exclusive.appendChild(ExclusiveImg);
            }
        }

    }
}



var ExclusiveFeatureExist = "";
for (var i = 0; i < JSONPath_ExclusiveFeature.length; i++) {
    for (var q = 0; q < finaldataExclusiveFeature.length; q++) {
        if (finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]] != undefined) {
            ExclusiveFeatureExist += "true";
        }
    }
}

if (ExclusiveFeatureExist.includes("true")) {
    exclusiveOptions.push("Features");
    for (var i = 0; i < JSONPath_ExclusiveFeature.length; i++) {
        var gamedataExclusiveAside3Feature = document.createElement("div");
        var gamedataExclusiveAside3FeatureTitle = document.createElement("div");
        var gamedataExclusiveAside3FeatureTitleImg = document.createElement("img");
        var gamedataExclusiveAside3FeatureContent = document.createElement("ul");

        gamedataExclusiveAside3Feature.classList.add("exclusive-feature");
        gamedataExclusiveAside3FeatureTitle.classList.add("exclusive-feature-title");
        gamedataExclusiveAside3FeatureTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusiveFeature[i]).replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","") + ".png";
        gamedataExclusiveAside3FeatureTitleImg.title = "Features exclusive to " + getFullGameName(JSONPath_ExclusiveFeature[i]);
        gamedataExclusiveAside3FeatureContent.classList.add("exclusive-feature-content");
        gamedataExclusiveAside3FeatureContent.classList.add("scroll");

        gamedataExclusiveAside3FeatureOuter.appendChild(gamedataExclusiveAside3Feature);
        gamedataExclusiveAside3Feature.appendChild(gamedataExclusiveAside3FeatureTitle);
        gamedataExclusiveAside3FeatureTitle.appendChild(gamedataExclusiveAside3FeatureTitleImg);
        gamedataExclusiveAside3Feature.appendChild(gamedataExclusiveAside3FeatureContent);


        for (var q = 0; q < finaldataExclusiveFeature.length; q++) {
            if (finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]] != undefined) {
                var Exclusive = document.createElement("li");
                Exclusive.innerText = finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]];
                Exclusive.setAttribute("title",finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]]);
                gamedataExclusiveAside3FeatureContent.appendChild(Exclusive);
            }
        }
    }
}

for (var q = 0; q < exclusiveOptions.length; q++) {
    var gamedataExclusiveAside1OptionsInput = document.createElement("input");
    var gamedataExclusiveAside1OptionsLabel = document.createElement("label");
    gamedataExclusiveAside1OptionsInput.setAttribute("type","radio");
    gamedataExclusiveAside1OptionsInput.setAttribute("name","exclusive-options");
    gamedataExclusiveAside1OptionsInput.setAttribute("id","exclusive-options-" + q);
    gamedataExclusiveAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataExclusiveAside1OptionsInput.value = q;
    gamedataExclusiveAside1OptionsLabel.setAttribute("for","exclusive-options-" + q);
    gamedataExclusiveAside1OptionsLabel.setAttribute("name","large");
    gamedataExclusiveAside1OptionsLabel.innerText = exclusiveOptions[q];
    gamedataExclusiveAside1Options.appendChild(gamedataExclusiveAside1OptionsInput);
    gamedataExclusiveAside1Options.appendChild(gamedataExclusiveAside1OptionsLabel);

    gamedataExclusiveAside1OptionsInput.addEventListener("click", exclusiveOptionsSelector);
    function exclusiveOptionsSelector() {
        gamedataExclusiveAside2Title.innerText = "Exclusive " + exclusiveOptions[this.value];

        var exclusiveContents = document.querySelectorAll(".exclusive-content-outer[name]");
        var exclusiveContent = document.querySelectorAll(".exclusive-content-outer[name='" + this.value + "']");

        for (var q = 0; q < exclusiveContents.length; q++) {
            exclusiveContents[q].style.display = "none";
        }

        for (var q = 0; q < exclusiveContent.length; q++) {
            exclusiveContent[q].style.display = "flex";
        }
    }
}
// Exclusives End



// Types Start
var gamedataTypeOuter = document.createElement("div");
var gamedataTypeAside1 = document.createElement("aside");
var gamedataTypeAside1OptionsTitleOuter = document.createElement("div");
var gamedataTypeAside1OptionsTitle = document.createElement("h2");
var gamedataTypeAside1OptionsOuter = document.createElement("div");
var gamedataTypeAside1Options = document.createElement("div");

var gamedataTypeAside2 = document.createElement("aside");
var gamedataTypeAside2Title = document.createElement("h1");

var gamedataTypeAside3 = document.createElement("aside");
var gamedataTypeAside3TypechartMatrix = document.createElement("div");
var gamedataTypeAside3TypechartEffectiveness = document.createElement("div");
var gamedataTypeAside3TypechartIneffectiveness = document.createElement("div");
var gamedataTypeAside3TypechartImmunity = document.createElement("div");

var gamedataTypeAside4 = document.createElement("aside");
var gamedataTypeAside4Description = document.createElement("div");

var gamedataTypeAside4DescriptionSelector = document.createElement("div");


var gamedataTypeAside4DescriptionTitleOuter = document.createElement("div");
var gamedataTypeAside4DescriptionTitleTitle = document.createElement("h1");
var gamedataTypeAside4DescriptionTitleImageOuter = document.createElement("div");
var gamedataTypeAside4DescriptionTitleImage = document.createElement("img");
var gamedataTypeAside4DescriptionAgainstOpposed = document.createElement("div");

var gamedataTypeAside4DescriptionAgainst = document.createElement("div");
var gamedataTypeAside4DescriptionAgainstEffective = document.createElement("div");
var gamedataTypeAside4DescriptionAgainstEffectiveTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionAgainstEffectiveContain = document.createElement("data");
var gamedataTypeAside4DescriptionAgainstIneffective = document.createElement("div");
var gamedataTypeAside4DescriptionAgainstIneffectiveTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionAgainstIneffectiveContain = document.createElement("data");
var gamedataTypeAside4DescriptionAgainstImmune = document.createElement("div");
var gamedataTypeAside4DescriptionAgainstImmuneTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionAgainstImmuneContain = document.createElement("data");
var gamedataTypeAside4DescriptionAgainstDefault = document.createElement("div");
var gamedataTypeAside4DescriptionAgainstDefaultTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionAgainstDefaultContain = document.createElement("data");

var gamedataTypeAside4DescriptionOpposed = document.createElement("div");
var gamedataTypeAside4DescriptionOpposedEffective = document.createElement("div");
var gamedataTypeAside4DescriptionOpposedEffectiveTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionOpposedEffectiveContain = document.createElement("data");
var gamedataTypeAside4DescriptionOpposedIneffective = document.createElement("div");
var gamedataTypeAside4DescriptionOpposedIneffectiveTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionOpposedIneffectiveContain = document.createElement("data");
var gamedataTypeAside4DescriptionOpposedImmune = document.createElement("div");
var gamedataTypeAside4DescriptionOpposedImmuneTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionOpposedImmuneContain = document.createElement("data");
var gamedataTypeAside4DescriptionOpposedDefault = document.createElement("div");
var gamedataTypeAside4DescriptionOpposedDefaultTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionOpposedDefaultContain = document.createElement("data");



gamedataTypeOuter.setAttribute("id","type-outer");
gamedataTypeOuter.setAttribute("name","Type Advantage");
gamedataTypeOuter.classList.add("gamedata-contentdiv");

gamedataTypeAside1.setAttribute("id","type-aside1");
gamedataTypeAside1OptionsTitleOuter.setAttribute("id","type-options-title");
gamedataTypeAside1OptionsTitle.innerText = "Type Charts";
gamedataTypeAside1OptionsOuter.setAttribute("id","type-options-outer");
gamedataTypeAside1OptionsOuter.classList.add("scroll");
gamedataTypeAside1Options.setAttribute("id","type-options");

gamedataTypeAside2.setAttribute("id","type-aside2");
gamedataTypeAside2Title.setAttribute("id","type-title");


gamedataTypeAside3.setAttribute("id","type-aside3");
gamedataTypeAside3TypechartMatrix.setAttribute("id","typechart-matrix");
gamedataTypeAside3TypechartMatrix.setAttribute("name","0");
gamedataTypeAside3TypechartMatrix.classList.add("scroll");

gamedataTypeAside3TypechartEffectiveness.setAttribute("id","typechart-effective");
gamedataTypeAside3TypechartEffectiveness.setAttribute("name","1");
gamedataTypeAside3TypechartEffectiveness.classList.add("scroll");
gamedataTypeAside3TypechartIneffectiveness.setAttribute("id","typechart-ineffective");
gamedataTypeAside3TypechartIneffectiveness.setAttribute("name","2");
gamedataTypeAside3TypechartIneffectiveness.classList.add("scroll");
gamedataTypeAside3TypechartImmunity.setAttribute("id","typechart-immunity");
gamedataTypeAside3TypechartImmunity.setAttribute("name","3");
gamedataTypeAside3TypechartImmunity.classList.add("scroll");

gamedataTypeAside4.setAttribute("id","type-aside4");
gamedataTypeAside4Description.classList.add("type-description");
gamedataTypeAside4DescriptionSelector.classList.add("type-selector");
gamedataTypeAside4DescriptionTitleOuter.classList.add("type-description-title");
gamedataTypeAside4DescriptionTitleTitle
gamedataTypeAside4DescriptionTitleImageOuter.classList.add("type-symbol-outer");
gamedataTypeAside4DescriptionTitleImage.classList.add("type-symbol");
gamedataTypeAside4DescriptionTitleImage.setAttribute("onerror","this.style.display='none';")
gamedataTypeAside4DescriptionTitleImage.setAttribute("alt",MEDIAPath_Type_Icon)
gamedataTypeAside4DescriptionAgainstOpposed.classList.add("type-againstopposed");
gamedataTypeAside4DescriptionAgainst.classList.add("type-against");
gamedataTypeAside4DescriptionAgainst.classList.add("scroll");
gamedataTypeAside4DescriptionAgainstEffective.classList.add("type-effective");
gamedataTypeAside4DescriptionAgainstEffectiveTitle.setAttribute("title","Super Effective when used by a Move with with following types:");
gamedataTypeAside4DescriptionAgainstEffectiveTitle.innerText = "Super Effective";
gamedataTypeAside4DescriptionAgainstEffectiveContain.classList.add("type-effective-content");
gamedataTypeAside4DescriptionAgainstEffectiveContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionAgainstIneffective.classList.add("type-ineffective");
gamedataTypeAside4DescriptionAgainstIneffectiveTitle.setAttribute("title","Not Very Effective when used by a Move with with following types:");
gamedataTypeAside4DescriptionAgainstIneffectiveTitle.innerText = "Not Very Effective";
gamedataTypeAside4DescriptionAgainstIneffectiveContain.classList.add("type-ineffective-content");
gamedataTypeAside4DescriptionAgainstIneffectiveContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionAgainstImmune.classList.add("type-immune");
gamedataTypeAside4DescriptionAgainstImmuneTitle.setAttribute("title","No Effect when used by a Move with following types:");
gamedataTypeAside4DescriptionAgainstImmuneTitle.innerText = "No Effect";
gamedataTypeAside4DescriptionAgainstImmuneContain.classList.add("type-immune-content");
gamedataTypeAside4DescriptionAgainstImmuneContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionAgainstDefault.classList.add("type-normal");
gamedataTypeAside4DescriptionAgainstDefaultTitle.setAttribute("title","Normal Effectiveness when used by a Move with following types:");
gamedataTypeAside4DescriptionAgainstDefaultTitle.innerText = "Normal Effectiveness";
gamedataTypeAside4DescriptionAgainstDefaultContain.classList.add("type-default-content");
gamedataTypeAside4DescriptionAgainstDefaultContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionOpposed.classList.add("type-opposed");
gamedataTypeAside4DescriptionOpposed.classList.add("scroll");
gamedataTypeAside4DescriptionOpposedEffective.classList.add("type-effective");
gamedataTypeAside4DescriptionOpposedEffectiveTitle.setAttribute("title","Super Effective when used against an opposing Pokémon with following types:");
gamedataTypeAside4DescriptionOpposedEffectiveTitle.innerText = "Super Effective";
gamedataTypeAside4DescriptionOpposedEffectiveContain.classList.add("type-effective-content");
gamedataTypeAside4DescriptionOpposedEffectiveContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionOpposedIneffective.classList.add("type-ineffective");
gamedataTypeAside4DescriptionOpposedIneffectiveTitle.setAttribute("title","Not Very Effective when used against an opposing Pokémon with following types:");
gamedataTypeAside4DescriptionOpposedIneffectiveTitle.innerText = "Not Very Effective";
gamedataTypeAside4DescriptionOpposedIneffectiveContain.classList.add("type-ineffective-content");
gamedataTypeAside4DescriptionOpposedIneffectiveContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionOpposedImmune.classList.add("type-immune");
gamedataTypeAside4DescriptionOpposedImmuneTitle.setAttribute("title","No Effect when used against an opposing Pokémon with following types:");
gamedataTypeAside4DescriptionOpposedImmuneTitle.innerText = "No Effect";
gamedataTypeAside4DescriptionOpposedImmuneContain.classList.add("type-immune-content");
gamedataTypeAside4DescriptionOpposedImmuneContain.value = MEDIAPath_Type_Text;
gamedataTypeAside4DescriptionOpposedDefault.classList.add("type-normal");
gamedataTypeAside4DescriptionOpposedDefaultTitle.setAttribute("title","Normal Effectiveness when used against an opposing Pokémon with following types:");
gamedataTypeAside4DescriptionOpposedDefaultTitle.innerText = "Normal Effectiveness";
gamedataTypeAside4DescriptionOpposedDefaultContain.classList.add("type-default-content");
gamedataTypeAside4DescriptionOpposedDefaultContain.value = MEDIAPath_Type_Text;



gamedataDivContent.appendChild(gamedataTypeOuter);
gamedataTypeOuter.appendChild(gamedataTypeAside1);
gamedataTypeAside1.appendChild(gamedataTypeAside1OptionsTitleOuter);
gamedataTypeAside1OptionsTitleOuter.appendChild(gamedataTypeAside1OptionsTitle);
gamedataTypeAside1.appendChild(gamedataTypeAside1OptionsOuter);
gamedataTypeAside1OptionsOuter.appendChild(gamedataTypeAside1Options);

gamedataTypeOuter.appendChild(gamedataTypeAside2);
gamedataTypeAside2.appendChild(gamedataTypeAside2Title);

gamedataTypeOuter.appendChild(gamedataTypeAside3);
gamedataTypeAside3.appendChild(gamedataTypeAside3TypechartMatrix);
gamedataTypeAside3.appendChild(gamedataTypeAside3TypechartEffectiveness);
gamedataTypeAside3.appendChild(gamedataTypeAside3TypechartIneffectiveness);
gamedataTypeAside3.appendChild(gamedataTypeAside3TypechartImmunity);

gamedataTypeOuter.appendChild(gamedataTypeAside4);
gamedataTypeAside4.appendChild(gamedataTypeAside4Description);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionTitleOuter);
gamedataTypeAside4DescriptionTitleOuter.appendChild(gamedataTypeAside4DescriptionTitleTitle);
gamedataTypeAside4DescriptionTitleOuter.appendChild(gamedataTypeAside4DescriptionTitleImageOuter);
gamedataTypeAside4DescriptionTitleImageOuter.appendChild(gamedataTypeAside4DescriptionTitleImage);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionAgainstOpposed);
gamedataTypeAside4DescriptionAgainstOpposed.appendChild(gamedataTypeAside4DescriptionSelector);
gamedataTypeAside4DescriptionAgainstOpposed.appendChild(gamedataTypeAside4DescriptionAgainst);
gamedataTypeAside4DescriptionAgainst.appendChild(gamedataTypeAside4DescriptionAgainstEffective);
gamedataTypeAside4DescriptionAgainstEffective.appendChild(gamedataTypeAside4DescriptionAgainstEffectiveTitle);
gamedataTypeAside4DescriptionAgainstEffective.appendChild(gamedataTypeAside4DescriptionAgainstEffectiveContain);
gamedataTypeAside4DescriptionAgainst.appendChild(gamedataTypeAside4DescriptionAgainstIneffective);
gamedataTypeAside4DescriptionAgainstIneffective.appendChild(gamedataTypeAside4DescriptionAgainstIneffectiveTitle);
gamedataTypeAside4DescriptionAgainstIneffective.appendChild(gamedataTypeAside4DescriptionAgainstIneffectiveContain);
gamedataTypeAside4DescriptionAgainst.appendChild(gamedataTypeAside4DescriptionAgainstImmune);
gamedataTypeAside4DescriptionAgainstImmune.appendChild(gamedataTypeAside4DescriptionAgainstImmuneTitle);
gamedataTypeAside4DescriptionAgainstImmune.appendChild(gamedataTypeAside4DescriptionAgainstImmuneContain);
gamedataTypeAside4DescriptionAgainst.appendChild(gamedataTypeAside4DescriptionAgainstDefault);
gamedataTypeAside4DescriptionAgainstDefault.appendChild(gamedataTypeAside4DescriptionAgainstDefaultTitle);
gamedataTypeAside4DescriptionAgainstDefault.appendChild(gamedataTypeAside4DescriptionAgainstDefaultContain);

gamedataTypeAside4DescriptionAgainstOpposed.appendChild(gamedataTypeAside4DescriptionOpposed);
gamedataTypeAside4DescriptionOpposed.appendChild(gamedataTypeAside4DescriptionOpposedEffective);
gamedataTypeAside4DescriptionOpposedEffective.appendChild(gamedataTypeAside4DescriptionOpposedEffectiveTitle);
gamedataTypeAside4DescriptionOpposedEffective.appendChild(gamedataTypeAside4DescriptionOpposedEffectiveContain);
gamedataTypeAside4DescriptionOpposed.appendChild(gamedataTypeAside4DescriptionOpposedIneffective);
gamedataTypeAside4DescriptionOpposedIneffective.appendChild(gamedataTypeAside4DescriptionOpposedIneffectiveTitle);
gamedataTypeAside4DescriptionOpposedIneffective.appendChild(gamedataTypeAside4DescriptionOpposedIneffectiveContain);
gamedataTypeAside4DescriptionOpposed.appendChild(gamedataTypeAside4DescriptionOpposedImmune);
gamedataTypeAside4DescriptionOpposedImmune.appendChild(gamedataTypeAside4DescriptionOpposedImmuneTitle);
gamedataTypeAside4DescriptionOpposedImmune.appendChild(gamedataTypeAside4DescriptionOpposedImmuneContain);
gamedataTypeAside4DescriptionOpposed.appendChild(gamedataTypeAside4DescriptionOpposedDefault);
gamedataTypeAside4DescriptionOpposedDefault.appendChild(gamedataTypeAside4DescriptionOpposedDefaultTitle);
gamedataTypeAside4DescriptionOpposedDefault.appendChild(gamedataTypeAside4DescriptionOpposedDefaultContain);


for (var i = 0; i < 2; i++) {
    var gamedataTypeAside4DescriptionSelectorInput = document.createElement("input");
    var gamedataTypeAside4DescriptionSelectorLabel = document.createElement("label");
    gamedataTypeAside4DescriptionSelectorInput.setAttribute("type","radio");
    gamedataTypeAside4DescriptionSelectorInput.setAttribute("value",i);
    gamedataTypeAside4DescriptionSelectorInput.setAttribute("name","gamedata-type-selector");
    gamedataTypeAside4DescriptionSelectorInput.setAttribute("id","gamedata-type-selector" + i);
    gamedataTypeAside4DescriptionSelectorInput.setAttribute("autocomplete","off");
    gamedataTypeAside4DescriptionSelectorLabel.setAttribute("for","gamedata-type-selector" + i);
    if (i == 0) {
        gamedataTypeAside4DescriptionSelectorInput.setAttribute("checked","");
        gamedataTypeAside4DescriptionSelectorInput.setAttribute("onclick","this.parentElement.nextElementSibling.style.display='block';this.parentElement.nextElementSibling.nextElementSibling.style.display='none'");
        gamedataTypeAside4DescriptionSelectorLabel.innerText = "Defending";
    }
    if (i == 1) {
        gamedataTypeAside4DescriptionSelectorInput.setAttribute("onclick","this.parentElement.nextElementSibling.style.display='none';this.parentElement.nextElementSibling.nextElementSibling.style.display='block'");
        gamedataTypeAside4DescriptionSelectorLabel.innerText = "Attacking";
    }

    gamedataTypeAside4DescriptionSelector.appendChild(gamedataTypeAside4DescriptionSelectorInput);
    gamedataTypeAside4DescriptionSelector.appendChild(gamedataTypeAside4DescriptionSelectorLabel);
}





// Matrix Start
var gamedataTypeAside3TypeChartMatrixTable = document.createElement("table");
var gamedataTypeAside3TypeChartMatrixTableHead = document.createElement("thead");
var gamedataTypeAside3TypeChartMatrixTableBody = document.createElement("tbody");

gamedataTypeAside3TypeChartMatrixTable.setAttribute("id","typechart-matrix-table");
gamedataTypeAside3TypeChartMatrixTable.setAttribute("name",MEDIAPath_Type_Icon);
gamedataTypeAside3TypeChartMatrixTable.classList.add("typechart");

var gamedataTypeAside3TypeChartMatrixTableTR = document.createElement("tr");

for (var i = 0; i < finaldataTypeChart.length + 1; i++) {
    var gamedataTypeAside3TypeChartMatrixTableCol = document.createElement("colgroup");
    gamedataTypeAside3TypeChartMatrixTable.appendChild(gamedataTypeAside3TypeChartMatrixTableCol);
}

gamedataTypeAside3TypeChartMatrixTable.appendChild(gamedataTypeAside3TypeChartMatrixTableHead);
gamedataTypeAside3TypeChartMatrixTable.appendChild(gamedataTypeAside3TypeChartMatrixTableBody);
gamedataTypeAside3TypeChartMatrixTableHead.appendChild(gamedataTypeAside3TypeChartMatrixTableTR);


var gamedataTypeAside3TypeChartMatrixTableTH0 = document.createElement("th");
gamedataTypeAside3TypeChartMatrixTableTH0.setAttribute("title","");
gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTH0);


for (var i = 0; i < finaldataTypeChart.length; i++) {
    var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

    var gamedataTypeAside3TypeChartMatrixTableTH = document.createElement("th");
    var gamedataTypeAside3TypeChartMatrixTableTHIMG = document.createElement("img");
    gamedataTypeAside3TypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
    gamedataTypeAside3TypeChartMatrixTableTH.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
    gamedataTypeAside3TypeChartMatrixTableTH.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
    gamedataTypeAside3TypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
    gamedataTypeAside3TypeChartMatrixTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
    gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTH);
    gamedataTypeAside3TypeChartMatrixTableTH.appendChild(gamedataTypeAside3TypeChartMatrixTableTHIMG);
}

for (var i = 0; i < finaldataTypeChart.length; i++) {
var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

var gamedataTypeAside3TypeChartMatrixTableTR = document.createElement("tr");
var gamedataTypeAside3TypeChartMatrixTableTH = document.createElement("th");
var gamedataTypeAside3TypeChartMatrixTableTHIMG = document.createElement("img");

gamedataTypeAside3TypeChartMatrixTableBody.appendChild(gamedataTypeAside3TypeChartMatrixTableTR);
gamedataTypeAside3TypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
gamedataTypeAside3TypeChartMatrixTableTH.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
gamedataTypeAside3TypeChartMatrixTableTH.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
gamedataTypeAside3TypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
gamedataTypeAside3TypeChartMatrixTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTH);


for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    var gamedataTypeAside3TypeChartMatrixTableTD = document.createElement("td");
    gamedataTypeAside3TypeChartMatrixTableTD.innerText = finaldataTypeChart[i][finaldataTypeChartTitle[q]];
    gamedataTypeAside3TypeChartMatrixTableTD.setAttribute("title",finaldataTypeChart[i][finaldataTypeChartTitle[q]]);
    gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTD);
}



gamedataTypeAside3TypeChartMatrixTableTH.appendChild(gamedataTypeAside3TypeChartMatrixTableTHIMG);

}

gamedataTypeAside3TypechartMatrix.appendChild(gamedataTypeAside3TypeChartMatrixTable);




var TypeChartNormal = document.querySelectorAll('.typechart td[title="1×"]');
var TypeChartMatrix = document.querySelectorAll('.typechart td[title="2×"]');
var TypeChartInmatrix = document.querySelectorAll('.typechart td[title="½×"]');
var TypeChartImmune = document.querySelectorAll('.typechart td[title="0×"]');

for (var i = 0; i < TypeChartNormal.length; i++) {
    TypeChartNormal[i].setAttribute("title","Normal Effectiveness");
}
for (var i = 0; i < TypeChartMatrix.length; i++) {
    TypeChartMatrix[i].setAttribute("title","Super Effective");
}
for (var i = 0; i < TypeChartInmatrix.length; i++) {
    TypeChartInmatrix[i].setAttribute("title","Not Very Effective");
}
for (var i = 0; i < TypeChartImmune.length; i++) {
    TypeChartImmune[i].setAttribute("title","No Effect");
}

// Matrix End



// Effectiveness Start
var gamedataTypeAside3TypeChartEffectivenessTable = document.createElement("table");

gamedataTypeAside3TypeChartEffectivenessTable.setAttribute("id","typechart-effectiveness-table");
gamedataTypeAside3TypeChartEffectivenessTable.setAttribute("name",MEDIAPath_Type_Icon);
gamedataTypeAside3TypeChartEffectivenessTable.classList.add("typechart");

var gamedataTypeAside3TypeChartEffectivenessTableTR = document.createElement("tr");
gamedataTypeAside3TypeChartEffectivenessTable.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTR);

var tempEffectivenessArrLeft = [];
var tempEffectivenessArrLeftCount = {};

var tempEffectivenessArrRight = [];
var tempEffectivenessArrRightCount = {};

var tempEffectivenessArrLeftMax = [];
var tempEffectivenessArrLeftMaxCount = {};
var tempEffectivenessArrLeftMaxResult = [];

var tempEffectivenessArrRightMax = [];
var tempEffectivenessArrRightMaxCount = {};
var tempEffectivenessArrRightMaxResult = [];

for (var i = 0; i < finaldataTypeChart.length; i++) {

var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

    for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
        if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
            tempEffectivenessArrLeftMax.push(i)
        }
    }

    for (var num of tempEffectivenessArrLeftMax) {
        tempEffectivenessArrLeftMaxCount[num] = tempEffectivenessArrLeftMaxCount[num] ? tempEffectivenessArrLeftMaxCount[num] + 1 : 1;
    }

    for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
        if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
            tempEffectivenessArrRightMax.push(i)
        }
    }

    for (var num of tempEffectivenessArrRightMax) {
        tempEffectivenessArrRightMaxCount[num] = tempEffectivenessArrRightMaxCount[num] ? tempEffectivenessArrRightMaxCount[num] + 1 : 1;
    }

    if (tempEffectivenessArrLeftMaxCount[i] != undefined) {
        tempEffectivenessArrLeftMaxResult.push(tempEffectivenessArrLeftMaxCount[i])
    }
    if (tempEffectivenessArrRightMaxCount[i] != undefined) {
        tempEffectivenessArrRightMaxResult.push(tempEffectivenessArrRightMaxCount[i])
    }

}

for (var i = 0; i < finaldataTypeChart.length; i++) {

var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

var gamedataTypeAside3TypeChartEffectivenessTableTR = document.createElement("tr");
var gamedataTypeAside3TypeChartEffectivenessTableTH = document.createElement("th");
var gamedataTypeAside3TypeChartEffectivenessTableTHIMG = document.createElement("img");

gamedataTypeAside3TypeChartEffectivenessTable.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTR);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
        tempEffectivenessArrLeft.push(i)
    }
}

for (var num of tempEffectivenessArrLeft) {
    tempEffectivenessArrLeftCount[num] = tempEffectivenessArrLeftCount[num] ? tempEffectivenessArrLeftCount[num] + 1 : 1;
}

if (tempEffectivenessArrLeftCount[i] == undefined) {tempEffectivenessArrLeftCount[i] = 0;}

for (var q = 0; q < Math.max.apply(Math,tempEffectivenessArrLeftMaxResult) - tempEffectivenessArrLeftCount[i]; q++) {
    var gamedataTypeAside3TypeChartEffectivenessTableTDLeft = document.createElement("td");
    gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTDLeft);
}

gamedataTypeAside3TypeChartEffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
gamedataTypeAside3TypeChartEffectivenessTableTH.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
gamedataTypeAside3TypeChartEffectivenessTableTH.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
gamedataTypeAside3TypeChartEffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
gamedataTypeAside3TypeChartEffectivenessTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
        var gamedataTypeAside3TypeChartEffectivenessTableTHLeft = document.createElement("th");
        var gamedataTypeAside3TypeChartEffectivenessTableTHLeftIMG = document.createElement("img");
        gamedataTypeAside3TypeChartEffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
        gamedataTypeAside3TypeChartEffectivenessTableTHLeft.setAttribute("title",finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
        gamedataTypeAside3TypeChartEffectivenessTableTHLeft.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
        gamedataTypeAside3TypeChartEffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png"
        gamedataTypeAside3TypeChartEffectivenessTableTHLeftIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
        gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTHLeft);
        gamedataTypeAside3TypeChartEffectivenessTableTHLeft.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTHLeftIMG);

    }
}

var gamedataTypeAside3TypeChartEffectivenessTableTDLeftArrow = document.createElement("td");
if (tempEffectivenessArrLeftCount[i] != 0) {
    gamedataTypeAside3TypeChartEffectivenessTableTDLeftArrow.innerText = "→";
}
gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTDLeftArrow);


gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTH);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
        tempEffectivenessArrRight.push(i)
    }
}

for (var num of tempEffectivenessArrRight) {
    tempEffectivenessArrRightCount[num] = tempEffectivenessArrRightCount[num] ? tempEffectivenessArrRightCount[num] + 1 : 1;
}

if (tempEffectivenessArrRightCount[i] == undefined) {tempEffectivenessArrRightCount[i] = 0;}

var gamedataTypeAside3TypeChartEffectivenessTableTDRightArrow = document.createElement("td");
if (tempEffectivenessArrRightCount[i] != 0) {
    gamedataTypeAside3TypeChartEffectivenessTableTDRightArrow.innerText = "→"
}

gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTDRightArrow);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
        var gamedataTypeAside3TypeChartEffectivenessTableTHRight = document.createElement("th");
        var gamedataTypeAside3TypeChartEffectivenessTableTHRightIMG = document.createElement("img");
        gamedataTypeAside3TypeChartEffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
        gamedataTypeAside3TypeChartEffectivenessTableTHRight.setAttribute("title",finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
        gamedataTypeAside3TypeChartEffectivenessTableTHRight.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
        gamedataTypeAside3TypeChartEffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png"
        gamedataTypeAside3TypeChartEffectivenessTableTHRightIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
        gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTHRight);
        gamedataTypeAside3TypeChartEffectivenessTableTHRight.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTHRightIMG);

    }
}


gamedataTypeAside3TypeChartEffectivenessTableTH.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTHIMG);


for (var q = 0; q < Math.max.apply(Math,tempEffectivenessArrRightMaxResult) - tempEffectivenessArrRightCount[i]; q++) {
    var gamedataTypeAside3TypeChartEffectivenessTableTDRight = document.createElement("td");
    gamedataTypeAside3TypeChartEffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartEffectivenessTableTDRight);
}

}

gamedataTypeAside3TypechartEffectiveness.appendChild(gamedataTypeAside3TypeChartEffectivenessTable);

// Effectiveness End




// Ineffectiveness Start
var gamedataTypeAside3TypeChartIneffectivenessTable = document.createElement("table");

gamedataTypeAside3TypeChartIneffectivenessTable.setAttribute("id","typechart-ineffectiveness-table");
gamedataTypeAside3TypeChartIneffectivenessTable.setAttribute("name",MEDIAPath_Type_Icon);
gamedataTypeAside3TypeChartIneffectivenessTable.classList.add("typechart");

var gamedataTypeAside3TypeChartIneffectivenessTableTR = document.createElement("tr");
gamedataTypeAside3TypeChartIneffectivenessTable.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTR);

var tempIneffectivenessArrLeft = [];
var tempIneffectivenessArrLeftCount = {};

var tempIneffectivenessArrRight = [];
var tempIneffectivenessArrRightCount = {};

var tempIneffectivenessArrLeftMax = [];
var tempIneffectivenessArrLeftMaxCount = {};
var tempIneffectivenessArrLeftMaxResult = [];

var tempIneffectivenessArrRightMax = [];
var tempIneffectivenessArrRightMaxCount = {};
var tempIneffectivenessArrRightMaxResult = [];

for (var i = 0; i < finaldataTypeChart.length; i++) {

var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

    for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
        if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
            tempIneffectivenessArrLeftMax.push(i)
        }
    }

    for (var num of tempIneffectivenessArrLeftMax) {
        tempIneffectivenessArrLeftMaxCount[num] = tempIneffectivenessArrLeftMaxCount[num] ? tempIneffectivenessArrLeftMaxCount[num] + 1 : 1;
    }

    for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
        if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
            tempIneffectivenessArrRightMax.push(i)
        }
    }

    for (var num of tempIneffectivenessArrRightMax) {
        tempIneffectivenessArrRightMaxCount[num] = tempIneffectivenessArrRightMaxCount[num] ? tempIneffectivenessArrRightMaxCount[num] + 1 : 1;
    }

    if (tempIneffectivenessArrLeftMaxCount[i] != undefined) {
        tempIneffectivenessArrLeftMaxResult.push(tempIneffectivenessArrLeftMaxCount[i])
    }
    if (tempIneffectivenessArrRightMaxCount[i] != undefined) {
        tempIneffectivenessArrRightMaxResult.push(tempIneffectivenessArrRightMaxCount[i])
    }

}

for (var i = 0; i < finaldataTypeChart.length; i++) {

var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

var gamedataTypeAside3TypeChartIneffectivenessTableTR = document.createElement("tr");
var gamedataTypeAside3TypeChartIneffectivenessTableTH = document.createElement("th");
var gamedataTypeAside3TypeChartIneffectivenessTableTHIMG = document.createElement("img");

gamedataTypeAside3TypeChartIneffectivenessTable.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTR);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
        tempIneffectivenessArrLeft.push(i)
    }
}

for (var num of tempIneffectivenessArrLeft) {
    tempIneffectivenessArrLeftCount[num] = tempIneffectivenessArrLeftCount[num] ? tempIneffectivenessArrLeftCount[num] + 1 : 1;
}

if (tempIneffectivenessArrLeftCount[i] == undefined) {tempIneffectivenessArrLeftCount[i] = 0;}

for (var q = 0; q < Math.max.apply(Math,tempIneffectivenessArrLeftMaxResult) - tempIneffectivenessArrLeftCount[i]; q++) {
    var gamedataTypeAside3TypeChartIneffectivenessTableTDLeft = document.createElement("td");
    gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTDLeft);
}

gamedataTypeAside3TypeChartIneffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
gamedataTypeAside3TypeChartIneffectivenessTableTH.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
gamedataTypeAside3TypeChartIneffectivenessTableTH.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
gamedataTypeAside3TypeChartIneffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
gamedataTypeAside3TypeChartIneffectivenessTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
        var gamedataTypeAside3TypeChartIneffectivenessTableTHLeft = document.createElement("th");
        var gamedataTypeAside3TypeChartIneffectivenessTableTHLeftIMG = document.createElement("img");
        gamedataTypeAside3TypeChartIneffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
        gamedataTypeAside3TypeChartIneffectivenessTableTHLeft.setAttribute("title",finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
        gamedataTypeAside3TypeChartIneffectivenessTableTHLeft.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
        gamedataTypeAside3TypeChartIneffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png"
        gamedataTypeAside3TypeChartIneffectivenessTableTHLeftIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
        gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTHLeft);
        gamedataTypeAside3TypeChartIneffectivenessTableTHLeft.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTHLeftIMG);

    }
}

var gamedataTypeAside3TypeChartIneffectivenessTableTDLeftArrow = document.createElement("td");
if (tempIneffectivenessArrLeftCount[i] != 0) {
    gamedataTypeAside3TypeChartIneffectivenessTableTDLeftArrow.innerText = "→";
}
gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTDLeftArrow);


gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTH);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
        tempIneffectivenessArrRight.push(i)
    }
}

for (var num of tempIneffectivenessArrRight) {
    tempIneffectivenessArrRightCount[num] = tempIneffectivenessArrRightCount[num] ? tempIneffectivenessArrRightCount[num] + 1 : 1;
}

if (tempIneffectivenessArrRightCount[i] == undefined) {tempIneffectivenessArrRightCount[i] = 0;}

var gamedataTypeAside3TypeChartIneffectivenessTableTDRightArrow = document.createElement("td");
if (tempIneffectivenessArrRightCount[i] != 0) {
    gamedataTypeAside3TypeChartIneffectivenessTableTDRightArrow.innerText = "→"
}

gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTDRightArrow);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
        var gamedataTypeAside3TypeChartIneffectivenessTableTHRight = document.createElement("th");
        var gamedataTypeAside3TypeChartIneffectivenessTableTHRightIMG = document.createElement("img");
        gamedataTypeAside3TypeChartIneffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
        gamedataTypeAside3TypeChartIneffectivenessTableTHRight.setAttribute("title",finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
        gamedataTypeAside3TypeChartIneffectivenessTableTHRight.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
        gamedataTypeAside3TypeChartIneffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png"
        gamedataTypeAside3TypeChartIneffectivenessTableTHRightIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
        gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTHRight);
        gamedataTypeAside3TypeChartIneffectivenessTableTHRight.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTHRightIMG);

    }
}


gamedataTypeAside3TypeChartIneffectivenessTableTH.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTHIMG);


for (var q = 0; q < Math.max.apply(Math,tempIneffectivenessArrRightMaxResult) - tempIneffectivenessArrRightCount[i]; q++) {
    var gamedataTypeAside3TypeChartIneffectivenessTableTDRight = document.createElement("td");
    gamedataTypeAside3TypeChartIneffectivenessTableTR.appendChild(gamedataTypeAside3TypeChartIneffectivenessTableTDRight);
}

}

gamedataTypeAside3TypechartIneffectiveness.appendChild(gamedataTypeAside3TypeChartIneffectivenessTable);

// Ineffectiveness End





// Immunity Start
var gamedataTypeAside3TypeChartImmunityTable = document.createElement("table");

gamedataTypeAside3TypeChartImmunityTable.setAttribute("id","typechart-immunity-table");
gamedataTypeAside3TypeChartImmunityTable.setAttribute("name",MEDIAPath_Type_Icon);
gamedataTypeAside3TypeChartImmunityTable.classList.add("typechart");

var gamedataTypeAside3TypeChartImmunityTableTR = document.createElement("tr");
gamedataTypeAside3TypeChartImmunityTable.appendChild(gamedataTypeAside3TypeChartImmunityTableTR);

var tempImmunityArrLeft = [];
var tempImmunityArrLeftCount = {};

var tempImmunityArrRight = [];
var tempImmunityArrRightCount = {};

var tempImmunityArrLeftMax = [];
var tempImmunityArrLeftMaxCount = {};
var tempImmunityArrLeftMaxResult = [];

var tempImmunityArrRightMax = [];
var tempImmunityArrRightMaxCount = {};
var tempImmunityArrRightMaxResult = [];

for (var i = 0; i < finaldataTypeChart.length; i++) {

var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

    for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
        if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
            tempImmunityArrLeftMax.push(i)
        }
    }

    for (var num of tempImmunityArrLeftMax) {
        tempImmunityArrLeftMaxCount[num] = tempImmunityArrLeftMaxCount[num] ? tempImmunityArrLeftMaxCount[num] + 1 : 1;
    }

    for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
        if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
            tempImmunityArrRightMax.push(i)
        }
    }

    for (var num of tempImmunityArrRightMax) {
        tempImmunityArrRightMaxCount[num] = tempImmunityArrRightMaxCount[num] ? tempImmunityArrRightMaxCount[num] + 1 : 1;
    }

    if (tempImmunityArrLeftMaxCount[i] != undefined) {
        tempImmunityArrLeftMaxResult.push(tempImmunityArrLeftMaxCount[i])
    }
    if (tempImmunityArrRightMaxCount[i] != undefined) {
        tempImmunityArrRightMaxResult.push(tempImmunityArrRightMaxCount[i])
    }

}

for (var i = 0; i < finaldataTypeChart.length; i++) {

var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);

var gamedataTypeAside3TypeChartImmunityTableTR = document.createElement("tr");
var gamedataTypeAside3TypeChartImmunityTableTH = document.createElement("th");
var gamedataTypeAside3TypeChartImmunityTableTHIMG = document.createElement("img");

gamedataTypeAside3TypeChartImmunityTable.appendChild(gamedataTypeAside3TypeChartImmunityTableTR);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
        tempImmunityArrLeft.push(i)
    }
}

for (var num of tempImmunityArrLeft) {
    tempImmunityArrLeftCount[num] = tempImmunityArrLeftCount[num] ? tempImmunityArrLeftCount[num] + 1 : 1;
}

if (tempImmunityArrLeftCount[i] == undefined) {tempImmunityArrLeftCount[i] = 0;}

for (var q = 0; q < Math.max.apply(Math,tempImmunityArrLeftMaxResult) - tempImmunityArrLeftCount[i]; q++) {
    var gamedataTypeAside3TypeChartImmunityTableTDLeft = document.createElement("td");
    gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTDLeft);
}

gamedataTypeAside3TypeChartImmunityTableTH.innerText = finaldataTypeChartTitle[i];
gamedataTypeAside3TypeChartImmunityTableTH.setAttribute("title",finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
gamedataTypeAside3TypeChartImmunityTableTH.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
gamedataTypeAside3TypeChartImmunityTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
gamedataTypeAside3TypeChartImmunityTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");


for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
        var gamedataTypeAside3TypeChartImmunityTableTHLeft = document.createElement("th");
        var gamedataTypeAside3TypeChartImmunityTableTHLeftIMG = document.createElement("img");
        gamedataTypeAside3TypeChartImmunityTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
        gamedataTypeAside3TypeChartImmunityTableTHLeft.setAttribute("title",finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
        gamedataTypeAside3TypeChartImmunityTableTHLeft.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
        gamedataTypeAside3TypeChartImmunityTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png"
        gamedataTypeAside3TypeChartImmunityTableTHLeftIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
        gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTHLeft);
        gamedataTypeAside3TypeChartImmunityTableTHLeft.appendChild(gamedataTypeAside3TypeChartImmunityTableTHLeftIMG);

    }
}

var gamedataTypeAside3TypeChartImmunityTableTDLeftArrow = document.createElement("td");
if (tempImmunityArrLeftCount[i] != 0) {
    gamedataTypeAside3TypeChartImmunityTableTDLeftArrow.innerText = "→";
}
gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTDLeftArrow);


gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTH);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
        tempImmunityArrRight.push(i)
    }
}

for (var num of tempImmunityArrRight) {
    tempImmunityArrRightCount[num] = tempImmunityArrRightCount[num] ? tempImmunityArrRightCount[num] + 1 : 1;
}

if (tempImmunityArrRightCount[i] == undefined) {tempImmunityArrRightCount[i] = 0;}

var gamedataTypeAside3TypeChartImmunityTableTDRightArrow = document.createElement("td");
if (tempImmunityArrRightCount[i] != 0) {
    gamedataTypeAside3TypeChartImmunityTableTDRightArrow.innerText = "→"
}

gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTDRightArrow);

for (var q = 0; q < finaldataTypeChartTitle.length; q++) {
    if (finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
        var gamedataTypeAside3TypeChartImmunityTableTHRight = document.createElement("th");
        var gamedataTypeAside3TypeChartImmunityTableTHRightIMG = document.createElement("img");
        gamedataTypeAside3TypeChartImmunityTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
        gamedataTypeAside3TypeChartImmunityTableTHRight.setAttribute("title",finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
        gamedataTypeAside3TypeChartImmunityTableTHRight.setAttribute("onclick",'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
        gamedataTypeAside3TypeChartImmunityTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png"
        gamedataTypeAside3TypeChartImmunityTableTHRightIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
        gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTHRight);
        gamedataTypeAside3TypeChartImmunityTableTHRight.appendChild(gamedataTypeAside3TypeChartImmunityTableTHRightIMG);

    }
}


gamedataTypeAside3TypeChartImmunityTableTH.appendChild(gamedataTypeAside3TypeChartImmunityTableTHIMG);


for (var q = 0; q < Math.max.apply(Math,tempImmunityArrRightMaxResult) - tempImmunityArrRightCount[i]; q++) {
    var gamedataTypeAside3TypeChartImmunityTableTDRight = document.createElement("td");
    gamedataTypeAside3TypeChartImmunityTableTR.appendChild(gamedataTypeAside3TypeChartImmunityTableTDRight);
}

}

gamedataTypeAside3TypechartImmunity.appendChild(gamedataTypeAside3TypeChartImmunityTable);

// Immunity End




var typeOptionsTitle = ["Matrix","Effectiveness","Ineffectiveness","Immunity"];

for (var q = 0; q < typeOptionsTitle.length; q++) {
    var gamedataTypeAside1OptionsInput = document.createElement("input");
    var gamedataTypeAside1OptionsLabel = document.createElement("label");
    gamedataTypeAside1OptionsInput.setAttribute("type","radio");
    gamedataTypeAside1OptionsInput.setAttribute("name","type-options");
    gamedataTypeAside1OptionsInput.setAttribute("id","type-options-" + q);
    gamedataTypeAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataTypeAside1OptionsInput.value = q;
    gamedataTypeAside1OptionsLabel.setAttribute("for","type-options-" + q);
    gamedataTypeAside1OptionsLabel.setAttribute("name","large");
    gamedataTypeAside1OptionsLabel.innerText = typeOptionsTitle[q];
    gamedataTypeAside1Options.appendChild(gamedataTypeAside1OptionsInput);
    gamedataTypeAside1Options.appendChild(gamedataTypeAside1OptionsLabel);

    gamedataTypeAside1OptionsInput.addEventListener("click", typeOptionsSelector);
    function typeOptionsSelector() {
        gamedataTypeAside2Title.innerText = typeOptionsTitle[this.value] + " Type Chart";

        var typechartContents = document.querySelectorAll("#type-aside3 div[name]");
        var typechartContent = document.querySelectorAll("#type-aside3 div[name='" + this.value + "']");

        for (var q = 0; q < typechartContents.length; q++) {
            typechartContents[q].style.display = "none";
        }

        for (var q = 0; q < typechartContent.length; q++) {
            typechartContent[q].style.display = "flex";
        }
    }
}
// Types End



// Tools Start
var gamedataToolOuter = document.createElement("div");
var gamedataToolAside1 = document.createElement("aside");
var gamedataToolAside1OptionsTitleOuter = document.createElement("div");
var gamedataToolAside1OptionsTitle = document.createElement("h2");
var gamedataToolAside1OptionsOuter = document.createElement("div");
var gamedataToolAside1Options = document.createElement("div");
var gamedataToolAside2 = document.createElement("aside");
var gamedataToolAside2Title = document.createElement("h1");
var gamedataToolAside3 = document.createElement("aside");
var gamedataToolAside3TimersOuter = document.createElement("div");
var gamedataToolAside3TimerSelectorOuter = document.createElement("div");

gamedataToolOuter.setAttribute("id","tool-outer");
gamedataToolOuter.setAttribute("name","Tools");
gamedataToolOuter.classList.add("gamedata-contentdiv");
gamedataToolAside1.setAttribute("id","tool-aside1");
gamedataToolAside1OptionsTitleOuter.setAttribute("id","tool-options-title");
gamedataToolAside1OptionsTitle.innerText = "Tools";
gamedataToolAside1OptionsOuter.setAttribute("id","tool-options-outer");
gamedataToolAside1OptionsOuter.classList.add("scroll");
gamedataToolAside1Options.setAttribute("id","tool-options");
gamedataToolAside2.setAttribute("id","tool-aside2");
gamedataToolAside2Title.innerText = "Tools";
gamedataToolAside3.setAttribute("id","tool-aside3");
gamedataToolAside3TimersOuter.setAttribute("id","timers-outer");
gamedataToolAside3TimersOuter.setAttribute("name","0");
gamedataToolAside3TimerSelectorOuter.setAttribute("id","timer-selector-outer");

gamedataDivContent.appendChild(gamedataToolOuter);
gamedataToolOuter.appendChild(gamedataToolAside1);
gamedataToolAside1.appendChild(gamedataToolAside1OptionsTitleOuter);
gamedataToolAside1OptionsTitleOuter.appendChild(gamedataToolAside1OptionsTitle);
gamedataToolAside1.appendChild(gamedataToolAside1OptionsOuter);
gamedataToolAside1OptionsOuter.appendChild(gamedataToolAside1Options);
gamedataToolOuter.appendChild(gamedataToolAside2);
gamedataToolAside2.appendChild(gamedataToolAside2Title);
gamedataToolOuter.appendChild(gamedataToolAside3);
gamedataToolAside3.appendChild(gamedataToolAside3TimersOuter);
gamedataToolAside3TimersOuter.appendChild(gamedataToolAside3TimerSelectorOuter);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var stopwatchcountdown = ["stopwatch","countdown"];

for (var q = 0; q < stopwatchcountdown.length; q++) {
    var x = q + 1;

    var gamedataToolAside3TimerSelector = document.createElement("div");
    var gamedataToolAside3TimerSelectorInput = document.createElement("input");
    var gamedataToolAside3TimerSelectorLabel = document.createElement("label");

    gamedataToolAside3TimerSelector.setAttribute("id","timer-selector");
    gamedataToolAside3TimerSelectorInput.setAttribute("type","radio");
    gamedataToolAside3TimerSelectorInput.setAttribute("id","timerselector" + x);
    gamedataToolAside3TimerSelectorInput.setAttribute("name","timerselector");
    gamedataToolAside3TimerSelectorInput.setAttribute("autocomplete","off");
    gamedataToolAside3TimerSelectorLabel.setAttribute("for","timerselector" + x);
    gamedataToolAside3TimerSelectorLabel.innerText = capitalizeFirstLetter(stopwatchcountdown[q]);

    gamedataToolAside3TimerSelectorOuter.appendChild(gamedataToolAside3TimerSelector);
    gamedataToolAside3TimerSelector.appendChild(gamedataToolAside3TimerSelectorInput);
    gamedataToolAside3TimerSelector.appendChild(gamedataToolAside3TimerSelectorLabel);

    gamedataToolAside3TimerSelectorInput.addEventListener("click", timerSelector);   
}


for (var q = 0; q < stopwatchcountdown.length; q++) {

    var gamedataToolAside3TimerOuter = document.createElement("div");
    var gamedataToolAside3Timer = document.createElement("div");
    var gamedataToolAside3TimerPausePlay = document.createElement("button");
    var gamedataToolAside3TimerTime = document.createElement("div");
    var gamedataToolAside3TimerSet = document.createElement("div");
    var gamedataToolAside3TimerSetSpan = document.createElement("span");
    var gamedataToolAside3TimerSetInputHours = document.createElement("input");
    var gamedataToolAside3TimerSetInputMinutes = document.createElement("input");
    var gamedataToolAside3TimerSetInputSeconds = document.createElement("input");
    var gamedataToolAside3TimerSetInputMilliseconds = document.createElement("input");
    var gamedataToolAside3TimerList = document.createElement("ul");
    var gamedataToolAside3TimerLaps = document.createElement("button");
    var gamedataToolAside3TimerReset = document.createElement("button");

    gamedataToolAside3TimerOuter.setAttribute("id",stopwatchcountdown[q] + "-outer");
    gamedataToolAside3Timer.setAttribute("id",stopwatchcountdown[q]);
    gamedataToolAside3TimerPausePlay.setAttribute("id",stopwatchcountdown[q] + "-start-stop");
    gamedataToolAside3TimerPausePlay.setAttribute("title","Start");
    gamedataToolAside3TimerPausePlay.innerText = '\u23F5';
    gamedataToolAside3TimerTime.setAttribute("id",stopwatchcountdown[q] + "-time");
    gamedataToolAside3TimerSet.setAttribute("id",stopwatchcountdown[q] + "-set");
    gamedataToolAside3TimerSetSpan
    gamedataToolAside3TimerSetInputHours.setAttribute("type","number");
    gamedataToolAside3TimerSetInputHours.setAttribute("min","0");
    gamedataToolAside3TimerSetInputHours.setAttribute("max","9999");
    gamedataToolAside3TimerSetInputHours.setAttribute("autocomplete","off");
    gamedataToolAside3TimerSetInputHours.setAttribute("placeholder","00");
    gamedataToolAside3TimerSetInputHours.setAttribute("title","Hours");
    gamedataToolAside3TimerSetInputHours.classList.add(stopwatchcountdown[q] + "-hours");
    gamedataToolAside3TimerSetInputMinutes.setAttribute("type","number");
    gamedataToolAside3TimerSetInputMinutes.setAttribute("min","0");
    gamedataToolAside3TimerSetInputMinutes.setAttribute("max","59");
    gamedataToolAside3TimerSetInputMinutes.setAttribute("autocomplete","off");
    gamedataToolAside3TimerSetInputMinutes.setAttribute("placeholder","00");
    gamedataToolAside3TimerSetInputMinutes.setAttribute("title","Minutes");
    gamedataToolAside3TimerSetInputMinutes.classList.add(stopwatchcountdown[q] + "-minutes");
    gamedataToolAside3TimerSetInputSeconds.setAttribute("type","number");
    gamedataToolAside3TimerSetInputSeconds.setAttribute("min","0");
    gamedataToolAside3TimerSetInputSeconds.setAttribute("max","59");
    gamedataToolAside3TimerSetInputSeconds.setAttribute("autocomplete","off");
    gamedataToolAside3TimerSetInputSeconds.setAttribute("placeholder","00");
    gamedataToolAside3TimerSetInputSeconds.setAttribute("title","Seconds");
    gamedataToolAside3TimerSetInputSeconds.classList.add(stopwatchcountdown[q] + "-seconds");
    gamedataToolAside3TimerSetInputMilliseconds.setAttribute("type","number");
    gamedataToolAside3TimerSetInputMilliseconds.setAttribute("min","0");
    gamedataToolAside3TimerSetInputMilliseconds.setAttribute("max","99");
    gamedataToolAside3TimerSetInputMilliseconds.setAttribute("autocomplete","off");
    gamedataToolAside3TimerSetInputMilliseconds.setAttribute("placeholder","00");
    gamedataToolAside3TimerSetInputMilliseconds.setAttribute("title","Milliseconds");
    gamedataToolAside3TimerSetInputMilliseconds.classList.add(stopwatchcountdown[q] + "-milliseconds");
    gamedataToolAside3TimerList.setAttribute("id",stopwatchcountdown[q] + "-list");
    gamedataToolAside3TimerLaps.setAttribute("id",stopwatchcountdown[q] + "-laps");
    gamedataToolAside3TimerLaps.setAttribute("title","Laps");
    gamedataToolAside3TimerLaps.innerText = '\u23F6';
    gamedataToolAside3TimerReset.setAttribute("id",stopwatchcountdown[q] + "-reset");
    gamedataToolAside3TimerReset.setAttribute("title","Reset");
    gamedataToolAside3TimerReset.innerText = '\u23F9';

    gamedataToolAside3TimersOuter.appendChild(gamedataToolAside3TimerOuter);
    gamedataToolAside3TimerOuter.appendChild(gamedataToolAside3Timer);
    gamedataToolAside3Timer.appendChild(gamedataToolAside3TimerPausePlay);
    gamedataToolAside3Timer.appendChild(gamedataToolAside3TimerTime);
    gamedataToolAside3Timer.appendChild(gamedataToolAside3TimerSet);
    gamedataToolAside3TimerSet.appendChild(gamedataToolAside3TimerSetSpan);
    gamedataToolAside3TimerSetSpan.appendChild(gamedataToolAside3TimerSetInputHours);
    gamedataToolAside3TimerSetSpan.innerHTML += ":";
    gamedataToolAside3TimerSetSpan.appendChild(gamedataToolAside3TimerSetInputMinutes);
    gamedataToolAside3TimerSetSpan.innerHTML += ":";
    gamedataToolAside3TimerSetSpan.appendChild(gamedataToolAside3TimerSetInputSeconds);
    gamedataToolAside3TimerSetSpan.innerHTML += ":";
    gamedataToolAside3TimerSetSpan.appendChild(gamedataToolAside3TimerSetInputMilliseconds);
    gamedataToolAside3TimerOuter.appendChild(gamedataToolAside3TimerList);
    gamedataToolAside3TimerOuter.appendChild(gamedataToolAside3TimerLaps);
    gamedataToolAside3TimerOuter.appendChild(gamedataToolAside3TimerReset);
}

var gamedataToolAside3RNGOuter = document.createElement("div");
var gamedataToolAside3RNG = document.createElement("div");
var gamedataToolAside3RNGOptions = document.createElement("div");
var gamedataToolAside3RNGOptionsIterations = document.createElement("div");
var gamedataToolAside3RNGOptionsIterationsText = document.createElement("p");
var gamedataToolAside3RNGOptionsIterationsInput = document.createElement("input");
var gamedataToolAside3RNGOptionsTitle = document.createElement("div");
var gamedataToolAside3RNGOptionsTitleIterations = document.createElement("div");
var gamedataToolAside3RNGOptionsTitleIterationsText = document.createElement("p");
var gamedataToolAside3RNGOptionsTitleMin = document.createElement("div");
var gamedataToolAside3RNGOptionsTitleMinText = document.createElement("p");
var gamedataToolAside3RNGOptionsTitleMax = document.createElement("div");
var gamedataToolAside3RNGOptionsTitleMaxText = document.createElement("p");
var gamedataToolAside3RNGOptionsUl = document.createElement("ul");
var gamedataToolAside3RNGOptionsExecute = document.createElement("div");
var gamedataToolAside3RNGOptionsExecuteButton = document.createElement("button");
var gamedataToolAside3RNGResult = document.createElement("div");


gamedataToolAside3RNGOuter.classList.add("rng-outer")
gamedataToolAside3RNGOuter.setAttribute("name","2");

gamedataToolAside3RNG.setAttribute("id","rng");
gamedataToolAside3RNGResult.classList.add("result");
gamedataToolAside3RNGResult.classList.add("scroll");

gamedataToolAside3RNGOptions.classList.add("options");
gamedataToolAside3RNGOptionsIterations.classList.add("iterations");
gamedataToolAside3RNGOptionsIterationsText.innerText = "Iterations";
gamedataToolAside3RNGOptionsIterationsInput.setAttribute("type","number");
gamedataToolAside3RNGOptionsIterationsInput.setAttribute("min","1");
gamedataToolAside3RNGOptionsIterationsInput.setAttribute("max","1000");
gamedataToolAside3RNGOptionsIterationsInput.setAttribute("value","1");
gamedataToolAside3RNGOptionsIterationsInput.setAttribute("autocomplete","off");
gamedataToolAside3RNGOptionsTitle.classList.add("title");
gamedataToolAside3RNGOptionsTitleIterations.classList.add("it");
gamedataToolAside3RNGOptionsTitleIterationsText.innerText = "#";
gamedataToolAside3RNGOptionsTitleMin.classList.add("min");
gamedataToolAside3RNGOptionsTitleMinText.innerText = "Min";
gamedataToolAside3RNGOptionsTitleMax.classList.add("max");
gamedataToolAside3RNGOptionsTitleMaxText.innerText = "Max";
gamedataToolAside3RNGOptionsUl.classList.add("scroll");
gamedataToolAside3RNGOptionsExecute.classList.add("execute");
gamedataToolAside3RNGOptionsExecuteButton.innerText = "Generate Random Numbers";


gamedataToolAside3.appendChild(gamedataToolAside3RNGOuter)
gamedataToolAside3RNGOuter.appendChild(gamedataToolAside3RNG);
gamedataToolAside3RNG.appendChild(gamedataToolAside3RNGResult);
gamedataToolAside3RNG.appendChild(gamedataToolAside3RNGOptions);
gamedataToolAside3RNGOptions.appendChild(gamedataToolAside3RNGOptionsExecute);
gamedataToolAside3RNGOptionsExecute.appendChild(gamedataToolAside3RNGOptionsExecuteButton);
gamedataToolAside3RNGOptions.appendChild(gamedataToolAside3RNGOptionsIterations);
gamedataToolAside3RNGOptionsIterations.appendChild(gamedataToolAside3RNGOptionsIterationsText);
gamedataToolAside3RNGOptionsIterations.appendChild(gamedataToolAside3RNGOptionsIterationsInput);
gamedataToolAside3RNGOptions.appendChild(gamedataToolAside3RNGOptionsTitle);
gamedataToolAside3RNGOptionsTitle.appendChild(gamedataToolAside3RNGOptionsTitleIterations);
gamedataToolAside3RNGOptionsTitleIterations.appendChild(gamedataToolAside3RNGOptionsTitleIterationsText);
gamedataToolAside3RNGOptionsTitle.appendChild(gamedataToolAside3RNGOptionsTitleMin);
gamedataToolAside3RNGOptionsTitleMin.appendChild(gamedataToolAside3RNGOptionsTitleMinText);
gamedataToolAside3RNGOptionsTitle.appendChild(gamedataToolAside3RNGOptionsTitleMax);
gamedataToolAside3RNGOptionsTitleMax.appendChild(gamedataToolAside3RNGOptionsTitleMaxText);
gamedataToolAside3RNGOptions.appendChild(gamedataToolAside3RNGOptionsUl);





var toolOptionsTitle = ["Timers","Counter","Random Number Generator","Damage Calculator","Catch Rate Calculator","Shiny Odds Calculator","IV Calculator","Pokémon Finder","Item Checklist"];

for (var q = 0; q < toolOptionsTitle.length; q++) {

    var gamedataToolAside1OptionsInput = document.createElement("input");
    var gamedataToolAside1OptionsLabel = document.createElement("label");
    gamedataToolAside1OptionsInput.setAttribute("type","radio");
    gamedataToolAside1OptionsInput.setAttribute("name","tool-options");
    gamedataToolAside1OptionsInput.setAttribute("id","tool-options-" + q);
    gamedataToolAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataToolAside1OptionsInput.value = q;
    gamedataToolAside1OptionsLabel.setAttribute("for","tool-options-" + q);
    gamedataToolAside1OptionsLabel.setAttribute("name","large");
    gamedataToolAside1OptionsLabel.innerHTML = toolOptionsTitle[q];
    gamedataToolAside1Options.appendChild(gamedataToolAside1OptionsInput);
    gamedataToolAside1Options.appendChild(gamedataToolAside1OptionsLabel);


    gamedataToolAside1OptionsInput.addEventListener("click", toolOptionsSelector);
    function toolOptionsSelector() {
        gamedataToolAside2Title.innerText = toolOptionsTitle[this.value];


        var toolContents = document.querySelectorAll("#tool-aside3 > div[name]");
        var toolContent = document.querySelectorAll("#tool-aside3 > div[name='" + this.value + "']");

        for (var q = 0; q < toolContents.length; q++) {
            toolContents[q].style.display = "none";
        }

        for (var q = 0; q < toolContent.length; q++) {
            toolContent[q].style.display = "block";
        }
    }
}
// Tools End



// Abilities Start
if (Generation >= 3 && GameID != 31 && GameID != 32) {
var gamedataAbilityOuter = document.createElement("div");
var gamedataAbilityAside1 = document.createElement("aside");
var gamedataAbilityAside1OptionsTitleOuter = document.createElement("div");
var gamedataAbilityAside1OptionsSearchOuter = document.createElement("div");
var gamedataAbilityAside1OptionsSearch = document.createElement("input");
var gamedataAbilityAside1OptionsSearchExit = document.createElement("span");
var gamedataAbilityAside1OptionsOuter = document.createElement("div");
var gamedataAbilityAside1Options = document.createElement("div");
var gamedataAbilityAside2 = document.createElement("aside");
var gamedataAbilityAside2Title = document.createElement("span");
var gamedataAbilityAside2TitleID = document.createElement("h1");
var gamedataAbilityAside2TitleName = document.createElement("h1");
var gamedataAbilityAside2Debut = document.createElement("span");
var gamedataAbilityAside2DebutText = document.createElement("h4");
var gamedataAbilityAside3 = document.createElement("aside");
var gamedataAbilityAside3Description = document.createElement("div");
var gamedataAbilityAside3DescriptionText = document.createElement("p");
var gamedataAbilityAside3EffectTitle = document.createElement("h3");
var gamedataAbilityAside3EffectText = document.createElement("p");
var gamedataAbilityAside4 = document.createElement("aside");
var gamedataAbilityAside4Sidebar = document.createElement("div");
var gamedataAbilityAside4SidebarTitle = document.createElement("div");
var gamedataAbilityAside4SidebarTitleLiTop = document.createElement("li");
var gamedataAbilityAside4SidebarTitleLiBottom = document.createElement("li");
var gamedataAbilityAside4SidebarUl = document.createElement("ul");

gamedataAbilityAside4Sidebar.classList.add("ability-sidebar");
gamedataAbilityAside4SidebarTitle.classList.add("ability-sidebar-title");

gamedataAbilityAside4.appendChild(gamedataAbilityAside4Sidebar);
gamedataAbilityAside4Sidebar.appendChild(gamedataAbilityAside4SidebarTitle);
gamedataAbilityAside4SidebarTitle.appendChild(gamedataAbilityAside4SidebarTitleLiTop);
gamedataAbilityAside4SidebarTitle.appendChild(gamedataAbilityAside4SidebarTitleLiBottom);
gamedataAbilityAside4Sidebar.appendChild(gamedataAbilityAside4SidebarUl);


var gamedataAbilityAside4SidebarTitleLiTopText = document.createElement("h4");
gamedataAbilityAside4SidebarTitleLiTop.appendChild(gamedataAbilityAside4SidebarTitleLiTopText);

if (Generation <= 4) {
    var sidebarAbilityList = ["Pokémon","Primary Ability","Secondary Ability"];
}

if (Generation >= 5) {
    var sidebarAbilityList = ["Pokémon","Primary Ability","Secondary Ability","Hidden Ability"];
}
for (var q = 0; q < sidebarAbilityList.length; q++) {
    var gamedataAbilityAside4SidebarTitleLiBottomText = document.createElement("h6");
    gamedataAbilityAside4SidebarTitleLiBottomText.innerText = sidebarAbilityList[q];
    gamedataAbilityAside4SidebarTitleLiBottom.appendChild(gamedataAbilityAside4SidebarTitleLiBottomText);
}




gamedataAbilityOuter.setAttribute("id","ability-outer");
gamedataAbilityOuter.setAttribute("name","Abilities");
gamedataAbilityOuter.classList.add("gamedata-contentdiv");
gamedataAbilityAside1.setAttribute("id","ability-aside1");
gamedataAbilityAside1OptionsTitleOuter.setAttribute("id","ability-options-title");
gamedataAbilityAside1OptionsSearchOuter.setAttribute("id","ability-options-search");
gamedataAbilityAside1OptionsSearch.setAttribute("type","text");
gamedataAbilityAside1OptionsSearch.setAttribute("id","ability-search");
gamedataAbilityAside1OptionsSearch.setAttribute("placeholder","Search Abilities...");
gamedataAbilityAside1OptionsSearch.setAttribute("onfocus","this.placeholder=''");
gamedataAbilityAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Abilities...'");
gamedataAbilityAside1OptionsSearch.setAttribute("autocomplete","off");
gamedataAbilityAside1OptionsSearchExit.setAttribute("id","ability-search-exit");
gamedataAbilityAside1OptionsOuter.setAttribute("id","ability-options-outer");
gamedataAbilityAside1Options.setAttribute("id","ability-options");
gamedataAbilityAside2.setAttribute("id","ability-aside2");
gamedataAbilityAside2Title.classList.add("ability-title");
gamedataAbilityAside2TitleName.innerText = "Abilities";
gamedataAbilityAside2Debut.classList.add("ability-debut")
gamedataAbilityAside3.setAttribute("id","ability-aside3");
gamedataAbilityAside3Description.classList.add("ability-description")
gamedataAbilityAside3EffectTitle.innerText = "Effect";
gamedataAbilityAside3EffectText.innerHTML = "Every second turn, a Pokémon with Truant cannot use a move due to loafing around, such that the Pokémon can move on its first turn but not its second turn. Switching out or gaining the Ability Truant resets the turn count for Truant. Using an item does not count as a turn for the purposes of Truant. Truant is reset by sleep and a Pokémon with Truant will always be able to attack on the turn it wakes up.<br><br>Moves with a charging turn, such as Fly, will not work (unless the user is holding a Power Herb).<br>Moves that requires recharging, such as Hyper Beam, will not work.<br><br>If a Pokémon gains Truant after it calls upon Mega Evolution, Ultra Burst, or Dynamax at the beginning of a turn, but before it moves that turn, Truant will activate on its first attempt to move.<br><br>Truant cannot be overwritten by Simple Beam, Worry Seed, or Entrainment, but it can be overwritten by Skill Swap or Role Play.";
gamedataAbilityAside4.setAttribute("id","ability-aside4");


gamedataDivContent.appendChild(gamedataAbilityOuter);
gamedataAbilityOuter.appendChild(gamedataAbilityAside1);
gamedataAbilityAside1.appendChild(gamedataAbilityAside1OptionsTitleOuter);
gamedataAbilityAside1OptionsTitleOuter.appendChild(gamedataAbilityAside1OptionsSearchOuter);
gamedataAbilityAside1OptionsSearchOuter.appendChild(gamedataAbilityAside1OptionsSearchExit);
gamedataAbilityAside1OptionsSearchOuter.appendChild(gamedataAbilityAside1OptionsSearch);
gamedataAbilityAside1.appendChild(gamedataAbilityAside1OptionsOuter);
gamedataAbilityAside1OptionsOuter.appendChild(gamedataAbilityAside1Options);
gamedataAbilityOuter.appendChild(gamedataAbilityAside2);
gamedataAbilityAside2.appendChild(gamedataAbilityAside2Title);
gamedataAbilityAside2Title.appendChild(gamedataAbilityAside2TitleID);
gamedataAbilityAside2Title.appendChild(gamedataAbilityAside2TitleName);
gamedataAbilityAside2.appendChild(gamedataAbilityAside2Debut);
gamedataAbilityAside2Debut.appendChild(gamedataAbilityAside2DebutText);
gamedataAbilityOuter.appendChild(gamedataAbilityAside3);
gamedataAbilityAside3.appendChild(gamedataAbilityAside3Description);
gamedataAbilityAside3Description.appendChild(gamedataAbilityAside3DescriptionText);
gamedataAbilityAside3Description.appendChild(gamedataAbilityAside3EffectTitle);
gamedataAbilityAside3Description.appendChild(gamedataAbilityAside3EffectText);
gamedataAbilityOuter.appendChild(gamedataAbilityAside4);


for (var q = 0; q < finaldataAbility.length; q++) {
    for (var u = 0; u < finaldataAbility.length; u++) {
    if (Object.keys(finaldataAbility[q])[u] == JSONPath_AbilityReference+"_"+"Name") {

    var gamedataAbilityAside1OptionsInput = document.createElement("input");
    var gamedataAbilityAside1OptionsLabel = document.createElement("label");
    gamedataAbilityAside1OptionsInput.setAttribute("type","radio");
    gamedataAbilityAside1OptionsInput.setAttribute("name","ability-options");
    gamedataAbilityAside1OptionsInput.setAttribute("id","ability-options-" + q);
    gamedataAbilityAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataAbilityAside1OptionsInput.value = q;
    gamedataAbilityAside1OptionsLabel.setAttribute("for","ability-options-" + q);
    gamedataAbilityAside1OptionsLabel.setAttribute("name","medium");
    gamedataAbilityAside1OptionsLabel.setAttribute("data-search-name",finaldataAbility[q][JSONPath_AbilityReference+"_"+"Name"].toLowerCase());
    gamedataAbilityAside1OptionsLabel.innerText = finaldataAbility[q][JSONPath_AbilityReference+"_"+"Name"];
    gamedataAbilityAside1Options.appendChild(gamedataAbilityAside1OptionsInput);
    gamedataAbilityAside1Options.appendChild(gamedataAbilityAside1OptionsLabel);

    gamedataAbilityAside1OptionsInput.addEventListener("click", abilityOptionsSelector);
    function abilityOptionsSelector() {
        gamedataAbilityAside4SidebarTitleLiTopText.innerHTML = "Pokémon with&nbsp;" + "<u>" + finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"] + "</u>";

        gamedataAbilityAside2TitleID.innerText = "#" + getAbilityData(finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"],"ID");
        gamedataAbilityAside2DebutText.innerText = "Introduced in " + getAbilityData(finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"],"Debut");
        gamedataAbilityAside2TitleName.innerText = finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"];
        gamedataAbilityAside3DescriptionText.innerText = getAbilityData(finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"],"Flavor");

        var lis = document.querySelectorAll("#gamedata #ability-aside4 ul li");
        for (var q = 0; q < lis.length; q++) {
            lis[q].remove();
        }

        var sidebarAbilityListFull = sidebarAbilityList.map(i => i + "_" + JSONPath_Ability)
        sidebarAbilityListFull = sidebarAbilityListFull.filter(item => item !== "Pokémon" + "_" + JSONPath_Ability);

        for (var q = 0; q < sidebarAbilityListFull.length; q++) {
            sidebarAbilityListFull[q] = sidebarAbilityListFull[q].replaceAll(" Ability","");
        }

        var AbilityResults = getPokémonData(finaldataAbilityAll,finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"],sidebarAbilityListFull);
        for (var i = 0; i < AbilityResults.length; i++) {
            var gamedataAbilityAside4SidebarLi = document.createElement("li");
            gamedataAbilityAside4SidebarUl.appendChild(gamedataAbilityAside4SidebarLi);
            for (var q = 0; q < sidebarAbilityList.length; q++) {
                if (q == 0) {
                    var gamedataAbilityAside4SidebarLiImgOuter = document.createElement("div");
                    var gamedataAbilityAside4SidebarLiImg = document.createElement("img");
                    gamedataAbilityAside4SidebarLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + AbilityResults[i]["Folder Name"] + AbilityResults[i]["File Name"] + ".png";
                    gamedataAbilityAside4SidebarLiImg.value = getPokémonID(AbilityResults[i]["Pokémon"])
                    gamedataAbilityAside4SidebarLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
                    if (AbilityResults[i]["Form"] != undefined) {
                        gamedataAbilityAside4SidebarLiImg.setAttribute("title",AbilityResults[i]["Form"])
                    }
                    else {
                        gamedataAbilityAside4SidebarLiImg.setAttribute("title",AbilityResults[i]["Pokémon"])  
                    }
                    gamedataAbilityAside4SidebarLi.appendChild(gamedataAbilityAside4SidebarLiImgOuter);
                    gamedataAbilityAside4SidebarLiImgOuter.appendChild(gamedataAbilityAside4SidebarLiImg);
                    gamedataAbilityAside4SidebarLiImg.addEventListener("click", closeOpenModal2);
                }
                else if (q != 0) {
                    var gamedataAbilityAside4SidebarLiTextOuter = document.createElement("span");
                    var gamedataAbilityAside4SidebarLiText = document.createElement("button");
                    if (AbilityResults[i][sidebarAbilityListFull[q - 1]] != undefined) {
                        gamedataAbilityAside4SidebarLiText.innerText = AbilityResults[i][sidebarAbilityListFull[q - 1]];
                    }
                    if (AbilityResults[i][sidebarAbilityListFull[q - 1]] == finaldataAbility[this.value][JSONPath_AbilityReference+"_"+"Name"]) {
                        gamedataAbilityAside4SidebarLiText.classList.add("active");   
                    }
                    gamedataAbilityAside4SidebarLiText.setAttribute("title",sidebarAbilityList[q])
                    gamedataAbilityAside4SidebarLi.appendChild(gamedataAbilityAside4SidebarLiTextOuter);
                    gamedataAbilityAside4SidebarLiTextOuter.appendChild(gamedataAbilityAside4SidebarLiText);

                    gamedataAbilityAside4SidebarLiText.addEventListener("click", AbilityRedirect);
                }
            }
        }
    }
}

}
}
}
// Abilities End



// Moves Start
var gamedataMoveOuter = document.createElement("div");
var gamedataMoveAside1 = document.createElement("aside");
var gamedataMoveAside1OptionsTitleOuter = document.createElement("div");
var gamedataMoveAside1OptionsSearchOuter = document.createElement("div");
var gamedataMoveAside1OptionsSearch = document.createElement("input");
var gamedataMoveAside1OptionsSearchExit = document.createElement("span");
var gamedataMoveAside1OptionsOuter = document.createElement("div");
var gamedataMoveAside1Options = document.createElement("div");
var gamedataMoveAside2 = document.createElement("aside");
var gamedataMoveAside2Title = document.createElement("span");
var gamedataMoveAside2TitleID = document.createElement("h1");
var gamedataMoveAside2TitleName = document.createElement("h1");
var gamedataMoveAside2Debut = document.createElement("span");
var gamedataMoveAside2DebutText = document.createElement("h4");
var gamedataMoveAside3 = document.createElement("aside");
var gamedataMoveAside3Description = document.createElement("div");
var gamedataMoveAside3DescriptionText = document.createElement("p");
var gamedataMoveAside3EffectTitle = document.createElement("h3");
var gamedataMoveAside3EffectText = document.createElement("p");
var gamedataMoveAside4 = document.createElement("aside");


gamedataMoveOuter.setAttribute("id","move-outer");
gamedataMoveOuter.setAttribute("name","Moves");
gamedataMoveOuter.classList.add("gamedata-contentdiv");
gamedataMoveAside1.setAttribute("id","move-aside1");
gamedataMoveAside1OptionsTitleOuter.setAttribute("id","move-options-title");
gamedataMoveAside1OptionsSearchOuter.setAttribute("id","move-options-search");
gamedataMoveAside1OptionsSearch.setAttribute("type","text");
gamedataMoveAside1OptionsSearch.setAttribute("id","move-search");
gamedataMoveAside1OptionsSearch.setAttribute("title","Search options:\ntype:: [value/-]\ncategory:: [value/-]\npp:: [value/-]\npp:> [value/-]\npp:< [value/-]\npower:: [value/-]\npower:> [value/-]\npower:< [value/-]\naccuracy:: [value/-]\naccuracy:> [value/-]\naccuracy:< [value/-]\ncontact:: [y/n]\nrange:: [alladjacent/allenemy/allally]");
gamedataMoveAside1OptionsSearch.setAttribute("placeholder","Search Moves...");
gamedataMoveAside1OptionsSearch.setAttribute("onfocus","this.placeholder=''");
gamedataMoveAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Moves...'");
gamedataMoveAside1OptionsSearch.setAttribute("autocomplete","off");
gamedataMoveAside1OptionsSearchExit.setAttribute("id","move-search-exit");
gamedataMoveAside1OptionsOuter.setAttribute("id","move-options-outer");
gamedataMoveAside1Options.setAttribute("id","move-options");
gamedataMoveAside2.setAttribute("id","move-aside2");
gamedataMoveAside2Title.classList.add("move-title");
gamedataMoveAside2TitleID.innerText = "#";
gamedataMoveAside2TitleName.innerText = "Moves";
gamedataMoveAside2Debut.classList.add("move-debut")
gamedataMoveAside2DebutText.innerText = "Introduced in Generation I";
gamedataMoveAside3.setAttribute("id","move-aside3");
gamedataMoveAside3Description.classList.add("move-description")
gamedataMoveAside3DescriptionText.innerText = "The user attacks everything around it by swamping its surroundings with a giant wave. This can also be used for crossing water.";
gamedataMoveAside3EffectTitle.innerText = "Effect";
gamedataMoveAside3EffectText.innerHTML = "Surf inflicts damage and has no secondary effect.";
gamedataMoveAside4.setAttribute("id","move-aside4");


gamedataDivContent.appendChild(gamedataMoveOuter);
gamedataMoveOuter.appendChild(gamedataMoveAside1);
gamedataMoveAside1.appendChild(gamedataMoveAside1OptionsTitleOuter);
gamedataMoveAside1OptionsTitleOuter.appendChild(gamedataMoveAside1OptionsSearchOuter);
gamedataMoveAside1OptionsSearchOuter.appendChild(gamedataMoveAside1OptionsSearchExit);
gamedataMoveAside1OptionsSearchOuter.appendChild(gamedataMoveAside1OptionsSearch);
gamedataMoveAside1.appendChild(gamedataMoveAside1OptionsOuter);
gamedataMoveAside1OptionsOuter.appendChild(gamedataMoveAside1Options);
gamedataMoveOuter.appendChild(gamedataMoveAside2);
gamedataMoveAside2.appendChild(gamedataMoveAside2Title);
gamedataMoveAside2Title.appendChild(gamedataMoveAside2TitleID);
gamedataMoveAside2Title.appendChild(gamedataMoveAside2TitleName);
gamedataMoveAside2.appendChild(gamedataMoveAside2Debut);
gamedataMoveAside2Debut.appendChild(gamedataMoveAside2DebutText);
gamedataMoveOuter.appendChild(gamedataMoveAside3);
gamedataMoveAside3.appendChild(gamedataMoveAside3Description);
gamedataMoveAside3Description.appendChild(gamedataMoveAside3DescriptionText);
gamedataMoveAside3Description.appendChild(gamedataMoveAside3EffectTitle);
gamedataMoveAside3Description.appendChild(gamedataMoveAside3EffectText);
gamedataMoveOuter.appendChild(gamedataMoveAside4);



var gamedataMoveAside4Sidebar = document.createElement("div");
var gamedataMoveAside4SidebarTitle = document.createElement("div");
var gamedataMoveAside4SidebarTitleOption = document.createElement("li");

gamedataMoveAside4Sidebar.classList.add("move-sidebar");
gamedataMoveAside4SidebarTitle.classList.add("move-sidebar-title");


gamedataMoveAside4.appendChild(gamedataMoveAside4Sidebar);
gamedataMoveAside4Sidebar.appendChild(gamedataMoveAside4SidebarTitle);
gamedataMoveAside4SidebarTitle.appendChild(gamedataMoveAside4SidebarTitleOption);



var gamedataMoveAside4SidebarDescription = document.createElement("div");

var gamedataMoveAside4SidebarDescriptionType = document.createElement("div");
var gamedataMoveAside4SidebarDescriptionTypeText = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionTypeTextImg = document.createElement("img");
var gamedataMoveAside4SidebarDescriptionTypeTextText = document.createElement("h4");
var gamedataMoveAside4SidebarDescriptionTypeMove = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionTypeMoveImg = document.createElement("img");
var gamedataMoveAside4SidebarDescriptionTypeMoveText = document.createElement("h4");

var gamedataMoveAside4SidebarDescriptionPPPA = document.createElement("div");
var gamedataMoveAside4SidebarDescriptionPPPAPowerPoints = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionPPPAPowerPointsContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionPPPAPowerPointsTitle = document.createElement("h3");
var gamedataMoveAside4SidebarDescriptionPPPAPowerPointsText = document.createElement("p");
var gamedataMoveAside4SidebarDescriptionPPPAPower = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionPPPAPowerContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionPPPAPowerTitle = document.createElement("h3");
var gamedataMoveAside4SidebarDescriptionPPPAPowerText = document.createElement("p");
var gamedataMoveAside4SidebarDescriptionPPPAAccuracy = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionPPPAAccuracyContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionPPPAAccuracyTitle = document.createElement("h3");
var gamedataMoveAside4SidebarDescriptionPPPAAccuracyText = document.createElement("p");

var gamedataMoveAside4SidebarDescriptionContact = document.createElement("div");
var gamedataMoveAside4SidebarDescriptionContactContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionContactText = document.createElement("h4");

var gamedataMoveAside4SidebarDescriptionRange = document.createElement("div");
var gamedataMoveAside4SidebarDescriptionRangeContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionRangeText = document.createElement("h4");

var gamedataMoveAside4SidebarDescriptionHMTM = document.createElement("div");
var gamedataMoveAside4SidebarDescriptionHMTMContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionHMTMText = document.createElement("h3");

var gamedataMoveAside4SidebarDescriptionTutor = document.createElement("div");
var gamedataMoveAside4SidebarDescriptionTutorOuter = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionTutorContent = document.createElement("span");
var gamedataMoveAside4SidebarDescriptionTutorTitle = document.createElement("h3");
var gamedataMoveAside4SidebarDescriptionTutorText = document.createElement("p");


gamedataMoveAside4SidebarDescription.classList.add("move-sidebar-description");

gamedataMoveAside4SidebarDescriptionType.classList.add("move-sidebar-description-type");
gamedataMoveAside4SidebarDescriptionTypeTextImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + "Water" + ".png";
gamedataMoveAside4SidebarDescriptionTypeTextImg.setAttribute("title","Water");
gamedataMoveAside4SidebarDescriptionTypeTextImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block'");
gamedataMoveAside4SidebarDescriptionTypeTextText.innerText = "Water";
gamedataMoveAside4SidebarDescriptionTypeMoveImg.src = "./media/Images/Misc/Type/Category/" + MEDIAPath_Type_Category + "/" + "Special" + ".png";
gamedataMoveAside4SidebarDescriptionTypeMoveImg.setAttribute("title","Special");
gamedataMoveAside4SidebarDescriptionTypeMoveImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block'");
gamedataMoveAside4SidebarDescriptionTypeMoveText.innerText = "Special";

gamedataMoveAside4SidebarDescriptionPPPA.classList.add("move-sidebar-description-pppa");
gamedataMoveAside4SidebarDescriptionPPPAPowerPointsTitle.innerText = "PP";
gamedataMoveAside4SidebarDescriptionPPPAPowerPointsText.innerText = "15";
gamedataMoveAside4SidebarDescriptionPPPAPowerTitle.innerText = "Power";
gamedataMoveAside4SidebarDescriptionPPPAPowerText.innerText = "90";
gamedataMoveAside4SidebarDescriptionPPPAAccuracyTitle.innerText = "Accuracy";
gamedataMoveAside4SidebarDescriptionPPPAAccuracyText.innerText = "100%";

gamedataMoveAside4SidebarDescriptionContact.classList.add("move-sidebar-description-contact");
gamedataMoveAside4SidebarDescriptionContactText.innerText = "Does not make Contact";

gamedataMoveAside4SidebarDescriptionRange.classList.add("move-sidebar-description-range");
gamedataMoveAside4SidebarDescriptionRangeText.innerText = "Affects all Pokémon Adjacent to the user";

gamedataMoveAside4SidebarDescriptionHMTM.classList.add("move-sidebar-description-hmtm");
gamedataMoveAside4SidebarDescriptionHMTMText.innerText = "HM04";

gamedataMoveAside4SidebarDescriptionTutor.classList.add("move-sidebar-description-tutor");
gamedataMoveAside4SidebarDescriptionTutorTitle.innerText = "Move Tutor";
gamedataMoveAside4SidebarDescriptionTutorText.innerText = "Route 4";




gamedataMoveAside4Sidebar.appendChild(gamedataMoveAside4SidebarDescription);
gamedataMoveAside4SidebarDescription.appendChild(gamedataMoveAside4SidebarDescriptionType);
gamedataMoveAside4SidebarDescriptionType.appendChild(gamedataMoveAside4SidebarDescriptionTypeText);
gamedataMoveAside4SidebarDescriptionTypeText.appendChild(gamedataMoveAside4SidebarDescriptionTypeTextImg);
gamedataMoveAside4SidebarDescriptionTypeText.appendChild(gamedataMoveAside4SidebarDescriptionTypeTextText);
gamedataMoveAside4SidebarDescriptionType.appendChild(gamedataMoveAside4SidebarDescriptionTypeMove);
gamedataMoveAside4SidebarDescriptionTypeMove.appendChild(gamedataMoveAside4SidebarDescriptionTypeMoveImg);
gamedataMoveAside4SidebarDescriptionTypeMove.appendChild(gamedataMoveAside4SidebarDescriptionTypeMoveText);
gamedataMoveAside4SidebarDescription.appendChild(gamedataMoveAside4SidebarDescriptionPPPA);
gamedataMoveAside4SidebarDescriptionPPPA.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerPoints);
gamedataMoveAside4SidebarDescriptionPPPAPowerPoints.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerPointsContent);
gamedataMoveAside4SidebarDescriptionPPPAPowerPointsContent.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerPointsTitle);
gamedataMoveAside4SidebarDescriptionPPPAPowerPointsContent.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerPointsText);
gamedataMoveAside4SidebarDescriptionPPPA.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPower);
gamedataMoveAside4SidebarDescriptionPPPAPower.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerContent);
gamedataMoveAside4SidebarDescriptionPPPAPowerContent.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerTitle);
gamedataMoveAside4SidebarDescriptionPPPAPowerContent.appendChild(gamedataMoveAside4SidebarDescriptionPPPAPowerText);
gamedataMoveAside4SidebarDescriptionPPPA.appendChild(gamedataMoveAside4SidebarDescriptionPPPAAccuracy);
gamedataMoveAside4SidebarDescriptionPPPAAccuracy.appendChild(gamedataMoveAside4SidebarDescriptionPPPAAccuracyContent);
gamedataMoveAside4SidebarDescriptionPPPAAccuracyContent.appendChild(gamedataMoveAside4SidebarDescriptionPPPAAccuracyTitle);
gamedataMoveAside4SidebarDescriptionPPPAAccuracyContent.appendChild(gamedataMoveAside4SidebarDescriptionPPPAAccuracyText);
gamedataMoveAside4SidebarDescription.appendChild(gamedataMoveAside4SidebarDescriptionContact);
gamedataMoveAside4SidebarDescriptionContact.appendChild(gamedataMoveAside4SidebarDescriptionContactContent);
gamedataMoveAside4SidebarDescriptionContactContent.appendChild(gamedataMoveAside4SidebarDescriptionContactText);
gamedataMoveAside4SidebarDescription.appendChild(gamedataMoveAside4SidebarDescriptionRange);
gamedataMoveAside4SidebarDescriptionRange.appendChild(gamedataMoveAside4SidebarDescriptionRangeContent);
gamedataMoveAside4SidebarDescriptionRangeContent.appendChild(gamedataMoveAside4SidebarDescriptionRangeText);
gamedataMoveAside4SidebarDescription.appendChild(gamedataMoveAside4SidebarDescriptionHMTM);
gamedataMoveAside4SidebarDescriptionHMTM.appendChild(gamedataMoveAside4SidebarDescriptionHMTMContent);
gamedataMoveAside4SidebarDescriptionHMTMContent.appendChild(gamedataMoveAside4SidebarDescriptionHMTMText);
gamedataMoveAside4SidebarDescription.appendChild(gamedataMoveAside4SidebarDescriptionTutor);
gamedataMoveAside4SidebarDescriptionTutor.appendChild(gamedataMoveAside4SidebarDescriptionTutorOuter);
gamedataMoveAside4SidebarDescriptionTutorOuter.appendChild(gamedataMoveAside4SidebarDescriptionTutorContent);
gamedataMoveAside4SidebarDescriptionTutorContent.appendChild(gamedataMoveAside4SidebarDescriptionTutorTitle);
gamedataMoveAside4SidebarDescriptionTutorContent.appendChild(gamedataMoveAside4SidebarDescriptionTutorText);






var gamedataMoveAside4SidebarLearnset = document.createElement("div");
var gamedataMoveAside4SidebarLearnsetFooter = document.createElement("div");


gamedataMoveAside4SidebarLearnset.classList.add("move-sidebar-learnset");
gamedataMoveAside4SidebarLearnsetFooter.classList.add("move-sidebar-learnset-footer");

gamedataMoveAside4Sidebar.appendChild(gamedataMoveAside4SidebarLearnset);



var sidebarMoveOption = ["Description","Learnset"];
var sidebarMoveLearnsetOption = ["Level Up","HM"];

for (var i = 0; i < sidebarMoveOption.length; i++) {


    var gamedataMoveAside4SidebarLearnsetContent = document.createElement("div");
    var gamedataMoveAside4SidebarLearnsetHeader = document.createElement("div");
    var gamedataMoveAside4SidebarLearnsetUl = document.createElement("ul");

    gamedataMoveAside4SidebarLearnsetContent.classList.add("move-sidebar-learnset-content");
    gamedataMoveAside4SidebarLearnsetContent.setAttribute("name",i);
    gamedataMoveAside4SidebarLearnsetHeader.classList.add("move-sidebar-learnset-header");

    gamedataMoveAside4SidebarLearnset.appendChild(gamedataMoveAside4SidebarLearnsetContent);
    gamedataMoveAside4SidebarLearnsetContent.appendChild(gamedataMoveAside4SidebarLearnsetHeader);
    gamedataMoveAside4SidebarLearnsetContent.appendChild(gamedataMoveAside4SidebarLearnsetUl);

    for (var q = 0; q < sidebarMoveLearnsetOption.length; q++) {
        var gamedataMoveAside4SidebarLearnsetHeaderText = document.createElement("h6");
        if (q == 0) {
            gamedataMoveAside4SidebarLearnsetHeaderText.innerText = "Pokémon"
        }
         else {
            gamedataMoveAside4SidebarLearnsetHeaderText.innerText = sidebarMoveLearnsetOption[i];
         }
        gamedataMoveAside4SidebarLearnsetHeader.appendChild(gamedataMoveAside4SidebarLearnsetHeaderText);
    }

    for (var q = 0; q < Math.floor(Math.random() * 100); q++) {
        var gamedataMoveAside4SidebarLearnsetLi = document.createElement("li");
        gamedataMoveAside4SidebarLearnsetUl.appendChild(gamedataMoveAside4SidebarLearnsetLi);
        
        var gamedataMoveAside4SidebarLearnsetLiImgOuter = document.createElement("div");
        var gamedataMoveAside4SidebarLearnsetLiImg = document.createElement("img");
        
        var gamedataMoveAside4SidebarLearnsetLiTextOuter = document.createElement("span");
        var gamedataMoveAside4SidebarLearnsetLiText = document.createElement("p");

        gamedataMoveAside4SidebarLearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + [q+1] + ".png";
        gamedataMoveAside4SidebarLearnsetLiImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
        
        gamedataMoveAside4SidebarLearnsetLiText.innerText = sidebarMoveLearnsetOption[i];
        gamedataMoveAside4SidebarLearnsetLiText.setAttribute("title",sidebarMoveLearnsetOption[i])

        gamedataMoveAside4SidebarLearnsetLi.appendChild(gamedataMoveAside4SidebarLearnsetLiImgOuter);
        gamedataMoveAside4SidebarLearnsetLiImgOuter.appendChild(gamedataMoveAside4SidebarLearnsetLiImg);

        gamedataMoveAside4SidebarLearnsetLi.appendChild(gamedataMoveAside4SidebarLearnsetLiTextOuter);
        gamedataMoveAside4SidebarLearnsetLiTextOuter.appendChild(gamedataMoveAside4SidebarLearnsetLiText);
        
    }
}


gamedataMoveAside4SidebarLearnset.appendChild(gamedataMoveAside4SidebarLearnsetFooter);




for (var i = 0; i < sidebarMoveLearnsetOption.length; i++) {

    var gamedataMoveAside4SidebarLearnsetFooterOptionInput = document.createElement("input");
    var gamedataMoveAside4SidebarLearnsetFooterOptionLabel = document.createElement("label");
    gamedataMoveAside4SidebarLearnsetFooterOptionInput.setAttribute("type","radio");
    gamedataMoveAside4SidebarLearnsetFooterOptionInput.setAttribute("value",i);
    gamedataMoveAside4SidebarLearnsetFooterOptionInput.setAttribute("name","move-sidebar-learnset-option");
    gamedataMoveAside4SidebarLearnsetFooterOptionInput.setAttribute("id","move-sidebar-learnset-option" + i);
    gamedataMoveAside4SidebarLearnsetFooterOptionInput.setAttribute("autocomplete","off");
    gamedataMoveAside4SidebarLearnsetFooterOptionLabel.setAttribute("for","move-sidebar-learnset-option" + i);
    gamedataMoveAside4SidebarLearnsetFooterOptionLabel.innerText = sidebarMoveLearnsetOption[i];

    gamedataMoveAside4SidebarLearnsetFooter.appendChild(gamedataMoveAside4SidebarLearnsetFooterOptionInput);
    gamedataMoveAside4SidebarLearnsetFooter.appendChild(gamedataMoveAside4SidebarLearnsetFooterOptionLabel);

    gamedataMoveAside4SidebarLearnsetFooterOptionInput.addEventListener("click", function() {

            var uls = document.querySelectorAll(".move-sidebar-learnset-content");
            for (var i = 0; i < uls.length; i++) {
                uls[i].style.display = "none";
            }
            var ul = document.querySelector(".move-sidebar-learnset-content[name='" + this.value + "']");
            ul.style.display = "block";
    });


    if (i == 0) {
        gamedataMoveAside4SidebarLearnsetFooterOptionInput.setAttribute("checked","")
        gamedataMoveAside4SidebarLearnsetFooterOptionInput.click();
    }

}





for (var i = 0; i < sidebarMoveOption.length; i++) {
    var gamedataMoveAside4SidebarTitleOptionInput = document.createElement("input");
    var gamedataMoveAside4SidebarTitleOptionLabel = document.createElement("label");
    gamedataMoveAside4SidebarTitleOptionInput.setAttribute("type","radio");
    gamedataMoveAside4SidebarTitleOptionInput.setAttribute("value",i);
    gamedataMoveAside4SidebarTitleOptionInput.setAttribute("name","move-sidebar-option");
    gamedataMoveAside4SidebarTitleOptionInput.setAttribute("id","move-sidebar-option" + i);
    gamedataMoveAside4SidebarTitleOptionInput.setAttribute("autocomplete","off");
    gamedataMoveAside4SidebarTitleOptionLabel.setAttribute("for","move-sidebar-option" + i);
    gamedataMoveAside4SidebarTitleOptionLabel.innerText = sidebarMoveOption[i];

    gamedataMoveAside4SidebarTitleOption.appendChild(gamedataMoveAside4SidebarTitleOptionInput);
    gamedataMoveAside4SidebarTitleOption.appendChild(gamedataMoveAside4SidebarTitleOptionLabel);



    gamedataMoveAside4SidebarTitleOptionInput.addEventListener("click", function() {
        if (this.value == 0) {
            gamedataMoveAside4SidebarDescription.style.display = "flex";
            gamedataMoveAside4SidebarLearnset.style.display = "none";
        }
        else if (this.value == 1) {
            gamedataMoveAside4SidebarDescription.style.display = "none";
            gamedataMoveAside4SidebarLearnset.style.display = "block";
        }
    });

    if (i == 0) {
        gamedataMoveAside4SidebarTitleOptionInput.setAttribute("checked","")
        gamedataMoveAside4SidebarTitleOptionInput.click();
    }
}






var searchtype = ["Normal","Fighting","Flying","Poison","Ground","Rock","Bug","Ghost","Steel","Fire","Water","Grass","Electric","Psychic","Ice","Dragon","Dark","Fairy"];
var searchcategory = ["Special","Physical"];
var searchpp = ["5","10","15","20","25","30","35","40"];
var searchpower = ["20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","105","110","115","120","125","130","135","140","-"];
var searchaccuracy = ["30%","40%","50%","60%","70%","80%","90%","100%","-"];
var searchcontact = ["y","n"];
var searchrange = ["alladjacent","allally","allenemy"];

for (var q = 0; q < finaldataMove.length; q++) {
    var gamedataMoveAside1OptionsInput = document.createElement("input");
    var gamedataMoveAside1OptionsLabel = document.createElement("label");
    gamedataMoveAside1OptionsInput.setAttribute("type","radio");
    gamedataMoveAside1OptionsInput.setAttribute("name","move-options");
    gamedataMoveAside1OptionsInput.setAttribute("id","move-options-" + q);
    gamedataMoveAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataMoveAside1OptionsInput.value = q;
    gamedataMoveAside1OptionsLabel.setAttribute("for","move-options-" + q);
    gamedataMoveAside1OptionsLabel.setAttribute("name","medium");
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-name",finaldataMove[q]["Name"].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-type",searchtype[Math.floor(Math.random() * searchtype.length)].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-category",searchcategory[Math.floor(Math.random() * searchcategory.length)].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-pp",searchpp[Math.floor(Math.random() * searchpp.length)].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-power",searchpower[Math.floor(Math.random() * searchpower.length)].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-accuracy",searchaccuracy[Math.floor(Math.random() * searchaccuracy.length)].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-contact",searchcontact[Math.floor(Math.random() * searchcontact.length)].toLowerCase());
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-range",searchrange[Math.floor(Math.random() * searchrange.length)].toLowerCase());

    gamedataMoveAside1OptionsLabel.innerText = finaldataMove[q]["Name"];
    gamedataMoveAside1Options.appendChild(gamedataMoveAside1OptionsInput);
    gamedataMoveAside1Options.appendChild(gamedataMoveAside1OptionsLabel);

    gamedataMoveAside1OptionsInput.addEventListener("click", moveOptionsSelector);
    function moveOptionsSelector() {
        gamedataMoveAside2TitleName.innerText = finaldataMove[this.value]["Name"];
        gamedataMoveAside2TitleID.innerText = "#" + finaldataMoveID[this.value]["ID"+"_"+JSONPath_MoveID];
        gamedataMoveAside2DebutText.innerText = "Introduced in " + finaldataMove[this.value]["Generation"].split("-")[0];
        gamedataMoveAside3DescriptionText.innerText = finaldataMoveDescription[this.value]["Description_"+JSONPath_MoveDescription];

        gamedataMoveAside4SidebarDescriptionTypeTextImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataMoveType[this.value]["Type_"+JSONPath_MoveType] + ".png";
        gamedataMoveAside4SidebarDescriptionTypeTextImg.setAttribute("title",finaldataMoveType[this.value]["Type_"+JSONPath_MoveType]);
        gamedataMoveAside4SidebarDescriptionTypeTextText.innerText = finaldataMoveType[this.value]["Type_"+JSONPath_MoveType];
        gamedataMoveAside4SidebarDescriptionTypeMoveImg.src = "./media/Images/Misc/Type/Category/" + MEDIAPath_Type_Category + "/" + finaldataMoveCategory[this.value]["Category_"+JSONPath_MoveCategory] + ".png";
        gamedataMoveAside4SidebarDescriptionTypeMoveImg.setAttribute("title",finaldataMoveCategory[this.value]["Category_"+JSONPath_MoveCategory]);
        gamedataMoveAside4SidebarDescriptionTypeMoveText.innerText = finaldataMoveCategory[this.value]["Category_"+JSONPath_MoveCategory];
        gamedataMoveAside4SidebarDescriptionPPPAPowerPointsText.innerText = finaldataMovePP[this.value]["PP Min_"+JSONPath_MovePP]+" ("+finaldataMovePP[this.value]["PP Max_"+JSONPath_MovePP]+")";
        if (finaldataMovePower[this.value]["Power_"+JSONPath_MovePower] == undefined) {
            gamedataMoveAside4SidebarDescriptionPPPAPowerText.innerText = "";
        }
        else {
            gamedataMoveAside4SidebarDescriptionPPPAPowerText.innerText = finaldataMovePower[this.value]["Power_"+JSONPath_MovePower];
        }
        if (finaldataMoveAccuracy[this.value]["Accuracy_"+JSONPath_MoveAccuracy] == undefined) {
            gamedataMoveAside4SidebarDescriptionPPPAAccuracyText.innerText = "";
        }
        else {
            gamedataMoveAside4SidebarDescriptionPPPAAccuracyText.innerText = finaldataMoveAccuracy[this.value]["Accuracy_"+JSONPath_MoveAccuracy];
        }
        gamedataMoveAside4SidebarDescriptionContactText.innerText = finaldataMoveOtherMoves[this.value]["Contact"];
        gamedataMoveAside4SidebarDescriptionRangeText.innerText = finaldataMoveAffect[this.value]["Affect"];
        gamedataMoveAside4SidebarDescriptionHMTMText.innerText = finaldataMoveMachine[this.value]["Machine_"+JSONPath_MoveMachine];
        gamedataMoveAside4SidebarDescriptionTutorText.innerText = finaldataMoveTutor[this.value]["Tutor_"+JSONPath_MoveTutor];

        //gamedataMoveAside3EffectText.innerHTML = "";

        /*


        finaldataMoveTutor
        finaldataMoveMachine
        finaldataMoveAffect
        finaldataMoveOtherMoves
        finaldataMoveAccuracy
        finaldataMovePower
        finaldataMovePP
        finaldataMoveCategory
        finaldataMoveID
        finaldataMoveType
        */
    }
}
// Moves End



// Items Start
var gamedataItemOuter = document.createElement("div");
var gamedataItemAside1 = document.createElement("aside");
var gamedataItemAside1OptionsTitleOuter = document.createElement("div");
var gamedataItemAside1OptionsSearchOuter = document.createElement("div");
var gamedataItemAside1OptionsSearch = document.createElement("input");
var gamedataItemAside1OptionsSearchExit = document.createElement("span");
var gamedataItemAside1OptionsOuter = document.createElement("div");
var gamedataItemAside1Options = document.createElement("div");
var gamedataItemAside2 = document.createElement("aside");
var gamedataItemAside2Title = document.createElement("span");
var gamedataItemAside2TitleID = document.createElement("h1");
var gamedataItemAside2TitleName = document.createElement("h1");
var gamedataItemAside2Debut = document.createElement("span");
var gamedataItemAside2DebutText = document.createElement("h4");
var gamedataItemAside3 = document.createElement("aside");
var gamedataItemAside3Description = document.createElement("div");
var gamedataItemAside3DescriptionText = document.createElement("p");
var gamedataItemAside3EffectTitle = document.createElement("h3");
var gamedataItemAside3EffectText = document.createElement("p");
var gamedataItemAside4 = document.createElement("aside");

gamedataItemOuter.setAttribute("id","item-outer");
gamedataItemOuter.setAttribute("name","Items");
gamedataItemOuter.classList.add("gamedata-contentdiv");
gamedataItemAside1.setAttribute("id","item-aside1");
gamedataItemAside1OptionsTitleOuter.setAttribute("id","item-options-title");
gamedataItemAside1OptionsSearchOuter.setAttribute("id","item-options-search");
gamedataItemAside1OptionsSearch.setAttribute("type","text");
gamedataItemAside1OptionsSearch.setAttribute("id","item-search");
gamedataItemAside1OptionsSearch.setAttribute("placeholder","Search Items...");
gamedataItemAside1OptionsSearch.setAttribute("onfocus","this.placeholder=''");
gamedataItemAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Items...'");
gamedataItemAside1OptionsSearch.setAttribute("autocomplete","off");
gamedataItemAside1OptionsSearchExit.setAttribute("id","item-search-exit");
gamedataItemAside1OptionsOuter.setAttribute("id","item-options-outer");
gamedataItemAside1Options.setAttribute("id","item-options");
gamedataItemAside2.setAttribute("id","item-aside2");
gamedataItemAside2Title.classList.add("item-title");
gamedataItemAside2TitleID.innerText = "#";
gamedataItemAside2TitleName.innerText = "Items";
gamedataItemAside2Debut.classList.add("item-debut")
gamedataItemAside2DebutText.innerText = "Introduced in Generation I";
gamedataItemAside3.setAttribute("id","item-aside3");
gamedataItemAside3Description.classList.add("item-description")
gamedataItemAside3DescriptionText.innerText = "A peculiar stone that makes certain species of Pokémon evolve. It is as black as the night sky.";
gamedataItemAside3EffectTitle.innerText = "Effect";
gamedataItemAside3EffectText.innerHTML = "Can be used to evolve one of several Pokémon. This consumes the Moon Stone.<li>Causes Nidorina to evolve into Nidoqueen</li><li>Causes Nidorino to evolve into Nidoking</li><li>Causes Clefairy to evolve into Clefable</li><li>Causes Jigglypuff to evolve into Wigglytuff</li><li>Causes Skitty to evolve into Delcatty</li><li>Causes Munna to evolve into Musharna</li>";
gamedataItemAside4.setAttribute("id","item-aside4");


gamedataDivContent.appendChild(gamedataItemOuter);
gamedataItemOuter.appendChild(gamedataItemAside1);
gamedataItemAside1.appendChild(gamedataItemAside1OptionsTitleOuter);
gamedataItemAside1OptionsTitleOuter.appendChild(gamedataItemAside1OptionsSearchOuter);
gamedataItemAside1OptionsSearchOuter.appendChild(gamedataItemAside1OptionsSearchExit);
gamedataItemAside1OptionsSearchOuter.appendChild(gamedataItemAside1OptionsSearch);
gamedataItemAside1.appendChild(gamedataItemAside1OptionsOuter);
gamedataItemAside1OptionsOuter.appendChild(gamedataItemAside1Options);
gamedataItemOuter.appendChild(gamedataItemAside2);
gamedataItemAside2.appendChild(gamedataItemAside2Title);
gamedataItemAside2Title.appendChild(gamedataItemAside2TitleID);
gamedataItemAside2Title.appendChild(gamedataItemAside2TitleName);
gamedataItemAside2.appendChild(gamedataItemAside2Debut);
gamedataItemAside2Debut.appendChild(gamedataItemAside2DebutText);
gamedataItemOuter.appendChild(gamedataItemAside3);
gamedataItemAside3.appendChild(gamedataItemAside3Description);
gamedataItemAside3Description.appendChild(gamedataItemAside3DescriptionText);
gamedataItemAside3Description.appendChild(gamedataItemAside3EffectTitle);
gamedataItemAside3Description.appendChild(gamedataItemAside3EffectText);
gamedataItemOuter.appendChild(gamedataItemAside4);



var gamedataItemAside4Sidebar = document.createElement("div");
var gamedataItemAside4SidebarTitle = document.createElement("div");
var gamedataItemAside4SidebarTitleTop = document.createElement("li");
var gamedataItemAside4SidebarTitleTopText = document.createElement("h4");
var gamedataItemAside4SidebarTitleBottom = document.createElement("li");
var gamedataItemAside4SidebarUl = document.createElement("ul");
var gamedataItemAside4SidebarValue = document.createElement("div");
var gamedataItemAside4SidebarValueImgOuter = document.createElement("div");
var gamedataItemAside4SidebarValueImg = document.createElement("img");
var gamedataItemAside4SidebarValueTextOuter = document.createElement("div");
var gamedataItemAside4SidebarValueTitle = document.createElement("h4");

gamedataItemAside4Sidebar.classList.add("item-sidebar");
gamedataItemAside4SidebarTitle.classList.add("item-sidebar-title");
gamedataItemAside4SidebarTitleTopText.innerText = "Acquisition";
gamedataItemAside4SidebarValue.classList.add("item-sidebar-value");
gamedataItemAside4SidebarValueImg.src = "./media/Images/Misc/Pocket/Icon/" + MEDIAPath_Pocket_Icon + "/" + "Key Items" + ".png";
gamedataItemAside4SidebarValueImg.setAttribute("title","Key Items" + " Pocket");
gamedataItemAside4SidebarValueImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
gamedataItemAside4SidebarValueTitle.innerText = "Value";

gamedataItemAside4.appendChild(gamedataItemAside4Sidebar);
gamedataItemAside4Sidebar.appendChild(gamedataItemAside4SidebarTitle);
gamedataItemAside4SidebarTitle.appendChild(gamedataItemAside4SidebarTitleTop);
gamedataItemAside4SidebarTitleTop.appendChild(gamedataItemAside4SidebarTitleTopText);
gamedataItemAside4SidebarTitle.appendChild(gamedataItemAside4SidebarTitleBottom);
gamedataItemAside4Sidebar.appendChild(gamedataItemAside4SidebarUl);
gamedataItemAside4Sidebar.appendChild(gamedataItemAside4SidebarValue);
gamedataItemAside4SidebarValue.appendChild(gamedataItemAside4SidebarValueImgOuter);
gamedataItemAside4SidebarValueImgOuter.appendChild(gamedataItemAside4SidebarValueImg);
gamedataItemAside4SidebarValue.appendChild(gamedataItemAside4SidebarValueTextOuter);
gamedataItemAside4SidebarValueTextOuter.appendChild(gamedataItemAside4SidebarValueTitle);


var sidebarItemValue = ["1000","3000"];
for (var q = 0; q < sidebarItemValue.length; q++) {
    var gamedataItemAside4SidebarValueTextContent = document.createElement("span");
    var gamedataItemAside4SidebarValueImg = document.createElement("img");
    var gamedataItemAside4SidebarValueText = document.createElement("p");
    gamedataItemAside4SidebarValueImg.src = "./media/Images/Misc/Currency/" + MEDIAPath_Currency + "/" + "Pokémon Dollar" + ".png";
    gamedataItemAside4SidebarValueImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    gamedataItemAside4SidebarValueTextOuter.appendChild(gamedataItemAside4SidebarValueTextContent);
    gamedataItemAside4SidebarValueTextContent.appendChild(gamedataItemAside4SidebarValueText);
    gamedataItemAside4SidebarValueText.appendChild(gamedataItemAside4SidebarValueImg);
    gamedataItemAside4SidebarValueText.innerHTML += sidebarItemValue[q];
}


var sidebarItemList = ["Finite","Repeatable"];

for (var q = 0; q < sidebarItemList.length; q++) {
    var gamedataItemAside4SidebarTitleBottomText = document.createElement("h6");
    gamedataItemAside4SidebarTitleBottomText.innerText = sidebarItemList[q];
    gamedataItemAside4SidebarTitleBottom.appendChild(gamedataItemAside4SidebarTitleBottomText);
}
for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
    var gamedataItemAside4SidebarLi = document.createElement("li");
    gamedataItemAside4SidebarUl.appendChild(gamedataItemAside4SidebarLi);
    for (var q = 0; q < sidebarItemList.length; q++) {
        var gamedataItemAside4SidebarLiTextOuter = document.createElement("span");
        var gamedataItemAside4SidebarLiText = document.createElement("p");
        gamedataItemAside4SidebarLiText.innerText = "data";
        gamedataItemAside4SidebarLiText.setAttribute("title",sidebarItemList[q])
        gamedataItemAside4SidebarLi.appendChild(gamedataItemAside4SidebarLiTextOuter);
        gamedataItemAside4SidebarLiTextOuter.appendChild(gamedataItemAside4SidebarLiText);
    }
}

for (var q = 0; q < itemOptionsTitle.length; q++) {
    var gamedataItemAside1OptionsInput = document.createElement("input");
    var gamedataItemAside1OptionsLabel = document.createElement("label");
    gamedataItemAside1OptionsInput.setAttribute("type","radio");
    gamedataItemAside1OptionsInput.setAttribute("name","item-options");
    gamedataItemAside1OptionsInput.setAttribute("id","item-options-" + q);
    gamedataItemAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataItemAside1OptionsInput.value = q;
    gamedataItemAside1OptionsLabel.setAttribute("for","item-options-" + q);
    gamedataItemAside1OptionsLabel.setAttribute("data-search-name",itemOptionsTitle[q].toLowerCase());
    gamedataItemAside1OptionsLabel.setAttribute("name","medium");
    gamedataItemAside1OptionsLabel.innerText = itemOptionsTitle[q];
    gamedataItemAside1Options.appendChild(gamedataItemAside1OptionsInput);
    gamedataItemAside1Options.appendChild(gamedataItemAside1OptionsLabel);

    gamedataItemAside1OptionsInput.addEventListener("click", itemOptionsSelector);
    function itemOptionsSelector() {
            gamedataItemAside2TitleName.innerText = itemOptionsTitle[this.value];
    }
}
// Items End



// Map Start
var gamedataMapOuter = document.createElement("div");
var gamedataMapAside1 = document.createElement("aside");
var gamedataMapAside1OptionsTitleOuter = document.createElement("div");
var gamedataMapAside1OptionsSearchOuter = document.createElement("div");
var gamedataMapAside1OptionsSearch = document.createElement("input");
var gamedataMapAside1OptionsSearchExit = document.createElement("span");


var gamedataMapAside2 = document.createElement("aside");
var gamedataMapAside2Title = document.createElement("span");
var gamedataMapAside2TitleText = document.createElement("h1");
var gamedataMapAside2Flavor = document.createElement("span");
var gamedataMapAside2FlavorText = document.createElement("h5");

var gamedataMapAside3 = document.createElement("aside");
var gamedataMapAside3MapOuter = document.createElement("div");
var gamedataMapAside3MapZoomReset = document.createElement("span");
var gamedataMapAside3MapZoomOut = document.createElement("span");
var gamedataMapAside3MapZoomIn = document.createElement("span");
var gamedataMapAside3MapZoomFullscreen = document.createElement("span");
var gamedataMapAside3MapCancel = document.createElement("span");
var gamedataMapAside3MapUp = document.createElement("div");
var gamedataMapAside3MapUpToggle = document.createElement("div");
var gamedataMapAside3MapUpMain = document.createElement("main");
var gamedataMapAside3MapDown = document.createElement("div");
var gamedataMapAside3MapDownToggle = document.createElement("div");
var gamedataMapAside3MapDownMain = document.createElement("main");
var gamedataMapAside3MapLeft = document.createElement("div");
var gamedataMapAside3MapLeftToggle = document.createElement("div");
var gamedataMapAside3MapLeftMain = document.createElement("main");
var gamedataMapAside3MapRight = document.createElement("div");
var gamedataMapAside3MapRightToggle = document.createElement("div");
var gamedataMapAside3MapRightMain = document.createElement("main");
var gamedataMapAside3Map = document.createElement("div");
var gamedataMapAside3MapPanzoom = document.createElement("div");
var gamedataMapAside3MapMark = document.createElement("div");
var gamedataMapAside3MapImage = document.createElement("img");
var gamedataMapAside3MapCordinateOuter = document.createElement("map");

var gamedataMapAside4 = document.createElement("aside");

gamedataMapOuter.setAttribute("id","map-outer");
gamedataMapOuter.setAttribute("name","Map");
gamedataMapOuter.classList.add("gamedata-contentdiv");

gamedataMapAside1.setAttribute("id","map-aside1");
gamedataMapAside1OptionsTitleOuter.setAttribute("id","map-options-title");
gamedataMapAside1OptionsSearchOuter.setAttribute("id","map-options-search");
gamedataMapAside1OptionsSearch.setAttribute("type","text");
gamedataMapAside1OptionsSearch.setAttribute("id","map-search");
gamedataMapAside1OptionsSearch.setAttribute("placeholder","Search Locations...");
gamedataMapAside1OptionsSearch.setAttribute("onfocus","this.placeholder=''");
gamedataMapAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Locations...'");
gamedataMapAside1OptionsSearch.setAttribute("autocomplete","off");
gamedataMapAside1OptionsSearchExit.setAttribute("id","map-search-exit");

gamedataMapAside2.setAttribute("id","map-aside2");
gamedataMapAside2Title.setAttribute("id","map-title");
gamedataMapAside2TitleText.innerText = "Map of " + Region;
gamedataMapAside2Flavor.setAttribute("id","map-flavor");
gamedataMapAside2Flavor.setAttribute("title","Slogan")

gamedataMapAside3.setAttribute("id","map-aside3");
gamedataMapAside3MapOuter.setAttribute("id","map-contain");
gamedataMapAside3MapZoomReset.setAttribute("id","zoom-reset");
gamedataMapAside3MapZoomOut.classList.add("zoom-out");
gamedataMapAside3MapZoomIn.classList.add("zoom-in");
gamedataMapAside3MapZoomFullscreen.classList.add("zoom-fullscreen");
gamedataMapAside3MapCancel.classList.add("map-cancel")
gamedataMapAside3MapUp.classList.add("map-up");
gamedataMapAside3MapUpToggle.classList.add("map-up-toggle");
gamedataMapAside3MapUpToggle.innerText = "↑";
gamedataMapAside3MapUpMain
gamedataMapAside3MapDown.classList.add("map-down");
gamedataMapAside3MapDownToggle.classList.add("map-down-toggle");
gamedataMapAside3MapDownToggle.innerText = "↓";
gamedataMapAside3MapDownMain
gamedataMapAside3MapLeft.classList.add("map-left");
gamedataMapAside3MapLeftToggle.classList.add("map-left-toggle");
gamedataMapAside3MapLeftToggle.innerText = "←";
gamedataMapAside3MapLeftMain
gamedataMapAside3MapRight.classList.add("map-right");
gamedataMapAside3MapRightToggle.classList.add("map-right-toggle");
gamedataMapAside3MapRightToggle.innerText = "→";
gamedataMapAside3MapRightMain
gamedataMapAside3Map.setAttribute("id","map");
gamedataMapAside3MapPanzoom.setAttribute("id","map-panzoom");
gamedataMapAside3MapPanzoom.setAttribute("name",Region + "-" + MEDIAPath_Map);
gamedataMapAside3MapMark.classList.add("map-img-mark-outer");
gamedataMapAside3MapImage.src = "./media/Images/Misc/Map/" + MEDIAPath_Map + "/Map.png";
gamedataMapAside3MapImage.onload = function(){
    gamedataMapAside3MapImage.setAttribute("width",gamedataMapAside3MapImage.width+"px");
    gamedataMapAside3MapImage.setAttribute("height",gamedataMapAside3MapImage.height+"px");
}
gamedataMapAside3MapImage.classList.add("map-img-main");
gamedataMapAside3MapImage.setAttribute("usemap","#" + Region + "-" + MEDIAPath_Map + "-map");
gamedataMapAside3MapCordinateOuter.setAttribute("id", Region + "-" + MEDIAPath_Map + "-map");
gamedataMapAside3MapCordinateOuter.setAttribute("name", Region + "-" + MEDIAPath_Map + "-map");

gamedataMapAside4.setAttribute("id","map-aside4");


gamedataDivContent.appendChild(gamedataMapOuter);
gamedataMapOuter.appendChild(gamedataMapAside1);
gamedataMapAside1.appendChild(gamedataMapAside1OptionsTitleOuter);
gamedataMapAside1OptionsTitleOuter.appendChild(gamedataMapAside1OptionsSearchOuter);
gamedataMapAside1OptionsSearchOuter.appendChild(gamedataMapAside1OptionsSearchExit);
gamedataMapAside1OptionsSearchOuter.appendChild(gamedataMapAside1OptionsSearch);

gamedataMapOuter.appendChild(gamedataMapAside2);
gamedataMapAside2.appendChild(gamedataMapAside2Title);
gamedataMapAside2Title.appendChild(gamedataMapAside2TitleText);
gamedataMapAside2.appendChild(gamedataMapAside2Flavor);
gamedataMapAside2Flavor.appendChild(gamedataMapAside2FlavorText);

gamedataMapOuter.appendChild(gamedataMapAside3);







gamedataMapAside3.appendChild(gamedataMapAside3MapOuter);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapZoomReset);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapZoomOut);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapZoomIn);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapZoomFullscreen);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapCancel);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapUp);
gamedataMapAside3MapUp.appendChild(gamedataMapAside3MapUpToggle);
gamedataMapAside3MapUp.appendChild(gamedataMapAside3MapUpMain);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapDown);
gamedataMapAside3MapDown.appendChild(gamedataMapAside3MapDownToggle);
gamedataMapAside3MapDown.appendChild(gamedataMapAside3MapDownMain);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapLeft);
gamedataMapAside3MapLeft.appendChild(gamedataMapAside3MapLeftToggle);
gamedataMapAside3MapLeft.appendChild(gamedataMapAside3MapLeftMain);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapRight);
gamedataMapAside3MapRight.appendChild(gamedataMapAside3MapRightToggle);
gamedataMapAside3MapRight.appendChild(gamedataMapAside3MapRightMain);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3Map);
gamedataMapAside3Map.appendChild(gamedataMapAside3MapPanzoom);
gamedataMapAside3MapPanzoom.appendChild(gamedataMapAside3MapMark);
gamedataMapAside3MapPanzoom.appendChild(gamedataMapAside3MapImage);
gamedataMapAside3MapPanzoom.appendChild(gamedataMapAside3MapCordinateOuter);

var gamedataMapAside3AreaNavigation = document.createElement("div");
gamedataMapAside3AreaNavigation.classList.add("map-area-navigation");
gamedataMapAside3.appendChild(gamedataMapAside3AreaNavigation);


var gamedataMapAside3AreaOuter = document.createElement("div");
var gamedataMapAside3Area = document.createElement("span");
gamedataMapAside3AreaNavigation.appendChild(gamedataMapAside3AreaOuter);
gamedataMapAside3AreaOuter.appendChild(gamedataMapAside3Area);


var gamedataMapAside3AreaContent = document.createElement("span");
var gamedataMapAside3AreaTitle = document.createElement("h4");
gamedataMapAside3AreaTitle.innerText = "Sub Area/Location";
gamedataMapAside3Area.appendChild(gamedataMapAside3AreaContent);
gamedataMapAside3AreaContent.appendChild(gamedataMapAside3AreaTitle);



var gamedataMapAside3NavigationOuter = document.createElement("div");
var gamedataMapAside3Navigation = document.createElement("span");
var gamedataMapAside3NavigationContent = document.createElement("span");
var gamedataMapAside3NavigationTitle = document.createElement("h4");
gamedataMapAside3NavigationTitle.innerText = "Required for Navigation";
gamedataMapAside3AreaNavigation.appendChild(gamedataMapAside3NavigationOuter);
gamedataMapAside3NavigationOuter.appendChild(gamedataMapAside3Navigation);
gamedataMapAside3Navigation.appendChild(gamedataMapAside3NavigationContent);
gamedataMapAside3NavigationContent.appendChild(gamedataMapAside3NavigationTitle);




gamedataMapOuter.appendChild(gamedataMapAside4);




var gamedataMapAside4Description = document.createElement("div");
gamedataMapAside4Description.setAttribute("id","map-description");
gamedataMapAside4.appendChild(gamedataMapAside4Description);


var DescriptionSelectorOuter = document.createElement("div");
DescriptionSelectorOuter.classList.add("map-description-selector-outer")
gamedataMapAside4Description.appendChild(DescriptionSelectorOuter);

var mapDescriptionTitles = ["Overview","Pokémon","Items","Trainers"];

for (var q = 0; q < mapDescriptionTitles.length; q++) {
    var DescriptionSelector = document.createElement("div");
    var DescriptionSelectorInput = document.createElement("input");
    var DescriptionSelectorLabel = document.createElement("label");

    DescriptionSelectorInput.setAttribute("type","radio");
    DescriptionSelectorInput.setAttribute("name","map-description-selector");
    DescriptionSelectorInput.setAttribute("id","map-description-selector-" + q);
    DescriptionSelectorInput.setAttribute("autocomplete","off");
    DescriptionSelectorInput.setAttribute("value",q);
    DescriptionSelectorLabel.setAttribute("for","map-description-selector-" + q);
    DescriptionSelectorLabel.innerText = mapDescriptionTitles[q];

    DescriptionSelectorOuter.appendChild(DescriptionSelector);
    DescriptionSelector.appendChild(DescriptionSelectorInput);
    DescriptionSelector.appendChild(DescriptionSelectorLabel);

    DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);

}



var gamedataMapAside4DescriptionPok = document.createElement("base");
gamedataMapAside4DescriptionPok.setAttribute("id","map-description-pok");
gamedataMapAside4DescriptionPok.setAttribute("name","1");
gamedataMapAside4Description.appendChild(gamedataMapAside4DescriptionPok);

for (var q = 0; q < 2; q++) {

var gamedataMapAside4DescriptionPokUl = document.createElement("ul");
var gamedataMapAside4DescriptionPokUlTitle = document.createElement("h4");
gamedataMapAside4DescriptionPokUlTitle.innerText = "B1F";
gamedataMapAside4DescriptionPok.appendChild(gamedataMapAside4DescriptionPokUl);
gamedataMapAside4DescriptionPokUl.appendChild(gamedataMapAside4DescriptionPokUlTitle);

for (var u = 0; u < locationPokList.length; u++) {
    var gamedataMapAside4DescriptionPokLi = document.createElement("li");
    var gamedataMapAside4DescriptionPokIconOuter = document.createElement("div");
    var gamedataMapAside4DescriptionPokIcon = document.createElement("img");
    var gamedataMapAside4DescriptionPokLvOuter = document.createElement("span");
    var gamedataMapAside4DescriptionPokLv = document.createElement("p");
    var gamedataMapAside4DescriptionPokRateOuter = document.createElement("span");
    var gamedataMapAside4DescriptionPokRate = document.createElement("p");
    var gamedataMapAside4DescriptionPokTypeOuter = document.createElement("div");
    var gamedataMapAside4DescriptionPokType = document.createElement("img");

    gamedataMapAside4DescriptionPokIcon.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + locationPokList[u] + ".png";
    gamedataMapAside4DescriptionPokIcon.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    gamedataMapAside4DescriptionPokIcon.setAttribute("title",getPokémonName(locationPokList[u]));
    gamedataMapAside4DescriptionPokLv.innerText = locationPokListLv[u];
    gamedataMapAside4DescriptionPokRate.innerText = locationPokListRate[u];
    gamedataMapAside4DescriptionPokType.src = "./media/Images/Misc/Encounter/" + MEDIAPath_Encounter + "/" + locationPokListType[u] + ".png";
    gamedataMapAside4DescriptionPokType.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    gamedataMapAside4DescriptionPokType.setAttribute("title",locationPokListType[u]);

    gamedataMapAside4DescriptionPokUl.appendChild(gamedataMapAside4DescriptionPokLi);
    gamedataMapAside4DescriptionPokLi.appendChild(gamedataMapAside4DescriptionPokIconOuter);
    gamedataMapAside4DescriptionPokIconOuter.appendChild(gamedataMapAside4DescriptionPokIcon);
    gamedataMapAside4DescriptionPokLi.appendChild(gamedataMapAside4DescriptionPokLvOuter);
    gamedataMapAside4DescriptionPokLvOuter.appendChild(gamedataMapAside4DescriptionPokLv);
    gamedataMapAside4DescriptionPokLi.appendChild(gamedataMapAside4DescriptionPokRateOuter);
    gamedataMapAside4DescriptionPokRateOuter.appendChild(gamedataMapAside4DescriptionPokRate);
    gamedataMapAside4DescriptionPokLi.appendChild(gamedataMapAside4DescriptionPokTypeOuter);
    gamedataMapAside4DescriptionPokTypeOuter.appendChild(gamedataMapAside4DescriptionPokType);
}
}

var gamedataMapAside4DescriptionItem = document.createElement("base");
gamedataMapAside4DescriptionItem.setAttribute("id","map-description-item");
gamedataMapAside4DescriptionItem.setAttribute("name","2");
gamedataMapAside4Description.appendChild(gamedataMapAside4DescriptionItem);


for (var q = 0; q < 4; q++) {

var gamedataMapAside4DescriptionItemUl = document.createElement("ul");
var gamedataMapAside4DescriptionItemUlTitle = document.createElement("h4");
gamedataMapAside4DescriptionItemUlTitle.innerText = "B1F";
gamedataMapAside4DescriptionItem.appendChild(gamedataMapAside4DescriptionItemUl);
gamedataMapAside4DescriptionItemUl.appendChild(gamedataMapAside4DescriptionItemUlTitle);

for (var u = 0; u < locationItemList.length; u++) {
    var gamedataMapAside4DescriptionItemLi = document.createElement("li");
    var gamedataMapAside4DescriptionItemIconOuter = document.createElement("div");
    var gamedataMapAside4DescriptionItemIcon = document.createElement("img");
    var gamedataMapAside4DescriptionItemLocationOuter = document.createElement("span");
    var gamedataMapAside4DescriptionItemLocation = document.createElement("p");


    gamedataMapAside4DescriptionItemIcon.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + locationItemList[u] + ".png";
    gamedataMapAside4DescriptionItemIcon.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    gamedataMapAside4DescriptionItemIcon.setAttribute("title",locationItemList[u]);
    gamedataMapAside4DescriptionItemLocation.innerText = locationItemListLocation[u];

    gamedataMapAside4DescriptionItemUl.appendChild(gamedataMapAside4DescriptionItemLi);
    gamedataMapAside4DescriptionItemLi.appendChild(gamedataMapAside4DescriptionItemIconOuter);
    gamedataMapAside4DescriptionItemIconOuter.appendChild(gamedataMapAside4DescriptionItemIcon);
    gamedataMapAside4DescriptionItemLi.appendChild(gamedataMapAside4DescriptionItemLocationOuter);
    gamedataMapAside4DescriptionItemLocationOuter.appendChild(gamedataMapAside4DescriptionItemLocation);
}
}



var gamedataMapAside4DescriptionTrainer = document.createElement("base");
gamedataMapAside4DescriptionTrainer.setAttribute("id","map-description-trainer");
gamedataMapAside4DescriptionTrainer.setAttribute("name","3");
gamedataMapAside4Description.appendChild(gamedataMapAside4DescriptionTrainer);


for (var q = 0; q < locationTrainerPok.length; q++) {

var x = q + 1;

var gamedataMapAside4DescriptionTrainerUl = document.createElement("ul");
var gamedataMapAside4DescriptionTrainerUlTop = document.createElement("div");
var gamedataMapAside4DescriptionTrainerUlTopCountOuter = document.createElement("div");
var gamedataMapAside4DescriptionTrainerUlTopCount = document.createElement("h5");
var gamedataMapAside4DescriptionTrainerUlTopImgOuter = document.createElement("div");
var gamedataMapAside4DescriptionTrainerUlTopImgPrevious = document.createElement("img");
var gamedataMapAside4DescriptionTrainerUlTopImg = document.createElement("img");
var gamedataMapAside4DescriptionTrainerUlTopImgNext = document.createElement("img");
var gamedataMapAside4DescriptionTrainerUlTopTitle = document.createElement("div");
var gamedataMapAside4DescriptionTrainerUlTopTitleCount = document.createElement("span");
var gamedataMapAside4DescriptionTrainerUlTopTitleCountImg = document.createElement("img");
var gamedataMapAside4DescriptionTrainerUlTopTitleName = document.createElement("h3");
var gamedataMapAside4DescriptionTrainerUlTopTitleValue = document.createElement("h4");
var gamedataMapAside4DescriptionTrainerUlContent = document.createElement("div");
gamedataMapAside4DescriptionTrainerUl.setAttribute("name",q);
gamedataMapAside4DescriptionTrainerUlTop.setAttribute("id","map-description-trainer-top");
gamedataMapAside4DescriptionTrainerUlTopCountOuter.setAttribute("id","map-description-trainer-top-count");
gamedataMapAside4DescriptionTrainerUlTopImgOuter.setAttribute("id","map-description-trainer-top-img");

gamedataMapAside4DescriptionTrainerUlTopImgPrevious.src = "./media/Images/Character/Battle/PNG/Front/" + MEDIAPath_Character_Battle + "/" + locationTrainerClass[q - 1] + ".png";
gamedataMapAside4DescriptionTrainerUlTopImgPrevious.setAttribute("name",parseInt(q) - 1);

gamedataMapAside4DescriptionTrainerUlTopImg.src = "./media/Images/Character/Battle/PNG/Front/" + MEDIAPath_Character_Battle + "/" + locationTrainerClass[q] + ".png";
gamedataMapAside4DescriptionTrainerUlTopImg.setAttribute("name",parseInt(q));

gamedataMapAside4DescriptionTrainerUlTopImgNext.src = "./media/Images/Character/Battle/PNG/Front/" + MEDIAPath_Character_Battle + "/" + locationTrainerClass[q + 1] + ".png";
gamedataMapAside4DescriptionTrainerUlTopImgNext.setAttribute("name",parseInt(q) + 1);

if (locationTrainerClass[q - 1] == undefined) {
    gamedataMapAside4DescriptionTrainerUlTopImgPrevious.style.visibility = "hidden";
    gamedataMapAside4DescriptionTrainerUlTopImgPrevious.style.pointerEvents = "none";
}
if (locationTrainerClass[q] == undefined) {
    gamedataMapAside4DescriptionTrainerUlTopImg.style.visibility = "hidden";
    gamedataMapAside4DescriptionTrainerUlTopImg.style.pointerEvents = "none";
}

if (locationTrainerClass[q + 1] == undefined) {
    gamedataMapAside4DescriptionTrainerUlTopImgNext.style.visibility = "hidden";
    gamedataMapAside4DescriptionTrainerUlTopImgNext.style.pointerEvents = "none";
}
gamedataMapAside4DescriptionTrainerUlTopImgPrevious.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png';");
gamedataMapAside4DescriptionTrainerUlTopImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png';");
gamedataMapAside4DescriptionTrainerUlTopImgNext.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png';");

gamedataMapAside4DescriptionTrainerUlTopTitle.setAttribute("id","map-description-trainer-top-title");
gamedataMapAside4DescriptionTrainerUlTopTitleName.innerText = locationTrainerList[q];
gamedataMapAside4DescriptionTrainerUlTopTitleValue.innerHTML = '<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" />' + locationTrainerValue[q];
gamedataMapAside4DescriptionTrainerUlContent.setAttribute("id","map-description-trainer-bottom");
gamedataMapAside4DescriptionTrainer.appendChild(gamedataMapAside4DescriptionTrainerUl);
gamedataMapAside4DescriptionTrainerUl.appendChild(gamedataMapAside4DescriptionTrainerUlTop);
gamedataMapAside4DescriptionTrainerUlTop.appendChild(gamedataMapAside4DescriptionTrainerUlTopCountOuter);
gamedataMapAside4DescriptionTrainerUlTopCountOuter.appendChild(gamedataMapAside4DescriptionTrainerUlTopCount);
gamedataMapAside4DescriptionTrainerUlTop.appendChild(gamedataMapAside4DescriptionTrainerUlTopImgOuter);
gamedataMapAside4DescriptionTrainerUlTopImgOuter.appendChild(gamedataMapAside4DescriptionTrainerUlTopImgPrevious);
gamedataMapAside4DescriptionTrainerUlTopImgOuter.appendChild(gamedataMapAside4DescriptionTrainerUlTopImg);
gamedataMapAside4DescriptionTrainerUlTopImgOuter.appendChild(gamedataMapAside4DescriptionTrainerUlTopImgNext);
gamedataMapAside4DescriptionTrainerUlTop.appendChild(gamedataMapAside4DescriptionTrainerUlTopTitle);
gamedataMapAside4DescriptionTrainerUlTopTitle.appendChild(gamedataMapAside4DescriptionTrainerUlTopTitleCount);
gamedataMapAside4DescriptionTrainerUlTopTitleCount.appendChild(gamedataMapAside4DescriptionTrainerUlTopTitleCountImg);
gamedataMapAside4DescriptionTrainerUlTopTitle.appendChild(gamedataMapAside4DescriptionTrainerUlTopTitleName);
gamedataMapAside4DescriptionTrainerUlTopTitle.appendChild(gamedataMapAside4DescriptionTrainerUlTopTitleValue);
gamedataMapAside4DescriptionTrainerUl.appendChild(gamedataMapAside4DescriptionTrainerUlContent);

gamedataMapAside4DescriptionTrainerUlTopImgPrevious.addEventListener("click", mapDescriptionTrainerSelector);
gamedataMapAside4DescriptionTrainerUlTopImg.addEventListener("click", mapDescriptionTrainerSelector);
gamedataMapAside4DescriptionTrainerUlTopImgNext.addEventListener("click", mapDescriptionTrainerSelector);

function mapDescriptionTrainerSelector() {
    var mapDescriptionTrainers = document.querySelectorAll('#map-description-trainer ul[name]');
    var mapDescriptionTrainer = document.querySelectorAll('#map-description-trainer ul[name="' + this.name + '"]');

    for (var y = 0; y < mapDescriptionTrainers.length; y++) {
        mapDescriptionTrainers[y].style.display = "none";
    }

    for (var y = 0; y < mapDescriptionTrainer.length; y++) {
        mapDescriptionTrainer[y].style.display = "unset";
    }
}





for (var u = 0; u < locationTrainerPok[q].length; u++) {
    var z = u + 1;
    var gamedataMapAside4DescriptionTrainerLi = document.createElement("li");
    var gamedataMapAside4DescriptionTrainerIconOuter = document.createElement("div");
    var gamedataMapAside4DescriptionTrainerIcon = document.createElement("img");
    var gamedataMapAside4DescriptionTrainerLvGender = document.createElement("div");
    var gamedataMapAside4DescriptionTrainerLv = document.createElement("h4");
    var gamedataMapAside4DescriptionTrainerGender = document.createElement("span");
    var gamedataMapAside4DescriptionTrainerHeldItem = document.createElement("img");
    var gamedataMapAside4DescriptionTrainerMoveOuter = document.createElement("span");

    gamedataMapAside4DescriptionTrainerUlTopCount.innerText = x + "/" + locationTrainerPok.length;
    gamedataMapAside4DescriptionTrainerUlTopTitleCountImg.src = "./media/Images/Misc/FinalDex/TrainerBall" + z + ".png";

    gamedataMapAside4DescriptionTrainerIconOuter.setAttribute("id","map-description-trainer-icon")
    gamedataMapAside4DescriptionTrainerIcon.src = "./media/Images/Pokémon/Battle/PNG/Normal/Front/" + ImageType_Name[0] + "/" + locationTrainerPok[q][u] + ".png";
    gamedataMapAside4DescriptionTrainerIcon.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    gamedataMapAside4DescriptionTrainerIcon.setAttribute("title",getPokémonName(locationTrainerPok[q][u]));
    gamedataMapAside4DescriptionTrainerLvGender.setAttribute("id","map-description-trainer-lvgender");
    gamedataMapAside4DescriptionTrainerLv.innerText = "Lv. " + locationTrainerLv[q][u];

    if (locationTrainerHeldItem[q][u] == "♂") {
        gamedataMapAside4DescriptionTrainerGender.setAttribute("title","Male");
    }
    if (locationTrainerHeldItem[q][u] == "♀") {
        gamedataMapAside4DescriptionTrainerGender.setAttribute("title","Female");
    }
    gamedataMapAside4DescriptionTrainerGender.innerText = locationTrainerGender[q][u];
    if (locationTrainerHeldItem[q][u] != undefined && locationTrainerHeldItem[q][u] != "") {
        gamedataMapAside4DescriptionTrainerHeldItem.src = "./media/Images/Item/Bag/" + "VIII" + "/" + locationTrainerHeldItem[q][u] + ".png";
    }
    gamedataMapAside4DescriptionTrainerHeldItem.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error.png'");
    gamedataMapAside4DescriptionTrainerHeldItem.setAttribute("title",locationTrainerHeldItem[q][u]);

    gamedataMapAside4DescriptionTrainerUlContent.appendChild(gamedataMapAside4DescriptionTrainerLi);
    gamedataMapAside4DescriptionTrainerLi.appendChild(gamedataMapAside4DescriptionTrainerIconOuter);
    gamedataMapAside4DescriptionTrainerIconOuter.appendChild(gamedataMapAside4DescriptionTrainerIcon);
    gamedataMapAside4DescriptionTrainerIconOuter.appendChild(gamedataMapAside4DescriptionTrainerHeldItem);
    gamedataMapAside4DescriptionTrainerLi.appendChild(gamedataMapAside4DescriptionTrainerMoveOuter);

    for (var y = 0; y < locationTrainerListMove[q][u].length; y++) {
        var gamedataMapAside4DescriptionTrainerMove = document.createElement("div");
        var gamedataMapAside4DescriptionTrainerMoveContent = document.createElement("p");
        gamedataMapAside4DescriptionTrainerMove.setAttribute("name",y);
        gamedataMapAside4DescriptionTrainerMove.classList.add("map-description-trainer-move");
        gamedataMapAside4DescriptionTrainerMoveContent.innerText = locationTrainerListMove[q][u][y];
        gamedataMapAside4DescriptionTrainerMoveOuter.appendChild(gamedataMapAside4DescriptionTrainerMove);
        gamedataMapAside4DescriptionTrainerMove.appendChild(gamedataMapAside4DescriptionTrainerMoveContent);
    }

    gamedataMapAside4DescriptionTrainerLi.appendChild(gamedataMapAside4DescriptionTrainerLvGender);
    gamedataMapAside4DescriptionTrainerLvGender.appendChild(gamedataMapAside4DescriptionTrainerLv);
    gamedataMapAside4DescriptionTrainerLvGender.appendChild(gamedataMapAside4DescriptionTrainerGender);
}
}





var gamedataMapAside1OptionsOuter = document.createElement("div");
var gamedataMapAside1Options = document.createElement("div");
gamedataMapAside1OptionsOuter.setAttribute("id","map-options-outer");
gamedataMapAside1OptionsOuter.setAttribute("name","0");
gamedataMapAside1Options.setAttribute("id","map-options");
gamedataMapAside1.appendChild(gamedataMapAside1OptionsOuter);
gamedataMapAside1OptionsOuter.appendChild(gamedataMapAside1Options);






for (var q = 0; q < finaldataLocation.length; q++) {
    var gamedataMapAside1OptionsInput = document.createElement("input");
    var gamedataMapAside1OptionsLabel = document.createElement("label");
    gamedataMapAside1OptionsInput.setAttribute("type","radio");
    gamedataMapAside1OptionsInput.setAttribute("name","map-options");
    gamedataMapAside1OptionsInput.setAttribute("id","map-options-" + q);
    gamedataMapAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataMapAside1OptionsInput.value = q;
    gamedataMapAside1OptionsInput.alt = u;
    gamedataMapAside1OptionsLabel.setAttribute("for","map-options-" + q);
    gamedataMapAside1OptionsLabel.setAttribute("name","medium");
    gamedataMapAside1OptionsLabel.setAttribute("data-search-name",finaldataLocation[q][JSONPath_Location+"_"+"Name"].toLowerCase());
    gamedataMapAside1OptionsLabel.innerText = finaldataLocation[q][JSONPath_Location+"_"+"Name"];
    gamedataMapAside1Options.appendChild(gamedataMapAside1OptionsInput);
    gamedataMapAside1Options.appendChild(gamedataMapAside1OptionsLabel);

    gamedataMapAside1OptionsInput.addEventListener("click", mapOptionsSelector);
    
}



function mapOptionsSelector() {
    gamedataMapAside2TitleText.innerText = finaldataLocation[this.value][JSONPath_Location+"_"+"Name"];
    gamedataMapAside2FlavorText.innerText = "";

    var imgz = document.querySelectorAll(".map-img-mark-outer img");
    for (var q = 0; q < imgz.length; q++) {
        imgz[q].remove();
    }

    var upbtn = gamedataMapAside3MapUpMain.querySelectorAll(":scope > button");
    var leftbtn = gamedataMapAside3MapLeftMain.querySelectorAll(":scope > button");
    var rightbtn = gamedataMapAside3MapRightMain.querySelectorAll(":scope > button");
    var dwnbtn = gamedataMapAside3MapDownMain.querySelectorAll(":scope > button");

    for (var q = 0; q < upbtn.length; q++) {
        upbtn[q].remove();
    }
    for (var q = 0; q < leftbtn.length; q++) {
        leftbtn[q].remove();
    }
    for (var q = 0; q < rightbtn.length; q++) {
        rightbtn[q].remove();
    }
    for (var q = 0; q < dwnbtn.length; q++) {
        dwnbtn[q].remove();
    }
    for (var q = 0; q < finaldataLocationSlogan.length; q++) {
        if(finaldataLocationSlogan[q][JSONPath_LocationSlogan+"_"+"Name"] == finaldataLocation[this.value][JSONPath_Location+"_"+"Name"]) {
            gamedataMapAside2FlavorText.innerHTML = '"'+finaldataLocationSlogan[q][JSONPath_LocationSlogan+"_"+"Slogan"]+'"';
        }
    }

    var subs = gamedataMapAside3AreaContent.querySelectorAll(":scope > p");
    for (var q = 0; q < subs.length; q++) {
        subs[q].remove();
    }

    gamedataMapAside3AreaTitle.innerText = "Sub Area/Location";

    for (var q = 0; q < finaldataLocationConnection.length; q++) {
        if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Name"] == finaldataLocation[this.value][JSONPath_Location+"_"+"Name"] && finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"] != undefined) {
            for (var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",").length; u++) {
                var gamedataMapAside3AreaText = document.createElement("p");
                gamedataMapAside3AreaTitle.innerText = "Location";
                gamedataMapAside3AreaText.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",")[u];
                gamedataMapAside3AreaContent.appendChild(gamedataMapAside3AreaText);
                gamedataMapAside3AreaText.addEventListener("click", MapRedirect);
            }
        }
    }
    for (var q = 0; q < finaldataLocationConnection.length; q++) {
        if (finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"] != undefined) {
            for (var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",").length; u++) {
                if (finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Location"].split(",")[u] == finaldataLocation[this.value][JSONPath_Location+"_"+"Name"]) {
                    var gamedataMapAside3AreaText = document.createElement("p");
                    gamedataMapAside3AreaTitle.innerText = "Sub Areas";
                    gamedataMapAside3AreaText.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Name"];
                    gamedataMapAside3AreaContent.appendChild(gamedataMapAside3AreaText);
                    gamedataMapAside3AreaText.addEventListener("click", MapRedirect);
                }
            }
        }
    }

    var navs = gamedataMapAside3NavigationContent.querySelectorAll(":scope > span");
    for (var q = 0; q < navs.length; q++) {
        navs[q].remove();
    }
    for (var q = 0; q < finaldataLocationNavigation.length; q++) {
        if (finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Name"] == finaldataLocation[this.value][JSONPath_Location+"_"+"Name"] && finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Name"] != undefined) {
            for (var u = 0; u < finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",").length; u++) {
    
                var gamedataMapAside3NavigationInnerContent = document.createElement("span")
                var gamedataMapAside3NavigationInnerImg = document.createElement("img");
                var gamedataMapAside3NavigationInnerText = document.createElement("p");
                gamedataMapAside3NavigationInnerText.innerText = finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u];

                if (finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Cut" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Strength") {
                    gamedataMapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Normal" + ".png";
                }
                else if (finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Waterfall" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Surf" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Dive" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Whirlpool") {
                    gamedataMapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Water" + ".png";
                }
                else if (finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Rock Smash" || finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Rock Climb") {
                    gamedataMapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Fighting" + ".png";
                }
                else if (finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] == "Defog") {
                    gamedataMapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + "HM Flying" + ".png";
                }
                else {
                    gamedataMapAside3NavigationInnerImg.src = "./media/Images/Item/Bag/" + MEDIAPath_Item_Bag + "/" + finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u] + ".png";
                }
                gamedataMapAside3NavigationInnerImg.setAttribute("title",finaldataLocationNavigation[q][JSONPath_LocationNavigation+"_"+"Navigation"].split(",")[u]);
                gamedataMapAside3NavigationInnerImg.setAttribute("onerror","this.style.display='none'");
                gamedataMapAside3NavigationContent.appendChild(gamedataMapAside3NavigationInnerContent);
                gamedataMapAside3NavigationInnerContent.appendChild(gamedataMapAside3NavigationInnerImg);
                gamedataMapAside3NavigationInnerContent.appendChild(gamedataMapAside3NavigationInnerText);
            }
        }
    }
        

        
    

    gamedataMapAside3MapUp.style.display = "none";
    gamedataMapAside3MapLeft.style.display = "none";
    gamedataMapAside3MapRight.style.display = "none";
    gamedataMapAside3MapDown.style.display = "none";

    for (var q = 0; q < finaldataLocationConnection.length; q++) {
        if(finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"Name"] == finaldataLocation[this.value][JSONPath_Location+"_"+"Name"]) {
            if (finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"North"] != undefined) {
                gamedataMapAside3MapUp.style.display = "unset";
                for (var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"North"].split(",").length; u++) {
                    var btn = document.createElement("button");
                    btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"North"].split(",")[u];
                    btn.addEventListener("click", MapRedirect);
                    gamedataMapAside3MapUpMain.appendChild(btn);
                }
            }
            else {
                gamedataMapAside3MapUp.style.display = "none";
            }
            if (finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"West"] != undefined) {
                gamedataMapAside3MapLeft.style.display = "unset";
                for (var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"West"].split(",").length; u++) {
                    var btn = document.createElement("button");
                    btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"West"].split(",")[u];
                    btn.addEventListener("click", MapRedirect);
                    gamedataMapAside3MapLeftMain.appendChild(btn);
                }
            }
            else {
                gamedataMapAside3MapLeft.style.display = "none";
            }
            if (finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"East"] != undefined) {
                gamedataMapAside3MapRight.style.display = "unset";
                for (var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"East"].split(",").length; u++) {
                    var btn = document.createElement("button");
                    btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"East"].split(",")[u];
                    btn.addEventListener("click", MapRedirect);
                    gamedataMapAside3MapRightMain.appendChild(btn);
                }
            }
            else {
                gamedataMapAside3MapRight.style.display = "none";
            }
            if (finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"South"] != undefined) {
                gamedataMapAside3MapDown.style.display = "unset";
                for (var u = 0; u < finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"South"].split(",").length; u++) {
                    var btn = document.createElement("button");
                    btn.innerText = finaldataLocationConnection[q][JSONPath_LocationConnection+"_"+"South"].split(",")[u];
                    btn.addEventListener("click", MapRedirect);
                    gamedataMapAside3MapDownMain.appendChild(btn);
                }
            }
            else {
                gamedataMapAside3MapDown.style.display = "none";
            }
        }
    }
    

    

    var gamedataMapAside3MapMarkImg = document.createElement("img");
    gamedataMapAside3MapMarkImg.src = "./media/Images/Misc/Map/" + MEDIAPath_Map + "/Mark/" + finaldataLocation[this.value][JSONPath_Location+"_"+"Name"] + ".png";
    gamedataMapAside3MapMarkImg.classList.add("map-img-mark");
    gamedataMapAside3MapMarkImg.setAttribute("onerror","this.src='./media/Images/Misc/FinalDex/Error2.png';this.classList.remove('map-img-mark');this.classList.add('map-img-error');");
    gamedataMapAside3MapMark.appendChild(gamedataMapAside3MapMarkImg);
}




// Map End



























    


function timerSelector() {
    if (document.querySelector("#timerselector1").checked == true) {
        document.querySelector("#stopwatch-outer").style.display = "inline-block";
        document.querySelector("#countdown-outer").style.display = "none";
        document.querySelector("#countdown-reset").click();
    }
    if (document.querySelector("#timerselector2").checked == true) {
        document.querySelector("#stopwatch-outer").style.display = "none";
        document.querySelector("#countdown-outer").style.display = "inline-block";
        document.querySelector("#stopwatch-reset").click();
    }
}


function gamedataNavSelector() {
    var gamedataDivs = document.querySelectorAll('.gamedata-contentdiv');
    var gamedataDiv = document.querySelectorAll('.gamedata-contentdiv[name="' + this.value + '"]');

    for (var u = 0; u < gamedataDivs.length; u++) {
        gamedataDivs[u].style.display = "none";
    }
    for (var u = 0; u < gamedataDiv.length; u++) {
        gamedataDiv[u].style.display = "block";
    }
}

}






function switchTypeChartMatrix() {

    const typeChartMatrixText = document.querySelectorAll('.typechart th');
    const typeChartMatrixImg = document.querySelectorAll('.typechart th img');

    const check1 = document.getElementById('typechart-title-switch-1');
    const check2 = document.getElementById('typechart-title-switch-2');

    const checklabel1 = document.querySelector('#typechart-title-switch-1 ~ label');
    const checklabel2 = document.querySelector('#typechart-title-switch-2 ~ label');

    if(check1.checked == true) {
        for (var i = 0; i < typeChartMatrixText.length; i++) {
            typeChartMatrixText[i].style.fontSize = "0.5vw";
        }
        for (var i = 0; i < typeChartMatrixImg.length; i++) {
            typeChartMatrixImg[i].style.display = "none";
        }
        checklabel1.parentElement.style.fontSize = "unset";

        checklabel1.style.display = "none";
        checklabel2.style.display = "block";
    }
    if(check2.checked == true) {
        for (var i = 0; i < typeChartMatrixText.length; i++) {
            typeChartMatrixText[i].style.fontSize = "0%";
        }
        for (var i = 0; i < typeChartMatrixImg.length; i++) {
            typeChartMatrixImg[i].style.display = "block";
        }
        checklabel1.parentElement.style.fontSize = "unset";
        
        checklabel1.style.display = "block";
        checklabel2.style.display = "none";
    }
}



function mapDescriptionSelector() {
    var mapDescriptionOuters = document.querySelectorAll('#map-description base[name]');
    var mapDescriptionOuter = document.querySelectorAll('#map-description base[name="' + this.value + '"]');

    for (var y = 0; y < mapDescriptionOuters.length; y++) {
        mapDescriptionOuters[y].style.display = "none";
    }

    for (var y = 0; y < mapDescriptionOuter.length; y++) {
        mapDescriptionOuter[y].style.display = "block";
    }
}


function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function MapRedirect() {
    var x = (this.innerText).toLowerCase();
    var tar = document.querySelector('#map-options > label[data-search-name="'+x+'"]');
    tar.click();
}

function AbilityRedirect() {
    var x = (this.innerText).toLowerCase();
    var tar = document.querySelector('#ability-options > label[data-search-name="'+x+'"]');
    tar.click();
}
