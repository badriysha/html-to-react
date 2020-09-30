import React from 'react';
import propTypes from 'prop-types';

export default function Section(props) {
  const className = ['section'];
  className.push(props.className);
  if (props.isCentered) className.push('center-content');
  return <section className={className.join(' ')}>{props.children}</section>;
}

Section.propTypes = {
  isCentered: propTypes.bool,
  className: propTypes.string,
};
