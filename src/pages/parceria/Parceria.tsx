import { useState, useRef } from "react";
import{FaHandshake} from "react-icons/fa"

function Parceria() {
  const [flipIndex, setFlipIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const parceiros = [
    {
      nome: "Flamengo",
      categoria: "Esporte",
      logo: "https://ik.imagekit.io/9yqf3fqpw/flamengo.png",
      descricao: "Descarte responsável de equipamentos eletrônicos do clube.",
    },
    {
      nome: "Bangu Shopping",
      categoria: "Varejo",
      logo: "https://ik.imagekit.io/9yqf3fqpw/Bangu-Shopping.jpg",
      descricao: "Pontos de coleta de lixo eletrônico para clientes.",
    },
    {
      nome: "Mobi Rio",
      categoria: "Transporte",
      logo: "https://ik.imagekit.io/9yqf3fqpw/mobi.jpg",
      descricao: "Gestão de resíduos eletrônicos do sistema de transporte.",
    },
    {
      nome: "Ambev",
      categoria: "Indústria",
      logo: "https://ik.imagekit.io/9yqf3fqpw/ambev.png",
      descricao: "Reciclagem de equipamentos corporativos.",
    },
    {
      nome: "Coca-Cola",
      categoria: "Indústria",
      logo: "https://ik.imagekit.io/9yqf3fqpw/coca-cola.png",
      descricao: "Logística reversa e descarte sustentável.",
    },
    {
      nome: "1001",
      categoria: "Transporte",
      logo: "https://ik.imagekit.io/9yqf3fqpw/1001.png",
      descricao: "Descarte de equipamentos de frota e operação.",
    },
    {
      nome: "Scania",
      categoria: "Indústria",
      logo: "https://ik.imagekit.io/9yqf3fqpw/scania.jpg",
      descricao: "Soluções sustentáveis para equipamentos industriais.",
    },
    {
      nome: "Claro",
      categoria: "Telecom",
      logo: "https://ik.imagekit.io/9yqf3fqpw/claro.jpg",
      descricao: "Reciclagem de dispositivos e infraestrutura.",
    },
    {
      nome: "Tim",
      categoria: "Telecom",
      logo: "https://ik.imagekit.io/9yqf3fqpw/tim.png",
      descricao: "Gestão de resíduos eletrônicos de telecom.",
    },
    {
      nome: "Vivo",
      categoria: "Telecom",
      logo: "https://ik.imagekit.io/9yqf3fqpw/vivo.png",
      descricao: "Descarte consciente de equipamentos.",
    },
    {
      nome: "Anatel",
      categoria: "Regulador",
      logo: "https://ik.imagekit.io/9yqf3fqpw/anatel.jpg",
      descricao: "Parcerias para controle e regulamentação ambiental.",
    },
    {
      nome: "Light Energia",
      categoria: "Energia",
      logo: "https://ik.imagekit.io/9yqf3fqpw/light_logo.jpg",
      descricao: "Descarte de equipamentos elétricos.",
    },
    {
      nome: "Águas do Rio",
      categoria: "Saneamento",
      logo: "https://ik.imagekit.io/9yqf3fqpw/cedae.jpg",
      descricao: "Sustentabilidade no tratamento e descarte.",
    },
    {
      nome: "Prudential",
      categoria: "Finanças",
      logo: "https://ik.imagekit.io/9yqf3fqpw/prudential.jpg",
      descricao: "Sustentabilidade no tratamento e descarte.",
    },
    {
      nome: "Generation",
      categoria: "Educação",
      logo: "https://ik.imagekit.io/9yqf3fqpw/generation.png",
      descricao: "Sustentabilidade no tratamento e descarte.",
    },
  ];

  const VISIBLE_COUNT = 8;
  const visibleParceiros = expanded ? parceiros : parceiros.slice(0, VISIBLE_COUNT);
  const hiddenCount = parceiros.length - VISIBLE_COUNT;

  const [docType, setDocType] = useState<"cnpj" | "cpf">("cnpj");
  const [docValue, setDocValue] = useState("");

  const formatCNPJ = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 14);
    return d
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const formatCPF = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    return d
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDocValue(docType === "cnpj" ? formatCNPJ(raw) : formatCPF(raw));
  };

  const handleDocTypeSwitch = (type: "cnpj" | "cpf") => {
    setDocType(type);
    setDocValue("");
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="px-4 py-12 pt-24 bg-gray-200 min-h-screen relative">

      <button
        onClick={scrollToForm}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-700 hover:bg-green-800 active:scale-95 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
      >
       <FaHandshake className="w-5 h-5 shrink-0" />
        Quero ser parceiro
      </button>

      <h2 className="text-4xl font-bold text-center text-gray-950 mb-12">
        Nossos Parceiros
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {visibleParceiros.map((empresa, i) => (
          <div
            key={i}
            className="w-full max-w-[320px] h-55"
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setFlipIndex(i)}
            onMouseLeave={() => setFlipIndex(null)}
          >
            <div
              className="relative w-full h-full transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipIndex === i ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div
                className="absolute w-full h-full rounded-2xl border border-green-950 bg-white flex flex-col items-center justify-center gap-3 p-5"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img src={empresa.logo} alt={empresa.nome} className="h-12 object-contain" />
                <span className="px-3 py-1 text-md rounded-full bg-green-100 text-green-800">
                  {empresa.categoria}
                </span>
                <h3 className="font-bold text-gray-950 text-center">{empresa.nome}</h3>
              </div>

              <div
                className="absolute w-full h-full rounded-2xl border border-green-950 bg-green-100 flex items-center justify-center p-4 text-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-md text-gray-950">{empresa.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8 gap-1">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-green-800 hover:text-green-900 font-semibold text-sm transition-colors duration-150 cursor-pointer"
        >
          <span>{expanded ? "Ver menos" : `Ver todos (${hiddenCount} a mais)`}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {!expanded && (
          <p className="text-xs text-gray-500">
            Mostrando {VISIBLE_COUNT} de {parceiros.length} parceiros
          </p>
        )}
      </div>

      <div className="my-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-green-300" />
        <span className="text-green-800 font-semibold text-sm uppercase tracking-widest whitespace-nowrap">
          Faça parte da rede
        </span>
        <div className="flex-1 h-px bg-green-300" />
      </div>

      <div ref={formRef} className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-950 mb-2">
          Quero ser parceiro
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Preencha o formulário abaixo e entraremos em contato em breve.
        </p>

        <div className="bg-white rounded-2xl border border-green-950 p-8 flex flex-col gap-5 shadow-sm">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Tipo de cadastro</label>
            <div className="flex rounded-lg border border-gray-300 overflow-hidden w-fit">
              <button
                type="button"
                onClick={() => handleDocTypeSwitch("cnpj")}
                className={`px-5 py-2 text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                  docType === "cnpj" ? "bg-green-700 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                CNPJ — Empresa
              </button>
              <button
                type="button"
                onClick={() => handleDocTypeSwitch("cpf")}
                className={`px-5 py-2 text-sm font-semibold transition-colors duration-150 cursor-pointer border-l border-gray-300 ${
                  docType === "cpf" ? "bg-green-700 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                CPF — Pessoa física
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              {docType === "cnpj" ? "CNPJ" : "CPF"}
            </label>
            <input
              type="text"
              value={docValue}
              onChange={handleDocChange}
              placeholder={docType === "cnpj" ? "00.000.000/0000-00" : "000.000.000-00"}
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {docType === "cnpj" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Nome da empresa</label>
                <input
                  type="text"
                  placeholder="Ex: Empresa LTDA"
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Setor / Categoria</label>
                <select className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white">
                  <option value="">Selecione uma categoria</option>
                  <option>Esporte</option>
                  <option>Varejo</option>
                  <option>Transporte</option>
                  <option>Indústria</option>
                  <option>Telecom</option>
                  <option>Energia</option>
                  <option>Saneamento</option>
                  <option>Finanças</option>
                  <option>Educação</option>
                  <option>Outro</option>
                </select>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                {docType === "cnpj" ? "Nome do responsável" : "Nome completo"}
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">E-mail</label>
              <input
                type="email"
                placeholder="contato@email.com"
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Mensagem (opcional)</label>
            <textarea
              rows={3}
              placeholder={
                docType === "cnpj"
                  ? "Conte um pouco sobre a sua empresa e como imagina a parceria..."
                  : "Conte como você pode contribuir ou o que espera da parceria..."
              }
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
            />
          </div>

          <button className="mt-1 w-full bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white font-semibold cursor-pointer py-3 rounded-xl transition-all duration-150 text-sm shadow-sm">
            Enviar solicitação
          </button>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
}

export default Parceria;