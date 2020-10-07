const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee" ]

let i = 0 //counter for color array
//get nav links and assign colors
Array.from(document.querySelectorAll('.nav-link'))
.forEach(item => {
    item.style.cssText = `background-color: ${colors[i++]}`
});


const container = document.querySelector('.container'); //get container
//add events to icons
document.querySelector('.open-navbar-icon').addEventListener('click', () => { 
    container.classList.add('change');
});
document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
});


//get navigation btns and toggles change class to switch between front and back
Array.from(document.querySelectorAll('.navigation-btn'))
.forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change')
    };
});