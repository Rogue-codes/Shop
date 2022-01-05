const menu = document.getElementById('menu')
const nav = document.getElementById('navbar')
const closeBtn = document.getElementById('close')

if(menu){
    menu.addEventListener('click', () => {
        nav.classList.add('activate')
    })
}


if(closeBtn){
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('activate')
    })
}
