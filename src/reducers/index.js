import { combineReducers } from 'redux';
import postsReducer from './posts';
import postReducer from './post';

const rootReducer = combineReducers({
    post: postReducer,
    posts: postsReducer,
});
export default rootReducer;
