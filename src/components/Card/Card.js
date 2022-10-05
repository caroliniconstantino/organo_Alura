import "./Card.css"

const Card = ({ imagem, nome, cargo, corDeFundo }) => {
    return (
        <div className="card">
            <div className="cabecalho" style={{ background: corDeFundo }}>
                <img src={imagem} alt="Foto do usuário" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card