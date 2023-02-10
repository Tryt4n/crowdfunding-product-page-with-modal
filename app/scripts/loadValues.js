const pledgeValues = document.querySelectorAll("[data-pledge-value]");
const modalPledgeValues = document.querySelectorAll("[data-modal-pledge-value]");

export default function loadValues() {
  pledgeValues.forEach((value) => {
    value.textContent = value.dataset.pledgeValue;

    if (value.dataset.pledgeValue === "0") {
      // Add disabled classList to whole container
      const containerDisabled = value.parentElement.parentElement.parentElement;
      const btnDisabled = value.parentElement.parentElement.querySelector("button");

      containerDisabled.classList.add("disabled");
      containerDisabled.setAttribute("aria-disabled", true);
      btnDisabled.classList.add("btn--disabled");
      btnDisabled.setAttribute("disabled", "");
      btnDisabled.textContent = "Out of stock";
    }
  });

  modalPledgeValues.forEach((value) => {
    value.textContent = value.dataset.modalPledgeValue;

    if (value.dataset.modalPledgeValue === "0") {
      // Add disabled classList to whole container
      const containerDisabled =
        value.parentElement.parentElement.parentElement.parentElement.parentElement;
      const pledgeContainerDisabled = value.parentElement.parentElement.parentElement.parentElement;
      const inputDisabled = value.parentElement.parentElement.parentElement.previousElementSibling;
      const labelDisabled = value.parentElement.previousElementSibling.firstElementChild;

      containerDisabled.setAttribute("aria-disabled", true);
      pledgeContainerDisabled.classList.add("disabled");
      inputDisabled.setAttribute("disabled", "");
      labelDisabled.classList.add("disabled");
    }
  });
}
