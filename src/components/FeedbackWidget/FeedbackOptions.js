import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    return (
      <button
        className={css.button__option}
        key={this.props.id}
        id={this.props.id}
        type="button"
        onClick={this.props.onClick}
      >
        {this.props.id}
      </button>
    );
  }
}

FeedbackOptions.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
