function gerarDica() {
    const palavra = document.getElementById('palavra-chave').value.toUpperCase();
    const dicaElement = document.getElementById('dica');
    const imagemElement = document.getElementById('imagem');

    // Dicas baseadas nas palavras-chave
    const dicas = {
        "CARTA": "A proxima Dica se encontra no lugar que guarda sua bebida favorita.",
        "LEITE": "Pega o Pombo, Pega!",
        "THUNDER": "A proxima está com uma pessoa Amada.",
        "Mamãe": "Onde fica o bicho Papão?",
    };

    // Verifica se a palavra-chave existe no objeto de dicas
    if (dicas[palavra]) {
        dicaElement.textContent = dicas[palavra];
        imagemElement.src = "img/caixa.png"; // Aqui você pode adicionar a imagem do presente, se desejar
    } else {
        dicaElement.textContent = "Palavra-chave não encontrada. Tente novamente!";
        imagemElement.src = "img/caixa.png"; // Imagem padrão quando a palavra não é encontrada
    }
}
