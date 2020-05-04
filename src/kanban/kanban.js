let menuButton = document.querySelector('.header_account'),
    menuArrow = document.querySelector('.header_account_arrow');

let menu = document.createElement('nav');

menuButton.onclick = function () {
    if (menuArrow.classList.contains("header_account_menu")) {
        menu.parentElement.removeChild(menu);
    } else {
        menu.classList.add("menu");
        menu.innerHTML = '<button class="menu_button">My account</button><button class="menu_button">My tasks</button><button class="menu_button">Options</button><button class="menu_button">Information</button><button class="menu_button">Log out</button>';

        document.body.append(menu);
    }
    menuArrow.classList.toggle("header_account_menu");
};