import { useCallback, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = useCallback((url, options) => {
    setIsLoading(true);
    setErrorMsg(null);

    fetch(url, options)
      .then((res) => {
        if (!res.ok)
          throw new Error(`unable to fetch data.\nStatus ${res.status}`);
        else return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setErrorMsg(null);
      })
      .catch((err) => {
        setData(null);
        setIsLoading(false);
        setErrorMsg(err.message);
      });
  }, []);

  return {
    data: {
      data,
    },
    state: {
      isLoading,
      errorMsg,
    },
    actions: {
      fetchData,
    },
  };
};
