import React, { Component } from 'react';
import { connect } from 'react-redux';


class NextLevel extends Component {
    nextLevel = () => {
      console.log('next le el')
    }

    render() {
      return (
        <React.Fragment>
          <button onClick={this.nextLevel} type="button" value="Next Level">Next level</button>
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

export default connect(mapStateToProps)(NextLevel);
