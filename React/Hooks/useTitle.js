import React from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

export default function useTitle() {
    const titleUpdator = useTitle('...Loading');
    setTimeout(() => titleUpdator('Home'), 5000);
    return <div>useTitle</div>;
}
