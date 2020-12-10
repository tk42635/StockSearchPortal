import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent},
   { path: 'portfolio', component: WatchlistComponent},
   { path: 'details/:id', component: WatchlistComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
