document.addEventListener("DOMContentLoaded", function () {

  console.log("JS 로드됨");

  const grid = document.getElementById("grid");

  if (!grid) {
    console.log("grid를 찾을 수 없음");
    return;
  }

  console.log("grid 찾음");

  // grid 클릭 테스트
  grid.addEventListener("click", function() {
    console.log("grid 클릭됨");
  });

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");

    // 랜덤으로 이미지 선택
    const isImageA = Math.random() > 0.5;

    // 상대경로 사용: index.html 기준
    const imageUrl = isImageA
        ? "./images/img1.png"
        : "./images/img2.png";

    cell.style.width = "150px";
    cell.style.height = "150px";
    cell.style.backgroundImage = `url(${imageUrl})`;
    cell.style.backgroundSize = "cover";
    cell.style.backgroundPosition = "center";
    cell.style.cursor = "pointer";
    cell.style.border = "2px solid red";  // 디버그용, 나중에 제거 가능
    cell.style.pointerEvents = "auto";

    // 클릭 이벤트
    cell.addEventListener("click", function () {
      console.log("cell 클릭됨");
      alert(isImageA ? "A 이미지를 선택했습니다." : "B 이미지를 선택했습니다.");
    });

    grid.appendChild(cell);
  }

});
