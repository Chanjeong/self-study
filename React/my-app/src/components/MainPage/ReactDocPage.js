import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ReactDocPage() {
    const { docId } = useParams();
    const navigate = useNavigate();
    const [body, setBody] = useState('');

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${docId}`);
            const data = await result.json();
            setBody(data.body);
        }

        fetchData();
    }, []);

    return (
        <>
            <h5 onClick={() => navigate('/')}>logo</h5>
            <div>ReactDocPage </div>
            <div>{body ? body : `loading...`}</div>
        </>
    );
}
