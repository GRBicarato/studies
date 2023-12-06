let valor = 20

function incrementa() {

    valor = 20 + 30

}

// incrementa()
// console.log(valor)

function exibirNome(name) {

    console.log(name)

}

// exibirNome("Bicarato")
// exibirNome("Scott")

function soma(number1, number2) {

    const valorDosNumeros = number1 + number2

    console.log(valorDosNumeros)

}

// soma(10, 10)
// soma(55, 5)

const multi = (number1, number2) => {

    const resMulti = number1 * number2

    return resMulti

}

const resMulti = multi(5, 5)
console.log("o resultado é", resMulti)
