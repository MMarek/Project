import React, {Component} from "react";
import './../sass/style.scss';
import {NavLink} from "react-router-dom";

class Trzy extends Component {

    state = {
        text: '',
    };

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    };

    handleButtonClick = e => {
        e.preventDefault();
        console.log('klik');
        const element = this.root.querySelector(this.state.text);
        if (element) {
            element.style.border = '5px solid gray';
            this.setState({
                text: ''
            })
        }
    };

    render() {

        return (
            <>
                <section className="menuAppTrzy">
                    <section ref={el => this.root = el} className="sectionAppThreeLeft">
                        <div className="menuAppTrzyTree">
                            <div className="a">&lt;div class="a"&gt;</div>
                            <div id="main-div">&lt;div id="main-div"&gt;</div>
                        </div>
                    </section>
                    <section className="sectionAppThreeRight">
                        <p>Selector Chalange</p>
                        <input onChange={this.handleChange} value={this.state.text}
                               placeholder={'Wpisz odpowiedni selektor:'}>
                        </input>

                        <button onClick={this.handleButtonClick}>Sprawdz</button>
                        <div> Wprowadź odpowiedni selektor, by zaznaczyć kolejny obiekt.
                            Nie rezygnuj, aż nie zaznaczysz wszystkich.
                            W razie kłopotów, wsparcie znajdziesz w 'Pomocy'!
                        </div>
                        <button><NavLink to='/'>Wróć</NavLink></button>

                    </section>
                </section>
            </>
        )
    }
}

export default Trzy;