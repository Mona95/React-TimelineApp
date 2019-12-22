import React, { Component } from "react";
import PropTypes from "prop-types";

/* Activity Item Component */
export default class ActivityItem extends Component {
  render() {
    let { activity } = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img alt="avatar" src={activity.actor.avatar_url} />
        </div>
        <span className="time">{activity.created_at}</span>
        <p>
          {activity.actor.display_login} {activity.payload.action}
        </p>
        <div className="commentCount">{activity.repo.name}</div>
      </div>
    );
  }
}

ActivityItem.PropTypes = {
  activity: PropTypes.object
};
