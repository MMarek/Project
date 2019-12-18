import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import parse from 'style-to-object';


class MobileMenu extends Component {

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
            <section className="menuAppDwa">

                <div className="menuAppDwaRodzic" style={objStyles}>{addDiv}
                </div>
                <input onChange={this.handleChange} value={this.state.text}
                       placeholder={'wymyśl wyraz i kliknij dodaj element'}></input>
                <button onClick={this.handleButtonClick}>Dodaj Element</button>
                <textarea value={this.state.styles} onChange={this.handleChangeStyles}
                          placeholder={'Wrpowadź wartości'}></textarea>

            </section>
        )
    }
}

function App() {
    return <MobileMenu/>
}


ReactDOM.render(<App/>, document.getElementById("app"));