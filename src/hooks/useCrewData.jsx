import { useState, useEffect } from "react";

const useCrewData = () => {
    const [crew, setCrew] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('../../data.json');
                const data = await response.json();
                setCrew(data.crew);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { crew, error, loading, currentIndex, setCurrentIndex };    
}

export default useCrewData;