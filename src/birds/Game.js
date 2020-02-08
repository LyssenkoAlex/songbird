import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedBird, scoreUp, nextLevel } from './redux/actions/actions';


class Game extends Component {
    checkAnswer = (selection) => {
      if (this.props.secretBird.name === selection) {
        this.props.scoreUp(selection)
      } else {
        this.props.setSelectedBird(selection)
      }
    };

    nextLevel = () => {
      console.log('next le el')
      this.props.nextLevel();
    }


    render() {
      const selectedBird = this.props.selectedBird;
      const title = 'Guess bird';
      const birdsItems = this.props.birds[this.props.birdCategory].map((bird, index) => (

        <li className="list-group-item default" key={index} onClick={() => this.checkAnswer(bird.name)}>
          <span className="li-btn" />
          {bird.name}
        </li>
      ));


      return (
        <React.Fragment>
          <div className="row mb2">
            <div className="col-md-6">
              <ul className="item-list list-group">
                {birdsItems}
              </ul>
            </div>
            <div className="col-md-6">
              <div className="bird-details card">
                <div className="card-body">
                  <img src={selectedBird.image} alt={selectedBird.name} className="bird-image" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h4>{selectedBird.name}</h4>
                    </li>
                    <li className="list-group-item">
                      <span>{selectedBird.species}</span>
                    </li>
                    <li className="list-group-item">
                      <audio src={selectedBird.audio} controls autoPlay className='birdAudion'/>
                    </li>
                  </ul>
                </div>
                <span className="bird-description">
                  {selectedBird.description}
                </span>


              </div>
            </div>
            <button onClick={this.nextLevel} className='btn' type="button" value="Next Level" disabled={!this.props.guessed}>Next level</button>
          </div>
        </React.Fragment>
      )
    }
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  secretBird: state.secretBird,
  selectedBird: state.selectedBird,
  guessed: state.guessed,
});


const mapDispatchToProps = {
  setSelectedBird,
  scoreUp,
  nextLevel,
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
