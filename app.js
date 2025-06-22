
const cartas = [
    { simbolo: "♥", numero: "8" },
    { simbolo: "♠", numero: "A" },
    { simbolo: "♦", numero: "7" },
    { simbolo: "♣", numero: "Q" }
];

let indice = 0;

const carta = document.getElementById("carta");
const form = carta.querySelector(".form");
const number = carta.querySelector(".number");
const forminvert = carta.querySelector(".forminvert");

carta.addEventListener("click", () => {

    indice = (indice + 1) % cartas.length;
    const actual = cartas[indice];

    form.textContent = actual.simbolo;
    number.textContent = actual.numero;
    forminvert.textContent = actual.simbolo;

    form.classList.remove("red", "black");
    forminvert.classList.remove("red", "black");
    number.classList.remove("red", "black");

    if (actual.simbolo === "♥" || actual.simbolo === "♦") {
        form.classList.add("red");
        forminvert.classList.add("red");
        number.classList.add("red");
    } else {
        form.classList.add("black");
        forminvert.classList.add("black");
        number.classList.add("black");
    }

});
