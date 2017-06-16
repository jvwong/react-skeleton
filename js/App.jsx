import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/index.css';
import { Sample } from './Sample/Sample.jsx';
import $ from 'jquery';

const mountElement = $('#container').get(0);

// App
// Prop Dependencies ::
export class App extends React.Component {
	render() {
		return (
			<Sample style={styles} />
		);
	}
}

ReactDOM.render(<App/>, mountElement);
