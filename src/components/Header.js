import React, { Component } from "react";
import SearchForm from "./SearchForm";

/* Header Component */
export default class Header extends Component {
  render() {
    const wrapperStyle = {
      backgroundColor: "rgba(251, 202, 43, 1)",
      borderRadius: 10
    };
    const titleStyle = {
      color: "#111111"
    };

    // Update the class array if the state is visible

    return (
      <div className="header" style={wrapperStyle}>
        <div className="menuIcon">
          <div className="dashTop" />
          <div className="dashBottom" />
          <div className="circle" />
        </div>
        <span className="title" style={titleStyle}>
          {this.props.title}
        </span>
        <SearchForm />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Github Activities"
};
