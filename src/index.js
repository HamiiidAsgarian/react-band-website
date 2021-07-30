import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";  //npm install --save redux
import Rootreducer from "./rootreducer/rootreducer.js";
import { Provider } from "react-redux"; //npm install --save react-redux


const store = createStore(Rootreducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
