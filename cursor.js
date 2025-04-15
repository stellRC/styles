const cursorBig = document.querySelector(".cursor-big");

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX + window.pageXOffset;

  cursorBig.style.transform = `translate3d(${mouseX + -15}px, ${
    mouseY + -15
  }px, 0)`;
};

window.addEventListener("mousemove", positionElement);

// When the cursor moves, the positionElement function retrieves the current mouse x and y coordinates
// These coordinates update the transform: translate3d() property for both cursor elements, moving them accordingly
// transform repositions elements in both horizontal and vertical directions, while translate3d adjusts their position in 3D space
