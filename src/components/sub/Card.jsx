import gif from '../img/portfolio.gif'

const Card = (props) => {

    console.log(props.info)

    return(
        <>
            <h3 className='tittle3'>{props.info.tittle}</h3>
            <article className='card'>
                <a href="#" className='link'>
                    <img src={props.info.img} className='gif'/>
                </a>
                <div className='container-work'>
                    <p className='work'>{props.info.frontEnd}</p>
                    <p className='work'>{props.info.backEnd}</p>
                </div>
            </article>
        </>
    )
}

export default Card