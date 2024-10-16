import './index.scss';
import { Link } from "react-router-dom";

export default function Rodape() {
    return(
        <div className="rodape">
                <div className="rodainfo1">
                    <p>Instituto Nossa Senhora de fátima</p>
                    <div className="imagens">
                        <Link to=""><img src="/assets/images/instagram.svg" alt="insta" /></Link>
                        <a href="www.linkedin.com/in/joaovictorortelandonascimento"><img  src="/assets/images/linkedin.svg" alt="linkedin" /></a>          
                        <Link to=""><img src="/assets/images/twitter-x.svg" alt="whatsapp" /></Link>
                        
                    </div>
                
                </div>
                    <div className="RiscoBranco"></div>
                    <div className="meioRodape">

                            <h1>Paginas</h1>
                        <div className="meio">
                            <div className="esquerda">
                                <Link to="/">Home</Link>
                                <Link to="/">Corretor online</Link>
                                <Link to="/contato">Contatos</Link>
                                <Link to="/sobree">Sobre nós</Link>
                            </div>

                            <div className="direita">
                                <h1></h1>
                                <Link to="/">Reclame aqui</Link>
                                <Link to="/">Email de Contato</Link>
                                <Link to="/">Sustentabilidade</Link>

                            </div>
                        </div>

                    </div>
                    <div className="reta">
                        <div className="RiscoBranco2"></div>
                    </div>
                    <h1 id='fimRodape'>© 2024 Instituto Nossa Senhora de Fátima | Cursos Profissionalizantes.</h1></div>
    )
}