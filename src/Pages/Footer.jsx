import config from "../Config.js";
import '/src/CSSFiles/Footer.scss'
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function Footer() {
    const { t, i18n } = useTranslation();

    useEffect(() => {

    }, []);


    return(
        <div className={"footer"}>
            <div className={"links"}>
                <div className={"title"}>Links</div>
                {config.desktopLinks.map((link) => {
                    return (
                        <div className={"linkDiv"}>
                            <Link to={link.link} className="link">
                                {link.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className={"getInTouch"}>
                <div className={"title"}>Get in touch</div>
                <div className={"address"}>
                    <span className="material-symbols-outlined icon">
                        pin_drop
                    </span>
                    <div className={"text"}>
                        Katusepapi tn 6-410, Lasnamäe linnaosa, 11412 Tallinn, Harju maakond
                    </div>
                </div>
                <div className={"mail"}>
                    <span className="material-symbols-outlined icon">
                        mail
                    </span>
                    <div className={"text"}>
                        svetlana.zolotarjova@symed.ee
                    </div>
                </div>
                <div className={"phone"}>
                    <span className="material-symbols-outlined icon">
                        call
                    </span>
                    <div className={"text"}>
                        +372 529 2394
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
