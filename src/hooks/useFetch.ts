import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, seIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .finally(() => {
        seIsFetching(false);
      });
  }, []);

  return { data, isFetching };
}
