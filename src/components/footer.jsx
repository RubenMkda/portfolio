import facebook from './img/icon/facebook.svg'
import what from './img/icon/whatsapp.svg'
import discord from './img/icon/discord.svg'

const Footer = () => {

    const Buttons = () => {
        return(
            <ul>
                <li>
                    <button className='socialbtn'>
                        <a href="https://www.facebook.com/ruben.moncada.547/" target='_blank'>
                            <img src={facebook}/>
                        </a>
                        </button>
                    </li>
                <li>
                    <button className='socialbtn' >
                        <a href="https://api.whatsapp.com/send?phone=584242932312&text=hola,%20qué%20tal?" target='_blank'>
                            <img src={what} />
                        </a>
                        </button>
                    </li>
                <li>
                    <button className='socialbtn' >
                        <a href="https://discordapp.com/users/695422479300165712" target='_blank'>
                            <img src={discord} />
                        </a>
                    </button>
                    </li>
            </ul>
        )
    }

    return(
        <footer>
            <Buttons />
        </footer>
    )
}

export default Footer