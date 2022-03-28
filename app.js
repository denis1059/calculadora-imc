const form = document.querySelector( ".formulario");

form.addEventListener ('submit', function (e){
e.preventDefault();

const inputPeso = e.target.querySelector(".Peso");
const inputAltura = e.target.querySelector(".Altura");

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (!peso){
    setResultado('Peso Invalido', false);
    return;
}
if (!altura){
    setResultado('Altura Invalida', false);
    return;
}

const imc = getImc(peso, altura);
const tabelaImc= tabeladePesoimc(imc);

const msg = `Seu IMC é ${imc} (${tabelaImc}).`;

setResultado(msg,true);

console.log(tabelaImc ,imc);

function getImc(peso, altura){

    const imc = peso / altura **2;
    return imc.toFixed(2);
}

});


function tabeladePesoimc(imc){
    const tabela = [ 'Abaixo do Peso', 'Peso Normal', 'Obesidade Grau 1',
    'Obesidade Grau 2', 'Obesidade Grau 3' ];

    if (imc >= 40){
        return tabela[4] //obesidade grau 3 >40
    }
    if (imc >= 35){
        return tabela[3] // obesidade grau 2 >=35
    }
    if (imc >= 30){
        return tabela[2] // obesidade grau 1 >=30
    }
    if (imc >= 18.5){
        return tabela[1] // peso Normal >= 18,5
    }
    if (imc <=18.5){
        return tabela[0] //abaixo do peso <18,5
    }

    

}

function criaP (){
    const p = document.createElement('p');

    return p;
    /*p.classList.add('img-abaixo');
    p.classList.add('img-normal');
    p.classList.add('img-obesidade1');
    p.classList.add('img-obesidade2');
    p.classList.add('img-obesidade3');
*/
    
    }


function setResultado (msg, isvalid){
   const resultado = document.querySelector('#resultado');
    resultado.innerHTML= '';
    const p = criaP();
    if (isvalid ){
        p.classList.add('.pResultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}


