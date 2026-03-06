function acesso() {

let txt = window.prompt("Digite seu nome: ");
let senha = "sandrolindo";
let confirmar = window.prompt("digite sua senha: ");

if (confirmar == senha) {
    alert("Seja bem vindo "+txt);
} else {
    alert("Senha errada saia daqui");
    window.close();
};

document.getElementById("apresentacao").innerHTML = "Olá "+txt+" aonde quer ir?";
};

function sucesso(position) {
    console.log(position.coords.latitude, position.coords.longitude);

    var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 17);

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


    if(caixa.className == "normal") {
        caixa.classList.add("planta");
        caixa.classList.remove("normal");
    } else {
        caixa.classList.add("normal");
        caixa.classList.remove("planta");
    };

    if(caixa.className == "normal") {
        caixa.classList.add("fogo");
        caixa.classList.remove("normal");
    } else {
        caixa.classList.add("normal");
        caixa.classList.remove("fogo");
    };
    
    if(caixa.className == "normal") {
        caixa.classList.add("agua");
        caixa.classList.remove("normal");
    } else {
        caixa.classList.add("normal");
        caixa.classList.remove("agua");
    };
    console.log(caixa.className);
});
const btnTrocaTexto = document.getElementById("mudaTexto");

console.log(escolha);

let semtipo = '<li>eevee</li>';
let tipo1 = '<li>Bulbasaur</li><li>Chikorita</li><li>Treecko</li><li>Turtwig</li><li>Snivy</li><li>Chespin</li><li>Rowlet</li><li>Grookey</li>';
let tipo2 = '<li>Charmander</li><li>Cyndaquil</li><li>Torchic</li><li>Chimchar</li><li>Tepig</li><li>Fennekin</li><li>Litten</li><li>Scorbunny</li>';
let tipo3 = '<li>Squirtle</li><li>Totodile</li><li>Mudkip</li><li>Piplup</li><li>Oshawott</li><li>Froakie</li><li>Popplio</li><li>Sobble</li>';

document.getElementById("pokeul").innerHTML = semtipo
let eevee = "sim"

btnTrocaTexto.addEventListener("click", () => {
    switch (escolha) {
        case "planta":
            if (eevee == "sim") {
                eevee = "não"
                document.getElementById("pokeul").innerHTML = tipo1;
            } else {
                document.getElementById("pokeul").innerHTML = semtipo;
            }
        break;  

        case "fogo": 
            if (eevee == "sim") {
                eevee = "não"
                document.getElementById("pokeul").innerHTML = tipo2;
            } else {
                document.getElementById("pokeul").innerHTML = semtipo;
            }
        break;
        
        case "agua": 
            if (eevee == "sim") {
                eevee = "não"
                document.getElementById("pokeul").innerHTML = tipo3;
            } else {
                document.getElementById("pokeul").innerHTML = semtipo;
            }
        break;

        default:
            document.getElementById("pokeul").innerHTML = semtipo;
        break;    
    }
});

};

function soma() {
const btnSoma = document.getElementById("soma");

btnSoma.addEventListener("click", () => {
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
        break;
    }    
    if (soma == 67) {
        window.open('https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fftqtv08x3pof1.png', '_blank');
    };
    let resultado = document.getElementById("resultado").innerHTML = "="+soma;
}); 
};
function criador() {
const btnCriador = document.getElementById("addNovo");
let total = 0;
let i = 0;
let bolinhas = "";
let bola = '<div class="gifcriado"></div>';

btnCriador.addEventListener("click", () => {
    total = total + 1;
    bolinhas = "";
    for (i = 0; i < total; i++) {
        bolinhas = bolinhas + bola;
    }
    document.getElementById("agruparBolinhas").innerHTML = bolinhas;
});
};