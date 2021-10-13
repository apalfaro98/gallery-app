import { useEffect, useState } from "react"
import { getResults } from '../helpers/getResults'


export const useFetch = (category) => {

    const apiKey = '8800O5782N5enkrU598WG87oQ76XrjGMnSpFDNakcQc';

    const [state, setState] = useState({
        data: [],
        loading: true
    });



    useEffect(() => {
        getResults(apiKey, category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                })
            });
    }, [category])



    return state;
}
