import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tweet } from '../models/tweet';
import { TweetSeletor } from "../models/seletor/tweet.seletor";
import { Observable, throwError } from 'rxjs';
import { AuthDto } from '../models/authDto';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private apiUrl = 'http://localhost:8080/andorinha-backend/api/tweet';

  constructor( private http: HttpClient ) { }

  listarTodos(): Observable<HttpResponse<Tweet>>{
    return this.http.get<Tweet>("http://localhost:8080/andorinha-backend/api/tweet", {observe: 'response'});
  }

  inserir(tweet: Tweet): Observable<Tweet> {
    return this.http.post<Tweet>("http://localhost:8080/andorinha-backend/api/tweet", tweet);
    
  }

  public pesquisar(seletor: TweetSeletor): Observable<Tweet[]> {
    return this.http.post<Tweet[]>("http:localhost:8080/andorinha-backend/api/comentario/pesquisar", seletor);
  }

  public consultar(id: number): Observable<Tweet> {
    return this.http.get<Tweet>(`http://localhost:8080/andorinha-backend/api/tweet/${id}`);
  }
}

