import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
	moduleId: module.id,
	selector: 'sp-artist',
	templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
	id: string;
	artist: Artist[];
	albums: Album[];

	constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {

	}

	ngOnInit() {
		this.route.params
			.map( params => params['id'] )
			.subscribe((id) => {
				this.spotifyService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
					})
			})
	}
}