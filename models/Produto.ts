import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  Nome: string;
  Descricao: string;
  data: string;
  tipo: String;
  categoria: Categoria | null;
  usuario: Usuario | null;
}