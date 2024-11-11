const baseURL = 'https://jsonplaceholder.typicode.com';

const users = 'users';
const posts = 'posts';
const comments = 'comments';

const urls = {
    users: {
        base: users,
        byId: (userId: string) => `${users}/${userId}`
    },
    posts: {
        base: posts,
        byId: (postId: string) => `${posts}/${postId}`
    },
    comments: {
        base: comments,
        byId: (commentId: string) => `${comments}/${commentId}`
    }
};

export {baseURL, urls};
