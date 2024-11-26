
import Search from './Search';
import ItemGrid from './ItemGrid';


const MainContent: React.FC = () => {
 

  return (
    <div className="col py-4 p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Item List</h4>
        <h5 className="text-secondary">Total (99)</h5>
      </div>

      {/* Search Component */}
      <Search />

      {/* Item Grid Component */}
      <ItemGrid />
    
    </div>
  );
};

export default MainContent;
