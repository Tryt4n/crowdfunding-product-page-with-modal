const pledges = document.querySelectorAll("[data-modal-pledge]");
const pledgesExpanded = document.querySelectorAll("[data-modal-pledge-expanded]");
const activeStates = document.querySelectorAll("[data-modal-active]");

export default function handleModal() {
  pledges.forEach((pledge) => {
    pledge.addEventListener("click", () => {
      const activeState = pledge.closest(".modal-pledge-container");

      pledges.forEach((pledge) => (pledge.checked = false));

      if (activeState.classList.contains("active")) {
        activeState.classList.remove("active");
      } else {
        activeStates.forEach((element) => {
          if (element.classList.contains("active")) element.classList.remove("active");
        });
        activeState.classList.add("active");
        pledge.checked = true;
      }

      pledgesExpanded.forEach((pledgeExpand) => {
        if (
          activeState.classList.contains("active") &&
          pledgeExpand.getAttribute("aria-labelledby") === pledge.id
        ) {
          pledgeExpand.setAttribute("aria-hidden", false);
          pledgeExpand.setAttribute("aria-expanded", true);
        } else {
          pledgeExpand.setAttribute("aria-hidden", true);
          pledgeExpand.setAttribute("aria-expanded", false);
        }
      });
    });
  });
  showModal();
  closeModal();
  submitModal();
  handleConfirmation();
  closeConfirmation();
}

const buttonsOpenModal = document.querySelectorAll("[data-btn-open-modal]");
const btnCloseModal = document.querySelector("[data-modal-close-btn]");
const buttonsSubmitPledge = document.querySelectorAll("[data-btn-submit]");
const modal = document.querySelector("[data-modal]");
const confirmation = document.querySelector("[data-confirmation]");
const btnConfirmation = document.querySelector("[data-btn-confirmation]");

function showModal() {
  buttonsOpenModal.forEach((btnOpen) => {
    btnOpen.addEventListener("click", () => {
      modal.classList.remove("hide");
      modal.setAttribute("aria-hidden", false);
      document.querySelector("body").classList.add("scroll");
    });
  });
}

function closeModal() {
  btnCloseModal.addEventListener("click", () => {
    close(modal);
    document.querySelector("body").classList.remove("scroll");
  });
}

function submitModal() {
  buttonsSubmitPledge.forEach((btnSubmit) => {
    btnSubmit.addEventListener("click", (e) => {
      if (
        btnSubmit.previousElementSibling.value >= btnSubmit.previousElementSibling.min &&
        btnSubmit.previousElementSibling.value != ""
      ) {
        handleConfirmation();
        close(modal);
        e.preventDefault();
      }
    });
  });
}

function closeConfirmation() {
  btnConfirmation.addEventListener("click", () => {
    close(confirmation);
    document.querySelector("body").classList.remove("scroll");
  });
}

function close(element) {
  if (element.classList.contains("hide")) return;
  element.style.animation = "hideModal 1000ms ease-in-out forwards";
  setTimeout(() => {
    element.classList.add("hide");
    element.removeAttribute("style");
    element.setAttribute("aria-hidden", true);
  }, 1000);
}

function handleConfirmation() {
  if (confirmation.classList.contains("hide") && !modal.classList.contains("hide")) {
    confirmation.classList.remove("hide");
    confirmation.setAttribute("aria-hidden", false);
  }
}
