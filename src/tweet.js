import React from "react";

const Tweet = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          {this.props.tweet}
        </div>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
})

export default Tweet;
