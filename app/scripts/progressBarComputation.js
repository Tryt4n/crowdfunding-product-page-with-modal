const progressBar = document.querySelector("[data-progress-bar]");
const progressValues = document.querySelectorAll("[data-progress-value]");

export default function handleProgressBar() {
  progressValues.forEach((value) => {
    value.textContent = value.textContent + value.dataset.progressValue.replace(`.`, `,`);
    if (value.dataset.progressValue === "0") {
      const btnDisabled = value.parentElement.parentElement.querySelector("button");
      value.parentElement.parentElement.parentElement.classList.add("disabled");
      btnDisabled.classList.add("btn--disabled");
      btnDisabled.setAttribute("disabled", "");
    }
  });
  let completeOfProgressBar = parseFloat(progressValues[0].dataset.progressValue);
  progressBar.style.setProperty("--progress-bar-width", ` ${completeOfProgressBar}%`);
  progressBar.parentElement.setAttribute("title", `${completeOfProgressBar.toFixed(1)}%`);
}
