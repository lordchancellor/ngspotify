import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
	moduleId: module.id,
	selector: 'sp-artist',
	templateUrl: 'artist.component.html',
	styleUrls: ['artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {
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

				this.spotifyService.getAlbums(id)
					.subscribe(albums => {
						this.albums = albums.items;
					})
			})
	}

	ngOnDestroy() {
		//TODO Unsubscribe
	}
}