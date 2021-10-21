var Region = "Galar";
var GameName = "Sword";


var ImageType_Name = ["Sprite","Model","Model","Art"];
var ImageType_Extension = ["PNG","PNG","PNG","PNG"];
var ImageType_Path = ["HGSS","SMUSUM","SMUSUM","HOME"];

if (GameID == 1) {
    var JSONPath_PokédexEntry = "Red";
}
if (GameID == 2) {
    var JSONPath_PokédexEntry = "Blue";
}
if (GameID == 3) {
    var JSONPath_PokédexEntry = "Yellow";
    var JSONPath_CatchRate = "Yellow";
    var JSONPath_HeldItem = "Yellow";
    var JSONPath_HeldItemPercentage = ["100%"];
}
if (GameID == 4) {
    var JSONPath_PokédexEntry = "Gold";
}
if (GameID == 5) {
    var JSONPath_PokédexEntry = "Silver";
}
if (GameID == 6) {
    var JSONPath_PokédexEntry = "Crystal";
    var JSONPath_Category = "Crystal";
    var MEDIAPath_Encounter = "Crystal";
}
if (GameID == 7) {
    var JSONPath_PokédexEntry = "Ruby";
}
if (GameID == 8) {
    var JSONPath_PokédexEntry = "Sapphire";
}
if (GameID == 9) {
    var JSONPath_PokédexEntry = "Emerald";
    var MEDIAPath_Item_Icon = "Emerald";
    var MEDIAPath_Encounter = "Emerald";
}
if (GameID == 10) {
    var JSONPath_PokédexEntry = "FireRed";
}
if (GameID == 11) {
    var JSONPath_PokédexEntry = "LeafGreen";
}
if (GameID == 12) {
    var JSONPath_PokédexEntry = "";
    var MEDIAPath_Map = "Colosseum";
    var MEDIAPath_Type_Text = "Colosseum";
}
if (GameID == 13) {
    var JSONPath_PokédexEntry = "";
    var MEDIAPath_Map = "XD";
    var MEDIAPath_Type_Text = "XD";
}
if (GameID == 14) {
    var JSONPath_PokédexEntry = "Diamond";
}
if (GameID == 15) {
    var JSONPath_PokédexEntry = "Pearl";
    var JSONPath_HeldItem = "Pearl";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
}
if (GameID == 16) {
    var JSONPath_Pokédex = ["Enhanced Sinnoh Pokédex_Pt"];
    var JSONPath_PokédexEntry = "Platinum";
    var MEDIAPath_Item_Icon = "Platinum";
    var MEDIAPath_Encounter = "Platinum";
    var MEDIAPath_Pocket_Icon = "Platinum";
}
if (GameID == 17) {
    var JSONPath_PokédexEntry = "HeartGold";
}
if (GameID == 18) {
    var JSONPath_PokédexEntry = "SoulSilver";
}
if (GameID == 19) {
    var JSONPath_PokédexEntry = "Black";
}
if (GameID == 20) {
    var JSONPath_PokédexEntry = "White";
}
if (GameID == 21) {
    var JSONPath_PokédexEntry = "Black 2";
}
if (GameID == 22) {
    var JSONPath_PokédexEntry = "White 2";
}
if (GameID == 23) {
    var JSONPath_PokédexEntry = "X";
}
if (GameID == 24) {
    var JSONPath_PokédexEntry = "Y";
}
if (GameID == 25) {
    var JSONPath_PokédexEntry = "Omega Ruby";
}
if (GameID == 26) {
    var JSONPath_PokédexEntry = "Alpha Sapphire";
}
if (GameID == 27) {
    var JSONPath_PokédexEntry = "Sun";
}
if (GameID == 28) {
    var JSONPath_PokédexEntry = "Moon";
}
if (GameID == 29) {
    var JSONPath_PokédexEntry = "Ultra Sun";
}
if (GameID == 30) {
    var JSONPath_PokédexEntry = "Ultra Moon";
}
if (GameID == 31) {
    var JSONPath_PokédexEntry = "Let's Go, Pikachu!";
}
if (GameID == 32) {
    var JSONPath_PokédexEntry = "Let's Go, Eevee!";
}
if (GameID == 33) {
    var JSONPath_PokédexEntry = "Sword";
    var MEDIAPath_Map = "Sword";
}
if (GameID == 34) {
    var JSONPath_PokédexEntry = "Shield";
    var MEDIAPath_Map = "Shield";
}



if (GameID >= 1 && GameID <= 2) {
    var JSONPath_CatchRate = "RB";
    var JSONPath_HeldItem = "RB";
    var JSONPath_HeldItemPercentage = ["100%"];
}
if (GameID >= 1 && GameID <= 3) {
    var Generation = 1;
    var JSONPath_Pokédex = ["Kanto Pokédex_RBY"];
    var MEDIAPath_Map = "RBY";
    var MEDIAPath_Encounter = "RBY";
}

if (GameID >= 4 && GameID <= 5) {
    var MEDIAPath_Encounter = "GS";
}
if (GameID >= 4 && GameID <= 6) {
    var Generation = 2;
    var JSONPath_Pokédex = ["New Pokédex_GSC"];
    var JSONPath_HeldItem = "GSC";
    var JSONPath_HeldItemPercentage = ["2%","23%"];
    var MEDIAPath_Map = "GSC";
    var MEDIAPath_Pocket_Icon = "GSC";
}
if (GameID >= 7 && GameID <= 8) {
    var MEDIAPath_Item_Icon = "RS";
    var MEDIAPath_Encounter = "RS";
}
if (GameID >= 7 && GameID <= 13) {
    var Generation = 3;
}
if (GameID >= 7 && GameID <= 9) {
    var JSONPath_Pokédex = ["Hoenn Pokédex_RSE"];
    var JSONPath_HeldItem = "RSE";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Map = "RSE";
    var MEDIAPath_Type_Text = "RSE";
}
if (GameID >= 10 && GameID <= 11) {
    var JSONPath_Pokédex = ["Kanto Pokédex_FRLG"];
    var JSONPath_HeldItem = "FRLG";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Icon = "FRLG";
    var MEDIAPath_Map = "FRLG";
    var MEDIAPath_Encounter = "FRLG";
    var MEDIAPath_Type_Text = "FRLG";
}
if (GameID >= 12 && GameID <= 13) {
    var JSONPath_Pokédex = ["Strategy Memo (A-Z)_ColXD"];
    var MEDIAPath_Item_Icon = "ColXD";
    var MEDIAPath_Currency = "ColXD";
}
if (GameID >= 14 && GameID <= 18) {
    var Generation = 4;
}
if (GameID >= 14 && GameID <= 15) {
    var JSONPath_Pokédex = ["Sinnoh Pokédex_DP"];
    var MEDIAPath_Item_Icon = "DP";
    var MEDIAPath_Encounter = "DP";
    var MEDIAPath_Pocket_Icon = "DP";
}
if (GameID >= 14 && GameID <= 16) {
    var MEDIAPath_Map = "DPPt";
}
if (GameID >= 17 && GameID <= 18) {
    var JSONPath_Pokédex = ["Johto Pokédex_HGSS"];
    var JSONPath_HeldItem = "HGSS";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Icon = "HGSS";
    var MEDIAPath_Map = "HGSS";
    var MEDIAPath_Encounter = "HGSS";
    var MEDIAPath_Pocket_Icon = "HGSS";
}
if (GameID >= 19 && GameID <= 22) {
    var Generation = 5;
}
if (GameID >= 19 && GameID <= 20) {
    var JSONPath_Pokédex = ["Unova Pokédex_BW"];
    var JSONPath_HeldItem = "BW";
    var JSONPath_HeldItemPercentage = ["1%","5%","50%","100%"];
    var MEDIAPath_Item_Icon = "BW";
    var MEDIAPath_Map = "BW";
    var MEDIAPath_Encounter = "BW";
}
if (GameID >= 21 && GameID <= 22) {
    var JSONPath_Pokédex = ["New Unova Pokédex_B2W2"];
    var JSONPath_Ability = "B2W2";
    var JSONPath_HeldItem = "B2W2";
    var JSONPath_HeldItemPercentage = ["1%","5%","50%","100%"];
    var MEDIAPath_Item_Icon = "B2W2";
    var MEDIAPath_Map = "B2W2";
    var MEDIAPath_Encounter = "B2W2";
}
if (GameID >= 23 && GameID <= 26) {
    var Generation = 6;
}
if (GameID >= 23 && GameID <= 24) {
    var JSONPath_Pokédex = ["Central Kalos Pokédex_XY","Coastal Kalos Pokédex_XY","Mountain Kalos Pokédex_XY"];
    var JSONPath_HeldItem = "XY";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Icon = "XY";
    var MEDIAPath_Map = "XY";
    var MEDIAPath_Encounter = "XY";
    var MEDIAPath_Pocket_Icon = "XY";
}
if (GameID >= 25 && GameID <= 28) {
    var JSONPath_CatchRate = "ORASSM";
}
if (GameID >= 25 && GameID <= 26) {
    var JSONPath_Pokédex = ["Hoenn Pokédex_ORAS"];
    var JSONPath_HeldItem = "ORAS";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Icon = "ORAS";
    var MEDIAPath_Map = "ORAS";
    var MEDIAPath_Encounter = "ORAS";
    var MEDIAPath_Pocket_Icon = "ORAS";
}
if (GameID >= 27 && GameID <= 32) {
    var Generation = 7;
}
if (GameID >= 27 && GameID <= 30) {
    var MEDIAPath_Encounter = "SMUSUM";
    var MEDIAPath_Pocket_Icon = "SMUSUM";
    var MEDIAPath_Type_Text = "SMUSUM";
    var MEDIAPath_Pokémon_Icon = "SMUSUM";
}
if (GameID >= 27 && GameID <= 28) {
    var JSONPath_Pokédex = ["Alola Pokédex_SM","Melemele Pokédex_SM","Akala Pokédex_SM","Ula'ula Pokédex_SM","Poni Pokédex_SM"];
    var JSONPath_ExperienceYield = "SM";
    var JSONPath_HeldItem = "SM";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Icon = "SM";
    var MEDIAPath_Map = "SM";
}
if (GameID >= 29 && GameID <= 30) {
    var JSONPath_Pokédex = ["Alola Pokédex_USUM","Melemele Pokédex_USUM","Akala Pokédex_USUM","Ula'ula Pokédex_USUM","Poni Pokédex_USUM"];
    var JSONPath_CatchRate = "USUM";
    var JSONPath_HeldItem = "USUM";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Item_Icon = "USUM";
    var MEDIAPath_Map = "USUM";
}
if (GameID >= 31 && GameID <= 32) {
    var JSONPath_Pokédex = ["Kanto Pokédex_LGPE"];
    var JSONPath_CatchRate = "LGPE";
    var MEDIAPath_Item_Icon = "LGPE";
    var MEDIAPath_Map = "LGPE";
    var MEDIAPath_Encounter = "LGPE";
    var MEDIAPath_Pocket_Icon = "LGPE";
    var MEDIAPath_Pokémon_Icon = "LGPE";
}
if (GameID >= 33 && GameID <= 34) {
    var Generation = 8;
    var JSONPath_Pokédex = ["Galar Pokédex_SwSh","Isle of Armor Pokédex_SwSh","Crown Tundra Pokédex_SwSh"];
    var JSONPath_HeldItem = "SwSh";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
    var MEDIAPath_Pocket_Icon = "SwSh";
    var MEDIAPath_Type_Text = "SwSh";
}

if (GameID == 14 || GameID == 16) {
    var JSONPath_HeldItem = "DPt";
    var JSONPath_HeldItemPercentage = ["5%","50%","100%"];
}



if (Generation >= 1 && Generation <= 2) {
    var JSONPath_Category = "1-2";
    var MEDIAPath_Currency = "I-II";
}

if (Generation >= 2 && Generation <= 4) {
    var JSONPath_Type = "2-4";
}
if (Generation >= 2 && Generation <= 5) {
    var JSONPath_Typechart = "2-5";
    var JSONPath_BaseStats = "2-5";
}
if (Generation >= 3 && Generation <= 5) {
    var JSONPath_Category = "3-5";
    var MEDIAPath_Pokémon_Icon = "III-V";
}
if (Generation >= 3 && Generation <= 6) {
    var JSONPath_CatchRate = "3-6";
}
if (Generation >= 4 && Generation <= 5) {
    var JSONPath_Ability = "4-5";
    var MEDIAPath_Currency = "IV-V";
}
if (Generation >= 5 && Generation <= 6) {
    var JSONPath_HatchRateSteps = "5-6";
}
if (Generation >= 6 && Generation <= 8) {
    var JSONPath_Typechart = "6-8";
    var JSONPath_Type = "6-8";
    var JSONPath_Category = "6-8";
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

}

if (Generation == 2 || Generation == 7) {
    var JSONPath_HatchRateSteps = "2+7";
}


if (Generation == 1) {
    var JSONPath_Typechart = "1";
    var JSONPath_Type = "1";
    var JSONPath_BaseStats = "1";
    var MEDIAPath_Pokémon_Icon = "I";
}
if (Generation == 2) {
    var JSONPath_CatchRate = "2";
    var MEDIAPath_Pokémon_Icon = "II";
}
if (Generation == 3) {
    var JSONPath_Type = "3";
    var JSONPath_HatchRateSteps = "3";
    var JSONPath_Ability = "3";
    var JSONPath_ExperienceYield = "3";
    var MEDIAPath_Currency = "III";
}
if (Generation == 4) {
    var JSONPath_HatchRateSteps = "4";
    var JSONPath_ExperienceYield = "4";
    var MEDIAPath_Type_Text = "IV";
}
if (Generation == 5) {
    var JSONPath_Type = "5";
    var JSONPath_ExperienceYield = "5";
    var MEDIAPath_Type_Text = "V";
}
if (Generation == 6) {
    var JSONPath_Ability = "6";
    var JSONPath_ExperienceYield = "6";
    var JSONPath_BaseStats = "6";
    var MEDIAPath_Currency = "VI";
    var MEDIAPath_Type_Text = "VI";
    var MEDIAPath_Pokémon_Icon = "VI";
}
if (Generation == 7) {
    var JSONPath_Ability = "7";
    var JSONPath_ExperienceYield = "7";
    var JSONPath_BaseStats = "7";
    var MEDIAPath_Currency = "VII";
}
if (Generation == 8) {
    var JSONPath_Ability = "8";
    var JSONPath_EggGroup = "8";
    var JSONPath_ExperienceYield = "8";
    var JSONPath_BaseStats = "8";
    var JSONPath_CatchRate = "8";
    var MEDIAPath_Item_Icon = "VIII";
    var MEDIAPath_Currency = "VIII";
    var MEDIAPath_Pokémon_Icon = "VIII";
}



















console.log(JSONPath_Category);
console.log(JSONPath_Type);
console.log(JSONPath_Pokédex);
console.log(JSONPath_PokédexEntry);
console.log(JSONPath_Ability);
console.log(JSONPath_CatchRate);
console.log(JSONPath_LevelingRate);
console.log(JSONPath_GenderRatio);
console.log(JSONPath_EggGroup);
console.log(JSONPath_HatchRateEggCycle);
console.log(JSONPath_HatchRateSteps);
console.log(JSONPath_ExperienceYield);
console.log(JSONPath_BaseStats);
console.log(JSONPath_HeldItem);
console.log(JSONPath_HeldItemPercentage);
console.log(JSONPath_Typechart);
console.log(MEDIAPath_Map);
console.log(MEDIAPath_Encounter);
console.log(MEDIAPath_Currency);
console.log(MEDIAPath_Pocket_Icon);
console.log(MEDIAPath_Pokémon_Portrait);
console.log(MEDIAPath_Pokémon_Icon);
console.log(MEDIAPath_Item_Icon);
console.log(MEDIAPath_Type_Category);
console.log(MEDIAPath_Type_Text);
console.log(MEDIAPath_Type_Symbol);
console.log(MEDIAPath_Type_Icon);