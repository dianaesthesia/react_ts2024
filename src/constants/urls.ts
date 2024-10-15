const baseURL = 'https://dummyjson.com/';
const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id: string) => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (id: string) => `${posts}/${id}`,
        byUserId: (userId: number) => `${users}/${userId}/${posts}`
    }
};

export {baseURL, urls};