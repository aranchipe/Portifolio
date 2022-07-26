import './style.css'
import Card from '../../Components/Card'
import curriculo from '../../pages/Tecnologias/Lucas Aranchipe Desenvolvedor de Software.pdf'
import { useState } from 'react'
import htmlCss from '../../img/html-css.png'

function MyTechnologies({ escuro }) {
    const [modalHtml, setModalHtml] = useState(false)
    const [modalReact, setModalReact] = useState(false)
    const [modalJs, setModalJs] = useState(false)
    const [modalNode, setModalNode] = useState(false)
    const [modalTs, setModalTs] = useState(false)
    const [modalSql, setModalSql] = useState(false)
    const [modalEx, setModalEx] = useState(false)
    const [modalFigma, setModalFigma] = useState(false)
    const [modalGit, setModalGit] = useState(false)
    const [modalGithub, setModalGithub] = useState(false)
    return (
        <div className='tecnologias'>
            <div className="esquerda">
                {escuro ? <span style={{ color: 'white' }}>My Awesome</span> : <span>My Awesome</span>}
                <span>services</span>
                <span>Lorem ipsum dolasdor sit amet, consectetur adipisicing eli
                    <br />
                    iusto cumque vel quos ad quod ali.</span>
                <a style={{ width: '8rem' }} href={curriculo} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur' style={{ background: '#ABF1FF94', top: '5rem', left: '26rem' }}>

                </div>
            </div>
            <div className="direita">

                <div onMouseOver={() => setModalReact(true)} onMouseLeave={() => setModalReact(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'}
                        title={'React'}
                        modal={modalReact}
                        txt='Reutilização de código através da criação de componentes, criação de rotas
                        com o react-router-dom, escrita de códigos reativos, utilização de hooks -
                        useState, useEffect.  "Utilizado para criar este Portfólio"'
                    />

                </div>


                <div onMouseOver={() => setModalHtml(true)} onMouseLeave={() => setModalHtml(false)} >

                    <Card
                        image={htmlCss}
                        title={'HTML + CSS'}
                        html='html'
                        modal={modalHtml}
                        txt='Organização da estrutua e do conteúdo de um site
                        e estilização do mesmo de forma fluida e responsiva.'
                    />
                </div>


                <div onMouseOver={() => setModalJs(true)} onMouseLeave={() => setModalJs(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'}
                        title={'JavaScript'}
                        modal={modalJs}
                        txt='Linguagem utilizada para a criação de APIs e para manipulação da DOM'
                    />
                </div>

                <div onMouseOver={() => setModalTs(true)} onMouseLeave={() => setModalTs(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'}
                        title={'TypeScript'}
                        modal={modalTs}
                        txt='Estudando...'
                    />
                </div>


                <div onMouseOver={() => setModalSql(true)} onMouseLeave={() => setModalSql(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'}
                        title={'PostgreSQL'}
                        modal={modalSql}
                        txt='Criação de tabelas, inserir, atualizar e deletar dados, executar o CRUD,
                        fazendo a comunicação com o backend através de ferramentas como o "Axios".'
                    />
                </div>


                <div onMouseOver={() => setModalNode(true)} onMouseLeave={() => setModalNode(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'}
                        title={'Node js'}
                        modal={modalNode}
                        txt='Criação de API Rest, Autenticação com JWT, criptografia com SecurePassword,
                        criação de middlewares.'
                    />
                </div>


                <div onMouseOver={() => setModalEx(true)} onMouseLeave={() => setModalEx(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}
                        title={'Express'}
                        modal={modalEx}
                        txt='Criação de Api do zero desde a instalação do express até a criação
                        de rotas utilizando os verbos HTTP.'
                    />
                </div>

                <div onMouseOver={() => setModalFigma(true)} onMouseLeave={() => setModalFigma(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'}
                        title={'Figma'}
                        modal={modalFigma}
                        txt='Visualização de layouts a fim de reproduzi-los com fidelidade.'
                    />
                </div>

                <div onMouseOver={() => setModalGit(true)} onMouseLeave={() => setModalGit(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'}
                        title={'Git'}
                        modal={modalGit}
                        txt='Versionamento, Fluxo de trabalho, criação e mesclagem de branchs, pull request...'
                    />
                </div>

                <div onMouseOver={() => setModalGithub(true)} onMouseLeave={() => setModalGithub(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'}
                        title={'Github'}
                        modal={modalGithub}
                        txt='Versionamento, Fluxo de trabalho, criação e mesclagem de branchs, pull request...'
                    />
                </div>


                <div className='blur' style={{ background: 'var(--purple)', left: '50rem', top: '30rem' }}>

                </div>
            </div>
        </div >
    )
}

export default MyTechnologies