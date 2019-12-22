import React, { Component } from "react";
import ActivityItem from "./ActivityItem";
import { data } from "./data";
import PropTypes from "prop-types";

/* Content Component */
export default class Content extends Component {
  state = { activities: [], loading: false };

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

  render() {
    let { loading } = this.state;
    return (
      <div className="content">
        <div className="line" />
        {loading && <div>loading</div>}
        {/* Item container */}
        {data.map(activity => {
          return <ActivityItem key={activity.id} activity={activity} />;
        })}
        {/* Item container */}
      </div>
    );
  }
}

Content.PropTypes = {
  requestRefresh: PropTypes.bool,
  onComponentRefresh: PropTypes.func
};
