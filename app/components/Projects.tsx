import Link from "next/link";

type Project = {
  title: string
  link: string
  descriptions: string[]
}

const projects: Project[] = [
  {
    title: 'EnvClass',
    link: 'https://github.com/brunodavi/envclass',

    descriptions: [
      `O meu primeiro projeto pessoal publicado no Pypi, ele é usado para
      gerenciar variáveis de ambiente usando classes, similar ao
      pydantic-settings, mas sem a necessidade de instancia-as. Mas por
      ser um projeto imaturo, recomendo o uso para projetos menores.`,

      `Mesmo sendo um projeto pequeno, adicionei testes e integração
      continua, para garantir sua funcionalidade.`
    ]
  },

  {
    title: 'Tasker.py',
    link: 'https://github.com/brunodavi/tasker.py',

    descriptions: [
      `Projeto que estou desenvolvendo para automatizar a criação de
      automações no Tasker, fazendo com que seja possível usar o
      computador para configurar as rotinas desse app pelo computador,
      tornando a mais rápido a criação de tarefas complexas com
      abstrações no python`
    ]
  }
]

export default function Projects() {
  return (
    <section className="my-2 p-2 pt-16" id="projetos">
      <h3 className="text-2xl font-semibold">Projetos</h3>

      <p className="p-5">
        A maioria dos projetos que faço seriam para ajudar no desenvolvimento,
        de outros projetos com mais produtividade
      </p>

      <ol className="p-3 text-stone-300">
        {
          projects.map((project, index) => (
            <li key={index} className="p-3">
              <h4 className="font-semibold hover:underline inline">
                <Link target="_blank" href={project.link}>
                  {project.title}
                </Link>
              </h4>

              <div className="px-5 mt-3">
                {project.descriptions.map((description) => (
                  <p key={index} className="mt-3">{description}</p>
                ))}
              </div>
            </li>
          ))
        }
      </ol>
    </section>
  );
}
