import config from "../../Config.js";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import '/src/CSSFiles/MobileMenu.scss'
import {useTranslation} from "react-i18next";
import logoPng from '../../../public/Imgs/symed-logo.png';

function MobileMenu() {
    const [menuOpened, setMenuOpened] = useState(false)
    const { t, i18n } = useTranslation();
    const languages = ["eng", "est"]

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }

    return(
        <div className={"mobileMenu container nav-container"}>
            <div className={"menu"}>
                <Link to={"/"} onClick={() => setMenuOpened(false)}>
                    <span className="homeLogo">
                        <img src={logoPng} alt="logo"/>
                    </span>
                </Link>
            </div>
            <div>
            <input className="checkbox" type="checkbox" name="" id="" checked={menuOpened} onChange={() => setMenuOpened(!menuOpened)}/>
                <div className="hamburger-lines">
                    <span className="line line1"/>
                    <span className="line line2"/>
                    <span className="line line3"/>
                </div>
                {menuOpened &&
                    <div className={"mobileMenuSidebarBackground"} onClick={() => setMenuOpened(false)}>
                        <div className={"mobileMenuSidebar"}>
                            <div className={"languageSelector"}>
                                {languages.map((lng) => {
                                    return(
                                        <div className={lng === i18n.language && "active"} onClick={() => {changeLanguage(lng)}}>{lng}</div>
                                    )
                                })}
                            </div>
                            {config.mobileMenuLinks.map((link) => {
                                return (
                                    <Link to={link.link} data-text="Awesome" className="button" onClick={() => setMenuOpened(false)}>
                                        <span className="material-symbols-outlined">
                                            {link.icon}
                                        </span>
                                        <div>
                                            {link.name}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MobileMenu
