var links = document.getElementById('nav-links') // MENU HAMBURGUER
links.style.display = 'none'
function navlinks() {
    if (links.style.display == 'none'){
        links.style.display = 'block'
        links.classList.add('animar-entrada')
    }else{
        links.style.display = 'none'
        links.classList.remove('animar-entrada')
    }

}

document.getElementById('ano').textContent = new Date().getFullYear(); // ANO ATUAL