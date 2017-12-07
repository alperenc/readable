import {
    POST_CONTENT,
    UPVOTE_POST,
    DOWNVOTE_POST,
    EDIT_POST,
    DELETE_POST
} from './actionTypes'

export const postContent = (post) => ({
    type: POST_CONTENT,
    post,
})

export const upvotePost = (id) => ({
    type: UPVOTE_POST,
    id,
})

export const downvotePost = (id) => ({
    type: DOWNVOTE_POST,
    id,
})

export const editPost = (id, title, body) => ({
    type: EDIT_POST,
    post,
})

export const deletePost = id => ({
    type: DELETE_POST,
    id,
})