import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-dark text-white py-4 vh-100 position-fixed" style={{ width: '18.666%' }}>
      <h4 className="text-center mb-4">Inventory</h4>
      <div className="list-group p-3">
        <button className="list-group-item list-group-item-action bg-dark text-white">
          Item List
        </button>
        <button className="list-group-item list-group-item-action bg-dark text-white">
          Create Item
        </button>
        <button className="list-group-item list-group-item-action bg-dark text-white">
          Import CSV Data
        </button>
      </div>
     
    </div>
  );
};

export default Sidebar;
