import React from 'react';
import PageDetails from "./PageDetails"
import Filters from "./Filters"
import Products from "./Products"

function Listing() {
    return (
    <main>
        <PageDetails />
        <Filters />
        <Products />
    </main>)
}

export default Listing;