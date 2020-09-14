import React from 'react';
import {useSelector} from "react-redux"

function PageDetails() {
    const products = useSelector(state=>state.listing.productList)
    return <div className="filters" > Available : {products.length} items</div>
}

export default PageDetails;