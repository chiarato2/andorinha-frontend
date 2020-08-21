import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/comentario';
import { ComentarioSeletor } from '../models/seletor/comentario.seletor';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private apiUrl = 'http://localhost:8080/andorinha-backend/api';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Array<Comentario>> {
    return this.http.get<Array<Comentario>>("http://localhost:8080/andorinha-backend/api/comentario");
  }

  public consultar(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.apiUrl}/comentario/${id}`);
  }

  public pesquisar(seletor: ComentarioSeletor): Observable<Comentario[]> {
    //return this.http.post<Comentario[]>(`${this.apiUrl}/comentario/pesquisar`, seletor);
    return this.http.post<Comentario[]>("http://localhost:8080/andorinha-backend/api/comentario/pesquisar", seletor);
  }
}

