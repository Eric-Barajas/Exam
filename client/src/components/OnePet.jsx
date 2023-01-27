import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const OnePet = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data);
                setPet(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                navigate('/pets');
            }).catch(err => {
                console.log(err);
            })
    }

    // waiting for api call to run the .then
    // waiting to recieve the data
    // so we dont return nothing for line 43 and below (aka crashing our project)
    if (pet === null) {
        return null;
    }

    // We can only safely use the data to render and destructure now since
    // we checked it's not null.
    const { name, type, description, skill, skill2, skill3 } = pet;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <Link to="/pets"> back to home </Link>
            <h4>Details about: {name}</h4>
            <p>Pet type: {type}</p>
            <p>Description: {description}</p>
            <p>Skills: {skill}</p>
            <p>{skill2}</p>
            <p>{skill3}</p>
            <button
                onClick={handleDelete}
                className="btn btn-sm btn-outline-danger mx-1"
            >
                Adopt {name}
            </button>
        </div>
    );
};

export default OnePet;