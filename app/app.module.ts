import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { HttpModule } from '@angular/http';

import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent],
	imports: [BrowserModule, routes, FormsModule, ReactiveFormsModule, HttpModule],
	bootstrap: [AppComponent],
	providers: [SpotifyService]
})
export class AppModule {}