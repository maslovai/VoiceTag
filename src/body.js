import React from 'react';
const file = 'src/source.txt'
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           currentCategory:'All', 
           active:[],
           options:[],
           commands:[]
           }, 
        this.findCategory = this.findCategory.bind(this);
        this.findVoiceCommand = this.findVoiceCommand.bind(this);
    }
    componentDidMount(){
        let rawArr =[];
        fetch(file)
        .then(response => {return response.text()})
        .then(data => {
            rawArr = data.split('\n');
            let temp=[];
            for (let i=0,l =rawArr.length;i<l;i++){
                let innerTemp = rawArr[i].split('\|');
                temp.push({'voice':innerTemp[0], 'written':innerTemp[1]})
            }
            let tempOptions =[];
                tempOptions=temp.map(item=>{let tempItem = item.written.split('.');
                 return tempItem[0]
            })
            let final=['All'];
            tempOptions.map(item=>{if(final.indexOf(item)===-1){final.push(item)}})
            this.setState({
                commands: temp,
                options:final
            })
        })  
    }
    findCategory(e){
        this.setState({
            currentCategory: e.target.value,
            active : this.state.commands.filter((item)=> {return(item.written.includes(e.target.value+'.'))})    
        })
    }
    findVoiceCommand(inputCommand){
        console.log(inputCommand.toUpperCase(), this.state.currentCategory.toUpperCase())
        if (inputCommand===""){
            this.setState({
                active : this.state.commands.filter((item)=> {return(item.written.toUpperCase().includes(this.state.currentCategory.toUpperCase()))})    
            }) 
        }
        else{
            this.setState({
                active : this.state.commands.filter((item)=> {return(item.written.toUpperCase().includes(inputCommand.toUpperCase()))})    
            }) 
        }
         
    }
    render(){

        return(
            <div>
                <form autoComplete="off">
                    <select name="category" onChange={this.findCategory} value ={this.state.currentCategory}>
                        {
                            this.state.options.map((opt,i) => 
                            { return(<option id = {i+'choice'} value = {opt} key={i} >{opt}</option>)})
                        }
                    </select>
                    <input type = 'text' id='inputBox' placeholder='enter command here' onChange={()=>this.findVoiceCommand(inputBox.value)}></input>
                </form>
                <table>
                   
                    <thead>
                        <tr> 
                            <td>#</td><td>Written Command</td><td>Voice Command</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.active.map((command,i)=>
                     {return (<tr key={i}><td>{i}</td><td>{command.written}</td><td>{command.voice}</td></tr>)})
                    }
                    </tbody>
                </table>
                {/* {
                    this.state.active.map((command,i)=>
                     {return (<div key={i}>{command.written}+ "  " + {command.voice}}</div>)})
                } */}
                {/* <button onClick={this.findVoiceCommand}>Go!</button> */}
            </div>
            

        )
    }
}
export default Body;