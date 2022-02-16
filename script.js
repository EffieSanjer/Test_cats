function mobMenuOpen() {
    menu = document.getElementById("mobmenu");
    menu.classList.add("show");
}
function mobMenuClose() {
    menu = document.getElementById("mobmenu");
    menu.classList.remove("show");
}


function scrollUp() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });     
}

button = document.querySelector(".scroll-up");
window.addEventListener('scroll', function() {
    if(window.scrollY >= (window.innerHeight / 4))
        button.classList.add("show");
    else
        button.classList.remove("show");

});

// flag = false;
function addToFavourite(heart){
    div = document.querySelector(".add-like");
    if (heart.dataset.flag == "false")
    {
        heart.style.opacity = "1";
        heart.dataset.flag = "true";
        div.innerHTML = "Добавлено в Избранное";
        div.classList.add("show");
        setTimeout(function() { 
            div.classList.remove("show")}, 2000);
    }
    else
    {
        heart.style.opacity = "";
        heart.dataset.flag = "false";
        div.innerHTML = "Удалено из Избранного";
        div.classList.add("show");
        setTimeout(function() { 
            div.classList.remove("show")}, 2000);
    }
}