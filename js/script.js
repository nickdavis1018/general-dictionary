let wordData;

const $word = $('#word');
const $phonetic = $('#phonetic');
const $origin= $('#origin');
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
  let synList = 
  $word.text(`${wordData[0].word}`);
  $phonetic.text(`${wordData[0].phonetic}`);
  $origin.text(`${wordData[0].origin}`)
  for(let i=0; i < wordData[0].meanings[0].definitions.length; i++){
  $definition.append(`<li>${wordData[0].meanings[0].definitions[i].definition}</li>`)}
  // for($synoynm of $synoynms){
  // $synonyms.append(`<li>${wordData[0].meanings[0].definitions[i].synoynms}</li>`)} - working on synonyms list
  $sound.html(`<source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg">"`)}

$('form').on('submit', getWord);