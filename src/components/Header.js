import React, { Component } from "react";

/* Header Component */
export default class Header extends Component {
  state = [{ searchVisible: false }];

  showSearch = () => {
    this.setState({ searchVisible: !this.state.searchVisible });
  };

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];

    const wrapperStyle = {
      backgroundColor: "rgba(251, 202, 43, 1)"
    };
    const titleStyle = {
      color: "#111111"
    };

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

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

        <input
          type="text"
          className={searchInputClasses.join(" ")}
          placeholder="Search ..."
        />
        <div onClick={this.showSearch} className="fa fa-search searchIcon" />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Github Activities"
};
