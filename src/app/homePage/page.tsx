import Link from "next/link";

import Header from "../components/Header";
import Image from "next/image";

export default function homePage() {
    return (
        <div className="bg-slate-400 h-screen">
            <Header></Header>
            <Image src={"/shipping.svg"} alt="Caminhão" width={20} height={20}></Image>
            <h1>Home Page</h1>
            <Link href={"/"} className="bg-blue-500 p-2 rounded-lg">Ir para a Index Page</Link>
        </div>
    )
}