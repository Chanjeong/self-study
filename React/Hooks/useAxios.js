import React from 'react';
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);
    if (!opts.url) {
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    };
    useEffect(() => {
        axiosInstance(opts)
            .then((response) => {
                setState({
                    ...state,
                    loading: false,
                    data,
                });
            })
            .catch((error) => {
                setState({ ...state, loading: false, error });
            });
    }, [trigger]);
    return [...state, refetch];
};
export default function useAxios() {
    const { loading, data, error, refetch } = useAxios({
        url: 'https://yts.am/api/v2/list_movies.json',
    });
    console.log(`loading:${loading}\nError: ${error}\ndata:${JSON.stringify(data)}`);
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && 'Loading'}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}
