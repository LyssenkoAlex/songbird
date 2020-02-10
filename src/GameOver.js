import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startAgain } from './birds/redux/actions/actions';


class GameOver extends Component {
  render() {
    const visibility = this.props.gameOver ? 'block' : 'none';

    const score = `Вы прошли викторину и набрали: ${this.props.score} из 30`;
    return (
      <React.Fragment>
        <div className="jumbotron game-over" style={{ display: visibility }}>
          <h1 className="display-3 text-center">Поздравляем!</h1>
          <p className="lead text-center">{score}</p>
          <button className="btn btn-next btn-game-over" type="button" onClick={this.props.startAgain}>Попробовать еще раз!</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  startAgain,
}

const mapStateToProps = state => ({
  gameOver: state.gameOver,
  score: state.score,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
  startAgain: PropTypes.func.isRequired,
};
