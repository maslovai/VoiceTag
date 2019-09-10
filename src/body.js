import React from 'react';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           options:[
               'All', 'View', 'Format', 'Help'
           ],
           commands:[
               ['View', ['PrviousError','Previous Error'],['NextTask','Next Task'],['PreviousTask', 'Previous Task']],
               ['Format',['AlignBottoms','Align Bottoms'],['AlignLefts','Align Lefts'],['AlignRights','Align Rights']]
        
           ]
        }

        this.findVoiceCommand = this.findVoiceCommand.bind(this);
    }
    findVoiceCommand(command){

    }
    render(){
        return(
            <div>
                <form>
                    <select name="Element">
                        {
                            this.state.options.map((opt,i) => 
                            { return(<option id = {i+'choice'} key={i}>{opt}</option>)}
                            )
                        }
                    </select>
                    <input type = 'text' id='inputBox' placeholder='enter command here'></input>
                </form>
                <button onClick={this.findVoiceCommand}>Go!</button>
            </div>
            

        )
    }
}
export default Body;