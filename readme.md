General Dictionary
---
<h3>Welcome! You've arrived at the General Dictionary ReadMe!</h3>
<h2>About</h2>
<p>The goal of this tool is to allow users to easily connect to and pull data from two separate dictionary-based endpoints at once - a random word generator located at <a href="https://random-words-api.vercel.app/word">https://random-words-api.vercel.app/word</a>, and a public dictionary database with documentation located at <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>.</p>
<h2>Laguages Used</h2>
<p>HTML, CSS, JavaScript, JQuery, AJAX, Google Fonts</p>
<h2>Build Status</h2>
<p>This work is a WIP, and is publicly accessible for collaboration or feedback. </p>
<h2>Future Features & Challenges</h2>
<p>The main stretch goals of this project are below:</p>
<ul>
<li>Locate another endpoint that can be accessed at the highest level - <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a> limits our ability to loop over all word names in the array. Because of this, we have been unable to build a "did you mean?" search feature, and therefore will provide a frustrating user experience when typos inevitably occur. A workaround for this is to copy/paste all word names from the GitHub repository associated with <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>, but that has a tangible impact on speed and overall defeats part of the purpose of this project, which is to work dynamically with the API's and not house their data within our code.</li>
<li>Connect to various translation-focused endpoints to generate equally comprehensive definitions/pronunciations across multiple languages, as providing a multi-lingual experience would optimize the tool.</li>
<li>Add Local Favorites Functionality. Users can currently only access one master list of bookmarked words and can only clear it all at once. Goal will be to expand functionality to allow users to expand details on Favorited words as well as remove individual items.
<li>Add more interactivity and visual stimulation onto the page; improve styling.</li>
</ul>
<h2>Usage and Navigation Instruction</h2>
<p>The tool generates a randomized word on page-load, and also features a word search tool that allows end-users to search for a specific word's definition, origin, synonyms, antonynms, and pronunciation on-demand. The usage of the General Dictionary is ultimately quite simple - using primarily JavaScript & Query, output the following:</p>
<ul>
<li>A random word on page-load, generated from the <a href="https://random-words-api.vercel.app/word">random-words-api</a> and cross-checked against <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>. Once a successful match is located, the tool will spit out random word data using the more comprehensive definition data contained within <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>. A failed match will cause the function to re-run until a match is located successfully.</li>
<li>A searched-for word based on whatever a user inputs into the "General Dictionary Search" field.</li>
</ul>
<p>To utilize the randomized vocabulary word tool, simply refresh the page or, if desired, click the <strong>"Generate new word"</strong> button to populate a new word:</p>
<img src=https://imgur.com/v610jvk.png class="pics">
<br>
<p>Clicking <strong>"Show details"</strong> will run the Random Word throutgh the General Word Search and provide more information including synonyms, pronunciation, etc:</p>
<img src=https://imgur.com/e0G7zKv.png class="pics">
<br>
<p>To utilize the <strong>"General Word Search"</strong> feature, type your word of choice into the displayed search bar and either click "Go" or hit Enter/Return on your keyboard to populate the chosen word's defintion data:</p>
<img src=https://imgur.com/eVaNIDL.png class="pics">
<h2>Contributors/Reference</h2>
<h3>General Dictionary</h3>
<a href="https://general-dictionary.netlify.app/">Live Site Link<a><br>
<a href="https://github.com/nickdavis1018/general-dictionary">General Dictionary GitHub<a><br>
<h3>Dictionary API</h3>
<a href="https://dictionaryapi.dev/">API Documentation<a><br>
<a href="https://github.com/meetDeveloper/freeDictionaryAPI">GitHub Repo</a><br>
<h3>Random Word API</h3>
<a href="https://random-words-api.vercel.app/word">API Example<a><br>
<a href="https://github.com/mcnaveen/Random-Words-API">GitHub Repo</a><br>
<h3>Backup Random Word API (not in use)</h3>
<a href="https://random-word-api.herokuapp.com/home">API Documentation<a><br>
<a href="https://github.com/RazorSh4rk/random-word-api">GitHub Repo</a><br>
<a href="https://random-word-api.herokuapp.com/word?number=1">API Example</a><br>
<h2>Provide Feedback</h2>
<p>Have feedback you would like to share? Want to see a feature added? Want to contribute? <a href = "mailto: nickdavis1018@gmail.com">Send me an email!</a><br></p>
