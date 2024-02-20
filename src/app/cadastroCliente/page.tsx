import Link from "next/link";
import FormInput from "../components/FormInput";

export default function formPage(){
    return(
        <div className=" flex flex-col gap-4 h-screen bg-slate-300 p-4">
            <header>
                <h1>Cliente - Cadastro</h1>
            </header>
            <hr className="border-black rounded-xl border-2"/>
            <FormInput type="text" title="Nome"/>
            <FormInput type="number" title="CPF"/>
            <FormInput type="number" title="Fone Celular"/>
            <FormInput type="number" title="Fone Fixo"/>
            <FormInput type="date" title="Data Nascimento"/>
            <div className="flex justify-between">
                <Link className="border-orange-500 border-2 w-20 text-orange-500 text-center rounded-xl" href={"/"}>Voltar</Link>
                <button className="border-blue-500 border-2 w-20 text-blue-500 text-cente rounded-xl" type="submit">Salvar</button>
            </div>
        </div>
    )
}