General Dictionary
---
<h3>Welcome! You've arrived at the General Dictionary ReadMe!</h3>
<h2>About</h2>
<p>The goal of this tool is to allow users to easily connect to and pull data from two separate dictionary-based endpoints at once - a random word generator located at <a href="https://random-words-api.vercel.app/word">https://random-words-api.vercel.app/word</a>, and a public dictionary database with documentation located at <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>.</p>
<h2>Laguages Used</h2>
<p>HTML, CSS, JavaScript, JQuery</p>
<h2>Build Status</h2>
<p>This work is a WIP, and is publically accessible for collaboration or feedback. </p>
<h2>Future Features & Challenges</h2>
<p>The main stretch goals of this project are below:</p>
<ul>
<li>Locate another endpoint that can be accessed at the highest level - <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a> limits our ability to loop over all word names in the array. Because of this, we have been unable to build a "did you mean?" search feature, and therefore will provide a frustrating user experience when typos inevitably occur. A workaround for this is to copy/paste all word names from the GitHub repository associated with <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>, but that has a tangible impact on speed and overall defeats part of the purpose of this project, which is to work dynamically with the API's and not house their data within our code.</li>
<li>Connect to various translation-focused endpoints to generate equally comprehensive definitions/pronunciations across multiple languages, as providing a multi-lingual experience would optimize the tool.</li>
<li>Add more interactivity and visual stimulation onto the page; improve styling.</li>
</ul>
<h2>Usage and Navigation Instruction</h2>
<p>The tool generates a randomized word on page-load, and also features a word search tool that allows end-users to search for a specific word's definition, origin, synonyms, antonynms, and pronunciation on-demand. The usage of the General Dictionary is ultimately quite simple - using primarily JavaScript & Query, output the following:</p>
<ul>
<li>A random word on page-load, generated from the <a href="https://random-words-api.vercel.app/word">random-words-api</a> and cross-checked against "https://api.dictionaryapi.dev/api/v2/entries/en/(randomly-generated-word-here)". Once a successful match is located, the tool will spit out random word data using the more comprehensive definition data contained within <a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a>. A failed match will cause the function to re-run until a match is located successfully.</li>
<li>A searched-for word based on whatever a user inputs into the "General Dictionary Search" field.</li>
</ul>
<p>To utilize the randomized vocabulary word tool, simply refresh the page or, if desired, click the <strong>"New word"</strong> button to generate a new word:</p>
<img src=https://imgur.com/Ky0dd8q.png>
<br>
<p>Clicking "Get details" will run the Random Word throutgh the General Word Search and provide more information including synonyms, pronunciation, etc:
<img src=https://imgur.com/GWua6AG.png>
<br>
<p>To utilize the <strong>"General Word Search"</strong> feature, type your word of choice into the displayed search bar and either click "Search word" or hit Enter/Return on your keyboard to populate the chosen word's defintion data:</p>
<img src=https://i.imgur.com/tUyoqgq.png>
<h2>Contributors/Reference</h2>
<h3>General Dictionary</h3>
<a href="https://github.com/nickdavis1018/general-dictionary">General Dictionary GitHub<a><br>
<h3>Dictionary API</h3>
<a href="https://dictionaryapi.dev/">API Documentation<a><br>
<a href="https://github.com/meetDeveloper/freeDictionaryAPI">GitHub Repo</a><br>
<h3>Random Word API</h3>
<a href="https://random-words-api.vercel.app/word">API Example<a><br>
<a href="https://github.com/mcnaveen/Random-Words-API">GitHub Repo</a><br>
<h2>Provide Feedback</h2>
<p>Have feedback you would like to share? Want to see a feature added? Want to contribute? <a href = "mailto: nickdavis1018@gmail.com">Send me an email!</a></p>
