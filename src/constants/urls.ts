const baseURL = 'https://jsonplaceholder.typicode.com';
const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id: string | undefined) => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (id: string | undefined) => `${posts}/${id}`
    }
};

export {baseURL, urls};