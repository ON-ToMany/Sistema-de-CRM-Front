import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Plus, Settings } from 'lucide-react';
import logoEscritaCrm from '../../../../assets/icons/logoescrita-crm.png';
import { AuthContext } from '../../../../contexts/AuthContext';

function Sidebar() {
  const { usuario, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItemsEmpresa = [
    { name: 'Início',    path: '/dashboard-empresa',  icon: Home     },
    { name: 'Gerenciar', path: '/gerenciar-empresa',  icon: Settings },
  ];

  const navItemsCliente = [
    { name: 'Início',            path: '/dashboard-cliente',      icon: Home },
    { name: 'Cadastrar',         path: '/cadastrar-oportunidade', icon: Plus },
    { name: 'Listar Todas',      path: '/listar-oportunidades',   icon: Plus },
  ];

  const navItems = usuario.tipo === 'empresa' ? navItemsEmpresa : navItemsCliente;

  function sair() {
    handleLogout();
    navigate('/login');
  }

  return (
    <aside className="w-fit h-screen bg-green-800/20 flex flex-col fixed border-r border-t border-b border-green-800 rounded-r-4xl p-6 gap-6 shadow-md">    
  
      <div className="p-4 flex items-center">
        <img src={logoEscritaCrm} alt="Greentech CRM Logo" className="h-14 w-auto object-contain" />
      </div>

      <hr className='text-black/20' />
        
      <nav className="flex-1 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 transition-all duration-200 group ${
                isActive
                  ? 'text-green-900 font-bold'
                  : 'text-black font-semibold opacity-80 hover:opacity-100'
              }`
            }
          >
            <item.icon className="w-6 h-6" strokeWidth={2.5} />
            <span className="text-xl">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Botão Sair */}
      <div className="p-4">
        <button
          onClick={sair}
          className="w-full bg-green-800 border border-green-950 text-gray-200 font-bold py-2 px-6 rounded-full text-xl hover:bg-green-950 transition-colors shadow-md cursor-pointer"
        >
          SAIR
        </button>
      </div>
    </aside>
  )
}

export default Sidebar;