export default function Checkbox({ id = "", label = "", name = "", type = "checkbox", error = null, ...rest }) {
   return (
      <div className="flex space-x-1 text-xs">
         <input
            type={type}
            name={name}
            id={id}
            {...rest}
         />
         <label htmlFor={id}>
            {label}
         </label>
         <p className="text-red-600 text-xs h-2">{error?.message ?? ""}</p>
      </div>
   )
}
