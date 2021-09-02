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
const $input = $('input[id="textsubmit"]');
const $randWord = $("#random-word")
const $randWordDesc = $("#random-word-description")
const $randWordPronounce = $("#random-word-pronounce")
const $randWordSynonyms = $("#random-word-synonyms")
const $wordType = $("#word-type")
const $master = $("#main-flex")

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
  $phonetic.text(`Phonetic: ${wordData[0].phonetic}`);
  $origin.text(`Origin: ${wordData[0].origin}`)
  $sound.empty()
  $sound.html(`<audio controls id="pronounce"><source src="https:${wordData[0].phonetics[0].audio}" type="audio/mpeg"</audio>"`)
    for(let i=0; i < wordData[0].meanings.length; i++){
    const speech = wordData[0].meanings[i].partOfSpeech
      for(let x=0; x < wordData[0].meanings[i].definitions.length; x++){
      $definition.append(`<p class="word-css" id="define${x}">${speech}: ${wordData[0].meanings[i].definitions[x].definition}</p>`)
      $definition.css("font-weight", "bold")
      const $exDataString = wordData[0].meanings[i].definitions[x].example.charAt(0).toUpperCase() + wordData[0].meanings[i].definitions[x].example.slice(1)
      $definition.append(`<p class="ex-css" id="example-text${x}">ex: "${$exDataString}"</p>`)
      let $synData = wordData[0].meanings[i].definitions[x].synonyms.slice(0, 20)
      let $synDataString = $synData.join(', ')
      $definition.append(`<p class="syn-css" id="syndesc${x}">${$synDataString}</p>`)
      let $antData = wordData[0].meanings[i].definitions[x].antonyms.slice(0, 10)
      let $antDataString = $antData.join(', ')
      $definition.append(`<p class="ant-css" id="antdesc${x}">${$antDataString}</p></div>`)
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
          $randWord.text(`${randomDataRef[0].word}`)
          $randWordPronounce.text(`${randomDataRef[0].phonetic}`)
          for(let i=0; i < randomDataRef[0].meanings[0].definitions.length; i++){
          $randWordDesc.append(`<p id="random-define${i}">${randomDataRef[0].meanings[0].definitions[i].definition}</p>`)
          $(`#random-define${i}`).css("font-weight", "bold")
          if(randomDataRef[0].meanings[0].definitions[i].synonyms === true){
          let $randSynContainer = $(`#random-define${i}`)
          let $randSynData = randomDataRef[0].meanings[0].definitions[i].synonyms.slice(0, 20)
          let $randSynDataString = $randSynData.join(', ')
          $randSynContainer.after(`<p id="syndesc${i}">Synonyms: ${$randSynDataString}</p>`)}}
          },
          function(error){
          randomWord();
            })},
    function(error){
      $randWord.html("Error. Word retrieval failed. Please try again.")
      $randWordDesc.html("Error. Word description retrieval failed. Please try again.")
      $randWordPronounce.html("Error. Word pronunciation retrieval failed. Please try again.")})}

function clearRandom(){
  $randWord.empty()
  $randWordPronounce.empty()
  $randWordDesc.empty()
  randomWord()
}

function expandDetails(){
  $input.val(`${randomDataRef[0].word}`)
  getWord()

}

    $('form').on('submit', getWord);
    $(document).ready(randomWord);
    $('#reset').on('click', clearRandom)
    $('#expand').on('click', expandDetails)

