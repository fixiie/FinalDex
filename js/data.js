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

let PokémonMetadataRequestURL = 'https://raw.githubusercontent.com/fixiie/FinalDex/main/data/Pok%C3%A9mon%20Metadata.json';
let PokémonMetadataRequest = new XMLHttpRequest();
PokémonMetadataRequest.open('GET', PokémonMetadataRequestURL);
PokémonMetadataRequest.responseType = 'json';
PokémonMetadataRequest.send();
PokémonMetadataRequest.onload = function() {
  var PokémonMetadata = PokémonMetadataRequest.response;
  const finaldataReference = PokémonMetadata["Reference"];

console.log(PokémonMetadata)

  for (var i = 0; i < finaldataReference.length; i++) {
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
      }
  }

  createContain();
  createGameData();
  memoryRadio1();
  memoryRadio2();
  memoryCheckbox();
  modalPokdata();
  modalGamedata();
  count();
  search();
  countdown();
  stopwatch();

}
