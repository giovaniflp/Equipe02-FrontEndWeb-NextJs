import Link from "next/link";
import FormInput from "../components/FormInput";

export default function cadastroProduto(){
    return(
        <div className="flex flex-col gap-4 h-screen bg-slate-300 p-4">
            <header>
                <h1>Produto - Cadastro</h1>
            </header>
            <hr className="border-black rounded-xl border-2"/>
            <FormInput type="text" title="Título"/>
            <FormInput type="number" title="Código do produto"/>
            <div className="flex flex-col ">
                <label htmlFor="">Descrição</label>
                <textarea className="border-2 border-gray-400 rounded-md" name="" id="" cols={30} rows={5}></textarea>
            </div>
            <FormInput type="number" title="Valor unitário"/>
            <FormInput type="number" title="Tempo de entrega mínimo em minutos"/>
            <FormInput type="number" title="Tempo de entrega máximo em minutos"/>
            <div className="flex justify-between">
                <Link className="border-orange-500 border-2 w-20 text-orange-500 text-center rounded-xl" href={"/"}>Voltar</Link>
                <button className="border-blue-500 border-2 w-20 text-blue-500 text-cente rounded-xl" type="submit">Salvar</button>
            </div>
        </div>
    )
}