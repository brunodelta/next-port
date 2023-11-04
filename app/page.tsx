import Image from "next/image";
import SkillsList from "./components/SkillsList";
import { skillList } from "./data";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 backdrop-blur bg-stone-950/75 border-opacity-10 border-b border-b-white">
        <nav>
          <ol className="h-16 items-center flex justify-around text-2xl font-semibold">
            <li className="transition duration-500 hover:text-stone-400">
              <a href="#">Home</a>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <a href="#sobre-mim">Sobre Mim</a>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <a href="#habilidades">Habilidades</a>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <a href="#contato">Contato</a>
            </li>
          </ol>
        </nav>
      </header>

      <main className="bg-neutral-950">
        <section>
          <div className="flex flex-col justify-center items-center h-48 bg-[url(/cover.jpg)]">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="perfil"
              width={96}
              height={96}
            />
            <h2 className="font-bold text-lg">Desenvolvedor Full Stack</h2>

            <div className="flex self-end justify-around w-20">
              <a href="https://github.com/brunodavi" target="_blank">
                <Image
                  className="transition duration-300 hover:brightness-75"
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt="github-icon"
                />
              </a>

              <a href="https://linkedin.com/in/brunodavi" target="_blank">
                <Image
                  className="transition duration-300 hover:brightness-75"
                  src="/linkedin.svg"
                  width={20}
                  height={20}
                  alt="linkedin-icon"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="my-2 p-2">
          <h3 id="sobre-mim" className="text-2xl font-semibold">
            Sobre Mim
          </h3>
          <p className="p-3 text-stone-300">
            Olá, meu nome é <span className="font-semibold">Bruno Davi</span>.
            Sou um desenvolvedor autodidata, entusiasta de automação no Android.
            Tenho uma paixão pela resolução de problemas e pela criação de
            soluções. Minha jornada como desenvolvedor começou com o Tasker,
            onde aprendi a automação e a colaborar com projetos com a comunidade
            com integrações de funções avançadas. Com o tempo, minha curiosidade
            me levou a aprender programação, começando com Python e depois
            expandindo para HTML, JavaScript, Shell, C#, TypeScript e outras
            linguagens.
          </p>
        </section>

        <section className="my-2 p-2">
          <h3 id="habilidades" className="mb-2 text-2xl font-semibold">
            Habilidades
          </h3>

          <SkillsList skillList={skillList} />
        </section>

        <section className="my-2 p-2">
          <h3 id="projetos" className="text-2xl font-semibold">
            Projetos
          </h3>

          <p className="p-5">
            A maioria dos projetos que faço seriam para ajudar no
            desenvolvimento, de outros projetos com mais produtividade
          </p>

          <ol className="p-3 text-stone-300">
            <li className="px-5">
              <h4 className="font-semibold hover:underline inline">
                <a href="https://github.com/brunodavi/envclass">EnvClass</a>
              </h4>

              <div className="px-5 mt-3">
                <p>
                  O meu primeiro projeto pessoal publicado no Pypi, ele é usado
                  para gerenciar variáveis de ambiente usando classes, similar
                  ao pydantic-settings, mas sem a necessidade de instancia-as.
                  Mas por ser um projeto imaturo, recomendo o uso para projetos
                  menores.
                </p>

                <br />

                <p>
                  Mesmo sendo um projeto pequeno, adicionei testes e
                  integração continua, para garantir sua funcionalidade.
                </p>
              </div>
            </li>
            <li>TaskerPy</li>
          </ol>
        </section>

        <section className="my-2 p-2">
          <h3 id="contato" className="text-2xl font-semibold">
            Contato
          </h3>

          <ol className="p-3 text-stone-300">
            <li className="flex space-x-2">
              <Image src="/email.svg" width={24} height={24} alt="email" />
              <span>Email</span>
            </li>
            <li className="flex space-x-2">
              <Image
                src="/whatsapp.svg"
                width={20}
                height={20}
                alt="whatsapp"
              />
              <span>WhatsApp</span>
            </li>
          </ol>
        </section>
      </main>

      <footer className="flex flex-col justify-around items-center h-20">
        <a href="#" className="hover:underline font-semibold">
          Voltar para o topo
        </a>
        <p>
          Copyright &copy; 2023 Bruno Davi Andrade Dos Santos. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
