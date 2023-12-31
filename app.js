const installBTns = document.querySelectorAll(".installBtn");

const slider = document.querySelector(".cursor");

const counter = document.querySelector(".counter");

const overlay = document.querySelector(".overlay");

const finish = document.querySelector(".finish");

installBTns.forEach((btn) => {
  btn.addEventListener("click", () => {
    slider.style.width = "97%";
    overlay.style.visibility = "visible";
    setTimeout(showbtn, 5000);
  });
});
function showbtn() {
  finish.style.visibility = "visible";
}

const titlesCard = document.querySelectorAll(".card h4");

const search = document.querySelector(".search");



search.addEventListener("keyup", () => {
  titlesCard.forEach((title) => {
    if (title.textContent.includes(search.value.toUpperCase())) {
      title.parentElement.style.display = "inline-block";
    } else {
      title.parentElement.style.display = "none";
    }
  });

})