let popup = document.getElementById("courses-popup");
let wholesaleBtn = document.getElementById("wholesale-btn");
let rehabBtn = document.getElementById("rehab-btn");
let rentalsBtn = document.getElementById("rentals-btn");
let modalCloseBtn = document.getElementById("popup-close-btn");
let formHighlight = document.getElementById("form-headline").innerText;

let modalHidden = true;

wholesaleBtn.onclick = () => {
  if (modalHidden === true) {
    popup.classList.remove("hidden");
    formHighlight =
      "Ready to start flipping deals with little to none of your money?";
    // popup.classList.add(["flex", "items-center", "justify-center"]);
    modalHidden = false;
  }
};

rehabBtn.onclick = () => {
  if (modalHidden === true) {
    popup.classList.remove("hidden");
    formHighlight = "Ready to learn to rehab houses for big profits?";
    // popup.classList.add(["flex", "items-center", "justify-center"]);
    modalHidden = false;
  }
};

rentalsBtn.onclick = () => {
  if (modalHidden === true) {
    popup.classList.remove("hidden");
    formHighlight = "Ready to build cashflow with rentals properties?";
    // popup.classList.add(["flex", "items-center", "justify-center"]);
    modalHidden = false;
  }
};

modalCloseBtn.onclick = () => {
  if (modalHidden === false) {
    // popup.classList.remove(["flex", "items-center", "justify-center"]);
    popup.classList.add("hidden");
    modalHidden = true;
  }
};

function showReview(n) {
  let selectedReview = document.getElementById("review" + n);
  let clickedDot = document.getElementById("dot" + n);
  let allDots = document.getElementsByClassName("dot");

  for (let i = 1; i < allDots.length + 1; i++) {
    document.getElementById("dot" + i).classList.remove("bg-siteBlue");
    document.getElementById("review" + i).classList.replace("flex", "hidden");
  }

  clickedDot.classList.add("bg-siteBlue");
  selectedReview.classList.replace("hidden", "flex");
}
