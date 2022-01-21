import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


const Planets = (props) => {
    const [planet, setPlanet] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (<div>
        {JSON.stringify(planet)}
        <h3>Planet: {planet.name}</h3>
        <p>Planet ID: {id}</p>
        <p>Climate:{planet.climate} </p>
        <p>Terrain:{planet.terrain} </p>
        <p>Surface Water:{planet.surface_water} </p>
        <p>Population:{planet.population} </p>
    </div>);
};



export default Planets;