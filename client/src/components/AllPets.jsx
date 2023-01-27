import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data);
                // res.data an array of objects
                res.data.sort((a, b) => (
                    // based off comparison return a 1 or a -1 
                    (a.type.toLowerCase() > b.type.toLowerCase()) ? 1 : -1
                ));
                setPets(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    // const handleDelete = (idToBeDeleted) => {
    //     axios.delete(`http://localhost:8000/api/pets/${idToBeDeleted}`)
    //         .then(res => {
    //             const filteredPets = pets.filter((pet) => {
    //                 return pet._id !== idToBeDeleted;
    //             })

    //             setPets(filteredPets);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <div className="container">
            <div>
                <Link to="/pets/new"> Add an pet </Link>
                <h4>These pets are looking for a good home</h4>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => {
                        // destructuring pet 
                        const { _id, name, type } = pet;
                        return (
                            <tr key={_id} className="shadow mb-4 rounded border p-4 ">
                                <td>{name}</td>
                                <td>{type}</td>
                                <td>
                                    <Link className="btn btn-sm btn-outline-danger mx-1" to={`/pets/${_id}`}>details </Link>
                                    <Link className="btn btn-sm btn-outline-danger mx-1" to={`/pets/${_id}/edit`}> edit </Link>
                                    {/* <button
                                        onClick={(e) => { handleDelete(_id) }}
                                        className="btn btn-sm btn-outline-danger mx-1"
                                    >
                                        Delete
                                    </button> */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllPets