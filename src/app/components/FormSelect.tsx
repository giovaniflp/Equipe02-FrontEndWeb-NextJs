export default function FormSelect(){

    const estados = [
        "PE", "PB", "CE", "RN", "AL", "SE", "BA", "MA", "PI", "TO", "PA", "AP", "RR", "AM", "AC", "RO", "MT", "MS", "GO", "DF", "SP", "RJ", "ES", "MG", "PR", "SC", "RS"
    ]

    estados.sort()

    return(
        <div className="flex gap-2">
            <label>UF</label>
            <select className="border-2 border-gray-400 rounded-md">
                <option value="">Selecione</option>
                {estados.map((estado, index) => {
                    return <option key={index} value={estado}>{estado}</option>
                })}
            </select>
        </div>
    )
}