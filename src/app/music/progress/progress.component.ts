import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'music-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() elapsed  = 0;
  @Input() duration = 60;

  constructor() {}
  ngOnInit() {}

  secondsToMinutes(time) {
    const minutes = this.padTime(Math.floor(time / 60));
    const seconds = this.padTime((time % 60));

    return `${minutes}:${seconds}`;
  }

  get percentPlayed() {
    return (this.elapsed / this.duration) * 100;
  }

  private padTime(time) {
    return (time >= 10) ? time : `0${time}`;
  }

}
