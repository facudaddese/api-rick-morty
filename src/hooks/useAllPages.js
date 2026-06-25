import { useState, useEffect } from 'react'

export const useAllPages = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        let next = true;
        let page = 1;
        let array = [];
        const getData = async () => {
            try {
                setError('');
                setLoading(true);
                while (next) {
                    const res = await fetch(`${url}?page=${page}`, { signal: controller.signal });
                    const allData = await res.json();
                    array = [...array, ...allData.results];
                    next = !!allData.info.next;
                    page++;
                }
                setData(array);
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
