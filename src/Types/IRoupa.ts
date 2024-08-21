export default interface IRoupa {
  img: string;
  nome: string;
  avaliacao: number;
  preco: number;
  desconto: number;
  type: 'Gym' | 'Formal' | 'Casual' | 'Party';
  id: number;
  size: 'Small' | 'Medium' | 'Large' | 'X-large';
  color: string
}
