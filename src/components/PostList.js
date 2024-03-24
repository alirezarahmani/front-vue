import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import {generateDate} from "../utils";

const PostList = ({ posts, loading, error, fetchPosts }) => {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    posts.sort(function (a, b) {
        return b.id-a.id;
    });

    return (
        <div>
            <div className="container">
                <div className="col-md-8">
                    {posts.map(function (post, index) {
                        let link = '/posts/' + post.id;
                        return [
                            <React.Fragment key={index}>
                                <a href={link} className="postLink">
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
                                                    <div>{generateDate(post.id)}</div>
                                                    <p> {post.body} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                                <div className="clearfix"></div>
                            </React.Fragment>
                        ];
                    })}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
});

export default connect(mapStateToProps, {fetchPosts})(PostList);