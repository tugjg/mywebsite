import React, {Component, Fragment} from 'react';
import {TweenLite, TimelineMax} from 'gsap';
import './About.css';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animIcon = this.animIcon.bind(this);
    this.unAnimIcon = this.unAnimIcon.bind(this);
  }

  animIcon(e) {
    const icon = e.target;

    var anims = [
      new TweenLite.to(icon, 0.4, {
        transform: 'rotateZ(8deg)',
        ease: 'Linear.easeNone',
      }),
      new TweenLite.to(icon, 0.2, {
        transform: 'none',
        ease: 'Linear.easeNone',
      }),
      new TweenLite.to(icon, 0.4, {
        transform: 'rotateZ(-8deg)',
        ease: 'Linear.easeNone',
      }),
      new TweenLite.to(icon, 0.2, {
        transform: 'none',
        ease: 'Linear.easeNone',
      }),
    ];
    var tl = new TimelineMax({
      tweens: anims,
      align: 'sequence',
      repeat: -1,
    });
    this.setState({iconAnim: tl});
  }
  unAnimIcon(e) {
    const icon = e.target;
    const {iconAnim} = this.state;
    iconAnim.restart().pause();
  }

  render() {
    return (
      <Fragment>
        <div className="about-page-container container">
          <div className="about-page-icon-wrapper">
            <i
              className="about-page-icon fas fa-city"
              onMouseEnter={this.animIcon}
              onMouseLeave={this.unAnimIcon}
            />
            <i
              className="about-page-icon fas fa-music"
              onMouseEnter={this.animIcon}
              onMouseLeave={this.unAnimIcon}
            />
            <i
              className="about-page-icon fas fa-graduation-cap"
              onMouseEnter={this.animIcon}
              onMouseLeave={this.unAnimIcon}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
