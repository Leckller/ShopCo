import IComentario from '../Types/IComentario';

export class Comentario implements IComentario {
  public avaliacao: number;

  public comentario: string;

  public nome: string;

  public verificado: boolean;

  constructor(campos: IComentario) {
    this.avaliacao = campos.avaliacao;
    this.comentario = campos.comentario;
    this.nome = campos.nome;
    this.verificado = campos.verificado;
  }
}
