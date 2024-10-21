import React, {useEffect, useState} from 'react';

import {IRecipeModel} from "../../../models/IRecipeModel";
import {recipeApiService} from "../../../services/recipe.api.service";
import RecipeComponent from "../recipe/RecipeComponent";

const RecipesComponent = () => {
    const [recipes, setRecipes] = useState<IRecipeModel[]>([])

    useEffect(() => {
        recipeApiService.getAll().then(({data: {recipes}}) => {
            setRecipes(recipes);
        })
    }, []);
    return (
        <div>
            {recipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default RecipesComponent;