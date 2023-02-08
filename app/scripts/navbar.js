const btnNav = document.querySelector("[data-navbar-btn]");
const btnImage = document.querySelector("[data-button-img]");
const menuList = document.querySelector("[data-menu-list-item]");
const navbarExpandedBackground = document.querySelector("[data-background-opaque]");

export function handleAriaAttributes() {
  if (window.innerWidth >= 768) {
    btnNav.setAttribute("disabled", "");
    btnNav.setAttribute("aria-hidden", true);
    btnNav.removeAttribute("aria-expanded");
    btnNav.removeAttribute("aria-label");
    menuList.removeAttribute("aria-labelledby");
  } else {
    btnNav.removeAttribute("disabled");
    btnNav.removeAttribute("aria-hidden");
    btnNav.setAttribute("aria-expanded", false);
    btnNav.setAttribute("aria-label", "Press to open menu");
    menuList.setAttribute("aria-labelledby", "btn-mobile-menu");
  }
}

const btnHamburgerSource = `./images/icon-hamburger.svg`;
const btnCloseSource = `./images/icon-close-menu.svg`;

export function handleMobileMenu() {
  btnNav.addEventListener("click", () => {
    if (btnImage.getAttribute("src") === btnHamburgerSource) {
      showMenu();
    } else {
      hideMenu();
    }
  });
}

function showMenu() {
  btnImage.setAttribute("src", btnCloseSource);
  btnImage.setAttribute("alt", "Close menu button");
  menuList.classList.add("expanded");
  navbarExpandedBackground.classList.add("background-opaque");
  btnNav.setAttribute("aria-expanded", true);
  document.querySelector("body").classList.add("scroll");
}

export function hideMenu() {
  btnImage.setAttribute("src", btnHamburgerSource);
  btnImage.setAttribute("alt", "Open menu button");
  btnNav.setAttribute("aria-expanded", false);
  menuList.classList.remove("expanded");
  navbarExpandedBackground.classList.remove("background-opaque");
  document.querySelector("body").classList.remove("scroll");
}
