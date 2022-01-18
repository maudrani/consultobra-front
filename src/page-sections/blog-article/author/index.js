import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";

import sectionBlogInfoStyle from "styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import texts from "content/texts";


const Tags = ({ tags }) => {
  return tags.map(tag => <Badge color="primary" key={tag}>{tag}</Badge>)
}

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function AuthorSection(props) {
  const classes = useStyles();

  const { tags, author } = props

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.blogTags}>
                {!!tags.length &&
                  <>
                    Tags:
                    <Tags tags={tags} />
                  </>}
              </div>
            </GridItem>
           {/*  <GridItem xs={12} sm={6} md={6}>
              <Button color="google" round className={classes.buttons}>
                <i className="fab fa-google" /> 232
              </Button>
              <Button color="twitter" round className={classes.buttons}>
                <i className="fab fa-twitter" /> 910
              </Button>
              <Button color="facebook" round className={classes.buttons}>
                <i className="fab fa-facebook-square" /> 872
              </Button>
            </GridItem> */}
          </GridContainer>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img src={author.img_profile} alt="..." />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>{author.name}</h4>
                <p className={classes.description}>
                  {author.description}
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <Button round className={classes.pullRight}>
                  {texts['follow.label']}
                </Button>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
