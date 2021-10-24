import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {decreaseCounter} from "../Redux/Actions/counterActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button onClick={e=>{this.props.dispatch(decreaseCounter(1))}}
                        className="btn-danger">Counter -</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}
export default connect(mapDispatchToProps)(DecreaseCounter)