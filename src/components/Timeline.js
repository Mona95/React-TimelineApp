import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

/* Main Timeline Component */
export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }
  // Bound to the refresh button
  refresh = () => {
    this.setState({ refreshing: true });
  };
  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({ refreshing: false });
  }
  render() {
    const { refreshing } = this.state;
    return (
      <div>
        <div className="panel">
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
          />
          <Footer>
            <button onClick={this.refresh}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
      </div>
    );
  }
}
