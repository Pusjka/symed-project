import {Link} from "react-router-dom";
import config from "../../Config.js";
import '/src/CSSFiles/DesktopLinks.scss'
import {useTranslation} from "react-i18next";
import logoPng from '../../../public/Imgs/symed-logo.png';

function DesktopLinks() {
    const { t, i18n } = useTranslation();

    return (
        <div className={"desktopLinksAndLogo"}>
            <Link to={"/"}>
                    <span className="homeLogo">
                        <img src={logoPng} alt="logo" />
                    </span>
            </Link>
            {config.desktopLinks.map((link) => {
                return(
                    <Link to={link.link} className="button">
                        {link.name}
                        {link.name === "Catalog" &&
                            <div className="dropdownMenu">
                                {config.productCategory.map((category) => (
                                    <Link to={category.link} className="dropdownLink">{category.name}</Link>
                                ))}
                            </div>
                        }
                    </Link>
                )
            })}
        </div>
    )
}

export default DesktopLinks
