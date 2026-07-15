export default function FormInput({
   label = "",
   type = null,
   placeholder = "",
   name = "", id = "",
   required,
   onChange = () => { }
}) {

   return (
      <div className="flex flex-col justify-center gap-2 text-[#0c0066] font-semibold">
         <label className="text-sm font-medium "></label>
         {label}
         <input
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-70"
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            required={required}
            onChange={onChange}
         />
      </div>
   )
}
