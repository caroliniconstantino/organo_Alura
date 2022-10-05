import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const minuscula = props.label.toLowerCase()
    const placeholderModificada = `Digite seu ${minuscula}`

    const inputChange = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={inputChange} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto