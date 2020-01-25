import React, {Component} from "react";
import './../sass/style.scss';
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