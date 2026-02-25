document.addEventListener("DOMContentLoaded", function () {

  const grid = document.getElementById("grid");

  const images = [
    "./images/img1.png",
    "./images/img2.png",
    "./images/img3.png",
    "./images/img4.png",
    "./images/img5.png"
  ];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];

    cell.style.width = "150px";
    cell.style.height = "150px";
    cell.style.backgroundImage = `url(${imageUrl})`;
    cell.style.backgroundSize = "cover";
    cell.style.backgroundPosition = "center";
    cell.style.cursor = "pointer";

    cell.addEventListener("click", function () {
      console.log("선택된 이미지:", imageUrl);
      alert(`선택한 이미지: ${imageUrl}`);
    });

    grid.appendChild(cell);
  }

});
