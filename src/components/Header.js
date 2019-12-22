import React, { Component } from "react";
import PropTypes from "prop-types";

/* Header Component */
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop" />
          <div className="dashBottom" />
          <div className="circle" />
        </div>
        <span className="title">{this.props.title}</span>
        <input type="text" className="searchInput" placeholder="Search ..." />
        <div className="fa fa-search searchIcon" />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Github Activities"
};
