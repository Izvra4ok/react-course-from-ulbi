import React, {useState} from 'react';
import MyInputText from "../Input/MyInputText";
import MyButton from "../Button/MyButton";


const PostForm = ({createPost,...props}) => {

    const [post, setPost] = useState({title:"", body:""});

    const addNewPost = (e) => {
        e.preventDefault();
       const newPost = {
           ...post, id: Date.now()
       };
       createPost(newPost);
        setPost({title: "",body:""})
    };

    return (
        <div>
            <h2 style={{textAlign:"center"}}>{props.title}</h2>
            <form action="">
                {/*Управляемый инпут*/}
                <MyInputText
                    value={post.title}
                    placehodler="Title"
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="title"/>

                <MyInputText
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="body"/>

                {/* const bodyInputRef = useRef();*/}

                {/*Неуправляемый инпут*/}
                {/*<input type="text" ref={bodyInputRef}/>*/}
                {/*<MyInputText*/}
                {/*    ref={bodyInputRef}*/}
                {/*    type="text"*/}
                {/*    placeholder="Описание поста"/>*/}

                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;