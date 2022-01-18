import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import sectionTextStyle from "styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function ArticleContent(props) {
    const { title, html_content } = props

    const classes = useStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={8}>
                    <h3 className={classes.title}>{title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: html_content }} />
                </GridItem>
            </GridContainer>
        </div>
    );
}
