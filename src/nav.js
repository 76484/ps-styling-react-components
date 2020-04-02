import PropTypes from "prop-types";
import Radium from "radium";
import React from "react";

import styles from "./nav-styles";

function getNextStyles(props) {
  return props.hasNext ? styles.next : styles.nextHidden;
}

function getPrevStyles(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden;
}

function Nav(props) {
  return (
    <div style={styles.root}>
      <button
        key="prev"
        onClick={props.onPrevious}
        style={getPrevStyles(props)}
      >
        &#10094;
      </button>
      <button key="next" onClick={props.onNext} style={getNextStyles(props)}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Radium(Nav);
