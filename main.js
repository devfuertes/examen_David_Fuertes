const buttonsRanting = document.querySelectorAll(".buttons_wrapper button");
const sendButton = document.querySelector(".send");
const containerOne = document.querySelector(".section_wrapper");
const containerTwo = document.querySelector(".section_two_wrapper");
const changeRantingText = document.querySelector(".changeRanting");

let changeRanting = null;

buttonsRanting.forEach((button) => {
    button.addEventListener("click", () => {
        buttonsRanting.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        changeRanting = button.textContent;
    });
});

sendButton.addEventListener("click", () => {
    if (changeRanting) {
        containerOne.style.display = "none";

        containerTwo.style.display='grid';
        changeRantingText.textContent = `Seleccionaste ${changeRanting} de 5`;
    }
});







