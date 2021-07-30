import React, { Component } from 'react';
import "./NavBar.css";


import { connect } from "react-redux";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.between = this.between.bind(this);
    }
    state = {
        navMode: "static",
        color: "-50px",
        scrollValue: 0,
    }

    scrollTotop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
    between = (value, a, b) => {
        if (value > a && value <= b)
            return true
        else
            return false
    }
    navOptionsHandler(hight){
        window.scroll({ top: hight, left: 0, behavior: 'smooth' })
    }
    // scroll = (a) => {
    //     if (document.documentElement.scrollTop == 0) {
    //     }
    //     if (document.documentElement.scrollTop < 200 && document.documentElement.scrollTop > 100)
    //         console.log("100~200")
    //     if (document.documentElement.scrollTop > 300)
    //         console.log("300")
    // }

    render() {
        //   window.onscroll = function () {  ; };
        // this.scroll(a);
        window.onscroll = () => {
            if (window.scrollY > 0) { this.setState({ navMode: 'fixed', }) }
            else if (window.scrollY === 0) { this.setState({ navMode: 'static', color: "-50px" }) }
            if (window.scrollY > 600) { this.setState({ color: "30px" }) }
            else if (window.scrollY < 600) { this.setState({ color: "-50px" }) }

            this.setState({ scrollValue: document.documentElement.scrollTop })

            // console.log(this.state.scrollValue)
            // console.log(document.documentElement.scrollTop)
        };



        return (
            <nav className={"nav " + this.state.navMode} >
                <div className="nav-holder">
                    <div className="logo" >
                        <i className="icon-logo"></i>
                    </div>
                    <div className="menu">
                        <ul>
                            <li onClick={()=>this.navOptionsHandler(0)}><span className={"nav-pop " + (this.between(this.state.scrollValue, -1, 886) ? "navBorderBottom" : "")}></span>INTRO</li>
                            <li onClick={()=>this.navOptionsHandler(886)}><span className={"nav-pop " + (this.between(this.state.scrollValue, 886, 1473) ? "navBorderBottom" : "")}></span> ABOUT</li>
                            <li onClick={()=>this.navOptionsHandler(1473)}><span className={"nav-pop " + (this.between(this.state.scrollValue, 1473, 2573) ? "navBorderBottom" : "")}></span>MUSIC</li>
                            <li onClick={()=>this.navOptionsHandler(2573)}><span className={"nav-pop " + (this.between(this.state.scrollValue, 2573, 3947) ? "navBorderBottom" : "")}></span>TOUR</li>
                            <li onClick={()=>this.navOptionsHandler(3947)}><span className={"nav-pop " + (this.between(this.state.scrollValue, 3947, 4559) ? "navBorderBottom" : "")}></span>NEWS</li>
                            <li onClick={()=>this.navOptionsHandler(4559)}><span className={"nav-pop " + (this.between(this.state.scrollValue, 4559, 5400) ? "navBorderBottom" : "")}></span>DEMOS</li>
                        </ul>
                    </div>
                    <div className="socials">
                        <div className="icon-frame">
                            <div>
                                <i className="icon-twitter" />
                                <i className="icon-twitter myBlue" />
                            </div>
                        </div>
                        <div className="icon-frame">
                            <div>
                                <i className="icon-soundcloud" />
                                <i className="icon-soundcloud myBlue" />
                            </div>
                        </div>
                        <div className="icon-frame">
                            <div>
                                <i className="icon-facebook" />
                                <i className="icon-facebook myBlue" />
                            </div>
                        </div>
                        <div className="icon-frame">
                            <div>
                                <i className="icon-vimeo" />
                                <i className="icon-vimeo myBlue" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"to-top "} onClick={(e) => this.scrollTotop(e)}><i className="icon-up-open to-top-i " style={{ bottom: this.state.color }} /></div>

            </nav>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        goodId: state.goodId,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        SeaValue: (prop) => {
            dispatch({ type: "SEARCH_VALUE", searchValue: prop })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(NavBar);
