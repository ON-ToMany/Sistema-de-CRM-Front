import { useState } from "react";

function Parceria() {
  const [flipIndex, setFlipIndex] = useState<number | null>(null);

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
  ];

  return (
    <div className="px-4 py-12 pt-24 bg-gray-200 min-h-screen">
      
      <h2 className="text-4xl font-bold text-center text-gray-950 mb-12">
        Nossos Parceiros
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        
        {parceiros.map((empresa, i) => (
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
                transform:
                  flipIndex === i ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              
              {/* NA FRENTE */}
              <div
                className="absolute w-full h-full rounded-2xl border border-green-950 bg-white flex flex-col items-center justify-center gap-3 p-5"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={empresa.logo}
                  alt={empresa.nome}
                  className="h-12 object-contain"
                />

                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  {empresa.categoria}
                </span>

                <h3 className="font-semibold text-gray-950 text-center">
                  {empresa.nome}
                </h3>
              </div>

              {/* ATRÁS */}
              <div
                className="absolute w-full h-full rounded-2xl border border-green-950 bg-lime-100 flex items-center justify-center p-4 text-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-sm text-gray-950">
                  {empresa.descricao}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Parceria;