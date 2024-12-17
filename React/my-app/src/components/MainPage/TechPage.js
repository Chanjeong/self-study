import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function TechPage() {
    return (
        <>
            <div>TechPage</div>
            <Link to="/tech/react">React</Link> | <Link to="/tech/javascript">Javascript</Link>
            <Outlet />
        </>
    );
}
