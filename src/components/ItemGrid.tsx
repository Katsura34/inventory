import React from 'react';

const ItemGrid: React.FC = () => {
  return (
    <div className="row">
      {Array(7)
        .fill(0)
        .map((_, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="bg-secondary rounded mb-3" style={{ height: '100px' }}>
                  {/* Placeholder for Image */}
                </div>
                <h5 className="card-title">Item Name</h5>
                <p className="card-text mb-2">
                  <strong>Quantity:</strong> 00 <br />
                  <strong>Price:</strong> 00.00
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary btn-sm">Update</button>
                  <button className="btn btn-danger btn-sm">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemGrid;
