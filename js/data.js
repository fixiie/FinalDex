var finaldataReferenceAll = [];

var finaldataReferenceDefault = [];
var finaldataPokédexEntryDefault = [];
var finaldataPokédexIDDefault = [];
var finaldataCategoryDefault = [];
var finaldataTypeDefault = [];
var finaldataAbilityDefault = [];
var finaldataLevelingRateDefault = [];
var finaldataEggGroupDefault = [];
var finaldataHatchRateDefault = [];
var finaldataExperienceYieldDefault = [];
var finaldataGenderRatioDefault = [];
var finaldataCatchRateDefault = [];
var finaldataBaseStatsDefault = [];
var finaldataEVYieldDefault = [];
var finaldataHeldItemDefault = [];

var finaldataEvolutionStageDefault = [];
var finaldataEvolutionSpecieDefault = [];
var finaldataEvolutionMethodDefault = [];

var finaldataAbilityAll = [];
var finaldataCatchRateAll = [];
var finaldataHatchRateAll = [];
var finaldataGenderRatioAll = [];
var finaldataEggGroupAll = [];
var finaldataExperienceYieldAll = [];
var finaldataLevelingRateAll = [];
var finaldataBaseStatsAll = [];
var finaldataEVYieldAll = [];
var finaldataHeldItemAll = [];
var finaldataTypeAll = [];

var finaldataLengthAll = [];
var finaldataLengthDefault = [];

var finaldataAreaDefault = [];
var finaldataAreaAll = [];

var finaldataGame = [];

var finaldataTypeChart = [];

var finaldataExclusivePokémon = [];
var finaldataExclusiveItem = [];
var finaldataExclusiveFeature = [];

var dexChecker = [1];

var finaldataLocation = [];

var finaldataLocationConnection = [];
var finaldataLocationDescription = [];
var finaldataLocationSlogan = [];
var finaldataLocationNavigation = [];

var finaldataAbility = [];
var finaldataAbilityFlavor = [];


var finaldataMove = [];
var finaldataMoveDescription = [];
var finaldataMoveTutor = [];
var finaldataMoveMachine = [];
var finaldataMoveAffect = [];
var finaldataMoveOtherMoves = [];
var finaldataMoveAccuracy = [];
var finaldataMovePower = [];
var finaldataMovePP = [];
var finaldataMoveCategory = [];
var finaldataMoveID = [];
var finaldataMoveType = [];

let PokémonMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Pok%C3%A9mon%20Metadata.json';
let PokémonMetadataRequest = new XMLHttpRequest();
PokémonMetadataRequest.open('GET', PokémonMetadataRequestURL);
PokémonMetadataRequest.responseType = 'json';
PokémonMetadataRequest.send();

let GameMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Game%20Metadata.json';
let GameMetadataRequest = new XMLHttpRequest();
GameMetadataRequest.open('GET', GameMetadataRequestURL);
GameMetadataRequest.responseType = 'json';
GameMetadataRequest.send();


let LocationMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Location%20Metadata.json';
let LocationMetadataRequest = new XMLHttpRequest();
LocationMetadataRequest.open('GET', LocationMetadataRequestURL);
LocationMetadataRequest.responseType = 'json';
LocationMetadataRequest.send();

LocationMetadataRequest.onload = function() {
  var LocationMetadata = LocationMetadataRequest.response;

  for (var i = 0; i < LocationMetadata["Reference"].length; i++) {
    if(Object.keys(LocationMetadata["Reference"][i]).includes(JSONPath_Location+"_"+"Name")) {
      finaldataLocation.push(LocationMetadata["Reference"][i]);
    }
  }
  for (var i = 0; i < LocationMetadata["Connecting"].length; i++) {
      finaldataLocationConnection.push(LocationMetadata["Connecting"][i]);
  }
  for (var i = 0; i < LocationMetadata["Description"].length; i++) {
    finaldataLocationDescription.push(LocationMetadata["Description"][i]);
  }
  for (var i = 0; i < LocationMetadata["Slogan"].length; i++) {
    finaldataLocationSlogan.push(LocationMetadata["Slogan"][i]);
  }
  for (var i = 0; i < LocationMetadata["Navigation"].length; i++) {
    finaldataLocationNavigation.push(LocationMetadata["Navigation"][i]);
  }


 
}

if (Generation >= 3 && GameID != 31 && GameID != 32) {
  let AbilityMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Ability%20Metadata.json';
  let AbilityMetadataRequest = new XMLHttpRequest();
  AbilityMetadataRequest.open('GET', AbilityMetadataRequestURL);
  AbilityMetadataRequest.responseType = 'json';
  AbilityMetadataRequest.send();

  AbilityMetadataRequest.onload = function() {
    var AbilityMetadata = AbilityMetadataRequest.response;

    for (var i = 0; i < AbilityMetadata["Reference"].length; i++) {
      if(Object.keys(AbilityMetadata["Reference"][i]).includes(JSONPath_AbilityReference+"_"+"Name")) {
        finaldataAbility.push(AbilityMetadata["Reference"][i]);
      }
    }

    for (var i = 0; i < AbilityMetadata["Flavor"].length; i++) {
      finaldataAbilityFlavor.push(AbilityMetadata["Flavor"][i]);
    }

  }
}

let MoveMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Move%20Metadata.json';
let MoveMetadataRequest = new XMLHttpRequest();
MoveMetadataRequest.open('GET', MoveMetadataRequestURL);
MoveMetadataRequest.responseType = 'json';
MoveMetadataRequest.send();

MoveMetadataRequest.onload = function() {
  var MoveMetadata = MoveMetadataRequest.response;

  for (var i = 0; i < MoveMetadata["Description"].length; i++) {
    finaldataMoveDescription.push(MoveMetadata["Description"][i]);
  }

  for (var i = 0; i < MoveMetadata["Reference"].length; i++) {
    if(finaldataMoveDescription[i][JSONPath_MoveDescription+"_"+"Description"] != undefined) {
      finaldataMove.push(MoveMetadata["Reference"][i]);
    }
  }


  for (var i = 0; i < MoveMetadata["Tutor"].length; i++) {
    finaldataMoveTutor.push(MoveMetadata["Tutor"][i]);
  }
  for (var i = 0; i < MoveMetadata["Machine"].length; i++) {
    finaldataMoveMachine.push(MoveMetadata["Machine"][i]);
  }
  for (var i = 0; i < MoveMetadata["Affect"].length; i++) {
    finaldataMoveAffect.push(MoveMetadata["Affect"][i]);
  }
  for (var i = 0; i < MoveMetadata["Other Moves"].length; i++) {
    finaldataMoveOtherMoves.push(MoveMetadata["Other Moves"][i]);
  }
  for (var i = 0; i < MoveMetadata["Accuracy"].length; i++) {
    finaldataMoveAccuracy.push(MoveMetadata["Accuracy"][i]);
  }
  for (var i = 0; i < MoveMetadata["Power"].length; i++) {
    finaldataMovePower.push(MoveMetadata["Power"][i]);
  }
  for (var i = 0; i < MoveMetadata["PP"].length; i++) {
    finaldataMovePP.push(MoveMetadata["PP"][i]);
  }
  for (var i = 0; i < MoveMetadata["Category"].length; i++) {
    finaldataMoveCategory.push(MoveMetadata["Category"][i]);
  }
  for (var i = 0; i < MoveMetadata["ID"].length; i++) {
    finaldataMoveID.push(MoveMetadata["ID"][i]);
  }
  for (var i = 0; i < MoveMetadata["Type"].length; i++) {
    finaldataMoveType.push(MoveMetadata["Type"][i]);
  }
}


GameMetadataRequest.onload = function() {
    var GameMetadata = GameMetadataRequest.response;

    for (var i = 0; i < GameMetadata["Game"].length; i++) {
      finaldataGame.push(GameMetadata["Game"][i]);
    }
  
    for (var i = 0; i < GameMetadata["Type Chart_"+JSONPath_Typechart].length; i++) {
      finaldataTypeChart.push(GameMetadata["Type Chart_"+JSONPath_Typechart][i]);
    }
  
    for (var i = 0; i < GameMetadata["Exclusive Pokémon"].length; i++) {
      finaldataExclusivePokémon.push(GameMetadata["Exclusive Pokémon"][i]);
    }
    for (var i = 0; i < GameMetadata["Exclusive Item"].length; i++) {
      finaldataExclusiveItem.push(GameMetadata["Exclusive Item"][i]);
    }
    for (var i = 0; i < GameMetadata["Exclusive Feature"].length; i++) {
      finaldataExclusiveFeature.push(GameMetadata["Exclusive Feature"][i]);
    }
    
    config(GameMetadata);
  
  }
  
  PokémonMetadataRequest.onload = function() {

  var PokémonMetadata = PokémonMetadataRequest.response;
  

  const finaldataReference = PokémonMetadata["Reference"];


  for (var i = 0; i < finaldataReference.length; i++) {

      finaldataReferenceAll.push(PokémonMetadata["Reference"][i]);
      finaldataBaseStatsAll.push(PokémonMetadata["Base Stats"][i]);
      finaldataEVYieldAll.push(PokémonMetadata["Effort Value Yield"][i]);
      finaldataAbilityAll.push(PokémonMetadata["Ability"][i]);
      finaldataCatchRateAll.push(PokémonMetadata["Catch Rate"][i]);
      finaldataHatchRateAll.push(PokémonMetadata["Hatch Rate"][i]);
      finaldataGenderRatioAll.push(PokémonMetadata["Gender Ratio"][i]);
      finaldataEggGroupAll.push(PokémonMetadata["Egg Group"][i]);
      finaldataExperienceYieldAll.push(PokémonMetadata["Experience Yield"][i]);
      finaldataLevelingRateAll.push(PokémonMetadata["Leveling Rate"][i]);
      finaldataHeldItemAll.push(PokémonMetadata["Held Item"][i]);
      finaldataAreaAll.push(PokémonMetadata["Area"][i]);
      finaldataTypeAll.push(PokémonMetadata["Type"][i]);

    if (finaldataReference[i].Variant.includes("Default")) {
          finaldataReferenceDefault.push(PokémonMetadata["Reference"][i]);
          finaldataPokédexEntryDefault.push(PokémonMetadata["Pokédex Entry"][i]);
          finaldataPokédexIDDefault.push(PokémonMetadata["Pokédex ID"][i]);
          finaldataCategoryDefault.push(PokémonMetadata["Category"][i]);
          finaldataTypeDefault.push(PokémonMetadata["Type"][i]);
          finaldataAbilityDefault.push(PokémonMetadata["Ability"][i]);
          finaldataLevelingRateDefault.push(PokémonMetadata["Leveling Rate"][i]);
          finaldataEggGroupDefault.push(PokémonMetadata["Egg Group"][i]);
          finaldataHatchRateDefault.push(PokémonMetadata["Hatch Rate"][i]);
          finaldataExperienceYieldDefault.push(PokémonMetadata["Experience Yield"][i]);
          finaldataCatchRateDefault.push(PokémonMetadata["Catch Rate"][i]);
          finaldataGenderRatioDefault.push(PokémonMetadata["Gender Ratio"][i]);
          finaldataBaseStatsDefault.push(PokémonMetadata["Base Stats"][i]);
          finaldataEVYieldDefault.push(PokémonMetadata["Effort Value Yield"][i]);
          finaldataHeldItemDefault.push(PokémonMetadata["Held Item"][i]);
          finaldataAreaDefault.push(PokémonMetadata["Area"][i]);
          finaldataEvolutionStageDefault.push(PokémonMetadata["Evolution Stage"][i]);
          finaldataEvolutionSpecieDefault.push(PokémonMetadata["Evolution Specie"][i]);
          finaldataEvolutionMethodDefault.push(PokémonMetadata["Evolution Method"][i]);
      }
  }
  finaldataBaseStatsAll = undefinedInherit(finaldataBaseStatsAll);
  finaldataEVYieldAll = undefinedInherit(finaldataEVYieldAll);
  finaldataReferenceDefault = undefinedInherit(finaldataReferenceDefault)
  finaldataPokédexEntryDefault = undefinedInherit(finaldataPokédexEntryDefault);
  finaldataPokédexIDDefault = undefinedInherit(finaldataPokédexIDDefault);
  finaldataCategoryDefault = undefinedInherit(finaldataCategoryDefault);
  finaldataTypeDefault = undefinedInherit(finaldataTypeDefault);
  finaldataAbilityDefault = undefinedInherit(finaldataAbilityDefault);
  finaldataLevelingRateDefault = undefinedInherit(finaldataLevelingRateDefault);
  finaldataEggGroupDefault = undefinedInherit(finaldataEggGroupDefault);
  finaldataHatchRateDefault = undefinedInherit(finaldataHatchRateDefault);
  finaldataExperienceYieldDefault = undefinedInherit(finaldataExperienceYieldDefault);
  finaldataGenderRatioDefault = undefinedInherit(finaldataGenderRatioDefault);
  finaldataCatchRateDefault = undefinedInherit(finaldataCatchRateDefault);
  finaldataBaseStatsDefault = undefinedInherit(finaldataBaseStatsDefault);
  finaldataEVYieldDefault = undefinedInherit(finaldataEVYieldDefault);
  finaldataHeldItemDefault = undefinedInherit(finaldataHeldItemDefault);
  finaldataEvolutionStageDefault = undefinedInherit(finaldataEvolutionStageDefault);
  finaldataEvolutionSpecieDefault = undefinedInherit(finaldataEvolutionSpecieDefault);
  finaldataEvolutionMethodDefault = undefinedInherit(finaldataEvolutionMethodDefault);
  //finaldataAbilityAll = undefinedInherit(finaldataAbilityAll);
  finaldataCatchRateAll = undefinedInherit(finaldataCatchRateAll);
  finaldataHatchRateAll = undefinedInherit(finaldataHatchRateAll);
  finaldataGenderRatioAll = undefinedInherit(finaldataGenderRatioAll);
  finaldataEggGroupAll = undefinedInherit(finaldataEggGroupAll);
  finaldataExperienceYieldAll = undefinedInherit(finaldataExperienceYieldAll);
  finaldataLevelingRateAll = undefinedInherit(finaldataLevelingRateAll);
  finaldataBaseStatsAll = undefinedInherit(finaldataBaseStatsAll);
  finaldataEVYieldAll = undefinedInherit(finaldataEVYieldAll);
  finaldataHeldItemAll = undefinedInherit(finaldataHeldItemAll);
  finaldataTypeAll = undefinedInherit(finaldataTypeAll);

  introduction();

  createNav();
  createGameData();
  createContain();
  modalPokdata();
  modalGamedata();
  modalReset();

  defaults();
  eventListener();

  memoryCheckbox();
  memoryRadio();
  memoryRange();

  load();

}



function defaults() {
  count();
  search();
  sort();
  countdown();
  stopwatch();
  theme();
  dropdown();
  filter();
  typeSwitch("NORMAL");
  RNG();

  document.querySelector("#imgtype").firstChild.click();
  document.querySelector(".gamedata-nav").firstChild.nextSibling.click();
  document.querySelector(".mechanic-options-sub").firstChild.nextSibling.click();
  document.querySelector("#mechanic-options-outer[name='0']").firstChild.firstChild.nextSibling.click();
  document.querySelector("#exclusive-options").firstChild.nextSibling.click();
  document.querySelector("#type-options").firstChild.nextSibling.click();
  document.querySelector("#tool-options").firstChild.nextSibling.click();
  if (Generation >= 3 && GameID != 31 && GameID != 32) {
    document.querySelector("#ability-options").firstChild.nextSibling.click();
  }
  document.querySelector("#move-options").firstChild.nextSibling.click();
  document.querySelector("#item-options").firstChild.nextSibling.click();
  //document.querySelector("#map-options-outer[name='0']").firstChild.firstChild.nextSibling.click();
  document.querySelector(".map-description-selector-outer label[for='map-description-selector-0']").click();
  document.querySelector('#map-description-trainer-top-img').firstChild.nextSibling.click();
  document.querySelector("#timer-selector").firstChild.nextSibling.click();
}



function eventListener() {
    var containLabel = document.querySelectorAll('#contain-inner label');
    for (var i = 0; i < containLabel.length; i++) {
        containLabel[i].addEventListener("click", count);
    }
    var dexSwitchLabel = document.querySelectorAll('#dexswitch label');
    for (var i = 0; i < dexSwitchLabel.length; i++) {
        dexSwitchLabel[i].addEventListener("click", count);
    }
    var filterLabel = document.querySelectorAll('#filter-outer label');
    for (var i = 0; i < filterLabel.length; i++) {
        filterLabel[i].addEventListener("click", count);
    }
    document.getElementById('showall').addEventListener("click", count);
}

// temp data

var fdatagamedataCatching = "<p>Throwing a Poké Ball on a wild Pokémon has a chance to capture it, if thrown on a Pokémon that already has a trainer the Poké Ball will fail and disappear.</p><br><h3>Catch Rate</h3><p>Each species of Pokémon each has a set Catch Rate determining the difficulty of catching it.<br><br>A Pokémon Catch Rate can be modified with any of the following methods:</p><li>Health relative to its full health (⅓ greatest increase)</li><li>Type of Pokéball</li><li>Status Condition (Asleep or Frozen greatest increase)</li>";
var fdatagamedataExperience = "<p>Any Pokémon that takes part in the battle earns Experience split among them when the opposing Pokémon faints. A Pokémon can also gain Experience from Candies or Catching a Pokémon.<br><br><br>The amount of experience gained from a battle depends on:</p><li>Opposing Pokémon's Level</li><li>Opposing Pokémon's Experience Yield</li><br><br><p>A Pokémon may gain a boosted amount of Experience due to the following reasons:</p><li>If the Pokémon was Traded</li><li>If the Player is in a Trainer Battle</li><li>If the Pokémon is holding a Lucky Egg</li><li>If the Pokémon has high enough Affection</li><li>If a Pass Power is active</li><li>If the Pokémon is past the level it would evolve but has not</li><br><br><p>The amount of Experience required for a level up is different between species and depends on its Leveling Rate.</p>";
var fdatagamedataEvolution = "<p>The three most common methods of evolution consists of:</p><li>Level Up</li><li>Using an Item</li><li>Trading</li><br><p>Evolution by Level Up can be triggered by gaining experience in battle or by using a Rare Candy. Leveling up in a Pokémon Day Care will not trigger evolution.</p><p>Pressing B Button during evolution cancels the whole process.</p>";
var fdatagamedataBreeding = "<p>Pokémon can be bred by leaving two compatible Pokémon at the Pokémon Nursery.</p><p>Two Pokémon are compatible if:</p><li>They are of the same Species or have an Egg Group in common</li><li>They are Opposite Gender</li><br><br><p>Pokémon in the Undiscovered Egg Group cannot breed and Ditto cannot breed with itself. An exception is that as long as one of them is Ditto, even if the other parent is male or genderless the Pokémon can still be bred.</p><br><p>When there are two compatible Pokémon in the Nursery on Route 5 or in Bridge Field, the Nursery Lady will after some time hand the trainer an Egg.</p><p>After taking enough steps, the Egg will hatch into a level 1 first-stage Pokémon of the female species. The Amount of steps required depends on the hatching Pokémon’s Egg Cycle, with each species of Pokémon having different Egg Cycles.</p>";
var fdatagamedataTrade = "<p>Players can Trade Pokémon with each other by visiting any Pokémon Center.</p><p>A Pokémon cannot be traded until:</p><li>The player has received the Dynamax Band from Professor Magnolia on Route 2</li><br><h3>Pokémon HOME</h3><p>Pokémon HOME is an application on iOS, Android and the Nintendo Switch system used for storing Pokémon.</p><p>It allows for one-way transfer with the Nintendo 3DS’s Pokémon Bank and two-way transfer with Let’s Go Pikachu, Let’s Go Eevee, Sword and Shield.</p><br><h3>Global Trade System</h3><p>The Global Trade System is used for online trading with Sword or Shield.</p><p>It can be accessed via the Pokémon HOME mobile app.</p><p>A Pokémon may either be put up for trade in exchange for any desired Pokémon recorded in the Pokédex or to be traded with a Pokémon that has already been put up for trade.</p><p>A Pokémon that is put up for trade may after an extended period of time flee.</p><p>A Pokémon may either be put up for trade in exchange for any desired Pokémon or to be traded with a Pokémon that has already been put up for trade.</p><p>A Pokémon is unavailable for trade if:</p><li>It has a Classic, Premiere or National Ribbon</li><li>It has a Classic or Premiere Ribbon</li><li>It carries any Mega Stone</li><li>It is a Mythical Pokémon</li><p>Due to the Wi-Fi shutdown, this feature is no longer officially supported as of May 20, 2014. Unofficial support exists through the Wiimmfi service.</p><h3>Surprise Trade</h3><p>Surprise Trading is a feature used for randomly trading with Sword or Shield. It can be accessed via the Y-Comm Menu.</p>";
var fdatagamedataTypeEffectiveness = "<p>A Pokémon has either one or two types depending on its species which has its own set of type resistances, weaknesses and/or immunities.</p><p>Types are affected differently depending on the type of the move used by the opposing Pokémon.</p><li>If the type of a move is <strong>super effective</strong> against a type of its target, the damage done is <strong>doubled</strong>.</li><li>If the type of a move is <strong>not very effective</strong> against a type of its target, the damage done is <strong>halved</strong>.</li><li>If the type of a move is <strong>not effective</strong> against a type of its target, the move will deal <strong>no damage</strong>.</li><p>For Pokémon that have two types, overall type effectiveness is the combined effectiveness against each of its types.</p>";
var fdatagamedataStatusConditions = "<p>The non-volatile is the most common kind of status and consists of Burn, Freeze, Paralysis, Poison and Sleep. A Pokémon cannot gain another non-volatile status condition if it's already afflicted by one.</p><h3>Burn</h3><p>The burn condition <sup>BRN</sup> inflicts 1/16 of its maximum HP damage every turn and halves the damage dealt by the Pokémon's physical moves. Fire-type Pokémon are unable to get burned.</p><h3>Freeze</h3><p>The freeze condition <sup>FRZ</sup> causes a Pokémon to be unable to use moves. A frozen Pokémon has a 20% chance after each turn for the effect to end, alternatively if a frozen Pokémon is hit by a Fire-type move the freeze condition ends. A Pokémon is unable to be frozen during harsh sunlight.</p><h3>Paralysis</h3><p>The paralysis condition <sup>PAR</sup> reduces the Pokémon's Speed stat by 50% and causes it to have a 25% chance of being unable to use a move. Electric-type Pokémon are unable to get paralyzed.</p><h3>Poison</h3><p>The poison condition <sup>PSN</sup> inflicts 1/8 of its maximum HP damage every turn. The bad poison condition instead inflicts the same damage every turn but with the amount increasing by 1/8 of its maximum HP after each turn. If the Pokémon switches out with the bad poison condition the damage increase is reset to its original state. The bad poison returns to normal poison once the battle ends. Steel-type and Poison-type Pokémon are unable to get poisoned.</p><h3>Sleep</h3><p>The sleep condition <sup>SLP</sup> causes a Pokémon to be unable to use moves. The sleep lasts for a randomly chosen duration between 1-3 turns. The sleep counter does not reset upon switching out the Pokémon.</p>";
var fdatagamedataMoves = "<p>Moves are techniques Pokémon learn to use against opposing Pokémon in battles.</p><p>There are four main methods of acquiring moves on a Pokémon:</p><li>by leveling up</li><li>Technical Machines <sup>TM</sup> or Hidden Machines <sup>HM</sup></li><li>taught by Move Tutors</li><li>taught when evolving</li><br><p>Each Pokémon has a set of moves that they can learn, but only between one to four moves can be learned at a time. In order to learn new moves once four have been learned, it must forget one of its old moves.</p><p>Some moves cannot be forgotten such as moves learned by HMs without the help of the Move Deleter. Forgotten moves or moves learned at earlier levels may be acquired through the Move Reminder.</p><br><p>Each move typically has three main factors: Power, Accuracy and PP.</p><li>The strength of a move is measured by its Power and/or special trait of the move. If the type of the move used is equal to any of the Pokémon’s type the move receives Same-type attack bonus <sup>STAB</sup> and the move’s damage is increased by 50%.</li><li>The accuracy reflects the probability of the move being successful as a percentage.</li><li>The number of times the move can be used is limited by the move's Power Points <sup>PP</sup>, which when reached 0 becomes unusable. If all available moves have 0 PP and the Pokémon attacks it will instead use Struggle.</li>";
var fdatagamedataStats = "<p>Each species of Pokémon has a set base stat value which is generally how Pokémon are ranked stronger or weaker.</p><p>Each Pokémon has six main stats:</p><li>The Hit Point <sup>HP</sup> stat determines how much damage the Pokémon can receive before fainting.</li><li>The Attack stat determines how much damage a Pokémon deals when using a physical move.</li><li>The Defense stat determines how much damage the Pokémon receives when it is hit with a physical move.</li><li>The Special Attack <sup>Sp. Atk</sup> stat determines how much damage the Pokémon deals when using a special move.</li><li>The Special Defense <sup>Sp. Def</sup> stat determines how much damage the Pokémon receives when it is hit with a special move.</li><li>The Speed stat determines the order of Pokémon that can act in battle, in the case that two Pokémon have the same Speed, one of them will randomly go first.</li><h3>Individual Values</h3><p>Individual Values <sup>IV</sup> are gamedata stats set for each main stat once a Pokémon is encountered. A Pokémon's IVs can either increase the Pokémon's stats by a lot or not much at all which is randomly set.</p><p>A Pokémon's IVs are not visible In-Game although it is possible to get the Pokémon's IVs evaluated by the Stats Judge.</p><h3>Effort Values</h3><p>Effort Values <sup>EV</sup> are gamedata stats gained by defeating Pokémon in battle, based on the species of the Pokémon defeated EVs are assigned. Each Pokémon species has a set EV stat they assign upon defeat.</p><p>The stats gained from EVs are applied immediately after battle.</p><p>A Pokémon have a maximum amount of EVs it can gain total and per stat.</p><p>A Pokémon's EVs are not visible In-Game.</p>";
var fdatagamedataShiny = "<p>A Pokémon in rare situations are able to appear in their Shiny forms. Any Pokémon either encountered in the wild or bred has a 1/4096 chance of being Shiny.</p><p>The odds of a Shiny wild encounter is increased by the amount of times the Pokémon species have been battled. After reaching 500 encounters with the Pokémon the odds of the encounter being Shiny is at a maximum of 1/683.</p><h3>Masuda Method</h3><p>When breeding two Pokémon which originated from games with different languages to each other the odds of the Pokémon hatched being Shiny is increased to 1/683.</p>";

var mechanicTitles1 = ["Catching","Experience","Evolution","Breeding","Trade","Type Effectiveness","Status Conditions","Moves","Stats","Shiny"];
var mechanicTitles2 = ["Roaming","C-Gear","Hidden Grottoes","Battle Subway","Battle Institute","Pokémon World Championship"];


var mechanicContent1 = [fdatagamedataCatching,fdatagamedataExperience,fdatagamedataEvolution,fdatagamedataBreeding,fdatagamedataTrade,fdatagamedataTypeEffectiveness,fdatagamedataStatusConditions,fdatagamedataMoves,fdatagamedataStats,fdatagamedataShiny];
var mechanicContent2 = ["","","","","",""];

var mechanicOptionsTitle = [mechanicTitles1,mechanicTitles2];
var mechanicOptions = [mechanicContent1,mechanicContent2];

var abilityOptionsTitle = ["Cacophony","Stench","Drizzle","Speed Boost","Battle Armor","Sturdy","Damp","Limber","Sand Veil","Static","Volt Absorb","Water Absorb","Oblivious","Cloud Nine","Compound Eyes","Insomnia","Color Change","Immunity","Flash Fire","Shield Dust","Own Tempo","Suction Cups","Intimidate","Shadow Tag","Rough Skin","Wonder Guard","Levitate","Effect Spore","Synchronize","Clear Body","Natural Cure","Lightning Rod","Serene Grace","Swift Swim","Chlorophyll","Illuminate","Trace","Huge Power","Poison Point","Inner Focus","Magma Armor","Water Veil","Magnet Pull","Soundproof","Rain Dish","Sand Stream","Pressure","Thick Fat","Early Bird","Flame Body","Run Away","Keen Eye","Hyper Cutter","Pickup","Truant","Hustle","Cute Charm","Plus","Minus","Forecast","Sticky Hold","Shed Skin","Guts","Marvel Scale","Liquid Ooze","Overgrow","Blaze","Torrent","Swarm","Rock Head","Drought","Arena Trap","Vital Spirit","White Smoke","Pure Power","Shell Armor","Air Lock","Tangled Feet","Motor Drive","Rivalry","Steadfast","Snow Cloak","Gluttony","Anger Point","Unburden","Heatproof","Simple","Dry Skin","Download","Iron Fist","Poison Heal","Adaptability","Skill Link","Hydration","Solar Power","Quick Feet","Normalize","Sniper","Magic Guard","No Guard","Stall","Technician","Leaf Guard","Klutz","Mold Breaker","Super Luck","Aftermath","Anticipation","Forewarn","Unaware","Tinted Lens","Filter","Slow Start","Scrappy","Storm Drain","Ice Body","Solid Rock","Snow Warning","Honey Gather","Frisk","Reckless","Multitype","Flower Gift","Bad Dreams","Pickpocket","Sheer Force","Contrary","Unnerve","Defiant","Defeatist","Cursed Body","Healer","Friend Guard","Weak Armor","Heavy Metal","Light Metal","Multiscale","Toxic Boost","Flare Boost","Harvest","Telepathy","Moody","Overcoat","Poison Touch","Regenerator","Big Pecks","Sand Rush","Wonder Skin","Analytic","Illusion","Imposter","Infiltrator","Mummy","Moxie","Justified","Rattled","Magic Bounce","Sap Sipper","Prankster","Sand Force","Iron Barbs","Zen Mode","Victory Star","Turboblaze","Teravolt","Aroma Veil","Flower Veil","Cheek Pouch","Protean","Fur Coat","Magician","Bulletproof","Competitive","Strong Jaw","Refrigerate","Sweet Veil","Stance Change","Gale Wings","Mega Launcher","Grass Pelt","Symbiosis","Tough Claws","Pixilate","Gooey","Aerilate","Parental Bond","Dark Aura","Fairy Aura","Aura Break","Primordial Sea","Desolate Land","Delta Stream","Stamina","Wimp Out","Emergency Exit","Water Compaction","Merciless","Shields Down","Stakeout","Water Bubble","Steelworker","Berserk","Slush Rush","Long Reach","Liquid Voice","Triage","Galvanize","Surge Surfer","Schooling","Disguise","Battle Bond","Power Construct","Corrosion","Comatose","Queenly Majesty","Innards Out","Dancer","Battery","Fluffy","Dazzling","Soul-Heart","Tangling Hair","Receiver","Power of Alchemy","Beast Boost","RKS System","Electric Surge","Psychic Surge","Misty Surge","Grassy Surge","Full Metal Body","Shadow Shield","Prism Armor","Neuroforce","Intrepid Sword","Dauntless Shield","Libero","Ball Fetch","Cotton Down","Propeller Tail","Mirror Armor","Gulp Missile","Stalwart","Steam Engine","Punk Rock","Sand Spit","Ice Scales","Ripen","Ice Face","Power Spot","Mimicry","Screen Cleaner","Steely Spirit","Perish Body","Wandering Spirit","Gorilla Tactics","Neutralizing Gas","Pastel Veil","Hunger Switch","Quick Draw","Unseen Fist","Curious Medicine","Transistor","Dragon's Maw","Chilling Neigh","Grim Neigh","As One"];
var abilityOptions = [];

var moveOptionsTitle = ["Pound","Karate Chop*","Double Slap","Comet Punch","Mega Punch","Pay Day","Fire Punch","Ice Punch","Thunder Punch","Scratch","Vise Grip","Guillotine","Razor Wind","Swords Dance","Cut","Gust*","Wing Attack","Whirlwind","Fly","Bind","Slam","Vine Whip","Stomp","Double Kick","Mega Kick","Jump Kick","Rolling Kick","Sand Attack*","Headbutt","Horn Attack","Fury Attack","Horn Drill","Tackle","Body Slam","Wrap","Take Down","Thrash","Double-Edge","Tail Whip","Poison Sting","Twineedle","Pin Missile","Leer","Bite*","Growl","Roar","Sing","Supersonic","Sonic Boom","Disable","Acid","Ember","Flamethrower","Mist","Water Gun","Hydro Pump","Surf","Ice Beam","Blizzard","Psybeam","Bubble Beam","Aurora Beam","Hyper Beam","Peck","Drill Peck","Submission","Low Kick","Counter","Seismic Toss","Strength","Absorb","Mega Drain","Leech Seed","Growth","Razor Leaf","Solar Beam","Poison Powder","Stun Spore","Sleep Powder","Petal Dance","String Shot","Dragon Rage","Fire Spin","Thunder Shock","Thunderbolt","Thunder Wave","Thunder","Rock Throw","Earthquake","Fissure","Dig","Toxic","Confusion","Psychic","Hypnosis","Meditate","Agility","Quick Attack","Rage","Teleport","Night Shade","Mimic","Screech","Double Team","Recover","Harden","Minimize","Smokescreen","Confuse Ray","Withdraw","Defense Curl","Barrier","Light Screen","Haze","Reflect","Focus Energy","Bide","Metronome","Mirror Move","Self-Destruct","Egg Bomb","Lick","Smog","Sludge","Bone Club","Fire Blast","Waterfall","Clamp","Swift","Skull Bash","Spike Cannon","Constrict","Amnesia","Kinesis","Soft-Boiled","High Jump Kick","Glare","Dream Eater","Poison Gas","Barrage","Leech Life","Lovely Kiss","Sky Attack","Transform","Bubble","Dizzy Punch","Spore","Flash","Psywave","Splash","Acid Armor","Crabhammer","Explosion","Fury Swipes","Bonemerang","Rest","Rock Slide","Hyper Fang","Sharpen","Conversion","Tri Attack","Super Fang","Slash","Substitute","Struggle","Sketch","Triple Kick","Thief","Spider Web","Mind Reader","Nightmare","Flame Wheel","Snore","Curse*","Flail","Conversion 2","Aeroblast","Cotton Spore","Reversal","Spite","Powder Snow","Protect","Mach Punch","Scary Face","Feint Attack","Sweet Kiss*","Belly Drum","Sludge Bomb","Mud-Slap","Octazooka","Spikes","Zap Cannon","Foresight","Destiny Bond","Perish Song","Icy Wind","Detect","Bone Rush","Lock-On","Outrage","Sandstorm","Giga Drain","Endure","Charm*","Rollout","False Swipe","Swagger","Milk Drink","Spark","Fury Cutter","Steel Wing","Mean Look","Attract","Sleep Talk","Heal Bell","Return","Present","Frustration","Safeguard","Pain Split","Sacred Fire","Magnitude","Dynamic Punch","Megahorn","Dragon Breath","Baton Pass","Encore","Pursuit","Rapid Spin","Sweet Scent","Iron Tail","Metal Claw","Vital Throw","Morning Sun","Synthesis","Moonlight*","Hidden Power","Cross Chop","Twister","Rain Dance","Sunny Day","Crunch","Mirror Coat","Psych Up","Extreme Speed","Ancient Power","Shadow Ball","Future Sight","Rock Smash","Whirlpool","Beat Up","Fake Out","Uproar","Stockpile","Spit Up","Swallow","Heat Wave","Hail","Torment","Flatter","Will-O-Wisp","Memento","Facade","Focus Punch","Smelling Salts","Follow Me","Nature Power","Charge","Taunt","Helping Hand","Trick","Role Play","Wish","Assist","Ingrain","Superpower","Magic Coat","Recycle","Revenge","Brick Break","Yawn","Knock Off","Endeavor","Eruption","Skill Swap","Imprison","Refresh","Grudge","Snatch","Secret Power","Dive","Arm Thrust","Camouflage","Tail Glow","Luster Purge","Mist Ball","Feather Dance","Teeter Dance","Blaze Kick","Mud Sport","Ice Ball","Needle Arm","Slack Off","Hyper Voice","Poison Fang","Crush Claw","Blast Burn","Hydro Cannon","Meteor Mash","Astonish","Weather Ball","Aromatherapy","Fake Tears","Air Cutter","Overheat","Odor Sleuth","Rock Tomb","Silver Wind","Metal Sound","Grass Whistle","Tickle","Cosmic Power","Water Spout","Signal Beam","Shadow Punch","Extrasensory","Sky Uppercut","Sand Tomb","Sheer Cold","Muddy Water","Bullet Seed","Aerial Ace","Icicle Spear","Iron Defense","Block","Howl","Dragon Claw","Frenzy Plant","Bulk Up","Bounce","Mud Shot","Poison Tail","Covet","Volt Tackle","Magical Leaf","Water Sport","Calm Mind","Leaf Blade","Dragon Dance","Rock Blast","Shock Wave","Water Pulse","Doom Desire","Psycho Boost","Roost","Gravity","Miracle Eye","Wake-Up Slap","Hammer Arm","Gyro Ball","Healing Wish","Brine","Natural Gift","Feint","Pluck","Tailwind","Acupressure","Metal Burst","U-turn","Close Combat","Payback","Assurance","Embargo","Fling","Psycho Shift","Trump Card","Heal Block","Wring Out","Power Trick","Gastro Acid","Lucky Chant","Me First","Copycat","Power Swap","Guard Swap","Punishment","Last Resort","Worry Seed","Sucker Punch","Toxic Spikes","Heart Swap","Aqua Ring","Magnet Rise","Flare Blitz","Force Palm","Aura Sphere","Rock Polish","Poison Jab","Dark Pulse","Night Slash","Aqua Tail","Seed Bomb","Air Slash","X-Scissor","Bug Buzz","Dragon Pulse","Dragon Rush","Power Gem","Drain Punch","Vacuum Wave","Focus Blast","Energy Ball","Brave Bird","Earth Power","Switcheroo","Giga Impact","Nasty Plot","Bullet Punch","Avalanche","Ice Shard","Shadow Claw","Thunder Fang","Ice Fang","Fire Fang","Shadow Sneak","Mud Bomb","Psycho Cut","Zen Headbutt","Mirror Shot","Flash Cannon","Rock Climb","Defog","Trick Room","Draco Meteor","Discharge","Lava Plume","Leaf Storm","Power Whip","Rock Wrecker","Cross Poison","Gunk Shot","Iron Head","Magnet Bomb","Stone Edge","Captivate","Stealth Rock","Grass Knot","Chatter","Judgment","Bug Bite","Charge Beam","Wood Hammer","Aqua Jet","Attack Order","Defend Order","Heal Order","Head Smash","Double Hit","Roar of Time","Spacial Rend","Lunar Dance","Crush Grip","Magma Storm","Dark Void","Seed Flare","Ominous Wind","Shadow Force","Hone Claws","Wide Guard","Guard Split","Power Split","Wonder Room","Psyshock","Venoshock","Autotomize","Rage Powder","Telekinesis","Magic Room","Smack Down","Storm Throw","Flame Burst","Sludge Wave","Quiver Dance","Heavy Slam","Synchronoise","Electro Ball","Soak","Flame Charge","Coil","Low Sweep","Acid Spray","Foul Play","Simple Beam","Entrainment","After You","Round","Echoed Voice","Chip Away","Clear Smog","Stored Power","Quick Guard","Ally Switch","Scald","Shell Smash","Heal Pulse","Hex","Sky Drop","Shift Gear","Circle Throw","Incinerate","Quash","Acrobatics","Reflect Type","Retaliate","Final Gambit","Bestow","Inferno","Water Pledge","Fire Pledge","Grass Pledge","Volt Switch","Struggle Bug","Bulldoze","Frost Breath","Dragon Tail","Work Up","Electroweb","Wild Charge","Drill Run","Dual Chop","Heart Stamp","Horn Leech","Sacred Sword","Razor Shell","Heat Crash","Leaf Tornado","Steamroller","Cotton Guard","Night Daze","Psystrike","Tail Slap","Hurricane","Head Charge","Gear Grind","Searing Shot","Techno Blast","Relic Song","Secret Sword","Glaciate","Bolt Strike","Blue Flare","Fiery Dance","Freeze Shock","Ice Burn","Snarl","Icicle Crash","V-create","Fusion Flare","Fusion Bolt","Flying Press","Mat Block","Belch","Rototiller","Sticky Web","Fell Stinger","Phantom Force","Trick-or-Treat","Noble Roar","Ion Deluge","Parabolic Charge","Forest's Curse","Petal Blizzard","Freeze-Dry","Disarming Voice","Parting Shot","Topsy-Turvy","Draining Kiss","Crafty Shield","Flower Shield","Grassy Terrain","Misty Terrain","Electrify","Play Rough","Fairy Wind","Moonblast","Boomburst","Fairy Lock","King's Shield","Play Nice","Confide","Diamond Storm","Steam Eruption","Hyperspace Hole","Water Shuriken*","Mystical Fire","Spiky Shield","Aromatic Mist","Eerie Impulse","Venom Drench","Powder","Geomancy","Magnetic Flux","Happy Hour","Electric Terrain","Dazzling Gleam","Celebrate","Hold Hands","Baby-Doll Eyes","Nuzzle","Hold Back","Infestation","Power-Up Punch","Oblivion Wing","Thousand Arrows","Thousand Waves","Land's Wrath","Light of Ruin","Origin Pulse","Precipice Blades","Dragon Ascent","Hyperspace Fury","Breakneck Blitz","Breakneck Blitz","All-Out Pummeling","All-Out Pummeling","Supersonic Skystrike","Supersonic Skystrike","Acid Downpour","Acid Downpour","Tectonic Rage","Tectonic Rage","Continental Crush","Continental Crush","Savage Spin-Out","Savage Spin-Out","Never-Ending Nightmare","Never-Ending Nightmare","Corkscrew Crash","Corkscrew Crash","Inferno Overdrive","Inferno Overdrive","Hydro Vortex","Hydro Vortex","Bloom Doom","Bloom Doom","Gigavolt Havoc","Gigavolt Havoc","Shattered Psyche","Shattered Psyche","Subzero Slammer","Subzero Slammer","Devastating Drake","Devastating Drake","Black Hole Eclipse","Black Hole Eclipse","Twinkle Tackle","Twinkle Tackle","Catastropika","Shore Up","First Impression","Baneful Bunker","Spirit Shackle","Darkest Lariat","Sparkling Aria","Ice Hammer","Floral Healing","High Horsepower","Strength Sap","Solar Blade","Leafage","Spotlight","Toxic Thread","Laser Focus","Gear Up","Throat Chop","Pollen Puff","Anchor Shot","Psychic Terrain","Lunge","Fire Lash","Power Trip","Burn Up","Speed Swap","Smart Strike","Purify","Revelation Dance","Core Enforcer","Trop Kick","Instruct","Beak Blast","Clanging Scales","Dragon Hammer","Brutal Swing","Aurora Veil","Sinister Arrow Raid","Malicious Moonsault","Oceanic Operetta","Guardian of Alola","Soul-Stealing 7-Star Strike","Stoked Sparksurfer","Pulverizing Pancake","Extreme Evoboost","Genesis Supernova","Shell Trap","Fleur Cannon","Psychic Fangs","Stomping Tantrum","Shadow Bone","Accelerock","Liquidation","Prismatic Laser","Spectral Thief","Sunsteel Strike","Moongeist Beam","Tearful Look","Zing Zap","Nature's Madness","Multi-Attack","10,000,000 Volt Thunderbolt","Mind Blown","Plasma Fists","Photon Geyser","Light That Burns the Sky","Searing Sunraze Smash","Menacing Moonraze Maelstrom","Let's Snuggle Forever","Splintered Stormshards","Clangorous Soulblaze","Zippy Zap","Splishy Splash","Floaty Fall","Pika Papow","Bouncy Bubble","Buzzy Buzz","Sizzly Slide","Glitzy Glow","Baddy Bad","Sappy Seed","Freezy Frost","Sparkly Swirl","Veevee Volley","Double Iron Bash","Max Guard","Dynamax Cannon","Snipe Shot","Jaw Lock","Stuff Cheeks","No Retreat","Tar Shot","Magic Powder","Dragon Darts","Teatime","Octolock","Bolt Beak","Fishious Rend","Court Change","Max Flare","Max Flutterby","Max Lightning","Max Strike","Max Knuckle","Max Phantasm","Max Hailstorm","Max Ooze","Max Geyser","Max Airstream","Max Starfall","Max Wyrmwind","Max Mindstorm","Max Rockfall","Max Quake","Max Darkness","Max Overgrowth","Max Steelspike","Clangorous Soul","Body Press","Decorate","Drum Beating","Snap Trap","Pyro Ball","Behemoth Blade","Behemoth Bash","Aura Wheel","Breaking Swipe","Branch Poke","Overdrive","Apple Acid","Grav Apple","Spirit Break","Strange Steam","Life Dew","Obstruct","False Surrender","Meteor Assault","Eternabeam","Steel Beam","Expanding Force","Steel Roller","Scale Shot","Meteor Beam","Shell Side Arm","Misty Explosion","Grassy Glide","Rising Voltage","Terrain Pulse","Skitter Smack","Burning Jealousy","Lash Out","Poltergeist","Corrosive Gas","Coaching","Flip Turn","Triple Axel","Dual Wingbeat","Scorching Sands","Jungle Healing","Wicked Blow","Surging Strikes","Thunder Cage","Dragon Energy","Freezing Glare","Fiery Wrath","Thunderous Kick","Glacial Lance","Astral Barrage","Eerie Spell"];;
var moveOptions = [];

var itemOptionsTitle = ["Master Ball","Ultra Ball","Great Ball","Poké Ball","Safari Ball","Net Ball","Dive Ball","Nest Ball","Repeat Ball","Timer Ball","Luxury Ball","Premier Ball","Dusk Ball","Heal Ball","Quick Ball","Cherish Ball","Potion","Antidote","Burn Heal","Ice Heal","Awakening","Paralyze Heal","Full Restore","Max Potion","Hyper Potion","Super Potion","Full Heal","Revive","Max Revive","Fresh Water","Soda Pop","Lemonade","Moomoo Milk","Energy Powder","Energy Root","Heal Powder","Revival Herb","Ether","Max Ether","Elixir","Max Elixir","Lava Cookie","Berry Juice","Sacred Ash","HP Up","Protein","Iron","Carbos","Calcium","Rare Candy","PP Up","Zinc","PP Max","Old Gateau","Guard Spec.","Dire Hit","X Attack","X Defense","X Speed","X Accuracy","X Sp. Atk","X Sp. Def","Poké Doll","Fluffy Tail","Blue Flute","Yellow Flute","Red Flute","Black Flute","White Flute","Shoal Salt","Shoal Shell","Red Shard","Blue Shard","Yellow Shard","Green Shard","Super Repel","Max Repel","Escape Rope","Repel","Sun Stone","Moon Stone","Fire Stone","Thunder Stone","Water Stone","Leaf Stone","Tiny Mushroom","Big Mushroom","Pearl","Big Pearl","Stardust","Star Piece","Nugget","Heart Scale","Honey","Growth Mulch","Damp Mulch","Stable Mulch","Gooey Mulch","Root Fossil","Claw Fossil","Helix Fossil","Dome Fossil","Old Amber","Armor Fossil","Skull Fossil","Rare Bone","Shiny Stone","Dusk Stone","Dawn Stone","Oval Stone","Odd Keystone","Griseous Orb","Tea","","Autograph","Douse Drive","Shock Drive","Burn Drive","Chill Drive","","Pokémon Box","Medicine Pocket","TM Case","Candy Jar","Power-Up Pocket","Clothing Trunk","Catching Pocket","Battle Pocket","","","","","","Sweet Heart","Adamant Orb","Lustrous Orb","Greet Mail","Favored Mail","RSVP Mail","Thanks Mail","Inquiry Mail","Like Mail","Reply Mail","Bridge Mail S","Bridge Mail D","Bridge Mail T","Bridge Mail V","Bridge Mail M","Cheri Berry","Chesto Berry","Pecha Berry","Rawst Berry","Aspear Berry","Leppa Berry","Oran Berry","Persim Berry","Lum Berry","Sitrus Berry","Figy Berry","Wiki Berry","Mago Berry","Aguav Berry","Iapapa Berry","Razz Berry","Bluk Berry","Nanab Berry","Wepear Berry","Pinap Berry","Pomeg Berry","Kelpsy Berry","Qualot Berry","Hondew Berry","Grepa Berry","Tamato Berry","Cornn Berry","Magost Berry","Rabuta Berry","Nomel Berry","Spelon Berry","Pamtre Berry","Watmel Berry","Durin Berry","Belue Berry","Occa Berry","Passho Berry","Wacan Berry","Rindo Berry","Yache Berry","Chople Berry","Kebia Berry","Shuca Berry","Coba Berry","Payapa Berry","Tanga Berry","Charti Berry","Kasib Berry","Haban Berry","Colbur Berry","Babiri Berry","Chilan Berry","Liechi Berry","Ganlon Berry","Salac Berry","Petaya Berry","Apicot Berry","Lansat Berry","Starf Berry","Enigma Berry","Micle Berry","Custap Berry","Jaboca Berry","Rowap Berry","Bright Powder","White Herb","Macho Brace","Exp. Share","Quick Claw","Soothe Bell","Mental Herb","Choice Band","King's Rock","Silver Powder","Amulet Coin","Cleanse Tag","Soul Dew","Deep Sea Tooth","Deep Sea Scale","Smoke Ball","Everstone","Focus Band","Lucky Egg","Scope Lens","Metal Coat","Leftovers","Dragon Scale","Light Ball","Soft Sand","Hard Stone","Miracle Seed","Black Glasses","Black Belt","Magnet","Mystic Water","Sharp Beak","Poison Barb","Never-Melt Ice","Spell Tag","Twisted Spoon","Charcoal","Dragon Fang","Silk Scarf","Upgrade","Shell Bell","Sea Incense","Lax Incense","Lucky Punch","Metal Powder","Thick Club","Leek","Red Scarf","Blue Scarf","Pink Scarf","Green Scarf","Yellow Scarf","Wide Lens","Muscle Band","Wise Glasses","Expert Belt","Light Clay","Life Orb","Power Herb","Toxic Orb","Flame Orb","Quick Powder","Focus Sash","Zoom Lens","Metronome","Iron Ball","Lagging Tail","Destiny Knot","Black Sludge","Icy Rock","Smooth Rock","Heat Rock","Damp Rock","Grip Claw","Choice Scarf","Sticky Barb","Power Bracer","Power Belt","Power Lens","Power Band","Power Anklet","Power Weight","Shed Shell","Big Root","Choice Specs","Flame Plate","Splash Plate","Zap Plate","Meadow Plate","Icicle Plate","Fist Plate","Toxic Plate","Earth Plate","Sky Plate","Mind Plate","Insect Plate","Stone Plate","Spooky Plate","Draco Plate","Dread Plate","Iron Plate","Odd Incense","Rock Incense","Full Incense","Wave Incense","Rose Incense","Luck Incense","Pure Incense","Protector","Electirizer","Magmarizer","Dubious Disc","Reaper Cloth","Razor Claw","Razor Fang","TM01","TM02","TM03","TM04","TM05","TM06","TM07","TM08","TM09","TM10","TM11","TM12","TM13","TM14","TM15","TM16","TM17","TM18","TM19","TM20","TM21","TM22","TM23","TM24","TM25","TM26","TM27","TM28","TM29","TM30","TM31","TM32","TM33","TM34","TM35","TM36","TM37","TM38","TM39","TM40","TM41","TM42","TM43","TM44","TM45","TM46","TM47","TM48","TM49","TM50","TM51","TM52","TM53","TM54","TM55","TM56","TM57","TM58","TM59","TM60","TM61","TM62","TM63","TM64","TM65","TM66","TM67","TM68","TM69","TM70","TM71","TM72","TM73","TM74","TM75","TM76","TM77","TM78","TM79","TM80","TM81","TM82","TM83","TM84","TM85","TM86","TM87","TM88","TM89","TM90","TM91","TM92","HM01","HM02","HM03","HM04","HM05","HM06","","","Explorer Kit","Loot Sack","Rule Book","Poké Radar","Point Card","Journal","Seal Case","Fashion Case","Seal Bag","Pal Pad","Works Key","Old Charm","Galactic Key","Red Chain","Town Map","Vs. Seeker","Coin Case","Old Rod","Good Rod","Super Rod","Sprayduck","Poffin Case","Bike","Suite Key","Oak's Letter","Lunar Wing","Member Card","Azure Flute","S.S. Ticket","Contest Pass","Magma Stone","Parcel","Coupon 1","Coupon 2","Coupon 3","Storage Key","Secret Potion","Vs. Recorder","Gracidea","Secret Key","Apricorn Box","Unown Report","Berry Pots","Dowsing Machine","Blue Card","Slowpoke Tail","Clear Bell","Card Key","Basement Key","Squirt Bottle","Red Scale","Lost Item","Pass","Machine Part","Silver Wing","Rainbow Wing","Mystery Egg","Red Apricorn","Blue Apricorn","Yellow Apricorn","Green Apricorn","Pink Apricorn","White Apricorn","Black Apricorn","Fast Ball","Level Ball","Lure Ball","Heavy Ball","Love Ball","Friend Ball","Moon Ball","Sport Ball","Park Ball","Photo Album","GB Sounds","Tidal Bell","Rage Candy Bar","Data Card 01","Data Card 02","Data Card 03","Data Card 04","Data Card 05","Data Card 06","Data Card 07","Data Card 08","Data Card 09","Data Card 10","Data Card 11","Data Card 12","Data Card 13","Data Card 14","Data Card 15","Data Card 16","Data Card 17","Data Card 18","Data Card 19","Data Card 20","Data Card 21","Data Card 22","Data Card 23","Data Card 24","Data Card 25","Data Card 26","Data Card 27","Jade Orb","Lock Capsule","Red Orb","Blue Orb","Enigma Stone","Prism Scale","Eviolite","Float Stone","Rocky Helmet","Air Balloon","Red Card","Ring Target","Binding Band","Absorb Bulb","Cell Battery","Eject Button","Fire Gem","Water Gem","Electric Gem","Grass Gem","Ice Gem","Fighting Gem","Poison Gem","Ground Gem","Flying Gem","Psychic Gem","Bug Gem","Rock Gem","Ghost Gem","Dragon Gem","Dark Gem","Steel Gem","Normal Gem","Health Feather","Muscle Feather","Resist Feather","Genius Feather","Clever Feather","Swift Feather","Pretty Feather","Cover Fossil","Plume Fossil","Liberty Pass","Pass Orb","Dream Ball","Poké Toy","Prop Case","Dragon Skull","Balm Mushroom","Big Nugget","Pearl String","Comet Shard","Relic Copper","Relic Silver","Relic Gold","Relic Vase","Relic Band","Relic Statue","Relic Crown","Casteliacone","Dire Hit 2","X Speed 2","X Sp. Atk 2","X Sp. Def 2","X Defense 2","X Attack 2","X Accuracy 2","X Speed 3","X Sp. Atk 3","X Sp. Def 3","X Defense 3","X Attack 3","X Accuracy 3","X Speed 6","X Sp. Atk 6","X Sp. Def 6","X Defense 6","X Attack 6","X Accuracy 6","Ability Urge","Item Drop","Item Urge","Reset Urge","Dire Hit 3","Light Stone","Dark Stone","TM93","TM94","TM95","Xtransceiver","","Gram 1","Gram 2","Gram 3","Xtransceiver","Medal Box","DNA Splicers","DNA Splicers","Permit","Oval Charm","Shiny Charm","Plasma Card","Grubby Hanky","Colress Machine","Dropped Item","Dropped Item","Reveal Glass","Weakness Policy","Assault Vest","Holo Caster","Prof's Letter","Roller Skates","Pixie Plate","Ability Capsule","Whipped Dream","Sachet","Luminous Moss","Snowball","Safety Goggles","Poké Flute","Rich Mulch","Surprise Mulch","Boost Mulch","Amaze Mulch","Gengarite","Gardevoirite","Ampharosite","Venusaurite","Charizardite X","Blastoisinite","Mewtwonite X","Mewtwonite Y","Blazikenite","Medichamite","Houndoominite","Aggronite","Banettite","Tyranitarite","Scizorite","Pinsirite","Aerodactylite","Lucarionite","Abomasite","Kangaskhanite","Gyaradosite","Absolite","Charizardite Y","Alakazite","Heracronite","Mawilite","Manectite","Garchompite","Latiasite","Latiosite","Roseli Berry","Kee Berry","Maranga Berry","Sprinklotad","TM96","TM97","TM98","TM99","TM100","Power Plant Pass","Mega Ring","Intriguing Stone","Common Stone","Discount Coupon","Elevator Key","TMV Pass","Honor of Kalos","Adventure Guide","Strange Souvenir","Lens Case","Makeup Bag","Travel Trunk","Lumiose Galette","Shalour Sable","Jaw Fossil","Sail Fossil","Looker Ticket","Bike","Holo Caster","Fairy Gem","Mega Charm","Mega Glove","Mach Bike","Acro Bike","Wailmer Pail","Devon Parts","Soot Sack","Basement Key","Pokéblock Kit","Letter","Eon Ticket","Scanner","Go-Goggles","Meteorite","Key to Room 1","Key to Room 2","Key to Room 4","Key to Room 6","Storage Key","Devon Scope","S.S. Ticket","HM07","Devon Scuba Gear","Contest Costume","Contest Costume","Magma Suit","Aqua Suit","Pair of Tickets","Mega Bracelet","Mega Pendant","Mega Glasses","Mega Anchor","Mega Stickpin","Mega Tiara","Mega Anklet","Meteorite","Swampertite","Sceptilite","Sablenite","Altarianite","Galladite","Audinite","Metagrossite","Sharpedonite","Slowbronite","Steelixite","Pidgeotite","Glalitite","Diancite","Prison Bottle","Mega Cuff","Cameruptite","Lopunnite","Salamencite","Beedrillite","Meteorite","Meteorite","Key Stone","Meteorite Shard","Eon Flute","Normalium Z","Firium Z","Waterium Z","Electrium Z","Grassium Z","Icium Z","Fightinium Z","Poisonium Z","Groundium Z","Flyinium Z","Psychium Z","Buginium Z","Rockium Z","Ghostium Z","Dragonium Z","Darkinium Z","Steelium Z","Fairium Z","Pikanium Z","Bottle Cap","Gold Bottle Cap","Z-Ring","Decidium Z","Incinium Z","Primarium Z","Tapunium Z","Marshadium Z","Aloraichium Z","Snorlium Z","Eevium Z","Mewnium Z","Normalium Z","Firium Z","Waterium Z","Electrium Z","Grassium Z","Icium Z","Fightinium Z","Poisonium Z","Groundium Z","Flyinium Z","Psychium Z","Buginium Z","Rockium Z","Ghostium Z","Dragonium Z","Darkinium Z","Steelium Z","Fairium Z","Pikanium Z","Decidium Z","Incinium Z","Primarium Z","Tapunium Z","Marshadium Z","Aloraichium Z","Snorlium Z","Eevium Z","Mewnium Z","Pikashunium Z","Pikashunium Z","","","","","Forage Bag","Fishing Rod","Professor's Mask","Festival Ticket","Sparkling Stone","Adrenaline Orb","Zygarde Cube","","Ice Stone","Ride Pager","Beast Ball","Big Malasada","Red Nectar","Yellow Nectar","Pink Nectar","Purple Nectar","Sun Flute","Moon Flute","","Enigmatic Card","Silver Razz Berry","Golden Razz Berry","Silver Nanab Berry","Golden Nanab Berry","Silver Pinap Berry","Golden Pinap Berry","","","","","","Secret Key","S.S. Ticket","Silph Scope","Parcel","Card Key","Gold Teeth","Lift Key","Terrain Extender","Protective Pads","Electric Seed","Psychic Seed","Misty Seed","Grassy Seed","Stretchy Spring","Chalky Stone","Marble","Lone Earring","Beach Glass","Gold Leaf","Silver Leaf","Polished Mud Ball","Tropical Shell","Leaf Letter","Leaf Letter","Small Bouquet","","","","Lure","Super Lure","Max Lure","Pewter Crunchies","Fighting Memory","Flying Memory","Poison Memory","Ground Memory","Rock Memory","Bug Memory","Ghost Memory","Steel Memory","Fire Memory","Water Memory","Grass Memory","Electric Memory","Psychic Memory","Ice Memory","Dragon Memory","Dark Memory","Fairy Memory","Solganium Z","Lunalium Z","Ultranecrozium Z","Mimikium Z","Lycanium Z","Kommonium Z","Solganium Z","Lunalium Z","Ultranecrozium Z","Mimikium Z","Lycanium Z","Kommonium Z","Z-Power Ring","Pink Petal","Orange Petal","Blue Petal","Red Petal","Green Petal","Yellow Petal","Purple Petal","Rainbow Flower","Surge Badge","N-Solarizer","N-Lunarizer","N-Solarizer","N-Lunarizer","Ilima Normalium Z","Left Poké Ball","Roto Hatch","Roto Bargain","Roto Prize Money","Roto Exp. Points","Roto Friendship","Roto Encounter","Roto Stealth","Roto HP Restore","Roto PP Restore","Roto Boost","Roto Catch","Health Candy","Mighty Candy","Tough Candy","Smart Candy","Courage Candy","Quick Candy","Health Candy L","Mighty Candy L","Tough Candy L","Smart Candy L","Courage Candy L","Quick Candy L","Health Candy XL","Mighty Candy XL","Tough Candy XL","Smart Candy XL","Courage Candy XL","Quick Candy XL","Bulbasaur Candy","Charmander Candy","Squirtle Candy","Caterpie Candy","Weedle Candy","Pidgey Candy","Rattata Candy","Spearow Candy","Ekans Candy","Pikachu Candy","Sandshrew Candy","Nidoran♀ Candy","Nidoran♂ Candy","Clefairy Candy","Vulpix Candy","Jigglypuff Candy","Zubat Candy","Oddish Candy","Paras Candy","Venonat Candy","Diglett Candy","Meowth Candy","Psyduck Candy","Mankey Candy","Growlithe Candy","Poliwag Candy","Abra Candy","Machop Candy","Bellsprout Candy","Tentacool Candy","Geodude Candy","Ponyta Candy","Slowpoke Candy","Magnemite Candy","Farfetch'd Candy","Doduo Candy","Seel Candy","Grimer Candy","Shellder Candy","Gastly Candy","Onix Candy","Drowzee Candy","Krabby Candy","Voltorb Candy","Exeggcute Candy","Cubone Candy","Hitmonlee Candy","Hitmonchan Candy","Lickitung Candy","Koffing Candy","Rhyhorn Candy","Chansey Candy","Tangela Candy","Kangaskhan Candy","Horsea Candy","Goldeen Candy","Staryu Candy","Mr. Mime Candy","Scyther Candy","Jynx Candy","Electabuzz Candy","Magmar Candy","Pinsir Candy","Tauros Candy","Magikarp Candy","Lapras Candy","Ditto Candy","Eevee Candy","Porygon Candy","Omanyte Candy","Kabuto Candy","Aerodactyl Candy","Snorlax Candy","Articuno Candy","Zapdos Candy","Moltres Candy","Dratini Candy","Mewtwo Candy","Mew Candy","Meltan Candy","","","","","","","","","","","","","","","","","Endorsement","Pokémon Box Link","Wishing Star","Dynamax Band","","","Fishing Rod","Rotom Bike","","","Sausages","Bob's Food Tin","Bach's Food Tin","Tin of Beans","Bread","Pasta","Mixed Mushrooms","Smoke-Poke Tail","Large Leek","Fancy Apple","Brittle Bones","Pack of Potatoes","Pungent Root","Salad Mix","Fried Food","Boiled Egg","Camping Gear","","","Rusted Sword","Rusted Shield","Fossilized Bird","Fossilized Fish","Fossilized Drake","Fossilized Dino","Strawberry Sweet","Love Sweet","Berry Sweet","Clover Sweet","Flower Sweet","Star Sweet","Ribbon Sweet","Sweet Apple","Tart Apple","Throat Spray","Eject Pack","Heavy-Duty Boots","Blunder Policy","Room Service","Utility Umbrella","Exp. Candy XS","Exp. Candy S","Exp. Candy M","Exp. Candy L","Exp. Candy XL","Dynamax Candy","TR00","TR01","TR02","TR03","TR04","TR05","TR06","TR07","TR08","TR09","TR10","TR11","TR12","TR13","TR14","TR15","TR16","TR17","TR18","TR19","TR20","TR21","TR22","TR23","TR24","TR25","TR26","TR27","TR28","TR29","TR30","TR31","TR32","TR33","TR34","TR35","TR36","TR37","TR38","TR39","TR40","TR41","TR42","TR43","TR44","TR45","TR46","TR47","TR48","TR49","TR50","TR51","TR52","TR53","TR54","TR55","TR56","TR57","TR58","TR59","TR60","TR61","TR62","TR63","TR64","TR65","TR66","TR67","TR68","TR69","TR70","TR71","TR72","TR73","TR74","TR75","TR76","TR77","TR78","TR79","TR80","TR81","TR82","TR83","TR84","TR85","TR86","TR87","TR88","TR89","TR90","TR91","TR92","TR93","TR94","TR95","TR96","TR97","TR98","TR99","TM00","Lonely Mint","Adamant Mint","Naughty Mint","Brave Mint","Bold Mint","Impish Mint","Lax Mint","Relaxed Mint","Modest Mint","Mild Mint","Rash Mint","Quiet Mint","Calm Mint","Gentle Mint","Careful Mint","Sassy Mint","Timid Mint","Hasty Mint","Jolly Mint","Naive Mint","Serious Mint","Wishing Piece","Cracked Pot","Chipped Pot","Hi-tech Earbuds","Fruit Bunch","Moomoo Cheese","Spice Mix","Fresh Cream","Packaged Curry","Coconut Milk","Instant Noodles","Precooked Burger","Gigantamix","Wishing Chip","Rotom Bike","Catching Charm","","Old Letter","Band Autograph","Sonia's Book","","","","","","","Rotom Catalog","★And458","★And15","★And337","★And603","★And390","★Sgr6879","★Sgr6859","★Sgr6913","★Sgr7348","★Sgr7121","★Sgr6746","★Sgr7194","★Sgr7337","★Sgr7343","★Sgr6812","★Sgr7116","★Sgr7264","★Sgr7597","★Del7882","★Del7906","★Del7852","★Psc596","★Psc361","★Psc510","★Psc437","★Psc8773","★Lep1865","★Lep1829","★Boo5340","★Boo5506","★Boo5435","★Boo5602","★Boo5733","★Boo5235","★Boo5351","★Hya3748","★Hya3903","★Hya3418","★Hya3482","★Hya3845","★Eri1084","★Eri472","★Eri1666","★Eri897","★Eri1231","★Eri874","★Eri1298","★Eri1325","★Eri984","★Eri1464","★Eri1393","★Eri850","★Tau1409","★Tau1457","★Tau1165","★Tau1791","★Tau1910","★Tau1346","★Tau1373","★Tau1412","★CMa2491","★CMa2693","★CMa2294","★CMa2827","★CMa2282","★CMa2618","★CMa2657","★CMa2646","★UMa4905","★UMa4301","★UMa5191","★UMa5054","★UMa4295","★UMa4660","★UMa4554","★UMa4069","★UMa3569","★UMa3323","★UMa4033","★UMa4377","★UMa4375","★UMa4518","★UMa3594","★Vir5056","★Vir4825","★Vir4932","★Vir4540","★Vir4689","★Vir5338","★Vir4910","★Vir5315","★Vir5359","★Vir5409","★Vir5107","★Ari617","★Ari553","★Ari546","★Ari951","★Ori1713","★Ori2061","★Ori1790","★Ori1903","★Ori1948","★Ori2004","★Ori1852","★Ori1879","★Ori1899","★Ori1543","★Cas21","★Cas168","★Cas403","★Cas153","★Cas542","★Cas219","★Cas265","★Cnc3572","★Cnc3208","★Cnc3461","★Cnc3449","★Cnc3429","★Cnc3627","★Cnc3268","★Cnc3249","★Com4968","★Crv4757","★Crv4623","★Crv4662","★Crv4786","★Aur1708","★Aur2088","★Aur1605","★Aur2095","★Aur1577","★Aur1641","★Aur1612","★Pav7790","★Cet911","★Cet681","★Cet188","★Cet539","★Cet804","★Cep8974","★Cep8162","★Cep8238","★Cep8417","★Cen5267","★Cen5288","★Cen551","★Cen5459","★Cen5460","★CMi2943","★CMi2845","★Equ8131","★Vul7405","★UMi424","★UMi5563","★UMi5735","★UMi6789","★Crt4287","★Lyr7001","★Lyr7178","★Lyr7106","★Lyr7298","★Ara6585","★Sco6134","★Sco6527","★Sco6553","★Sco5953","★Sco5984","★Sco6508","★Sco6084","★Sco5944","★Sco6630","★Sco6027","★Sco6247","★Sco6252","★Sco5928","★Sco6241","★Sco6165","★Tri544","★Leo3982","★Leo4534","★Leo4357","★Leo4057","★Leo4359","★Leo4031","★Leo3852","★Leo3905","★Leo3773","★Gru8425","★Gru8636","★Gru8353","★Lib5685","★Lib5531","★Lib5787","★Lib5603","★Pup3165","★Pup3185","★Pup3045","★Cyg7924","★Cyg7417","★Cyg7796","★Cyg8301","★Cyg7949","★Cyg7528","★Oct7228","★Col1956","★Col2040","★Col2177","★Gem2990","★Gem2891","★Gem2421","★Gem2473","★Gem2216","★Gem2777","★Gem2650","★Gem2286","★Gem2484","★Gem2930","★Peg8775","★Peg8781","★Peg39","★Peg8308","★Peg8650","★Peg8634","★Peg8684","★Peg8450","★Peg8880","★Peg8905","★Oph6556","★Oph6378","★Oph6603","★Oph6149","★Oph6056","★Oph6075","★Ser5854","★Ser7141","★Ser5879","★Her6406","★Her6148","★Her6410","★Her6526","★Her6117","★Her6008","★Per936","★Per1017","★Per1131","★Per1228","★Per834","★Per941","★Phe99","★Phe338","★Vel3634","★Vel3485","★Vel3734","★Aqr8232","★Aqr8414","★Aqr8709","★Aqr8518","★Aqr7950","★Aqr8499","★Aqr8610","★Aqr8264","★Cru4853","★Cru4730","★Cru4763","★Cru4700","★Cru4656","★PsA8728","★TrA6217","★Cap7776","★Cap7754","★Cap8278","★Cap8322","★Cap7773","★Sge7479","★Car2326","★Car3685","★Car3307","★Car3699","★Dra5744","★Dra5291","★Dra6705","★Dra6536","★Dra7310","★Dra6688","★Dra4434","★Dra6370","★Dra7462","★Dra6396","★Dra6132","★Dra6636","★CVn4915","★CVn4785","★CVn4846","★Aql7595","★Aql7557","★Aql7525","★Aql7602","★Aql7235","Max Honey","Max Mushrooms","Galarica Twig","Galarica Cuff","Style Card","Armor Pass","Rotom Bike","Rotom Bike","Exp. Charm","Armorite Ore","Mark Charm","Reins of Unity","Reins of Unity","Galarica Wreath","Legendary Clue 1","Legendary Clue 2","Legendary Clue 3","Legendary Clue?","Crown Pass","Wooden Crown","Radiant Petal","White Mane Hair","Black Mane Hair","Iceroot Carrot","Shaderoot Carrot","Dynite Ore","Carrot Seeds","Ability Patch","Reins of Unity"];
var itemOptions = [];

var mapLocations = ["Mauville City"];
var mapPointsofInterest = ["Pokémon Center","PokéMart","Pokémon Day Care","Fossil Lab","Move Tutor","IV Judge","Name Rater","Friendship Checker","Move Deleter","Move Reminder"];
var mapOptions = [mapLocations,mapPointsofInterest];


var locationPokList = ["123","182"];
var locationPokListLv = ["12-14","33,34"];
var locationPokListRate = ["80%","20%"];
var locationPokListType = ["Old Rod","Surf M"];

var locationItemList = ["Aguav Berry","Super Rod","Never-Melt Ice"];
var locationItemListLocation = ["From Santos near the Pokémon Center.", "Fishing man standing next to the Green House.","After beating Xandyn in four consecutive battles."];

var locationTrainerList = ["Rival Silver","Burglar","Firebreather"];
var locationTrainer1Pok = ["1","72","42","83","452","285"];
var locationTrainer2Pok = ["442","353","66","95"];
var locationTrainer3Pok = ["93","68","133"];
var locationTrainerPok = [locationTrainer1Pok,locationTrainer2Pok,locationTrainer3Pok];

var locationTrainer1Lv = ["10","14","15","14","16","19"];
var locationTrainer2Lv = ["31","33","33","35"];
var locationTrainer3Lv = ["24","25","29"];
var locationTrainerLv = [locationTrainer1Lv,locationTrainer2Lv,locationTrainer3Lv];

var locationTrainer1Gender = ["♂","♂","♀","♀","♂","♀"];
var locationTrainer2Gender = ["♀","♂","♀","♂"];
var locationTrainer3Gender = ["♀","♂","♂"];
var locationTrainerGender = [locationTrainer1Gender,locationTrainer2Gender,locationTrainer3Gender];

var locationTrainer1HeldItem = ["Cell Battery","","Binding Band","Douse Drive","Life Orb",""];
var locationTrainer2HeldItem = ["","Old Amber","Absorb Bulb",""];
var locationTrainer3HeldItem = ["Hard Rock","","Power Orb"];
var locationTrainerHeldItem = [locationTrainer1HeldItem,locationTrainer2HeldItem,locationTrainer3HeldItem];


var locationTrainerClass = ["Silver","Burglar","Firebreather"];

var locationTrainer1Pok1Move = ["Pound","Mega Punch","Psychic","Glare"];
var locationTrainer1Pok2Move = ["Nightmare","Flame Wheel","Lock-On",""];
var locationTrainer1Pok3Move = ["Moonlight","Refresh","",""];
var locationTrainer1Pok4Move = ["Tail Whip","Attract","Rock Tomb","Wring Out"];
var locationTrainer1Pok5Move = ["Natural Gift","Feint","Covet","Yawn"];
var locationTrainer1Pok6Move = ["Psycho Cut","Knock Off","Roost","Blue Flare"];

var locationTrainer1Move = [locationTrainer1Pok1Move,locationTrainer1Pok2Move,locationTrainer1Pok3Move,locationTrainer1Pok4Move,locationTrainer1Pok5Move,locationTrainer1Pok6Move];
var locationTrainer2Move = [locationTrainer1Pok4Move,locationTrainer1Pok3Move,locationTrainer1Pok2Move,locationTrainer1Pok1Move];
var locationTrainer3Move = [locationTrainer1Pok6Move,locationTrainer1Pok5Move,locationTrainer1Pok4Move];

var locationTrainerListMove = [locationTrainer1Move,locationTrainer2Move,locationTrainer3Move];

var locationTrainerValue = ["1920","1500","800"];