export const Pagination = ({ currentPage, totalPages, children }) => (
   <div className="fixed bottom-0 w-full bg-white p-2">
      {children}
      <div className='flex justify-center items-center'>
         <span className='text-gray-500'>Pág. {currentPage} de {totalPages}</span>
      </div>
   </div>
);