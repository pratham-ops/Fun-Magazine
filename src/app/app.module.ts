import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SnewsComponent } from './snews/snews.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { PlatformComponent } from './platform/platform.component';
import { GenresComponent } from './genres/genres.component';
import { PublishersComponent } from './publishers/publishers.component';
import { DevelopersComponent } from './developers/developers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    SnewsComponent,
    GamesComponent,
    GameComponent,
    MoviesComponent,
    MovieComponent,
    PageNotFoundComponent,
    PlatformComponent,
    GenresComponent,
    PublishersComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
