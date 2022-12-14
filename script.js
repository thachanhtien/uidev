const html = document.documentElement;
const canvas = document.getElementById("images-render");
const context = canvas.getContext("2d");
const heightSection1 = $("#section1").innerHeight()
const heightSection2 = $("#section2").innerHeight()

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
const windowWidth = window.innerWidth;
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
  const maxScrollSection1 = $("#section1").innerHeight();

  requestAnimationFrame(() => updateImage(frameIndex + 1));
  const scrollFraction = scrollTop / maxScrollSection1;

  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );


  if (scrollTop >= 0 && scrollTop < 550) {
    addAndRemoveClass("section1", "aos-animate", "aos-out");
  } else {
    addAndRemoveClass("section1", "aos-out", "aos-animate");
  }

  if (scrollTop > heightSection1 - 400 && scrollTop < heightSection1) {
    $(`#block2 .aos`).addClass("aos-animate");
  } else {
    $(`#block2 .aos`).removeClass("aos-animate");
  }
  if (scrollTop > heightSection1 + 200 && scrollTop < heightSection1 + heightSection2 / 4) {
    $(`#block3 .aos`).addClass("aos-animate");
  } else {
    $(`#block3 .aos`).removeClass("aos-animate");
  }
  if (scrollTop > heightSection1 + heightSection2 / 4 + 200 && scrollTop < heightSection1 + heightSection2 / 4 + 600) {
    $(`#block4 .aos`).addClass("aos-animate");
  } else {
    $(`#block4 .aos`).removeClass("aos-animate");
  }
  if (scrollTop > heightSection1 + heightSection2 / 4 + 800 && scrollTop < heightSection1 + heightSection2 / 4 + 1200) {
    $(`#block5 .aos`).addClass("aos-animate");
  } else {
    $(`#block5 .aos`).removeClass("aos-animate");
  }
});

preloadImages();