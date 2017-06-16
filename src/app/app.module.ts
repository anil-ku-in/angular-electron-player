import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MusicModule } from './music/music.module';
import { AppComponent } from './app.component';
import { SoundcloudService } from './shared/services/soundcloud.service';
import { PlayerService } from './shared/services/player.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    HttpModule
  ],
  providers: [
    SoundcloudService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
