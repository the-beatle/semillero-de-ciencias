import './App.css';
import YoutubeEmbed from "./YoutubeEmbed";
import ScatterPlot from "./Scatter";

function App() {
    const url3 = "https://siliseed.com/wp-content/uploads/2018/01/el-peso-y-la-masa.jpg\n"
    const url = "https://1.bp.blogspot.com/-1jdpORtnR2Q/X3mCgMm3FvI/AAAAAAAAZak/AodhOQArzXsIaqFDpu2vNqRVmZ5ALq2OwCLcBGAsYHQ/s972/comparison.png"
    const url2 = "https://1.bp.blogspot.com/-YfyfpkPDvvg/X3mAt0K26FI/AAAAAAAAZaY/xOlJDSmT7KUs4T8jmjUFKNdj6xmkeBH9gCLcBGAsYHQ/s1000/Piano_inclinato_inv_1041_IF_21341.jpg"
  return (
    <div className="App">
      <div style={{padding:"30px"}}>
          <h1>SEMILLERO DE CIENCIAS</h1>
        <h2>Caída libre y tratamiento de datos experimentales</h2>
          <h3>Introducción al tratamiento de datos experimentales</h3>
          <p>Los datos experimentales son producidos por la medición, método de ensayo o diseño experimental. La medida experimental es la base del conocimiento científico. Midiendo podemos comprobar las hipótesis o teorías científicas.

          </p>
          <h4>Representación gráfica de los datos medidos por los científicos</h4>
          <ScatterPlot/>
          <h4>¿Qué es un error de medición?</h4>
          <p>Diferencia del resultado calculado con respecto al resultado verdadero (medido)</p>
          <h4>
              ¿Qué es la masa de un objeto?
          </h4>
          <p>La masa es la cantidad de materia que tienen los cuerpos. Se mide con una balanza o pesa (como le llamamos comunmente)</p>
          <YoutubeEmbed embedId={"26-Cy2nT0lI"}/>
          <img
              src={url3}
              alt="new"

          />
          <h4>
              ¿Qué es el peso de un objeto?
          </h4>
          <p>
              El peso mide qué tan fuerte la gravidad atrae la masa de un cuerpo. Generalmente se mide en Newtons.
          </p>
          <YoutubeEmbed embedId={"jy5UDtRmbEA"}/>
          <h4>Gravedad</h4>
          <p>La fuerza de gravedad en la tierra y los objetos se atraen y esta atracción es una fuerza. Su intensidad depende de la cantidad de masa que tienen los objetos.</p>

          <YoutubeEmbed embedId={"1sj2otIjZfM"}/>
          <YoutubeEmbed embedId={"x2bfH3wGswo"}/>

          <h4>
              ¿Qué sucede si lanzamos varios objetos de diferente masa desde la misma altura?, ¿Qué se pudo observar en el ejercicio de toma de datos experimentales?
          </h4>
          <YoutubeEmbed embedId="xzkgJUBS2tM" />


          <h4>
              Investiga quién fue Newton, Galileo Galiley y Aristóteles, y cuáles fueron sus aportes a la física          </h4>

            <p>El filósofo griego <strong>Aristóteles (384-322) aC</strong> Asumió que los objetos más pesados caían más rápido que los más ligeros. Dos mil años después, <strong>Galileo Galilei</strong> demostró que en realidad todos los objetos caen al mismo tiempo sin importar el peso de estos</p>
              <img
                  src={url}
                  alt="new"

              />

          <p>En esa época era muy difícil medir con presición el tiempo que tarda un objeto en caer en una distancia vertical (como lo observamos en el experimento). Galileo se dio cuenta de que el movimiento de un objeto en caída libre era equivalente al mooiento de una esfera rodando por un plano inclinado. </p>
              <img
                  src={url2}
                  alt="new"

              />
          <YoutubeEmbed embedId={"ZBr8Q2ROX9s"}/>


      </div>
    </div>
  );
}

export default App;


