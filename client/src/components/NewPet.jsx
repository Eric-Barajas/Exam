import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const NewPet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const createPet = async (e) => {
        e.preventDefault();
        const newPet = {
            name,
            type,
            description,
            skill,
            skill2,
            skill3
        }

        // console.log(newPet);
        // swapping this out to use async/await syntax
        axios.post("http://localhost:8000/api/pets/", newPet)
            .then(res => {
                console.log("create console log" + res.data);
                navigate('/pets')
            }).catch(err => {
                /*
                For this catch to happen, the server needs to return an error status code.
                `?.` is optional chaining to safely access keys that may not exist.
                `errors` exists on validation errors but maybe not on other errors.
                */
                console.log(err.response);
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <Link to="/pets"> Home </Link>
            <h4>Know a pet needing a home?</h4>
            <form
                onSubmit={e => { createPet(e) }}
            >
                <div className="form-group">
                    <label className="h6">Pet Name:</label>
                    {
                        errors?.name && (
                            <p style={{ color: 'red' }}>{errors.name?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Pet Type:</label>
                    {
                        errors?.type && (
                            <p style={{ color: 'red' }}>{errors.type?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setType(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Pet Description:</label>
                    {
                        errors?.description && (
                            <p style={{ color: 'red' }}>{errors.description?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>

                <div>
                    <hr />
                    <h5>Skills (optional)</h5>
                </div>

                <div className="form-group">
                    <label className="h6">Skill 1:</label>
                    <input
                        onChange={(event) => {
                            setSkill(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Skill 2:</label>
                    <input
                        onChange={(event) => {
                            setSkill2(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Skill 3:</label>
                    <input
                        onChange={(event) => {
                            setSkill3(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>
                <Link className="btn btn-sm btn-outline-danger mx-1" to='/pets'> Cancel </Link>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default NewPet;