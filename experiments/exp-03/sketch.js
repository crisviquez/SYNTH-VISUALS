let miAudio;
let botonPlay;
let estaReproduciendo = false;

function setup() {
  createCanvas(400, 400);
  
  // 1. Cargamos el audio nativamente con HTML5 (evita el bloqueo del preload)
  // Reemplaza 'audio.mp3' por la ruta exacta de tu archivo
  miAudio = createAudio('assets/KTHR.mp3');
  
  // Opcional: si quieres que se reproduzca en bucle
  miAudio.loop(false); 
}

function draw() {
  background(30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  
  if (estaReproduciendo) {
    text("Reproduciendo audio...\nHaz clic para pausar", width / 2, height / 2);
  } else {
    text("Haz clic en cualquier parte\npara reproducir", width / 2, height / 2);
  }
}

function mousePressed() {
  // Verificamos que el clic esté dentro del canvas
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (estaReproduciendo) {
      miAudio.pause();
      estaReproduciendo = false;
    } else {
      miAudio.play();
      estaReproduciendo = true;
    }
  }
}