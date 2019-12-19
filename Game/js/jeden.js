import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import parse from 'style-to-object';
import Menu from "./menu";
import {NavLink, Link} from "react-router-dom";

// import {Link} from "react-router-dom";


class Jeden extends Component {

    state = {
        text: "",
        confirm: false,
        styles: '',
        // one: false,
    }

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    }

    handleChangeStyles = e => {
        this.setState({
            styles: e.target.value,
        });
    }

    handleButtonClick = e => {
        e.preventDefault();
        console.log('klik');
        this.setState({
            confirm: true,
        })
    }

    handleButtonJedenOn = () => {
        this.setState({one: true});
        console.log('najazd');
    }

    handleButtonJedenOff = () => {
        this.setState({one: false});
        console.log('zjazd');
    }

    handleButtonJedenClick = () => {
        console.log('klik jeden');
    }

    render() {
        // const {one} = this.state;

        // let styleButtonJeden = {
        //             fontSize: one ? '100px' : '20px',
        //             height: one ? '20px' : '40px',
        //             color: one ? 'red' : 'black',
        //             transition: "5s",
        //         }

                let objStyles = {};
        try {
            objStyles = parse(this.state.styles);
            console.log(objStyles);
        } catch (e) {

        }



        return (
            <section className="menuAppJeden">
                <section className="menuAppJedenDiv">
                    <div className="menuAppJeden-leftDiv"><div style={objStyles}>{this.state.text}</div></div>
                    <div className="menuAppJeden-rightDiv">
                        <input onChange={this.handleChange} value={this.state.text} readOnly={this.state.confirm}
                               placeholder={'Ulubiony wyraz, to:'}></input>
                        <button onClick={this.handleButtonClick}> Zatwierdź ulubiony wyraz.</button>
                        <textarea value={this.state.styles} onChange={this.handleChangeStyles}
                                  placeholder={'Wprowadź zmiany:'}></textarea></div>
                </section>
                <section className="menuAppJedenP">
                    <p className="paragraf">Wprowadź 10 zmian Twojego ulubionego wyrazu..
                        np: Zmień rozmiar czcionki, jej kolor, przesuń w prawo, umieść w czerwonej ramce, w razie problemów zajrzyj do Pomocy!</p>
                </section>
                <div className='backJeden'>
                    <NavLink to='/'>Wróć</NavLink>
                </div>
            </section>

    )

    }
    }

    export default Jeden;