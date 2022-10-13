const html = document.documentElement;
const canvas = document.getElementById("images-render");
const context = canvas.getContext("2d");

setTimeout(() => {
  $(`#block1 .aos`).addClass("aos-animate");
}, 4800)

const frameCount = 160;
const currentFrame = (index) =>
  `images/CHH1619_360QueenStVirtualTour_Architecture_MAIN_Scrolldown_Clean${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
const windowWidth = (window.innerHeight * 2080) / 1080;
const windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;
canvas.style.width = `${windowWidth}px`;
canvas.style.height = `${windowHeight}px`;

img.onload = function () {
  context.drawImage(img, 0, 0, windowWidth, windowHeight);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, windowWidth, windowHeight);
};

const addAndRemoveClass = (blockId, classAdd, classRemove) => {
  $(`#${blockId} .aos`).addClass(classAdd);
  $(`#${blockId} .aos`).removeClass(classRemove);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;

  requestAnimationFrame(() => updateImage(frameIndex + 1));
  const scrollFraction = scrollTop / maxScrollTop;

  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  if (frameIndex < 120) {
    addAndRemoveClass("block1", "aos-animate", "aos-out");
  } else {
    addAndRemoveClass("block1", "aos-out", "aos-animate");
  }
  console.log(frameIndex)

  if (frameIndex > 200 && frameIndex < 240) {
    $(`#block2 .aos`).addClass("aos-animate");
  } else {
    $(`#block2 .aos`).removeClass("aos-animate");
  }
  if (frameIndex > 280 && frameIndex < 320) {
    $(`#block3 .aos`).addClass("aos-animate");
  } else {
    $(`#block3 .aos`).removeClass("aos-animate");
  }
  if (frameIndex > 360 && frameIndex < 410) {
    $(`#block4 .aos`).addClass("aos-animate");
  } else {
    $(`#block4 .aos`).removeClass("aos-animate");
  }
  if (frameIndex > 440 && frameIndex < 490) {
    $(`#block5 .aos`).addClass("aos-animate");
  } else {
    $(`#block5 .aos`).removeClass("aos-animate");
  }
});

preloadImages();