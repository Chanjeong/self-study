import React from 'react';

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine);
        if (typeof onChange === 'function') {
            onChange(navigator.onLine);
        }
    };
    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);
        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        };
    }, []);
    return status;
};

export default function useNetwork() {
    const handleNetworkChange = (online) => {
        console.log(online ? 'We just went online' : 'We are offline');
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <div>
            <h1>{onLine ? 'online' : 'offline'}</h1>
        </div>
    );
}
