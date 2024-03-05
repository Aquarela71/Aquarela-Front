import im1 from '../../assets/img/sobre4.jpg';
import im2 from '../../assets/img/sobre5.jpg';
import im3 from '../../assets/img/sobre8.jpg';
import im4 from '../../assets/img/colaboracao.png'
import im5 from '../../assets/img/plantar.png'
import im6 from '../../assets/img/transparencia.png'

function Sobre() {
    return (
        <>
            <div className='bg-lar'>
                {/* Imagem com título */}
                <div className="justify-center items-center imgTitulo flex flex-wrap text-white font-dm text-5xl h-80">
                    <h1 className="text-5xl">Sobre nós</h1>
                </div>

                <div className="flex flex-wrap items-stretch justify-around items-center font-dm h-full containersm">
                    <div className="w-full md:w-1/2 flex items-center justify-center flex-col bg-bege text-cinza">
                        <h1 className="text-3xl p-4 mt-3">Nossa História</h1>
                        <img src={im3} alt="" className="w-3/4 object-cover mb-4 p-4" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-lar font-archivo text-cinza p-2">
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis hic minus harum!</p>
                    </div>
                </div>

                {/*-------------------------------*/}

                <div className="flex flex-wrap items-stretch justify-around items-center font-dm h-full flex-row-reverse containersm">
                    <div className="w-full md:w-1/2 flex items-center justify-center flex-col bg-bege text-cinza">
                        <h1 className="text-3xl p-4 mt-3">Nossa Missão</h1>
                        <img src={im2} alt="" className="w-3/4 object-cover mb-4 p-4" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-lar font-archivo text-cinza p-2">
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis hic minus harum!</p>
                    </div>
                </div>
                {/*-------------------------------*/}

                {/*VALORES*/}
                <div className="flex flex-col items-center justify-center font-dm p-4 bg-begeclaro w-full h-full ">
                    <h1 className="text-3xl font-bold mb-10 text-gray-700 mt-4">Nossos Valores</h1>
                    <div className="flex justify-around space-x-8 gap-6 flex-col sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-t-2 border-gray-500 p-4">
                            <img src={im4} alt="Imagem 1" className="w-32 h-32 object-cover mb-2" />
                            <h2 className="text-2xl italic font-semibold mt-4 text-gray-700">Colaboração</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center border-t-2 border-gray-500 p-4">
                            <img src={im5} alt="Imagem 2" className="w-32 h-32 object-cover mb-2" />
                            <h2 className="text-2xl italic font-semibold mt-4 text-gray-700 break-words text-center">Responsabilidade social e ambiental</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center border-t-2 border-gray-500 p-4">
                            <img src={im6} alt="Imagem 3" className="w-32 h-32 object-cover mb-2" />
                            <h2 className="text-2xl italic font-semibold mt-4 text-gray-700">Transparência</h2>
                        </div>
                    </div>
                </div>


                {/*-------------------------------*/}

                <div className="flex flex-wrap items-stretch justify-around items-center font-dm h-full containersm">
                    <div className="w-full md:w-1/2 flex items-center justify-center flex-col bg-bege text-cinza">
                        <h1 className="text-3xl p-4 mt-3">Nosso Time</h1>
                        <img src={im3} alt="" className="w-3/4 object-cover mb-4 p-4" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-lar font-archivo text-cinza p-2">
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
                        <p className="max-w-xl text-xl p-4 break-words">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis hic minus harum!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sobre;
