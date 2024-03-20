import Link from "next/link";

export default function NavigationHeader() {
  return (
    <header className="flex gap-4 bg-black p-4">
      <nav>
        <Link className="hover:text-gray-600 duration-500 text-white" href={"/"}>Home</Link>
      </nav>
      <nav>
        <Link className="hover:text-gray-600 duration-500 text-white" href={"/cadastroCliente"}>Cliente</Link>
      </nav>
      <nav>
        <Link className="hover:text-gray-600 duration-500 text-white" href={"/cadastroProduto"}>Produto</Link>
      </nav>
      <nav>
        <Link className="hover:text-gray-600 duration-500 text-white" href={"/cadastroEntregador"}>Entregador</Link>
      </nav>
    </header>
  );
}
