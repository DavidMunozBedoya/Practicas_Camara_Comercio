import { IconBack, IconNext } from '../assets/icons/tablerIcons';

export default function Pagination({ currentPage, totalPages, actions }) {

   const { clickNextPage, clickPrevPage } = actions;

   return (
      <div>
         <div className="fixed top-1/2 right-1 transform -translate-y-1/2">
            <span className='text-gray-500' onClick={clickNextPage}><IconNext /></span>
         </div>
         <div className='flex justify-center items-end'>
            <span className='text-gray-500'>Pág. {currentPage} de {totalPages}</span>
         </div>
         <div className="fixed top-1/2 left-1 transform -translate-y-1/2">
            <span className='text-gray-500' onClick={clickPrevPage}><IconBack /></span>
         </div>
      </div>

   )
}

