import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosLyrics = () => {

    const [beers, setBeers] = useState([]);

    //fetching beers from an API with Axios
    async function getAxiosBeers() {
        const fetchApi = "https://api.punkapi.com/v2/beers"
        try {
            const apiData = await axios.get(fetchApi);
            const beerNames = apiData.data.map(beer => beer.name)
            setBeers(beerNames)
        } catch(err) {
            console.error(err)
        }
    }

    //API call in useEffect - function being called once when the component is mounted
    useEffect(() => {
        getAxiosBeers()
    }, [])

    return (<>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
           </>)
}



export default AxiosLyrics
