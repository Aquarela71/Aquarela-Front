import Produto  from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  fotous: string;
  tipo: string;
  Produto?: Produto | null;
  token: string;
}