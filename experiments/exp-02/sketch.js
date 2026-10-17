function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  // Fondo con estela suave (fade effect)
  background(15, 15, 25, 20);

  translate(width / 2, height / 2);

  // Mapear la posición del mouse para controlar la cantidad y velocidad
  let numPetals = 24;
  let maxRadius = map(mouseX, 0, width, 0, 300);
  let rotationSpeed = frameCount * 0.5;

  // Dibujar múltiples capas geométricas
  for (let i = 0; i < 3; i++) {
    rotate(rotationSpeed * (i + 1) * 0.5);
    
    beginShape();
    for (let a = 0; a < 360; a += 360 / numPetals) {
      // Usamos seno y coseno para crear ondas fluidas reactivas al mouse
      let angleOffset = map(mouseY, 0, height, 0, 360);
      let r = maxRadius * sin(a * 2 + frameCount + i * 30);
      
      let x = r * cos(a + angleOffset);
      let y = r * sin(a + angleOffset);
      
      // Color dinámico basado en la posición y el tiempo
      let strokeColor = color(
        (sin(frameCount + a) * 127 + 128),
        (cos(frameCount * 0.5) * 127 + 128),
        200,
        180
      );
      stroke(strokeColor);
      strokeWeight(2);
      
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}