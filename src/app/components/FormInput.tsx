export default function FormInput({type, title, placeholder, name, required}: {type:string, title: string, placeholder?: string, name: string, required?: boolean}){
    return(
        <div className="flex gap-2">
            <label>{title}</label>
            <input className="border-2 border-gray-400 rounded-md placeholder:text-gray-500" type={type} placeholder={placeholder} name={name} required={required}/>
        </div>
    )
}