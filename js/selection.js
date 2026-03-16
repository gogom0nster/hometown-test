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

const URBAN_COUNT = 64;
const NATURAL_COUNT = 62;
const MAX_SELECTION = 5;

const grid = document.getElementById("grid");
const progress = document.getElementById("progress");

let selections = [];
let historyStack = [];

const allImages = [];

for(let i=1;i<=URBAN_COUNT;i++){
  allImages.push(`urban/img${i}.png`);
}

for(let i=1;i<=NATURAL_COUNT;i++){
  allImages.push(`natural/img${i}.png`);
}

function getRandomImages(){

  const available = allImages.filter(img=>!selections.includes(img));

  available.sort(()=>Math.random()-0.5);

  return available.slice(0,9);

}

function renderGrid(){

  grid.innerHTML="";

  const images = getRandomImages();

  images.forEach(src=>{

    const img = document.createElement("img");
    img.src = src;

    img.onclick = ()=>{

      historyStack.push([...selections]); // 이전 상태 저장

      selections.push(src);

      updateProgress();

      if(selections.length>=MAX_SELECTION){
        saveResult();
      }else{
        renderGrid();
      }

    };

    grid.appendChild(img);

  });

}

function updateProgress(){
  progress.innerText = `${selections.length} / ${MAX_SELECTION}`;
}

async function saveResult(){

  try{

    await addDoc(collection(db,"results"),{
      selections:selections
    });

  }catch(e){
    console.error(e);
  }

  window.location.href="archetype.html";

}

window.goBack = function(){

  if(historyStack.length === 0){
    history.back();
    return;
  }

  selections = historyStack.pop();

  updateProgress();
  renderGrid();

};

updateProgress();
renderGrid();