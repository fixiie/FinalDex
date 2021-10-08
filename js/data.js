let PokémonMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Pok%C3%A9mon%20Metadata.json';
let PokémonMetadataRequest = new XMLHttpRequest();
PokémonMetadataRequest.open('GET', PokémonMetadataRequestURL);
PokémonMetadataRequest.responseType = 'json';
PokémonMetadataRequest.send();
PokémonMetadataRequest.onload = function() {
  var PokémonMetadata = PokémonMetadataRequest.response;
  const finaldataForm = PokémonMetadata["Form"];

  var finaldataFormDefault = [];
  var finaldataPokédexEntryDefault = [];
  var finaldataPokédexIDDefault = [];
  var finaldataCategoryDefault = [];
  var finaldataTypeDefault = [];
  var finaldataAbilityDefault = [];
  var finaldataLevelingRateDefault = [];
  var finaldataEggGroupDefault = [];
  var finaldataHatchRateDefault = [];
  var finaldataExperienceYieldDefault = [];

  for (var i = 0; i < finaldataForm.length; i++) {
      if (finaldataForm[i].Variant.includes("Default")) {
          finaldataFormDefault.push(PokémonMetadata["Form"][i]);
          finaldataPokédexEntryDefault.push(PokémonMetadata["Pokédex Entry"][i]);
          finaldataPokédexIDDefault.push(PokémonMetadata["Pokédex ID"][i]);
          finaldataCategoryDefault.push(PokémonMetadata["Category"][i]);
          finaldataTypeDefault.push(PokémonMetadata["Type"][i]);
          finaldataAbilityDefault.push(PokémonMetadata["Ability"][i]);
          finaldataLevelingRateDefault.push(PokémonMetadata["Leveling Rate"][i]);
          finaldataEggGroupDefault.push(PokémonMetadata["Egg Group"][i]);
          finaldataHatchRateDefault.push(PokémonMetadata["Hatch Rate"][i]);
          finaldataExperienceYieldDefault.push(PokémonMetadata["Experience Yield"][i]);
      }
  }



  for (var i = 0; i < finaldataFormDefault.length; i++) {
      if (finaldataFormDefault[i].Game == "Black Version 2/White Version 2") {finaldataFormDefault[i].Game = "21,22";}
      if (finaldataFormDefault[i].Game == "Black/White") {finaldataFormDefault[i].Game = "19,20";}
      if (finaldataFormDefault[i].Game == "Black/White/Black Version 2/White Version 2") {finaldataFormDefault[i].Game = "19,20,21,22";}
      if (finaldataFormDefault[i].Game == "Crystal") {finaldataFormDefault[i].Game = "6";}
      if (finaldataFormDefault[i].Game == "Diamond/Pearl") {finaldataFormDefault[i].Game = "14,15";}
      if (finaldataFormDefault[i].Game == "Diamond/Pearl/Platinum") {finaldataFormDefault[i].Game = "14,15,16";}
      if (finaldataFormDefault[i].Game == "Emerald") {finaldataFormDefault[i].Game = "9";}
      if (finaldataFormDefault[i].Game == "FireRed") {finaldataFormDefault[i].Game = "10";}
      if (finaldataFormDefault[i].Game == "FireRed/LeafGreen") {finaldataFormDefault[i].Game = "10,11";}
      if (finaldataFormDefault[i].Game == "Gold/Silver") {finaldataFormDefault[i].Game = "4,5";}
      if (finaldataFormDefault[i].Game == "HeartGold/SoulSilver") {finaldataFormDefault[i].Game = "17,18";}
      if (finaldataFormDefault[i].Game == "LeafGreen") {finaldataFormDefault[i].Game = "11";}
      if (finaldataFormDefault[i].Game == "Let's Go Eevee") {finaldataFormDefault[i].Game = "31";}
      if (finaldataFormDefault[i].Game == "Let's Go Pikachu") {finaldataFormDefault[i].Game = "32";}
      if (finaldataFormDefault[i].Game == "Let's Go Pikachu/Let's Go Eevee") {finaldataFormDefault[i].Game = "31,32";}
      if (finaldataFormDefault[i].Game == "Moon") {finaldataFormDefault[i].Game = "28";}
      if (finaldataFormDefault[i].Game == "Omega Ruby/Alpha Sapphire") {finaldataFormDefault[i].Game = "25";}
      if (finaldataFormDefault[i].Game == "Platinum") {finaldataFormDefault[i].Game = "16";}
      if (finaldataFormDefault[i].Game == "Red/Blue") {finaldataFormDefault[i].Game = "1,2";}
      if (finaldataFormDefault[i].Game == "Red/Blue/Yellow") {finaldataFormDefault[i].Game = "1,2,3";}
      if (finaldataFormDefault[i].Game == "Ruby/Sapphire") {finaldataFormDefault[i].Game = "7,8";}
      if (finaldataFormDefault[i].Game == "Sun") {finaldataFormDefault[i].Game = "27";}
      if (finaldataFormDefault[i].Game == "Sun/Moon") {finaldataFormDefault[i].Game = "27,28";}
      if (finaldataFormDefault[i].Game == "Sun/Moon/Ultra Sun/Ultra Moon") {finaldataFormDefault[i].Game = "27,28,29,30";}
      if (finaldataFormDefault[i].Game == "Sword/Shield") {finaldataFormDefault[i].Game = "33,34";}
      if (finaldataFormDefault[i].Game == "The Crown Tundra") {finaldataFormDefault[i].Game = "36";}
      if (finaldataFormDefault[i].Game == "The Isle of Armor") {finaldataFormDefault[i].Game = "35";}
      if (finaldataFormDefault[i].Game == "Ultra Sun/Ultra Moon") {finaldataFormDefault[i].Game = "29,30";}
      if (finaldataFormDefault[i].Game == "X/Y") {finaldataFormDefault[i].Game = "23,24";}
      if (finaldataFormDefault[i].Game == "X/Y/Omega Ruby/Alpha Sapphire") {finaldataFormDefault[i].Game = "23,24,25,26";}
  }
  
  var finaldataDefaultGame = [];
  
  for (var i = 0; i < finaldataFormDefault.length; i++) {
      for (var q = 0; q < finaldataFormDefault[i]["Game"].split(/[ ,]+/).length; q++) {
          if (finaldataFormDefault[i]["Game"].split(/[ ,]+/)[q] <= gameid) {
              finaldataDefaultGame.push("true" + q)
          }
          else {
              finaldataDefaultGame.push("false" + q)
          }
      }
  }
  
  finaldataDefaultGame = finaldataDefaultGame.join("")
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("4true0","4,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("3true0","3,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("2true0","2,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("1true0","1,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0true0","0,true0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0true0","0,true0");
  
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("4false0","4,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("3false0","3,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("2false0","2,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("1false0","1,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0false0","0,false0");
  finaldataDefaultGame = finaldataDefaultGame.replaceAll("0false0","0,false0");
  
  var finaldataDefaultGame = finaldataDefaultGame.split(',');

  createContain(finaldataDefaultGame,finaldataFormDefault,finaldataPokédexIDDefault);
  createGameData();
  memoryRadio1();
  memoryRadio2();
  memoryRadio3(finaldataDefaultGame);
  memoryCheckbox();
  modalPokdata(finaldataDefaultGame,finaldataFormDefault,finaldataCategoryDefault,finaldataTypeDefault,finaldataPokédexEntryDefault,finaldataAbilityDefault,finaldataLevelingRateDefault,finaldataEggGroupDefault,finaldataHatchRateDefault,finaldataExperienceYieldDefault);
  modalGamedata();
  count();
  search();
  countdown();
  stopwatch();

}

