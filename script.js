const leftImg = document.getElementById("leftImg");
const rightImg = document.getElementById("rightImg");

// List ALL images that exist in your Pictures folder
let images = [
"Pictures/WhatsApp Image 2026-03-05 at 20.34.12 (2).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.12.jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.13 (1).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.13 (2).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.13 (3).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.13 (4).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.13 (5).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.13.jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.14 (1).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.14 (2).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.14 (3).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.14 (4).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.14 (5).jpeg",
"Pictures/WhatsApp Image 2026-03-05 at 20.34.14.jpeg"
  // add more here if you have them
];

function nextRound(winnerEl) {
  const winnerSrc = winnerEl.getAttribute("src"); // keep relative path

  // candidates: any image except the winner AND except the current right image
  const currentRight = rightImg.getAttribute("src");
  const candidates = images.filter(p => p !== winnerSrc && p !== currentRight);

  if (candidates.length === 0) {
    alert("No more pictures!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const challenger = candidates[randomIndex];

  // remove challenger from pool so it won't repeat later
  images = images.filter(p => p !== challenger);

  // winner stays, new challenger appears
  leftImg.setAttribute("src", winnerSrc);
  rightImg.setAttribute("src", challenger);
}

leftImg.onclick = () => nextRound(leftImg);
rightImg.onclick = () => nextRound(rightImg);