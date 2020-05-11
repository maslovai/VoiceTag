import React from 'react';
import ReactDom from 'react-dom';
import './main.scss';
import Body from './body';
import Header from './header';

// import Temp from './temp';

class App extends React.Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return (
            <div className="main">
                <Header/>
                <Body />
                {/* <Temp/> */}
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));