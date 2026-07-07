const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const story = document.getElementById("story");

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

const messages = [

{
title:"Hey Beautiful 🌸",
text:"I know things haven't been perfect lately..."
},

{
title:"I'm Sorry ❤️",
text:"Not because I have to say it... but because seeing you sad hurts me more than you'll ever know."
},

{
title:"One Truth 💗",
text:"If I could go back and change one thing... it would be every moment that made you question your smile."
},

{
title:"My Favorite Place 🌹",
text:"Your smile. That's it. That's always been my favorite place."
},

{
title:"Promise 🌷",
text:"I can't promise a life without mistakes... but I promise a love that never stops choosing you."
},

{
title:"One Last Question 🥺",
text:"Can we write our next chapter together?"
}

];

let page = -1;

function nextStory(){

if(page==-1){

document.querySelector(".container").style.display="none";

story.classList.remove("hidden");

page=0;

showPage();

return;

}

page++;

if(page<messages.length){

showPage();

}

else{

finalPage();

}

}

function showPage(){

storyTitle.innerHTML=messages[page].title;

storyText.innerHTML=messages[page].text;

}

function finalPage(){

document.body.innerHTML=`

<div class="final">

<h1>❤️</h1>

<h2>I Love You</h2>

<p>

Thank you for reading till the end.

No matter how many chapters life writes...

You'll always remain my favorite one.

</p>

<button onclick="location.reload()">

Start Again 🌸

</button>

</div>

`;

}

musicBtn.onclick=function(){

if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

}

else{

music.pause();

musicBtn.innerHTML="🎵";

}

}
