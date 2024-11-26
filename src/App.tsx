import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/sidebar';
import MainContent from './components/MainContent';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 23; // Assume there are 23 total pages

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="row" style={{ marginLeft: '18.666%' }}>
        <MainContent />
      </div>

      {/* Pagination Component (Fixed Position) */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />

    </div>
  );
}

export default App;
