import React, {Component} from 'react';
import './Landing.css';
import {TimelineLite, TweenLite} from 'gsap';
import $ from 'jquery';

class Landing extends Component {
  componentDidMount() {
    // if non mobile width, navbar tabs animation sequence
    if (window.innerWidth >= 798.98) {
      if (!sessionStorage.getItem('tempVisited')) {
        sessionStorage.setItem('tempVisited', true);
        var navItems = document.getElementsByClassName('nav-item');
        var navItemAnims = [];
        for (var i = 0; i < navItems.length; i++) {
          navItemAnims.push(
            new TweenLite.fromTo(
              navItems[i],
              0.15,
              {height: '2.75rem', boxShadow: '0px 2px 2px 1px #dcdcdd'},
              {height: '2rem', boxShadow: '0px 0px 2px 0.75px #dcdcdd'},
            ),
          );

          var navTimeline = new TimelineLite({
            tweens: navItemAnims,
            stagger: 0.1,
            align: 'start',
            delay: 0.27,
          });
        }
      }
    }
  }
  render() {
    const {updatePageIndex} = this.props;
    return (
      <div className="landing-page-container container">
        <div className="header-wrapper row">
          <h1>Nice to meet you.</h1>
          <h2>This website is a work in progress...</h2>
        </div>
      </div>
    );
  }
}
export default Landing;
