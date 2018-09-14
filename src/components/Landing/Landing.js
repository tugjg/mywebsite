import React, { Component } from "react";
import "./Landing.css";
import $ from 'jquery';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navHeight: null
        };
    }

    componentDidMount() {
        $(document).ready(function() {
            const navHeight = $("#nav").height();
            this.setState({ navHeight });
        }.bind(this));
    }
    render() {
        const { updatePageIndex } = this.props;

        return (
            <div
                className="landing-page-container container"
                style={{ height: `calc(100vh - ${this.state.navHeight}px` }}
            >
                <div className="header-wrapper row">
                    <h1>Hey there! I'm Jacob.</h1>
                    <h2>This website is a work in progress...</h2>
                </div>
            </div>
        );
    }
}
export default Landing;
