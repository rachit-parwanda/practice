import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback((url, options) => {
    setIsLoading(true);
    setError(null);

    fetch(url, options)
      .then((res) => {
        console.log(res.body);
        if (!res.ok) throw new Error("unable to fetch posts");
        else return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return {
    data: {
      posts: data,
    },
    state: {
      isLoading,
      error,
    },
    actions: {
      fetchPosts,
    },
  };
};

export default useFetch;
