import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss'
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

import Jeden from "./jeden";
import Dwa from './dwa';
import Trzy from './trzy';
import Menu from "./menu";
import Help from "./help";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Menu}/>
                    <Route path='/jeden' component={Jeden}/>
                    <Route path='/dwa' component={Dwa}/>
                    <Route path='/trzy' component={Trzy}/>
                    <Route path='/help' component={Help}/>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));