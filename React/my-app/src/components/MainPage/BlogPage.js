import React, { useContext } from 'react';
import { UserContext } from '../../store/user';

export default function BlogPage() {
    const dispatch = useContext(UserContext);
    console.log(dispatch);
    return (
        <div>
            BlogPage
            <button onClick={() => dispatch({ type: 'changeJob', text: 'BE-developer' })}>Change Job</button>
        </div>
    );
}
