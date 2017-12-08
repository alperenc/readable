import {
  POST_CONTENT,
  UPVOTE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  DELETE_POST
} from "./actions/actionTypes";

const posts = (state = {}, action) => {
  const { post, id } = action;

  switch (action.type) {
    case POST_CONTENT:
    case EDIT_POST:
      return {
        ...state,
        [id]: post
      };
      break;
    case DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
      break;
    case UPVOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore + 1
        }
      };
      break;
    case DOWNVOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore - 1
        }
      };
      break;
    default:
      break;
  }
};
