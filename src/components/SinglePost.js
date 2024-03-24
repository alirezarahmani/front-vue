import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSinglePost} from '../actions/post';
import {generateDate} from "../utils";

const SinglePost = ({match, post, loading, error, fetchSinglePost}) => {
    useEffect(() => {
        fetchSinglePost(match.params.id);
    }, [fetchSinglePost, match]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-8">
                        <article className="post vt-post">
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                                    <div className="post-type post-img">
                                    </div>
                                    <div className="author-info author-info-2">
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                                    <div className="caption">
                                        <h3 className="md-heading title">{post.title}</h3>
                                        <p> {post.body} </p>
                                        <div>{generateDate(post.id)}</div>
                                    </div>
                                </div>
                            </div>
                        </article>
                </div>
            </div>
        </div>
    )
        ;
};

const mapStateToProps = state => ({
    post: state.post.post,
    loading: state.post.loading,
    error: state.post.error,
});

export default connect(mapStateToProps, {fetchSinglePost})(SinglePost);
