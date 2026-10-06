import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome-box">
        <h3>Hello, {this.props.name}! </h3>
        <p>Stay organized and finish your tasks on time.</p>
      </div>
    );
  }
}

export default Welcome;