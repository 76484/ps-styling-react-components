import config from "./config-styles";

const footerHeight = 110;

export default {
  footer: {
    background: "rgba(0, 0, 0, 0.3)",
    boxSizing: "border-box",
    color: "#fff",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 14,
    height: footerHeight,
    left: 0,
    lineHeight: "1.4em",
    padding: 15,
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
