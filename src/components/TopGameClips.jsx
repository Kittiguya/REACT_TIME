import React, { useState, useEffect } from "react";

const GameClipsComponent = (slug) => {
    const [topClips, setTopClips] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopClips = async () => {
            try {
                const response = await fetch(
                    'https://developers.medal.tv/v1/trending?&categoryId=&limit=5',
                    {
                        headers: {
                            'Authorization': 'pub_RTy1hkhpdJ6x3b8Gl0DDDJpG47Fqo3ay',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch top clips');
                }

                const data = await response.json();
                if (Array.isArray(data.contentObjects)) {
                    setTopClips(data.contentObjects);
                } else {
                    throw new Error('Invalid data format for top clips');
                }
            } catch (error) {
                setError('Error fetching top clip');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTopClips();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="trending flex-box">
            {topClips.length > 0 ? (
                topClips.map((clip, index) => (
                    <div key={index} className="clip-container">
                        <div className="video-player">
                            <div dangerouslySetInnerHTML={{ __html: clip.embedIframeCode }} />
                        </div>
                        <div className="clip-details">
                            <p>Title: {clip.contentTitle}</p>
                            <p>Views: {clip.contentViews}</p>
                            <p>Likes: {clip.contentLikes}</p>
                            <p>Game: {clip.contentName}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div>No top clips available</div>
            )}
        </div>
    );
};

export default GameClipsComponent;