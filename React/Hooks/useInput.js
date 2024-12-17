import React from 'react';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;
        if (typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
        setValue(value);
    };
    return { value, onChange };
};

export default function input() {
    const maxLen = (value) => value.length <= 10;
    const name = useInput('Mr.', maxLen);
    return (
        <div>
            <input placeholder="Name" {...name} />
        </div>
    );
}
