import React from 'react';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           currentCategory:'All', 
           active:[],
           options:[
               'All', 'View', 'Format', 'Help'
           ],
           commands:[
            'Next Error','View.NextError',
            'Previous Error','View.PreviousError',
            'Next Task','View.NextTask',
            'Previous Task','View.PreviousTask',
            'Show Task Help','Help.ShowTaskHelp',
            'Align Bottoms','Format.AlignBottoms',
            'Align Middles','Format.AlignMiddles',
            'Align Lefts','Format.AlignLefts',
            'Align Rights','Format.AlignRights']
           },
           
            //    {Parent:'View', command:['PreviousError','Previous Error','NextTask','Next Task','PreviousTask', 'Previous Task']},
            //    {Parent:'Format',command:['AlignBottoms - Align Bottoms','AlignLefts - Align Lefts','AlignRights -Align Rights']}
           
        
        this.findCategory = this.findCategory.bind(this);
        this.findVoiceCommand = this.findVoiceCommand.bind(this);
    }
    findCategory(e){
        this.setState({
            currentCategory: e.target.value
        })
    }
    findVoiceCommand(inputCommand){
        console.log(inputCommand, this.state.currentCategory)
        this.setState({
            active : this.state.commands.filter((item)=> {return(item.includes(inputCommand))})    
        })  
    }
    render(){
        return(
            <div>
                <form>
                    <select name="category" onChange={this.findCategory} value ={this.state.currentCategory}>
                        {
                            this.state.options.map((opt,i) => 
                            { return(<option id = {i+'choice'} value = {opt} key={i} >{opt}</option>)})
                        }
                    </select>
                    <input type = 'text' id='inputBox' placeholder='enter command here' onChange={()=>this.findVoiceCommand(inputBox.value)}></input>
                </form>
                {
                    this.state.active.map((command,i)=>
                     {return (<div key={i}>{command}</div>)})
                }
                <button onClick={this.findVoiceCommand}>Go!</button>
            </div>
            

        )
    }
}
export default Body;