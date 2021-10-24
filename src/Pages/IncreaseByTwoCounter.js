import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {increaseByTwoCounter} from "../Redux/Actions/counterActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <Button onClick={e => {this.props.dispatch(increaseByTwoCounter())}}
                        className="btn-secondary">Counter +2</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(increaseByTwoCounter, dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)