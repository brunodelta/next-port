import Link from "next/link";

export default function Header() {
  return (
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
  );
}
