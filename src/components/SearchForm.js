import React, { Component } from "react";
import propTypes from "prop-types";

export default class SearchForm extends Component {
  state = { searchText: "" };
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
    searchVisible: propTypes.bool.isRequired
  };
  static defaultProps = {
    onSubmit: () => {},
    searchVisible: false
  };

  showSearch = () => {
    this.setState({ searchVisible: !this.state.searchVisible });
  };

  submitForm = e => {
    e.preventDefault();
    const { searchText } = this.state;
    this.props.onSubmit(searchText);
  };

  updateSearchInput = e => {
    let value = e.target.value;
    this.setState({
      searchText: value
    });
  };

  render() {
    const { searchVisible } = this.state;
    let searchClasses = ["searchInput"];
    if (searchVisible) {
      searchClasses.push("active");
    }
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="search"
          value={this.state.searchText}
          onChange={this.updateSearchInput}
          className={searchClasses.join(" ")}
          placeholder="Search ..."
        />
        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"
        />
      </form>
    );
  }
}
