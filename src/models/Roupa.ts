import IRoupa from '../Types/IRoupa';

export default class Roupa implements IRoupa {
  public avaliacao: number;

  public img: string;

  public nome: string;

  public preco: number;

  public desconto: number;

  constructor(campos: IRoupa) {
    this.avaliacao = campos.avaliacao;
    this.nome = campos.nome;
    this.img = campos.img;
    this.preco = campos.preco;
    this.desconto = campos.desconto;
  }
}
