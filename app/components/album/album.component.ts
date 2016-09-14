import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Album } from '../../../Album';
import { Artist } from '../../../Artist';

@Component({
	moduleId: module.id,
	selector: 'sp-album',
	templateUrl: 'album.component.html',
	styles: [`
		.album-thumb {
			width: 100%;
		}
	`]
})
export class AlbumComponent implements OnInit, OnDestroy {
	id: string;
	album: Album[];

	constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params
			.map( params => params['id'] )
			.subscribe((id) => {
				this.spotifyService.getAlbum(id)
					.subscribe(album => {
						this.album = album;
					})
			})
	}

	ngOnDestroy() {
		//TODO Unsubscribe
	}	
}