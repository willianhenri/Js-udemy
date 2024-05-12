//function meuEscopo() {
    let form = document.querySelector(".form");
    //let resultado = document.querySelector('#res')

    // form.onsubmit = function (evento) {
    //     evento.preventDefault()
    //     alert(1);
        
    // };

    const pessoas = [];
    
    

    function recebeEventoForm(evento) {
        evento.preventDefault();
        let nome = document.querySelector('#name');
        let sobrenome = form.querySelector('#lastname');
        let peso = form.querySelector('#weight');
        let altura = form.querySelector('#height');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value, 
            altura: altura.value,
        })

        console.log(pessoas);

        res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value}kg ${altura.value}m</P>`
       
    }    
    form.addEventListener('submit', recebeEventoForm)
    
//}
//meuEscopo();