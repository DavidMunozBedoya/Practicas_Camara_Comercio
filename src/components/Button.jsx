export const Button = ({ action = () => null, className = "", text = "", type = ""}) => {

   return (
      <button
         type={type}
         className={className}
         onClick={action}
      >{text}
      </button>
   )
}
