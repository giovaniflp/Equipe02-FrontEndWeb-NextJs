import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center gap-4">
      <h1>Index Page</h1>
      <div className="flex flex-col gap-4 w-60">
        <Link href={"/homePage"} className="bg-blue-500 p-2 rounded-lg">Ir para a home page</Link>
        <Link href={"/cadastroCliente"} className="bg-blue-500 p-2 rounded-lg">Ir para a página de formulário</Link>
        <Link href={"/cadastroProduto"} className="bg-blue-500 p-2 rounded-lg">Ir para a página de cadastro de produto</Link>
        <Link href={"/cadastroEntregador"} className="bg-blue-500 p-2 rounded-lg">Ir para a página de cadastro de entregador</Link>
      </div>
    </div>
  );
}
