import React, {Component} from 'react';
import {connect} from "react-redux";
import {addNumber, removeNumber, enterNumber} from "../../store/actions";

import './DoorCodeInterface.css'

class DoorCodeInterface extends Component {
    render() {
        return (
            <div className="DoorCodeInterface">
                <input className={this.props.isCorrect} defaultValue={this.props.str} disabled />
                <div className='Buttons'>
                    <button onClick={this.props.addNumber}>9</button>
                    <button onClick={this.props.addNumber}>8</button>
                    <button onClick={this.props.addNumber}>7</button>
                    <button onClick={this.props.addNumber}>6</button>
                    <button onClick={this.props.addNumber}>5</button>
                    <button onClick={this.props.addNumber}>4</button>
                    <button onClick={this.props.addNumber}>3</button>
                    <button onClick={this.props.addNumber}>2</button>
                    <button onClick={this.props.addNumber}>1</button>
                    <button onClick={this.props.removeNumber}>&#60;</button>
                    <button onClick={this.props.addNumber}>0</button>
                    <button onClick={this.props.enterNumber}>E</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        str: state.str,
        loading: state.loading,
        isCorrect: state.isCorrect
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (number) => dispatch(addNumber(number.target.innerHTML)),
        removeNumber: () => dispatch(removeNumber()),
        enterNumber: () => dispatch(enterNumber())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoorCodeInterface);