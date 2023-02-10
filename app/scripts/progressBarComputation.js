const progressBar = document.querySelector("[data-progress-bar]");
const progressValues = document.querySelectorAll("[data-progress-value]");

export default function handleProgressBar() {
  progressValues.forEach((value) => {
    value.textContent = value.textContent + value.dataset.progressValue.replace(`.`, `,`);
  });
  let completeOfProgressBar = parseFloat(progressValues[0].dataset.progressValue);
  progressBar.style.setProperty("--progress-bar-width", ` ${completeOfProgressBar}%`);
  progressBar.parentElement.setAttribute("title", `${completeOfProgressBar.toFixed(1)}%`);
}
