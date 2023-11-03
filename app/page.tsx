import Image from "next/image";


export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ol className="h-16 items-center flex justify-around marker:hidden text-3xl font-semibold">
            <li className="hover:text-blue-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-300">
              <a href="#sobre-mim">Sobre Mim</a>
            </li>
            <li className="hover:text-blue-300">
              <a href="#habilidades">Habilidades</a>
            </li>
            <li className="hover:text-blue-300">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="hover:text-blue-300">
              <a href="#contato">Contato</a>
            </li>
          </ol>
        </nav>
      </header>

      <main className="dark:bg-neutral-950">
        <section>
          <div className="flex flex-col justify-center items-center h-48 bg-cover bg-[url(/assets/cover.jpg)]">
            <Image className="rounded-full" src="/assets/profile.jpg" alt="perfil" width={96} height={96} />
            <h2 className="font-bold text-lg">Desenvolvedor Full Stack</h2>
          </div>

          <div>
            <img src="face" alt="" />
            <img src="git" alt="" />
            <img src="yt" alt="" />
          </div>
        </section>

        <section>
          <h3 id="sobre-mim">Sobre Mim</h3>

          <p>
            Olá, me chamo Bruno Davi, sou um desenvolvedor autodidata com experiência em automação,
            programação. Tenho uma paixão pela resolução de problemas e pela
            criação de soluções inovadoras. Minha jornada começou com o Tasker,
            onde aprendi a automação e a integração de funções avançadas. Com o
            tempo, minha curiosidade me levou a aprender programação, começando
            com Python e depois expandindo para Java, C#, TypeScript e outras
            linguagens.
          </p>
        </section>

        <section>
          <h3 id="habilidades">Habilidades</h3>

          <ol>
            <li>Python</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Node</li>
            <li>Docker</li>
          </ol>
        </section>

        <section>
          <h3 id="projetos">Projetos</h3>

          <ol>
            <li>EnvClass</li>
            <li>TaskerPy</li>
          </ol>
        </section>
      </main>

      <footer>
        <nav>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#sobre-mim">Sobre Mim</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </nav>

        <p>
          Copyright &copy; 2023 Bruno Davi Andrade Dos Santos. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
