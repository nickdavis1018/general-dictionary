let wordData;
let randomData;
let randomDataRef;

const $body = $('body')
const $word = $('#word');
const $phonetic = $('#phonetic');
const $origin = $('#origin');
const $synonyms = $('#synonyms');
const $antonyms = $('#antonyms');
const $sound = $('#pronounce');
const $definition = $('#definition')
const $input = $('input[id="text-submit"]');
const $randWord = $("#random-word")
const $randWordDesc = $("#random-word-description")

function getWord(event){
  event.preventDefault();
  $.ajax({
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${$input.val()}`
  }).then(
    function(data){
      wordData = data;
      $(".description").html("")
      $(".clear").html("")
      $input.val('');
      render();
    },
    function(error){
    $definition.text(`Something went wrong. "${$input.val()}" did not match our database and failed to return any results. Please try again with a different search.`);
    }
  )
}

function render() {
  $word.html(`${wordData[0].word}`);
  if(wordData[0].phonetic === undefined){
  $phonetic.html(`Phonetic Unkown`)
  }
  else{
  $phonetic.html(`/${wordData[0].phonetic}/`)}
  if(wordData[0].origin === undefined){
  $origin.html(`Origin Unkown`)
  }
  else{
  $origin.html(`${wordData[0].origin}`)}
  $sound.empty()
  $sound.html(`<audio controls id="pronounce"><source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg"</audio>"`)
    for(let i=0; i < wordData[0].meanings.length; i++){
      for(let x=0; x < wordData[0].meanings[i].definitions.length; x++){
        $definition.append(`<div class="word-css-class" id="define${i}-${x}"><strong>${wordData[0].word}</strong> <i>(${wordData[0].meanings[i].partOfSpeech})</i> <br><i>${wordData[0].meanings[i].definitions[x].definition}</i></div>`)
        if(wordData[0].meanings[i].definitions[x].example !== undefined){
          const $exDataString = wordData[0].meanings[i].definitions[x].example
          $(`#define${i}-${x}`).append(`<p class="ex-css"><i>Example: "${$exDataString}"</i></p>`)}
        if(wordData[0].meanings[i].definitions[x].synonyms.length > 0){
          let $synData = wordData[0].meanings[i].definitions[x].synonyms.slice(0, 20)
          let $synDataString = $synData.join(', ')
          $(`#define${i}-${x}`).append(`<p class="syn-css"><i>Synonyms: ${$synDataString}</i></p>`)}
        if(wordData[0].meanings[i].definitions[x].antonyms.length > 0){
          let $antData = wordData[0].meanings[i].definitions[x].antonyms.slice(0, 10)
          let $antDataString = $antData.join(', ')
          $(`#define${i}-${x}`).append(`<p class="ant-css"><i>Antonyms: ${$antDataString}</i></p></div>`)}
        $(`#define${i}-${x}`).css("border", "solid")
        $(`#define${i}-${x}`).css("border-color", "black")
        $definition.css("border", "solid")
        $definition.css("border-color", "black")
        $definition.css("border-radius", "8px")
    }
  }
}
function randomWord(){
  $.ajax({
    url: 'https://random-words-api.vercel.app/word'
  }).then(
    function(data){
      randomData = data;
      $.ajax({
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${randomData[0].word}`
      }).then(
          function(data){
          randomDataRef = data;
          $randWord.html(`<strong><i>${randomDataRef[0].word}<i></strong>`)
          for(let i=0; i < randomDataRef[0].meanings.length; i++){
            for(let x=0; x < randomDataRef[0].meanings[i].definitions.length; x++){
              $randWordDesc.append(`<p class="rand-word-css"><i>(${randomDataRef[0].meanings[i].partOfSpeech})</i><br><i>${randomDataRef[0].meanings[i].definitions[x].definition}</i></p>`)
              if(randomDataRef[0].meanings[i].definitions[x].example !== undefined){
              const $exRandDataString = randomDataRef[0].meanings[i].definitions[x].example
              $(`#rand-word-id`).append(`<p class="rand-ex-css" id="rand-example-text${i}-${x}"><i>ex: "${$exRandDataString}"</p></i>`)}
          }}},
          function(error){
          randomWord();
            })},
    function(error){
      $randWord.html("Error. Word retrieval failed. Please refresh the page and try again.")})}

function clearRandom(){
  $randWord.empty()
  $randWordDesc.empty()
  randomWord()
}

function expandDetails(){
  $input.val(`${randomDataRef[0].word}`)
  $("#search").click()
}

    $('form').on('submit', getWord);
    $(document).ready(randomWord);
    $('#reset').on('click', clearRandom)
    $('#expand').on('click', expandDetails)

