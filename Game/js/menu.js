import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss'
import {
    HashRouter,
    Route,
    Link,
    NavLink,
} from 'react-router-dom';


class Menu extends Component {

    state = {
        open: true,
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    }

    // handleOpenMenu = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         open: true
    //     })
    // }
    //
    // handleCloseMenu = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         open: false
    //     })
    // }

    handleButtonOneOn = () => {
        this.setState({one: true});
        console.log('najazd');
    }

    handleButtonOneOff = () => {
        this.setState({one: false});
        console.log('zjazd');
    }

    handleButtonOneClick = () => {
        console.log('klik jeden');
    }

    handleButtonTwoOn = () => {
        this.setState({two: true});
        console.log('najazd');
    }

    handleButtonTwoOff = () => {
        this.setState({two: false});
        console.log('zjazd');
    }

    handleButtonTwoClick = () => {
        console.log('klik dwa');

    }

    handleButtonThreeOn = () => {
        this.setState({three: true});
        console.log('najazd');
    }

    handleButtonThreeOff = () => {
        this.setState({three: false});
        console.log('zjazd');
    }

    handleButtonThreeClick = () => {
        console.log('klik trzy');

    }

    handleButtonFourOn = () => {
        this.setState({four: true});
        console.log('najazd');
    }

    handleButtonFourOff = () => {
        this.setState({four: false});
        console.log('zjazd');
    }

    handleButtonFourClick = () => {
        console.log('klik cztery');

    }
    handleButtonFiveOn = () => {
        this.setState({five: true});
        console.log('najazd');
    }

    handleButtonFiveOff = () => {
        this.setState({five: false});
        console.log('zjazd');
    }

    handleButtonFiveClick = () => {
        console.log('klik pięć');

    }

    render() {
        const {open} = this.state;
        let navClass = open ? null : "hide"; //??

        const {one} = this.state;
        const {two} = this.state;
        const {three} = this.state;
        const {four} = this.state;
        const {five} = this.state;

        let styleButtonOne = {
            fontSize: one ? '100px' : '20px',
            // height: one ? '20px' : '40px',
            color: one ? 'red' : 'black',
            transition: "5s",
        }

        let styleButtonTwo = {
            fontSize: two ? '100px' : '20px',
            // height: two ? '20px' : '40px',
            // color: one ? 'red' : 'black',
            transition: "5s",
        }
        let styleButtonThree = {
            fontSize: three ? '70px' : '20px',
            // height: three ? '20px' : '40px',
            // color: three ? 'red' : 'black',
            transition: "5s",
        }
        let styleButtonFour = {
            fontSize: four ? '100px' : '20px',
            height: four ? '20px' : '40px',
            // color: one ? 'red' : 'black',
            transition: "5s",
        }
        let styleButtonFive = {
            fontSize: five ? '80px' : '20px',
            height: five ? '20px' : '40px',
            // color: five ? 'red' : 'black',
            // five ? '8px' : ' 20px',
            transition: "5s",
            // margin-top: 60px;
            // text-decoration: 'none';
            // font-size: 0.8rem;
            // color: '#fbbb21',
            // border: '2px solid #fbbb21',
            // padding: '8px 22p',
        }


        return (
            <section className="menuApp">
                <header className="mobile-menu">
                    {/*<a href="#" className="open-menu" onMouseEnter={this.handleMouseOn}></a>*/}
                    <nav className={navClass}>
                        <ul>
                            <li style={styleButtonOne} href="#"
                                   onClick={this.handleButtonOneClick}
                                   onMouseEnter={this.handleButtonOneOn}
                                   onMouseLeave={this.handleButtonOneOff}>
                                <NavLink to='/jeden'>Styl</NavLink>
                            </li>
                            <li style={styleButtonTwo} href="#"
                                   onClick={this.handleButtonTwoClick}
                                   onMouseEnter={this.handleButtonTwoOn}
                                   onMouseLeave={this.handleButtonTwoOff}>
                                <NavLink to='/dwa'>Flex</NavLink>
                            </li>
                            <li style={styleButtonThree} href="#"
                                   onClick={this.handleButtonThreeClick}
                                   onMouseEnter={this.handleButtonThreeOn}
                                   onMouseLeave={this.handleButtonThreeOff}>
                                <NavLink to='/trzy'>Selektor</NavLink>
                            </li>
                            {/*<li style={styleButtonFour} href="#"*/}
                            {/*       onClick={this.handleButtonFourClick}*/}
                            {/*       onMouseEnter={this.handleButtonFourOn}*/}
                            {/*       onMouseLeave={this.handleButtonFourOff}>*/}
                            {/*    <NavLink to='/jeden'>Jeden</NavLink>*/}
                            {/*</li>*/}
                        </ul>
                        {/*<a style={styleButtonFive}*/}
                        {/*// href="#" className="close-menu"*/}

                        <NavLink to='/help' style={styleButtonFive}

                           onClick={this.handleButtonFiveClick}
                           onMouseEnter={this.handleButtonFiveOn}
                           onMouseLeave={this.handleButtonFiveOff}>
                            Pomoc</NavLink>
                    </nav>
                </header>
            </section>
        )
    }
}

export default Menu;