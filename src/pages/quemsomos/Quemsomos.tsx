import logoOTM from "../../assets/icons/logoOTM.png";
import Alvaro from "../../assets/img/Alvaro.png";
import Breno from "../../assets/img/Breno.png";
import Jose from "../../assets/img/Jose.png";
import Duda from "../../assets/img/Duda.png";
import Marcia from "../../assets/img/Marcia.png";
import Mayara from "../../assets/img/Mayara.png";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

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
      role: "Dev FullStack.",
      description:
        "Desenvolveu a parte visual do frontend do projeto, utilizando tecnologias tipo ReactJS e TailwindCSS.",
      githubUrl: "https://github.com/alvarocsr2/",
      linkedinUrl: "https://www.linkedin.com/in/alvarocesarmm/",
      imageUrl: Alvaro,
    },
    {
      id: 2,
      name: "Breno Nunes",
      role: "Dev FullStack.",
      description:
        "Desenvolveu a parte lógica do projeto, fazendo integração com a API, e o backend, utilizando tecnologias tipo NodeJS.",
      githubUrl: "http://github.com/BrenoNunes96",
      linkedinUrl: "https://www.linkedin.com/in/breno-nunes-7592b0142/",
      imageUrl: Breno,
    },
    {
      id: 3,
      name: "Jose Rodrigues",
      role: "Dev FullStack.",
      description:
        "Colaborou na ideia e construção do projeto, participando ativamente em todas as etapas.",
      githubUrl: "https://github.com/jrs-neto",
      linkedinUrl: "https://www.linkedin.com/in/jrodrigues-neto/",
      imageUrl: Jose,
    },
    {
      id: 4,
      name: "Maria Eduarda Gomes",
      role: "TESTER.",
      description:
        "Colaborou no desenvolvimento criativo,aplicação de paleta de cores e identidade visual, utilizando tecnologias tipo Figma",
      githubUrl: "https://github.com/memariaa",
      linkedinUrl: "https://www.linkedin.com/in/memariaa/",
      imageUrl: Duda,
    },
    {
      id: 5,
      name: "Márcia Fogaça",
      role: "SCRUM MASTER.",
      description:
        "Desenvolveu a parte de gerenciamento do projeto, e implementando a securança e autenticação, utilizando tecnologias tipo JWT.",
      githubUrl: "https://github.com/MarciaFogaca",
      linkedinUrl: "https://www.linkedin.com/in/marciatellesfogaca/",
      imageUrl: Marcia,
    },
    {
      id: 6,
      name: "Mayara Monteiro",
      role: "Dev FullStack.",
      description:
        "Contribuiu para o desenvolvimento do projeto, Tanto na parte criativa quanto na parte de estilização e navegação do codigo.",
      githubUrl: "https://github.com/Imayagmb/",
      linkedinUrl: "https://www.linkedin.com/in/imayagmb/",
      imageUrl: Mayara,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-200 py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-[#111827] mb-6 tracking-tight">
              Quem somos
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed">
              Nós somos a <span className="font-bold">OneToMany</span>, uma
              empresa focada no desenvolvimento de soluções tecnologicas com
              propósito.
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-center">
            <img
              src={logoOTM}
              alt="OneToMany Logo"
              className="w-60 h-60 object-contain mb-2"
            />
          </div>
        </header>

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
                      <RiGithubFill size={20} fontWeight="fill" /> GitHub
                    </a>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1A4731] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-900 transition-all"
                    >
                      <RiLinkedinFill size={20} fontWeight="fill" /> Linkedin
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
