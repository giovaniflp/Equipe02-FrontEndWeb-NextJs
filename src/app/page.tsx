import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <h1>Index Page</h1>
      <Link href={"/homePage"} className="bg-blue-500 p-2 rounded-lg">Ir para a home page</Link>
      <Link href={"/formPage"} className="bg-blue-500 p-2 rounded-lg">Ir para a página de formulário</Link>
    </div>
  );
}
