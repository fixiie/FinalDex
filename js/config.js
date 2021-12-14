function config(GameMetadata) {
    GameFullName = GameMetadata["Game"][GameID - 1]["Full Name"];
    GameName = GameMetadata["Game"][GameID - 1]["Name"];
    Region = GameMetadata["Game"][GameID - 1]["Region"];
    document.title = GameID + ": " + GameFullName;
}

var MEDIAPath_Character_Battle = "HGSS";

if (GameID == 1) {
    var JSONPath_PokédexEntry = "Red";
    var JSONPath_Area = "Red";
}
if (GameID == 2) {
    var JSONPath_PokédexEntry = "Blue";
    var JSONPath_Area = "Blue";
}
if (GameID == 3) {
    var JSONPath_PokédexEntry = "Yellow";
    var JSONPath_CatchRate = "Yellow";
    var JSONPath_HeldItem = "Yellow";
    var JSONPath_HeldItemPercentage = ["100%"];
    var ImageType_Name = ["Yellow","Official","HOME"];
    var ImageType_Path = ["Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG"];
    var JSONPath_Area = "Yellow";
}
if (GameID == 4) {
    var JSONPath_PokédexEntry = "Gold";
    var ImageType_Name = ["Gold","Official","HOME"];
    var ImageType_Path = ["Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG"];
    var JSONPath_Area = "Gold";
}
if (GameID == 5) {
    var JSONPath_PokédexEntry = "Silver";
    var ImageType_Name = ["Silver","Official","HOME"];
    var ImageType_Path = ["Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG"];
    var JSONPath_Area = "Silver";
}
if (GameID == 6) {
    var JSONPath_PokédexEntry = "Crystal";
    var JSONPath_Category = "Crystal";
    var MEDIAPath_Encounter = "Crystal";
    var ImageType_Name = ["Crystal","Crystal","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_Area = "Crystal";
    var JSONPath_LocationConnection = "Crystal";
    var JSONPath_MoveDescription = "Crystal";
    var JSONPath_MoveTutor = "Crystal";
}
if (GameID == 7) {
    var JSONPath_PokédexEntry = "Ruby";
    var JSONPath_Area = "Ruby";
    var JSONPath_Location = "Ruby";
    var JSONPath_LocationConnection = "Ruby";
}
if (GameID == 8) {
    var JSONPath_PokédexEntry = "Sapphire";
    var JSONPath_Area = "Sapphire";
    var JSONPath_Location = "Sapphire";
    var JSONPath_LocationConnection = "Sapphire";
}
if (GameID == 9) {
    var JSONPath_PokédexEntry = "";
    var MEDIAPath_Map = "Colosseum";
    var MEDIAPath_Type_Text = "Colosseum";
    var ImageType_Name = ["Colosseum","Official","HOME"];
    var ImageType_Path = ["Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG"];
    var JSONPath_Area = "Colosseum";
    var JSONPath_Location = "Colosseum";
    var JSONPath_LocationConnection = "Colosseum";
    var JSONPath_LocationDescription = "Colosseum";
    var JSONPath_LocationSlogan = "Colosseum";
    var JSONPath_LocationNavigation = "Colosseum";
    var JSONPath_MoveDescription = "Colosseum";
    var JSONPath_MoveID = "Colosseum";
}
if (GameID == 10) {
    var JSONPath_PokédexEntry = "FireRed";
    var JSONPath_Area = "FireRed";
}
if (GameID == 11) {
    var JSONPath_PokédexEntry = "LeafGreen";
    var JSONPath_Area = "LeafGreen";
}
if (GameID == 12) {
    var JSONPath_PokédexEntry = "Emerald";
    var MEDIAPath_Item_Bag = "Emerald";
    var MEDIAPath_Encounter = "Emerald";
    var ImageType_Name = ["Emerald","Emerald","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_Area = "Emerald";
    var JSONPath_Location = "Emerald";
    var JSONPath_LocationConnection = "Emerald";
    var JSONPath_LocationDescription = "Emerald";
    var JSONPath_LocationSlogan = "Emerald";
    var JSONPath_LocationNavigation = "Emerald";
    var JSONPath_MoveDescription = "Emerald";
    var JSONPath_MoveTutor = "Emerald";
}
if (GameID == 13) {
    var JSONPath_PokédexEntry = "";
    var MEDIAPath_Map = "XD";
    var MEDIAPath_Type_Text = "XD";
    var ImageType_Name = ["XD","XD","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_Area = "XD";
    var JSONPath_EvolutionMethod = "XD";
    var JSONPath_Location = "XD";
    var JSONPath_LocationConnection = "XD";
    var JSONPath_LocationDescription = "XD";
    var JSONPath_LocationSlogan = "XD";
    var JSONPath_LocationNavigation = "XD";
    var JSONPath_MoveDescription = "XD";
    var JSONPath_MoveTutor = "XD";
    var JSONPath_MoveID = "XD";
}
if (GameID == 14) {
    var JSONPath_PokédexEntry = "Diamond";
    var JSONPath_Area = "Diamond";
}
if (GameID == 15) {
    var JSONPath_PokédexEntry = "Pearl";
    var JSONPath_HeldItem = "Pearl";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var JSONPath_Area = "Pearl";
}
if (GameID == 16) {
    var JSONPath_Pokédex = ["Enhanced Sinnoh Pokédex_Pt"];
    var JSONPath_PokédexEntry = "Platinum";
    var MEDIAPath_Item_Bag = "Platinum";
    var MEDIAPath_Encounter = "Platinum";
    var MEDIAPath_Pocket_Icon = "Platinum";
    var ImageType_Name = ["Platinum","Platinum","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_Area = "Platinum";
    var JSONPath_Location = "Platinum";
    var JSONPath_LocationConnection = "Platinum";
    var JSONPath_LocationDescription = "Platinum";
    var JSONPath_LocationSlogan = "Platinum";
    var JSONPath_LocationNavigation = "Platinum";
    var JSONPath_MoveDescription = "Platinum";
    var JSONPath_MoveTutor = "Platinum";
}
if (GameID == 17) {
    var JSONPath_PokédexEntry = "HeartGold";
    var JSONPath_Area = "HeartGold";
}
if (GameID == 18) {
    var JSONPath_PokédexEntry = "SoulSilver";
    var JSONPath_Area = "SoulSilver";
}
if (GameID == 19) {
    var JSONPath_PokédexEntry = "Black";
    var JSONPath_Area = "Black";
    var JSONPath_LocationConnection = "Black";
    var JSONPath_LocationDescription = "Black";
}
if (GameID == 20) {
    var JSONPath_PokédexEntry = "White";
    var JSONPath_Area = "White";
    var JSONPath_LocationConnection = "White";
    var JSONPath_LocationDescription = "White";
}
if (GameID == 21) {
    var JSONPath_PokédexEntry = "Black 2";
    var JSONPath_Area = "Black 2";
    var JSONPath_LocationConnection = "Black 2";
    var JSONPath_LocationDescription = "Black 2";
}
if (GameID == 22) {
    var JSONPath_PokédexEntry = "White 2";
    var JSONPath_Area = "White 2";
    var JSONPath_LocationConnection = "White 2";
    var JSONPath_LocationDescription = "White 2";
}
if (GameID == 23) {
    var JSONPath_PokédexEntry = "X";
    var JSONPath_Area = "X";
}
if (GameID == 24) {
    var JSONPath_PokédexEntry = "Y";
    var JSONPath_Area = "Y";
}
if (GameID == 25) {
    var JSONPath_PokédexEntry = "Omega Ruby";
    var JSONPath_Area = "Omega Ruby";
    var JSONPath_Location = "Omega Ruby";
    var JSONPath_LocationConnection = "Omega Ruby";
}
if (GameID == 26) {
    var JSONPath_PokédexEntry = "Alpha Sapphire";
    var JSONPath_Area = "Alpha Sapphire";
    var JSONPath_Location = "Alpha Sapphire";
    var JSONPath_LocationConnection = "Alpha Sapphire";
}
if (GameID == 27) {
    var JSONPath_PokédexEntry = "Sun";
    var JSONPath_Area = "Sun";
    var JSONPath_LocationConnection = "Sun";
}
if (GameID == 28) {
    var JSONPath_PokédexEntry = "Moon";
    var JSONPath_Area = "Moon";
    var JSONPath_LocationConnection = "Moon";
}
if (GameID == 29) {
    var JSONPath_PokédexEntry = "Ultra Sun";
    var JSONPath_Area = "Ultra Sun";
    var JSONPath_LocationConnection = "Ultra Sun";
}
if (GameID == 30) {
    var JSONPath_PokédexEntry = "Ultra Moon";
    var JSONPath_Area = "Ultra Moon";
    var JSONPath_LocationConnection = "Ultra Moon";
}
if (GameID == 31) {
    var JSONPath_PokédexEntry = "Lets Go Pikachu";
    var JSONPath_Area = "Lets Go Pikachu";
    var JSONPath_MoveTutor = "Lets Go Pikachu";
}
if (GameID == 32) {
    var JSONPath_PokédexEntry = "Lets Go Eevee";
    var JSONPath_Area = "Lets Go Eevee";
    var JSONPath_MoveTutor = "Lets Go Eevee";
}
if (GameID == 33) {
    var JSONPath_PokédexEntry = "Sword";
    var MEDIAPath_Map = "Sword";
    var JSONPath_Area = "Sword";
}
if (GameID == 34) {
    var JSONPath_PokédexEntry = "Shield";
    var MEDIAPath_Map = "Shield";
    var JSONPath_Area = "Shield";
}



if (GameID >= 1 && GameID <= 2) {
    var JSONPath_CatchRate = "RB";
    var JSONPath_HeldItem = "RB";
    var JSONPath_HeldItemPercentage = ["100%"];
    var ImageType_Name = ["RB","RB-Recolor","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG","PNG"];
}
if (GameID >= 1 && GameID <= 3) {
    var Generation = 1;
    var JSONPath_Pokédex = [];
    var MEDIAPath_Map = "RBY";
    var MEDIAPath_Encounter = "RBY";
    var JSONPath_ExclusivePokémon = ["Red","Blue","Yellow"];
    var JSONPath_ExclusiveItem = ["Red","Blue","Yellow"];
    var MEDIAPath_ExclusiveItem = ["","",""]
    var JSONPath_ExclusiveFeature = ["Red","Blue","Yellow"];
    var JSONPath_Location = "RBY";
    var JSONPath_LocationConnection = "RBY";
    var JSONPath_LocationDescription = "RBY";
    var JSONPath_LocationSlogan = "RBY";
    var JSONPath_LocationNavigation = "RBY";
}

if (GameID >= 4 && GameID <= 5) {
    var MEDIAPath_Encounter = "GS";
    var JSONPath_LocationConnection = "GS";
    var JSONPath_MoveDescription = "GS";
}
if (GameID >= 4 && GameID <= 6) {
    var Generation = 2;
    var JSONPath_Pokédex = ["New Pokédex_GSC"];
    var JSONPath_HeldItem = "GSC";
    var JSONPath_HeldItemPercentage = ["2%","23%"];
    var MEDIAPath_Map = "GSC";
    var MEDIAPath_Pocket_Icon = "GSC";
    var JSONPath_ExclusivePokémon = ["Gold","Silver","Crystal"];
    var JSONPath_ExclusiveItem = ["Gold","Silver","Crystal"];
    var MEDIAPath_ExclusiveItem = ["","",""]
    var JSONPath_ExclusiveFeature = ["Gold","Silver","Crystal"];
    var JSONPath_Location = "GSC";
    var JSONPath_LocationDescription = "GSC";
    var JSONPath_LocationSlogan = "GSC";
    var JSONPath_LocationNavigation = "GSC";
}
if (GameID >= 7 && GameID <= 8) {
    var MEDIAPath_Item_Bag = "RS";
    var MEDIAPath_Encounter = "RS";
    var ImageType_Name = ["RS","Official","HOME"];
    var ImageType_Path = ["Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG"];
    var JSONPath_LocationDescription = "RS";
    var JSONPath_LocationSlogan = "RS";
    var JSONPath_LocationNavigation = "RS";
    var JSONPath_MoveDescription = "RS";
    var JSONPath_MoveTutor = "RS";
}
if (GameID >= 7 && GameID <= 13) {
    var Generation = 3;
}

if (GameID >= 7 && GameID <= 8 || GameID >= 10 && GameID <= 12) {
    var JSONPath_ExclusiveItem = ["Ruby","Sapphire","Emerald","FireRed","LeafGreen"];
    var MEDIAPath_ExclusiveItem = ["RS","RS","Emerald","FRLG","FRLG"];
    var JSONPath_ExclusiveFeature = ["Ruby","Sapphire","Emerald","FireRed","LeafGreen"];
    var JSONPath_AbilityFlavor = "RSEFRLG";
    var JSONPath_MovePower = "RSEFRLG";
    var JSONPath_MoveID = "RSEFRLG";
}
if (GameID >= 7 && GameID <= 8 || GameID == 12) {
    var JSONPath_Pokédex = ["Hoenn Pokédex_RSE"];
    var JSONPath_HeldItem = "RSE";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Map = "RSE";
    var MEDIAPath_Type_Text = "RSE";
    var JSONPath_ExclusivePokémon = ["Ruby","Sapphire","Emerald"];
    var JSONPath_MoveMachine = "RSE";
}
if (GameID >= 9 && GameID <= 11) {
    var JSONPath_EvolutionMethod = "FRLGCol";
}
if (GameID >= 9 && GameID <= 11 || GameID == 13) {
    var JSONPath_MoveMachine = "FRLGColXD";
}
if (GameID >= 10 && GameID <= 11) {
    var JSONPath_Pokédex = ["Kanto Pokédex_FRLG"];
    var JSONPath_HeldItem = "FRLG";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Bag = "FRLG";
    var MEDIAPath_Map = "FRLG";
    var MEDIAPath_Encounter = "FRLG";
    var MEDIAPath_Type_Text = "FRLG";
    var ImageType_Name = ["FRLG","Official","HOME"];
    var ImageType_Path = ["Battle","Art","Art"];
    var ImageType_Extension = ["PNG","PNG","PNG"];
    var JSONPath_ExclusivePokémon = ["FireRed","LeafGreen"];
    var JSONPath_Location = "FRLG";
    var JSONPath_LocationConnection = "FRLG";
    var JSONPath_LocationDescription = "FRLG";
    var JSONPath_LocationSlogan = "FRLG";
    var JSONPath_LocationNavigation = "FRLG";
    var JSONPath_MoveDescription = "FRLG";
    var JSONPath_MoveTutor = "FRLG";
}
if (GameID == 9 || GameID == 13) {
    var JSONPath_Pokédex = ["Strategy Memo (Alphabetical)_ColXD","Strategy Memo (Heaviest)_ColXD","Strategy Memo (Lightest)_ColXD","Strategy Memo (Tallest)_ColXD","Strategy Memo (Shortest)_ColXD"];
    var MEDIAPath_Item_Bag = "ColXD";
    var MEDIAPath_Currency = "ColXD";
    var JSONPath_ExclusivePokémon = ["Colosseum","XD"];
    var JSONPath_ExclusiveItem = ["Colosseum","XD"];
    var MEDIAPath_ExclusiveItem = ["ColXD","ColXD"];
    var JSONPath_ExclusiveFeature = ["Colosseum","XD"];
    var JSONPath_AbilityFlavor = "ColXD";
}
if (GameID >= 14 && GameID <= 18) {
    var Generation = 4;
    var JSONPath_ExclusiveItem = ["Diamond","Pearl","Platinum","HeartGold","SoulSilver"];
    var MEDIAPath_ExclusiveItem = ["DP","DP","Platinum","HGSS","HGSS"];
    var JSONPath_ExclusiveFeature = ["Diamond","Pearl","Platinum","HeartGold","SoulSilver"];
}
if (GameID >= 14 && GameID <= 15) {
    var JSONPath_Pokédex = ["Sinnoh Pokédex_DP"];
    var MEDIAPath_Item_Bag = "DP";
    var MEDIAPath_Encounter = "DP";
    var MEDIAPath_Pocket_Icon = "DP";
    var ImageType_Name = ["DP","DP","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_Location = "DP";
    var JSONPath_LocationConnection = "DP";
    var JSONPath_LocationDescription = "DP";
    var JSONPath_LocationSlogan = "DP";
    var JSONPath_LocationNavigation = "DP";
    var JSONPath_MoveDescription = "DP";
    var JSONPath_MoveTutor = "DP";
    var JSONPath_MoveAccuracy = "DP";
}
if (GameID == 14 || GameID == 16) {
    var JSONPath_HeldItem = "DPt";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
}
if (GameID >= 14 && GameID <= 16) {
    var MEDIAPath_Map = "DPPt";
    var JSONPath_ExclusivePokémon = ["Diamond","Pearl","Platinum"];
    var JSONPath_AbilityFlavor = "DPPt";
    var JSONPath_MoveMachine = "DPPt";
}
if (GameID >= 16 && GameID <= 18) {
    var JSONPath_MoveAccuracy = "PtHGSS";
}
if (GameID >= 17 && GameID <= 18) {
    var JSONPath_Pokédex = ["Johto Pokédex_HGSS"];
    var JSONPath_HeldItem = "HGSS";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Bag = "HGSS";
    var MEDIAPath_Map = "HGSS";
    var MEDIAPath_Encounter = "HGSS";
    var MEDIAPath_Pocket_Icon = "HGSS";
    var ImageType_Name = ["HGSS","HGSS","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_ExclusivePokémon = ["HeartGold","SoulSilver"];
    var JSONPath_Location = "HGSS";
    var JSONPath_LocationConnection = "HGSS";
    var JSONPath_LocationDescription = "HGSS";
    var JSONPath_LocationSlogan = "HGSS";
    var JSONPath_LocationNavigation = "HGSS";
    var JSONPath_AbilityFlavor = "HGSS";
    var JSONPath_MoveDescription = "HGSS";
    var JSONPath_MoveTutor = "HGSS";
    var JSONPath_MoveMachine = "HGSS";
}
if (GameID >= 19 && GameID <= 22) {
    var Generation = 5;
    var JSONPath_ExclusiveItem = ["Black","White","Black 2","White 2"];
    var MEDIAPath_ExclusiveItem = ["BW","BW","B2W2","B2W2"];
    var JSONPath_ExclusiveFeature = ["Black","White","Black 2","White 2"];
}
if (GameID >= 19 && GameID <= 20) {
    var JSONPath_Pokédex = ["Unova Pokédex_BW"];
    var JSONPath_HeldItem = "BW";
    var JSONPath_HeldItemPercentage = ["1%","5%","50%","100%"];
    var MEDIAPath_Item_Bag = "BW";
    var MEDIAPath_Map = "BW";
    var MEDIAPath_Encounter = "BW";
    var JSONPath_ExclusivePokémon = ["Black","White"];
    var JSONPath_EVYield = "BW";
    var JSONPath_Location = "BW";
    var JSONPath_LocationSlogan = "BW";
    var JSONPath_LocationNavigation = "BW";
    var JSONPath_MoveDescription = "BW";
    var JSONPath_MoveTutor = "BW";
}
if (GameID >= 21 && GameID <= 22) {
    var JSONPath_Pokédex = ["New Unova Pokédex_B2W2"];
    var JSONPath_Ability = "B2W2";
    var JSONPath_HeldItem = "B2W2";
    var JSONPath_HeldItemPercentage = ["1%","5%","50%","100%"];
    var MEDIAPath_Item_Bag = "B2W2";
    var MEDIAPath_Map = "B2W2";
    var MEDIAPath_Encounter = "B2W2";
    var JSONPath_ExclusivePokémon = ["Black 2","White 2"];
    var JSONPath_Location = "B2W2";
    var JSONPath_LocationSlogan = "B2W2";
    var JSONPath_LocationNavigation = "B2W2";
    var JSONPath_MoveDescription = "B2W2";
    var JSONPath_MoveTutor = "B2W2";
}
if (GameID >= 23 && GameID <= 26) {
    var Generation = 6;
    var JSONPath_ExclusiveItem = ["X","Y","Omega Ruby","Alpha Sapphire"];
    var MEDIAPath_ExclusiveItem = ["XY","XY","ORAS","ORAS"];
    var JSONPath_ExclusiveFeature = ["X","Y","Omega Ruby","Alpha Sapphire"];
}
if (GameID >= 23 && GameID <= 24) {
    var JSONPath_Pokédex = ["Central Kalos Pokédex_XY","Coastal Kalos Pokédex_XY","Mountain Kalos Pokédex_XY"];
    var JSONPath_HeldItem = "XY";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Bag = "XY";
    var MEDIAPath_Map = "XY";
    var MEDIAPath_Encounter = "XY";
    var MEDIAPath_Pocket_Icon = "XY";
    var JSONPath_ExclusivePokémon = ["X","Y"];
    var JSONPath_Location = "XY";
    var JSONPath_LocationConnection = "XY";
    var JSONPath_LocationDescription = "XY";
    var JSONPath_LocationSlogan = "XY";
    var JSONPath_LocationNavigation = "XY";
    var JSONPath_MoveDescription = "XY";
    var JSONPath_MoveTutor = "XY";
    var JSONPath_MoveMachine = "XY";
    var JSONPath_MoveID = "XY";
}
if (GameID >= 25 && GameID <= 28) {
    var JSONPath_CatchRate = "ORASSM";
}
if (GameID >= 25 && GameID <= 26) {
    var JSONPath_Pokédex = ["Hoenn Pokédex_ORAS"];
    var JSONPath_HeldItem = "ORAS";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Bag = "ORAS";
    var MEDIAPath_Map = "ORAS";
    var MEDIAPath_Encounter = "ORAS";
    var MEDIAPath_Pocket_Icon = "ORAS";
    var JSONPath_ExclusivePokémon = ["Alpha Sapphire","Omega Ruby"];
    var JSONPath_LocationDescription = "ORAS";
    var JSONPath_LocationSlogan = "ORAS";
    var JSONPath_LocationNavigation = "ORAS";
    var JSONPath_MoveDescription = "ORAS";
    var JSONPath_MoveTutor = "ORAS";
    var JSONPath_MoveMachine = "ORAS";
    var JSONPath_MoveID = "ORAS";
}
if (GameID == 27 || GameID == 29) {
    var JSONPath_EvolutionMethod = "SUS";
}
if (GameID == 28 || GameID == 30) {
    var JSONPath_EvolutionMethod = "MUM";
}
if (GameID >= 27 && GameID <= 32) {
    var Generation = 7;
    var JSONPath_ExclusiveFeature = ["Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee"];
}
if (GameID >= 27 && GameID <= 30) {
    var MEDIAPath_Encounter = "SMUSUM";
    var MEDIAPath_Pocket_Icon = "SMUSUM";
    var MEDIAPath_Type_Text = "SMUSUM";
    var MEDIAPath_Pokémon_Box = "SMUSUM";
    var JSONPath_ExclusiveItem = ["Sun","Moon","Ultra Sun","Ultra Moon"];
    var MEDIAPath_ExclusiveItem = ["SM","SM","USUM","USUM"];
    var JSONPath_MoveMachine = "SMUSUM";
    var JSONPath_MovePower = "SMUSUM";
    var JSONPath_MovePP = "SMUSUM";
}
if (GameID >= 27 && GameID <= 28) {
    var JSONPath_Pokédex = ["Alola Pokédex_SM","Melemele Pokédex_SM","Akala Pokédex_SM","Ula'ula Pokédex_SM","Poni Pokédex_SM"];
    var JSONPath_ExperienceYield = "SM";
    var JSONPath_HeldItem = "SM";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Bag = "SM";
    var MEDIAPath_Map = "SM";
    var JSONPath_ExclusivePokémon = ["Sun","Moon"];
    var JSONPath_Location = "SM";
    var JSONPath_LocationDescription = "SM";
    var JSONPath_LocationSlogan = "SM";
    var JSONPath_LocationNavigation = "SM";
    var JSONPath_AbilityFlavor = "SM";
    var JSONPath_MoveDescription = "SM";
    var JSONPath_MoveTutor = "SM";
    var JSONPath_MoveID = "SM";
}
if (GameID >= 29 && GameID <= 30) {
    var JSONPath_Pokédex = ["Alola Pokédex_USUM","Melemele Pokédex_USUM","Akala Pokédex_USUM","Ula'ula Pokédex_USUM","Poni Pokédex_USUM"];
    var JSONPath_CatchRate = "USUM";
    var JSONPath_HeldItem = "USUM";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Bag = "USUM";
    var MEDIAPath_Map = "USUM";
    var JSONPath_ExclusivePokémon = ["Ultra Sun","Ultra Moon"];
    var JSONPath_Location = "USUM";
    var JSONPath_LocationDescription = "USUM";
    var JSONPath_LocationSlogan = "USUM";
    var JSONPath_LocationNavigation = "USUM";
    var JSONPath_AbilityFlavor = "USUM";
    var JSONPath_MoveDescription = "USUM";
    var JSONPath_MoveTutor = "USUM";
    var JSONPath_MoveID = "USUM";
}
if (GameID >= 31 && GameID <= 32) {
    var JSONPath_Pokédex = ["Kanto Pokédex_LGPE"];
    var JSONPath_CatchRate = "LGPE";
    var MEDIAPath_Item_Bag = "LGPE";
    var MEDIAPath_Type_Text = "LGPE";
    var MEDIAPath_Map = "LGPE";
    var MEDIAPath_Encounter = "LGPE";
    var MEDIAPath_Pocket_Icon = "LGPE";
    var MEDIAPath_Pokémon_Box = "LGPE";
    var JSONPath_HeldItem = "";
    var JSONPath_HeldItemPercentage = [];
    var JSONPath_ExclusivePokémon = ["Lets Go Pikachu","Lets Go Eevee"];
    var JSONPath_ExclusiveItem = ["Lets Go Pikachu","Lets Go Eevee"];
    var MEDIAPath_ExclusiveItem = ["LGPE","LGPE"];
    var JSONPath_EvolutionMethod = "LGPE";
    var JSONPath_Location = "LGPE";
    var JSONPath_LocationConnection = "LGPE";
    var JSONPath_LocationDescription = "LGPE";
    var JSONPath_LocationSlogan = "LGPE";
    var JSONPath_LocationNavigation = "LGPE";
    var JSONPath_MoveDescription = "LGPE";
    var JSONPath_MoveMachine = "LGPE";
    var JSONPath_MovePower = "LGPE";
    var JSONPath_MovePP = "LGPE";
    var JSONPath_MoveID = "LGPE";
}
if (GameID >= 33 && GameID <= 34) {
    var Generation = 8;
    var JSONPath_Pokédex = ["Galar Pokédex_SwSh","Isle of Armor Pokédex_SwSh","Crown Tundra Pokédex_SwSh"];
    var JSONPath_HeldItem = "SwSh";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Pocket_Icon = "SwSh";
    var MEDIAPath_Type_Text = "SwSh";
    var ImageType_Name = ["SwSh","SwSh","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_ExclusivePokémon = ["Sword","Shield","Isle of Armor","Crown Tundra"];
    var JSONPath_ExclusiveItem = ["Sword","Shield","Isle of Armor","Crown Tundra"];
    var MEDIAPath_ExclusiveItem = ["VIII","VIII","VIII","VIII"];
    var JSONPath_ExclusiveFeature = ["Sword","Shield","Isle of Armor","Crown Tundra"];
    var JSONPath_Location = "SwSh";
    var JSONPath_LocationConnection = "SwSh";
    var JSONPath_LocationDescription = "SwSh";
    var JSONPath_LocationSlogan = "SwSh";
    var JSONPath_LocationNavigation = "SwSh";
    var JSONPath_AbilityFlavor = "SwSh";
    var JSONPath_MoveDescription = "SwSh";
    var JSONPath_MoveTutor = "SwSh";
}

if (Generation >= 1 && Generation <= 2) {
    var JSONPath_Category = "1-2";
    var MEDIAPath_Currency = "I-II";
}
if (Generation >= 1 && Generation <= 3) {
    var JSONPath_ExperienceYield = "1-3";
    var JSONPath_EvolutionMethod = "1-3";
}
if (Generation >= 1 && Generation <= 6) {
    var JSONPath_MoveCategory = "1-6";
}
if (Generation >= 2 && Generation <= 3) {
    var JSONPath_EVYield = "2-3";
}
if (Generation >= 2 && Generation <= 4) {
    var JSONPath_Type = "2-4";
    var JSONPath_MoveType = "2-4";
}
if (Generation >= 2 && Generation <= 5) {
    var JSONPath_Typechart = "2-5";
    var JSONPath_BaseStats = "2-5";
}
if (Generation >= 3 && Generation <= 5) {
    var JSONPath_Category = "3-5";
    var MEDIAPath_Pokémon_Box = "III-V";
}
if (Generation >= 3 && Generation <= 6) {
    var JSONPath_CatchRate = "3-6";
}
if (Generation >= 4 && Generation <= 5) {
    var JSONPath_Ability = "4-5";
    var MEDIAPath_Currency = "IV-V";
    var JSONPath_EvolutionSpecie = "4-5";
}
if (Generation >= 5 && Generation <= 6) {
    var JSONPath_HatchRateSteps = "5-6";
    var JSONPath_EVYield = "5-6";
    var JSONPath_EvolutionMethod = "5-6";
}
if (Generation >= 6 && Generation <= 7) {
    var ImageType_Name = ["VI-VII","VI-VII","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_EvolutionSpecie = "6-7";
}
if (Generation >= 6 && Generation <= 8) {
    var JSONPath_Typechart = "6-8";
    var JSONPath_Type = "6-8";
    var JSONPath_Category = "6-8";
    var JSONPath_MoveType = "6-8";
}
if (Generation >= 7 && Generation <= 8) {
    var JSONPath_MoveCategory = "7-8";
}
if (Generation >= 4 && Generation <= 7) {
    var JSONPath_EvolutionStage = "4-7";
}

if (Generation >= 2 && Generation <= 8) {
    var JSONPath_HatchRateEggCycle = "2-8";
}
if (Generation >= 2 && Generation <= 7) {
    var JSONPath_EggGroup = "2-7";
}
if (Generation >= 1 && Generation <= 8) {
    var JSONPath_GenderRatio = "1-8";
    var JSONPath_LevelingRate = "1-8";
    var MEDIAPath_Type_Category = "IV";
    var MEDIAPath_Type_Icon = "SwSh";
    var MEDIAPath_Type_Symbol = "SwSh";
    var MEDIAPath_Pokémon_Portrait = "HOME";
    var JSONPath_FileName = "1-8";
    var JSONPath_FolderName = "1-8";
}

if (Generation == 2 || Generation == 7) {
    var JSONPath_HatchRateSteps = "2+7";
}


if (Generation == 1) {
    var JSONPath_Typechart = "1";
    var JSONPath_Type = "1";
    var JSONPath_BaseStats = "1";
    var MEDIAPath_Pokémon_Box = "III-V";
    var JSONPath_EvolutionSpecie = "1";
    var JSONPath_EvolutionStage = "1";
    var JSONPath_MoveMachine = "1";
    var JSONPath_MoveAccuracy = "1";
    var JSONPath_MovePower = "1";
    var JSONPath_MovePP = "1";
    var JSONPath_MoveID = "1";
    var JSONPath_MoveType = "1";
}
if (Generation == 2) {
    var JSONPath_CatchRate = "2";
    var MEDIAPath_Pokémon_Box = "III-V";
    var JSONPath_EvolutionSpecie = "2";
    var JSONPath_EvolutionStage = "2";
    var JSONPath_MoveMachine = "2";
    var JSONPath_MoveAccuracy = "2";
    var JSONPath_MovePower = "2";
    var JSONPath_MovePP = "2";
    var JSONPath_MoveID = "2";
}
if (Generation == 3) {
    var JSONPath_HatchRateSteps = "3";
    var JSONPath_Ability = "3";
    var MEDIAPath_Currency = "III";
    var JSONPath_EvolutionSpecie = "3";
    var JSONPath_EvolutionStage = "3";
    var JSONPath_AbilityReference = "3";
    var JSONPath_MoveAccuracy = "3";
    var JSONPath_MovePP = "3";
}
if (Generation == 4) {
    var JSONPath_HatchRateSteps = "4";
    var JSONPath_ExperienceYield = "4";
    var MEDIAPath_Type_Text = "IV";
    var JSONPath_EVYield = "4";
    var JSONPath_EvolutionMethod = "4";
    var JSONPath_AbilityReference = "4";
    var JSONPath_MovePower = "4";
    var JSONPath_MovePP = "4";
    var JSONPath_MoveID = "4";
}
if (Generation == 5) {
    var JSONPath_Type = "5";
    var JSONPath_ExperienceYield = "5";
    var MEDIAPath_Type_Text = "V";
    var ImageType_Name = ["V","V","Official","HOME"];
    var ImageType_Path = ["Battle","Battle","Art","Art"];
    var ImageType_Extension = ["PNG","GIF","PNG","PNG"];
    var JSONPath_AbilityFlavor = "5";
    var JSONPath_AbilityReference = "5";
    var JSONPath_MoveMachine = "5";
    var JSONPath_MoveAccuracy = "5";
    var JSONPath_MovePower = "5";
    var JSONPath_MovePP = "5";
    var JSONPath_MoveID = "5";
    var JSONPath_MoveType = "5";
}
if (Generation == 6) {
    var JSONPath_Ability = "6";
    var JSONPath_ExperienceYield = "6";
    var JSONPath_BaseStats = "6";
    var MEDIAPath_Currency = "VI";
    var MEDIAPath_Type_Text = "VI";
    var MEDIAPath_Pokémon_Box = "VI";
    var JSONPath_AbilityFlavor = "6";
    var JSONPath_AbilityReference = "6";
    var JSONPath_MoveAccuracy = "6";
    var JSONPath_MovePower = "6";
    var JSONPath_MovePP = "6";
}
if (Generation == 7) {
    var JSONPath_Ability = "7";
    var JSONPath_ExperienceYield = "7";
    var JSONPath_BaseStats = "7";
    var MEDIAPath_Currency = "VII";
    var JSONPath_EVYield = "7";
    var JSONPath_AbilityReference = "7";
    var JSONPath_MoveAccuracy = "7";
}
if (Generation == 8) {
    var JSONPath_Ability = "8";
    var JSONPath_EggGroup = "8";
    var JSONPath_ExperienceYield = "8";
    var JSONPath_BaseStats = "8";
    var JSONPath_CatchRate = "8";
    var MEDIAPath_Item_Bag = "VIII";
    var MEDIAPath_Currency = "VIII";
    var MEDIAPath_Pokémon_Box = "VIII";
    var JSONPath_EVYield = "8";
    var JSONPath_EvolutionSpecie = "8";
    var JSONPath_EvolutionStage = "8";
    var JSONPath_EvolutionMethod = "8";
    var JSONPath_AbilityReference = "8";
    var JSONPath_MoveMachine = "8";
    var JSONPath_MoveAccuracy = "8";
    var JSONPath_MovePower = "8";
    var JSONPath_MovePP = "8";
    var JSONPath_MoveID = "8";
}
