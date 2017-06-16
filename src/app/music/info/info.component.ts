import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'music-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() title: string = 'My Song!';
  @Input() artwork: string = 'http://placekitten.com/g/400/400';

  constructor() {}

  ngOnInit() {}

}
