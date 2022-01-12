import React from 'react';
import { useStyles } from './styled';

const WelcomeMessage = () => {
    const classes = useStyles()

    return (<>
        <h2 className={classes.title}>Bienvenidos a Consultobra!</h2>
        <h5 className={classes.description}>
            ¡Gracias por tu visita! Estamos felices de recibirte, y poder acompañarte en todo lo
            relacionado con el ámbito de la construcción, la arquitectura y el diseño.
            <br />
            <br />
            Somos conscientes de este desafío, y desde ConsultObra queremos dar lo mejor para ser
            ese granito de arena que ayude a usuarios, profesionales y empresas a conectarse entre sí.
            A través de la tecnología disponible, y la colaboración de muchas personas, logramos este
            maravilloso proyecto en conjunto.
            <br />
            <br />
            No podemos expresar con palabras la felicidad que tenemos de ponernos manos a la obra y
            comenzar este camino de transformación junto a ustedes.
        </h5>
        <h5 className={classes.description}>
            El Equipo de Consultobra.
        </h5>
    </>);
}

export default WelcomeMessage;