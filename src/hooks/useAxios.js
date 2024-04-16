import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.baseURL = "https://api.unsplash.com";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(url);
        setResponse(result.data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { response, isLoading };
};

export default useAxios;
