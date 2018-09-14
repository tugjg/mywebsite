import React, { Component, Fragment } from 'react';
import './About.css';
class About extends Component { 
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return(
			<Fragment>
				<div className="about-page-container">
					<div className="header-wrapper"><h1>A Little About Me</h1></div>
				</div>
			</Fragment>
		)
	}

}

export default About;