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
                {escuro ? <span style={{ color: 'white' }}>Minhas</span> : <span>Minhas</span>}
                <span>Tecnologias</span>
                <span style={escuro ? { color: 'white' } : { color: 'var(--gray)' }}>Todas aprendidas no curso de
                    <br />
                    Desenvolvimento de Software da Cubos Academy. <br />
                    Estou em constante aprendizado sempre estudando <br />
                    para obter mais conhecimento. <br /> No momento estou estudando TypeScript.</span>
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
                        txt1='Reutilização de código através da criação de componentes'
                        txt2='criação de rotas com o react-router-dom'
                        txt3='escrita de códigos reativos'
                        txt4='utilização de hooks - useState, useEffect.'
                    />

                </div>


                <div onMouseOver={() => setModalHtml(true)} onMouseLeave={() => setModalHtml(false)} >

                    <Card
                        image={htmlCss}
                        title={'HTML + CSS'}
                        html={true}
                        modal={modalHtml}
                        txt1='Organização da estrutura e do conteúdo de um site'
                        txt2='Estilização do mesmo de forma fluida e responsiva'
                    />
                </div>


                <div onMouseOver={() => setModalJs(true)} onMouseLeave={() => setModalJs(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'}
                        title={'JavaScript'}
                        modal={modalJs}
                        semPonto={true}
                        txt1='Linguagem utilizada para a criação de APIs e para manipulação da DOM'
                    />
                </div>

                <div onMouseOver={() => setModalTs(true)} onMouseLeave={() => setModalTs(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'}
                        title={'TypeScript'}
                        modal={modalTs}
                        semPonto={true}
                        txt1='Estudando...'
                    />
                </div>


                <div onMouseOver={() => setModalSql(true)} onMouseLeave={() => setModalSql(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'}
                        title={'PostgreSQL'}
                        modal={modalSql}
                        txt1='Criação de tabelas'
                        txt2='Inserir, atualizar e deletar dados'
                        txt3='Executar o CRUD'
                        txt4='Comunicação com o backend através de ferramentas como o "Axios"'
                    />
                </div>


                <div onMouseOver={() => setModalNode(true)} onMouseLeave={() => setModalNode(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'}
                        title={'Node js'}
                        modal={modalNode}
                        txt1='Criação de API Rest'
                        txt2='Autenticação com JWT'
                        txt3='criptografia com SecurePassword'
                        txt4='criação de middlewares'
                    />
                </div>


                <div onMouseOver={() => setModalEx(true)} onMouseLeave={() => setModalEx(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'}
                        title={'Express'}
                        modal={modalEx}
                        semPonto={true}
                        txt1='Criação de Api do zero desde a instalação do express até a criação
                        de rotas utilizando os verbos HTTP.'
                    />
                </div>

                <div onMouseOver={() => setModalFigma(true)} onMouseLeave={() => setModalFigma(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'}
                        title={'Figma'}
                        modal={modalFigma}
                        semPonto={true}
                        txt1='Visualização de layouts a fim de reproduzi-los com fidelidade.'
                    />
                </div>

                <div onMouseOver={() => setModalGit(true)} onMouseLeave={() => setModalGit(false)}>
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'}
                        title={'Git'}
                        modal={modalGit}
                        txt1='Versionamento'
                        txt2='Criação e mesclagem de branchs'
                        txt3='Pull request...'
                    />
                </div>

                <div onMouseOver={() => setModalGithub(true)} onMouseLeave={() => setModalGithub(false)} >
                    <Card
                        image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'}
                        title={'Github'}
                        modal={modalGithub}
                    />
                </div>


                <div className='blur' style={{ background: 'var(--purple)', left: '50rem', top: '30rem' }}>

                </div>
            </div>
        </div >
    )
}

export default MyTechnologies