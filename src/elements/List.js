import React from 'react';
import propTypes from 'prop-types';

export default function List(props) {
  const className = ['list-reset'];
  className.push(props.className);
  if (props.isSmall) className.push('text-sm');
  return (
    <ul className={className.join(' ')}>
      {props.data.map((list, index) => (
        <li key={index} className={list.isChecked ? 'is-checked' : ''}>
          {list.content}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  data: propTypes.object,
  isChecked: propTypes.bool,
  isSmall: propTypes.bool,
};
