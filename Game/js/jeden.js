import React, {Component} from "react";
// import ReactDOM from "react-dom";
import './../sass/style.scss';
import parse from 'style-to-object';
// import Menu from "./menu";
import {NavLink, Link} from "react-router-dom";

// import {Link} from "react-router-dom";

class Jeden extends Component {

    state = {
        text: "",
        confirm: false,
        styles: '',
        // one: false,
    };

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    };

    handleChangeStyles = e => {
        this.setState({
            styles: e.target.value,
        });
    };

    handleButtonClick = e => {
        e.preventDefault();
        console.log('klik');
        this.setState({
            confirm: true,
        })
    };

    // handleButtonJedenOn = () => {
    //     this.setState({one: true});
    //     console.log('najazd');
    // }

    // handleButtonJedenOff = () => {
    //     this.setState({one: false});
    //     console.log('zjazd');
    // }
    //
    // handleButtonJedenClick = () => {
    //     console.log('klik jeden');
    // }

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
            const str = this.state.styles.substr(0, this.state.styles.lastIndexOf(';'));
            objStyles = parse(str);
            console.log(objStyles);
        } catch (e) {

        }

        return (
            <section className="menuAppJeden">
                <section className="menuAppJedenDiv">
                    <div className="menuAppJeden-leftDiv">
                        <div style={objStyles}>{this.state.text}</div>
                    </div>
                    <div className="menuAppJeden-rightDiv">
                        <input onChange={this.handleChange} value={this.state.text} readOnly={this.state.confirm}
                               placeholder={'Ulubiony wyraz, to:'}>
                        </input>
                        <button onClick={this.handleButtonClick}> Zatwierdź ulubiony wyraz.</button>
                        <textarea value={this.state.styles} onChange={this.handleChangeStyles}
                                  placeholder={'Wprowadź zmiany:'}>
                        </textarea></div>
                </section>
                <section className="menuAppJedenP">
                    <div className="paragraf">Wprowadź 5 zmian Twojego ulubionego wyrazu..
                        np: Zmień rozmiar czcionki, jej kolor, przesuń w prawo, umieść w czerwonej ramce, wycentruj.
                        (poszukaj innych rozwiązań.. w razie problemów zajrzyj do Pomocy!)
                    </div>
                </section>
                <p className='backJeden'>
                    <NavLink to='/'>Wróć</NavLink>
                </p>
            </section>
        )
    }
}

export default Jeden;