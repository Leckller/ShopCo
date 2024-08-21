import IRoupa from '../Types/IRoupa';

export default class Roupa implements IRoupa {
  public avaliacao: number;

  public img: string;

  public nome: string;

  public preco: number;

  public desconto: number;

  public id: number;

  public type: 'Gym' | 'Formal' | 'Casual' | 'Party';

  public color: string;

  public size: 'Small' | 'Medium' | 'Large' | 'X-large';

  constructor(campos: IRoupa) {
    this.avaliacao = campos.avaliacao;
    this.nome = campos.nome;
    this.img = campos.img;
    this.preco = campos.preco;
    this.desconto = campos.desconto;
    this.id = campos.id;
    this.type = campos.type;
    this.size = campos.size;
    this.color = campos.color;
  }
}
