import React, {useState} from "react"

const BurgerNav = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header>
            <nav>
                <label>Rubenmkda</label>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <NavLinks name={'navlinks'} />
            </nav>
            <div className={menu_class}>
                <NavLinks name={'menulinks'} onClick={updateMenu}/>
            </div>
        </header>
    )
}

export const NavLinks = (props) => {

    return(
        <ul className={props.name} >
            <li><a href="#" onClick={props.onClick}>Sobre mí</a></li>
            <li><a href="#Tecnologias" onClick={props.onClick}>Tecnologìas</a></li>
            <li><a href="#proyectos" onClick={props.onClick}>Proyectos</a></li>
        </ul>
    )
}

export default BurgerNav