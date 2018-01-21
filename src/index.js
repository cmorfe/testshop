import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import sublevels from './data/categories.json';
import registerServiceWorker from './registerServiceWorker';

let categories = {
    id: 1,
    name: 'Categorias',
    sublevels: sublevels
};

ReactDOM.render(<App root={categories}/>, document.getElementById('root'));
registerServiceWorker();
