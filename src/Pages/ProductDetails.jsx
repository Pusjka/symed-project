import config from "../Config.js";
import '/src/CSSFiles/ProductDetails.scss'
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { t, i18n } = useTranslation();
    const { category, id } = useParams();

    let productCatalog;
    switch (category) {
        case 'pharmacy':
            productCatalog = config.pharmacyProducts;
            break;
        case 'hospital':
            productCatalog = config.hospitalProducts;
            break;
        case 'laboratory':
            productCatalog = config.laboratoryProducts;
            break;
        default:
            productCatalog = [];
    }

    const product = productCatalog.find(product => product.id == id);

    useEffect(() => {
        if (!product) {
            window.location.href = '/'
        }
    }, []);

    let imgSrc = '/ProductsImgs/' + String(category).charAt(0).toUpperCase() + String(category).slice(1) + '/product_' + id + '/0.png';

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
