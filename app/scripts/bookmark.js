export default function handleBookmark() {
  const bookmarkBtn = document.querySelector("[data-bookmark]");
  const bookmarkBtnIcon = document.querySelector("[data-bookmark-icon]");
  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("active");
    bookmarkBtnIcon.style.animation = "hideBookmark 300ms ease-in-out forwards";
    if (bookmarkBtn.classList.contains("active")) {
      bookmarkBtnIcon.setAttribute("src", `./images/icon-bookmark-active.svg`);
    } else {
      bookmarkBtnIcon.setAttribute("src", `./images/icon-bookmark.svg`);
    }
    setTimeout(() => {
      bookmarkBtnIcon.style.animation = "showBookmark 300ms ease-in-out forwards";
      bookmarkBtnIcon.removeAttribute("style");
    }, 300);
  });
}
