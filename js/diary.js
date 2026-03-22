
const diaryContents = {
  1:  `
    <div class="diary-img-wrap">
      <img src="diary/diary1.png" alt="diary1">
    </div>
  `,
  2: `고향으로 돌아가는 꿈이다.

어느 여름날, 해는 중천에 떠 있다. 아빠가 시장에서 데려온 강아지들이랑 마당을 뒹군다. 그렇게 행복할 수 없다.
매가 강아지 물어 갈지도 몰라. 그러니까 강아지 잘 보고 있어라.
꾸물대는 흰 덩어리들을 껴안고 하늘을 주시한다. 발밑에서 풀들이 돋아난다. 강아지들이 흐물흐물 품속에서 녹아내리고, 나는 금세 맨발이 된다.

다시 하늘을 바라본다. 어느새 마당은 과수원으로 변해 있다. 커다란 새가 해를 반으로 가르며 날아간다. 사위가 어둑어둑하다. 발바닥에 닿는 거센 풀들의 감촉은 떨치려 하면 할수록 더욱 세게 달라붙는다.
나는 발을 옭아매는 풀을 뒤로한 채 뛰기 시작한다. 앞만 보며 계속해 뛴다. 갈라진 해는 자신의 역할을 하지 못하고, 주위는 여전히 어둑어둑하다.
한참을 뛰었을까, 또다시 마을이다.

아무도 없는 마을이다. 모두 어디로 사라진 걸까? 나는 어디로 가는 걸까? 숲에 잡아먹힐 것만 같다. 어디선가 내려온 넝쿨이 이마를 툭, 툭, 툭 건드린다. 뜀박질을 멈추고 고개를 돌렸을 땐,

커다랗고 뒤집힌 머리와 마주한다. 팔도 다리도 발도 손도 없는 머리.
나는 머리가 왜 꿈에 나왔는지, 내가 무엇을 두려워하고 있는 건지를 생각한다. 생각하다 보면 당황스럽고 무서운 마음이 드는데···. 순간 머리가 쿵, 쿵, 쿵 앞으로 다가오더니 커다랗게 입을 벌리곤, 나를 집어삼킨다.

눈을 뜨니 천장이다.

새벽 어스름 진 침실에 누운 나의 몸이 보인다. 시야만 겨우 움직여지고, 몸은 꼼짝할 수 없다.
내 몸이 있는 곳이 어디인지 헷갈린다. 할머니가 사 온 파란 꽃무늬 커튼 속? 교복이 놓인 의자 위? 코를 고는 룸메이트 옆? 달리는 기차 안?

내 마음이 어디에 있는지 역시 모르겠다.`, 

  3: `  산길을 홀로 걸었다. 

산짐승과 나무와 풀로 가득한 곳에서 무슨 생각에 잠겼는지 기억이 나지 않는다. 그만큼 나에겐 멀어져버린 것이다. 그렇지만 몸이 기억하는 것은 살아있다는 느낌이다. 나무가 숨을 쉬고, 지렁이가 흙 사이를 꿈틀대고, 커다란 고슴도치가 기어다니고, 노루가 새끼를 낳고 있으며, 산이 그들을 안아주고 있는 생경함 말이다. 온 힘을 다 해 살아있다고 내뿜는 초록빛들은 나를 순순히 안아주었다.

 그런 빛들을 잃어버린 나는 끝없는 존재만을 감지한다. 각자의 이야기들은 흩어지고 희미해진 채 비좁은 숨을 내뱉는다. 생경함을 잃은 땅에는 무쇠가 꽂혀 있다. 가끔은 그 땅을 관찰한다. 펜스로 둘러싸인 미지의 공간에는 어떤 생명들이 살고 있을까. 이들을 모두 내쫓고 시멘트를 부어버리면 누구와도 공존할 수 있을까. 

  나는 무의미한 관찰을 반복한다. 일주일이 지나면 더 많은 크레인과 더 높은 펜스가 세워져 있을 것이다. 이 조급함은 그저 그 많던 산들이 모두 없어졌기 때문이다. 
 터 창고 저 아래에 남을 풍경들의 소멸을 떠올리며, 이 끝없는 질주가 무슨 풍경을 남길지 공허했다.`
};

const menuSpans = document.querySelectorAll("#menu span");
const contentDiv = document.getElementById("content");

menuSpans.forEach(span => {
  span.addEventListener("click", () => {
   const step = span.getAttribute("data-step");
   contentDiv.innerHTML = diaryContents[step] || "내용 없음";
  });
});

// 페이지 로드 시 1단계 자동 표시
showMap();

const mapBtn = document.getElementById("map");

mapBtn.addEventListener("click", () => {
  contentDiv.innerHTML = `
    <div class="map-wrap">
      <img src="diary/map.png" alt="아주 먼 지도">
    </div>
  `;
});
mapBtn.addEventListener("click", showMap);

function showMap(){

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

  points.forEach(point=>{
    point.addEventListener("click", ()=>{
      const step = point.getAttribute("data-step");
      contentDiv.innerHTML = diaryContents[step];
    });
  });

}
