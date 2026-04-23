import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Plus } from 'lucide-react';
import logoEscritaCrm from '../../assets/img/logoescrita-crm.png';

const Sidebar = () => {
  const navItems = [
    { name: 'Inicio', path: '/dashboard', icon: Home },
    { name: 'Cadastrar', path: '/dashboard/cadastrar', icon: Plus },
    { name: 'Listar Todas', path: '/dashboard/listar', icon: Plus },
  ];

  return (
    <aside className="w-64 h-screen bg-[#C4D1C9] flex flex-col fixed left-0 top-0 border-r border-[#AAB7AF] rounded-r-[40px] z-50">
      {/* Logo Section */}
      <div className="p-8 flex items-center">
        <img src={logoEscritaCrm} alt="Greentech CRM Logo" className="h-16 w-auto object-contain" />
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 mt-10 px-6 space-y-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 transition-all duration-200 group ${
                isActive ? 'text-[#114232] font-bold' : 'text-[#114232] font-semibold opacity-80 hover:opacity-100'
              }`
            }
          >
            <item.icon 
              className="w-6 h-6" 
              strokeWidth={2.5}
            />
            <span className="text-xl">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer - Logout Button */}
      <div className="p-8 mt-auto">
        <button className="w-full bg-[#114232] text-white font-bold py-3 px-6 rounded-full text-xl hover:bg-[#0c3125] transition-colors shadow-md">
          SAIR
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
