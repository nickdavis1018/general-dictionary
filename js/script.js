let wordData;
let randomData;
let randomDataRef;

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
const $randWordSynonyms = $("#random-word-synonyms")
const $wordType =$("#word-type")

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
  $word.text(`Word: ${wordData[0].word}`);
  $phonetic.text(`Pronunciation: ${wordData[0].phonetic}`);
  $origin.text(`Origin: ${wordData[0].origin}`)
  // for(let x=0; x < wordData[0].meanings.length; x++){
  // $wordType.html(`<p class="master" id="description-house${x}"</p>Part of Speech: ${WordData[0].meanings[x].partOfSpeech}`)
  // WordData[0].meanings[x].definitions[]
  // // let $wordTypeContainer = $(`"#description-house${i}"`)
  // $definition.append(`<p class="definition-css" id="define"${i}>${wordData[0].word}: ${wordData[0].meanings[0].definitions[i].definition}</p>`)
  for(let i=0; i < wordData[0].meanings[0].definitions.length; i++){
  $definition.append(`<p class="definition-css" id="define${i}">${wordData[0].word}: ${wordData[0].meanings[0].definitions[i].definition}</p>`)
  $(`#define${i}`).css("font-weight", "bold")
  let $synContainer = $(`#define${i}`)
  let $synData = wordData[0].meanings[0].definitions[i].synonyms.slice(0, 20)
  let $synDataString = $synData.join(', ')
  $synContainer.after(`<p class="syn-css" id=syndesc${i}>${$synDataString}</p>`)}
  $sound.empty()
  $sound.html(`<audio controls id="pronounce"><source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg"</audio>"`)}
  // $sound.html(`<source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg">"`)}

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
          $randWord.text(`${randomDataRef[0].word}`)
          $randWordPronounce.text(`${randomDataRef[0].phonetic}`)
          for(let i=0; i < randomDataRef[0].meanings[0].definitions.length; i++){
          $randWordDesc.append(`<p id="random-define${i}">Definition #${i+1}: ${randomDataRef[0].meanings[0].definitions[i].definition}</p>`)
          $(`#random-define${i}`).css("font-weight", "bold")
          if(randomDataRef[0].meanings[0].definitions[i].synonyms === true){
          let $randSynContainer = $(`#random-define${i}`)
          let $randSynData = randomDataRef[0].meanings[0].definitions[i].synonyms.slice(0, 20)
          let $randSynDataString = $randSynData.join(', ')
          $randSynContainer.after(`<p id="syndesc${i}">Synonyms${$randSynDataString}</p>`)}
          else{
          $randWordSynonyms.text("No Synonyms Found")
          }}
          },
          function(error){
          randomWord();
            })},
    function(error){
      $randWord.html("Error. Word retrieval failed. Please try again.")
      $randWordDesc.html("Error. Word description retrieval failed. Please try again.")
      $randWordPronounce.html("Error. Word pronunciation retrieval failed. Please try again.")})}
       

    $('form').on('submit', getWord);
    $(document).ready(randomWord)
  

    // function(error){
    //   $randWord.html("Error. Word retrieval failed. Please try again.")
    //   $randWordDesc.html("Error. Word description retrieval failed. Please try again.")
    //   $randWordPronounce.html("Error. Word pronunciation retrieval failed. Please try again.")
    // }

// $(document).ready(function randomWord(event){
//   $.ajax({
//     url: 'https://random-words-api.vercel.app/word'
//   }).then(
//     function(data){
//       randomData = data;
//       $randWord.text(`${randomData[0].word}`)
//       $randWordDesc.text(`${randomData[0].definition}`)
//       $randWordPronounce.text(`${randomData[0].pronunciation}`)
//     },
//     function(error){
//       $randWord.html("Error. Word retrieval failed. Please try again.")
//       $randWordDesc.html("Error. Word description retrieval failed. Please try again.")
//       $randWordPronounce.html("Error. Word pronunciation retrieval failed. Please try again.")
//     }
//   )})


