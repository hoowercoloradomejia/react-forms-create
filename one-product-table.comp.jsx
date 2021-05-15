import React from 'react';
import Mustafa from '../mustafaacc/mustafaacc-table.comp';
import TwoProductTable from '../two-product-table/two-product-table.comp';
import './one-product-table.style.css';


const OneProductTable = (props) =>{
    return (
        <div className="one-product-table-cont">
            <Mustafa/>
            <TwoProductTable productsList={props.productsList}
                             onAddProduct={props.onAddProduct}   
            />

        </div>
    );    
}

export default OneProductTable;