document.addEventListener("DOMContentLoaded", function () {

  const grid = document.getElementById("grid");

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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function createGrid() {
    grid.innerHTML = ""; // 🔥 기존 격자 삭제

    if (currentRound >= maxRounds) {
      grid.innerHTML = "<h2>선택이 완료되었습니다.</h2>";
      return;
    }

    currentRound++;

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
        console.log("선택:", imageUrl);
        createGrid(); // 🔥 클릭하면 다음 라운드
      });

      grid.appendChild(cell);
    }
  }

  createGrid(); // 🔥 첫 시작

});
