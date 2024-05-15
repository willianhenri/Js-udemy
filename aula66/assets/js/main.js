document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento do temporizador
    var relogio = document.querySelector('.relogio');

    // Define as variáveis do temporizador
    var horas = 0;
    var minutos = 0;
    var segundos = 0;
    var temporizador; // Variável para armazenar o intervalo do temporizador

    // Função para atualizar o temporizador
    function atualizarTemporizador() {
        segundos++;
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
            if (minutos >= 60) {
                minutos = 0;
                horas++;
            }
        }

        // Formata os valores para exibir no temporizador
        var formattedTime = 
            (horas < 10 ? "0" + horas : horas) + ":" +
            (minutos < 10 ? "0" + minutos : minutos) + ":" +
            (segundos < 10 ? "0" + segundos : segundos);

        // Atualiza o texto do temporizador
        relogio.textContent = formattedTime;
    }

    // Botão de iniciar
    document.getElementById('start').addEventListener('click', function() {
        // Se o temporizador já estiver em execução, não inicie outro
        if (!temporizador) {
            temporizador = setInterval(atualizarTemporizador, 1000);
            relogio.classList.remove('pausado')
        }
    });

    // Botão de pausar
    document.getElementById('pause').addEventListener('click', function() {
        // Pausa o temporizador apenas se estiver em execução
        if (temporizador) {
            clearInterval(temporizador);
            temporizador = null; // Limpa a variável do temporizador
            relogio.classList.add('pausado')
        }
    });

    // Botão de zerar
    document.getElementById('zero').addEventListener('click', function() {
        // Zera o temporizador e atualiza o texto
        horas = 0;
        minutos = 0;
        segundos = 0;
        relogio.textContent = "00:00:00";
        relogio.classList.remove('pausado')

        // Pausa o temporizador, se estiver em execução
        if (temporizador) {
            clearInterval(temporizador);
            temporizador = null; // Limpa a variável do temporizador
        }
    });
});
