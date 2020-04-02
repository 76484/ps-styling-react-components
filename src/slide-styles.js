import config from "./config-styles";

const footerHeight = 110;

export default {
  footer: {
    background: "rgba(0, 0, 0, 0.3)",
    color: "white",
    height: footerHeight,
    left: 0,
    padding: "15px",
    position: "absolute",
    textShadow: "1px 1px 0 rgba(0, 0, 0, 0.6)",
    top: config.imageHeight - footerHeight,
    width: "100%"
  },
  root: {
    position: "absolute",
    top: 0,
    transition: "all 0.6s"
  },
  title: {
    margin: "0 0 10px"
  }
};
