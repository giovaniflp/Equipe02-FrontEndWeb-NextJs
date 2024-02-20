export default function FormInput({type, title}: {type:string, title: string}){
    return(
        <div className="flex gap-2">
            <label>{title}</label>
            <input className="border-2 border-gray-400 rounded-md" type={type} />
        </div>
    )
}