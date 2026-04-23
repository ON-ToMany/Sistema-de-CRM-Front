import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Plus, X } from 'lucide-react';
import { AuthContext } from '../../contexts/AuthContext';
import logoEscritaCrm from '../../assets/img/logoescrita-crm.png';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const { handleLogout } = useContext(AuthContext);

  const navItems = [
    { name: 'Inicio', path: '/dashboard', icon: Home },
    { name: 'Cadastrar', path: '/dashboard/cadastrar', icon: Plus },
    { name: 'Listar Todas', path: '/dashboard/listar', icon: Plus },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`w-56 h-screen bg-[#C4D1C9] flex flex-col fixed left-0 top-0 border-r border-[#0D542B] md:border-t md:border-b rounded-r-[40px] z-50 transform transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex items-center justify-between">
          <img src={logoEscritaCrm} alt="Greentech CRM Logo" className="h-12 w-auto object-contain" />
          <button onClick={onClose} className="md:hidden text-[#0D542B]">
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
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
    </>
  );
};

export default Sidebar;
