import React from 'react';
import { useStyles } from './styled';
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

const Author = () => {
    const classes = useStyles()

    return (<>

        <h2 className={classes.title}>Sobre el autor</h2>
        <h5 className={classes.description}>
            Mi nombre es Gustavo Lazcano, soy Arquitecto recibido de la FAU-UNT, me dedico full  time a presupuestación de obras y estudio de procesos. Cuando la Pandemia comenzó,  pararon las obras y quedé sin trabajo. Lejos de cruzar los brazos tuve la idea de acercar a la  población mi trabajo, para que cualquiera pudiera utilizarlo en sus proyectos si así lo decidiera.  Pensé en crear una página web a la que llamé Consultobra, un espacio de consulta para tu  obra.
            <br />
            <br />
            En lo personal pienso que los seres humanos somos creadores de momentos y los que  ponemos ladrillos en el suelo más aún ya que cada ladrillo condiciona nuestra forma de vivir  desde lo particular a lo urbano. Para mí, la construcción es la industria que hace la envolvente  material, mientras que la arquitectura es rama intelectual que le da sentido a esa parte, ya que  se dedica a crear lo inmaterial o intangible que pasa bajo y fuera de esa envolvente.
            <br />
            <br />
            Podría pensarse que con la construcción es suficiente, pero yo diría que una  construcción sin intelecto es como un cuerpo sin alma. Yo creo que ambas ramas se necesitan  para existir y crear un mundo mejor. El desafío del arquitecto se basa en componer lo material  con lo inmaterial para que el ser humano viva siempre un poco mejor.
            <br />
            <br />
            Yo, como arquitecto, estoy consciente que para que pueda llevarse a cabo la parte  inmaterial es necesaria la parte material. Para conseguirlo es necesario optimizar procesos y  reducir costos sin perjudicar la calidad. Mi visión para con el medio, la gente y mis colegas, es  aportar ese granito de arena que a todos nos hace falta para mejorar nuestro trabajo y  dedicarme a esta parte del problema en colaboración de otros profesionales. En un contexto  con grandes distractores, la tecnología puede ayudar a focalizarnos en la consecución de  nuestras metas.
            <br />
            <br />
            Un agradecimiento especial al usuario de esta plataforma de mi parte y todos los que  hacen a Consultobra.
        </h5>

        <Card profile plain>
            <CardAvatar profile plain>
                <a href="#profile">
                    <img
                        src="img/consultobra/faces/gustavo-lazcano.jpeg"
                        alt="profile-pic"
                        className={classes.img}
                    />
                </a>
            </CardAvatar>

            <CardBody plain>
                <h4 className={classes.cardTitle}>Gustavo Lazcano</h4>
                <h6 className={classes.textMuted}>Arquitecto</h6>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
                <Button href="#profile" justIcon simple color="facebook">
                    <i className="fab fa-facebook" />
                </Button>
                <Button href="#profile" justIcon simple style={{ color: "#de1b85" }}>
                    <i className="fab fa-instagram" />
                </Button>
            </CardFooter>



        </Card>

    </>)
}

export default Author;