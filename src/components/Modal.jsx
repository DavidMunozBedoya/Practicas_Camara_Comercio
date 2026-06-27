import { useModalStore } from "../stores/useModalStore";

export const Modal = () => {

   const { isVisible, component, closeModal } = useModalStore();

   if (!isVisible) return;

   return (
      <div className="bg-black/50 backdrop-blur-xs w-full h-dvh flex justify-center items-center z-50 fixed">
         <div className="bg-white rounded-xl min-w-xl w-xl max-h-2/3 relative flex flex-col justify-center items-center overflow-y-auto">
            <span className="absolute top-2 right-3 hover:cursor-pointer z-10" onClick={closeModal}>X</span>
            {component}
         </div>
      </div>
   );
};
