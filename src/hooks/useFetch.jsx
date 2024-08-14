import { useState, useEffect } from "react";
import { api } from "../utils/axios";

export default function useFetch(params = "", query = "", sort = "", tags = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get(`${params}`, {
        params: { q: query }, 
      });

      let responseData = res.data.hasOwnProperty("posts") ? res.data.posts : res.data;

     
      if (sort) {
        responseData.sort((a, b) => {
          if (sort === "asc") return a.title.localeCompare(b.title);
          if (sort === "desc") return b.title.localeCompare(a.title);
          return 0;
        });
      }

     
      if (tags) {
        responseData = responseData.filter(e => e.tags.includes(tags));
      }

      setData(responseData);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, sort, tags]);
  return [data, loading];
}

