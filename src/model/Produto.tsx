
import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  material: string;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}