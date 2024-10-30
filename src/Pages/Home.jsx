import '/src/CSSFiles/Home.scss'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

function Home() {
    const { t, i18n } = useTranslation();


    useEffect(() => {

    }, []);

    return(
        <div className={"homePage"}>
            <div>
                Symed description
            </div>
        </div>
    )
}

export default Home
