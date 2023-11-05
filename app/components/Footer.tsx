import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around items-center h-20">
      <Link href="#" className="hover:underline font-semibold">
        Voltar para o topo
      </Link>
      <p>Copyright &copy; 2023 Bruno Davi Andrade Dos Santos</p>
    </footer>
  );
}
