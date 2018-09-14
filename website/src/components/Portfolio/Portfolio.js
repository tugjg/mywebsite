import React, { Component, Fragment } from 'react';

const PortfolioCard = props => {
	const {
		image,
		title,
		description
	} = props;

	return(
		<div className="card">
			<img className="card-image" src={image}/>
			<div className="card-body">
				<div className="card-title">{title}</div>
				<div className="card-text">{description}</div>
			</div>
		</div>
	);
}


class Portfolio extends Component {
	render() {
		return(
			<Fragment>
				<div className="portfolio-container">
					<div className="header-wrapper">My Portfolio</div>

					<div className="card-deck">

					</div>
				</div>
			</Fragment>
		)
	}
}

export default Portfolio;