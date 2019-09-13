import React from 'react';
const file = 'src/source.txt'
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           currentCategory:'All', 
           active:[],
           options:[
               'All', 'View', 'Format', 'Help'
           ],
        //    commands: jsonData
           commands:[
            {'voice':'NEXT ERROR','written':'View.NextError'},
            {'voice':'Previous Error','written':'View.PreviousError'},
            {'voice':'Next Task','written':'View.NextTask'},
            {'voice':'Previous Task','written':'View.PreviousTask'},
            {'voice':'Show Task Help','written':'Help.ShowTaskHelp'},
            {'voice':'Align Bottoms','written':'Format.AlignBottoms'},
            {'voice':'Align Lefts','written':'Format.AlignLefts'},
            {'voice':'Align Middles','written':'Format.AlignMiddles'},
            ]
           },
           
            //    {Parent:'View', command:['PreviousError','Previous Error','NextTask','Next Task','PreviousTask', 'Previous Task']},
            //    {Parent:'Format',command:['AlignBottoms - Align Bottoms','AlignLefts - Align Lefts','AlignRights -Align Rights']}
           
        
        this.findCategory = this.findCategory.bind(this);
        this.findVoiceCommand = this.findVoiceCommand.bind(this);
    }
    componentDidMount(){
        let rawArr =[];
        fetch(file)
        .then(response => {return response.text()})
        .then(data => {
            // let obj ={};
            rawArr = data.replace('|','\n').split('\n');
            let temp=[];
            for (let i=0,l =rawArr.length;i<l;i++){
                temp.push({'voice':rawArr[i], 'written':rawArr[i+1]})
                i++;
            }
            this.setState({
                commands: temp
            })
            // console.log(this.state.commands)
        })  
    }
    findCategory(e){
        console.log(this.state.commands)
        this.setState({
            currentCategory: e.target.value,
            active : this.state.commands.filter((item)=> {return(item.written.includes(e.target.value+'.'))})    
        })
    }
    findVoiceCommand(inputCommand){
        console.log(inputCommand, this.state.currentCategory)
        if (inputCommand===""){
            this.setState({
                active : this.state.commands.filter((item)=> {return(item.written.includes(this.state.currentCategory))})    
            }) 
        }
        else{
            this.setState({
                active : this.state.commands.filter((item)=> {return(item.written.includes(inputCommand))})    
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