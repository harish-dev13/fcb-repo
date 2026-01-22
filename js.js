let count = 0;

const showBtn = document.getElementById("showBtn");
const counterBtn = document.getElementById("counterBtn");
const countText = document.getElementById("count");

showBtn.addEventListener("click", () => {
    counterBtn.style.display = "block";
});

counterBtn.addEventListener("click", () => {
    count += 1;
    countText.innerHTML = "Touches: " + count;
});