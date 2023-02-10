import { handleMobileMenu, handleAriaAttributes, hideMenu } from "./navbar.js";
import loadPicture from "./backgroundImage.js";
import loadValues from "./loadValues.js";
import handleBookmark from "./bookmark.js";
import handleProgressBar from "./progressBarComputation.js";
import handleModal from "./modal.js";

window.addEventListener("load", () => {
  loadPicture();
  handleAriaAttributes();
  handleProgressBar();
  loadValues();
  handleBookmark();
  handleMobileMenu();
  handleModal();
});
window.addEventListener("resize", () => {
  loadPicture();
  handleAriaAttributes();
  hideMenu();
});
