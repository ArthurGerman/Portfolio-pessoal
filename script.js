'use strict'
const switcher = document.querySelector("#btn");
const icon = switcher.querySelector('span');

switcher.addEventListener('click', function() {
    document.body.classList.toggle("tema_escuro");
    icon.classList.remove('light_mode');
    icon.classList.remove('dark_mode');
    if (document.body.classList.contains("tema_escuro")) {
        icon.innerText = "light_mode";
    } else {
        icon.innerText = "dark_mode";
    }
});