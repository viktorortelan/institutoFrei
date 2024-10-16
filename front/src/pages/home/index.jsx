import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { useState } from 'react';
import Rodape from '../../components/rodape';


export default function Home() {
   
    const [activeImage, setActiveImage] = useState(null);

   
    const images = [
        { src: "/assets/images/cv.jpg", alt: "Curso Técnico 1" },
        { src: "/assets/images/adm.jpg", alt: "Curso Técnico 2" },
        { src: "/assets/images/informatica.jpg", alt: "Curso de Idiomas 1" },
        { src: "/assets/images/ingles.jpg", alt: "Curso de Idiomas 2" }
    ];

    return (
        <div className="home">
            <Cabecalho/>

            <div className="all">
                <div className="infoTitulo">
                    <h1>Bem-vindo ao Instituto Nossa Senhora de Fátima! Preparamos você para o futuro com nossos cursos técnicos e de idiomas. As vagas para novas turmas abrem no dia 25, não perca essa oportunidade!</h1>
                </div>

                <div className="carrossel">
                 
                    {activeImage && (
                        <div className="imagem-grande">
                            <img src={activeImage.src} alt={activeImage.alt} />
                        </div>
                    )}

                  
                    <div className="miniaturas">
                        {images.map((image, index) => (
                            <div key={index} className="miniatura" onClick={() => setActiveImage(image)}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="botoes">
                    <button>Inscreva-se</button>
                    <button>nosso whatsapp</button>
                </div>
            </div>

            <div className="risco">
                <h1>Veja Nossos Cursos</h1>
                <h2>Inscreva-se nos nossos cursos profissionalizantes e comece sua jornada!</h2>
            </div>

            <div className="infoCurso">
                <div className="titulo">
                    <h1>Destaques</h1>
                </div>

                <div className="cartoes">
                    <div className="card">
                        <img src="/assets/images/ingles.jpg" alt="" />
                        <div className="infos">
                            <h1>Ingles</h1>
                            <p>Domine o idioma mais falado no mundo! No curso de Inglês do Instituto Nossa Senhora de Fátima, você vai desenvolver habilidades em leitura, escrita, compreensão auditiva e fala, desde o básico até o avançado. Prepare-se para oportunidades internacionais!</p>

                            <button>Inscrições abertas!</button>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/assets/images/adm.jpg" alt="" />
                        <div className="infos">
                            <h1>Administração</h1>
                            <p>Desenvolva suas habilidades de gestão e liderança! O curso de Administração do Instituto Nossa Senhora de Fátima oferece uma base sólida em estratégias empresariais, finanças, marketing e gestão de pessoas, preparando você para o mercado de trabalho.</p>

                            <button>Inscrições abertas!</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/images/informatica.jpg" alt="" />
                        <div className="infos">
                            <h1>Informatica</h1>
                            <p>Esteja preparado para o mundo digital! No curso de Informática do Instituto Nossa Senhora de Fátima, você aprenderá desde os fundamentos da tecnologia até conceitos avançados de programação, redes e banco de dados. Ideal para quem deseja se destacar na era da informação.</p>

                            <button>Inscrições abertas!</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/images/cv.jpg" alt="" />
                        <div className="infos">
                            <h1>Comunicação Visual</h1>
                            <p>Liberte sua criatividade e domine as ferramentas do design! No curso de Comunicação Visual do Instituto Nossa Senhora de Fátima, você aprenderá a criar projetos gráficos, vídeos e layouts digitais, desenvolvendo suas habilidades para trabalhar em diversas áreas do mercado criativo.</p>

                            <button>Inscrições abertas!</button>
                        </div>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    );
}
