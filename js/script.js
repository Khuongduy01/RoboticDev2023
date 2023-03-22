
var btnMenu= document.querySelector('.header-bars');

btnMenu.addEventListener("click", btnMenu1);

function btnMenu1(e) {
    var menu = document.querySelector('.header-menu')
    
    if (menu.classList.contains('open')){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block'
    }
    menu.classList.toggle('open')
    this.classList.toggle('open')
}





