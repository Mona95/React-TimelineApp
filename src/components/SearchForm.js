import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchForm extends Component {
  state = { searchText: "", searchVisible: false };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
  };
  showSearch = () => {
    this.setState({ searchVisible: !this.state.searchVisible });
  };

  render() {
    const { searchVisible } = this.state;
    let searchClasses = ["searchInput"];
    if (searchVisible) {
      searchClasses.push("active");
    }
    return (
      <form>
        <input
          type="search"
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
