import React from 'react';
import Command from './command';
const file = 'src/source.txt'
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           currentCategory:'', 
           active:[],
           categories:[],
           commands:[],
           placeholder:'Enter command here'
           }, 
        this.findCategory = this.findCategory.bind(this);
        this.findVoiceCommand = this.findVoiceCommand.bind(this);
        this.saveNewName = this.saveNewName.bind(this)
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
                temp.push({'voice':innerTemp[0].replace("#",''), 'written':innerTemp[1]})
            }
            temp.sort((a,b) => (a.written > b.written) ? 1 : ((b.written > a.written) ? -1 : 0)); 

            let tempOptions =[];
                tempOptions=temp.map(item=>{let tempItem = item.written.split('.',1);
                 return tempItem[0]
            })
            
            let final=['All'];
            tempOptions.map(item=>{if(final.indexOf(item)===-1){final.push(item)}})
            this.setState({
                commands: temp,
                categories:final,
                active:temp
            })
            
        })  
    }
    findCategory(e){
        inputBox.value = '';
        if (e.target.value==="All") {
            this.setState({
                currentCategory: e.target.value,
                active:this.state.commands
            })
        }
        else{
            this.setState({
                currentCategory: e.target.value,
                active: this.state.commands.filter((item)=> {return(item.written.includes(e.target.value+'.'))})    
            })
        }
       
    }
    findVoiceCommand(inputCommand){
        event.preventDefault();
        
            this.setState({
                active : this.state.commands.filter((item)=> 
                { if (this.state.currentCategory==="All") return (item.voice.toUpperCase().includes(inputCommand.toUpperCase()));
                  else return(item.voice.toUpperCase().includes(inputCommand.toUpperCase()))}).filter((command)=>{
                                                    return(command.written.includes(this.state.currentCategory+"."))
                })    
            }) 

    }
     handleChange(data){
       console.log(data.value)
       
    }
    saveNewName(data){
        console.log(data)
         // 1. Make a shallow copy of commands
         let active = [...this.state.active];
         // 2. Make a shallow copy of the command you want to mutate
         let command = {...active[data.id]};
         // 3. Replace the property you're intested in
         command.voice = data.value;
         // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
         active[data.id] = command;
         // 5. Set the state to our new copy
         this.setState({active})
         // console.log("hey", e.target )
    }
    render(){
        return(
            <div className='subRoot'>
                <form autoComplete="off" onSubmit = {this.findVoiceCommand}>
                    <select className = "formField" name="category" onChange={this.findCategory} value ={this.state.currentCategory}>
                        {
                            this.state.categories.map((opt,i) => 
                            { return(<option id = {i+'choice'} value = {opt} key={i} >{opt}</option>)})
                        }
                    </select>
                    <input className = "formField" 
                           type = 'text' 
                           id='inputBox' 
                           placeholder={this.state.placeholder} 
                           onChange={()=>this.findVoiceCommand(inputBox.value)}>
                    </input>
                </form>
                <table>
                    <thead>
                        <tr> 
                            <td className = "rowNumber">#</td>
                            <td className = "rowWritten">Written Command</td>
                            <td className = "rowVoice">Voice Command</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.active.map((command,i)=>
                     {
                        return (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{command.written}</td>
                                {/* <td>{command.voice}</td> */}
                                <td>
                                    <Command voice={command.voice} id={i} saveNewName = {this.saveNewName}handleChange={this.handleChange}/>
                                </td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Body;