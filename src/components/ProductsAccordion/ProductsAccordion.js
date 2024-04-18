import React from 'react';
import {productsData} from "../../utils/ProductsData";

import linkArrow from "../../assets/image/icons/linkArrow.svg";
import './ProductsAccordion.css'

const ProductsAccordion = () => {
    return (
        <section id={'products-accordion'}>
            <div className="products-accordion__container">
                <div className="products-accordion__row">
                    {productsData?.map(product => {
                        return (
                            <div
                                className="products-accordion__col-4"
                                key={product.id}
                            >
                                <div
                                    className="products-accordion__box"
                                    style={{backgroundImage: `url(${product.img})`}}
                                >
                                    <div className={'products-accordion__box__text'}>
                                        <h4>{product.productName}</h4>
                                        <img src={linkArrow} alt="icon"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductsAccordion;