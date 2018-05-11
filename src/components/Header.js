import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import img from '../images/iPhone_Home.png';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

render() {
    return (
        <BrowserRouter>
            <section className="header parallax home-parallax page" id="HOME">
                <h2></h2>
                <div className="section_overlay">
                    <Navbar className={`navbar navbar-default navbar-dark fixed-top navbar-expand-lg ${this.props.isTop ? '' : 'show'}`}>
                        <div className="container">
                        <NavbarBrand href="#" className="navbar-brand"><div className="headerLogo"></div></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse className="navbar-collapse navbar-list" isOpen={!this.state.collapsed} navbar>
                            <Nav navbar className="navbar-right">
                                <NavItem className={`nav-item ${location.hash == "#HOME" ? "active" : ""}`}>
                                   <Link
                                        to="/#HOME"> Главная</Link>
                                </NavItem>
                                <NavItem className={`nav-item ${location.hash == "#ABOUT" ? "active" : ""}`}>
                                   <Link
                                        to="/#ABOUT">О продукте </Link>
                                </NavItem>
                                <NavItem className={`nav-item ${location.hash == "#FEATURES" ? "active" : ""}`}>
                                    <Link
                                        to="/#FEATURES">Преимущества</Link>
                                </NavItem>
                                <NavItem className={`nav-item ${location.hash == "#SCREENS" ? "active" : ""}`}>
                                    <Link
                                        to="/#SCREENS">Купить</Link>
                                </NavItem>
                                <NavItem className={`nav-item ${location.hash == "#DOWNLOAD" ? "active" : ""}`}>
                                    <Link
                                        to="/#DOWNLOAD">Контакты </Link>
                                </NavItem>
                                <NavItem className={`nav-item ${location.hash == "#CONTACT" ? "active" : ""}`}>
                                    <Link
                                        to="/#CONTACT">Оплата и доставка </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                    </Navbar>

                    <div className="container home-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="logo text-center">
                                    <div className="headerLogoBig"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <div className="home_text">
                                    <h1>Ошейник с именной биркой</h1>
                                    <p>Ваш питомец всегда с вами - ошейник с контактами хозяина.</p>
                                    <div className="download-btn">
                                        <a className="btn home-btn wow fadeInLeft" href="#DOWNLOAD">Купить</a>
                                        <a className="tuor btn wow fadeInRight" href="#ABOUT">Узнать больше <i
                                            className="fa fa-angle-down"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-offset-1 col-sm-4">
                                <div className="home-iphone">
                                    <img src={img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}
};

export default Header;