import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SnewsComponent } from './snews/snews.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlatformComponent } from './platform/platform.component';
import { GenresComponent } from './genres/genres.component';
import { PublishersComponent } from './publishers/publishers.component';
import { DevelopersComponent } from './developers/developers.component';


const routes: Routes = [
  { path: '', component:HomeComponent },  
  { path: 'home', component:HomeComponent },  
  { path: 'news/:topic', component:NewsComponent },
  { path: 'snews/:query', component:SnewsComponent },
  { path: 'games/:tag/:id/:name', component:GamesComponent },  
  { path: 'game/:id', component:GameComponent },
  { path: 'movies/:tag', component:MoviesComponent },  
  { path: 'movie/:id', component:MovieComponent },
  { path: 'platform', component:PlatformComponent },
  { path: 'publishers', component:PublishersComponent },
  { path: 'developers', component:DevelopersComponent },
  { path: 'genres', component:GenresComponent },
  { path: '**', component:PageNotFoundComponent },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
