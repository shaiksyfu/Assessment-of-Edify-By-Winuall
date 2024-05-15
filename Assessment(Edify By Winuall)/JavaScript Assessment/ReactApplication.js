import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {data.map(post => (
                <div key={post.id} className="card">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default App;