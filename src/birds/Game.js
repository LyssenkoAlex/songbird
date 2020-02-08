import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedBird, scoreUp } from './redux/actions/actions';


class Game extends Component {
    checkAnswer = (selection) => {
      if (this.props.secretBird.name === selection) {
        this.props.scoreUp(selection)
      } else {
        this.props.setSelectedBird(selection)
      }
    };


    render() {
      const title = 'Guess bird';
      const birdsItems = this.props.birds[this.props.birdCategory].map((bird, index) => (

        <li key={index}>
          <span onClick={() => this.checkAnswer(bird.name)}>
            {bird.name}
          </span>
        </li>
      ));


      return (
        <React.Fragment>
          <h1>{title}</h1>
          <ul>
            {birdsItems}
          </ul>
        </React.Fragment>
      )
    }
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  secretBird: state.secretBird,
  selectedBird: state.selectedBird,
});


const mapDispatchToProps = {
  setSelectedBird,
  scoreUp,
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
