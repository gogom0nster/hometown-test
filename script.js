document.addEventListener("DOMContentLoaded", function () {

  console.log("JS 로드됨");

  const grid = document.getElementById("grid");

  if (!grid) {
    console.log("grid를 찾을 수 없음");
    return;
  }

  console.log("grid 찾음");

  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(3, 150px)";
  grid.style.gridTemplateRows = "repeat(3, 150px)";
  grid.style.gap = "5px";

  // 🔥 grid 클릭 테스트
  grid.addEventListener("click", function () {
    console.log("grid 클릭됨");
  });

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");

    const isImageA = Math.random() > 0.5;
    const imageUrl = isImageA ? "images/img1.png" : "images/img2.png";

    cell.style.width = "150px";
    cell.style.height = "150px";
    cell.style.backgroundImage = `url(${imageUrl})`;
    cell.style.backgroundSize = "cover";
    cell.style.backgroundPosition = "center";
    cell.style.cursor = "pointer";
    cell.style.border = "2px solid red";
    cell.style.pointerEvents = "auto";

    // 🔥 cell 클릭 테스트
    cell.addEventListener("click", function () {
      console.log("cell 클릭됨");
      alert("cell 클릭됨");
    });

    grid.appendChild(cell);
  }

});
