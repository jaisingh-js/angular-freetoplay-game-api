import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGame } from '../interfaces/igame';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiUrl: string = environment.apiUrl;
  headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': environment.apiKey,
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
