import Card from '../Card/Card'
import './Time.css'

const Time = ({ colaboradores, corSecundaria, corPrimaria, nome }) => {
    return(
        (colaboradores.length > 0) && <section className='time'style={{ backgroundColor: corSecundaria }}>
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => <Card key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={corPrimaria}/>)}
            </div>
        </section>
    )
}

export default Time