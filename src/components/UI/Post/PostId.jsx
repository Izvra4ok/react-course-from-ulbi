import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../../hooks/Lesson1/useFetching";
import PostService from "../../../DAL/api";
import Preloader from "../Preloader/Preloader";
import classes from "../../../pages/Lesson1Router/Posts/Posts.module.css";

const PostId = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByPostId(id)
        setPost(response.data);
    });

    const [fetchPostByComment, isCommentLoading, errorComment] = useFetching(async (id) => {
        const response = await PostService.getByCommentPost(id)
        setComment(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchPostByComment(params.id)
    }, []);

    return (
        <div>
            {isLoading
                ? <Preloader/>
                : <div>
                    <h2>Post № {params.id}</h2>
                    <div className={classes.post}>
                        <strong>{post.id}. {post.title}</strong>
                        <div>{post.body}</div>
                    </div>
                </div>
            }

            {isCommentLoading
                ? <Preloader/>
                : <div>
                    <h2>Post comments</h2>
                    <div>{comment.map((comm, index) =>
                        <div style={{margin: "10px"}} key={comm.id}>
                            <hr/>
                            <h3>{index + 1}.{comm.email}</h3>
                            <div>{comm.body}</div>
                            <hr/>
                        </div>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default PostId;