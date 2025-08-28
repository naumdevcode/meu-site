const menu = document.querySelector('.menu-button-menu')
const botao = document.querySelector('#botao')

function clickmenu() {
    if (botao.classList.contains('animacao-x')){
        botao.classList.remove('animacao-x')
        botao.classList.add('animacao')
    }else{
        botao.classList.remove('animacao')
        botao.classList.add('animacao-x')
    }
    if (menu.style.display == 'block'){
        menu.classList.remove('menu-in')
        menu.classList.add('menu-out')
        setTimeout(() => {
            menu.style.display = 'none'
        }, 1000);
    } else{
        menu.style.display = 'block'
        menu.classList.remove('menu-out')
        menu.classList.add('menu-in')
    }
        
}

document.getElementById('current-year').textContent = new Date().getFullYear();

/*const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX;
let scrollLeft;

// Eventos para capturar o clique e o movimento do mouse
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    carousel.classList.add('active'); // Adiciona estilo visual ao arrastar
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1; // Controle da velocidade do movimento
    carousel.scrollLeft = scrollLeft - walk;
});*/