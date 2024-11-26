import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="pagination-container d-flex justify-content-between align-items-center " style={{marginLeft: '18.666%'}}>
      {/* Previous Button */}
      <button
        className="btn btn-primary"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Info */}
      <p className="mb-0 text-center">
        Current Page: {currentPage}/{totalPages}
      </p>

      {/* Next Button */}
      <button
        className="btn btn-primary"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
