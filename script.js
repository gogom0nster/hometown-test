document.addEventListener("DOMContentLoaded", function () {

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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateProgress() {
    progress.innerHTML = `<h3> ${currentRound} / ${maxRounds}</h3>`;
  }

  function createGrid() {
    grid.innerHTML = "";

    if (currentRound >= maxRounds) {
      progress.innerHTML = "<h2>선택이 완료되었습니다.</h2>";
      return;
    }

    currentRound++;
    updateProgress();

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
        createGrid();
      });

      grid.appendChild(cell);
    }
  }

  createGrid();

});
