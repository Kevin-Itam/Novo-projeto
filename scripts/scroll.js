const navlinks = document.querySelectorAll('.nav__link');

navlinks.forEach(navlinkEL => {
    navlinkEL.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navlinkEL.classList.add('active');
    });
});

function scrollElement(scroll) {
    var element = document.getElementById(scroll);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

};
