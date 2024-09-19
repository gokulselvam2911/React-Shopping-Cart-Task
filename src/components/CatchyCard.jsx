import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CatchyCard = () => {
  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            "Shop smartly, live better. Discover the best deals on our exclusive products!"
          </p>
          <footer className="blockquote-footer">
            The GUVI Team <cite title="Source Title">Shop with Us</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};


export default CatchyCard;
