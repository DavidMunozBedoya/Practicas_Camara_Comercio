export const ButtonSpan = ({ action = () => null, icon = <></>, className = "" }) => {
   return (
      <span
         className={className}
         onClick={action}
      >
         {icon}
      </span>
   )
}