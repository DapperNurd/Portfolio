// const root = document.querySelector(':root');

// set css variable
// root.style.setProperty('--circle_color', '0, 0, 255');

// var circles = document.querySelectorAll(".ball");

var running = false;

window.transitionPage = function(div, fadeBG) {
    var element = document.querySelector(".active");
    console.log(element);
    var bg = document.getElementById('content');
    bg.style.background = div != 'projects' ? 'rgba(0,0,0,0' : 'rgba(0,0,0,0.8)';
    element.classList.remove('active');
    document.querySelector('.' + div).classList.add('active');
}

document.addEventListener("mousedown", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const colorShiftTimeMS = 750;

    if(e.target.className.includes("button")) {
        return;
    }
    
    if(running) return;
    running = true;


    var expandingBall = document.getElementById('ball_mouse_static');
    var mouseBall = document.getElementById('ball_mouse');
    expandingBall.style.width = `0px`;
    expandingBall.style.height = `0px`;
    expandingBall.style.top = `${mouseY}px`;
    expandingBall.style.left = `${mouseX}px`;
    expandingBall.style.display = 'block';

    expandingBall.animate(
        [
        // keyframes
            { 
                width: "250vw", 
                height: "250vw", 
                marginLeft: `-0px`,
                top: `calc(${mouseY}px - 125vw)`,
                left: `calc(${mouseX}px - 125vw)`
            },
        ],
        {
            // timing options
            duration: colorShiftTimeMS,
            easing: "ease-in",
            iterations: 1,
        }
    );

    setTimeout(() => {
        var filter = document.querySelectorAll("feColorMatrix")[1];
        filter.setAttribute("values", parseInt(filter.getAttribute("values")) + 50);
        expandingBall.style.display = 'none';
        running = false;
    }, colorShiftTimeMS)
    
});

const mouseBall = document.getElementById("ball_mouse");
if(mouseBall) {
    // console.log("HELLO??")
    document.addEventListener("mousemove", (e) => {
        mouseBall.style.top = `${e.clientY - mouseBall.offsetHeight/2}px`;
        mouseBall.style.left = `${e.clientX - mouseBall.offsetWidth/2}px`;
    });
}

// clearInterval();

// console.log();

function GetRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}