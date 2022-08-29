import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SingleChoiceQuiz from "../../components/SingleChoiceQuiz";


function FluidMechanics() {
    const videoHeight  = "400px"
    return (
        <div style={{maxWidth:"800px",textAlign:"justify"}}>
            <h2>Semillero de ciencias</h2>
            <p style={{fontStyle:"italic", textAlign:"center"}}>
                "Aquel que lo intentó y no lo consiguió es superior al que ni lo intentó." -Isaac Newton</p>
            <h4 style={{textAlign:"left"}}>Laboratorio #2. Mecánica de fluidos</h4>
            <p>Se le denomina fluido a la materia compuesta por moléculas atraídas entre sí débilmente, de manera que no puede mantener una forma determinada sino que adquiere la del recipiente que lo contiene.</p>
            <p> <strong>Palabras clave: </strong>Densidad, masa, velocidad, presión, caudal. </p>
            <h4 style={{textAlign:"left"}}> Densidad:</h4>
            <p > Relación que existe entre la masa de un cuerpo y su volumen. Su fórmula es: <strong>densidad = masa/volumen</strong></p>
            <p style={{fontSize:"20px"}}> Observa en este video cómo es posible calcular la densidad de los cuerpos:</p>
            <YoutubeEmbed embedId={"sy1_rVAzZBU"} height={videoHeight}/>
            <div>
                <h4>Quiz</h4>
                <h5> Mide tus conocimientos</h5>
                <SingleChoiceQuiz/>
            </div>
        </div>
    )
}

export default FluidMechanics;
