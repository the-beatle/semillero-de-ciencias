import React, {Fragment, useEffect, useState} from "react";

const SingleChoiceQuiz = ({src})=>{
    const [totalMark,setTotalMark] = useState(0)
    const [result,setResult] = useState([])

    const updateMark = (mark)=>{
        let currentMark = result
        currentMark.push(mark)
        console.log(result)
        setResult(currentMark)
        setTotalMark(totalMark+mark.mark)
    }

    const quiz =  [
        {
            id:"1",
            text:"Una barra de cobre tiene una masa de 216 gramos y un volumen de 24 cm^3. ¿Cuál es la densidad del cobre?",
            type: "single-choice",
            choices: [
                {id: 1, text: "24 g/cm3", isTheAnswer:false, why: "En este caso la densidad resulta de dividir 216 sobre 24, realiza esta operación en la calculadora de densidades y encuentra la respuesta."},
                {id: 2, text: "13 g/cm3", isTheAnswer: false, why: "En este caso la densidad resulta de dividir 216 sobre 24, realiza esta operación en la calculadora de densidades y encuentra la respuesta."},
                {id: 3, text: "9 g/cm3", isTheAnswer: true, why: "Esta es la respuesta porque la densidad resulta de dividir 216 entre 24"},
                {id: 4, text: "4 g/cm3", isTheAnswer: false, why: "En este caso la densidad resulta de dividir 216 sobre 24, realiza esta operación en la calculadora de densidades y encuentra la respuesta."},
            ]
        },{
            id:"2",
            text:"Una esfera tiene una densidad de 1.2 g/cm3. Teniendo en cuenta que la densidad del agua es aproximadamente 1 g/cm3. ¿Qué sucede si es introducimos la esfera en el agua?",
            type: "single-choice",
            choices: [
                {id: 1, text: "La esfera flota", isTheAnswer:false, why: ""},
                {id: 2, text: "La esfera rebota en el agua", isTheAnswer: false, why: ""},
                {id: 3, text: "La esfera se sumerge", isTheAnswer: true, why: "La esfera se sumerge pues su densidad es mayor que la del agua. Asumiendo que su peso supere la tensión superficial, la esfera sea sólida y el recipiente contenga un volumen de agua suficiente para que la esfera se sumerja"},
                {id: 4, text: "Ninguna de las anteriores", isTheAnswer: false, why: ""},
            ]
        },
        {
            id:"3",
            text:"la densidad del agua es aproximadamente 1 g/cm3. ¿Cuál es la masa de un litro de agua, (el volumen de un litro de agua es 1000cm3)?",
            type: "single-choice",
            choices: [
                {id: 1, text: "Teóricamente la masa de un litro de agua con densidad de 1 g/cm3 es de medio kg", isTheAnswer:false, why: "Despeja la masa de la ecuación de densidad"},
                {id: 2, text: "Teóricamente la masa de un litro de agua con densidad de 1 g/cm3 es de 0.8 kg", isTheAnswer: false, why: "Despeja la masa de la ecuación de densidad"},
                {id: 3, text: "Teóricamente la masa de un litro de agua con densidad de 1 g/cm3 es de 500 gramos", isTheAnswer: false, why: "Despeja la masa de la ecuación de densidad"},
                {id: 4, text: "Teóricamente la masa de un litro de agua con densidad de 1 g/cm3 es de 1000 gramos", isTheAnswer: true, why: "Correct. al despejar la masa en la fórmula d = m/v, m = d*v"},
            ]
        },
        {
            id:"4",
            text:" El objeto A tiene el mismo volumen que el objeto B. Según esta afirmación, encuentre la respuesta verdadera",
            type: "single-choice",
            choices: [
                {id: 1, text: "El objeto A tiene mayor densidad que el objeto B", isTheAnswer:false, why: ""},
                {id: 2, text: "El objeto B tiene diferente masa que el objeto A", isTheAnswer: false, why: ""},
                {id: 3, text: "No es posible determinar si el objeto A tiene mayor densidad que el objeto B", isTheAnswer: true, why: ""},
                {id: 4, text: "El objeto A tiene igual masa que el objeto B", isTheAnswer: false, why: ""},
            ]
        },
        {
            id:"5",
            text:" El objeto A tiene la misma masa que el objeto B. Según esta afirmación, encuentre la respuesta verdadera",
            type: "single-choice",
            choices: [
                {id: 1, text: "El objeto A tiene mayor densidad que el objeto B", isTheAnswer:false, why: ""},
                {id: 2, text: "El objeto B tiene diferente volumen que el objeto A", isTheAnswer: false, why: ""},
                {id: 3, text: "No es posible determinar si el objeto A tiene mayor densidad que el objeto B", isTheAnswer: true, why: ""},
                {id: 4, text: "El objeto A tiene igual masa que el objeto B", isTheAnswer: false, why: ""},
            ]
        }
    ]
    return(
        <div>
            <ol>
                {quiz.map((question)=>{
                    return(
                        <SingleChoiceQuestion updateMark={updateMark} {...question}/>
                    )
                })}
            </ol>
            {`Resultados: ${totalMark} de ${quiz.length}`}
        </div>
    )
}

export default SingleChoiceQuiz;

const SingleChoiceQuestion = ({id,text,choices, updateMark})=>{
    const [isRightAnswer, setIsRightAnswer] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [tries,setTries] = useState(0)
    const [mark, setMark] = useState(null)
    const [alert,setAlert] = useState("")

    const selectEvent = (id)=>{
        const selectedChoice = choices.find(choice=>choice.id===id)
        setIsRightAnswer(selectedChoice.isTheAnswer)
        setTries(tries+1)
        setAlert(selectedChoice.why)

    }

    useEffect(()=>{
        if (isRightAnswer){
            updateMark({
                id, "mark": 1}
            )
            setMark("1 puntos")
            return
        }
        if (tries>2){
            updateMark({id,"mark": 0})
            setMark("0 puntos")
        }
    },[isRightAnswer,tries])

    return(
        <li key={id}>
            <p>{text}</p>
            {alert && <p style={{fontStyle:"italic", fontSize:"medium"}}>{alert}</p>}
            <ol type={"A"}>
                {choices.map((choice)=>{
                    return <Choice disabled={mark?true:false} selectEvent={selectEvent} {...choice}/>
                })}
            </ol>
            {tries < 3 && !isRightAnswer ? <div>{tries} de {3} intentos</div>:""}
            <div>{isCompleted?<div>Completado</div>:""}</div>
            {mark && <div>{`Obtuviste ${mark}`}</div>}
        </li>
    )
}

const Choice = ({id, text, isTheAnswer, why, selectEvent, disabled})=>{
    const [isSelected, setIsSelected] = useState(false)

    const onClick = (id)=>{
        if (disabled) return
        setIsSelected(true)
        selectEvent(id)
    }

    return(
        <Fragment>
            <li key={id} onClick={()=>onClick(id)} >
                <button style={{backgroundColor:isTheAnswer && isSelected?"#d4f6d1":""}} disabled={disabled}>
                    <div style={{textDecoration:isSelected?"line-through":""}}>
                        {text}
                    </div>
                </button>
            </li>
        </Fragment>
    )
}