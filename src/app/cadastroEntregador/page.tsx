import Link from "next/link";
import FormInput from "../components/FormInput";
import FormRadio from "../components/FormRadio";
import FormSelect from "../components/FormSelect";

export default function cadastroEntregador(){
    return(
        <div className="flex flex-col gap-4 h-screen bg-slate-300 p-4">
            <header>
                <h1>Entregador - Cadastro</h1>
            </header>
            <hr className="border-black rounded-xl border-2"/>
            <FormInput type="text" title="Nome"/>
            <FormInput type="number" title="CPF"/>
            <FormInput type="number" title="RG"/>
            <FormInput type="date" title="Data Nascimento"/>
            <FormInput type="number" title="Fone Celular"/>
            <FormInput type="number" title="Fone Fixo"/>
            <FormInput type="number" title="Quantidade de entregas realizadas"/>
            <FormInput type="number" title="Valor por frete"/>
            <FormInput type="text" title="Rua"/>
            <FormInput type="text" title="Número"/>
            <FormInput type="text" title="Bairro"/>
            <FormInput type="text" title="Cidade"/>
            <FormInput type="number" title="CEP"/>
            <FormSelect></FormSelect>
            <FormInput type="text" title="Complemento"/>
            <FormRadio></FormRadio>
            <div className="flex justify-between">
                <Link className="border-orange-500 border-2 w-20 text-orange-500 text-center rounded-xl" href={"/"}>Voltar</Link>
                <button className="border-blue-500 border-2 w-20 text-blue-500 text-cente rounded-xl" type="submit">Salvar</button>
            </div>
        </div>
    )
}