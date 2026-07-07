let step = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");

function nextPage(){

document.getElementById("music").play();

step++;

if(step==1){

title.innerHTML="I Can't Change Yesterday";

text.innerHTML="But I'd give anything to make your heart lighter today.";

}

else if(step==2){

title.innerHTML="Every Smile Of Yours";

text.innerHTML="Is still my favourite place.";

}

else if(step==3){

title.innerHTML="One Last Question";

text.innerHTML="Can we write a better chapter together?";

document.querySelector("button").innerHTML="Forgive This Idiot? 🥺";

}

else{

document.body.innerHTML=`

<div style="display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;color:white;flex-direction:column;">

<h1 style="font-size:50px;">
Thank You ❤️
</h1>

<p style="font-size:22px;margin-top:20px;">
No matter what...
I'll always choose you.
</p>

</div>

`;

}

}
