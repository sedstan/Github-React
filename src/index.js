import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import store from "./store";
import './index.css';
import  'normalize.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
