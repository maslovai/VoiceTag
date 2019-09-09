import React from 'react';
import ReactDom from 'react-dom';
import './main.scss';
class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Voice Tag Search Tool</h1>
            </header>
        )
    }
}

class App extends React.Component{
render(){
    return (
        <div>
            <div id="parentDiv">
                <Header />
                <button onClick={this.findVoiceCommand}>Go!</button>
            </div>
        </div>
    )
}
}
ReactDom.render(<App/>, document.getElementById('root'));