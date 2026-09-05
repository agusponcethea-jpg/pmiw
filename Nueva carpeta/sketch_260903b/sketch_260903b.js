let fondo;
let sunnyDentro;

let luffy = [];
let camina = [];
let gordito = [];

let estado = "inicio";

let frameActual = 0;

let tiempoAnterior = 0;
let tiempoEstado = 0;

let velocidadLuffy = 450;
let velocidadCamina = 180;
let velocidadGordito = 400;

let xLuffy = 400;
let yLuffy = 430;

let velocidadMovimiento = 1;

function preload() {
  fondo = loadImage("data/Fondo.jpeg");
  sunnyDentro = loadImage("data/Sunnydentro.jpeg");

  for (let i = 0; i < 4; i++) {
    luffy[i] = loadImage("data/Luffy_" + i + ".png");
  }

  for (let i = 0; i < 2; i++) {
    camina[i] = loadImage("data/Camina_" + i + ".png");
  }

  for (let i = 0; i < 2; i++) {
    gordito[i] = loadImage("data/Gordito_" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 600);

  tiempoAnterior = millis();
  tiempoEstado = millis();
}

function draw() {

  // Fondos sunny
  if (estado == "inicio" || estado == "caminar") {
    image(fondo, 0, 0, width, height);
  } else {
    image(sunnyDentro, 0, 0, width, height);
  }

  // Inicio

  if (estado == "inicio") {

    dibujarAnimacion(
      luffy,
      frameActual,
      400,
      420,
      110,
      120
    );

    if (millis() - tiempoAnterior > velocidadLuffy) {

      frameActual++;
      tiempoAnterior = millis();

      if (terminoAnimacion(frameActual, luffy.length)) {

        estado = "caminar";
        frameActual = 0;

        xLuffy = 80;

        tiempoAnterior = millis();
      }
    }
  }

  // Camina

  else if (estado == "caminar") {

    xLuffy = xLuffy + velocidadMovimiento;

    if (millis() - tiempoAnterior > velocidadCamina) {

      frameActual++;

      if (frameActual >= camina.length) {
        frameActual = 0;
      }

      tiempoAnterior = millis();
    }

    dibujarAnimacionInvertida(
      camina,
      frameActual,
      xLuffy,
      yLuffy,
      95,
      105
    );


    if (xLuffy >= 680) {

      estado = "gordito";

      frameActual = 0;

      tiempoAnterior = millis();
      tiempoEstado = millis();
    }
  }
  
  // Gordito

  else if (estado == "gordito") {

    dibujarAnimacion(
      gordito,
      frameActual,
      400,
      420,
      140,
      150
    );

    if (millis() - tiempoAnterior > velocidadGordito) {

      frameActual++;

      if (frameActual >= gordito.length) {
        frameActual = 0;
      }

      tiempoAnterior = millis();
    }


    // Después de 3 segundos
    if (millis() - tiempoEstado > 3000) {

      estado = "final";

      frameActual = 1;

      // Comenzamos a contar el tiempo del estado final
      tiempoEstado = millis();
    }
  }

  // Final

  else if (estado == "final") {

    dibujarAnimacion(
      gordito,
      frameActual,
      400,
      420,
      140,
      150
    );


    //3 segundos y reinicia solo
    if (millis() - tiempoEstado > 3000) {
      reiniciarJuego();
    }
  }
}

// animaciones

function dibujarAnimacion(animacion, frame, x, y, ancho, alto) {

  imageMode(CENTER);

  image(
    animacion[frame],
    x,
    y,
    ancho,
    alto
  );

  imageMode(CORNER);
}

//animacion invertida

function dibujarAnimacionInvertida(animacion, frame, x, y, ancho, alto) {

  push();

  translate(x, y);

  scale(-1, 1);

  imageMode(CENTER);

  image(
    animacion[frame],
    0,
    0,
    ancho,
    alto
  );

  imageMode(CORNER);

  pop();
}

// Funcion oara saber cuando termina

function terminoAnimacion(frame, cantidadFrames) {

  if (frame >= cantidadFrames) {

    console.log("Animacion inicial terminada");

    return true;

  } else {

    return false;
  }
}

// REINICIA TODO


function reiniciarJuego() {

  estado = "inicio";

  frameActual = 0;

  xLuffy = 400;
  yLuffy = 430;

  tiempoAnterior = millis();
  tiempoEstado = millis();
}
