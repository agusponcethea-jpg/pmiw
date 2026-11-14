class Sonido {
  constructor(rutaArchivo) {
    this.audio = loadSound(rutaArchivo);
    this.reproduciendo = false;
  }

  iniciarLoop() {
    if (this.audio && !this.audio.isPlaying()) {
      this.audio.setVolume(1.0);
      this.audio.loop();
      this.reproduciendo = true;
    }
  }S

  detener() {
    if (this.audio && this.audio.isPlaying()) {
      this.audio.stop();
      this.reproduciendo = false;
    }
  }
}
