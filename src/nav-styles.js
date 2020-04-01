import config from "./config-styles";

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
  userSelect: "none"
};

const next = { ...btn, textAlign: "right" };
const prev = { ...btn, texttAlign: "left" };
const hidden = { visibility: "hidden" };

export default {
  next,
  nextHidden: { ...next, ...hidden },
  prev,
  prevHidden: { ...prev, ...hidden },
  root: {
    display: "flex",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  }
};
