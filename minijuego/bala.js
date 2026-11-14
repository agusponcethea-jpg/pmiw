class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 8;
    this.alto = 20;
    this.velocidad = random (3, 7);
  }

  mover() {
    this.y += this.velocidad;
  }

  dibujar() {
    fill(199, 60, 89);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.ancho, this.alto);
  }

  fueraDePantalla() {
    return this.y > height + this.alto;
  }
}
