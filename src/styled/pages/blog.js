import headerLinksStyle from "styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";
import {
    container,
    title,
    main,
    mainRaised,
    mrAuto,
    whiteColor,
    mlAuto,
    hexToRgb,
    blackColor,
    grayColor,
    cardTitle,
    coloredShadow,
    description,
  } from "styles/jss/nextjs-material-kit-pro.js";
  const blogStyles = (theme) => ({
    ...headerLinksStyle(theme),
    constainerHeader2: {
      zIndex: "2",
      position: "relative",
      "& h1, & h4, & h6": {
        color: whiteColor,
      },
      paddingTop: "25vh",
    },
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    container: {
      ...container,
      zIndex: 1,
    },
    title: {
      ...title,
      "&, & + h4": {
        color: whiteColor,
      },
    },
    titleArticle: {
      ...title,
    },
    textCenter: {
      textAlign: "center",
    },
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto",
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0",
    },
    left: {
      float: "left!important",
      display: "block",
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right",
    },
    icon: {
      width: "18px",
      height: "18px",
      top: "3px",
      position: "relative",
    },
    card: {
      marginTop: "60px",
    },
    formControl: {
      margin: "0",
      padding: "8px 0 0 0",
    },
    button: {
      margin: "0 !important",
    },
  });
  export default blogStyles;