let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Btn was about to be clicked");
});