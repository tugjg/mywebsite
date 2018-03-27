import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component{
    render(){
        return(
            <div className="landing-wrapper fullPage">
                <div className="header-wrapper">
                    <h1>Welcome!</h1>
                </div>

                <div className="nav-link-pictures">
                    <div className="nav-link-section">
                        <img className="img-fluid nav-link-picture"/>
                        <div className="nav-link-text"></div>
                    </div>
                    <div className="nav-link-section">
                        <img className="img-fluid nav-link-picture"/>
                        <div className="nav-link-text"></div>
                    </div>
                    <div className="nav-link-section">
                        <img className="img-fluid nav-link-picture"/>
                        <div className="nav-link-text"></div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Landing
