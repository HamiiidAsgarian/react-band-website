import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar.jsx"
import Banner from "../components/Banner/Banner.jsx";
import LastAlbum from "../components/LastAlbum/LastAlbum";
import Tour from "../components/Tour/Tour";
import Live from "../components/Live/Live";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

class pageOne extends Component {
    state = {}
    render() {
        return (
            <>
                <NavBar />
                <Banner />
                <LastAlbum />
                <Tour />
                <Live />
                <Blog />
                <Footer/>
            </>
        );
    }
}

export default pageOne;