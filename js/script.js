let wordData;
let randomData;
let randomDataRef;

const $body = $('body')
const $word = $('#word');
const $phonetic = $('#phonetic');
const $origin = $('#origin');
const $synonyms = $('#synonyms');
const $antonyms = $('#antonyms');
const $sound = $('#sound');
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
      $(".description").html("")
      $(".clear").html("")
      $sound.empty()
      $definition.html(`<p>Something went wrong. <strong>"${$input.val()}"</strong> did not match our database and failed to return any results. Please try again with a different search.</p>`);
      $definition.css("border", '')
      $input.val('');
    }
  )
}

function render() {
  $word.html(`${wordData[0].word}`);
  if(wordData[0].phonetic === undefined){
  $phonetic.html(`Phonetic Unknown`)
  }
  else{
  $phonetic.html(`/${wordData[0].phonetic}/`)}
  if(wordData[0].origin === undefined){
  $origin.html(`Origin Unknown`)
  }
  else{
  $origin.html(`<i>${wordData[0].origin}</i>`)}
  $sound.empty()
  $sound.html(`<audio controls id="pronounce"><source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg"</audio>"`)
    for(let i=0; i < wordData[0].meanings.length; i++){
      for(let x=0; x < wordData[0].meanings[i].definitions.length; x++){
        $definition.append(`<div class="word-css-class" id="define${i}-${x}"><strong>${wordData[0].word}</strong> (${wordData[0].meanings[i].partOfSpeech}) <br> ${wordData[0].meanings[i].definitions[x].definition}</div>`)
        if(wordData[0].meanings[i].definitions[x].example !== undefined){
          const $exDataString = wordData[0].meanings[i].definitions[x].example
          $(`#define${i}-${x}`).append(`<p class="ex-css">Example: <i>"${$exDataString}"</i></p>`)}
        if(wordData[0].meanings[i].definitions[x].synonyms.length > 0){
          let $synData = wordData[0].meanings[i].definitions[x].synonyms.slice(0, 10)
          let $synDataString = $synData.join(' --- ')
          $(`#define${i}-${x}`).append(`<p class="syn-css">Synonyms: <i>${$synDataString}</i></p>`)}
        if(wordData[0].meanings[i].definitions[x].antonyms.length > 0){
          let $antData = wordData[0].meanings[i].definitions[x].antonyms.slice(0, 10)
          let $antDataString = $antData.join(' --- ')
          $(`#define${i}-${x}`).append(`<p class="ant-css">Antonyms: <i>${$antDataString}</i></p></div>`)}
          $(`#define${i}-${x}`).css("border-top", "solid")
          $(`#define${i}-${x}`).css("border-color", "gray")
          $(`#define${i}-${x}`).css("padding-bottom", "10px")
    }
  }
}
function randomWord(){
  $.ajax({
    url: "https://random-words-api.vercel.app/word"
  }).then(
    function(data){
      randomData = data;
      $.ajax({
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${randomData[0].word}`
      }).then(
          function(data){
          randomDataRef = data;
          $randWord.html(`<p>${randomDataRef[0].word}</p>`)
          for(let i=0; i < randomDataRef[0].meanings.length; i++){
            for(let x=0; x < randomDataRef[0].meanings[i].definitions.length; x++){
              $randWordDesc.append(`<p class="rand-word-css"><strong>(${randomDataRef[0].meanings[i].partOfSpeech})</strong><br>${randomDataRef[0].meanings[i].definitions[x].definition}</p>`)
          }}},
          function(error){
          randomWord();
            })},
    function(error){
      $randWord.html("Error. Word retrieval failed. Please refresh the page and try again.")})}    
      
    // Backup Random Word Function: To enable, comment out active randomWord function (lines 74-94) and comment in lines 98-118 below. //
    
    // function randomWord(){
      //   $.ajax({
      //     url: "https://random-word-api.herokuapp.com/word?number=1"
      //   }).then(
      //     function(data){
      //       randomData = data;
      //       $.ajax({
      //         url: `https://api.dictionaryapi.dev/api/v2/entries/en/${randomData[0]}`
      //       }).then(
      //           function(data){
      //           randomDataRef = data;
      //           $randWord.html(`<p>${randomDataRef[0].word}</p>`)
      //           for(let i=0; i < randomDataRef[0].meanings.length; i++){
      //             for(let x=0; x < randomDataRef[0].meanings[i].definitions.length; x++){
      //               $randWordDesc.append(`<p class="rand-word-css"><strong>(${randomDataRef[0].meanings[i].partOfSpeech})</strong><br>${randomDataRef[0].meanings[i].definitions[x].definition}</p>`)
      //           }}},
      //           function(error){
      //           randomWord();
      //             })},
      //     function(error){
      //       $randWord.html("Error. Word retrieval failed. Please refresh the page and try again.")})}


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

