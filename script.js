"strict mode";
const calcBtn = document.querySelector(".btn--calculate");
const inputDate = document.querySelector(".date-picker");
const outputContainer = document.querySelector(".output");

let years, months, days;

function calcAge() {
  // Current Date:
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();

  // Date Entered by User:
  const userData = new Date(inputDate.value);
  const [yearUser, monthUser, dateUser] = inputDate.value.split("-");

  // Validating the Date Input:
  if (userData >= now) {
    alert(
      "Date cannot be in future. Please enter your date of birth correctly!"
    );
  } else {
    // Calc Age
    years = nowYear - yearUser;

    if (nowMonth >= monthUser) {
      months = nowMonth - monthUser;
    } else {
      years--;
      months = 12 - (monthUser - nowMonth);
    }

    if (nowDate < dateUser) {
      months--;
      days = 30 - Math.abs(nowDate - dateUser);
    } else {
      days = nowDate - dateUser;
    }
  }
}

function renderResult() {
  if (years === undefined || months === undefined || days === undefined) return;
  const markup = `<p class="output--data">
          You are <span>${years}</span> years, <span>${months}</span> months and
          <span>${days}</span> days old
        </p>`;

  outputContainer.innerHTML = "";
  inputDate.value = "2000-01-01";
  outputContainer.insertAdjacentHTML("afterbegin", markup);
}

inputDate.addEventListener("change", calcAge);

calcBtn.addEventListener("click", renderResult);
