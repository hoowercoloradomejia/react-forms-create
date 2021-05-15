import React from 'react';
import './disfras-category-row.style.css';

const DisfrasCategoryRow = (props) => {
    return (
        <div className="disfras-category-row-cont">
          {props.categoryName}  
        </div>
    );    
}

export default DisfrasCategoryRow;