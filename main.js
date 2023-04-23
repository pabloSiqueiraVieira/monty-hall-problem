let startBtn = document.getElementById("btnStart");
let resetBtn = document.getElementById("btnResetar");
let trocarPorta = document.getElementById("trocar");
let naoTrocarPorta = document.getElementById("naoTrocar");
let mensagemVencida = document.getElementById("won");
let mensagemPerdida = document.getElementById("lost");
let iteracoes;
let decisao;
let portas;
let radioActive = false;

startBtn.onclick = function(){
    if(trocarPorta.checked || naoTrocarPorta.checked){
        radioActive = true
    }
    //Dá valor a iteracoes e inicia o programa
    iteracoes = document.getElementById("iteracoes").value;
    if(iteracoes <= 0 || !radioActive){
        alert("Verifique se a caixa de opções está selecionada e se o número é maior que 0");
    }else{
        
        //Utiliza o valor de iteracoes para rodar o loop quantas vezes o usuário desejar
        for(let tentativas = 0; tentativas < iteracoes; tentativas++){
            portas = [0, 1, 0];
            portas = embaralharPortas(portas);
            console.log(portas);
            decisao = escolhaRandom(portas);
            montyHall(portas, decisao);
            console.log(portas);
            console.log(portas.length);
            console.log(`Já rodamos esse loop ${tentativas + 1} vezes`);
        }
    }
    
}

function escolhaRandom(portas){
    //Essa função basicamente "faz" a decisão de qual porta a "máquina" vai escolher
    escolha = Math.floor(Math.random() * portas.length); 
    return escolha;
}

function embaralharPortas(portas){
    portas.sort(() => Math.random() - 0.5);
    return portas;
    //console.log(portas);    
}
function montyHall(portas, decisao){
    //Essa função age como o Monty Hall, abrido a porta que não contem nada para o público
    for(let monty = 0; monty < portas.length; monty++){
        //Verifica se a "porta" está vazia "0" e se não foi escolhida pela "máquina" e então a abrindo "2"
        if(monty !== decisao && portas[monty] === 0){
            portas[monty] = 2;
            break;

        }

    }
}
function trocar(portas, decisao){
    
}