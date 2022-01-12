import {
  container,
  main,
  whiteColor,
  mainRaised,
} from "styled/nextjs-material-kit-pro";

const layoutStyles = {
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2",
  },
  main: {
    ...main,
  },
  mainRaised: {
    ...mainRaised,
  },
};

export default layoutStyles;
