import './bird_caregories.scss'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from './redux/actions/actions';

const birdsCategory = [{ id: 0, category: 'Разминка' },
  { id: 1, category: 'Воробьиные' }, { id: 2, category: 'Лесные птицы' }, { id: 3, category: 'Певчие птицы' }, { id: 4, category: 'Хищные птицы' }, { id: 5, category: 'Морские пртицы' }];

class BirdCategories extends Component {
    setCategory = (index) => {
      this.props.selectCategory(index);
    };

    render() {
      const playerScore = this.props.score;

      const birdsCategories = birdsCategory.map(item => (
        <li className="page-item" key={item.id}>
          <a className="page-link" onClick={() => this.setCategory(item.id)}>
            {item.category}
          </a>

        </li>
      ));

      return (
        <div className="header">
          <h5>
Score
            {playerScore}
          </h5>
          <ul className="pagination">{birdsCategories}</ul>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
  score: state.score,
});

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdCategories);
