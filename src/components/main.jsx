import icon from './img/icon/icon.jpeg'
import html from './img/icon/HTML.png'
import css from './img/icon/CSS3_logo.png'
import py from './img/icon/Python.png'
import js from './img/icon/javascript.png'
import react from './img/icon/react.png'
import psql from './img/icon/PSQL.png'
import html3d from './img/3d/html-3d.png'
import js3d from './img/3d/javascript-3d.png'
import css3d from './img/3d/css3-3d.png'
import react3d from './img/3d/react-3d.png'
import py3d from './img/3d/python-3d.png'
import psql3d from './img/3d/psql-3d.png'
import Card from './sub/Card'
import gif from './img/portfolio.gif'
import agenda from './img/agenda.png'


const Main = () => {
    
    const music_player = {
        img: gif,
        frontEnd: 'UI-Frontend: React, javaScript',
        backEnd: 'API-Backend: Python, Flask, Postgresql',
        tittle: 'Portfolio-landing page',
        url: '#'
    }

    const agenda_1 = {
        img: agenda,
        frontEnd: 'UI: JavaScript-vanilla',
        backEnd: 'API: python, Flask, Postgresql',
        tittle: 'Agenda ',
        url: 'https://ruben-agenda.netlify.app'
    }
    
    return(
        <main>
            <div className='main-container'>
                <div>
                    <img src={icon} className='icon' />
                </div>
                <article className='container'>
                    <h2>¡Si lo puedes imaginar, lo puedes programar!</h2>
                    <p>Resumiendo mi trabajo, soy programador fullstack, dedico mi tiempo como mi conocimiento a la disposición de empresas y emprendedores que desean mejorar tanto sus ventas como su imagen, mis habilidades son el desarrollo web, la automatización de tareas, y el marketing digital.
</p>
                </article>
            </div>
            <Technologies />
            <div className='proyectos'>
                    <h2>Proyectos.</h2>
                    <Card info={music_player} />
                    <Card info={agenda_1} />
            </div>
        </main>
    )
}

const Technologies = () => {
    function setView(e) {
        let $target = e.target.src
        let $3dimg = document.getElementById('tech3d')
        let $3dtittle = document.getElementById('tech-tittle')

        if($target.substr(21) === js) {
            $3dimg.src = js3d
            $3dtittle.innerText = 'JavaScript'
        }
        if($target.substr(21) === html) {
            $3dimg.src = html3d
            $3dtittle.innerText = 'html'
  
        } 
        if($target.substr(21) === css) {
            $3dimg.src = css3d
            $3dtittle.innerText = 'css'
        } 
        if($target.substr(21) === react) {
            $3dimg.src = react3d
            $3dtittle.innerText = 'react'
        } 
        if($target.substr(21) === py) {
            $3dimg.src = py3d 
            $3dtittle.innerText = 'python'
        }
        if($target.substr(21) === psql) {
            $3dimg.src = psql3d
            $3dtittle.innerText = 'PostgreSQL'
        }
    }

    const Buttons = () => {
        return (
            <>
                <button onClick={(e) => {setView(e)}}><img src={js} className="techbtn" /></button>
                <button onClick={(e) => {setView(e)}}><img src={html} className="techbtn" /></button>
                <button onClick={(e) => {setView(e)}}><img src={css} className="techbtn"/></button>
                <button onClick={(e) => {setView(e)}}><img src={react} className="techbtn"/></button>                    
                <button onClick={(e) => {setView(e)}}><img src={py} className="techbtn"/></button>                    
                <button onClick={(e) => {setView(e)}}><img src={psql} className="techbtn"/></button>                    
            </>
        )
    }
    
    return(
        <div className="view3d">
            <article className='tech-container'>
                <h2>Tecnologías.</h2>
                <Buttons />          
            </article>
                <div>
                    <img src={js3d} className="tech3d" id="tech3d"/>
                    <h3 className='tech-tittle' id="tech-tittle">javascript</h3>
                </div>
        </div>
    )
}

export default Main