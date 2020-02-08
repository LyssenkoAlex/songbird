import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameOver extends Component {
  render() {
    const visibility = this.props.gameOver ? 'block' : 'none';
    return (
      <React.Fragment>
        <div style={{ display: visibility }}>
Game over, your score
          {this.props.score}
          {' '}
из 30!
        </div>
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
