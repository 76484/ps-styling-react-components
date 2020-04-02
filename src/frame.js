import Radium from "radium";
import React from "react";

import styles from "./frame-styles.js";

export default Radium(function Frame({ children }) {
  return <div style={styles.root}>{children}</div>;
});
