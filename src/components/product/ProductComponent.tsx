import React, {FC} from 'react';

import styles from './ProductComponent.module.css';
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: string[]
}

export type IProductTypeProps = IProductProps & { children?: React.ReactNode }

const ProductComponent: FC<IProductTypeProps> = ({title, description, price, brand, category, images}) => {
    return (
        <div>
            <div>title: {title}</div>
            <div>description: {description}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <div>category: {category}</div>
            <div className={styles.images}>{images.map((image, index) => <img src={image} alt={title} key={index} className={styles.image}/>)}</div>
        </div>
    );
};

export default ProductComponent;