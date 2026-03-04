import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcgpImd4xQQrXjsdeUtISiI0blO6qHNhQ",
  authDomain: "hometown-data.firebaseapp.com",
  projectId: "hometown-data",
  storageBucket: "hometown-data.firebasestorage.app",
  messagingSenderId: "427121820704",
  appId: "1:427121820704:web:ae205795fbcac3e713e845"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const URBAN_COUNT = 26;
const NATURAL_COUNT = 36;
const MAX_SELECTION = 5;

const grid = document.getElementById("grid");
const progress = document.getElementById("progress");

let selections = [];

// ---------------- 전체 이미지 배열 생성 ----------------
const allImages = [];
for (let i = 1; i <= URBAN_COUNT; i++) allImages.push(`urban/img${i}.png`);
for (let i = 1; i <= NATURAL_COUNT; i++) allImages.push(`natural/img${i}.png`);

// ---------------- 랜덤 이미지 9개 생성 (중복 제거) ----------------
function getRandomImages() {
  // 이미 선택된 이미지는 제외
  const availableImages = allImages.filter(img => !selections.includes(img));
  // 랜덤 섞기
  availableImages.sort(() => Math.random() - 0.5);
  // 남은 이미지가 9개 미만이면 있는 만큼만 반환
  return availableImages.slice(0, 9);
}

// ---------------- 그리드 렌더 ----------------
function renderGrid() {
  grid.innerHTML = "";

  const imgs = getRandomImages();

  imgs.forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    img.onclick = () => {
      selections.push(src);
      updateProgress();

      if (selections.length >= MAX_SELECTION) {
        saveResult();
      } else {
        renderGrid(); // 다음 선택 단계로
      }
    };

    grid.appendChild(img);
  });
}

// ---------------- 진행 카운트 ----------------
function updateProgress() {
  progress.innerText = `${selections.length} / ${MAX_SELECTION}`;
}

// ---------------- Firebase 저장 ----------------
async function saveResult() {
  try {
    const docRef = await addDoc(collection(db, "results"), {
      selections: selections
    });
    console.log("저장 성공:", docRef.id);
  } catch (error) {
    console.error("저장 오류:", error);
  }
  window.location.href = "archetype.html";
}

// ---------------- 초기 실행 ----------------
updateProgress();
renderGrid();