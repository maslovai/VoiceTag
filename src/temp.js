import React from 'react';
const file = 'src/source.txt'
class Temp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           tempData:[]
           }, 
        // this.findCategory = this.findCategory.bind(this);
        // this.findVoiceCommand = this.findVoiceCommand.bind(this);
        this.readData = this.readData.bind(this);
        this.showData = this.showData.bind(this);
    }
    componentDidMount(){
        let rawArr =[];
        // fetch(file)
        // .then(response => {return response.text()})
        // .then(data => {
        //     rawArr = data.split('\n');
        //     let temp=[];
        //     for (let i=0,l =rawArr.length;i<l;i++){
        //         let innerTemp = rawArr[i].split('\|');
        //         temp.push({'voice':innerTemp[0], 'written':innerTemp[1]})
        //     }
        //     let tempOptions =[];
        //         tempOptions=temp.map(item=>{let tempItem = item.written.split('.');
        //          return tempItem[0]
        //     })
        //     let final=['All'];
        //     tempOptions.map(item=>{if(final.indexOf(item)===-1){final.push(item)}})
        //     this.setState({
        //         commands: temp,
        //         categories:final,
        //         active:temp
        //     })
            
        // })  
    }
    // findCategory(e){
    //     inputBox.value = '';
    //     if (e.target.value==="All") {
    //         this.setState({
    //             currentCategory: e.target.value,
    //             active:this.state.commands
    //         })
    //     }
    //     else{
    //         this.setState({
    //             currentCategory: e.target.value,
    //             active : this.state.commands.filter((item)=> {return(item.written.includes(e.target.value+'.'))})    
    //         })
    //     }
       
    // }
    // findVoiceCommand(inputCommand){
    //     event.preventDefault();
        
    //         this.setState({
    //             active : this.state.commands.filter((item)=> 
    //             { if (this.state.currentCategory==="All") return (item.voice.toUpperCase().includes(inputCommand.toUpperCase()));
    //               else return(item.voice.toUpperCase().includes(inputCommand.toUpperCase()))}).filter((command)=>{
    //                                                 return(command.written.includes(this.state.currentCategory+"."))
    //             })    
    //         }) 

    // }
    readData(data){
        event.preventDefault();
        this.setState({tempData:data.value})
        console.log(this.state.tempData)
    }
    showData(e){
        event.preventDefault();
        console.log(this.state.tempData)
    }
    render(){
        return(
            <div>
                <form  autoComplete="off" onSubmit={this.showData}>
                <input id = "submit" type="submit"   onSubmit = {this.showData}></input>

                <input id = "inputBox" type="file" accept=".csv" id='inputBox'  onSubmit = {()=>this.readData(inputBox.value)}></input>
                </form>
            
              <table>
              <thead>
                  <tr> 
                      <td>#</td><td>Data from user:</td>
                  </tr>
              </thead>
              <tbody>
              {this.state.tempData.map((data,i)=>
               {return (<tr key={i}><td>{i}</td><td>{data}</td></tr>)})
              }
              </tbody>
          </table>
          </div>








            // <div className='subRoot'>
            //     <form autoComplete="off" onSubmit = {this.readData}>
            //         <select name="category" onChange={this.findCategory} value ={this.state.currentCategory}>
            //             {
            //                 this.state.categories.map((opt,i) => 
            //                 { return(<option id = {i+'choice'} value = {opt} key={i} >{opt}</option>)})
            //             }
            //         </select>
            //         <input type = 'text' id='inputBox' placeholder={this.state.placeholder} onSubmit = {()=>this.findVoiceCommand(inputBox.value)} onChange={()=>this.findVoiceCommand(inputBox.value)}></input>
            //     </form>
            //     <table>
            //         <thead>
            //             <tr> 
            //                 <td>#</td><td>Written Command</td><td>Voice Command</td>
            //             </tr>
            //         </thead>
            //         <tbody>
            //         {this.state.active.map((command,i)=>
            //          {return (<tr key={i}><td>{i}</td><td>{command.written}</td><td>{command.voice}</td></tr>)})
            //         }
            //         </tbody>
            //     </table>
            // </div>
        )
    }
}
export default Temp;