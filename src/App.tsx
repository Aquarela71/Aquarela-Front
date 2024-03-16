
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaProdutos from './components/produto/listaProduto/ListaProduto';
import ListaCategorias from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import SobreNos from './pages/sobre/SobreNos';
//import ContatoCard from './components/contato/Contato';
import Carrinho from './components/carrinho/Carrinho';
import { CarrinhoProvider } from './contexts/CarrinhoContext';


function App() {
  return (
    <>

        <AuthProvider>
        <CarrinhoProvider> 
          <ToastContainer />
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
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/listacategoria" element={<ListaCategorias/>} />
              <Route path="/sobreNos" element={<SobreNos/>} />
              <Route path="/carrinho" element={<Carrinho/>} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </CarrinhoProvider>
      </AuthProvider>
    </>
  );
}
export default App;