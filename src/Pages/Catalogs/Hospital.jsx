import config from "../../Config.js";
import '../../CSSFiles/Catalogs.scss'
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router-dom";

function Hospital() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
    }, []);

    function daysFromToday(dateString) {
        const [day, month, year] = dateString.split('.').map(Number);
        const inputDate = new Date(year, month - 1, day);
        const today = new Date();
        const timeDifference = today - inputDate;
        const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return dayDifference;
    }

    return(
        <div className={"catalogPage"}>
            <div className={'products'}>
                {config.hospitalProducts.filter(product => !product.disabled).map(product => {
                    let imgSrc = `/ProductsImgs/Hospital/product_${product.id}/0.png`;
                    let dayDifference = daysFromToday(product.dataOfAppearance);
                    return (
                        <Link to={'/product/hospital' + product.id} className={"productWindow"} key={product.id}>
                            <img src={imgSrc} alt={product.title}/>
                            <div className={"productName"}>{product.name}</div>
                            {dayDifference <= 30 && <div className={"newProductPlank"}>New</div>}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Hospital
