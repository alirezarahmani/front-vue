import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from '../actions/post';

const initialState = {
    loading: false,
    post: [],
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_POST_SUCCESS:
            return { ...state, loading: false, post: action.payload, error: null };
        case FETCH_POST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default postReducer;
