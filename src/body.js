import React from 'react';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           currentCategory:'All', 
           options:[
               'All', 'View', 'Format', 'Help'
           ],
           commands:[
               {Parent:'View', command:[['PreviousError','Previous Error'],['NextTask','Next Task'],['PreviousTask', 'Previous Task']]},
               {Parent:'Format',command:['AlignBottoms - Align Bottoms','AlignLefts - Align Lefts','AlignRights -Align Rights']}
           ]
        }
        this.findCategory = this.findCategory.bind(this);
        this.findVoiceCommand = this.findVoiceCommand.bind(this);
    }
    findCategory(e){
        this.setState({
            currentCategory: e.target.value
        })
    }
    findVoiceCommand(inputCommand){
            console.log(inputCommand)
           
    }
    render(){
        return(
            <div>
                <form>
                    <select name="category" onChange={this.findCategory} value ={this.state.currentCategory}>
                        {
                            this.state.options.map((opt,i) => 
                            { return(<option id = {i+'choice'} value = {opt} key={i} >{opt}</option>)}
                            )
                        }
                    </select>
                    <div>Selected category is : {this.state.currentCategory}</div>
                    <input type = 'text' id='inputBox' placeholder='enter command here' onChange={()=>this.findVoiceCommand(inputBox.value)}></input>
                </form>
                <button onClick={this.findVoiceCommand}>Go!</button>
            </div>
            

        )
    }
}
export default Body;