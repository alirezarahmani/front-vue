import axios from 'axios';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const fetchSinglePost = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_POST_REQUEST });
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            dispatch({ type: FETCH_POST_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_POST_FAILURE, payload: error.message });
        }
    };
};
