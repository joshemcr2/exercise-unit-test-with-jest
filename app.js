// Declaramos una función con el nombre exacto "formDollarToYenr"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.0053;
    // Retornamos el valor en yen
    return valueInPound;
}

// Declaramos una función con el nombre exacto "formDollarToYenr"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 149.58;
    // Retornamos el valor en yen
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };