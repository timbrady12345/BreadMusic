const track = document.getElementById("mid");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

let currentPercentage = 0;

window.onpointerdown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
  document.body.style.userSelect = "none";
};

window.onpointerup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
  document.body.style.userSelect = "auto";
};

window.onpointermove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  let percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  nextPercentage = Math.max(Math.min(nextPercentage, 90), -90);

  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${50 + nextPercentage / 2}% center`;
  }
};

rightBtn.onclick = () => {
  currentPercentage -= 10;
  currentPercentage = Math.max(currentPercentage, -90);
  updatePosition();
};

leftBtn.onclick = () => {
  currentPercentage += 10;
  currentPercentage = Math.min(currentPercentage, 90);
  updatePosition();
};

function updatePosition() {
  track.style.transform = `translate(${currentPercentage}%, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${50 + currentPercentage / 2}% center`; // Adjust image positioning
  }
}
