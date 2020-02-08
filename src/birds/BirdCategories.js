import './bird_caregories.scss'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from './redux/actions/actions';

const birdsCategory = [{ id: 0, category: 'Разминка' },
  { id: 1, category: 'Воробьиные' }, { id: 2, category: 'Лесные птицы' }, { id: 3, category: 'Певчие птицы' }, { id: 4, category: 'Хищные птицы' }, { id: 5, category: 'Морские пртицы' }];

class BirdCategories extends Component {
    setCategory = (index) => {
      console.log('index:', index)
      this.props.selectCategory(index);
    };

    render() {
      const birdsCategories = birdsCategory.map(item => (
        <li key={item.id}>
          <span onClick={() => this.setCategory(item.id)}>
            {item.category}
          </span>

        </li>
      ));

      return (
        <ul>{birdsCategories}</ul>
      )
    }
}

const mapStateToProps = state => ({
  birds: state.birds,
  birdCategory: state.birdCategory,
});

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdCategories);
