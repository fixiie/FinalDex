var createGameData = function() {

document.getElementById("load-description").innerHTML = "Creating Game Modal<span>.</span><span>.</span><span>.</span>";

var gamedataDiv = document.createElement("div");
var gamedataDivOverlay = document.createElement("div");
var gamedataDivContent = document.createElement("div");

var gamedataBackgroundOuter = document.createElement("div");
var gamedataBackgroundGrass1 = document.createElement("div");
var gamedataBackgroundGrass2 = document.createElement("div");
var gamedataBackground1 = document.createElement("div");
var gamedataBackground2 = document.createElement("div");
var gamedataBackground3 = document.createElement("div");
var gamedataBackground4 = document.createElement("div");
var gamedataBackground5 = document.createElement("div");
var gamedataBackground6 = document.createElement("div");
var gamedataBackground7 = document.createElement("div");

var gamedataNavigation = document.createElement("base");

var gamedataGameTitle = document.createElement("div");
var gamedataGameTitleImg = document.createElement("img");


gamedataDiv.setAttribute("id","gamedata-modal-outer");
gamedataDiv.classList.add("gamedata-modal-outer");
gamedataDivOverlay.classList.add("gamedata-modal-overlay");
gamedataDivContent.classList.add("gamedata-modal");

gamedataBackgroundOuter.classList.add("gamedata-modal-background");
gamedataBackgroundGrass1.classList.add("gamedata-modal-background-grass");
gamedataBackgroundGrass2.classList.add("gamedata-modal-background-grass");
gamedataBackground1.classList.add("gamedata-modal-background-1");
gamedataBackground2.classList.add("gamedata-modal-background-2");
gamedataBackground3.classList.add("gamedata-modal-background-3");
gamedataBackground4.classList.add("gamedata-modal-background-4");
gamedataBackground5.classList.add("gamedata-modal-background-5");
gamedataBackground6.classList.add("gamedata-modal-background-6");
gamedataBackground7.classList.add("gamedata-modal-background-7");

gamedataNavigation.classList.add("gamedata-nav");
gamedataNavigation.setAttribute("name","4");

gamedataGameTitle.setAttribute("id","gamedata-title");
gamedataGameTitleImg.src = "./media/Images/Misc/Title/Text/" + currentGame + ".png"
gamedataGameTitleImg.setAttribute("title",currentGame);





for (var q = 0; q < GamedataNavigation.length; q++) {
    var x = q + 1;
    gamedataNavigation.setAttribute("name",x);
    var gamedataNavigationInput = document.createElement("input");
    var gamedataNavigationLabel = document.createElement("label");
    gamedataNavigationInput.setAttribute("type","radio");
    gamedataNavigationInput.setAttribute("name","gamedata-navigation");
    gamedataNavigationInput.setAttribute("id","gamedata-navigation-" + x);
    gamedataNavigationInput.setAttribute("value",x);
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

gamedataDivContent.appendChild(gamedataBackgroundOuter);
gamedataBackgroundOuter.appendChild(gamedataBackgroundGrass1);
gamedataBackgroundOuter.appendChild(gamedataBackgroundGrass2);
gamedataBackgroundOuter.appendChild(gamedataBackground1);
gamedataBackgroundOuter.appendChild(gamedataBackground2);
gamedataBackgroundOuter.appendChild(gamedataBackground3);
gamedataBackgroundOuter.appendChild(gamedataBackground4);
gamedataBackgroundOuter.appendChild(gamedataBackground5);
gamedataBackgroundOuter.appendChild(gamedataBackground6);
gamedataBackgroundOuter.appendChild(gamedataBackground7);

gamedataDivContent.appendChild(gamedataNavigation);
gamedataDivContent.appendChild(gamedataGameTitle);
gamedataGameTitle.appendChild(gamedataGameTitleImg);

















// Mechanics Start
var gamedataMechanicOuter = document.createElement("div");
var gamedataMechanicAside1 = document.createElement("aside");

var gamedataMechanicAside1OptionsTitleOuter = document.createElement("div");
var gamedataMechanicAside1OptionsTitle = document.createElement("h2");
var gamedataMechanicAside1OptionsOuter = document.createElement("div");
var gamedataMechanicAside1Options = document.createElement("div");

var gamedataMechanicAside2 = document.createElement("aside");
var gamedataMechanicAside2Title = document.createElement("h1");

var gamedataMechanicAside3 = document.createElement("aside");
var gamedataMechanicAside3Content = document.createElement("div");

var gamedataMechanicAside4 = document.createElement("aside");
var gamedataMechanicAside4Icon = document.createElement("div");
var gamedataMechanicAside4IconImage = document.createElement("img");


gamedataMechanicOuter.setAttribute("id","mechanic-outer");
gamedataMechanicOuter.setAttribute("name","1");
gamedataMechanicOuter.classList.add("gamedata-contentdiv");

gamedataMechanicAside1.setAttribute("id","mechanic-aside1");
gamedataMechanicAside1OptionsTitleOuter.setAttribute("id","mechanic-options-title");
gamedataMechanicAside1OptionsTitle.innerText = "Mechanics";
gamedataMechanicAside1OptionsOuter.setAttribute("id","mechanic-options-outer");
gamedataMechanicAside1OptionsOuter.classList.add("scroll");
gamedataMechanicAside1Options.setAttribute("id","mechanic-options");



for (var q = 0; q < mechanicOptionsTitle.length; q++) {
    var gamedataMechanicAside1OptionsInput = document.createElement("input");
    var gamedataMechanicAside1OptionsLabel = document.createElement("label");
    gamedataMechanicAside1OptionsInput.setAttribute("type","radio");
    gamedataMechanicAside1OptionsInput.setAttribute("name","mechanic-options");
    gamedataMechanicAside1OptionsInput.setAttribute("id","mechanic-options-" + q);
    gamedataMechanicAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataMechanicAside1OptionsInput.value = q;
    gamedataMechanicAside1OptionsLabel.setAttribute("for","mechanic-options-" + q);
    gamedataMechanicAside1OptionsLabel.setAttribute("name","large");
    gamedataMechanicAside1OptionsLabel.innerText = mechanicOptionsTitle[q];
    gamedataMechanicAside1Options.appendChild(gamedataMechanicAside1OptionsInput);
    gamedataMechanicAside1Options.appendChild(gamedataMechanicAside1OptionsLabel);

    gamedataMechanicAside1OptionsInput.addEventListener("click", mechanicOptionsSelector);
    function mechanicOptionsSelector() {
        gamedataMechanicAside2Title.innerText = mechanicOptionsTitle[this.value];
        gamedataMechanicAside3Content.innerHTML = mechanicOptions[this.value];
        gamedataMechanicAside4IconImage.src = "./media/Images/Misc/FinalDex/" + mechanicOptionsTitle[this.value] + ".png";
    }
}

gamedataMechanicAside2.setAttribute("id","mechanic-aside2");
gamedataMechanicAside2Title.setAttribute("id","mechanic-title");


gamedataMechanicAside3.setAttribute("id","mechanic-aside3");
gamedataMechanicAside3Content.setAttribute("id","mechanic-content");
gamedataMechanicAside3Content.classList.add("scroll");

gamedataMechanicAside4.setAttribute("id","mechanic-aside4");
gamedataMechanicAside4Icon.classList.add("mechanic-descriptionicon");
gamedataMechanicAside4IconImage.setAttribute("id","mechanic-descriptioniconimg");

gamedataDivContent.appendChild(gamedataMechanicOuter);
gamedataMechanicOuter.appendChild(gamedataMechanicAside1);
gamedataMechanicAside1.appendChild(gamedataMechanicAside1OptionsTitleOuter);
gamedataMechanicAside1OptionsTitleOuter.appendChild(gamedataMechanicAside1OptionsTitle);
gamedataMechanicAside1.appendChild(gamedataMechanicAside1OptionsOuter);
gamedataMechanicAside1OptionsOuter.appendChild(gamedataMechanicAside1Options);

gamedataMechanicOuter.appendChild(gamedataMechanicAside2);
gamedataMechanicAside2.appendChild(gamedataMechanicAside2Title);

gamedataMechanicOuter.appendChild(gamedataMechanicAside3);
gamedataMechanicAside3.appendChild(gamedataMechanicAside3Content);

gamedataMechanicOuter.appendChild(gamedataMechanicAside4);
gamedataMechanicAside4.appendChild(gamedataMechanicAside4Icon);
gamedataMechanicAside4Icon.appendChild(gamedataMechanicAside4IconImage);
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
var gamedataExclusiveAside3ContentPok = document.createElement("div");
var gamedataExclusiveAside3ContentItem = document.createElement("div");
var gamedataExclusiveAside3ContentFeat = document.createElement("div");



gamedataExclusiveOuter.setAttribute("id","exclusive-outer");
gamedataExclusiveOuter.setAttribute("name","2");
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
gamedataExclusiveAside3ContentPok.classList.add("exclusive-content-outer");
gamedataExclusiveAside3ContentPok.setAttribute("name","0");
gamedataExclusiveAside3ContentItem.classList.add("exclusive-content-outer");
gamedataExclusiveAside3ContentItem.setAttribute("name","1");
gamedataExclusiveAside3ContentFeat.classList.add("exclusive-content-outer");
gamedataExclusiveAside3ContentFeat.setAttribute("name","2");


gamedataDivContent.appendChild(gamedataExclusiveOuter);

gamedataExclusiveOuter.appendChild(gamedataExclusiveAside1);
gamedataExclusiveAside1.appendChild(gamedataExclusiveAside1OptionsTitleOuter);
gamedataExclusiveAside1OptionsTitleOuter.appendChild(gamedataExclusiveAside1OptionsTitle);
gamedataExclusiveAside1.appendChild(gamedataExclusiveAside1OptionsOuter);
gamedataExclusiveAside1OptionsOuter.appendChild(gamedataExclusiveAside1Options);


gamedataExclusiveOuter.appendChild(gamedataExclusiveAside2);
gamedataExclusiveAside2.appendChild(gamedataExclusiveAside2Title);

gamedataExclusiveOuter.appendChild(gamedataExclusiveAside3);
gamedataExclusiveAside3.appendChild(gamedataExclusiveAside3ContentPok);
gamedataExclusiveAside3.appendChild(gamedataExclusiveAside3ContentItem);
gamedataExclusiveAside3.appendChild(gamedataExclusiveAside3ContentFeat);

for (var q = 0; q < fdataExclusive.length; q++) {
    var gamedataExclusiveAside3Content = document.createElement("div");
    var gamedataExclusiveAside3ContentTop = document.createElement("div");
    var gamedataExclusiveAside3ContentTopImage = document.createElement("img");
    var gamedataExclusiveAside3ContentSpan1 = document.createElement("span");
    var gamedataExclusiveAside3ContentBottom = document.createElement("div");
    var gamedataExclusiveAside3ContentSpan2 = document.createElement("span");

    gamedataExclusiveAside3Content.classList.add("exclusive-content");
    gamedataExclusiveAside3Content.setAttribute("name",fdataExclusive.length);
    gamedataExclusiveAside3ContentTop.classList.add("exclusive-content-top");
    gamedataExclusiveAside3ContentTopImage.src = "./media/Images/Misc/Title/Text/" + fdataExclusiveTitle[q] + ".png";
    gamedataExclusiveAside3ContentTopImage.title = fdataExclusiveTitle[q];
    gamedataExclusiveAside3ContentSpan1.setAttribute("name","1");
    gamedataExclusiveAside3ContentBottom.classList.add("exclusive-content-bot");
    gamedataExclusiveAside3ContentBottom.classList.add("scroll");
    gamedataExclusiveAside3ContentSpan2.setAttribute("name","2");

    gamedataExclusiveAside3ContentPok.appendChild(gamedataExclusiveAside3Content);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentTop);
    gamedataExclusiveAside3ContentTop.appendChild(gamedataExclusiveAside3ContentTopImage);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentSpan1);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentBottom);
    gamedataExclusiveAside3ContentPok.appendChild(gamedataExclusiveAside3ContentSpan2);


    for (var i = 0; i < fdataExclusive[q].length; i++) {

        var Exclusive = document.createElement("img");
        Exclusive.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataExclusive[q][i] + ".png";
        Exclusive.alt = fdataExclusive[q][i];
        gamedataExclusiveAside3ContentBottom.appendChild(Exclusive);


        function getAllIndexes(arr, val) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(val, i+1)) != -1){
                indexes.push(i);
            }
            return indexes;
        }

        var get_fdataExclusive = getAllIndexes(fdataPokédexIDNational, fdataExclusive[q][i]);
        var fdataExclusiveResult = [];
        fdataExclusiveResult.push((get_fdataExclusive.map(i => fdataPokédexIDNational[i]).join(",")));

        Exclusive.setAttribute("title",fdataName[fdataExclusiveResult - 1]);

    }

}

for (var q = 0; q < fdataItemExclusive.length; q++) {
    var gamedataExclusiveAside3Content = document.createElement("div");
    var gamedataExclusiveAside3ContentTop = document.createElement("div");
    var gamedataExclusiveAside3ContentTopImage = document.createElement("img");
    var gamedataExclusiveAside3ContentSpan1 = document.createElement("span");
    var gamedataExclusiveAside3ContentBottom = document.createElement("div");
    var gamedataExclusiveAside3ContentSpan2 = document.createElement("span");

    gamedataExclusiveAside3Content.classList.add("exclusive-content");
    gamedataExclusiveAside3Content.setAttribute("name",fdataItemExclusive.length);
    gamedataExclusiveAside3ContentTop.classList.add("exclusive-content-top");
    gamedataExclusiveAside3ContentTopImage.src = "./media/Images/Misc/Title/Text/" + fdataItemExclusiveTitle[q] + ".png";
    gamedataExclusiveAside3ContentTopImage.title = fdataItemExclusiveTitle[q];
    gamedataExclusiveAside3ContentSpan1.setAttribute("name","1");
    gamedataExclusiveAside3ContentBottom.classList.add("exclusive-content-bot");
    gamedataExclusiveAside3ContentBottom.classList.add("scroll");
    gamedataExclusiveAside3ContentSpan2.setAttribute("name","2");

    gamedataExclusiveAside3ContentItem.appendChild(gamedataExclusiveAside3Content);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentTop);
    gamedataExclusiveAside3ContentTop.appendChild(gamedataExclusiveAside3ContentTopImage);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentSpan1);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentBottom);
    gamedataExclusiveAside3ContentItem.appendChild(gamedataExclusiveAside3ContentSpan2);


    for (var i = 0; i < fdataItemExclusive[q].length; i++) {
        var Exclusive = document.createElement("img");
        Exclusive.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataItemExclusive[q][i] + ".png";
        Exclusive.alt = fdataItemExclusive[q][i];
        gamedataExclusiveAside3ContentBottom.appendChild(Exclusive);
    }

}

for (var q = 0; q < fdataFeatExclusive.length; q++) {
    var gamedataExclusiveAside3Content = document.createElement("div");
    var gamedataExclusiveAside3ContentTop = document.createElement("div");
    var gamedataExclusiveAside3ContentTopImage = document.createElement("img");
    var gamedataExclusiveAside3ContentSpan1 = document.createElement("span");
    var gamedataExclusiveAside3ContentBottom = document.createElement("div");
    var gamedataExclusiveAside3ContentSpan2 = document.createElement("span");

    gamedataExclusiveAside3Content.classList.add("exclusive-content");
    gamedataExclusiveAside3Content.setAttribute("name",fdataFeatExclusive.length);
    gamedataExclusiveAside3ContentTop.classList.add("exclusive-content-top");
    gamedataExclusiveAside3ContentTopImage.src = "./media/Images/Misc/Title/Text/" + fdataFeatExclusiveTitle[q] + ".png";
    gamedataExclusiveAside3ContentTopImage.title = fdataExclusiveTitle[q];
    gamedataExclusiveAside3ContentSpan1.setAttribute("name","1");
    gamedataExclusiveAside3ContentBottom.classList.add("exclusive-content-bot");
    gamedataExclusiveAside3ContentBottom.classList.add("scroll");
    gamedataExclusiveAside3ContentSpan2.setAttribute("name","2");

    gamedataExclusiveAside3ContentFeat.appendChild(gamedataExclusiveAside3Content);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentTop);
    gamedataExclusiveAside3ContentTop.appendChild(gamedataExclusiveAside3ContentTopImage);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentSpan1);
    gamedataExclusiveAside3Content.appendChild(gamedataExclusiveAside3ContentBottom);
    gamedataExclusiveAside3ContentFeat.appendChild(gamedataExclusiveAside3ContentSpan2);


    for (var i = 0; i < fdataFeatExclusive[q].length; i++) {
        var Exclusive = document.createElement("img");
        Exclusive.src = "./media/Images/Pokémon/Icon/PNG/" + iconPath + "/" + fdataFeatExclusive[q][i] + ".png";
        Exclusive.alt = fdataFeatExclusive[q][i];
        gamedataExclusiveAside3ContentBottom.appendChild(Exclusive);
    }

}
    

for (var q = 0; q < exclusiveOptionsTitle.length; q++) {
    var gamedataExclusiveAside1OptionsInput = document.createElement("input");
    var gamedataExclusiveAside1OptionsLabel = document.createElement("label");
    gamedataExclusiveAside1OptionsInput.setAttribute("type","radio");
    gamedataExclusiveAside1OptionsInput.setAttribute("name","exclusive-options");
    gamedataExclusiveAside1OptionsInput.setAttribute("id","exclusive-options-" + q);
    gamedataExclusiveAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataExclusiveAside1OptionsInput.value = q;
    gamedataExclusiveAside1OptionsLabel.setAttribute("for","exclusive-options-" + q);
    gamedataExclusiveAside1OptionsLabel.setAttribute("name","large");
    gamedataExclusiveAside1OptionsLabel.innerText = exclusiveOptionsTitle[q];
    gamedataExclusiveAside1Options.appendChild(gamedataExclusiveAside1OptionsInput);
    gamedataExclusiveAside1Options.appendChild(gamedataExclusiveAside1OptionsLabel);

    gamedataExclusiveAside1OptionsInput.addEventListener("click", exclusiveOptionsSelector);
    function exclusiveOptionsSelector() {
        gamedataExclusiveAside2Title.innerText = "Exclusive " + exclusiveOptionsTitle[this.value];

        var exclusiveContents = document.querySelectorAll(".exclusive-content-outer[name]");
        var exclusiveContent = document.querySelectorAll(".exclusive-content-outer[name='" + this.value + "']");

        for (var q = 0; q < exclusiveContents.length; q++) {
            exclusiveContents[q].style.display = "none";
        }

        for (var q = 0; q < exclusiveContent.length; q++) {
            exclusiveContent[q].style.display = "block";
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
var gamedataTypeAside3Typechart1 = document.createElement("div");
var gamedataTypeAside3Typechart2 = document.createElement("div");
var gamedataTypeAside3Typechart3 = document.createElement("div");
var gamedataTypeAside3Typechart4 = document.createElement("div");

var gamedataTypeAside4 = document.createElement("aside");
var gamedataTypeAside4Description = document.createElement("div");
var gamedataTypeAside4DescriptionTitleOuter = document.createElement("div");
var gamedataTypeAside4DescriptionTitleSpan = document.createElement("span");
var gamedataTypeAside4DescriptionTitleLeft = document.createElement("div");
var gamedataTypeAside4DescriptionTitleLeftTitle = document.createElement("h1");
var gamedataTypeAside4DescriptionTitleImage = document.createElement("img");
var gamedataTypeAside4DescriptionEffective = document.createElement("div");
var gamedataTypeAside4DescriptionEffectiveTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionEffectiveContain = document.createElement("data");
var gamedataTypeAside4DescriptionIneffective = document.createElement("div");
var gamedataTypeAside4DescriptionIneffectiveTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionIneffectiveContain = document.createElement("data");
var gamedataTypeAside4DescriptionImmune = document.createElement("div");
var gamedataTypeAside4DescriptionImmuneTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionImmuneContain = document.createElement("data");
var gamedataTypeAside4DescriptionNormal = document.createElement("div");
var gamedataTypeAside4DescriptionNormalTitle = document.createElement("h4");
var gamedataTypeAside4DescriptionNormalContain = document.createElement("data");



gamedataTypeOuter.setAttribute("id","type-outer");
gamedataTypeOuter.setAttribute("name","3");
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
gamedataTypeAside3Typechart1.setAttribute("id","typechart");
gamedataTypeAside3Typechart1.setAttribute("name","0");
gamedataTypeAside3Typechart1.classList.add("scroll");

gamedataTypeAside3Typechart2.setAttribute("id","typechart-effective");
gamedataTypeAside3Typechart2.setAttribute("name","1");
gamedataTypeAside3Typechart2.classList.add("scroll");
gamedataTypeAside3Typechart3.setAttribute("id","typechart-ineffective");
gamedataTypeAside3Typechart3.setAttribute("name","2");
gamedataTypeAside3Typechart3.classList.add("scroll");
gamedataTypeAside3Typechart4.setAttribute("id","typechart-immunity");
gamedataTypeAside3Typechart4.setAttribute("name","3");
gamedataTypeAside3Typechart4.classList.add("scroll");

gamedataTypeAside4.setAttribute("id","type-aside4");
gamedataTypeAside4Description.classList.add("type-description");
gamedataTypeAside4Description.classList.add("scroll");
gamedataTypeAside4DescriptionTitleOuter.classList.add("type-description-title");
gamedataTypeAside4DescriptionTitleSpan
gamedataTypeAside4DescriptionTitleLeft.classList.add("type-description-title-left");
gamedataTypeAside4DescriptionTitleLeftTitle
gamedataTypeAside4DescriptionTitleImage.classList.add("type-symbol");
gamedataTypeAside4DescriptionTitleImage.setAttribute("alt",iconTypeSymbolPath);
gamedataTypeAside4DescriptionEffective.classList.add("type-effective");
gamedataTypeAside4DescriptionEffectiveTitle
gamedataTypeAside4DescriptionEffectiveTitle.innerText = "Super Effective";
gamedataTypeAside4DescriptionEffectiveContain.classList.add("type-effective-content");
gamedataTypeAside4DescriptionEffectiveContain.value = iconTypePath;
gamedataTypeAside4DescriptionIneffective.classList.add("type-ineffective");
gamedataTypeAside4DescriptionIneffectiveTitle.setAttribute("title","When used against an opposing Pokémon");
gamedataTypeAside4DescriptionIneffectiveTitle.innerText = "Not Very Effective";
gamedataTypeAside4DescriptionIneffectiveContain.classList.add("type-ineffective-content");
gamedataTypeAside4DescriptionIneffectiveContain.value = iconTypePath;
gamedataTypeAside4DescriptionImmune.classList.add("type-immune");
gamedataTypeAside4DescriptionImmuneTitle.setAttribute("title","When used against an opposing Pokémon");
gamedataTypeAside4DescriptionImmuneTitle.innerText = "No Effect";
gamedataTypeAside4DescriptionImmuneContain.classList.add("type-immune-content");
gamedataTypeAside4DescriptionImmuneContain.value = iconTypePath;
gamedataTypeAside4DescriptionNormal.classList.add("type-normal");
gamedataTypeAside4DescriptionNormalTitle.setAttribute("title","When used against an opposing Pokémon");
gamedataTypeAside4DescriptionNormalTitle.innerText = "Normal Effectiveness";
gamedataTypeAside4DescriptionNormalContain.classList.add("type-default-content");
gamedataTypeAside4DescriptionNormalContain.value = iconTypePath;



gamedataDivContent.appendChild(gamedataTypeOuter);
gamedataTypeOuter.appendChild(gamedataTypeAside1);
gamedataTypeAside1.appendChild(gamedataTypeAside1OptionsTitleOuter);
gamedataTypeAside1OptionsTitleOuter.appendChild(gamedataTypeAside1OptionsTitle);
gamedataTypeAside1.appendChild(gamedataTypeAside1OptionsOuter);
gamedataTypeAside1OptionsOuter.appendChild(gamedataTypeAside1Options);

gamedataTypeOuter.appendChild(gamedataTypeAside2);
gamedataTypeAside2.appendChild(gamedataTypeAside2Title);

gamedataTypeOuter.appendChild(gamedataTypeAside3);
gamedataTypeAside3.appendChild(gamedataTypeAside3Typechart1);
gamedataTypeAside3.appendChild(gamedataTypeAside3Typechart2);
gamedataTypeAside3.appendChild(gamedataTypeAside3Typechart3);
gamedataTypeAside3.appendChild(gamedataTypeAside3Typechart4);

gamedataTypeOuter.appendChild(gamedataTypeAside4);
gamedataTypeAside4.appendChild(gamedataTypeAside4Description);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionTitleOuter);
gamedataTypeAside4DescriptionTitleOuter.appendChild(gamedataTypeAside4DescriptionTitleSpan);
gamedataTypeAside4DescriptionTitleOuter.appendChild(gamedataTypeAside4DescriptionTitleLeft);
gamedataTypeAside4DescriptionTitleLeft.appendChild(gamedataTypeAside4DescriptionTitleLeftTitle);
gamedataTypeAside4DescriptionTitleOuter.appendChild(gamedataTypeAside4DescriptionTitleImage);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionEffective);
gamedataTypeAside4DescriptionEffective.appendChild(gamedataTypeAside4DescriptionEffectiveTitle);
gamedataTypeAside4DescriptionEffective.appendChild(gamedataTypeAside4DescriptionEffectiveContain);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionIneffective);
gamedataTypeAside4DescriptionIneffective.appendChild(gamedataTypeAside4DescriptionIneffectiveTitle);
gamedataTypeAside4DescriptionIneffective.appendChild(gamedataTypeAside4DescriptionIneffectiveContain);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionImmune);
gamedataTypeAside4DescriptionImmune.appendChild(gamedataTypeAside4DescriptionImmuneTitle);
gamedataTypeAside4DescriptionImmune.appendChild(gamedataTypeAside4DescriptionImmuneContain);
gamedataTypeAside4Description.appendChild(gamedataTypeAside4DescriptionNormal);
gamedataTypeAside4DescriptionNormal.appendChild(gamedataTypeAside4DescriptionNormalTitle);
gamedataTypeAside4DescriptionNormal.appendChild(gamedataTypeAside4DescriptionNormalContain);



// Matrix Start
var gamedataTypeAside3TypeChartMatrix = document.createElement("div");
var gamedataTypeAside3TypeChartMatrixTable = document.createElement("table");

gamedataTypeAside3TypeChartMatrix.setAttribute("id","typechart-matrix");
gamedataTypeAside3TypeChartMatrixTable.setAttribute("id","typechart-matrix-table");
gamedataTypeAside3TypeChartMatrixTable.classList.add("typechart");

var gamedataTypeAside3TypeChartMatrixTableTR = document.createElement("tr");

gamedataTypeAside3TypeChartMatrixTable.appendChild(gamedataTypeAside3TypeChartMatrixTableTR);

for (var i = 0; i < fdataTypes.length + 1; i++) {

    var gamedataTypeAside3TypeChartMatrixTableTH0 = document.createElement("th");
    var gamedataTypeAside3TypeChartMatrixTableIMG = document.createElement("img");
    gamedataTypeAside3TypeChartMatrixTableTH0.innerText = fdataTypes[i - 1];
    gamedataTypeAside3TypeChartMatrixTableTH0.setAttribute("title",fdataTypes[i - 1]);
    gamedataTypeAside3TypeChartMatrixTableTH0.setAttribute("onclick","type" + fdataTypes[i - 1] + "()");
    gamedataTypeAside3TypeChartMatrixTableIMG.src = "./media/Images/Misc/Type/Symbol/" + iconTypeSymbolPath + "/" + fdataTypes[i - 1] + ".png";
    gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTH0);
    gamedataTypeAside3TypeChartMatrixTableTH0.appendChild(gamedataTypeAside3TypeChartMatrixTableIMG);
}

for (var i = 0; i < maxType; i++) {

var gamedataTypeAside3TypeChartMatrixTableTR = document.createElement("tr");
var gamedataTypeAside3TypeChartMatrixTableTH = document.createElement("th");
var gamedataTypeAside3TypeChartMatrixTableIMG = document.createElement("img");

gamedataTypeAside3TypeChartMatrixTable.appendChild(gamedataTypeAside3TypeChartMatrixTableTR);
gamedataTypeAside3TypeChartMatrixTableTH.setAttribute("title",fdataTypes[i]);
gamedataTypeAside3TypeChartMatrixTableTH.setAttribute("onclick","type" + fdataTypes[i] + "()");
gamedataTypeAside3TypeChartMatrixTableTH.innerText = fdataTypes[i];
gamedataTypeAside3TypeChartMatrixTableIMG.src = "./media/Images/Misc/Type/Symbol/" + iconTypeSymbolPath + "/" + fdataTypes[i] + ".png";
gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTH);


for (var q = 0; q < fdataTypeChartDefending.length; q++) {
    var gamedataTypeAside3TypeChartMatrixTableTD = document.createElement("td");
    gamedataTypeAside3TypeChartMatrixTableTD.innerText = fdataTypeChartDefending[q][i];
    gamedataTypeAside3TypeChartMatrixTableTD.setAttribute("title",fdataTypeChartDefending[q][i]);
    gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTD);
}

gamedataTypeAside3TypeChartMatrixTableTH.appendChild(gamedataTypeAside3TypeChartMatrixTableIMG);

}


gamedataTypeAside3Typechart1.appendChild(gamedataTypeAside3TypeChartMatrix);
gamedataTypeAside3TypeChartMatrix.appendChild(gamedataTypeAside3TypeChartMatrixTable);

var TypeChartUndefined = document.querySelectorAll('.typechart th[title="undefined"]');
var TypeChartNormal = document.querySelectorAll('.typechart td[title="1×"]');
var TypeChartEffective = document.querySelectorAll('.typechart td[title="2×"]');
var TypeChartIneffective = document.querySelectorAll('.typechart td[title="½×"]');
var TypeChartImmune = document.querySelectorAll('.typechart td[title="0×"]');

for (var i = 0; i < TypeChartUndefined.length; i++) {
    TypeChartUndefined[i].setAttribute("title","");
    TypeChartUndefined[i].innerText = "";

    gamedataTypeAside3TypeChartMatrixTableTR.appendChild(gamedataTypeAside3TypeChartMatrixTableTD);

    let typeChartTitleSwitchInput1 = document.createElement("input");
    let typeChartTitleSwitchLabel1 = document.createElement("label");
    
    typeChartTitleSwitchInput1.setAttribute("type","radio");
    typeChartTitleSwitchInput1.setAttribute("name","typechart-title-switch");
    typeChartTitleSwitchInput1.setAttribute("id","typechart-title-switch-1");
    typeChartTitleSwitchInput1.setAttribute("autocomplete","off");
    typeChartTitleSwitchInput1.setAttribute("onclick","switchTypeChartMatrix()");
    typeChartTitleSwitchLabel1.setAttribute("for","typechart-title-switch-1");
    typeChartTitleSwitchLabel1.innerText = "⇆";

    TypeChartUndefined[i].appendChild(typeChartTitleSwitchInput1);
    TypeChartUndefined[i].appendChild(typeChartTitleSwitchLabel1);

    let typeChartTitleSwitchInput2 = document.createElement("input");
    let typeChartTitleSwitchLabel2 = document.createElement("label");

    typeChartTitleSwitchInput2.setAttribute("type","radio");
    typeChartTitleSwitchInput2.setAttribute("name","typechart-title-switch");
    typeChartTitleSwitchInput2.setAttribute("id","typechart-title-switch-2");
    typeChartTitleSwitchInput2.setAttribute("autocomplete","off");
    typeChartTitleSwitchInput2.setAttribute("onclick","switchTypeChartMatrix()");
    typeChartTitleSwitchLabel2.setAttribute("for","typechart-title-switch-2");
    typeChartTitleSwitchLabel2.innerText = "⇄";

    TypeChartUndefined[i].appendChild(typeChartTitleSwitchInput2);
    TypeChartUndefined[i].appendChild(typeChartTitleSwitchLabel2);
}

for (var i = 0; i < TypeChartNormal.length; i++) {
    TypeChartNormal[i].setAttribute("title","Normal Effectiveness");
}
for (var i = 0; i < TypeChartEffective.length; i++) {
    TypeChartEffective[i].setAttribute("title","Super Effective");
}
for (var i = 0; i < TypeChartIneffective.length; i++) {
    TypeChartIneffective[i].setAttribute("title","Not Very Effective");
}
for (var i = 0; i < TypeChartImmune.length; i++) {
    TypeChartImmune[i].setAttribute("title","No Effect");
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
// Matrix End



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
            typechartContent[q].style.display = "block";
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
gamedataToolOuter.setAttribute("name","4");
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



for (var q = 0; q < toolOptionsTitle.length; q++) {
    toolOptionsTitle.forEach(function(val, u) { if (val == "Random Number Generator") toolOptionsTitle[u] = "Random Number<br>Generator";});

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

    toolOptionsTitle.forEach(function(val, u) { if (val == "Random Number<br>Generator") toolOptionsTitle[u] = "Random Number Generator";});

    gamedataToolAside1OptionsInput.addEventListener("click", toolOptionsSelector);
    function toolOptionsSelector() {
        gamedataToolAside2Title.innerText = toolOptionsTitle[this.value];


        var toolContents = document.querySelectorAll("#tool-aside3 div[name]");
        var toolContent = document.querySelectorAll("#tool-aside3 div[name='" + this.value + "']");

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
var gamedataAbilityOuter = document.createElement("div");
var gamedataAbilityAside1 = document.createElement("aside");
var gamedataAbilityAside1OptionsTitleOuter = document.createElement("div");
var gamedataAbilityAside1OptionsSearchOuter = document.createElement("div");
var gamedataAbilityAside1OptionsSearch = document.createElement("input");
var gamedataAbilityAside1OptionsSearchExit = document.createElement("span");
var gamedataAbilityAside1OptionsOuter = document.createElement("div");
var gamedataAbilityAside1Options = document.createElement("div");
var gamedataAbilityAside2 = document.createElement("aside");
var gamedataAbilityAside2Title = document.createElement("h1");
var gamedataAbilityAside3 = document.createElement("aside");
var gamedataAbilityAside4 = document.createElement("aside");

gamedataAbilityOuter.setAttribute("id","ability-outer");
gamedataAbilityOuter.setAttribute("name","5");
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
gamedataAbilityAside1OptionsOuter.classList.add("scroll");
gamedataAbilityAside1Options.setAttribute("id","ability-options");
gamedataAbilityAside2.setAttribute("id","ability-aside2");
gamedataAbilityAside2Title.innerText = "Abilities";
gamedataAbilityAside3.setAttribute("id","ability-aside3");
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
gamedataAbilityOuter.appendChild(gamedataAbilityAside3);
gamedataAbilityOuter.appendChild(gamedataAbilityAside4);


for (var q = 0; q < abilityOptionsTitle.length; q++) {
    var gamedataAbilityAside1OptionsInput = document.createElement("input");
    var gamedataAbilityAside1OptionsLabel = document.createElement("label");
    gamedataAbilityAside1OptionsInput.setAttribute("type","radio");
    gamedataAbilityAside1OptionsInput.setAttribute("name","ability-options");
    gamedataAbilityAside1OptionsInput.setAttribute("id","ability-options-" + q);
    gamedataAbilityAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataAbilityAside1OptionsInput.value = q;
    gamedataAbilityAside1OptionsLabel.setAttribute("for","ability-options-" + q);
    gamedataAbilityAside1OptionsLabel.setAttribute("name","medium");
    gamedataAbilityAside1OptionsLabel.setAttribute("data-search-name",abilityOptionsTitle[q].toLowerCase());
    gamedataAbilityAside1OptionsLabel.innerText = abilityOptionsTitle[q];
    gamedataAbilityAside1Options.appendChild(gamedataAbilityAside1OptionsInput);
    gamedataAbilityAside1Options.appendChild(gamedataAbilityAside1OptionsLabel);

    gamedataAbilityAside1OptionsInput.addEventListener("click", abilityOptionsSelector);
    function abilityOptionsSelector() {
            gamedataAbilityAside2Title.innerText = abilityOptionsTitle[this.value];
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
var gamedataMoveAside2Title = document.createElement("h1");
var gamedataMoveAside3 = document.createElement("aside");
var gamedataMoveAside4 = document.createElement("aside");

gamedataMoveOuter.setAttribute("id","move-outer");
gamedataMoveOuter.setAttribute("name","6");
gamedataMoveOuter.classList.add("gamedata-contentdiv");
gamedataMoveAside1.setAttribute("id","move-aside1");
gamedataMoveAside1OptionsTitleOuter.setAttribute("id","move-options-title");
gamedataMoveAside1OptionsSearchOuter.setAttribute("id","move-options-search");
gamedataMoveAside1OptionsSearch.setAttribute("type","text");
gamedataMoveAside1OptionsSearch.setAttribute("id","move-search");
gamedataMoveAside1OptionsSearch.setAttribute("placeholder","Search Moves...");
gamedataMoveAside1OptionsSearch.setAttribute("onfocus","this.placeholder=''");
gamedataMoveAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Moves...'");
gamedataMoveAside1OptionsSearch.setAttribute("autocomplete","off");
gamedataMoveAside1OptionsSearchExit.setAttribute("id","move-search-exit");
gamedataMoveAside1OptionsOuter.setAttribute("id","move-options-outer");
gamedataMoveAside1OptionsOuter.classList.add("scroll");
gamedataMoveAside1Options.setAttribute("id","move-options");
gamedataMoveAside2.setAttribute("id","move-aside2");
gamedataMoveAside2Title.innerText = "Moves";
gamedataMoveAside3.setAttribute("id","move-aside3");
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
gamedataMoveOuter.appendChild(gamedataMoveAside3);
gamedataMoveOuter.appendChild(gamedataMoveAside4);


for (var q = 0; q < moveOptionsTitle.length; q++) {
    var gamedataMoveAside1OptionsInput = document.createElement("input");
    var gamedataMoveAside1OptionsLabel = document.createElement("label");
    gamedataMoveAside1OptionsInput.setAttribute("type","radio");
    gamedataMoveAside1OptionsInput.setAttribute("name","move-options");
    gamedataMoveAside1OptionsInput.setAttribute("id","move-options-" + q);
    gamedataMoveAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataMoveAside1OptionsInput.value = q;
    gamedataMoveAside1OptionsLabel.setAttribute("for","move-options-" + q);
    gamedataMoveAside1OptionsLabel.setAttribute("name","medium");
    gamedataMoveAside1OptionsLabel.setAttribute("data-search-name",moveOptionsTitle[q].toLowerCase());
    gamedataMoveAside1OptionsLabel.innerText = moveOptionsTitle[q];
    gamedataMoveAside1Options.appendChild(gamedataMoveAside1OptionsInput);
    gamedataMoveAside1Options.appendChild(gamedataMoveAside1OptionsLabel);

    gamedataMoveAside1OptionsInput.addEventListener("click", moveOptionsSelector);
    function moveOptionsSelector() {
            gamedataMoveAside2Title.innerText = moveOptionsTitle[this.value];
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
var gamedataItemAside2Title = document.createElement("h1");
var gamedataItemAside3 = document.createElement("aside");
var gamedataItemAside4 = document.createElement("aside");

gamedataItemOuter.setAttribute("id","item-outer");
gamedataItemOuter.setAttribute("name","7");
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
gamedataItemAside1OptionsOuter.classList.add("scroll");
gamedataItemAside1Options.setAttribute("id","item-options");
gamedataItemAside2.setAttribute("id","item-aside2");
gamedataItemAside2Title.innerText = "Items";
gamedataItemAside3.setAttribute("id","item-aside3");
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
gamedataItemOuter.appendChild(gamedataItemAside3);
gamedataItemOuter.appendChild(gamedataItemAside4);


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
            gamedataItemAside2Title.innerText = itemOptionsTitle[this.value];
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
var gamedataMapAside1OptionsSub = document.createElement("div");


var gamedataMapAside2 = document.createElement("aside");
var gamedataMapAside2Title = document.createElement("h1");

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
var gamedataMapAside3MapUpMainButton = document.createElement("button");
var gamedataMapAside3MapDown = document.createElement("div");
var gamedataMapAside3MapDownToggle = document.createElement("div");
var gamedataMapAside3MapDownMain = document.createElement("main");
var gamedataMapAside3MapDownMainButton = document.createElement("button");
var gamedataMapAside3MapLeft = document.createElement("div");
var gamedataMapAside3MapLeftToggle = document.createElement("div");
var gamedataMapAside3MapLeftMain = document.createElement("main");
var gamedataMapAside3MapLeftMainButton = document.createElement("button");
var gamedataMapAside3MapRight = document.createElement("div");
var gamedataMapAside3MapRightToggle = document.createElement("div");
var gamedataMapAside3MapRightMain = document.createElement("main");
var gamedataMapAside3MapRightMainButton = document.createElement("button");
var gamedataMapAside3Map = document.createElement("div");
var gamedataMapAside3MapPanzoom = document.createElement("div");
var gamedataMapAside3MapMark = document.createElement("div");
var gamedataMapAside3MapImage = document.createElement("img");
var gamedataMapAside3MapCordinateOuter = document.createElement("map");

var gamedataMapAside4 = document.createElement("aside");

gamedataMapOuter.setAttribute("id","map-outer");
gamedataMapOuter.setAttribute("name","8");
gamedataMapOuter.classList.add("gamedata-contentdiv");

gamedataMapAside1.setAttribute("id","map-aside1");
gamedataMapAside1OptionsTitleOuter.setAttribute("id","map-options-title");
gamedataMapAside1OptionsSearchOuter.setAttribute("id","map-options-search");
gamedataMapAside1OptionsSearch.setAttribute("type","text");
gamedataMapAside1OptionsSearch.setAttribute("id","map-search");
gamedataMapAside1OptionsSearch.setAttribute("onfocus","this.placeholder=''");
gamedataMapAside1OptionsSearch.setAttribute("autocomplete","off");
gamedataMapAside1OptionsSearchExit.setAttribute("id","map-search-exit");
gamedataMapAside1OptionsSub.setAttribute("id","map-options-sub");

gamedataMapAside2.setAttribute("id","map-aside2");
gamedataMapAside2Title.innerText = "Map of " + region;


gamedataMapAside3.setAttribute("id","map-aside3");
gamedataMapAside3MapOuter.setAttribute("id","map-contain");
gamedataMapAside3MapOuter.setAttribute("oncontextmenu","return false;");
gamedataMapAside3MapZoomReset.setAttribute("id","zoom-reset");
gamedataMapAside3MapZoomOut.classList.add("zoom-out");
gamedataMapAside3MapZoomIn.classList.add("zoom-in");
gamedataMapAside3MapZoomFullscreen.classList.add("zoom-fullscreen");
gamedataMapAside3MapCancel.classList.add("map-cancel")
gamedataMapAside3MapUp.classList.add("map-up");
gamedataMapAside3MapUpToggle.classList.add("map-up-toggle");
gamedataMapAside3MapUpToggle.innerText = "↑";
gamedataMapAside3MapUpMain
gamedataMapAside3MapUpMainButton.innerText = "Route 111";
gamedataMapAside3MapDown.classList.add("map-down");
gamedataMapAside3MapDownToggle.classList.add("map-down-toggle");
gamedataMapAside3MapDownToggle.innerText = "↓";
gamedataMapAside3MapDownMain
gamedataMapAside3MapDownMainButton.innerText = "Route 110";
gamedataMapAside3MapLeft.classList.add("map-left");
gamedataMapAside3MapLeftToggle.classList.add("map-left-toggle");
gamedataMapAside3MapLeftToggle.innerText = "←";
gamedataMapAside3MapLeftMain
gamedataMapAside3MapLeftMainButton.innerText = "Route 117";
gamedataMapAside3MapRight.classList.add("map-right");
gamedataMapAside3MapRightToggle.classList.add("map-right-toggle");
gamedataMapAside3MapRightToggle.innerText = "→";
gamedataMapAside3MapRightMain
gamedataMapAside3MapRightMainButton.innerText = "Route 118";
gamedataMapAside3Map.setAttribute("id","map");
gamedataMapAside3MapPanzoom.setAttribute("id","map-panzoom");
gamedataMapAside3MapPanzoom.setAttribute("name",region + "-" + siblingGamesAbbr);
gamedataMapAside3MapMark.classList.add("mechanic-img-mark-outer");
gamedataMapAside3MapImage.src = "./media/Images/Map/" + siblingGamesAbbr + "/Map.png"
gamedataMapAside3MapImage.setAttribute("width",mapWidth);
gamedataMapAside3MapImage.setAttribute("height",mapHeight);
gamedataMapAside3MapImage.classList.add("mechanic-img-main");
gamedataMapAside3MapImage.setAttribute("usemap","#" + region + "-" + siblingGamesAbbr + "-map");
gamedataMapAside3MapCordinateOuter.setAttribute("id", region + "-" + siblingGamesAbbr + "-map");
gamedataMapAside3MapCordinateOuter.setAttribute("name", region + "-" + siblingGamesAbbr + "-map");

gamedataMapAside4.setAttribute("id","map-aside4");


gamedataDivContent.appendChild(gamedataMapOuter);
gamedataMapOuter.appendChild(gamedataMapAside1);
gamedataMapAside1.appendChild(gamedataMapAside1OptionsTitleOuter);
gamedataMapAside1OptionsTitleOuter.appendChild(gamedataMapAside1OptionsSearchOuter);
gamedataMapAside1OptionsSearchOuter.appendChild(gamedataMapAside1OptionsSearchExit);
gamedataMapAside1OptionsSearchOuter.appendChild(gamedataMapAside1OptionsSearch);
gamedataMapAside1.appendChild(gamedataMapAside1OptionsSub);

gamedataMapOuter.appendChild(gamedataMapAside2);
gamedataMapAside2.appendChild(gamedataMapAside2Title);

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
gamedataMapAside3MapUpMain.appendChild(gamedataMapAside3MapUpMainButton);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapDown);
gamedataMapAside3MapDown.appendChild(gamedataMapAside3MapDownToggle);
gamedataMapAside3MapDown.appendChild(gamedataMapAside3MapDownMain);
gamedataMapAside3MapDownMain.appendChild(gamedataMapAside3MapDownMainButton);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapLeft);
gamedataMapAside3MapLeft.appendChild(gamedataMapAside3MapLeftToggle);
gamedataMapAside3MapLeft.appendChild(gamedataMapAside3MapLeftMain);
gamedataMapAside3MapLeftMain.appendChild(gamedataMapAside3MapLeftMainButton);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3MapRight);
gamedataMapAside3MapRight.appendChild(gamedataMapAside3MapRightToggle);
gamedataMapAside3MapRight.appendChild(gamedataMapAside3MapRightMain);
gamedataMapAside3MapRightMain.appendChild(gamedataMapAside3MapRightMainButton);
gamedataMapAside3MapOuter.appendChild(gamedataMapAside3Map);
gamedataMapAside3Map.appendChild(gamedataMapAside3MapPanzoom);
gamedataMapAside3MapPanzoom.appendChild(gamedataMapAside3MapMark);
gamedataMapAside3MapPanzoom.appendChild(gamedataMapAside3MapImage);
gamedataMapAside3MapPanzoom.appendChild(gamedataMapAside3MapCordinateOuter);

gamedataMapOuter.appendChild(gamedataMapAside4);











var gamedataMapAside4Description = document.createElement("div");

var gamedataMapAside4DescriptionSelectorOuter = document.createElement("div");

gamedataMapAside4Description.setAttribute("id","map-description");
gamedataMapAside4DescriptionSelectorOuter.setAttribute("id","map-description-selector-outer");

gamedataMapAside4.appendChild(gamedataMapAside4Description);
gamedataMapAside4Description.appendChild(gamedataMapAside4DescriptionSelectorOuter);


var mapDescriptionTitles = ["Main","Pokémon","Items","Trainers"];

for (var q = 0; q < mapDescriptionTitles.length; q++) {

var gamedataMapAside4DescriptionSelector  = document.createElement("div");
var gamedataMapAside4DescriptionSelectorInput = document.createElement("input");
var gamedataMapAside4DescriptionSelectorLabel = document.createElement("label");

gamedataMapAside4DescriptionSelector.setAttribute("id","map-description-selector");
gamedataMapAside4DescriptionSelectorInput.setAttribute("type","radio");
gamedataMapAside4DescriptionSelectorInput.setAttribute("name","map-description-selector");
gamedataMapAside4DescriptionSelectorInput.setAttribute("id","map-description-selector-" + q);
gamedataMapAside4DescriptionSelectorInput.setAttribute("autocomplete","off");
gamedataMapAside4DescriptionSelectorInput.setAttribute("value",q);
gamedataMapAside4DescriptionSelectorLabel.setAttribute("for","map-description-selector-" + q);
gamedataMapAside4DescriptionSelectorLabel.innerText = mapDescriptionTitles[q];

gamedataMapAside4DescriptionSelectorOuter.appendChild(gamedataMapAside4DescriptionSelector);
gamedataMapAside4DescriptionSelector.appendChild(gamedataMapAside4DescriptionSelectorInput);
gamedataMapAside4DescriptionSelector.appendChild(gamedataMapAside4DescriptionSelectorLabel);

gamedataMapAside4DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);

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


}




var gamedataMapAside4DescriptionMain = document.createElement("base");
var gamedataMapAside4DescriptionMainTop = document.createElement("div");
var gamedataMapAside4DescriptionMainFlavorText = document.createElement("p");
var gamedataMapAside4DescriptionMainBottom = document.createElement("div");
var gamedataMapAside4DescriptionMainArea = document.createElement("div");
var gamedataMapAside4DescriptionMainNavigation = document.createElement("div");
gamedataMapAside4DescriptionMain.setAttribute("id","map-description-main");
gamedataMapAside4DescriptionMain.classList.add("scroll");
gamedataMapAside4DescriptionMain.setAttribute("name","0");
gamedataMapAside4DescriptionMainTop.setAttribute("id","map-description-main-top");
gamedataMapAside4DescriptionMainFlavorText.innerText = "A mysterious mountain village cut into a rock face."
gamedataMapAside4DescriptionMainBottom.setAttribute("id","map-description-main-bottom");
gamedataMapAside4DescriptionMainArea.setAttribute("id","map-description-main-area");
gamedataMapAside4DescriptionMainArea.innerHTML = "<h2>Sub Areas</h2>";
gamedataMapAside4DescriptionMainNavigation.setAttribute("id","map-description-main-navigation");
gamedataMapAside4DescriptionMainNavigation.innerHTML = "<h4>Required for Navigation</h4>";
gamedataMapAside4Description.appendChild(gamedataMapAside4DescriptionMain);
gamedataMapAside4DescriptionMain.appendChild(gamedataMapAside4DescriptionMainTop);
gamedataMapAside4DescriptionMainTop.appendChild(gamedataMapAside4DescriptionMainFlavorText);
gamedataMapAside4DescriptionMain.appendChild(gamedataMapAside4DescriptionMainBottom);
gamedataMapAside4DescriptionMainBottom.appendChild(gamedataMapAside4DescriptionMainArea);
gamedataMapAside4DescriptionMainBottom.appendChild(gamedataMapAside4DescriptionMainNavigation);


var gamedataMapAside4DescriptionPok = document.createElement("base");
gamedataMapAside4DescriptionPok.setAttribute("id","map-description-pok");
gamedataMapAside4DescriptionPok.classList.add("scroll");
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

    gamedataMapAside4DescriptionPokIcon.src = "./media/Images/Pokémon/Icon/PNG/SMUSUM/" + locationPokList[u] + ".png";
    gamedataMapAside4DescriptionPokIcon.setAttribute("title","%poktitle%");
    gamedataMapAside4DescriptionPokLv.innerText = locationPokListLv[u];
    gamedataMapAside4DescriptionPokRate.innerText = locationPokListRate[u];
    gamedataMapAside4DescriptionPokType.src = "./media/Images/Misc/Encounter/HGSS/" + locationPokListType[u] + ".png";
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
gamedataMapAside4DescriptionItem.classList.add("scroll");
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


    gamedataMapAside4DescriptionItemIcon.src = "./media/Images/Item/Sprite/XY/" + locationItemList[u] + ".png";
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
gamedataMapAside4DescriptionTrainerUlTopImgPrevious.src = "./media/Images/Trainer/" + locationTrainerClass[q - 1] + ".png";
gamedataMapAside4DescriptionTrainerUlTopImgPrevious.setAttribute("name",parseInt(q) - 1);
gamedataMapAside4DescriptionTrainerUlTopImg.src = "./media/Images/Trainer/" + locationTrainerClass[q] + ".png";
gamedataMapAside4DescriptionTrainerUlTopImg.setAttribute("name",parseInt(q));
gamedataMapAside4DescriptionTrainerUlTopImgNext.src = "./media/Images/Trainer/" + locationTrainerClass[q + 1] + ".png";
gamedataMapAside4DescriptionTrainerUlTopImgNext.setAttribute("name",parseInt(q) + 1);
gamedataMapAside4DescriptionTrainerUlTopTitle.setAttribute("id","map-description-trainer-top-title");
gamedataMapAside4DescriptionTrainerUlTopTitleName.innerText = locationTrainerList[q];
gamedataMapAside4DescriptionTrainerUlTopTitleValue.innerHTML = '<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" />' + locationTrainerValue[q];
gamedataMapAside4DescriptionTrainerUlContent.setAttribute("id","map-description-trainer-bottom");
gamedataMapAside4DescriptionTrainerUlContent.classList.add("scroll");
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
    var gamedataMapAside4DescriptionTrainerGender = document.createElement("h5");
    var gamedataMapAside4DescriptionTrainerHeldItem = document.createElement("img");
    var gamedataMapAside4DescriptionTrainerMoveOuter = document.createElement("span");

    gamedataMapAside4DescriptionTrainerUlTopCount.innerText = x + "/" + locationTrainerPok.length;
    gamedataMapAside4DescriptionTrainerUlTopTitleCountImg.src = "./media/Images/Misc/FinalDex/TrainerBall" + z + ".png";

    gamedataMapAside4DescriptionTrainerIconOuter.setAttribute("id","map-description-trainer-icon")
    gamedataMapAside4DescriptionTrainerIcon.src = "./media/Images/Pokémon/Sprite/PNG/HGSS/" + locationTrainerPok[q][u] + ".png";
    gamedataMapAside4DescriptionTrainerIcon.setAttribute("title","%poktitle%");
    gamedataMapAside4DescriptionTrainerLvGender.setAttribute("id","map-description-trainer-lvgender");
    gamedataMapAside4DescriptionTrainerLv.innerText = "Lv. " + locationTrainerLv[q][u];
    gamedataMapAside4DescriptionTrainerGender.innerText = locationTrainerGender[q][u];
    gamedataMapAside4DescriptionTrainerHeldItem.src = "./media/Images/Item/Sprite/VIII/" + locationTrainerHeldItem[q][u] + ".png";
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


var trainerundefined = document.querySelectorAll('#map-description-trainer-top-img img[src="./media/Images/Trainer/undefined.png"]');
for (var q = 0; q < trainerundefined.length; q++) {
    trainerundefined[q].style.visibility = "hidden";
    trainerundefined[q].style.pointerevent = "none";
}
var traineritemundefined = document.querySelectorAll('#map-description-trainer-bottom img[src="./media/Images/Item/Sprite/VIII/.png"]');
for (var q = 0; q < traineritemundefined.length; q++) {
    traineritemundefined[q].style.visibility = "hidden";
    traineritemundefined[q].style.pointerevent = "none";
}




var mapSub = ["Locations","Points of Interest"];
var mapsub = ["locations","pointsofinterest"];

for (var u = 0; u < mapOptions.length; u++) {

var x = u + 1;

var gamedataMapAside1OptionsOuter = document.createElement("div");
var gamedataMapAside1Options = document.createElement("div");
gamedataMapAside1OptionsOuter.setAttribute("id","map-options-outer");
gamedataMapAside1OptionsOuter.setAttribute("name",u);
gamedataMapAside1Options.setAttribute("id","map-options");
gamedataMapAside1.appendChild(gamedataMapAside1OptionsOuter);
gamedataMapAside1OptionsOuter.appendChild(gamedataMapAside1Options);


var gamedataMapAside1OptionsSubInput = document.createElement("input");
var gamedataMapAside1OptionsSubLabel = document.createElement("label");
gamedataMapAside1OptionsSubInput.setAttribute("type","radio");
gamedataMapAside1OptionsSubInput.setAttribute("id","map-options-sub-selector-" + x);
gamedataMapAside1OptionsSubInput.setAttribute("name","map-options-sub-selector");
gamedataMapAside1OptionsSubInput.setAttribute("autocomplete","off");
gamedataMapAside1OptionsSubInput.setAttribute("value",u)
gamedataMapAside1OptionsSubLabel.setAttribute("for","map-options-sub-selector-" + x);
gamedataMapAside1OptionsSubLabel.innerHTML = mapSub[u];

gamedataMapAside1OptionsSub.appendChild(gamedataMapAside1OptionsSubInput);
gamedataMapAside1OptionsSub.appendChild(gamedataMapAside1OptionsSubLabel);


gamedataMapAside1OptionsSubInput.addEventListener("click", mapSubOptionsSelector);

function mapSubOptionsSelector() {
    var mapOptionsOuters = document.querySelectorAll('#map-options-outer[name]');
    var mapOptionsOuter = document.querySelectorAll('#map-options-outer[name="' + this.value + '"]');

    if (this.value == "0") {
        gamedataMapAside1OptionsSearch.setAttribute("placeholder","Search Locations...");
        gamedataMapAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Locations...'");
    }
    if (this.value == "1") {
        gamedataMapAside1OptionsSearch.setAttribute("placeholder","Search Points of Interest...");
        gamedataMapAside1OptionsSearch.setAttribute("onblur","this.placeholder='Search Points of Interest...'");
    }

    for (var y = 0; y < mapOptionsOuters.length; y++) {
        mapOptionsOuters[y].style.display = "none";
    }

    for (var y = 0; y < mapOptionsOuter.length; y++) {
        mapOptionsOuter[y].style.display = "block";
    }
}

for (var q = 0; q < mapOptions[u].length; q++) {
    var gamedataMapAside1OptionsInput = document.createElement("input");
    var gamedataMapAside1OptionsLabel = document.createElement("label");
    gamedataMapAside1OptionsInput.setAttribute("type","radio");
    gamedataMapAside1OptionsInput.setAttribute("name","map-options");
    gamedataMapAside1OptionsInput.setAttribute("id","map-" + mapsub[u] + "-options-" + q);
    gamedataMapAside1OptionsInput.setAttribute("autocomplete","off");
    gamedataMapAside1OptionsInput.value = q;
    gamedataMapAside1OptionsInput.alt = u;
    gamedataMapAside1OptionsLabel.setAttribute("for","map-" + mapsub[u] + "-options-" + q);
    gamedataMapAside1OptionsLabel.setAttribute("name","medium");
    gamedataMapAside1OptionsLabel.setAttribute("data-search-name",mapOptions[u][q].toLowerCase());
    gamedataMapAside1OptionsLabel.innerText = mapOptions[u][q];
    gamedataMapAside1Options.appendChild(gamedataMapAside1OptionsInput);
    gamedataMapAside1Options.appendChild(gamedataMapAside1OptionsLabel);

    gamedataMapAside1OptionsInput.addEventListener("click", mapOptionsSelector);
    function mapOptionsSelector() {
            gamedataMapAside2Title.innerText = mapOptions[this.alt][this.value];
            document.querySelector('label[for="map-description-selector-0"]').innerText = mapOptions[this.alt][this.value];

    }
}

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


document.querySelector(".gamedata-nav").firstChild.nextSibling.click();

document.querySelector("#mechanic-options").firstChild.nextSibling.click();
document.querySelector("#exclusive-options").firstChild.nextSibling.click();
document.querySelector("#type-options").firstChild.nextSibling.click();
document.querySelector("#tool-options").firstChild.nextSibling.click();
document.querySelector("#ability-options").firstChild.nextSibling.click();
document.querySelector("#move-options").firstChild.nextSibling.click();
document.querySelector("#item-options").firstChild.nextSibling.click();

document.querySelector("#map-options-sub").firstChild.nextSibling.click();
document.querySelector('#map-options-outer[name="0"]').firstChild.firstChild.nextSibling.click();
document.querySelector('#map-description-selector-outer').firstChild.firstChild.nextSibling.click();

document.querySelector('#map-description-trainer-top-img').firstChild.nextSibling.click();

document.querySelector("#timer-selector").firstChild.nextSibling.click();

}