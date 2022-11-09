import React, { useEffect, useMemo, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import SingleChoiceQuiz from "../../components/SingleChoiceQuiz";
import Latex from "react-latex";
import BarPlot from "../../components/barPlot";

function FluidMechanics() {
  const [masa, setMasa] = useState(null);
  const [volumen, setVolumen] = useState(null);
  const [densidad, setDensidad] = useState(null);
  const ecuacionDeDensidad = `$$Densidad = masa/volumen$$`;

  const videoHeight = "400px";
  const sections = [
    { name: "volumen", description: "Volumen" },
    { name: "presion", description: "Presión" },
    { name: "distancia", description: "Distancia" },
    { name: "densidad", description: "Densidad" },
    { name: "masa", description: "Peso" },
    { name: "presion_atmosferica", description: "Presión atmosférica" },
    { name: "tiempo", description: "Tiempo" },
    { name: "tension_superficial", description: "Tensión Superficial" },
    { name: "velocidad", description: "Velocidad" },
    { name: "caudal", description: "Caudal" },
  ];
  useEffect(() => {
    setDensidad(masa / volumen);
  }, [masa, volumen]);

  return (
    <div style={{ maxWidth: "800px", textAlign: "justify" }}>
      <h2 style={{ textAlign: "center" }}> Mecánica de fluidos:</h2>
      <p style={{ fontStyle: "italic", textAlign: "center" }}>
        "Eureka!" -Arquímedes
      </p>

      <p>
        Un fluido es una sustancia que puede escurrir fácilmente y que puede
        cambiar de forma debido a la acción de pequeñas fuerzas. Por lo tanto,
        el término fluido incluye a los líquidos y a los gases.
      </p>
      <YoutubeEmbed embedId={"G53gvVh230U"} height={videoHeight} />
      <p>
        <strong>Palabras clave: </strong>
        {sections.map(({ description }) => {
          return <span>{description.toLowerCase() + ", "}</span>;
        })}
      </p>

      <h4 style={{ textAlign: "center" }}>Laboratorio #2</h4>

      <h4>Masa, volumen y densidad</h4>
      <h4 style={{ textAlign: "left" }}> Densidad:</h4>
      <p> Relación que existe entre la masa de un cuerpo y su volumen.</p>
      <Latex>{ecuacionDeDensidad}</Latex>
      <p style={{ fontSize: "20px" }}>
        {" "}
        Observa en este video cómo es posible calcular la densidad de los
        cuerpos:
      </p>
      <YoutubeEmbed embedId={"sy1_rVAzZBU"} height={videoHeight} />
      <h4>Metodología</h4>
      <p>
        <li>Jabón Líquido</li>
        <li>Agua</li>
        <li>Roca</li>
        <li>Suelo</li>
      </p>
      <h5>Materiales</h5>
      <p>
        Probeta o recipiente, jabón de cocina líquido, aceite ,agua, roca,
        suelo.
      </p>
      <Disclaimer
        text={
          "¡Tu seguridad es siempre lo más importante!. Este experimento debe ser realizado bajo la supervición de un adulto"
        }
      />
      <h5>Cómo calcular la densidad del agua, el jabón líquido y el suelo?</h5>
      <ol>
        <li>
          {" "}
          Registre el dato del peso de la probeta o el recipiente en gramos.
        </li>
        <li>
          Vierta la sustancia dentro de la probeta y registre el valor de la
          masa obtenida en gramos.
        </li>
        <li>
          Utilizando la regla que aparece en la probeta, registre el valor del
          volumen obtenido de la sustancia en centímetros cúbicos.
        </li>
        <li>
          Calcule la densidad del fluido. Para calcular la masa es necesario
          restar el valor de la probeta o el recipiente. Use la fórmula.
        </li>
      </ol>
      <Latex>{ecuacionDeDensidad}</Latex>
      <h5 style={{ fontStyle: "italic", color: "green" }}>
        Cómo calcular el volumen de la roca?
      </h5>
      <p style={{ fontStyle: "italic" }}>
        Discute con tus compañero y tu asesor, cuál es la mejor forma de
        calcular el volumen cuando el objeto es un sólido irregular.
      </p>

      <hr />
      <DensityCalculator />
      <h4>Resultados</h4>
      <DensityResults />
      <div>
        <h5> Mide tus conocimientos</h5>
        <SingleChoiceQuiz />
        <h5>Proyecto filtro</h5>
      </div>
    </div>
  );
}

export default FluidMechanics;

const Disclaimer = ({ text }) => {
  return (
    <div
      style={{
        padding: "10px",
        background: "#c1eeee",
        fontStyle: "italic",
        fontSize: "medium",
      }}
    >
      {text}
    </div>
  );
};

const DensityCalculator = () => {
  const [masa, setMasa] = useState(null);
  const [volumen, setVolumen] = useState(null);
  const [densidad, setDensidad] = useState(null);
  useEffect(() => {
    setDensidad(masa / volumen);
  }, [masa, volumen]);

  const formula = `$$Densidad = \\frac{Masa}{Volumen}$$`;

  useEffect(() => {
    let nuevaDensidad = masa / volumen;

    setDensidad(nuevaDensidad.toFixed(2));
  }, [masa, volumen]);

  return (
    <div
      style={{
        backgroundColor: "rgba(246,243,218,0.7)",
        padding: "10px",
        width: "100%",
      }}
    >
      <h4>Calculadora de densidad</h4>
      <p>
        Ingresa la masa del objeto en gramos (g) y luego ingresa su volumen en
        centímetros cúbicos{" "}
        <strong>
          <Latex>{"$$(cm^3)$$"}</Latex>
        </strong>
      </p>
      <p>
        <label>Masa: </label>
        <input
          placeholder={"(g)"}
          onChange={(e) => setMasa(e.target.value)}
          type={"number"}
        />
      </p>
      <p>
        <label>Volumen: </label>
        <input
          placeholder={"(cm^3)"}
          onChange={(e) => setVolumen(e.target.value)}
          type={"number"}
        />
      </p>
      <div style={{ backgroundColor: "#e3f3fc", padding: "10px" }}>
        <p>
          <Latex>{`$$Densidad = D = \\frac{Masa}{Volumen}$$`}</Latex>
          <br />
          <br />
          <Latex>
            {`$$D =  \\frac{${masa || ""}}{${
              volumen || ""
            }} \\frac{g}{cm^3} $$`}
          </Latex>
          <br />
          <br />
          <Latex>
            {`$$D =   ${
              !densidad || isNaN(densidad) ? "" : densidad
            }  \\frac{g}{cm^3} $$`}
          </Latex>
        </p>
      </div>
    </div>
  );
};

const DensityResults = () => {
  const [jabonLiquido, setJabonLiquido] = useState(0);
  const [agua, setAgua] = useState(0);
  const [roca, setRoca] = useState(0);
  const [suelo, setSuelo] = useState(0);

  const series = useMemo(() => {
    return [
      {
        data: [jabonLiquido, agua, roca, suelo],
      },
    ];
  }, [jabonLiquido, agua, roca, suelo]);

  return (
    <div>
      <p>
        <label>Agua: </label>
        <input
          placeholder={"(g/cm3)"}
          onChange={(e) => setAgua(e.target.value)}
          type={"number"}
        />
      </p>
      <p>
        <label>Jabón Líquido: </label>
        <input
          placeholder={"(g/cm3)"}
          onChange={(e) => setJabonLiquido(e.target.value)}
          type={"number"}
        />
      </p>
      <p>
        <label>Suelo: </label>
        <input
          placeholder={"(g/cm3)"}
          onChange={(e) => setSuelo(e.target.value)}
          type={"number"}
        />
      </p>
      <p>
        <label>Roca: </label>
        <input
          placeholder={"(g/cm3)"}
          onChange={(e) => setRoca(e.target.value)}
          type={"number"}
        />
      </p>
      <BarPlot series={series} />
    </div>
  );
};

