console.log ('Somos Grupo 8');

let ham = document.getElementById("ham");
let nav = document.getElementById("nav");

ham.addEventListener('click', () => toggle());

function toggle() {
    if (window.innerWidth <= 430) {
        let computedStyle = window.getComputedStyle(nav);
        if (computedStyle.right === "-214px") {
            nav.style.right = "0px";
        } else {
            nav.style.right = "-214px";
        }
    }
}
