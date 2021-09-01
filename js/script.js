let wordData;
let randomData;

const $body = $('body')
const $word = $('#word');
const $phonetic = $('#phonetic');
const $origin = $('#origin');
const $synonyms = $('#synonyms');
const $sound = $('#pronounce');
const $definition = $('#definition')
const $input = $('input[id="textsubmit"]');
const $randWord = $("#random-word")
const $randWordDesc = $("#random-word-description")
const $randWordPronounce = $("#random-word-pronounce")

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
    // let $userSearch = $input.val()
    // let $searchQuery = $userSearch.slice(0, 3)
    // $searchQuery 
    $word.text("Error!");
    $phonetic.text("Error!");
    $origin.text("Error!");
    $synonyms.text("Error!");
    $definition.text("Error!");
    }
  )
}

function render() {
  $word.text(`${wordData[0].word}`);
  $phonetic.text(`${wordData[0].phonetic}`);
  $origin.text(`${wordData[0].origin}`)
  for(let i=0; i < wordData[0].meanings[0].definitions.length; i++){
  $definition.append(`<p id=define${i}>${wordData[0].meanings[0].definitions[i].definition}</p>`)
  $(`#define${i}`).css("font-weight", "bold")
  let $synContainer = $(`#define${i}`)
  let $synData = wordData[0].meanings[0].definitions[i].synonyms.slice(0, 20)
  let $synDataString = $synData.join(', ')
  // for(let x=0; x < wordData[0].meanings[0].definitions[0].synonyms.length; x++){
  $synContainer.after(`<p id=syndesc${i}>${$synDataString}</p>`)}
  $sound.empty()
  $sound.html(`<audio controls id="pronounce"><source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg"</audio>"`)}
  // $sound.html(`<source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg">"`)}

function randomWord(event){
  $.ajax({
    url: 'https://random-words-api.vercel.app/word'
  }).then(
    function(data){
      randomData = data;
      $randWord.text(`${randomData[0].word}`)
      $randWordDesc.text(`${randomData[0].definition}`)
      $randWordPronounce.text(`${randomData[0].pronunciation}`)
    },
    function(error){
      $randWord.html("Error. Word retrieval failed. Please try again.")
      $randWordDesc.html("Error. Word description retrieval failed. Please try again.")
      $randWordPronounce.html("Error. Word pronunciation retrieval failed. Please try again.")
    }
  )}

$('form').on('submit', getWord);
$(document).ready(function randomWord(event){
  $.ajax({
    url: 'https://random-words-api.vercel.app/word'
  }).then(
    function(data){
      randomData = data;
      $randWord.text(`${randomData[0].word}`)
      $randWordDesc.text(`${randomData[0].definition}`)
      $randWordPronounce.text(`${randomData[0].pronunciation}`)
    },
    function(error){
      $randWord.html("Error. Word retrieval failed. Please try again.")
      $randWordDesc.html("Error. Word description retrieval failed. Please try again.")
      $randWordPronounce.html("Error. Word pronunciation retrieval failed. Please try again.")
    }
  )})



