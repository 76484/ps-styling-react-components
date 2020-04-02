import Radium from "radium";

import config from "./config-styles";

const pulse = Radium.keyframes(
  {
    "0%": { transform: "scale3d(1, 1, 1)" },
    "15%": { transform: "scale3d(1.05, 1.05, 1.05)" },
    "100%": { transform: "scale3d(1, 1, 1)" }
  },
  "Nav"
);

const btn = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  flex: 1,
  fontSize: 50,
  height: config.imageHeight,
  outline: 0,
  padding: 20,
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
  userSelect: "none",
  ":hover": {
    animation: "placeholder 1s infinite",
    animationName: pulse,
    color: "#8c9ea3",
    transition: "all 1s"
  }
};

const next = { ...btn, textAlign: "right" };
const prev = { ...btn, textAlign: "left" };

const hidden = {
  visibility: "hidden"
};

export default {
  root: {
    display: "flex",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  },
  next,
  nextHidden: {
    ...next,
    ...hidden
  },
  prev,
  prevHidden: {
    ...prev,
    ...hidden
  }
};
