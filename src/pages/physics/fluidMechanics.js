import React, {useEffect, useState} from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SingleChoiceQuiz from "../../components/SingleChoiceQuiz";
import Latex from "react-latex"

function FluidMechanics() {
    const [ masa, setMasa] = useState(null)
    const [ volumen, setVolumen] = useState(null)
    const [densidad, setDensidad] = useState(null)
    const ecuacionDeDensidad = `$$Densidad = \\frac{Masa}{Volumen}$$`

    const videoHeight  = "400px"
    const sections = [
        {name: "volumen", description:"Volumen"},
        {name: "presion", description: "Presión"},
        {name: "distancia", description: "Distancia"},
        {name: "densidad", description: "Densidad"},
        {name: "peso", description: "Peso"},
        {name: "presion_atmosferica", description: "Presión atmosférica"},
        {name: "tiempo", description: "Tiempo"},
        {name: "tension_superficial", description: "Tensión Superficial"},
        {name: "velocidad", description: "Velocidad"},
    ]
    useEffect(()=>{
        setDensidad(masa/volumen)
    },[masa,volumen])

    return (
        <div style={{maxWidth:"800px",textAlign:"justify"}}>
            <h2>Semillero de ciencias</h2>
            <p style={{fontStyle:"italic", textAlign:"center"}}>
                "Aquel que lo intentó y no lo consiguió es superior al que ni lo intentó." -Isaac Newton</p>
            <h4 style={{textAlign:"center"}}>Laboratorio #2</h4>
            <h4 style={{textAlign:"left"}}> Mecánica de fluidos:</h4>
            <p>Se le denomina fluido a la materia compuesta por moléculas atraídas entre sí débilmente, de manera que no puede mantener una forma determinada sino que adquiere la del recipiente que lo contiene.</p>
            <p> En este video podrás ver un poco más sobre los fluidos y su comportamiento.</p>
            <YoutubeEmbed embedId={"G53gvVh230U"} height={videoHeight}/>
            <p> <strong>Palabras clave: </strong>Densidad, masa, velocidad, presión, caudal. </p>
            <h4>Metodología</h4>
            <h4>Propiedades a medir:</h4>
            <ul>
                {sections.map(({description})=>{
                    return(
                        <li>{description}</li>
                    )
                })}
            </ul>
            <h4 style={{textAlign:"left"}}> Densidad:</h4>
            <p > Relación que existe entre la masa de un cuerpo y su volumen. Su fórmula es: <strong>densidad = masa/volumen</strong></p>
            <p style={{fontSize:"20px"}}> Observa en este video cómo es posible calcular la densidad de los cuerpos:</p>
            <YoutubeEmbed embedId={"sy1_rVAzZBU"} height={videoHeight}/>


            <h4>Masa, volumen y densidad</h4>
            <p>
                Para este laboratorio los científicos deben presentar los materiales requeridos; teniendo en cuenta el correcto uso de cada implemento así: Tome la probeta, pésela y registre el dato, luego vierta la sustancia y pese de nuevo (registre el peso obtenido),
            </p>
            <h5>Materiales</h5>
            <p>Probeta, jabón de cocina líquido, aceite y agua, roca, tierra, metro</p>
            <Disclaimer text={"¡Querido científico, tu seguridad es siempre lo más importante!. Este experimento debe ser realizado bajo la supervición de un adulto"} />
            <h3>Resultados</h3>
            <ol>
                <li> Registre el dato del peso de la probeta o el recipiente en gramos.</li>
                <li>Vierta la sustancia dentro de la probeta y registre el valor de la masa obtenida en gramos.</li>
                <li>Utilizando la regla que aparece en la probeta, registre el valor del volumen obtenido de la sustancia en centímetros cúbicos.</li>
                <li>Calcule la densidad del fluido con la fórmula</li>
            </ol>
            <Latex>
                {ecuacionDeDensidad}
            </Latex>
            <hr/>
            <DensityCalculator/>
            <div>
                <h4>Quiz</h4>
                <h5> Mide tus conocimientos</h5>
                <SingleChoiceQuiz/>
            </div>
        </div>
    )
}

export default FluidMechanics;


const Disclaimer = ({text})=>{
    return(
        <div style={{padding:"10px",background: "#c1eeee"}}>
            {text}
        </div>
    )
}

const DensityCalculator = ()=>{
    const [ masa, setMasa] = useState(null)
    const [ volumen, setVolumen] = useState(null)
    const [densidad, setDensidad] = useState(null)
    useEffect(()=>{
        setDensidad(masa/volumen)
    },[masa,volumen])

    const formula =  `$$Densidad = \\frac{Masa}{Volumen}$$`

    useEffect(()=>{
        let nuevaDensidad =  masa/volumen

        setDensidad(nuevaDensidad.toFixed(3))
    },[masa,volumen])

    return(
        <div style={{backgroundColor:"#f6f1e9",padding:"10px", width:"100%"}}>
            <h4>Calculadora de densidad</h4>
            <p>Ingresa la masa del objeto en gramos (g) y luego ingresa su volumen en <strong><Latex>{"$$cm^3$$"}</Latex></strong></p>
            <p>
                <label>Masa: </label>
                <input
                    placeholder={"(g)"}
                    onChange={(e)=>setMasa(e.target.value)}
                    type={"number"}
                />
            </p>
            <p>
                <label>Volumen: </label>
                <input
                    placeholder={"(cm^3)"}
                    onChange={(e)=>setVolumen(e.target.value)}
                    type={"number"}
                />
            </p>
        <div style={{backgroundColor:"#e3f3fc", padding:"10px"}}>
            <p>
                <Latex>
                    {`$$Densidad = \\frac{Masa}{Volumen} = \\frac{${masa||""}}{${volumen||""}} \\frac{g}{cm^3} = ${!densidad || isNaN(densidad)?"":densidad}  \\frac{g}{cm^3} $$`}
                </Latex>
            </p>
        </div>

        </div>
    )
}