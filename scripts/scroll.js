function scrollElement(scroll) {
    var element = document.getElementById(scroll);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });

    // Atualiza a classe ativa do link correspondente ao elemento
    updateActiveLink(scroll);
}

function updateActiveLink(scroll) {
    const navlinks = document.querySelectorAll('.nav__link');
    navlinks.forEach(navlinkEL => {
        // Remove a classe ativa de todos os links
        navlinkEL.classList.remove('active');

        // Verifica se o href do link corresponde ao ID do elemento de rolagem
        if (navlinkEL.getAttribute('data-section') === scroll) {
            navlinkEL.classList.add('active');
        }
    });
}

