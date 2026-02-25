// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "hometown-data.firebaseapp.com",
  projectId: "hometown-data",
  storageBucket: "hometown-data.firebasestorage.app",
  messagingSenderId: "427121820704",
  appId: "1:427121820704:web:ae205795fbcac3e713e845",
  measurementId: "G-3WQWD0BW3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// -----------------
// GRID 생성 코드
// -----------------

const grid = document.getElementById("grid");

grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(3, 150px)";
grid.style.gridTemplateRows = "repeat(3, 150px)";
grid.style.gap = "5px";

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");

  const isImageA = Math.random() > 0.5;
  const imageUrl = isImageA ? "images/img1.png" : "images/img2.png";

  cell.style.width = "150px";
  cell.style.height = "150px";
  cell.style.backgroundImage = `url(${imageUrl})`;
  cell.style.backgroundSize = "cover";
  cell.style.backgroundPosition = "center";

  grid.appendChild(cell);
}
