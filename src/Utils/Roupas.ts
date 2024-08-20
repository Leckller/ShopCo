import Roupa from '../models/Roupa';
import { TopSeeling, Arrivals } from '../assets/Roupas/index';

// ARRIVALS

const tshirtWithTapeDetails = new Roupa({
  img: Arrivals.camisaCinza,
  avaliacao: 4.5,
  nome: 'T-shirt with Tape Details',
  preco: 120,
  desconto: 1,
});

const SkinnyFitJeans = new Roupa({
  img: Arrivals.SkinnyFitJeans,
  avaliacao: 3.5,
  nome: 'Skinny Fit Jeans',
  preco: 240,
  desconto: 0.8,
});

const CheckeredShirt = new Roupa({
  img: Arrivals.CheckeredShirt,
  avaliacao: 4.5,
  nome: 'Checkered Shirt',
  preco: 180,
  desconto: 1,
});

const SleeveStripedTshirt = new Roupa({
  img: Arrivals.SleeveStripedTshirt,
  avaliacao: 4.5,
  nome: 'Sleeve Striped T-shirt',
  preco: 130,
  desconto: 0.7,
});

const arrivals = [
  tshirtWithTapeDetails,
  SkinnyFitJeans,
  CheckeredShirt,
  SleeveStripedTshirt,
];

// TOP SEELING

const VerticalStripedShirt = new Roupa({
  img: TopSeeling.VerticalStripedShirt,
  avaliacao: 5,
  nome: 'Vertical Striped Shirt',
  preco: 212,
  desconto: 0.8,
});
const CourageGraphicTshirt = new Roupa({
  img: TopSeeling.CourageGraphicTshirt,
  avaliacao: 4,
  nome: 'Courage Graphic T-shirt',
  preco: 145,
  desconto: 1,
});
const LooseFitBermudaShorts = new Roupa({
  img: TopSeeling.LooseFitBermudaShorts,
  avaliacao: 3,
  nome: 'Loose Fit Bermuda Shorts',
  preco: 80,
  desconto: 1,
});
const FadedSkinnyJeans = new Roupa({
  img: TopSeeling.FadedSkinnyJeans,
  avaliacao: 4.5,
  nome: 'Faded Skinny Jeans',
  preco: 210,
  desconto: 1,
});

const topSeeling = [
  VerticalStripedShirt,
  CourageGraphicTshirt,
  LooseFitBermudaShorts,
  FadedSkinnyJeans,
];

export const Roupas = {
  arrivals,
  topSeeling,
};
