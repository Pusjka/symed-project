import '/src/CSSFiles/Suppliers.scss'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import config from "../Config.js";
import {Link} from "react-router-dom";

function Suppliers() {
    const { t, i18n } = useTranslation();


    useEffect(() => {

    }, []);

    return(
        <div className={"suppliersPage"}>
            <div className="suppliers">
                {config.suppliers.filter(supplier => !supplier.disabled).map(supplier => {
                    return (
                        <div className={"supplierDiv"}>
                            <div className={"titleAndPdfDownload"}>
                                <div className={"title"}>
                                    {supplier.name}
                                </div>
                                {supplier.pdfExists &&
                                    <Link to={'/SuppliersPDFs/' + supplier.id + ".pdf"} target="_blank" className={'pdfDownloadLinkDiv'} download>
                                        <span className="material-symbols-outlined icon">
                                            download
                                        </span>
                                        <div className={"text"}>
                                            Download pdf
                                        </div>
                                    </Link>
                                }
                            </div>
                            <div className={"description"}>
                                {supplier.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Suppliers
