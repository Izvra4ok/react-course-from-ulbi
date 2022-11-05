import React from 'react';
import MyButton from "../Button/MyButton";
import classes from "./Post.module.css";
import {useNavigate} from "react-router-dom";


const PostItem = ({removePost, ...props}) => {

    const router = useNavigate()

    return (
        <div className={classes.post}>
            <div className={classes.post__content}>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>

            <div className={classes.post__btn}>
                <MyButton onClick={() => router(`/lesson1/posts/${props.post.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => removePost(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;