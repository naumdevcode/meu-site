function navlinks() {
    var links = document.getElementById('nav-links')
    if (links.style.display == 'none'){
        links.style.display = 'block'
        links.classList.add('animar-entrada')
    }else{
        links.style.display = 'none'
        links.classList.remove('animar-entrada')
    }

}

document.getElementById('ano').textContent = new Date().getFullYear();