import React, { Component } from "react";
import Tweet from './tweet';

let App = React.createClass({
  getInitialState: function() {
    return {
      value: '',
      tweets: []
    }
  },
  handleChange: function(e) {
    this.setState({
      value: e.target.value
    })
  },
  handleKeyUp: function(e) {
    if (e.key === 'Enter') {
      this.setState({
        value: '',
        tweets: this.state.tweets.concat([this.state.value])
      })
    }
  },
  handleDelete: function(index) {
    this.state.tweets.splice(index, 1);
    this.setState({
      tweets: this.state.tweets
    })
  },
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />

        <div>
          {
            this.state.tweets.map( (tweet, index) => <Tweet onDelete={() => this.handleDelete(index)} tweet={tweet}/>)
          }
        </div>
      </div>
    )
  }
})

export default App;
