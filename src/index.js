import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Konvademo from './Konvademo'
import registerServiceWorker from './registerServiceWorker';

// import {Line, Layer, Rect, Stage, Group, Circle} from 'react-konva';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
