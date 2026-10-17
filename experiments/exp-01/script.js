// Lógica en JavaScript
let valor = 0;
const pantalla = document.getElementById('contador');

function incrementar() {
    valor++;
    pantalla.textContent = valor;
}

function decrementar() {
    valor--;
    pantalla.textContent = valor;
}

function reiniciar() {
    valor = 0;
    pantalla.textContent = valor;
}