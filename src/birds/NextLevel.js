import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextLevel } from './redux/actions/actions';


class NextLevel extends Component {
    nextLevel = () => {
      console.log('next le el')
      this.props.nextLevel();
    }


    render() {
      return (
        <React.Fragment>
          <button onClick={this.nextLevel} type="button" value="Next Level" disabled={!this.props.guessed}>Next level</button>
        </React.Fragment>
      )
    }
}


const mapStateToProps = state => ({
  guessed: state.guessed,
});

const mapDispatchToProps = {
  nextLevel,
};


export default connect(mapStateToProps, mapDispatchToProps)(NextLevel);
