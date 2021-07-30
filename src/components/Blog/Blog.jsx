
import React, { Component } from 'react';

import blogGear from "../../resources/images/blog-gear.jpg"
import blogGear2 from "../../resources/images/blog-gear3.jpg"
import blogGear3 from "../../resources/images/blog-gear2.jpg"

import "./Blog.css"

// import CustomPlayPause from './CustomPlayPause'

// import shad from "../../resources/audios/shad.mp3";





class Blog extends Component {

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
            <section className="Blog">
                <div className="Blog-holder">
                    <div className="Blog-cover">
                        <div className="Blog-texts" >
                            <p>FROM THE BLOG</p>
                            <div className="data">

                                <div className="data-frame">
                                    <div className="frame-cover">
                                        <div className="frame-content">
                                            <div className="frame-heading"><p>GEAR</p></div>
                                            <div className="frame-body">
                                                <p> February 5, 2017 </p>
                                                <p>TUBE AMPS FOR DAYS</p>
                                                <p>
                                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the…
                                            </p>
                                            </div>
                                            <div className="frame-info">
                                                <div className="frame-info_sec"><i className="icon-user-outline frame-icon" /><p> Nectar Manager</p></div>
                                                <div className="frame-info_sec"><i className="icon-comment frame-icon" /><p> 98</p></div>
                                                <div className="frame-info_sec"><i className="icon-heart-empty frame-icon" /><p> 20</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="aaa" src={blogGear} alt="" />
                                </div>

                                <div className="data-frame">
                                    <div className="frame-cover">
                                        <div className="frame-content">
                                            <div className="frame-heading"><p>TOUR</p></div>
                                            <div className="frame-body">
                                                <p> February 5, 2017 </p>
                                                <p>PREPARING FOR THE TOUR</p>
                                                <p>

                                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of tthe ...                                            </p>
                                            </div>
                                            <div className="frame-info">
                                                <div className="frame-info_sec"><i className="icon-user-outline frame-icon" /><p> Nectar Manager</p></div>
                                                <div className="frame-info_sec"><i className="icon-comment frame-icon" /><p> 98</p></div>
                                                <div className="frame-info_sec"><i className="icon-heart-empty frame-icon" /><p> 20</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="aaa" src={blogGear2} alt="" />
                                </div>
                                
                                <div className="data-frame">
                                    <div className="frame-cover">
                                        <div className="frame-content">
                                            <div className="frame-heading"><p>BAND</p></div>
                                            <div className="frame-body">
                                                <p> February 5, 2017 </p>
                                                <p>A TRIBUTE FOR OUR FANS</p>
                                                <p>
                                                The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be…
                                            </p>
                                            </div>
                                            <div className="frame-info">
                                                <div className="frame-info_sec"><i className="icon-user-outline frame-icon" /><p> Nectar Manager</p></div>
                                                <div className="frame-info_sec"><i className="icon-comment frame-icon" /><p> 98</p></div>
                                                <div className="frame-info_sec"><i className="icon-heart-empty frame-icon" /><p> 20</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="aaa" src={blogGear3} alt="" />
                                </div>
                            
                            </div>
                            <div className="btn tour-btn">
                                <p>VIEW ALL POSTS</p>
                                <i className="icon-play-outline" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

export default Blog;
