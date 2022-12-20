const visor = document.querySelector(".calculadora-visor");

const btn1 = document.querySelector("#btn1").value;
const btn2 = document.querySelector("#btn2").value;
const btn3 = document.querySelector("#btn3").value;
const btn4 = document.querySelector("#btn4").value;
const btn5 = document.querySelector("#btn5").value;
const btn6 = document.querySelector("#btn6").value;
const btn7 = document.querySelector("#btn7").value;
const btn8 = document.querySelector("#btn8").value;
const btn9 = document.querySelector("#btn9").value;
const btn0 = document.querySelector("#btn0").value;
const btnmais = document.querySelector("#btnmais");
const btnmenos = document.querySelector("#btnmenos");
const btndivide = document.querySelector("#btndivide");
const btnmultiplica = document.querySelector("#btnmultiplica");
const btnigual = document.querySelector("#btnigual");
const btnC = document.querySelector("#btnC");

const mostrarnumero = (num) => {
	const visor = document.querySelector(".calculadora-visor");

	visor.innerHTML = visor.innerHTML + num;
};

btnmais.addEventListener("click", function sinais() {
	visor.innerHTML = visor.innerHTML + btnmais.value;
});
btnmenos.addEventListener("click", function sinais() {
	visor.innerHTML = visor.innerHTML + btnmenos.value;
});
btndivide.addEventListener("click", function sinais() {
	visor.innerHTML = visor.innerHTML + btndivide.value;
});
btnmultiplica.addEventListener("click", function sinais() {
	visor.innerHTML = visor.innerHTML + btnmultiplica.value;
});

btnC.addEventListener("click", function limpa() {
	visor.innerHTML = "";
});
btnigual.addEventListener("click", function resultado() {
	visor.innerHTML = eval(visor.innerHTML);
});
