import { useState } from "react";
import Logo from "./../../assets/icons/logoescrita-crm.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiUser3Fill } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
   const navigate = useNavigate();

  const navLinks = [
    { label: "Início", href: "/", type: "path" },
    { label: "Sobre", href: "/sobre", type: "path" },
    { label: "Pontos de Coleta", href: "//#ponto-de-coleta", type: "scroll" },
    { label: "Parceiros", href: "/parceria", type: "path" },
  ];

const handleScrollLink = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const sectionId = href.includes("#") ? href.split("#")[1] : href;

  if (pathname === "/") {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/", { state: { scrollTo: sectionId } });
  }
  setMenuOpen(false);
};
  
  const isActive = (href: string, type: string) => {
    if (type === "hash") return hash === href;
    return pathname === href;
  };

  return (
        <div className="fixed z-50 w-full top-0 left-0">
      <div className={`flex flex-row w-full justify-between items-center px-6 py-3 bg-green-900/15 backdrop-blur-sm border-l border-r border-b rounded-b-3xl border-green-800 text-gray-900 font-semibold shadow-sm transition-all duration-300 ${menuOpen ? "rounded-b-none border-b-0" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex flex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.type === "scroll" ? (
                  
                    <a href={link.href}
                    onClick={(e) => handleScrollLink(e, link.href)}
                    className={`transition-colors duration-200 ${
                      isActive(link.href, link.type) ? "text-lime-600" : "hover:text-lime-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`transition-colors duration-200 ${
                      isActive(link.href, link.type) ? "text-lime-600" : "hover:text-lime-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row items-center gap-4">
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-green-900/10 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-0.5 w-5 bg-green-900 rounded transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-green-900 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-green-900 rounded transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <Link to='/login'>
          <div className='bg-green-800 p-1 md:p-2 rounded-full hover:bg-green-900 transition-colors duration-200'>
            <RiUser3Fill className='text-gray-200 text-xl md:text-3xl' />
          </div>
        </Link>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-green-900/15 backdrop-blur-sm border-l border-r border-b rounded-b-3xl border-green-800 shadow-sm px-6 py-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
            <li key={link.label}>
  {link.type === "scroll" ? (
    
      <a href={link.href}
      className={`block font-semibold transition-colors duration-200 py-1 ${
        isActive(link.href, link.type)
          ? "text-lime-600"
          : "text-gray-900 hover:text-lime-600"
      }`}
      onClick={(e) => handleScrollLink(e, link.href)}
    >
      {link.label}
    </a>
  ) : (
    <Link
      to={link.href}
      className={`block font-semibold transition-colors duration-200 py-1 ${
        isActive(link.href, link.type)
          ? "text-lime-600"
          : "text-gray-900 hover:text-lime-600"
      }`}
      onClick={() => setMenuOpen(false)}
    >
      {link.label}
    </Link>
  )}
</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;