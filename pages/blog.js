/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

//styles
import blogStyles from "styled/pages/blog";
import { BlogContainer } from "page-sections/blog/styled";

//Sections
import MainPosts from "page-sections/blog/main-posts";
import texts from "content/texts";

import PillsSelector from "components/selector/big-selector";
import { categories } from "db/constants/categories";
import { articles } from "db/articles";
/* import MasLeidasBlog from "components/Blog/MasLeidasBlog";
import ListasBlogs from "components/Blog/ListaBlogs";
import SuscribeFormBlog from "components/Blog/SuscribeFormBlog";
import FormularioContacto from "pages-sections/contacto/FormularioContacto"; */

const useStyles = makeStyles(blogStyles);

export default function Novedades() {
    const classes = useStyles();

    const [filteredArticles, setFilteredArticles] = useState(articles)

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    const tabsCategories = [{ tabButton: texts['all.label'], tabContent: "" }, ...categories.map(cat => ({ tabButton: cat.name, tabContent: "" }))]


    const handleCategoryTabChange = selectedCategory => {
        if (selectedCategory.tabButton === texts['all.label']) {
            setFilteredArticles(articles)
            return
        }

        setFilteredArticles(articles.filter(art => art.category.name === selectedCategory.tabButton))
    }


    return (
        <div>
            <Parallax image="/img/consultobra/blog/header.jpg" filter="dark" small>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mlAuto,
                                classes.mrAuto,
                                classes.textCenter
                            )}
                        >
                            <h1 className={classes.title}>{texts['features.news-blog.title']}</h1>
                            <h4>
                                {texts['features.news-blog.description']}
                            </h4>
                            {/* <SuscribeFormBlog /> */}
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <BlogContainer className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>

                    {/* -----------------FILTROS------------------- */}

                    <div className={classes.projects}>
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem
                                    xs={12}
                                    sm={8}
                                    md={8}
                                    className={
                                        classes.mlAuto +
                                        " " +
                                        classes.mrAuto +
                                        " " +
                                        classes.textCenter
                                    }
                                >
                                    <h2 className={classes.titleArticles}>Nuestras Notas</h2>
                                    <PillsSelector
                                        alignCenter
                                        color="danger"
                                        tabs={tabsCategories}
                                        onChange={(selectedCategory) => handleCategoryTabChange(selectedCategory)}
                                    />
                                    <div className={classes.tabSpace} />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>

                    {/* -----------------------ULTIMOS NOTAS SUBIDAS----------------- */}

                    <div className={classes.blog}>
                        <div className={classes.container}>
                            <MainPosts articles={filteredArticles} />
                        </div>
                    </div>

                    {/* -------------------------LAS MAS LEIDAS------------------------- 
          <div className={classes.blog}>
            <div className={classes.container}>
              <MasLeidasBlog />
            </div>
          </div>

          */}

                    {/* ------------------------TODAS LAS NOTAS------------------------- 
          <div className={classes.blog}>
            <div className={classes.container}>
              <ListasBlogs />
            </div>
          </div>
        */}
                </div>



            </BlogContainer>
        </div>
    );
}
