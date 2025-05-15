import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
    return <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Jay" body="React.js is awesome!" />
            <Post author="John" body="Check this out" />
            <Post author="Jezza" body="Hammond!!" />
        </ul>
    </>
}

export default PostList;