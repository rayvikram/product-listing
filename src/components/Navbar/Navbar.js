import React from 'react';
import {useSelector} from "react-redux"

import classes from "./Navbar.module.css"

function NavBar() {
    const wishlist = useSelector(state=>state.listing.wishlist)
    return <nav className={classes.navbar} >
        <ul className={classes.category} >
            <li> New Arrivals </li>
            <li> Rings </li>
            <li> Earrings </li>
            <li> Pendants </li>
        </ul>
        <span className={classes.search} > 
            <input placeholder="Search for products, brands and more" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </span>
        <ul  className={classes.account} >
            <li><i className="fa fa-user"></i> Profile </li>
            <li className={classes.wish} > <i className="fa fa-heart"></i> WishList <sup>{wishlist}</sup> </li>
            <li><i className="fa fa-shopping-bag"></i> Bag </li>
        </ul>
    </nav>
}

export default NavBar;