"use client"

import Link from "next/link";
import FormInput from "../components/FormInput";
import FormRadio from "../components/FormRadio";
import FormSelect from "../components/FormSelect";
import NavigationHeader from "../components/NavigationHeader";

export default function cadastroEntregador(){

    function log(event: any){
        // Impede de dar reload na página
        event.preventDefault();
        console.log(event.target.entregadorNome.value)
    }

    return(
        <div>
        <NavigationHeader></NavigationHeader>
        <div className="flex flex-col gap-4 h-screen bg-slate-300 p-4">
            <header>
                <h1>Entregador - Cadastro</h1>
            </header>
            <hr className="border-black rounded-xl border-2"/>
            <form onSubmit={log}>
                <FormInput type="text" title="Nome" name="entregadorNome" required={true}/>
                <FormInput type="number" title="CPF" name="entregadorCPF" required={true}/>
                <FormInput type="number" title="RG" name="entregadorRG"/>
                <FormInput type="date" title="Data Nascimento" name="entregadorDtNascimento"/>
                <FormInput type="number" title="Fone Celular" name="entregadorFoneCelular" required={true}/>
                <FormInput type="number" title="Fone Fixo" name="entregadorFoneFixo"/>
                <FormInput type="number" title="Quantidade de entregas realizadas" name="entregadorQER"/>
                <FormInput type="number" title="Valor por frete" name="entregadorValorFrete"/>
                <FormInput type="text" title="Rua" name="entregadorRua"/>
                <FormInput type="text" title="Número" name="entregadorNúmero"/>
                <FormInput type="text" title="Bairro" name="entregadorBairro"/>
                <FormInput type="text" title="Cidade" name="entregadorCidade"/>
                <FormInput type="number" title="CEP" name="entregadorCEP"/>
                <FormSelect></FormSelect>
                <FormInput type="text" title="Complemento" name="entregadorComplemento"/>
                {/* alterar o formselect e o form radio, mexes nos values e inputs */}
                <FormRadio></FormRadio>
                <div className="flex justify-between">
                    <Link className="border-orange-500 border-2 w-20 text-orange-500 text-center rounded-xl" href={"/"}>Voltar</Link>
                    <button className="border-blue-500 border-2 w-20 text-blue-500 text-cente rounded-xl" type="submit">Salvar</button>
                </div>
            </form>
        </div>
        </div>
    )
}