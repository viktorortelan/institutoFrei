import './index.scss';
import {Link} from 'react-router-dom';


export default function Cabecalho() {

    return(
        <div className="cabecalho">
            <div className="infoEsquerda">
                <Link to='/'><img src="/assets/images/logoFrei.png" alt="logo" /></Link>
                <h1>Instituto Nossa Senhora de fátima</h1>
            </div>

            <div className="infosDireita">
                <Link to='/'>Home</Link>
                <Link to='/'>Sobre</Link>
                <Link to='/'>cursos</Link>
                <Link to='/'>noticias</Link>
                <Link to='/'>Parcerias</Link>
                <Link to='/'>Contatos</Link>
                <Link to='/'>login</Link>
            </div>
        </div>
    )
}