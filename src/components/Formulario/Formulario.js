
import { useState } from "react"
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => { 
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Escolha uma opção')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    value={nome}
                    aoAlterado={value => setNome(value)}
                    obrigatorio={true}
                    label="Nome"
                />
                <CampoTexto
                    value={cargo}
                    aoAlterado={value => setCargo(value)}
                    label="Cargo"
                />
                <CampoTexto
                    value={imagem}
                    aoAlterado={value => setImagem(value)}
                    label="Link do GitHub (com ''.png'' no final)"
                />
                <ListaSuspensa 
                    value={props.times}
                    aoAlterado={value => setTime(value)}
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario