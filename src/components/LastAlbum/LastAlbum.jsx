
import React, { Component } from 'react';
// import LastAlbumIMG from "../../resources/images/lastAlbum.jpg"
import "./LastAlbum.css"

class LastAlbum extends Component {

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
            <section className="last-album">

                <div className="last-album-holder">
                    <div className="last-album-cover">
                        <div className="last-album-texts" >
                            <p>OUR LATEST ALBUM</p>
                            <div className="player">
                                {/* <iframe title="myPlayer" width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255008957&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                                </iframe> */}
                                <iframe title="myPlayer" width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/706898931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                            </div>
                            <div className="btn">
                                <p>MORE ON SOUNDCLOUD</p>
                                <i className="icon-play-outline" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

export default LastAlbum;
