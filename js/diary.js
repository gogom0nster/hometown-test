const diaryContents = {
  1: `
    <div class="diary-img-wrap">
      <img src="diary/diary1.png" alt="diary1">
    </div>
  `,
  2: `
    <div class="diary-img-wrap">
      <img src="diary/diary2.png" alt="diary2">
    </div>
  `,
  3: `산길을 홀로 걸었다. 

산짐승과 나무와 풀로 가득한 곳에서 무슨 생각에 잠겼는지 기억이 나지 않는다. 그만큼 나에겐 멀어져버린 것이다. 그렇지만 몸이 기억하는 것은 살아있다는 느낌이다. 나무가 숨을 쉬고, 지렁이가 흙 사이를 꿈틀대고, 커다란 고슴도치가 기어다니고, 노루가 새끼를 낳고 있으며, 산이 그들을 안아주고 있는 생경함 말이다. 온 힘을 다 해 살아있다고 내뿜는 초록빛들은 나를 순순히 안아주었다.

그런 빛들을 잃어버린 나는 끝없는 존재만을 감지한다. 각자의 이야기들은 흩어지고 희미해진 채 비좁은 숨을 내뱉는다. 생경함을 잃은 땅에는 무쇠가 꽂혀 있다. 가끔은 그 땅을 관찰한다. 펜스로 둘러싸인 미지의 공간에는 어떤 생명들이 살고 있을까. 이들을 모두 내쫓고 시멘트를 부어버리면 누구와도 공존할 수 있을까. 

나는 무의미한 관찰을 반복한다. 일주일이 지나면 더 많은 크레인과 더 높은 펜스가 세워져 있을 것이다. 이 조급함은 그저 그 많던 산들이 모두 없어졌기 때문이다. 
터 창고 저 아래에 남을 풍경들의 소멸을 떠올리며, 이 끝없는 질주가 무슨 풍경을 남길지 공허했다.`
};

const menuSpans = document.querySelectorAll("#menu span");
const contentDiv = document.getElementById("content");
const mapBtn = document.getElementById("map");

// 🔥 배경 변경 함수 (중복 제거 핵심)
function updateBackground(step) {
  if (step === "2") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // 🔥 박스 제거
    contentDiv.classList.add("no-box");

  } else {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    // 🔥 다시 원래대로
    contentDiv.classList.remove("no-box");
  }
}

// 메뉴 클릭
menuSpans.forEach(span => {
  span.addEventListener("click", () => {
    const step = span.getAttribute("data-step");
    contentDiv.innerHTML = diaryContents[step] || "내용 없음";
    updateBackground(step);
  });
});

// 지도 버튼 클릭
mapBtn.addEventListener("click", () => {
  updateBackground(null); // 배경 초기화
  showMap();
});

// 지도 표시 함수
function showMap() {
  contentDiv.innerHTML = `
    <div class="map-wrap">
      <div class="map-container">
        <img src="diary/map.png">

        <div class="map-point" data-step="1" style="top:68.5%; left:48.5%;">1</div>
        <div class="map-point" data-step="2" style="top:12%; left:47.5%;">2</div>
        <div class="map-point" data-step="3" style="top:12%; left:37%;">3</div>
      </div>
    </div>
  `;

  const points = document.querySelectorAll(".map-point");

  points.forEach(point => {
    point.addEventListener("click", () => {
      const step = point.getAttribute("data-step");
      contentDiv.innerHTML = diaryContents[step];
      updateBackground(step);
    });
  });
}

// 페이지 처음 로드 시 지도 표시
showMap();