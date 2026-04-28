import { Link } from "react-router-dom";
import Logo from '../../../../assets/icons/logo-greentech.png';

const Footer = () => (
  <footer className="bg-green-900/15 text-gray-700 pt-12 pb-6 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-10 mb-10">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Greentech CRM" className="h-12 object-contain" />
          <div className="leading-tight">
            <p className="font-bold text-lg text-gray-900">Greentech</p>
            <p className=" font-medium text-sm text-gray-500">CRM</p>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-bold text-sm mb-4 text-green-900 uppercase tracking-wider">
            NAVEGAÇÃO
          </h4>
          <ul className="grid grid-cols-3 gap-2.5 text-center md:grid-cols-1 md:text-left">
            {[
              { label: "Início", path: "/" },
              { label: "Sobre", path: "/#sobre" },
              { label: "Pontos de Coleta", path: "/#coleta" },
              { label: "Parceiros", path: "/parceria" },
              { label: "Rastreie", path: "/#rastreamento" },
              { label: "Gerencie", path: "/#gerenciamento" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-gray-950 hover:text-lime-600 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 text-green-900 uppercase tracking-wider">
            Contatos
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li className="text-gray-950 text-sm">+55 21 4002-8922</li>
            <li className="text-gray-950 text-sm">contato@greentech.com.br</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mb-6">
        Gestão Inteligente para um futuro{" "}
        <span className="text-green-900 font-medium">sustentável!</span>
      </div>

      <div className="border-t border-gray-400 mb-4"></div>

      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>
          © 2026 GreenTech. Todos os direitos reservados. (  One to Many)
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-lime-600 transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-lime-600 transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;