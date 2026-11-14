class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diametro = 40;
    this.velocidad = 5;
    this.hue = random(360);
    this.vida = 3;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }

    this.x = constrain(this.x, this.diametro/2, width - this.diametro/2);
    this.y = constrain(this.y, this.diametro/2, height - this.diametro/2);
  }

  dibujar() {
    if (persona) {
      imageMode(CENTER);
      image(persona, this.x, this.y, this.diametro, this.diametro);
      imageMode(CORNER);
    } else {
      fill(this.hue, 80, 90);
      noStroke();
      circle(this.x, this.y, this.diametro);
    }
  }

  colision(bala) {
    let bordeX = constrain(this.x, bala.x - bala.ancho/2, bala.x + bala.ancho/2);
    let bordeY = constrain(this.y, bala.y - bala.alto/2, bala.y + bala.alto/2);
    return dist(this.x, this.y, bordeX, bordeY) < this.diametro/2;
  }
}
