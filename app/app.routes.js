"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./components/search/search.component');
var about_component_1 = require('./components/about/about.component');
var artist_component_1 = require('./components/artist/artist.component');
var album_component_1 = require('./components/album/album.component');
var APP_ROUTES = [
    { path: '', component: search_component_1.SearchComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'artist/:id', component: artist_component_1.ArtistComponent },
    { path: 'album/:id', component: album_component_1.AlbumComponent }
];
exports.routes = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map