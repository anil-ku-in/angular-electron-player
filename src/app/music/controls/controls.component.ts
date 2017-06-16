import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'music-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() playing    = true;
  @Output() backward  = new EventEmitter();
  @Output() forward   = new EventEmitter();
  @Output() playpause = new EventEmitter();

  constructor() {}
  ngOnInit() {}

}
