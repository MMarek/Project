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
                            <div>&lt;el "ul" między divami&gt;</div>
                            {/*A ~ B*/}
                            <div>&lt;pierwsze dziecko section&gt;</div>
                            {/*:first-child*/}
                            <div>&lt;ostatni paragraf&gt;</div>
                            {/*:last-child*/}
                            <div>&lt;pusty div&gt;</div>
                            {/*:empty*/}
                            <div>&lt;[atybut^="wartość"]&gt;</div>
                            {/*atrybut z wartością zaczynającą sie na*/}
                            <div>&lt;jedyny paragraf&gt;</div>
                            {/*:only-child*/}
                            <div>&lt;div i paragraf&gt;</div>
                            {/*A, B*/}
                            <div>&lt;pierwszy z typu&gt;</div>
                            {/*:first-of-type*/}
                            <div>&lt;[atrybut*="wartość"]&gt;</div>
                            {/*atrybut zawierający*/}
                            <div>&lt;element który nie jest&gt;</div>
                            {/*:not(x)*/}
                            <div>&lt;objekt mający atrybut&gt;</div>
                            {/*[atribute]*/}
                            <div>&lt;paragraf na div o id='id'&gt;</div>
                            {/*#id  A*/}
                            <div>&lt;atrybut o wartości 'coś'&gt;</div>
                            {/*[attribute^="value"]*/}
                            <div>&lt;empty div&gt;</div>
                            {/*:empty*/}
                            <div>&lt;[atrybut="wartość"]&gt;</div>
                            {/*atrybut kończący się na*/}
                            <div>&lt;wszystko będące na div&gt;</div>
                            {/*A **/}
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