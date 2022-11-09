const FormInput=({Value,onChange})=>{
return(
    <input value={Value} onChange={(e)=>onChange(e.target.value)} className="border border-gray-300 pl-3 py-2 focus:outline-none text-lg focus:outline-blue-300 focus:outline-1 text-gray-500 rounded-lg " type="text" />
)
}

export default FormInput;