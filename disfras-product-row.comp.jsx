import React from 'react';
import './disfras-product-row.style.css';

const DisfrasProductRow = (props) => {
    return (
        <div className="disfras-product-row-cont">

          {
              props.product.stock === 0
              ?
                <span className="product-without-stock">{props.product.name}</span>
              :
                <span>{props.product.name}</span> 
          }
          {''}{''} ${props.product.price}
        </div>
    );    
}

export default DisfrasProductRow;