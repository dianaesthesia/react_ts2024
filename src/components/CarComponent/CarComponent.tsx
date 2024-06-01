import React, {FC} from 'react';

import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

interface IProps {
    car: ICarWithAuthModel
}

const CarComponent: FC<IProps> = ({car: {brand, price, year}}) => {
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export default CarComponent;