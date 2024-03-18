import React from "react";
import img2 from "../../assets/Images/Nosso historia.jpg";
import img7 from "../../assets/Images/prato.jpg";
import img8 from "../../assets/Images/carimbo.jpg";
import img9 from "../../assets/Images/costura.jpg";
import "./SobreNos.css";
import img11 from "../../assets/Images/Missao e Valores.jpeg";
import ModalAtuacaDeOng from "../../components/sobre/AtuacaoDeOngs";
import ModalAtuacao from "../../components/sobre/NossaAtuacao";
import ModalDesenvolvimento from "../../components/sobre/DesenvolvimentoSustentavel";

const SobreNos: React.FC = () => {
  return (
    <>
      <div className="items-center imgTitulos flex text-eggnog font-dm text-5xl h-80 text-left mb-2 ">
        <h1 className=" ml-8 text-7xl">Sobre nós</h1>
      </div>

      <div className="md:flex md:flex-row md:flex-wrap md:justify-around md:items-center font-dm mb-2 sm:flex sm:flex-col sm:justify-center sm:items-center">        
        <div className="md:w-1/2 md:flex md:items-center md:justify-center md:h-screen sm:flex-col bg-bege">
          <img
            src={img2}
            alt="img"
            className="w-full h-screen object-cover mb-4 "
          />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center md:h-screen bg-lar font-archivo">
          <h1 className="text-center text-7xl p-2 text-eggnog font-dm ">
            {" "}
            Nossa História
          </h1>
          <p className="max-w-xl text-lg1 p-4 text-white">
            Fundada em 2024, a ONG Aquarela surgiu com o propósito de promover a
            preservação e valorização do fazer artesanal de tradição cultural
            brasileira, com uma abordagem única: todo o lucro gerado é revertido
            em doações para outras ONGs de confiança, que prestam auxílio às
            minorias em situação de vulnerabilidade. Destacamos que nossa
            produção é 100% nacional, valorizando assim não apenas a cultura,
            mas também a economia local.
          </p>
          <p className="max-w-xl text-lg1 p-4 text-white">
            Nosso compromisso ético e responsabilidade socioambiental norteiam
            cada uma de nossas ações. Valorizamos profundamente as identidades
            culturais brasileiras e aspiramos por um futuro onde o saber
            artesanal de tradição esteja não apenas vivo, mas também
            contribuindo ativamente para a inclusão e o desenvolvimento
            socioeconômico do país.
          </p>
          <p className="max-w-xl text-lg1 p-4 text-white">
            Com uma equipe dedicada e apaixonada pelo artesanato brasileiro, a
            ONG Aquarela continua empenhada em sua missão de preservar,
            valorizar e promover a riqueza cultural do Brasil por meio do
            trabalho artesanal. Convidamos você a se juntar a nós nessa jornada
            de solidariedade e transformação social.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col p-8 md:flex-row md:gap-12 md:p-8 text-center text-ver font-bold font-archivo border-b-2 border-t-2 border-lar">
        <div className="justify-center items-center ">
          <img
            src={img7}
            alt="Imagem de prato"
            className="imgdef rounded-2xl mb-4 mt-4"
          />
          <ModalAtuacaDeOng />
        </div>

        <div>
          <img
            src={img8}
            alt="Imagem de costura"
            className="imgdef rounded-2xl mb-4 mt-4"
          />
          <ModalAtuacao />
        </div>

        <div>
          <img
            src={img9}
            alt="Imagem de cerâmica"
            className="imgdef rounded-2xl mb-4 mt-4"
          />
          <ModalDesenvolvimento />
        </div>
      </div>

      <div className="md:flex md:flex-wrap md:justify-around md:items-center font-dm mb-7 mt-2">
        <div className="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center md:h-screen bg-lar p-4 font-archivo my-10">
          <div className="mb-6">
            <h1 className="md:text-7xl text-center text-eggnog font-dm text-5xl pt-4">
              Missão
            </h1>
            <p className="max-w-xl md:text-xl text-lg p-4 text-white">
              Promover a salvaguarda do fazer artesanal de tradição cultural,
              estimulando a autonomia dos artesãos e o seu desenvolvimento
              sociocultural e econômico, enquanto direcionamos todos os lucros
              para doações a ONGs que auxiliam minorias em situação de
              vulnerabilidade.
            </p>
          </div>
          <div className="">
            <h1 className="text-center md:text-7xl  text-eggnog font-dm text-5xl">
              Visão e Valores
            </h1>
            <p className="max-w-xl md:text-xl text-lg p-4 text-white">
              Valorizamos a ética e responsabilidade socioambiental, enaltecendo
              a diversidade cultural brasileira. Sonhamos com um Brasil onde o
              artesanato tradicional esteja plenamente integrado à nossa cultura
              e economia, enquanto continuamos a fortalecer nossa parceria com
              outras ONGs comprometidas.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex md:items-center md:justify-center md:flex-col bg-bege md:h-screen">
          <img
            src={img11}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default SobreNos;
