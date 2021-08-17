// TESTING 1



// const buttonOne = document.getElementById('1')
// console.log(buttonOne.id)
// const soundOne = new Audio('./audio.one.mp3')

// buttonOne.addEventListener('click', () => soundOne.play())

// function playOne() {
//     const audio = document.getElementById("1");
//     audio.play();
// }

// function playTwo() {
//     const audio = document.getElementById("2");
//     audio.play();
// }

// function playThree() {
//     const audio = document.getElementById("3");
//     audio.play();
// }

// function playFour() {
//     const audio = document.getElementById("4");
//     audio.play();
// }  

// function playFive() {
//     const audio = document.getElementById("5");
//     audio.play();
// }

// function playSix() {
//     const audio = document.getElementById("6");
//     audio.play();
// } 

const fileList = {
    one: "./audio/one.mp3",
    two: "./audio/two.mp3",
    three: "./audio/three.mp3",
    four: "./audio/four.mp3",
    five: "./audio/five.mp3",
    six: "./audio/six.mp3",
    seven: "",
    eight: "",
    nine: "",
}

const playAudio = (fileName) => {
    new Audio(fileName).play()
}

const buildButtons = () => {
    Object.keys(fileList).forEach((soundName, index) => {
        const fileName = fileList[soundName];
        const button = document.createElement('button');
        button.classList.add('btn');
        button.onclick = () => playAudio(fileName);
        button.innerText = soundName;
        document.getElementById('btn-container').appendChild(button)
    })
}

window.onload = buildButtons;