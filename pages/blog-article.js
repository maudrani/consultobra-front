import React from "react";
import { useRouter } from 'next/router'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// sections for this page
import blogPostPageStyle from "styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";
import ArticleContent from "page-sections/blog-article/article-content";
import AuthorSection from "page-sections/blog-article/author";

/* db */
import { articles } from "db/articles";

const useStyles = makeStyles(blogPostPageStyle);

const Nota1 = () => {
    const classes = useStyles();
    const router = useRouter()
    const article = articles.find(art => art.id == router.query?.article)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    const { title, subtitle, header_img } = article

    return (
        <div>
            <Parallax image={header_img} filter="dark">
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem md={8} className={classes.textCenter}>
                            <h1 className={classes.title}>
                                {title}
                            </h1>
                            <h4 className={classes.subtitle}>
                                {subtitle}
                            </h4>
                            <hr />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classes.main}>
                <div className={classes.container}>
                    <ArticleContent {...article} />
                    <AuthorSection {...article} />
                </div>
            </div>
        </div>
    );
}

export default Nota1;