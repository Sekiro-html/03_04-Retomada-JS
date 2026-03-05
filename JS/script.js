function acesso() {

let txt = window.prompt("Digite seu nome: ");
let senha = "sandrolindo";
let confirmar = window.prompt("digite sua senha: ");

if (confirmar == senha) {
    alert("Seja bem vindo "+txt);
} else {
    window.close();
};

document.getElementById("apresentacao").innerHTML = "Olá "+txt+" aonde quer ir?";
};

function sucesso(position) {
    console.log(position.coords.latitude, position.coords.longitude);

    var map = L.map('map').setView([51.505, -0.09], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

};

navigator.geolocation.getCurrentPosition(sucesso);

const btnTrocaFundo = document.getElementById("mudaCor");
let caixa = document.getElementById("caixa-aleatoria");

function EscolhaInicial() {
    const escolha = window.prompt("Escolha o tipo do inicial: ");

btnTrocaFundo.addEventListener("click", () => {
    let caixa = document.getElementById("caixa-aleatoria");


    if(escolha == "planta") {
        caixa.classList.add("planta");
        caixa.classList.remove("normal");
    } else {
        caixa.classList.add("normal");
        caixa.classList.remove("planta");
    };

    if(escolha == "fogo") {
        caixa.classList.add("fogo");
        caixa.classList.remove("normal");
    } else {
        caixa.classList.add("normal");
        caixa.classList.remove("fogo");
    };
    
    if(escolha == "agua") {
        caixa.classList.add("agua");
        caixa.classList.remove("normal");
    } else {
        caixa.classList.add("normal");
        caixa.classList.remove("agua");
    };
    console.log(caixa.className);
});

const btnTrocaTexto = document.getElementById("mudaTexto");

btnTrocaTexto.addEventListener("click", () => {
    let caixa = document.getElementById("caixa  -aleatoria");


    if(escolha == "planta") {
        caixa.innerHTML = "bulbasauro";
    } else {
        caixa.innerHTML = "<ul><li>eevee</li></ul>";
    };

    if(escolha == "fogo") {
        caixa.innerHTML = "<ul><li>Charmander</li><li>Cyndaquil</li><li>Torchic</li><li>Chimchar</li><li>Tepig</li><li>Fennekin</li><li>Litten</li><li>Scorbunny</li></ul>";
    } else {
        caixa.innerHTML = "<ul><li>eevee</li></ul>";
    };
    
    if(escolha == "agua") {
        caixa.innerHTML = "<ul><li>Squirtle</li><li>Totodile</li><li>Mudkip</li><li>Piplup</li><li>Oshawott</li><li>Froakie</li><li>Popplio</li><li>Sobble</li></ul>";
    } else {
        caixa.innerHTML = "<ul><li>eevee</li></ul>";
    };
});

};

btnSoma = document.getElementById("soma")
btnSoma.addEventListener("click", () =>{
    let numero1 = document.getElementById("escolha-n1").value;
    let numero2 = document.getElementById("escolha-n2").value;
    let sinal = document.getElementById("sinal").value;
    switch (sinal) {
        case "+" :
            soma = parseInt(numero1) + parseInt(numero2);
        break;  

        case "-" : 
            soma = parseInt(numero1) - parseInt(numero2);
        break;
        
        case "*" : 
            soma = parseInt(numero1) * parseInt(numero2);
        break;

        case "/" : 
            soma = parseInt(numero1) / parseInt(numero2);
        break;

        default: 
            alert("Você colocou um sinal que não existe ou não é suportado por essa calculadora!!!");
            alert("Pelo seu erro essa aba vai fechar em 3 segundos");
            window.close();
    };

    let resultado = document.getElementById("resultado").innerHTML = "="+soma;
})