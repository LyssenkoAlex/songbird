import React, { Component } from 'react';
import { connect } from 'react-redux';


class SecretBird extends Component {
  render() {
    const secretBird = this.props.secretBird;

    return (
      <React.Fragment>
        <div className="random-bird jumbotron rounded">
          <img className="bird-image" src={secretBird.image} />
          <div>
            <ul className="list-group list-group-flush">
              <h3>{secretBird.name}</h3>
              <li className="list-group-item">
                <div>
                  <audio src={secretBird.audio} ref="audio_tag" controls autoPlay />

                </div>
              </li>
            </ul>
          </div>

        </div>
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
