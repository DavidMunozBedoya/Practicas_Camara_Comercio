import { IconX } from "../assets/icons/tablerIcons";
import { useModalStore } from "../stores/useModalStore";

export const Modal = () => {

   const { isVisible, component, closeModal } = useModalStore();

   if (!isVisible) return;

   return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50">
         <div className="relative flex flex-col justify-center items-center overflow-y-auto bg-white rounded-xl min-w-auto m-8">
            <span className="absolute top-2 right-3 hover:cursor-pointer z-10" onClick={closeModal}>
               <IconX />
            </span>
            {component}
         </div>
      </div>
   );
};
