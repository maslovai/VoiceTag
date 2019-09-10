import React from 'react';
import ReactDom from 'react-dom';
import './main.scss';
import Body from './body';
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
            <Header />
            <Body />
        </div>
    )
}
}
ReactDom.render(<App/>, document.getElementById('root'));