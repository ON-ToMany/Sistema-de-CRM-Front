import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import logoOTM from "../../assets/logoOTM.png";
import Alvaro from "../../assets/Alvaro.png";
import Breno from "../../assets/Breno.png";
import Jose from "../../assets/Jose.png";
import Maria from "../../assets/Maria.png";
import Marcia from "../../assets/Marcia.png";
import Mayara from "../../assets/Mayara.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  imageUrl: string;
}

export default function AboutUs() {
  const members: TeamMember[] = [
    {
      id: 1,
      name: "Álvaro César",
      role: "Dev.",
      description:
        "Colaborou na ideia e cosntrução do projeto, participando ativamente em todas as etapas, código.",
      githubUrl: "https://github.com/alvarocsr2/",
      linkedinUrl: "https://www.linkedin.com/in/alvarocesarmm/",
      imageUrl: Alvaro,
    },
    {
      id: 2,
      name: "Breno Nunes",
      role: "Dev.",
      description:
        "Colaborou na ideia e cosntrução do projeto, participando ativamente em todas as etapas, código.",
      githubUrl: "http://github.com/BrenoNunes96",
      linkedinUrl: "https://www.linkedin.com/in/breno-nunes-7592b0142/",
      imageUrl: Breno,
    },
    {
      id: 3,
      name: "Jose Rodrigues",
      role: "Dev.",
      description:
        "Colaborou na ideia e cosntrução do projeto, participando ativamente em todas as etapas, código.",
      githubUrl: "https://github.com/jrs-neto",
      linkedinUrl: "https://www.linkedin.com/in/jrodrigues-neto/",
      imageUrl: Jose,
    },
    {
      id: 4,
      name: "Maria Eduarda Gomes",
      role: "Dev.",
      description:
        "Colaborou na ideia e cosntrução do projeto, participando ativamente em todas as etapas, código.",
      githubUrl: "https://github.com/memariaa",
      linkedinUrl: "https://www.linkedin.com/in/memariaa/",
      imageUrl: Maria,
    },
    {
      id: 5,
      name: "Márcia Fogaça",
      role: "Dev.",
      description:
        "Colaborou na ideia e cosntrução do projeto, participando ativamente em todas as etapas, código.",
      githubUrl: "https://github.com/MarciaFogaca",
      linkedinUrl: "https://www.linkedin.com/in/marciatellesfogaca/",
      imageUrl: Marcia,
    },
    {
      id: 6,
      name: "Mayara Monteiro",
      role: "Dev.",
      description:
        "Colaborou na ideia e cosntrução do projeto, participando ativamente em todas as etapas, código.",
      githubUrl: "https://github.com/Imayagmb/",
      linkedinUrl: "https://www.linkedin.com/in/imayagmb/",
      imageUrl: Mayara,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E5E7EB] py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-[#111827] mb-6 tracking-tight">
              Quem somos
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed">
              Nós somos a <span className="font-bold">OneToMany</span>, uma
              empresa focada no desenvolvimento de soluções tecnologicas com
              proposito.
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-center">
            <img
              src={logoOTM}
              alt="OneToMany Logo"
              className="w-32 h-32 object-contain mb-2"
            />
            <span className="text-3xl font-bold text-[#1A4731]">OneToMany</span>
          </div>
        </header>

        {/* Lista de Membros */}
        <section className="space-y-12">
          {members.map((member) => (
            <div
              key={member.id}
              className="border-b border-gray-400 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-44 h-48 shrink-0 rounded-sm overflow-hidden shadow-md">
                  <img
                    
                    src={member.imageUrl}
                    alt={member.name}
                   
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {member.name}
                    </h2>
                    <span className="text-emerald-700 font-semibold text-sm">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-snug mb-6 max-w-xl">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1A4731] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-900 transition-all"
                    >
                      <GithubLogo size={20} weight="fill" /> GitHub
                    </a>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1A4731] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-900 transition-all"
                    >
                      <LinkedinLogo size={20} weight="fill" /> Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
