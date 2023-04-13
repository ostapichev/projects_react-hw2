import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPosts} from "../../services/postService";

const Posts = ({lift}) => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
            getPosts().then(allPosts => {
                setPosts([...allPosts]);
            });
    }, []);

    return (
        <>
            {
                posts.map(value => <Post value={value}
                lift={lift}
                key={value.id}/>)
            }
        </>
    );
};

export default Posts;