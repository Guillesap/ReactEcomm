import React,{Component} from "react";
class MyButton extends Component {
    render () {
        return <button id="bOton">{this.props.label}</button>
    }
}
export default MyButton;
