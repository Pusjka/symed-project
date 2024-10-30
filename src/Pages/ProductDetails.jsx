import config from "../Config.js";
import '/src/CSSFiles/ProductDetails.scss'
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const product = config.productsCatalog.find(product => product.id == id);

    useEffect(() => {
        if (!product) {
            window.location.href = '/'
        }
    }, []);

    let imgSrc = '/ProductsImgs/product_' + id + '/0.png';

    return(
        <div className={"productDetailsPage"}>
            <div className={"productDetailsPageWindow"}>
                <img src={imgSrc} alt={product.title}/>
                <div className={"productTitleAndDescription"}>
                    <div className={"productName"}>{product.name}</div>
                    <div className="gradientLine"/>
                    <div className={"productDescription"}>{product.description}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
