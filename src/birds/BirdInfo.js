import React, { Component } from 'react';
import { connect } from 'react-redux';

class BirdInfo extends Component {
  render() {
    const selectedBird = this.props.selectedBird;

    return (
      <React.Fragment>
        <h1>Title Ru</h1>
        <h1>{selectedBird.name}</h1>
        <h2>Latin</h2>
        <h1>{selectedBird.species}</h1>
        <h1>Image</h1>
        <h2>{selectedBird.image}</h2>
        <h1>Audio</h1>
        <h1>{selectedBird.audio}</h1>
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

export default connect(mapStateToProps)(BirdInfo);
