import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
	{path: '', component: SearchComponent},
	{path: 'about', component: AboutComponent}
];

export const routes = RouterModule.forRoot(APP_ROUTES);