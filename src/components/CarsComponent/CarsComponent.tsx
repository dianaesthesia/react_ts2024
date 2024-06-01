import React, {useEffect, useState} from 'react';

import {carService} from "../../services/api.service";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import CarComponent from "../CarComponent/CarComponent";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICarWithAuthModel[]>([]);

    useEffect(() => {
        carService.getAll().then(value => {
            if (value) {
                setCars(value.items);
            }
        });
    }, []);

    return (
        <div>
            {cars.map(car => <CarComponent car={car} key={car.id}/>)}
        </div>
    );
};

export default CarsComponent;