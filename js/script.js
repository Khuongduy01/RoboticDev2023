function handleMenu() {
    var menu = document.getElementById("dropdown")
    var menuBtn = document.querySelector('.header-bars i')
    menu.classList.toggle("show");
    if (menu.classList.contains('show')){
        menu.style.display = 'block'
        menuBtn.classList.remove('fa-bars')
        menuBtn.classList.add('fa-x')  
    } else {
        menu.style.display = 'none'
        menuBtn.classList.remove('fa-x')
        menuBtn.classList.add('fa-bars')  
    }
}