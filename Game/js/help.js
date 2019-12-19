import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
// import  {Link} from 'react-router-dom';
import parse from 'style-to-object';
import {NavLink} from "react-router-dom";


class Help extends Component {




    render() {

        return (
            <>
                <section className="menuAppHepl">
                    <p>Mów do Mnie!!!</p>
                    <div className='backHelp'>
                        <NavLink to='/'>Wróć</NavLink>
                    </div>

                </section>
            </>
        )
    }
}

export default Help;

// function App() {
//     return <Dwa/>
// }
//
//
// ReactDOM.render(<App/>,document.getElementById("app"));