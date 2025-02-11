import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ currentPage, totalPages, paginate }: PaginationProps) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-md disabled:bg-gray-100 disabled:text-gray-400 hover:bg-gray-300 transition-colors"
      >
        Anterior
      </button>
      <span className="px-4 py-2 bg-gray-200 text-gray-700">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md disabled:bg-gray-100 disabled:text-gray-400 hover:bg-gray-300 transition-colors"
      >
        Siguiente
      </button>
    </div>
  );
}