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
      <div className="jjustify-center items-center imgTitulos flex text-eggnog font-dm text-5xl h-80 text-left mb-2 ">
        <h1 className=" ml-8 text-7xl">Sobre nós</h1>
      </div>

      <div className="flex flex-wrap justify-around items-center font-dm mb-2 ">
        <div className="w-1/2 flex items-center justify-center flex-col bg-bege h-screen">
          <img
            src={img2}
            alt="img"
            className="w-full h-full object-cover mb-4 "
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center bg-lar font-archivo h-screen">
          <h1 className=" text-center text-7xl  text-eggnog font-dm ">
            {" "}
            Nossa Historia
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

      <div className="container-cols-3 flex justify-around justify-between px-4 pyy text-center text-ver font-bold font-archivo border-b-2 border-t-2 border-lar ">
        <div className="justify-center items-center">
          <img
            src={img7}
            alt="Imagem de prato"
            className="imgdef rounded-2xl mb-4"
          />
          <ModalAtuacaDeOng />
        </div>

        <div>
          <img
            src={img8}
            alt="Imagem de costura"
            className="imgdef rounded-2xl mb-4"
          />
          <ModalAtuacao />
        </div>

        <div>
          <img
            src={img9}
            alt="Imagem de cerâmica"
            className="imgdef rounded-2xl mb-4"
          />
          <ModalDesenvolvimento />
        </div>
      </div>

      <div className="flex flex-wrap justify-around items-center font-dm mb-7 mt-2">
        <div className="w-1/2 flex flex-col items-center justify-center bg-lar font-archivo h-screen my-10">
          <div className="mb-6">
            <h1 className="text-center text-7xl  text-eggnog font-dm">
              Missão
            </h1>
            <p className="max-w-xl text-xl p-4 text-white">
              Promover a salvaguarda do fazer artesanal de tradição cultural,
              estimulando a autonomia dos artesãos e o seu desenvolvimento
              sociocultural e econômico, enquanto direcionamos todos os lucros
              para doações a ONGs que auxiliam minorias em situação de
              vulnerabilidade.
            </p>
          </div>
          <div className="">
            <h1 className="text-center text-7xl  text-eggnog font-dm">
              Visão e Valores
            </h1>
            <p className="max-w-xl text-xl p-4 text-white">
              Valorizamos a ética e responsabilidade socioambiental, enaltecendo
              a diversidade cultural brasileira. Sonhamos com um Brasil onde o
              artesanato tradicional esteja plenamente integrado à nossa cultura
              e economia, enquanto continuamos a fortalecer nossa parceria com
              outras ONGs comprometidas.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center flex-col bg-bege h-screen">
          <img
            src={img11}
            alt=""
            className="w-full h-full object-cover mb-4 "
          />
        </div>
      </div>
    </>
  );
};

export default SobreNos;
