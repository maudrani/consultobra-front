import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactsStyle from "styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle.js";

const useStyles = makeStyles(contactsStyle);


export default function Contacto({ ...rest }) {
    const [checked, setChecked] = React.useState([]);
    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const classes = useStyles();
    return (
        <div className="cd-section" {...rest}>
            {/* Contact us 1 START */}
            <div
                className={classes.contacts + " " + classes.section}
                style={{ backgroundImage: "url('/img/consultobra/contact/background.png')" }}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={5} md={5}>
                            <h2 className={classes.title}>Ponte en contacto!</h2>
                            <h5 className={classes.description}>
                                Necesitas mas informacion? No dudes en contactarte con el equipo y managment de Consultobra. estamos para ayudarte.
                            </h5>
                            <InfoArea
                                className={classes.infoArea}
                                title="Nuestras Oficinas"
                                description={
                                    <span>
                                        Gral. Lamadrid 950, nr. 8,
                                        <br /> Tucuman - Yerba Buena.
                                        <br /> Argentina.
                                    </span>
                                }
                                icon={PinDrop}
                            />
                            <InfoArea
                                className={classes.infoArea}
                                title="Llamanos"
                                description={
                                    <span>
                                        Gustavo Lazcano
                                        <br /> +54 3812345678
                                        <br /> Lunes - Viernes, 9:00-21:00
                                    </span>
                                }
                                icon={Phone}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                            <Card className={classes.card1}>
                                <form>
                                    <CardHeader
                                        contact
                                        color="primary"
                                        className={classes.textCenter}
                                    >
                                        <h4 className={classes.cardTitle}>Contactanos</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Nombre"
                                                    id="first"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Apellido"
                                                    id="last"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <CustomInput
                                            labelText="Direccion de Mail"
                                            id="email-address"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Mensaje"
                                            id="message"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                multiline: true,
                                                rows: 5,
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.justifyContentBetween}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(1)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon} />
                                                    }
                                                    icon={<Check className={classes.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot,
                                                    }}
                                                />
                                            }
                                            classes={{ label: classes.label }}
                                            label="No soy un robot"
                                        />
                                        <Button color="primary" className={classes.pullRight}>
                                            Enviar
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            {/* Contact us 1 END */}
        </div>
    );
}
