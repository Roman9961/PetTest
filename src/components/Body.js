import React from 'react';
import WOW from 'wowjs';
import Preloader from './Preloader';
import Header from './Header';
import About from './About';
import Features from './Features';
import 'animate.css'

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    state ={
        isShowPreloader: true,
        isTop: true
    };

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', this.handleScroll);
        new WOW.WOW({
            live: false
        }).init();
    }

    handleLoad(){
            this.setState(()=>({
                isShowPreloader:false
            }));
    };

    handleScroll(){
        this.setState(()=>({
            isTop: window.scrollY<50
        }));

    };

    render(){
        return(
            <React.Fragment>
                <Preloader isShow = {this.state.isShowPreloader} />
                <Header isTop = {this.state.isTop}/>
                <About/>
                <Features/>
            </React.Fragment>
        )
    }

}

export default Body;