import React from 'react';
import { useSelector } from "react-redux"

import EachProduct from "../../components/Product/Product"

function Products() {
    const productList = useSelector(state => state.listing.productList)
    const loader = useSelector(state => state.listing.loader)
    if (loader) {
        return (
            <div className="right-side"> 
            <i className="fa fa-spinner" ></i>
            </div>
        ) 
    }
    return (
    <div className="right-side"> 
        { productList.map((item,idx)=> <EachProduct key={idx} data={item} /> )}
    </div>
    )
}

export default Products;