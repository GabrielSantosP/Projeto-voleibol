let pointCasa = 0;
let pointFora = 0;
let possedeBola = '';
let rotacaoCasa = 0;
let rotacaoFora = 0;
let esquemaCasa = '6x0'
let esquemaFora = '6x0'
let saqueC = false;
let saqueF = false;
let btnEsquema = '';
let timePontuador = '';
let pontosSequenciaCasa = 0;
let pontosSequenciaFora = 0;
let timeInicial = '';
let btnEC = false;
let btnEF = false;

function pontuacao(time) {
    // contabilzar ponto time Azul.
    if (time == 'casa') {
        //adição de ponto.
        pointCasa++;
        document.getElementById('placarCasa').innerText = pointCasa;
        // contabilizar quantidade de pontos em sequência.
        pontosSequenciaCasa++;
        
        // posse de bola obtida e configuração de saque time azul e vermelho.
        if (possedeBola == 'fora' && saqueC == false) {
            possedeBola = 'casa';
            saqueF = false;
            document.getElementById('divBolaSaqueCasa').style.display = 'block';
            document.getElementById('divBolaSaqueFora').style.display = 'none';
            timePontuador = 'casa'
            pontosSequenciaFora = 0;

            // configuração de recpção time Vermelho.
            if (esquemaFora == '4x2') {
                // esquema tático 4x2 time Vermelho. 
                switch (rotacaoFora) {
                    case 1:
                        // primeiro rodizio de recpção time Azul.
                        document.getElementById('setaReta1F').style.left = '54vw';
                        document.getElementById('setaReta1F').style.top = '40vh';
                        document.getElementById('setaCurva1F').style.left = '100vw';
                        document.getElementById('setaCurva2F').style.left = '100vw';
                        document.getElementById('setaReta1F').style.rotate = '90deg';
                        document.getElementById('titularFora5').style.left = '57.5vw';
                        document.getElementById('titularFora4').style.left = '57.5vw';
                        document.getElementById('titularFora4').style.top = '4vh';
                        break;
                    case 2:
                        // segundo rodizio de recpção time Azul.
                        document.getElementById('setaCurva1F').style.left = '100vw';
                        document.getElementById('setaCurva2F').style.left = '100vw';
                        document.getElementById('setaReta1F').style.left = '54vw';
                        document.getElementById('setaReta1F').style.top = '57vh';
                        document.getElementById('setaReta1F').style.rotate = '270deg';
                        document.getElementById('titularFora4').style.left = '57.5vw';
                        document.getElementById('titularFora5').style.left = '57.5vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        break;
                    case 3:
                        // terceiro rodizio de recpção time Azul.
                        document.getElementById('titularFora5').style.left = '57.5vw';
                        document.getElementById('titularFora1').style.left = '57.5vw';
                        break;
                    case 4:
                        // quarto rodizio de recpção time Azul.
                        document.getElementById('setaReta1F').style.left = '54vw';
                        document.getElementById('setaReta1F').style.top = '40vh';
                        document.getElementById('setaCurva1F').style.left = '100vw';
                        document.getElementById('setaCurva2F').style.left = '100vw';
                        document.getElementById('setaReta1F').style.rotate = '90deg';
                        document.getElementById('titularFora2').style.left = '57.5vw';
                        document.getElementById('titularFora1').style.left = '57.5vw';
                        document.getElementById('titularFora1').style.top = '6vh';
                        break;
                    case 5:
                        // quinto rodizio de recpção time Azul.
                        document.getElementById('setaCurva1F').style.left = '100vw';
                        document.getElementById('setaCurva2F').style.left = '100vw';
                        document.getElementById('setaReta1F').style.left = '54vw';
                        document.getElementById('setaReta1F').style.top = '57vh';
                        document.getElementById('setaReta1F').style.rotate = '270deg';
                        document.getElementById('titularFora1').style.left = '57.5vw';
                        document.getElementById('titularFora2').style.left = '57.5vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        break;
                    case 0:
                        // sexto rodizio de recpção time Azul.
                        document.getElementById('titularFora2').style.left = '57.5vw';
                        document.getElementById('titularFora4').style.left = '57.5vw';
                        break;
                    default:
                        break;
                }
            } else if(esquemaFora == '5x1'){
                // esquema tático 5x1 time azul.
                switch (rotacaoCasa) {
                    case 1:
                        // primeiro rodizio de recpção time Azul.
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '57vh';
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.rotate = '270deg';
                        document.getElementById('titularCasa5').style.left = '20.5vw';
                        document.getElementById('titularCasa4').style.left = '20.5vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        break;
                    case 2:
                        // segundo rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '40vh';
                        document.getElementById('setaReta1C').style.rotate = '90deg';
                        document.getElementById('titularCasa4').style.left = '20.5vw';
                        document.getElementById('titularCasa5').style.left = '20.5vw';
                        document.getElementById('titularCasa5').style.top = '6vh';
                        break;
                    case 3:
                        // terceiro rodizio de recpção time Azul.
                        document.getElementById('titularCasa5').style.left = '20.5vw';
                        document.getElementById('titularCasa1').style.left = '20.5vw';
                        break;
                    case 4:
                        // quarto rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '57vh';
                        document.getElementById('setaReta1C').style.rotate = '270deg';
                        document.getElementById('titularCasa2').style.left = '20.5vw';
                        document.getElementById('titularCasa1').style.left = '20.5vw';
                        document.getElementById('titularCasa1').style.top = '50vh';
                        break;
                    case 5:
                        // quinto rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '40vh';
                        document.getElementById('setaReta1C').style.rotate = '90deg';
                        document.getElementById('titularCasa1').style.left = '20.5vw';
                        document.getElementById('titularCasa2').style.left = '20.5vw';
                        document.getElementById('titularCasa2').style.top = '6vh';
                        break;
                    case 0:
                        // sexto rodizio de recpção time Azul.
                        document.getElementById('titularCasa2').style.left = '20.5vw';
                        document.getElementById('titularCasa4').style.left = '20.5vw';
                        break;
                    default:
                        break;
                }
            }

            rotacao('casa');
        }
        // configuração de saque time Azul.
        if (esquemaCasa == '4x2') {
            
        } else if (esquemaCasa == '5x1') {
            switch (rotacaoCasa) {
                case 1:
                    document.getElementById('setaReta1C').style.left = '17vw';
                    document.getElementById('setaReta1C').style.top = '57vh';
                    document.getElementById('setaReta1C').style.rotate = '55deg';
                    document.getElementById('setaReta2C').style.left = '19vw';
                    document.getElementById('setaReta2C').style.top = '49vh';
                    document.getElementById('setaReta2C').style.rotate = '180deg';
                    document.getElementById('setaCurva3C').style.left = '10vw';
                    document.getElementById('setaCurva3C').style.top = '37vh';
                    document.getElementById('setaCurva3C').style.width = '300px';
                    document.getElementById('setaCurva1C').style.left = '40vw';
                    document.getElementById('setaCurva1C').style.top = '35vh';
                    document.getElementById('setaCurva1C').style.rotate = '150deg'
                    document.getElementById('setaCurva2C').style.left = '32vw';
                    document.getElementById('setaCurva2C').style.top = '35vh';
                    document.getElementById('setaCurva2C').style.rotate = '-25deg';
                    document.getElementById('titularCasa1').style.left = '14vw';
                    document.getElementById('titularCasa1').style.top = '27vh';
                    document.getElementById('titularCasa2').style.left = '6vw';
                    document.getElementById('titularCasa2').style.top = '50vh';
                    document.getElementById('titularCasa3').style.left = '35.5vw';
                    document.getElementById('titularCasa3').style.top = '50vh';
                    document.getElementById('titularCasa4').style.left = '30.5vw';
                    document.getElementById('titularCasa4').style.top = '27vh';
                    document.getElementById('titularCasa5').style.left = '30.5vw';
                    document.getElementById('titularCasa5').style.top = '4vh';
                    document.getElementById('titularCasa6').style.left = '6vw';
                    document.getElementById('titularCasa6').style.top = '24vh';
                    document.getElementById('divBolaSaqueCasa').style.display = 'block';
                    break;
                case 2:
                    document.getElementById('setaReta1C').style.left = '18vw';
                    document.getElementById('setaReta1C').style.top = '73.5vh';
                    document.getElementById('setaReta1C').style.rotate = '0deg';
                    document.getElementById('setaReta2C').style.left = '24vw';
                    document.getElementById('setaReta2C').style.top = '41vh';
                    document.getElementById('setaReta2C').style.width = '100px';
                    document.getElementById('setaReta2C').style.rotate = '270deg';
                    document.getElementById('setaReta3C').style.left = '41vw';
                    document.getElementById('setaReta3C').style.top = '43vh';
                    document.getElementById('setaReta3C').style.rotate = '290deg'
                    document.getElementById('setaReta4C').style.left = '36vw';
                    document.getElementById('setaReta4C').style.top = '54vh';
                    document.getElementById('setaReta4C').style.rotate = '53deg';
                    document.getElementById('setaReta4C').style.width = '174px';
                    document.getElementById('titularCasa1').style.left = '6vw';
                    document.getElementById('titularCasa1').style.top = '25vh';
                    document.getElementById('titularCasa2').style.left = '16vw';
                    document.getElementById('titularCasa2').style.top = '29vh';
                    document.getElementById('titularCasa3').style.left = '6vw';
                    document.getElementById('titularCasa3').style.top = '50vh';
                    document.getElementById('titularCasa4').style.left = '30vw';
                    document.getElementById('titularCasa4').style.top = '33vh';
                    document.getElementById('titularCasa5').style.left = '36vw';
                    document.getElementById('titularCasa5').style.top = '27vh';
                    document.getElementById('titularCasa6').style.left = '25vw';
                    document.getElementById('titularCasa6').style.top = '20vh';
                    document.getElementById('divBolaSaqueCasa').style.display = 'block';
                    break;
                case 3:
                    document.getElementById('titularCasa1').style.left = '35.5vw';
                    document.getElementById('titularCasa1').style.top = '4vh';
                    document.getElementById('titularCasa2').style.left = '14vw';
                    document.getElementById('titularCasa2').style.top = '4vh';
                    document.getElementById('titularCasa3').style.left = '14vw';
                    document.getElementById('titularCasa3').style.top = '50vh';
                    document.getElementById('titularCasa4').style.left = '6vw';
                    document.getElementById('titularCasa4').style.top = '50vh';
                    document.getElementById('titularCasa5').style.left = '30.5vw';
                    document.getElementById('titularCasa5').style.top = '50vh';
                    document.getElementById('titularCasa6').style.left = '30.5vw';
                    document.getElementById('titularCasa6').style.top = '27vh';
                    document.getElementById('setaReta1C').style.left = '14vw';
                    document.getElementById('setaReta1C').style.top = '60vh';
                    document.getElementById('setaReta1C').style.rotate = '-90deg';
                    document.getElementById('setaReta2C').style.left = '41vw';
                    document.getElementById('setaReta2C').style.top = '63vh';
                    document.getElementById('setaReta2C').style.width = '100px';
                    document.getElementById('setaReta2C').style.rotate = '302deg';
                    document.getElementById('setaReta3C').style.left = '39vw';
                    document.getElementById('setaReta3C').style.top = '53vh';
                    document.getElementById('setaReta3C').style.rotate = '-300deg';
                    document.getElementById('setaReta4C').style.left = '100vw';
                    document.getElementById('setaReta5C').style.left = '100vw';
                    document.getElementById('divBolaSaqueCasa').style.display = 'block';
                    break;
                case 4:
                    document.getElementById('setaReta1C').style.left = '17vw';
                    document.getElementById('setaReta1C').style.top = '57vh';
                    document.getElementById('setaReta1C').style.rotate = '55deg';
                    document.getElementById('setaReta2C').style.left = '19vw';
                    document.getElementById('setaReta2C').style.top = '49vh';
                    document.getElementById('setaReta2C').style.rotate = '180deg';
                    document.getElementById('setaReta3C').style.left = '100vw';
                    document.getElementById('setaReta4C').style.left = '100vw';
                    document.getElementById('setaReta5C').style.left = '100vw';
                    document.getElementById('setaCurva3C').style.left = '10vw';
                    document.getElementById('setaCurva3C').style.top = '37vh';
                    document.getElementById('setaCurva3C').style.width = '300px';
                    document.getElementById('setaCurva1C').style.left = '40vw';
                    document.getElementById('setaCurva1C').style.top = '35vh';
                    document.getElementById('setaCurva1C').style.rotate = '150deg'
                    document.getElementById('setaCurva2C').style.left = '32vw';
                    document.getElementById('setaCurva2C').style.top = '35vh';
                    document.getElementById('setaCurva2C').style.rotate = '-25deg';
                    document.getElementById('titularCasa1').style.left = '30.5vw';
                    document.getElementById('titularCasa1').style.top = '27vh';
                    document.getElementById('titularCasa2').style.left = '30.5vw';
                    document.getElementById('titularCasa2').style.top = '4vh';
                    document.getElementById('titularCasa3').style.left = '6vw';
                    document.getElementById('titularCasa3').style.top = '25vh';
                    document.getElementById('titularCasa4').style.left = '14vw';
                    document.getElementById('titularCasa4').style.top = '27vh';
                    document.getElementById('titularCasa5').style.left = '6vw';
                    document.getElementById('titularCasa5').style.top = '50vh';
                    document.getElementById('titularCasa6').style.left = '36vw';
                    document.getElementById('titularCasa6').style.top = '50vh';
                    document.getElementById('divBolaSaqueCasa').style.display = 'block';
                    break;
                case 5:
                    document.getElementById('setaReta1C').style.left = '18vw';
                    document.getElementById('setaReta1C').style.top = '73.5vh';
                    document.getElementById('setaReta1C').style.rotate = '0deg';
                    document.getElementById('setaReta2C').style.left = '24vw';
                    document.getElementById('setaReta2C').style.top = '41vh';
                    document.getElementById('setaReta2C').style.width = '100px';
                    document.getElementById('setaReta2C').style.rotate = '270deg';
                    document.getElementById('setaReta3C').style.left = '41vw';
                    document.getElementById('setaReta3C').style.top = '43vh';
                    document.getElementById('setaReta3C').style.rotate = '290deg'
                    document.getElementById('setaReta4C').style.left = '36vw';
                    document.getElementById('setaReta4C').style.top = '54vh';
                    document.getElementById('setaReta4C').style.rotate = '53deg';
                    document.getElementById('setaReta4C').style.width = '174px';
                    document.getElementById('titularCasa1').style.left = '30vw';
                    document.getElementById('titularCasa1').style.top = '33vh';
                    document.getElementById('titularCasa2').style.left = '36vw';
                    document.getElementById('titularCasa2').style.top = '27vh';
                    document.getElementById('titularCasa3').style.left = '25vw';
                    document.getElementById('titularCasa3').style.top = '20vh';
                    document.getElementById('titularCasa4').style.left = '6vw';
                    document.getElementById('titularCasa4').style.top = '25vh';
                    document.getElementById('titularCasa5').style.left = '16vw';
                    document.getElementById('titularCasa5').style.top = '29vh';
                    document.getElementById('titularCasa6').style.left = '6vw';
                    document.getElementById('titularCasa6').style.top = '50vh';
                    document.getElementById('divBolaSaqueCasa').style.display = 'block';
                    break;
                case 0:
                    document.getElementById('setaReta1C').style.left = '14vw';
                    document.getElementById('setaReta1C').style.top = '60vh';
                    document.getElementById('setaReta1C').style.rotate = '-90deg';
                    document.getElementById('setaReta2C').style.left = '38vw';
                    document.getElementById('setaReta2C').style.top = '57vh';
                    document.getElementById('setaReta2C').style.width = '100px';
                    document.getElementById('setaReta2C').style.rotate = '-301deg';
                    document.getElementById('setaReta3C').style.left = '100vw';
                    document.getElementById('setaReta4C').style.left = '100vw';
                    document.getElementById('setaReta5C').style.left = '100vw';
                    document.getElementById('divBolaSaqueCasa').style.display = 'block';
                    document.getElementById('divBolaSaqueFora').style.display = 'none';
                    document.getElementById('titularCasa6').style.left = '14vw';
                    document.getElementById('titularCasa6').style.top = '50vh';
                    document.getElementById('titularCasa3').style.left = '27.5vw';
                    document.getElementById('titularCasa3').style.top = '25vh';
                    document.getElementById('titularCasa2').style.left = '36vw';
                    document.getElementById('titularCasa2').style.top = '29vh';
                    document.getElementById('titularCasa1').style.left = '6vw';
                    document.getElementById('titularCasa1').style.top = '50vh';
                    document.getElementById('titularCasa4').style.left = '36vw';
                    document.getElementById('titularCasa4').style.top = '4vh';
                    document.getElementById('titularCasa5').style.left = '14vw';
                    document.getElementById('titularCasa5').style.top = '4vh';
                    break;
                default:
                    break;
            }
        }
    // contabilzar ponto time Vermelho.
    } else if (time == 'fora') {
        //adição de ponto.
        pointFora++;
        
        document.getElementById('placarFora').innerText = pointFora;
        // contabilizar quantidade de pontos em sequência.
        pontosSequenciaFora++;
        
        // posse de bola obtida e configuração de saque time azul e vermelho.
        if (possedeBola == 'casa' && saqueF == false) {
            possedeBola = 'fora';
            saqueC = false;
            document.getElementById('divBolaSaqueFora').style.display = 'block';
            document.getElementById('divBolaSaqueCasa').style.display = 'none';
            timePontuador = 'Fora'
            pontosSequenciaCasa = 0;
            rotacao('fora');
        }
        document.getElementById('divBolaSaqueFora').style.display = 'block';
         // configuração de recpção time Azul.
         if (esquemaCasa == '4x2') {
                // esquema tático 4x2 time azul. 
                switch (rotacaoCasa) {
                    case 1:
                        // primeiro rodizio de recpção time Azul.
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '57vh';
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.rotate = '270deg';
                        document.getElementById('titularCasa5').style.left = '20.5vw';
                        document.getElementById('titularCasa4').style.left = '20.5vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        break;
                    case 2:
                        // segundo rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '40vh';
                        document.getElementById('setaReta1C').style.rotate = '90deg';
                        document.getElementById('titularCasa4').style.left = '20.5vw';
                        document.getElementById('titularCasa5').style.left = '20.5vw';
                        document.getElementById('titularCasa5').style.top = '6vh';
                        break;
                    case 3:
                        // terceiro rodizio de recpção time Azul.
                        document.getElementById('titularCasa5').style.left = '20.5vw';
                        document.getElementById('titularCasa1').style.left = '20.5vw';
                        break;
                    case 4:
                        // quarto rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '57vh';
                        document.getElementById('setaReta1C').style.rotate = '270deg';
                        document.getElementById('titularCasa2').style.left = '20.5vw';
                        document.getElementById('titularCasa1').style.left = '20.5vw';
                        document.getElementById('titularCasa1').style.top = '50vh';
                        break;
                    case 5:
                        // quinto rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '37.4vw';
                        document.getElementById('setaReta1C').style.top = '40vh';
                        document.getElementById('setaReta1C').style.rotate = '90deg';
                        document.getElementById('titularCasa1').style.left = '20.5vw';
                        document.getElementById('titularCasa2').style.left = '20.5vw';
                        document.getElementById('titularCasa2').style.top = '6vh';
                        break;
                    case 0:
                        // sexto rodizio de recpção time Azul.
                        document.getElementById('titularCasa2').style.left = '20.5vw';
                        document.getElementById('titularCasa4').style.left = '20.5vw';
                        break;
                    default:
                        break;
                }
        } else if(esquemaCasa == '5x1'){      
                // esquema tático 5x1 time azul.
                switch (rotacaoCasa) {
                    case 1:
                        // primeiro rodizio de recepção time Azul.
                        document.getElementById('titularCasa1').style.left = '6vw'
                        document.getElementById('titularCasa1').style.top = '27vh'
                        document.getElementById('titularCasa2').style.left = '14vw'
                        document.getElementById('titularCasa2').style.top = '50vh'
                        document.getElementById('titularCasa3').style.left = '25.5vw'
                        document.getElementById('titularCasa3').style.top = '56vh'
                        document.getElementById('titularCasa4').style.left = '14vw'
                        document.getElementById('titularCasa4').style.top = '4vh'
                        document.getElementById('titularCasa5').style.left = '34.5vw'
                        document.getElementById('titularCasa5').style.top = '1vh'
                        document.getElementById('titularCasa6').style.left = '26vw'
                        document.getElementById('titularCasa6').style.top = '13vh'
                        document.getElementById('setaReta1C').style.left = '27vw';
                        document.getElementById('setaReta1C').style.top = '25vh';
                        document.getElementById('setaReta1C').style.rotate = '-12deg';
                        document.getElementById('setaReta2C').style.left = '20vw';
                        document.getElementById('setaReta2C').style.width = '176px';
                        document.getElementById('setaReta2C').style.top = '49vh';
                        document.getElementById('setaReta2C').style.rotate = '270deg';
                        document.getElementById('setaReta3C').style.left = '39vw';
                        document.getElementById('setaReta3C').style.top = '33vh';
                        document.getElementById('setaReta3C').style.rotate = '128deg';
                        document.getElementById('setaReta4C').style.left = '36vw';
                        document.getElementById('setaReta4C').style.top = '46vh';
                        document.getElementById('setaReta4C').style.rotate = '69deg';
                        document.getElementById('setaCurva3C').style.left = '100vw';
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('titularCasa2').innerHTML = `<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>`;
                        document.getElementById('espacoLiberoCasa').innerHTML = '';
                        document.getElementById('espacoCentralCasa').innerHTML = '<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">Central</p>';
  
                        break;
                    case 2:
                        // segundo rodizio de recpção time Azul.
                        document.getElementById('setaReta1C').style.left = '27vw';
                        document.getElementById('setaReta1C').style.top = '25vh';
                        document.getElementById('setaReta1C').style.rotate = '-12deg';
                        document.getElementById('setaReta2C').style.left = '20vw';
                        document.getElementById('setaReta2C').style.top = '49vh';
                        document.getElementById('setaReta2C').style.width = '176px';
                        document.getElementById('setaReta2C').style.rotate = '270deg';
                        document.getElementById('setaReta3C').style.left = '33vw';
                        document.getElementById('setaReta3C').style.top = '39vh';
                        document.getElementById('setaReta3C').style.rotate = '90deg'
                        document.getElementById('setaReta4C').style.left = '39vw';
                        document.getElementById('setaReta4C').style.top = '36vh';
                        document.getElementById('setaReta4C').style.rotate = '109deg';
                        document.getElementById('setaReta4C').style.width = '174px';
                        document.getElementById('setaReta5C').style.left = '16vw';
                        document.getElementById('setaReta5C').style.top = '72vh';
                        document.getElementById('setaReta5C').style.rotate = '0deg';
                        document.getElementById('titularCasa1').style.left = '6vw';
                        document.getElementById('titularCasa1').style.top = '25vh';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '50vh';
                        document.getElementById('titularCasa3').style.left = '6vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '14vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '25vw';
                        document.getElementById('titularCasa5').style.top = '6vh';
                        document.getElementById('titularCasa6').style.left = '36vw';
                        document.getElementById('titularCasa6').style.top = '1vh';


                        break;
                    case 3:
                        // terceiro rodizio de recpção time Azul.
                        document.getElementById('setaReta1C').style.left = '17vw';
                        document.getElementById('setaReta1C').style.top = '40vh';
                        document.getElementById('setaReta1C').style.rotate = '-58deg';
                        document.getElementById('setaReta2C').style.left = '33.3vw';
                        document.getElementById('setaReta2C').style.top = '61vh';
                        document.getElementById('setaReta2C').style.width = '100px';
                        document.getElementById('setaReta2C').style.rotate = '270deg';
                        document.getElementById('setaReta3C').style.left = '27vw';
                        document.getElementById('setaReta3C').style.top = '25vh';
                        document.getElementById('setaReta3C').style.rotate = '-14deg'
                        document.getElementById('setaReta4C').style.left = '19vw';
                        document.getElementById('setaReta4C').style.top = '63vh';
                        document.getElementById('setaReta4C').style.rotate = '236deg';
                        document.getElementById('setaReta4C').style.width = '100px';
                        document.getElementById('setaReta5C').style.left = '14vw';
                        document.getElementById('setaReta5C').style.top = '63vh';
                        document.getElementById('setaReta5C').style.rotate = '39deg';
                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '6vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '1vw';
                        document.getElementById('titularCasa3').style.top = '33vh';
                        document.getElementById('titularCasa4').style.left = '14vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        document.getElementById('titularCasa5').style.left = '25.5vw';
                        document.getElementById('titularCasa5').style.top = '51vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        break;
                    case 4:
                        // quarto rodizio de recpção time Azul.
                        document.getElementById('titularCasa5').innerHTML = `<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>`;
                        document.getElementById('espacoLiberoCasa').innerHTML = '';
                        document.getElementById('espacoCentralCasa').innerHTML = '<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">Central</p>';
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaCurva3C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '27vw';
                        document.getElementById('setaReta1C').style.top = '25vh';
                        document.getElementById('setaReta1C').style.rotate = '-12deg';
                        document.getElementById('setaReta2C').style.left = '20vw';
                        document.getElementById('setaReta2C').style.top = '49vh';
                        document.getElementById('setaReta2C').style.width = '176px';
                        document.getElementById('setaReta2C').style.rotate = '270deg';
                        document.getElementById('setaReta3C').style.left = '39vw';
                        document.getElementById('setaReta3C').style.top = '33vh';
                        document.getElementById('setaReta3C').style.rotate = '128deg';
                        document.getElementById('setaReta4C').style.left = '12vw';
                        document.getElementById('setaReta4C').style.top = '57vh';
                        document.getElementById('setaReta4C').style.width = '174px';
                        document.getElementById('setaReta4C').style.rotate = '41deg';
                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '34.5vw';
                        document.getElementById('titularCasa2').style.top = '1vh';
                        document.getElementById('titularCasa3').style.left = '0vw';
                        document.getElementById('titularCasa3').style.top = '25vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '14vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        break;
                    case 5:
                        // quinto rodizio de recpção time Azul.
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        document.getElementById('setaReta1C').style.left = '25.4vw';
                        document.getElementById('setaReta1C').style.top = '72vh';
                        document.getElementById('setaReta1C').style.rotate = '-34deg';
                        document.getElementById('setaReta2C').style.left = '16vw';
                        document.getElementById('setaReta2C').style.top = '41vh';
                        document.getElementById('setaReta2C').style.rotate = '307deg';
                        document.getElementById('setaReta3C').style.left = '20vw';
                        document.getElementById('setaReta3C').style.top = '31vh';
                        document.getElementById('setaReta3C').style.rotate = '129deg';
                        document.getElementById('setaReta4C').style.left = '25vw';
                        document.getElementById('setaReta4C').style.top = '71vh';
                        document.getElementById('setaReta4C').style.width = '100px';
                        document.getElementById('setaReta4C').style.rotate = '39deg';
                        document.getElementById('setaReta5C').style.left = '40vw';
                        document.getElementById('setaReta5C').style.top = '49.5vh';
                        document.getElementById('setaReta5C').style.rotate = '180deg';
                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '45vh';
                        document.getElementById('titularCasa2').style.left = '36vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '25vw';
                        document.getElementById('titularCasa3').style.top = '0vh';
                        document.getElementById('titularCasa4').style.left = '14vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '6vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '13vw';
                        document.getElementById('titularCasa6').style.top = '56vh';
                        break;
                    case 0:
                        // sexto rodizio de recpção time Azul.
                        document.getElementById('setaReta1C').style.left = '27vw'
                        document.getElementById('setaReta1C').style.top = '25vh'
                        document.getElementById('setaReta1C').style.width = '100px'
                        document.getElementById('setaReta1C').style.rotate = '-14deg'
                        document.getElementById('setaReta2C').style.left = '34vw'
                        document.getElementById('setaReta2C').style.top = '66vh'
                        document.getElementById('setaReta2C').style.width = '100px'
                        document.getElementById('setaReta2C').style.rotate = '-100deg'
                        document.getElementById('setaReta3C').style.left = '40vw'
                        document.getElementById('setaReta3C').style.top = '73vh'
                        document.getElementById('setaReta3C').style.width = '100px'
                        document.getElementById('setaReta3C').style.rotate = '150deg'
                        document.getElementById('setaReta4C').style.left = '17vw'
                        document.getElementById('setaReta4C').style.top = '38vh'
                        document.getElementById('setaReta4C').style.width = '100px'
                        document.getElementById('setaReta4C').style.rotate = '-60deg'
                        document.getElementById('setaReta5C').style.left = '22vw'
                        document.getElementById('setaReta5C').style.top = '60vh'
                        document.getElementById('setaReta5C').style.width = '100px'
                        document.getElementById('setaReta5C').style.rotate = '-90deg'
                        document.getElementById("titularCasa1").style.left = "14vw";
                        document.getElementById("titularCasa1").style.top = "50vh";
                        document.getElementById("titularCasa2").style.left = "27vw";
                        document.getElementById("titularCasa2").style.top = "56vh";
                        document.getElementById("titularCasa3").style.left = "36vw";
                        document.getElementById("titularCasa3").style.top = "47vh";
                        document.getElementById("titularCasa4").style.left = "14vw";
                        document.getElementById("titularCasa4").style.top = "4vh";
                        document.getElementById("titularCasa5").style.left = "6vw";
                        document.getElementById("titularCasa5").style.top = "27vh";
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        break;
                    default:
                        break;
                }
        }
    }
}

function rotacao(time) {
    if (time == 'casa') {
        rotacaoCasa++;
        switch (esquemaCasa) {
            case '6x0':
                switch (rotacaoCasa) {
                    case 1:
                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '6vw';
                        document.getElementById('titularCasa2').style.top = '50vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '4vh';
                        document.getElementById('titularCasa6').style.left = '6vw';
                        document.getElementById('titularCasa6').style.top = '4vh';
                        break;
                    case 2:
                        document.getElementById('titularCasa1').style.left = '6vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '6vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '4vh';
                        break;
                    case 3:
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '6vw';
                        document.getElementById('titularCasa2').style.top = '4vh';
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '27vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '27vh';
                        break;
                    case 4:
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '4vh';
                        document.getElementById('titularCasa3').style.left = '6vw';
                        document.getElementById('titularCasa3').style.top = '4vh';
                        document.getElementById('titularCasa4').style.left = '14vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '6vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                        break;
                    case 5:
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '50vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '4vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '14vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '6vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                        break;
                    case 6:
                        document.getElementById('titularCasa1').style.left = '6vw';
                        document.getElementById('titularCasa1').style.top = '50vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '50vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '27vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '6vw';
                        document.getElementById('titularCasa5').style.top = '4vh';
                        document.getElementById('titularCasa6').style.left = '14vw';
                        document.getElementById('titularCasa6').style.top = '27vh';
                        rotacaoCasa = 0;
                        break;
                
                    default:
                        break;
                }
                break;
            case '5x1':
                switch (rotacaoCasa) {
                    case 1:
                        // substituição
                        document.getElementById('titularCasa5').innerHTML = `<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">Central</p>`;
                        document.getElementById('espacoLiberoCasa').innerHTML = '<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>';
                        document.getElementById('espacoCentralCasa').innerHTML = '';

                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '6vw';
                        document.getElementById('titularCasa2').style.top = '50vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '4vh';
                        document.getElementById('titularCasa6').style.left = '6vw';
                        document.getElementById('titularCasa6').style.top = '24vh';
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('setaReta5C').style.left = '100vw';
                        break;
                    case 2:
                        // rotação
                        document.getElementById('titularCasa1').style.left = '6vw';
                        document.getElementById('titularCasa1').style.top = '25vh';
                        document.getElementById('titularCasa2').style.left = '16vw';
                        document.getElementById('titularCasa2').style.top = '29vh';
                        document.getElementById('titularCasa3').style.left = '6vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '30vw';
                        document.getElementById('titularCasa4').style.top = '33vh';
                        document.getElementById('titularCasa5').style.left = '36vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '25vw';
                        document.getElementById('titularCasa6').style.top = '20vh';
                        break;
                    case 3:
                        //rotação
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '4vh';
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '27vh';
                        document.getElementById('setaReta1C').style.left = '14vw';
                        document.getElementById('setaReta1C').style.top = '60vh';
                        document.getElementById('setaReta1C').style.rotate = '-90deg';
                        document.getElementById('setaReta2C').style.left = '42vw';
                        document.getElementById('setaReta2C').style.top = '41vh';
                        document.getElementById('setaReta2C').style.rotate = '310deg';
                        document.getElementById('setaReta3C').style.left = '42vw';
                        document.getElementById('setaReta3C').style.top = '41vh';
                        document.getElementById('setaReta3C').style.rotate = '-310deg';
                        break;
                    case 4:
                        document.getElementById('titularCasa2').innerHTML = `<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">Central</p>`;
                        document.getElementById('espacoLiberoCasa').innerHTML = '<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>';
                        document.getElementById('espacoCentralCasa').innerHTML = '';
                        // rotação
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '4vh';
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '25vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '6vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '35.5vw';
                        document.getElementById('titularCasa6').style.top = '50vh';

                        break;
                    case 5:

                        // rotação
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '25vh';
                        document.getElementById('titularCasa5').style.left = '16vw';
                        document.getElementById('titularCasa5').style.top = '29vh';
                        document.getElementById('titularCasa6').style.left = '6vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                        document.getElementById('titularCasa1').style.left = '30vw';
                        document.getElementById('titularCasa1').style.top = '33vh';
                        document.getElementById('titularCasa2').style.left = '36vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '25vw';
                        document.getElementById('titularCasa3').style.top = '20vh';

                        break;
                    case 6:
                        document.getElementById('setaReta1C').style.left = '27vw'
                        document.getElementById('setaReta1C').style.top = '26vh'
                        document.getElementById('setaReta1C').style.width = '100px'
                        document.getElementById('setaReta2C').style.left = '34vw'
                        document.getElementById('setaReta2C').style.top = '66vh'
                        document.getElementById('setaReta2C').style.width = '100px'
                        document.getElementById('setaReta2C').style.rotate = '-100deg'
                        document.getElementById('setaReta3C').style.left = '40vw'
                        document.getElementById('setaReta3C').style.top = '73vh'
                        document.getElementById('setaReta3C').style.width = '100px'
                        document.getElementById('setaReta3C').style.rotate = '150deg'
                        document.getElementById('setaReta4C').style.left = '17vw'
                        document.getElementById('setaReta4C').style.top = '38vh'
                        document.getElementById('setaReta4C').style.width = '100px'
                        document.getElementById('setaReta4C').style.rotate = '-60deg'
                        document.getElementById('setaReta5C').style.left = '22vw'
                        document.getElementById('setaReta5C').style.top = '60vh'
                        document.getElementById('setaReta5C').style.width = '100px'
                        document.getElementById('setaReta5C').style.rotate = '-90deg'
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        document.getElementById("titularCasa4").style.left = "14vw";
                        document.getElementById("titularCasa5").style.left = "6vw";
                        document.getElementById("titularCasa5").style.top = "27vh";
                        document.getElementById("titularCasa1").style.left = "14vw";
                        document.getElementById("titularCasa1").style.top = "50vh";
                        document.getElementById("titularCasa3").style.left = "36vw";
                        document.getElementById("titularCasa3").style.top = "47vh";
                        document.getElementById("titularCasa2").style.left = "27vw";
                        document.getElementById("titularCasa2").style.top = "56vh";
                        rotacaoCasa = 0;
                        break;
                
                    default:
                        break;
                }
                break;
            case '4x2':
                switch (rotacaoCasa) {
                    case 1:
                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '6vw';
                        document.getElementById('titularCasa2').style.top = '50vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '4vh';
                        document.getElementById('titularCasa6').style.left = '6vw';
                        document.getElementById('titularCasa6').style.top = '4vh';
                        document.getElementById('setaCurva1C').style.left = '32vw';
                        document.getElementById('setaCurva1C').style.top = '58vh';
                        document.getElementById('setaCurva2C').style.left = '40vw';
                        document.getElementById('setaCurva2C').style.top = '58vh';
                        document.getElementById('setaCurva1C').style.rotate = '-25deg'
                        document.getElementById('setaCurva2C').style.rotate = '150deg'
                        break;
                    case 2:
                        document.getElementById('titularCasa1').style.left = '6vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '6vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '4vh';
                        document.getElementById('setaCurva1C').style.left = '40vw';
                        document.getElementById('setaCurva1C').style.top = '35vh';
                        document.getElementById('setaCurva2C').style.left = '32vw';
                        document.getElementById('setaCurva2C').style.top = '35vh';
                        document.getElementById('setaCurva1C').style.rotate = '150deg'
                        document.getElementById('setaCurva2C').style.rotate = '-25deg'
                        document.getElementById('setaReta1C').style.left = '100vw'
                        break;
                    case 3:
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '6vw';
                        document.getElementById('titularCasa2').style.top = '4vh';
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '27vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '50vh';
                        document.getElementById('titularCasa5').style.left = '30.5vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '27vh';
                        document.getElementById('setaReta1C').style.left = '100vw'
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        break;
                    case 4:
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '4vh';
                        document.getElementById('titularCasa3').style.left = '6vw';
                        document.getElementById('titularCasa3').style.top = '4vh';
                        document.getElementById('titularCasa4').style.left = '14vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '6vw';
                        document.getElementById('titularCasa5').style.top = '50vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                        document.getElementById('setaCurva1C').style.left = '32vw';
                        document.getElementById('setaCurva1C').style.top = '58vh';
                        document.getElementById('setaCurva2C').style.left = '40vw';
                        document.getElementById('setaCurva2C').style.top = '58vh';
                        document.getElementById('setaCurva1C').style.rotate = '-25deg'
                        document.getElementById('setaCurva2C').style.rotate = '150deg'
                        document.getElementById('setaReta1C').style.left = '100vw'
                        break;
                    case 5:
                        document.getElementById('titularCasa1').style.left = '30.5vw';
                        document.getElementById('titularCasa1').style.top = '50vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '4vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '14vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '6vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                        document.getElementById('setaCurva1C').style.left = '40vw';
                        document.getElementById('setaCurva1C').style.top = '35vh';
                        document.getElementById('setaCurva2C').style.left = '32vw';
                        document.getElementById('setaCurva2C').style.top = '35vh';
                        document.getElementById('setaCurva1C').style.rotate = '150deg'
                        document.getElementById('setaCurva2C').style.rotate = '-25deg'
                        document.getElementById('setaReta1C').style.left = '100vw'
                        break;
                    case 6:
                        document.getElementById('titularCasa1').style.left = '6vw';
                        document.getElementById('titularCasa1').style.top = '50vh';
                        document.getElementById('titularCasa2').style.left = '30.5vw';
                        document.getElementById('titularCasa2').style.top = '50vh';
                        document.getElementById('titularCasa3').style.left = '30.5vw';
                        document.getElementById('titularCasa3').style.top = '27vh';
                        document.getElementById('titularCasa4').style.left = '30.5vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '6vw';
                        document.getElementById('titularCasa5').style.top = '4vh';
                        document.getElementById('titularCasa6').style.left = '14vw';
                        document.getElementById('titularCasa6').style.top = '27vh';
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaCurva1C').style.left = '100vw';
                        document.getElementById('setaCurva2C').style.left = '100vw';
                        rotacaoCasa = 0;
                        break;
                
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    } else if(time == 'fora'){
        console.log(esquemaFora);
        
        rotacaoFora++;
        switch (esquemaFora) {
            case '6x0':
                switch (rotacaoFora) {
                    case 1:
                        document.getElementById('titularFora1').style.left = '65vw';
                        document.getElementById('titularFora1').style.top = '27vh';
                        document.getElementById('titularFora2').style.left = '73vw';
                        document.getElementById('titularFora2').style.top = '4vh';
                        document.getElementById('titularFora3').style.left = '47.5vw';
                        document.getElementById('titularFora3').style.top = '4vh';
                        document.getElementById('titularFora4').style.left = '47.5vw';
                        document.getElementById('titularFora4').style.top = '27vh';
                        document.getElementById('titularFora5').style.left = '47.5vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        document.getElementById('titularFora6').style.left = '73vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        break;
                    case 2:
                        document.getElementById('titularFora1').style.left = '73vw';
                        document.getElementById('titularFora1').style.top = '50vh';
                        document.getElementById('titularFora2').style.left = '65vw';
                        document.getElementById('titularFora2').style.top = '27vh';
                        document.getElementById('titularFora3').style.left = '73vw';
                        document.getElementById('titularFora3').style.top = '4vh';
                        document.getElementById('titularFora4').style.left = '47.5vw';
                        document.getElementById('titularFora4').style.top = '4vh';
                        document.getElementById('titularFora5').style.left = '47.5vw';
                        document.getElementById('titularFora5').style.top = '27vh';
                        document.getElementById('titularFora6').style.left = '47.5vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        break;
                    case 3:
                        document.getElementById('titularFora1').style.left = '47.5vw';
                        document.getElementById('titularFora1').style.top = '50vh';
                        document.getElementById('titularFora2').style.left = '73vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        document.getElementById('titularFora3').style.left = '65vw';
                        document.getElementById('titularFora3').style.top = '27vh';
                        document.getElementById('titularFora4').style.left = '73vw';
                        document.getElementById('titularFora4').style.top = '4vh';
                        document.getElementById('titularFora5').style.left = '47.5vw';
                        document.getElementById('titularFora5').style.top = '4vh';
                        document.getElementById('titularFora6').style.left = '47.5vw';
                        document.getElementById('titularFora6').style.top = '27vh';
                        break;
                    case 4:
                        document.getElementById('titularFora1').style.left = '47.5vw';
                        document.getElementById('titularFora1').style.top = '27vh';
                        document.getElementById('titularFora2').style.left = '47.5vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        document.getElementById('titularFora3').style.left = '73vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '65vw';
                        document.getElementById('titularFora4').style.top = '27vh';
                        document.getElementById('titularFora5').style.left = '73vw';
                        document.getElementById('titularFora5').style.top = '4vh';
                        document.getElementById('titularFora6').style.left = '47.5vw';
                        document.getElementById('titularFora6').style.top = '4vh';
                        break;
                    case 5:
                        document.getElementById('titularFora1').style.left = '47.5vw';
                        document.getElementById('titularFora1').style.top = '4vh';
                        document.getElementById('titularFora2').style.left = '47.5vw';
                        document.getElementById('titularFora2').style.top = '27vh';
                        document.getElementById('titularFora3').style.left = '47.5vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '73vw';
                        document.getElementById('titularFora4').style.top = '50vh';
                        document.getElementById('titularFora5').style.left = '65vw';
                        document.getElementById('titularFora5').style.top = '27vh';
                        document.getElementById('titularFora6').style.left = '73vw';
                        document.getElementById('titularFora6').style.top = '4vh';
                        break;
                    case 6:
                        document.getElementById('titularFora1').style.left = '73vw';
                        document.getElementById('titularFora1').style.top = '4vh';
                        document.getElementById('titularFora2').style.left = '47.5vw';
                        document.getElementById('titularFora2').style.top = '4vh';
                        document.getElementById('titularFora3').style.left = '47.5vw';
                        document.getElementById('titularFora3').style.top = '27vh';
                        document.getElementById('titularFora4').style.left = '47.5vw';
                        document.getElementById('titularFora4').style.top = '50vh';
                        document.getElementById('titularFora5').style.left = '73vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        document.getElementById('titularFora6').style.left = '65vw';
                        document.getElementById('titularFora6').style.top = '27vh';
                        break;
                
                    default:
                        break;
                }
                break;
            case '5x1':
                switch (rotacaoFora) {
                    case 1:
                        // substituição
                        document.getElementById('titularFora5').innerHTML = `<img class="jogadoresImg" src="/src/img/centralV.png" alt=""><p class="nomeJogador">Central</p>`;
                        document.getElementById('espacoLiberoFora').innerHTML = '<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>';
                        document.getElementById('espacoJogadorFora').innerHTML = '';

                        document.getElementById('titularFora1').style.left = '14vw';
                        document.getElementById('titularFora1').style.top = '27vh';
                        document.getElementById('titularFora2').style.left = '6vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        document.getElementById('titularFora3').style.left = '30.5vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '30.5vw';
                        document.getElementById('titularFora4').style.top = '27vh';
                        document.getElementById('titularFora5').style.left = '30.5vw';
                        document.getElementById('titularFora5').style.top = '4vh';
                        document.getElementById('titularFora6').style.left = '6vw';
                        document.getElementById('titularFora6').style.top = '24vh';
                        break;
                    case 2:
                        // rotação
                        document.getElementById('titularFora1').style.left = '6vw';
                        document.getElementById('titularFora1').style.top = '25vh';
                        document.getElementById('titularFora2').style.left = '16vw';
                        document.getElementById('titularFora2').style.top = '29vh';
                        document.getElementById('titularFora3').style.left = '6vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '30vw';
                        document.getElementById('titularFora4').style.top = '33vh';
                        document.getElementById('titularFora5').style.left = '36vw';
                        document.getElementById('titularFora5').style.top = '27vh';
                        document.getElementById('titularFora6').style.left = '25vw';
                        document.getElementById('titularFora6').style.top = '20vh';
                        ptC = false;
                        break;
                    case 3:
                        //rotação
                        document.getElementById('titularFora1').style.left = '30.5vw';
                        document.getElementById('titularFora1').style.top = '4vh';
                        document.getElementById('titularFora2').style.left = '14vw';
                        document.getElementById('titularFora2').style.top = '4vh';
                        document.getElementById('titularFora3').style.left = '14vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '6vw';
                        document.getElementById('titularFora4').style.top = '50vh';
                        document.getElementById('titularFora5').style.left = '30.5vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        document.getElementById('titularFora6').style.left = '30.5vw';
                        document.getElementById('titularFora6').style.top = '27vh';
                        break;
                    case 4:
                        // substituição
                        document.getElementById('titularFora2').innerHTML = `<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">Central</p>`;
                        document.getElementById('espacoLiberoFora').innerHTML = '<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>';
                        document.getElementById('espacoJogadorFora').innerHTML = '';

                        // rotação
                        document.getElementById('titularFora1').style.left = '30.5vw';
                        document.getElementById('titularFora1').style.top = '27vh';
                        document.getElementById('titularFora2').style.left = '30.5vw';
                        document.getElementById('titularFora2').style.top = '4vh';
                        document.getElementById('titularFora3').style.left = '14vw';
                        document.getElementById('titularFora3').style.top = '25vh';
                        document.getElementById('titularFora4').style.left = '6vw';
                        document.getElementById('titularFora4').style.top = '27vh';
                        document.getElementById('titularFora5').style.left = '6vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        document.getElementById('titularFora6').style.left = '30.5vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        break;
                    case 5:

                        // rotação
                        document.getElementById('titularFora4').style.left = '6vw';
                        document.getElementById('titularFora4').style.top = '25vh';
                        document.getElementById('titularFora5').style.left = '16vw';
                        document.getElementById('titularFora5').style.top = '29vh';
                        document.getElementById('titularFora6').style.left = '6vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        document.getElementById('titularFora1').style.left = '30vw';
                        document.getElementById('titularFora1').style.top = '33vh';
                        document.getElementById('titularFora2').style.left = '36vw';
                        document.getElementById('titularFora2').style.top = '27vh';
                        document.getElementById('titularFora3').style.left = '25vw';
                        document.getElementById('titularFora3').style.top = '20vh';
                        break;
                    case 6:
                        document.getElementById('titularFora1').style.left = '6vw';
                        document.getElementById('titularFora1').style.top = '50vh';
                        document.getElementById('titularFora2').style.left = '30.5vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        document.getElementById('titularFora3').style.left = '30.5vw';
                        document.getElementById('titularFora3').style.top = '27vh';
                        document.getElementById('titularFora4').style.left = '30.5vw';
                        document.getElementById('titularFora4').style.top = '4vh';
                        document.getElementById('titularFora5').style.left = '14vw';
                        document.getElementById('titularFora5').style.top = '4vh';
                        document.getElementById('titularFora6').style.left = '14vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        rotacaoFora = 0;
                        break;
                
                    default:
                        break;
                }
                break;
            case '4x2':
                switch (rotacaoFora) {
                    case 1:
                        document.getElementById('titularFora1').style.left = '65vw';
                        document.getElementById('titularFora1').style.top = '27vh';
                        document.getElementById('titularFora2').style.left = '73vw';
                        document.getElementById('titularFora2').style.top = '4vh';
                        document.getElementById('titularFora3').style.left = '47.5vw';
                        document.getElementById('titularFora3').style.top = '4vh';
                        document.getElementById('titularFora4').style.left = '47.5vw';
                        document.getElementById('titularFora4').style.top = '27vh';
                        document.getElementById('titularFora5').style.left = '47.5vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        document.getElementById('titularFora6').style.left = '73vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        document.getElementById('setaCurva1F').style.left = '48vw';
                        document.getElementById('setaCurva1F').style.top = '35vh';
                        document.getElementById('setaCurva2F').style.left = '57vw';
                        document.getElementById('setaCurva2F').style.top = '35vh';
                        document.getElementById('setaCurva1F').style.rotate = '-25deg'
                        document.getElementById('setaCurva2F').style.rotate = '150deg'
                        break;
                    case 2:
                        document.getElementById('titularFora1').style.left = '73vw';
                        document.getElementById('titularFora1').style.top = '50vh';
                        document.getElementById('titularFora2').style.left = '65vw';
                        document.getElementById('titularFora2').style.top = '27vh';
                        document.getElementById('titularFora3').style.left = '73vw';
                        document.getElementById('titularFora3').style.top = '4vh';
                        document.getElementById('titularFora4').style.left = '47.5vw';
                        document.getElementById('titularFora4').style.top = '4vh';
                        document.getElementById('titularFora5').style.left = '47.5vw';
                        document.getElementById('titularFora5').style.top = '27vh';
                        document.getElementById('titularFora6').style.left = '47.5vw';
                        document.getElementById('titularFora6').style.top = '50vh';
                        document.getElementById('setaCurva1F').style.left = '48vw';
                        document.getElementById('setaCurva1F').style.top = '58vh';
                        document.getElementById('setaCurva2F').style.left = '57vw';
                        document.getElementById('setaCurva2F').style.top = '58vh';
                        document.getElementById('setaCurva2F').style.rotate = '150deg'
                        document.getElementById('setaCurva1F').style.rotate = '-25deg'
                        document.getElementById('setaReta1F').style.left = '100vw'
                        break;
                    case 3:
                        document.getElementById('titularFora1').style.left = '47.5vw';
                        document.getElementById('titularFora1').style.top = '50vh';
                        document.getElementById('titularFora2').style.left = '73vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        document.getElementById('titularFora3').style.left = '65vw';
                        document.getElementById('titularFora3').style.top = '27vh';
                        document.getElementById('titularFora4').style.left = '73vw';
                        document.getElementById('titularFora4').style.top = '4vh';
                        document.getElementById('titularFora5').style.left = '47.5vw';
                        document.getElementById('titularFora5').style.top = '4vh';
                        document.getElementById('titularFora6').style.left = '47.5vw';
                        document.getElementById('titularFora6').style.top = '27vh';
                        document.getElementById('setaReta1F').style.left = '100vw'
                        document.getElementById('setaCurva1F').style.left = '100vw';
                        document.getElementById('setaCurva2F').style.left = '100vw';
                        break;
                    case 4:
                        document.getElementById('titularFora1').style.left = '47.5vw';
                        document.getElementById('titularFora1').style.top = '27vh';
                        document.getElementById('titularFora2').style.left = '47.5vw';
                        document.getElementById('titularFora2').style.top = '50vh';
                        document.getElementById('titularFora3').style.left = '73vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '65vw';
                        document.getElementById('titularFora4').style.top = '27vh';
                        document.getElementById('titularFora5').style.left = '73vw';
                        document.getElementById('titularFora5').style.top = '4vh';
                        document.getElementById('titularFora6').style.left = '47.5vw';
                        document.getElementById('titularFora6').style.top = '4vh';
                        document.getElementById('setaCurva1F').style.left = '48vw';
                        document.getElementById('setaCurva1F').style.top = '35vh';
                        document.getElementById('setaCurva2F').style.left = '57vw';
                        document.getElementById('setaCurva2F').style.top = '35vh';
                        document.getElementById('setaCurva1F').style.rotate = '-25deg'
                        document.getElementById('setaCurva2F').style.rotate = '150deg'
                        break;
                    case 5:
                        document.getElementById('titularFora1').style.left = '47.5vw';
                        document.getElementById('titularFora1').style.top = '4vh';
                        document.getElementById('titularFora2').style.left = '47.5vw';
                        document.getElementById('titularFora2').style.top = '27vh';
                        document.getElementById('titularFora3').style.left = '47.5vw';
                        document.getElementById('titularFora3').style.top = '50vh';
                        document.getElementById('titularFora4').style.left = '73vw';
                        document.getElementById('titularFora4').style.top = '50vh';
                        document.getElementById('titularFora5').style.left = '65vw';
                        document.getElementById('titularFora5').style.top = '27vh';
                        document.getElementById('titularFora6').style.left = '73vw';
                        document.getElementById('titularFora6').style.top = '4vh';
                        document.getElementById('setaCurva1F').style.left = '48vw';
                        document.getElementById('setaCurva1F').style.top = '58vh';
                        document.getElementById('setaCurva2F').style.left = '57vw';
                        document.getElementById('setaCurva2F').style.top = '58vh';
                        document.getElementById('setaCurva2F').style.rotate = '150deg'
                        document.getElementById('setaCurva1F').style.rotate = '-25deg'
                        document.getElementById('setaReta1F').style.left = '100vw'
                        break;
                    case 6:
                        document.getElementById('titularFora1').style.left = '73vw';
                        document.getElementById('titularFora1').style.top = '4vh';
                        document.getElementById('titularFora2').style.left = '47.5vw';
                        document.getElementById('titularFora2').style.top = '4vh';
                        document.getElementById('titularFora3').style.left = '47.5vw';
                        document.getElementById('titularFora3').style.top = '27vh';
                        document.getElementById('titularFora4').style.left = '47.5vw';
                        document.getElementById('titularFora4').style.top = '50vh';
                        document.getElementById('titularFora5').style.left = '73vw';
                        document.getElementById('titularFora5').style.top = '50vh';
                        document.getElementById('titularFora6').style.left = '65vw';
                        document.getElementById('titularFora6').style.top = '27vh';
                        document.getElementById('setaReta1F').style.left = '100vw';
                        document.getElementById('setaCurva1F').style.left = '100vw';
                        document.getElementById('setaCurva2F').style.left = '100vw';
                        rotacaoFora = 0;
                        break;
                
                    default:
                        break;
                }
                break;
            default:
                break;
        }        
    }
}

function esquema(time, esquema) {
    // esquema do time da casa
    if (time == 'casa') {
        if (esquema == "6x0") {
            // esquema 6x0
            document.getElementById('titularCasa1').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 1
            document.getElementById('titularCasa2').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 2
            document.getElementById('titularCasa3').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 3
            document.getElementById('titularCasa4').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 4
            document.getElementById('titularCasa5').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 5
            document.getElementById('titularCasa6').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 6
            document.getElementById('espacoCentralCasa').innerHTML = ''; // caixa de espera do central
            document.getElementById('espacoLiberoCasa').innerHTML = '';  // caixa de espera do libero
            esquemaCasa = '6x0'
            document.getElementById('caixaEsquemaCasa').style.left = "1000vw";
        } else if (esquema == "5x1"){
            // esquema 5x1
            document.getElementById('titularCasa1').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 1
            document.getElementById('titularCasa2').innerHTML = `<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">Central</p>`; // central 1
            document.getElementById('titularCasa3').innerHTML = `<img class="jogadoresImg" src="/src/img/opostoA.png" alt=""><p class="nomeJogador">Oposto</p>`; // oposto 
            document.getElementById('titularCasa4').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 2
            document.getElementById('titularCasa5').innerHTML = `<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>`; // líbero
            document.getElementById('titularCasa6').innerHTML = `<img class="jogadoresImg" src="/src/img/levantadorA.png" alt=""><p class="nomeJogador">Levantador</p>`; // levantador
            document.getElementById('espacoCentralCasa').innerHTML = '<img class="jogadoresImg" src="/src/img/centralA.png" alt=""><p class="nomeJogador">central</p>'; // central 2
            document.getElementById('espacoLiberoCasa').innerHTML = '';
            esquemaCasa = '5x1'
            document.getElementById('caixaEsquemaCasa').style.left = "1000vw";
        } else {
            // esquema casa 4x2
            document.getElementById('titularCasa1').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 1
            document.getElementById('titularCasa2').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 2
            document.getElementById('titularCasa3').innerHTML = `<img class="jogadoresImg" src="/src/img/levantadorA.png" alt=""><p class="nomeJogador">Levantador</p>`; // levantador 1
            document.getElementById('titularCasa4').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 3
            document.getElementById('titularCasa5').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroA.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 4
            document.getElementById('titularCasa6').innerHTML = `<img class="jogadoresImg" src="/src/img/levantadorA.png" alt=""><p class="nomeJogador">Levantador</p>`; // levantador 2
            document.getElementById('espacoCentralCasa').innerHTML = '';
            document.getElementById('espacoLiberoCasa').innerHTML = ''; 
            esquemaCasa = '4x2'
            console.log(esquemaCasa);
            
            document.getElementById('caixaEsquemaCasa').style.left = "1000vw";

        }
    }
    // esquema do time de fora(Vermelho)
    else  if (time == 'fora') {
        if (esquema == "6x0") {
            // esquema 6x0
            document.getElementById('titularFora1').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 1
            document.getElementById('titularFora2').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 2
            document.getElementById('titularFora3').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 3
            document.getElementById('titularFora4').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 4
            document.getElementById('titularFora5').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 5
            document.getElementById('titularFora6').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 6
            document.getElementById('espacoCentralFora').innerHTML = '';
            document.getElementById('espacoLiberoFora').innerHTML = ''; 
            esquemaFora = '6x0'
            document.getElementById('caixaEsquemaFora').style.left = "1000vw";
        } else if (esquema == "5x1"){
            // esquema 5x1
            document.getElementById('titularFora1').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 1
            document.getElementById('titularFora2').innerHTML = `<img class="jogadoresImg" src="/src/img/centralV.png" alt=""><p class="nomeJogador">Central</p>`; // central 1
            document.getElementById('titularFora3').innerHTML = `<img class="jogadoresImg" src="/src/img/opostoV.png" alt=""><p class="nomeJogador">Oposto</p>`; //  oposto
            document.getElementById('titularFora4').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 2
            document.getElementById('titularFora5').innerHTML = `<img class="jogadoresImg" src="/src/img/libero.png" alt=""><p class="nomeJogador">Líbero</p>`; // líbero
            document.getElementById('titularFora6').innerHTML = `<img class="jogadoresImg" src="/src/img/levantadorV.png" alt=""><p class="nomeJogador">Levantador</p>`; // levantador 
            document.getElementById('espacoCentralFora').innerHTML = '<img class="jogadoresImg" src="/src/img/centralV.png" alt=""><p class="nomeJogador">central</p>'; //  central 2
            document.getElementById('espacoLiberoFora').innerHTML = '';            
            esquemaFora = '5x1'
            document.getElementById('caixaEsquemaFora').style.left = "1000vw";
        } else {
            // esquema 4x2
            document.getElementById('titularFora1').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 1
            document.getElementById('titularFora2').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 2
            document.getElementById('titularFora3').innerHTML = `<img class="jogadoresImg" src="/src/img/levantadorV.png" alt=""><p class="nomeJogador">Levantador</p>`; // levantador 1 
            document.getElementById('titularFora4').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 3
            document.getElementById('titularFora5').innerHTML = `<img class="jogadoresImg" src="/src/img/ponteiroV.png" alt=""><p class="nomeJogador">Ponteiro</p>`; // ponteiro 4
            document.getElementById('titularFora6').innerHTML = `<img class="jogadoresImg" src="/src/img/levantadorV.png" alt=""><p class="nomeJogador">Levantador</p>`; // levantador 2
            document.getElementById('espacoCentralFora').innerHTML = '';
            document.getElementById('espacoLiberoFora').innerHTML = ''; 
            esquemaFora = '4x2'
            document.getElementById('caixaEsquemaFora').style.left = "1000vw";

        }
    }
}

function botoes(btn) {
    let numeroAleatorio1a3 =parseInt(Math.random() * 3 ) + 1;
    if (btn == 'esquemaCasa') {
        if (btnEC == false) {
            document.getElementById('caixaEsquemaCasa').style.left = "16.6vw";
            btnEC = true;
        } else {
            document.getElementById('caixaEsquemaCasa').style.left = "1000vw";
            btnEC = false
        }
    } else if (btn == 'esquemaFora') {
        if (btnEF == false) {
            document.getElementById('caixaEsquemaFora').style.left = "77.1vw";
            btnEF = true;
        } else {
            document.getElementById('caixaEsquemaFora').style.left = "1000vw";
            btnEF = false
        }
    } else if(btn == 'comecar'){
        document.getElementById('escolhaLadoInicial').style.left = '0.5vw';

    } else if(btn == 'saque') {    
        if (saqueC == true || possedeBola == 'casa') {
            if(esquemaCasa == '6x0'){
                document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                    
                document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                });
            } else if (esquemaCasa == '4x2') {
                switch (rotacaoCasa) {
                    case 1:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa3').classList.add('animaP1');
                        document.getElementById('titularCasa4').classList.add('animaP2');
                
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa3').classList.remove('animaP1');
                            document.getElementById('titularCasa4').classList.remove('animaP2');
                            document.getElementById("titularCasa3").style.top = "27vh";
                            document.getElementById("titularCasa4").style.top = "50vh";
                        });
                        break;
                    case 2:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa5').classList.add('animaP3');
                        document.getElementById('titularCasa6').classList.add('animaP4');
                    
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa5').classList.remove('animaP3');
                            document.getElementById('titularCasa6').classList.remove('animaP4');
                            document.getElementById("titularCasa5").style.top = "4vh";
                            document.getElementById("titularCasa6").style.top = "27vh";
                        });
                        break;  
                    case 3:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                    
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                        });
                        break;
                    case 4:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa6').classList.add('animaP1');
                        document.getElementById('titularCasa1').classList.add('animaP2');
                    
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa6').classList.remove('animaP1');
                            document.getElementById('titularCasa1').classList.remove('animaP2');
                            document.getElementById("titularCasa6").style.top = "27vh";
                            document.getElementById("titularCasa1").style.top = "50vh";
                        });
                        break;  
                    case 5:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa2').classList.add('animaP3');
                        document.getElementById('titularCasa3').classList.add('animaP4');
                    
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa2').classList.remove('animaP3');
                            document.getElementById('titularCasa3').classList.remove('animaP4');
                            document.getElementById("titularCasa2").style.top = "4vh";
                            document.getElementById("titularCasa3").style.top = "27vh";
                        });
                        break;
                    case 0:
                        console.log(numeroAleatorio1a3);
                        
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                        });
                        break;       
                    default:
                        break;
                }
            } else if (esquemaCasa == '5x1'){
                switch (rotacaoCasa) {
                    case 1:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa4').classList.add('animaRotacao1SaquePonteiro4');
                        document.getElementById('titularCasa5').classList.add('animaRotacao1SaqueCentral3');
                        document.getElementById('titularCasa1').classList.add('animaRotacao1SaquePonteiro6');
                        document.getElementById('titularCasa2').classList.add('animaRotacao1SaqueCentral1');
                        document.getElementById('titularCasa6').classList.add('animaRotacao1SaqueLevantador5');
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa4').classList.remove('animaRotacao1SaquePonteiro4');
                            document.getElementById('titularCasa5').classList.remove('animaRotacao1SaqueCentral3');
                            document.getElementById('titularCasa1').classList.remove('animaRotacao1SaquePonteiro6');
                            document.getElementById('titularCasa2').classList.remove('animaRotacao1SaqueCentral1');
                            document.getElementById('titularCasa6').classList.remove('animaRotacao1SaqueLevantador5');
                            document.getElementById('titularCasa4').style.left = '35.5vw';
                            document.getElementById('titularCasa4').style.top = '4vh';
                            document.getElementById('titularCasa5').style.left = '35.5vw';
                            document.getElementById('titularCasa5').style.top = '27vh';
                            document.getElementById('titularCasa1').style.left = '6vw';
                            document.getElementById('titularCasa1').style.top = '27vh';
                            document.getElementById('titularCasa2').style.left = '14vw';
                            document.getElementById('titularCasa2').style.top = '4vh';
                            document.getElementById('titularCasa6').style.left = '14vw';
                            document.getElementById('titularCasa6').style.top = '50vh';
                            document.getElementById('setaReta1C').style.left = '100vw';
                            document.getElementById('setaReta2C').style.left = '100vw';
                            document.getElementById('setaCurva3C').style.left = '100vw';
                            document.getElementById('setaCurva1C').style.left = '100vw';
                            document.getElementById('setaCurva2C').style.left = '100vw';
                            document.getElementById('divBolaSaqueCasa').style.display = 'none';
                        }, { once: true });
                        break;
                    case 2:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa2').classList.add('animaRotacao2SaqueLibero6');
                        document.getElementById('titularCasa3').classList.add('animaRotacao2SaqueOposto1');
                        document.getElementById('titularCasa4').classList.add('animaRotacao2SaquePonteiro2');
                        document.getElementById('titularCasa6').classList.add('animaRotacao2SaqueLevantador4');

                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa2').classList.remove('animaRotacao2SaqueLibero6');
                            document.getElementById('titularCasa3').classList.remove('animaRotacao2SaqueOposto1');
                            document.getElementById('titularCasa4').classList.remove('animaRotacao2SaquePonteiro2');
                            document.getElementById('titularCasa6').classList.remove('animaRotacao2SaqueLevantador4');
                            document.getElementById('titularCasa2').style.left = '14vw';
                            document.getElementById('titularCasa2').style.top = '4vh';
                            document.getElementById('titularCasa3').style.left = '14vw';
                            document.getElementById('titularCasa3').style.top = '50vh';
                            document.getElementById('titularCasa4').style.left = '36vw';
                            document.getElementById('titularCasa4').style.top = '4vh';
                            document.getElementById('titularCasa6').style.left = '36vw';
                            document.getElementById('titularCasa6').style.top = '50vh';
                            document.getElementById('setaReta1C').style.left = '100vw';
                            document.getElementById('setaReta2C').style.left = '100vw';
                            document.getElementById('setaReta3C').style.left = '100vw';
                            document.getElementById('setaReta4C').style.left = '100vw';
                            document.getElementById('divBolaSaqueCasa').style.display = 'none';
                        }, { once: true });
                        break;
                    case 3:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa4').classList.add('animaRotacao3SaquePonteiro2');
                        document.getElementById('titularCasa5').classList.add('animaRotacao3SaqueCentral3');
                        document.getElementById('titularCasa6').classList.add('animaRotacao3SaqueLevantador3');

                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa4').classList.remove('animaRotacao3SaquePonteiro2');
                            document.getElementById('titularCasa5').classList.remove('animaRotacao3SaqueCentral3');
                            document.getElementById('titularCasa6').classList.remove('animaRotacao3SaqueLevantador3');
                            document.getElementById('titularCasa4').style.left = '6vw';
                            document.getElementById('titularCasa4').style.top = '27vh';
                            document.getElementById('titularCasa5').style.left = '36vw';
                            document.getElementById('titularCasa5').style.top = '27vh';
                            document.getElementById('titularCasa6').style.left = '36vw';
                            document.getElementById('titularCasa6').style.top = '50vh';
                            document.getElementById('setaReta1C').style.left = '100vw';
                            document.getElementById('setaReta2C').style.left = '100vw';
                            document.getElementById('setaReta3C').style.left = '100vw';
                            document.getElementById('setaReta4C').style.left = '100vw';
                            document.getElementById('divBolaSaqueCasa').style.display = 'none';
                        }, { once: true });
                        break;
                    case 4:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa1').classList.add('animaRotacao4SaquePonteiro4');
                        document.getElementById('titularCasa2').classList.add('animaRotacao4SaqueCentral3');
                        document.getElementById('titularCasa3').classList.add('animaRotacao4SaqueOposto5');
                        document.getElementById('titularCasa4').classList.add('animaRotacao4SaquePonteiro6');
                        document.getElementById('titularCasa5').classList.add('animaRotacao4SaqueCentral1');
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa1').classList.remove('animaRotacao4SaquePonteiro4');
                            document.getElementById('titularCasa2').classList.remove('animaRotacao4SaqueCentral3');
                            document.getElementById('titularCasa3').classList.remove('animaRotacao4SaqueOposto5');
                            document.getElementById('titularCasa4').classList.remove('animaRotacao4SaquePonteiro6');
                            document.getElementById('titularCasa5').classList.remove('animaRotacao4SaqueCentral1');
                            document.getElementById('titularCasa1').style.left = '35.5vw';
                            document.getElementById('titularCasa1').style.top = '4vh';
                            document.getElementById('titularCasa2').style.left = '35.5vw';
                            document.getElementById('titularCasa2').style.top = '27vh';
                            document.getElementById('titularCasa3').style.left = '14vw';
                            document.getElementById('titularCasa3').style.top = '50vh';
                            document.getElementById('titularCasa4').style.left = '6vw';
                            document.getElementById('titularCasa4').style.top = '27vh';
                            document.getElementById('titularCasa5').style.left = '14vw';
                            document.getElementById('titularCasa5').style.top = '4vh';
                            document.getElementById('setaReta1C').style.left = '100vw';
                            document.getElementById('setaReta2C').style.left = '100vw';
                            document.getElementById('setaCurva3C').style.left = '100vw';
                            document.getElementById('setaCurva1C').style.left = '100vw';
                            document.getElementById('setaCurva2C').style.left = '100vw';
                            document.getElementById('divBolaSaqueCasa').style.display = 'none';
                        }, { once: true });
                        break;
                    case 5:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa1').classList.add('animaRotacao5SaquePonteiro2');
                        document.getElementById('titularCasa3').classList.add('animaRotacao5SaqueOposto4');
                        document.getElementById('titularCasa5').classList.add('animaRotacao5SaqueLibero6');
                        document.getElementById('titularCasa6').classList.add('animaRotacao5SaqueLevantador1');

                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa1').classList.remove('animaRotacao5SaquePonteiro2');
                            document.getElementById('titularCasa3').classList.remove('animaRotacao5SaqueOposto4');
                            document.getElementById('titularCasa5').classList.remove('animaRotacao5SaqueLibero6');
                            document.getElementById('titularCasa6').classList.remove('animaRotacao5SaqueLevantador1');
                            document.getElementById('titularCasa1').style.left = '36vw';
                            document.getElementById('titularCasa1').style.top = '4vh';
                            document.getElementById('titularCasa3').style.left = '36vw';
                            document.getElementById('titularCasa3').style.top = '50vh';
                            document.getElementById('titularCasa5').style.left = '14vw';
                            document.getElementById('titularCasa5').style.top = '4vh';
                            document.getElementById('titularCasa6').style.left = '14vw';
                            document.getElementById('titularCasa6').style.top = '50vh';
                            document.getElementById('setaReta1C').style.left = '100vw';
                            document.getElementById('setaReta2C').style.left = '100vw';
                            document.getElementById('setaReta3C').style.left = '100vw';
                            document.getElementById('setaReta4C').style.left = '100vw';
                            document.getElementById('divBolaSaqueCasa').style.display = 'none';
                        }, { once: true });
                        break;
                    case 0:
                        document.getElementById('divBolaSaqueCasa').classList.add('animaSaqueCasa' + numeroAleatorio1a3);
                        document.getElementById('titularCasa1').classList.add('animaRotacao6SaquePonteiro1');
                        document.getElementById('titularCasa3').classList.add('animaRotacao6SaqueOposto3');
                        document.getElementById('divBolaSaqueCasa').addEventListener('animationend', function(){
                            document.getElementById('divBolaSaqueCasa').classList.remove('animaSaqueCasa' + numeroAleatorio1a3);
                            document.getElementById('titularCasa1').classList.remove('animaRotacao6SaquePonteiro1');
                            document.getElementById('titularCasa3').classList.remove('animaRotacao6SaqueOposto3');;
                            document.getElementById('titularCasa1').style.left = '6vw';
                            document.getElementById('titularCasa1').style.top = '27vh';
                            document.getElementById('titularCasa3').style.left = '36vw';
                            document.getElementById('titularCasa3').style.top = '50vh';
                            document.getElementById('setaReta1C').style.left = '100vw';
                            document.getElementById('setaReta2C').style.left = '100vw';
                            document.getElementById('divBolaSaqueCasa').style.display = 'none';
                        }, { once: true });
                        break;
                
                    default:
                        break;
                }
            }
        } else if(saqueF == true || possedeBola == 'fora'){
            if(esquemaFora == '6x0'){
                document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
                
                document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                    document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3);
                    console.log('cheguei');
                    recepcaoTime('casa', numeroAleatorio1a3);
                }, { once: true });

            }else if (esquemaFora == '4x2') {
                switch (rotacaoFora) {
                    case 1:
                        document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
                        document.getElementById('titularCasa3').classList.add('animaR1');
            
                        document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3)
                        document.getElementById('titularCasa3').classList.remove('animaR1');
                        document.getElementById('titularCasa3').style.top = "27vh";
                        });
                        break;
                    case 2:
                        document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
                        document.getElementById('titularCasa6').classList.add('animaR2');
            
                        document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3)
                        document.getElementById('titularCasa6').classList.remove('animaR2');
                        document.getElementById('titularCasa6').style.top = "27vh";
                        });
                        break;  
                    case 3:
                        document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
        
                        document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3)
                        });
                        break;
                    case 4:
                        document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
                        document.getElementById('titularCasa6').classList.add('animaR1');
            
                        document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3)
                        document.getElementById('titularCasa6').classList.remove('animaR1');
                        document.getElementById('titularCasa6').style.top = "27vh";
                        });
                        break;  
                    case 5:
                        document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
                        document.getElementById('titularCasa3').classList.add('animaR2');
            
                        document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3)
                        document.getElementById('titularCasa3').classList.remove('animaR2');
                        document.getElementById('titularCasa3').style.top = "27vh";
                        });
                        break;
                    case 0:
                        console.log(numeroAleatorio1a3);
                        
                        document.getElementById('divBolaSaqueFora').classList.add('animaSaqueFora' + numeroAleatorio1a3);
        
                        document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaSaqueFora' + numeroAleatorio1a3)
                        });
                        break;       
                    default:
                        break;
                }
            } else if(esquemaFora == '5x1'){

            }
        }
    }
}

function recepcaoTime(time, numeroAleatorio1a3){
    if (time == 'casa') {  
        if (esquemaCasa == '6x0') {
            document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
            document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
            });
        } else if(esquemaCasa == '4x2'){
            document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
            document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
            });
        } else if (esquemaCasa == '5x1') {
            switch (rotacaoCasa) {
                case 1:
                    document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
                    document.getElementById('titularCasa2').classList.add('animaRotacao2RecepcaoLibero1');
                    document.getElementById('titularCasa4').classList.add('animaRotacao2RecepcaoPonteiro3');
                    document.getElementById('titularCasa5').classList.add('animaRotacao2RecepcaoCentral4');
                    document.getElementById('titularCasa6').classList.add('animaRotacao2RecepcaoLevantador5');
                    document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
                        document.getElementById("divBolaSaqueFora").style.display = 'none'; 
                        document.getElementById('titularCasa2').classList.remove('animaRotacao2RecepcaoLibero1');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao2RecepcaoPonteiro3');
                        document.getElementById('titularCasa5').classList.remove('animaRotacao2RecepcaoCentral4');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao2RecepcaoLevantador5');
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '4vh';                
                        document.getElementById('titularCasa4').style.left = '25vw';
                        document.getElementById('titularCasa4').style.top = '0vh';
                        document.getElementById('titularCasa5').style.left = '25.5vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        voltaRecepcaoAtaque('casa')
                    }, { once: true });
                    break;
                case 2:
                    document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
                    document.getElementById('titularCasa2').classList.add('animaRotacao3RecepcaoLibero6');
                    document.getElementById('titularCasa3').classList.add('animaRotacao3RecepcaoOposto1');
                    document.getElementById('titularCasa4').classList.add('animaRotacao3RecepcaoPonteiro2');
                    document.getElementById('titularCasa5').classList.add('animaRotacao3RecepcaoCentral3');
                    document.getElementById('titularCasa6').classList.add('animaRotacao3RecepcaoLevantador4');
                    document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
                        document.getElementById("divBolaSaqueFora").style.display = 'none'; 
                        document.getElementById('titularCasa2').classList.remove('animaRotacao3RecepcaoLibero6');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao3RecepcaoOposto1');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao3RecepcaoPonteiro2');
                        document.getElementById('titularCasa5').classList.remove('animaRotacao3RecepcaoCentral3');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao3RecepcaoLevantador4');
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('setaReta5C').style.left = '100vw';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '4vh';                
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '50vh';                
                        document.getElementById('titularCasa4').style.left = '25vw';
                        document.getElementById('titularCasa4').style.top = '0vh';
                        document.getElementById('titularCasa5').style.left = '25.5vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        voltaRecepcaoAtaque('casa')
                    }, { once: true });
                    break;
                case 3:
                    document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
                    document.getElementById('titularCasa1').classList.add('animaRotacao4RecepcaoPonteiro1');
                    document.getElementById('titularCasa2').classList.add('animaRotacao4RecepcaoLibero5');
                    document.getElementById('titularCasa3').classList.add('animaRotacao4RecepcaoOposto6');
                    document.getElementById('titularCasa4').classList.add('animaRotacao4RecepcaoPonteiro2');
                    document.getElementById('titularCasa5').classList.add('animaRotacao4RecepcaoCentral2');
                    document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
                        document.getElementById("divBolaSaqueFora").style.display = 'none'; 
                        document.getElementById('titularCasa1').classList.remove('animaRotacao4RecepcaoPonteiro1');
                        document.getElementById('titularCasa2').classList.remove('animaRotacao4RecepcaoLibero5');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao4RecepcaoOposto6');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao4RecepcaoPonteiro2');
                        document.getElementById('titularCasa5').classList.remove('animaRotacao4RecepcaoCentral2');
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('setaReta5C').style.left = '100vw';
                        document.getElementById('titularCasa1').style.left = '25vw';
                        document.getElementById('titularCasa1').style.top = '0vh';
                        document.getElementById('titularCasa2').style.left = '14vw';
                        document.getElementById('titularCasa2').style.top = '4vh';                
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '50vh';                
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '25.5vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        voltaRecepcaoAtaque('casa')
                    }, { once: true });
                    break;
                case 4:
                    document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
                    document.getElementById('titularCasa1').classList.add('animaRotacao5RecepcaoPonteiro3');
                    document.getElementById('titularCasa2').classList.add('animaRotacao5RecepcaoCentral4');
                    document.getElementById('titularCasa3').classList.add('animaRotacao5RecepcaoOposto5');
                    document.getElementById('titularCasa5').classList.add('animaRotacao5RecepcaoLibero1');
                    document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
                        document.getElementById("divBolaSaqueFora").style.display = 'none'; 
                        document.getElementById('titularCasa1').classList.remove('animaRotacao5RecepcaoPonteiro3');
                        document.getElementById('titularCasa2').classList.remove('animaRotacao5RecepcaoCentral4');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao5RecepcaoOposto5');
                        document.getElementById('titularCasa5').classList.remove('animaRotacao5RecepcaoLibero1');
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('titularCasa1').style.left = '25vw';
                        document.getElementById('titularCasa1').style.top = '0vh';
                        document.getElementById('titularCasa2').style.left = '25.5vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '14vw';
                        document.getElementById('titularCasa5').style.top = '4vh';                
                        document.getElementById('titularCasa3').style.left = '14vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        voltaRecepcaoAtaque('casa')
                    }, { once: true });
                    break;
                case 5:
                    document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
                    document.getElementById('titularCasa1').classList.add('animaRotacao6RecepcaoPonteiro2');
                    document.getElementById('titularCasa2').classList.add('animaRotacao6RecepcaoCentral3');
                    document.getElementById('titularCasa4').classList.add('animaRotacao6RecepcaoPonteiro5');
                    document.getElementById('titularCasa5').classList.add('animaRotacao6RecepcaoLibero6');
                    document.getElementById('titularCasa6').classList.add('animaRotacao6RecepcaoLevantdor1');
                    document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
                        document.getElementById("divBolaSaqueFora").style.display = 'none'; 
                        document.getElementById('titularCasa1').classList.remove('animaRotacao6RecepcaoPonteiro2');
                        document.getElementById('titularCasa2').classList.remove('animaRotacao6RecepcaoCentral3');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao6RecepcaoPonteiro5');
                        document.getElementById('titularCasa5').classList.remove('animaRotacao6RecepcaoLibero6');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao6RecepcaoLevantdor1');
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('setaReta5C').style.left = '100vw';
                        document.getElementById('titularCasa1').style.left = '25vw';
                        document.getElementById('titularCasa1').style.top = '56vh';
                        document.getElementById('titularCasa2').style.left = '25.5vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa4').style.left = '6vw';
                        document.getElementById('titularCasa4').style.top = '27vh';
                        document.getElementById('titularCasa5').style.left = '14vw';
                        document.getElementById('titularCasa5').style.top = '4vh';                
                        document.getElementById('titularCasa6').style.left = '30.5vw';
                        document.getElementById('titularCasa6').style.top = '33vh';
                        voltaRecepcaoAtaque('casa')
                    }, { once: true });
                    break;
                case 0:
                    document.getElementById('divBolaSaqueFora').classList.add('animaBolaLevantador' + numeroAleatorio1a3);
                    document.getElementById('titularCasa1').classList.add('animaRotacao1RecepcaoPonteiro1');
                    document.getElementById('titularCasa2').classList.add('animaRotacao1RecepcaoCentral2');
                    document.getElementById('titularCasa3').classList.add('animaRotacao1RecepcaoOposto');
                    document.getElementById('titularCasa4').classList.add('animaRotacao1RecepcaoPonteiro2');
                    document.getElementById('titularCasa5').classList.add('animaRotacao1RecepcaoLibero');
                    document.getElementById('divBolaSaqueFora').addEventListener('animationend', function(){
                        document.getElementById('divBolaSaqueFora').classList.remove('animaBolaLevantador' + numeroAleatorio1a3);
                        document.getElementById('titularCasa1').classList.remove('animaRotacao1RecepcaoPonteiro1');
                        document.getElementById('titularCasa2').classList.remove('animaRotacao1RecepcaoCentral2');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao1RecepcaoOposto');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao1RecepcaoPonteiro2');
                        document.getElementById('titularCasa5').classList.remove('animaRotacao1RecepcaoLibero');
                        document.getElementById('setaReta1C').style.left = '100vw';
                        document.getElementById('setaReta2C').style.left = '100vw';
                        document.getElementById('setaReta3C').style.left = '100vw';
                        document.getElementById('setaReta4C').style.left = '100vw';
                        document.getElementById('setaReta5C').style.left = '100vw';
                        document.getElementById('titularCasa1').style.left = '14vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '25vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '25vw';
                        document.getElementById('titularCasa3').style.top = '56vh';
                        document.getElementById('titularCasa4').style.left = '25vw';
                        document.getElementById('titularCasa4').style.top = '2vh';
                        document.getElementById('titularCasa5').style.left = '14vw';
                        document.getElementById('titularCasa5').style.top = '4vh';
                        voltaRecepcaoAtaque('casa')
                    }, { once: true });
                    break;
            
                default:
                    break;
            }
            
        }
    } 
}

function voltaRecepcaoAtaque(time) {
    if (time == 'casa') {
        if (esquemaCasa == '5x1') {
            switch (rotacaoCasa) {
                case 1:;
                    document.getElementById('titularCasa5').classList.add('animaRotacao1RecepcaoCentralVolta');
                    document.getElementById('titularCasa3').classList.add('animaRotacao1RecepcaoOpostoVolta');
                    document.getElementById('titularCasa4').classList.add('animaRotacao1RecepcaoPonteiro4Volta');
                    document.getElementById('titularCasa6').classList.add('animaRotacao1RecepcaoLevantador');
                    document.getElementById('titularCasa6').addEventListener('animationend', function(){
                        document.getElementById('titularCasa5').classList.remove('animaRotacao1RecepcaoCentralVolta');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao1RecepcaoOpostoVolta');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao1RecepcaoPonteiro4Volta');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao1RecepcaoLevantador');
                        document.getElementById('titularCasa3').style.left = '36vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '36vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '36vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '14vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                    }, { once: true });
                    break;
                case 2:
                    document.getElementById('titularCasa5').classList.add('animaRotacao1RecepcaoCentralVolta');
                    document.getElementById('titularCasa4').classList.add('animaRotacao1RecepcaoPonteiro4Volta');
                    document.getElementById('titularCasa6').classList.add('animaRotacao3RecepcaoLevantadorVolta');
                    document.getElementById('titularCasa6').addEventListener('animationend', function(){
                        document.getElementById('titularCasa5').classList.remove('animaRotacao1RecepcaoCentralVolta');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao1RecepcaoPonteiro4Volta');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao3RecepcaoLevantadorVolta');

                        document.getElementById('titularCasa4').style.left = '36vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '36vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '36vw';
                        document.getElementById('titularCasa6').style.top = '50vh';        
                    }, { once: true });
                    break;
                case 3:
                    document.getElementById('titularCasa5').classList.add('animaRotacao1RecepcaoCentralVolta');
                    document.getElementById('titularCasa1').classList.add('animaRotacao1RecepcaoPonteiro4Volta');
                    document.getElementById('titularCasa6').classList.add('animaRotacao3RecepcaoLevantadorVolta');
                    document.getElementById('titularCasa6').addEventListener('animationend', function(){
                        document.getElementById('titularCasa5').classList.remove('animaRotacao1RecepcaoCentralVolta');
                        document.getElementById('titularCasa1').classList.remove('animaRotacao1RecepcaoPonteiro4Volta');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao3RecepcaoLevantadorVolta');

                        document.getElementById('titularCasa1').style.left = '36vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa5').style.left = '36vw';
                        document.getElementById('titularCasa5').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '36vw';
                        document.getElementById('titularCasa6').style.top = '50vh';        
                    }, { once: true });
                    break;
                case 4:
                    document.getElementById('titularCasa1').classList.add('animaRotacao1RecepcaoPonteiro4Volta');
                    document.getElementById('titularCasa2').classList.add('animaRotacao1RecepcaoCentralVolta');
                    document.getElementById('titularCasa6').classList.add('animaRotacao3RecepcaoLevantadorVolta');
                    document.getElementById('titularCasa6').addEventListener('animationend', function(){
                        document.getElementById('titularCasa1').classList.remove('animaRotacao1RecepcaoPonteiro4Volta');
                        document.getElementById('titularCasa2').classList.remove('animaRotacao1RecepcaoCentralVolta');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao3RecepcaoLevantadorVolta');

                        document.getElementById('titularCasa1').style.left = '36vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '36vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '36vw';
                        document.getElementById('titularCasa6').style.top = '50vh';        
                    }, { once: true });
                    break;
                case 5:
                    document.getElementById('titularCasa2').classList.add('animaRotacao1RecepcaoCentralVolta');
                    document.getElementById('titularCasa3').classList.add('animaRotacao6RecepcaoOposto4Volta');
                    document.getElementById('titularCasa1').classList.add('animaRotacao6RecepcaoPonteiro2Volta');
                    document.getElementById('titularCasa6').classList.add('animaRotacao1RecepcaoLevantador');
                    document.getElementById('titularCasa6').addEventListener('animationend', function(){
                        document.getElementById('titularCasa2').classList.remove('animaRotacao1RecepcaoCentralVolta');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao6RecepcaoOposto4Volta');
                        document.getElementById('titularCasa1').classList.remove('animaRotacao6RecepcaoPonteiro2Volta');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao1RecepcaoLevantador');
                        document.getElementById('titularCasa3').style.left = '36vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa1').style.left = '36vw';
                        document.getElementById('titularCasa1').style.top = '4vh';
                        document.getElementById('titularCasa2').style.left = '36vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa6').style.left = '14vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                    }, { once: true });
                    break;
                case 0:
                    document.getElementById('titularCasa1').classList.add('animaRotacao1RecepcaoPonteiro1Volta');
                    document.getElementById('titularCasa2').classList.add('animaRotacao1RecepcaoCentralVolta');
                    document.getElementById('titularCasa3').classList.add('animaRotacao1RecepcaoOpostoVolta');
                    document.getElementById('titularCasa4').classList.add('animaRotacao1RecepcaoPonteiro4Volta');
                    document.getElementById('titularCasa6').classList.add('animaRotacao1RecepcaoLevantador');
                    document.getElementById('titularCasa1').addEventListener('animationend', function(){
                        document.getElementById('titularCasa1').classList.remove('animaRotacao1RecepcaoPonteiro1Volta');
                        document.getElementById('titularCasa2').classList.remove('animaRotacao1RecepcaoCentralVolta');
                        document.getElementById('titularCasa3').classList.remove('animaRotacao1RecepcaoOpostoVolta');
                        document.getElementById('titularCasa4').classList.remove('animaRotacao1RecepcaoPonteiro4Volta');
                        document.getElementById('titularCasa6').classList.remove('animaRotacao1RecepcaoLevantador');
                        document.getElementById('titularCasa1').style.left = '4vw';
                        document.getElementById('titularCasa1').style.top = '27vh';
                        document.getElementById('titularCasa2').style.left = '36vw';
                        document.getElementById('titularCasa2').style.top = '27vh';
                        document.getElementById('titularCasa3').style.left = '36vw';
                        document.getElementById('titularCasa3').style.top = '50vh';
                        document.getElementById('titularCasa4').style.left = '36vw';
                        document.getElementById('titularCasa4').style.top = '4vh';
                        document.getElementById('titularCasa6').style.left = '14vw';
                        document.getElementById('titularCasa6').style.top = '50vh';
                    }, { once: true });
                    break;
            
                default:
                    break;
            }

        }
    }
}

function ladoInicial(time) {
    document.getElementById('escolhaLadoInicial').style.left = '1000vw';
    if (time == 'casa') {
        possedeBola = 'casa';
        if (esquemaCasa == "6x0") {
            document.getElementById('divBolaSaqueCasa').style.display = 'block';
            document.getElementById('divBolaSaqueFora').style.display = 'none';
            saqueC = true;
        } else if(esquemaCasa == '5x1'){
            document.getElementById('divBolaSaqueCasa').style.display = 'block';
            document.getElementById('divBolaSaqueFora').style.display = 'none';
            document.getElementById('titularCasa3').style.left = '27.5vw';
            document.getElementById('titularCasa3').style.top = '25vh';
            document.getElementById('titularCasa2').style.left = '36vw';
            document.getElementById('titularCasa2').style.top = '27vh';
            document.getElementById('titularCasa4').style.left = '36vw';
            document.getElementById('titularCasa4').style.top = '4vh';
            document.getElementById('titularCasa5').style.left = '14vw';
            document.getElementById('titularCasa5').style.top = '4vh';
            document.getElementById('titularCasa6').style.left = '14vw';
            document.getElementById('titularCasa6').style.top = '50vh';
            document.getElementById('setaReta1C').style.left = '14vw';
            document.getElementById('setaReta1C').style.top = '60vh';
            document.getElementById('setaReta1C').style.width = '100px';
            document.getElementById('setaReta1C').style.rotate = '-90deg';
            document.getElementById('setaReta2C').style.left = '38vw';
            document.getElementById('setaReta2C').style.top = '57vh';
            document.getElementById('setaReta2C').style.width = '100px';
            document.getElementById('setaReta2C').style.rotate = '-301deg';
            saqueC = true;
        } else{
            document.getElementById('divBolaSaqueCasa').style.display = 'block';
            document.getElementById('divBolaSaqueFora').style.display = 'none';
            saqueC = true;
        }
    } else if (time == 'fora') {
        possedeBola = 'fora';
        if(esquemaFora == '6x0'){
            document.getElementById('divBolaSaqueFora').style.display = 'block';
            document.getElementById('divBolaSaqueCasa').style.display = 'none';
            saqueF = true;  
        }else if(esquemaFora == '5x1'){
            document.getElementById('titularCasa5').style = '24vw';
            document.getElementById('divBolaSaqueFora').style.display = 'block';
            document.getElementById('divBolaSaqueCasa').style.display = 'none';
            saqueF = true;
        }else if(esquemaFora == '4x2'){
            document.getElementById('divBolaSaqueFora').style.display = 'block';
            document.getElementById('divBolaSaqueCasa').style.display = 'none';   
        }
        if (esquemaCasa == '5x1') {
            document.getElementById('setaReta1C').style.left = '27vw'
            document.getElementById('setaReta1C').style.top = '25vh'
            document.getElementById('setaReta1C').style.width = '100px'
            document.getElementById('setaReta1C').style.rotate = '-14deg'
            document.getElementById('setaReta2C').style.left = '34vw'
            document.getElementById('setaReta2C').style.top = '66vh'
            document.getElementById('setaReta2C').style.width = '100px'
            document.getElementById('setaReta2C').style.rotate = '-100deg'
            document.getElementById('setaReta3C').style.left = '40vw'
            document.getElementById('setaReta3C').style.top = '73vh'
            document.getElementById('setaReta3C').style.width = '100px'
            document.getElementById('setaReta3C').style.rotate = '150deg'
            document.getElementById('setaReta4C').style.left = '17vw'
            document.getElementById('setaReta4C').style.top = '38vh'
            document.getElementById('setaReta4C').style.width = '100px'
            document.getElementById('setaReta4C').style.rotate = '-60deg'
            document.getElementById('setaReta5C').style.left = '22vw'
            document.getElementById('setaReta5C').style.top = '60vh'
            document.getElementById('setaReta5C').style.width = '100px'
            document.getElementById('setaReta5C').style.rotate = '-90deg'
            document.getElementById('titularCasa6').style.left = '30.5vw';
            document.getElementById('titularCasa6').style.top = '33vh';
            document.getElementById("titularCasa4").style.left = "14vw";
            document.getElementById("titularCasa5").style.left = "6vw";
            document.getElementById("titularCasa5").style.top = "27vh";
            document.getElementById("titularCasa1").style.left = "14vw";
            document.getElementById("titularCasa3").style.left = "36vw";
            document.getElementById("titularCasa3").style.top = "47vh";
            document.getElementById("titularCasa2").style.left = "27vw";
            document.getElementById("titularCasa2").style.top = "56vh";
        } else if(esquemaCasa == '4x2'){
            document.getElementById('titularCasa4').style.left = '20.5vw';
            document.getElementById('titularCasa2').style.left = '20.5vw';
        }

    }
}

function vencedor() {
    if (pointCasa >= 25 && pointCasa - pointFora >= 2) {
        
    } else if (pointFora >= 25 && pointFora - pointCasa >= 2) {
        
    }
}

function voltar() {
    if (ptseqC == 1) {
        if (rotacaoCasa == 1) {
             rotacaoCasa = 6;
             pointFora--;
             document.getElementById('BSC').style.display = 'block';
             document.getElementById('BSF').style.display = 'none';
             document.getElementById('placarFora').innerText = pointFora;
             ptseqF--;
             posedeBolaF = false;
             posedeBolaC = true;
             rotacao('fora');
        } else{
            pointCasa--;
            rotacaoCasa = rotacaoCasa - 2;
            document.getElementById('BSF').style.display = 'block';
            document.getElementById('BSC').style.display = 'none';
            document.getElementById('placarCasa').innerText = pointCasa;
            ptseqC--;
            posedeBolaC = false;
            posedeBolaF = true;
            rotacao('casa');
        }
    } else if(ptseqF == 1){
        if (rotacaoFora == 1) {
            rotacaoCasa = 6;
            pointFora--;
            document.getElementById('BSC').style.display = 'block';
            document.getElementById('BSF').style.display = 'none';
            document.getElementById('placarFora').innerText = pointFora;
            ptseqF--;
            posedeBolaF = false;
            posedeBolaC = true;
            rotacao('fora');
        } else{
            pointFora--;
            rotacaoFora = rotacaoFora - 2;
            document.getElementById('BSC').style.display = 'block';
            document.getElementById('BSF').style.display = 'none';
            document.getElementById('placarFora').innerText = pointFora;
            ptseqF--;
            posedeBolaF = false;
            posedeBolaC = true;
            rotacao('fora');
        }
    } else if (ptseqC > 1) {
        pointCasa--;
        ptseqC--;
        document.getElementById('placarCasa').innerText = pointCasa;
    } else {
        pointFora--;
        ptseqF--;
        document.getElementById('placarFora').innerText = pointFora;
    }
}