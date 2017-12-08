import {
  COMMENT_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

export const commentPost = comment => ({
  type: COMMENT_POST,
  comment
});

export const upvoteComment = id => ({
  type: UPVOTE_COMMENT,
  id
});

export const downvoteComment = id => ({
  type: DOWNVOTE_COMMENT,
  id
});

export const editComment = (id, body) => ({
  type: EDIT_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});
