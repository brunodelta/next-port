"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import SkillsList from "./components/SkillsList";
import { skillList } from "./data";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 backdrop-blur transition-colors duration-300 bg-stone-950/75 border-opacity-10 border-b border-b-white">
        <nav>
          <ol className="h-10 items-center flex justify-around text-xl font-semibold">
            <li className="transition duration-500 hover:text-stone-400">
              <Link href="#">Home</Link>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <Link href="#sobre-mim">Sobre Mim</Link>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <Link href="#habilidades">Habilidades</Link>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <Link href="#projetos">Projetos</Link>
            </li>
            <li className="transition duration-500 hover:text-stone-400">
              <Link href="#contato">Contato</Link>
            </li>
          </ol>
        </nav>
      </header>

      <main className="bg-neutral-950 border-opacity-10 border-b border-b-white">
        <section className="h-[95vh]">
          <div className="flex justify-center items-center border-b-2 border-white/10 bg-repeat-round h-full bg-[url(/terra-bw-b.jpg)]">
            <h2 className="font-bold mt-40 text-5xl">
              <Typewriter words={["Criando um mundo de possibilidades..."]} />
            </h2>
          </div>
        </section>

        <section className="my-2 p-2 pt-16" id="sobre-mim">
          <h3 className="text-2xl font-semibold">Sobre Mim</h3>
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

        <section className="my-2 p-2 pt-16" id="habilidades">
          <h3 className="mb-2 text-2xl font-semibold">Habilidades</h3>

          <SkillsList skillList={skillList} />
        </section>

        <section className="my-2 p-2 pt-16" id="projetos">
          <h3 className="text-2xl font-semibold">Projetos</h3>

          <p className="p-5">
            A maioria dos projetos que faço seriam para ajudar no
            desenvolvimento, de outros projetos com mais produtividade
          </p>

          <ol className="p-3 text-stone-300">
            <li className="px-5">
              <h4 className="font-semibold hover:underline inline">
                <Link
                  target="_blank"
                  href="https://github.com/brunodavi/envclass"
                >
                  EnvClass
                </Link>
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
                  Mesmo sendo um projeto pequeno, adicionei testes e integração
                  continua, para garantir sua funcionalidade.
                </p>
              </div>
            </li>
            <li className="px-5 my-3">
              <h4 className="font-semibold hover:underline inline">
                <Link
                  target="_blank"
                  href="https://github.com/brunodavi/tasker.py"
                >
                  TaskerPy
                </Link>
              </h4>

              <div className="px-5 mt-3">
                <p>
                  Projeto que estou desenvolvendo para automatizar a criação de
                  automações no Tasker, fazendo com que seja possível usar o
                  computador para configurar as rotinas desse app pelo
                  computador, tornando a mais rápido a criação de tarefas
                  complexas com abstrações no python
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="my-2 p-2 pt-16" id="contato">
          <h3 className="text-2xl font-semibold">Contato</h3>

          <ol className="flex flex-col justify-around h-36 p-3 text-stone-300">
            <li className="flex space-x-2">
              <Image src="/email.svg" width={24} height={24} alt="email" />
              <Link
                href="mailto:brunodaviandrade2000@gmail.com"
                className="font-semibold hover:underline"
                target="_blank"
              >
                brunodaviandrade2000@gmail.com
              </Link>
            </li>
            <li className="flex space-x-2">
              <Image
                src="/whatsapp.svg"
                width={20}
                height={20}
                alt="whatsapp"
              />
              <Link
                href="https://wa.me/5511987364471"
                className="font-semibold hover:underline"
                target="_blank"
              >
                11 98736 4471
              </Link>
            </li>
            <li className="flex space-x-2">
              <Image
                className="transition duration-300 hover:brightness-75"
                src="/github.svg"
                width={20}
                height={20}
                alt="github-icon"
              />
              <Link
                className="font-semibold hover:underline"
                href="https://github.com/brunodavi"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li className="flex space-x-2">
              <Image
                className="transition duration-300 hover:brightness-75"
                src="/linkedin.svg"
                width={20}
                height={20}
                alt="linkedin-icon"
              />
              <Link
                className="font-semibold hover:underline"
                href="https://linkedin.com/in/brunodavi"
                target="_blank"
              >
                Linkedin
              </Link>
            </li>
          </ol>
        </section>
      </main>

      <footer className="flex flex-col justify-around items-center h-20">
        <Link href="#" className="hover:underline font-semibold">
          Voltar para o topo
        </Link>
        <p>Copyright &copy; 2023 Bruno Davi Andrade Dos Santos</p>
      </footer>
    </>
  );
}
