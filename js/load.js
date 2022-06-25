var finaldataPokémon = [];
var finaldataPokémonPath = [];
var finaldataPokémonForm = [];
var finaldataPokémonFormItem = [];
var finaldataPokémonAbility = [];
var finaldataPokémonFriendship = [];
var finaldataPokémonArea = [];
var finaldataPokémonBaseStats = [];
var finaldataPokémonCatchRate = [];
var finaldataPokémonCategory = [];
var finaldataPokémonEggGroup = [];
var finaldataPokémonEvolutionMethod = [];
var finaldataPokémonEvolutionSpecie = [];
var finaldataPokémonEvolutionStage = [];
var finaldataPokémonEVYield = [];
var finaldataPokémonExperienceYield = [];
var finaldataPokémonGenderRatio = [];
var finaldataPokémonHatchRate = [];
var finaldataPokémonHeldItem = [];
var finaldataPokémonLevelingRate = [];
var finaldataPokémonPokédexEntry = [];
var finaldataPokémonPokédexID = [];
var finaldataPokémonType = [];
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
var finaldataLearnsetMachine = [];
var finaldataLearnsetEvolution = [];
var finaldataLearnsetLevel = [];
var finaldataLearnsetBreed = [];
var finaldataItems = [];
var finaldataItemsPrice = [];
var finaldataItemsPriceExtra = [];
var finaldataItemsDescription = [];
var finaldataLocationPokémon = [];
var finaldataLocationItems = [];
var finaldataLocationTrainers = [];
var finaldataAbility = [];
var finaldataAbilityFlavor = [];
var finaldataMove = [];
var finaldataMoveDescription = [];
var finaldataLocationTutor = [];
var finaldataMoveMachine = [];
var finaldataMoveRange = [];
var finaldataMoveOtherMoves = [];
var finaldataMoveAccuracy = [];
var finaldataMovePower = [];
var finaldataMovePP = [];
var finaldataMoveCategory = [];
var finaldataMoveID = [];
var finaldataMoveType = [];
var finaldataMovePriority = [];
var drag;
var savedtar;
var saveddrag;
var boxDrag;
var loads = ["Pokémon","Learnset","Locations","Location Pokémon","Location Items","Location Trainers","Moves","Abilities","Items","Trainers","Mechanics","Game"];
var baseurl = "https://raw.githubusercontent.com/fixiie/FinalDex/main/data/";
var baseextension = ".json";
var baseextra = " Metadata"

if (!Ability.length > 0) {
	loads = loads.filter((v) => v != "Abilities");
}

var initStart = 1;
var initLength = loads.length;
var initTimeStart;

for(var i = 0; i < loads.length; i++) {
	var url = baseurl+loads[i]+baseextra+baseextension;
	requestLoad(i,url);
}

function requestLoad(i,url) {
	var i;
	var url;
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var Metadata = request.response;

		if(loads[i] == "Locations") {
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				if(Object.keys(Metadata["Reference"][q]).includes(JSONPath_Location + "_" + "Name")) {
					finaldataLocation.push(Metadata["Reference"][q]);
				}
			}
			for(var q = 0; q < Metadata["Connecting"].length; q++) {
				finaldataLocationConnection.push(Metadata["Connecting"][q]);
			}
			for(var q = 0; q < Metadata["Description"].length; q++) {
				finaldataLocationDescription.push(Metadata["Description"][q]);
			}
			for(var q = 0; q < Metadata["Slogan"].length; q++) {
				finaldataLocationSlogan.push(Metadata["Slogan"][q]);
			}
			for(var q = 0; q < Metadata["Navigation"].length; q++) {
				finaldataLocationNavigation.push(Metadata["Navigation"][q]);
			}
			for(var q = 0; q < Metadata["Move Tutor"].length; q++) {
				finaldataLocationTutor.push(Metadata["Move Tutor"][q]);
			}
		}
		if (loads[i] == "Location Trainers") {
			for(var q = 0; q < Metadata["Trainers"].length; q++) {
				finaldataLocationTrainers.push(Metadata["Trainers"][q]);
			}
		}
		if (loads[i] == "Location Pokémon") {
			for(var q = 0; q < Metadata["Pokémon"].length; q++) {
				finaldataLocationPokémon.push(Metadata["Pokémon"][q]);
			}
		}
		if (loads[i] == "Location Items") {
			for(var q = 0; q < Metadata["Items"].length; q++) {
				finaldataLocationItems.push(Metadata["Items"][q]);
			}
		}
		if (loads[i] == "Learnset") {
			for(var q = 0; q < Metadata["Evolution"].length; q++) {
				finaldataLearnsetEvolution.push(Metadata["Evolution"][q]);
			}
			for(var q = 0; q < Metadata["Level Up"].length; q++) {
				finaldataLearnsetLevel.push(Metadata["Level Up"][q]);
			}
			for(var q = 0; q < Metadata["Machine"].length; q++) {
				finaldataLearnsetMachine.push(Metadata["Machine"][q]);
			}
			for(var q = 0; q < Metadata["Breeding"].length; q++) {
				finaldataLearnsetBreed.push(Metadata["Breeding"][q]);
			}	
		}
		if (loads[i] == "Items") {
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				finaldataItems.push(Metadata["Reference"][q]);
			}
			for(var q = 0; q < Metadata["Price"].length; q++) {
				finaldataItemsPrice.push(Metadata["Price"][q]);
			}
			for(var q = 0; q < Metadata["Price Extra"].length; q++) {
				finaldataItemsPriceExtra.push(Metadata["Price Extra"][q]);
			}
			for(var q = 0; q < Metadata["Description"].length; q++) {
				finaldataItemsDescription.push(Metadata["Description"][q]);
			}
		}
		if (loads[i] == "Abilities") {
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				if(Object.keys(Metadata["Reference"][q]).includes(JSONPath_AbilityReference + "_" + "Name")) {
					finaldataAbility.push(Metadata["Reference"][q]);
				}
			}
			for(var q = 0; q < Metadata["Flavor"].length; q++) {
				finaldataAbilityFlavor.push(Metadata["Flavor"][q]);
			}
		}
		if (loads[i] == "Moves") {
			for(var q = 0; q < Metadata["Description"].length; q++) {
				finaldataMoveDescription.push(Metadata["Description"][q]);
			}
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				finaldataMove.push(Metadata["Reference"][q]);
			}
			for(var q = 0; q < Metadata["Machine"].length; q++) {
				finaldataMoveMachine.push(Metadata["Machine"][q]);
			}
			for(var q = 0; q < Metadata["Range"].length; q++) {
				finaldataMoveRange.push(Metadata["Range"][q]);
			}
			for(var q = 0; q < Metadata["Other Moves"].length; q++) {
				finaldataMoveOtherMoves.push(Metadata["Other Moves"][q]);
			}
			for(var q = 0; q < Metadata["Accuracy"].length; q++) {
				finaldataMoveAccuracy.push(Metadata["Accuracy"][q]);
			}
			for(var q = 0; q < Metadata["Power"].length; q++) {
				finaldataMovePower.push(Metadata["Power"][q]);
			}
			for(var q = 0; q < Metadata["PP"].length; q++) {
				finaldataMovePP.push(Metadata["PP"][q]);
			}
			for(var q = 0; q < Metadata["Category"].length; q++) {
				finaldataMoveCategory.push(Metadata["Category"][q]);
			}
			for(var q = 0; q < Metadata["ID"].length; q++) {
				finaldataMoveID.push(Metadata["ID"][q]);
			}
			for(var q = 0; q < Metadata["Type"].length; q++) {
				finaldataMoveType.push(Metadata["Type"][q]);
			}
			for(var q = 0; q < Metadata["Priority"].length; q++) {
				finaldataMovePriority.push(Metadata["Priority"][q]);
			}
		}
		if (loads[i] == "Game") {
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				finaldataGame.push(Metadata["Reference"][q]);
			}
			for(var q = 0; q < Metadata["Type Chart_" + JSONPath_Typechart].length; q++) {
				finaldataTypeChart.push(Metadata["Type Chart_" + JSONPath_Typechart][q]);
			}
			for(var q = 0; q < Metadata["Exclusive Pokémon"].length; q++) {
				finaldataExclusivePokémon.push(Metadata["Exclusive Pokémon"][q]);
			}
			for(var q = 0; q < Metadata["Exclusive Item"].length; q++) {
				finaldataExclusiveItem.push(Metadata["Exclusive Item"][q]);
			}
			for(var q = 0; q < Metadata["Exclusive Feature"].length; q++) {
				finaldataExclusiveFeature.push(Metadata["Exclusive Feature"][q]);
			}
		}
		if (loads[i] == "Pokémon") {
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				finaldataPokémon.push(Metadata["Reference"][q]);
				finaldataPokémonPath.push(Metadata["Path"][q]);
				finaldataPokémonForm.push(Metadata["Form"][q]);
				finaldataPokémonFormItem.push(Metadata["Form Item"][q]);
				finaldataPokémonAbility.push(Metadata["Ability"][q]);
				finaldataPokémonFriendship.push(Metadata["Base Friendship"][q]);
				finaldataPokémonArea.push(Metadata["Area"][q]);
				finaldataPokémonBaseStats.push(Metadata["Base Stats"][q]);
				finaldataPokémonCatchRate.push(Metadata["Catch Rate"][q]);
				finaldataPokémonCategory.push(Metadata["Category"][q]);
				finaldataPokémonEggGroup.push(Metadata["Egg Group"][q]);
				finaldataPokémonEvolutionMethod.push(Metadata["Evolution Method"][q]);
				finaldataPokémonEvolutionSpecie.push(Metadata["Evolution Specie"][q]);
				finaldataPokémonEvolutionStage.push(Metadata["Evolution Stage"][q]);
				finaldataPokémonEVYield.push(Metadata["Effort Value Yield"][q]);
				finaldataPokémonExperienceYield.push(Metadata["Experience Yield"][q]);
				finaldataPokémonGenderRatio.push(Metadata["Gender Ratio"][q]);
				finaldataPokémonHatchRate.push(Metadata["Hatch Rate"][q]);
				finaldataPokémonHeldItem.push(Metadata["Held Item"][q]);
				finaldataPokémonLevelingRate.push(Metadata["Leveling Rate"][q]);
				finaldataPokémonPokédexEntry.push(Metadata["Pokédex Entry"][q]);
				finaldataPokémonPokédexID.push(Metadata["Pokédex ID"][q]);
				finaldataPokémonType.push(Metadata["Type"][q]);
			}
		}

		initialize();
	}

}

function initialize() {

	var initEnd = initStart++;
	var loaddescription = document.getElementById("load-description");
	if(initEnd == 1) {
		initTimeStart = new Date();
	}

	loaddescription.innerHTML = "Building Databases<span>.</span><span>.</span><span>.</span>";
	if(new Date() - initTimeStart >= 5000) {
		loaddescription.innerHTML = "Load taking longer than expected<span>.</span><span>.</span><span>.</span>";
	}
	if(initEnd >= initLength) {
		loaddescription.innerHTML = "Complete!";

		config();

		createNav();
		createPokémon();
		createMechanic();
		createExclusive();
		createTool();
		createMap();
		createAbility();
		createItem();
		createType();
		createMove();

		countdown();
		stopwatch();
		typeSwitch("NORMAL");
		RNG();

		boxMemory("Restore")
		partyMemory("Restore");
		memoryDexSwitch();
		memory("Restore","imgtype","game",document.querySelector('#pokémon-outer > main[name="Settings"] > span[name="ImageType"] select'));
		memory("Restore","resize","site",document.getElementById('resize'));
		memory("Restore","variant","game",document.querySelectorAll('#pokémon-outer > main[name="Settings"] > span[name="Variant"] input[type="checkbox"]'));

		variantSelector();
		
		load();

	}
}


function load() {
	const load = document.querySelector("#load");
	document.body.style.overflowY = "unset";
	document.documentElement.scrollTop = 0;
	window.onbeforeunload = function() { return "Your work will be lost."; };
	load.className += "hidden";
}




// temp data
var fdataCatching = "<p>Throwing a Poké Ball on a wild Pokémon has a chance to capture it, if thrown on a Pokémon that already has a trainer the Poké Ball will fail and disappear.</p><br><h3>Catch Rate</h3><p>Each species of Pokémon each has a set Catch Rate determining the difficulty of catching it.<br><br>A Pokémon Catch Rate can be modified with any of the following methods:</p><li>Health relative to its full health (⅓ greatest increase)</li><li>Type of Pokéball</li><li>Status Condition (Asleep or Frozen greatest increase)</li>";
var fdataExperience = "<p>Any Pokémon that takes part in the battle earns Experience split among them when the opposing Pokémon faints. A Pokémon can also gain Experience from Candies or Catching a Pokémon.<br><br><br>The amount of experience gained from a battle depends on:</p><li>Opposing Pokémon's Level</li><li>Opposing Pokémon's Experience Yield</li><br><br><p>A Pokémon may gain a boosted amount of Experience due to the following reasons:</p><li>If the Pokémon was Traded</li><li>If the Player is in a Trainer Battle</li><li>If the Pokémon is holding a Lucky Egg</li><li>If the Pokémon has high enough Affection</li><li>If a Pass Power is active</li><li>If the Pokémon is past the level it would evolve but has not</li><br><br><p>The amount of Experience required for a level up is different between species and depends on its Leveling Rate.</p>";
var fdataEvolution = "<p>The three most common methods of evolution consists of:</p><li>Level Up</li><li>Using an Item</li><li>Trading</li><br><p>Evolution by Level Up can be triggered by gaining experience in battle or by using a Rare Candy. Leveling up in a Pokémon Day Care will not trigger evolution.</p><p>Pressing B Button during evolution cancels the whole process.</p>";
var fdataBreeding = "<p>Pokémon can be bred by leaving two compatible Pokémon at the Pokémon Nursery.</p><p>Two Pokémon are compatible if:</p><li>They are of the same Species or have an Egg Group in common</li><li>They are Opposite Gender</li><br><br><p>Pokémon in the Undiscovered Egg Group cannot breed and Ditto cannot breed with itself. An exception is that as long as one of them is Ditto, even if the other parent is male or genderless the Pokémon can still be bred.</p><br><p>When there are two compatible Pokémon in the Nursery on Route 5 or in Bridge Field, the Nursery Lady will after some time hand the trainer an Egg.</p><p>After taking enough steps, the Egg will hatch into a level 1 first-stage Pokémon of the female species. The Amount of steps required depends on the hatching Pokémon’s Egg Cycle, with each species of Pokémon having different Egg Cycles.</p>";
var fdataTrade = "<p>Players can Trade Pokémon with each other by visiting any Pokémon Center.</p><p>A Pokémon cannot be traded until:</p><li>The player has received the Dynamax Band from Professor Magnolia on Route 2</li><br><h3>Pokémon HOME</h3><p>Pokémon HOME is an application on iOS, Android and the Nintendo Switch system used for storing Pokémon.</p><p>It allows for one-way transfer with the Nintendo 3DS’s Pokémon Bank and two-way transfer with Let’s Go Pikachu, Let’s Go Eevee, Sword and Shield.</p><br><h3>Global Trade System</h3><p>The Global Trade System is used for online trading with Sword or Shield.</p><p>It can be accessed via the Pokémon HOME mobile app.</p><p>A Pokémon may either be put up for trade in exchange for any desired Pokémon recorded in the Pokédex or to be traded with a Pokémon that has already been put up for trade.</p><p>A Pokémon that is put up for trade may after an extended period of time flee.</p><p>A Pokémon may either be put up for trade in exchange for any desired Pokémon or to be traded with a Pokémon that has already been put up for trade.</p><p>A Pokémon is unavailable for trade if:</p><li>It has a Classic, Premiere or National Ribbon</li><li>It has a Classic or Premiere Ribbon</li><li>It carries any Mega Stone</li><li>It is a Mythical Pokémon</li><p>Due to the Wi-Fi shutdown, this feature is no longer officially supported as of May 20, 2014. Unofficial support exists through the Wiimmfi service.</p><h3>Surprise Trade</h3><p>Surprise Trading is a feature used for randomly trading with Sword or Shield. It can be accessed via the Y-Comm Menu.</p>";
var fdataTypeEffectiveness = "<p>A Pokémon has either one or two types depending on its species which has its own set of type resistances, weaknesses and/or immunities.</p><p>Types are affected differently depending on the type of the move used by the opposing Pokémon.</p><li>If the type of a move is <strong>super effective</strong> against a type of its target, the damage done is <strong>doubled</strong>.</li><li>If the type of a move is <strong>not very effective</strong> against a type of its target, the damage done is <strong>halved</strong>.</li><li>If the type of a move is <strong>not effective</strong> against a type of its target, the move will deal <strong>no damage</strong>.</li><p>For Pokémon that have two types, overall type effectiveness is the combined effectiveness against each of its types.</p>";
var fdataStatusConditions = "<p>The non-volatile is the most common kind of status and consists of Burn, Freeze, Paralysis, Poison and Sleep. A Pokémon cannot gain another non-volatile status condition if it's already afflicted by one.</p><h3>Burn</h3><p>The burn condition <sup>BRN</sup> inflicts 1/16 of its maximum HP damage every turn and halves the damage dealt by the Pokémon's physical moves. Fire-type Pokémon are unable to get burned.</p><h3>Freeze</h3><p>The freeze condition <sup>FRZ</sup> causes a Pokémon to be unable to use moves. A frozen Pokémon has a 20% chance after each turn for the effect to end, alternatively if a frozen Pokémon is hit by a Fire-type move the freeze condition ends. A Pokémon is unable to be frozen during harsh sunlight.</p><h3>Paralysis</h3><p>The paralysis condition <sup>PAR</sup> reduces the Pokémon's Speed stat by 50% and causes it to have a 25% chance of being unable to use a move. Electric-type Pokémon are unable to get paralyzed.</p><h3>Poison</h3><p>The poison condition <sup>PSN</sup> inflicts 1/8 of its maximum HP damage every turn. The bad poison condition instead inflicts the same damage every turn but with the amount increasing by 1/8 of its maximum HP after each turn. If the Pokémon switches out with the bad poison condition the damage increase is reset to its original state. The bad poison returns to normal poison once the battle ends. Steel-type and Poison-type Pokémon are unable to get poisoned.</p><h3>Sleep</h3><p>The sleep condition <sup>SLP</sup> causes a Pokémon to be unable to use moves. The sleep lasts for a randomly chosen duration between 1-3 turns. The sleep counter does not reset upon switching out the Pokémon.</p>";
var fdataMoves = "<p>Moves are techniques Pokémon learn to use against opposing Pokémon in battles.</p><p>There are four main methods of acquiring moves on a Pokémon:</p><li>by leveling up</li><li>Technical Machines <sup>TM</sup> or Hidden Machines <sup>HM</sup></li><li>taught by Move Tutors</li><li>taught when evolving</li><br><p>Each Pokémon has a set of moves that they can learn, but only between one to four moves can be learned at a time. In order to learn new moves once four have been learned, it must forget one of its old moves.</p><p>Some moves cannot be forgotten such as moves learned by HMs without the help of the Move Deleter. Forgotten moves or moves learned at earlier levels may be acquired through the Move Reminder.</p><br><p>Each move typically has three main factors: Power, Accuracy and PP.</p><li>The strength of a move is measured by its Power and/or special trait of the move. If the type of the move used is equal to any of the Pokémon’s type the move receives Same-type attack bonus <sup>STAB</sup> and the move’s damage is increased by 50%.</li><li>The accuracy reflects the probability of the move being successful as a percentage.</li><li>The number of times the move can be used is limited by the move's Power Points <sup>PP</sup>, which when reached 0 becomes unusable. If all available moves have 0 PP and the Pokémon attacks it will instead use Struggle.</li>";
var fdataStats = "<p>Each species of Pokémon has a set base stat value which is generally how Pokémon are ranked stronger or weaker.</p><p>Each Pokémon has six main stats:</p><li>The Hit Point <sup>HP</sup> stat determines how much damage the Pokémon can receive before fainting.</li><li>The Attack stat determines how much damage a Pokémon deals when using a physical move.</li><li>The Defense stat determines how much damage the Pokémon receives when it is hit with a physical move.</li><li>The Special Attack <sup>Sp. Atk</sup> stat determines how much damage the Pokémon deals when using a special move.</li><li>The Special Defense <sup>Sp. Def</sup> stat determines how much damage the Pokémon receives when it is hit with a special move.</li><li>The Speed stat determines the order of Pokémon that can act in battle, in the case that two Pokémon have the same Speed, one of them will randomly go first.</li><h3>Individual Values</h3><p>Individual Values <sup>IV</sup> are base stats set for each main stat once a Pokémon is encountered. A Pokémon's IVs can either increase the Pokémon's stats by a lot or not much at all which is randomly set.</p><p>A Pokémon's IVs are not visible In-Game although it is possible to get the Pokémon's IVs evaluated by the Stats Judge.</p><h3>Effort Values</h3><p>Effort Values <sup>EV</sup> are base stats gained by defeating Pokémon in battle, based on the species of the Pokémon defeated EVs are assigned. Each Pokémon species has a set EV stat they assign upon defeat.</p><p>The stats gained from EVs are applied immediately after battle.</p><p>A Pokémon have a maximum amount of EVs it can gain total and per stat.</p><p>A Pokémon's EVs are not visible In-Game.</p>";
var fdataShiny = "<p>A Pokémon in rare situations are able to appear in their Shiny forms. Any Pokémon either encountered in the wild or bred has a 1/4096 chance of being Shiny.</p><p>The odds of a Shiny wild encounter is increased by the amount of times the Pokémon species have been battled. After reaching 500 encounters with the Pokémon the odds of the encounter being Shiny is at a maximum of 1/683.</p><h3>Masuda Method</h3><p>When breeding two Pokémon which originated from games with different languages to each other the odds of the Pokémon hatched being Shiny is increased to 1/683.</p>";
var mechanicTitles1 = ["Catching", "Experience", "Evolution", "Breeding", "Trade", "Type Effectiveness", "Status Conditions", "Moves", "Stats", "Shiny"];
var mechanicTitles2 = ["Roaming", "C-Gear", "Hidden Grottoes", "Battle Subway", "Battle Institute", "Pokémon World Championship"];
var mechanicContent1 = [fdataCatching, fdataExperience, fdataEvolution, fdataBreeding, fdataTrade, fdataTypeEffectiveness, fdataStatusConditions, fdataMoves, fdataStats, fdataShiny];
var mechanicContent2 = ["", "", "", "", "", ""];
var mechanicOptionsTitle = [mechanicTitles1, mechanicTitles2];
var mechanicOptions = [mechanicContent1, mechanicContent2];