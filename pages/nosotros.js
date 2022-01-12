import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from 'components/Parallax/Parallax.js'
import Image from "next/image";

// Sections
import WelcomeMessage from "page-sections/nosotros/welcome-message";

import { useStyles, NosotrosContainer, ImageContainer } from 'page-sections/nosotros/styled'
import Author from "page-sections/nosotros/author";

export default function SobreElAutor() {
    const classes = useStyles();
    return (
        <NosotrosContainer>

            <Parallax image="/img/consultobra/nosotros/consultobra-nosotros.jpg" filter="dark" small>
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
                            <h1 className={classes.title}>Nosotros</h1>

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>

                <div className={classes.team}>
                    <GridContainer>
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mrAuto,
                                classes.mlAuto,
                                classes.textCenter
                            )}
                        >
                            <WelcomeMessage />
                        </GridItem>
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mrAuto,
                                classes.mlAuto,
                                classes.textCenter
                            )}
                        >
                            <ImageContainer>
                                <Image
                                    src="/img/consultobra/hero.png"
                                    className={classes.logo}
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </ImageContainer>
                        </GridItem>
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mrAuto,
                                classes.mlAuto,
                                classes.textCenter
                            )}
                        >
                            <Author />

                        </GridItem>
                    </GridContainer>
                </div>

            </div>

        </NosotrosContainer>
    );
}
