import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Reducer from './containers/store/Reducer';
import CounterState from './containers/store/Reducers/CounterState';
import ResultState from './containers/store/Reducers/ResultState';

const rootReducer = combineReducers({
    counterState: CounterState,
    resultState: ResultState
}) 

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
