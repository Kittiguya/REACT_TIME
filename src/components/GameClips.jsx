import React, { useState, useEffect } from "react";

const GameClipsComponent = () => {
    const [topClip, setTopClip] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        const fetchTopClip = async () => {
            try {
                const response = await fetch(
                    'https://developers.medal.tv/v1/trending?&limit=1',
                    {
                        headers: {
                            'Authorization': 'pub_RTy1hkhpdJ6x3b8Gl0DDDJpG47Fqo3ay',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch top clip');
                }

                const data = await response.json();
                setTopClip(data.contentObjects[0]);
                const categoryName = data.contentObjects[0].categoryName; // Access categoryName directly from API response
                setCategoryName(categoryName);
            } catch (error) {
                setError('Error fetching top clip');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTopClip();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Top Clip</h2>
            <p>Title: {topClip.contentTitle}</p>
            <p>Views: {topClip.contentViews}</p>
            <p>Likes: {topClip.contentLikes}</p>
            <p>Game: {topClip.categoryName}</p>
            <div className="video-player">
                <iframe
                    src={'https://medal.tv/clip/5042841/Z6XRiXu8BKwSrDYW?loop=1&autoplay=1&cta=1'}
                    frameBorder={"0"}
                    width='640'
                    height='360'
                    allow="autoplay"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default GameClipsComponent;