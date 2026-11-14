let personaje;
let balas = [];
let vidas = 3;
let musicaFondo;

let imgInicio, imgFondo, imgVictoria, imgDerrota, imgInstrucciones, imgCreditos, persona;
let pantalla = 0;

let tiempoInicio;
let duracion = 10;

function preload() {
  imgFondo = loadImage("data/fondo.png");
  imgInicio = loadImage("data/inicio.png");
  imgVictoria = loadImage("data/victoria.png");
  imgDerrota = loadImage("data/derrota.png");
  imgInstrucciones = loadImage("data/instrucciones.png");
  imgCreditos = loadImage("data/creditos.png");
  persona = loadImage("data/Sprite-7.png");
  musicaFondo = new Sonido("data/musica.mp3");  
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100);
  personaje = new Personaje(width / 2, height - 40);
}

function draw() {
  if (pantalla === 0) {
    image(imgInicio, 0, 0, width, height);
    
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    let posX = width - 150; 

    //botón para jugar
    let posYJugar = height / 2 - 30;
    noFill();
    stroke(0, 0, 100);
    rect(posX, posYJugar, 160, 45, 10);
    noStroke();
    fill(0, 0, 100);
    textSize(20);
    text("JUGAR", posX, posYJugar);
    
    //botón de instrucciones
    let posYInstrucciones = height / 2 + 30;
    noFill();
    stroke(0, 0, 100);
    rect(posX, posYInstrucciones, 160, 45, 10);
    noStroke();
    fill(0, 0, 100);
    textSize(16);
    text("INSTRUCCIONES", posX, posYInstrucciones);
    
    //botón de créditos
    let posYCreditos = height / 2 + 90;
    noFill();
    stroke(0, 0, 100);
    rect(posX, posYCreditos, 160, 45, 10);
    noStroke();
    fill(0, 0, 100);
    textSize(16);
    text("CRÉDITOS", posX, posYCreditos);
  } 

  else if (pantalla === 1) {
    image(imgFondo, 0, 0, width, height);
    background(0, 0, 12, 0.5);
    
    noStroke();
    fill(0, 0, 100);
    textAlign(LEFT, BASELINE);
    textSize(20);
    text("Vidas: " + vidas, 20, 30);

    let tiempoTranscurrido = (millis() - tiempoInicio) / 1000;
    let tiempoRestante = ceil(duracion - tiempoTranscurrido);
    text("Tiempo: " + tiempoRestante, width - 120, 30);

    if (tiempoRestante <= 0) {
      pantalla = 2; // Victoria
    }

    personaje.mover();
    personaje.dibujar();

    if (random(1) < 0.05) {
      balas.push(new Bala(random(width), -20));
    }

    for (let i = balas.length - 1; i >= 0; i--) {
      balas[i].mover();
      balas[i].dibujar();

      if (personaje.colision(balas[i])) {
        vidas--;
        balas.splice(i, 1);

        if (vidas <= 0) {
          pantalla = 3;
        }
      } 
      else if (balas[i].fueraDePantalla()) {
        balas.splice(i, 1);
      }
    }
  } 

  else if (pantalla === 2) {
    image(imgVictoria, 0, 0, width, height);
  } 

  else if (pantalla === 3) {
    image(imgDerrota, 0, 0, width, height);
  }

  //pantalla 4: instrucciones
  else if (pantalla === 4) {
    image(imgInstrucciones, 0, 0, width, height);
    dibujarBotonArribaDerecha();
  }
  
  //pantalla 5: créditos
  else if (pantalla === 5) {
    image(imgCreditos, 0, 0, width, height);
    dibujarBotonAbajo();
  }
}

//botón para volver desde instrucciones
function dibujarBotonArribaDerecha() {
  rectMode(CORNER);
  noFill();
  stroke(0, 0, 100);
  strokeWeight(2);
  rect(585, 30, 110, 35, 8);
  
  noStroke();
  fill(0, 0, 100);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("VOLVER", 585, 30, 110, 35, 8);
}

//botón para volver desde créditos
function dibujarBotonAbajo() {
  noFill();
  stroke(0, 0, 100);
  strokeWeight(2);
  rectMode(CENTER);
  rect(width / 2, height - 50, 120, 40, 10);
  
  noStroke();
  fill(0, 0, 100);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("VOLVER", width / 2, height - 50);
}

function mousePressed() {
  if (pantalla === 0) {
    let posX = width - 150;
    let anchoBoton = 160;
    let altoBoton = 45;

    let posYJugar = height / 2 - 30;
    let posYInstrucciones = height / 2 + 30;
    let posYCreditos = height / 2 + 90;
    
    //jugar
    if (mouseX > posX - anchoBoton / 2 && mouseX < posX + anchoBoton / 2 && 
        mouseY > posYJugar - altoBoton / 2 && mouseY < posYJugar + altoBoton / 2) {
          
      pantalla = 1;
      vidas = 3; 
      balas = []; 
      tiempoInicio = millis();
      if (musicaFondo && typeof musicaFondo.iniciarLoop === "function") {
        musicaFondo.iniciarLoop();
      }
    }
    
    //instrucciones
    if (mouseX > posX - anchoBoton / 2 && mouseX < posX + anchoBoton / 2 && 
        mouseY > posYInstrucciones - altoBoton / 2 && mouseY < posYInstrucciones + altoBoton / 2) {
      pantalla = 4;
    }
    
    //créditos
    if (mouseX > posX - anchoBoton / 2 && mouseX < posX + anchoBoton / 2 && 
        mouseY > posYCreditos - altoBoton / 2 && mouseY < posYCreditos + altoBoton / 2) {
      pantalla = 5;
    }
  }
  
  //volver al menú desde derrota/victoria
  else if (pantalla === 2 || pantalla === 3) {
    let bx = width / 2;
    let by = height - 140;
    let ancho = 140;
    let alto = 40;

    if (mouseX > bx - ancho / 2 && mouseX < bx + ancho / 2 && 
        mouseY > by - alto / 2 && mouseY < by + alto / 2) {
      vidas = 3;     
      balas = [];     
      pantalla = 0;   
    }
  }

  //volver desde instrucciones
  else if (pantalla === 4) {
    if (mouseX > 585 && mouseX < 585 + 110 && mouseY > 30 && mouseY < 30 + 35) {
      pantalla = 0;
    }
  }

  //volver desde créditos
  else if (pantalla === 5) {
    if (mouseX > width / 2 - 60 && mouseX < width / 2 + 60 && mouseY > height - 50 - 20 && mouseY < height - 50 + 20) {
      pantalla = 0;
    }
  }
}
