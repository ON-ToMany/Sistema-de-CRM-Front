import { useContext } from 'react';
import { RiLoginBoxLine, RiSettings4Line, RiHome4Line, RiAddCircleLine, RiListCheck  } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/icons/logo-greentech.png';
import { AuthContext } from '../../../../contexts/AuthContext';

function Sidebar() {
  const { usuario, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItemsEmpresa = [
    { name: 'Início',    path: '/dashboard-empresa',  icon: RiHome4Line },
    { name: 'Gerenciar', path: '/gerenciar-empresa',  icon: RiSettings4Line },
  ];

  const navItemsCliente = [
    { name: 'Início',       path: '/dashboard-cliente',      icon: RiHome4Line },
    { name: 'Cadastrar',    path: '/cadastrar-oportunidade', icon: RiAddCircleLine },
    { name: 'Listar Todas', path: '/listar-oportunidades',   icon: RiListCheck },
  ];

  const navItems = usuario.tipo === 'empresa' ? navItemsEmpresa : navItemsCliente;

  function sair() {
    handleLogout();
    navigate('/login');
  }

  return (
    <aside className="group w-16 hover:w-60 h-screen bg-green-800/20 flex flex-col fixed border-r border-t border-b border-green-800 rounded-r-4xl py-6 px-3 gap-6 shadow-md transition-all duration-300 ease-in-out overflow-hidden z-50">
      <div className="flex items-center h-14 ">
        <div className="shrink-0 w-10 flex justify-center">
          <img src={Logo} alt="Greentech CRM" className="h-10 w-auto object-contain object-left"/>
        </div>

        <div className="ml-2 opacity-0 group-hover:opacity-100 w-0 group-hover:w-32 overflow-hidden transition-all duration-300 ease-in-out shrink-0">
          <p className="text-lg font-bold text-green-950 leading-5">Greentech <span className="text-green-700 font-medium">CRM</span></p>
        </div>
      </div>

      <hr className="border-green-800/30 mx-1" />

      <nav className="flex-1 flex flex-col gap-1 px-1">
        {navItems.map((item) => (
          <NavLink key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center h-10 rounded-xl px-1.5 transition-all duration-200 overflow-hidden
              ${isActive
                ? 'bg-green-800/30 text-green-950 font-bold'
                : 'text-black/70 font-semibold hover:bg-green-800/10 hover:text-green-950'
              }`
            }
          >

            <div className="shrink-0 w-10 flex ">
              <item.icon className="w-5 h-5" />
            </div>

            <span className="text-base whitespace-nowrap opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden transition-all duration-300 ease-in-out">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      <div>
        <button onClick={sair} className="w-full flex items-center h-10 bg-green-800 hover:bg-green-950 border border-green-950 text-gray-100 font-bold rounded-full transition-colors duration-200 shadow-md cursor-pointer overflow-hidden">
          <div className="shrink-0 w-10 flex justify-center">
            <RiLoginBoxLine className="w-5 h-5" />
          </div>

          <p className="text-base opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden transition-all duration-300 ease-in-out pr-4">
            Sair
          </p>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;