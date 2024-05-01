import React, {FC, useEffect, useState} from 'react';

import ProductComponent, {IProductProps} from "../product/ProductComponent";

const ProductsComponent: FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });
    }, []);


    return (
        <div>
            {products.map((product: IProductProps) => <ProductComponent
                key={product.id} id={product.id} title={product.title} description={product.description}
                price={product.price} brand={product.brand} category={product.category}
                images={product.images}/>)}
        </div>
    );
};
export default ProductsComponent;