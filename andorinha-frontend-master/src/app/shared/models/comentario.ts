import { Tweet } from './tweet';
import { Usuario } from './usuario';

export class Comentario {

    id: number;
    conteudo: string;
    data: Date;
    tweet: Tweet;
    usuario: Usuario;
}