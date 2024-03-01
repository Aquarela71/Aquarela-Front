import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  Categoria: Categoria | null;
  Usuario: Usuario | null;
  nome: string;
  descricao: string;
  preco: string;
  material: string;
  Foto: string;
 }