function getDiaSemanaTexto(semanaTexto) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diasSemana[semanaTexto]

}
function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes]

}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes)

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${putZero(data.getMinutes())}`
}


function putZero(num) {
    return num < 10 ? `0${num}` : num
}

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = criaData(data)

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);