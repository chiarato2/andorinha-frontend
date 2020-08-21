import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Tweet } from 'src/app/shared/models/tweet';
import { Usuario } from 'src/app/shared/models/usuario';
import { Comentario } from 'src/app/shared/models/comentario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
  
  private tweet: Tweet = new Tweet();

  private tweets: Array<Tweet> = new Array<Tweet>();
  headers: any;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.limparFormulario();
    this.listarTweets();
  }

  limparFormulario(): void {
    this.tweet = new Tweet();
    let user: Usuario = new Usuario();
    user.id = 10;
    user.nome = "Rodrigo";
    this.tweet.usuario = user;
  }

  listarTweets(): void {
      this.api.tweet().listarTodos().subscribe( tweets => {
        console.log(tweets);
        //this.tweets = tweets; 
    }); 
    /* this.api.tweet().listarTodos().subscribe( resp => {const keys = resp.headers.keys();
    this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
    this.tweets = { ... resp.body; id: number; conteudo: string; data: Date; usuario: Usuario; };
    }); */
  }

  tweetar(): void {
    this.api.tweet().inserir(this.tweet).subscribe( t => {
      this.limparFormulario();  
      this.listarTweets();
    });
  }
}
