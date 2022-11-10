import React, {useEffect, useRef, useState} from 'react';
import "../../../styles/App.css";
import {usePosts} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../DAL/api";
import {getPagesCount} from "../../utils/pages";
import PostForm from "../../components/UI/Post/PostForm";
import MyButton from "../../components/UI/Button/MyButton";
import MyModal from "../../components/UI/MyModal/MyModal";
import PostFilter from "../../components/UI/Post/PostFilter";
import Preloader from "../../components/UI/Preloader/Preloader";
import PostList from "../../components/UI/Post/PostList";
import {useObserver} from "../../hooks/useObserver";
import MySelect from "../../components/UI/Select/MySelect";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getPosts(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const changePage = (page) => {
        setPage(page)
        // fetchPosts(limit,page)
    };

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Posts</h1>

            <MyButton onClick={() => {
                setModal(true)
            }}>
                Create post
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm title={"Add post"}
                          createPost={createPost}/>
            </MyModal>

            <hr style={{margin: "15px 0"}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>



            <MySelect value={limit}
                      onChange={value => setLimit(value)}
                      defaultValue="Size elements on page"
                      options={[
                          {value: 5, name: "5"},
                          {value: 10, name: "10"},
                          {value: 25, name: "25"},
                          {value: -1, name: "Show all"},]}/>

            {postError && <h2 style={{textAlign: "center"}}>Something wrong...{postError}</h2>}

            {/*<Paginator page={page} changePage={changePage} totalPages={totalPages}/>*/}

            <PostList title={"List posts"}
                      posts={sortedAndSearchedPosts}
                      removePost={removePost}/>
            <div ref={lastElement} style={{height: "20px"}}/>

            {isPostLoading &&
                <div style={{display: "flex", justifyContent: "center", margin: "15px 0"}}>
                    <Preloader/>
                </div>}

            {/*<Paginator page={page} changePage={changePage} totalPages={totalPages}/>*/}

        </div>
    );
};

export default Posts;