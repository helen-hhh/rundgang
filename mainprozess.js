function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

let mood = [
    "#FFF0DC",
    "#0734BB",
    "#3969F8",
    "#89A6FB",
    "#BA89FA",
    "#F489FA"
];

const montag = [3, 3, 0, 5, 4, 3, 0, 0, 0, 0, 2, 5];
const dienstag = [3, 3, 0, 2, 2, 2, 4, 0, 3, 3, 1, 1];
const mittwoch = [3, 4, 1, 0, 2, 4, 1, 0, 0, 0, 0, 0];
const donnerstag = [2, 3, 1, 0, 3, 2, 1, 4, 0, 5, 2, 5];
const freitag = [3, 2, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0];

const days = [montag, dienstag, mittwoch, donnerstag, freitag];
const colours = [];
const slider = document.getElementById("myRange");
const days_element = document.getElementById("days");
const children = days_element.children;

color();

slider.oninput = () => {
    color();
};

function color() {
    const day = days[slider.value];
    for (let i = 0; i < 12; i++) {
        console.log(day);
        children[i].style.backgroundColor = mood[day[i]];
    }
}


