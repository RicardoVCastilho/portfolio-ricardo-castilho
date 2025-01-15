const header = document.querySelector('header');

// Função para verificar a rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});

// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para exibir ou esconder o botão dependendo da rolagem
window.onscroll = function() {
    const button = document.getElementById('scrollToTopBtn');
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
};

