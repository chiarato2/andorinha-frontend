import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/shared/models/comentario';
import { ApiService } from 'src/app/shared/services/api.service';
import { Usuario } from 'src/app/shared/models/usuario';
import { Tweet } from 'src/app/shared/models/tweet';
import { ComentarioSeletor } from 'src/app/shared/models/seletor/comentario.seletor';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TweetSeletor } from "src/app/shared/models/seletor/tweet.seletor";

@Component({
  selector: 'app-comentario-detalhe',
  templateUrl: './comentario-detalhe.component.html',
  styleUrls: ['./comentario-detalhe.component.css']
})
export class ComentarioDetalheComponent implements OnInit {

  private tweet: Tweet = new Tweet();
  private tweets: Array<Tweet> = new Array<Tweet>();
  
  private comentario: Comentario = new Comentario();
  private comentarios: Array<Comentario> = new Array<Comentario>();

  constructor( private route: ActivatedRoute, private api: ApiService ) { }

  ngOnInit() {
    this.buscarComentario();
  }

  buscarComentario(){
    this.route.paramMap.subscribe(params => {
     
      const id = Number(params.get('id'));
      
      this.api.tweet().consultar(id).subscribe(tweet => this.tweet = tweet);

      const seletor = new ComentarioSeletor();
      seletor.idTweet = id;
      console.log(id);
      
      this.api.comentario().pesquisar(seletor).subscribe(comentarios => this.comentarios = comentarios);
    });
  }
}

