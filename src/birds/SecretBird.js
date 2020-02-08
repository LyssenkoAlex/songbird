import React, { Component } from 'react';
import { connect } from 'react-redux';


class SecretBird extends Component {
  render() {
    const secretBird = this.props.secretBird;

    return (
      <React.Fragment>
        <h1>{secretBird.name}</h1>
        <p>{secretBird.audio}</p>
        <p>{secretBird.image}</p>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  secretBird: state.secretBird,
});


export default connect(mapStateToProps, null)(SecretBird);
