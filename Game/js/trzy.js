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
            element.style.border = '1px solid red';
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
                            <div className="c">&lt;div class="c"&gt;</div>
                            <div className="d">&lt;div class="d"&gt;</div>
                            <div className="e">&lt;div class="e"&gt;</div>
                        </div>
                    </section>
                    <section className="sectionAppThreeRight">
                        <p>Selector</p>
                        <input onChange={this.handleChange} value={this.state.text}
                               placeholder={'text'}></input>
                        <button onClick={this.handleButtonClick}>Sprawdz</button>
                        <p></p>

                    </section>
                </section>
                <section>
                    <div className='backTrzy'>
                        <NavLink to='/'>Wróć</NavLink>
                    </div>
                </section>
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