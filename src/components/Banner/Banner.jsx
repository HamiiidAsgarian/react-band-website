import React, { Component } from 'react';
import "./Banner.css"
import banner from "../../resources/images/banner.jpg"
class Banner extends Component {
    state = {}
    render() {
        return (
            <section className="banner">
                <div className="banner-holder">
                    <img src={banner} className="banner-image" alt="Banner" />
                    <div className="banner-cover">
                        <div className="banner-texts">
                            <p>
                                SALIENT
                             </p>
                            <p>
                                The long awaited "Creation" tour is starting soon
                            </p>
                            <div className="btn-midd">
                                <div className="btn-midd gradianet">
                                    <p>View Tour Dates</p>
                                    <i className=" icon-fast-fw-outline" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="theStory-holder">
                    <div className="theStory-textframe">
                        <h4>THE STORY</h4>
                        <p>AN AMERICAN HARD ROCK<br /> BAND FROM WASHINGTON,<br /> D.C</p>
                        <p>
                            A small river named Duden flows by their place and supplies it with<br />
                            the necessary regelialia. It is a paradisematic country, in which<br />
                            roasted parts of sentences fly into your mouth.
                        </p>

                    </div>
                </div>

            </section>
        );
    }
}
export default Banner;