
export default function Forms({children, title = "", className = ""}) {
  return (
    <div className={className}>
      <h1 className='text-2xl font-bold text-center'>{title}</h1>
      {children}      
    </div>
  )
}
