export default function FormRadio(){
    return(
        <div className="flex gap-2">
            <h2>Ativo:</h2>
            <div className="flex gap-2">
                <input type="radio" name="radioButton" id="Sim" />
                <label htmlFor="">Sim</label>
                <input type="radio" name="radioButton" id="Não" />
                <label htmlFor="">Não</label>
            </div>
        </div>
    )
}