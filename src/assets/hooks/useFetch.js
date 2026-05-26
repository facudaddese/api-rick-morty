import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);

    const handlePrev = () => { if (data.info.prev) setPage(prev => prev - 1); }
    const handleNext = () => { if (data.info.next) setPage(prev => prev + 1); }

    useEffect(() => {
        const controller = new AbortController();
        const getData = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(`${url}?page=${page}`, { signal: controller.signal })
                if (!res.ok) throw new Error("Error al conectarse con la BD");
                const data = await res.json();
                setData({ ...data, results: data.results.slice(0, 6) ?? {} });
            } catch (error) {
                if (error.name === "AbortError") return;
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getData();
        return () => controller.abort();
    }, [url, page]);

    return { data, error, loading, handlePrev, handleNext }
}
