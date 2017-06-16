import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { ControlsComponent } from './controls/controls.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoComponent, ControlsComponent, ProgressComponent],
  exports: [InfoComponent, ControlsComponent, ProgressComponent]
})
export class MusicModule { }
