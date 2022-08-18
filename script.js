function start(){
    var buttonCalculateIMC = document.querySelector('#button-calculate')
    buttonCalculateIMC.addEventListener('click', handleButtonClick)
    
    handleButtonClick();
}

function calculateImc(weight, height) {
    return weight /(height * height)
}

function faixaPeso(formattedImc) {
    if (16 <= formattedImc && formattedImc <= 16.9) {
        return "Muito abaixo do peso"
    } else if (16.9 < formattedImc && formattedImc <= 18.4) {
        return "Abaixo do peso"
    } else if (18.4 < formattedImc && formattedImc <= 24.9) {
        return "Peso normal"
    } else if (24.9 < formattedImc && formattedImc <= 29.9) {
        return "Acima do peso" 
    } else if (29.9 < formattedImc && formattedImc <= 34.9) {
        return "Obesidade grau 1"
    } else if (34.9 < formattedImc && formattedImc <= 40) {
        return "Obesidade grau 2"
    } else if (40 < formattedImc) {
        return "Obesidade grau 3"
    } else {
        return "Inválido"
    }
}

function handleButtonClick() {
    var inputWeight = document.querySelector('.input-weight');
    var inputHeight = document.querySelector('.input-height');
    var imcResult = document.querySelector('#imc-result');
    var peso = document.querySelector('#faixa-peso')

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height); 
    var formattedImc = imc.toFixed(2).replace('.',',');
    var pesoResult = parseFloat(formattedImc);

    imcResult.textContent = formattedImc;
    peso.textContent = faixaPeso(pesoResult);

    console.log(typeof(pesoResult));
    console.log(pesoResult);
    console.log(faixaPeso(30.8));
    console.log(faixaPeso(pesoResult));
}

start();