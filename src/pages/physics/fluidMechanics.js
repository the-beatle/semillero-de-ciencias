import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";


function FluidMechanics() {
    const videoHeight  = "400px"
    return (
        <div style={{maxWidth:"800px",textAlign:"justify"}}>
            <h2>Semillero de ciencias</h2>
            <p style={{fontStyle:"italic", textAlign:"center"}}>
                "Aquel que lo intentó y no lo consiguió es superior al que ni lo intentó." -Isaac Newton</p>
            <h4 style={{textAlign:"left"}}>Laboratorio #2. Mecánica de fluidos</h4>
            <p> <strong>Palabras clave: </strong>Densidad, masa, velocidad, presión, caudal. </p>
            <h3> Densidad </h3>
            <p > Relación que existe entre la masa de un cuerpo y su volumen. Su fórmula es: <strong>densidad = masa/volumen</strong></p>
            <p style={{fontSize:"20px"}}> Observa en este video cómo es posible calcular la densidad de los cuerpos:</p>
            <YoutubeEmbed embedId={"sy1_rVAzZBU"} height={videoHeight}/>
        </div>
    )
}

export default FluidMechanics;
