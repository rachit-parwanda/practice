import { useEffect } from "react";
import useFetch from "./useFetch";
import PostsList from "./PostsList";
import "./App.css";

const App = () => {
  const {
    data: { posts },
    state: { isLoading, error },
    actions: { fetchPosts },
  } = useFetch();

  useEffect(() => {
    fetchPosts("https://jsonplaceholder.typicode.com/posts");
  }, [fetchPosts]);

  const clickHandler = () => {
    fetchPosts("https://jsonplaceholder.typicode.com/posts");
  };

  return (
    <div className="App">
      <div>
        <h2>All Posts</h2>
        <button onClick={clickHandler} disabled={isLoading}>
          Refresh
        </button>
      </div>
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {posts && <PostsList posts={posts} />}
      </div>
    </div>
  );
};

export default App;
