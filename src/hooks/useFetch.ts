import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://api.github.com",
});

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, seIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => setData(response.data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        seIsFetching(false);
      });
  }, []);

  return { data, error, isFetching };
}
