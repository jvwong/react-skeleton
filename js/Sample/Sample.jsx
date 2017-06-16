import React from 'react';
import {
	Grid,	Row, Col
} from 'react-bootstrap';

// Sample
// Prop Dependencies ::
export class Sample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({ message: 'Hello React!'});
  }

	render() {
		return (
			<div className="Sample">
				<Grid>
					<Row className="show-grid">
						<Col sm={6} md={3}><h1>{ this.state.message }</h1></Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
