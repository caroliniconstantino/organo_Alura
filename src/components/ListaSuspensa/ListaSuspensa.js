import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select
                onChange={event => props.aoAlterado(event.target.value)}
                value={props.value}
            >
                <option value={""}>Escolha uma opção</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa