import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);
  return (
    <div className={className.join(" ")}>
      <div className={`tiles-item-inner ${props.isShadow} ? "has-shadow" : ""`}>
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  className: propTypes.string,
  isShadow: propTypes.bool,
  data: propTypes.array,
};
