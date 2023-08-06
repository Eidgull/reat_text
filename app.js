const typer=document.getElementById('typeer');

let string='آموزشگاه سایق اولین مرکز کامپیوتر سانیس درهرات';

let split=string.split('');

function anim(){
    split.length>0 ?typer.innerHTML +=split.shift():clearInterval(running);

    let running=setTimeout(anim, 110)

}
anim();

// section read the text

let text="Saiq, the first computer science training center in Herat";

let Uternace=new SpeechSynthesisUtterance(text)

document.onclick= ()=>{
    speechSynthesis.speak(Uternace);
}