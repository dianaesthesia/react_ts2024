import React, {FC} from 'react';

import {IRecipeModel} from "../../../models/IRecipeModel";
import styles from './RecipeComponent.module.css';

interface IProps {
    recipe: IRecipeModel
}

const RecipeComponent: FC<IProps> = ({recipe: {id, name, ingredients, instructions, image}}) => {
    return (
        <div>
            <div>{id}. {name}</div>
            <ul>Ingredients: {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
            <ol>Instructions: {instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ol>
            <div><img src={image} alt={name} className={styles.image}/></div>
            <hr/>
        </div>
    );
};

export default RecipeComponent;