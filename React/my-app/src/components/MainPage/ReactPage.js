import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

export default function ReactPage() {
    async function fetcher() {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');

        return result.data;
    }
    const { data: docs, error } = useSWR('posts', fetcher);

    if (error) return <div>failed to load</div>;
    if (!docs) return <div>Loading...</div>;

    return (
        <div>
            {docs.map((doc) => (
                <Link to={`${doc.id}`} key={doc.id} style={{ display: 'block', margin: '1rem 0' }}>
                    {doc.title}
                </Link>
            ))}
            {/* <Outlet /> */}
        </div>
    );
}
