import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "hometown-data.firebaseapp.com",
  projectId: "hometown-data",
  storageBucket: "hometown-data.firebasestorage.app",
  messagingSenderId: "427121820704",
  appId: "1:427121820704:web:ae205795fbcac3e713e845"
};

initializeApp(firebaseConfig);

const grid = document.getElementById("grid");

grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(3, 150px)";
grid.style.gridTemplateRows = "repeat(3, 150px)";
grid.style.gap = "5px";

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");

  const isImageA = Math.random() > 0.5;
  const imageUrl = isImageA ? "Images/img1.png" : "Images/img2.png";

  cell.style.width = "150px";
  cell.style.height = "150px";
  cell.style.backgroundImage = `url(${imageUrl})`;
  cell.style.backgroundSize = "cover";
  cell.style.backgroundPosition = "center";
  cell.style.cursor = "pointer";

  cell.addEventListener("click", function() {
    console.log("클릭됨");
    alert("클릭됨");
  });

  grid.appendChild(cell);
}
