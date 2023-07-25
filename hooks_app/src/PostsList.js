import PostsListItem from "./PostsListItem";
import "./PostsList.css";

const PostsList = ({ posts }) => {
  let renderedPosts;
  if (posts.length === 0) {
    renderedPosts = "No posts available";
  } else {
    renderedPosts = posts.map((post) => (
      <PostsListItem key={post.id} title={post.title} />
    ));
  }

  return <div className="list">{renderedPosts}</div>;
};

export default PostsList;
