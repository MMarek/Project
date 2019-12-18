state = {
    on:true
};


handleMouseOn = () => {
    this.setState({on:true});
    console.log('najazd');
}

handleMouseOff = () => {
    this.setState({on:false});
    console.log('zjazd');
}

render() {
    const {on} = this.state;
    let random = Math.floor(Math.random() * (500 - 0)) + 0;

    let style = {
        backgroundColor: 'red',
        width: '500px',
        height: '500px',
        position: 'absolute',
        // left: on?`${random}px`:`${random}px`,
        right: on?`${random}px`:`${random}px`,
        // bottom: on?`${random}px`:`${random}px`,
        top: on?`${random}px`:`${random}px`,
        transition: '2s'
    }


     //
 //

    const {on} = this.state;
    const {off} = this.state;

    let style = {
        height: on ? '800px' : '10px',
        width: on ? '800px' : '10px',
        backgroundColor: on ? 'blue' : 'red',
        transition: "5s",
        position: 'absolute',
        right: '150px',
        top: '250px'
    }

    ////////////////





import React, {Component} from "react";
import ReactDOM from "react-dom";
// const arr = [1, 2, 3];
// const arr2 = arr.filter( (item) => item !== 1  );
// console.log(arr2, '??')
    class List extends Component {
        removeComment = comment => {
            console.log('remove', comment);
            this.props.removeCommentFromParent( comment );
        }
        removeAll = e => {
            console.log('usun wszystko!');
            this.props.removeAllFromParent();
        }
        render() {
            console.log(this.props.data);
            const list = this.props.data.map( (item, i) => {
                return (
                    <li key={ i }>{ item } <button onClick={ () => this.removeComment(item) }>usuń</button></li>
                )
            });
            return (
                <>
                    <ul>{ list }</ul>
                    <button onClick={ this.removeAll }>usun wszystko</button>
                </>
            )
        }
    }
    class Form extends React.Component {
        state = {
            text: '',
        }
        handleChange = e => {
            this.setState({
                text: e.target.value,
            });
        }
        handleSubmit = e => {
            e.preventDefault();
            if(typeof this.props.methodFromParent === 'function') {
                this.props.methodFromParent( this.state.text );
                this.setState({
                    text: '',
                });
            }
        }
        render() {
            return (
                <form onSubmit={ this.handleSubmit }>
                    <textarea onChange={ this.handleChange } value={ this.state.text }></textarea>
                    <input type="submit" />
                </form>
            )
        }
    }
    class App extends Component {
        state = {
            show: true,
            comments: ['sadsadsa'],
        }
        removeAll = () => {
            this.setState({
                comments: [],
            })
        }
        removeComment = ( comment ) => {
            const newState = this.state.comments.filter( item => item !== comment );
            this.setState({
                comments: newState,
            })
        }
        addComment = ( text ) => {
            // const copyComments = [...this.state.comments];
            // copyComments.push(text);
            this.setState({
                comments: [...this.state.comments, text],
            });
        }
        render() {
            if(this.state.show === false) {
                return null;
            }
            return (
                <section>
                    <List
                        removeAllFromParent={ this.removeAll }
                        removeCommentFromParent={ this.removeComment}
                        data={ this.state.comments } />
                    <Form methodFromParent={ this.addComment } />
                </section>
            )
        }
    }
    ReactDOM.render(<App/>, document.getElementById("app"));



    ///////////////////






import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import parse from 'style-to-object';

    class MobileMenu extends Component {

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

            let objStyles ={};
            try{
                objStyles = parse(this.state.styles);
                console.log(objStyles);
            }catch (e) {

            }

            return (
                <section className="menuAppJeden">
                    <section className="menuAppJedenDiv">
                        <div className="menuAppJeden-leftDiv" style = {objStyles}>{this.state.text}</div>
                        <div className="menuAppJeden-rightDiv" >
                            <input onChange={this.handleChange} value={this.state.text} readOnly={this.state.confirm} placeholder={'Ulubiony wyraz, to:'}></input>
                            <button onClick={this.handleButtonClick}> Zatwierdź ulubiony wyraz. </button>
                            <textarea value = {this.state.styles} onChange={this.handleChangeStyles} placeholder={'Wprowadź zmiany:'}></textarea></div>
                    </section>
                    <section className="menuAppJedenP">
                        <p className="paragraf">TRESC ZADANIA</p>
                    </section>
                </section>
            )

        }
    }

    function

    App() {
        return <MobileMenu/>
    }


    ReactDOM
        .render(
            <App/>,
            document
                .getElementById(
                    "app"
                ))
    ;





    ////////////






import React, {Component} from "react";
import ReactDOM from "react-dom";
// const arr = [1, 2, 3];
// const arr2 = arr.filter( (item) => item !== 1  );
// console.log(arr2, '??')
    class List extends Component {
        removeComment = comment => {
            console.log('remove', comment);
            this.props.removeCommentFromParent( comment );
        }
        removeAll = e => {
            console.log('usun wszystko!');
            this.props.removeAllFromParent();
        }
        render() {
            console.log(this.props.data);
            const list = this.props.data.map( (item, i) => {
                return (
                    <li key={ i }>{ item } <button onClick={ () => this.removeComment(item) }>usuń</button></li>
                )
            });
            return (
                <>
                    <ul>{ list }</ul>
                    <button onClick={ this.removeAll }>usun wszystko</button>
                </>
            )
        }
    }
    class Form extends React.Component {
        state = {
            text: '',
        }
        handleChange = e => {
            this.setState({
                text: e.target.value,
            });
        }
        handleSubmit = e => {
            e.preventDefault();
            if(typeof this.props.methodFromParent === 'function') {
                this.props.methodFromParent( this.state.text );
                this.setState({
                    text: '',
                });
            }
        }
        render() {
            return (
                <form onSubmit={ this.handleSubmit }>
                    <textarea onChange={ this.handleChange } value={ this.state.text }></textarea>
                    <input type="submit" />
                </form>
            )
        }
    }
    class App extends Component {
        state = {
            show: true,
            comments: ['sadsadsa'],
        }
        removeAll = () => {
            this.setState({
                comments: [],
            })
        }
        removeComment = ( comment ) => {
            const newState = this.state.comments.filter( item => item !== comment );
            this.setState({
                comments: newState,
            })
        }
        addComment = ( text ) => {
            // const copyComments = [...this.state.comments];
            // copyComments.push(text);
            this.setState({
                comments: [...this.state.comments, text],
            });
        }
        render() {
            if(this.state.show === false) {
                return null;
            }
            return (
                <section>
                    <List
                        removeAllFromParent={ this.removeAll }
                        removeCommentFromParent={ this.removeComment}
                        data={ this.state.comments } />
                    <Form methodFromParent={ this.addComment } />
                </section>
            )
        }
    }
    ReactDOM.render(<App/>, document.getElementById("app"));