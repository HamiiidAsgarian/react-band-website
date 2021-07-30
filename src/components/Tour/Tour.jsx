
import React, { Component } from 'react';
import "./Tour.css"

// import CustomPlayPause from './CustomPlayPause'

// import shad from "../../resources/audios/shad.mp3";





class Tour extends Component {

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
            <section className="Tour">
                <div className="Tour-holder">
                    {/* <img src={TourIMG} style={{ top: "-" + this.state.scroll + "px" }} alt="" /> */}
                    <div className="Tour-cover">
                        <div className="Tour-texts" >
                            <p>USA TOUR</p>
                            <div className="time-table">
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Massey Hall</div>
                                        <div>Camden, NJ</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 25</div>
                                        <div>Electric Factory</div>
                                        <div>Chicago, IL</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 27</div>
                                        <div>Manhattan Center</div>
                                        <div>Seattle, WA</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 28</div>
                                        <div>{"BB&T Pavilion"}</div>
                                        <div>Oakland, CA</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Massey Hall</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>Apr 11</div>
                                        <div>Aragon Ballroom</div>
                                        <div>Los Angeles</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>Apr 14</div>
                                        <div>WaMu Theater</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>Apr 22</div>
                                        <div>Fox Theater</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>Apr 24</div>
                                        <div>Shrine Expo Hall</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>Apr 28</div>
                                        <div>Electric Factory</div>
                                        <div>Philadelphia, PA</div>
                                        <div className="small-btn"><p>BUY TICKETS</p></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

export default Tour;
