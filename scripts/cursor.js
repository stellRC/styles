const customCursor = document.querySelector(".custom-cursor");

const positionElement = (e) => {
  // Page offset enables custom cursor to follow mouse beyond 100vh
  const mouseY = e.clientY + window.pageYOffset;
  const mouseX = e.clientX + window.pageXOffset;

  customCursor.style.transform = `translate3d(${mouseX + -15}px, ${
    mouseY + -15
  }px, 0)`;
};

window.addEventListener("mousemove", positionElement);
