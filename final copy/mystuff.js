/*first JS thing I made
inspired by W3 School*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

/*second JS thing I made*/
const spin = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const spinTime = {
    duration: 2000,
    iterations: 1,
}

const spins = document.querySelector(".spin");

spins.addEventListener('click', () => {
    spins.animate(spin,spinTime);
});

/*third JS thing I made
on certain titles you can change color if clicked on*/
function myFunctions(element, color) {
    element.style.color = color;
}

