import './App.css';
import YoutubeEmbed from "./YoutubeEmbed";
import ScatterPlot from "./Scatter";
import React, {useMemo} from "react";
import uno from './1.jpeg';
import dos from './2.jpeg';
import tres from './3.jpeg';
import cuatro from './4.jpeg';
import cinco from './5.jpeg';

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


function App() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })
    const url3 = "https://siliseed.com/wp-content/uploads/2018/01/el-peso-y-la-masa.jpg\n"
    const url = "https://1.bp.blogspot.com/-1jdpORtnR2Q/X3mCgMm3FvI/AAAAAAAAZak/AodhOQArzXsIaqFDpu2vNqRVmZ5ALq2OwCLcBGAsYHQ/s972/comparison.png"
    const url2 = "https://1.bp.blogspot.com/-YfyfpkPDvvg/X3mAt0K26FI/AAAAAAAAZaY/xOlJDSmT7KUs4T8jmjUFKNdj6xmkeBH9gCLcBGAsYHQ/s1000/Piano_inclinato_inv_1041_IF_21341.jpg"

    const videoHeight = useMemo(()=>{
        return dimensions.width < 600 ? "300px" : "500px"
    },[dimensions])


    return (
        <div className="App">
            <div className={"App-header"} style={{padding:"30px"}}>
                <div style={{maxWidth:"800px",textAlign:"justify"}}>
                    <h2>Semillero de ciencias</h2>
                    <p style={{fontStyle:"italic", textAlign:"center"}}>
                        "No sé qué podré parecerle yo al mundo, pero tengo para mí que no he sido sino un muchacho que juega a la orilla del mar, que se distrae de cuando en cuando al encontrar un guijarro más liso o una concha más bella que las habituales, mientras el gran océano de la verdad se extiende ante mí aún por descubrir. Isaac Newton"</p>
                    <h4 style={{textAlign:"left"}}>Laboratorio #1. Caída libre y tratamiento de datos experimentales</h4>
                    <p> <strong>Palabras clave: </strong>Caída libre, gravedad, masa, peso. </p>
                    <h4>Introducción</h4>
                    <p>Se denomina caída libre al movimiento de un cuerpo bajo la acción exclusiva de un campo gravitatorio.</p>
                    <h4>Gravedad</h4>
                    <p>Los objetos con masa se atraen de forma natural, a esta fuerza la conocemos como la gravedad. Su intensidad depende de la cantidad de masa que tienen los objetos.</p>

                    <YoutubeEmbed embedId={"1sj2otIjZfM"} height={videoHeight}/>
                    <YoutubeEmbed embedId={"x2bfH3wGswo"} height={videoHeight}/>
                    <h4>
                        ¿Qué es la masa de un objeto?
                    </h4>
                    <p>La masa es la cantidad de materia que tienen los cuerpos. Se mide con una báscula o pesa (como le llamamos comunmente)</p>
                    <YoutubeEmbed embedId={"26-Cy2nT0lI"} height={videoHeight}/>
                    <CustomImage src={url3}/>
                    <h4>
                        ¿Qué es el peso de un objeto?
                    </h4>
                    <p>
                        El peso mide qué tan fuerte la gravedad atrae la masa de un cuerpo. Generalmente se mide en Newtons.
                    </p>
                    <YoutubeEmbed embedId={"jy5UDtRmbEA"} height={videoHeight}/>
                    <h4>
                        Caída libre
                    </h4>

                    <YoutubeEmbed embedId={"35geCfUIGgc"} height={videoHeight}/>

                    <p>El filósofo griego <strong>Aristóteles (384-322) aC</strong> Asumió que los objetos más pesados caían más rápido que los más ligeros.</p>

                        <p> Dos mil años después, <strong>Galileo Galilei</strong> demostró que en realidad todos los objetos caen al mismo tiempo sin importar el peso de estos</p>

                    <h3>Diseño experimental de Galileo</h3>
                    <CustomImage src={url2}/>
                    <YoutubeEmbed embedId={"ZBr8Q2ROX9s"} height={videoHeight}/>

                    <p>En esa época era muy difícil medir con precisión el tiempo que tarda un objeto en caer en una distancia vertical (como lo observamos en el experimento). Galileo se dio cuenta de que el movimiento de un objeto en caída libre era equivalente al movimiento de una esfera rodando por un plano inclinado. </p>

                    <h4>
                        Experimento moderno de caida libre sin resistencia del aire
                    </h4>
                    <YoutubeEmbed embedId="xzkgJUBS2tM" height={videoHeight}/>

                    <h4>Introducción al tratamiento de datos experimentales</h4>
                    <p>Los datos experimentales son producidos por la medición, método de ensayo o diseño experimental. La medida experimental es la base del conocimiento científico. Midiendo podemos comprobar las hipótesis o teorías científicas.
                    </p>

                    <h4>Materiales</h4>
                    <p>Báscula, objetos con diferentes peso, cronómetro y mucha creatividad!</p>
                    <h4>Metodología</h4>
                    <ol>
                        <li>Se obtiene la masa del objeto usando una báscula digital. </li>
                        <li>De ser posible, se mide la altura a la cual el objeto va a ser lanzado.</li>
                        <li>Se deja caer el objeto y se inicia el conteo del tiempo usando el cronómetro (puede ser el cronómetro del celular).</li>
                        <li>Se toma el tiempo en el momento justo cuando el objeto toca el suelo.</li>
                        <li>Se registran los valores en una tabla cuyas columnas son, descripción del objeto, masa en gramos, altura a la cual fue lanzado en metros, y el tiempo que tardó el objeto en caer en segundos.</li>
                    </ol>
                    <h3>Resultados</h3>
                    <p>
                        La siguiente gráfica muestra los resultados del experimento de caída libre realizado por los científicos del Colegio Católico. En esta parte de la práctica, se registraron los tiempos que tardaron en caer, objetos de diferente masa desde un segundo piso.
                    </p>
                    <h4>Representación gráfica de los datos medidos por los científicos</h4>
                    <ScatterPlot/>
                    <p>Reúnete con tus compañeros de equipo y intenta calcular la altura a la cuál fueron arrojados los objetos. Utiliza la fórmula de Newton para caida libre,
                        <strong>h = g.t<sup>2</sup></strong>, donde h representa la altura del segundo piso, g representa la constante de gravedad <strong>9.8 m/s<sup>2</sup></strong> y t el tiempo.</p>

                    <h4>Registro fotográfico</h4>
                    <CustomImage src={uno}/>
                    <CustomImage src={dos}/>
                    <CustomImage src={tres}/>
                    <CustomImage src={cuatro}/>
                    <CustomImage src={cinco}/>
                    <h4 style={{fontStyle:"italic"}}>Lo hicieron muy bien científicos, felicitaciones!</h4>
                </div>
            </div>
        </div>
    )}


const CustomImage = ({src})=>{
    return(
        <image>
            <img
                src={src}
                alt="new"
                width={"100%"}
                height={"auto"}
            />
        </image>
    )
}

export default App;
