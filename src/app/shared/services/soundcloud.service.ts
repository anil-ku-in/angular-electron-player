import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SoundcloudService {
  clientId         = '2f98992c40b8edf17423d93bda2e04ab';
  playlistId       = '201812900';
  soundcloudApiUrl = 'https://api.soundcloud.com';

  constructor(private http: Http) {}

  formatUrl(url) {
    return `${url}?client_id=${this.clientId}`;
  }

  getPlaylist() {
    const url = `${this.soundcloudApiUrl}/playlists/${this.playlistId}?client_id=${this.clientId}`;

    return this.http.get(url)
                    .map(res => res.json())
                    .map(data => data.tracks);
  }

}
