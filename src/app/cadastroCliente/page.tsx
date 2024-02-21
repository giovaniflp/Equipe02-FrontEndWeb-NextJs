"use client"

import Link from "next/link";
import FormInput from "../components/FormInput";

export default function formPage(){

    function log(event: any){
        // Impede de dar reload na página
        event.preventDefault(); 
        console.log(event.target.clienteNome.value)
    }

    return(
        <div className=" flex flex-col gap-4 h-screen bg-slate-300 p-4">
            <header>
                <h1>Cliente - Cadastro</h1>
            </header>
            <hr className="border-black rounded-xl border-2"/>
            <form onSubmit={log}>
                <FormInput type="text" title="Nome" name="clienteNome" required={true}/>
                <FormInput type="number" title="CPF" name="clienteCPF"/>
                <FormInput type="number" title="Fone Celular" name="clienteFoneCelular"/>
                <FormInput type="number" title="Fone Fixo" name="clienteFoneFixo"/>
                <FormInput type="date" title="Data Nascimento" name="clienteDtNascimento"/>
                <div className="flex justify-between">
                    <Link className="border-orange-500 border-2 w-20 text-orange-500 text-center rounded-xl" href={"/"}>Voltar</Link>
                    <button className="border-blue-500 border-2 w-20 text-blue-500 text-cente rounded-xl" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}