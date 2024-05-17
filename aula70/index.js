function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}

let duplica = criaMultiplicador(2)
let triplica = criaMultiplicador(3)

let duplicadoTriplicado = triplica(duplica(5))
console.log(duplicadoTriplicado)