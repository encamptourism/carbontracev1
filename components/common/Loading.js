import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Loading = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const handleStart = (url) => {
            if (url !== router.asPath) {
                setLoading(true);
            }
        };

        const handleComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.asPath]);

    useEffect(() => {
        setLoading(false);
    }, [router.asPath]);

    if (!loading) return null;

    return (
        <div className="loader" role="status" aria-live="polite">
            <div className="loader__spinner"></div>
            <span>Loading...</span>
        </div>
    );
};

export default Loading;
