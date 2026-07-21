export default function FormInput({ label="", id = "", type = "", placeholder = "", error=null, ...rest }) {
   return (
      <div className="flex flex-col justify-center gap-1 text-[#0c0066] font-semibold">
         <label htmlFor={id}>{label}</label>
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={`${error ? "border border-red-500 text-red-900 placeholder:text-red-500" : "bg-gray-50 border border-gray-300 text-gray-900"} rounded-lg p-2 w-full`}
            autoComplete={id}
            {...rest}
         />
         <p className="text-red-600 text-xs h-2">{error?.message ?? ""}</p>
      </div>
   );
}
