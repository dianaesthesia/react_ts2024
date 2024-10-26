import React from 'react';

import RecipesComponent from "../../components/recipesContainer/recipes/RecipesComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const RecipesPage = () => {
    return (
        <div>
            <RecipesComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;