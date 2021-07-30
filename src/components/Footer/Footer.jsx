
import React, { Component } from 'react';
import "./Footer.css";


class Footer extends Component {

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
            <section className="Foot">
                <section className="Footer"/>
                
                <div className="Footer-real">
                    <div className="Footer-holder">
                        <div className="Footer-icons">
                            <i className="icon-facebook"></i>
                            <i className="icon-vimeo"></i>
                            <i className="icon-instagram-1"></i>
                            <i className="icon-soundcloud"></i>
                        </div>
                        <p className="footer-copywrite">© 2019 Hamiiid inspired by Salient Band. All Rights Reserved</p>
                    </div>
                </div>
                </section>
                );
            }
        }
        
        export default Footer;
