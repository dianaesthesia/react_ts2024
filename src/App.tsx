import React, {FC} from 'react';

import './App.css';
import ProductsComponent from "./components/products/ProductsComponent";

const App: FC = () => {
    return (
        <div>
            <ProductsComponent/>
        </div>
    );
};

export default App;
