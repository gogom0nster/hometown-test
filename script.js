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

  // 🔥 배열 섞기 (Fisher-Yates Shuffle)
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  // 격자에 필요한 개수만 사용 (예: 9칸)
  const gridSize = 9;

  for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    const imageUrl = images[i]; // 🔥 중복 없음

    cell.style.width = "150px";
    cell.style.height = "150px";
    cell.style.backgroundImage = `url(${imageUrl})`;
    cell.style.backgroundSize = "cover";
    cell.style.backgroundPosition = "center";
    cell.style.cursor = "pointer";

    cell.addEventListener("click", function () {
      alert(`선택한 이미지: ${imageUrl}`);
    });

    grid.appendChild(cell);
  }

});
