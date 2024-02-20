import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="w-full bg-noturno text-diurno flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase">
            Aquarela
          </Link>

          <div className="flex gap-4">
            <div className="hover:underline">Produtos</div>
            <div className="hover:underline">Sobre nós</div>
            <div className="hover:underline">Contato</div>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
