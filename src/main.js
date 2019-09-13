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
    constructor(props){
        super(props)
        // this.state = {
		// 	text: fetch(file)
        //     .then(response => {return response.text()})
        //     .then(data => {return data})
		// };
    }
  
   
        
    

    //     let obj ={},rawArr = reader.replace('|','\n').Split('\n');
    //     console.log(rawArr[0])
    //     for (let i=0,l =rawArr.length;i<l;i++){
    //       if (i%2===0){
    //             obj.written[i] = rawArr[i];
    //             rawArr[i]=obj.written;
    //         }else {
    //             obj.voice[i] = rawArr[i]
    //            rawArr = rawArr + obj.voice;
    //         }
    // }
    //     return Jdata = JSON.stringify(obj)     
    
    

    
    render(){
        return (
            <div>
                <Header/>
                <Body />
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));