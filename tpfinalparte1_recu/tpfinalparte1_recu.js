let pantalla = 0;
let imagenes = [];
let burbujaTexto;

let estadoTexto1 = 0;
let estadoTexto2 = 0;
let estadoTexto3 = 0;
let estadoTexto4 = 0;
let estadoTexto5 = 0;
let estadoTexto6 = 0;
let estadoTexto7 = 0;
let estadoTexto8 = 0;
let estadoTexto9 = 0;
let estadoTexto10 = 0;
let estadoTexto11 = 0;
let estadoTexto12 = 0;
let estadoTexto13 = 0;
let estadoTexto14 = 0;

let personajeBruno;
let personajeMayordomo;
let personajeElena;
let marcoPantalla;
let finalUno;
let finalDos;
let finalTres;

let sonido;
let creditos;

let ojoIzq = [];
let ojoDer = [];
let frameActual = 0;
let tiempoAnimacion = 0;

let mostrarCreditos = false;

//b[0]: accion, b[1]: texto, b[2]: x, b[3]: y, b[4]: w, b[5]: h
let botones = [
  ["jugar", "Jugar", 320, 235, 170, 50],
  ["creditos", "Créditos", 290, 290, 230, 60],
  ["volverCreditos", "Volver", 110, 350, 90, 35],
  ["crimen", "Ir a la escena del crimen", 140, 400, 250, 40],
  ["expedientes", "Revisar expedientes en la PC", 400, 400, 250, 40],
  ["volverPC", "Volver", 30, 385, 90, 35],
  ["opcionBruno", "Investigar a Bruno", 140, 400, 250, 40],
  ["opcionMansion", "Ir a la mansión", 400, 400, 250, 40],
  ["arrestarBruno", "Arrestar a Bruno", 140, 400, 250, 40],
  ["exigirLista", "Exigir lista de clientes", 400, 400, 250, 40],
  ["verGrabaciones", "Analizar las grabaciones", 140, 400, 250, 40],
  ["rastrearIP", "Rastrear dirección IP", 400, 400, 250, 40],
  ["avanzarAlmacen", "Desenvainar el arma y avanzar", 140, 400, 250, 40],
  ["extraerDatos", "Extraer datos del disco duro", 400, 400, 250, 40],
  ["verVaso", "Ver el Vaso de licor", 10, 400, 250, 40],
  ["verSillón", "Ver detrás del sillón", 270, 400, 250, 40],
  ["verCaja", "Ver la caja fuerte", 530, 400, 250, 40],
  ["interrogarPersonal", "Interrogar al personal de Vance", 140, 400, 250, 40],
  ["hablarElena", "Citar a Elena, hija de la victima", 400, 400, 265, 40],
  ["revisarPruebas", "Conseguir más pruebas", 140, 400, 250, 40],
  ["interrogarElena", "Interrogar formalmente a Elena", 400, 400, 265, 40],
  ["pruebaPañuelo", "Confrontarla con las pruebas", 140, 400, 250, 40],
  ["creerCoartada", "Creer en su coartada", 400, 400, 265, 40],
  ["armarTrampa", "Montar una trampa", 140, 400, 250, 40],
  ["acusarCulpable", "Acusar al culpable", 400, 400, 265, 40],
  ["acusarElena", "Acusar formalmente a Elena", 10, 400, 250, 40],
  ["acusarBruno", "Acusar formalmente a Bruno", 270, 400, 250, 40],
  ["acusarMayordomo", "Acusar formalmente al Mayordomo", 530, 400, 250, 40],
  ["guardarPañuelo", "Guardar el pañuelo", 140, 400, 250, 40],
  ["buscarRegistro", "Buscar notas o registros", 400, 400, 250, 40],
  ["reiniciar", "Fin", 30, 400, 80, 35]
];

function preload() {
  for (let i = 0; i < 14; i++) {
    imagenes[i] = loadImage("data/pantalla" + i + ".png");
  }
  for (let i = 0; i <= 5; i++) {
    ojoIzq[i] = loadImage("data/sprite" + i + "_izq.png");
    ojoDer[i] = loadImage("data/sprite" + i + "_der.png");
  }

  sonido = loadSound("data/pianoloop.wav");
  burbujaTexto = loadImage("data/burbuja.png");
  personajeBruno = loadImage("data/Bruno.png");
  personajeMayordomo = loadImage("data/Mayordomo.png");
  personajeElena = loadImage("data/Elena.png");
  marcoPantalla = loadImage("data/marco.png");
  finalUno = loadImage("data/uno.png");
  finalDos = loadImage("data/dos.png");
  finalTres = loadImage("data/tres.png");
  creditos = loadImage("data/creditos.png");
}

function setup() {
  createCanvas(800, 450);
  textFont("Courier");
}

function draw() {
  background(0);

  if (pantalla > 0 && pantalla < 14 && imagenes[pantalla]) {
    image(imagenes[pantalla], 0, 0, width, height);
  }

  //PANTALLA CERO
  if (pantalla === 0) {
    if (mostrarCreditos) {
      image(creditos, 0, 0, width, height);

      tiempoAnimacion++;
      if (tiempoAnimacion > 10) {
        frameActual = (frameActual + 1) % 6;
        tiempoAnimacion = 0;
      }

      image(ojoIzq[frameActual], 600, 400);
      image(ojoDer[frameActual], 640, 400);

      dibujarBotones(["volverCreditos"]);
    } else {
      image(imagenes[0], 0, 0, width, height);
    }
  }

  //PANTALLA UNO
  if (pantalla === 1) {
    if (estadoTexto1 < 2) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto1 === 0) {
        text("Llueve sin descanso sobre el puerto. Son las", 410, 345);
        text("3:14 AM cuando suena el teléfono: han", 410, 365);
        text("hallado muerto al magnate Victor Vance", 410, 385);
        text("en su mansión.", 410, 405);
      } else if (estadoTexto1 === 1) {
        text("No hay signos de violencia externa,", 410, 355);
        text("pero la caja fuerte está abierta y vacía.", 410, 375);
      }
    } else {
      dibujarBotones(["crimen", "expedientes"]);
    }
  }

  //PANTALLA DOS
  if (pantalla === 2) {
    if (estadoTexto2 < 2) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto2 === 0) {
        text("Llegas a la propiedad de Victor. La cinta policial", 410, 345);
        text("delimita la entrada. El silencio del lugar es", 410, 365);
        text("casi sepulcral.", 410, 385);
      } else if (estadoTexto2 === 1) {
        text("La escena del crimen estaba a tan solo unos", 410, 345);
        text("pocos pasos. Notas que la puerta principal", 410, 365);
        text("se encuentra sin llave.", 410, 385);
      }
    }

    if (estadoTexto2 >= 2 && clicEn(250, 100, 100, 180)) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }

  //PANTALLA TRES
  if (pantalla === 3) {
    if (estadoTexto3 < 2) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto3 === 0) {
        text("La pantalla de la computadora ilumina tu rostro.", 410, 345);
        text("Descubres dos datos clave: Vance estaba siendo", 410, 365);
        text("investigado por lavado de dinero y su socio,", 410, 385);
        text("Bruno Meyer, presentó una demanda en su contra.", 410, 405);
      } else if (estadoTexto3 === 1) {
        text("Además, la hija de Vance figura como", 410, 345);
        text("única heredera.", 410, 365);
        text("¿Qué pista deseas seguir primero?", 410, 385);
      }
    } else {
      dibujarBotones(["volverPC", "opcionBruno", "opcionMansion"]);
    }
  }

  //PANTALLA CUATRO
  if (pantalla === 4) {
    if (estadoTexto4 < 3) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto4 === 0) {
        text("La caja fuerte no fué forzada: se abrió", 410, 355);
        text("con el código correcto.", 410, 375);
      } else if (estadoTexto4 === 1) {
        text("En el suelo hay un trozo de papel quemado", 410, 355);
        text("con una frase a medio leer:", 410, 375);
      } else if (estadoTexto4 === 2) {
        text("´El trato se cierra hoy a medianoche...", 410, 355);
        text("no falles, -B.´", 410, 375);
      }
    } else {
      dibujarBotones(["interrogarPersonal", "hablarElena"]);
    }
  }

  //PANTALLA CINCO
  if (pantalla === 5) {
    if (estadoTexto5 < 2) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto5 === 0) {
        text("El cuerpo yace en la biblioteca sobre una", 410, 345);
        text("alfombra persa. Un vaso con licor a medio consumir", 410, 365);
        text("descansa sobre la mesa auxiliar.", 410, 385);
      } else if (estadoTexto5 === 1) {
        text("Sientes como tu garganta se cierra ante tan", 410, 345);
        text("espectacular escena del crimen. Lo único que", 410, 365);
        text("puede generarte temblar más, es el comenzar", 410, 385);
        text("a buscar pistas.", 410, 405);
      }
    } else if (estadoTexto5 === 3) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Examinas el vaso. Detectas restos de cianuro.", 410, 345);
      text("Sin embargo, las marcas del vaso parecen haber", 410, 365);
      text("sido limpiadas torpemente.", 410, 385);
    } else {
      dibujarBotones(["verVaso", "verSillón", "verCaja"]);
    }

    if (mouseX > 350 && mouseX < 450 && mouseY > 200 && mouseY < 300) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }

  //PANTALLA SEIS
  if (pantalla === 6) {
    if (estadoTexto6 < 3) {
      if (estadoTexto6 === 0) {
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("Encuentras a Bruno en su despacho privado", 410, 355);
        text("intentando triturar documentos.", 410, 375);
      } else if (estadoTexto6 === 1) {
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("Al verte, se pone pálido y, sudando frío,", 410, 355);
        text("decide declarar.", 410, 375);
      } else if (estadoTexto6 === 2) {
        image(personajeBruno, 325, 90, 200, 220);
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("¡No tuve nada que ver! Victor quería", 410, 345);
        text("confesar la estafa a las autoridades, pero", 410, 365);
        text("alguien más lo frenó.", 410, 385);
      }
    } else {
      dibujarBotones(["arrestarBruno", "exigirLista"]);
    }
  }

  //PANTALLA SIETE
  if (pantalla === 7) {
    if (estadoTexto7 < 2) {
      if (estadoTexto7 === 0) {
        image(personajeMayordomo, 325, 90, 200, 220);
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("El mayordomo afirma que la señorita Elena", 410, 355);
        text("discutió violentamente con su padre a las", 410, 375);
        text("10:00 PM.", 410, 395);
      } else if (estadoTexto7 === 1) {
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("Sin embargo, también menciona haber visto", 410, 355);
        text("una figura sospechosa salir por el jardín", 410, 375);
        text("trasero cerca de la medianoche", 410, 395);
      }
    } else {
      dibujarBotones(["interrogarElena", "revisarPruebas"]);
    }
  }

  //PANTALLA OCHO
  if (pantalla === 8) {
    if (estadoTexto8 < 3) {
      if (estadoTexto8 === 0) {
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("Elena viste de negro y mantiene una postura", 410, 355);
        text("fría, casi distante.", 410, 375);
      } else if (estadoTexto8 === 1) {
        image(personajeElena, 325, 90, 200, 220);
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("´Mi padre era un hombre despiadado, pero yo no", 410, 350);
        text("lo maté. Estaba con mi abogado preparando mi", 410, 370);
        text("renuncia al testamento cuando ocurrió´", 410, 390);
      } else if (estadoTexto8 === 2) {
        image(personajeElena, 325, 90, 200, 220);
        image(burbujaTexto, 210, 240, 400, 200);
        textAlign(CENTER, CENTER);
        textSize(12);
        fill(0);
        text("dice, mientras muestra su teléfono con", 410, 360);
        text("llamadas verificables.", 410, 380);
      }
    } else {
      dibujarBotones(["pruebaPañuelo", "creerCoartada"]);
    }
  }

  //PANTALLA NUEVE
  if (pantalla === 9) {
    if (estadoTexto9 < 2) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto9 === 0) {
        text("Los registros financieros revelan que", 410, 345);
        text("horas antes de su muerte, Victor transifiró", 410, 365);
        text("la totalidad de sus cuentas offshore a una", 410, 385);
        text("corporación fantasma con sede en Panamá.", 410, 405);
      } else if (estadoTexto9 === 1) {
        text("La clave de seguridad requería autenticación", 410, 355);
        text("biométrica de Victor", 410, 375);
      }
    } else {
      dibujarBotones(["verGrabaciones", "rastrearIP"]);
    }
  }

  //PANTALLA DIEZ
  if (pantalla === 10) {
    if (estadoTexto10 < 2) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);

      if (estadoTexto10 === 0) {
        text("La lista (de IP) te lleva a un almacén abandonado", 410, 345);
        text("junto a los muelles. Al entrar, ves varias pantallas", 410, 365);
        text("encendidas mostrando el circuito cerrado de", 410, 385);
        text("la mansión Vance y el software aún abierto.", 410, 405);
      } else if (estadoTexto10 === 1) {
        text("Alguien te estuvo vigilando", 410, 355);
        text("todo este tiempo.", 410, 375);
      }
    } else {
      dibujarBotones(["avanzarAlmacen", "extraerDatos"]);
    }
  }

  //PANTALLA ONCE
  if (pantalla === 11) {
    if (estadoTexto11 < 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Revisando las cámaras y las pruebas físicas,", 410, 345);
      text("descubrís un detalle escalofriante: el veneno no", 410, 365);
      text("estaba en la copa de licor, sino en la medicina", 410, 385);
      text("para la presión que Víctor tomaba a diario.", 410, 405);
    } else {
      dibujarBotones(["acusarCulpable", "armarTrampa"]);
    }
  }

  //PANTALLA DOCE
  if (pantalla === 12) {
    if (estadoTexto12 < 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Las piezas encajan. Tienes frente a ti la resolución", 410, 345);
      text("del caso. Todo se reduce al motivo; la ambición,", 410, 365);
      text("la venganza o el chantaje. Tu deducción final", 410, 385);
      text("determinará quién pagrá por el crímen.", 410, 405);
    } else {
      dibujarBotones(["acusarElena", "acusarBruno", "acusarMayordomo"]);
    }
  }

  //PANTALLA TRECE
  if (pantalla === 13) {
    if (estadoTexto13 < 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Detrás del sillón difunto, encontras un pañuelo", 410, 355);
      text("bordado con las iniciales ´E.V´", 410, 375);
    } else {
      dibujarBotones(["guardarPañuelo", "buscarRegistro"]);
    }
  }

  //PANTALLA CATORCE
  if (pantalla === 14) {
    image(marcoPantalla, 0, 0, width, height);
    image(finalUno, (width - 320) / 2, (height - 380) / 2, 320, 380);
    dibujarBotones(["reiniciar"]);
  }

  //PANTALLA QUINCE
  if (pantalla === 15) {
    image(marcoPantalla, 0, 0, width, height);
    image(finalDos, (width - 320) / 2, (height - 380) / 2, 320, 380);
    dibujarBotones(["reiniciar"]);
  }

  //PANTALLA DIECISEIS
  if (pantalla === 16) {
    image(marcoPantalla, 0, 0, width, height);
    image(finalTres, (width - 320) / 2, (height - 380) / 2, 320, 380);
    dibujarBotones(["reiniciar"]);
  }
}

function clicEn(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function dibujarBotones(acciones) {
  for (let b of botones) {
    if (acciones.includes(b[0])) {
      if (clicEn(b[2], b[3], b[4], b[5])) fill(100, 100, 100, 240);
      else fill(35, 35, 35, 235);
      stroke(180);
      strokeWeight(2);
      rect(b[2], b[3], b[4], b[5], 6);
      noStroke();
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(13);
      text(b[1], b[2] + b[4] / 2, b[3] + b[5] / 2);
    }
  }
}

function ejecutarBoton(acciones) {
  for (let b of botones) {
    let accion = b[0];
    if (acciones.includes(accion) && clicEn(b[2], b[3], b[4], b[5])) {
      if (accion === "jugar") {
        pantalla = 1;
        estadoTexto1 = 0;
        if (sonido && !sonido.isPlaying()) {
          sonido.loop();
        }
      }
      if (accion === "creditos") mostrarCreditos = true;
      if (accion === "volverCreditos") mostrarCreditos = false;
      if (accion === "crimen") {
        pantalla = 2;
        estadoTexto2 = 0;
      }
      if (accion === "expedientes") {
        pantalla = 3;
        estadoTexto3 = 0;
      }
      if (accion === "volverPC") {
        pantalla = 1;
        estadoTexto1 = 1;
      }
      if (accion === "opcionBruno") {
        pantalla = 6;
        estadoTexto6 = 0;
      }
      if (accion === "opcionMansion") {
        pantalla = 2;
        estadoTexto2 = 0;
      }
      if (accion === "arrestarBruno") {
        pantalla = 9;
        estadoTexto9 = 0;
      }
      if (accion === "exigirLista") {
        pantalla = 10;
        estadoTexto10 = 0;
      }
      if (accion === "verGrabaciones") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (accion === "rastrearIP") {
        pantalla = 10;
        estadoTexto10 = 0;
      }
      if (accion === "avanzarAlmacen") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (accion === "extraerDatos") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (accion === "verCaja") {
        pantalla = 4;
        estadoTexto4 = 0;
      }
      if (accion === "interrogarPersonal") {
        pantalla = 7;
        estadoTexto7 = 0;
      }
      if (accion === "hablarElena") {
        pantalla = 8;
        estadoTexto8 = 0;
      }
      if (accion === "interrogarElena") {
        pantalla = 8;
        estadoTexto8 = 0;
      }
      if (accion === "revisarPruebas") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (accion === "pruebaPañuelo") {
        pantalla = 12;
        estadoTexto12 = 0;
      }
      if (accion === "creerCoartada") {
        pantalla = 9;
        estadoTexto9 = 0;
      }
      if (accion === "acusarCulpable") {
        pantalla = 12;
        estadoTexto12 = 0;
      }
      if (accion === "armarTrampa") {
        pantalla = 12;
        estadoTexto12 = 0;
      }
      if (accion === "acusarElena") {
        pantalla = 14;
      }
      if (accion === "acusarBruno") {
        pantalla = 15;
      }
      if (accion === "acusarMayordomo") {
        pantalla = 16;
      }
      if (accion === "guardarPañuelo") {
        pantalla = 7;
        estadoTexto7 = 0;
      }
      if (accion === "buscarRegistro") {
        pantalla = 5;
        estadoTexto5 = 0;
      }
      if (accion === "verSillón") {
        pantalla = 13;
        estadoTexto13 = 0;
      }
      if (accion === "verVaso") {
        estadoTexto5 = 3;
      }
      if (accion === "reiniciar") {
        pantalla = 0;
        mostrarCreditos = false;
      }
      return true;
    }
  }
  return false;
}

function mousePressed() {
  if (pantalla === 0) {
    if (mostrarCreditos) ejecutarBoton(["volverCreditos"]);
    else ejecutarBoton(["jugar", "creditos"]);
    return;
  }

  if (pantalla === 1) {
    if (estadoTexto1 >= 2 && ejecutarBoton(["crimen", "expedientes"])) return;
    if (estadoTexto1 < 2) estadoTexto1++;
    return;
  }

  if (pantalla === 2) {
    if (estadoTexto2 >= 2 && clicEn(250, 100, 100, 180)) {
      cursor(ARROW);
      pantalla = 5;
      estadoTexto5 = 0;
      return;
    }
    if (estadoTexto2 < 2) estadoTexto2++;
    return;
  }

  if (pantalla === 3) {
    if (estadoTexto3 >= 2 && ejecutarBoton(["volverPC", "opcionBruno", "opcionMansion"])) return;
    if (estadoTexto3 < 2) estadoTexto3++;
    return;
  }

  if (pantalla === 4) {
    if (estadoTexto4 >= 3 && ejecutarBoton(["interrogarPersonal", "hablarElena"])) return;
    if (estadoTexto4 < 3) estadoTexto4++;
    return;
  }

  if (pantalla === 5) {
    if (estadoTexto5 >= 2 && estadoTexto5 !== 3 && ejecutarBoton(["verVaso", "verSillón", "verCaja"])) return;
    if (estadoTexto5 < 2) estadoTexto5++;
    else if (estadoTexto5 === 3) estadoTexto5 = 4;
    return;
  }

  if (pantalla === 6) {
    if (estadoTexto6 >= 3 && ejecutarBoton(["arrestarBruno", "exigirLista"])) return;
    if (estadoTexto6 < 3) estadoTexto6++;
    return;
  }

  if (pantalla === 7) {
    if (estadoTexto7 >= 2 && ejecutarBoton(["interrogarElena", "revisarPruebas"])) return;
    if (estadoTexto7 < 2) estadoTexto7++;
    return;
  }

  if (pantalla === 8) {
    if (estadoTexto8 >= 3 && ejecutarBoton(["pruebaPañuelo", "creerCoartada"])) return;
    if (estadoTexto8 < 3) estadoTexto8++;
    return;
  }

  if (pantalla === 9) {
    if (estadoTexto9 >= 2 && ejecutarBoton(["verGrabaciones", "rastrearIP"])) return;
    if (estadoTexto9 < 2) estadoTexto9++;
    return;
  }

  if (pantalla === 10) {
    if (estadoTexto10 >= 2 && ejecutarBoton(["avanzarAlmacen", "extraerDatos"])) return;
    if (estadoTexto10 < 2) estadoTexto10++;
    return;
  }

  if (pantalla === 11) {
    if (estadoTexto11 >= 1 && ejecutarBoton(["acusarCulpable", "armarTrampa"])) return;
    if (estadoTexto11 < 1) estadoTexto11++;
    return;
  }

  if (pantalla === 12) {
    if (estadoTexto12 >= 1 && ejecutarBoton(["acusarElena", "acusarBruno", "acusarMayordomo"])) return;
    if (estadoTexto12 < 1) estadoTexto12++;
    return;
  }

  if (pantalla === 13) {
    if (estadoTexto13 >= 1 && ejecutarBoton(["guardarPañuelo", "buscarRegistro"])) return;
    if (estadoTexto13 < 1) estadoTexto13++;
    return;
  }

  if (pantalla === 14 || pantalla === 15 || pantalla === 16) {
    ejecutarBoton(["reiniciar"]);
    return;
  }
}
