
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaProdutos from './components/Produto/listaProdutos/ListaProdutos';
import ListaCategorias from './components/Categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/Categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/Categoria/deletarCategoria/DeletarCategoria';
import FormularioProduto from './components/Produto/formularioProduto/FormularioProduto';



function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProdutos" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto/>} />
              <Route path="/listacategoria" element={<ListaCategorias/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;