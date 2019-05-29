import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/Actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDcrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.incrementToFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.decrementToFive}  />
                <hr/>
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResults => {
                        return <li key={strResults.id} onClick={ () => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   return {
        ctr: state.counterState.counter,
        storedResults: state.resultState.results
   };     
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDcrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        incrementToFive: () => dispatch({ type: actionTypes.INCREMENTFIVE, value: 5 }),
        decrementToFive: () => dispatch({ type: actionTypes.DECREMENTFIVE, value: 5}),
        onStoreResults: (result) => dispatch({ type: actionTypes.STORE_RESULTS, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);