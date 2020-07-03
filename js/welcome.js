const  wtext = document.querySelector(".")
const strtext = wtext.textContent;
const splitText = strtext.split("")

wtext.textContent= "";

for (let i =0; i < splitText.length; i++){
    wtext.innerHTML +="<span>" + splitText[i] + "</span>";
}


let char=0;
let timer= setInterval(onTick,50);

function onTick(){
    const span = wtext.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char=== splitText.length ){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer= null;
    
}