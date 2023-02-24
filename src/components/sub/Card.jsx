const Card = (props) => {

    return(
        <>
            <h3 className='tittle3'>{props.info.tittle}</h3>
            <article className='card'>
                <a href={props.info.url} className='link' target='_blank'>
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