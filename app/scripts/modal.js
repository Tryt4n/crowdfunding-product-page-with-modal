const pledges = document.querySelectorAll("[data-modal-pledge]");
const pledgesExpanded = document.querySelectorAll("[data-modal-pledge-expanded]");
const activeState = document.querySelector("[data-modal-active]");

export default function handleModal() {
  pledges.forEach((pledge) => {
    pledge.addEventListener("click", () => {
      activeState.classList.toggle("active");
      pledgesExpanded.forEach((pledgeExpand) => {
        if (
          pledgeExpand.previousElementSibling === pledge &&
          pledgeExpand.ariaExpanded == "false"
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
}
