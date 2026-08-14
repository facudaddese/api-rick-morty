import { useState, useEffect } from "react";

export const useFetch = <T>(
  url: string | null,
): { data: T | null; error: string; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    const getData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${url}`, { signal: controller.signal });
        if (!res.ok) throw new Error("No characters found");
        const result: T = await res.json();
        setData(result);
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
