// use variables to make your code shorter
var j1;
var j2;
var j3;
var j4;
let currentAudio = null;

document.querySelectorAll(".chara").forEach((img) => {
  const audioFile = img.getAttribute("data-audio");

  img.addEventListener("mouseenter", () => {
    playAssociatedAudio(img);
  }); // Hover play
});
function playAssociatedAudio(img) {
  // stop currently playing sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  let audioSource = null;
  if ((showingOld = showingOld)) {
    audioSource = img.getAttribute("data-audio");
  } else {
    audioSource = img.getAttribute("data-new");
  }
  // Create new audio and play it
  currentAudio = new Audio(audioSource);
  currentAudio.play();
}
// declare your functions
function firstJo() {
  if ((showingOld = showingOld)) {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "john");
  } else {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "DioB");
  }
}

function secondJo() {
  if ((showingOld = showingOld)) {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "joseph");
  } else {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "Kars");
  }
}

function thirdJo() {
  if ((showingOld = showingOld)) {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "jotaro");
  } else {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "DIO");
  }
}

function fourthJo() {
  if ((showingOld = showingOld)) {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "josuke");
  } else {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "Kira");
  }
}
function fifthGio() {
  if ((showingOld = showingOld)) {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "gio");
  } else {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "Diavolo");
  }
}

function sixthJo() {
  if ((showingOld = showingOld)) {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "jolyne");
  } else {
    window.location.replace("jojo.html");
    sessionStorage.setItem("clickedCharacter", "Pucci");
  }
}

//https://www.w3schools.com/jsref/met_audio_play.asp
function playSong() {}

let showingOld = true; // this keeps track of which set is showing

const oldImages = [
  "images/standingJojo.webp",
  "images/Subject.png",
  "images/standKujo.webp",
  "images/josuke.png",
  "images/stoodGio.webp",
  "images/Jolyne.png",
];

const newImages = [
  "images/DioB.WEBP",
  "images/Kars_Undercover.webp",
  "images/DIO.PNG",
  "images/yoshiK.webp",
  "images/diaStand.webp",
  "images/pucci.png",
];

function showVillains() {
  // select all images you want to swap
  const imgs = document.querySelectorAll(".swap");

  // choose which set to use
  const useThisSet = showingOld ? newImages : oldImages;

  // replace all of them
  imgs.forEach((img, i) => {
    img.src = useThisSet[i];
  });

  // flip the toggle for next time
  showingOld = !showingOld;
}

const songSequence = [
  "sounds/op1.mp3",
  "sounds/op2.mp3",
  "sounds/op3.mp3",
  "sounds/op4.mp3",
  "sounds/op5.mp3",
  "sounds/op6.mp3",
];
// Select the image element
let bgMusic = new Audio();
bgMusic.loop = true; // Loop enabled
bgMusic.volume = 1.0;

let index = 5; // Start at first song

// 3. Start music only after first click anywhere
function startMusic() {
  bgMusic.src = songSequence[index];
  bgMusic.play();
  // document.removeEventListener("click", startMusic);
}
// document.addEventListener("click", startMusic);

document.getElementById("audio").addEventListener("click", () => {
  index++;

  if (index >= songSequence.length) index = 0;

  bgMusic.src = songSequence[index];
  bgMusic.play();
});
