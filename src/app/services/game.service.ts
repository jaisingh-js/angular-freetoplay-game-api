import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IGame } from '../interfaces/igame';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiUrl: string = 'https://free-to-play-games-database.p.rapidapi.com/api';
  headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'a1052e3ae8msheffc4b191d1bd04p1f7e9ajsnd988b301cb9d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  });

  games: IGame[] = [];

  constructor(private http: HttpClient) { }

  getGames(): Observable<IGame[]>{
    return this.http.get<IGame[]>(this.apiUrl + '/games', { headers: this.headers});
  }

  getGameById(id: string): Observable<IGame> {
    return this.http.get<IGame>(this.apiUrl + '/game', {
      headers: this.headers,
      params: {id: id}
    });
  }

  getGameByCategory(category: string): Observable<IGame[]> {
    return this.http.get<IGame[]>(this.apiUrl + '/games', {
      headers: this.headers,
      params: {category: category}
    });
  }

  getGameByPlatform(platform: string): Observable<IGame[]> {
    return this.http.get<IGame[]>(this.apiUrl + '/games', {
      headers: this.headers,
      params: {platform: platform}
    });
  }


}
