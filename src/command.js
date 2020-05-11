import React from 'react';
import Button from 'react-bootstrap/Button';
import './main.scss';
class Command extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.id,
            written:this.props.written,
            voice:this.props.voice,
            isHovered:false,
            btnName : "Save"
        }
        this.toggleBtn = this.toggleBtn.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.saveNewName = this.saveNewName.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.voice!==prevState.voice){
        //   let currVoice=prevState.voice;
          return {voice : nextProps.voice};
        }
        else return null;
    }
    componentDidUpdate(prevState) {
        if (prevState.voice !== this.state.voice) {
          let currVoice=this.state.voice;
          this.setState({currVoice});
        }
      }
    // componentWillUpdate(){

    // }
    toggleBtn(e){
        this.setState({
            isHovered:!this.state.isHovered,
        })
    }
    handleOnChange(e){
        console.log("in handleChange:", e.target.value)
        // let voice = e.target.value;
        this.setState({
            voice: e.target.value,
            btnName: "Save"
        });
        // this.props.handleChange(e.target.value)
    }
    saveNewName(e){
        console.log("Save in command: ", e.target)
        e.preventDefault();
        this.setState({
            btnName : "Saved"
        })
        this.props.saveNewName(this.state)
    }
render(){
    let btnClass = this.state.isHovered?"show":"hide";
    let btnName = this.state.isHovered?"Save":"Name Saved";
    return (
    <div id={`commandDiv+i`} 
        onMouseEnter={this.toggleBtn} 
        onMouseLeave = {this.toggleBtn}
        className = "commandDiv"
    ><form onSubmit={this.saveNewName}>
        <input type="text" 
            id = {this.state.id}
            className = "command" 
            name="name" 
            onChange={this.handleOnChange}
            value={this.state.voice}
            />
        <Button  id = {this.state.id+"_button"}
            type='submit' 
            className = {btnClass} 
            name={btnName}
            onClick ={this.saveNewName}
            >
            {this.state.btnName}
            
        </Button>
        </form>
    </div>
    )
}
}
export default Command;
