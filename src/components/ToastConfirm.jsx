import toast from 'react-hot-toast';

export default function ToastConfirm({ onConfirm, text }) {
   return (
      toast((t) => (
         <span className='flex gap-3'>
            {text}
            <button className='text-gray-500 font-bold hover:text-black hover:cursor-pointer'
               onClick={() => {
                  toast.dismiss(t.id)
                  onConfirm()
               }}
            >
               Aceptar
            </button>
            <button className='text-gray-500 font-bold hover:text-black hover:cursor-pointer'
               onClick={() =>
                  toast.dismiss(t.id)
               }
            >
               Cancelar
            </button>
         </span >
      ))
   )
}
