import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback((url, options) => {
    setIsLoading(true);
    setError(null);

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(`unable to fetch data`);
        else return res.json();
      })
      .then((data) => {
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
      data,
    },
    state: {
      isLoading,
      error,
    },
    actions: {
      fetchData,
    },
  };
};

export default useFetch;
