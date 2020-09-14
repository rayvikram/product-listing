import React from 'react';
import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Listing from "../Listings/Listings"

function Dashboard() {
    return (
        <div className="main-container" >
            <NavBar />
            <Listing />
            <Footer />
        </div>
    )
}

export default Dashboard;