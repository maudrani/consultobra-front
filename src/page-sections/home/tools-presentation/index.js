/* eslint-disable @next/next/no-img-element */
import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Container } from "./styled";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "styles/jss/nextjs-material-kit-pro/pages/presentationSections/componentsStyle.js";
import texts from "content/texts";

const useStyles = makeStyles(componentsStyle);

export default function ToolsPresentation() {
  const classes = useStyles();
  return (
    <Container className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>{texts['brand.name'].toUpperCase()}</h3>
            <h6 className={classes.description}>
              {texts['landing.hero.consultobra.title']}
            </h6>
            <h5 className={classes.description}>
              {texts['main-info.description']}
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src="/img/consultobra/main-info/laptop-basics.png"
                alt="macbook"
                className={classes.componentsMacbook}
              />
              <img
                src="/img/consultobra/main-info/table.png"
                alt="big-table"
                className={classes.shoppingCart}
              />
              <img
                src="/img/consultobra/main-info/share-btn.png"
                alt="macbook"
                className={classes.shareButton}
              />
              <img
                src="/img/consultobra/main-info/coloured-card-with-btn.png"
                alt="macbook"
                className={classes.cardImage}
              />
              <img
                src="/img/consultobra/main-info/coloured-card.png"
                alt="macbook"
                className={classes.twitterImage}
              />
              <img
                src="/img/consultobra/main-info/social-row.png"
                alt="macbook"
                className={classes.iconsImage}
              />
              <img
                src="/img/consultobra/main-info/pin-btn.png"
                alt="macbook"
                className={classes.repostImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Container>
  );
}
