/**
 * Get calculate.
 */
function getCalculate() {
    return document.getElementById('calculate');
}

/**
 * Get name.
 */
function getName() {
    return document.getElementById('name').value;
}

/**
 * Get height.
 */
function getHeight() {
    return document.getElementById('height').value;
}

/**
 * Get weight.
 */
function getWeight() {
    return document.getElementById('weight').value;
}

/**
 * Get result.
 */
function getResult() {
    return document.getElementById('result');
}

/**
 * Main.
 */
function main() {
    var name = getName();
    var height = getHeight();
    var weight = getWeight();
    var result = getResult();

    result.textContent = imc(name, height, weight, result);
}

/**
 * Imc.
 */
function imc(name, height, weight, result) {

    if (!name || !height || !weight) {
        result = 'Por favor, preencha todos os campos para realizar o cálculo IMC.';
    } else {
        var valueImc = calculateImc(height, weight);
        var classification = resultImcClassification(valueImc);

        result = 'O cálculo imc de ' + name + ' é: ' + valueImc + '. ' + classification;
    }

    return result; 
}

/**
 * CalculateImc.
 */
function calculateImc(height, weight) {
    var value = (weight / (height * height)).toFixed(2);
    return value;
}

/**
 * ResultImcClassification.
 */
function resultImcClassification (valueImc) {
    
    if (valueImc >= 40 ){
        classification = 'Sua classificação é obesidade mórbida.';
    } else if (valueImc >= 30) {
        classification = 'Sua classificação é obesidade.';
    } else if (valueImc >= 25) {
        classification = 'Sua classificação é sobrepeso.';
    } else if (valueImc >= 18.5) {
        classification = 'Sua classificação é normalidade.';
    } else {
        classification = 'Sua classificação é desnutrição.';
    }

    return classification;
}