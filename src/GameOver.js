import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class GameOver extends Component {
  render() {
    const visibility = this.props.gameOver ? 'block' : 'none';
    const score = `Game over, your score is: ${this.props.score} out of 30`;
    return (
      <React.Fragment>
        <div style={{ display: visibility }}>{score}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  birdCategory: state.birdCategory,
  birds: state.birds,
  gameOver: state.gameOver,
  score: state.score,
});

export default connect(mapStateToProps)(GameOver);

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
};
