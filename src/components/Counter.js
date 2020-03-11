import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		
	};

	render() {
		return (
			<div>
				<button>+1</button>
				<button>-1</button>
				<p></p>
			</div>
		);
	};
};

export default Counter;