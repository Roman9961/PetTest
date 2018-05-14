import React from 'react';
import Slider from "react-slick";
import img from '../images/iphone09.png';


class Photos extends React.Component{
    options = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
render() {
    return (
        <section className="apps_screen page" id="SCREENS">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 wow fadeInBig" data-wow-duration="1s">
                        <div className="section_title">
                            <h2>Фотографии ошейников и бирок</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                    </div>
                </div>
            </div>


<div className="slider-container">
                    <Slider {...this.options}>
                        <div><img className="slide-img" src={img} /></div>
                        <div ><img className="slide-img" src={img}/></div>
                        <div><img className="slide-img" src={img} /></div>
                        <div><img className="slide-img" src={img} /></div>
                        <div><img className="slide-img" src={img} /></div>
                    </Slider>
</div>



        </section>
    );
}
};

export default Photos;