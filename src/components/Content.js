import React, { Component } from "react";
import ActivityItem from "./ActivityItem";
import Header from "./Header";
import { data } from "./data";
import PropTypes from "prop-types";

/* Content Component */
export default class Content extends Component {
  state = { activities: data, loading: false, filtered: data };

  componentDidMount() {
    this.setState({ activities: data });
  }
  componentWillReceiveProps = nextProps => {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({ loading: true }, this.updateData);
    }
  };

  updateData = () => {
    this.setState(
      {
        loading: false,
        activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
      },
      this.props.onComponentRefresh
    );
  };

  handleSearch = txt => {
    if (txt === "") {
      this.setState({
        filtered: this.state.activities
      });
    } else {
      const { activities } = this.state;
      const filtered = activities.filter(
        a => a.actor && a.actor.login.match(txt)
      );
      this.setState({
        filtered
      });
    }
  };

  render() {
    let { loading, filtered } = this.state;
    return (
      <div>
        <Header onSearch={this.handleSearch} />
        <div className="content">
          <div className="line" />
          {loading && <div>loading</div>}
          {/* Item container */}
          {filtered.map(activity => {
            return <ActivityItem key={activity.id} activity={activity} />;
          })}
          {/* Item container */}
        </div>
      </div>
    );
  }
}

Content.PropTypes = {
  requestRefresh: PropTypes.bool,
  onComponentRefresh: PropTypes.func
};
