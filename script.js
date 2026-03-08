const leftImg = document.getElementById("leftImg");
const rightImg = document.getElementById("rightImg");

// List ALL images that exist in your Pictures folder
let images = [
"Pictures/Agnija.jpeg",
"Pictures/Alesia.jpeg",
"Pictures/Anna.jpeg",
"Pictures/Emili.jpeg",
"Pictures/Grisha.jpeg",
"Pictures/Ilya.jpeg",
"Pictures/Katya.jpeg",
"Pictures/Makar.jpeg",
"Pictures/Masha.jpeg",
"Pictures/Pouline.jpeg",
"Pictures/Siurce.jpeg",
"Pictures/Stepan.jpeg",
"Pictures/Tim.jpeg",
"Pictures/Vova.jpeg"
  // add more here if you have them
];

function nextRound(winnerEl) {
  const winnerSrc = winnerEl.getAttribute("src"); // keep relative path

  // candidates: any image except the winner AND except the current right image
  const currentRight = rightImg.getAttribute("src");
  const candidates = images.filter(p => p !== winnerSrc && p !== currentRight);

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const challenger = candidates[randomIndex];

  // remove challenger from pool so it won't repeat later
  images = images.filter(p => p !== challenger);

  // winner stays, new challenger appears
  leftImg.setAttribute("src", winnerSrc);
  rightImg.setAttribute("src", challenger);

  if(images.length === 0){

  const container = document.querySelector(".container");
  const title = document.querySelector("h1");
  const text = document.querySelector("p");
  const button = document.querySelector("button");

  title.style.display = "none";
  text.style.display = "none";

  container.innerHTML =
    "<div class='winner'>" +
    "<h2>🏆 Winner</h2>" +
    "<img src='" + winnerSrc + "' width='350'>" +
    "</div>";

  button.style.fontSize = "24px";
  button.style.padding = "15px 30px";

  return;
}
}

leftImg.onclick = () => nextRound(leftImg);
rightImg.onclick = () => nextRound(rightImg);
