import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
}

const MyButton = (props) => {
  return (
    <button style={buttonStyle}>
      {props.title}
    </button>
  );
};

MyButton.propTypes = {
  /** Button Title 的 document 在這裏！！！ */
  title: PropTypes.string,
}

MyButton.defaultProps = {
  title: 'Button Title'
}

export default MyButton;