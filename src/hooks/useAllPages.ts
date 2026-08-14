import { useState, useEffect } from "react";
import { ApiResponse } from "../types/Character";

export const useAllPages = <T>(
  url: string,
): { data: T[] | null; error: string; loading: boolean } => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let next = true;
    let page = 1;
    let array: T[] = [];
    const getData = async () => {
      try {
        setError("");
        setLoading(true);
        while (next) {
          const res = await fetch(`${url}?page=${page}`, {
            signal: controller.signal,
          });
          const allData: ApiResponse<T> = await res.json();
          array = [...array, ...allData.results];
          next = !!allData.info.next;
          page++;
        }
        setData(array);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") return;
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
};
