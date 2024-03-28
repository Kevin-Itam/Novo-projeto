// function scrollElement(scroll) {
//     var element = document.getElementById(scroll);
//     element.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

//     // Atualiza a classe ativa do link correspondente ao elemento
//     const navlinks = document.querySelectorAll('.nav__link');
//     navlinks.forEach(navlinkEL => {
//         // Remove a classe ativa de todos os links
//         navlinkEL.classList.remove('active');

//         // Verifica se o href do link corresponde ao ID do elemento de rolagem
//         if (navlinkEL.getAttribute('href') === `#${scroll}`) {
//             navlinkEL.classList.add('active');
//         }
//     });
// }
function scrollElement(scroll) {
    var element = document.getElementById(scroll);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

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

// Adiciona um ouvinte de evento de rolagem ao documento
document.addEventListener('scroll', function() {
    // Obtém a seção atualmente visível
    const visibleSectionId = getCurrentSectionId();
    
    // Atualiza a classe ativa do link correspondente à seção visível
    updateActiveLink(visibleSectionId);
});

// Função para obter o ID da seção atualmente visível
function getCurrentSectionId() {
    let currentSectionId = null;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const paddingTop = parseFloat(getComputedStyle(section).paddingTop);
        const sectionTop = rect.top - paddingTop; // Ajuste para levar em conta o padding

        if (sectionTop <= window.innerHeight && rect.bottom >= 0) {
            currentSectionId = section.id;
        }
    });

    return currentSectionId;
}
