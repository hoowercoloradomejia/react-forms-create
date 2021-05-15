
import React, { useState, ToastContainer } from 'react';
import DisfrasCategoryRow from '../disfras-category-row/disfras-category-row.comp';
import DisfrasProductRow from '../disfras-product-row/disfras-product-row.comp';
import './two-product-table.style.css';

const TwoProductTable = (props) =>{

    

    const[category, setCategory]= useState('d1');
    const[name, setName]= useState('');
    const[price, setPrice]= useState(0);
    const[stock, setStock]= useState(0);
    
    const addproduct =(event)=>{
        event.preventDefault();
        const newProduct ={
            id:name,
            name:name,
            price:parseFloat(price),
            stock:parseFloat(stock),
        };
        props.onAddProduct(newProduct, category);
        
    }


    return (
        <div className="two-product-table-container">
            <div>

            {props.productsList.map((category, index)=>{
                return (
                     <React.Fragment key={category.id}>
                        <DisfrasCategoryRow categoryName={category.name}/>
                        {category.products.map((product, indexProduct)=>{
                            return(
                                <DisfrasProductRow 
                                key={product.id} 
                                product={product}/>    
                            );

                        })}
                     </React.Fragment>
                );
            })}
            </div>
            <div className="product-form"> 
                <form>
                    <table>
                        <tbody>
                            <tr>
                                
                                <td>
                                    <th>Selecione producto</th>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        
                                        <option value="d1">Accesorio</option>
                                        <option value="d2">Face</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                
                                <th>nombre</th>
                                
                                <td>
                                    {/* <div className="titu">
                                        Nombre
                                    </div> */}
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        value={name} 
                                        onChange={(event)=>{
                                         setName(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>

                                <th>Precio</th>
                                
                                {/* <td>
                                    
                                    <div className="titu">
                                          Precio
                                        </div>  
                                </td> */}
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        value={price} 
                                        onChange={(event)=>{
                                         setPrice(event.target.value);
                                        }}
                                    />
                                </td>    
                            </tr>
                            <tr>
                                <th>Cantidad</th>
                                {/* <td>
                                    <div className="titu">Cantidad</div>
                                    
                                </td> */}
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        value={stock} 
                                        onChange={(event)=>{
                                         setStock(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                                <tr>
                                    <td>
                                        <button
                                        
                                            onClick={addproduct}
                                        >
                                            Agregar Accesorio
                                        </button>
                                       
                    


                                    </td>
                            
                                </tr>
                        </tbody>
                    </table>
                     
                </form>
            </div>
            
        </div>
    );    
}

export default TwoProductTable;