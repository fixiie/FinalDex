function config(GameMetadata) {
    GameFullName = GameMetadata["Game"][GameID - 1]["Full Name"];
    GameName = GameMetadata["Game"][GameID - 1]["Name"];
    Region = GameMetadata["Game"][GameID - 1]["Region"];
    document.title = GameID + ": " + GameFullName;
}


var Egg;
var Ability;
var HeldItem;
var Stats;
var Gender;
var Generation;

var ImageType_Extension;
var ImageType_Name;
var ImageType_Path;
var JSONPath_Ability;
var JSONPath_AbilityFlavor;
var JSONPath_AbilityReference;
var JSONPath_Area;
var JSONPath_BaseStats;
var JSONPath_CatchRate;
var JSONPath_Category;
var JSONPath_EggGroup;
var JSONPath_EvolutionMethod;
var JSONPath_EvolutionSpecie;
var JSONPath_EvolutionStage;
var JSONPath_EVYield;
var JSONPath_ExclusiveFeature;
var JSONPath_ExclusiveItem;
var JSONPath_ExclusivePokémon;
var JSONPath_ExperienceYield;
var JSONPath_GenderRatio;
var JSONPath_HatchRateEggCycle;
var JSONPath_HatchRateSteps;
var JSONPath_HeldItem;
var JSONPath_HeldItemPercentage;
var JSONPath_LevelingRate;
var JSONPath_Location;
var JSONPath_LocationConnection;
var JSONPath_LocationDescription;
var JSONPath_LocationNavigation;
var JSONPath_LocationSlogan;
var JSONPath_MoveAccuracy;
var JSONPath_MoveCategory;
var JSONPath_MoveDescription;
var JSONPath_MoveID;
var JSONPath_MoveMachine;
var JSONPath_MoveName;
var JSONPath_MovePower;
var JSONPath_MovePP;
var JSONPath_MoveTutor;
var JSONPath_MoveType;
var JSONPath_Pokédex;
var JSONPath_PokédexEntry;
var JSONPath_Type;
var JSONPath_Typechart;
var MEDIAPath_Character_Battle;
var MEDIAPath_Currency;
var MEDIAPath_Encounter;
var MEDIAPath_ExclusiveItem;
var MEDIAPath_Item_Bag;
var MEDIAPath_Map;
var MEDIAPath_Pocket_Icon;
var MEDIAPath_Pokémon_Box;
var MEDIAPath_Pokémon_Portrait;
var MEDIAPath_Type_Category;
var MEDIAPath_Type_Icon;
var MEDIAPath_Type_Symbol;
var MEDIAPath_Type_Text;

var JSONPath_Path;
var JSONPath_Form;
var JSONPath_Reference;



MEDIAPath_Character_Battle = "HGSS";












if (GameID == 1) {
    JSONPath_PokédexEntry = "Red";
    JSONPath_Area = "Red";
}
if (GameID == 2) {
    JSONPath_PokédexEntry = "Blue";
    JSONPath_Area = "Blue";
}
if (GameID == 3) {
    JSONPath_PokédexEntry = "Yellow";
    JSONPath_CatchRate = "Yellow";
    JSONPath_HeldItem = "Yellow";
    JSONPath_HeldItemPercentage = ["100%"];
    ImageType_Name = ["Yellow","Official","HOME"];
    ImageType_Path = ["Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG"];
    JSONPath_Area = "Yellow";
}
if (GameID == 4) {
    JSONPath_PokédexEntry = "Gold";
    ImageType_Name = ["Gold","Official","HOME"];
    ImageType_Path = ["Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG"];
    JSONPath_Area = "Gold";
}
if (GameID == 5) {
    JSONPath_PokédexEntry = "Silver";
    ImageType_Name = ["Silver","Official","HOME"];
    ImageType_Path = ["Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG"];
    JSONPath_Area = "Silver";
}
if (GameID == 6) {
    JSONPath_PokédexEntry = "Crystal";
    JSONPath_Category = "Crystal";
    MEDIAPath_Encounter = "Crystal";
    ImageType_Name = ["Crystal","Crystal","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_Area = "Crystal";
    JSONPath_LocationConnection = "Crystal";
    JSONPath_MoveDescription = "Crystal";
    JSONPath_MoveTutor = "Crystal";
}
if (GameID == 7) {
    JSONPath_PokédexEntry = "Ruby";
    JSONPath_Area = "Ruby";
    JSONPath_Location = "Ruby";
    JSONPath_LocationConnection = "Ruby";
}
if (GameID == 8) {
    JSONPath_PokédexEntry = "Sapphire";
    JSONPath_Area = "Sapphire";
    JSONPath_Location = "Sapphire";
    JSONPath_LocationConnection = "Sapphire";
}
if (GameID == 9) {
    JSONPath_PokédexEntry = "";
    MEDIAPath_Map = "Colosseum";
    MEDIAPath_Type_Text = "Colosseum";
    ImageType_Name = ["Colosseum","Official","HOME"];
    ImageType_Path = ["Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG"];
    JSONPath_Area = "Colosseum";
    JSONPath_Location = "Colosseum";
    JSONPath_LocationConnection = "Colosseum";
    JSONPath_LocationDescription = "Colosseum";
    JSONPath_LocationSlogan = "Colosseum";
    JSONPath_LocationNavigation = "Colosseum";
    JSONPath_MoveDescription = "Colosseum";
    JSONPath_MoveID = "Colosseum";
    JSONPath_MovePower = "Colosseum";
}
if (GameID == 10) {
    JSONPath_PokédexEntry = "FireRed";
    JSONPath_Area = "FireRed";
    JSONPath_Path = "FireRed";
    JSONPath_Form = "FireRed";
}
if (GameID == 11) {
    JSONPath_PokédexEntry = "LeafGreen";
    JSONPath_Area = "LeafGreen";
    JSONPath_Path = "LeafGreen";
    JSONPath_Form = "LeafGreen";
}
if (GameID == 12) {
    JSONPath_PokédexEntry = "Emerald";
    MEDIAPath_Item_Bag = "Emerald";
    MEDIAPath_Encounter = "Emerald";
    ImageType_Name = ["Emerald","Emerald","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_Area = "Emerald";
    JSONPath_Location = "Emerald";
    JSONPath_LocationConnection = "Emerald";
    JSONPath_LocationDescription = "Emerald";
    JSONPath_LocationSlogan = "Emerald";
    JSONPath_LocationNavigation = "Emerald";
    JSONPath_MoveDescription = "Emerald";
    JSONPath_MoveTutor = "Emerald";
    JSONPath_Path = "Emerald";
    JSONPath_Form = "Emerald";
}
if (GameID == 13) {
    JSONPath_PokédexEntry = "";
    MEDIAPath_Map = "XD";
    MEDIAPath_Type_Text = "XD";
    ImageType_Name = ["XD","XD","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_Area = "XD";
    JSONPath_EvolutionMethod = "XD";
    JSONPath_Location = "XD";
    JSONPath_LocationConnection = "XD";
    JSONPath_LocationDescription = "XD";
    JSONPath_LocationSlogan = "XD";
    JSONPath_LocationNavigation = "XD";
    JSONPath_MoveDescription = "XD";
    JSONPath_MoveTutor = "XD";
    JSONPath_MoveID = "XD";
    JSONPath_MovePower = "XD";
}
if (GameID == 14) {
    JSONPath_PokédexEntry = "Diamond";
    JSONPath_Area = "Diamond";
}
if (GameID == 15) {
    JSONPath_PokédexEntry = "Pearl";
    JSONPath_HeldItem = "Pearl";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    JSONPath_Area = "Pearl";
}
if (GameID == 16) {
    JSONPath_Pokédex = ["Enhanced Sinnoh Pokédex_Pt"];
    JSONPath_PokédexEntry = "Platinum";
    MEDIAPath_Item_Bag = "Platinum";
    MEDIAPath_Encounter = "Platinum";
    MEDIAPath_Pocket_Icon = "Platinum";
    ImageType_Name = ["Platinum","Platinum","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_Area = "Platinum";
    JSONPath_Location = "Platinum";
    JSONPath_LocationConnection = "Platinum";
    JSONPath_LocationDescription = "Platinum";
    JSONPath_LocationSlogan = "Platinum";
    JSONPath_LocationNavigation = "Platinum";
    JSONPath_MoveDescription = "Platinum";
    JSONPath_MoveTutor = "Platinum";
    JSONPath_Reference = "Platinum";
}
if (GameID == 17) {
    JSONPath_PokédexEntry = "HeartGold";
    JSONPath_Area = "HeartGold";
}
if (GameID == 18) {
    JSONPath_PokédexEntry = "SoulSilver";
    JSONPath_Area = "SoulSilver";
}
if (GameID == 19) {
    JSONPath_PokédexEntry = "Black";
    JSONPath_Area = "Black";
    JSONPath_LocationConnection = "Black";
    JSONPath_LocationDescription = "Black";
}
if (GameID == 20) {
    JSONPath_PokédexEntry = "White";
    JSONPath_Area = "White";
    JSONPath_LocationConnection = "White";
    JSONPath_LocationDescription = "White";
}
if (GameID == 21) {
    JSONPath_PokédexEntry = "Black 2";
    JSONPath_Area = "Black 2";
    JSONPath_LocationConnection = "Black 2";
    JSONPath_LocationDescription = "Black 2";
}
if (GameID == 22) {
    JSONPath_PokédexEntry = "White 2";
    JSONPath_Area = "White 2";
    JSONPath_LocationConnection = "White 2";
    JSONPath_LocationDescription = "White 2";
}
if (GameID == 23) {
    JSONPath_PokédexEntry = "X";
    JSONPath_Area = "X";
}
if (GameID == 24) {
    JSONPath_PokédexEntry = "Y";
    JSONPath_Area = "Y";
}
if (GameID == 25) {
    JSONPath_PokédexEntry = "Omega Ruby";
    JSONPath_Area = "Omega Ruby";
    JSONPath_Location = "Omega Ruby";
    JSONPath_LocationConnection = "Omega Ruby";
}
if (GameID == 26) {
    JSONPath_PokédexEntry = "Alpha Sapphire";
    JSONPath_Area = "Alpha Sapphire";
    JSONPath_Location = "Alpha Sapphire";
    JSONPath_LocationConnection = "Alpha Sapphire";
}
if (GameID == 27) {
    JSONPath_PokédexEntry = "Sun";
    JSONPath_Area = "Sun";
    JSONPath_LocationConnection = "Sun";
}
if (GameID == 28) {
    JSONPath_PokédexEntry = "Moon";
    JSONPath_Area = "Moon";
    JSONPath_LocationConnection = "Moon";
}
if (GameID == 29) {
    JSONPath_PokédexEntry = "Ultra Sun";
    JSONPath_Area = "Ultra Sun";
    JSONPath_LocationConnection = "Ultra Sun";
}
if (GameID == 30) {
    JSONPath_PokédexEntry = "Ultra Moon";
    JSONPath_Area = "Ultra Moon";
    JSONPath_LocationConnection = "Ultra Moon";
}
if (GameID == 31) {
    JSONPath_PokédexEntry = "Lets Go Pikachu";
    JSONPath_Area = "Lets Go Pikachu";
    JSONPath_MoveTutor = "Lets Go Pikachu";
    JSONPath_Reference = "Lets Go Pikachu";
}
if (GameID == 32) {
    JSONPath_PokédexEntry = "Lets Go Eevee";
    JSONPath_Area = "Lets Go Eevee";
    JSONPath_MoveTutor = "Lets Go Eevee";
    JSONPath_Reference = "Lets Go Eevee";
}
if (GameID == 33) {
    JSONPath_PokédexEntry = "Sword";
    MEDIAPath_Map = "Sword";
    JSONPath_Area = "Sword";
}
if (GameID == 34) {
    JSONPath_PokédexEntry = "Shield";
    MEDIAPath_Map = "Shield";
    JSONPath_Area = "Shield";
}



if (GameID >= 1 && GameID <= 2) {
    JSONPath_CatchRate = "RB";
    JSONPath_HeldItem = "RB";
    JSONPath_HeldItemPercentage = ["100%"];
    ImageType_Name = ["RB","RB-Recolor","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG","PNG"];
}
if (GameID >= 1 && GameID <= 3) {
    Generation = 1;
    JSONPath_Pokédex = [];
    MEDIAPath_Map = "RBY";
    MEDIAPath_Encounter = "RBY";
    JSONPath_ExclusivePokémon = ["Red","Blue","Yellow"];
    JSONPath_ExclusiveItem = ["Red","Blue","Yellow"];
    MEDIAPath_ExclusiveItem = ["","",""]
    JSONPath_ExclusiveFeature = ["Red","Blue","Yellow"];
    JSONPath_Location = "RBY";
    JSONPath_LocationConnection = "RBY";
    JSONPath_LocationDescription = "RBY";
    JSONPath_LocationSlogan = "RBY";
    JSONPath_LocationNavigation = "RBY";
    JSONPath_Reference = "RBY";
}

if (GameID >= 4 && GameID <= 5) {
    MEDIAPath_Encounter = "GS";
    JSONPath_LocationConnection = "GS";
    JSONPath_MoveDescription = "GS";
}
if (GameID >= 4 && GameID <= 6) {
    Generation = 2;
    JSONPath_Pokédex = ["New Pokédex_GSC"];
    JSONPath_HeldItem = "GSC";
    JSONPath_HeldItemPercentage = ["2%","23%"];
    MEDIAPath_Map = "GSC";
    MEDIAPath_Pocket_Icon = "GSC";
    JSONPath_ExclusivePokémon = ["Gold","Silver","Crystal"];
    JSONPath_ExclusiveItem = ["Gold","Silver","Crystal"];
    MEDIAPath_ExclusiveItem = ["","",""]
    JSONPath_ExclusiveFeature = ["Gold","Silver","Crystal"];
    JSONPath_Location = "GSC";
    JSONPath_LocationDescription = "GSC";
    JSONPath_LocationSlogan = "GSC";
    JSONPath_LocationNavigation = "GSC";
    JSONPath_Reference = "GSC";
}
if (GameID >= 7 && GameID <= 8) {
    MEDIAPath_Item_Bag = "RS";
    MEDIAPath_Encounter = "RS";
    ImageType_Name = ["RS","Official","HOME"];
    ImageType_Path = ["Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG"];
    JSONPath_LocationDescription = "RS";
    JSONPath_LocationSlogan = "RS";
    JSONPath_LocationNavigation = "RS";
    JSONPath_MoveDescription = "RS";
    JSONPath_MoveTutor = "RS";
    JSONPath_Reference = "RS";
}
if (GameID >= 7 && GameID <= 13) {
    Generation = 3;
}

if (GameID >= 7 && GameID <= 8 || GameID >= 10 && GameID <= 12) {
    JSONPath_ExclusiveItem = ["Ruby","Sapphire","Emerald","FireRed","LeafGreen"];
    MEDIAPath_ExclusiveItem = ["RS","RS","Emerald","FRLG","FRLG"];
    JSONPath_ExclusiveFeature = ["Ruby","Sapphire","Emerald","FireRed","LeafGreen"];
    JSONPath_AbilityFlavor = "RSEFRLG";
    JSONPath_MovePower = "RSEFRLG";
    JSONPath_MoveID = "RSEFRLG";
}
if (GameID >= 7 && GameID <= 8 || GameID == 12) {
    JSONPath_Pokédex = ["Hoenn Pokédex_RSE"];
    JSONPath_HeldItem = "RSE";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Map = "RSE";
    MEDIAPath_Type_Text = "RSE";
    JSONPath_ExclusivePokémon = ["Ruby","Sapphire","Emerald"];
    JSONPath_MoveMachine = "RSE";
}
if (GameID >= 9 && GameID <= 11) {
    JSONPath_EvolutionMethod = "FRLGCol";
}
if (GameID >= 9 && GameID <= 11 || GameID == 13) {
    JSONPath_MoveMachine = "FRLGColXD";
}
if (GameID >= 9 && GameID <= 11 || GameID >= 12 && GameID <= 13) {
    JSONPath_Reference = "FRLGEColXD";
}
if (GameID >= 10 && GameID <= 11) {
    JSONPath_Pokédex = ["Kanto Pokédex_FRLG"];
    JSONPath_HeldItem = "FRLG";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Item_Bag = "FRLG";
    MEDIAPath_Map = "FRLG";
    MEDIAPath_Encounter = "FRLG";
    MEDIAPath_Type_Text = "FRLG";
    ImageType_Name = ["FRLG","Official","HOME"];
    ImageType_Path = ["Battle","Art","Art"];
    ImageType_Extension = ["PNG","PNG","PNG"];
    JSONPath_ExclusivePokémon = ["FireRed","LeafGreen"];
    JSONPath_Location = "FRLG";
    JSONPath_LocationConnection = "FRLG";
    JSONPath_LocationDescription = "FRLG";
    JSONPath_LocationSlogan = "FRLG";
    JSONPath_LocationNavigation = "FRLG";
    JSONPath_MoveDescription = "FRLG";
    JSONPath_MoveTutor = "FRLG";
}
if (GameID == 9 || GameID == 13) {
    JSONPath_Pokédex = ["Strategy Memo (Alphabetical)_ColXD","Strategy Memo (Heaviest)_ColXD","Strategy Memo (Lightest)_ColXD","Strategy Memo (Tallest)_ColXD","Strategy Memo (Shortest)_ColXD"];
    MEDIAPath_Item_Bag = "ColXD";
    MEDIAPath_Currency = "ColXD";
    JSONPath_ExclusivePokémon = ["Colosseum","XD"];
    JSONPath_ExclusiveItem = ["Colosseum","XD"];
    MEDIAPath_ExclusiveItem = ["ColXD","ColXD"];
    JSONPath_ExclusiveFeature = ["Colosseum","XD"];
    JSONPath_AbilityFlavor = "ColXD";
}
if (GameID >= 14 && GameID <= 18) {
    Generation = 4;
    JSONPath_ExclusiveItem = ["Diamond","Pearl","Platinum","HeartGold","SoulSilver"];
    MEDIAPath_ExclusiveItem = ["DP","DP","Platinum","HGSS","HGSS"];
    JSONPath_ExclusiveFeature = ["Diamond","Pearl","Platinum","HeartGold","SoulSilver"];
}
if (GameID >= 14 && GameID <= 15) {
    JSONPath_Pokédex = ["Sinnoh Pokédex_DP"];
    MEDIAPath_Item_Bag = "DP";
    MEDIAPath_Encounter = "DP";
    MEDIAPath_Pocket_Icon = "DP";
    ImageType_Name = ["DP","DP","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_Location = "DP";
    JSONPath_LocationConnection = "DP";
    JSONPath_LocationDescription = "DP";
    JSONPath_LocationSlogan = "DP";
    JSONPath_LocationNavigation = "DP";
    JSONPath_MoveDescription = "DP";
    JSONPath_MoveTutor = "DP";
    JSONPath_MoveAccuracy = "DP";
    JSONPath_Reference = "DP";
}
if (GameID == 14 || GameID == 16) {
    JSONPath_HeldItem = "DPt";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
}
if (GameID >= 14 && GameID <= 16) {
    MEDIAPath_Map = "DPPt";
    JSONPath_ExclusivePokémon = ["Diamond","Pearl","Platinum"];
    JSONPath_AbilityFlavor = "DPPt";
    JSONPath_MoveMachine = "DPPt";
}
if (GameID >= 16 && GameID <= 18) {
    JSONPath_MoveAccuracy = "PtHGSS";
}
if (GameID >= 17 && GameID <= 18) {
    JSONPath_Pokédex = ["Johto Pokédex_HGSS"];
    JSONPath_HeldItem = "HGSS";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Item_Bag = "HGSS";
    MEDIAPath_Map = "HGSS";
    MEDIAPath_Encounter = "HGSS";
    MEDIAPath_Pocket_Icon = "HGSS";
    ImageType_Name = ["HGSS","HGSS","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_ExclusivePokémon = ["HeartGold","SoulSilver"];
    JSONPath_Location = "HGSS";
    JSONPath_LocationConnection = "HGSS";
    JSONPath_LocationDescription = "HGSS";
    JSONPath_LocationSlogan = "HGSS";
    JSONPath_LocationNavigation = "HGSS";
    JSONPath_AbilityFlavor = "HGSS";
    JSONPath_MoveDescription = "HGSS";
    JSONPath_MoveTutor = "HGSS";
    JSONPath_MoveMachine = "HGSS";
    JSONPath_Reference = "HGSS";
}
if (GameID >= 19 && GameID <= 22) {
    Generation = 5;
    JSONPath_ExclusiveItem = ["Black","White","Black 2","White 2"];
    MEDIAPath_ExclusiveItem = ["BW","BW","B2W2","B2W2"];
    JSONPath_ExclusiveFeature = ["Black","White","Black 2","White 2"];
}
if (GameID >= 19 && GameID <= 20) {
    JSONPath_Pokédex = ["Unova Pokédex_BW"];
    JSONPath_HeldItem = "BW";
    JSONPath_HeldItemPercentage = ["1%","5%","50%","100%"];
    MEDIAPath_Item_Bag = "BW";
    MEDIAPath_Map = "BW";
    MEDIAPath_Encounter = "BW";
    JSONPath_ExclusivePokémon = ["Black","White"];
    JSONPath_EVYield = "BW";
    JSONPath_Location = "BW";
    JSONPath_LocationSlogan = "BW";
    JSONPath_LocationNavigation = "BW";
    JSONPath_MoveDescription = "BW";
    JSONPath_MoveTutor = "BW";
    JSONPath_Reference = "BW";
}
if (GameID >= 21 && GameID <= 22) {
    JSONPath_Pokédex = ["New Unova Pokédex_B2W2"];
    JSONPath_Ability = "B2W2";
    JSONPath_HeldItem = "B2W2";
    JSONPath_HeldItemPercentage = ["1%","5%","50%","100%"];
    MEDIAPath_Item_Bag = "B2W2";
    MEDIAPath_Map = "B2W2";
    MEDIAPath_Encounter = "B2W2";
    JSONPath_ExclusivePokémon = ["Black 2","White 2"];
    JSONPath_Location = "B2W2";
    JSONPath_LocationSlogan = "B2W2";
    JSONPath_LocationNavigation = "B2W2";
    JSONPath_MoveDescription = "B2W2";
    JSONPath_MoveTutor = "B2W2";
    JSONPath_Reference = "B2W2";
}
if (GameID >= 23 && GameID <= 26) {
    Generation = 6;
    JSONPath_ExclusiveItem = ["X","Y","Omega Ruby","Alpha Sapphire"];
    MEDIAPath_ExclusiveItem = ["XY","XY","ORAS","ORAS"];
    JSONPath_ExclusiveFeature = ["X","Y","Omega Ruby","Alpha Sapphire"];
}
if (GameID >= 23 && GameID <= 24) {
    JSONPath_Pokédex = ["Central Kalos Pokédex_XY","Coastal Kalos Pokédex_XY","Mountain Kalos Pokédex_XY"];
    JSONPath_HeldItem = "XY";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Item_Bag = "XY";
    MEDIAPath_Map = "XY";
    MEDIAPath_Encounter = "XY";
    MEDIAPath_Pocket_Icon = "XY";
    JSONPath_ExclusivePokémon = ["X","Y"];
    JSONPath_Location = "XY";
    JSONPath_LocationConnection = "XY";
    JSONPath_LocationDescription = "XY";
    JSONPath_LocationSlogan = "XY";
    JSONPath_LocationNavigation = "XY";
    JSONPath_MoveDescription = "XY";
    JSONPath_MoveTutor = "XY";
    JSONPath_MoveMachine = "XY";
    JSONPath_MoveID = "XY";
    JSONPath_Reference = "XY";
}
if (GameID >= 25 && GameID <= 28) {
    JSONPath_CatchRate = "ORASSM";
}
if (GameID >= 25 && GameID <= 26) {
    JSONPath_Pokédex = ["Hoenn Pokédex_ORAS"];
    JSONPath_HeldItem = "ORAS";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Item_Bag = "ORAS";
    MEDIAPath_Map = "ORAS";
    MEDIAPath_Encounter = "ORAS";
    MEDIAPath_Pocket_Icon = "ORAS";
    JSONPath_ExclusivePokémon = ["Alpha Sapphire","Omega Ruby"];
    JSONPath_LocationDescription = "ORAS";
    JSONPath_LocationSlogan = "ORAS";
    JSONPath_LocationNavigation = "ORAS";
    JSONPath_MoveDescription = "ORAS";
    JSONPath_MoveTutor = "ORAS";
    JSONPath_MoveMachine = "ORAS";
    JSONPath_MoveID = "ORAS";
    JSONPath_Reference = "ORAS";
}
if (GameID == 27 || GameID == 29) {
    JSONPath_EvolutionMethod = "Sun,Ultra Sun";
}
if (GameID == 28 || GameID == 30) {
    JSONPath_EvolutionMethod = "Moon,Ultra Moon";
}
if (GameID >= 27 && GameID <= 32) {
    Generation = 7;
    JSONPath_ExclusiveFeature = ["Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee"];
}
if (GameID >= 27 && GameID <= 30) {
    MEDIAPath_Encounter = "SMUSUM";
    MEDIAPath_Pocket_Icon = "SMUSUM";
    MEDIAPath_Type_Text = "SMUSUM";
    MEDIAPath_Pokémon_Box = "SMUSUM";
    JSONPath_ExclusiveItem = ["Sun","Moon","Ultra Sun","Ultra Moon"];
    MEDIAPath_ExclusiveItem = ["SM","SM","USUM","USUM"];
    JSONPath_MoveMachine = "SMUSUM";
    JSONPath_MovePower = "SMUSUM";
    JSONPath_MovePP = "SMUSUM";
}
if (GameID >= 27 && GameID <= 28) {
    JSONPath_Pokédex = ["Alola Pokédex_SM","Melemele Pokédex_SM","Akala Pokédex_SM","Ula'ula Pokédex_SM","Poni Pokédex_SM"];
    JSONPath_ExperienceYield = "SM";
    JSONPath_HeldItem = "SM";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Item_Bag = "SM";
    MEDIAPath_Map = "SM";
    JSONPath_ExclusivePokémon = ["Sun","Moon"];
    JSONPath_Location = "SM";
    JSONPath_LocationDescription = "SM";
    JSONPath_LocationSlogan = "SM";
    JSONPath_LocationNavigation = "SM";
    JSONPath_AbilityFlavor = "SM";
    JSONPath_MoveDescription = "SM";
    JSONPath_MoveTutor = "SM";
    JSONPath_MoveID = "SM";
    JSONPath_Reference = "SM";
}
if (GameID >= 29 && GameID <= 30) {
    JSONPath_Pokédex = ["Alola Pokédex_USUM","Melemele Pokédex_USUM","Akala Pokédex_USUM","Ula'ula Pokédex_USUM","Poni Pokédex_USUM"];
    JSONPath_CatchRate = "USUM";
    JSONPath_HeldItem = "USUM";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Item_Bag = "USUM";
    MEDIAPath_Map = "USUM";
    JSONPath_ExclusivePokémon = ["Ultra Sun","Ultra Moon"];
    JSONPath_Location = "USUM";
    JSONPath_LocationDescription = "USUM";
    JSONPath_LocationSlogan = "USUM";
    JSONPath_LocationNavigation = "USUM";
    JSONPath_AbilityFlavor = "USUM";
    JSONPath_MoveDescription = "USUM";
    JSONPath_MoveTutor = "USUM";
    JSONPath_MoveID = "USUM";
    JSONPath_Reference = "USUM";
}
if (GameID >= 31 && GameID <= 32) {
    JSONPath_Pokédex = ["Kanto Pokédex_LGPE"];
    JSONPath_CatchRate = "LGPE";
    MEDIAPath_Item_Bag = "LGPE";
    MEDIAPath_Type_Text = "LGPE";
    MEDIAPath_Map = "LGPE";
    MEDIAPath_Encounter = "LGPE";
    MEDIAPath_Pocket_Icon = "LGPE";
    MEDIAPath_Pokémon_Box = "LGPE";
    JSONPath_HeldItem = "";
    JSONPath_HeldItemPercentage = [];
    JSONPath_ExclusivePokémon = ["Lets Go Pikachu","Lets Go Eevee"];
    JSONPath_ExclusiveItem = ["Lets Go Pikachu","Lets Go Eevee"];
    MEDIAPath_ExclusiveItem = ["LGPE","LGPE"];
    JSONPath_EvolutionMethod = "LGPE";
    JSONPath_Location = "LGPE";
    JSONPath_LocationConnection = "LGPE";
    JSONPath_LocationDescription = "LGPE";
    JSONPath_LocationSlogan = "LGPE";
    JSONPath_LocationNavigation = "LGPE";
    JSONPath_MoveDescription = "LGPE";
    JSONPath_MoveMachine = "LGPE";
    JSONPath_MovePower = "LGPE";
    JSONPath_MovePP = "LGPE";
    JSONPath_MoveID = "LGPE";
}
if (GameID >= 33 && GameID <= 34) {
    Generation = 8;
    JSONPath_Pokédex = ["Galar Pokédex_SwSh","Isle of Armor Pokédex_SwSh","Crown Tundra Pokédex_SwSh"];
    JSONPath_HeldItem = "SwSh";
    JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    MEDIAPath_Pocket_Icon = "SwSh";
    MEDIAPath_Type_Text = "SwSh";
    ImageType_Name = ["SwSh","SwSh","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_ExclusivePokémon = ["Sword","Shield","Isle of Armor","Crown Tundra"];
    JSONPath_ExclusiveItem = ["Sword","Shield","Isle of Armor","Crown Tundra"];
    MEDIAPath_ExclusiveItem = ["VIII","VIII","VIII","VIII"];
    JSONPath_ExclusiveFeature = ["Sword","Shield","Isle of Armor","Crown Tundra"];
    JSONPath_Location = "SwSh";
    JSONPath_LocationConnection = "SwSh";
    JSONPath_LocationDescription = "SwSh";
    JSONPath_LocationSlogan = "SwSh";
    JSONPath_LocationNavigation = "SwSh";
    JSONPath_AbilityFlavor = "SwSh";
    JSONPath_MoveDescription = "SwSh";
    JSONPath_MoveTutor = "SwSh";
    JSONPath_Reference = "SwSh+DLC";
}

if (Generation >= 1 && Generation <= 2) {
    JSONPath_Category = "1-2";
    MEDIAPath_Currency = "I-II";
    JSONPath_MoveName = "1-2";
}
if (Generation >= 1 && Generation <= 3) {
    JSONPath_ExperienceYield = "1-3";
    JSONPath_EvolutionMethod = "1-3";
}
if (Generation >= 2 && Generation <= 3) {
    JSONPath_EVYield = "2-3";
    JSONPath_MoveCategory = "2-3";
}
if (Generation >= 2 && Generation <= 4) {
    JSONPath_Type = "2-4";
    JSONPath_MoveType = "2-4";
}
if (Generation >= 2 && Generation <= 5) {
    JSONPath_Typechart = "2-5";
    JSONPath_BaseStats = "2-5";
}
if (Generation >= 3 && Generation <= 5) {
    JSONPath_Category = "3-5";
    MEDIAPath_Pokémon_Box = "III-V";
    JSONPath_MoveName = "3-5";
}
if (Generation >= 3 && Generation <= 6) {
    JSONPath_CatchRate = "3-6";
}
if (Generation >= 4 && Generation <= 5) {
    JSONPath_Ability = "4-5";
    MEDIAPath_Currency = "IV-V";
    JSONPath_EvolutionSpecie = "4-5";
}
if (Generation >= 4 && Generation <= 6) {
    JSONPath_MoveCategory = "4-6";
}
if (Generation >= 5 && Generation <= 6) {
    JSONPath_HatchRateSteps = "5-6";
    JSONPath_EVYield = "5-6";
    JSONPath_EvolutionMethod = "5-6";
}
if (Generation >= 6 && Generation <= 7) {
    ImageType_Name = ["VI-VII","VI-VII","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_EvolutionSpecie = "6-7";
    JSONPath_MoveName = "6-7";
}
if (Generation >= 6 && Generation <= 8) {
    JSONPath_Typechart = "6-8";
    JSONPath_Type = "6-8";
    JSONPath_Category = "6-8";
    JSONPath_MoveType = "6-8";
}
if (Generation >= 7 && Generation <= 8) {
    JSONPath_MoveCategory = "7-8";
}
if (Generation >= 4 && Generation <= 7) {
    JSONPath_EvolutionStage = "4-7";
}

if (Generation >= 2 && Generation <= 8) {
    JSONPath_HatchRateEggCycle = "2-8";
}
if (Generation >= 2 && Generation <= 7) {
    JSONPath_EggGroup = "2-7";
}
if (Generation >= 1 && Generation <= 8) {
    JSONPath_GenderRatio = "1-8";
    JSONPath_LevelingRate = "1-8";
    MEDIAPath_Type_Category = "IV";
    MEDIAPath_Type_Icon = "SwSh";
    MEDIAPath_Type_Symbol = "SwSh";
    MEDIAPath_Pokémon_Portrait = "HOME";
}

if (Generation == 2 || Generation == 7) {
    JSONPath_HatchRateSteps = "2+7";
}

if (Generation >= 1 && Generation <= 2 || GameID >= 7 && GameID <= 9  || GameID >= 12 && GameID <= 13 || Generation >= 4 && Generation <= 8) {
    JSONPath_Path = "1-2+RSEColXD+4-8";
    JSONPath_Form = "1-2+RSEColXD+4-8";
}



if (Generation >= 2) {
    Gender = true;
}
else {
    Gender = false;
}

if (Generation >= 2 && GameID != 31 && GameID != 32) {
    Egg = true;
}
else {
    Egg = false;
}

if (Generation <= 2 || GameID == 31 || GameID == 32) {
    Ability = [];
}
else if (Generation >= 3 && Generation <= 4) {
    Ability = ["Primary","Secondary"];
}
else if (Generation >= 5) {
    Ability = ["Primary","Secondary","Hidden"];
}

if (GameID >= 31 && GameID <= 32) {
    HeldItem = false;
}
else {
    HeldItem = true;
}

if (Generation <= 1) {
    Stats = ["HP","Attack","Defense","Special","Speed","Total"];
}
else {
    Stats = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
}

if (Generation == 1) {
    JSONPath_Typechart = "1";
    JSONPath_Type = "1";
    JSONPath_BaseStats = "1";
    MEDIAPath_Pokémon_Box = "III-V";
    JSONPath_EvolutionSpecie = "1";
    JSONPath_EvolutionStage = "1";
    JSONPath_MoveMachine = "1";
    JSONPath_MoveAccuracy = "1";
    JSONPath_MovePower = "1";
    JSONPath_MovePP = "1";
    JSONPath_MoveID = "1";
    JSONPath_MoveType = "1";
    JSONPath_MoveCategory = "1";
}
if (Generation == 2) {
    JSONPath_CatchRate = "2";
    MEDIAPath_Pokémon_Box = "III-V";
    JSONPath_EvolutionSpecie = "2";
    JSONPath_EvolutionStage = "2";
    JSONPath_MoveMachine = "2";
    JSONPath_MoveAccuracy = "2";
    JSONPath_MovePower = "2";
    JSONPath_MovePP = "2";
    JSONPath_MoveID = "2";
}
if (Generation == 3) {
    JSONPath_HatchRateSteps = "3";
    JSONPath_Ability = "3";
    MEDIAPath_Currency = "III";
    JSONPath_EvolutionSpecie = "3";
    JSONPath_EvolutionStage = "3";
    JSONPath_AbilityReference = "3";
    JSONPath_MoveAccuracy = "3";
    JSONPath_MovePP = "3";
}
if (Generation == 4) {
    JSONPath_HatchRateSteps = "4";
    JSONPath_ExperienceYield = "4";
    MEDIAPath_Type_Text = "IV";
    JSONPath_EVYield = "4";
    JSONPath_EvolutionMethod = "4";
    JSONPath_AbilityReference = "4";
    JSONPath_MovePower = "4";
    JSONPath_MovePP = "4";
    JSONPath_MoveID = "4";
}
if (Generation == 5) {
    JSONPath_Type = "5";
    JSONPath_ExperienceYield = "5";
    MEDIAPath_Type_Text = "V";
    ImageType_Name = ["V","V","Official","HOME"];
    ImageType_Path = ["Battle","Battle","Art","Art"];
    ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    JSONPath_AbilityFlavor = "5";
    JSONPath_AbilityReference = "5";
    JSONPath_MoveMachine = "5";
    JSONPath_MoveAccuracy = "5";
    JSONPath_MovePower = "5";
    JSONPath_MovePP = "5";
    JSONPath_MoveID = "5";
    JSONPath_MoveType = "5";
}
if (Generation == 6) {
    JSONPath_Ability = "6";
    JSONPath_ExperienceYield = "6";
    JSONPath_BaseStats = "6";
    MEDIAPath_Currency = "VI";
    MEDIAPath_Type_Text = "VI";
    MEDIAPath_Pokémon_Box = "VI";
    JSONPath_AbilityFlavor = "6";
    JSONPath_AbilityReference = "6";
    JSONPath_MoveAccuracy = "6";
    JSONPath_MovePower = "6";
    JSONPath_MovePP = "6";
}
if (Generation == 7) {
    JSONPath_Ability = "7";
    JSONPath_ExperienceYield = "7";
    JSONPath_BaseStats = "7";
    MEDIAPath_Currency = "VII";
    JSONPath_EVYield = "7";
    JSONPath_AbilityReference = "7";
    JSONPath_MoveAccuracy = "7";
}
if (Generation == 8) {
    JSONPath_Ability = "8";
    JSONPath_EggGroup = "8";
    JSONPath_ExperienceYield = "8";
    JSONPath_BaseStats = "8";
    JSONPath_CatchRate = "8";
    MEDIAPath_Item_Bag = "VIII";
    MEDIAPath_Currency = "VIII";
    MEDIAPath_Pokémon_Box = "VIII";
    JSONPath_EVYield = "8";
    JSONPath_EvolutionSpecie = "8";
    JSONPath_EvolutionStage = "8";
    JSONPath_EvolutionMethod = "8";
    JSONPath_AbilityReference = "8";
    JSONPath_MoveMachine = "8";
    JSONPath_MoveAccuracy = "8";
    JSONPath_MovePower = "8";
    JSONPath_MovePP = "8";
    JSONPath_MoveID = "8";
    JSONPath_MoveName = "8";
}
