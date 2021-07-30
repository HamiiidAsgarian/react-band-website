
import React, { Component } from 'react';

import "./Live.css"

// import CustomPlayPause from './CustomPlayPause'

// import shad from "../../resources/audios/shad.mp3";





class Live extends Component {

    state = {
        scroll: 0,
    }
    render() {
        // window.onscroll = () => {
        //     if (document.documentElement.scrollTop > 1400)
        //         this.setState({ scroll: (document.documentElement.scrollTop-1400)*1 })
        //     console.log(document.documentElement.scrollTop)
        //     console.log(this.state.scroll)
        // }
        return (
            <section className="live">
                <div className="live-holder">
                    <div className="live-cover">
                        <div className="live-texts" >
                        <p>Look Inside</p>
                            <p>OUR LATEST ALBUM</p>
                            <div className="round-btn">
                                <i className="icon-play-outline" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

export default Live;
