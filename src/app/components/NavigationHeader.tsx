import Link from "next/link";

export default function NavigationHeader() {
  return (
    <header className="flex gap-4 bg-black p-4">
      <nav>
        <Link className="hover:text-gray-600 duration-500" href={"/"}>Home</Link>
      </nav>
      <nav>
        <Link className="hover:text-gray-600 duration-500" href={"/cadastroCliente"}>Cliente</Link>
      </nav>
      <nav>
        <Link className="hover:text-gray-600 duration-500" href={"/cadastroProduto"}>Produto</Link>
      </nav>
      <nav>
        <Link className="hover:text-gray-600 duration-500" href={"/cadastroEntregador"}>Entregador</Link>
      </nav>
    </header>
  );
}
