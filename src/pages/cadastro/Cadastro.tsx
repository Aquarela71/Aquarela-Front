import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../model/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { RotatingLines } from 'react-loader-spinner'
import { toastAlerta } from '../../util/toastAlerta'

function Cadastro() {

  let navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    fotous: "",
    tipo: "",
    token:"",
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    fotous: "",
    tipo: "",
    token:"",
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }


  function atualizarEstados(e: ChangeEvent< HTMLSelectElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }


  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')
        setIsLoading(false)
      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário', 'erro')
      }
      setIsLoading(false)
    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'info')
      setUsuario({ ...usuario, senha: "" }) 
      setConfirmaSenha("")                  
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold mb-5 mtt">
        <div className="fundoCadastro hidden lg:block border-r-2 border-ver"></div>
        <form className='flex justify-center items-center rounded-xl p-6 flex-col w-2/3 gap-3 ' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-ver text-5xl font-dm'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome"  className="ml-2 font-barlow text-lar text-xl" >Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-lg
              focus:border-ver focus:outline-none focus:text-ver"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario"  className="ml-2 font-barlow text-lar text-xl">Email</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Email"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-lg
              focus:border-ver focus:outline-none focus:text-ver"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
                    
          <div className="flex flex-col w-full">
            <label htmlFor="tipo" className="ml-2 font-barlow text-lar text-xl">Tipo</label>
            <select
              id="tipo"
              name="tipo"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-gray-400 bg-white text-lg
              focus:border-ver focus:outline-none focus:text-ver"
              value={usuario.tipo} 
              onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstados(e)}
>
            <option value="" className='font-archivo'>Selecione o Tipo de Conta</option>
             <option value={"vendedor"}>Vendedor</option>
             <option value={"comprador"}>Comprador</option> 
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="ml-2 font-barlow text-lar text-xl">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-lg
              focus:border-ver focus:outline-none focus:text-ver"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="ml-2 font-barlow text-lar text-xl">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-lg
              focus:border-ver focus:outline-none focus:text-ver"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-center w-full gap-8">
            <button className='rounded-xl text-xl font-barlow text-white bg-lar hover:bg-ros w-1/2 py-2 cursor-pointer flex justify-center' type='submit'>
            {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
          <span>Cadastrar</span>
}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro