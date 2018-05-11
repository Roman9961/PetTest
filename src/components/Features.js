import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import img from '../images/iPhone02.png';



const Header = ({isTop}) => {


    return (
        <BrowserRouter>
            <section id="FEATURES" className="features page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="section_title wow fadeIn" data-wow-duration="1s">
                                <h2>Преимущества</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 right_no_padding wow fadeInLeft" data-wow-duration="1s">

                                <div className="left_single_feature">
                                    <div><span className="pe-7s-like"></span></div>

                                    <h3>Creative Design<span>/</span></h3>
                                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>



                                <div className="left_single_feature">
                                    <div><span className="pe-7s-science"></span></div>

                                    <h3>Modern Look<span>/</span></h3>
                                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>


                                <div className="left_single_feature">
                                    <div><span className="pe-7s-look"></span></div>

                                    <h3>Minimal Layout<span>/</span></h3>
                                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="feature_iphone">
                                    <img className="wow bounceIn" data-wow-duration="1s" src={img} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">

                                <div className="right_single_feature">
                                    <div><span className="pe-7s-monitor"></span></div>

                                    <h3><span>/</span>Retina ready</h3>
                                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>


                                <div className="right_single_feature">
                                    <div><span className="pe-7s-phone"></span></div>

                                    <h3><span>/</span>Responsive Ready</h3>
                                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>


                                <div className="right_single_feature">
                                    <div><span className="pe-7s-gleam"></span></div>

                                    <h3><span>/</span>Clean Code</h3>
                                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </BrowserRouter>
    );
};

export default Header;