import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';



// const axiosStarWars = () => {
//     axios.get("https://swapi.dev/api/")
//         .then(res => {
//             console.log(res.data)
//             setPerson(res.data)
//         })
//         .catch(err => console.log(err))
// }

const People = (props) => {
    const [person, setPerson] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then(res => {
                console.log(res.data)
                setPerson(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (<div>
        {JSON.stringify(person)}
        <h3>Person: {person.name}</h3>
        <p>Person ID: {id}</p>
        <p>Height:{person.height} </p>
        <p>Mass:{person.mass} </p>
        <p>Hair Color:{person.hair_color} </p>
        <p>Skin Color:{person.skin_color} </p>
    </div>);
};



export default People;