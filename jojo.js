// this code runs immediately as the jojo.html file is loaded!
if (sessionStorage.getItem("clickedCharacter") == "john") {
  console.log("John was clicked on the other page!");
  document.getElementById("jo1").classList.remove("none");
  document.title = "Part 1";
  document.getElementById("setting").classList.add("bg");
  document.getElementById("title").classList.remove("none");
  document.getElementById("gif").classList.remove("none");
  document.getElementById("info").classList.remove("none");

  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  
  const voices = [
    "sounds/sunlight.mp3",
    "sounds/metal_silver_overdrive.mp3",
    "sounds/john_dare_u.mp3",
  ];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("jo1");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });

  const songSequence = ["sounds/op1.mp3", "sounds/heroic.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "DioB") {
  console.log("Dio Brando was clicked on the other page!");
  document.title = "Part 1";
  document.getElementById("info7").classList.remove("none");
  document.getElementById("gif").classList.remove("none");
  document.getElementById("setting").classList.add("bg");
  document.getElementById("title").classList.remove("none");
  document.getElementById("dio").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/konodioda.mp3",
    "sounds/bread.mp3",
    "sounds/byejojo.mp3",
  ];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("dio");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/diobtheme.mp3", "sounds/DIOtheme.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 1; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "joseph") {
  console.log("Joseph was clicked on the other page!");
  document.title = "Part 2";
  document.getElementById("info2").classList.remove("none");
  document.getElementById("gif2").classList.remove("none");
  document.getElementById("title2").classList.remove("none");
  document.getElementById("jo2").classList.remove("none");
  document.getElementById("setting").classList.add("bg2");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/you're it!.mp3",
    "sounds/nicee.mp3",
    "sounds/OHMYGOD.mp3",
  ];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("jo2");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/op2.mp3", "sounds/overdrive.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "Kars") {
  console.log("Kars was clicked on the other page!");
  document.title = "Part 2";
  document.getElementById("info8").classList.remove("none");
  document.getElementById("setting").classList.add("bg2");
  document.getElementById("gif9").classList.remove("none");
  document.getElementById("title2").classList.remove("none");
  document.getElementById("kar").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/evil_laugh.mp3",
    "sounds/guitar.mp3",
    "sounds/scream.mp3",
  ];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("kar");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/avalon.mp3", "sounds/pillar_theme.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "jotaro") {
  console.log("Jotaro was clicked on the other page!");
  document.title = "Part 3";
  document.getElementById("info3").classList.remove("none");
  document.getElementById("gif3").classList.remove("none");
  document.getElementById("title3").classList.remove("none");
  document.getElementById("setting").classList.add("bg3");
  document.getElementById("jo3").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = ["sounds/jailed.mp3", "sounds/yareyare.mp3", "sounds/ORA.mp3"];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("jo3");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/op3.mp3", "sounds/proud_stand.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "DIO") {
  console.log("DIO was clicked on the other page!");
  document.title = "Part 3";
  document.getElementById("info9").classList.remove("none");
  document.getElementById("setting").classList.add("bg8");
  document.getElementById("title3").classList.remove("none");
  document.getElementById("gif8").classList.remove("none");
  document.getElementById("DIO").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = ["sounds/MUDA.mp3", "sounds/WRYY.mp3", "sounds/ZAWARUDO.mp3"];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("DIO");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/DIOtheme.mp3", "sounds/diobtheme.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 1; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "josuke") {
  console.log("Joseph was clicked on the other page!");
  document.title = "Part 4";
  document.getElementById("gif4").classList.remove("none");
  document.getElementById("jo4").classList.remove("none");
  document.getElementById("title4").classList.remove("none");
  document.getElementById("setting").classList.add("bg4");
  document.getElementById("info4").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = ["sounds/DORA.mp3", "sounds/hair.mp3", "sounds/CRAZYD.mp3"];
  let Index = 0;
  let currentAudio = null;
  const img = document.getElementById("jo4");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = [
    "sounds/diamond.mp3",
    "sounds/op4.mp3",
    "sounds/CHASE.mp3",
  ];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 2; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "Kira") {
  console.log("Yoshikage Kira was clicked on the other page!");
  document.title = "Part 4";
  document.getElementById("info10").classList.remove("none");
  document.getElementById("setting").classList.add("bg4");
  document.getElementById("gif4").classList.remove("none");
  document.getElementById("title4").classList.remove("none");
  document.getElementById("yoshi").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/kira_yoshi.mp3",
    "sounds/doorknob.mp3",
    "sounds/btd.mp3",
  ];
  let currentAudio = null;
  let Index = 0;
  const img = document.getElementById("yoshi");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/days.mp3", "sounds/killer.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 0.5;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "gio") {
  console.log("Giorno was clicked on the other page!");
  document.title = "Part 5";
  document.getElementById("info5").classList.remove("none");
  document.getElementById("gif5").classList.remove("none");
  document.getElementById("jo5").classList.remove("none");
  document.getElementById("setting").classList.add("bg5");
  document.getElementById("title5").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = ["sounds/ciao.mp3", "sounds/GE.mp3", "sounds/mudagio.mp3"];
  let currentAudio = null;
  let Index = 0;
  const img = document.getElementById("jo5");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });

  const songSequence = ["sounds/op5.mp3", "sounds/golden_wind.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "Diavolo") {
  console.log("Diavolo was clicked on the other page!");
  document.getElementById("setting").classList.add("bg9");
  document.title = "Part 5";
  document.getElementById("info11").classList.remove("none");
  document.getElementById("setting").classList.add("bg5");
  document.getElementById("title5").classList.remove("none");
  document.getElementById("gif5").classList.remove("none");
  document.getElementById("doppio").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/ringtone.mp3",
    "sounds/diavolo_laugh.mp3",
    "sounds/KC.mp3",
  ];
  let currentAudio = null;
  let Index = 0;
  const img = document.getElementById("doppio");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/traitor.mp3", "sounds/Diavolotheme.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "jolyne") {
  console.log("Jolyne was clicked on the other page!");
  document.title = "Part 6";
  document.getElementById("jo6").classList.remove("none");
  document.getElementById("gif6").classList.remove("none");
  document.getElementById("info6").classList.remove("none");
  document.getElementById("title6").classList.remove("none");
  document.getElementById("setting").classList.add("bg6");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/commission.mp3",
    "sounds/SO.mp3",
    "sounds/orajolyne.mp3",
  ];
  let currentAudio = null;
  let Index = 0;
  const img = document.getElementById("jo6");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/op6.mp3", "sounds/stone_ocean.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else if (sessionStorage.getItem("clickedCharacter") == "Pucci") {
  console.log("Pucci was clicked on the other page!");
  document.title = "Part 6";
  document.getElementById("info12").classList.remove("none");
  document.getElementById("gif7").classList.remove("none");
  document.getElementById("setting").classList.add("bg7");
  document.getElementById("title6").classList.remove("none");
  document.getElementById("priest").classList.remove("none");
  function backButton() {
    window.location.href = "https://4glsk7.csb.app/";
    document.title = "A Bizarre Site";
  }
  const voices = [
    "sounds/inheaven.mp3",
    "sounds/duty.mp3",
    "sounds/sandwich.mp3",
  ];
  let currentAudio = null;
  let Index = 0;
  const img = document.getElementById("priest");
  img.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(voices[Index]);
    currentAudio.play();
    Index++;
    if (Index >= voices.length) {
      Index = 0;
    }
  });
  const songSequence = ["sounds/destiny.mp3", "sounds/Puccitheme.mp3"];
  // Select the image element
  let bgMusic = new Audio();
  bgMusic.loop = true; // Loop enabled
  bgMusic.volume = 1.0;

  let index = 0; // Start at first song

  // 3. Start music only after first click anywhere
  function startMusic() {
    bgMusic.src = songSequence[index];
    bgMusic.play();
    document.removeEventListener("click", startMusic);
  }
  // document.addEventListener("click", startMusic);

  document.getElementById("audio2").addEventListener("click", () => {
    index++;

    if (index >= songSequence.length) index = 0;

    bgMusic.src = songSequence[index];
    bgMusic.play();
  });
} else {
  console.log("neither John nor Jojo was clicked on the other page!");
}

const sequences = {
  dio: ["images/DioB.WEBP", "images/DIO.PNG"],
  DIO: ["images/DIO.PNG", "images/DioB.WEBP", "images/warudo.png"],
  jo2: ["images/Subject.png", "images/Joseph3.PNG", "images/Joseph4.WEBP"],
  jo3: ["images/jotaro.png", "images/Jotaro4.WEBP", "images/Jotaro6.PNG"],
  yoshi: ["images/kira2.png", "images/kosaku.png", "images/bitesDust.png"],
  doppio: ["images/diavolo.png", "images/Doppio.png"],
  priest: ["images/pucci.png", "images/MIH.png"],
  jo6: ["images/Jolyne.png", "images/stoneFree.png"],
  kar: [
    "images/Kars_Undercover.webp",
    "images/Kars.WEBP",
    "images/Kars_UltimateLifeform.webp",
  ],
  jo4: ["images/josuke.png", "images/crazy.png"],
  jo5: ["images/giogio.PNG", "images/requiem.webp"],
  jo1: ["images/Jojo.png", "images/youngJOJO.png"],
};
// Select the image element
for (let id in sequences) {
  const img = document.getElementById(id);
  const imgs = sequences[id];
  let index = 0;

  img.addEventListener("click", () => {
    index++;
    if (index >= imgs.length) index = 0;
    img.src = imgs[index];
  });
}
