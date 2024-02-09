import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href={"/homePage"} className="bg-blue-500 p-2 rounded-lg">Ir para a home page</Link>
    </div>
  );
}
