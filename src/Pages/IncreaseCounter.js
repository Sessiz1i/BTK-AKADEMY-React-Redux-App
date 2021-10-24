import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {increaseCounter} from "../Redux/Actions/counterActions";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button
                    onClick={e=>{ this.props.dispatch(increaseCounter(1))}}
                    className="btn-success">Counter +</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseCounter)
