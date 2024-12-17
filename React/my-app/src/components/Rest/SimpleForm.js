import React, { useState } from 'react';

export default function SimpleForm() {
    const [state, setState] = useState('');

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>닉네임: </label>
                <input type="text" name="nickname" onChange={handleChange} value={state} />
                <input type="submit" value="제출" />
            </div>
        </form>
    );
}
