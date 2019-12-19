import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import parse from 'style-to-object';
// import {Link} from "react-router-dom";

class Jeden extends Component {

    state = {
        text: "",
        confirm: false,
        styles: '',
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


    render() {
        // const {open} = this.state;
        let objStyles = {};
        try {
            objStyles = parse(this.state.styles);
            console.log(objStyles);
        } catch (e) {

        }

        return (
            <section className="menuAppJeden">
                <section className="menuAppJedenDiv">
                    <div className="menuAppJeden-leftDiv" style={objStyles}>{this.state.text}</div>
                    <div className="menuAppJeden-rightDiv">
                        <input onChange={this.handleChange} value={this.state.text} readOnly={this.state.confirm}
                               placeholder={'Ulubiony wyraz, to:'}></input>
                        <button onClick={this.handleButtonClick}> Zatwierdź ulubiony wyraz.</button>
                        <textarea value={this.state.styles} onChange={this.handleChangeStyles}
                                  placeholder={'Wprowadź zmiany:'}></textarea></div>
                </section>
                <section className="menuAppJedenP">
                    <p className="paragraf">TRESC ZADANIA</p>
                </section>
            </section>
        )

    }
}

function App() {
    return <Jeden/>
}


ReactDOM.render(<App/>,document.getElementById("app"));

