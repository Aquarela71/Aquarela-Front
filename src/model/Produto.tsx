import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  material: string;
  foto: string;
 descricao: string;
 preco: number;
  Categoria: Categoria | null;
  Usuario: Usuario | null;
}