import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreBoard extends Component {
  render() {
    const playerScore = this.props.score;
    return (
      <h1>
Score:
        {playerScore}
      </h1>

    )
  }
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  score: state.score,
});


export default connect(mapStateToProps, null)(ScoreBoard);
