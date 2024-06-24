const baseURL = 'https://jsonplaceholder.typicode.com';
const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id: string) => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (id: string) => `${posts}/${id}`
    }
};

export {baseURL, urls};