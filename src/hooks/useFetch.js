import { useEffect, useState } from "react"
import { getResults } from '../helpers/getResults'


export const useFetch = (category) => {

    const apiKey = '8800O5782N5enkrU598WG87oQ76XrjGMnSpFDNakcQc';

    const [state, setState] = useState({
        data: [],
        loading: true,
        unableToConnect: false,
        notFound: false
    });



    useEffect(() => {
        getResults(apiKey, category)
            .then(data => {
                if (data === 404) {
                    setState({
                        data: [],
                        loading: false,
                        unableToConnect: false,
                        notFound: true
                    })
                } else {
                    setState({
                        data,
                        loading: false,
                        unableToConnect: false,
                        notFound: false
                    })
                }
            })
            .catch(() => {
                setState({
                    data: [],
                    loading: false,
                    unableToConnect: true,
                    notFound: false
                })
            });
    }, [category])



    return state;
}
