import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import styles from "styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js";
import texts from 'content/texts';

const useStyles = makeStyles(styles);

const PageFooter = () => {
    const classes = useStyles()

    return <Footer
        content={
            <div>
                <ul className={classes.socialButtons}>
                    <li>
                        <Button justIcon simple href="#insta" color="instagram">
                            <i className="fab fa-instagram" />
                        </Button>
                    </li>
                    <li>
                        <Button justIcon simple href="#face" color="facebook">
                            <i className="fab fa-facebook-square" />
                        </Button>
                    </li>
                </ul>
                <div
                    className={classNames(classes.pullCenter, classes.copyRight)}
                >
                    &copy; {1900 + new Date().getYear()},{" "}
                    <strong>
                        {texts['brand.name']}
                    </strong>,{" "}
                    {texts['all-rights-reserved.label']}
                </div>
            </div>
        }
    />
}

export default PageFooter;