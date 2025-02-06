import { useState, useEffect } from "react";

/**
 * Custom hook to fetch data from a local JSON file.
 *
 * This hook manages the fetching process and provides the fetched data,
 * loading state, and any errors that may occur during the fetch operation.
 *
 * @returns {Object} An object containing:
 * - data: The fetched data object.
 * - error: An error object if an error occurred, otherwise null.
 * - loading: A boolean indicating if the fetch operation is in progress.
 */

const useDataFetcher = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('../../data.json');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, error, loading,};    
}

export default useDataFetcher;