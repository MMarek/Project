import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
// import  {Link} from 'react-router-dom';
import parse from 'style-to-object';
import {NavLink} from "react-router-dom";


class Dwa extends Component {

    state = {
        text: '',
        styles: '',
        elements: []
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

        if(this.state.text.length > 0 && this.state.elements.length < 5) {

            this.setState({
                elements: [...this.state.elements, this.state.text],
                text: ''
            })
        }
    }


    // addElement = element => {
    //     console.log('add', element);
    //     this.props.addDivElement(element);
    // }


    render() {
        let objStyles = {};
        const addDiv = this.state.elements.map((item, i) => {
            return (
                <div key={i}>{item} </div>
            )
        });

        console.log(this.state.styles);
        try {
            objStyles = parse(this.state.styles);
            console.log(objStyles);
        } catch (e) {

        }
        console.log(objStyles, '????');


        return (
            <>
            <section className="menuAppDwa">

                <div className="menuAppDwaRodzic" style={objStyles}>{addDiv}
                </div>
                <input onChange={this.handleChange} value={this.state.text}
                       placeholder={'wymyśl wyraz i kliknij dodaj element'}></input>
                <button onClick={this.handleButtonClick}>Dodaj Element</button>
                <textarea value={this.state.styles} onChange={this.handleChangeStyles}
                          placeholder={'Wrpowadź wartości'}></textarea>

            </section>
                <section>
                    <div className='backDwa'>
                        <NavLink to='/'>Wróć</NavLink>
                    </div>
                </section>
            </>
        )
    }
}

export default Dwa;

// function App() {
//     return <Dwa/>
// }
//
//
// ReactDOM.render(<App/>,document.getElementById("app"));