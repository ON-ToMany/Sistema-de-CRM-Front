import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Home, Plus } from 'lucide-react';
import logoEscritaCrm from '../../assets/icons/logoescrita-crm.png';

// 1. Importe o useContext do React e o seu AuthContext
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'; // Ajuste o caminho se necessário

const Sidebar = () => {
  // 2. Instancie o hook useNavigate para fazer o redirecionamento de tela
  const navigate = useNavigate();

  // 3. Desestruture a função handleLogout do seu contexto
  const { handleLogout } = useContext(AuthContext);

  const navItems = [
    { name: 'Inicio', path: '/dashboard', icon: Home },
    { name: 'Cadastrar', path: '/dashboard/cadastrar', icon: Plus },
    { name: 'Listar Todas', path: '/dashboard/listar', icon: Plus },
  ];

  // 4. Crie a função que vai executar o logout e mudar a rota
  function logout() {
    handleLogout(); // Limpa o estado global e remove o token do localStorage
    navigate('/Login'); // Redireciona o usuário para a página de Login
  }

  return (
    <aside className="w-64 h-screen bg-[#C4D1C9] flex flex-col fixed left-0 top-0 border-r border-[#AAB7AF] rounded-r-[40px] z-50">
      {/* Logo Section */}
      <div className="p-8 flex items-center">
        <img src={logoEscritaCrm} alt="Greentech CRM Logo" className="h-16 w-auto object-contain" />
      </div>

 
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

   
      <div className="p-8 mt-auto">

        <button 
          onClick={logout}
          className=" cursor-pointer  w-full bg-[#114232] text-white font-bold py-3 px-6 rounded-full text-xl hover:bg-[#0c3125] transition-colors shadow-md"
        >
          SAIR
        </button>
      </div>
    </aside>
  ); 
};

export default Sidebar;