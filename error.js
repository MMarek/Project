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