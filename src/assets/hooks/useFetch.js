import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const getData = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(`${url}`, { signal: controller.signal })
                if (!res.ok) throw new Error("No se encontraron personajes");
                const data = await res.json();
                setData({ ...data ?? {} });
            } catch (error) {
                if (error.name === "AbortError") return;
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getData();
        return () => controller.abort();
    }, [url]);


    return { data, error, loading }
}
