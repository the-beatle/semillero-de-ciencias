import React, {useMemo} from "react";
import uno from '../../media/images/1.jpeg';
import dos from '../../media/images/2.jpeg';
import tres from '../../media/images/3.jpeg';
import cuatro from '../../media/images/4.jpeg';
import cinco from '../../media/images/5.jpeg';
import CustomImage from "../../components/CustomImage";
import ScatterPlot from "../../components/Scatter";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import debounce from "../../utils/debounce";


function FallingObjectsLab() {
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
    const url2 = "https://1.bp.blogspot.com/-YfyfpkPDvvg/X3mAt0K26FI/AAAAAAAAZaY/xOlJDSmT7KUs4T8jmjUFKNdj6xmkeBH9gCLcBGAsYHQ/s1000/Piano_inclinato_inv_1041_IF_21341.jpg"

    const videoHeight = useMemo(()=>{
        return dimensions.width < 600 ? "300px" : "500px"
    },[dimensions])


    return (
        <div style={{maxWidth:"800px",textAlign:"justify"}}>

            

            <h2 style={{textAlign:"center"}}> Física mecánica </h2>
        
            <p style={{fontStyle:"italic", textAlign:"center"}}>
                "No sé qué podré parecerle yo al mundo, <br/> pero tengo para mí que no he sido sino un muchacho que juega a la orilla del mar,<br/> que se distrae de cuando en cuando <br/> al encontrar un guijarro más liso <br/> o una concha más bella que las habituales, <br/> mientras el gran océano de la verdad se extiende ante mí aún por descubrir." <br/> <cite> Isaac Newton </cite> </p>
            <h2 style={{textAlign:"left"}}>Laboratorio #1: Caída libre y tratamiento de datos experimentales</h2>
            <h2>Palabras clave:</h2><p>Caída libre, gravedad, masa, peso.</p>
            <h2>Introducción</h2>
            <p>Se denomina caída libre al movimiento de un cuerpo bajo la acción exclusiva de un campo gravitatorio.</p>
            <h2>Gravedad</h2>
            <p>Los objetos con masa se atraen de forma natural, a este efecto se le conoce como la gravedad. Su intensidad depende de la cantidad de masa que tienen los objetos.</p>
            <h2>Ejemplo #1:</h2><p>En este video se puede observar claramente cómo la luna gira al rededor de la tierra y a su vez la tierra gira al rededor del sol por el efecto de gravitacional.
            </p>
             
            <YoutubeEmbed embedId={"1sj2otIjZfM"} height={videoHeight}/>
            <h2>Ejemplo #2:</h2><p>Aquí podemos observar como el sol y los planetas que lo orbitan y también giran al rededor de cuerpos con mayor gravedad, como los agujeros negros.</p>
       
            
            <YoutubeEmbed embedId={"x2bfH3wGswo"} height={videoHeight}/>
            <h2>
                ¿Qué es la masa de un objeto?
            </h2>
            <p>La masa es la cantidad de materia que tienen los cuerpos. Se mide con una báscula o pesa (como le llamamos comunmente)</p>
            <YoutubeEmbed embedId={"26-Cy2nT0lI"} height={videoHeight}/>
            <h2>¿Te has preguntado cuál es tu peso en la luna?</h2> <p>Si tu masa es de 56 kg, tranquio esta no cambia... Pero tu peso si puede cambiar, la gravedad en la luna es menor, por esto en la luna tu peso será menor que en la tierra.</p>
            <CustomImage src={url3}/>
            <h2>
                ¿Qué es el peso de un objeto?
            </h2>
            <p>
                El peso mide qué tan fuerte la gravedad atrae la masa de un cuerpo. Generalmente se mide en Newtons.
            </p>
            <YoutubeEmbed embedId={"jy5UDtRmbEA"} height={videoHeight}/>
            <h2>
                Caída libre:
            </h2> <p>Este video lo realizaron los científicos del semillero de ciencia y turaleza del colegio Católico la Inmaculada, mientras hacían una recopilación de datos experimentales sobre la altura y tiempo en la caída de los cuerpos, al rededor de la pregunta ¿Cuál objeto cae primero?
                Observa lo que sucedió: </p>

            <YoutubeEmbed embedId={"35geCfUIGgc"} height={videoHeight}/>

            <p>El filósofo griego <strong>Aristóteles (384-322) a.C</strong> Asumió que los objetos más pesados caían más rápido que los más ligeros.</p>

            <p> Dos mil años después, <strong>Galileo Galilei</strong> demostró que en realidad todos los objetos caen al mismo tiempo sin importar el peso de estos.
        </p>

            <h2>Diseño experimental de Galileo:</h2>
            <CustomImage src={url2}/>
            <YoutubeEmbed embedId={"ZBr8Q2ROX9s"} height={videoHeight}/>

            <p>En esa época era muy difícil medir con precisión el tiempo que tarda un objeto en caer en una distancia vertical (como lo observamos en el experimento). Galileo se dio cuenta de que el movimiento de un objeto en caída libre era equivalente al movimiento de una esfera rodando por un plano inclinado. </p>

            <h2>Experimento moderno de caida libre sin resistencia del aire.</h2>
            <YoutubeEmbed embedId="xzkgJUBS2tM" height={videoHeight}/>

            <h2>Introducción al tratamiento de datos experimentales</h2>
            <p>Los datos experimentales son producidos por la medición, método de ensayo o diseño experimental. La medida experimental es la base del conocimiento científico. Midiendo podemos comprobar las hipótesis o teorías científicas.
            </p>


            <h2> Taller práctico     
            </h2> <p>Reúnete con tus compañeros de equipo y intenta calcular la altura a la cuál fueron arrojados los objetos. Utiliza la fórmula de Newton para caida libre,
                <strong>h = g.t<sup>2</sup></strong>, donde h representa la altura del segundo piso, g representa la constante de gravedad <strong>9.8 m/s<sup>2</sup></strong> y t el tiempo.</p>
            <h4>Materiales:</h4>
            <p>Báscula, objetos con diferentes peso, cronómetro y mucha creatividad!</p>
            <h4>Metodología:</h4>
            <ol>
                <li>Se obtiene la masa del objeto usando una báscula digital. </li>
                <li>De ser posible, se mide la altura a la cual el objeto va a ser lanzado.</li>
                <li>Se deja caer el objeto y se inicia el conteo del tiempo usando el cronómetro (puede ser el cronómetro del celular).</li>
                <li>Se toma el tiempo en el momento justo cuando el objeto toca el suelo.</li>
                <li>Se registran los valores en una tabla cuyas columnas son, descripción del objeto, masa en gramos, altura a la cual fue lanzado en metros, y el tiempo que tardó el objeto en caer en segundos.</li>
            </ol>
            <h4>Resultados:</h4>
            <p>
                La siguiente gráfica muestra los resultados del experimento de caída libre realizado por los científicos del Colegio Católico. En esta parte de la práctica, se registraron los tiempos que tardaron en caer objetos de diferente masa desde un segundo piso.
            </p>
            <h2>Representación gráfica de los datos medidos por los científicos:</h2>
            <ScatterPlot/>
           
            <h2>Registro fotográfico</h2>
            <table Class="styled">
                <tr>
            <td><CustomImage src={uno}/></td>
            <td><CustomImage src={dos}/></td>
            <td><CustomImage src={tres}/></td>
            <td><CustomImage src={cuatro}/></td>
            <td><CustomImage src={cinco}/></td>
            </tr> 
            </table>
            <h4 style={{fontStyle:"italic"}}>Lo hicieron muy bien científicos, felicitaciones!</h4>
        </div>
    )
}

export default FallingObjectsLab;
