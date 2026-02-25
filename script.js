import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {

  // 🔥 Firebase 설정
  const firebaseConfig = {
    apiKey: "AIzaSyAcgpImd4xQQrXjsdeUtISiI0blO6qHNhQ",
    authDomain: "hometown-data.firebaseapp.com",
    projectId: "hometown-data",
    storageBucket: "hometown-data.firebasestorage.app",
    messagingSenderId: "427121820704",
    appId: "1:427121820704:web:ae205795fbcac3e713e845",
    measurementId: "G-3WQWD0BW3F"
  };

  // 🔥 Firebase 초기화
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const grid = document.getElementById("grid");
  const progress = document.getElementById("progress");

  const images = [
    "./images/img1.png",
    "./images/img2.png",
    "./images/img3.png",
    "./images/img4.png",
    "./images/img5.png",
    "./images/img6.png",
    "./images/img7.png",
    "./images/img8.png",
    "./images/img9.png",
    "./images/img10.png"
  ];

  let currentRound = 0;
  const maxRounds = 5;
  let selections = [];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateProgress() {
    progress.innerHTML = `<h3>${currentRound} / ${maxRounds}</h3>`;
  }

  async function saveData() {
    try {
      await addDoc(collection(db, "results"), {
        selections: selections,
        timestamp: new Date()
      });

      progress.innerHTML = "<h2>저장 완료!</h2>";
      grid.innerHTML = ""; // 🔥 선택 못 하게 비움
      console.log("저장 성공");

    } catch (error) {
      console.error("저장 실패:", error);
    }
  }

  function createGrid() {

    if (currentRound >= maxRounds) {
      return; // 🔥 5번 이후 실행 차단
    }

    grid.innerHTML = "";

    const shuffledImages = [...images];
    shuffle(shuffledImages);

    const gridSize = 9;

    for (let i = 0; i < gridSize; i++) {

      const cell = document.createElement("div");
      const imageUrl = shuffledImages[i];

      cell.style.width = "150px";
      cell.style.height = "150px";
      cell.style.backgroundImage = `url(${imageUrl})`;
      cell.style.backgroundSize = "cover";
      cell.style.backgroundPosition = "center";
      cell.style.cursor = "pointer";

      cell.addEventListener("click", function () {

        if (currentRound >= maxRounds) return;

        selections.push(imageUrl);
        currentRound++;
        updateProgress();

        if (currentRound >= maxRounds) {
          saveData();
        } else {
          createGrid();
        }

      });

      grid.appendChild(cell);
    }
  }

  updateProgress();
  createGrid();

});
