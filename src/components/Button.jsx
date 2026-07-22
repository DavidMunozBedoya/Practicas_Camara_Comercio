export const Button = ({ action = () => null, className = "", text = "", type = "submit", disabled = false }) => {

   return (
      <div className="flex justify-center">
         <button
            disabled={disabled}
            type={type}
            className={`text-white font-bold p-2 rounded-lg w-full md:w-auto ${disabled ? "bg-gray-200 cursor-default" : "bg-[#0c0066] cursor-pointer hover:bg-blue-700"} ${className}`}
            onClick={action}
         >{text}
         </button>
      </div>

   )
}
