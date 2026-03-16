const PEOPLE_COUNT = 6; // people 폴더 이미지 개수

const image = document.getElementById("randomImage");

document.body.onclick = () => {
  window.location.href = "selection.html";
};

window.onload = () => {

  const rand = Math.floor(Math.random() * PEOPLE_COUNT) + 1;

  image.src = `./people/img${rand}.png`;

};