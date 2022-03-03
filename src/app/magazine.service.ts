import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MagazineService {
  // ************************************************************************

  news: string;
  lnews: string;
  Mreq:string;
  Imdbreq: string;
  Gamereq:string;
  Freegames:string;

// ************************************************************************

  NApiKey = '4b52610129879fe86204b896a2fb9226';
  // The movie DB 
  MApikey = '4064d3cf728dd1f9795500d53522a709'
  // Imdb Api
  ImdbApi = 'k_esmy7weu';
  // Game APi
  GApikey = '6529b3a907c1413683d0a3abe8e4c605';

// ***************************************************************************

  headers = {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '4c9e774696msh301b3532bd69a5cp194daajsn07f62cd3c573'
  }
// ***************************************************************************
  constructor(private http: HttpClient) {

    this.news = `https://gnews.io/api/v4/search?lang=en&country=in&token=${this.NApiKey}`;
    this.lnews = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${this.NApiKey}`;
    this.Mreq = `https://api.themoviedb.org/3/movie/`
    this.Imdbreq = `https://imdb-api.com/en/API/FullCast/${this.ImdbApi}/`;
    this.Gamereq = `https://api.rawg.io/api`;
    this.Freegames = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=release-date`
  }
  // *************************************************************************

  getLatestNews(): Observable<any> {
    return this.http.get<any>(this.lnews);
  }

  // *************************************************************************

  getFreegames(): Observable<any>{
    return this.http.get<any>(this.Freegames,{headers:this.headers});
  }

  // *************************************************************************
  
  getLatestNewsByTopic(topic:string): Observable<any>{
    let url=`${this.lnews}&topic=${topic}`
    return this.http.get<any>(url);
  }

  // *************************************************************************
  
  getNews(query:string): Observable<any>{
    let url=`${this.news}&q=${query}`
    return this.http.get<any>(url);
  }
    
  // *************************************************************************

  getMovies(tag:string): Observable<any>{
    let url=`${this.Mreq}${tag}?api_key=${this.MApikey}&language=en-US&region-IN&page=1`
    return this.http.get<any>(url);
  }

  // *************************************************************************

  getMovieDetails(id: string): Observable<any> {
    let url = `${this.Mreq}${id}?api_key=${this.MApikey}&language=en-US&region-IN&page=1`
    return this.http.get<any>(url);
  }

  // *************************************************************************

  getCast(id:string): Observable<any>{
    let url=`${this.Imdbreq}${id}`
    return this.http.get<any>(url);
  }
  
  // *************************************************************************
  getGames(id:string): Observable<any>{
    let url=`${this.Gamereq}/${id}?key=${this.GApikey}`;
    return this.http.get<any>(url);
  }

  // *************************************************************************

  getGamesByDeveloper(id:string): Observable<any>{
    let url=`${this.Gamereq}/games?developers=${id}&key=${this.GApikey}`;
    return this.http.get<any>(url);
  }

  // *************************************************************************

  getGamesByPlatform(id:string): Observable<any>{
    let url=`${this.Gamereq}/games?platforms=${id}&key=${this.GApikey}`;
    return this.http.get<any>(url);
  }
  
  // *************************************************************************
  getGamesByPublishers(id:string): Observable<any>{
    let url=`${this.Gamereq}/games?publishers=${id}&key=${this.GApikey}`;
    return this.http.get<any>(url);
  }

  // *************************************************************************
  getGamesByGenres(id:string): Observable<any>{
    let url=`${this.Gamereq}/games?genres=${id}&key=${this.GApikey}`;
    return this.http.get<any>(url);
  }

   // *************************************************************************

  getGameDetails(id:string): Observable<any>{
    let url=`${this.Gamereq}/games/${id}?key=${this.GApikey}`;
    return this.http.get<any>(url);
  }

// **********************************************************************
}

