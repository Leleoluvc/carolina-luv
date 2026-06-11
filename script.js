// CONTADOR

const inicio = new Date("2026-04-27T00:00:00");

function atualizar(){

const agora = new Date();

const diff = agora - inicio;

const dias = Math.floor(diff/(1000*60*60*24));

const horas = Math.floor(
(diff%(1000*60*60*24))
/
(1000*60*60)
);

const minutos = Math.floor(
(diff%(1000*60*60))
/
(1000*60)
);

const segundos = Math.floor(
(diff%(1000*60))
/
1000
);

document.getElementById("contador").innerHTML =
`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;

}

setInterval(atualizar,1000);
atualizar();


// BOTÃO

const heartButton =
document.getElementById("heartButton");

const heartMessage =
document.getElementById("heartMessage");

heartButton.addEventListener("click",()=>{

if(heartMessage.style.display==="block"){

heartMessage.style.display="none";

heartButton.innerHTML=
"❤️ Abrir meu coração";

}else{

heartMessage.style.display="block";

heartButton.innerHTML=
"💔 Fechar";

}

});


// ESTRELAS

const stars =
document.getElementById("stars");

for(let i=0;i<250;i++){

const star =
document.createElement("div");

star.classList.add("star");

const size =
Math.random()*4+1;

star.style.width=
size+"px";

star.style.height=
size+"px";

star.style.left=
Math.random()*100+"%";

star.style.top=
Math.random()*100+"%";

star.style.background=
Math.random()>0.8
? "#ff3d68"
: "white";

star.style.animationDuration=
(Math.random()*4+2)+"s";

stars.appendChild(star);

}


// ESTRELAS CADENTES

function createShootingStar(){

const star =
document.createElement("div");

star.classList.add("shooting-star");

star.style.top=
Math.random()*300+"px";

star.style.left=
Math.random()*100+"vw";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},3000);

}

setInterval(
createShootingStar,
5000
);


// CORAÇÕES

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.animationDuration=
(Math.random()*4+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(
createHeart,
1200
);


// TÍTULO DA ABA

const mensagens = [
"❤️ Carolina",
"💌 Eu te amo",
"🌙 Meu amor",
"✨ Você é especial"
];

let i = 0;

setInterval(()=>{

document.title =
mensagens[i];

i = (i+1)%mensagens.length;

},2500);