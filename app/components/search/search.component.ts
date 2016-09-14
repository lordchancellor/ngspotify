import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
	moduleId: module.id,
	selector: 'sp-search',
	templateUrl: 'search.component.html'
})
export class SearchComponent {
	searchStr: string;
	
	constructor(private spotifyService: SpotifyService) {

	}

	searchMusic() {
		this.spotifyService.searchMusic(this.searchStr)
			.subscribe(res => {
				console.log(res.artists.items);
			});
	}
}