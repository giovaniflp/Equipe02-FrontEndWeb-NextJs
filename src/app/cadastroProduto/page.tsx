"use client"

import Link from "next/link";
import FormInput from "../components/FormInput";

export default function cadastroProduto(){

    function log (event: any){
        // Impede de dar reload na página
        event.preventDefault();
        console.log(event)
        console.log(event.target.produtoTitulo.value)
    }

    return(
        <div className="flex flex-col gap-4 h-screen bg-slate-300 p-4">
            <header>
                <h1>Produto - Cadastro</h1>
            </header>
            <hr className="border-black rounded-xl border-2"/>
            <form onSubmit={log}>
                <FormInput type="text" title="Título" placeholder="Informe o título do produto" name="produtoTitulo" required={true}/>
                <FormInput type="number" title="Código do produto" placeholder="Informe o código do produto" name="produtoCodigo" required={true}/>
                <div className="flex flex-col ">
                    <label htmlFor="">Descrição</label>
                    <textarea className="border-2 border-gray-400 rounded-md placeholder:text-gray-500" name="" id="" cols={30} rows={5} placeholder="Informe a descrição do produto"></textarea>
                </div>
                <FormInput type="number" title="Valor unitário" name="produtoValorUnitario" required={true}/>
                <FormInput type="number" title="Tempo de entrega mínimo em minutos" placeholder="30" name="produtoTempoMin"/>
                <FormInput type="number" title="Tempo de entrega máximo em minutos" placeholder="40" name="produtoTempoMax"/>
                <div className="flex justify-between">
                    <Link className="border-orange-500 border-2 w-20 text-orange-500 text-center rounded-xl" href={"/"}>Voltar</Link>
                    <button className="border-blue-500 border-2 w-20 text-blue-500 text-cente rounded-xl" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}