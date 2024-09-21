
    // Gera um número aleatório entre 0 e 100
    let numeroAleatorio = Math.floor(Math.random() * 101);
    let tentativas = 0;
    const maxTentativas = 10; // Número máximo de tentativas

    function verificar() {
        // Obtém o valor digitado pelo jogador
        let entrada = document.querySelector("input").value;
        let numeroDigitado = parseInt(entrada);

        // Verifica se o valor digitado é um número válido
        if (isNaN(numeroDigitado) || numeroDigitado < 0 || numeroDigitado > 100) {
            alert("Por favor, insira um número válido entre 0 e 100.");
            return;
        }

        tentativas++;

        // Atualiza as tentativas no HTML no formato "Tentativas X de 10"
        document.getElementById("contador").innerText = `${tentativas} de ${maxTentativas}`;

        let mensagem = document.getElementById("mensagem");

        if (numeroDigitado === numeroAleatorio) {
            // Jogador acertou
            alert(`Parabéns! Você acertou o número ${numeroAleatorio} na tentativa ${tentativas}.`);
            reiniciarJogo(); // Reinicia o jogo
        } else if (tentativas === maxTentativas) {
            // Jogador perdeu
            alert("Você perdeu! Tente na próxima vez.");
            reiniciarJogo(); // Reinicia o jogo
        } else if (numeroDigitado < numeroAleatorio) {
            mensagem.innerText = "O número é mais alto.";
        } else {
            mensagem.innerText = "O número é mais baixo.";
        }
    }

    function reiniciarJogo() {
        // Reinicia o jogo
        numeroAleatorio = Math.floor(Math.random() * 101);
        tentativas = 0;
        document.getElementById("contador").innerText = `${tentativas} de ${maxTentativas}`;
        document.getElementById("mensagem").innerText = "";
        document.querySelector("input").value = ""; // Limpa o input
    }

