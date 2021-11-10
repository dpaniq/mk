import React from 'react'
import { Route, Link, useLocation } from "react-router-dom"


import svg1 from '../../assets/images/svg/icon-1.svg'
import svg2 from '../../assets/images/svg/icon-2.svg'
import svg3 from '../../assets/images/svg/icon-3.svg'
import svg4 from '../../assets/images/svg/icon-4.svg'
import svg5 from '../../assets/images/svg/icon-5.svg'

const menu = [

];

export const Menu = () => {
    const location = useLocation();

    
    const handleActiveMenuIem = (path) => {
        const active = location.pathname == path ? 'footerMenu__link-active' : ''
        return `footerMenu__link ${active}`
    }
    

    return (
        <>
            {/* <Link to="/" className={handleActiveMenuIem('/')}>
                <img src={svg1} className="footerMenu__link-img" alt="home" />
                <span className="footerMenu__link-text">Главная</span>
            </Link> */}
            {/* <Link to="/team" className={handleActiveMenuIem('/team')}>
                <img src={svg2} className="footerMenu__link-img" alt="team" />
                <span className="footerMenu__link-text">Команда</span>
            </Link>
            <Link to="/achivements" className={handleActiveMenuIem('/achivements')}>
                <img src={svg3} className="footerMenu__link-img" alt="achivements" />
                <span className="footerMenu__link-text">Достижения</span>
            </Link>
            <Link to="/spots" className={handleActiveMenuIem('/spots')}>
                <img src={svg4} className="footerMenu__link-img" alt="spots" />
                <span className="footerMenu__link-text">Точки</span>
            </Link> */}
        </>
    )
}
