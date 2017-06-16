import { Component, OnInit } from '@angular/core';
import { SoundcloudService } from './shared/services/soundcloud.service';
import { PlayerService } from './shared/services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tracks: any;
  currentTrack;

  // info component
  title: string;
  artwork: string;

  // progress component
  elapsed: number = 0;
  duration: number = 60;

  isPlaying = true;

  constructor(
    private soundcloud: SoundcloudService,
    private player: PlayerService
  ) {}

  ngOnInit() {
    this.soundcloud.getPlaylist().subscribe(tracks => {
      this.tracks = tracks;
      this.updateCurrentTrack(tracks[0]);
    });

    // handle every time update
    this.player.audio.onended = this.handleSongEnded.bind(this);

    // handle when the song ends
    this.player.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  updateCurrentTrack(track) {
    this.currentTrack = track;
    this.title        = track.title;
    this.artwork      = track.artwork_url;

    // play the track
    const url = this.soundcloud.formatUrl(this.currentTrack.stream_url);
    this.player.play(url);

    new Notification('New Song!', {
      body: this.title,
      icon: this.artwork
    })
  }

  handlePreviousTrack() {
    const currentIndex = this.getCurrentIndex();

    // handle the first track case
    if (currentIndex === 0) {
      this.updateCurrentTrack(this.tracks[this.tracks.length - 1]);
    } else {
      this.updateCurrentTrack(this.tracks[currentIndex - 1]);
    }
  }

  handleNextTrack() {
    const currentIndex = this.getCurrentIndex();
    this.updateCurrentTrack(this.tracks[currentIndex + 1]);
  }

  handlePlayPause() {
    this.isPlaying = !this.isPlaying;
  }

  private getCurrentIndex() {
    return this.tracks.findIndex(track => track.id === this.currentTrack.id);
  }

  handleSongEnded() {
    this.handleNextTrack();
  }

  handleTimeUpdate() {
    this.elapsed  = this.player.audio.currentTime;
    this.duration = this.player.audio.duration;
  }

}
