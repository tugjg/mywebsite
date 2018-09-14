import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageIndex: 0
		};
		this.updatePageIndex = this.updatePageIndex.bind(this);
	}

	updatePageIndex(pageIndex) {
		this.setState({ pageIndex });
	}

	render() {
		const { pageIndex } = this.state;

		return (
			<div className="App">
				<Navbar updatePageIndex={this.updatePageIndex} />

				{pageIndex == 0 && (
					<Landing updatePageIndex={this.updatePageIndex} />
				)}
				{pageIndex == 1 && <About />}
				{pageIndex == 2 && <Portfolio />}
			</div>
		);
	}
}

export default App;
