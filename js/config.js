function config() {
	GameFullName = finaldataGame[GameID - 1]["Full Name"];
	GameName = finaldataGame[GameID - 1]["Name"];
	Region = finaldataGame[GameID - 1]["Region"];
	document.title = GameID + ": " + GameFullName;
}
var Ability = [];
var Egg;
var Gender;
var Generation;
var HeldItem;
var Friendship;
var ImageType_Extension = [];
var ImageType_Path = [];
var ImageType_Type = [];
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
var JSONPath_ExclusiveFeature = [];
var JSONPath_ExclusiveItem = [];
var JSONPath_ExclusivePokémon = [];
var JSONPath_ExperienceYield;
var JSONPath_Form;
var JSONPath_GenderRatio;
var JSONPath_HatchRateEggCycle;
var JSONPath_HatchRateSteps;
var JSONPath_HeldItem;
var JSONPath_HeldItemPercentage = [];
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
var JSONPath_Path;
var JSONPath_Pokédex = [];
var JSONPath_PokédexEntry;
var JSONPath_Reference;
var JSONPath_Type;
var JSONPath_Typechart;
var JSONPath_Friendship;
var MEDIAPath_Character_Battle;
var MEDIAPath_Currency;
var MEDIAPath_Encounter;
var MEDIAPath_ExclusiveItem = [];
var MEDIAPath_Item_Bag;
var MEDIAPath_Map;
var MEDIAPath_Item_Pocket;
var MEDIAPath_Pokémon_Box;
var MEDIAPath_Pokémon_Portrait;
var MEDIAPath_Type_Category;
var MEDIAPath_Type_Icon;
var MEDIAPath_Type_Symbol;
var MEDIAPath_Type_Text;
var JSONPath_Items;
var JSONPath_MovePriority;
var Stats = [];
var Natures = [];
var JSONPath_MoveReference;
var tempLocationImages = [];
var MEDIAPath_LocationOverworld;
if(GameID == 1) {
	JSONPath_PokédexEntry = "Red";
	JSONPath_Area = "Red";
}
if(GameID == 2) {
	JSONPath_PokédexEntry = "Blue";
	JSONPath_Area = "Blue";
}
if(GameID == 3) {
	JSONPath_PokédexEntry = "Yellow";
	JSONPath_CatchRate = "Yellow";
	JSONPath_HeldItem = "Yellow";
	JSONPath_HeldItemPercentage = ["100%"];
	ImageType_Path = ["Yellow", "Official", "HOME"];
	ImageType_Type = ["Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG"];
	JSONPath_Area = "Yellow";
	MEDIAPath_Character_Battle = "Yellow";
	JSONPath_Items = "Yellow";
	MEDIAPath_LocationOverworld = "Yellow";
}
if(GameID == 4) {
	JSONPath_PokédexEntry = "Gold";
	ImageType_Path = ["Gold", "Official", "HOME"];
	ImageType_Type = ["Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG"];
	JSONPath_Area = "Gold";
}
if(GameID == 5) {
	JSONPath_PokédexEntry = "Silver";
	ImageType_Path = ["Silver", "Official", "HOME"];
	ImageType_Type = ["Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG"];
	JSONPath_Area = "Silver";
}
if(GameID == 6) {
	JSONPath_PokédexEntry = "Crystal";
	JSONPath_Category = "Crystal";
	MEDIAPath_Encounter = "Crystal";
	ImageType_Path = ["Crystal", "Crystal", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_Area = "Crystal";
	JSONPath_LocationConnection = "Crystal";
	JSONPath_MoveDescription = "Crystal";
	JSONPath_MoveTutor = "Crystal";
	MEDIAPath_Character_Battle = "Crystal";
	JSONPath_Items = "Crystal";
	JSONPath_Location = "Crystal";
	MEDIAPath_LocationOverworld = "Crystal";
	tempLocationImages = ["Azalea Town","Azalea Town_Azalea Gym Exterior","Azalea Town_Azalea Gym","Battle Tower","Battle Tower_1F","Battle Tower_2F","Battle Tower_Battle Room","Battle Tower_Elevator","Bellchime Trail","Bellchime Trail_Gate 1F","Bellchime Trail_Gate 2F","Bellchime Trail_Gate 3F","Blackthorn City","Blackthorn City_Blackthorn Gym 1F","Blackthorn City_Blackthorn Gym 2F","Blackthorn City_Blackthorn Gym Exterior","Burned Tower_1F Before","Burned Tower_1F","Burned Tower_B1F","Celadon City","Celadon City_Celadon Gym Exterior","Celadon City_Celadon Gym","Celadon City_Celadon Restaurant","Celadon Department Store","Celadon Game Corner","Celadon Game Corner_Inside","Celadon Mansion","Celadon Mansion_1F","Celadon Mansion_2F","Celadon Mansion_3F","Celadon Mansion_Know It All Room","Celadon Mansion_Rooftop","Cerulean Cape","Cerulean City","Cerulean City_Cerulean Gym Exterior","Cerulean City_Cerulean Gym","Cherrygrove City","Cherrygrove City_Beta","Cianwood City","Cianwood Gym","Cinnabar Gym","Cinnabar Island","Dark Cave_1","Dark Cave_2","Day Care","Diglett's Cave","Diglett's Cave_Entrance Route 11","Diglett's Cave_Entrance Route 2","Dragon's Den","Dragon's Den_Dragon Shrine","Dragon's Den_Entrance","Dragon's Den_Lower Entrance","Ecruteak City","Ecruteak City_Ecruteak Gym Exterior","Ecruteak City_Ecruteak Gym","Fighting Dojo","Fighting Dojo_Exterior","Fuchsia City","Fuchsia City_Fuchsia Gym Exterior","Fuchsia City_Fuchsia Gym","Gate 10 Outside","Gate 11 Outside","Gate 2 Inside","Gate 2 Outside","Gate 7 Outside","Gate 8 Outside","Gate 9 1F","Gate 9 B1F","Gate Inside","Gate Outside","Glitter Lighthouse","Glitter Lighthouse_1F","Glitter Lighthouse_2F","Glitter Lighthouse_3F","Glitter Lighthouse_4F","Glitter Lighthouse_5F","Glitter Lighthouse_6F","Goldenrod Bike Shop_Exterior","Goldenrod City","Goldenrod City_Goldenrod Gym Exterior","Goldenrod City_Goldenrod Gym","Goldenrod City_J","Goldenrod City_JP","Goldenrod Department Store","Goldenrod Department Store_1F","Goldenrod Department Store_2F","Goldenrod Department Store_3F","Goldenrod Department Store_4F","Goldenrod Department Store_5F","Goldenrod Department Store_6F","Goldenrod Department Store_Basement GSC first","Goldenrod Department Store_Basement GSC second","Goldenrod Department Store_Basement GSC third","Goldenrod Department Store_Rooftop","Goldenrod Game Corner","Goldenrod Radio Tower","Goldenrod Radio Tower_1F","Goldenrod Radio Tower_2F","Goldenrod Radio Tower_3F","Goldenrod Radio Tower_4F","Goldenrod Radio Tower_5F","House of Memories_Interior","Ice Path_1F","Ice Path_B1F","Ice Path_B2F","Ice Path_B3F","Ilex Forest","Indigo Plateau","Indigo Plateau_Bruno Room","Indigo Plateau_Champion Room","Indigo Plateau_Hall of Fame","Indigo Plateau_Karen Room","Indigo Plateau_Koga Room","Indigo Plateau_Lobby","Indigo Plateau_Will Room","Kanto Poké Mart","Kanto Pokémon Center JP","Kanto Pokémon Center","Lake of Rage","Lake of Rage_Beta","Lavender Radio Tower","Lavender Radio Tower_1F","Lavender Town","Magnet Train","Mahogany Town","Mahogany Town_Mahogany Gym","Mahogany Town_Shop","Moomoo Farm","Moomoo Farm_Barn","Moomoo Farm_House","Mt. Moon_1F","Mt. Moon_Square","Mt. Mortar_Basement","Mt. Mortar_Entrance","Mt. Mortar_Lower Cave","Mt. Mortar_Upper Cave","Mt. Silver 1F","Mt. Silver 2F","Mt. Silver_2F Full Restore","Mt. Silver_Exterior","Mt. Silver_Summit","names.bat","names.txt","National Park","National Park_Horizontal Gate Interior","National Park_Inner Vertical Gate Exterior","National Park_Outer Horizontal Gate Exterior","National Park_Outer Vertical Gate Exterior","National Park_Vertical Gate Interior","New Bark Town","New Bark Town_Player House 1F","New Bark Town_Player House Exterior","New Bark Town_Player House","Olivine City","Olivine Gym Exterior","Olivine Gym","Pallet Town","Pallet Town_Professor Oak Lab Inside","Pallet Town_Red House 1F","Pallet Town_Red House 2F","Pallet Town_Red House Exterior","Pewter City","Pewter City_Pewter Gym Exterior","Pewter City_Pewter Gym","Pewter City_Pewter Museum of Science","Pokémon Center 2 JP","Pokémon Center 2","Pokémon Center 3","Pokémon Center 4","Pokémon Center 5 JP","Pokémon Center 5","Pokémon Center 6 JP","Pokémon Center 6","Pokémon Center 7 JP","Pokémon Center 7","Pokémon Center 8 JP","Pokémon Center 8","Pokémon Center 9 JP","Pokémon Center 9","Pokémon Center Inside","Pokémon Center JP","Pokémon Center","Pokémon Communication Center 1F","Pokémon Communication Center Administration Office","Pokémon Communication Center","Pokémon League Reception Gate","Power Plant_Exterior","Power Plant_Interior","Rock Tunnel_1F","Rock Tunnel_B1F","Route 1","Route 10","Route 11","Route 12","Route 13","Route 14","Route 15","Route 16","Route 17","Route 18","Route 19","Route 19_Blocked","Route 2","Route 20","Route 21","Route 23_Beta","Route 26","Route 27","Route 28","Route 29","Route 3","Route 30","Route 31","Route 32","Route 33","Route 34","Route 35","Route 36","Route 37","Route 38","Route 39","Route 4","Route 40","Route 41","Route 42","Route 43","Route 44","Route 45","Route 46","Route 5","Route 6","Route 7","Route 8","Route 9","Ruins of Alph","Ruins of Alph_Cecond Chamber","Ruins of Alph_First Chamber","Ruins of Alph_Fourth Chamber","Ruins of Alph_Interior","Ruins of Alph_Item","Ruins of Alph_Puzzle","Ruins of Alph_Third Chamber","S.S. Aqua_1F Rooms","S.S. Aqua_1F","S.S. Aqua_B1F","S.S. Aqua_Captain Cabin","Safari Zone_unused","Saffron City","Saffron City_Copycat House 1F","Saffron City_Mr. Psychic's House","Saffron City_Saffron Gym Exterior","Saffron City_Saffron Gym","Silph Co","Silph Co._1F","Slowpoke Well","Slowpoke Well_B1F","Slowpoke Well_B2F","Sprout Tower","Sprout Tower_1F","Sprout Tower_3F","Team Rocket's Hideout_1F before Team Rocket","Team Rocket's Hideout_B1F","Team Rocket's Hideout_B2F","Team Rocket's Hideout_B3F","The Underground","The Underground_Basement","The Underground_Warehouse","Tin Tower","Tin Tower_1F","Tin Tower_2F","Tin Tower_3F","Tin Tower_4F","Tin Tower_5F","Tin Tower_6F","Tin Tower_7F","Tin Tower_8F","Tin Tower_9F","Tin Tower_Summit","Tohjo Falls","Trainer House_1F","Trainer House_B1F","Trainer House_Outside","Underground Path (Routes 5-6)","Underground Path (Routes 5-6)_1F","Underground Path (Routes 7-8)_Exterior 2","Union Cave_1F","Union Cave_B1F","Union Cave_B2F","Vermilion City","Vermilion City_Vermilion Gym Exterior","Vermilion City_Vermilion Gym","Vermillion City_Pokémon Fan Club Interior","Vermillion City_Pokémon Fan Club","Victory Road_1F","Victory Road_2F","Victory Road_3F","Violet City","Violet City_Beta","Violet City_Pokémon Academy Interior","Violet City_Violet Gym Exterior","Violet City_Violet Gym","Viridian City","Viridian City_Viridian Gym Exterior","Viridian City_Viridian Gym","Whirl Islands_1F NW","Whirl Islands_1F SE","Whirl Islands_1F SW","Whirl Islands_B1F Middle","Whirl Islands_B1F","Whirl Islands_B2F Inner","Whirl Islands_B2F","Whirl Islands_Basement"];
}
if(GameID == 7) {
	JSONPath_PokédexEntry = "Ruby";
	JSONPath_Area = "Ruby";
	JSONPath_Location = "Ruby";
	JSONPath_LocationConnection = "Ruby";
}
if(GameID == 8) {
	JSONPath_PokédexEntry = "Sapphire";
	JSONPath_Area = "Sapphire";
	JSONPath_Location = "Sapphire";
	JSONPath_LocationConnection = "Sapphire";
}
if(GameID == 9) {
	JSONPath_PokédexEntry = "";
	MEDIAPath_Map = "Colosseum";
	MEDIAPath_Type_Text = "Colosseum";
	ImageType_Path = ["Colosseum", "Official", "HOME"];
	ImageType_Type = ["Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG"];
	JSONPath_Area = "Colosseum";
	JSONPath_Location = "Colosseum";
	JSONPath_LocationConnection = "Colosseum";
	JSONPath_LocationDescription = "Colosseum";
	JSONPath_LocationNavigation = "Colosseum";
	JSONPath_MoveDescription = "Colosseum";
	JSONPath_MoveID = "Colosseum";
	JSONPath_MovePower = "Colosseum";
	JSONPath_MoveReference = "Colosseum";
	MEDIAPath_Character_Battle = "Colosseum";
	JSONPath_Items = "Colosseum";
}
if(GameID == 10) {
	JSONPath_PokédexEntry = "FireRed";
	JSONPath_Area = "FireRed";
	JSONPath_Path = "FireRed";
	JSONPath_Form = "FireRed";
}
if(GameID == 11) {
	JSONPath_PokédexEntry = "LeafGreen";
	JSONPath_Area = "LeafGreen";
	JSONPath_Path = "LeafGreen";
	JSONPath_Form = "LeafGreen";
}
if(GameID == 12) {
	JSONPath_PokédexEntry = "Emerald";
	MEDIAPath_Item_Bag = "Emerald";
	MEDIAPath_Encounter = "Emerald";
	ImageType_Path = ["Emerald", "Emerald", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_Area = "Emerald";
	JSONPath_Location = "Emerald";
	JSONPath_LocationConnection = "Emerald";
	JSONPath_LocationSlogan = "Emerald";
	JSONPath_LocationNavigation = "Emerald";
	JSONPath_MoveDescription = "Emerald";
	JSONPath_MoveTutor = "Emerald";
	JSONPath_Path = "Emerald";
	JSONPath_Form = "Emerald";
	MEDIAPath_Character_Battle = "Emerald";
	JSONPath_Items = "Emerald";
	MEDIAPath_LocationOverworld = "Emerald";
}
if(GameID == 13) {
	JSONPath_PokédexEntry = "";
	MEDIAPath_Map = "XD";
	MEDIAPath_Type_Text = "XD";
	ImageType_Path = ["XD", "XD", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_Area = "XD";
	JSONPath_EvolutionMethod = "XD";
	JSONPath_Location = "XD";
	JSONPath_LocationConnection = "XD";
	JSONPath_LocationDescription = "XD";
	JSONPath_LocationNavigation = "XD";
	JSONPath_MoveDescription = "XD";
	JSONPath_MoveTutor = "XD";
	JSONPath_MoveID = "XD";
	JSONPath_MovePower = "XD";
	JSONPath_MoveReference = "XD";
	MEDIAPath_Character_Battle = "XD";
	JSONPath_Items = "XD";
}
if(GameID == 14) {
	JSONPath_PokédexEntry = "Diamond";
	JSONPath_Area = "Diamond";
}
if(GameID == 15) {
	JSONPath_PokédexEntry = "Pearl";
	JSONPath_HeldItem = "Pearl";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	JSONPath_Area = "Pearl";
}
if(GameID == 16) {
	JSONPath_Pokédex = ["Enhanced Sinnoh Pokédex_Pt"];
	JSONPath_PokédexEntry = "Platinum";
	MEDIAPath_Item_Bag = "Platinum";
	MEDIAPath_Encounter = "Platinum";
	MEDIAPath_Item_Pocket = "Platinum";
	ImageType_Path = ["Platinum", "Platinum", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_Area = "Platinum";
	JSONPath_Location = "Platinum";
	JSONPath_LocationConnection = "Platinum";
	JSONPath_LocationDescription = "Platinum";
	JSONPath_LocationSlogan = "Platinum";
	JSONPath_LocationNavigation = "Platinum";
	JSONPath_MoveDescription = "Platinum";
	JSONPath_MoveTutor = "Platinum";
	JSONPath_Reference = "Platinum";
	MEDIAPath_Character_Battle = "Platinum";
	JSONPath_Items = "Platinum";
	MEDIAPath_LocationOverworld = "Platinum";
}
if(GameID == 17) {
	JSONPath_PokédexEntry = "HeartGold";
	JSONPath_Area = "HeartGold";
}
if(GameID == 18) {
	JSONPath_PokédexEntry = "SoulSilver";
	JSONPath_Area = "SoulSilver";
}
if(GameID == 19) {
	JSONPath_PokédexEntry = "Black";
	JSONPath_Area = "Black";
	JSONPath_LocationConnection = "Black";
	JSONPath_LocationDescription = "Black";
    JSONPath_Location = "Black";
	MEDIAPath_LocationOverworld = "Black";
}
if(GameID == 20) {
	JSONPath_PokédexEntry = "White";
	JSONPath_Area = "White";
	JSONPath_LocationConnection = "White";
	JSONPath_LocationDescription = "White";
    JSONPath_Location = "White";
	MEDIAPath_LocationOverworld = "White";
}
if(GameID == 21) {
	JSONPath_PokédexEntry = "Black 2";
	JSONPath_Area = "Black 2";
	JSONPath_LocationConnection = "Black 2";
	JSONPath_LocationDescription = "Black 2";
	MEDIAPath_LocationOverworld = "Black 2";
}
if(GameID == 22) {
	JSONPath_PokédexEntry = "White 2";
	JSONPath_Area = "White 2";
	JSONPath_LocationConnection = "White 2";
	JSONPath_LocationDescription = "White 2";
	MEDIAPath_LocationOverworld = "White 2";
}
if(GameID == 23) {
	JSONPath_PokédexEntry = "X";
	JSONPath_Area = "X";
}
if(GameID == 24) {
	JSONPath_PokédexEntry = "Y";
	JSONPath_Area = "Y";
}
if(GameID == 25) {
	JSONPath_PokédexEntry = "Omega Ruby";
	JSONPath_Area = "Omega Ruby";
	JSONPath_Location = "Omega Ruby";
	JSONPath_LocationConnection = "Omega Ruby";
}
if(GameID == 26) {
	JSONPath_PokédexEntry = "Alpha Sapphire";
	JSONPath_Area = "Alpha Sapphire";
	JSONPath_Location = "Alpha Sapphire";
	JSONPath_LocationConnection = "Alpha Sapphire";
}
if(GameID == 27) {
	JSONPath_PokédexEntry = "Sun";
	JSONPath_Area = "Sun";
	JSONPath_LocationConnection = "Sun";
}
if(GameID == 28) {
	JSONPath_PokédexEntry = "Moon";
	JSONPath_Area = "Moon";
	JSONPath_LocationConnection = "Moon";
}
if(GameID == 29) {
	JSONPath_PokédexEntry = "Ultra Sun";
	JSONPath_Area = "Ultra Sun";
	JSONPath_LocationConnection = "Ultra Sun";
}
if(GameID == 30) {
	JSONPath_PokédexEntry = "Ultra Moon";
	JSONPath_Area = "Ultra Moon";
	JSONPath_LocationConnection = "Ultra Moon";
}
if(GameID == 31) {
	JSONPath_PokédexEntry = "Lets Go Pikachu";
	JSONPath_Area = "Lets Go Pikachu";
	JSONPath_MoveTutor = "Lets Go Pikachu";
	JSONPath_Reference = "Lets Go Pikachu";
}
if(GameID == 32) {
	JSONPath_PokédexEntry = "Lets Go Eevee";
	JSONPath_Area = "Lets Go Eevee";
	JSONPath_MoveTutor = "Lets Go Eevee";
	JSONPath_Reference = "Lets Go Eevee";
}
if(GameID == 33) {
	JSONPath_PokédexEntry = "Sword";
	MEDIAPath_Map = "Sword";
	JSONPath_Area = "Sword";
}
if(GameID == 34) {
	JSONPath_PokédexEntry = "Shield";
	MEDIAPath_Map = "Shield";
	JSONPath_Area = "Shield";
}
if(GameID >= 1 && GameID <= 2) {
	JSONPath_CatchRate = "RB";
	JSONPath_HeldItem = "RB";
	JSONPath_HeldItemPercentage = ["100%"];
	ImageType_Path = ["RB", "RB-Recolor", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG", "PNG"];
	MEDIAPath_Character_Battle = "RB";
	JSONPath_Items = "RB";
	MEDIAPath_LocationOverworld = "RB";
}
if(GameID >= 1 && GameID <= 3) {
	Generation = 1;
	JSONPath_Pokédex = [];
	MEDIAPath_Map = "RBY";
	MEDIAPath_Encounter = "RBY";
	JSONPath_ExclusivePokémon = ["Red", "Blue", "Yellow"];
	JSONPath_ExclusiveItem = ["Red", "Blue", "Yellow"];
	MEDIAPath_ExclusiveItem = ["", "", ""];
	JSONPath_ExclusiveFeature = ["Red", "Blue", "Yellow"];
	JSONPath_Location = "RBY";
	JSONPath_LocationConnection = "RBY";
	JSONPath_LocationSlogan = "RBY";
	JSONPath_LocationNavigation = "RBY";
	JSONPath_Reference = "RBY";
	JSONPath_MoveReference = "RBY";
}
if(GameID >= 4 && GameID <= 5) {
	MEDIAPath_Encounter = "GS";
	JSONPath_LocationConnection = "GS";
	JSONPath_MoveDescription = "GS";
	MEDIAPath_Character_Battle = "GS";
	JSONPath_Items = "GS";
	JSONPath_Location = "GS";
	MEDIAPath_LocationOverworld = "GS";
}
if(GameID >= 4 && GameID <= 6) {
	Generation = 2;
	JSONPath_Pokédex = ["New Pokédex_GSC"];
	JSONPath_HeldItem = "GSC";
	JSONPath_HeldItemPercentage = ["2%", "23%"];
	MEDIAPath_Map = "GSC";
	MEDIAPath_Item_Pocket = "GSC";
	JSONPath_ExclusivePokémon = ["Gold", "Silver", "Crystal"];
	JSONPath_ExclusiveItem = ["Gold", "Silver", "Crystal"];
	MEDIAPath_ExclusiveItem = ["", "", ""];
	JSONPath_ExclusiveFeature = ["Gold", "Silver", "Crystal"];
	JSONPath_LocationSlogan = "GSC";
	JSONPath_LocationNavigation = "GSC";
	JSONPath_Reference = "GSC";
	JSONPath_MoveReference = "GSC";
}
if(GameID >= 7 && GameID <= 8) {
	MEDIAPath_Item_Bag = "RS";
	MEDIAPath_Encounter = "RS";
	ImageType_Path = ["RS", "Official", "HOME"];
	ImageType_Type = ["Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG"];
	JSONPath_LocationSlogan = "RS";
	JSONPath_LocationNavigation = "RS";
	JSONPath_MoveDescription = "RS";
	JSONPath_MoveTutor = "RS";
	JSONPath_Reference = "RS";
	MEDIAPath_Character_Battle = "RS";
	JSONPath_Items = "RS";
	MEDIAPath_LocationOverworld = "RS";
}
if(GameID >= 7 && GameID <= 13) {
	Generation = 3;
}
if((GameID >= 7 && GameID <= 8) || (GameID >= 10 && GameID <= 12)) {
	JSONPath_ExclusiveItem = ["Ruby", "Sapphire", "Emerald", "FireRed", "LeafGreen", ];
	MEDIAPath_ExclusiveItem = ["RS", "RS", "Emerald", "FRLG", "FRLG"];
	JSONPath_ExclusiveFeature = ["Ruby", "Sapphire", "Emerald", "FireRed", "LeafGreen", ];
	JSONPath_AbilityFlavor = "RSEFRLG";
	JSONPath_MovePower = "RSEFRLG";
	JSONPath_MoveID = "RSEFRLG";
	JSONPath_MoveReference = "RSEFRLG";
}
if((GameID >= 7 && GameID <= 8) || GameID == 12) {
	JSONPath_Pokédex = ["Hoenn Pokédex_RSE"];
	JSONPath_HeldItem = "RSE";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Map = "RSE";
	MEDIAPath_Type_Text = "RSE";
	JSONPath_ExclusivePokémon = ["Ruby", "Sapphire", "Emerald"];
	JSONPath_MoveMachine = "RSE";
}
if(GameID >= 9 && GameID <= 11) {
	JSONPath_EvolutionMethod = "FRLGCol";
}
if((GameID >= 9 && GameID <= 11) || GameID == 13) {
	JSONPath_MoveMachine = "FRLGColXD";
}
if((GameID >= 9 && GameID <= 11) || (GameID >= 12 && GameID <= 13)) {
	JSONPath_Reference = "FRLGEColXD";
}
if(GameID >= 10 && GameID <= 11) {
	JSONPath_Pokédex = ["Kanto Pokédex_FRLG"];
	JSONPath_HeldItem = "FRLG";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "FRLG";
	MEDIAPath_Map = "FRLG";
	MEDIAPath_Encounter = "FRLG";
	MEDIAPath_Type_Text = "FRLG";
	ImageType_Path = ["FRLG", "Official", "HOME"];
	ImageType_Type = ["Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "PNG", "PNG"];
	JSONPath_ExclusivePokémon = ["FireRed", "LeafGreen"];
	JSONPath_Location = "FRLG";
	JSONPath_LocationConnection = "FRLG";
	JSONPath_LocationDescription = "FRLG";
	JSONPath_LocationSlogan = "FRLG";
	JSONPath_LocationNavigation = "FRLG";
	JSONPath_MoveDescription = "FRLG";
	JSONPath_MoveTutor = "FRLG";
	MEDIAPath_Character_Battle = "FRLG";
	JSONPath_Items = "FRLG";
	MEDIAPath_LocationOverworld = "FRLG";
}
if(GameID == 9 || GameID == 13) {
	JSONPath_Pokédex = ["Strategy Memo (Alphabetical)_ColXD", "Strategy Memo (Heaviest)_ColXD", "Strategy Memo (Lightest)_ColXD", "Strategy Memo (Tallest)_ColXD", "Strategy Memo (Shortest)_ColXD", ];
	MEDIAPath_Item_Bag = "ColXD";
	MEDIAPath_Currency = "ColXD";
	JSONPath_ExclusivePokémon = ["Colosseum", "XD"];
	JSONPath_ExclusiveItem = ["Colosseum", "XD"];
	MEDIAPath_ExclusiveItem = ["ColXD", "ColXD"];
	JSONPath_ExclusiveFeature = ["Colosseum", "XD"];
	JSONPath_AbilityFlavor = "ColXD";
}
if(GameID >= 14 && GameID <= 18) {
	Generation = 4;
	JSONPath_ExclusiveItem = ["Diamond", "Pearl", "Platinum", "HeartGold", "SoulSilver", ];
	MEDIAPath_ExclusiveItem = ["DP", "DP", "Platinum", "HGSS", "HGSS"];
	JSONPath_ExclusiveFeature = ["Diamond", "Pearl", "Platinum", "HeartGold", "SoulSilver", ];
}
if(GameID >= 14 && GameID <= 15) {
	JSONPath_Pokédex = ["Sinnoh Pokédex_DP"];
	MEDIAPath_Item_Bag = "DP";
	MEDIAPath_Encounter = "DP";
	MEDIAPath_Item_Pocket = "DP";
	ImageType_Path = ["DP", "DP", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_Location = "DP";
	JSONPath_LocationConnection = "DP";
	JSONPath_LocationDescription = "DP";
	JSONPath_LocationSlogan = "DP";
	JSONPath_LocationNavigation = "DP";
	JSONPath_MoveDescription = "DP";
	JSONPath_MoveTutor = "DP";
	JSONPath_MoveAccuracy = "DP";
	JSONPath_Reference = "DP";
	MEDIAPath_Character_Battle = "DP";
	JSONPath_Items = "DP";
	MEDIAPath_LocationOverworld = "DP";
	tempLocationImages = ["Acuity Lakefront","Amity Square","Battle Frontier_Entrance","Battle Park","Battle Tower","Battle Tower_Exterior","Canalave City","Canalave City_Canalave Gym 2F","Canalave City_Canalave Gym 3F","Canalave City_Canalave Gym 4F","Canalave Library_1F","Canalave Library_2F","Canalave Library_3F","Celestic Town","Contest Hall_Entrance","Day Care","Eterna City","Eterna City_Eterna Gym","Eterna City_Galactic Eterna Building 1F","Eterna City_Galactic Eterna Building 2F","Eterna City_Galactic Eterna Building 4F","Eterna Condominiums","Eterna Condominiums_1F","Eterna Condominiums_2F","Eterna Condominiums_3F","Eterna Forest","Eterna Forest_Exterior","Fight Area","Floaroma Flower Shop","Floaroma Flower Shop_Interior","Floaroma Town","Flower Paradise_Shaymin","Fuego Ironworks","Fuego Ironworks_Interior","Fullmoon Island","Fullmoon Island_Cresselia","Gate_Interior","Great Marsh","Great Marsh_Entrance 1F","Hall of Fame","Hall of Origin","Hearthome City","Hearthome City_Pokémon Fan Club Interior","Hearthome City_Pokémon Fan Club","Hearthome Gym","Hotel Grand Lake","Iron Island","Iron Island_1F","Iron Island_B1F L","Iron Island_B1F R","Iron Island_B2F L","Iron Island_B2F R","Iron Island_Exit","Jubilife City","Jubilife City_Global Trade Station Exterior","Jubilife City_Global Trade Station Interior","Jubilife City_Global Trade Station Trade Room","Jubilife City_Jubilife TV","Jubilife City_Jubilife TV_1F","Jubilife City_Jubilife TV_2F","Jubilife City_Jubilife TV_3F","Jubilife City_Jubilife TV_4F","Jubilife City_Jubilife TV_Elevator","Jubilife City_Jubilife TV_Gallery","Jubilife City_Jubilife TV_Global Ranking Room","Jubilife City_Jubilife TV_Group Ranking Room","Lake Acuity","Lake Acuity_Cavern","Lake Valor","Lake Valor_Cavern","Lake Valor_Dry","Lake Verity","Lake Verity_Cavern","Lake Verity_Low","Lost Tower","Lost Tower_1F","Lost Tower_2F","Lost Tower_4F","Lost Tower_5F","Maniac Tunnel_0-9 Unown","Maniac Tunnel_10-25 Unown","Mt. Coronet_4F","Mt. Coronet_6F","Mt. Coronet_7F","Mt. Coronet_Snowy Area","names.bat","names.txt","Newmoon Island","Newmoon Island_Darkrai","Old Chateau_2F","Old Chateau_Dining Room","Old Chateau_Entrance","Oreburgh City","Oreburgh Gate_1F","Oreburgh Gate_B1F","Oreburgh Gym","Oreburgh Mine_B1F","Oreburgh Mine_B2F","Oreburgh Mining Museum","Oreburgh Mining Museum_Interior","Pal Park","Pal Park_Forest","Pastoria City","Pastoria Gym","Pokémon Center_Inside","Pokémon League","Pokémon League_Aaron room","Pokémon League_Bertha room","Pokémon League_Cynthia Room Entrance","Pokémon League_Cynthia room","Pokémon League_Elite Four Connecting Room","Pokémon League_Elite Four Entrance","Pokémon League_Flint room","Pokémon League_Lobby","Pokémon League_Lucian room","Pokémon League_Vista View","Pokémon Mansion_Exterior","Pokémon Mansion_Interior","Ravaged Path","Resort Area","Ribbon Syndicate_1F","Ribbon Syndicate_2F","Route 201","Route 202","Route 203","Route 204","Route 205","Route 206","Route 207","Route 208","Route 209","Route 210","Route 210_Café Cabin","Route 210_Café Cabin_Interior","Route 211","Route 212","Route 213","Route 214","Route 215","Route 216","Route 217","Route 218","Route 219","Route 220","Route 221","Route 222","Route 223","Route 224","Route 224_Oaks Letter","Route 225","Route 226","Route 227","Route 228","Route 229","Route 230","Sandgem Town","Sandgem Town_Rowan Lab","Seabreak Path","Secret Base","Sendoff Spring","Seven Stars Restaurant","Snowpoint City","Snowpoint City_Snowpoint Gym","Snowpoint Temple","Snowpoint Temple_1F","Snowpoint Temple_B1F","Snowpoint Temple_B2F","Snowpoint Temple_B3F","Snowpoint Temple_B4F","Snowpoint Temple_B5F","Solaceon Ruins_1F","Solaceon Ruins_2F","Solaceon Ruins_B1F","Solaceon Ruins_B2F","Solaceon Ruins_B3F","Solaceon Ruins_Exterior","Solaceon Town","Spear Pillar","Spring Path","Stark Mountain_Entrance","Stark Mountain_Exterior","Stark Mountain_Heatran","Stark Mountain_Main Cavern","Sunyshore City","Sunyshore Gym","Sunyshore Gym_First Room","Sunyshore Gym_Second Room","Sunyshore Gym_Third Room","Sunyshore Market","Sunyshore Market_Interior","Super Contest Hall","Survival Area","Team Galactic HQ","Team Galactic HQ_1F","Team Galactic HQ_2F","Team Galactic HQ_3F","Team Galactic HQ_4F","Team Galactic HQ_Galactic Warehouse 1F","Team Galactic HQ_Galactic Warehouse B1F","Team Galactic HQ_Galactic Warehouse B2F","Team Galactic HQ_Galactic Warehouse Exterior","Team Galactic HQ_Lake Trio Room","Trainers' School","Trainers' School_Interior","Turnback Cave_Entrance","Turnback Cave_Giratina","Turnback Cave_No Pillar Random Rooms","Turnback Cave_One Pillar Random Rooms","Turnback Cave_Pillar Room","Turnback Cave_Two Pillar Random Rooms","Twinleaf Town","Twinleaf Town_Player House 1F","Twinleaf Town_Player House 2F","Twinleaf Town_Player House Exterior","Valley Windworks","Valley Windworks_Interior","Valor Lakefront","Veilstone City","Veilstone City_Veilstone Gym","Veilstone City_Veilstone Prize House","Veilstone Department Store","Veilstone Department Store_1F","Veilstone Department Store_2F","Veilstone Department Store_3F","Veilstone Department Store_4F","Veilstone Department Store_5F","Veilstone Department Store_Elevator","Veilstone Game Corner_Exterior","Veilstone Game Corner_Interior","Verity Lakefront","Victory Road_1F","Victory Road_2F","Victory Road_B1F Deep Entrance","Victory Road_B1F Deep Exit","Victory Road_B1F Deep","Victory Road_B1F","Vista Lighthouse","Vista Lighthouse_Elevator","Vista Lighthouse_Observation Deck","Wayward Cave_1F","Wayward Cave_B1F"];
}
if(GameID == 14 || GameID == 16) {
	JSONPath_HeldItem = "DPt";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
}
if(GameID >= 14 && GameID <= 16) {
	MEDIAPath_Map = "DPPt";
	JSONPath_ExclusivePokémon = ["Diamond", "Pearl", "Platinum"];
	JSONPath_AbilityFlavor = "DPPt";
	JSONPath_MoveMachine = "DPPt";
}
if(GameID >= 16 && GameID <= 18) {
	JSONPath_MoveAccuracy = "PtHGSS";
}
if(GameID >= 17 && GameID <= 18) {
	JSONPath_Pokédex = ["Johto Pokédex_HGSS"];
	JSONPath_HeldItem = "HGSS";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "HGSS";
	MEDIAPath_Map = "HGSS";
	MEDIAPath_Encounter = "HGSS";
	MEDIAPath_Item_Pocket = "HGSS";
	ImageType_Path = ["HGSS", "HGSS", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_ExclusivePokémon = ["HeartGold", "SoulSilver"];
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
	MEDIAPath_Character_Battle = "HGSS";
	JSONPath_Items = "HGSS";
	MEDIAPath_LocationOverworld = "HGSS";
}
if(GameID >= 19 && GameID <= 22) {
	Generation = 5;
	JSONPath_ExclusiveItem = ["Black", "White", "Black 2", "White 2"];
	MEDIAPath_ExclusiveItem = ["BW", "BW", "B2W2", "B2W2"];
	JSONPath_ExclusiveFeature = ["Black", "White", "Black 2", "White 2"];
}
if(GameID >= 19 && GameID <= 20) {
	JSONPath_Pokédex = ["Unova Pokédex_BW"];
	JSONPath_HeldItem = "BW";
	JSONPath_HeldItemPercentage = ["1%", "5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "BW";
	MEDIAPath_Map = "BW";
	MEDIAPath_Encounter = "BW";
	JSONPath_ExclusivePokémon = ["Black", "White"];
	JSONPath_EVYield = "BW";
	JSONPath_LocationSlogan = "BW";
	JSONPath_LocationNavigation = "BW";
	JSONPath_MoveDescription = "BW";
	JSONPath_MoveTutor = "BW";
	JSONPath_Reference = "BW";
	MEDIAPath_Character_Battle = "BW";
	JSONPath_Items = "BW";
}
if(GameID >= 21 && GameID <= 22) {
	JSONPath_Pokédex = ["New Unova Pokédex_B2W2"];
	JSONPath_Ability = "B2W2";
	JSONPath_HeldItem = "B2W2";
	JSONPath_HeldItemPercentage = ["1%", "5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "B2W2";
	MEDIAPath_Map = "B2W2";
	MEDIAPath_Encounter = "B2W2";
	JSONPath_ExclusivePokémon = ["Black 2", "White 2"];
	JSONPath_Location = "B2W2";
	JSONPath_LocationSlogan = "B2W2";
	JSONPath_LocationNavigation = "B2W2";
	JSONPath_MoveDescription = "B2W2";
	JSONPath_MoveTutor = "B2W2";
	JSONPath_Reference = "B2W2";
	MEDIAPath_Character_Battle = "B2W2";
	JSONPath_Items = "B2W2";
}
if(GameID >= 23 && GameID <= 26) {
	Generation = 6;
	JSONPath_ExclusiveItem = ["X", "Y", "Omega Ruby", "Alpha Sapphire"];
	MEDIAPath_ExclusiveItem = ["XY", "XY", "ORAS", "ORAS"];
	JSONPath_ExclusiveFeature = ["X", "Y", "Omega Ruby", "Alpha Sapphire"];
}
if(GameID >= 23 && GameID <= 24) {
	JSONPath_Pokédex = ["Central Kalos Pokédex_XY", "Coastal Kalos Pokédex_XY", "Mountain Kalos Pokédex_XY", ];
	JSONPath_HeldItem = "XY";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "XY";
	MEDIAPath_Map = "XY";
	MEDIAPath_Encounter = "XY";
	MEDIAPath_Item_Pocket = "XY";
	JSONPath_ExclusivePokémon = ["X", "Y"];
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
	JSONPath_MoveReference = "XY";
	JSONPath_Items = "XY";
	MEDIAPath_LocationOverworld = "XY";
}
if(GameID >= 25 && GameID <= 28) {
	JSONPath_CatchRate = "ORASSM";
}
if(GameID >= 25 && GameID <= 26) {
	JSONPath_Pokédex = ["Hoenn Pokédex_ORAS"];
	JSONPath_HeldItem = "ORAS";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "ORAS";
	MEDIAPath_Map = "ORAS";
	MEDIAPath_Encounter = "ORAS";
	MEDIAPath_Item_Pocket = "ORAS";
	JSONPath_ExclusivePokémon = ["Alpha Sapphire", "Omega Ruby"];
	JSONPath_LocationDescription = "ORAS";
	JSONPath_LocationSlogan = "ORAS";
	JSONPath_LocationNavigation = "ORAS";
	JSONPath_MoveDescription = "ORAS";
	JSONPath_MoveTutor = "ORAS";
	JSONPath_MoveMachine = "ORAS";
	JSONPath_MoveID = "ORAS";
	JSONPath_Reference = "ORAS";
	JSONPath_MoveReference = "ORAS";
	JSONPath_Items = "ORAS";
	MEDIAPath_LocationOverworld = "ORAS";
}
if(GameID == 27 || GameID == 29) {
	JSONPath_EvolutionMethod = "Sun,Ultra Sun";
}
if(GameID == 28 || GameID == 30) {
	JSONPath_EvolutionMethod = "Moon,Ultra Moon";
}
if(GameID >= 27 && GameID <= 32) {
	Generation = 7;
	JSONPath_ExclusiveFeature = ["Sun", "Moon", "Ultra Sun", "Ultra Moon", "Lets Go Pikachu", "Lets Go Eevee", ];
}
if(GameID >= 27 && GameID <= 30) {
	MEDIAPath_Encounter = "SMUSUM";
	MEDIAPath_Item_Pocket = "SMUSUM";
	MEDIAPath_Type_Text = "SMUSUM";
	MEDIAPath_Pokémon_Box = "SMUSUM";
	JSONPath_ExclusiveItem = ["Sun", "Moon", "Ultra Sun", "Ultra Moon"];
	MEDIAPath_ExclusiveItem = ["SM", "SM", "USUM", "USUM"];
	JSONPath_MoveMachine = "SMUSUM";
	JSONPath_MovePower = "SMUSUM";
	JSONPath_MovePP = "SMUSUM";
	JSONPath_MovePriority = "SMUSUM";
}
if(GameID >= 27 && GameID <= 28) {
	JSONPath_Pokédex = ["Alola Pokédex_SM", "Melemele Pokédex_SM", "Akala Pokédex_SM", "Ula'ula Pokédex_SM", "Poni Pokédex_SM", ];
	JSONPath_ExperienceYield = "SM";
	JSONPath_HeldItem = "SM";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "SM";
	MEDIAPath_Map = "SM";
	JSONPath_ExclusivePokémon = ["Sun", "Moon"];
	JSONPath_Location = "SM";
	JSONPath_LocationDescription = "SM";
	JSONPath_LocationNavigation = "SM";
	JSONPath_AbilityFlavor = "SM";
	JSONPath_MoveDescription = "SM";
	JSONPath_MoveTutor = "SM";
	JSONPath_MoveID = "SM";
	JSONPath_Reference = "SM";
	JSONPath_MoveReference = "SM";
	MEDIAPath_Character_Battle = "SM";
	JSONPath_Items = "SM";
	MEDIAPath_LocationOverworld = "SM";
}
if(GameID >= 29 && GameID <= 30) {
	JSONPath_Pokédex = ["Alola Pokédex_USUM", "Melemele Pokédex_USUM", "Akala Pokédex_USUM", "Ula'ula Pokédex_USUM", "Poni Pokédex_USUM", ];
	JSONPath_CatchRate = "USUM";
	JSONPath_HeldItem = "USUM";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Bag = "USUM";
	MEDIAPath_Map = "USUM";
	JSONPath_ExclusivePokémon = ["Ultra Sun", "Ultra Moon"];
	JSONPath_Location = "USUM";
	JSONPath_LocationDescription = "USUM";
	JSONPath_LocationNavigation = "USUM";
	JSONPath_AbilityFlavor = "USUM";
	JSONPath_MoveDescription = "USUM";
	JSONPath_MoveTutor = "USUM";
	JSONPath_MoveID = "USUM";
	JSONPath_Reference = "USUM";
	JSONPath_MoveReference = "USUM";
	MEDIAPath_Character_Battle = "USUM";
	JSONPath_Items = "USUM";
	MEDIAPath_LocationOverworld = "USUM";
}
if(GameID >= 31 && GameID <= 32) {
	JSONPath_Pokédex = ["Kanto Pokédex_LGPE"];
	JSONPath_CatchRate = "LGPE";
	MEDIAPath_Item_Bag = "LGPE";
	MEDIAPath_Type_Text = "LGPE";
	MEDIAPath_Map = "LGPE";
	MEDIAPath_Encounter = "LGPE";
	MEDIAPath_Item_Pocket = "LGPE";
	MEDIAPath_Pokémon_Box = "LGPE";
	JSONPath_HeldItem = "";
	JSONPath_HeldItemPercentage = [];
	JSONPath_ExclusivePokémon = ["Lets Go Pikachu", "Lets Go Eevee"];
	JSONPath_ExclusiveItem = ["Lets Go Pikachu", "Lets Go Eevee"];
	MEDIAPath_ExclusiveItem = ["LGPE", "LGPE"];
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
	JSONPath_MoveReference = "LGPE";
	MEDIAPath_Character_Battle = "LGPE";
	JSONPath_Items = "LGPE";
	JSONPath_MovePriority = "LGPE";
	MEDIAPath_LocationOverworld = "LGPE";
}
if(GameID >= 33 && GameID <= 34) {
	Generation = 8;
	JSONPath_Pokédex = ["Galar Pokédex_SwSh", "Isle of Armor Pokédex_SwSh", "Crown Tundra Pokédex_SwSh", ];
	JSONPath_HeldItem = "SwSh";
	JSONPath_HeldItemPercentage = ["5%", "50%", "100%"];
	MEDIAPath_Item_Pocket = "SwSh";
	MEDIAPath_Type_Text = "SwSh";
	ImageType_Path = ["SwSh", "SwSh", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_ExclusivePokémon = ["Sword", "Shield", "Isle of Armor", "Crown Tundra", ];
	JSONPath_ExclusiveItem = ["Sword", "Shield", "Isle of Armor", "Crown Tundra"];
	MEDIAPath_ExclusiveItem = ["VIII", "VIII", "VIII", "VIII"];
	JSONPath_ExclusiveFeature = ["Sword", "Shield", "Isle of Armor", "Crown Tundra", ];
	JSONPath_Location = "SwSh";
	JSONPath_LocationConnection = "SwSh";
	JSONPath_LocationDescription = "SwSh";
	JSONPath_LocationSlogan = "SwSh";
	JSONPath_LocationNavigation = "SwSh";
	JSONPath_AbilityFlavor = "SwSh";
	JSONPath_MoveDescription = "SwSh";
	JSONPath_MoveTutor = "SwSh";
	JSONPath_Reference = "SwSh+DLC";
	JSONPath_MoveReference = "SwSh";
	JSONPath_Items = "SwSh";
	JSONPath_MovePriority = "SwSh";
	MEDIAPath_LocationOverworld = "SwSh";
}
if(Generation >= 1 && Generation <= 2) {
	JSONPath_Category = "1-2";
	MEDIAPath_Currency = "I-II";
	JSONPath_MoveName = "1-2";
}
if(Generation >= 1 && Generation <= 3) {
	JSONPath_ExperienceYield = "1-3";
	JSONPath_EvolutionMethod = "1-3";
}
if(Generation >= 1 && Generation <= 6) {
	JSONPath_FormItem = "1-6";
}
if(Generation >= 2 && Generation <= 3) {
	JSONPath_MoveCategory = "2-3";
}
if(Generation >= 2 && Generation <= 4) {
	JSONPath_Type = "2-4";
	JSONPath_MoveType = "2-4";
}
if(Generation >= 2 && Generation <= 5) {
	JSONPath_Typechart = "2-5";
	JSONPath_BaseStats = "2-5";
}
if(Generation >= 3 && Generation <= 5) {
	JSONPath_Category = "3-5";
	MEDIAPath_Pokémon_Box = "III-V";
	JSONPath_MoveName = "3-5";
}
if(Generation >= 3 && Generation <= 6) {
	JSONPath_CatchRate = "3-6";
}
if(Generation >= 3 && Generation <= 7) {
	JSONPath_Friendship = "3-7";
}
if(Generation >= 4 && Generation <= 5) {
	JSONPath_Ability = "4-5";
	MEDIAPath_Currency = "IV-V";
	JSONPath_EvolutionSpecie = "4-5";
}
if(Generation >= 4 && Generation <= 6) {
	JSONPath_MoveCategory = "4-6";
}
if(Generation >= 5 && Generation <= 6) {
	JSONPath_HatchRateSteps = "5-6";
	JSONPath_EVYield = "5-6";
	JSONPath_EvolutionMethod = "5-6";
}
if(Generation >= 6 && Generation <= 7) {
	ImageType_Path = ["VI-VII", "VI-VII", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_EvolutionSpecie = "6-7";
	JSONPath_MoveName = "6-7";
}
if(Generation >= 6 && Generation <= 8) {
	JSONPath_Typechart = "6-8";
	JSONPath_Type = "6-8";
	JSONPath_Category = "6-8";
	JSONPath_MoveType = "6-8";
}
if(Generation >= 7 && Generation <= 8) {
	JSONPath_MoveCategory = "7-8";
    JSONPath_FormItem = "7-8";
}
if(Generation >= 4 && Generation <= 7) {
	JSONPath_EvolutionStage = "4-7";
}
if(Generation >= 2 && Generation <= 8) {
	JSONPath_HatchRateEggCycle = "2-8";
}
if(Generation >= 2 && Generation <= 7) {
	JSONPath_EggGroup = "2-7";
}
if(Generation >= 1 && Generation <= 8) {
	JSONPath_GenderRatio = "1-8";
	JSONPath_LevelingRate = "1-8";
	MEDIAPath_Type_Category = "IV";
	MEDIAPath_Type_Icon = "SwSh";
	MEDIAPath_Type_Symbol = "SwSh";
	MEDIAPath_Pokémon_Portrait = "HOME";
}
if(Generation == 2 || Generation == 7) {
	JSONPath_HatchRateSteps = "2+7";
}
if(
	(Generation >= 1 && Generation <= 2) || (GameID >= 7 && GameID <= 9) || (GameID >= 12 && GameID <= 13) || (Generation >= 4 && Generation <= 8)) {
	JSONPath_Path = "1-2+RSEColXD+4-8";
	JSONPath_Form = "1-2+RSEColXD+4-8";
}
if(Generation >= 2) {
	Gender = true;
} else {
	Gender = false;
}
if(Generation >= 2 && GameID != 31 && GameID != 32) {
	Egg = true;
} else {
	Egg = false;
}
if(Generation <= 2 || GameID == 31 || GameID == 32) {
	Ability = [];
} else if(Generation >= 3 && Generation <= 4) {
	Ability = ["Primary", "Secondary"];
} else if(Generation >= 5) {
	Ability = ["Primary", "Secondary", "Hidden"];
}
if(Generation >= 2) {
	Friendship = true;
}
if(GameID >= 31 && GameID <= 32 || Generation <= 1) {
	HeldItem = false;
} else {
	HeldItem = true;
}
if(Generation >= 3) {
    Natures = ["Hardy","Lonely","Brave","Adamant","Naughty","Bold","Docile","Relaxed","Impish","Lax","Timid","Hasty","Serious","Jolly","Naive","Modest","Mild","Quiet","Bashful","Rash","Calm","Gentle","Sassy","Careful","Quirky"];
}
if(Generation <= 1) {
	Stats = ["HP", "Attack", "Defense", "Special", "Speed", "Total"];
    StatsAbbr = ["HP", "Atk", "Def", "Spc", "Spe", "Total"];
} else {
	Stats = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"];
    StatsAbbr = ["HP", "Atk", "Def", "SpAtk", "SpDef", "Spe", "Total"];

}
if(Generation == 1) {
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
    JSONPath_EVYield = "1";
	JSONPath_MovePriority = "1";
}
if(Generation == 2) {
	JSONPath_CatchRate = "2";
	MEDIAPath_Pokémon_Box = "III-V";
	JSONPath_EvolutionSpecie = "2";
	JSONPath_EvolutionStage = "2";
	JSONPath_MoveMachine = "2";
	JSONPath_MoveAccuracy = "2";
	JSONPath_MovePower = "2";
	JSONPath_MovePP = "2";
	JSONPath_MoveID = "2";
    JSONPath_EVYield = "2";
    JSONPath_Friendship = "2";
	JSONPath_MovePriority = "2";
}
if(Generation == 3) {
	JSONPath_HatchRateSteps = "3";
	JSONPath_Ability = "3";
	MEDIAPath_Currency = "III";
	JSONPath_EvolutionSpecie = "3";
	JSONPath_EvolutionStage = "3";
	JSONPath_AbilityReference = "3";
	JSONPath_MoveAccuracy = "3";
	JSONPath_MovePP = "3";
    JSONPath_EVYield = "3";
	JSONPath_MovePriority = "3";
}
if(Generation == 4) {
	JSONPath_HatchRateSteps = "4";
	JSONPath_ExperienceYield = "4";
	MEDIAPath_Type_Text = "IV";
	JSONPath_EVYield = "4";
	JSONPath_EvolutionMethod = "4";
	JSONPath_AbilityReference = "4";
	JSONPath_MovePower = "4";
	JSONPath_MovePP = "4";
	JSONPath_MoveID = "4";
	JSONPath_MoveReference = "4";
	JSONPath_MovePriority = "4";
}
if(Generation == 5) {
	JSONPath_Type = "5";
	JSONPath_ExperienceYield = "5";
	MEDIAPath_Type_Text = "V";
	ImageType_Path = ["V", "V", "Official", "HOME"];
	ImageType_Type = ["Battle", "Battle", "Art", "Art"];
	ImageType_Extension = ["PNG", "GIF", "PNG", "PNG"];
	JSONPath_AbilityFlavor = "5";
	JSONPath_AbilityReference = "5";
	JSONPath_MoveMachine = "5";
	JSONPath_MoveAccuracy = "5";
	JSONPath_MovePower = "5";
	JSONPath_MovePP = "5";
	JSONPath_MoveID = "5";
	JSONPath_MoveType = "5";
	JSONPath_MoveReference = "5";
	JSONPath_MovePriority = "5";
}
if(Generation == 6) {
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
	JSONPath_MovePriority = "6";
}
if(Generation == 7) {
	JSONPath_Ability = "7";
	JSONPath_ExperienceYield = "7";
	JSONPath_BaseStats = "7";
	MEDIAPath_Currency = "VII";
	JSONPath_EVYield = "7";
	JSONPath_AbilityReference = "7";
	JSONPath_MoveAccuracy = "7";
}
if(Generation == 8) {
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
    JSONPath_Friendship = "8";
}
