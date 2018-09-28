import React, {Component, Fragment} from 'react';
import $ from 'jquery';
import './Navbar.css';

const NavbarItem = props => {
  const {image, hoverImage, text} = props;
  return (
    <div className="navbar-item">
      <h6 className="navbar-item-text">{text}</h6>
      <img src={image} className="img-fluid navbar-item-image" />
    </div>
  );
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredItem: null,
      responsive: false,
      navOpen: false,
    };
    this.checkIfResponsive = this.checkIfResponsive.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  checkIfResponsive() {
    const width = $(window).innerWidth();
    this.setState({responsive: width <= 768.98 ? true : false});
  }

  toggleNav() {
    const {navOpen} = this.state;
    const navMenu = $('.nav-button');
    const navWrapper = $('.nav-wrapper');
    if (navOpen) {
      navMenu.removeClass('fa-angle-up');
      navMenu.addClass('fa-angle-down');
      navWrapper.toggleClass('open');
      this.setState({navOpen: false});
    } else {
      navMenu.removeClass('fa-angle-down');
      navMenu.addClass('fa-angle-up');
      navWrapper.toggleClass('open');

      this.setState({navOpen: true});
    }
  }

  componentDidMount() {
    const width = $(window).innerWidth();
    this.checkIfResponsive();
    window.addEventListener(
      'resize',
      function() {
        if (this.state.navOpen) {
          this.toggleNav();
        }
        this.checkIfResponsive();
      }.bind(this),
    );
    const navItems = document.getElementsByClassName('nav-item');
    // some GSAP animation to make each item, sequentially, increase height and then decrease height, to show they're clickable
  }

  hoverNavItem(e) {
    var navItem = e.target;
    var allNavItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < allNavItems.length; i++) {
      if (allNavItems[i] == navItem) {
        allNavItems[i].classList.add('hovered');
      } else {
        allNavItems[i].classList.add('notHovered');
      }
    }
  }
  unHoverNavItem(e) {
    var navItem = e.target;
    var allNavItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < allNavItems.length; i++) {
      if (allNavItems[i] == navItem) {
        allNavItems[i].classList.remove('hovered');
      }
      allNavItems[i].classList.remove('notHovered');
    }
  }

  render() {
    const {updatePageIndex} = this.props;
    return (
      <Fragment>
        <div
          className={
            this.state.responsive ? 'nav-wrapper responsive' : 'nav-wrapper'
          }
          id="nav">
          <div className="nav-item-wrapper">
            <div
              className="nav-item"
              onClick={() => updatePageIndex(1)}
              onMouseEnter={this.hoverNavItem}
              onMouseLeave={this.unHoverNavItem}>
              Meet Me
            </div>
            <div
              className="nav-item"
              onMouseEnter={this.hoverNavItem}
              onMouseLeave={this.unHoverNavItem}>
              My Work
            </div>
            <div className="nav-split" onClick={() => updatePageIndex(0)}>
              |
            </div>
            <div
              className="nav-item"
              onMouseEnter={this.hoverNavItem}
              onMouseLeave={this.unHoverNavItem}>
              Portfolio
            </div>
            <div
              className="nav-item"
              onMouseEnter={this.hoverNavItem}
              onMouseLeave={this.unHoverNavItem}>
              Connect
            </div>
          </div>
          <div className="nav-menu-button-wrapper" onClick={this.toggleNav}>
            <i className="fa nav-button fa-angle-down" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
