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

let botones = [
  {texto: "Jugar", x: 320, y: 235, w: 170, h: 50, accion: "jugar"},
  {texto: "Créditos", x: 290, y: 290, w: 230, h: 60, accion: "creditos"},
  {texto: "Volver", x: 110, y: 350, w: 90, h: 35, accion: "volverCreditos"},
  {texto: "Ir a la escena del crimen", x: 140, y: 400, w: 250, h: 40, accion: "crimen"},
  {texto: "Revisar expedientes en la PC", x: 400, y: 400, w: 250, h: 40, accion: "expedientes"},
  {texto: "Volver", x: 30, y: 385, w: 90, h: 35, accion: "volverPC"},
  {texto: "Investigar a Bruno", x: 140, y: 400, w: 250, h: 40, accion: "opcionBruno"},
  {texto: "Ir a la mansión", x: 400, y: 400, w: 250, h: 40, accion: "opcionMansion"},
  {texto: "Arrestar a Bruno", x: 140, y: 400, w: 250, h: 40, accion: "arrestarBruno"},
  {texto: "Exigir lista de clientes", x: 400, y: 400, w: 250, h: 40, accion: "exigirLista"}, 
  {texto: "Analizar las grabaciones", x: 140, y: 400, w: 250, h: 40, accion: "verGrabaciones"},
  {texto: "Rastrear dirección IP", x: 400, y: 400, w: 250, h: 40, accion: "rastrearIP"},
  {texto: "Desenvainar el arma y avanzar", x: 140, y: 400, w: 250, h: 40, accion: "avanzarAlmacen"},
  {texto: "Extraer datos del disco duro", x: 400, y: 400, w: 250, h: 40, accion: "extraerDatos"},
  {texto: "Ver el Vaso de licor", x: 10, y: 400, w: 250, h: 40, accion: "verVaso"},
  {texto: "Ver detrás del sillón", x: 270, y: 400, w: 250, h: 40, accion: "verSillón"},
  {texto: "Ver la caja fuerte", x: 530, y: 400, w: 250, h: 40, accion: "verCaja"},
  {texto: "Interrogar al personal de Vance", x: 140, y: 400, w: 250, h: 40, accion: "interrogarPersonal"},
  {texto: "Citar a Elena, hija de la victima", x: 400, y: 400, w: 265, h: 40, accion: "hablarElena"},
  {texto: "Conseguir más pruebas", x: 140, y: 400, w: 250, h: 40, accion: "revisarPruebas"},
  {texto: "Interrogar formalmente a Elena", x: 400, y: 400, w: 265, h: 40, accion: "interrogarElena"},
  {texto: "Confrontarla con las pruebas", x: 140, y: 400, w: 250, h: 40, accion: "pruebaPañuelo"},
  {texto: "Creer en su coartada", x: 400, y: 400, w: 265, h: 40, accion: "creerCoartada"},
  {texto: "Montar una trampa", x: 140, y: 400, w: 250, h: 40, accion: "armarTrampa"},
  {texto: "Acusar al culpable", x: 400, y: 400, w: 265, h: 40, accion: "acusarCulpable"},
  {texto: "Acusar formalmente a Elena", x: 10, y: 400, w: 250, h: 40, accion: "acusarElena"},
  {texto: "Acusar formalmente a Bruno", x: 270, y: 400, w: 250, h: 40, accion: "acusarBruno"},
  {texto: "Acusar formalmente al Mayordomo", x: 530, y: 400, w: 250, h: 40, accion: "acusarMayordomo"},
  {texto: "Guardar el pañuelo", x: 140, y: 400, w: 250, h: 40, accion: "guardarPañuelo"},
  {texto: "Buscar notas o registros", x: 400, y: 400, w: 250, h: 40, accion: "buscarRegistro"},
  {texto: "Fin", x: 30, y: 400, w: 80, h: 35, accion: "reiniciar"}
];

function preload() {
  for (let i = 0; i < 14; i++){
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
  
  // PANTALLA UNO
  if (pantalla === 1) {
    if (estadoTexto1 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Llueve sin descanso sobre el puerto. Son las", 410, 345);
      text("3:14 AM cuando suena el teléfono: han", 410, 365);
      text("hallado muerto al magnate Victor Vance", 410, 385);
      text("en su mansión.", 410, 405);
    } else if (estadoTexto1 === 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("No hay signos de violencia externa,", 410, 355);
      text("pero la caja fuerte está abierta y vacía.", 410, 375);
    } else if (estadoTexto1 === 2) {
      dibujarBotones(["crimen", "expedientes"]);
    }
  }

  // PANTALLA DOS
  if (pantalla === 2) {
    if (estadoTexto2 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Llegas a la propiedad de Victor. La cinta policial", 410, 345);
      text("delimita la entrada. El silencio del lugar es", 410, 365);
      text("casi sepulcral.", 410, 385);
    } else if (estadoTexto2 === 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("La escena del crimen estaba a tan solo unos", 410, 345);
      text("pocos pasos. Notas que la puerta principal", 410, 365);
      text("se encuentra sin llave.", 410, 385);
    } else if (estadoTexto2 === 2) {
      if (clicEn(250, 100, 100, 180)) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
    }
  }

  // PANTALLA TRES
  if (pantalla === 3) {
    if (estadoTexto3 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("La pantalla de la computadora ilumina tu rostro.", 410, 345);
      text("Descubres dos datos clave: Vance estaba siendo", 410, 365);
      text("investigado por lavado de dinero y su socio,", 410, 385);
      text("Bruno Meyer, presentó una demanda en su contra.", 410, 405);
    } else if (estadoTexto3 === 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Además, la hija de Vance figura como", 410, 345);
      text("única heredera.", 410, 365);
      text("¿Qué pista deseas seguir primero?", 410, 385);

      dibujarBotones(["volverPC", "opcionBruno", "opcionMansion"]);
    }
  }
  
  // PANTALLA CUATRO
  if (pantalla === 4) {
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
      dibujarBotones(["interrogarPersonal", "hablarElena"]);
    }
  }
  
  // PANTALLA CINCO
  if (pantalla === 5) {
    if (estadoTexto5 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("El cuerpo yace en la biblioteca sobre una", 410, 345);
      text("alfombra persa. Un vaso con licor a medio consumir", 410, 365);
      text("descansa sobre la mesa auxiliar.", 410, 385);
    } else if (estadoTexto5 === 1) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Sientes como tu garganta se cierra ante tan", 410, 345);
      text("espectacular escena del crimen. Lo único que", 410, 365);
      text("puede generarte temblar más, es el comenzar", 410, 385);
      text("a buscar pistas.", 410, 405);
    } else if (estadoTexto5 === 2) {
      dibujarBotones(["verVaso", "verSillón", "verCaja"]);
      if (mouseX > 350 && mouseX < 450 && mouseY > 200 && mouseY < 300) {
        cursor(HAND);
      } else {
        cursor(ARROW);
      }
    } else if (estadoTexto5 === 3) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Examinas el vaso. Detectas restos de cianuro.", 410, 345);
      text("Sin embargo, las marcas del vaso parecen haber", 410, 365);
      text("sido limpiadas torpemente.", 410, 385);
    } else if (estadoTexto5 === 4) {
      dibujarBotones(["verVaso", "verSillón", "verCaja"]);
    }
  }

  // PANTALLA SEIS
  if (pantalla === 6) {
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
    } else if (estadoTexto6 === 3) {
      dibujarBotones(["arrestarBruno", "exigirLista"]);
    }
  }
  
  // PANTALLA SIETE
  if (pantalla === 7) {
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
    } else if (estadoTexto7 === 2) {
      dibujarBotones(["interrogarElena", "revisarPruebas"]);
    }
  }
  
  // PANTALLA OCHO
  if (pantalla === 8) {
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
    } else if (estadoTexto8 === 3) {
      dibujarBotones(["pruebaPañuelo", "creerCoartada"]);
    }
  }
  
  // PANTALLA NUEVE
  if (pantalla === 9) {
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
      dibujarBotones(["verGrabaciones", "rastrearIP"]);
    }
  }
  
  // PANTALLA DIEZ
  if (pantalla === 10) {
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
      dibujarBotones(["avanzarAlmacen", "extraerDatos"]);
    }
  }
  
  // PANTALLA ONCE
  if (pantalla === 11) {
    if (estadoTexto11 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Revisando las cámaras y las pruebas físicas,", 410, 345);
      text("descubrís un detalle escalofriante: el veneno no", 410, 365);
      text("estaba en la copa de licor, sino en la medicina", 410, 385);
      text("para la presión que Víctor tomaba a diario.", 410, 405);
    } else if (estadoTexto11 === 1) {
      dibujarBotones(["acusarCulpable", "armarTrampa"]);
    }
  }
  
  // PANTALLA DOCE
  if (pantalla === 12) {
    if (estadoTexto12 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Las piezas encajan. Tienes frente a ti la resolución", 410, 345);
      text("del caso. Todo se reduce al motivo; la ambición,", 410, 365);
      text("la venganza o el chantaje. Tu deducción final", 410, 385);
      text("determinará quién pagrá por el crímen.", 410, 405);
    } else if (estadoTexto12 === 1) {
      dibujarBotones(["acusarElena", "acusarBruno", "acusarMayordomo"]);
    }
  }
  
  // PANTALLA TRECE
  if (pantalla === 13) {
    if (estadoTexto13 === 0) {
      image(burbujaTexto, 210, 240, 400, 200);
      textAlign(CENTER, CENTER);
      textSize(12);
      fill(0);
      text("Detrás del sillón difunto, encontras un pañuelo", 410, 355);
      text("bordado con las iniciales ´E.V´", 410, 375);
    } else if (estadoTexto13 === 1) {
      dibujarBotones(["guardarPañuelo", "buscarRegistro"]);
    }
  }
  
  // PANTALLA CATORCE
  if (pantalla === 14) {
    image(marcoPantalla, 0, 0, width, height);
    image(finalUno, (width - 320) / 2, (height - 380) / 2, 320, 380);
    dibujarBotones(["reiniciar"]);
  }

  // PANTALLA QUINCE
  if (pantalla === 15) {
    image(marcoPantalla, 0, 0, width, height);
    image(finalDos, (width - 320) / 2, (height - 380) / 2, 320, 380);
    dibujarBotones(["reiniciar"]);
  }

  // PANTALLA DIECISEIS
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
    if (acciones.includes(b.accion)) {
      if (clicEn(b.x, b.y, b.w, b.h)) fill(100, 100, 100, 240);
      else fill(35, 35, 35, 235);
      stroke(180);
      strokeWeight(2);
      rect(b.x, b.y, b.w, b.h, 6);
      noStroke();
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(13);
      text(b.texto, b.x + b.w / 2, b.y + b.h / 2);
    }
  }
}

function ejecutarBoton(acciones) {
  for (let b of botones) {
    if (acciones.includes(b.accion) && clicEn(b.x, b.y, b.w, b.h)) {
      if (b.accion === "jugar") {
        pantalla = 1;
        estadoTexto1 = 0;
        if (sonido && !sonido.isPlaying()) {
          sonido.loop();
        }
      }
      if (b.accion === "creditos") mostrarCreditos = true;
      if (b.accion === "volverCreditos") mostrarCreditos = false;
      if (b.accion === "crimen") { 
        pantalla = 2; 
        estadoTexto2 = 0; 
      }
      if (b.accion === "expedientes") { 
        pantalla = 3; 
        estadoTexto3 = 0; 
      }
      if (b.accion === "volverPC") {
        pantalla = 1;
        estadoTexto1 = 2;
      }
      if (b.accion === "opcionBruno") {
        pantalla = 6;
        estadoTexto6 = 0;
      }
      if (b.accion === "opcionMansion") {
        pantalla = 2;
        estadoTexto2 = 0; 
      }
      if (b.accion === "arrestarBruno") {
        pantalla = 9;
        estadoTexto9 = 0;
      }
      if (b.accion === "exigirLista") {
        pantalla = 10;
        estadoTexto10 = 0;
      }
      if (b.accion === "verGrabaciones") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (b.accion === "rastrearIP") {
        pantalla = 10;
        estadoTexto10 = 0;
      }
      if (b.accion === "avanzarAlmacen") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (b.accion === "extraerDatos") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (b.accion === "verCaja") {
        pantalla = 4;
        estadoTexto4 = 0;
      }
      if (b.accion === "interrogarPersonal") {
        pantalla = 7;
        estadoTexto7 = 0;
      }
      if (b.accion === "hablarElena") {
        pantalla = 8;
        estadoTexto8 = 0;
      }
      if (b.accion === "interrogarElena") {
        pantalla = 8;
        estadoTexto8 = 0;
      }
      if (b.accion === "revisarPruebas") {
        pantalla = 11;
        estadoTexto11 = 0;
      }
      if (b.accion === "pruebaPañuelo") {
        pantalla = 12;
        estadoTexto12 = 0;
      }
      if (b.accion === "creerCoartada") {
        pantalla = 9;
        estadoTexto9 = 0;
      }
      if (b.accion === "acusarCulpable") {
        pantalla = 12;
        estadoTexto12 = 0;
      }
      if (b.accion === "armarTrampa") {
        pantalla = 12;
        estadoTexto12 = 0;
      }
      if (b.accion === "acusarElena") {
        pantalla = 14;
      }
      if (b.accion === "acusarBruno") {
        pantalla = 15;
      }
      if (b.accion === "acusarMayordomo") {
        pantalla = 16;
      }
      if (b.accion === "guardarPañuelo") {
        pantalla = 7;
        estadoTexto7 = 0;
      }
      if (b.accion === "buscarRegistro") {
        pantalla = 5;
        estadoTexto5 = 0;
      }
      if (b.accion === "verSillón") {
        pantalla = 13;
        estadoTexto13 = 0;
      }
      if (b.accion === "verVaso") {
        estadoTexto5 = 3;
      }
      if (b.accion === "reiniciar") {
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
    if (estadoTexto1 === 0) {
      estadoTexto1 = 1;
    } else if (estadoTexto1 === 1) {
      estadoTexto1 = 2;
    } else if (estadoTexto1 === 2) {
      ejecutarBoton(["crimen", "expedientes"]);
    }
    return;
  }

  if (pantalla === 2) {
    if (estadoTexto2 === 0) {
      estadoTexto2 = 1;
    } else if (estadoTexto2 === 1) {
      estadoTexto2 = 2;
    } else if (estadoTexto2 === 2) {
      if (clicEn(250, 100, 100, 180)) {
        cursor(ARROW);
        pantalla = 5;
        estadoTexto5 = 0;
      }
    }
    return;
  }

  if (pantalla === 5) {
    if (estadoTexto5 === 0) {
      estadoTexto5 = 1;
    } else if (estadoTexto5 === 1) {
      estadoTexto5 = 2;
    } else if (estadoTexto5 === 2) {
      ejecutarBoton(["verVaso", "verSillón", "verCaja"]);
    } else if (estadoTexto5 === 3) {
      estadoTexto5 = 4;
    } else if (estadoTexto5 === 4) {
      ejecutarBoton(["verVaso", "verSillón", "verCaja"]);
    }
    return;
  }

  if (pantalla === 3) {
    if (estadoTexto3 === 0) {
      estadoTexto3 = 1;
    } else if (estadoTexto3 === 1) {
      ejecutarBoton(["volverPC", "opcionBruno", "opcionMansion"]);
    }
    return;
  }

  if (pantalla === 6) {
    if (estadoTexto6 === 0) {
      estadoTexto6 = 1;
    } else if (estadoTexto6 === 1){
      estadoTexto6 = 2;
    } else if (estadoTexto6 === 2){
      estadoTexto6 = 3;
    } else if (estadoTexto6 === 3){
      ejecutarBoton(["arrestarBruno", "exigirLista"]);
    }
    return;
  }
  
  if (pantalla === 9) {
    if (estadoTexto9 === 0) {
      estadoTexto9 = 1;
    } else if (estadoTexto9 === 1) {
      ejecutarBoton(["verGrabaciones", "rastrearIP"]);
    }
    return;
  }
  
  if (pantalla === 10) {
    if (estadoTexto10 === 0) {
      estadoTexto10 = 1;
    } else if (estadoTexto10 === 1) {
      ejecutarBoton(["avanzarAlmacen", "extraerDatos"]);
    }
    return;
  }
  
  if (pantalla === 4) {
    if (estadoTexto4 === 0) {
      estadoTexto4 = 1;
    } else if (estadoTexto4 === 1) {
      estadoTexto4 = 2;
    } else if (estadoTexto4 === 2) {
      ejecutarBoton(["interrogarPersonal", "hablarElena"]);
    }
    return;
  }
  
  if (pantalla === 7) {
    if (estadoTexto7 === 0) {
      estadoTexto7 = 1;
    } else if (estadoTexto7 === 1) {
      estadoTexto7 = 2;
    } else if (estadoTexto7 === 2) {
      ejecutarBoton(["interrogarElena", "revisarPruebas"]);
    }
    return;
  }

  if (pantalla === 8) {
    if (estadoTexto8 === 0) {
      estadoTexto8 = 1;
    } else if (estadoTexto8 === 1) {
      estadoTexto8 = 2;
    } else if (estadoTexto8 === 2) {
      estadoTexto8 = 3;
    } else if (estadoTexto8 === 3) {
      ejecutarBoton(["pruebaPañuelo", "creerCoartada"]);
    }
    return;
  }

  if (pantalla === 11) {
    if (estadoTexto11 === 0) {
      estadoTexto11 = 1;
    } else if (estadoTexto11 === 1) {
      ejecutarBoton(["acusarCulpable", "armarTrampa"]);
    }
    return;
  }
  
  if (pantalla === 12) {
    if (estadoTexto12 === 0) {
      estadoTexto12 = 1;
    } else if (estadoTexto12 === 1) {
      ejecutarBoton(["acusarElena", "acusarBruno", "acusarMayordomo"]);
    }
    return;
  }
  
  if (pantalla === 13) {
    if (estadoTexto13 === 0) {
      estadoTexto13 = 1;
    } else if (estadoTexto13 === 1) {
      ejecutarBoton(["guardarPañuelo", "buscarRegistro"]);
    }
    return;
  }

  if (pantalla === 14 || pantalla === 15 || pantalla === 16) {
    ejecutarBoton(["reiniciar"]);
    return;
  }
}
