import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Plus } from 'lucide-react';
import { AuthContext } from '../../contexts/AuthContext';
import logoEscritaCrm from '../../assets/img/logoescrita-crm.png';

const Sidebar = () => {
  const { handleLogout } = useContext(AuthContext);

  const navItems = [
    { name: 'Inicio', path: '/dashboard', icon: Home },
    { name: 'Cadastrar', path: '/dashboard/cadastrar', icon: Plus },
    { name: 'Listar Todas', path: '/dashboard/listar', icon: Plus },
  ];

  return (
    <aside className="w-56 h-screen bg-[#C4D1C9] flex flex-col fixed left-0 top-0 border-r border-t border-b border-[#0D542B] rounded-r-[40px] z-50">
      <div className="p-8 flex items-center">
        <img src={logoEscritaCrm} alt="Greentech CRM Logo" className="h-12 w-auto object-contain" />
      </div>

      <nav className="flex-1 mt-6 px-6 space-y-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 transition-all duration-200 group ${isActive ? 'text-green-950 font-extrabold' : 'text-green-950 font-bold opacity-80 hover:opacity-100 hover:text-[#0D542B]'
              }`
            }
          >
            <item.icon
              className="w-5 h-5"
              strokeWidth={2.5}
            />
            <span className="text-lg">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-8 mt-auto flex justify-center">
        <button
          onClick={handleLogout}
          className="w-full bg-[#0D542B] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-950 transition-all shadow-md"
        >
          SAIR
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
