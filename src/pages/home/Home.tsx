import { Link } from "react-router-dom";
import ModalProduto from "../../components/produto/modalProduto/ModalProduto";
import Carousel from "../../components/carrossel/Carrossel";
import img1 from "../../assets/Images/prato.jpg";
import img2 from "../../assets/Images/costura.jpg";
import img3 from "../../assets/Images/carimbo.jpg";
import img4 from "../../assets/Images/argila.jpg";
import imm1 from "../../assets/Images/bolotinhas.jpg";
import imm2 from "../../assets/Images/criancasfazendocoisas.jpg";
import imm3 from "../../assets/Images/coisasdaparede.jpg";
import imm4 from "../../assets/Images/fsojdgojgdhsoi.jpg";
import "./Home.css";

function Home() {
  const carouselImages = [imm1, imm2, imm3, imm4];

  return (
    <>
      {/* Titulo e Imagem */}
      <div className="justify-center items-center flex pyy df text-white font-dm text-5xl text-center">
        <h1>PROJETO AQUARELA</h1>
      </div>

      <div className="flex justify-center items-center border-b-2 border-t-2 border-noturno font-barlow font-bold uppercase text-lar text-xl p-2 mt-6">
        <p>
          <Link to="/sobreNos" className="hover:text-ros">
            Sobre Nós
          </Link>
        </p>
      </div>

      {/* Componente do carrossel */}
      <div className="mb-10">
        <Carousel images={carouselImages} />
      </div>

      <div className="md:flex justify-center items-center flex-col py-10 text-center text-eggnog bg-lar text-4xl font-playfair mt-1 mb-2 xs:text-2xl">
        <p className="font-dm">Unindo tradição e apoio!</p>
        <p>
          Nossa plataforma, sua conexão com o artesanato brasileiro genuíno.
        </p>
        <Link to={"/produtos"}>
          {" "}
          <button className="bg-ver rounded-full text-xl p-3 mt-5">
            Produtos
          </button>
        </Link>
      </div>

      {/* Imagem à esquerda e texto à direita */}
      <div className="flex flex-wrap font-archivo border-b-4">
        <div className="md:w-1/2">
          <img
            src={img4}
            alt="Imagem composição"
            className="w-full object-cover md:h-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center font-playfair text-4xl text-bege text-center bg-noturno p-8 xl:text-5xl">
          <p className="m-4">
            Uma plataforma que navega você por um mundo onde a autêntica
            manufatura brasileira é exaltada.
          </p>
          <p className="m-4">
            Um lugar onde cada centavo tem um impacto valioso no suporte a
            milhares de pessoas em todo o país.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
