function criaCalculadora() {
    return {
    display: document.querySelector('#display'),
    backspaceListener: null,

    inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();
    },



    pressionaBackspace() {

        this.removeBackspaceListener();

        this.backspaceListener = (e) => {
            if(e.keyCode === 8) {
                this.clearDisplay();
            }
        };

        this.display.addEventListener('keyup', this.backspaceListener);

    },


    removeBackspaceListener() {
        if(this.backspaceListener) {
            this.display.removeEventListener('keyup', this.backspaceListener);
            this.backspaceListener = null;
        }
    },

    pressionaEnter() {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta()
            }
        } )
    },

    apagaUm() {
        this.display.value = this.display.value.slice(0, -1)
    },

    clearDisplay() {
        this.display.value = '';
        this.removeBackspaceListener();
    },


    realizaConta() {
        let conta = this.display.value;
        try {
            conta = eval(conta)

            if(!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = conta;
        }
        catch(err) {
            alert('Conta inválida')
        }
        this.pressionaBackspace();
    },


    cliqueBotoes() {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay()
            }
            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
            this.display.focus();
        }) 
    },

    btnParaDisplay(valor) {
        this.display.value += valor;
    }
        
    };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia()