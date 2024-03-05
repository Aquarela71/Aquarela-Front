import './Contato.css';

function Contato() {
    return (
        <>
            <div className="flex flex-wrap items-stretch justify-center items-center font-archivo h-full w-full">
                <div className="w-full md:w-1/2 flex-wrap flex fundo h-screen text-gray-100 justify-center items-center p-4">
                        <div className="flex flex-col h-full justify-center w-3/4">
                            <h1 className="text-3xl font-bold mb-6 ">Entre em contato conosco!</h1>
                            <p className="break-words mb-6 w-96">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nam illo cumque distinctio, molestiae veritatis dolores cum quis illum soluta a officia atque saepe! Eum voluptate ipsa autem totam soluta.</p>
                            <p className="mb-3">Endereço: Rua ABC, 123</p>
                            <p className="mb-3">Cidade: Sua Cidade</p>
                            <p className="mb-3">Telefone: (99) 9999-9999</p>
                        </div>
                </div>

                    {/* Div da Direita */}
                    <div className="w-1/2 p-4 font-archivo p-5">
                        <form className="flex flex-col h-full justify-center items-center bg-gray-100 rounded border shadow-md">
                            <div className="input-group mb-4 flex flex-col">
                                <label htmlFor="nome" className="text-d mb-2">Nome:</label>
                                <input type="text" id="nome" className="p-2 border rounded w-96" />
                            </div>
                            <div className="input-group mb-4 flex flex-col">
                                <label htmlFor="email" className="text-lg mb-2">Email:</label>
                                <input type="email" id="email" className="p-2 border rounded w-96" />
                            </div>
                            <div className="input-group mb-4 flex flex-col">
                                <label htmlFor="assunto" className="text-lg mb-2">Assunto:</label>
                                <input type="text" id="assunto" className="p-2 border rounded w-96" />
                            </div>
                            <div className="input-group mb-4 flex flex-col" >
                                <label htmlFor="mensagem" className="text-lg mb-2">Mensagem:</label>
                                <textarea id="mensagem" className="p-2 border rounded h-32 w-96"></textarea>
                            </div>
                            <button type="submit" className="bg-diurno text-white py-2 px-4 rounded w-96 hover:bg-ros transition duration-300">Enviar</button>
                        </form>
                    </div>
                </div>
        </>
    );
}

export default Contato;
