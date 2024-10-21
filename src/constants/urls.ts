const baseURL = 'https://dummyjson.com';

const recipes = '/recipes';

const urls = {
    recipes: {
        base: recipes,
        byId: (id: string) => `${recipes}/${id}`
    }
};

export {baseURL, urls};