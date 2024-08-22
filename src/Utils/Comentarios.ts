/* eslint-disable max-len */
import { Comentario } from '../models/Comentario';
import IComentario from '../Types/IComentario';

const Sarah = new Comentario({ avaliacao: 5,
  nome: 'Sarah M.',
  comentario: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.”',
  verificado: true });

const Alex = new Comentario({ avaliacao: 5,
  nome: 'Alex K.',
  comentario: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  verificado: true });

const James = new Comentario({ avaliacao: 5,
  nome: 'James L.',
  comentario: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”',
  verificado: true });

const Mooen = new Comentario({ avaliacao: 5,
  nome: 'Mooen',
  comentario: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”',
  verificado: true });

const Comentarios: IComentario[] = [Sarah, Sarah, Alex, James, Mooen];

export default Comentarios;
