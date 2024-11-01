import config from "../Config.js";
import {useRef, useState} from "react";
import '/src/CSSFiles/Resume.scss'
import {useTranslation} from "react-i18next";

function Resume() {
    const { t, i18n } = useTranslation();
    const [, setPage] = useState(1);

    return(
        <div className={"resumePage"}>
            <div>
                <div className={"resumeText"}>
                    <div className={"mainResumeText"}>{t("resumePageTitle")}</div>
                    <div className={"notMainResumeText"}>{t("resumePageDescription")}</div>
                </div>
                {t("resumePageDownload")}
                <span className="material-symbols-outlined downloadResumeButton">
                    download
                </span>
            </div>
        </div>
    )
}

export default Resume
