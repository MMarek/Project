import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import {NavLink} from "react-router-dom";
// import parse from 'style-to-object';
// import {Link} from 'react-router-dom';

class Trzy extends Component {

    state = {
        text: '',
        // styles: '',
        // elements: []
    }
    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    }
    //
    // handleChangeStyles = e => {
    //     this.setState({
    //         styles: e.target.value,
    //     });
    // }
    //
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
    }

    //     if(this.state.text.length > 0 && this.state.elements.length < 5) {
    //
    //         this.setState({
    //             elements: [...this.state.elements, this.state.text],
    //             text: ''
    //         })
    //     }
    // }


    // addElement = element => {
    //     console.log('add', element);
    //     this.props.addDivElement(element);
    // }


    render() {
        // let objStyles = {};
        // const addDiv = this.state.elements.map((item, i) => {
        //     return (
        {/*<div key={i}>{item} </div>*/
        }
        // )
        // });
        //
        // console.log(this.state.styles);
        // try {
        //     objStyles = parse(this.state.styles);
        //     console.log(objStyles);
        // } catch (e) {
        //
        // }
        // console.log(objStyles, '????');


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
                               placeholder={'Wpisz odpowiedni selektor:'}></input>
                        <button onClick={this.handleButtonClick}>Sprawdz</button>
                        <div> Wprowadź odpowiedni selektor, by zaznaczyć kolejny obiekt.
                            Nie rezygnuj, aż nie zaznaczysz wszystkich.
                            W razie kłopotów, wsparcie znajdziesz w 'Pomocy'!
                        </div>
                        <button><NavLink to='/'>Wróć</NavLink></button>

                    </section>
                </section>
                {/*<section className={'backTrzy'}>*/}
                {/*    <div>*/}
                {/*        <NavLink to='/'>Wróć</NavLink>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </>

        )
    }
}

export default Trzy;

// function App() {
//     return <Trzy/>
// }
//
//
// ReactDOM.render(<App/>,document.getElementById("app"));