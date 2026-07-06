export const Pagination = ({ currentPage, totalPages, children }) => (
   <div>
      {children}
      <div className='flex justify-center'>
         <span className='text-gray-500'>Pág. {currentPage} de {totalPages}</span>
      </div>
   </div>
);