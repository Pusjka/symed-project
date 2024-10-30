import {Link} from "react-router-dom";
import '/src/CSSFiles/DesktopHeaderSettings.scss'
import {useTranslation} from "react-i18next";
import '/src/i18n.js'
import {useEffect} from "react";

function DesktopHeaderSettings() {
    const { t, i18n } = useTranslation();
    const languages = ["eng", "est"]

    useEffect(() => {
        console.log(i18n.language)
    }, []);

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }

    return (
        <div className={"settings"}>
            <Link to={"/contact"} className={"contactLink"}>
                <span className={"contactButton"}>
                    {t('DesktopHeaderContact')}
                </span>
            </Link>
            <div className={"languageSelector"}>
                {languages.map((lng) => {
                    return(
                        <div className={lng === i18n.language && "active"} onClick={() => {changeLanguage(lng)}}>{lng}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default DesktopHeaderSettings
