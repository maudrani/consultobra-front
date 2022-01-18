import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Subject from "@material-ui/icons/Subject";
import Link from 'next/link';

//styles
import blogStyles from "styled/pages/blog";

import texts from 'content/texts';

const useStyles = makeStyles(blogStyles);

const MainPosts = ({articles}) => {
    const classes = useStyles();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    const posts = articles.map(article => {

        const { id, header_img, title, subtitle, category } = article
        const article_link = `/blog-article?article=${id}`

        return <GridItem key={article.id} xs={12} sm={12} md={12}>
            <Card
                raised
                background
                style={{
                    backgroundImage: `url(${header_img})`,
                }}
            >
                <CardBody background>
                    <h6 className={classes.cardCategory}>{category.name.toUpperCase()}</h6>
                    <Link href={article_link} passHref>
                        <a href='#' onClick={(e) => e.preventDefault()}>
                            <h3 className={classes.cardTitleWhite}>
                                {title}
                            </h3>
                        </a>
                    </Link>
                    <p className={classes.cardDescription}>
                        {subtitle}
                    </p>
                    <Link href={article_link} passHref>
                        <Button round color="danger">
                            <Subject /> {texts['view-more.label']}
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </GridItem>
    })

    return (
        <GridContainer>
            {posts}
        </GridContainer>
    );
}

export default MainPosts;