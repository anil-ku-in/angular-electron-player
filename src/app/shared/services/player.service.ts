import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  audio;

  constructor() {
    this.audio = new Audio();
  }

  play(url) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  getCurrentTime(time = null) {
    if (!time) {
      return this.audio.currentTime;
    }

    this.audio.currentTime = time;
  }

}
