import demoImg from "../../assets/img/demo.png";
import feature1Img from "../../assets/img/feature1.png";
import feature2Img from "../../assets/img/feature2.png";
import feature3Img from "../../assets/img/feature3.png";
import {
  RiAlertLine,
  RiEyeLine,
  RiLeafLine,
  RiLineChartLine,
} from "react-icons/ri";
import Coleta from "./coleta/Coleta";

const stats = [
  {
    value: "+2,4M",
    label: "toneladas/ano",
    bg: "bg-green-400",
    text: "text-green-900",
  },
  {
    value: "3%",
    label: "reciclado corretamente",
    bg: "bg-yellow-300",
    text: "text-yellow-900",
  },
  {
    value: "95%",
    label: "descarte incorreto",
    bg: "bg-red-400",
    text: "text-red-900",
  },
];

const features = [
  { label: "funcionalidade", img: feature1Img },
  { label: "funcionalidade", img: feature2Img },
  { label: "funcionalidade", img: feature3Img },
];

function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-200">
      {/* ── HERO ── */}
      <section className="bg-gray-200 pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52">
            <img
              src="https://ik.imagekit.io/9yqf3fqpw/m%C3%B6bius.png"
              alt="mobius"
              className="w-full object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              <span className="text-green-900">Rastreabilidade</span> de ativos
              eletrônicos:{" "}
              <span className="text-green-900">
                controle total do início ao fim.
              </span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              Um CRM que conecta empresas e usuários para garantir o descarte
              correto de eletrônicos, com rastreamento em tempo real e cálculo
              de impacto ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section
        id="sobre"
        className="bg-gray-100 w-full py-16 sm:py-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Texto */}
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
              Sobre
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A Greentech nasceu da união entre inovação tecnológica e
              responsabilidade ambiental. Somos uma plataforma de CRM (Customer
              Relationship Management), desenvolvida para focar em empresas que
              entendem que o futuro dos negócios é verde. Acreditamos que a
              gestão de clientes não precisa ser complexa ou impessoal. Por
              isso, criamos uma solução que une uma interface intuitiva —
              inspirada no minimalismo e na elegância — à robustez necessária
              para escalar grandes operações, sempre com o olhar voltado para a
              sustentabilidade.
            </p>
          </div>

          <div className="flex-1 relative flex justify-end">
            <div className="absolute top-0 right-10 z-10 max-w-95">
              <div className="relative bg-[#BFD8C3] border border-green-900 rounded-[30px] shadow-sm text-gray-800 text-sm px-6 py-4 flex items-start gap-3">
                <RiAlertLine className="text-gray-700 text-xl shrink-0 mt-1" />

                <span className="leading-snug">
                  Todo esse e-lixo também contribui para milhões de toneladas de
                  CO₂ na atmosfera.
                </span>

                <div className="absolute -bottom-2 right-12 w-4 h-4 bg-[#BFD8C3] border-b border-r border-green-900 rotate-45"></div>
              </div>
            </div>

            <div className="w-full mt-14 sm:mt-16">
              <img
                src="https://ik.imagekit.io/9yqf3fqpw/lixo-eletronico.png"
                alt="Lixo eletrônico"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16">
            Dados que impulsionam nossa{" "}
            <span className="text-green-700">missão verde!</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 w-full sm:w-auto"
              >
                <div
                  className={`${s.bg} ${s.text} text-4xl sm:text-5xl md:text-6xl font-extrabold px-10 py-5 rounded-full w-full sm:min-w-50 text-center`}
                >
                  {s.value}
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSSO SISTEMA ── */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <span className="bg-green-900 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Principais Recursos
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
              Gerencie o ciclo de vida dos seus eletrônicos com{" "}
              <span className="text-green-700">inteligência e impacto.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
            <div className="md:w-[55%] rounded-2xl overflow-hidden shrink-0 flex items-center">
              <img
                src={demoImg}
                alt="Demo do sistema"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {[
                {
                  icon: <RiEyeLine className="text-green-700 text-3xl" />,
                  title: "Transparência total",
                  desc: "Clareza em cada etapa do descarte através de dashboards intuitivos, garantindo confiança e responsabilidade socioambiental.",
                },
                {
                  icon: <RiLineChartLine className="text-green-700 text-3xl" />,
                  title: "Monitoramento em tempo real",
                  desc: "Acompanhamento instantâneo do status de reciclagem e reuso para uma gestão de resíduos ágil e baseada em dados.",
                },
                {
                  icon: <RiLeafLine className="text-green-700 text-3xl" />,
                  title: "Impacto que engaja",
                  desc: "Cálculo automático de CO2 evitado que transforma métricas em propósito, motivando a comunidade para um futuro verde.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gray-200 rounded-2xl px-6 py-5 flex flex-col gap-3"
                >
                  <div>{card.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                  <button className="mt-auto self-start bg-green-900 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-green-800 transition-colors">
                    Saiba mais
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Coleta />
    </div>
  );
}

export default Home;
