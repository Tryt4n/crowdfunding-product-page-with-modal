import { handleMobileMenu, handleAriaAttributes, hideMenu } from "./navbar.js";
import loadPicture from "./backgroundImage.js";
import handleProgressBar from "./progressBarComputation.js";
import handleModal from "./modal.js";

window.addEventListener("load", () => {
  loadPicture();
  handleAriaAttributes();
  handleProgressBar();
});
window.addEventListener("resize", () => {
  loadPicture();
  handleAriaAttributes();
  hideMenu();
});

handleMobileMenu();

const bookmarkBtn = document.querySelector("[data-bookmark]");
const bookmarkBtnIcon = document.querySelector("[data-bookmark-icon]");
bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("active");
  if (bookmarkBtn.classList.contains("active")) {
    bookmarkBtnIcon.setAttribute("src", `./images/icon-bookmark-active.svg`);
  } else {
    bookmarkBtnIcon.setAttribute("src", `./images/icon-bookmark.svg`);
  }
});

handleModal();
