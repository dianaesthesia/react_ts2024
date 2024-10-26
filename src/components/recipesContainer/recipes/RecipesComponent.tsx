import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IRecipeModel} from "../../../models/IRecipeModel";
import {recipeApiService} from "../../../services/recipe.api.service";
import RecipeComponent from "../recipe/RecipeComponent";

const RecipesComponent = () => {
    const [recipes, setRecipes] = useState<IRecipeModel[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        const pageNumber = query.get('page');

        console.log(pageNumber);
        if (pageNumber) {
            recipeApiService.getAll(+pageNumber).then((data) => {
                setRecipes(data.recipes);
            })
        }
    }, [query]);

    return (
        <div>
            {recipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default RecipesComponent;