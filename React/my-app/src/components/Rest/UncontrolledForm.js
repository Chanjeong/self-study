import React, { useRef } from 'react';

export default function UncontrolledForm() {
    const inputRef = useRef();
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputRef.current.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>닉네임: </label>
                <input type="text" name="nickname" onChange={handleChange} ref={inputRef} />
                <input type="submit" value="제출" />
            </form>
        </div>
    );
}
