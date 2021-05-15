import React, {useState} from 'react';
import OneProductTable from './components/one-product-table/one-product-table.comp'

const ProductsAccesorioPage = () =>{



    let productsList = [
            {
                id:"d1",
                name:'Accesorios',
                products:[
                    
                    
                ]
            },
            {
                id:"d2",
                name:'Faces',
                products:[
                    
                    
                ]
            },

    ];  
    
    const[products, setproducts] = useState(productsList);

    

    return (
        <>
            <OneProductTable
                 productsList={products}
                 onAddProduct={(newDisfras, categoryId)=>{
                     const newProducts = [];
                     for(let i=0; i<products.length; i++){
                         if(products[i].id !== categoryId){
                             newProducts.push(products[i]);
                         }
                         else{
                            newProducts.push(
                                {
                                    ...products[i],
                                    products:[...products[i].products, newDisfras] 
                                }
                                );    
                         }
                         
                     }
                       setproducts(newProducts); 
                 }}
            />
            
        </>
    );    
}

export default ProductsAccesorioPage;