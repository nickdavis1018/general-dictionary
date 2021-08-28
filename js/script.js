let wordData;

const $word = $('#word');
const $phonetic = $('#phonetic');
const $origin = $('#origin');
const $synonyms = $('#synonyms');
const $sound = $('#pronounce');
const $definition = $('#definition')
const $input = $('input[id="textsubmit"]');

function getWord(event){
  event.preventDefault();
  $.ajax({
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${$input.val()}`
  }).then(
    function(data){
      wordData = data;
      $definition.html("")
      render();
      $input.val('');
    },
    function(error){
    $word.text("Error!");
    $phonetic.text("Error!");
    $origin.text("Error!");
    $synonyms.text("Error!");
    $definition.text("Error!")
    }
  )
}

function render() {
  $word.text(`${wordData[0].word}`);
  $phonetic.text(`${wordData[0].phonetic}`);
  $origin.text(`${wordData[0].origin}`)
  for(let i=0; i < wordData[0].meanings[0].definitions.length; i++){
  $definition.append(`<p id=define${i}>${wordData[0].meanings[0].definitions[i].definition}</p>`)
  let $synItem = $(`#define${i}`)
  for(let x=0; x < wordData[0].meanings[0].definitions[0].synonyms.length; x++){
  $synItem.append(`<li id=syndesc${x}>${wordData[0].meanings[0].definitions[0].synonyms[x]}</li>`)}}

  $sound.html(`<source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg">"`)}


$('form').on('submit', getWord);