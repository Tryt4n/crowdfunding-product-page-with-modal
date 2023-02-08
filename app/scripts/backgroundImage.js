const backgroundImage = document.querySelector("[data-background-image]");
export default function loadPicture() {
  if (window.innerWidth < 768) {
    backgroundImage.setAttribute("src", "./images/image-hero-mobile.jpg");
  } else {
    backgroundImage.setAttribute("src", "./images/image-hero-desktop.jpg");
  }
}
