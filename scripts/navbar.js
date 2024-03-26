function toggleElement(toggle) {
    let trade = document.getElementById(toggle);
    trade.style.transition = 'opacity 0.3s, visibility 0.3s';
    trade.style.opacity = '1';
    trade.style.visibility = 'visible';

    // Adiciona um ouvinte de evento de clique ao documento inteiro
    document.addEventListener('click', function(event) {
        // Verifica se o clique não ocorreu dentro do elemento com o ID fornecido
        if (event.target.closest(`#${toggle}`)) {
            // Se o clique ocorreu fora do elemento, oculta-o novamente
            trade.style.opacity = '0';
            trade.style.visibility = 'hidden';
        }
    });
}
