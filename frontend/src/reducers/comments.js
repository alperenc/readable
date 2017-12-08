import {
  COMMENT_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from "../actions/actionTypes";

export const comments = (state = {}, action) => {
  const { comment, id } = action;

  switch (action.type) {
    case COMMENT_POST:
    case EDIT_COMMENT:
      return {
        ...state,
        [id]: comment
      };
      break;
    case UPVOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore + 1
        }
      };
      break;
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore - 1
        }
      };
    default:
      break;
  }
};
