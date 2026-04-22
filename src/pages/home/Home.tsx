import demoImg from "../../assets/img/demo.png";
import feature1Img from "../../assets/img/feature1.png";
import feature2Img from "../../assets/img/feature2.png";
import feature3Img from "../../assets/img/feature3.png";
import { RiAlertLine } from "react-icons/ri";

const stats = [
    {
        value: "+2,4M",
        label: "toneladas/ano",
        bg: "bg-green-500",
        text: "text-white",
    },
    {
        value: "3%",
        label: "reciclado corretamente",
        bg: "bg-yellow-400",
        text: "text-yellow-900",
    },
    {
        value: "95%",
        label: "descarte incorreto",
        bg: "bg-red-500",
        text: "text-white",
    },
];

const features = [
    { label: "funcionalidade", img: feature1Img },
    { label: "funcionalidade", img: feature2Img },
    { label: "funcionalidade", img: feature3Img },
];

function Home() {
    return (
        <div className="min-h-screen bg-gray-200 pt-20">
            {/* ── HERO ── */}
            <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                <div className="shrink-0 w-44 h-44 md:w-52 md:h-52">
                    <img
                        src="https://ik.imagekit.io/9yqf3fqpw/m%C3%B6bius.png"
                        alt="mobius"
                        className="w-full object-contain"
                    />
                </div>

                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                        <span className="text-green-900">Rastreie</span> o descarte
                        eletrônico do <span className="text-green-900">início ao impacto.</span>
                    </h1>
                    <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                        Um CRM que conecta empresas e usuários para garantir o descarte
                        correto de eletrônicos, com rastreamento em tempo real e cálculo de
                        impacto ambiental.
                    </p>
                </div>
            </section>
            <section id="sobre" className="bg-gray-200 px-6 py-20">
                <div className="max-w-6xl ml-auto mr-0 flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Sobre</h2>
                        <p className="text-gray-600 text-base leading-relaxed max-w-md">
                            Sobre explicando o crm e porque deleSobre explicando o crm e
                            porque deleSobre explicando o crm e porque deleSobre explicando o
                            crm e porque deleSobre explicando o crm e porque deleSobre
                            explicando o crm e porque deleSobre explicando o crm e porque
                            deleSobre explicando o crm e porque deleSobre explicando o crm e
                            porque deleSobre explicando o crm e porque deleSobre explicando o
                            crm e porque deleSobre explicando o crm e porque deleSobre
                            explicando o crm e porque deleSobre explicando o crm e porque
                            deleSobre explicando o crm e porque dele
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

                        <div className="w-full max-w-md mt-16">
                            <img
                                src="https://ik.imagekit.io/9yqf3fqpw/lixo-eletronico.png"
                                alt="Lixo eletrônico"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 py-20 bg-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-gray-900 mb-16">
                        O problema em números
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col items-center gap-4">
                                <div
                                    className={`
                                        ${s.bg} ${s.text}
                                        text-5xl md:text-6xl font-extrabold
                                        px-12 py-6 rounded-full min-w-55 
                                        text-center shadow-sm`}
                                >
                                    {s.value}
                                </div>

                                <span className="text-base text-gray-00 text-center">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NOSSO SISTEMA ── */}
            <section className="bg-gray-200 px-6 py-20">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-5xl font-bold text-gray-900 mb-12">
                        Nosso sistema
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* DEMO */}
                        <div className="flex-1 rounded-4xl overflow-hidden">
                            <img
                                src={demoImg}
                                alt="Demo do sistema"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* FUNCIONALIDADES */}
                        <div className="flex flex-col gap-6 w-full md:w-[320px]">

                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="rounded-full overflow-hidden h-20 flex items-center justify-center"
                                >
                                    <img
                                        src={f.img}
                                        alt={f.label}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
