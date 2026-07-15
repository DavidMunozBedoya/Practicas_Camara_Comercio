export default function FormInput(
   {
      id = "",
      label = "",
      type = "",
      placeholder = "",
      required,
      ...rest
   }) {

   return (
      <div className="flex flex-col justify-center gap-2 text-[#0c0066] font-semibold">
         <label htmlFor={id} className="text-sm font-medium ">
            {label}
         </label>
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-70"
            required={required}
            autoComplete={id}
            {...rest}
         />
      </div>
   );
}
